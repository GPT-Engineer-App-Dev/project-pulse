import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;