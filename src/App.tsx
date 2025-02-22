import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Layout from "./components/layout"
import CompletePage from "./pages/complete"



function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>

        </Route>
        <Route path="/complete/:sessionId" element={<CompletePage />}></Route>
      </Routes>
    </>
  )
}

export default App
