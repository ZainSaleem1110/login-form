import React, { useState, useRef } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import { Link, useHistory } from 'react-router-dom'

function CreateAcoount() {
  const [inp, setInp] = useState()
  const [error, setError] = useState()
  let handleChange = (e) => {
    console.log(e.target.value)
    setInp({ ...inp, [e.target.name]: e.target.value })
  }
  const history = useHistory()
  let handleSubmit = (e) => {
    e.preventDefault();
    if (inp.pass == inp.comPass) {
      history.push("/verifyAccount")
    }
    else {
      setError("Password not match")
    }
  }
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 6 }}>
      <Box className="mb-5">
        <Card variant="outlined" sx={{ background: '#161719',height:"80vh",display:"flex",alignItems:"center" }} >
          <form onSubmit={handleSubmit}>
            <Box sx={{width:"450px",display:"flex", flexDirection:"column",alignItems:"center" }}>
              <Box className="col-md-10 col-sm-8 col-12 pl-0" sx={{backgroundColor:"black",color:"white"}}>
                <TextField className="col-12 fname" id="outlined-basic" label="First name" size="small" variant="outlined" name="firstName" required />
              </Box>
              <Box className="col-md-6 col-sm-8 col-12 pl-0">
                <TextField className="col-12 lname" id="outlined-basic" label="Last name" size="small" variant="outlined" name="lastName" required />
              </Box>
              <Box className="col-md-6 col-sm-8 col-12 pl-0">
                <TextField id="outlined-basic" className="col-md-12 col-sm-8 col-12 email" label="Email address" size="small" variant="outlined" name="email" type="email" onChange={handleChange} required />
              </Box>
              <Box className="col-md-6 col-sm-8 col-12 pl-0">
                <TextField
                  className="col-12 pass"
                  id="outlined-basic"
                  onChange={handleChange}
                  name="pass"
                  id="outlined-error-helper-text" label="Password" size="small" variant="outlined"
                  type='password'
                  required
                  InputProps={{
                    endAdornment: <InputAdornment position="end"><RemoveRedEyeIcon /></InputAdornment>,
                  }}
                />
              </Box>
              <Box className="col-md-6 col-sm-8 col-12 pl-0">
                <TextField id="outlined-basic"
                  className="col-12 compass"
                  onChange={handleChange}
                  name="comPass"
                  id="outlined-error-helper-text" label="Password" size="small" variant="outlined"
                  required
                  type='password'
                  InputProps={{
                    endAdornment: <InputAdornment position="end"><RemoveRedEyeIcon /></InputAdornment>,
                  }}
                />
                <Typography sx={{ mt: 1, fontSize: 14, color: "red" }}>{error}</Typography>
              </Box>
            </Box>
            <Box sx={{ my: 3, display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" type="submit" onSubmit={handleSubmit} sx={{ borderRadius: '20px', fontWeight: 'bold' }} style={{ backgroundColor: "#0A56A3" }}
              >NEXT</Button>
            </Box>
          </form>
        </Card>
      </Box>
    </Box>
  )
}


export default CreateAcoount
