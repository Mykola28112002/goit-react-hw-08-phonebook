import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  
  border-bottom: 1px solid black;
  > nav {
    display: flex;
  > a {
    font-size: 24px;
  }  
  }
  
    font-size: ${p => p.theme.space[3]*3}px;
    box-shadow: 1px 4px 3px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%), 1px 4px 3px rgb(0 0 0 / 12%);
    padding: ${p => p.theme.space[5]}px;
    background: ${p => p.theme.colors.mainBackground};  
    width: 95%;
    margin-left: auto;
    margin-right: auto;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  
  &.active {
    color: white;
    box-shadow: 1px 4px 3px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%), 1px 4px 3px rgb(0 0 0 / 12%);
    background: ${p => p.theme.colors.accent};
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
 
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    font-size: ${p => p.theme.space[4]}px;
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
    border: none;
    color: ${p => p.theme.colors.white};
    background: red;
    border-radius: 8px;
    box-shadow: 1px 4px 3px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%), 1px 4px 3px rgb(0 0 0 / 12%);
    cursor: pointer;
 
`;