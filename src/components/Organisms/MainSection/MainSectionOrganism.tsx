import TitleAtom from '@/components/Atoms/MainSection/TitleAtom'
import SectionInfoMolecule from '@/components/Molecules/MainSection/SectionInfoMolecule'
import React from 'react'

const MainSectionOrganism = () => {
  return (
    <section className="w-full flex justify-center items-start flex-col gap-6 p-8">
        <TitleAtom />
        <SectionInfoMolecule />
    </section>
  )
}

export default MainSectionOrganism