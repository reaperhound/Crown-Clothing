import styled from "styled-components";

const CheckoutItemSTL = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainerSTL = styled.div`
  width: 23%;
  padding-right: 15px;
`;
const ImagesSTL = styled.img`
  width: 100%;
  height: 100%;
`;

const NameSTL = styled.span`
  width: 23%;
`;
const QuantitySTL = styled.span`
  display: flex;
  width: 23%;
`;

const ArrowSTL = styled.div`
  cursor: pointer;
  user-select: none;
`;
const RemoveBtnSTL = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export {
  CheckoutItemSTL,
  ImageContainerSTL,
  ImagesSTL,
  NameSTL,
  QuantitySTL,
  ArrowSTL,
  RemoveBtnSTL,
};

// .value {
//   margin: 0 10px;
// }
