import React from 'react'
import PropTypes from 'prop-types'

function Button({ title, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button