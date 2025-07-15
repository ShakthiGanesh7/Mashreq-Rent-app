'use client';
import { Box, Typography, TextField, Button, styled, IconButton, MenuItem, Select, FormControl, InputLabel, Link as MuiLink, Dialog, DialogContent, DialogContentText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SideNavigation from '../components/SideNavigation';
import Header from '../components/Header';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import type { SelectChangeEvent } from '@mui/material';

const PageContainer = styled(Box)({
  minHeight: '100vh',
  background: '#F5F5F5',
  paddingTop: '72px',
  width: '100%',
  overflow: 'hidden',
});

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '24px',
  maxWidth: '1400px',
  margin: '0 auto',
  gap: '24px',
  [theme.breakpoints.down('md')]: {
    padding: '16px 2px',
    flexDirection: 'column',
    gap: '16px',
    margin: 0,
    width: '100%'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '12px 2px',
    gap: '12px'
  },
}));

const SideNav = styled(Box)<{ isExpanded: boolean }>(({ theme, isExpanded }) => ({
  position: 'fixed',
  left: 0,
  top: '100px',
  bottom: 0,
  width: isExpanded ? '240px' : '80px',
  background: '#1C1C1C',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '24px 8px',
  transition: 'all 0.3s ease',
  zIndex: 1000,
  overflow: 'hidden',
  borderTopRightRadius: '20px',
  borderBottomRightRadius: '20px',
  [theme.breakpoints.down('md')]: {
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: isExpanded ? '240px' : '60px',
    borderRadius: '20px 20px 0 0',
    padding: '8px',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

const StepIndicatorContainer = styled(Box)(({ theme }) => ({
  width: '280px',
  padding: '32px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  marginTop: '24px',
  backgroundColor: '#FFFFFF',
  borderRadius: '8px',
  height: 'fit-content',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginTop: 0,
    padding: '16px',
    flexDirection: 'row',
    overflowX: 'auto',
    gap: '20px',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  [theme.breakpoints.down('sm')]: {
    padding: '12px',
    gap: '16px',
  },
}));

const StepRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '8px',
    minWidth: '80px',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const StepIndicator = styled(Box)<{ active?: boolean; completed?: boolean }>(({ active, completed }) => ({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  background: completed ? '#FF5E00' : active ? '#FF5E00' : '#E0E0E0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: completed || active ? '#FFFFFF' : '#000000',
  fontWeight: 600,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    bottom: '-28px',
    transform: 'translateX(-50%)',
    width: '2px',
    height: '28px',
    background: completed ? '#FF5E00' : '#E0E0E0',
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
}));

const StepLabel = styled(Typography)<{ active?: boolean }>(({ active }) => ({
  fontSize: '16px',
  fontWeight: active ? 600 : 500,
  color: '#000000',
}));

const MainContent = styled(Box)<{ sidenavwidth: string }>(({ theme, sidenavwidth }) => ({
  marginLeft: sidenavwidth,
  width: '100%',
  transition: 'margin-left 0.3s ease',
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
    marginBottom: '80px',
    width: '100%',
    maxWidth: '100%',
    padding: 0
  },
}));

const FormContainer = styled(Box)(({ theme }) => ({
  background: '#FFFFFF',
  borderRadius: '8px',
  padding: '32px',
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    padding: '20px 12px',
    margin: '0 2px',
    borderRadius: '4px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '16px 8px',
    margin: '0 2px',
  },
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 600,
  color: '#000000',
  marginBottom: '32px',
  position: 'relative',
  paddingBottom: '8px',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '48px',
    height: '4px',
    background: '#FF5E00',
    borderRadius: '2px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    marginBottom: '24px',
  },
}));

const InputGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '24px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    gap: '16px',
  },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    height: '56px',
    '&.Mui-focused fieldset': {
      borderColor: '#FF5E00',
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#FF5E00',
  },
  [theme.breakpoints.down('sm')]: {
    '& .MuiOutlinedInput-root': {
      height: '48px',
    },
    '& .MuiInputLabel-root': {
      fontSize: '14px',
    },
    '& .MuiOutlinedInput-input': {
      fontSize: '14px',
      padding: '12px',
    },
  },
}));

const CustomSelect = styled(Select<string>)(({ theme }) => ({
  height: '56px',
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#FF5E00',
  },
  [theme.breakpoints.down('sm')]: {
    height: '48px',
    '& .MuiSelect-select': {
      fontSize: '14px',
      padding: '12px',
    },
  },
}));

const CustomFormControl = styled(FormControl)({
  width: '100%',
  '& .MuiInputLabel-root': {
    '&.Mui-focused': {
      color: '#FF5E00',
    },
  },
});

const ExpandButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: '-16px',
  top: '24px',
  background: '#FFFFFF',
  width: '32px',
  height: '32px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    background: '#FFFFFF',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '16px',
  marginTop: '32px',
  [theme.breakpoints.down('md')]: {
    marginTop: '24px',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '12px',
    '& .MuiButton-root': {
      width: '100%',
      height: '48px',
      fontSize: '16px',
      padding: '8px 16px',
    },
  },
}));

