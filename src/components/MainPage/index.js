import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
//StyledComponents
import { 
    PurpleBg,
    UpperMidSection,
    ImageWrapper,
    TextWrapper,
    KurwaTekst
} from './MainPageComponents'

const MainPage = props => {
    return (
        <>
            <Navbar {...props}/>
            <UpperMidSection>
                <TextWrapper>
                    <KurwaTekst title="true">Kurwa naura</KurwaTekst>
                    <KurwaTekst>Jebac telewizje polskom</KurwaTekst>
                </TextWrapper>
                <ImageWrapper>
                    <PurpleBg />
                </ImageWrapper>
            </UpperMidSection>
        </>
    )
}

export default MainPage