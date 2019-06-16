export function chunkArray(array, chunkLength = 5) {
  return array.reduce((chunked, item) => {
    let lastItem = chunked[chunked.length - 1]
    if (Array.isArray(lastItem) && lastItem.length < 5) {
      let reversedChunked = [...chunked].reverse()
      let [last, ...first] = reversedChunked

      return [...first.reverse(), [...last, item]]
    }
    return [...chunked, [item]]
  }, [])
}
