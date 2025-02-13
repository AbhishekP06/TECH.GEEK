import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import PioneerCard from './components/PioneerCard'
import PioneerView from './components/PoineerView'

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element:
          <>
            <Navbar />
            <PioneerCard />
          </>
      },
      {
        path: "/pioneer/:name",
        element:
          <>
            <Navbar />
            <PioneerView />
          </>
      },
    ]
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
