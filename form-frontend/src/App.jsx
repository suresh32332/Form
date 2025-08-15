
import './App.css'
import From from './Component/Form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* http://localhost:3000 */}
          <Route path='/' element={<From />} > </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
