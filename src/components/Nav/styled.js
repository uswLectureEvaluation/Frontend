import styled from 'styled-components';

export const Navbar = styled.nav`
  background: #ffffff;
  margin: 0 auto;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  z-index: 999;
  justify-content: space-around;
  border-bottom: 1.5px solid #e0e0e0;

  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
  }
`;

export const NavLogo = styled.img`
  color: #346cfd;
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    font-size: var(--font-medium);
    font-weight: var(--weight-semi-bold);
  }
`;

export const MobileIcon = styled.div`
  font-size: 2rem;
  align-items: center;
  color: #346cfd;
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  padding-top: 3vh;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
    z-index: 999;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
  &#signup {
    color: #346cfd;
  }

  @media screen and (max-width: 480px) {
    text-align: center;
    padding: 2rem;
    display: table;
    &:hover {
      color: #4b89dc;
      transition: all 0.3s ease;
    }
  }
`;

export const Img = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
