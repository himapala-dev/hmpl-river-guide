import React from 'react'
const Buttons = ({
  className = '', 
  title = '', 
  children = <></>
  }) => {
  
  if (title === 'Sebelumnya') {
    return (
      <button className={className}>{children && children} {title}</button>
    )
  } else {
    return (
      <button className={className}>{title} {children && children}</button>
    )
  }
}
export default Buttons