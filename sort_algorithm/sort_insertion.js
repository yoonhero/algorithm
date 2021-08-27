let list = [2, 3, 4, 1, 5, 8, 7]

function sort_insertion(list) {
  for (var _ = 0; _ < list.length; _++) {
    for (var i = 1; i < list.length; i++) {
      for (var a = 0; a < i; a++) {
        if (list[i] < list[a]) {
          list = [...list.slice(0, a), li[a], li[i], ...list.slice(i, list.length)]
        }
      }
    }
  }
  return list
}

console.log(sort_insertion(list))