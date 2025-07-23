'use client';
import { Box, Typography, TextField, Button, styled, IconButton, MenuItem, Select, FormControl, InputLabel, Link as MuiLink, Dialog, DialogContent, DialogContentText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SideNavigation from '../components/SideNavigation';
import Header from '../components/Header';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import type { SelectChangeEvent } from '@mui/material';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// Styled Components
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
  background: '#ff6600ff',
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
  marginTop: '12px',
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
  gap: '20px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '8px',
    minWidth: '80px',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const StepIndicator = styled(Box)<{ active?: boolean; completed?: boolean; islaststep?: boolean }>(({ active, completed, islaststep }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: completed ? '#FF5E00' : active ? '#FF5E00' : '#E0E0E0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: completed || active ? '#FFFFFF' : '#000000',
  fontWeight: 600,
  position: 'relative',
  '&::after': {
    content: islaststep ? 'none' : '""',
    position: 'absolute',
    left: '50%',
    bottom: '-28px',
    transform: 'translateX(-50%)',
    width: '4px',
    height: '28px',
    background: completed ? '#FF5E00' : '#1a1919ff',
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
}));

const StepLabel = styled(Typography)<{ active?: boolean }>(({ theme, active }) => ({
  fontSize: '20px',
  fontWeight: active ? 600 : 500,
  color: '#000000',
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));

const UploadButton = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  color: '#FF5E00',
  padding: '20px',
  borderRadius: '8px',
  border: '2px dashed #FF5E00',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 500,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  '&:hover': {
    backgroundColor: 'rgba(255, 94, 0, 0.04)',
    border: '2px dashed #E65500',
  },
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
    width: '60px',
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
  right: '-10px',
  top: '24px',
  background: '#FFFFFF',
  width: '40px',
  height: '42px',
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

const updateDashboardCounts = () => {
  try {
    // Get existing counts or initialize
    const counts = JSON.parse(localStorage.getItem('dashboardCounts') || '{"all": 0, "inProgress": 0}');
    
    // Increment counts
    counts.all += 1;
    counts.inProgress += 1;
    
    // Save back to localStorage
    localStorage.setItem('dashboardCounts', JSON.stringify(counts));
  } catch (error) {
    console.error('Error updating dashboard counts:', error);
  }
};

export default function LoanApplication() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loanType, setLoanType] = useState<string>('');
  const [exceptionType, setExceptionType] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Add new state variables for form fields
  const [loanAmount, setLoanAmount] = useState<string>('');
  const [installments, setInstallments] = useState<string>('');
  const [contractAmount, setContractAmount] = useState<string>('');
  const [calculationResults, setCalculationResults] = useState<{
    monthlyEmi: number | null;
    dsr: number | null;
  }>({ monthlyEmi: null, dsr: null });
  const [showResults, setShowResults] = useState(false);

  const router = useRouter();
  const totalSteps = 6;

  const steps = [
    { label: 'Loan Information', step: 1 },
    { label: 'Loan Details', step: 2 },
    { label: 'Terms & Conditions', step: 3 },
    { label: 'Print Application Form', step: 4 },
    { label: 'Submit the Details', step: 5 },
  ];

  const loanTypes = [
    { value: 'rental', label: 'Rental Loan' },
    { value: 'personal', label: 'Personal Loan' },
    { value: 'home', label: 'Home Loan' },
  ];
  
  const exceptionTypes = [
    { value: 'ExceptionYes', label: 'Yes' },
    { value: 'ExceptionNo', label: 'No' },
  ];

  const validateFields = () => {
    if (currentStep === 1) {
      if (!loanType || !loanAmount || !installments || !contractAmount) {
        alert('Please fill in all fields before proceeding');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (!validateFields()) {
      return;
    }
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

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (currentStep === 5 && !selectedFile) {
      alert('Please attach the signed application form before submitting.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate file upload
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Update dashboard counts
      updateDashboardCounts();
      
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        router.push('/dashboard');
      }, 3000);
    } catch (error) {
      alert('Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLoanTypeChange = (event: SelectChangeEvent<string>) => {
    setLoanType(event.target.value);
  };

  const handleExceptionTypeChange = (event: SelectChangeEvent<string>) => {
    setExceptionType(event.target.value);
  };

  const handleLoanAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoanAmount(event.target.value);
  };

  const handleInstallmentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInstallments(event.target.value);
  };

  const handleContractAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContractAmount(event.target.value);
  };

  const calculateDSR = () => {
    if (!loanAmount || !installments || !contractAmount) {
      alert('Please fill in all required fields');
      return;
    }

    const loan = parseFloat(loanAmount);
    const inst = parseFloat(installments);
    const contract = parseFloat(contractAmount);

    if (loan <= 0 || inst <= 0 || contract <= 0) {
      alert('Please enter valid positive numbers');
      return;
    }

    const monthlyEmi = loan / inst;
    const dsr = (monthlyEmi / contract) * 100;

    setCalculationResults({
      monthlyEmi: parseFloat(monthlyEmi.toFixed(2)),
      dsr: parseFloat(dsr.toFixed(2))
    });
    setShowResults(true);
  };

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/terms-and-conditions');
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const currentDate = new Date().toLocaleDateString('en-AE');
    
    // Title
    doc.setFontSize(20);
    doc.setTextColor(255, 94, 0);
    doc.text('Mashreq Bank - Loan Application Form', 105, 20, { align: 'center' });
    
    // Loan Information
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('Loan Information', 20, 40);
    
    autoTable(doc, {
      startY: 45,
      head: [['Field', 'Details']],
      body: [
        ['Loan Type', loanTypes.find(t => t.value === loanType)?.label || ''],
        ['Loan Amount', `AED ${parseFloat(loanAmount).toLocaleString('en-AE', { minimumFractionDigits: 2 })}`],
        ['Number of Installments', installments],
        ['Contract Amount', `AED ${parseFloat(contractAmount).toLocaleString('en-AE', { minimumFractionDigits: 2 })}`],
      ],
      theme: 'striped',
      headStyles: { fillColor: [255, 94, 0] },
    });

    // Loan Details & Calculations
    doc.text('Loan Details & Calculations', 20, doc.lastAutoTable.finalY + 20);
    
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 25,
      head: [['Field', 'Details']],
      body: [
        ['Exception for First/Second Installment', exceptionTypes.find(t => t.value === exceptionType)?.label || ''],
        ['Monthly EMI', `AED ${calculationResults.monthlyEmi?.toLocaleString('en-AE', { minimumFractionDigits: 2 }) || ''}`],
        ['DSR', `${calculationResults.dsr?.toLocaleString('en-AE', { minimumFractionDigits: 2 }) || ''}%`],
      ],
      theme: 'striped',
      headStyles: { fillColor: [255, 94, 0] },
    });

    // Terms and Conditions
    doc.text('Terms and Conditions', 20, doc.lastAutoTable.finalY + 20);
    doc.setFontSize(12);
    doc.text('I have carefully read and agreed to the terms and conditions.', 20, doc.lastAutoTable.finalY + 30);

    // Submission Details
    doc.setFontSize(14);
    doc.text('Submission Details', 20, doc.lastAutoTable.finalY + 50);
    
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 55,
      head: [['Field', 'Details']],
      body: [
        ['Submitted By', 'Shakthi G'],
        ['Submitted On', currentDate],
      ],
      theme: 'striped',
      headStyles: { fillColor: [255, 94, 0] },
    });

    // Signature
    doc.text('Signature:', 20, doc.lastAutoTable.finalY + 30);
    doc.line(50, doc.lastAutoTable.finalY + 30, 150, doc.lastAutoTable.finalY + 30);
    doc.text('Date:', 20, doc.lastAutoTable.finalY + 40);
    doc.line(50, doc.lastAutoTable.finalY + 40, 150, doc.lastAutoTable.finalY + 40);

    // Save the PDF
    doc.save('Mashreq-Loan-Application.pdf');
    
    // Move to next step
    handleNext();
  };

  return (
    <PageContainer>
      <Header />
      <SideNav isExpanded={isExpanded}>
        <SideNavigation isExpanded={isExpanded} />
        <ExpandButton onClick={handleExpandClick} size="small">
          <ChevronRightIcon 
            sx={{ 
              transform: isExpanded ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.3s ease',
            }} 
          />
        </ExpandButton>
      </SideNav>

      <Dialog
        open={showSuccess}
        aria-describedby="success-dialog-description"
        PaperProps={{
          sx: {
            borderRadius: '12px',
            padding: '24px',
            minWidth: { xs: '300px', sm: '400px' }
          }
        }}
      >
        <DialogContent sx={{ textAlign: 'center', padding: '24px' }}>
          <CheckCircleIcon sx={{ 
            fontSize: { xs: 48, sm: 64 }, 
            color: '#4CAF50', 
            marginBottom: '16px' 
          }} />
          <DialogContentText
            id="success-dialog-description"
            sx={{
              color: '#000',
              fontSize: { xs: '16px', sm: '18px' },
              fontWeight: 500,
              marginBottom: '8px'
            }}
          >
            Application Submitted Successfully!
          </DialogContentText>
          
        </DialogContent>
      </Dialog>
      
      <MainContent sidenavwidth={isExpanded ? '240px' : '80px'}>
        <ContentWrapper>
          <StepIndicatorContainer>
            {steps.map((step, index) => (
              <StepRow key={step.step}>
                <StepIndicator
                  active={step.step === currentStep}
                  completed={step.step < currentStep}
                  islaststep={index === steps.length - 1}
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
                    value={loanAmount}
                    onChange={handleLoanAmountChange}
                  />
                  <CustomTextField
                    label="No of Installments"
                    fullWidth
                    variant="outlined"
                    type="number"
                    value={installments}
                    onChange={handleInstallmentsChange}
                  />
                  <CustomTextField
                    label="Contract Amount"
                    fullWidth
                    variant="outlined"
                    type="number"
                    value={contractAmount}
                    onChange={handleContractAmountChange}
                  />
                </InputGrid>
              </>
            )}
            {currentStep === 2 && (
              <>
                <FormTitle>Loan Details</FormTitle>
                <InputGrid>
                  <CustomFormControl>
                    <InputLabel id="Exception-type-label">Exception for First or Second Installment</InputLabel>
                    <CustomSelect
                      labelId="Exception-type-label"
                      label="Exception Type"
                      value={exceptionType}
                      variant='outlined'
                      onChange={handleExceptionTypeChange}
                    >
                      {exceptionTypes.map((type) => (
                        <MenuItem key={type.value} value={type.value}>
                          {type.label}
                        </MenuItem>
                      ))}
                    </CustomSelect>
                  </CustomFormControl>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    width: { xs: '100%', sm: 'auto' },
                  }}>
                    <Button
                      variant="contained"
                      onClick={calculateDSR}
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
                  {showResults && calculationResults.monthlyEmi !== null && calculationResults.dsr !== null && (
                    <Box sx={{ 
                      mt: 3, 
                      p: 2, 
                      bgcolor: '#f5f5f5',
                      borderRadius: 1,
                      width: '100%'
                    }}>
                      <Typography variant="h6" sx={{ mb: 4, fontWeight: 'Bold', color: '#ff5e00'  }}>
                        Calculation Results :
                      </Typography>
                      <Typography sx={{ mb: 2, fontWeight: 'Bold'}}>
                        Monthly EMI :  {calculationResults.monthlyEmi.toLocaleString('en-AE', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </Typography>
                      <Typography sx={{ mb: 2, fontWeight: 'Bold'}}>
                        DSR : {calculationResults.dsr.toLocaleString('en-AE', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}%
                      </Typography>
                    </Box>
                  )}
                </InputGrid>
              </>
            )}
            {currentStep === 3 && (
              <>
                <FormTitle>Terms and Conditions</FormTitle>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    Please read and accept the terms and conditions to continue.
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 4 }}>
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
                    Accept and Continue
                  </Button>
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
                    Application Ready for Submission, Print Application and Submit
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={generatePDF}
                    sx={{
                      bgcolor: '#FF5E00',
                      '&:hover': { bgcolor: '#E65500' },
                      textTransform: 'none',
                      mt: 2,
                      width: { xs: '100%', sm: 'auto' },
                    }}
                  >
                    Print Application
                  </Button>
                </Box>
              </>
            )}
            {currentStep === 5 && (
              <>
                <Box>
                  <Typography variant="h4" sx={{ 
                    fontWeight: 700,
                    marginBottom: '32px',
                    color: '#000',
                    textAlign: 'center',
                    fontSize: { xs: '24px', sm: '32px' }
                  }}>
                    Submit Application
                  </Typography>

                  <Typography sx={{ 
                    color: '#666',
                    marginBottom: '32px',
                    textAlign: 'center',
                    fontSize: { xs: '14px', sm: '16px' }
                  }}>
                    Please attach your signed application form to complete the submission process.
                  </Typography>

                  <Box sx={{ 
                    marginBottom: '32px',
                    padding: { xs: '16px', sm: '24px' }
                  }}>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileSelect}
                      style={{ display: 'none' }}
                      id="application-file"
                    />
                    <label htmlFor="application-file">
                      <UploadButton>
                        <Box sx={{
                          cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '16px',
                          padding: { xs: '24px', sm: '32px' },
                          border: '2px dashed #FF5E00',
                          borderRadius: '12px',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 94, 0, 0.04)',
                            border: '2px dashed #E65500',
                          }
                        }}>
                          <CloudUploadIcon sx={{ 
                            fontSize: { xs: 48, sm: 64 }, 
                            color: '#FF5E00' 
                          }} />
                          {selectedFile ? (
                            <Typography sx={{ 
                              color: '#FF5E00',
                              fontSize: { xs: '14px', sm: '16px' },
                              fontWeight: 500
                            }}>
                              {selectedFile.name}
                            </Typography>
                          ) : (
                            <Typography sx={{ 
                              color: '#FF5E00',
                              fontSize: { xs: '14px', sm: '16px' },
                              fontWeight: 500
                            }}>
                              Click to attach signed application form
                            </Typography>
                          )}
                          <Typography variant="body2" sx={{ 
                            color: '#666',
                            fontSize: { xs: '12px', sm: '14px' }
                          }}>
                            Supported format: PDF
                          </Typography>
                        </Box>
                      </UploadButton>
                    </label>
                  </Box>

                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    gap: '16px',
                    padding: { xs: '0 16px', sm: '0' }
                  }}>
                    <Button
                      onClick={handleSubmit}
                      disabled={!selectedFile || isSubmitting}
                      variant="contained"
                      sx={{
                        backgroundColor: '#FF5E00',
                        color: '#FFFFFF',
                        padding: '12px 32px',
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: 600,
                        width: { xs: '100%', sm: 'auto' },
                        minWidth: { sm: '200px' },
                        '&:hover': {
                          backgroundColor: '#E65500',
                        }
                      }}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  </Box>
                </Box>
              </>
            )}
            <ActionButtons>
              {currentStep > 1 && currentStep !== 3 && currentStep !== 5 && (
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
              {currentStep < totalSteps && currentStep !== 3 && currentStep !== 5 && (
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
            Application Submitted Successfully For Approval!
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </PageContainer>
  );
}