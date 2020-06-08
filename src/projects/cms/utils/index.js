/**
 * Created by LuJunJian on 2020/4/28
 * cms项目公共方法
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}