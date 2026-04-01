import Home from './components/pages/Home'
import { Routes, Route } from 'react-router'
import RootLayouts from './components/layouts/RootLayouts'
import Error from './components/pages/Error'
import ReactLenis from 'lenis/react'
import About from './components/layouts/About'


function App() {
  return (
    <> <ReactLenis
      root
      options={{
        lerp: 0.05,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 0.8,
      }}
    >
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes></ReactLenis>
    </>
  )
}

export default App


