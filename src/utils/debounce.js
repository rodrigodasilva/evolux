const debounce = (callback, wait) => {
  let currentTimeout = null

  return (...args) => {
    clearTimeout(currentTimeout)

    currentTimeout = setTimeout(() => {
      callback(...args)
    }, wait)
  }
}

export default debounce