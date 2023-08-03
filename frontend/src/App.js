import { Box, Flex } from "@chakra-ui/react";
import Auth from "./Authentication/Auth";
import { useEffect, useState } from "react";
import axios from 'axios'
import MainPage from "./Pages/MainPage";
import './Style/app.css'
import { useLocation, useSearchParams } from "react-router-dom";

let setValue = ''
function App() {
   const [searchParam,setSearchParams] = useSearchParams()
   let getToken = searchParam.get('token') 
   const id = searchParam.get('userID')
   const storageToken = localStorage.getItem('twitteruser') || ''
   if(storageToken){
        setValue = JSON.parse(storageToken)
   }
   let [twitteruser ,setTwitterUser] = useState(setValue)

   const storeUserInfoFun = async() =>{
	if( id && getToken){
		try {
			const {data} = await axios.get(`https://social-world.onrender.com/user/userInfo/${id}`)
			data.token = getToken
			localStorage.setItem('twitteruser',JSON.stringify(data))
			setSearchParams({userID:'',token:''})
			window.location.reload()
		} catch (error) { 
			console.log(error)
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
  console.log(twitteruser)
	
  return (
      <Box className="app">
		{
		  twitteruser?<MainPage />:<Auth />
		}
	  </Box>
      
  );
}

export default App;
