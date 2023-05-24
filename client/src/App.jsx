import React from 'react';
import "./styles/app.scss"
import SettingBar from "./components/SettingBar";
import ToolBar from "./components/ToolBar";
import Canvas from "./components/Canvas";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

const App = () => {

    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                  <Route path='/' element={(
                    <>
                      <ToolBar/>
                      <SettingBar/>
                      <Canvas/>
                      <Navigate to={`/f${(+new Date()).toString(16)}`} replace/>
                    </>
                  )} />  

                  <Route path='/:id' element={(
                    <>
                      <ToolBar/>
                      <SettingBar/>
                      <Canvas/>
                    </>
                  )}>
                        
                    </Route>
                   
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;