'use client';
import { Box, Button, IconButton, Menu, MenuItem, Typography, styled } from '@mui/material';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';

const HeaderContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '84px',
  background: 'linear-gradient(90deg, #FF5E00 0%, #FB9544 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 24px',
  zIndex: 100,
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('sm')]: {
    padding: '0 16px',
    height: '64px',
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  width: '300px', // Increased from 140px
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: '150px', // Increased from 120px
  },
}));

const ActionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  [theme.breakpoints.down('sm')]: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: '#FFFFFF',
    padding: '8px 16px',
    boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.1)',
    justifyContent: 'space-around',
    zIndex: 1000,
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  color: '#FF5E00',
  padding: '8px 24px',
  height: '40px',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 600,
  letterSpacing: '0.4px',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#F8F8F8',
    boxShadow: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '6px 16px',
    height: '36px',
    fontSize: '13px',
  },
}));

const ProfileIcon = styled(IconButton)(({ theme }) => ({
  color: '#FFFFFF',
  padding: '8px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '36px', // Increased from 32px
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px',
      color: '#FF5E00',
    },
  },
  [theme.breakpoints.down('sm')]: {
    color: '#FF5E00',
    '&:hover': {
      backgroundColor: 'rgba(255, 94, 0, 0.04)',
    },
  },
}));

const MobileNavItem = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    color: '#FF5E00',
    '& .MuiSvgIcon-root': {
      fontSize: '24px',
    },
  },
}));

const NavText = styled(Typography)({
  fontSize: '12px',
  fontWeight: 500,
});

const UserMenu = styled(Menu)({
  '& .MuiPaper-root': {
    marginTop: '8px',
    minWidth: '150px',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  '& .MuiMenuItem-root': {
    padding: '12px 24px',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: '#F8F8F8',
    },
  },
});

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';
  const showNewLoanButton = !isLoginPage && pathname !== '/loan-application';
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleNewLoan = () => {
    router.push('/loan-application');
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Clear any stored authentication data
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    
    // Close the menu
    handleMenuClose();
    
    // Redirect to login page
    router.push('/login');
    router.refresh(); // Force a refresh to clear any cached data
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Image
          src="/images/mashreq-logo.png"
          alt="Mashreq Logo"
          fill
          style={{ 
            objectFit: 'contain',
            objectPosition: 'left center',
            filter: 'brightness(0) invert(1)',
          }}
          priority
        />
      </LogoContainer>

      {!isLoginPage && (
        <ActionContainer>
          {showNewLoanButton && (
            <>
              <ActionButton
                variant="contained"
                onClick={handleNewLoan}
                disableElevation
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                New Loan Application
              </ActionButton>
              <MobileNavItem onClick={handleNewLoan}>
                <Box sx={{ color: '#FF5E00' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/>
                  </svg>
                </Box>
                <NavText>New Loan</NavText>
              </MobileNavItem>
            </>
          )}
          <ProfileIcon onClick={handleProfileClick} sx={{ display: { xs: 'none', sm: 'flex' } }} />
          <MobileNavItem onClick={handleProfileClick}>
            <AccountCircleIcon />
            <NavText>Profile</NavText>
          </MobileNavItem>
          <UserMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem 
            onClick={handleLogout}
            sx={{ 
              color: '#FF5E00',
              '&:hover': { 
                backgroundColor: 'rgba(255, 94, 0, 0.04)' 
              }
            }}
          >
            Logout
          </MenuItem>
        </UserMenu>
      </ActionContainer>
      )}
    </HeaderContainer>
  );
}
