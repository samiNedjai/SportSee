/**
 * @file KeyDataItem.jsx
 * @description Composant React pour afficher un élément de données clés, incluant une icône, une valeur, une unité et un label.
 * Ce composant est utilisé dans `KeyData` pour représenter individuellement chaque donnée clé.
 * 
 */
import React from 'react';
import './keyDataItem.css';
/**
 * Composant `KeyDataItem` - Affiche une donnée clé avec une icône.
 * 
 * @param {Object} props - Propriétés du composant.
 * @param {string} props.icon - L'URL ou l'import du fichier image pour l'icône.
 * @param {number|string} props.value - La valeur numérique de la donnée.
 * @param {string} props.unit - L'unité de mesure associée à la valeur (par exemple : "g", "kCal").
 * @param {string} props.label - Le libellé décrivant la donnée (par exemple : "Protéines").
 * @param {string} props.backgroundColor - La couleur d'arrière-plan pour le conteneur de l'icône.
 * 
 * @returns {JSX.Element} Un élément représentant une donnée clé.
 * 
 * @example
 * <KeyDataItem
 *   icon="path/to/icon.svg"
 *   value={150}
 *   unit="g"
 *   label="Protéines"
 *   backgroundColor="#E8F4FB"
 * />
 */
export default function KeyDataItem  ({ icon, value, unit, label, backgroundColor }) {
  return (
    <div className="key-data-item">
      <div
        className="key-data-icon"
        style={{ backgroundColor: backgroundColor }}
      >
        <img src={icon} alt={label} />
      </div>
      <div className="key-data-info">
        <p className="key-data-value">
          {value}
          {unit}
        </p>
        <p className="key-data-label">{label}</p>
      </div>
    </div>
  );
};


