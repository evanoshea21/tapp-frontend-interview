import styled from "styled-components";
import React from 'react';
import { siteThemes } from '../../../constants/siteThemes.js'

// Component Styles

const CircleColor = styled.div`
  width: ${props => props.$diameter}px;
  height: ${props => props.$diameter}px;
  border-radius: 50%;

  background-color: ${props => props.$color || 'grey'};
`;

/** Sidebar view of the Editor page */
function ColorOptions({themeName, diameter}) {
  //diameter different for dropdown and sidebar popup menu

  return (
    <div style={{
      display: 'flex',
      gap: '6px'
    }}
    >

      <CircleColor $color={siteThemes[themeName].primary} $diameter={diameter ?? '35'}/>
      <CircleColor $color={siteThemes[themeName].secondary} $diameter={diameter ?? '35'}/>
      <CircleColor $color={siteThemes[themeName].tertiary} $diameter={diameter ?? '35'}/>
    </div>
  );
}

export default ColorOptions;
