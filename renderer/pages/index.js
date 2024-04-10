import { useEffect, useState } from 'react'
import { convertFileToBase64 } from '../utils/helpers'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [image, setImage] = useState(null)
  useEffect(() => {
    // on mount
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const { image, prompt } = Object.fromEntries(data)
    const base64Image = await convertFileToBase64(image)
    setImage(base64Image)
  }
  return (
    <div className={styles.wrapper}>
      <h1>AI Photo Booth</h1>
      <form onSubmit={handleSubmit}>
        <input type='file' accept='image/*' id='inputImage' name='image' />
        <textarea name='prompt' id='inputPrompt' cols='30' rows='10'></textarea>
        <button type='submit'>Upload</button>
      </form>
      {image === null ? null : <img src={image} alt='uploaded' />}
    </div>
  )
}
