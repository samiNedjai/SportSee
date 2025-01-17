import React from 'react';
import './keyDataItem.css';

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


