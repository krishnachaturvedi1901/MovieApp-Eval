import { Box } from '@chakra-ui/react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home"

function App() {
  return (
    <>
    <Navbar/>
    <Box bg="#242B2E" minHeight={900} maxHeight="auto" w="100%" pt="50px" >
      <AllRoutes/>
    </Box>
    </>
  );
}

export default App;
