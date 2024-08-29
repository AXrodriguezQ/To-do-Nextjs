import React from 'react'

const TitleNameAtom = ( { text = 'User name' } ) => {
  return (
    <h4 className="mt-3 text-xl">{text}</h4>
  )
}

export default TitleNameAtom