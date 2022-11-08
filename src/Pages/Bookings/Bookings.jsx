import { Button, HStack, VStack , Text, Box,  useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Image } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import DeleteModal from './DeleteModal'

const Bookings = () => {
  const [isLoading,setIsLoading]=useState(false)
  const [movieBookedList,setMovieBookedList]=useState([])
  const [confirmDelete,setConfirmDelete]=useState(false)
  const [isError,setIsError]=useState(false)
  const toast = useToast()


  useEffect(()=>{
    setIsLoading(true)
    axios.get("http://localhost:8080/moviesBooked")
    .then((res)=>setMovieBookedList(res.data))
    .catch((err)=>setIsError(true))
    .finally(()=>setIsLoading(false))
  },[])

  console.log(movieBookedList)

 const handleDelete=(movie_id)=>{
    movie_id=+movie_id
    setIsLoading(true)
    setConfirmDelete(false)
    axios.delete(`http://localhost:8080/moviesBooked/${movie_id}`)
    .then((res)=>{
      axios.get("http://localhost:8080/moviesBooked")
      .then((res)=>setMovieBookedList(res.data))
      .catch(()=>setIsError(true))  

      toast({
        title: 'Movie Booking Cancelled.',
        description: "",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })

    })
    .finally(()=>{
      setIsLoading(false)
      setConfirmDelete(true)

    })
  }

  
  return (
      <VStack color="#ffffff" w="70%" bg="#000000" border="1px solid #black" spacing="20px" px="10px" py="40px" margin="auto" >
       <Text fontSize="2xl" my="15px"  >ALL BOOKED MOVIES</Text>
       { movieBookedList.map((ele)=>{
          
           return <HStack key={ele.id} my="20px" opacity={0.8} borderRadius="5px" bg="#242B2E" justifyContent="space-between" w="80%" p="5px" pr="0px" border="1px solid #cecece">
           <Link to={`/movie/${ele.movie_id}`}>
             <HStack w="100%" justifyContent="flex-start"  >
              <Image src={ele.poster_path} mr="30px" w="130px" h="120px" alt="movieImg"/>
              <VStack alignItems="flex-start" >
                <Text fontSize='24px' fontWeight="bold" >{ele.title}</Text>
                <Text fontSize='18px'>{ele.name}</Text>
                <Text fontSize='14px' color="yellow" >{ele.seat}</Text>
              </VStack>
             </HStack>
           </Link>
           <DeleteModal confirmDelete={confirmDelete} handleDelete={handleDelete} movie_id={ele.movie_id} />
           </HStack>
        })
       }
     
      
      </VStack>
  )
}

export default Bookings