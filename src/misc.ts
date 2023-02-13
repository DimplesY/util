/**
 * @category Misc
 *
 * 执行数组里的函数
 */
export const invokeArrayFns = (fns: Function[], arg?: any) => {
  for (let i = 0; i < fns.length; i++)
    fns[i](arg)
}

/**
 * @category Misc
 *
 * 字符串哈希
 */
export const stringHash = (str: string): number => {
  let hash = 5381
  let i = str.length

  while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i)
  return hash >>> 0
}

/**
 * @category Misc
 *
 * uuid
 */
export const uuid = (): string => {
  return Array.from({ length: 16 }, () =>
    Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, '0'),
  ).join('')
}

// https://github.com/ai/nanoid/blob/main/non-secure/index.js
const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

/**
 * @category Misc
 *
 * nanoid
 */
export const nanoid = (defaultSize = 21, alphabet = urlAlphabet) => {
  let id = ''
  // A compact alternative for `for (var i = 0; i < step; i++)`.
  let i = defaultSize
  while (i--) {
    // `| 0` is more compact and faster than `Math.floor()`.
    id += alphabet[(Math.random() * 64) | 0]
  }
  return id
}

/**
 * @category Misc
 *
 * 手机号码中间4位隐藏星号
 */
export function hideMobile(mobile: string) {
  return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
}

/**
 * @category Misc
 *
 * 键值对拼接成URL参数
 */
export const params2Url = (obj: Object) => {
  const params = []
  for (const key in obj)
    params.push(`${key}=${obj[key]}`)

  return encodeURIComponent(params.join('&'))
}

/**
 * @category Misc
 *
 * 将总秒数转换成 时:分:秒
 */
export const seconds2Time = (seconds: number) => {
  const hour = Math.floor(seconds / 3600)
  const minute = Math.floor((seconds - hour * 3600) / 60)
  const second = seconds - hour * 3600 - minute * 60
  return `${fillZero(hour)}:${fillZero(minute)}:${fillZero(second)}`
}

/**
 * @category Misc
 *
 * 将总秒数转换成 日:时:分:秒
 */
export const seconds2DayTime = (seconds: number) => {
  const day = Math.floor(seconds / 86400)
  const hour = Math.floor((seconds - day * 86400) / 3600)
  const minute = Math.floor((seconds - day * 86400 - hour * 3600) / 60)
  const second = seconds - day * 86400 - hour * 3600 - minute * 60
  return `${fillZero(day)}:${fillZero(hour)}:${fillZero(minute)}:${fillZero(second)}`
}

/**
 * @category Misc
 *
 * 填充0
 */
function fillZero(num: number) {
  /**
   * ES6 字符串补全
   * padStart：返回新的字符串，表示用参数字符串从头部（左侧）补全原字符串。
   * padEnd：返回新的字符串，表示用参数字符串从尾部（右侧）补全原字符串。
   * 以上两个方法接受两个参数，
   * 第一个参数是指定生成的字符串的最小长度，
   * 第二个参数是用来补全的字符串。如果没有指定第二个参数，默认用空格填充。
   * @link https://www.runoob.com/w3cnote/es6-string.html
   */
  return num.toString().padStart(2, '0')
}

/**
 * @category Misc
 *
 * 下载文件
 *
 * @example downloadFile('http://www.baidu.com/img/bd_logo1.png', 'logo.png')
 */
export function download(link: string, name?: string) {
  if (!name)
    name = link.slice(link.lastIndexOf('/') + 1)

  const eleLink = document.createElement('a')
  eleLink.download = name
  eleLink.style.display = 'none'
  eleLink.href = link
  document.body.appendChild(eleLink)
  eleLink.click()
  document.body.removeChild(eleLink)
}

/**
 * @category Misc
 *
 * 浏览器下载静态文件
 *
 * @example downloadFile('1.json',JSON.stringify({name:'hahahha'}))
 * @example downloadFile('1.json',new Blob([ data ]))
 */
export function downloadFile(name: string, content: any) {
  if (typeof name == 'undefined')
    throw new Error('The first parameter name is a must')

  if (typeof content == 'undefined')
    throw new Error('The second parameter content is a must')

  if (!(content instanceof Blob))
    content = new Blob([content])

  const link = URL.createObjectURL(content)
  download(link, name)
}
