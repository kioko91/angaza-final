import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import React, { useEffect,useState } from 'react'
import { Container } from '@mui/system';


const Technicians = ({ handlePosting}) => {
 


  // const [tech, setTech] = useFetchData()
  // const deleteTech = ()=>{
  //   fetch(`http://localhost:9292/technicians/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type":"application/json"
  //     }
  //   })
  //   .then(res=>res.json())
  //   .then(data => console.log(data))
  //   .catch(err=>console.log(err))

  //   fetch("http://localhost:9292/technicians")
  //     .then(res => res.json())
  //     .then(data => {
  //       setTech(data)
  //       console.log(data)
  //     })
  //     .catch(err => console.log(err))
  // }



    const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      town: '',
      job_type: '',
      job_description: '',
      labour_cost: ''

    })


      
    const [technicians, setTechnicians] = useState([])
    useEffect( () => {
      fetch("https://backend-host.herokuapp.com/technicians")
      .then(res => res.json())
      .then(data => setTechnicians(data))
    },[])

    function handleSubmit(e){
        e.preventDefault();
        fetch(`https://backend-host.herokuapp.com/technicians`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => {
            handlePosting(data)
        })

        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          town: '',
          job_type: '',
          job_description: '',
          labour_cost: ''
        })
    }

    function handleChange(e){
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    }  

  return (
    <div>
      <div>
        <Container className='formContainer'>
    <div 
    style={{ fontSize: "20px", fontWeight: "bold" }}
    >
        Add A Technician 
    </div>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>First Name</InputLabel>
            <Input name="first_name" value={formData.first_name} onChange={handleChange}/>
            <FormHelperText>Please Enter First Name</FormHelperText>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ m: 2, width: '35ch' }}>
            <InputLabel>Last Name</InputLabel>
            <Input name="last_name" value={formData.last_name} onChange={handleChange}/>
            <FormHelperText>Please Enter Last Name</FormHelperText>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Email</InputLabel>
            <Input name="email" value={formData.email} onChange={handleChange}/>
            <FormHelperText>Please Enter Email</FormHelperText>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Phone Number</InputLabel>
            <Input name="phone" value={formData.phone} onChange={handleChange}/>
            <FormHelperText>Please Enter Phone Number</FormHelperText>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Town</InputLabel>
            <Input name="town" value={formData.town} onChange={handleChange}/>
            <FormHelperText>Please Enter Town</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Job Type</InputLabel>
            <Input name="job_type" value={formData.job_type} onChange={handleChange}/>
            <FormHelperText>Please Enter Type of Job</FormHelperText>
        </FormControl>
      </div>
      
      
      <div>
      <FormControl sx={{ m: 1, width: '35ch' }}>
        <InputLabel>Job Description</InputLabel>
        <Input name="job_description" value={formData.job_description} onChange={handleChange}/>
        <FormHelperText>Technician's Job Description</FormHelperText>
        </FormControl>
      </div>
      
      <div>
        <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel>Labour Cost</InputLabel>
            <Input name="labour_cost" value={formData.labour_cost} onChange={handleChange}/>
            <FormHelperText>Add Technician's Salary</FormHelperText>
        </FormControl>
      </div>
    </Box>
    <div>
        <FormControl sx={{ display: "flex", flexWrap: "wrap", m: 1, width: '10ch' }}>
            <Button variant='outlined' type='submit' onClick={handleSubmit}>
                Add Technician
            </Button>
        </FormControl>
      </div>
    </Container>
    </div>
    <div className="card1">
        <div className='mx-[4%] mt-12'>
          <h2 className='font-averia text-3xl font-light'>ALL TECHNICIANS</h2>
            <div className='w-full flex flex-wrap justify-between'>
              {technicians.map((technician) => {
                return (
                  <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                    <div className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden h-96">
                      <div className="relative pb-48 overflow-hidden">
                          <img src="https://joeschmoe.io/api/v1/random" alt="" className="absolute inset-0 h-52 w-full object-contain" />
                      </div>
                      <div className="p-4 uppercase">
                          <h2 className="mt-2 mb-2 text-base font-semibold text-bethel-blue hover:text-blue-400">{technician.first_name} {technician.last_name} </h2>
                      </div>
                      <hr/>
                      <div className='flex items-center justify-between p-4 text-xs'>
                        <span> Job Type: {technician.job_type} </span>
                        <span>Labour: {technician.labour_cost} </span>
                      </div>
                      <div className='flex items-center justify-between p-4 text-xs'>
                      <button >Edit</button>
                      <button color="error" >Delete</button>
                      
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default Technicians;