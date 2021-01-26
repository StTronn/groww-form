import React, { useState,useEffect } from "react";
import {useParams} from "react-router-dom"

import {sections} from "../section";

import BankDetail from "./BankDetail";
import PersonalDetail from "./PersonalDetail";
import DetailNav from "./DetailNav.js";

import "./index.css";


const DetailCointainer = ({section}) => {
  console.log({section});
  return (
    <div className="cointainerDetails">
      <div className="leftCointainerDetails">
        <div className="fadeInUpDetailsDelay">
          <div className="gridDetails">
            <DetailNav
              selected={section}
              sections={sections}
            />

            {section !== sections.personal && <BankDetail />}
            {section === sections.personal && <PersonalDetail />}
          </div>
        </div>
      </div>
      {/* this is only for animation */}
      <div className="imgBackgroundDetails"></div>
    </div>
  );
};


const DetailCointainerHoc=(DetailCointainer)=>{
  const {section} = useParams();
  //test to make sure component is mounted once 
  useEffect(() => {
    //do heavy one time request
    console.log("mounted")
  }, [])

  return  <DetailCointainer section={section}/>
}

const DetailCointainerWrapper= ()=> DetailCointainerHoc(DetailCointainer);
export default DetailCointainerWrapper;
