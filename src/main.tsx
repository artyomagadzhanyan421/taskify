import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Provider } from 'react-redux';
import { store } from './redux/store.tsx';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SkeletonTheme>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </SkeletonTheme>
  </StrictMode>,
);