import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import PieChart from '../stories/charts/pie-chart/PieChart';
import { BarChart } from '../stories/charts/bar-chart/BarChart';
import { LineChart } from '../stories/charts/line-chart/LineChart';

// Define a custom Transition component
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Define props interface for FullScreenDialog component
interface FullScreenDialogProps {
    selectedChart: string;
    isOpen: boolean;
    setOpen: (action: boolean) => void;
    chartData: any;
}

// FullScreenDialog component
export default function FullScreenDialog({
  selectedChart,
  isOpen,
  chartData,
  setOpen,
}: FullScreenDialogProps) {
  // Function to handle dialog close
  const handleClose = () => {
    setOpen(false);
  };

  // Function to render selected chart based on selectedChart value
  const chart = () => {
    switch(selectedChart) {
      case 'pie':
        return <PieChart chartData={chartData} isPreview={true}  />;
      case 'bar':
        return <BarChart chartData={chartData} isPreview={true}  />;
      case 'line':
        return <LineChart chartData={chartData} isPreview={true}  />;
    }
  }

  return (
    <React.Fragment>
      {/* Full screen dialog */}
      <Dialog
        fullScreen
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {/* App bar */}
        <AppBar sx={{ position: 'relative' }}>
          {/* Toolbar */}
          <Toolbar>
            {/* Close button */}
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* Render selected chart */}
        <div>
          {chart()}
        </div>
      </Dialog>
    </React.Fragment>
  );
}