import { Route, Routes } from "react-router-dom"
import AppLayout from "../components/layout/AppLayout"

const AppRoute = () => {
  return (
   <Routes>
        <Route element={<AppLayout/>}>

        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/search" element={<h1>Search Page</h1>} />
        <Route path="/chats" element={<h1>Chats Page</h1>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
        </Route>
   </Routes> 
  )
}

export default AppRoute