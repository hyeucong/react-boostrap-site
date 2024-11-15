import React from 'react'
import Banner from './Banner/Banner'
import Info from './Info/Info'
import Category from './Category/Category'
import Trending from './Trending/Trending'
import Overview from './Overview/Overview'
import Article from './Article/Article'
import People from './People/People'
import Warranty from './Warranty/Warranty'

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Info></Info>
            <Category></Category>
            <Trending></Trending>
            <Overview></Overview>
            <Article></Article>
            <People></People>
            <Warranty></Warranty>
        </>
    )
}

export default Home
