import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
//import Avatar from '../avatar/index'

let _config = {}
_config.TYPES = [{
    icon: 'https://s10.mogucdn.com/p2/161213/upload_57bl76e9010115f3fj1d2k1kj5l4b_44x44.png',
    text: '再看点别的？'
}, {
    icon: 'https://s10.mogucdn.com/p2/161213/upload_6c4a17j86gb0lh9hba01i464fkie2_44x44.png',
    text: '哎呀都看完了'
}, {
    icon: 'https://s10.mogucdn.com/p2/161213/upload_1iddk17bfe1k4257f207i467f21e8_44x44.png',
    text: '叽~木有啦'
}, {
    icon: 'https://s10.mogucdn.com/p2/161213/upload_2e6ig5fb6k773l546a9gj8g2k7bfg_44x44.png',
    text: '哎一古~刷完了'
}, {
    icon: 'https://s10.mogucdn.com/p2/161213/upload_124lgj5ji1h9f3ci0bdbe5k4gf1kk_44x44.png',
    text: '没有了呢'
}, {
    icon: 'https://s10.mogucdn.com/p2/161213/upload_1122hdalb10h08kbiehd344fj6j1k_44x44.png',
    text: '汪~木有啦'
}];

_config.IconType = {
    HIDDEN: -1,
    SHOW_DEFAULT: 1,
    SHOW_CONFIG: 2
};
export default class LoadMore extends Component {
    static defaultProps = {
        text: '',
        isEnd: false,
        icon: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            type: _config.TYPES[Math.floor(Math.random() * _config.TYPES.length)],
            iconStatus: _config.IconType.HIDDEN,
            iconType: _config.IconType
        };
    }
    
    onClick(event) {
        var detail = event.detail;
        var option = {};
        console.log(detail);
    }

    render() {
        const { isEnd, text, icon } = this.props;
        const { type, iconType, iconStatus } = this.state;
        let isEndBool = !!isEnd;
        let isShow = !!(iconStatus && iconType);
        let isImage1Show = !!(!text && iconStatus === iconType.HIDDEN);
        let isImage2Show = !!(iconStatus === iconType.SHOW_DEFAULT);
        let isImage3Show = !!(iconStatus === iconType.SHOW_CONFIG);
        let isDefaultStatus = iconStatus === iconType.SHOW_DEFAULT;
        let isConfigStatus = iconStatus === iconType.SHOW_CONFIG
        return (
        <View className="loadmore">
            { isEndBool ? <block>
                <View className="loadmore__line"></View>
                { isImage1Show && <Image className="loadmore__icon" src={type.icon} mode="aspectFill"></Image> }
                { isImage2Show && <Image className="loadmore__icon" src={type.icon} mode="aspectFill"></Image> }
                { isImage3Show && <Image className="loadmore__icon" src={icon} mode="aspectFill"></Image> }
                <Text className="loadmore__text">{ text || type.text }</Text>
                <View className="loadmore__line"></View>
            </block> :
            <View className="loadmore__wrap">
                { isDefaultStatus && <View className="loadmore__loading-icon"></View> }
                { isConfigStatus && <Image className="loadmore__icon" src={icon} mode="aspectFill"></Image> }
                <Text class="loadmore__loading-text">{text || '加载中...'}</Text>
            </View> }
        </View>
        );
    }
}