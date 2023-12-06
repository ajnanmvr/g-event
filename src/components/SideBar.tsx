import React, { FC, MouseEvent } from 'react';
import { Drawer, styled } from '@mui/material';
import SideBarContent from './SideBarContent';

interface SideBarProps {
  toggleDrawer: (event: MouseEvent<HTMLElement>) => void;
  openDrawer: boolean;
}

const StyledDrawer = styled(Drawer)`
  margin-top: 54px;
`;

const SideBar: FC<SideBarProps> = ({ toggleDrawer, openDrawer }) => {
  return (
    <StyledDrawer
      anchor="left"
      open={openDrawer}
      onClose={toggleDrawer}
      hideBackdrop={true}
      ModalProps={{
        keepMounted: true,
      }}
      variant="persistent"
      sx={{
        '& .MuiDrawer-paper': {
          width: 250,
          borderRight: 'none',
          background: '#f5F5F5',
          marginTop: '64px',
          height: 'calc(100vh - 64px)',
        },
      }}
    >
      <SideBarContent />
    </StyledDrawer>
  );
};

export default SideBar;
