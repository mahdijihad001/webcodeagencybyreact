import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Page/Home/Home.jsx'
import Blog from './Page/Blog/Blog.jsx'
import Services from './Page/Services/Services/Services.jsx'
import ErrorPage from './Page/ErrorPage/ErrorPage.jsx'
import SingIn from './Page/Auth/SingIn.jsx'
import SingUp from './Page/Auth/SingUp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/category' element={""} />
          <Route path='/singIn' element={<SingIn/>}/>
          <Route path='/singUp' element={<SingUp/>}/>
          {/* Error Page */}
          <Route path='*' element={<ErrorPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
