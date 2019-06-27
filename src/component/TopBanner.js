import React, { useState } from 'react';
import './TopBanner.scss'


function TopBanner() {
  return (
    <div className="top_banner">
      <div className="banner_container">
        <figure className="img_banner"></figure>

        <div className="banner_content">
          <span className="content-title">餵狗囉！</span>
          <span className="content-info">幫你計算適合狗兒的飼料量</span>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;