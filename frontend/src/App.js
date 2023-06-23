import { Box, Flex } from "@chakra-ui/react";
import Auth from "./Authentication/Auth";
import { useEffect, useState } from "react";
import axios from 'axios'
import MainPage from "./Pages/MainPage";
import './Style/app.css'
import { useSearchParams } from "react-router-dom";


function App() {
   const [searchParam,setSearchParams] = useSearchParams()
   let getToken = searchParam.get('token') 
   const id = searchParam.get('userID')
   let [twitteruser ,setTwitterUser] = useState('')

   const storeUserInfoFun = async() =>{
	if( id && getToken){
		try {
			const {data} = await axios.get(`http://localhost:8080/user/userInfo/${id}`)
			data.token = getToken
			localStorage.setItem('twitteruser',JSON.stringify(data))
			setSearchParams({userID:'',token:''})
			window.location.reload()
		} catch (error) { 
			console.log(error,'gopi pagal error')
		}
	}
   }
  useEffect(()=>{
	storeUserInfoFun()
	let value = localStorage.getItem('twitteruser') || ''
	if(value){
	   setTwitterUser(JSON.parse(value))
	}
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
