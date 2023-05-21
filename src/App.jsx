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
import Buoi4 from './pages/Buoi4'
import Layout from './layout/Layout'
import SongsCollections from './components/songs_collection/SongsCollections'



const router = createBrowserRouter(
  createRoutesFromElements(
    <> 
      <Route path="/" element={<SongsCollections />}></Route> 
        <Route index path="/signIn" element={<SignIn />} />,
        <Route path="/signUp" element={<SignUp />} />,
        <Route path="/resetPassword" element={<ResetPassword />} />,
        <Route path="*" element={<PageNotFound />} />
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
