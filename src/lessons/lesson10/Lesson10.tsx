import { useEffect, useState } from "react";
import style from "./lesson10.module.css";
import MyButton from "../../components/myButton/MyButton";
export default function Lesson10() {
  interface ICatFact {
    fact: string;
    length?: number;
  }

  const [catFact, setFact] = useState<ICatFact>({
    fact: " ",
  });

  const [catFacts, setFacts] = useState<ICatFact[]>([]);

  const fetchCatFact = () => {
    fetch(`https://catfact.ninja/fact`)
      .then((res) => res.json())
      .then((data) => setFacts((prev) => [...prev, data]));
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  const handleMoreInfo = () => {
    fetchCatFact();
  };

  const handleDaleteAll = () => {
    setFacts([]);
  };

  

 // добавляем сразу несколько классов из css module к элементу используя шаблонную строку
//  <div className={`${isDark ? styles.dark : styles.light} ${styles.card}`}>

  return (
    <div className="lesson-container">
      <h3>Cat Facts</h3>
      <div className={style.bottonBlock}>
      <MyButton name={"GET MORE INFO"} onClick={handleMoreInfo} />
      <MyButton id = {`${catFacts.length = 0} ? ${style.buttonDeleteInvisible} : ${style.buttonDelete}`} name={"DELETE ALL DATA"} onClick={handleDaleteAll} />
      </div>
      <div className={style.catFactsContainer}>
      <ol>
        {catFacts.map((el) => (
          <li>{el.fact}</li>
        ))}
      </ol>
      </div>
      <div></div>
    </div>
  );
}
