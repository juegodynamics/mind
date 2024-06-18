import { Box, useTheme } from '@mui/material';
import React from 'react';
import { EdgeProps } from 'reactflow';

const Edge: React.FC<EdgeProps<{ pathData: string }>> = ({ data }) => {
    const theme = useTheme();

    console.log({ data });

    return (
        <Box
            component="svg"
            sx={{ position: 'absolute', pointerEvents: 'none' }}
        >
            <path
                d={data?.pathData}
                stroke={theme.palette.text.primary}
                strokeWidth="2"
                fill="none"
            />
        </Box>
    );
};

export default Edge;
