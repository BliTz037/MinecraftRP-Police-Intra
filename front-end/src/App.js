import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Login from './pages/Login';
import Home from './pages/Home';
import { ThemeProvider } from '@emotion/react';
import theme from './ThemeCustom';
import Criminal from './pages/Criminal';
import CriminalSearch from './pages/CriminalSearch';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/criminal" element={<CriminalSearch/>} />
          <Route path="/criminal/:id" element={<Criminal/>} />
        </Routes >
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
