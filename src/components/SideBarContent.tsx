import React, { FC, useState } from "react";
import { Button, List, ListItem, Box, styled } from "@mui/material";
// import ComposeMail from './ComposeMail';
import { SIDEBAR_DATA } from "../config/sidebar.config";
import { CreateOutlined } from "@mui/icons-material";

interface SideBarContentProps {}

const Container = styled(Box)`
  padding: 8px;
  & > ul {
    padding: 10px 0 0 5px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    & > a {
      text-decoration: none;
      color: inherit;
    }
    & > a > li > svg {
      margin-right: 20px;
    }
  }
`;

const ComposeButton = styled(Button)`
  background: #c2e7ff;
  color: #001d35;
  border-radius: 16px;
  padding: 15px;
  min-width: 140px;
  text-transform: none;
`;

const SideBarContent: FC<SideBarContentProps> = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const onComposeClick = () => {
    setOpenDrawer(true);
  };

  return (
    <Container>
      <ComposeButton onClick={() => onComposeClick()}>
        <CreateOutlined style={{ marginRight: 10 }} />
        Compose
      </ComposeButton>
      <List>
        {SIDEBAR_DATA.map((data) => (
          <div key={data.name}>
            <ListItem
              style={{
                backgroundColor: "#d3e3fd",
                borderRadius: "0 16px 16px 0",
              }}
            >
              {data.icon && <data.icon fontSize="small" />}
              {data.title}
            </ListItem>
          </div>
        ))}
      </List>
      {/* <ComposeMail open={openDrawer} setOpenDrawer={setOpenDrawer} /> */}
    </Container>
  );
};

export default SideBarContent;
