import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { imageLoader } from './Contexts/LoadImages';
import router from './Routes/Routes';

function App() {
  const {isDark} = useContext(imageLoader);
  console.log(isDark)
  return (
    <div data-theme={isDark ? "" : "light"} >
      <RouterProvider
        router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
