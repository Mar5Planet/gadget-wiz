import React, {useState, useEffect} from 'react'

function DesktopNav() {
    return (
        <div className="navbar">
        <div className="btn-group dropup">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropup
            </button>
            <div className="dropdown-menu">
                <button className="dropdown-item">Shut Down...</button>
                <button className="dropdown-item">Another action</button>
                <button className="dropdown-item">Something else here</button>
            </div>
            </div>
        </div>
    )
}

export default DesktopNav;