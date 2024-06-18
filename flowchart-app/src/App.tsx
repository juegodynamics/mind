import { Box, ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { MindMap } from './components/MindMap';
import { CerebrumNode } from './data/mind';

const theme = createTheme({
    palette: {
        background: {
            default: '#f4f4f4',
        },
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ width: '100vw', height: '100vh', position: 'relative' }}>
                <MindMap nodes={[CerebrumNode]} />
            </Box>
        </ThemeProvider>
    );
};

export default App;
