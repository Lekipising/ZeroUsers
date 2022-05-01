import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

export const Post = styled(motion.div)`
  width: 40vw;
  border-radius: 10px;
  padding: 0.25rem 1rem 1rem 1rem;
  background-color: #f5f5f5;
  opacity: 0.7;
  color: #000;
`;
export const Title = styled.h2`
  cursor: default;
  text-align: left;
`;
export const Body = styled.p`
  cursor: default;
`;
