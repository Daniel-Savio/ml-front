import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Layout from "./components/layout"



function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout />}>


          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
