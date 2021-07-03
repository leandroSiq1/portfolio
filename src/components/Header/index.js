import { useState } from 'react';

import Switch from 'react-switch';
import { shade } from 'polished';

import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Container, Nav, NavMobile, MenuMobile } from './styles';
=======
import { Container, Nav, Wrapper, WrapperMobile, NavMobile, ContainerMobile } from './styles';
>>>>>>> e498081e94a546bad38d0ca46dd43488d6a52ad4

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export function Header({ home, about, portfolio, toggleTheme }) {
  const { title, colors } = useContext(ThemeContext);
  const [navMobile, setNavMobile] = useState(false);


  function handleNavMobile() {
    setNavMobile(!navMobile);
  }

  return (
    <Container>
      <Wrapper>
        <a href="/">Leandrosiq1</a>

        <Nav>
        <ul>
          <li>
            { 
              home ? <Link to="/" className="active" >Início</Link> : <Link to="/">Início</Link>
            }
          </li>
          <li>
            { 
              about ? <Link to="/about" className="active" >Sobre</Link> : <Link to="/about">Sobre</Link>
            }
          </li>
          <li>
            { 
              portfolio ? <Link to="/portfolio" className="active">Portfólio</Link> : <Link to="/portfolio">Portfólio</Link>
            }
          </li>
          <Switch 
            onChange={toggleTheme}
            checked={title === 'light'}
            checkedIcon={false}
            uncheckedIcon={false}
            width={40}
            height={15}
            handleDiameter={20}
            offColor={shade(0.15, colors.primary)}
            onColor={colors.shape}
          />
        </ul>
      </Nav>
      </Wrapper>

      <WrapperMobile>
        <ContainerMobile>
          <a href="/">Leandrosiq1</a>
        
          <div onClick={handleNavMobile} className={`menu-mobile ${ navMobile && 'active' }`}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </ContainerMobile>

        { navMobile && 
          <NavMobile>
            <ul>
              <li>
                { 
                  home ? <Link to="/" className="active" >Início</Link> : <Link to="/">Início</Link>
                }
              </li>
              <li>
                { 
                  about ? <Link to="/about" className="active" >Sobre</Link> : <Link to="/about">Sobre</Link>
                }
              </li>
              <li>
                { 
                  portfolio ? <Link to="/portfolio" className="active">Portfólio</Link> : <Link to="/portfolio">Portfólio</Link>
                }
              </li>
              <Switch 
                onChange={toggleTheme}
                checked={title === 'light'}
                checkedIcon={false}
                uncheckedIcon={false}
                width={40}
                height={15}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.shape}
              />
            </ul>
          </NavMobile>
        }
      </WrapperMobile>
    </Container>
  );
}