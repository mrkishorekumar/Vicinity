import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loading from './Components/Loading'
import ProtectedRoute from './Helper/ProtectedRoute'

const HomePage = lazy(() => import('./Pages/Home'))
const LoginPage = lazy(() => (import('./Pages/Login')))
const SignupPage = lazy(() => (import('./Pages/Signup')))
const DashboardPage = lazy(() => (import('./Pages/Dashboard')))
const RegisterPage = lazy(() => import("./Pages/Register"))
const BuildingEntryPage = lazy(() => import('./Pages/BuildingEntry'))

const App = () => {

  const RouterMap = [
    {
      protected: false,
      component: <HomePage />,
      path: '/',
    },
    {
      protected: false,
      component: <LoginPage />,
      path: '/login',
    },
    {
      protected: false,
      component: <SignupPage />,
      path: '/signup',
    },
    {
      protected: true,
      component: <DashboardPage />,
      path: '/dashboard',
    },
    {
      protected: false,
      component: <RegisterPage />,
      path: '/register',
    },
    {
      protected: true,
      component: <BuildingEntryPage />,
      path: '/entry',
    },
    // {
    //   protected: false,
    //   component: <PageNotFoundPage />,
    //   path: 'notfound',
    // },
    // {
    //   protected: false,
    //   component: <Navigate to="/notfound" replace />,
    //   path: '*',
    // }
  ]


  return (
    <Routes>
      {
        RouterMap.map((value, index) => {
          return (
            (!value.protected) ? (
              <Route key={index} path={value.path} element={
                <Suspense fallback={<Loading />}>
                  {value.component}
                </Suspense>
              } />
            ) :
              <Route key={index} path={value.path} element={
                <ProtectedRoute>
                  <Suspense fallback={<Loading />}>
                    {value.component}
                  </Suspense>
                </ProtectedRoute>
              } />
          )
        })
      }
    </Routes>
  )
}

export default App