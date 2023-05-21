import React from 'react'
import { Checkbox,FormControlLabel } from "@material-ui/core";

const CheckBoxes = ({label,id,handleChanged,checked}) => {
  return (
    <FormControlLabel control={<Checkbox checked={checked===1?true:false} inputProps={{ 'aria-label': 'controlled' }}/>} label={label} onChange={handleChanged}  />
  )
}

export default CheckBoxes