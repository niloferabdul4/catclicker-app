import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReducerContextProvider from './Context/ReducerContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
       <ReducerContextProvider>
          <App />
      </ReducerContextProvider>      
);


reportWebVitals();
