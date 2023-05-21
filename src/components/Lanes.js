import React, { useEffect, useState } from "react";

import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";

import CheckBoxes from "./CheckBoxes";

const Lanes = ({ data = {}, handleChanged, lane }) => {
  const [checked, setIschecked] = useState(
    new Array(Object.keys(data)?.length).fill(0)
  );
  useEffect(()=>{
    setIschecked(new Array(Object.keys(data)?.length).fill(0))
  },[data])

  
  if (Object.keys(data).length === 0) {
    return null;
  }



  const clicked = (index,ele,lane) => {
    let same= false
    
    setIschecked((val) => {
      const temp = new Array(Object.keys(data).length).fill(0); // temp[index] = 1
      if(val[index] ===1){
       same=true
      }
      temp[index] = val[index] ? 0 : 1;
      handleChanged(ele, lane,same);
      return temp;
    });
  };

  return (
    <FormGroup>
      {data.map((ele, index) => (
        <CheckBoxes
          label={ele.name}
          id={ele.id}
          checked={checked[index]}
          handleChanged={() => {
            clicked(index,ele,lane);            
          }}
          key={ele.id}
        />
      ))}
    </FormGroup>
  );
};

export default Lanes;
