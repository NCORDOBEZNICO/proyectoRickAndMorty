import Cards from './components/Cards/Cards';
import { useState } from 'react';
import style from "./App.module.css";
import Nav from './components/Nav';
import Forms from './components/Form/Forms';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { useEffect } from 'react';



const email = 'nicocordobez@gmail.com'
const password = '23764bbc'

function App() {

   const [access, setAccess] = useState(false)
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   
   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
  const onclose = (id) => {
   setCharacters(characters.filter((char) => char.id !== id));
  }

      


   return (
      <div className='App'>
         {
            location.pathname !== '/'
            ? <Nav onSearch={onSearch} />
            : null
         }
        
         
         
         <Routes>
         
         <Route path='/' element={<Forms login={login}/>} />
         <Route path='/home' element={<Cards characters={characters} onclose={onclose}/>} />
         <Route path='/about' element={<About />} />
         <Route path='/detail/:id' element={<Detail />} />
         

         </ Routes>
        
         <div className={style.nav}> 
         </div>
         
         
         
      </div>
      
       
   );
   
}

export default App;

