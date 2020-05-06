import  React from 'react';
import { Input } from 'reactstrap';




const InputSearch = React.forwardRef((props, ref) => {
  return (
    <Input
      ref={ref}
      style={{lineHeight:'2rem',diplay:'flex', margin:'auto', marginBottom:'15px'}}
      className='text-muted' 
      placeholder='rechercher...' 
      onChange={props.searchField}
      value={props.input}
    />
  )
})

export default InputSearch;
