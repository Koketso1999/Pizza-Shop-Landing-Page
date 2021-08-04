import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SideBtnWrap } from './SideBarElements'

function Sidebar({isOpen, toggle}) {
    return (
       <SidebarContainer isOpen={isOpen} toggle={toggle} >
           <Icon onClick={toggle}>
               <CloseIcon/>

           </Icon>
           <SidebarMenu>
               <SidebarLink to='/'>Pizzas</SidebarLink>
               <SidebarLink to='/'>Dessert</SidebarLink>
               <SidebarLink to='/'>Full Menu</SidebarLink>

           </SidebarMenu>
           <SideBtnWrap>
               <SidebarRoute to='/'>Order Now</SidebarRoute>
           </SideBtnWrap>
       </SidebarContainer>
    )
}

export default Sidebar
