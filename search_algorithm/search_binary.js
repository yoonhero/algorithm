// 이중검색 Binary Search
// time complexity O(log n)
// this algorithm is so good

li = [1, 2, 3, 4, 5, 6, 7]

function search_binary(li, target) {
  if (li.length <= 0) {
    return console.log("I don't find it")
  }
  let centerVal = li[Math.ceil(li.length / 2)]
  if (centerVal == target) {
    return console.log(`Found ${target}`)
  } else if (centerVal > target) {
    return search_binary(li.slice(0, Math.ceil(li.length / 2)), target)
  } else if (centerVal < target) {
    return search_binary(li.slice(Math.ceil(li.length / 2), li.length), target)
  }
}

search_binary(li, 6)