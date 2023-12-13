import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    font-weight: normal;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
  }
  h1 {
    font-weight: normal;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 100v;
  overflow: hidden;
`;

export const TrackViewer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  min-width: 70vw;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30vw;
  position: sticky;
  border-left: 1px solid black;
  padding: 0 10px;
  background: white;
`;
