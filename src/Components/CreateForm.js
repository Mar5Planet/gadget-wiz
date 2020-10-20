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
            <div className="image-url">
                <label>Image Url:</label>
                <input type='text' value={gadgetContent} onChange={(e) => setGadgetContent(e.target.value)}/> 
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
                }   } else {
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
        <div className="gadget">
            <div className="gadget-icons">
                <button onClick= {props.removeComponentForm}> X </button>
            </div>
            <div className="gadget-content">

                <form onSubmit={event => event.preventDefault()}>
                    <label>Gadget Name</label>
                    <input type='text' value={gadgetName} onChange={(e) => setGadgetName(e.target.value)}/>
                    <div className="form-select">
                        <label>Gadget Type</label>
                        <br/>
                        <select onChange={(e) => renderSecondInput(e.target.value)} name="gadget-type" id="gadget-select">
                        <option value="text" >Text</option>
                        <option value="image">Image</option>
                        <option value="folder">Folder</option>
                        </select>
                    </div>
                    {(secondarySelect === 'image') ? <ImageUrl /> : ''}    
                    <div className="form-icons">
                        {iconImages ? iconImages.map(image => <CreateIcon key={image.id} setIcon={setIconImage} image_url={image.image_url}/>) : ''}
                    </div>
                    <input type="submit" value="submit" onClick={() => {
                        props.createGadget(createGadgetObject())
                    }} />
                </form>    
            </div>
        </div>

    )

}

export default CreateForm
