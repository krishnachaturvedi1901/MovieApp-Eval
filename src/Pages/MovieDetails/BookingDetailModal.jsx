import React from 'react'
import { Box, Button, 
   Modal, ModalBody, ModalCloseButton,
   ModalContent, ModalFooter, ModalHeader, 
   ModalOverlay, Text, useDisclosure
  } from '@chakra-ui/react'
  import { useNavigate } from 'react-router-dom'

 const BookingDetailModal = ({movieBooked, bookedMovieData}) => {
  const navigate=useNavigate()

    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
    return (
      <Box>
        <Button
         disabled={!movieBooked}
         colorScheme='red'
          variant='outline'
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
          Show Booking Details
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Booking Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text size="36px">Name:{bookedMovieData.name}</Text>
              <Text size="20px">Seat:{bookedMovieData.seat}</Text>
            </ModalBody>
            <ModalFooter>
            <Button colorScheme='teal' mr={5} onClick={()=>navigate("/bookings")}>All Bookings</Button>
            <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
  
}
export default BookingDetailModal