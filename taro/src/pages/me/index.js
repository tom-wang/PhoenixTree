import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import Avatar from '../../components/avatar/index'

import { add, minus, asyncAdd } from '../../actions/counter'
import { setUserInfo } from '../../actions/session'

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
  }
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '梧桐树下Plus'
  }

  onGetUserInfo(e) {
    console.log(e.detail.userInfo)
    this.props.setUserInfo(e.detail.userInfo)
  }

  render () {
    const { userInfo } = this.props.session;
    return -1 === userInfo ? <View>
      <Button openType="getUserInfo" size="mini" onGetUserInfo={this.onGetUserInfo.bind(this)}>进入新世界</Button>
    </View> : <View>
      <Avatar count="7" src={userInfo.avatarUrl} />
    </View>;
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