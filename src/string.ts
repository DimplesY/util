const camelizeRE = /-(\w)/g
/**
 * @category String
 *
 * 驼峰化
 * @param str - 字符串
 * @example user-info => userInfo
 */
export function camelize(str: string): string {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
}

/**
 * @category String
 *
 * 将字符串转换为 pascal
 *
 * @param str - 字符串
 * @example user-info => UserInfo
 * @example some_database_field_name => SomeDatabaseFieldName
 * @example Some label that needs to be pascalized => SomeLabelThatNeedsToBePascalized
 * @example some-mixed_string with spaces_underscores-and-hyphens => SomeMixedStringWithSpacesUnderscoresAndHyphens
 */
export function toPascalCase(str: string): string {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!
    .map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    .join('')
}

/**
 * @category String
 *
 * 将字符串转换为 camel
 * @param str
 * @example hello-world => helloWorld
 * @example hello_world => helloWorld
 * @example hello world => helloWorld
 */
export function toCamelCase(str: string) {
  const s
    = str
    && str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('')
  return s.slice(0, 1).toLowerCase() + s.slice(1)
}

/**
 * @category String
 * 将字符串转换为 kebab
 *
 * @param str
 *
 * @example helloWorld => hello-world
 * @example hello_world => hello-world
 * @example hello world => hello-world
 */
export function toKebabCase(str: string) {
  return str
    && str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!
      .map(x => x.toLowerCase())
      .join('-')
}

/**
 * @category String
 *
 * 将字符串转换为 snake
 *
 * @param str
 *
 * @example helloWorld => hello_world
 * @example hello_world => hello_world
 * @example hello world => hello_world
 */
export function toSnakeCase(str: string) {
  return str
    && str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!
      .map(x => x.toLowerCase())
      .join('_')
}

/**
 * @category String
 *
 * 字符数组
 *
 * @param s
 * @example hello => ['h', 'e', 'l', 'l', 'o']
 */
export const toCharArray = (s: string) => [...s]

/**
 * @category String
 *
 * 首字母大写
 *
 * @param str - 字符串
 * @example userInfo => UserInfo
 */
export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

const hyphenateRE = /\B([A-Z])/g
/**
 * @category String
 *
 * 大写字母 转为 小写-连接
 *
 * @param str - 字符串
 * @example UserInfo => user-info
 */
export const hyphenate = (str: string) => str.replace(hyphenateRE, '-$1').toLowerCase()

/**
 * @category String
 *
 * 替换所有相同字符串
 *
 * @param text - 需要处理的字符串
 * @param repstr - 被替换的字符
 * @param newstr - 替换后的字符
 */
export function replaceAll(text: string, repstr: string, newstr: string) {
  return text.replace(new RegExp(repstr, 'gm'), newstr)
}

/**
 * @category String
 *
 * 去左右空格
 * @param value - 需要处理的字符串
 */
export function trim(value: string) {
  return value.replace(/(^\s*)|(\s*$)/g, '')
}

/**
 * @category String
 *
 * 去所有空格
 * @param value - 需要处理的字符串
 */
export function trimAll(value: string) {
  return value.replace(/\s+/g, '')
}

/**
 * @category String
 *
 * 根据数字获取对应的汉字
 * @param num - 数字(0-10)
 */
export function getHanByNumber(num: number) {
  const HAN_STR = '零一二三四五六七八九十'
  return HAN_STR.charAt(num)
}

/**
 * @category String
 *
 * 插入字符串
 * @param str - 原字符串
 * @param start - 插入位置
 * @param insertStr - 插入字符串
 */
export function insertStr(str: string, start: number, insertStr: string): string {
  return str.slice(0, start) + insertStr + str.slice(start)
}

/**
 * @category String
 *
 * 转义HTML字符
 * @param str - 字符串
 * @example '<a href="#">Me & you</a>' => '&lt;a href="#"&gt;Me &amp; you&lt;/a&gt;'
 */
export function escapeHTML(str: string) {
  return str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\'': '&#39;',
        '"': '&quot;',
      }[tag] || tag),
  )
}

/**
 * @category String
 *
 * 移除空格
 * @param str - 字符串
 * @example '  Hello  \nWorld  ' => 'Hello World'
 */
export const removeWhitespace = (str: string) => str.replace(/\s+/g, '')
