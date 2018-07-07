import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import Avatar from '../../components/avatar/index'

import { add, minus, asyncAdd } from '../../actions/counter'
import { setUserInfo, setUserInfoList } from '../../actions/session'
import * as Const from '../../utils/const'

@connect(({ counter, session }) => ({
  counter,
  session
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  },
  setUserInfo(userInfo) {
    dispatch(setUserInfo(userInfo))
  },
  setUserInfoList(list) {
    dispatch(setUserInfoList(list))
  }
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '梧桐树下Plus'
  }

  componentWillMount() {
  }

  fetchUserInfoList() {
    const db = wx.cloud.database()
    const member_info = db.collection('member_info')
    //取状态是2的用户数据，即审核通过的
    return member_info.where({
      state: Const.REG_STATUS_2
    }).get().then(result => {
      console.log('======', result);
      this.props.setUserInfoList(result.data);
    })
  }

  onGetUserInfo(e) {
    console.log(e.detail.userInfo)
    this.props.setUserInfo(e.detail.userInfo)
  }

  onClick() {
    //跳转页面，但是不能跳转到tabBar页面
    //跳转tabBar页面，使用switchTab
    console.log('lalalal')
    //Taro.navigateTo({url: '/pages/me/index'})
    Taro.switchTab({
      url: '/pages/me/index'
    })
  }

  render () {
    const { userInfo, regInfo, userInfoList } = this.props.session;
    // 如果授权通过了并且没有拉取过成员列表，则拉取成员列表
    if(Const.REG_STATUS_2 == regInfo.state && !userInfoList) {
      this.fetchUserInfoList();
    }
    //isLoading必须是布尔值
    let isLoading = !!(userInfo.loading || regInfo.loading);
    if(isLoading) {
      wx.showLoading({
        title: '拼命加载中...'
      });
    } else {
      wx.hideLoading();
      wx.showTabBar();
    }
    // userInfo值为-1表示用户没有授权使用个人信息
    let isNotAuth = -1 === userInfo;
    if(isNotAuth || isLoading) {
      wx.hideTabBar();
    } else {
      wx.showTabBar();
    }
    
    if(isLoading) {
      return null;
    }
    
    if(isNotAuth) {
      return (
        <View>
          <View>
            <Button openType="getUserInfo" size="mini" onGetUserInfo={this.onGetUserInfo.bind(this)}>进入新世界</Button>
          </View>
        </View>
      )
    }

    return (
      <View>
        <View>
          <Avatar src={userInfo.avatarUrl} />
          <Button size="mini" onClick={this.onClick.bind(this)}>打开新页面</Button>
        </View>
      </View>
    )
    
    /*
    return -1 === userInfo ? <View>
      <Button openType="getUserInfo" size="mini" onGetUserInfo={this.onGetUserInfo.bind(this)}>进入新世界</Button>
    </View> : <View>
      
      <Button size="mini" onClick={this.onClick.bind(this)}>打开新页面</Button>
    </View>;
    */
    /*return (
      <View className='todo'>
        <button open-type="getUserInfo">授权</button>
        <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
        <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
        <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
        <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
        <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
        <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
        <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
        <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
        <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
        <Avatar count="7" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" />
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View>{this.props.counter.num}</View>
      </View>
    )
    */
  }
}