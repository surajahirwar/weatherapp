import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getweather } from "./Redux/action/weatherAction";
import {
  Flex,
  Spacer,
  Box,
  InputGroup,
  InputLeftElement,
  Stack,
  Input,
  Text,
  Image,
  Button,
  Spinner
} from "@chakra-ui/react";
import BarChart from "./BarChart";
import sun from "../assets/sun.png"
import { BiMap,BiSearch } from "react-icons/bi";
import cloudy from "../assets/cloudy.png"
import cloudyrain from "../assets/cloudyrain.png"
import rain from "../assets/rain.png"
import rainy from "../assets/rainy.png"
import sunny from "../assets/sunny.png"
import axios from "axios";


export default function Weather() {
    // https://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=3e513c133abef78e5e0b44a73b1dbe92
  // https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=41.211128&lon=174.908081&dt=1664009618&appid=3e513c133abef78e5e0b44a73b1dbe92
  // https://api.openweathermap.org/data/2.5/forecast?q=delhi&cnt=7&appid=3e513c133abef78e5e0b44a73b1dbe92&units=metric
  // https://api.openweathermap.org/data/2.5/onecall?lat=-41.211128&lon=174.908081&exclude=daily,minutely,current,alerts&units=metric&appid=3e513c133abef78e5e0b44a73b1dbe92
  //   https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg
  const dispatch = useDispatch();
  const { data, getdata } = useSelector((state) => state.weatherReducer);
 const obj = [1,2,3,4,5,6,7]
    
  useEffect(() => {
    
    dispatch(Getweather());
  },[]);


  const [humiditydata, sethumiditydata] = useState([])
  const newdata = []
  const newtemp = []
  useEffect(() => {
    
    axios.get("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=23.4162&lon=25.6628&dt=1664009618&units=metric&appid=0e8b2c4e5a41d2b3b81897c77b9e4d88")
    .then((e)=>{

      sethumiditydata(e.data.current)
      
        
    })  
    
  },[]);

 
  console.log(humiditydata)
  


const rettime = (day)=>{
  const date = new Date(day*1000)
var hor = (date.getHours())
var min = (date.getMinutes())
var sec = (date.getSeconds())
return (hor+":"+min+":"+sec)

}



const retday = (day) =>{
// const event = new Date(day);

const date = new Date(day*1000)
// console.log(date)
const dateString = date.toString().substring(0,10)
    return dateString.substring(0,4);


}   



if(getdata.loading) return <div
    style={{
      position:"absolute",
      display: "flex",
      justifyContent:"center",
      alignItems: "center",
      left:"30%",
      top:"40%"
        
        
    }}
    >
    <Spinner
        
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        w="200px"
        h="200px"
/>
</div>
  return (
    <div>
      <Flex
        gap={5}
        w={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir="column"
        position="absolute"
        // border={"2px solid red"}
      >
        <Box
          mt="20px"
          // border={"2px solid green"}
          width={{ base: "100%", md: "70%" }}
          display="flex" 
          justifyContent={"center"}
          alignItems={"center"}
          flexDir="column"
          overflow={"hidden"}
          boxShadow={"xl"}
          padding="20px"
        >
          <Stack mt="20px" border={"2px solid grey"}  boxShadow="lg" rounded="2xl" spacing={4} w={{ base: "xs", md: "md" }}>
            <InputGroup borderColor={"white"} outline="none">


            <InputLeftElement outline={"none"}   />
            <Box display={"flex"} pos={"relative"} w="100%" justifyContent={"space-between"}>
                <Button bg="none" fontSize={"2xl"} > <BiMap /></Button>
                 <Input outline={"none"} border="none" type="text" placeholder="Phone number"  />
                <Button bg="none" fontSize={"2xl"}><BiSearch /></Button>
            </Box>
            </InputGroup>
          </Stack>

          <Flex
            mt="20px"
            gap={5}
            w={"100%"}
            justifyContent="space-between"
            alignItems={"center"}
            position="relative"
            height={"200px"}
            overflowX={{ base: "scroll", md: "scroll" }}
          >
            {data.daily?.map((e)=>(

                <Box
                key={e.dt}
                //  border={"1px solid red"}
                padding="10px"  
                pos={"relative"}
                display={"flex"}
                flexDir={"column"}
                justifyContent="center"
                alignItems={"center"}
                w={{ base: "120px", md: "120px" }}
                //    h="150px"
                boxShadow={"xl"}
                rounded="md"
                >

              <Text fontWeight={600}>{retday(e.dt)}</Text>
              <Image
                w="100px"
                src = {e.weather[0].icon=="09d" ? rainy : e.weather[0].icon=="01d" ? sunny : e.weather[0].icon=="10d" ? cloudyrain : e.weather[0].icon=="02d" ? cloudy : e.weather[0].icon=="04d" ? rain : cloudy }
                />
              <Box display={"flex"}>
                <Text fontWeight={600}> {e.temp.min.toFixed(0)}°</Text>
                <Text fontWeight={600}> { e.temp.max.toFixed(0)}° </Text>
              </Box>
              <Text fontWeight={600}>{e.weather[0].main}</Text>
            </Box>
                ))}
          </Flex>
          <Box overflow={"scroll"} maxW="xl" >
          <BarChart />
          </Box>

         <Flex
            mt="10px"
          gap={5}
          w={"100%"}
          justifyContent="space-between"
          alignItems={"center"}
          position="relative"
         
           >
            <Box padding={2} bg="teal.100" w={{base :"200px" , md:"400px"}}>
                <Text fontWeight={600}>Pressure</Text>
                <Text fontWeight={400}>{humiditydata.pressure} hpa</Text>
            </Box>
            <Box   padding={2} bg="teal.100" w={{base :"200px" , md:"400px"}}>
                <Text fontWeight={600}>Humidity</Text>
                <Text fontWeight={400}>{humiditydata.humidity}%</Text>
            </Box>
                    
                
                </Flex>

                <Flex
          mt="10px"
          gap={5}
          w={"100%"}
          justifyContent="space-between"
          alignItems={"center"}
          position="relative"
        
           >
           
            <Box padding={2}  w={{base :"200px" , md:"400px"}}>
                <Text fontWeight={800}>Sunrise</Text>
                <Text fontWeight={600}>{rettime(humiditydata.sunrise)}</Text>
            </Box>
            <Box  padding={2}  w={{base :"200px" , md:"400px"}}>
                <Text textAlign={"end"} fontWeight={800}>Sunset</Text>
                <Text textAlign={"end"} fontWeight={600}>{rettime(humiditydata.sunset)}</Text>
            </Box>
                    
                
                </Flex>

                <Image
                mt="-50px"
                    height={{ base: "50%", md: "50%" }}
                    width={{ base: "100%", md: "100%" }}
                src={sun}
                />
            </Box>
        </Flex>
    </div>
  );
}
