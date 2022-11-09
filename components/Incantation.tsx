import { useState } from "react";

type Props = {
  name: string;
  content: string;
};

const Incantation = (props: Props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.content}</p>
    </div>
  );
};

export default Incantation;