export default function LoanApplication() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loanType, setLoanType] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();
  const totalSteps = 4;

  const steps = [
    { label: 'Loan Information', step: 1 },
    { label: 'Loan Details', step: 2 },
    { label: 'Terms & Conditions', step: 3 },
    { label: 'Approved', step: 4 },
  ];

  const loanTypes = [
    { value: 'rental', label: 'Rental Loan' },
    { value: 'personal', label: 'Personal Loan' },
    { value: 'home', label: 'Home Loan' },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      router.back();
    }
  };

  const handleSubmit = () => {
    setShowSuccess(true);
    // Auto-close dialog after 2 seconds and redirect to dashboard
    setTimeout(() => {
      setShowSuccess(false);
      router.push('/dashboard');
    }, 2000);
  };

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLoanTypeChange = (event: SelectChangeEvent<string>) => {
    setLoanType(event.target.value);
  };

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/terms-and-conditions');
  };

  return (
    <PageContainer>
      <Header />
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
        <ContentWrapper>
          <StepIndicatorContainer>
            {steps.map((step) => (
              <StepRow key={step.step}>
                <StepIndicator
                  active={step.step === currentStep}
                  completed={step.step < currentStep}
                >
                  {step.step < currentStep ? '✓' : step.step}
                </StepIndicator>
                <StepLabel active={step.step === currentStep}>
                  {step.label}
                </StepLabel>
              </StepRow>
            ))}
          </StepIndicatorContainer>

          <FormContainer>
            {currentStep === 1 && (
              <>
                <FormTitle>Loan Information</FormTitle>
                <InputGrid>
                  <CustomFormControl>
                    <InputLabel id="loan-type-label">Loan Type</InputLabel>
                    <CustomSelect
                      labelId="loan-type-label"
                      label="Loan Type"
                      value={loanType}
                      onChange={handleLoanTypeChange}
                    >
                      {loanTypes.map((type) => (
                        <MenuItem key={type.value} value={type.value}>
                          {type.label}
                        </MenuItem>
                      ))}
                    </CustomSelect>
                  </CustomFormControl>
                  <CustomTextField
                    label="Loan Amount"
                    fullWidth
                    variant="outlined"
                    type="number"
                  />
                  <CustomTextField
                    label="No of Installments"
                    fullWidth
                    variant="outlined"
                    type="number"
                  />
                  <CustomTextField
                    label="Contract Amount"
                    fullWidth
                    variant="outlined"
                    type="number"
                  />
                </InputGrid>
              </>
            )}
            {currentStep === 2 && (
              <>
                <FormTitle>Loan Details</FormTitle>
                <InputGrid>
                  <CustomTextField
                    label="Exception First or Second Installment DSR"
                    fullWidth
                    variant="outlined"
                  />
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    width: { xs: '100%', sm: 'auto' },
                  }}>
                    <Button
                      variant="contained"
                      onClick={() => {/* Add DSR calculation logic */}}
                      sx={{
                        bgcolor: '#FF5E00',
                        '&:hover': { bgcolor: '#E65500' },
                        textTransform: 'none',
                        px: { xs: 3, sm: 4 },
                        py: { xs: 1, sm: 1.5 },
                        width: { xs: '100%', sm: 'auto' },
                      }}
                    >
                      Calculate DSR
                    </Button>
                  </Box>
                </InputGrid>
              </>
            )}
            {currentStep === 3 && (
              <>
                <FormTitle>Terms and Conditions</FormTitle>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    I have carefully read and agree to the{' '}
                    <MuiLink
                      href="/terms-and-conditions"
                      onClick={handleTermsClick}
                      sx={{
                        color: '#1976d2',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#1565c0',
                        },
                      }}
                    >
                      Terms and Conditions
                    </MuiLink>
                  </Typography>
                  
                </Box>
              </>
            )}
            {currentStep === 4 && (
              <>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ 
                    color: '#4CAF50', 
                    mb: 2,
                    fontSize: { xs: '18px', sm: '20px' } 
                  }}>
                    Application Ready for Submission
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                      bgcolor: '#FF5E00',
                      '&:hover': { bgcolor: '#E65500' },
                      textTransform: 'none',
                      mt: 2,
                      width: { xs: '100%', sm: 'auto' },
                    }}
                  >
                    Submit Application
                  </Button>
                </Box>
              </>
            )}
            <ActionButtons>
              {currentStep > 1 && (
                <Button
                  variant="outlined"
                  onClick={handleBack}
                  sx={{ 
                    borderColor: '#FF5E00', 
                    color: '#FF5E00',
                    '&:hover': { borderColor: '#E65500', color: '#E65500' },
                    textTransform: 'none',
                    padding: { xs: '8px 16px', sm: '12px 32px' },
                    height: { xs: '48px', sm: 'auto' },
                    fontSize: { xs: '16px', sm: 'inherit' },
                    width: { xs: '100%', sm: 'auto' },
                  }}
                >
                  Back
                </Button>
              )}
              {currentStep < totalSteps && (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ 
                    bgcolor: '#FF5E00',
                    '&:hover': { bgcolor: '#E65500' },
                    textTransform: 'none',
                    padding: { xs: '8px 16px', sm: '12px 32px' },
                    height: { xs: '48px', sm: 'auto' },
                    fontSize: { xs: '16px', sm: 'inherit' },
                    width: { xs: '100%', sm: 'auto' },
                  }}
                >
                  Next
                </Button>
              )}
            </ActionButtons>
          </FormContainer>
        </ContentWrapper>
      </MainContent>

      {/* Success Dialog */}
      <Dialog
        open={showSuccess}
        aria-describedby="success-dialog-description"
        PaperProps={{
          sx: {
            borderRadius: '8px',
            padding: '16px',
            minWidth: '300px'
          }
        }}
      >
        <DialogContent sx={{ textAlign: 'center' }}>
          <CheckCircleIcon sx={{ fontSize: 60, color: '#4CAF50', mb: 2 }} />
          <DialogContentText
            id="success-dialog-description"
            sx={{
              color: '#000',
              fontSize: '18px',
              fontWeight: 500
            }}
          >
            Application Submitted Successfully!
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </PageContainer>
  );
}
