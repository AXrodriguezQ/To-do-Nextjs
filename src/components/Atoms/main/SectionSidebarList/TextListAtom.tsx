import React from 'react'

const TextListAtom = ( {text = 'texto lista'} ) => {
  return (
    <p className="font-semibold">{text}</p>
  )
}

export default TextListAtom