import { useEffect } from 'react'

const Surprise = () => {
  useEffect(() => {
    console.log('Mounted the Surprise!')
    return () => {
      console.log('Unmounted the Surprise => Cleaned up any side effects')
    }
  }, [])

  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}

export default Surprise
