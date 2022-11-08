import { DeleteIcon } from "@chakra-ui/icons"
import { Box, Button, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Toast, useDisclosure } from "@chakra-ui/react"
import React, { useEffect } from "react"

function DeleteModal({handleDelete,movie_id,confirmDelete}) {
  
  console.log("movie_id in delete comp--->",movie_id)

    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(()=>{
        if(confirmDelete){
              onClose()
            }
    
    },[confirmDelete])
  
    return (
      <Box>
        <Box p="10px" cursor="pointer" onClick={onOpen}  bg="yellow" borderTopLeftRadius="8px" >
          <DeleteIcon color="black" mr="20px" h="28px" w="28px" />
        </Box>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
           <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
          />
          <ModalContent>
            <ModalHeader>Are you confirm you want to delete your booking.</ModalHeader>
            <ModalCloseButton />
            <ModalFooter>
            <Button onClick={(e)=>handleDelete(movie_id,e)} mr="20px" >Delete</Button>
            <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
  }
  export default DeleteModal