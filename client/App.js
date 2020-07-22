import React, { useState } from 'react'

import PDFViewer from './features/PDFViewer'
import './Sample.less'

function App() {
  const [file, setFile] = useState('./sample.pdf')

  function onFileChange(event) {
    setFile(event.target.files[0])
  }

  return (
    <div className="PDF">
      <header>
        <h1>Vaultie PDF Uploader</h1>
      </header>
      <div className="PDF__container">
        <div className="PDF__container__load">
          <label htmlFor="file">Load from file:</label>{' '}
          <input onChange={onFileChange} type="file" />
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
