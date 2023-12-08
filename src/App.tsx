import { useState } from "react";
import { Login, TrackInfo } from "./components";

export default function App() {
  const [token, setToken] = useState<string | null>(null);
  if (!token) {
    return (
      <>
        <Login></Login>
      </>
    );
  }

  return <TrackInfo />;
}
