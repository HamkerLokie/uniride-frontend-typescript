import './App.css'
import React, { lazy, Suspense } from 'react'
import ErrorFallback from './Error/ErrorFallback'
import { ErrorBoundary } from 'react-error-boundary'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import toastOptions from './utils/toastOptions'
import Navbar from './components/Navbar'

const Home = lazy(() => import('./pages/Home'))

function App () {
  return (
    <React.Fragment>
      <Toaster position='top-center' toastOptions={toastOptions}></Toaster>
      <Navbar/>
      <main>
      <Routes>
        <Route
          path=''
          element={
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense>
                <Home />
              </Suspense>
            </ErrorBoundary>
          }
        ></Route>
      </Routes>
      </main>
    </React.Fragment>
  )
}

export default App
