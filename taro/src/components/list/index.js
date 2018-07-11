import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
//import Avatar from '../avatar/index'

export default class List extends Component {
    static defaultProps = {
        detail: '',
        desc: '',
        icon: '',
        iconColor: '#ff5077',
        dot: false,
        dotColor: '#f5123e',
        arrow: true,
        mode: 'normal'
    }

    onClick(item, event) {
        var detail = event.detail;
        var option = {};
        console.log(event, item);
        //呼叫电话
        wx.makePhoneCall({
            phoneNumber: item.tel //仅为示例，并非真实的电话号码
        })
    }

    render() {
        const { mode, detail, dot, dotColor, desc, userInfoList } = this.props;
        let isValidDetail = !!detail;
        let isValidDot = !!dot;
        let isValidDesc = !!desc;
        return (
        <View>
            { (userInfoList || []).map(item => {
                let title = item.chineseName || item.nickName;
                let src = item.avatarUrl;
                let isValidSrc = !!src;
                return (
                    <View className={`list__body list__${mode}`} onClick={this.onClick.bind(this, item)}>
                        { isValidSrc && <Image class="list__image" src={src} mode="aspectFill"></Image> }
                        <View className="list__title">
                            <View className="list__title--main">{title}</View>
                            { isValidDetail && <View class="list__title--sub">{detail}</View> }
                        </View>
                        { isValidDot && <View style={`background: ${dotColor}`} className="list__desc--dot"></View> }
                        { isValidDesc && <View className="list__desc--text">{desc}</View> }
                        <View class="icon icon--more" style="font-size:30rpx; color:#c2c2c2"></View>
                    </View>
                )
            }) }
        </View>
        );
    }
}