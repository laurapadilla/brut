import { redirectToAuthCodeFlow } from "../../lib/auth";
import { Nullable } from "../../lib/utils";
import { H1, LoginButton, Navbar, Profile } from "./styles";

type NavProps = {
  profile?: Nullable<string>;
};

export function Nav({ profile }: NavProps) {
  const clientId: string = import.meta.env.VITE_CLIENT_ID;

  const handleLogin = async () => {
    await redirectToAuthCodeFlow(clientId);
  };

  return (
    <Navbar>
      <H1>Brut</H1>
      {!profile ? (
        <LoginButton onClick={handleLogin}>Login</LoginButton>
      ) : (
        <Profile profile={profile}></Profile>
      )}
    </Navbar>
  );
}
