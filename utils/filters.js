export function getCookie(Name) {
  var search = Name + "="; //查询检索的值
  var returnvalue = ""; //返回值
  if (document.cookie) {
    if (document.cookie.length > 0) {
      let sd = document.cookie.indexOf(search);
      if (sd != -1) {
        sd += search.length;
        let end = document.cookie.indexOf(";", sd);
        if (end == -1) end = document.cookie.length;
        //unescape() 函数可对通过 escape() 编码的字符串进行解码。
        returnvalue = unescape(decodeURI(document.cookie.substring(sd, end)));
      }
    }
  }
  return returnvalue;
}
export function parseParams(data) {
  try {
    var tempArr = [];
    for (var i in data) {
      var key = encodeURIComponent(i);
      var value = encodeURIComponent(data[i]);
      tempArr.push(key + '=' + value);
    }
    var urlParamsStr = tempArr.join('&');
    return urlParamsStr;
  } catch (err) {
    return '';
  }
}
export function objToArr(obj) {
  var arr = [];
  for (var i in obj) {
    var newObj = {};
    newObj[i] = obj[i];
    arr.push(newObj)
  }
  return arr;
}
export function formatNum(num, format = '0,0', denominator = 1) {
  return numeral(num / denominator).format(format)
}
export function verifyNumber(email) {
  let pattern = /^\+?[1-9]\d*$/
  return pattern.test(email)
}
export function verifyUrl(email) {
  let pattern = /(http|https):\/\/([\w.]+\/?)\S*/
  return pattern.test(email)
}
export function verifyAngel(email) {
  let pattern = /^\+?[0-9]\d*$/
  return pattern.test(email)
}
export function verifyPhoneCode(email) {
  let pattern = /^\+?[0-9]\d{1,4}$/
  return pattern.test(email)
}
export function verifyPassport(email) {
  let pattern = /^1[45][0-9]{7}|([P|p|S|s]\d{7})|([S|s|G|g]\d{8})|([Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8})|([H|h|M|m]\d{8，10})$/
  return pattern.test(email)
}
export function verifyIDCard15(email) {
  let pattern = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$/
  return pattern.test(email)
}
export function verifyIDCard(email) {
  let pattern = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/
  return pattern.test(email)
}
export function verifyHKMAKAO(email) {
  let pattern = /^[a-zA-Z]{1}([0-9]{11}|[0-9]{10}|[0-9]{8})$/
  return pattern.test(email)
}
export function verifyHukou(email) {
  let pattern = /^[a-zA-Z0-9]{3,21}$/
  return pattern.test(email)
}
export function verifyArmy(email) {
  let pattern = /[\u4e00-\u9fa5](字第){1}(\d{4,8})(号?)$/
  return pattern.test(email)
}
export function verifyLicsence(email) {
  let pattern = /(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/
  return pattern.test(email)
}
export function verifyZuZhi(email) {
  let pattern = /^[a-zA-Z0-9]{8}-[a-zA-Z0-9]/
  return pattern.test(email)
}
export function verifyTAIWAN1(email) {
  let pattern = /^[0-9]{8}$/
  return pattern.test(email)
}
export function verifyTAIWAN2(email) {
  let pattern = /^[0-9]{10}$/
  return pattern.test(email)
}
export function verifyZipCode(email) {
  let pattern = /^[0-9]{6}$/
  return pattern.test(email)
}
export function verifyTel(tel) {
  let pattern = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
  return pattern.test(tel)
}
export function verifyEmail(email) {
  let pattern = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
  return pattern.test(email)
}
export function verifyMobile(email) {
  let pattern = /^1[34578]\d{9}$/
  return pattern.test(email)
}
export function verifyXCode(email) {
  let pattern = /\d{15}|\d{19}/
  return pattern.test(email)
}
export function verifyNtshrCode(email) {
  let pattern = /^[a-zA-Z0-9]{10,20}$/
  return pattern.test(email)
}