import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"

const Header = () => {
  const [menu, setMenu] = useState(false)

  const onHandleClick = () => {
    setMenu(!menu)
  }

  return (
    <Nav className={menu ? "active" : ""}>
      <NavLink to="/" className={menu ? "active" : ""}>
        Travel
      </NavLink>
      <Bars onClick={onHandleClick} className={menu ? "active" : ""} />

      <NavMenu className={menu ? "active" : ""}>
        {menuData.map((item, index) => (
          <NavLink className={menu ? "active" : ""} to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>

      <NavBtn>
        <Button primary="true" round="true" to="/">
          Book a flight
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

// Styles
const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 1000;
  position: relative;

  @media screen and (max-width: 768px) {
    &.active {
      background: #fff;
      position: fixed;
      top: 0;
      width: 100%;
    }
  }
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #df2935;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 768px) {
    &.active {
      color: #000;
      font-weight: bold;
    }
  }
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;

    &.active {
      color: #000;
    }
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -40px;

  @media screen and (max-width: 768px) {
    display: none;
    /* aaaaaaaaaaaaaaaaaa */
    flex-direction: column;
    width: 100%;
    height: 350px;
    position: absolute;
    top: 80px;
    left: -100%;
    transition: all 0.5s ease;

    &.active {
      display: flex;
      background: #fff;
      left: 0;
      transition: all 0.5s ease;
      z-index: 100;
    }
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
// End Styles
