#!/bin/bash

# Create a new React TypeScript app
npx create-react-app flowchart-app --template typescript
cd flowchart-app

# Install dependencies
npm install @mui/material @emotion/react @emotion/styled elkjs

# Create necessary directories
mkdir -p src/components src/hooks src/utils

# Create Node component
cat > src/components/Node.tsx << EOL
import React from 'react';
import { Box, Typography } from '@mui/material';

interface NodeProps {
  id: string;
  x: number;
  y: number;
  label: string;
}

const Node: React.FC<NodeProps> = ({ id, x, y, label }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: x,
        top: y,
        padding: 1,
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        cursor: 'pointer',
      }}
    >
      <Typography variant="body2">{label}</Typography>
    </Box>
  );
};

export default Node;
EOL

# Create Edge component
cat > src/components/Edge.tsx << EOL
import React from 'react';
import { Box } from '@mui/material';

interface EdgeProps {
  pathData: string;
}

const Edge: React.FC<EdgeProps> = ({ pathData }) => {
  return (
    <Box component="svg" sx={{ position: 'absolute', pointerEvents: 'none' }}>
      <path d={pathData} stroke="black" strokeWidth="2" fill="none" />
    </Box>
  );
};

export default Edge;
EOL

# Create Flowchart component
cat > src/components/Flowchart.tsx << EOL
import React, { useEffect, useState } from 'react';
import Node from './Node';
import Edge from './Edge';
import { computeLayout } from '../utils/elkLayout';

interface NodeType {
  id: string;
  x: number;
  y: number;
  label: string;
}

interface EdgeType {
  from: string;
  to: string;
}

const Flowchart: React.FC = () => {
  const [nodes, setNodes] = useState<NodeType[]>([
    { id: 'node1', x: 0, y: 0, label: 'Node 1' },
    { id: 'node2', x: 0, y: 0, label: 'Node 2' },
  ]);

  const [edges, setEdges] = useState<EdgeType[]>([
    { from: 'node1', to: 'node2' },
  ]);

  const [layout, setLayout] = useState<any>(null);

  useEffect(() => {
    const updateLayout = async () => {
      const newLayout = await computeLayout(nodes, edges);
      setLayout(newLayout);
    };

    updateLayout();
  }, [nodes, edges]);

  if (!layout) return null;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {layout.children.map((node: any) => (
        <Node key={node.id} id={node.id} x={node.x} y={node.y} label={node.id} />
      ))}
      {layout.edges.map((edge: any, index: number) => {
        const points = edge.sections[0].bendPoints || [];
        const fromNode = layout.children.find((n: any) => n.id === edge.sources[0]);
        const toNode = layout.children.find((n: any) => n.id === edge.targets[0]);

        const from = { x: fromNode.x + fromNode.width / 2, y: fromNode.y + fromNode.height / 2 };
        const to = { x: toNode.x + toNode.width / 2, y: toNode.y + toNode.height / 2 };

        const pathData = [
          \`M \${from.x} \${from.y}\`,
          ...points.map(point => \`L \${point.x} \${point.y}\`),
          \`L \${to.x} \${to.y}\`,
        ].join(' ');

        return (
          <Edge key={index} from={from} to={to} pathData={pathData} />
        );
      })}
    </div>
  );
};

export default Flowchart;
EOL

# Create useFlowchart hook
cat > src/hooks/useFlowchart.ts << EOL
import { useState } from 'react';

interface NodeType {
  id: string;
  x: number;
  y: number;
  label: string;
}

interface EdgeType {
  from: string;
  to: string;
}

const useFlowchart = () => {
  const [nodes, setNodes] = useState<NodeType[]>([]);
  const [edges, setEdges] = useState<EdgeType[]>([]);

  const addNode = (node: NodeType) => {
    setNodes([...nodes, node]);
  };

  const addEdge = (edge: EdgeType) => {
    setEdges([...edges, edge]);
  };

  return { nodes, edges, addNode, addEdge };
};

export default useFlowchart;
EOL

# Create elkLayout utility
cat > src/utils/elkLayout.ts << EOL
import ELK, { ElkNode } from 'elkjs';

const elk = new ELK();

export const computeLayout = async (nodes, edges) => {
  const elkNodes = nodes.map(node => ({
    id: node.id,
    width: 100,
    height: 50,
  }));

  const elkEdges = edges.map(edge => ({
    id: \`\${edge.from}-\${edge.to}\`,
    sources: [edge.from],
    targets: [edge.to],
  }));

  const graph = {
    id: 'root',
    layoutOptions: {
      'elk.algorithm': 'layered',
    },
    children: elkNodes,
    edges: elkEdges,
  };

  const layout = await elk.layout(graph);
  return layout;
};
EOL

# Create App component
cat > src/App.tsx << EOL
import React from 'react';
import Flowchart from './components/Flowchart';
import useFlowchart from './hooks/useFlowchart';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    background: {
      default: '#f4f4f4',
    },
  },
});

const App: React.FC = () => {
  const { nodes, edges, addNode, addEdge } = useFlowchart();

  // Example of adding nodes and edges
  React.useEffect(() => {
    addNode({ id: 'node1', x: 100, y: 100, label: 'Node 1' });
    addNode({ id: 'node2', x: 300, y: 200, label: 'Node 2' });
    addEdge({ from: 'node1', to: 'node2' });
  }, [addNode, addEdge]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <Flowchart />
      </Box>
    </ThemeProvider>
  );
};

export default App;
EOL

# Run the app
npm start
