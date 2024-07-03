import {React,useState} from 'react';
import {  Route, Routes,useLocation } from 'react-router-dom';
import Login from './components/Login';
import './App.css';

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import CreateEvent from './scenes/CreateEvent';
import { UserProvider } from './UserContext';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();

  const hideSidebarAndTopbar = location.pathname === '/';
  return (
    <UserProvider>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {!hideSidebarAndTopbar && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
            {!hideSidebarAndTopbar && <Topbar setIsSidebar={setIsSidebar} />}
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/main" element={<Dashboard />} />
        <Route path="/create_event" element={<CreateEvent />} />
      </Routes>
      </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </UserProvider>
  );
}

export default App;
