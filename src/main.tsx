import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Link the React component to the DOM element
createRoot(document.getElementById("root")!).render(<App />);
