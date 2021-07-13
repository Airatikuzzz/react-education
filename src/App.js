import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            {/*<Profile/>*/}
            <div className="content">
                <Dialogs/>
                {/*<Profile/>*/}
            </div>
        </div>
    );
}

export default App;