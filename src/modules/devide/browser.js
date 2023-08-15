/**
 * @description: 获取浏览器类型和版本，只能在浏览器中使用。
 * @param  {  object} navigator.userAgent;
 * @return { String } 浏览器类型和版本。
 */

const browser = () => {
	const uAgent = navigator.userAgent

	return {
		trident: uAgent.indexOf('Trident') > -1, // IE
		presto: uAgent.indexOf('Presto') > -1, // opera
		webKit: uAgent.indexOf('AppleWebKit') > -1, // 苹果、谷歌
		gecko: uAgent.indexOf('Gecko') > -1 && uAgent.indexOf('KHTML') === -1, // 火狐
		mobile: !!uAgent.match(/AppleWebKit.*Mobile.*/) || !!uAgent.match(/AppleWebKit/), // 移动端
		ios: !!uAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios
		android: uAgent.indexOf('Android') > -1 || uAgent.indexOf('Linux') > -1, // android或者uc
		iPhone: uAgent.indexOf('iPhone') > -1 || uAgent.indexOf('Mac') > -1, // iPhone或者QQHD
		iPad: uAgent.indexOf('iPad') > -1, // iPad
		webApp: uAgent.indexOf('Safari') === -1 // web应该程序，没有头部与底部
	}
}

export default browser

/** 用法
 *   import { browser } from 'jtoolset'
 *   console.log(browser())
 */
