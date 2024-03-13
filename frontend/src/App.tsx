import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { Home } from './Home/home.component';
import { reactQueryClient } from './lib/reactQuery';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={reactQueryClient}>
        <GlobalStyle />
        <Home />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
