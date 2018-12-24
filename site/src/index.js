import React, {
  useState,
} from 'https://mh-unumd.glitch.me/@matthamlin/danger-react-suspense/dev/react.js?exports=named'

export default function App() {
  const [state, set] = useState(0)

  return (
    <button type="button" onClick={() => set(s => s + 1)}>
      Increment {state}{' '}
    </button>
  )
}
