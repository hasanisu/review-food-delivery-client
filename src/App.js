import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="bg-slate-400">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
