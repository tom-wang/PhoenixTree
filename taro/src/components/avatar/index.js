import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Avatar extends Component {
    static defaultProps = {
        src: '',
        mold: 'circle'
    }

    onClick(event) {
        console.log(event);
        //var detail = event.detail;
        //var option = {};
        //this.triggerEvent('click', detail, option);
    }

    render() {
        let {src, mold} = this.props;
        let isValidSrc = !!src;
        return <View className="avatar" onClick={this.onClick.bind(this)}>
                { isValidSrc && <view class={`avatar__pic avatar__mold--${mold}`} style={`background-image: url(${src}); background-repeat: no-repeat; background-position: center center; background-size: cover`}></view> }
            </View>;
    }
}