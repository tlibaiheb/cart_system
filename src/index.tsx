import React from 'react';
import Routes from './routes';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './theme';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ErrorBoundary>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </ErrorBoundary>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
