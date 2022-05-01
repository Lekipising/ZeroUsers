import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

export const Section = styled.section`
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-right: 10%;
  padding-bottom: 3rem
`;
export const UserInfo = styled(motion.div)`
  background-color: #c31432;
  width: 30vw;
  border-radius: 10px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 60vh;
  position: fixed;
  top: 8rem;
  left: 5%;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
  .icon {
    font-size: 2em;
    cursor: pointer;
  }
`;
export const Input = styled.input`
  height: 30px;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  opacity: 0.7;
  color: #000;
  font-weight: 500;
  min-width: 70%;
  font-size: 1.3rem;
  border: 1px solid #9ecaed;
  transition: all 0.3s ease-in;
  &:focus {
    border-color: #9ecaed;
    box-shadow: 0 0 10px #9ecaed;
  }
`;
export const H1 = styled.h1``;
export const UserDetail = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  .icon {
    font-size: 1.5em;
    margin-right: 1rem;
  }
  span {
    font-weight: 500;
  }
  transition: all 0.3s ease-in;
  &:hover {
    transform: scale(1.05);
  }
`;
export const Span = styled.span``;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  margin-top: 6rem;
`;
