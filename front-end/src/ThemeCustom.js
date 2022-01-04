import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#001e3c',
      },
      secondary: {
        main: '#ff8000',
      },
      activeNav: {
        background: '#f4f4f4'
      }
    },
  })

export default theme