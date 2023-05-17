import styled from "styled-components";
import StyleIcon from '@mui/icons-material/Style';
import React, { useState } from 'react';
import { siteThemes } from '../../../constants/siteThemes.js'
import ColorOptions from './ColorOptions.jsx';

// Component Styles

const Root = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;


/** Sidebar view of the Editor page */
function Sidebar({themeStyle, setThemeStyle}) {
  const [active, setActive] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  // const [isOn, setIsOn] = useState(true);


  return (
    <Root>
      <div style={{
        border: '1px solid blue',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '6px',
        backgroundColor: active ? `${siteThemes[themeStyle].primary}` : 'lightgrey',
        position: 'relative'
      }}>
        <StyleIcon sx={{
          color: siteThemes[themeStyle].tertiary,
          fontSize: '3rem'
          }}
          onClick={() => setActive(prev => !prev)}
          />


          {/* POPUP THEME SELECTOR */}

          {active && (
            <div style={{
              minWidth: '230px',
              // minHeight: '300px',
              backgroundColor: 'white',
              position: 'absolute',
              right: '80px',
              top: '-80px',

              borderRadius: '15px',
              border: '1px solid lightgrey',
              padding: '25px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <h3>Site Styles</h3>
              <p>Theme</p>

              <div style={{
                position: 'relative'
              }}>

              <div
              onClick={() => {
                // setShowSelect(prev => !prev);
                console.log('hey')
              }}
              style={{
                color: siteThemes[themeStyle].secondary,
                 //primary color
                backgroundColor: siteThemes[themeStyle].primary, //secondary color
                borderRadius: '5px',
                padding: '10px',
                position: 'relative'
              }}>
                {themeStyle}
              </div>

                {/* SELECT THEME DROPDOWN */}
                {showSelect && (
                  <div style={{
                    position: 'absolute',
                    top: '110%',
                    left: '0',
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    border: '1px solid lightgrey',
                    padding: '0 10px',
                    maxHeight: '80px',
                    overflowY: 'auto'
                  }}>

                    {/* MAPS OUT SITE THEMES (no hard coding) */}
                    {Object.keys(siteThemes).map((themeName, index) => {
                      return (
                        <div style={{
                          width: '95%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          margin: '10px 2px'
                        }}
                        onClick={setThemeStyle(themeName)}
                        key={index}
                        >
                          <span>{themeName}</span>
                          <ColorOptions themeName={themeName}
                          diameter='20'/>

                          </div>
                      )
                    })}

                  </div>
                )}
              {/* end of select */}
              </div>

              <p>Theme Colors</p>


             <ColorOptions themeName={themeStyle}/>
            </div>
          )}
      </div>
    </Root>
  );
}

export default Sidebar;
