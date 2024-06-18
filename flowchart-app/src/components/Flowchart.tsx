import React from 'react';
import ReactFlow, {
    Background,
    Controls,
    EdgeTypes,
    NodeTypes,
    Edge as RFEdge,
    Node as RFNode,
    ReactFlowProvider,
    useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { computeLayout } from '../utils/elkLayout';
import { FlowchartContext } from './FlowchartContext';
import NodeComponent from './Node';
import EdgeComponent from './Edge';

const initialNodes: RFNode[] = [
    {
        id: 'dl-pfc',
        type: 'jue',
        position: { x: 0, y: 0 },
        data: { label: 'Executive Function' },
    },
    {
        id: 'working-memory',
        type: 'jue',
        position: { x: 0, y: 0 },
        data: { label: 'Working Memory' },
    },
];

const initialEdges: RFEdge[] = [
    {
        id: 'dl-pfc-->working_memory',
        type: 'jue',
        source: 'dl-pfc',
        target: 'working-memory',
    },
];

const nodeTypes: NodeTypes = { jue: NodeComponent };
const edgeTypes: EdgeTypes = { jue: EdgeComponent };

const Flowchart: React.FC = () => {
    const [nodes, setNodes] = React.useState(initialNodes);
    const [edges, setEdges] = React.useState(initialEdges);
    const [isLayedOut, setIsLayedOut] = React.useState(false);

    const updateNodeByIndex = (updatedNode: RFNode, index: number) =>
        setNodes([
            ...nodes.slice(0, index),
            updatedNode,
            ...nodes.slice(index + 1, nodes.length),
        ]);
    const updateNodeByID = (updatedNode: RFNode) =>
        updateNodeByIndex(
            updatedNode,
            nodes.findIndex(node => node.id === updatedNode.id),
        );

    const { fitView } = useReactFlow();

    React.useEffect(() => {
        if (!isLayedOut) {
            computeLayout({ nodes, edges })
                .then(({ nodes: nextNodes, edges: nextEdges }) => {
                    setNodes(nextNodes);
                    setEdges(nextEdges);
                    setIsLayedOut(true);
                })
                .then(() => {
                    window.requestAnimationFrame(() => {
                        fitView();
                    });
                });
        }
    }, [nodes, edges, fitView, isLayedOut]);

    return (
        <FlowchartContext.Provider value={{ updateNodeByID }}>
            <div
                style={{ position: 'relative', width: '100%', height: '100%' }}
            >
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                >
                    <Background />
                    <Controls />
                </ReactFlow>
            </div>
        </FlowchartContext.Provider>
    );
};

export default () => (
    <ReactFlowProvider>
        <Flowchart />
    </ReactFlowProvider>
);
