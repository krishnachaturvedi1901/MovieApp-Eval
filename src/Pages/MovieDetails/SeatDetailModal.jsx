import { Box, Button, FormControl,
     FormLabel, Input, Modal, ModalBody, ModalCloseButton,
      ModalContent, ModalFooter, ModalHeader, 
      ModalOverlay, Select, useDisclosure
     } from '@chakra-ui/react'

import React, { useEffect } from 'react'

const SeatDetailModal=({movieBooked,handleBookMovie})=>{
    
    const [userData,setUserData]=React.useState({})
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const handleChange=(e)=>{
        const {name,value}=e.target
        setUserData({...userData,[name]:value})
    }
    useEffect(()=>{
        if(movieBooked){
            {onClose()}
        }

    },[movieBooked])

    return (
      <Box>
        <Button disabled={movieBooked} onClick={onOpen} colorScheme='teal' variant='solid' >Book Ticket</Button>
  
        <Modal
          blockScrollOnMount={true}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent  >
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Your Name</FormLabel>
                <Input ref={initialRef} placeholder='Full name' name="name" value={userData.name} onChange={handleChange} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Select Seat Type</FormLabel>
                <Select placeholder='Select option' name="seat" value={userData.seat} onChange={handleChange}>
                  <option value='Front'>Front Seat</option>
                  <option value='Balcony'>Balcony Seat</option>
                  <option value='Back'>Back Seat</option>
                </Select>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={()=>{handleBookMovie(userData)}} >
                Book Seat
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
  }

export default SeatDetailModal