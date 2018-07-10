import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import Avatar from '../../components/avatar/index'
import InputComponent from '../../components/inputComponent/index'

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
    const { userInfo, regInfo } = this.props.session;
    const genderConst = ['未知', '男', '女'];
    let chineseName = regInfo.chineseName || '';
    let gender = genderConst[regInfo.gender || userInfo.gender];
    let city = regInfo.city || userInfo.city || '未知';
    let tel = regInfo.tel || '';
    return (
      <View className="container">
        <View>
          <Avatar src={userInfo.avatarUrl} />
        </View>
        <View className="input-wrap">
          <InputComponent type="text" title="姓名" placeholder="中文全名" value={chineseName}></InputComponent>
          <InputComponent type="text" title="性别" placeholder="性别" value={gender}></InputComponent>
          <InputComponent type="text" title="城市" placeholder="常住地城市" value={city}></InputComponent>
          <InputComponent type="number" title="手机" placeholder="请输入手机号" value={tel}
          src="https://s10.mogucdn.com/mlcdn/c45406/171025_7abllhkc011ka5kici7532af6202g_28x40.png"
          maxlength="11"
          ></InputComponent>
        </View>
      </View>
    )
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