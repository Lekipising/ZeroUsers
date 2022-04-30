import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .icon {
    font-size: 2em;
  }
  span {
    font-weight: 500;
  }
`;

export const OneUser = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  padding: 0.5rem 1rem;
  align-items: center;
  background-color: #450920;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.03);
  }
`;
