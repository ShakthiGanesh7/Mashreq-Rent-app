'use client';
import { Box, Button, Typography, styled, Dialog, DialogContent, DialogContentText } from '@mui/material';
import Header from '../components/Header';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: '#F5F5F5',
  paddingTop: '84px',
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

const ContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '40px 24px',
  [theme.breakpoints.down('sm')]: {
    padding: '24px 16px',
  },
}));

const SuccessCard = styled(Box)(({ theme }) => ({
  background: '#FFFFFF',
  borderRadius: '12px',
  padding: '32px',
  textAlign: 'center',
  marginBottom: '32px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
  [theme.breakpoints.down('sm')]: {
    padding: '24px 16px',
  },
}));

const DetailCard = styled(Box)(({ theme }) => ({
  background: '#FFFFFF',
  borderRadius: '12px',
  padding: '32px',
  marginBottom: '24px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
  [theme.breakpoints.down('sm')]: {
    padding: '24px 16px',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF5E00',
  color: '#FFFFFF',
  padding: '12px 32px',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#E65500',
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

const DetailRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 0',
  borderBottom: '1px solid #F0F0F0',
  '&:last-child': {
    borderBottom: 'none',
  },
});

const DetailLabel = styled(Typography)({
  color: '#666666',
  fontSize: '14px',
});

const DetailValue = styled(Typography)({
  color: '#000000',
  fontSize: '16px',
  fontWeight: 500,
});

export default function SubmitDetailsPage() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const currentStep = 5; // Current step for the indicator
  const totalSteps = 6;

  const steps = [
    { label: 'Loan Information', step: 1 },
    { label: 'Loan Details', step: 2 },
    { label: 'Terms & Conditions', step: 3 },
    { label: 'Print Application Form', step: 4 },
    { label: 'Submit the Details', step: 5 },
    { label: 'Approval Status', step: 6 }
  ];

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert('Please attach the signed application form before submitting.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate file upload
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowSuccessDialog(true);
      setTimeout(() => {
        router.push('/dashboard');
      }, 3000);
    } catch (error) {
      alert('Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <PageContainer>
        <ContentContainer>
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

          <DetailCard>
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
              <StyledButton 
                onClick={handleSubmit}
                disabled={!selectedFile || isSubmitting}
                sx={{
                  width: { xs: '100%', sm: 'auto' },
                  minWidth: { sm: '200px' }
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </StyledButton>
            </Box>
          </DetailCard>
        </ContentContainer>

        <Dialog
          open={showSuccessDialog}
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
              Application Submitted Successfully For Approval!
            </DialogContentText>
        
          </DialogContent>
        </Dialog>
      </PageContainer>
    </>
  );
}
