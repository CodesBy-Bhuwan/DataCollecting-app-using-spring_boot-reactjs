import  React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';


export default function Student() {
    // to show all the data so we use useState-array
    const [Student, setStudent]=useState([])

    // useState will allow user to enter data and stores it
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const handleClick=(e)=>{
        e.preventDefault()
        const Student={name,address}
        console.log(Student)
        // To check if these event is working fine we use browser inspection_tool-console 
        // now we fetch the data
        fetch("http://localhost:8080/student/add",{
            //POST is secure and hides cleaverly from web-addr
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(Student)
        }).then(()=>{

            console.log("new client data added")
        })
    }
    // In most of the case it creates error in console called  CORS policy: it is due to backend problem.
    // To fix this error we have to cross-origin from where the data are controlled.(mainly:Controller-dir)

    useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
        setStudent(result);}
    )}
    ,[])


  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
        <Container>
            <Paper elevation={3}>
                <h2>Add Client Data</h2>
        <form>
      <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth value={name} onChange={(e)=>setName(e.target.value)}/>
      <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth value={address} onChange={(e)=>setAddress(e.target.value)}/>

      {/* The funtion of button is specified here along with the path */}
      <Button variant="outlined" onClick={handleClick}>Submit</Button>
      </form>
      {/* This will show what the user has entered
      This technique is used if the entered value has not been changed in the verse */}
      {/* {name}
      {address} */}

      </Paper>
      <h3>Details of Clients</h3>
      <Paper elevation={3}>
        {Student.map(Student=>(
            <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}}key={Student.id}>
                Id:{Student.id} <br/>
                Name:{Student.name} <br/>
                Address:{Student.address}
            </Paper>
        ))}

      </Paper>
      </Container>
    </Box>
  );
}
