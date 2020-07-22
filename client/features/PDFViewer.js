import React, { useState } from 'react'
import {
  Document,
  Page,
  Text,
} from 'react-pdf/dist/entry.webpack'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import PropTypes from 'prop-types'

// import './Sample.less'

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
}

function PDFViewer({
  file,
  onLoadSuccess,
  onLoadError,
  onFileChange,
}) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  function onFileChange(event) {
    setFile(event.target.files[0])
  }

  return (
    <Document
      file={file}
      onLoadSuccess={onDocumentLoadSuccess}
      onLoadError={console.error}
      onFileChange={onFileChange}
      options={options}
    >
      {Array.from(new Array(numPages), (el, index) => {
        if (numPages === pageNumber - 1) {
          setPageNumber(1)
        }
        if (index === 0) {
          return (
            <Page
              key={`page_${index + 1}`}
              pageNumber={pageNumber}
              pageIndex={index}
            />
          )
        }
      })}
    </Document>
  )
}

PDFViewer.propTypes = {
  file: PropTypes.string.isRequired,
  onLoadError: PropTypes.func.isRequired,
  numPages: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
}

export default PDFViewer
