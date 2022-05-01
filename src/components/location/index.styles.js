import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

export const Section = styled.section`
  width: 17vw;
  position: fixed;
  top: 5rem;
  right: 2rem;
`;
export const H2 = styled(motion.h3)``;
export const AllSuites = styled.div``;
export const OneSuite = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
export const SuiteName = styled(motion.span)`
  color: #fefefe;
`;
export const Num = styled(motion.span)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #240b36;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5em;
  cursor: default;
`;
