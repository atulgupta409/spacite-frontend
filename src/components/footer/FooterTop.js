import React, { useContext, useEffect } from "react";
import "./Footer.css";
import { CityContext } from "../context/CityContext";
import { decode } from "html-entities";

function FooterTop({ pathName }) {
  const { setPath, seo } = useContext(CityContext);
  useEffect(() => {
    setPath(pathName);
  }, [pathName]);
  console.log(seo);
  const decodedDescription = decode(seo?.footer_description);

  return (
    <>
      {decodedDescription.trim() === "<p></p>/n" || seo?.footer_title ? (
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
