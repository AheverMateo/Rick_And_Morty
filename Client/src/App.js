import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';


function App() {
   let [characters, setCharacters] = useState([])

   const { pathname } = useLocation()

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((characters) => [...characters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id)=>{
      setCharacters(
         characters.filter((character)=> character.id !== Number(id))
      )
   }

   return (
      <div className='conteiner'>
         <Routes>
            { pathname !== '/' && <Nav onSearch = {onSearch}/>}
            <Route path='/' element= {<Form/>}/>
            <Route path='/home' element = {<Cards characters={characters} onClose = {onClose}/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/detail/:id' element = {<Detail/>}/>
         </Routes>

      </div>
   );
}

export default App;
