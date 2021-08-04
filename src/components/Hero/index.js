import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../SideBar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroBtn, HeroP } from './HeroElements'

function Hero() {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
    setIsOpen(!isOpen);

} 

    return (
        <HeroContainer>
                <Navbar toggle={toggle} />
                <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>

                    <HeroH1>Greatest Pizza of All Time</HeroH1>
                    <HeroP>Ready In 60 Seconds</HeroP>
                    <HeroBtn>Place Your Order</HeroBtn>
                </HeroItems>
            </HeroContent>


        </HeroContainer>
    )
}

export default Hero
