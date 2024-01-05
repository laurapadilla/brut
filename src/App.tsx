import { useEffect, useState } from "react";
import { Login, Nav, SideBar, TrackInfo } from "./components";
import { getAccessToken } from "./lib/auth";
import axios from "axios";
import {
  GlobalStyle,
  TrackViewer,
  SidebarContainer,
  PlayerContainer,
} from "./theme/styles";

function App() {
  const [token, setToken] = useState<string>("");
  const [profile, setProfile] = useState<string | null>(null);
  const [playlists, setPlaylists] = useState([]);
  const [tracks, setTracks] = useState<Array<string>>([]);

  const clientId = import.meta.env.VITE_CLIENT_ID;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  useEffect(() => {
    if (code && !token) {
      getToken();
    }
    if (token) {
      getUserInfo();
      getPlaylists();
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

  const getPlaylists = async () => {
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/playlists",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);
    const playlists = data.items.map(
      ({ name, id }: { name: string; id: number }) => {
        return { name, id };
      }
    );

    setPlaylists(playlists);
  };

  async function getTracks(id: string) {
    const { data } = await axios.get(
      `https://api.spotify.com/v1/playlists/${id}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const uris = Object.entries(data.items).map(([, val]) => val.track.url);
    console.log(uris);

    setTracks(uris);
  }

  function logout() {
    return setToken("");
  }

  if (!token) {
    return (
      <>
        <GlobalStyle />
        <Login />
      </>
    );
  } else {
    return (
      <>
        <GlobalStyle />
        <Nav logout={logout} profile={profile} />
        <PlayerContainer>
          <TrackViewer>
            <TrackInfo />
          </TrackViewer>
          <SidebarContainer>
            <SideBar
              getTracks={getTracks}
              playlists={playlists}
              token={token}
              tracks={tracks}
            />
          </SidebarContainer>
        </PlayerContainer>
      </>
    );
  }
}

export default App;
