import { Box, HStack, Image,Stack,Text, useToast, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookingDetailModal from './BookingDetailModal'
import SeatDetailModal from './SeatDetailModal'

const MovieDetail = () => {
  const movieId=useParams()
  const [movieDetail,setMovieDetail]=useState({})
  const [movieBooked,setMovieBooked]=useState(true)
  const [bookedMovieData,setBookedMovieData]=useState({})
  const toast = useToast()


  useEffect(()=>{
    axios.get(`http://localhost:8080/movies/${movieId.id}`).then((res)=>{
      setMovieDetail(res.data)
    }).then((error)=>{console.log(error)})
    
    fetch(`http://localhost:8080/moviesBooked?movie_id=${movieId.id}`)
    .then((res)=>res.json())
    .then((res)=>{
      if(res.length==0){
        console.log('movieNotAvailable in Booking List')
        setMovieBooked(false)
      }
      else{
        setMovieBooked(true)
        setBookedMovieData(res[0])
        console.log("movieAvailable in Booking list",res)
        }
    })
    .catch((e) => {console.log("fetchNetworkError-",e)})
    

  },[])

  console.log("movieDetail from first getReq",movieDetail)

  const handleBookMovie=({name,seat})=>{
    axios.post(`http://localhost:8080/moviesBooked`,{
      movie_id:movieId.id,
      name:name,
      seat:seat
    })
    .then(setMovieBooked(true))
    .then(toast({
      title: 'Movie Booking Confirmed.',
      description: "We've booked your seat enjoy.",
      status: 'success',
      duration: 2000,
      isClosable: true,
    }))
    .then(
      axios.get(`http://localhost:8080/moviesBooked?movie_id=${movieId.id}`)
      .then((res)=>{
        console.log("setBookedMovieData===>",res.data[0])
        setBookedMovieData(res.data[0])
      }).then((error)=>{console.log(error)})
  
    )
}

  
  return (
    <Box w="80%" h="auto" color="#ffffff" pb="10px" pt="40px" px="10px"  display="block" bg="#000000"  margin="auto" >
     <HStack w="100%" h="100%" mb="25px">
         
           <Image ml="15px" src={movieDetail.poster_path} h="30%" w="30%" mr="30px" alt='' />
        
   
         <VStack w="60%" h="100%" align="left" spacing={20} border="1px solid white" px="10px" py="10px" bg="#242B2E"  borderRadius={5}>
             <Text fontSize="24px">Title-{movieDetail.original_title}</Text><hr/>
             <Text>Language-{movieDetail.original_language}</Text>
             <HStack spacing={5} >
              <Box>Release Date-{movieDetail.release_date}</Box>
              <Box>Popularity-{movieDetail.popularity}</Box>
              <Box>Vote Average-{movieDetail.vote_average}</Box>
             </HStack>
             <Text fontSize="18px">Overview-{movieDetail.overview}</Text>
          </VStack>
      </HStack>
     <Stack mt="20px" py="15px" px="15px" direction='row' bg="#242B2E" justifyContent="space-around" spacing={4} align='center' margin="auto" border="1px solid white">

        <SeatDetailModal movieBooked={movieBooked} handleBookMovie={handleBookMovie} />
        <BookingDetailModal movieBooked={movieBooked} bookedMovieData={bookedMovieData} />

      </Stack>
    </Box>
  )
}

export default MovieDetail

