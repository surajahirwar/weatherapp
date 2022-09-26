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
  Spinner,
} from "@chakra-ui/react";
import BarChart from "./BarChart";
import sun from "../assets/sun.png";
import { BiMap, BiSearch } from "react-icons/bi";
import cloudy from "../assets/cloudy.png";
import cloudyrain from "../assets/cloudyrain.png";
import rain from "../assets/rain.png";
import rainy from "../assets/rainy.png";
import sunny from "../assets/sunny.png";
import axios from "axios";

export default function Weather() {
  const [city, setcity] = useState({
    city: "delhi",
  });
  const [location, setlocation] = useState({
    lat: 28.7041,
    lon: 77.1025,
  });

  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false)
  const dispatch = useDispatch();
  // const { data, getdata,} = useSelector((state) => state.weatherReducer);
  const obj = [1, 2, 3, 4, 5, 6, 7];


  const newdata = [];
  const newtemp = [];
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${location.lat}&lon=${location.lon}&dt=1664009618&units=metric&appid=3e513c133abef78e5e0b44a73b1dbe92`
      )
      .then((e) => {
        e.data;

        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=hourly,minutely&units=metric&appid=3e513c133abef78e5e0b44a73b1dbe92`
          )
          .then((e) => {
            setdata(e.data);
          });
      });

   
  }, [location]);

  const rettime = (day) => {
    const date = new Date(day * 1000);
    var hor = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    return hor + ":" + min + ":" + sec;
  };

  const retday = (day) => {
   

    const date = new Date(day * 1000);
   
    const dateString = date.toString().substring(0, 10);
    return dateString.substring(0, 4);
  };

  const handalchamge = (e) => {
    setcity({
      ...city,
      city: e.target.value,
    });
  };

  const handalsubmit = () => {
    

    try {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city.city}&cnt=7&appid=3e513c133abef78e5e0b44a73b1dbe92&units=metric`
        )
        .then((e) => {
          setlocation({
            ...location,
            lat: e.data.city.coord.lat,
            lon: e.data.city.coord.lon,
          });
        });
    } catch (e) {
      console.log("hello", e);
    }
  };

  if(loading) return <div
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
       
      >
        <Box
          mt="20px"
         
          width={{ base: "100%", md: "50%" }}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          flexDir="column"
          overflow={"hidden"}
          boxShadow={"dark-lg"}
          padding="20px"
          rounded={"xl"}
        >
          <Stack
            mt="20px"
            border={"2px solid grey"}
            boxShadow="lg"
            rounded="2xl"
            spacing={4}
            w={{ base: "xs", md: "md" }}
          >
            <InputGroup borderColor={"white"} outline="none">
              <InputLeftElement outline={"none"} />
              <Box
                display={"flex"}
                pos={"relative"}
                w="100%"
                justifyContent={"space-between"}
              >
                <Button bg="none" fontSize={"2xl"}>
                  {" "}
                  <BiMap />
                </Button>
                <Input
                  outline={"none"}
                  border="none"
                  type="text"
                  onChange={(e) => handalchamge(e)}
                  placeholder="delhi"
                />
                <Button
                  bg="none"
                  onClick={() => {
                    handalsubmit();
                  }}
                  fontSize={"2xl"}
                >
                  <BiSearch />
                </Button>
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
            {data.daily?.map((e) => (
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
                  src={
                    e.weather[0].icon == "09d"
                      ? rainy
                      : e.weather[0].icon == "01d"
                      ? sunny
                      : e.weather[0].icon == "10d"
                      ? cloudyrain
                      : e.weather[0].icon == "02d"
                      ? cloudy
                      : e.weather[0].icon == "04d"
                      ? rain
                      : cloudy
                  }
                />
                <Box display={"flex"}>
                  <Text fontWeight={600}> {e.temp.min.toFixed(0)}°</Text>
                  <Text fontWeight={600}> {e.temp.max.toFixed(0)}° </Text>
                </Box>
                <Text fontWeight={600}>{e.weather[0].main}</Text>
              </Box>
            ))}
          </Flex>
          <Box overflow={"scroll"} maxW="xl">
            <BarChart location={location} />
          </Box>

          <Flex
            mt="10px"
            gap={5}
            w={"100%"}
            justifyContent="space-between"
            alignItems={"center"}
            position="relative"
          >
            <Box padding={2} bg="teal.100" w={{ base: "200px", md: "400px" }}>
              <Text fontWeight={600}>Pressure</Text>
              <Text fontWeight={400}>{data.current?.pressure} hpa</Text>
            </Box>
            <Box padding={2} bg="teal.100" w={{ base: "200px", md: "400px" }}>
              <Text fontWeight={600}>Humidity</Text>
              <Text fontWeight={400}>{data.current?.humidity} %</Text>
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
            <Box padding={2} w={{ base: "200px", md: "400px" }}>
              <Text fontWeight={800}>Sunrise</Text>
              <Text fontWeight={600}>{rettime(data.current?.sunrise)}</Text>
            </Box>
            <Box padding={2} w={{ base: "200px", md: "400px" }}>
              <Text textAlign={"end"} fontWeight={800}>
                Sunset
              </Text>
              <Text textAlign={"end"} fontWeight={600}>
                {rettime(data.current?.sunset)}
              </Text>
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
