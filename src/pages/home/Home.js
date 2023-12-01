import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Right from '../../components/rightbar/Right';
import './home.css';

const Home = () => {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed/>
                <Right/>
            </div>
        </>
    )
}

export default Home
