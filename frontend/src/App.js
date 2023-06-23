import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./Route/Navbar";
import MainRoute from "./Route/MainRoute";
import Auth from "./Authentication/Auth";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import axios from 'axios'
import MainPage from "./Pages/MainPage";
import Login from "./auth/Login";
import './Style/app.css'


function App() {

	const twitteruser = localStorage.getItem('twitteruser') || ""

	const fun = async()=>{
		try {
			const data = await axios.get('http://localhost:8080/auth/login/success')
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}
  

	useEffect(()=>{
		fun()
	},[])
	
  return (
      <Box className="app">
		{
			twitteruser?<MainPage />:<Auth />
		}
	  </Box>
      
  );
}

export default App;
