import React, { useState } from 'react'
import axios from 'axios'

import PDFViewer from './features/PDFViewer'
import FileUpload from './features/FileUpload'

import './App.less'

function App() {
  const [file, setFile] = useState('./sample.pdf')

  function onFileChange(event) {
    setFile(event.target.files[0])
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('pdf', file)

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      console.log(response.data)
    } catch (error) {
      console.log(error)
      // check for server errors
      if (error) {
        // setMessage('There was a problem with the server')
        console.log(error)
        return
      }

      // setMessage(error.response.data.msg)
    }
  }

  return (
    <div className="PDF">
      <header>
        <h1>Vaultie PDF Uploader</h1>
      </header>
      <div className="PDF__container">
        <div className="PDF__container__load">
          <FileUpload
            action={'/upload'}
            method={'POST'}
            encType={'multipart/form-data'}
            onChange={onFileChange}
            onSubmit={onSubmit}
          />
        </div>
        <div className="PDF__container__document">
          <PDFViewer
            file={file}
            setFile={setFile}
            onFileChange={onFileChange}
          />
        </div>
      </div>
    </div>
  )
}

export default App
