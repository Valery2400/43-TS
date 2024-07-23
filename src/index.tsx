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
import Lesson11 from './lessons/lesson11/Lesson11';
import Lesson12 from './lessons/lesson12/Lesson12';
import Consultation_04 from './consultation_04/Consultation_04';
import Lesson13 from './lessons/lesson13/Lesson13';
import { HashRouter, Route, Routes } from 'react-router-dom';
import FormGender from './components/formGender/FormGender';
import RobotForm from './components/robotForm/RobotForm';
import MyForm from './components/myForm/MyForm';
import Counter from './components/counter/Counter';
import Feedback from './components/feedback/Feedback';
import Homepage from './components/homepage/Homepage';
import Shop from './components/shop/Shop';
import ProductPage from './components/productPage/ProductPage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path ='/' element={<Layout />}>
        <Route path='/star-wars-gallery' element={<StarWarsGallery/>}/>
        <Route path='/gender-form' element={<FormGender/>}/>
        <Route path='/robot-form' element={<RobotForm/>}/>
        <Route path='/my-form' element={<MyForm/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/new' element={<h3>New Component</h3>}/>
        <Route path='/shop' element={<Shop/>}/>
        {/* импотрируем компонент, указав в path параметр id через двоеточие */}
        <Route path='/shop/:id/' element={<ProductPage/>}/>
        <Route path='*' element={<h1>Error 404</h1>}/>

    {/* <App /> */}
    {/* <Lesson06/> */}
    {/* <Lesson07/> */}
    {/* <Layout/> */}
    {/* <StarWarsGallery/> */}
    {/* <Lesson09/> */}
    {/* <Homework09/> */}
     {/* <Lesson11/> */}
     {/* <Lesson12/> */}
     {/* <Consultation_04/> */}
     {/* <Lesson13 /> */}
     </Route>
     </Routes>
  </HashRouter>
);


