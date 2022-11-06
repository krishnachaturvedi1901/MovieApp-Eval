import { Box, Button, HStack, Image,Stack,Text, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const movieId=useParams()
  const [movieDetail,setMovieDetail]=useState({})

  useEffect(()=>{
    axios.get(`http://localhost:8080/movies/${movieId.id}`).then((res)=>{
      setMovieDetail(res.data)
    }).then((error)=>{console.log(error)})
  },[])
  console.log(movieDetail)
  
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
        <Button  colorScheme='teal' variant='solid'>
        Book Ticket
        </Button>
        <Button  colorScheme='teal' variant='outline'>
        Show Booking Details
        </Button>
      </Stack>
    </Box>
  )
}

export default MovieDetail

/*
{
      "id": 10,
      "title": "Jurassic World Dominion",
      "original_language": "en",
      "original_title": "Jurassic World Dominion",
      "overview": "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
      "popularity": 1920.879,
      "poster_path": "https://image.tmdb.org/t/p/original/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
      "release_date": "2022-06-01",
      "vote_average": 6.659,
      "vote_count": 881
    }
*/