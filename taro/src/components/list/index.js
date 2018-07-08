import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
//import Avatar from '../avatar/index'

export default class List extends Component {
    static defaultProps = {
        title: '',
        detail: '',
        desc: '',
        icon: '',
        iconColor: '#ff5077',
        src: '',
        dot: false,
        dotColor: '#f5123e',
        arrow: true,
        mode: 'normal'
    }

    onClick(event) {
        var detail = event.detail;
        var option = {};
        console.log(detail);
    }

    render() {
        const { mode, src, title, detail, dot, dotColor, desc } = this.props;
        let isValidSrc = !!src;
        let isValidDetail = !!detail;
        let isValidDot = !!dot;
        let isValidDesc = !!desc;
        return (
        <View className={`list__body list__${mode}`} onClick={this.onClick.bind(this)}>
            { isValidSrc && <Image class="list__image" src={src} mode="aspectFill"></Image> }
            <View className="list__title">
                <View className="list__title--main">{title}</View>
                { isValidDetail && <View class="list__title--sub">{detail}</View> }
            </View>
            { isValidDot && <View style={`background: ${dotColor}`} className="list__desc--dot"></View> }
            { isValidDesc && <View className="list__desc--text">{desc}</View> }
            <View class="icon icon--more" style="font-size:30rpx; color:#c2c2c2"></View>
        </View>
        );
    }
}

//<wxc-icon wx:if="{{!src && icon}}" class="list__icon" size="38" type="{{icon}}" color="{{iconColor}}" _pid="{{_pid}}"></wxc-icon>
//<wxc-icon wx:if="{{arrow}}" class="list__desc--arrow" type="arrow-right" size="30" color="#c2c2c2" _pid="{{_pid}}"></wxc-icon>
//<slot wx:if="{{!desc}}"></slot>