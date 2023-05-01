import React from "react";
import styled from "styled-components";

import { ColorBox } from "../../atoms/ColorBox/ColorBox.tsx";
import { convertNamedColorToHexaCode } from "../../../utils/colors/colorConverters.ts";

export const DEFAULT_COLOR = "lightgrey";
export const DEFAULT_SIZE = "10rem";

type NamedColorBoxProps = {
  colorName?: string;
  isRounded?: boolean;
  name?: string;
  size?: `${number}px` | `${number}rem`;
};

export function NamedCssColorBox({
  colorName = DEFAULT_COLOR,
  isRounded = false,
  name = "",
  size = DEFAULT_SIZE,
}: NamedColorBoxProps) {
  return (
    <NamedCssColorBoxContainer size={size}>
      <ColorBox
        color={convertNamedColorToHexaCode(colorName)}
        isRounded={isRounded}
        size={size}
      />

      <ColorName>{colorName}</ColorName>
    </NamedCssColorBoxContainer>
  );
}

const ColorName = styled.p`
  font-weight: 700;
  text-align: center;
`;

const NamedCssColorBoxContainer = styled.div<NamedColorBoxProps>`
  width: ${(props) => props.size};
`;
