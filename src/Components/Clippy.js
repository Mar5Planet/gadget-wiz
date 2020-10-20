import React from 'react'
import { useClippy, ClippyProvider } from '@react95/clippy'

const Clippy = () => {
    const { clippy } = useClippy()

    return <Button onClick={() => clippy.play('Wave')}>Hello Clippy!</Button>
}

export default Clippy 