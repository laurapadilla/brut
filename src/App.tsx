import { useEffect, useState } from "react";
import { Login, TrackInfo } from "./components";
import { getAccessToken } from "./lib/auth";

function App() {
  const [token, setToken] = useState<string | null>(null);
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  useEffect(() => {
    if (code && !token) {
      getToken();
    }
  });

  const getToken = async () => {
    if (code) {
      const accessToken = await getAccessToken(clientId, code);
      setToken(accessToken);
    }
  };

  if (!token) {
    return (
      <>
        <Login />
      </>
    );
  } else {
    return <TrackInfo />;
  }
}

export default App;
