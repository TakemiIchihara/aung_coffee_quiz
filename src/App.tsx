// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NavBar } from './section/layout/NavBar'
import { HomePage } from './section/home/HomePage'
import { QuizPage } from './section/quiz/QuizPage'

function App() {
  return (
    <BrowserRouter>
      <div className="relative flex h-dvh flex-col gap-10 overflow-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz/:quizId" element={<QuizPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
