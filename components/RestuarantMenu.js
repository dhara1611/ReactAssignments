import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";

const RestuarantMenu = ()=>{
    const[resInfo, setresInfo]= useState(null);

     useEffect(()=>{
        fetchmenu();
     },[])
    
     if (resInfo === null ){
        <ShimmerUi />
        }
     const fetchmenu = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=464509");
        const json = await data.json();
        console.log(json);
        setresInfo(json.data);
        

    }

     
     
    return (
        <div className="menu">
            <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
            <p>Resturant menu details</p>
            <li>Biryani</li>
            <li>Kolhapuri </li>
            <li>Thali</li>
            <li>Burger</li>
            console.log(resInfo)
        </div>
        
    )

}
export default RestuarantMenu;