'use client';
import { Box, Typography, Button, styled, IconButton } from '@mui/material';
import SideNavigation from './SideNavigation';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const DashboardContainer = styled(Box)({
  minHeight: '100vh',
  background: '#F5F5F5',
  paddingTop: '72px', // Account for fixed header
});

const SideNav = styled(Box)<{ isExpanded: boolean }>(({ theme, isExpanded }) => ({
  position: 'fixed',
  left: 0,
  top: '100px',
  bottom: 0,
  width: isExpanded ? '240px' : '80px',
  background: '#ff6600ff',// nAV BAR COLOR
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '24px 8px',
  transition: 'all 0.3s ease',
  zIndex: 1000,
  overflow: 'hidden',
  borderTopRightRadius: '20px',
  borderBottomRightRadius: '0px',
  [theme.breakpoints.down('md')]: {
    top: 'auto', // Reset top position
    bottom: 0, // Stick to bottom
    left: 0,
    right: 0,
    width: '100%', // Full width
    height: isExpanded ? '240px' : '60px', // Collapsed height on mobile
    borderRadius: '20px 20px 0 0', // Curve top corners only
    padding: '8px',
    flexDirection: 'row', // Horizontal layout on mobile
    justifyContent: 'center',
  },
}));

const MainContent = styled(Box)<{ sidenavwidth: string }>(({ theme, sidenavwidth }) => ({
  marginLeft: sidenavwidth,
  padding: '30px',
  transition: 'margin-left 0.3s ease',
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
    padding: '16px',
    marginBottom: '80px', // Space for mobile navigation
  },
}));

const EmployeeDetailsCard = styled(Box)(({ theme }) => ({
  background: '#FFFFFF',
  borderRadius: '8px',
  padding: '24px',
  marginBottom: '24px',
  [theme.breakpoints.down('md')]: {
    padding: '16px',
  },
}));

const StatusCardsContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '24px',
  marginBottom: '24px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

const StatusCard = styled(Box)<{ bgcolor: string }>(({ bgcolor }) => ({
  background: bgcolor,
  borderRadius: '8px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  color: '#FFFFFF',
}));

const DetailRow = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '24px',
  marginBottom: '16px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

const DetailLabel = styled(Typography)({
  color: '#666666',
  fontSize: '14px',
  marginBottom: '4px',
});

const DetailValue = styled(Typography)({
  color: '#000000',
  fontSize: '16px',
  fontWeight: 500,
});

const DSRDetailsCard = styled(Box)(({ theme }) => ({
  background: '#FFFFFF',
  borderRadius: '8px',
  padding: '24px',
  marginBottom: '24px',
  [theme.breakpoints.down('md')]: {
    padding: '16px',
  },
}));

const CardTitle = styled(Typography)({
  fontSize: '18px',
  fontWeight: 600,
  color: '#000000',
  marginBottom: '24px',
  '&::after': {
    content: '""',
    display: 'block',
    width: '40px',
    height: '4px',
    background: '#FF5E00',
    marginTop: '8px',
  },
});

const DSRTable = styled(Box)({
  display: 'grid',
  gap: '16px',
});

const DSRRow = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '24px',
  alignItems: 'center',
});

const ApplyButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: '24px',
});

const ApplyButton = styled(Button)({
  backgroundColor: '#FF5E00',
  color: '#FFFFFF',
  padding: '12px 32px',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 600,
  minWidth: '280px',
  '&:hover': {
    backgroundColor: '#E65500',
  },
});

const ExpandButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: '-8px',
  top: '26px',
  background: '#ffffffff',
  width: '40px',
  height: '42px',
  boxShadow: '0px 2px 4px rgba(255, 70, 70, 0.1)',
  
  '&:hover': {
    background: '#ffffffff',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export default function Dashboard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const employeeDetails = {
    fullName: 'Shakthi G',
    employeeId: '180354',
    organizationName: 'Injaz - Tech - HR tech',
    grade: 'Z',
    businessGroup: 'MashreqBank',
    job: 'External Consultant',
  };

  const statusCards = [
    { label: 'All', count: 0, color: '#FF9800' },
    { label: 'In Progress', count: 0, color: '#2196F3' },
    { label: 'Approved', count: 0, color: '#4CAF50' },
    { label: 'Rejected', count: 0, color: '#F44336' },
  ];

  const dsrDetails = [
    { label: 'Staff Loan DSR', value: '10.00' },
    { label: 'Commercial Loan DSR', value: '20.00' },
    { label: 'Total DSR (Staff Loan + Commercial)', value: '30.00' },
  ];

  const handleApplyLoan = () => {
    router.push('/loan-application');
  };

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <DashboardContainer>
      <SideNav isExpanded={isExpanded}>
        <SideNavigation isExpanded={isExpanded} />
        <ExpandButton
          onClick={handleExpandClick}
          size="small"
        >
          <ChevronRightIcon 
            sx={{ 
              transform: isExpanded ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.3s ease',
            }} 
          />
        </ExpandButton>
      </SideNav>
      
      <MainContent sidenavwidth={isExpanded ? '240px' : '80px'}>
        <Box sx={{ 
          display: 'grid', 
          gap: '24px',
        }}>
          <EmployeeDetailsCard>
            <CardTitle>Employee Details</CardTitle>
            <DetailRow>
              <Box>
                <DetailLabel>Full Name :</DetailLabel>
                <DetailValue>{employeeDetails.fullName}</DetailValue>
              </Box>
              <Box>
                <DetailLabel>Grade :</DetailLabel>
                <DetailValue>{employeeDetails.grade}</DetailValue>
              </Box>
              <Box>
                <DetailLabel>Employee Id :</DetailLabel>
                <DetailValue>{employeeDetails.employeeId}</DetailValue>
              </Box>
              <Box>
                <DetailLabel>Business Group :</DetailLabel>
                <DetailValue>{employeeDetails.businessGroup}</DetailValue>
              </Box>
            </DetailRow>
            <DetailRow>
              <Box>
                <DetailLabel>Organization Name :</DetailLabel>
                <DetailValue>{employeeDetails.organizationName}</DetailValue>
              </Box>
              <Box>
                <DetailLabel>Job :</DetailLabel>
                <DetailValue>{employeeDetails.job}</DetailValue>
              </Box>
            </DetailRow>
          </EmployeeDetailsCard>

          <StatusCardsContainer>
            {statusCards.map((card) => (
              <StatusCard key={card.label} bgcolor={card.color}>
                <Typography variant="h3" sx={{ fontSize: '48px', fontWeight: 700, mb: 1 }}>
                  {card.count}
                </Typography>
                <Typography>{card.label}</Typography>
              </StatusCard>
            ))}
          </StatusCardsContainer>

          <DSRDetailsCard>
            <CardTitle>DSR Details</CardTitle>
            <DSRTable>
              {dsrDetails.map((item) => (
                <DSRRow key={item.label}>
                  <Typography>{item.label} :</Typography>
                  <Typography sx={{ fontWeight: 500 }}>{item.value}</Typography>
                </DSRRow>
              ))}
            </DSRTable>
          </DSRDetailsCard>
          <ApplyButtonContainer>
            <ApplyButton onClick={handleApplyLoan}>
              Apply for Loan / Advance
            </ApplyButton>
          </ApplyButtonContainer>
        </Box>
      </MainContent>
    </DashboardContainer>
  );
}
