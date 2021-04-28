import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './sidebarComponents'
import {FaPaw} from 'react-icons/fa'
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/"><FaPaw className="paw"/> Nossos Cães</SidebarLink>
                <SidebarLink to="/"><FaPaw className="paw"/> Ninhadas Disponiveis</SidebarLink>
                <SidebarLink to="/"><FaPaw className="paw"/> Estrutura do Canil</SidebarLink>
                <SidebarLink to="/"><FaPaw className="paw"/> Contato</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Adote</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
