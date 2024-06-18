import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { NODE_WIDTH } from './const';
import ReactFlow, {
    Background,
    Controls,
    EdgeTypes,
    NodeTypes,
    NodeProps,
    ReactFlowProvider,
    useReactFlow,
    Handle,
    Position,
} from 'reactflow';

const Node: React.FC<NodeProps<{ label: string }>> = ({ data: { label } }) => {
    return (
        <>
            <Handle type="target" position={Position.Left} />

            <Paper
                sx={{
                    // width: `${NODE_WIDTH}px`,
                    px: 1,
                }}
            >
                <Typography variant="body2">{label}</Typography>
            </Paper>
            <Handle type="source" position={Position.Right} />
        </>
    );
};

export default Node;
