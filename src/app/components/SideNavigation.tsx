'use client';
import { Box, Typography, styled, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DescriptionIcon from '@mui/icons-material/Description';
import Link from 'next/link';

interface NavIconButtonProps {
  isExpanded: boolean;
}

interface NavTextProps {
  show: boolean;
}

interface SideNavigationProps {
  isExpanded: boolean;
}

const NavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  width: '100%',
  
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: '8px',
  },
}));

const NavIconButton = styled(Box)<NavIconButtonProps>(({ theme, isExpanded }) => ({
  width: isExpanded ? '200px' : '48px',
  minWidth: '48px', // Ensure minimum width for icon
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: isExpanded ? 'flex-start' : 'center',
  padding: '0 10px',
  color: '#FFFFFF',
  cursor: 'pointer',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  position: 'relative',
  '& .MuiSvgIcon-root': {
    width: '24px',
    height: '24px',
    flexShrink: 0, // Prevent icon from shrinking
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  '&.active': {
    backgroundColor: '#FF5E00',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '-8px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '4px',
      height: '24px',
      backgroundColor: '#FFFFFF',
      borderRadius: '0 4px 4px 0',
    },
  },
}));

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const NavText = styled(Typography)<NavTextProps>(({ show }) => ({
  marginLeft: '12px',
  fontSize: '14px',
  fontWeight: 500,
  opacity: show ? 1 : 0,
  transition: 'opacity 0.3s ease',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
}));

const ExpandButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  bottom: '16px',
  right: '16px',
  color: '#fff',
  [theme.breakpoints.down('md')]: {
    display: 'none', // Hide expand button on mobile
  },
}));

export default function SideNavigation({ isExpanded }: SideNavigationProps) {
  const navItems = [
    { 
      icon: <HomeIcon sx={{ color: '#FFFFFF !important' }} />, 
      text: 'Dashboard', 
      href: '/dashboard', 
      active: true 
    },
    { 
      icon: <AccountBalanceIcon sx={{ color: '#FFFFFF !important' }} />, 
      text: 'Loans', 
      href: '/loans' 
    },
    { 
      icon: <DescriptionIcon sx={{ color: '#FFFFFF !important' }} />, 
      text: 'Reports', 
      href: '/reports' 
    },
  ];

  return (
    <NavContainer>
      {navItems.map((item) => (
        <StyledLink href={item.href} key={item.href}>
          <NavIconButton isExpanded={isExpanded} className={item.active ? 'active' : ''}>
            {item.icon}
            <NavText show={isExpanded}>{item.text}</NavText>
          </NavIconButton>
        </StyledLink>
      ))}
      <ExpandButton>
        {/* Icon for expand/collapse */}
      </ExpandButton>
    </NavContainer>
  );
}
