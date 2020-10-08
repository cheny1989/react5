import React from "react"

import Datecurrentely from "./components/Datecurrentely"
import BodyOfPage from "./components/BodyOfPage"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import MyInfo from "./components/MyInfo"
import CheckboxInput from "./components/CheckboxInput"
import TestLink from "./components/TestLink"

// 1#
import Jock from "./components/Jock"
import JockData from "./components/JockData"

// 2#
import Product from "./components/newComponents/Product"
import ProductData from "./components/newComponents/ProductData"

// 3#
import Food from "./components/FoodComponent/Food"
import FoodData from "./components/FoodComponent/FoodData"

// 4#
import Checkbox from "./components/CheckboxComponent/Checkbox"
import CheckboxData from "./components/CheckboxComponent/CheckboxData"

// array
import ArrayTest from "./components/ArrayTest"

// class extends
import ClassTest from "./components/ClassElements/ClassTest"

// class but not under a "componentns" folder
import ClassComFile from "./ClassCom/ClassComFile"


function App(){
// 1#
    const jockComponents = JockData.map(jock => <Jock key= {jock.id} Question={jock.Question} Answer={jock.Answer} />)

// 2#
    const ProductComponents = ProductData.map(item => <Product key={item.id} Product={item}/>)

// 3#
    const FoodComponent = FoodData.map(item => <Food key={item.id} Food={item}/>)

// 4#
    const CheckboxComponent = CheckboxData.map(item => <Checkbox key={item.id} item = {item}/>)

    return(
    <div>
        <Datecurrentely />
        <BodyOfPage />
        <Footer />
        <MainContent />
        <Header />
        <MyInfo />
        <CheckboxInput />

        
        <TestLink
            contantCard= {{
                name: "Mr Happy",
                imgUrl: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&rect=37%2C29%2C4955%2C3293&q=45&auto=format&w=926&fit=clip",
                phone: "972546424544",
                email: "happy@gmail.com",
            }} 
        />

        <TestLink
            contantCard= {{
                name: "Mr sad",
                imgUrl: "https://static.wixstatic.com/media/526fe9_c14224c7c5ef46c6af9da9d4cd41d710~mv2_d_2702_1826_s_2.jpg/v1/fill/w_630,h_426,al_c,q_80,usm_0.66_1.00_0.01/526fe9_c14224c7c5ef46c6af9da9d4cd41d710~mv2_d_2702_1826_s_2.webp",
                phone: "972526446574",
                email: "sad@gmail.com",
            }} 
        />
        
        <TestLink
            contantCard= {{
                name: "Mr shock",
                imgUrl: "https://fishsubsidy.org/wp-content/uploads/2020/01/f3b5cd03a4cdc6f35244b2c84d945a8d.jpg",
                phone: "9727478877",
                email: "shock@gmail.com",
            }} 
        />

            {/* 1# */}
            {jockComponents}
            {/* one more option */}
            <hr />
                  <Jock 
                      Question= "What's the best thing about Israel"
                      Answer = "Nice country"
                  />

                  <Jock 
                      Question= "what is the color of israeli flag"
                      Answer = "blue and white"
                  />
            <hr />


                {/* 2# */}
                {ProductComponents}

                {/* 3# */}
                {FoodComponent}

                {/* 4# */}
                {CheckboxComponent}

                <ArrayTest />

                <ClassTest />
                
                <ClassComFile />
    </div>

  )
}

export default App