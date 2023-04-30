import React from "react";

import { ColorBox } from "../atoms/ColorBox/ColorBox.tsx";

export function App() {
  return (
    <main>
      <h1>Colorway</h1>

      <ColorBox />
      <ColorBox color="lightblue" isRounded={true} />
      <ColorBox color="lightgreen" size="8rem" />
    </main>
  );
}
