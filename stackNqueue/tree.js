class Node {
  constructor(content, child = []) {
    this.content = content;
    this.child = child
  }
}

const tree = new Node('hello', [
  new Node("world"),
  new Node("hello"),
  new Node("fun", [
    new Node("javascript"),
  ]),
]);

function traverse(node) {
  console.log(node.content)
  for (let child of node.child) {
    traverse(child)
  }
}

traverse(tree)