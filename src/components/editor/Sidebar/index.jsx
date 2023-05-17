import styled from "styled-components";
import StyleIcon from '@mui/icons-material/Style';
import React, { useState } from 'react';
import { siteThemes } from '../../../constants/siteThemes.js'
import ColorOptions from './ColorOptions.jsx';
import ThemeDropdown from './ThemeDropdown.jsx';

// Component Styles

const Root = styled.div`
  height: 100%;
  width: 100%;
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ThemeModal = styled.div`
  min-width: 230px;
  background-color: white;
  position: absolute;
  right: 80px;
  top: -80px;

  border-radius: 15px;
  border: 1px solid lightgrey;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;


/** Sidebar view of the Editor page */
function Sidebar({themeStyle, setThemeStyle}) {
  const [active, setActive] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  // const [isOn, setIsOn] = useState(true);


  return (
    <Root>
      <div style={{
        // border: '1px solid blue',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '6px',
        backgroundColor: active ? `${siteThemes[themeStyle].primary}` : 'white',
        position: 'relative'
      }}>
        <StyleIcon sx={{
          color: siteThemes[themeStyle].secondary,
          fontSize: '3rem'
          }}
          onClick={() => {
            //toggle off show select if currently active
            if(active) setShowSelect(false)
            setActive(prev => !prev);
          }}
          />


          {/* POPUP THEME SELECTOR */}

          {active && (
              <ThemeModal>

              <h3>Site Styles</h3>

              <p>Theme</p>

              <ThemeDropdown
              showSelect={showSelect}
              setShowSelect={setShowSelect}
              themeStyle={themeStyle}
              setThemeStyle={setThemeStyle}
              />

              <p>Theme Colors</p>

             <ColorOptions themeName={themeStyle}/>

             </ThemeModal>
          )}
      </div>
    </Root>
  );
}

export default Sidebar;
