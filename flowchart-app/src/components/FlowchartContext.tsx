import React from 'react';
import { Node as RFNode } from 'reactflow';

export interface FlowchartContext {
    updateNodeByID: (updatedNode: RFNode) => void;
}

export const FlowchartContext = React.createContext<FlowchartContext>({
    updateNodeByID: () => null,
});
