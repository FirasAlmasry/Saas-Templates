import styled from "styled-components";


const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  transition: all 0.2s;
 text-align: left;
  &:hover {
    cursor: pointer;
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    /* color: var(--color-brand-600); */
  }
`;

export default ButtonIcon;
