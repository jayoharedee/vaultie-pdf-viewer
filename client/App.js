import React, { useState } from 'react'
import {
  Document,
  Page,
} from 'react-pdf/dist/entry.webpack'
import 'react-pdf/dist/Page/AnnotationLayer.css'

import PDFViewer from './features/PDFViewer'
import './Sample.less'

function App() {
  const [file, setFile] = useState('./sample.pdf')
  const [numPages, setNumPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

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
            onLoadError={console.error}
            numPages={numPages}
            pageNumber={pageNumber}
          />
        </div>
        <button
          onClick={() => {
            if (numPages === pageNumber - 1) {
              return false
            }

            const currentPage = pageNumber + 1
            setPageNumber(currentPage)
          }}
        >
          Next page
        </button>

        <button
          onClick={() => {
            if (pageNumber === 1) {
              return false
            }
            setPageNumber(pageNumber - 1)
          }}
        >
          Previous page
        </button>
      </div>
    </div>
  )
}

export default App
