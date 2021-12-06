import React from "react";
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom'
import {Box, Container, CssBaseline, Typography} from "@mui/material";
import SettingsScreen from "./pages/SettingsScreen";
import QuestionsScreen from "./pages/QuestionsScreen";
import FinalScreen from "./pages/FinalScreen";
import StatisticScreen from "./pages/StatisticScreen";
import CreateQuizScreen from "./pages/CreateQuizScreen";
import AppBarComponent from "./components/AppBarComponent";
import OwnQuizesScreen from "./pages/OwnQuizesScreen";


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Router>
          <AppBarComponent />
          <Typography textAlign="center" variant="h2" fontWeight="bold" mt={2}>
            Quiz App
          </Typography>
          <Container maxWidth={"sm"}>
            <Box textAlign="center" mt={2}>
              <Routes>
                <Route path="/quiz" element={<SettingsScreen/>}/>
                <Route path="/questions" element={<QuestionsScreen/>} />
                <Route path="/score" element={<FinalScreen/>} />
                <Route path="/statistic" element={<StatisticScreen/>} />
                <Route path="/create" element={<CreateQuizScreen/>} />
                <Route path="/my-quizes" element={<OwnQuizesScreen/>} />
              </Routes>
            </Box>
          </Container>
        </Router>
    </React.Fragment>
  );
}

export default App;
