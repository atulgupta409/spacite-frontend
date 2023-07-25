import React, { useContext, useEffect } from "react";
import "./Footer.css";
import { CityContext } from "../context/CityContext";

function FooterTop({ pathName }) {
  const { setPath, seo } = useContext(CityContext);
  useEffect(() => {
    setPath(pathName);
  }, [pathName]);

  return (
    <>
      {seo?.footer_description || seo?.footer_title ? (
        <div className="footer_content_main">
          <div className="container">
            <h3 className="footer_title">{seo?.footer_title}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: seo?.footer_description }}
              className="footer_content"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default FooterTop;
