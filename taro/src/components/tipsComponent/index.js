import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Avatar from '../avatar/index'
import './index.scss'

export default class TipsComponent extends Component {
    static defaultProps = {
        msg: [],
        userInfo: {}
    }
  
    render() {
      const { msg, userInfo } = this.props;
      if(userInfo && userInfo.nickName) {
          msg.unshift(userInfo.nickName);
      }
      return (
        <View className="container">
            <View className="avatar-container">
                <Avatar src={userInfo.avatarUrl} />
            </View>
            { msg.map(item => {
                return (<View className="msg-container">{item}</View>)
            }) }
        </View>
      )
    }
  }