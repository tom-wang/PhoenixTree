import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import configStore from './store'
import Index from './pages/index'
import { setCode, setUserInfo } from './actions/session'

import './app.scss'

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/me/index'
    ],
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '通讯录'
        },
        {
          pagePath: 'pages/me/index',
          text: '我'
        }
      ]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  //会编译成onLaunch
  componentWillMount() {
    this.login().then(() => {
      wx.cloud.init();
      this.getCurrentUserInfo();
      this.getUserInfoList();
    }).catch(() => {
      console.log(arguments);
      console.log('catch');
    });
  }

  // getUserInfo需要授权
  getCurrentUserInfo() {
    wx.getUserInfo({
      withCredentials: true,
      success(res) {
        store.dispatch(setUserInfo(res.userInfo))
        console.log(res)
      },
      fail(res) {
        store.dispatch(setUserInfo(-1))
        console.log(res)
      }
    });
  }

  // 只有登录后才能调用云函数和getUserInfo接口
  login() {
    //1.判断登录态是否已经过期
    //2.获取code，每次进入小程序code都是不一样的
    //3.将code传给小程序后台，后台调用微信接口获取openid、session_key
    //4.后台根据openid、session_key生成自身的登录态，返回给前端
    //5.前端使用store将自身登录态设置后，方面后续的页面使用
    //store.dispatch(setCode('xxxyyy'));
    return new Promise((resolve, reject) => {
      wx.checkSession({
        success() {
          //没有过期
          console.log('success');
          resolve();
        },
        fail() {
          //过期了
          console.log('fail');
          wx.login({
            success(res) {
              console.log(res);
              resolve(res);
              if(res.code) {
                
              } else {
      
              }
            },
            fail() {
              console.log(arguments);
              reject();
            }
          })
        }
      });
    })
  }

  getUserInfoList() {
    //调用云函数
    wx.cloud.callFunction({
      // 需调用的云函数名
      name: 'add',
      // 传给云函数的参数
      data: {
        a: 12,
        b: 19,
      },
      // 成功回调
      complete: console.log
    });
    //调用云DB
    const db = wx.cloud.database()
    const member_info = db.collection('member_info')
    /*
    添加
    member_info.add({
      data: {
        tel: '15811800344',
        insert_time: Date.now(),
        update_time: Date.now(),
      }
    }).then(res => {
      // 可以通过 res._id 获取创建的记录的 id
      console.log(res)
    })
    */
  }

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
