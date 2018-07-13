import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import List from '../../components/list/index'
import LoadMore from '../../components/loadmore/index'
import TipsComponent from '../../components/tipsComponent/index'

import { add, minus, asyncAdd } from '../../actions/counter'
import { setUserInfo, setUserInfoList, loadRegInfo, setIndexNeedReload } from '../../actions/session'
import * as Const from '../../utils/const'
import { error } from '../../utils/index'
//import '../../static/leaf.png'

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
  },
  setIndexNeedReload(val) {
    dispatch(setIndexNeedReload(val))
  }
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '梧桐树下Plus'
  }

  firstShow = true //表示是否是第一次显示，第一次显示之后每次显示都拉取一次列表

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
    let { indexNeedReload } = this.props.session;
    if(indexNeedReload) {
      this.fetchUserInfoList();
      this.props.setIndexNeedReload(false);
    }
    this.firstShow = false;
    // 这样每次显示的时候，就会触发render
    /*
    this.setState({
      rand: Math.random()
    })
    */
  }

  //对应onUnload
  componentWillUnmount() {
    console.log('======componentWillUnmount');
    this.props.setIndexNeedReload(true);
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
    let defaultUserInfo = {
      avatarUrl:'data:image/jpeg;base64,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'
    }
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
    /*
    if(isNotAuth) {
      userInfo = {
        avatarUrl: '../../static/leaf.png'
      }
    }
    */
    if(isNotAuth) {
      return (
        <View>
          <TipsComponent userInfo={defaultUserInfo} msg={["请先授权“梧桐树下Plus”使用部分信息"]} />
          <View className="btn-container">
            <Button openType="getUserInfo" lang="zh_CN" className="btn btn__size--large" onGetUserInfo={this.onGetUserInfo.bind(this)}>授权</Button>
          </View>
        </View>
      )
    }

    if(!hasReg) {
      return (
        <View>
          <TipsComponent userInfo={userInfo} msg={["填写信息后才能看其他人的信息哟"]} />
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