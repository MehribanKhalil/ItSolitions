import React from 'react'

const SectionTitle = ({subTitle,title}) => {
  return (
    <div className=' text-center space-y-3 py-10'>
        <p className=' tracking-widest text-dark-color'>{subTitle}</p>
        <h2 className=' font-medium text-dark-color'>{title}</h2>
    </div>
  )
}

export default SectionTitle