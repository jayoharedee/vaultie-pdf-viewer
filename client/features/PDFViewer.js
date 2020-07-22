import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/entry.webpack'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import PropTypes from 'prop-types'

import Button from '../components/Button'

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
}

function PDFViewer({
  file,
  onFileChange,
}) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    console.log('numpages', numPages)
  }

  function handleNextPage() {
    if (numPages === pageNumber - 1) {
      return false
    }

    const currentPage = pageNumber + 1
    setPageNumber(currentPage)
  }

  function handlePreviousPage() {
    if (pageNumber === 1) {
      return false
    }
    setPageNumber(pageNumber - 1)
  }

  return (
    <>
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
      <Button onClick={handleNextPage} title={'Next Page'} />
      <Button onClick={handlePreviousPage} title={'Previous Page'} />
    </>
  )
}

PDFViewer.propTypes = {
  file: PropTypes.string.isRequired,
  setFile: PropTypes.func.isRequired,
  onFileChange: PropTypes.func.isRequired,
}

export default PDFViewer
