import React from 'react'

const ScrollingDiv = ({children}) => {
    // const initCords;
    // const updateCoords = (event, scrollBar) => {
    //     if (initCords) {
    //         const eSuffix = initCords.axis.toUpperCase()
    //         const sSuffix = initCoords.axis == 'x' ? 'Left' : 'Top'
    //         const dSuffix = initCoords.axis == 'x' ? 'Width' : 'Height'
    //         const max = elem['scroll' + dSuffix] - elem['client' + dSuffix];
    //         const room = elem['client' + dSuffix] - initCoords.bar['client' + dSuffix];
    //         const delta = e['page' + eSuffix] - initCoords.abs;
    //         const abs = initCoords.p0 + delta;
    //         elem['scroll' + sSuffix] = max * abs / room;
    //     }
    // }

    // const scrollBarResize = e

    return (
        <>
            {children}
        </>
    )
}

export default ScrollingDiv