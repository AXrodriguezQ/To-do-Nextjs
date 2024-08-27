import SvgListAtom from '@/components/Atoms/SectionSidebarList/SvgListAtom'
import TextListAtom from '@/components/Atoms/SectionSidebarList/TextListAtom'
import Link from 'next/link'
import React from 'react'

const ListItemsMolecule = ( { text = '', urlSvg = process.env.ICON_URL } ) => {
  return (
    <Link href="/to-do/list-task" className="flex gap-2 hover:text-blue-500 hover:translate-x-1 duration-100">
      <SvgListAtom urlSvg={urlSvg} />
      <TextListAtom text={text} />
    </Link>
  )
}

export default ListItemsMolecule