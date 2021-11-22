import React from 'react'
const Buttons = ({
  className = '', 
  title = '', 
  children = <></>,
  onClick = () => {}
  }) => {
  if (title === 'Sebelumnya' || title === 'Kembali') {
    return (
      <button className={className} onClick={onClick}>
        {children && children} {title}
      </button>
    )
  } else {
    return (
      <button className={className} onClick={onClick}>{title} {children && children}</button>
    )
  }
}
export default Buttons