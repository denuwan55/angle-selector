import React, { useState } from 'react';

const commonAngles = [0, 45, 90, 135, 180];

const AngleSelector = () => {
  const [angle, setAngle] = useState(0);

  const handleTextChange = (e) => {
    const value = Math.max(0, Math.min(360, Number(e.target.value) || 0));
    setAngle(value);
  };

  const handleSliderChange = (e) => {
    setAngle(Number(e.target.value));
  };

  const handleRadioChange = (value) => {
    setAngle(value);
  };

  return (
    <div className="w-96 bg-gradient-to-br from-purple-100 to-indigo-200 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">Angle Picker</h2>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <label htmlFor="angle-input" className="text-sm font-medium text-indigo-700">
            Angle:
          </label>
          <input
            id="angle-input"
            type="number"
            value={angle}
            onChange={handleTextChange}
            min="0"
            max="360"
            className="w-20 text-center border border-indigo-300 rounded-md p-1"
          />
          <span className="text-sm font-medium text-indigo-700">°</span>
        </div>
        
        <input
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={handleSliderChange}
          className="w-full"
        />
        
        <div className="flex justify-between">
          {commonAngles.map((value) => (
            <label key={value} className="flex flex-col items-center">
              <input
                type="radio"
                checked={angle === value}
                onChange={() => handleRadioChange(value)}
                className="sr-only"
              />
              <span 
                className={`w-6 h-6 flex items-center justify-center rounded-full cursor-pointer ${
                  angle === value ? 'bg-indigo-600 text-white' : 'bg-indigo-200 text-indigo-800'
                }`}
              >
                {value}°
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AngleSelector;