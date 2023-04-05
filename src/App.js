// npm install react-router-dom

import './App.css';
import Presentation from './components/Presentation';
import Training from './pages/Training';
import Classifier from './pages/Classifier';
import RootLayout from './pages/Root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  { 
    path: "/sentisquare",
    element: <RootLayout />,
    children: [
      { index: true, element: <Presentation /> },
      { path: "presentation", element: <Presentation /> },
      { path: "training", element: <Training /> },
      { path: "classifier", element: <Classifier /> }

    ]
  },
])


function App() {


  return <RouterProvider router={router} />;
}

export default App;
