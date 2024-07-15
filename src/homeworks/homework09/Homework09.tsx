// Повторите хук useEffect() 
// Создайте компонент для отображения данных 
// выведите случайную картинку из api https://randomfox.ca/ 
// код должен сработать один раз при монтировании компонента

import { useEffect, useState } from 'react';
import MyButton from '../../components/myButton/MyButton';
import styles from "./homework09.module.css"



function Homework09() {
  // код с этой строчки и до return будет срабатывать при каждом обновлении компонента

  interface IFoxData {
    image: string;
    link: string;
  }

  const [count, setCount] = useState(0);

  const [fox, setFox] = useState<IFoxData>({
    image: '',
    link: ''
  });

  const fetchFox = () => {
    fetch('https://randomfox.ca/floof')
      .then(res => res.json())
      .then(data => setFox(data));
  };


  // в массиве зависимостей мы указываем переменные с данными
  // от изменения которых будет зависит выполнится действие внутри useEffect или нет

 

  useEffect(() => {
    fetchFox();
  }, []);

  const handlePlus = () => {
    setCount(prev => prev + 1);
  };
  const handleMinus = () => {
    setCount(prev => prev - 1);
  };
  const handleReset = () => {
    setCount(prev => prev = 0);
  };


  return (
    <div className='lesson-container'>
      <h3>Homework 09</h3>
     <p className='counter'>{count}</p>
      <div className='buttonBlock'>
      <MyButton name={'-'} onClick={handleMinus} />
      <MyButton name={'reset counter'} onClick={handleReset} />
      <MyButton name={'+'} onClick={handlePlus} />
      </div>
      <img width={120} src={fox.image} alt="" />
      
    </div>
  );
}

export default Homework09;