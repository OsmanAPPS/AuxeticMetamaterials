import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Auxetic Metamaterials: The Counter-Intuitive Materials</h1>
      <div className="home-content">
        <div className="text-section">
          <h2>What are Auxetic Metamaterials?</h2>
          <p>
            Auxetic materials are fascinating structures that exhibit a negative Poisson's ratio. Unlike conventional materials that become thinner when stretched, auxetic materials become thicker perpendicular to the applied force. This counter-intuitive behavior opens up a world of possibilities for advanced applications.
          </p>
          <h2>Key Properties</h2>
          <ul>
            <li><strong>Negative Poisson's Ratio:</strong> The defining characteristic, allowing for unique deformation capabilities.</li>
            <li><strong>Enhanced Shear Resistance:</strong> Their structure provides high resistance to shear forces.</li>
            <li><strong>High Energy Absorption:</strong> They are excellent at absorbing and dissipating energy, making them ideal for protective gear.</li>
            <li><strong>Variable Permeability:</strong> Pores in auxetic materials can open when stretched, which is useful for filters and sensors.</li>
          </ul>
          <h2>Applications</h2>
          <p>
            The unique properties of auxetic materials make them suitable for a wide range of applications, including:
          </p>
          <ul>
            <li><strong>Protective Equipment:</strong> Helmets, body armor, and knee pads that offer superior impact protection.</li>
            <li><strong>Medical Devices:</strong> Stents that can expand more easily and biomedical implants.</li>
            <li><strong>Aerospace:</strong> Lightweight components with high durability and vibration damping.</li>
            <li><strong>Smart Fabrics:</strong> Textiles that can change their properties based on mechanical stress.</li>
          </ul>
        </div>
        <div className="image-section">
          <img src="https://i.imgur.com/L4f4x0G.png" alt="Auxetic Behavior" className="home-image" />
          <p className="caption">Conventional vs. Auxetic Material Deformation</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
