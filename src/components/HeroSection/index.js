import React from 'react'
import { useState } from 'react'
import Image from '../Images/image.jpg'
import {motion} from 'framer-motion';
import {HeroContainer,HeroBg,ImageBg,HeroContent,HeroH2,HeroH3,HeroH4,HeroBtnWrapper,HeroP,Button} from './HeroElements'
const HeroSection = () => {
    const [hover,setHover]=useState(false);
    const onHover=()=>{
        setHover(hover)
    }
    return (
        <HeroContainer>
            {/* <HeroBg>
                <ImageBg src={Image} />
            </HeroBg> */}
            <HeroContent>
                <HeroH3> How Good Are You At Sport?</HeroH3>
                <HeroH2>What is Your Universal Sports Number (USN) ? </HeroH2>
                <HeroH4>Take our Quick (10) Question Quiz to find out</HeroH4>
                <HeroP>Pick Your Sport</HeroP>
                   <HeroBtnWrapper>
                       < Button   to="/get-your-utn"
                       onMouseEnter={onHover} onMouseLeave={onHover}
                       >
                           Tennis (UTN)
                       </Button>
                       <Button  to="/get-your-usn"
                         onMouseEnter={onHover} onMouseLeave={onHover}
                       >
                           Soccer (USN)
                       </Button>
                   </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
