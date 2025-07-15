'use client';
import { Box, Typography, Container, Button, styled } from '@mui/material';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';

const PageContainer = styled(Box)({
  minHeight: '100vh',
  background: '#F5F5F5',
  paddingTop: '84px',
});

const ContentContainer = styled(Container)(({ theme }) => ({
  padding: '32px 24px',
  [theme.breakpoints.down('sm')]: {
    padding: '24px 16px',
  },
}));

const ContentCard = styled(Box)(({ theme }) => ({
  background: '#FFFFFF',
  borderRadius: '8px',
  padding: '32px',
  marginBottom: '24px',
  [theme.breakpoints.down('sm')]: {
    padding: '24px 16px',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 600,
  color: '#000000',
  marginBottom: '24px',
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
}));

const Section = styled(Box)({
  marginBottom: '24px',
});

const SectionTitle = styled(Typography)({
  fontSize: '18px',
  fontWeight: 600,
  color: '#000000',
  marginBottom: '16px',
});

export default function TermsAndConditions() {
  const router = useRouter();

  const handleAccept = () => {
    // Navigate back to loan application with terms accepted state
    router.push('/loan-application?step=4&termsAccepted=true');
  };

  return (
    <PageContainer>
      <Header />
      <ContentContainer maxWidth="lg">
        <ContentCard>
          <Title>Terms and Conditions</Title>
          
          <Section>
            <SectionTitle>1. Introduction</SectionTitle>
            <Typography variant="body1" paragraph>
              Welcome to Mashreq Rent Advance. These terms and conditions outline the rules and regulations for using our loan services.
            </Typography>
          </Section>

          <Section>
            <SectionTitle>2. Loan Terms</SectionTitle>
            <Typography variant="body1" paragraph>
              2.1. The loan amount will be subject to the bank's discretion and evaluation of the applicant's creditworthiness.
            </Typography>
            <Typography variant="body1" paragraph>
              2.2. Interest rates are subject to change based on market conditions and bank policies.
            </Typography>
            <Typography variant="body1" paragraph>
              2.3. The repayment schedule will be determined based on the loan amount and tenure selected.
            </Typography>
          </Section>

          <Section>
            <SectionTitle>3. Eligibility</SectionTitle>
            <Typography variant="body1" paragraph>
              3.1. Applicants must be at least 21 years of age.
            </Typography>
            <Typography variant="body1" paragraph>
              3.2. Minimum income requirements must be met as per bank policy.
            </Typography>
            <Typography variant="body1" paragraph>
              3.3. Employment stability criteria must be satisfied.
            </Typography>
          </Section>

          <Section>
            <SectionTitle>4. Documentation</SectionTitle>
            <Typography variant="body1" paragraph>
              4.1. Valid identification documents must be provided.
            </Typography>
            <Typography variant="body1" paragraph>
              4.2. Proof of income and employment verification is required.
            </Typography>
            <Typography variant="body1" paragraph>
              4.3. Additional documents may be requested as per bank requirements.
            </Typography>
          </Section>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              onClick={handleAccept}
              sx={{
                bgcolor: '#FF5E00',
                '&:hover': { bgcolor: '#E65500' },
                textTransform: 'none',
                padding: '12px 32px',
                minWidth: '200px',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              Accept & Continue
            </Button>
          </Box>
        </ContentCard>
      </ContentContainer>
    </PageContainer>
  );
}
