import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import Loading from "./Components/Loading";
function App() {
  return (
    <Box w="100%">
      <Loading />
      <MainRoutes />
    </Box>
  );
}

export default App;
