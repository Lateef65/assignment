function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const queue = [];

    // Initialize distances
    for (let vertex in graph) {
        distances[vertex] = vertex === start ? 0 : Infinity;
        queue.push(vertex);
    }

    while (queue.length) {
        // Find the vertex with the shortest distance
        queue.sort((a, b) => distances[a] - distances[b]);
        const currentVertex = queue.shift();

        if (currentVertex === undefined || distances[currentVertex] === Infinity) break;

        visited[currentVertex] = true;

        // Update distances to adjacent vertices
        for (let neighbor in graph[currentVertex]) {
            if (!visited[neighbor]) {
                const distance = distances[currentVertex] + graph[currentVertex][neighbor];
                if (distance < distances[neighbor]) {
                    distances[neighbor] = distance;
                }
            }
        }
    }

    return distances;
}

// Example usage
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

const shortestDistances = dijkstra(graph, 'A');
console.log(shortestDistances);
