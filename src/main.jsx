import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { InventoryManagementContextProvider } from "./contexts/inventoryManagementContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <InventoryManagementContextProvider>
                <App />
            </InventoryManagementContextProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
