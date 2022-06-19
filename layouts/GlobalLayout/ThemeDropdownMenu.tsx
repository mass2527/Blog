import { RadioGroup } from "@radix-ui/react-dropdown-menu";
import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import DropdownMenu from "components/DropdownMenu";
import React from "react";
import { useRecoilState } from "recoil";
import { Theme, themeState } from "states/theme";
import styled from "styled-components";

function ThemeDropdownMenu() {
  const [theme, setTheme] = useRecoilState(themeState);

  return (
    <DropdownMenu
      trigger={<DropdownTrigger>Theme</DropdownTrigger>}
      content={
        <RadioGroup
          value={theme}
          onValueChange={(selected) => setTheme(selected as Theme)}
        >
          <StyledRadioItem
            value="os default"
            asChild
            $checked={theme === "os default"}
          >
            <button type="button">
              <Half2Icon />
              OS Default
            </button>
          </StyledRadioItem>
          <StyledRadioItem value="light" asChild $checked={theme === "light"}>
            <button type="button">
              <SunIcon />
              Light
            </button>
          </StyledRadioItem>
          <StyledRadioItem value="dark" asChild $checked={theme === "dark"}>
            <button type="button">
              <MoonIcon />
              Dark
            </button>
          </StyledRadioItem>
        </RadioGroup>
      }
    />
  );
}

const DropdownTrigger = styled.span`
  color: ${({ theme }) => theme.colors.gray11};
  &:hover {
    color: ${({ theme }) => theme.colors.gray12};
  }
`;

const StyledRadioItem = styled(DropdownMenu.RadioItem)<{ $checked: boolean }>`
  gap: ${({ theme }) => theme.spacers[4]};
  background-color: ${({ theme, $checked }) => $checked && theme.colors.gray5};
`;

export default ThemeDropdownMenu;
