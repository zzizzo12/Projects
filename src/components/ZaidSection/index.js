import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { ZaidContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP,HeroBtnWrapper, ArrowForward, ArrowRight } from './ZaidElement';
import { Button } from '../ButtonElement';

const ZaidSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <ZaidContainer>
            <HeroBg>
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
            </HeroBg>
            <HeroContent>
                <HeroH1>Banque Virtuelle Facile</HeroH1>
                <HeroP>
                    Inscrit toi avec un nouveau compte aujourdh'ui et recois
                    500DH blablablabla
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Commencer {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </ZaidContainer>
    )
}

export default ZaidSection;
