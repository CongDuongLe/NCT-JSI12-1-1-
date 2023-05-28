import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'
import ResetPassword from './pages/Auth/ResetPassword'
import FallbackSpinner from './utils/FallbackSpinner'
import Layout from './layout/Layout'
import SongsCollections from './components/songs_collection/SongsCollections'
import ChatRoom from './pages/chat/ChatRoom'



const router = createBrowserRouter(
  createRoutesFromElements(
    <> 
      <Route path="/" element={<SongsCollections />}></Route> 
        <Route index path="/signIn" element={<SignIn />} />,
        <Route path="/signUp" element={<SignUp />} />,
        <Route path="/resetPassword" element={<ResetPassword />} />,
        <Route path="*" element={<PageNotFound />} />
        <Route path='/chat' element={<ChatRoom />} />
    </>
  )
)

const App = () => {
  return (
    <>
      <Layout>
        <RouterProvider router={router} fallbackElement={<FallbackSpinner />} />
      </Layout>
    </>
  )
}

export default App
