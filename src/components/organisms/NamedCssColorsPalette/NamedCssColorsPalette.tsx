import styled from "styled-components";

import { NamedCssColorBox } from "../../molecules/NamedCssColorBox/NamedCssColorBox.tsx";
import { NAMED_CSS_COLORS } from "../../../utils/colors/constants.ts";

export function NamedCssColorsPalette() {
  return (
    <NamedCssColorsPaletteContainer>
      {Object.keys(NAMED_CSS_COLORS).map((colorName) => {
        return <NamedCssColorBox colorName={colorName} key={colorName} />;
      })}
    </NamedCssColorsPaletteContainer>
  );
}

const NamedCssColorsPaletteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
