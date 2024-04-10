import { SERVER_ADDRESS } from './macros'

export const convertFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const { result } = reader
      const faceImage = result.replace(/^data:image\/?[A-z]*;base64,/, '')
      resolve(faceImage)
    }
    reader.onerror = (error) => reject(error)
  })
}

export const getGeneratedImage = async (image, prompt) => {
  const formData = new FormData()
  formData.append('face_image', image)
  formData.append('prompt', prompt)

  try {
    const response = await fetch(`${SERVER_ADDRESS}/generate`, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`)
    }

    const responseData = await response.text() // Or other response type
    return responseData
  } catch (error) {
    console.error('Error sending data:', error)
  }

  // const formData = new FormData()
  // formData.append('prompt', prompt)
  // formData.append('face_image', faceImageData)

  // try {
  //   const response = await fetch(`${SERVER_ADDRESS}/generate`, {
  //     method: 'POST',
  //     body: formData,
  //   })

  //   if (!response.ok) {
  //     throw new Error(`HTTP Error: ${response.status}`)
  //   }

  //   const responseData = await response.json() // Or other response type
  //   return responseData
  // } catch (error) {
  //   console.error('Error sending data:', error)
  // }
}
