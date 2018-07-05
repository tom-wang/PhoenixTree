import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class wxcFlex extends Component {
    onClick(event) {
        console.log(event);
        //var detail = event.detail;
        //var option = {};
        //this.triggerEvent('click', detail, option);
    }

    render() {
        let {dir, main, cross, wrap} = this.props;
        let className = `flex dir--${dir} main--${main} cross--${cross} wrap--${wrap}`;
        return (
            <View onClick={ths.onClick.bind(this)} className={className}>
                hello wxcFlex!
            </View>
        )
    }
}