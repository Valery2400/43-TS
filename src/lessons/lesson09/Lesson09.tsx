import { log } from "console"
import { useEffect } from "react"

function Lesson09() {

    // console.log(fetch('https://dog.ceo/api/breeds/image/random'));
    

    

 
    useEffect(() => {fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => console.log(data))}, []);

    return (
        <div className="lesson-containet">
            <h3>Lesson 09</h3>
            <h4>UseEffect hook </h4>
        </div>
    )
}
export default Lesson09;