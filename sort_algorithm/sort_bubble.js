let list = [2, 3, 4, 1, 5, 8, 7]

function sort_bubble(li) {
  for (var _ = 0; _ < li.length; _++) {
    for (let i = 0; i < li.length - 1; i++) {
      if (li[i] > li[i + 1]) {
        li = [...li.slice(0, i), li[i], li[i + 1], ...li.slice(i + 2, li.length)]
      }
    }
  }
  return li
}

console.log(sort_bubble(list))