/**
 * @file KeyData.jsx
 * @description Composant React pour afficher les données clés de l'utilisateur sous forme de cartes individuelles (Calories, Protéines, Glucides, Lipides).
 * Chaque carte affiche une icône, une valeur, une unité et un libellé.
 * 
 */
import React from "react";
import KeyDataItem from "../KeyDataTtem/KeyDataItem";
import calorieIcon from "../../assets/calories-icon.svg";
import proteinIcon from '../../assets/proteines-icon.svg';
import glucideIcon from '../../assets/glucides-icon.svg';
import lipidIcon from '../../assets/lipides-icon.svg';
import "./keydata.css";

/**
 * Composant `KeyData` - Affiche les données clés de l'utilisateur.
 * 
 * @param {Object} props - Propriétés du composant.
 * @param {Object} props.keyData - Les données clés de l'utilisateur.
 * @param {number} props.keyData.calorieCount - Nombre de calories consommées.
 * @param {number} props.keyData.proteinCount - Quantité de protéines consommées (en grammes).
 * @param {number} props.keyData.carbohydrateCount - Quantité de glucides consommés (en grammes).
 * @param {number} props.keyData.lipidCount - Quantité de lipides consommés (en grammes).
 * 
 * @returns {JSX.Element} Une liste de cartes représentant les données clés de l'utilisateur.
 * 
 * @example
 * const keyData = {
 *   calorieCount: 2000,
 *   proteinCount: 150,
 *   carbohydrateCount: 300,
 *   lipidCount: 70
 * };
 * 
 * <KeyData keyData={keyData} />
 */
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