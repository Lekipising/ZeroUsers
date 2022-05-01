import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  background: linear-gradient(to right, #240b36, #c31432);
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .group {
    background: linear-gradient(to left, #240b36, #c31432);
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    width: 100px;
    justify-content: space-between;
    .icon {
      font-size: 2em;
      transition: all 0.3s ease-out;
    }
    cursor: pointer;
  }
  .group:hover {
    color: #fefefe;
  }
`;
export const Group = styled.div`
  background: linear-gradient(to left, #240b36, #c31432);
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: space-between;
  .icon {
    font-size: 2em;
    transition: all 0.3s ease-out;
  }
  cursor: pointer;
  &:hover {
    color: #fefefe;
  }
`;

export const Span = styled.span`
  font-weight: 500;
  transition: all 0.3s ease-out;
`;
