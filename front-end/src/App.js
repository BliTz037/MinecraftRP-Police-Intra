import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Login from './pages/Login';
import { ThemeProvider } from '@emotion/react';
import theme from './ThemeCustom';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes >
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
