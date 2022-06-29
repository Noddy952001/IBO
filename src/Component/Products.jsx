import React from "react";
import { useEffect } from "react";
import { useState } from "react";




export const Product = () => {

    const [data , setData] = useState(undefined)

    const [ProductData , setProductData] = useState([])
    const [showCount , setShowCount] = useState(true)



    const listOfProducts = [{
        productName: "TV",
        quantity: 10,
        description: "television"
      },
      {
        productName: "AC",
        quantity: 5,
        description: "air conditioner"
      },
      {
        productName: "TV",
        quantity: 10,
        description: "television"
      },
      {
        productName: "AC",
        quantity: 5,
        description: "air conditioner"
      },
      {
        productName: "FAN",
        quantity: 10,
        description: "Ceiling Fan"
      }
    ];


    var Tv_Conut = 0
    var Ac_count = 0
    var Fan_count = 0

    for(var i=0; i<listOfProducts.length; i++){


        

        if(listOfProducts[i].productName == "TV"  ){
            Tv_Conut++
        }

        else if(listOfProducts[i].productName == "AC"  ){
            Ac_count++
        }

        else if(listOfProducts[i].productName == "FAN"  ){
            Fan_count++
        }
    }


    const GetProductCount = () => {
        var getUniqueProductCount  = {
            "TV": Tv_Conut,
            "AC": Ac_count,
            "FAN": Fan_count
        }
        setData({
            "TV": Tv_Conut,
            "AC": Ac_count,
            "FAN": Fan_count
        })
    }


    var Tv_sum = 0
    var AC_sum = 0
    var FAN_sum = 0

    
    for(var j=0; j<listOfProducts.length; j++){
        if(listOfProducts[j].productName == "TV"){
            Tv_sum += listOfProducts[j].quantity
        }

        else if(listOfProducts[j].productName == "AC"){
             AC_sum += listOfProducts[j].quantity
        }

        else if(listOfProducts[j].productName == "FAN"){
            FAN_sum += listOfProducts[j].quantity
        }

    }


    const UniquePrducts = () => {
        var getUniquePrducts = [
            {
                productName: "Tv" ,
                quantity: Tv_sum,
                description: "television"
            },
            {
                productName: "AC",
                quantity: AC_sum,
                description: "air conditioner"
            },
            {
                productName: "FAN",
                quantity: FAN_sum,
                description: "Ceiling Fan"
            }
    
        ]
        setProductData([
                {
                    productName: "Tv" ,
                    quantity: Tv_sum,
                    description: "television"
                },
                {
                    productName: "AC",
                    quantity: AC_sum,
                    description: "air conditioner"
                },
                {
                    productName: "FAN",
                    quantity: FAN_sum,
                    description: "Ceiling Fan"
                }
        
            ])

        console.log("dasd", ProductData)
    }

    // for (let i = 0; i < ProductData.length; i++) {
    //     return (
    //       <>
    //         <div> productName :  {ProductData[i].productName}</div>
    //         <div> description :  {ProductData[i].quantity}</div>
    //         <div> quantity :  {ProductData[i].description}</div>
    //       </>
    //     );
    //   }


    return(
        <div>
            <button
                onClick={ () => {GetProductCount() , setShowCount(true)}}
            >
                 getUniqueProductCount 
            </button>

            <button
                onClick={ () => { UniquePrducts() , setShowCount(false)}}
            >
                 getUniquePrducts 
            </button>


            {showCount ? 

            (data && <>
                <h1>TV_Count :  {data.TV}</h1>
                <h1>AC_Count :  {data.AC}</h1>
                <h1>FAN :  {data.FAN}</h1> 
            </>) 
            :

            <div>
                {
                    ProductData.map((item) => {
                        return(
                            <>
                                <div> productName :  {item.productName}</div>
                                <div> description :  {item.quantity}</div>
                                <div> quantity :  {item.description}</div>
                            </>
                        )
                    })
                }

            </div>
        }


           
        </div>
    )
}