import React from 'react';
import Banner from '../components/Banner';
import ServiceCard from '../components/ServiceCard';
import Services from './Services';
import Tips from '../components/Tips';
import Expert from '../components/Expert';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           
            <h1>this is home</h1>
            <Services></Services>
            <Tips></Tips>
            <Expert></Expert>
        </div>
    );
};

export default Home;