// // src/components/MainPage.js
// import {useState,React} from 'react';
// import {  Route, Routes } from 'react-router-dom';
// // import '../styles/main.css'; // Import your CSS file for styling
// // import googleLogo from '../images/google1.png'; // Import the Google.jpg image
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "../theme";
// import Topbar from "../scenes/global/Topbar";
// import Sidebar from "../scenes/global/Sidebar";
// import Dashboard from "../scenes/dashboard";
// import CreateEvent from '../scenes/CreateEvent';

// const Main = () => {
//     const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);


//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className="app">
//           <Sidebar isSidebar={isSidebar} />
//           <main className="content">
//             <Topbar setIsSidebar={setIsSidebar} />
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/create_event" element={<CreateEvent />} />
              
//             </Routes>
//           </main>
//         </div>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// };

// export default Main;

import React from 'react'

export default function main() {
  return (
    <div>
      
    </div>
  )
}
