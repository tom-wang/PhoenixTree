//toast提示
export function toast(title) {
    wx.showToast({
        title,
        icon: 'none'
    })
}

export function error(title) {
    wx.showToast({
        title,
        icon: 'loading'
    })
}

export function success(title) {
    wx.showToast({
        title,
        icon:'success'
    })
}