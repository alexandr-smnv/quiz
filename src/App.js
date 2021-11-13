import React from "react";
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom'
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import {Box, Container, Typography} from "@mui/material";


function App() {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h2" fontWeight="bold" mb={5}>
          Quiz App
        </Typography>
        <Router>
          <Routes>
            <Route path="/quiz" element={<Settings/>}/>
            <Route path="/questions" element={<Questions/>} />
            <Route path="/score" element={<FinalScreen/>} />
          </Routes>
        </Router>
      </Box>
    </Container>
  );
}

export default App;
