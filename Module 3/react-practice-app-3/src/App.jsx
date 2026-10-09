import React from 'react';
import './App.css'
import UncontrolledDemo from './components/UncontrolledDemo';
import ControlledDemo from './components/ControlledDemo';

const App = () => {
    return (
        <div>
            <UncontrolledDemo/>
            <ControlledDemo/>
        </div>
    );
};

export default App;