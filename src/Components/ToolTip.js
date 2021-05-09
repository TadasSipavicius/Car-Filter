import React, { useState } from 'react';

import '../Visualization/ToolTip.css';

const ToolTip = ({children, text}) => {

    const [showToolTip, setShowToolTip] = useState(false);

    return(
        <div className='tooltip-container'>
            <div className={showToolTip ? "tooltip-is-visible" : "tooltip"}>
                {text}
                <span className='arrow' />
            </div>
            <div
                onMouseEnter={() => setShowToolTip(true)}
                onMouseLeave={() => setShowToolTip(false)}
            >
                {children}
            </div>
        </div>
    )
}

export default ToolTip;