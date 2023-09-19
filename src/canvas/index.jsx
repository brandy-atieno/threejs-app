import {Canvas} from '@react-three/fiber';
import{Environment,Center} from'@react-three/drei';
import Shirt from './Shirt';
import BackDrop from './BackDrop';
import Camera from './Camera';

const CanvasModel = () => {
  return (
    <Canvas 
    shadows
    camera={{position:[0,0,0],fov: 25}}
    gl ={{preserveDrawingBuffer: true}}
    className='w-full max-w-full h-full transition-all ease-in'>
      <Environment preset='city'/>
      <Camera/>
      <BackDrop/>
      <Center>
        <Shirt/>
      </Center>
      </Canvas>
  )
}

export default CanvasModel;