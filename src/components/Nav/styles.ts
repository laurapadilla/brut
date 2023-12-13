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

export const UserContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

type ProfileProps = {
  profilesrc: string;
};

export const Profile = styled.image<ProfileProps>`
  background-image: ${(props) => `url(${props.profilesrc})`};
  background-size: cover;
  border: 2px solid black;
  height: 3rem;
  width: 3rem;
  filter: grayscale(1);
`;

export const Button = styled.button`
  background: black;
  border: 0;
  color: white;
  cursor: pointer;
  height: 2.5rem;
  padding: 0 2rem;

  &:hover {
    background: gray;
    color: white;
  }
`;

export const ButtonInverted = styled(Button)`
  background: white;
  color: black;
  border: 2px solid black;

  &:hover {
    background: black;
    color: white;
  }
`;
