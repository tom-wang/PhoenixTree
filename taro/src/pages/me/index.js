import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Switch } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'
import './btn.scss'
import Avatar from '../../components/avatar/index'
import InputComponent from '../../components/inputComponent/index'

import { add, minus, asyncAdd } from '../../actions/counter'
import { setUserInfo, setRegInfo, setHasReg } from '../../actions/session'
import { toast, error, success } from '../../utils/index'
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
  setRegInfo(regInfo) {
    dispatch(setRegInfo(regInfo))
  },
  setHasReg(hasReg) {
    dispatch(setHasReg(hasReg))
  }
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '梧桐树下Plus'
  }

  constructor(props) {
    //页面constructor执行是比较早的，不能依赖这里的props来设置state
    super(props);
    this.state = {
      chineseName: '',
      gender: '',
      city: '',
      tel: '',
      authorized: 1
    }
  }

  componentWillMount() {
    const { userInfo, regInfo } = this.props.session;
    const genderConst = ['', '男', '女'];
    let chineseName  = regInfo.chineseName || '';
    let gender;
    if(regInfo && regInfo.gender) {
      gender = regInfo.gender;
    } else {
      genderConst[regInfo.gender || userInfo.gender];
    }
    let city  = regInfo.city || userInfo.city || '';
    let tel  = regInfo.tel || '';
    let authorized = regInfo.authorized || 1;
    this.setState({
      chineseName,
      gender,
      city,
      tel,
      authorized
    })
  }

  onSubmit() {
    let { hasReg } = this.props.session;
    if(!this.checkInfo()) return;
    if(hasReg) {
      this.updateInfo();
    } else {
      this.addInfo();
    }
  }

  checkInfo() {
    let {
      chineseName,
      gender,
      city,
      tel,
      authorized
    } = this.state;
    if(!chineseName) {
      error('缺少姓名');
      return false;
    }
    if(-1 == ['男', '女'].indexOf(gender)) {
      error('错误的性别');
      return false;
    }
    if(!city) {
      error('缺少城市');
      return false;
    }
    if(!/^1(3|4|5|7|8)\d{9}$/.test(tel)) {
      error('错误的手机号');
      return false;
    }
    return true;
  }

  addInfo() {
    let {
      chineseName,
      gender,
      city,
      tel,
      authorized
    } = this.state;
    let { regInfo, userInfo } = this.props.session;
    let data = {
      ...userInfo,
      chineseName,
      gender,
      city,
      tel,
      authorized,
      insertTime: Date.now(),
      updateTime: Date.now()
    }
    this.insertOrUpdateDB(data, true);
  }

  insertOrUpdateDB(data, isInsert) {
    const db = wx.cloud.database()
    const member_info = db.collection('member_info')
    if(isInsert) {
      data = {...data, state:Const.REG_STATUS_1}
      member_info.add({
        data,
      }).then(res => {
        console.log(res)
        this.props.setRegInfo(data);
        this.props.setHasReg(true);
        success('提交成功，等待审核');
      }).catch(res => {
        toast('提交失败');
      });
    } else {
      member_info.doc(data._id).update({
        data,
      }).then(res => {
        console.log(res);
        this.props.setRegInfo(data);
        success('提交成功')
      }).catch(res => {
        toast('提交失败');
      })
    }
  }

  updateInfo() {
    let {
      chineseName,
      gender,
      city,
      tel,
      authorized
    } = this.state;
    let { regInfo, userInfo } = this.props.session;
    let data = {
      ...regInfo, 
      ...userInfo,
      chineseName,
      gender,
      city,
      tel,
      authorized,
      updateTime: Date.now()
    }
    this.insertOrUpdateDB(data);
  }

  onChange(event) {
    console.log(event);
    this.state.authorized = event.detail.value ? 1 : 0;
  }

  onInput(dataType, event) {
    console.log(dataType, event);
    this.state[dataType] = event.detail.value;
    /*
    this.setState({
      [dataType]: event.detail.value
    });
    */
  }

  render () {
    const { userInfo } = this.props.session;
    const { chineseName, gender, city, tel, authorized } = this.state;
    return (
      <View className="container">
        <View className="avatar-container">
          <Avatar src={userInfo.avatarUrl} />
        </View>
        <View className="nickname-container">{userInfo.nickName}</View>
        <View className="input-wrap">
          <InputComponent type="text" title="姓名" placeholder="中文全名" value={chineseName} onInput={this.onInput.bind(this, 'chineseName')}></InputComponent>
          <InputComponent type="text" title="性别" placeholder="性别" value={gender} onInput={this.onInput.bind(this, 'gender')}></InputComponent>
          <InputComponent type="text" title="城市" placeholder="常住地城市" value={city} onInput={this.onInput.bind(this, 'city')}></InputComponent>
          <InputComponent type="number" title="手机" placeholder="请输入手机号" value={tel}
          onInput={this.onInput.bind(this, 'tel')}
          src="https://s10.mogucdn.com/mlcdn/c45406/171025_7abllhkc011ka5kici7532af6202g_28x40.png"
          maxlength="11"
          ></InputComponent>
          <View className="input">
            <View className="input__combine input__normal">
              <View className="input__label">公开我的信息</View>
              <Switch type="switch" checked={authorized?true:false} color="#13227a" onChange={this.onChange.bind(this)}></Switch>
            </View>
          </View>
        </View>
        <View className="btn-container">
          <Button className="btn btn__size--large" onClick={this.onSubmit.bind(this)}>提交</Button>
        </View>
      </View>
    )
  }
}