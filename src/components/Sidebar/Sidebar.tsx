/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from "react-select";

type SideBarProps = {
  playlists: Array<string>;
};

export function SideBar({ playlists }: SideBarProps) {
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
        color: "#333",
      };
    },
  };

  function handleChange(e: any) {
    console.log(e);
  }
  return (
    <>
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
            primary25: "hotpink",
            primary: "black",
          },
        })}
      />
    </>
  );
}
