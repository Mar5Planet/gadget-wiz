import React, {useState, useEffect} from 'react'
import DesktopNav from '../Components/DesktopNav'
import IconContainer from './IconContainer'
import Gadget from '../Components/Gadget'
import { useClippy, ClippyProvider } from '@react95/clippy'
import CreateForm from '../Components/CreateForm.js'


const baseGadgetsUrl = 'http://localhost:3000/base_gadgets/'
const customGadgetsUrl = 'http://localhost:3000/gadgets/'
const folderGadgetUrl = 'http://localhost:3000/folders'

function DesktopContainer(props) {
    const [baseGadgets, setBaseGadgets] = useState([])
    const [customGadgets, setCustomGadgets] = useState([])
    const [folderGadgets, setFolderGadgets] = useState([])
    const [renderedGadget, setRenderedGadget] = useState('')
    const [renderedGadgetTwo, setRenderedGadgetTwo] = useState('')
    const [createForm, setCreateForm] = useState(false)
    
 
    const fetchGadgets = () => {
      fetch(baseGadgetsUrl)
      .then(res => res.json())
      .then(data => setBaseGadgets(data));

      fetch(customGadgetsUrl)
      .then(res => res.json())
      .then(data => customGadgetFilter(data));
    
      fetch(folderGadgetUrl)
      .then(res => res.json())
      .then(data => folderGadgetFilter(data));

    }

    const customGadgetFilter = (gadgetArr) => {
        let userGadgets = gadgetArr.filter(gadget => gadget.user_id === props.loggedinUser.id)
        setCustomGadgets(userGadgets)
    }

    const folderGadgetFilter = (gadgetArr) => {
        let userGadgets = gadgetArr.filter(gadget => gadget.id !== 1)
        setFolderGadgets(userGadgets)
    }

    useEffect(() => { fetchGadgets()}, [])
    
    const renderGadget = (gadget) => {
         setRenderedGadget(<Gadget classN="gadget" user={props.loggedinUser} renderGadget={renderSecondaryGadget} patchGadget={patchGadget} gadget={gadget} remove={removeGadget} gadgets={customGadgets} />)         
    } 

    const renderSecondaryGadget = (gadget) => {
        setRenderedGadgetTwo(<Gadget classN="gadget2" user={props.loggedinUser} renderGadget={renderSecondaryGadget} patchGadget={patchGadget} gadget={gadget} remove={removeGadgetTwo} gadgets={customGadgets} />)         
    }

    const removeGadget = () => {
        setRenderedGadget('')
    }

    const removeGadgetTwo = () => {
        setRenderedGadgetTwo('')
    }
    
    const patchGadget = (gadget, content) => {
        let url
        if (gadget.content_type.includes('base')) {
            url = baseGadgetsUrl
        } else {
            url = customGadgetsUrl
        }

        let options = {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({
                content
            })
        }

        fetch(url + gadget.id, options)
        .then(res => res.json())
        .then(data => findGadgetAndUpdate(data))

    }

    const findGadgetAndUpdate = gadget => {
        let gadgetsArr
        if (gadget.content_type.includes('base')) {
            gadgetsArr = baseGadgets
        } else {
            gadgetsArr = customGadgets
        }

        let match= gadgetsArr.find(gadg => gadg.id === gadget.id)
        let index = gadgetsArr.indexOf(match)
        gadgetsArr[index] = gadget
        setCustomGadgets(gadgetsArr)
    }

    const Clippy = () => {
        const { clippy } = useClippy()
        return('')

        // !!renders a button that when clicked activates Clippy – though it seems redundant. Clippy seems to respond when you click him proper. 
        // return <span onClick={() => clippy.play('Wave')}>Hello Clippy!</span>
    }

    const createGadget = gadgetPassed => {
        if (gadgetPassed.content_type === 'folder') {
            postToFolder(gadgetPassed)
        } else {
            postToGadget(gadgetPassed)
        }
    }

    const postToFolder = (folder) => {
        let options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({
                folder
            })
        }

        fetch(folderGadgetUrl, options)
        .then(res => res.json())
        .then(data => setFolderGadgets([...folderGadgets, data]))
    }


    const postToGadget = (gadget) => {
        let options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({
                gadget
            })
        }

        fetch(customGadgetsUrl, options)
        .then(res => res.json())
        .then(data => setCustomGadgets([...customGadgets, data]))
    }

    const renderComponentForm = () => {
       setCreateForm(true);
    }
    

    const removeComponentForm = () => {
        setCreateForm(false) 
     }
     

    return (
        <div id="desktop">
            <DesktopNav logout={props.logout} renderedGadget={renderedGadget} renderedGadgetTwo={renderedGadgetTwo} renderComponentForm={renderComponentForm} />
            {renderedGadget}
            {renderedGadgetTwo}
            {createForm ? <CreateForm user={props.loggedinUser} createGadget={createGadget} removeComponentForm={removeComponentForm} /> : null}
            <IconContainer folderGadgets={folderGadgets} baseGadgets={baseGadgets} customGadgets={customGadgets} renderGadget={renderGadget}/>
            <ClippyProvider >
                <Clippy />
            </ClippyProvider>
        </div>
    )
}

export default DesktopContainer;