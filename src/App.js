import { Routes, Route } from "react-router-dom"
import { MainMenu } from "./components/MainMenu"
import { BottomMenu } from "./components/BottomMenu"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Schedule } from "./pages/Schedule"
import { Scores } from "./pages/Scores"
import { Stats } from "./pages/Stats"
import MediaQuery from 'react-responsive'

import './css/style.css'
function App() {

  return (
    <>
      <Navbar />
      <MediaQuery minWidth={1224}>
        < MainMenu />
        <MediaQuery minWidth={1824}>
          < MainMenu  />
        </MediaQuery>
      </MediaQuery>
      <MediaQuery maxWidth={1224}>
        <BottomMenu />
      </MediaQuery>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Scores" element={<Scores />} />
          <Route path="/Stats" element={<Stats />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
