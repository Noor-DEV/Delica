import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export const Wrapper = styled.div`
  margin: 0 0 2rem 0;
  h2 {
    color: rgb(25, 25, 25);
    padding: 0.7rem;
    font-weight: 350;
    font-family: "Poppins", cursive;
    font-size: 1.8rem;
  }
`;
export const Card = styled.div`
  min-height: 20rem;
  min-width: 18rem;
  border-radius: 1rem;
  background: crimson;
  position: relative;
  overflow: hidden;
  img {
    // border-radius: 12px;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
  }
  p {
    position: absolute;
    padding: 1rem;
    z-index: 4;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  // border-radius: 2rem;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1));
`;
export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .list {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 0.5rem;
  }
`;
export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin: 3rem;
`;
export const NormalLink = styled(NavLink)`
  text-decoration: none;
  background: rgba(0, 0, 0, 0);
  color: #fff;
`;
export const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #333;
  width: 6rem;
  height: 6rem;
  transform: scale(0.8);
  text-decoration: none;
  margin: 0.3rem;
  h4 {
    color: #fff;
    padding: 0.4rem;
  }
  svg {
    color: #fff;
    font-size: 1.6rem;
  }
  &:hover {
    background: gold;
    color: #333;
    svg {
      color: #333;
    }
    h4 {
      color: #333;
    }
  }
  &.active {
    background: linear-gradient(to bottom, orange, crimson);
    h4 {
      color: #fff;
    }
    svg {
      color: #fff;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 3rem auto 0 auto;
  width: 40rem;
  input[type="text"] {
    padding: 0.6rem 3.6rem;
    width: 100%;
    background: linear-gradient(35deg, rgb(49, 49, 49), rgb(31, 31, 31));
    border: none;
    color: #fff;
    outline: none;
    font-size: 1.5rem;
    border-radius: 25rem;
    border-radius: 1rem;
  }
  svg {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    font-size: 1.3rem;
  }
`;
export const DetailWrapper = styled(motion.div)`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: #333;
    color: #fff;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
export const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #ffff;
  border: 2px solid black;
  cursor: pointer;
  margin-right: 2rem;
  font-weight: 600;
  text-transform: capitalize;
`;
export const Info = styled.div`
  margin-left: 10rem;
  .info-details {
    /* margin-top: 3rem; */
    margin: 3rem 3rem 3rem 0;
    padding: 0.3rem;
    font-size: 1rem;
    font-weight: 550;
  }
`;
export const NavLogo = styled(NavLink)`
  width: 100%;
  display: flex;
  margin: 3rem;
  margin-bottom: 0;
  color: #333;
  text-decoration: none;
  font-size: 1.5rem;
  align-items: center;
  justify-content: left;
  font-weight: bold;
  font-family: "Poppins", cursive;
  svg {
    font-size: 3rem;
  }
  p {
    letter-spacing: 0.3rem;
  }
`;
