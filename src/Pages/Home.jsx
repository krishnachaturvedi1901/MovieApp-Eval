import { Box, Button, HStack, VStack , Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Image } from '@chakra-ui/react'
import {Link} from "react-router-dom"



const Home = () => {
  const [movieList,setMovieList]=useState([])

  useEffect(()=>{
    const movieList=axios.get("http://localhost:8080/movies").then((res)=>setMovieList(res.data))
  },[])
  console.log(movieList)

  
  return (
      <VStack color="#ffffff" w="70%" bg="#1A202C" border="1px solid #black"  px="10px" py="40px" margin="auto" >
       <Text fontSize="2xl" my="15px"  >ALL MOVIES AVAILABLE</Text>
       { movieList.map((ele)=>{
          
           return <HStack mt="15px" bg="#000000" justifyContent="space-between" w="80%" border="1px solid #cecece">
            <Image src={ele.poster_path} w="100px" h="80px" alt="movieImg"/>
            <Text fontSize='xl'>{ele.title}</Text>
            <Link to={`/movie/${ele.id}`}>
              <Button color="#000000">More Detail...</Button>
            </Link>
           </HStack>
        })
       }
     
      
      </VStack>
  )
}

export default Home