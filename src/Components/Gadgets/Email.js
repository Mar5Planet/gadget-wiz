import React, { useState } from 'react'

function EmailGadget(props) {
    const [fromEmail, setFromEmail] = useState(props.user.email)
    
    
    return (
        <form className="emailForm">

            <div className="form-group d-flex align-items-center justify-content-between">
                <label className="mr-3">From:</label>
                <input type="email" value={fromEmail} onChange={(e) => setFromEmail(e.target.value)} className="form-control w-75"/>
            </div>
           
            <div className="form-group d-flex align-items-center justify-content-between">
                <label classNameName="mr-3">To:</label>
                <input type="email" className="form-control w-75" />
            </div>

            <div class="form-group d-flex align-items-center justify-content-between">
                <label className="mr-3">Subject:</label>
                <input type="text" className="form-control w-75"/>
            </div>
           
            <div class="form-group d-flex justify-content-between mb-2">
                <label class="mr-3">Message:</label>
                <textarea id="textarea" class="form-control w-75" cols="30" rows="4"></textarea>
            </div>

            <div class="d-flex justify-content-end">
                <div class="d-flex">
                    <input type='submit' value={'Send'}/>
                </div>
            </div>


        </form>
    )
    
}

export default EmailGadget