import React from 'react'
import ImageAtom from '../../../Atoms/main/SectionSidebarProfile/ImageAtom'
import TitleNameAtom from '../../../Atoms/main/SectionSidebarProfile/TitleNameAtom'

const ProfileMainMolecules = ( { textName = "", linkImage = "" } ) => {
  return (
    <div className="w-full p-4 flex flex-col justify-center items-start border-b-2 border-blue-300">
      <ImageAtom link={linkImage} />
      <TitleNameAtom text={textName} />
    </div>
  )
}

export default ProfileMainMolecules