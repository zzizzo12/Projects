import React , { useState } from 'react';
import InfoSection from '../components/InfoSection/index';
import InfoSection1 from '../components/InfoSection/index1';
import InfoSection2 from '../components/InfoSection/index2';
import { homeObjOne , homeObjTwo , homeObjThree} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ZaidSection from '../components/ZaidSection';

const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle} />
           <Navbar toggle={toggle} /> 
           <ZaidSection />
           <InfoSection {...homeObjOne}/> 
           <InfoSection1 {...homeObjTwo} /> 
           <InfoSection2 {...homeObjThree} />  
        </>
    )
}

export default Home
