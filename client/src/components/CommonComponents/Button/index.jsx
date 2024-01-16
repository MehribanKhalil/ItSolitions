import React from 'react'

const Button = ({children}) => {
  return (
    <button className="border-2 border-main-color px-5 py-2 text-main-color font-semibold">{children}</button>
  )
}

export default Button