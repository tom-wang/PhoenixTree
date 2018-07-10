import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'
import './index.scss'

export default class InputComponent extends Component {
    static defaultProps = {
        title: '',
        src: '',
        icon: '',
        iconColor: '',
        mode: 'normal',
        right: false,
        error: false,
        value: '',
        type: 'text',
        password: false,
        placeholder: '',
        placeholderStyle: '',
        disabled: false,
        maxlength: 140,
        cursorSpacing: 0,
        focus: false,
        confirmType: 'done',
        confirmHold: false,
        cursor: 0,
        selectionStart: -1,
        selectionEnd: -1,
        adjustPosition: true
    }

    onInput(event) {
        var detail = event.detail;
        var option = {};
        console.log(event);
    }

    onFocus(event) {
        var detail = event.detail;
        var option = {};
        console.log(event);
    }

    onBlur(event) {
        var detail = event.detail;
        var option = {};
        console.log(event);
    }

    onConfirm(event) {
        var detail = event.detail;
        var option = {};
        console.log(event);
    }

    render() {
        const { mode, error, title, src, icon, iconColor } = this.props;
        const { right, value, type, password, placeholder, placeholderStyle, disabled, maxlength,
        cursorSpacing, focus, confirmType, confirmHold, cursor, selectionStart, selectionEnd,
        adjustPosition } = this.props;
        let isValidTitle = !!title;
        let isImageShow = !!(!title && src);
        let isIconShow = !!(!title && !src && icon);
        return (
        <View className="input">
            <View className={`input__combine input__${mode} ` + (error ? 'input__error' : '')}>
                { isValidTitle && <View className="input__label">{title}</View> }
                { isImageShow && <Image class="input__icon" mode="aspectFit" src={src}></Image> }
                { isIconShow && <View className={`icon input__icon icon--${icon}`} style={`font-size:38rpx; color:${iconColor}`}></View> }
                <Input 
                    className={`input__form ` + (right ? 'input__right' : '')} 
                    value={value} 
                    type={type} 
                    password={password} 
                    placeholder={placeholder} 
                    placeholderStyle={placeholderStyle} 
                    placeholderClass="input__placeholder" 
                    disabled={disabled} 
                    maxlength={maxlength} 
                    cursorSpacing={cursorSpacing} 
                    focus={focus} 
                    confirmType={confirmType} 
                    confirmHold={confirmHold} 
                    cursor={cursor} 
                    selectionStart={selectionStart} 
                    selectionEnd={selectionEnd} 
                    adjustPosition={adjustPosition} 
                    onInput={this.onInput.bind(this)} 
                    onFocus={this.onFocus.bind(this)} 
                    onBlur={this.onBlur.bind(this)} 
                    onConfirm={this.onConfirm.bind(this)}></Input>
            </View>
        </View>
        );
    }
}