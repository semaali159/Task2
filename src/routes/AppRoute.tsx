import { Navigate, Route, Routes } from "react-router-dom"
import AppLayout from "../components/layout/AppLayout"
import ChatList, { EmptyChat } from "../features/chats/components/ChatList"
import ChatScreen from "../features/chats/components/ChatScreen"
import Search from "../features/search/components/Search"

const AppRoute = () => {
  return (
   <Routes>
        <Route element={<AppLayout/>}>
        <Route path="/" element={<Navigate to="/chats" replace />} />
        <Route path="chats" element={<ChatList />}>
            <Route index element={<EmptyChat />} />
            <Route path=":id" element={<ChatScreen />} />
        </Route>
        <Route path="/search" element={<Search/>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
        </Route>
   </Routes> 
  )
}

export default AppRoute