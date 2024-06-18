import ELK, {
    ElkExtendedEdge as ElkEdge,
    ElkEdgeSection,
    ElkNode,
} from 'elkjs';
import { DisplayEdgeProps, DisplayNodeProps } from '../hooks/useFlowchart';
import { Node as RFNode, Edge as RFEdge } from 'reactflow';

const elk = new ELK();

interface NodeEdge {
    nodes: RFNode[];
    edges: RFEdge[];
}

function convertElkEdgeToSvgPath(edge: ElkEdge): string {
    if (!edge.sections || edge.sections.length === 0) {
        return '';
    }

    const pathSegments: string[] = [];

    edge.sections.forEach((section: ElkEdgeSection) => {
        const {
            startPoint: { x: startX, y: startY },
            endPoint: { x: endX, y: endY },
            bendPoints,
        } = section;

        // Move to the start point
        pathSegments.push(`M ${startX} ${startY}`);

        if (bendPoints && bendPoints.length > 0) {
            // Add bend points as line segments
            bendPoints.forEach(point => {
                pathSegments.push(`L ${point.x} ${point.y}`);
            });
        }

        // Draw line to the end point
        pathSegments.push(`L${endX},${endY}`);
    });

    // Combine all path segments into a single path string
    return pathSegments.join(' ');
}

export const computeLayout = async ({
    nodes,
    edges,
}: NodeEdge): Promise<NodeEdge> => {
    const elkNodes: ElkNode[] = nodes.map(node => ({
        id: node.id,
        width: 100,
        height: 50,
    }));

    const elkEdges: ElkEdge[] = edges.map(edge => ({
        id: edge.id,
        sources: [edge.source],
        targets: [edge.target],
    }));

    const graph = {
        id: 'root',
        layoutOptions: {
            'elk.algorithm': 'layered',
        },
        children: elkNodes,
        edges: elkEdges,
    };

    const layout = await elk.layout(graph, {
        layoutOptions: {
            'elk.algorithm': 'layered',
            'elk.layered.spacing.nodeNodeBetweenLayers': '160',
            'elk.spacing.nodeNode': '80',
        },
    });
    const nextElkNodesByID: Record<string, ElkNode> = layout.children!.reduce(
        (previous, current) => ({ ...previous, [current.id]: current }),
        {},
    );
    const nextElkEdgesByID: Record<string, ElkEdge> = layout.edges!.reduce(
        (previous, current) => ({ ...previous, [current.id]: current }),
        {},
    );

    return {
        nodes: [...nodes].map(node => {
            const elkNode = nextElkNodesByID[node.id];
            return { ...node, position: { x: elkNode.x!, y: elkNode.y! } };
        }),
        edges: [...edges].map(edge => {
            const elkEdge = nextElkEdgesByID[edge.id];
            return {
                ...edge,
                data: {
                    ...(edge.data || {}),
                    pathData: convertElkEdgeToSvgPath(elkEdge),
                },
            };
        }),
    };
};
