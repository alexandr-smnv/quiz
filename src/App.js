import React from "react";
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom'
import {Box, Container, Typography} from "@mui/material";
import SettingsScreen from "./pages/SettingsScreen";
import QuestionsScreen from "./pages/QuestionsScreen";
import FinalScreen from "./pages/FinalScreen";
import StatisticScreen from "./pages/StatisticScreen";
import CreateQuizScreen from "./pages/CreateQuizScreen";


function App() {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h2" fontWeight="bold" mb={5}>
          Quiz App
        </Typography>
        <Router>
          <Routes>
            <Route path="/quiz" element={<SettingsScreen/>}/>
            <Route path="/questions" element={<QuestionsScreen/>} />
            <Route path="/score" element={<FinalScreen/>} />
            <Route path="/statistic" element={<StatisticScreen/>} />
            <Route path="/create" element={<CreateQuizScreen/>} />
          </Routes>
        </Router>
      </Box>
    </Container>
  );
}

export default App;
