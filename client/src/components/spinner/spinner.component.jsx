import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

export const Spinner = ({top}) => (
  <SpinnerOverlay top={top}>
    <SpinnerContainer />
  </SpinnerOverlay>
);



export default Spinner;