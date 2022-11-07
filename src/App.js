import { Box } from '@chakra-ui/react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Box>
    <Navbar/>
    <Box bg="#242B2E" minHeight={900} maxHeight="auto" w="100%" pt="50px" >
      <AllRoutes/>
    </Box>
    </Box>
  );
}

export default App;
