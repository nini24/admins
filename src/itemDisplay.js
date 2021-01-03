import React from 'react';



const itemDisplay = ({result}) => {
    return (
        <div className='res-data'>
            <img src = {result.logo}alt='logo' className='logo'/>
           <p>{result.company}</p>

        </div>
    )
}

export default itemDisplay;