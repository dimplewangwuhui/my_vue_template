// import moment from 'moment'
export default {
  // 模型转换
  momI (o, m) {
    let newDto = {}
    for (let i in o) {
      let s = o[i]
      for (let j in s) {
        newDto[s[j]] = i
      }
    }
    let lists = []
    for (let e of m) {
      let lisInfo = {}
      for (let d in newDto) {
        for (let e1 in e) {
          if (e1 === newDto[d]) {
            lisInfo[d] = e[e1]
          } else {
            lisInfo[e1] = e[e1]
          }
        }
      }
      lists.push(lisInfo)
    }
    return lists
  },

  // // 时间戳格式化
  formatDate (value) {
    if (value != null) {
      return moment(value).format('YYYY-MM-DD HH:mm')
    } else {
      return value
    }
  },

  // 删除url参数
  delUrlArg (url, arg) {
    url = url || ''
    var urlParam = url.substr(url.indexOf('?') + 1)
    var beforeUrl = url.substr(0, url.indexOf('?'))
    var nextUrl = ''
    var arr = []
    if (urlParam) {
      var urlParamArr = urlParam.split('&')
      for (var i = 0; i < urlParamArr.length; i++) {
        var paramArr = urlParamArr[i].split('=')
        if (paramArr[0] !== arg) {
          arr.push(urlParamArr[i])
        }
      }
    }
    if (arr.length > 0) {
      nextUrl = '?' + arr.join('&')
    }
    return beforeUrl + nextUrl
  },

  // 替换值
  /* eslint-disable */
  changeUrlArg (url, arg, val) {
    url = url || ''
    var pattern = arg + '=([^&]*)'
    var replaceText = arg + '=' + val
    return url.match(pattern) ? url.replace(eval('/(' + arg + '=)([^&]*)/gi'), replaceText) : (url.match('[\?]') ? url + '&' + replaceText : url + '?' + replaceText)
  },

  /* eslint-enable */
  toJS (data) {
    if (arguments.length < 1 || !data) return null
    if (data instanceof Error) {
      return data
    } else if (typeof data === 'object') {
      for (let i in data) {
        let s = data[i]
        if (typeof s === 'string') {
          s = s.replace(/(^\s+)|(\s+$)/g, '')
          if (s.substring(0, 1) === '{' || s.substring(0, 1) === '[') s = this.toJS(s)
        }
        data[i] = s
      }
      return data
    }
    if (typeof data !== 'string') return data
    data = data.replace(/(^\s+)|(\s+$)/g, '') // 去掉前后空格
    if (data.substring(0, 1) !== '{' && data.substring(0, 1) !== '[') data = '{' + data + '}'
    /*eslint-disable */
    try {
      return (new Function('return ' + data))()
    } catch (e) {}
    /*eslint-enable */
    return null
  },
}
