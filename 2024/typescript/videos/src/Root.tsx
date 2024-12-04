import { Composition } from 'remotion'
import { Day03 } from './Day03/Day03'
import { Day04 } from './Day04/Day04'

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition id="Day04" component={Day04} width={1920} height={1080} fps={60} durationInFrames={6000} />
      <Composition id="Day03" component={Day03} width={1920} height={1080} fps={60} durationInFrames={6000} />
    </>
  )
}
