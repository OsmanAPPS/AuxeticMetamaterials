import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-section">
        <p className="footer-heading">
          Auxetic Metamaterials Bilgi ve Hesaplama Portalı
        </p>
        <p className="footer-text">
          Bu proje, auxetic metamalzemelerin büyüleyici dünyasını keşfetmek için oluşturulmuştur.
        </p>
      </section>
      <div className='footer-links'>
        <div className="footer-link-wrapper">
          <div className='footer-link-items'>
            <h2>Hakkımızda</h2>
            <p>Jules tarafından geliştirildi.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
