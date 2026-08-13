import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ReactLenis } from 'lenis/react'

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <RouterProvider router={router} />
    </ReactLenis>
  )
}

export default App
