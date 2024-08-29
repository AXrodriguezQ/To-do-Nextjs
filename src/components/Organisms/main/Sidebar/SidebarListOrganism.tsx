import ListItemsMolecule from '@/components/Molecules/main/SectionSidebarList/ListItemsMolecule';
import React from 'react'

interface ListItemsInterface {
    text: string;
    icon: string;
    href: string;
}

const listItems: ListItemsInterface[] = [
    {
        text: "Crear tarea",
        icon: "M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
        href: "/create",
    },
    {
        text: "Lista de tareas",
        icon: "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
        href: "/show",
    },
    {
        text: "Tareas realizadas",
        icon: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z",
        href: "/finished",
    },
]; 

const SidebarListOrganism = () => {
  return (
    <div className="flex flex-col py-6 px-4 gap-6">
        {
            listItems.map((item, index) => (
                <ListItemsMolecule text={item.text} urlSvg={item.icon} hrefUrl={item.href} key={index} />
            ))
        }
    </div>
  )
}

export default SidebarListOrganism