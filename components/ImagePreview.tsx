import { useState } from "react";

type Props = {
  isFullscreen: boolean;
  dataUri: string;
};

const ImagePreview = (props: Props) => {
  let classNameFullscreen = props.isFullscreen
    ? "demo-image-preview-fullscreen"
    : "";

  return (
    <div className={"demo-image-preview " + classNameFullscreen}>
      <img src={props.dataUri} />
    </div>
  );
};

export default ImagePreview;
