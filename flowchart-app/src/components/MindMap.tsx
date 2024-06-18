import {
    Box,
    Button,
    Stack,
    StackProps,
    Typography,
    useTheme,
} from '@mui/material';
import React from 'react';

export interface MindNode {
    id: string;
    title: string;
    description: string;
    function?: string;
    location?: string;
    children?: MindNode[];
}

const CenteredRow = (
    props: Omit<StackProps, 'flexDirection' | 'justifyContent' | 'alignItems'>,
) => (
    <Stack
        {...props}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={1}
    />
);

const CenteredColumn = (
    props: Omit<StackProps, 'flexDirection' | 'justifyContent' | 'alignItems'>,
) => (
    <Stack
        {...props}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        px={3}
    />
);

const MindMapGroup: React.FC<{ nodes: MindNode[] }> = ({ nodes }) => (
    <CenteredColumn>
        {nodes.map((node, index) => (
            <CenteredRow key={index}>
                <Button id={node.id} sx={{ textTransform: 'none' }}>
                    <Typography variant="body1">{node.title}</Typography>
                </Button>
                {node?.children?.length ? (
                    <MindMapGroup nodes={node.children} />
                ) : null}
            </CenteredRow>
        ))}
    </CenteredColumn>
);

interface Point {
    x: number;
    y: number;
}
interface Line {
    start: Point;
    end: Point;
}

const MindMapEdges: React.FC<{ nodes: MindNode[] }> = ({ nodes }) => {
    const [lines, setLines] = React.useState<Line[]>([]);
    const [svgSize, setSvgSize] = React.useState({ width: 0, height: 0 });
    const theme = useTheme();

    React.useEffect(() => {
        const calculateLines = () => {
            const newLines: Line[] = nodes.flatMap(node =>
                node.children
                    ? node.children.flatMap(childNode => {
                          const nodeElement = document.getElementById(node.id);
                          const childNodeElement = document.getElementById(
                              childNode.id,
                          );

                          if (nodeElement && childNodeElement) {
                              const nodeRect =
                                  nodeElement.getBoundingClientRect();
                              const childRect =
                                  childNodeElement.getBoundingClientRect();

                              const nextLine: Line = {
                                  start: {
                                      x: nodeRect.right + window.scrollX,
                                      y:
                                          nodeRect.top +
                                          window.scrollY +
                                          nodeRect.height / 2,
                                  },
                                  end: {
                                      x: childRect.left + window.scrollX,
                                      y:
                                          childRect.top +
                                          window.scrollY +
                                          childRect.height / 2,
                                  },
                              };

                              return nextLine;
                          }
                          return [];
                      })
                    : [],
            );
            setLines(newLines);

            // Update SVG size to cover the entire document
            setSvgSize({
                width: document.documentElement.scrollWidth,
                height: document.documentElement.scrollHeight,
            });
        };

        calculateLines();
        window.addEventListener('resize', calculateLines);
        window.addEventListener('scroll', calculateLines);
        return () => {
            window.removeEventListener('resize', calculateLines);
            window.removeEventListener('scroll', calculateLines);
        };
    }, [nodes]);

    return (
        <>
            <svg
                width={svgSize.width}
                height={svgSize.height}
                style={{ position: 'absolute', top: 0, left: 0 }}
            >
                <g>
                    {lines.map((line, index) => {
                        const controlPointX = (line.start.x + line.end.x) / 2;
                        const controlPointY1 = line.start.y;
                        const controlPointY2 = line.end.y;
                        const d = `M ${line.start.x} ${line.start.y} C ${controlPointX} ${controlPointY1}, ${controlPointX} ${controlPointY2}, ${line.end.x} ${line.end.y}`;
                        return (
                            <path
                                key={index}
                                d={d}
                                stroke={theme.palette.text.primary}
                                strokeWidth="2"
                                fill="none"
                            />
                        );
                    })}
                </g>
            </svg>
            {nodes.map((node, index) =>
                node?.children ? (
                    <MindMapEdges key={node.id} nodes={node.children} />
                ) : null,
            )}
        </>
    );
};

export const MindMap: React.FC<{ nodes: MindNode[] }> = ({ nodes }) => {
    return (
        <>
            <Box
                sx={{
                    position: 'absolute',
                    pointerEvents: 'none',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                }}
            >
                <MindMapEdges nodes={nodes} />
            </Box>
            <Stack
                flexDirection={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'100vw'}
            >
                <MindMapGroup nodes={nodes} />
            </Stack>
        </>
    );
};
