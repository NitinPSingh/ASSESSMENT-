import { Box } from '@mui/material'
import React from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

export default function SelectMulti({data,options,multi=true,disable=false,handleData,label}) {
  return (
    <Box display="flex" flexDirection="column">{console.log(data,label)}
    {multi && data.length>0 && <p style={{margin:"0px 8px"}}>{label}</p>}
    {!multi && data && <p style={{margin:"0px 8px"}}>{label}</p>}
    <Select isDisabled={disable}    closeMenuOnSelect={false}
    components={animatedComponents}
    value={data}
    isMulti={multi}
    onChange={handleData}
    options={options}
    isClearable
    theme={(theme)=>({...theme,minWidth:"150px"})}
    placeholder={label}
  />

  </Box>
  )
}
