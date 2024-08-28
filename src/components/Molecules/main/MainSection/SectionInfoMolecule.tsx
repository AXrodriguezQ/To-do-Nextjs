import CaptionAtom from '@/components/Atoms/main/MainSection/CaptionAtom'
import TextInfoAtom from '@/components/Atoms/main/MainSection/TextInfoAtom'
import React from 'react'

const SectionInfoMolecule = () => {
  return (
    <div className="w-auto rounded-2xl bg-blue-300 p-4 text-xl flex flex-col gap-4">
        <CaptionAtom />
        <TextInfoAtom />
    </div>
  )
}

export default SectionInfoMolecule