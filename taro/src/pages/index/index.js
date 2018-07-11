import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import Avatar from '../../components/avatar/index'
import List from '../../components/list/index'
import LoadMore from '../../components/loadmore/index'
import TipsComponent from '../../components/tipsComponent/index'

import { add, minus, asyncAdd } from '../../actions/counter'
import { setUserInfo, setUserInfoList } from '../../actions/session'
import * as Const from '../../utils/const'
import { error } from '../../utils/index'

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

  onPullDownRefresh() {
    this.fetchUserInfoList().then(() => {
      wx.stopPullDownRefresh()
    })
  }

  onShareAppMessage() {
    return {
      title: '同学，有空来喝一杯！'
    }
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
    console.log(e)
    if(e.detail.userInfo) {
      this.props.setUserInfo(e.detail.userInfo)
    } else {
      error('授权失败')
    }
  }

  render () {
    const { userInfo, regInfo, userInfoList, userInfoLoading, regInfoLoading } = this.props.session;
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
      return (
        <View>
          <TipsComponent userInfo={userInfo} msg={["使用该小程序需要得到你的许可", '我们确保不会侵犯你的隐私']} />
          <View className="btn-container">
            <Button openType="getUserInfo" className="btn btn__size--large" onGetUserInfo={this.onGetUserInfo.bind(this)}>授权</Button>
          </View>
        </View>
      )
    }

    return (
      <View>
        <View>
          <List userInfoList={userInfoList} />
          <LoadMore isEnd={true} />
        </View>
      </View>
    )
  }
}