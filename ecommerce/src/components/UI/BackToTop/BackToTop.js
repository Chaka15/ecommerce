import React from "react";

import BackToTop from "react-easy-back-to-top";

const BackToTopButton = () => {
  return (
    <BackToTop
      icon="fa fa-arrow-up"
      backgroundColor="#f8f9fa"
      color="#212529"
      fontSize="14px"
      position={{ right: "1%", bottom: "1%" }}
      hover={{ backgroundColor: "#28a745", color: "black" }}
      transition="all 0.5s"
      showOnDistance={1100}
      scrollBehavior="smooth"
      borderRadius={24}
      opacity="1"
    />
  );
};

export default BackToTopButton;
