import { Routes, Route } from "react-router-dom"
import { MainMenu } from "./components/MainMenu"
import { BottomMenu } from "./components/BottomMenu"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import MediaQuery from 'react-responsive'

import './css/style.css'
function App() {
  return (
    <>
      <MediaQuery minWidth={1224}>
        < MainMenu />
        <MediaQuery minWidth={1824}>
          < MainMenu />
        </MediaQuery>
      </MediaQuery>
      <MediaQuery maxWidth={1224}>
        <BottomMenu />
      </MediaQuery>
      <Navbar />
     
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
