import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { reactQueryClient } from './lib/reactQuery';
import { Home } from './Home/home.component';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={reactQueryClient}>
        <BrowserRouter>
          <GlobalStyle />
          <Home />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
