class ImageInput {
  async upload(file) {
    const url = 'https://api.cloudinary.com/v1_1/djhlpuabi/image/upload'
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', 'nq26orwa')

    const result = await fetch(url, { method: 'POST', body: data }) ///
    return await result.json()
  }
}

export default ImageInput
