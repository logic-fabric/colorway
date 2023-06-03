import React from "react";
import styled from "styled-components";

import { convertHexaToHslCode } from "../../../utils/colors/colorCodeConverters";

export const DEFAULT_COLOR = "lightgrey";
export const DEFAULT_SIZE = "6rem";

type ColorBoxProps = {
  color?: string;
  isRounded?: boolean;
  size?: `${number}px` | `${number}rem`;
};

export function ColorBox({
  color = DEFAULT_COLOR,
  isRounded = false,
  size = DEFAULT_SIZE,
}: ColorBoxProps) {
  return (
    <ColorBoxContainer
      color={color}
      isRounded={isRounded}
      size={size}
      data-testid="color-box"
    >
      <span>{color}</span>
      <span>{convertHexaToHslCode(color)}</span>
    </ColorBoxContainer>
  );
}

const ColorBoxContainer = styled.p<ColorBoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: ${(props) => (props.isRounded ? "50%" : "0")};

  background: ${(props) => props.color};

  & span {
    margin: 0.5rem 0;

    font-size: 1.2rem;
    font-weight: 500;
  }

  & span:nth-child(2) {
    font-size: 0.9rem;
  }
`;
