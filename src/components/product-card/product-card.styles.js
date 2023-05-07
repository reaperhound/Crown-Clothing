import styled from "styled-components";

export const ImageSTL = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  margin-bottom: 5px;
`;
export const ButtonSTL = styled.button`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const ProductCardSTL = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;
  position: relative;

  &:hover ${ImageSTL} {
    opacity: 0.8;
  }

  &:hover ${ButtonSTL} {
    opacity: 0.85;
    display: flex;
  }
`;

export const FooterSTL = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const NameSTL = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceSTL = styled.span`
  width: 10%;
`;
