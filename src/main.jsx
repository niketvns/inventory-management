import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {TripAdvisorContextProvider} from "./contexts/tripAdvisorContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <TripAdvisorContextProvider>
              <App />
          </TripAdvisorContextProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
