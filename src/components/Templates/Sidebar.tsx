import React from 'react'
import SidebarOrganism from '../Organisms/main/Sidebar/SidebarListOrganism'
import SidebarProfileOrganism from '../Organisms/main/Sidebar/SidebarProfileOrganism'

const Sidebar = () => {
  return (
    <nav className="w-1/5 h-screen bg-slate-100 flex justify-start items-start flex-col">
        <SidebarProfileOrganism />
        <SidebarOrganism />
    </nav>
  )
}

export default Sidebar