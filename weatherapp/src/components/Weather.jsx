import React from "react";
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
} from "@chakra-ui/react";
import BarChart from "./BarChart";

export default function Weather() {
    // https://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=3e513c133abef78e5e0b44a73b1dbe92
  // https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=41.211128&lon=174.908081&dt=1664009618&appid=3e513c133abef78e5e0b44a73b1dbe92
  // https://api.openweathermap.org/data/2.5/forecast?q=delhi&cnt=7&appid=3e513c133abef78e5e0b44a73b1dbe92&units=metric
  // https://api.openweathermap.org/data/2.5/onecall?lat=-41.211128&lon=174.908081&exclude=daily,minutely,current,alerts&units=metric&appid=3e513c133abef78e5e0b44a73b1dbe92
  //   https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.weatherReducer);

  useEffect(() => {
    dispatch(Getweather());
  }, []);

  var obj = [1, 2, 3, 4, 5, 6, 7, 8];

  // console.log(data)

  return (
    <div>
      <Flex
        gap={5}
        w={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir="column"
        position="absolute"
        border={"2px solid red"}
      >
        <Box
          mt="20px"
          border={"2px solid green"}
          width={{ base: "100%", md: "70%" }}
        >
          <Stack mt="20px"  spacing={4} w={{ base: "xs", md: "md" }}>
            <InputGroup>
              <InputLeftElement />
              <Input type="tel" placeholder="Phone number" />
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
            overflowX={{ base: "scroll", md: "hidden" }}
          >
            {obj.map((e)=>(

                <Box
                key={e}
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
              <Image
                w="50px"
                src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg"
                />
              <Text fontWeight={600}>Fir</Text>
              <Box display={"flex"}>
                <Text fontWeight={600}>28° </Text>
                <Text fontWeight={600}> 32°</Text>
              </Box>
              <Text fontWeight={600}>Clouds</Text>
            </Box>
                ))}
          </Flex>
          <BarChart />

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
                <Text fontWeight={400}>1005 hpa</Text>
            </Box>
            <Box   padding={2} bg="teal.100" w={{base :"200px" , md:"400px"}}>
                <Text fontWeight={600}>Humidity</Text>
                <Text fontWeight={400}>80%</Text>
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
                <Text fontWeight={600}>5:41am</Text>
            </Box>
            <Box  padding={2}  w={{base :"200px" , md:"400px"}}>
                <Text textAlign={"end"} fontWeight={800}>Sunset</Text>
                <Text textAlign={"end"} fontWeight={600}>5:45pm</Text>
            </Box>
                    
                
                </Flex>
            </Box>
        </Flex>
    </div>
  );
}
