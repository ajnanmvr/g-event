"use client"
import React, { FC, MouseEventHandler } from 'react';
import { AppBar, Toolbar, Box, InputBase, styled } from '@mui/material';
import { Menu as MenuIcon, Tune, HelpOutlineOutlined, SettingsOutlined, AppsOutlined, AccountCircleOutlined, Search } from '@mui/icons-material';

interface HeaderProps {
  toggleDrawer: MouseEventHandler<SVGSVGElement>;
}

const StyledAppBar = styled(AppBar)`
  background: #f5F5F5;
  box-shadow: none;
`;

const SearchWrapper = styled(Box)`
  background: #EAF1FB;
  margin-left: 80px;
  border-radius: 8px;
  min-width: 690px;
  max-width: 720px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  & > div {
    width: 100%
  }
`;

const OptionsWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  & > svg {
    margin-left: 20px;
  }
`;

const Header: FC<HeaderProps> = ({ toggleDrawer }) => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <MenuIcon color="action" onClick={toggleDrawer} />
        <img src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"  alt="logo" style={{ width: 110, marginLeft: 15 }} />
        <SearchWrapper>
          <Search color="action" />
          <InputBase />
          <Tune color="action"/>
        </SearchWrapper>

        <OptionsWrapper>
          <HelpOutlineOutlined color="action" />
          <SettingsOutlined color="action" />
          <AppsOutlined color="action" />
          <AccountCircleOutlined color="action" />
        </OptionsWrapper>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
