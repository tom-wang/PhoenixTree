import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import List from '../../components/list/index'
import LoadMore from '../../components/loadmore/index'
import TipsComponent from '../../components/tipsComponent/index'

import { add, minus, asyncAdd } from '../../actions/counter'
import { setUserInfo, setUserInfoList, loadRegInfo } from '../../actions/session'
import * as Const from '../../utils/const'
import { error } from '../../utils/index'
import '../../static/leaf.png'

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
  },
  laodRegInfo() {
    dispatch(loadRegInfo())
  }
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '梧桐树下Plus'
  }

  componentWillMount() {
    console.log('onLoad');
  }

  onShareAppMessage() {
    let titleList = [
      '在这个小程序里找手机号码很方便呢',
      '我的手机号共享在这个小程序里，你也来吧',
      '朋友，有空联系，喝一杯'
    ]
    return {
      title: titleList[Math.floor(Math.random() * titleList.length)]
    }
  }

  componentDidShow(e) {
    console.log('on show', e);
    this.fetchUserInfoList();
    // 这样每次显示的时候，就会触发render
    /*
    this.setState({
      rand: Math.random()
    })
    */
  }

  fetchUserInfoList() {
    const db = wx.cloud.database()
    const member_info = db.collection('member_info')
    //取状态是2的用户数据，即审核通过的
    return member_info.where({
      state: Const.REG_STATUS_2,
      authorized: 1
    }).get().then(result => {
      console.log('======', result);
      this.props.setUserInfoList(result.data);
    })
  }

  onGetUserInfo(e) {
    console.log(e)
    if(e.detail.userInfo) {
      this.props.setUserInfo(e.detail.userInfo)
    } else {
      error('授权失败')
    }
  }

  onClick(e) {
    //填写信息按钮点击
    wx.switchTab({
      url: '/pages/me/index'
    })
  }

  render () {
    console.log('index render');
    let { userInfo, regInfo, userInfoList, userInfoLoading, regInfoLoading, hasReg } = this.props.session;
    // 如果授权通过了并且没有拉取过成员列表，则拉取成员列表
    if(Const.REG_STATUS_2 == regInfo.state && !userInfoList) {
      this.fetchUserInfoList();
    }
    //isLoading必须是布尔值
    let isLoading = !!(userInfoLoading || regInfoLoading);
    if(isLoading) {
      wx.showLoading({
        title: '拼命加载中...'
      });
    } else {
      wx.hideLoading();
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
      userInfo = {
        avatarUrl: '/static/leaf.png'
      }
    }
    if(isNotAuth) {
      return (
        <View>
          <TipsComponent userInfo={userInfo} msg={["“梧桐树下Plus”需要用到你的公开信息", '点击授权按钮并同意授权']} />
          <View className="btn-container">
            <Button openType="getUserInfo" lang="zh_CN" className="btn btn__size--large" onGetUserInfo={this.onGetUserInfo.bind(this)}>授权</Button>
          </View>
        </View>
      )
    }

    if(!hasReg) {
      return (
        <View>
          <TipsComponent userInfo={userInfo} msg={["前世回眸才换来今生相识", "快来填写你的信息吧"]} />
          <View className="btn-container">
            <Button className="btn btn__size--large" onClick={this.onClick.bind(this)}>填写</Button>
          </View>
        </View>
      )
    }

    let isNotAuthorized = regInfo.state != Const.REG_STATUS_2;
    if(isNotAuthorized) {
      return (
        <View>
          <TipsComponent userInfo={userInfo} msg={["资料审核中..."]} />
          <View className="btn-container">
            <Button className="btn btn__size--large" onClick={this.onClick.bind(this)}>修改资料</Button>
          </View>
        </View>
      )
    }

    let msg = [];
    return (
      <View>
        <TipsComponent userInfo={userInfo} msg={msg} />
        <View>
          <List userInfoList={userInfoList} regInfo={regInfo} />
          <LoadMore isEnd={true} />
        </View>
      </View>
    )
  }
}