import React from 'react';
import Typography from '@mui/material/Typography';
import { ColorPicker } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';
import { Box } from '@mui/system';
import { Divider } from '@mui/material';
import Slider from '@mui/material/Slider';

import { useCanvas } from './canvasContext';

const SideBar = () => {
  const { color, setColor, contextRef } = useCanvas();

  const handleColorChange = (value) => {
    setColor(value);
    contextRef.current.strokeStyle = value.hex;
  };

  const handleWidthChange = (e) => {
    contextRef.current.lineWidth = e.target.value;
  };
  return (
    <Box p="1em">
      <Typography variant="p" sx={{ fontWeight: 'bold' }}>
        Colors
      </Typography>
      <Divider orientation="horizontal" />
      <Box pt="1em">
        <ColorPicker
          width={270}
          height={228}
          color={color}
          onChange={handleColorChange}
          hideHSV
        />
      </Box>
      <Divider orientation="horizontal" sx={{ margin: '0 0 1em 0' }} />
      <Typography variant="p" sx={{ fontWeight: 'bold' }}>
        Line Width
      </Typography>
      <Divider orientation="horizontal" />
      <Slider
        size="small"
        min={1}
        max={50}
        valueLabelDisplay="auto"
        defaultValue={5}
        onChange={handleWidthChange}
      />
    </Box>
  );
};

export default SideBar;
