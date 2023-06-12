import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

export const Spinner = (props) => (
  <SpinnerOverlay {...props} >
    <SpinnerContainer />
  </SpinnerOverlay>
);



export default Spinner;