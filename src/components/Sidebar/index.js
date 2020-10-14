import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarLink,SidebarMenu } from './SidebarElements'
 
const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}  onClick={toggle}  >
            
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to="/sports-grading-blog">
                      BLOG
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="/help">
                      WHAT IS UTN
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="https://marconitennis.com.au/">
                      MARCONI TENNIS AND SQUASH
                    </SidebarLink>
                </SidebarMenu>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
