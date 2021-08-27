let list = [2, 3, 4, 1, 5, 8, 7]

function sort_selection(li) {
  for (var t = 0; t < li.length; t++) {
    let smallest = undefined
    let fakeli = li.slice(t, li.length)
    for (var i = 0; i < fakeli.length; i++) {
      if (smallest == undefined || smallest > fakeli[i]) {
        smallest = fakeli[i];
      }
    }
    fakeli = [...fakeli.slice(0, fakeli.indexOf(smallest)), ...fakeli.slice(fakeli.indexOf(smallest) + 1, fakeli.length)]
    li = [...li.slice(0, t), smallest, ...fakeli]
  }
  return li
}

console.log(sort_selection(list))