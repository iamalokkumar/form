import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Currency from './Currency';
const Country = ({elem,i}) => {
  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute' ,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
  return (
    <div>
         <div key={i+1} style={{height:"720px",width:"350px",backgroundColor:"pink",borderRadius:"15px",textAlign:"center"}}>
            <img src={elem.flag} alt="flags" style={{width:"100%",height:"50%",borderRadius:"15px"}}/>
            <h2>Name:-<b style={{color:"red"}}>{elem.name}</b></h2>
            <h2>Capital:-<b style={{color:"red"}}>{elem.capital}</b></h2>
            <h2>NativeName:-<b style={{color:"red"}}>{elem.nativeName}</b></h2>
            <h2>Region:-<b style={{color:"red"}}>{elem.region}</b></h2>
            <h2>Polulation:-<b style={{color:"red"}}>{elem.population}</b></h2>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <div>
      <Button onClick={handleOpen}>Boundry</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {elem.name} Boundry
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {elem.borders+" "+" "}
          </Typography>
        </Box>
      </Modal>
    </div>
    <Currency e={elem}/>
            </div>
           
        </div>
    </div>
  )
}

export default Country