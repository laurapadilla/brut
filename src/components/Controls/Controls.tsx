import SpotifyPlayer from "react-spotify-web-playback";

type ControlsProps = {
  token: string;
  tracks: Array<string>;
};

export function Controls({ token, tracks }: ControlsProps) {
  return <SpotifyPlayer token={token} uris={tracks} />;
}
