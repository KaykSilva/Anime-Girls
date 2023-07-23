import React, { useEffect, useState } from "react";
import fethWaifuPics from "../../Api/ApiWaifupics";
import './ImageViwer.css'

function ImageViwer() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    fethWaifuPics("neko").then((response) => {
      setImage(response);
    });
  }, []);

  console.log(image);

  return (
    <div className="img_viwer">
      <img src={image} />
    </div>
  );
}

export default ImageViwer;
