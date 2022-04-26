import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";
import HomeBuyerTopNav from "./homebuyer/HomeBuyerTopNav";
import HomeBuyerLeftSide from './homebuyer/HomeBuyerLeftSide';
import HomeBuyerRightSideMap from './homebuyer/HomeBuyerRightSideMap';


const HomeBuyer = () => {
    const [homeBuyerControl, setHomeBuyerControl] = useState(null);
    const [cardClicked, setCardClicked] = useState(false);
    const [apiControl, setApiControl] = useState({
       cities: "", minbeds:null, maxprice: "", type:"", startdate: null, start_hour: null, start_minute: null, minarea: null, maxarea: null, minacre: null, maxacre: null,
       isFractional: ""
    })


    useEffect(() => {
        axios.get(`https://cher.app/look-around.json?search[points]=&search[search_type]=cities&search[search_in]=${apiControl.cities}&search[minprice]=&search[maxprice]=${apiControl.maxprice}&search[monthly_minprice]=&search[monthly_maxprice]=500&search[minbeds]=${apiControl.minbeds}&search[minbaths]=null&search[type][]=${apiControl.type}&search[type][]=condominium&search[type][]=mobilehome&search[type][]=multifamily&search[startdate]=${apiControl.startdate}&search[start_hour]=${apiControl.start_hour}&search[start_minute]=${apiControl.start_minute}&search[status][]=Flagged&search[status][]=Active&search[status][]=Pending&search[status][]=ActiveUnderContract&search[type][]=rental&search[type][]=fractional&search[status][]=Closed&search[status][]=Delete&search[status][]=Expired&search[status][]=Hold&search[status][]=Incomplete&search[status][]=Withdraw&search[minarea]=14&search[maxarea]=1000&search[minyear]=2000&search[maxyear]=2010&search[minacres]=4&search[maxacres]=9&search[water]=false&search[water]=true&search[maxdom]=23&search[features]=21e2&search[exteriorFeatures]=21e2`).then((res) => {
            setHomeBuyerControl(res.data);
            console.log(homeBuyerControl);
        })
    }, [apiControl]);
    
        return (
            <div>
                <HomeBuyerTopNav apiControl={apiControl} setApiControl={setApiControl} />   
                <div className='row'>
                    <HomeBuyerLeftSide cardClicked={cardClicked}
                      setCardClicked={setCardClicked}
                    />
                     <HomeBuyerRightSideMap cardClicked={cardClicked} />
                </div> 
             
            </div>
        );
    
}

export default HomeBuyer;