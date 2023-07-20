import React from "react";
import { ColorRing } from "react-loader-spinner";

function Loader() {
  return (
    <div>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClassName="blocks-wrapper"
        colors={["#d09cff", "#d09cff", "#d09cff", "#d09cff", "#d09cff"]}
      />
    </div>
  );
}

export default Loader;
