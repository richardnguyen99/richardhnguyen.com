/**
 * Styling for <Terminal /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import styled from "styled-components";

export const StyledTerminal = styled.div`
  position: relative;
  background: #f0f6fc;
  border: 1px solid rgba(27, 31, 36, 0.25);
  border-radius: 8px;
  color: #161b22;
  font-weight: 600;
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
    Liberation Mono, monospace;
  overflow: clip;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 16px 2px;

  pre {
    margin: 0;
    padding: 1rem 1rem;
    overflow: scroll;
    max-height: 640px;
    font-size: 14px;
    font-family: ui-monospace, "SFMono-Regular", "SF Mono", Menlo, Consolas,
      Liberation Mono, monospace;
    font-weight: 500;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;

export const StyledTerminalToolbar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) =>
    props.theme.mode === "dark" ? "rgb(25, 25, 25)" : "#e2e6f0"};
  color: var(--systemColor-text);
`;

export const StyledTerminalBtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 8px;
  margin-right: auto;
`;

export const StyledTerminalBtn = styled.span`
  border-radius: 50%;
  height: 14px;
  margin-right: 4px;
  width: 14px;

  &.close {
    background-color: var(--systemColor-red);
  }

  &.min {
    background-color: var(--systemColor-yellow);
  }

  &.max {
    background-color: var(--systemColor-green);
  }
`;

export const StyledTerminalTitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-right: auto;
  font-weight: 700;
  line-height: 2;
  margin-left: -32px;
`;

export const StyledTerminalContent = styled.div`
  height: 100%;
  overflow-y: auto;
  scrollbar-width: 5px;
`;
