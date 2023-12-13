import { redirectToAuthCodeFlow } from "../../lib/auth";
import { Nullable } from "../../lib/utils";
import {
  H1,
  Button,
  Navbar,
  Profile,
  UserContainer,
  ButtonInverted,
} from "./styles";

type NavProps = {
  profile?: Nullable<string>;
  logout: () => void;
};

export function Nav({ logout, profile }: NavProps) {
  const clientId: string = import.meta.env.VITE_CLIENT_ID;

  const handleLogin = async () => {
    await redirectToAuthCodeFlow(clientId);
  };

  return (
    <Navbar>
      <H1>Brut</H1>
      {!profile ? (
        <Button onClick={handleLogin}>Login</Button>
      ) : (
        <UserContainer>
          <Profile profilesrc={profile}></Profile>
          <ButtonInverted onClick={logout}>Logout</ButtonInverted>
        </UserContainer>
      )}
    </Navbar>
  );
}
