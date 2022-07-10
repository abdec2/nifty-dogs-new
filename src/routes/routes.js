import { BrowserRouter, Routes, Route } from "react-router-dom"
import StartScreen from "../components/pages/startscreen"
import AlphaCollection from "../components/pages/aplha"

const RoutesConfig = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<StartScreen />} />
            <Route path="/alpha" element={<AlphaCollection />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesConfig