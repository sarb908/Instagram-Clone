import { Box } from "@chakra-ui/react";
import MainRoutes from "./Pages/MainRoutes";
import Loading from "./Components/Loading";
import MobileNavbar from "./Components/MobileNavbar";
function App() {
  return (
    <Box w="100%">
      <MobileNavbar />
      <Loading />
      <MainRoutes />
    </Box>
  );
}

export default App;
