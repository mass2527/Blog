import styled from "styled-components";
import {
  Content,
  DropdownMenuContentProps,
  DropdownMenuProps as DropdownMenuRootProps,
  DropdownMenuTriggerProps,
  ItemIndicator,
  RadioItem,
  Root,
  Trigger,
} from "@radix-ui/react-dropdown-menu";

import { ReactNode } from "react";

import { center } from "@/styles/utils/center";
import { flexRow } from "@/styles/utils/flex";

interface DropdownMenuProps {
  rootProps?: DropdownMenuRootProps;
  triggerProps?: DropdownMenuTriggerProps;
  contentProps?: DropdownMenuContentProps;
  trigger: ReactNode;
  content: ReactNode;
}

function DropdownMenu({
  rootProps,
  triggerProps,
  contentProps = {
    asChild: true,
  },
  trigger,
  content,
}: DropdownMenuProps) {
  return (
    <Root {...rootProps}>
      <Trigger {...triggerProps}>{trigger}</Trigger>
      <StyledContent {...contentProps}>{content}</StyledContent>
    </Root>
  );
}

const StyledContent = styled(Content)`
  min-width: max-content;
  background-color: ${({ theme }) => theme.colors.gray3};
  color: ${({ theme }) => theme.colors.black12};
  border-radius: ${({ theme }) => theme.radiuses[6]};
  padding: ${({ theme }) => theme.spacers[4]};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`;

const DropdownMenuItemIndicator = styled(ItemIndicator)`
  ${center}
`;

const DropdownMenuRadioItem = styled(RadioItem)`
  ${flexRow("normal", "flex-start")};
  width: 100%;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights[500]};
  border-radius: ${({ theme }) => theme.radiuses[6]};
  padding: ${({ theme }) => theme.spacers[8]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray4};
  }
`;

DropdownMenu.ItemIndicator = DropdownMenuItemIndicator;
DropdownMenu.RadioItem = DropdownMenuRadioItem;

export default DropdownMenu;
