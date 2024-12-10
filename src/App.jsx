import React from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen'
import WorkspaceScreen from './Screens/WorkspaceScreen'
import EstadosScreen from './Screens/EstadosScreen'
import ChatApp from './Components/ChatApp/ChatApp'
import FormulariosScreen from './Screens/FormulariosScreen';

function App() {
  
 
  return (
      <div>
        <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/home' element={<HomeScreen/>}/>
            <Route path='/workspace/:workspace_id' element= {<WorkspaceScreen/>}/>
            <Route path='/prueba' element={<h1>Soy la prueba</h1>}/>
            <Route path='/estados' element={<EstadosScreen/>}/>
            <Route path="/chat" element={<ChatApp/>}/>
            <Route path="/formularios" element={<FormulariosScreen/>}/>
        </Routes>
      </div>
  );
}

export default App
