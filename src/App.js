import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Scroll from './Pages/Scroll/Scroll';
import router from './Routes/Routes';
import { ThemeContext } from './ThemeProvider/ThemeProvider';


function App({children}) {
  const {theme} = useContext(ThemeContext)
  console.log(theme)
  return (
    <div className='mx-auto bg relative' id={theme ? "dark" : "light"} >
                   <Scroll></Scroll>

      <RouterProvider router={router}>{children}</RouterProvider>
      <Scroll></Scroll>

    </div>
  );
}

export default App;
