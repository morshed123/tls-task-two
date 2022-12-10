import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Task from './components/Task';

function App() {

  return (
    <div className="container">
      <h2 className="text-center pt-5">Technical Task</h2>
      <div className="row">
        <div className="col-12">
          <Task />
        </div>
      </div>
    </div>
  );
}

export default App;
