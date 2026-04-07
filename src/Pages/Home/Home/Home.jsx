import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../Works/Works';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import Track from '../Track/Track';
import Satisfaction from '../Satisfaction/Satisfaction';
import Reviews from '../Reviews/Reviews';
import Faq from '../Faq/Faq';


const reviewsPromise = fetch('/public/reviews.json').then(res => res.json());


const Home = () => {
    return (
        <div>
            <Banner ></Banner>
            <Works></Works>
            <OurServices></OurServices>
            <Brands></Brands>
            <Track></Track>
            <Satisfaction></Satisfaction>
            <Reviews reviewsPromise={reviewsPromise}  ></Reviews>
            <Faq></Faq>
        </div>
    );
};

export default Home;