import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 12px;
  user-select: none;
  cursor: pointer;
  z-index: 5;
  background-color: #c0c4c625;
  margin: 8px;
  font-weight: bold;

  &:focus {
    outline: none;
  }
  &.is-selected {
    box-shadow: 3px 2px 8px rgba(0, 0, 0, 0.1);
    border: 1.5px solid rgb(170, 170, 170);
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  margin-top: -5px;
  padding: 12px;
  display: none;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  // background-color: #c0c4c630;
`;
