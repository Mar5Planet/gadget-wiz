import React from 'react'
import { ReactPainter } from 'react-painter';
import colorImg from '../../Assets/Images/colors.png'
import fileImg from '../../Assets/Images/file.png'
import toolImg from '../../Assets/Images/tools.png'

const Drawable = () => (
    <div>
        <img style={{position: 'absolute', bottom: 0, right: 0}} src={colorImg} alt="color-img"/>     

        <img style={{position: 'absolute', bottom: 0, left: 0, height: '85%'}} src={toolImg} alt="color-img"/>
        <ReactPainter 
          width={400}
          height={220}
          render={({ triggerSave, canvas }) => (
            <div>
              <div>{canvas}</div>
            </div>
          )}
        />

    </div>
);

export default Drawable;
