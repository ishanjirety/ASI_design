import React from 'react';
import 'src/App.css';
import { Box, Text } from 'src/components';
import { Designed } from './components/designed/designed';
import { FigmaCss } from './components/figma/figma';


function App() {
  return (
    <Box className="App" height='100vh'>
      <Box>
        <Designed />
      </Box>
      <Box display='flex'>
        <Text fontWeight={700} ml="2.25rem">Figma : </Text>
        <FigmaCss />
      </Box>
    </Box>
  );
}

export default App;
