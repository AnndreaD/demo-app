import is from "typescript-styled-is";
import styled from "styled-components";
import { match } from "../utils";

import { ButtonProps } from "./types";

export const StyledButton = styled.button<ButtonProps>`
  padding: 15px 40px;
  border-style: solid;
  border-width: 1px;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;

  font-size: 16px;
  line-height: 1em;
  font-weight: 400;
  text-align: center;
  cursor: pointer;

  height: 48px;
  width: 245px;

  ${is("hasShadow")`

    &:hover {
    box-shadow: 4px -3px 0 0 #fff;
    opacity: 0.9;
  }

  `};

  ${match("variant", "blue")`
  color: #fff;
  border-color: #2d62fa;
  border-radius: 12px;
  background-color: #2d62fa;
  `}

  ${match("variant", "grey")`
    min-width: 102px;
    margin-left: 0px;
    border-color: rgb(66, 91, 118)!important;
    color: rgb(66, 91, 118)!important;
    background-color: #fff!important;
    border-radius: 3px;
  `}

  @media (min-width: 479px) {
    width: 295px;
  }
`;
