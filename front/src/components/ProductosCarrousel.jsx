import React from "react";

const ProductosCarrousel = () => {
  return (
    <div className="slider ">
      <ul className="slides #880e4f pink darken-4">
        <li>
          <img src="../assets/26.jpg" alt="" />
          {/* <div className="caption center-align">
            <h3>This is our big Tagline!</h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </div> */}
        </li>
        <li>
          <img
            src="https://www.calvinklein.com.au/media/wysiwyg/Calvin_Klein/2020/480x575_desktop_SU20_CKJ_REB_X_LILI_01_BW_FINAL_2.jpg"
            alt=""
          />
          <div className="caption left-align">
            <h5 className="light grey-text text-lighten-3">Unica.</h5>
          </div>
        </li>
        <li>
          <img src="../assets/14.jpg" alt="" />
          <div className="caption right-align">
            <h5 className="light grey-text text-lighten-3">She.</h5>
          </div>
        </li>
        <li>
          <img
            src="https://lh3.googleusercontent.com/proxy/MEGKhYJbw860lqAXRCZuPv5sSYY_5hPC7zULOOqhxynCJ4lPCc2qxgGHk9Ms6yku_TCa0DYBCGsFMp-t5Rg4O_ce7zpscRLUrmm22xyZzR-SPYZzL0KcEkEU4O1xi9s6IC4BT_E1HE5MJys"
            alt=""
          />
          <div className="caption center-align">
            {/* <h3>Lenceria Artesanal</h3> */}
            <h5 className="light grey-text text-lighten-3">
              Lenceria Artesanal
            </h5>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductosCarrousel;
