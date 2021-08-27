const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(" ")

const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'LAX'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
]

// The graph 
const adjacencyList = new Map()

// Add node 
function addNode(airport) {
  adjacencyList.set(airport, [])
}

// Add edge, undirected 
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination)
  adjacencyList.get(destination).push(origin)
}

// Create the Graph 
airports.forEach(addNode)
routes.forEach(route => addEdge(...route))

// BFS Breadth First Search 
// Breadth-first Search (BFS) starts by pushing all of the direct children to a queue (first-in, first-out). It then visits each item in queue and adds the next layer of children to the back of the queue. This example uses a Set to keep track of nodes that have already been visited.

function bfs(start) {

  const visited = new Set();

  const queue = [start]


  while (queue.length > 0) {

    const airport = queue.shift(); // mutates the queue

    const destinations = adjacencyList.get(airport);


    for (const destination of destinations) {

      if (destination === 'BKK') {
        console.log(`BFS found Bangkok!`)
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }

    }


  }

  console.log(visited);

}

bfs('PHX')


// DFS Depth First Search 
// Depth-first Search (DFS) will go as far into the graph as possible until it reaches a node without any children, at which point it backtracks and continues the process. The algorithm can be implemented with a recursive function that keeps track of previously visited nodes. If a node has not been visited, we call the function recursively.

function dfs(start, visited = new Set()) {

  console.log(start)

  visited.add(start)

  const destinations = adjacencyList.get(start)

  for (const destination of destinations) {

    if (destination === 'BKK') {
      console.log('DFS found BangKok')
      return;
    }

    if (!visited.has(destination)) {
      console.log(destination)
      dfs(destination, visited)
    }
  }

}

dfs('PHX')