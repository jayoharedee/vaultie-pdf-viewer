import React from 'react'
import PropTypes from 'prop-types'

function Form({
  ref,
  id,
  className,
  action,
  method,
  onSubmit,
  encType,
  children
}) {
  return (
    <form onSubmit={onSubmit}
      id={id}
      className={className} 
      action={action} 
      method={method}
      encType={encType}>
        {children}
    </form> 
  )
}

Form.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  action: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  encType: PropTypes.string.isRequired,
  children: PropTypes.node,
}


export default Form