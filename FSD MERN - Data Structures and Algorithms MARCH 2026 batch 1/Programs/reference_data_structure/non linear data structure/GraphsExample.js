class FlightGraph {
    constructor() {
        this.adjacencyList = {};    // object types. 
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];        // array object created. 
            console.log(`City ${vertex} added.`);    // log message when vertex is added.
        }else {
            console.log(`City ${vertex} already exists.`);    // if vertex already exists, log a message.
        }
    }
    addEdge(vertex1, vertex2, price) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push({ vertex: vertex2, price: price });
            this.adjacencyList[vertex2].push({ vertex: vertex1, price: price });
        }else {
            console.log(`One or both cities do not exist. Please add the cities before creating an edge.`);    // log message if one or both vertices do not exist.
        }
    }

    printGraph() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex}: ${this.adjacencyList[vertex].map(edge => `${edge.vertex} (${edge.price})`). join(", ")}`);
        }

    }
}
let flightGraph = new FlightGraph();
flightGraph.addVertex("New York");
flightGraph.addVertex("New York");
flightGraph.addVertex("Los Angeles");
flightGraph.addVertex("Chicago");

flightGraph.addEdge("New York", "Los Angeles","$5000");    // log message when trying to add an edge with more than two vertices.
flightGraph.addEdge("New York", "Chicago","$3000");
flightGraph.addEdge("Los Angeles", "Chicago","$2000");
flightGraph.addEdge("New York", "Miami","$4000");    // log message when trying to add an edge with a non-existent vertex.
flightGraph.printGraph();