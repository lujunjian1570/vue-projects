/**
 * Created by LuJunJian on 2020/6/10
 * 所有项目公共方法
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
