import { Route, Routes } from "react-router"
import Make from "./components/Make"
import Solve from "./components/Solve"

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Make/>}/>
        <Route path="/solve" element={<Solve/>}/>
      </Routes>
    </>
  )
}

export default App
