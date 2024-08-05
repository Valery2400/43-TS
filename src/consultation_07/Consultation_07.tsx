import axios from "axios";

import { log } from "console";
import MyButton from "../components/myButton/MyButton";
import { Consultation07Wrapper, Result, Text, Error } from "./styles";
import { useState } from "react";

function Consultation_07() {
  const [joke, setJoke] = useState<string>("");
  const [error, setError] = useState<any>("");

  const RANDOM_JOKE_URL = "https://official-joke-api.appspot.com/random_joke";

  // const getJokes = async() => {
  //   setJoke('');
  //   setError('');

  //   try {
  //   const response = await fetch(RANDOM_JOKE_URL)
  //   console.log(response);
  //   const result = await response.json()
  //   console.log(result);
  //   if (response.ok){
  // setJoke(`${result.setup} - ${result.punchline}`)
  //   }
  //   else {
  // // throw Object.assign(new Error('API error'), {error: result})
  //   }
  //    } catch(error) {
  //     setError(error)

  //    }
  //   }
  // Вариант использования с axios
  const getJokes = async () => {
    try {
      const result = await axios.get(RANDOM_JOKE_URL);
      console.log(result);

      setJoke(`${result.data.setup} - ${result.data.punchline}`);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Consultation07Wrapper>
      <MyButton name="GET JOKE" onClick={getJokes} />
      <Result>
        {joke && <Text>{joke}</Text>}
        {error && <Error>{error}</Error>}
      </Result>
    </Consultation07Wrapper>
  );
}

export default Consultation_07;
