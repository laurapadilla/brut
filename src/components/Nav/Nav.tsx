import { redirectToAuthCodeFlow } from "../../lib/auth";

export function Nav() {
  const clientId = import.meta.env.VITE_CLIENT_ID;

  const handleLogin = async () => {
    await redirectToAuthCodeFlow(clientId);
  };

  return (
    <>
      <h1>Brut</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}
