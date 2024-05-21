// Datos de nodos
const nodes = [
  { id: 1, label: "Nodo 1", group: "A" },
  { id: 2, label: "Nodo 2", group: "B" },
  { id: 3, label: "Nodo 3", group: "A" },
  { id: 4, label: "Nodo 4", group: "B" },
  { id: 5, label: "Nodo 5", group: "A" },
];

// Datos de aristas
const edges = [
  { id: 1, from: 1, to: 2 },
  { id: 2, from: 2, to: 3 },
  { id: 3, from: 3, to: 1 },
  { id: 4, from: 4, to: 5 },
  { id: 5, from: 5, to: 2 },
];

// Opciones de configuración del grafo
const options = {
  nodes: {
    shape: "dot",
    color: {
      border: "black",
      background: function (node) {
        if (node.group === "A") {
          return "#f00";
        } else {
          return "#0f0";
        }
      },
    },
  },
  edges: {
    width: 1,
    color: "#ccc",
  },
  physics: {
    enabled: true,
  },
};

// Crear el contenedor del grafo
const container = document.getElementById("mygraph");

// Crear el objeto Network
const network = new vis.Network(container, { nodes, edges, options });

const nuevoNodo = {
  id: 6, 
  label: "Nodo 6"
};
const nuevaArista = {
  id: 6,
  from: 1,
  to: 6
};
network.body.data.nodes.add(nuevoNodo);
network.body.data.edges.add(nuevaArista);

// Ajustar el zoom al tamaño del contenedor
network.fit();
