import React from 'react'
import { ReactPainter } from 'react-painter';
 
const Drawable = () => (
  <ReactPainter 
    width={400}
    height={220}
    render={({ triggerSave, canvas }) => (
      <div>
        <div>{canvas}</div>
      </div>
    )}
  />
);

export default Drawable;
