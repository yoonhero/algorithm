// 선형 검색 linear search 
// time complexity is O(n)
// this search algorithm is suck

const li = [4, 3, 2, 6, 1, 8, 9, 7]

function search_linear(li, target) {
  for (let i = 0; i < li.length; i++) {
    if (li[i] == target) {
      return console.log(`found ${li[i]} in ${i} steps`)
    }
  }
}

search_linear(li, 7)