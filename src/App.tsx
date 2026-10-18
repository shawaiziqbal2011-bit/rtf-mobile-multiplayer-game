import './App.css'
import { Canvas } from "@react-three/fiber"
import { SimpleMesh } from './componenets/simpleMesh'

function App() {

  return (
    <>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <SimpleMesh />
      </Canvas>
    </>
  )
}

export default App
