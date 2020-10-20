import React, { useState } from 'react'

function EmailGadget(props) {
    const [fromEmail, setFromEmail] = useState(props.user.email)
    
    
    return (
        <form className="emailForm">
            <label>From</label>
            <input type="email" value={fromEmail} onChange={(e) => setFromEmail(e.target.value)}/>
            <label>To</label>
            <input type="email"  />
            <label>Subject</label>
            <input type="text" />
            <textarea></textarea>
            <input type='submit' value={'Send'}/>
        </form>
    )
    
}

export default EmailGadget