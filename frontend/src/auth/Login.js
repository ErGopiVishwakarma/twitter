import { Button, Flex, FormControl, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const navigate=useNavigate()

    const submitForm = async () => {
        if(!email ){
        alert('invalid cred')
           return ;
        }

        try {
         fetch('http://localhost:8080/user/login',{
             method:'POST',
             headers:{
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({email})
         }).then(res=>res.json())
         .then(res=>{
            if(res.token){
                alert('you logged in')                
                  localStorage.setItem('twitteruser',JSON.stringify(res))
                  navigate('/')
            }else{
              alert('invalid cred')
            }
             
               return ;
         }).catch(res=>{
             alert('something wrong')
               console.log(res)
               return ;
         })
        } catch (error) {
         console.log('something went wrong ',error)
        }
 }
    return (
        <Flex w='100%' direction={'column'} gap='10px'>
            <FormControl>
                <Input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='email' />
            </FormControl>
            <Button
                colorScheme='blue'
                p="8px"
                onClick={() => submitForm()}
                w='100%'>
                Login
            </Button>
        </Flex>
    )
}

export default Login