import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import MainTitle from './components/MainTitle'

export default (
    <BrowserRouter>
      <div className="App">
        <MainTitle />

           <Route exact path='/' component={App} />
      </div>
    </BrowserRouter>
)

