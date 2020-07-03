const utils = {
  /**
   * @param {string} path
   * @returns {Boolean}
   */
  isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
  },
  /**
   * @param {string} str
   * @returns {Boolean}
   */
  validUsername(str) {
    /* const valid_map = ['admin', 'editor']
    return valid_map.indexOf(str.trim()) >= 0*/
    return str.trim().length >= 5
  },
  /**
   * @param {string} msg
   * */
  alertMsg(msg) {
    console.log(msg || 111)
  }

}
export default utils
