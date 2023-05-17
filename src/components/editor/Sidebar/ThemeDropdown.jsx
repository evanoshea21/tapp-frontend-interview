import styled from "styled-components";
import React from 'react';
import { siteThemes } from '../../../constants/siteThemes.js'
import capatalizeString from '../../../utils.js';
import ColorOptions from './ColorOptions.jsx';

// Component Styles

const Select = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  background-color: white;
  border-radius: 4px;
  border: 1px solid lightgrey;
  max-height: 90px;
  overflow-y: auto;
`;
const Option = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  margin: 3px auto;
  padding: 10px;
  user-select: none;
  &:hover {
    background-color: ${props => props.$color || 'lightgrey'};
  }
  // '&:hover': {backgroundColor: siteThemes[themeName].primary}
`;

/** Sidebar view of the Editor page */
function ThemeDropdown({showSelect, setShowSelect, themeStyle, setThemeStyle}) {

  return (
  <div style={{
    position: 'relative'
  }}>

    <div
    onClick={() => {
      setShowSelect(prev => !prev);
    }}
    style={{
      color: siteThemes[themeStyle]?.secondary,
      backgroundColor: siteThemes[themeStyle]?.primary,
      borderRadius: '5px',
      padding: '10px',
      position: 'relative',
      cursor: 'pointer'
    }}>
      {capatalizeString(themeStyle)}
    </div>

      {/* SELECT THEME DROPDOWN */}
      {showSelect && (
         <Select>

          {/* MAPS OUT SITE THEMES (no hard coding) */}
          {Object.keys(siteThemes).map((themeName, index) => {
            return (
              <Option
              $color={siteThemes[themeStyle]?.primary}
              onClick={() => {
                if(showSelect) {
                  setThemeStyle(themeName)
                }
              }}
              //i recognize index for key is not ideal
              key={index}
              >
                <span>{capatalizeString(themeName)}</span>
                <ColorOptions themeName={themeName}
                diameter='20'/>
                </ Option>
            )
          })}

        </Select>
      )}
  </div>
  );
}

export default ThemeDropdown;
