import React from 'react'
import SliderComponent from './common/SliderComponent'

import { Stack } from '@mui/material';

const SliderSelect = () => {
  return (
    <Stack my={1.4}>
      <SliderComponent
        label="Home Value"
        unit="$"
        amount={3000}
        min={0} 
        max={250} 
        defaultValue={20} 
        step={10} 
        onChange={(e, value) => console.log(value)} 
      />
      <SliderComponent
        label="Down Payment"
        unit="$"
        amount={500}
        min={0} 
        max={150} 
        defaultValue={20} 
        step={10} 
        onChange={(e, value) => console.log(value)} 
      />
      <SliderComponent
        label="Loan Amount"
        unit="$"
        amount={700}
        min={0} 
        max={1250} 
        defaultValue={20} 
        step={10} 
        onChange={(e, value) => console.log(value)} 
      />
    </Stack>
  )
}

export default SliderSelect
