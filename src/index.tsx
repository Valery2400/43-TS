import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import Lesson06 from './lessons/lesson06/Lesson06';
import Lesson08 from './lessons/lesson08/Lesson08';
import Layout from './components/layout/Layout';
import StarWarsGallery from './components/StarWarsGallery/StarWarsGallery';
import Lesson09 from './lessons/lesson09/Lesson09';
import Homework09 from './homeworks/homework09/Homework09';
import Lesson10 from './lessons/lesson10/Lesson10';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    {/* <App /> */}
    {/* <Lesson06/> */}
    {/* <Lesson07/> */}
    {/* <Layout/>
    <StarWarsGallery/> */}
    {/* <Lesson09/> */}
    {/* <Homework09/> */}
     <Lesson10/>
  </>
);


