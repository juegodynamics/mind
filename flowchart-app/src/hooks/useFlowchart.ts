import React from 'react';
import { Node as RFNode, Edge as RFEdge, useReactFlow } from 'reactflow';
import { computeLayout } from '../utils/elkLayout';

export interface DisplayNodeProps {
    id: string;
    x: number;
    y: number;
    label: string;
}

export interface DisplayEdgeProps {
    from: string;
    to: string;
}

const useFlowchart = () => {
    const callbackRef = React.useRef(computeLayout);
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
    const [isLayedOut, setIsLayedOut] = React.useState(false);

    const { getNodes, setNodes, getEdges, setEdges, ...rest } = useReactFlow();

    React.useEffect(() => {
        if (!isLayedOut) {
            const autoLayoutHandler = () => {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
                timeoutRef.current = setTimeout(() => {
                    callbackRef
                        .current({ nodes: getNodes(), edges: getEdges() })
                        .then(({ nodes: nextNodes, edges: nextEdges }) => {
                            setNodes(nextNodes);
                            setEdges(nextEdges);
                        });
                });
            };

            autoLayoutHandler();

            return () => {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
            };
        }
    }, [getNodes, getEdges]);

    const addNode = (node: RFNode) => {
        setNodes([...getNodes(), node]);
    };

    const addEdge = (edge: RFEdge) => {
        setEdges([...getEdges(), edge]);
    };

    return {
        getNodes,
        setNodes,
        getEdges,
        setEdges,
        addNode,
        addEdge,
        ...rest,
    };
};

export default useFlowchart;
