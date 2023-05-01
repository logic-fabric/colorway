import React from "react";

import { NamedCssColorBox } from "../molecules/NamedCssColorBox/NamedCssColorBox.tsx";

export function App() {
  return (
    <main>
      <h1>Colorway</h1>

      <NamedCssColorBox />
      <NamedCssColorBox colorName="lightgoldenrodyellow" isRounded={true} />
      <NamedCssColorBox colorName="lightgreen" size="5rem" />
    </main>
  );
}
