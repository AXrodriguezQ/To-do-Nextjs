import Image from 'next/image'
import React from 'react'

const imgUrl: string = 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid' || process.env.AVATAR_URL 

const ImageAtom = ( {link = imgUrl} ) => {
  return (
    <Image
      src={link}
      alt="Avatar User"
      width={100}
      height={100}
      className="rounded-full"
    />
  )
}

export default ImageAtom