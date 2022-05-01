import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

export const Section = styled.section`
  width: 15vw;
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

  position: fixed;
  left: 2rem;
  width: 20vw;
  max-height: 80vh;
  overflow-y: scroll;
`;

export const OneUser = styled(motion.div)`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  padding: 0.5rem 1rem;
  align-items: center;
  background-color: #450920;
  cursor: pointer;
  position: relative;
  &:hover {
    transform: scale(1.03);
  }
  &:hover .view {
    visibility: visible;
    opacity: 1;
  }
  .view {
    transition: all 0.5s ease-in;
    opacity: 0.5;
    visibility: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(195, 20, 50, 1);
    font-weight: 500;
  }
`;
