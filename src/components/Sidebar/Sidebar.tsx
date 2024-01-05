/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from "react-select";
import { Controls } from "..";

type SideBarProps = {
  getTracks: (id: string) => void;
  playlists: Array<string>;
  token: string;
  tracks: Array<string>;
};

export function SideBar({ getTracks, playlists, token, tracks }: SideBarProps) {
  const playlistStyles = {
    menuLists: (styles: any) => {
      return {
        ...styles,
        maxHeight: "25vh",
      };
    },
    option: (styles: any, { isFocused }: { isFocused: any }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#999999" : null,
        color: "#000",
      };
    },
  };

  function handleChange(e: any) {
    getTracks(e.id);
  }
  return (
    <>
      <Controls token={token} tracks={tracks} />
      <Select
        defaultValue={playlists[0]}
        getOptionLabel={(e: any) => e.name}
        options={playlists}
        onChange={handleChange}
        styles={playlistStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "red",
            primary: "black",
          },
        })}
      />
    </>
  );
}
