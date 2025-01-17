import React from "react";
import KeyDataItem from "../KeyDataTtem/KeyDataItem";
import calorieIcon from "../../assets/calories-icon.svg";
import proteinIcon from '../../assets/proteines-icon.svg';
import glucideIcon from '../../assets/glucides-icon.svg';
import lipidIcon from '../../assets/lipides-icon.svg';
import "./keydata.css";


export default function KeyData ({keyData}) {
    return (
        <div className="key-data">
          <KeyDataItem
            icon={calorieIcon}
            value={keyData.calorieCount}
            unit="kCal"
            label="Calories"
            backgroundColor="#FBFBFB"
          />
          <KeyDataItem
            icon={proteinIcon}
            value={keyData.proteinCount}
            unit="g"
            label="Protéines"
            backgroundColor="#E8F4FB"
          />
          <KeyDataItem
            icon={glucideIcon}
            value={keyData.carbohydrateCount}
            unit="g"
            label="Glucides"
            backgroundColor="#FBFBFB"
          />
          <KeyDataItem
            icon={lipidIcon}
            value={keyData.lipidCount}
            unit="g"
            label="Lipides"
            backgroundColor="#FBFBFB"
          />
        </div>
      );
}