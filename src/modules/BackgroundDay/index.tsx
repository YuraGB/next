'use client'
import { Canvas } from '@react-three/fiber'
import { Clouds, Cloud, PerspectiveCamera } from '@react-three/drei'
import { useBackgroundHook } from '@/modules/BacgroundHook/useBackgroundHook'
import { ResizeObserver } from '@juggle/resize-observer'

const BackgroundDay = () => {
  const { ref } = useBackgroundHook()

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transition: 'all .5s ease-in-out',
      }}
    >
      <Canvas
        resize={{ polyfill: ResizeObserver }}
        camera={{ position: [0, -10, 2000], fov: 75 }}
        style={{
          position: 'fixed',
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <ambientLight intensity={Math.PI / 2} />
        <Clouds limit={100} scale={2.2} position={[0, -10, 0]}>
          <Cloud
            seed={0.01}
            concentrate={'outside'}
            fade={10}
            speed={0.05}
            position={[0, 1, 0]}
            growth={7}
            segments={100}
            volume={10}
            opacity={0.9}
            bounds={[30, 5, 5]}
          />
        </Clouds>
        <PerspectiveCamera
          makeDefault
          position={[0, -4, 18]}
          fov={90}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        >
          <spotLight
            position={[0, 40, 2]}
            angle={0.5}
            decay={1}
            distance={45}
            penumbra={1}
            intensity={2000}
          />
          <spotLight
            position={[-19, 0, -8]}
            color="red"
            angle={0.25}
            decay={0.75}
            distance={185}
            penumbra={-1}
            intensity={400}
          />
        </PerspectiveCamera>
        <color attach="background" args={['#326696']} />
      </Canvas>
    </div>
  )
}

export default BackgroundDay
