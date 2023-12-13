import styled from "styled-components";

export const Navbar = styled.header`
  align-items: center;
  background: #fff;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  min-height: 10vh;
  padding: 1em;
  width: 100vw;
`;

export const H1 = styled.h1`
  color: black;
  margin: 0.5rem 0 0.5rem 1rem;
  font-size: 2rem;
`;

type ProfileProps = {
  profileSrc: string;
};

export const Profile = styled.image<ProfileProps>`
  background-image: ${(props) => `url(${props.profileSrc})`};
  background-size: cover;
  border: 2px solid black;
  height: 3rem;
  width: 3rem;
  filter: grayscale(1);
`;

export const LoginButton = styled.button`
  background: black;
  border: 0;
  color: white;
  height: 2.5rem;
  padding: 0 2rem;
`;
