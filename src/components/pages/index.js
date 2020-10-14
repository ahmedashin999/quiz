import React,{useState} from 'react'
  import Navbar from '../Navbar'
  import Sidebar from '../Sidebar'
import HeroSection from '../HeroSection'
import {HeroInfo,HeroPic,InfoH2,Infop1,Infop2,Infop3,Infop4,HeroIntro} from './HomeElements'
const Home = () => {
 
    const[isOpen,setIsOpen]=useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)}
    return (
        <>
         <Navbar toggle={toggle}/>
         <Sidebar isOpen={isOpen}toggle={toggle} />
             
            
            <HeroSection/>
            <HeroInfo>
                <HeroIntro>
                    <InfoH2>What is USN</InfoH2>
                    <Infop1>USN stands for Universal Sports Number and is a simple rating system from (1) to (10).</Infop1>
                    <Infop2>(1) Being a professional and (10) being a complete beginner.</Infop2>
                    <Infop3>Opt into our Newsletter for great tips on how to improve your game</Infop3>
                    <Infop4><strong>Please note:</strong>Our online quiz is only as accurate as your answers,so answer them honestly for the most accurate rating</Infop4>
                </HeroIntro>
                <HeroPic>

                </HeroPic>
            </HeroInfo>
        </>
    )
}

export default Home
