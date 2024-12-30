import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './Context/cartContext'; // Cart Context
import { ThemeProvider } from './Context/ThemeContext'; // Theme Context
import { Provider } from 'react-redux'; // Redux Provider
import store from './Redux/store'; // Redux Store
import './App.css'; // Global Styles

// Create root for rendering the App
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <ThemeProvider> {/* Theme context wraps App here */}
          <App />
        </ThemeProvider>
      </CartProvider>
    </Provider>
  </React.StrictMode>
);

// For measuring app performance, optionally log results or send to analytics
reportWebVitals();
