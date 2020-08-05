// 从 sessionStorage 获取数据
export function getStorage (key) {
  return JSON.parse(sessionStorage.getItem(key))
}

// 保存数据到 sessionStorage
export function setStorage (key, value) {
  const str = JSON.stringify(value)
  return sessionStorage.setItem(key, str)
}

// 从 sessionStorage 删除保存的数据
export function removeStorage (key) {
  return sessionStorage.removeItem(key)
}

// 从 sessionStorage 删除所有保存的数据
export function clearStorage () {
  return sessionStorage.clear()
}
