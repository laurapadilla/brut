import { useEffect, useState } from "react";
import { Login, Nav, TrackInfo } from "./components";
import { getAccessToken } from "./lib/auth";
import axios from "axios";
import { GlobalStyle } from "./theme/styles";

function App() {
  const GlobalStyleProxy = GlobalStyle;

  const [token, setToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<string | undefined>(undefined);

  const clientId = import.meta.env.VITE_CLIENT_ID;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  useEffect(() => {
    if (code && !token) {
      getToken();
    }
    if (token) {
      getUserInfo();
    }
  });

  const getToken = async () => {
    if (code) {
      const accessToken = await getAccessToken(clientId, code);
      setToken(accessToken);
    }
  };

  const getUserInfo = async () => {
    const { data } = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    setProfile(data.images[0].url);
  };

  if (!token) {
    return (
      <>
        <GlobalStyleProxy />
        <Login />
      </>
    );
  } else {
    return (
      <>
        <GlobalStyleProxy />
        <Nav profile={profile} />
        <TrackInfo />
      </>
    );
  }
}

export default App;
