import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { DirLight, SkyBox, Plane } from './components'
import { OrbitControls } from '@react-three/drei'
import './app.css'


function App() {
  return (
    <Canvas>
      <SkyBox />
      <ambientLight intensity={1} />
      
      {/* <DirLight />
      <gridHelper args={[100, 20, 0xff0000, 'teal']} /> */}

      <Plane />

      <OrbitControls />
    </Canvas>
  )
}

createRoot(document.getElementById('root')).render(<App />)
