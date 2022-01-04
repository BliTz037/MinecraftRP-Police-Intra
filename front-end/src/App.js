import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import { ThemeProvider } from '@emotion/react';
import theme from './ThemeCustom';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes >
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
