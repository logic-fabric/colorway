import React from "react";

import styled from "styled-components";

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
      {color}
    </ColorBoxContainer>
  );
}

const ColorBoxContainer = styled.p<ColorBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: ${(props) => (props.isRounded ? "50%" : "0")};

  background: ${(props) => props.color};
`;
