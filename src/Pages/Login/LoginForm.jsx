  import {useContext, useState}from "react";
  import {FormControl,FormLabel,FormErrorMessage,FormHelperText} from '@chakra-ui/react'
  import React from 'react'
  import { Input } from '@chakra-ui/react'
  import {InputGroup} from "@chakra-ui/react"
  import { InputRightElement } from "@chakra-ui/react"
  import {Box} from "@chakra-ui/react"
  import {Button} from "@chakra-ui/react"
  import { AuthContext } from "../../Context/AuthContextProvider";
  import axios from "axios";
  import { useToast } from '@chakra-ui/react'

  
  export default function LoginForm() {
    const {toggleAuth}=useContext(AuthContext)
    const [input, setInput] = React.useState(
      {
        email:"",
        password:"",
      })
      console.log(input)
    const [show, setShow] = React.useState(false)
    const toast = useToast()

    const handleClick = () => setShow(!show)
    
    const handleInputChange = (e) => {
     const {name,value}=e.target
    setInput({...input,[name]:value})
      
    }
    const handleRegisterUser=()=>{
       axios.post(`https://reqres.in/api/login`,{
        email:input.email,
        password:input.password
      }).then((res)=>{
        console.log("Response from reqres---->",res)
        toggleAuth()

      }).catch((error)=>{
        console.log("eroor------>",error)
        toast({
          title: 'Invalid credentials',
          description: "Use valid email-id or password (email-eve.holt@reqres.in  pass-cityslicka).",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        setInput({...input,email:"",password:""})
      })
    }
  
    let isErrorEmail = input.email==="" 
    let isErrorPass= input.password === ""
  
    return (
        <Box bg='#000000' w='40%'m="auto" mt="20px" p={4} color='white' borderRadius={6} >

            <FormControl isInvalid={isErrorEmail}>
              <FormLabel>Email</FormLabel>
              <Input
                type='email'
                name="email"
                value={input.email}
                onChange={handleInputChange}
              />
              {!isErrorEmail ? (
                <FormHelperText>
                  Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
           
            <FormLabel>Password</FormLabel>
            <InputGroup  mb="15px" size='md'>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                name="password"
                value={input.password}
                placeholder='Enter password'
                onChange={handleInputChange}

              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' color="black" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            {!isErrorPass ? (
              <FormHelperText>
                Enter the password.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
            <Button disabled={isErrorEmail||isErrorPass} mt="15px" colorScheme='blue' onClick={handleRegisterUser}>Login</Button>
            </FormControl>

        </Box>

    )
  }

  
  
  
  
  
  