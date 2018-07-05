exports.main = (event, context) => {
    let { userInfo, a, b} = event
    let { openId, appId} = userInfo // 这里获取到的 openId 和 appId 是可信的
    let sum = a + b
  
    return {
      openId,
      appId,
      sum
    }
  }