import styled from "styled-components";

const AvatarStyled = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

AvatarStyled.defaultProps = {
  width: "40px",
  height: "auto",
};

export default AvatarStyled;
