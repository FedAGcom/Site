import React from 'react';

import { StyledLinkButton } from './LinkButton.styles';

const LinkButtonComponent = ({ target, color, bgcolor, path, ...props }) => {
  return (
    <StyledLinkButton
      {...props}
      className="link-btn-svg hovered"
      href={path}
      target={target ? target : '_blank'}
      rel="noreferrer">
      <svg
        width="65"
        height="65"
        viewBox="0 0 65 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="32.5"
          cy="32.5"
          r="32"
          fill={bgcolor}
          stroke={color}
        />
        <path
          d="M19 31.5C18.1716 31.5 17.5 32.1716 17.5 33C17.5 33.8284 18.1716 34.5 19 34.5L19 31.5ZM48.0607 34.0607C48.6464 33.4749 48.6464 32.5251 48.0607 31.9393L38.5147 22.3934C37.9289 21.8076 36.9792 21.8076 36.3934 22.3934C35.8076 22.9792 35.8076 23.9289 36.3934 24.5147L44.8787 33L36.3934 41.4853C35.8076 42.0711 35.8076 43.0208 36.3934 43.6066C36.9792 44.1924 37.9289 44.1924 38.5147 43.6066L48.0607 34.0607ZM19 34.5L47 34.5L47 31.5L19 31.5L19 34.5Z"
          fill={color}
        />
      </svg>
    </StyledLinkButton>
  );
};

export default LinkButtonComponent;
