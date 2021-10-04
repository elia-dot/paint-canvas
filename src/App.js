import { Divider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';

import { Canvas } from './Canvas';

import SideBar from './SideBar';

const App = () => {
  
  const sideBar = 300;
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Box
          sx={{
            width: `${sideBar}px`,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <SideBar />
        </Box>
        <Divider orientation="vertical" />
        <Box sx={{ width: `calc(100vw - ${sideBar}px)` }}>
          <Canvas />
        </Box>
      </Box>
    </>
  );
};

export default App;
