import React from 'react'
import { useState } from 'react';
import Taboptions from '../component/taboption/taboption';
import Header from '../component/header/header';
import Footer from '../component/footer/footer';
import Delivery from '../component/delivery/delivery';
import DiningOut from '../component/diningout/diningout';
import Nightlife from '../component/nightlife/nightlife';



const Home = () => {

  const [activeTab,setActiveTab] = useState(" ")
  return (
    <div>
      <Header />
      <Taboptions activeTab={activeTab} setActiveTab={setActiveTab}/> 
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  )
}

const getCorrectScreen = (tab)=>{
          switch(tab){
               case "Delivery":
                    return <Delivery />
               case "Dining Out":
                    return <DiningOut />
               case "Nightlife":
                    return <Nightlife />
               default:
                     return <Delivery />
          }
}



export default Home;
