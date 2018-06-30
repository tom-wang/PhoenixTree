import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import configStore from './store'
import Index from './pages/index'
import { setCode } from './actions/session'

import './app.scss'

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {
    //1.判断登录态是否已经过期
    //2.获取code，每次进入小程序code都是不一样的
    //3.将code传给小程序后台，后台调用微信接口获取openid、session_key
    //4.后台根据openid、session_key生成自身的登录态，返回给前端
    //5.前端使用store将自身登录态设置后，方面后续的页面使用
    store.dispatch(setCode('xxxyyy'));
    wx.checkSession({
      success() {
        //没有过期
        console.log('success');
      },
      fail() {
        //过期了
        console.log('fail');
        wx.login({
          success(res) {
            console.log(res);
            if(res.code) {
              
            } else {
    
            }
          }
        })
      }
    });
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
