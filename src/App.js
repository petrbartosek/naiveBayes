// npm install react-router-dom

import './App.css';
import Presentation from './components/Presentation';
import Training from './pages/Training';
import Classifier from './pages/Classifier';
import RootLayout from './pages/Root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  { 
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Presentation /> },
      { path: "/classifier", element: <Classifier /> },
      { path: "/Training", element: <Training /> }

    ]
  },
])


function App() {


  return <RouterProvider router={router} />;
}

export default App;
