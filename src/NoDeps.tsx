import React, { FC } from "react";

const NoDeps: FC<{ text?: string }> = (props) => {
  console.log("NoDeps comp");

  return (
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta
        velit, consectetur molestiae natus harum voluptates. Voluptates tempora
        amet minus cumque autem officiis aliquid quibusdam quae blanditiis
        aperiam? Totam, possimus!
      </p>

      {props.text && <p dangerouslySetInnerHTML={{ __html: props.text }}></p>}
    </div>
  );
};

export default NoDeps;
