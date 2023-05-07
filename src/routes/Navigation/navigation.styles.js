import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationSTL = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
export const LogoSTL = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;
export const NavLinksSTL = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const NavLinkSTl = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const SpanSTL = styled.span`
  padding: 10px 15px;
  cursor: pointer;
`;
