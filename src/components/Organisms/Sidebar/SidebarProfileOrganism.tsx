import ProfileMainMolecules from '@/components/Molecules/SectionSidebarProfile/ProfileMainMolecules'
import React from 'react'

interface userProfileInterface {
    name: string;
    image: string; 
}

const userProfile: userProfileInterface = {
    name: "Alexander Rodriguez",
    image: process.env.AVATAR_URL || ""
};

const SidebarProfileOrganism = () => {
  return (
    <ProfileMainMolecules linkImage={userProfile.image} textName={userProfile.name} />
  )
}

export default SidebarProfileOrganism