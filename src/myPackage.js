// @ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1;
}

// 이 파일을 node module 처럼 생각
