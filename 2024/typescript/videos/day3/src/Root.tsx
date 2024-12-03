import './tailwind.css'
import { Composition } from 'remotion'
import { Instructions, instructionsSchema } from './Instructions/Instructions'

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render src/index.ts <id> out/video.mp4
        id="Instructions"
        component={Instructions}
        durationInFrames={9999}
        fps={30}
        width={1920}
        height={1080}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        schema={instructionsSchema}
        defaultProps={{
          titleText: 'Welcome to Remotion',
          titleColor: '#000000',
          logoColor1: '#91EAE4',
          logoColor2: '#86A8E7',
        }}
      />
    </>
  )
}
