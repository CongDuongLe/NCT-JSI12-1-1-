import React from 'react'
import Buoi2 from './pages/Buoi2'
import Buoi3 from './pages/Buoi3'
import HomePage from './pages/HomePage'
import {
  createBrowserRouter,
  createRoutesFromElements,
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

// const router = createBrowserRouter([
//   {
//     path: '/home',
//     element: <HomePage />,
//     children: [
//       {
//         path: '/buoi2',
//         element: <Buoi2 />,
//       },
//       {
//         path: '/buoi3',
//         element: <Buoi3 />,
//       },
//     ],
//   },
//   {
//     path: '*',
//     element: <PageNotFound />,
//   },
//   {
//     path: '/signIn',
//     element: <SignIn />,
//   },
//   {
//     path: '/signUp',
//     element: <SignUp />,
//   },
//   {
//     path: '/resetPassword',
//     element: <ResetPassword />,
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      
      <Route path="/" element={<Buoi4 />}>
        <Route path="/buoi2" element={<Buoi2 />} />
      </Route>
      <Route path="/signIn" element={<SignIn />} />,
      <Route path="/signUp" element={<SignUp />} />,
      <Route path="/resetPassword" element={<ResetPassword />} />,
      <Route path="*" element={<PageNotFound />} />
    </>
  )
)

const App = () => {
  return (
    <div className=" flex flex-1 h-auto min-h-screen w-screen bg-blue-100">
      <RouterProvider router={router} fallbackElement={<FallbackSpinner />} />
    </div>
  )
}

export default App
