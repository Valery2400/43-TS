import { log } from "console";
import MyButton from "../components/myButton/MyButton";
import { Consultation07Wrapper, Result, Text, Error } from "./styles";
import { useState } from "react";

function Consultation_07() {
const [joke, setJoke] = useState<string>('')
const [error,setError] = useState<string>('')

const RANDOM_JOKE_URL = 'https://official-joke-api.appspot.com/random_joke';

const getJokes = async() => {
  try {
  const response = await fetch(RANDOM_JOKE_URL)
  console.log(response);
  const result = await response.json()
  console.log(result);
  if (response.ok){

  }
  else {

  }
   } catch(error) {

   }
  }




  return (
    <Consultation07Wrapper>
      <MyButton name="GET JOKE" onClick={getJokes} />
      <Result>
        <Text></Text>
        <Error></Error>
      </Result>
    </Consultation07Wrapper>
  );
}

export default Consultation_07;
