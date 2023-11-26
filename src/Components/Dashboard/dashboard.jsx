import React from 'react'
import './deshboard.css'
import { Outlet, Link } from "react-router-dom";
import {RxHome} from 'react-icons/rx'
import {CgProfile} from 'react-icons/cg'
import {FcStatistics, FcSettings} from 'react-icons/fc'
import {FiLogOut} from 'react-icons/fi'
import {FaQuestionCircle} from 'react-icons/fa'
import SideNav,{Toggle,NavItem,NavIcon,NavText} from '@trendmicro/react-sideNav';
import "@trendmicro/react-sideNav/dist/react-sideNav.css"
const main = () => {
  return (
    <>
     <SideNav
     onselect={selected=>{
        console.log(selected)
     }}
     >
        <SideNav.Toggle style={{paddingtop:"60px"}}/>
        <SideNav.Nav defaultselected="Home" style={{paddingtop:"60px"}}>
            <NavItem>
                <NavIcon ><RxHome style={{fontSize:"1.5em"}}/></NavIcon>
                
                 <NavText to="/Home">Home</NavText>
                
                
            </NavItem>
            <NavItem>
                <NavIcon ><CgProfile style={{fontSize:"1.5em"}}/></NavIcon>
                <NavText>Profile</NavText>
            </NavItem>
            <NavItem>
                <NavIcon ><FcStatistics style={{fontSize:"1.5em"}}/></NavIcon>
                <NavText>Blog</NavText>
            </NavItem>
            <NavItem>
                <NavIcon ><FcSettings style={{fontSize:"1.5em"}}/></NavIcon>
                <NavText>Settings</NavText>
            </NavItem>
            <NavItem>
                <NavIcon ><FaQuestionCircle style={{fontSize:"1.5em"}}/></NavIcon>
                <NavText>FAQ</NavText>
            </NavItem>
            <NavItem>
                <NavIcon ><FiLogOut style={{fontSize:"1.5em"}}/></NavIcon>
                <NavText>LogOut</NavText>
            </NavItem>
        </SideNav.Nav>
     </SideNav>

     <div>
        <div>
            <h1>Hello My name Boby Singh</h1>
        </div>
     </div>
    </> 
  );
}

export default main