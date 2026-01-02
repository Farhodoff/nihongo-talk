import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { StudyPlannerProvider } from './context/StudyPlannerContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StudyPlannerProvider>
            <App />
        </StudyPlannerProvider>
    </React.StrictMode>,
)
