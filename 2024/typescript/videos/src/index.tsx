import { registerRoot, Composition } from 'remotion'
import './tailwind.css'
import { Day03 } from './Day03/Day03'

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition id="Day03" component={Day03} width={1920} height={1080} fps={60} durationInFrames={6000} />
    </>
  )
}

registerRoot(RemotionRoot)
