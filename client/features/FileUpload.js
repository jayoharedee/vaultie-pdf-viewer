import React from 'react'
import PropTypes from 'prop-types'

import Form from '../components/Form'

function FileUpload({
  id,
  className,
  action,
  method,
  encType,
  onChange,
  onSubmit,
}) {
  return (
    <Form
      id={id}
      className={className}
      action={action}
      method={method}
      encType={encType}
      onSubmit={onSubmit}
    >
      <label htmlFor="file">Load from file:</label>{' '}
      <input onChange={onChange} type="file" />
      <input type="submit" value="Upload!" />
    </Form>
  )
}

FileUpload.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  action: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  encType: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default FileUpload
