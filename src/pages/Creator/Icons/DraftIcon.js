import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
    width: 20px;
    height: 20px;
    display: block;
`

const Icon = styled.div`
    content: url("https://firebasestorage.googleapis.com/v0/b/kursy-online-e1f8f.appspot.com/o/StaticResources%2Ffile-solid-20x20px.svg?alt=media&token=ca07efbb-f3c5-44e1-91ef-1e229ae31fbd");
`

const DraftIcon = () => {
    return (
        <IconContainer>
            <svg aria-hidden="true" width="20px" height="20px" focusable="false" data-prefix="fas" data-icon="file" class="svg-inline--fa fa-file fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"/>
            </svg>
        </IconContainer>
    )
}

export default DraftIcon
