import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  return (
    <Box w="100%">
      <Navbar />
      <MainRoutes />
    </Box>
  );
}

export default App;
