import React, { useState, useEffect } from "react"
import CreateIcon from './CreateIcons'
import { Button, Select, Fieldset } from 'react95'

const iconUrl = 'http://localhost:3000/icons'


const CreateForm = (props) => {
    const [iconImages, setIconImages] = useState(false)
    const [secondarySelect, setSecondarySelect] = useState('')
    const [thirdSelect, setThirdSelect] = useState(false)
    
    const [gadgetName, setGadgetName] = useState('')
    const [gadgetType, setGadgetType] = useState('')
    const [gadgetContent, setGadgetContent] = useState('')
    const [gadgetIcon, setGadgetIcon] = useState('')

    useEffect(() => {
        fetch(iconUrl)
        .then(res => res.json())
        .then(data => setIconImages(data))
        
    }, [])

    const ImageUrl = () => {
        return (
            <div class="form-group d-flex align-items-center justify-content-between">
                <label className="mr-3">Image Url:</label>
                <input type='text' value={gadgetContent} onChange={(e) => setGadgetContent(e.target.value)} className="form-control w-75"/> 
            </div>
        )
    }

    const renderSecondInput = type => {
        setSecondarySelect(type)
        setGadgetType(type)
    }

    const renderThirdInput = () => {
        setThirdSelect(true)
    }

    const setIconImage = imageUrl => {
        setGadgetIcon(imageUrl)
    }

    const createGadgetObject = () => {
        let gadget
        if (gadgetType === 'folder') {
            return gadget= {
                name: gadgetName,
                content_type: gadgetType,
                icon_image: gadgetIcon
                }   } else if (gadgetType === 'image') {
                return gadget= {
                    user_id: props.user.id,
                    name: gadgetName,
                    folder_id: 1,
                    content_type: gadgetType,
                    icon_image: gadgetContent,
                    content: gadgetContent
                }
            } else {
                return gadget= {
                    user_id: props.user.id,
                    name: gadgetName,
                    folder_id: 1,
                    content_type: gadgetType,
                    icon_image: gadgetIcon,
                    content: gadgetContent
                }
            }
     }
    

    return(
        <div className='gadget card card-secondary'>
            
                    <div className="card-header text-center">
                        <button className="close-btn" onClick= {props.removeComponentForm}> X </button>
                        <span className="icon icon-xs w95-window-empty"></span>
                        Create Form
                    </div>

                    <div className="card-body" >
                    <form onSubmit={event => event.preventDefault()}>
                        <div className="form-group d-flex align-items-center justify-content-between">
                            <label htmlFor="default" className="mr-3">Name:</label>
                            <input id="default" value={gadgetName} onChange={(e) => setGadgetName(e.target.value)} type="text" className="form-control w-75" />
                        </div>

                        <div className="form-group has-success d-flex align-items-center justify-content-between">
                            <label for="success" className="mr-3">Gadget Type:</label>
                            <select id="success" type="select" className="form-select form-control w-75" onChange={(e) => renderSecondInput(e.target.value)} >
                                <option value="text" >Text</option>
                                <option value="image">Image</option>
                                <option value="folder">Folder</option> 
                            </select>
                        </div>

                        {(secondarySelect === 'image') ? <ImageUrl /> : ''}   

                        <div className="form-icons">
                            {iconImages ? iconImages.map(image => <CreateIcon key={image.id} setIcon={setIconImage} image_url={image.image_url}/>) : ''}
                        </div>

                        <div className="form-group d-flex justify-content-end" style={{paddingRight: '20px'}}>
                            <div className="d-flex"> 
                                <input className="btn-primary" type="submit" value="submit" onClick={() => {props.createGadget(createGadgetObject())}} />
                            </div> 
                        </div> 
                    </form> 
                </div>     

             </div>
              
    )
}

export default CreateForm


