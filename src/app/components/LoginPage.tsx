'use client';
import { Box, Button, TextField, Typography, ThemeProvider, InputAdornment, IconButton } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import theme from '../theme/theme';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: '#FFF',
  paddingTop: '72px', // Account for fixed header
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    paddingTop: '64px',
  },
}));

const MainContent = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  margin: 0,
  padding: '20px 250px',
  minHeight: 'calc(100vh - 72px)',
  gap: '10px',
  alignItems: 'center',
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
    padding: '24px',
    gap: '40px',
  },
});

const WelcomeSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '600px',
  margin: '0 auto',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

const FormDivider = styled(Box)({
  width: '200px',
  height: '4px',
  background: '#FF5E00',
  marginTop: '8px',
  marginBottom: '8px',
});

const IllustrationBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  '& > span': {
    width: '100% !important',
    height: '100% !important',
    position: 'relative !important',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const LoginFormSection = styled(Box)(({ theme }) => ({
  maxWidth: '700px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
  marginTop: '80px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    gap: '28px',
    marginTop: '48px',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    height: '72px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    '& fieldset': {
      borderColor: '#E0E0E0',
    },
    '&:hover fieldset': {
      borderColor: '#E0E0E0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FF5E00',
    },
    '& input': {
      fontSize: '18px',
      color: '#333333',
      padding: '20px 24px',
    },
    '& .MuiInputAdornment-root .MuiIconButton-root': {
      color: '#000000ff',
      padding: '12px',
      marginRight: '12px',
      '&:hover': {
        color: '#FF5E00',
      },
    },
  },
  width: '100%',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  height: '72px',
  backgroundColor: '#CCCCCC',
  borderRadius: '8px',
  fontSize: '20px',
  fontWeight: 600,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#FF5E00',
  },
}));

const FormSection = styled(Box)({
  flex: '0 0 473px',
  padding: '408px 109px 0',
  '@media (max-width: 900px)': {
    padding: '24px',
    flex: '1 1 auto',
  },
});

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'Shakthig' && password === 'SM@7676') {
      router.push('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <LoginContainer>
        <Box sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '84px',
          background: 'linear-gradient(90deg, #FF5E00 0%, #FB9544 100%)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          zIndex: 100,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}>
          <Box sx={{ width: '300px', height: '100%', position: 'relative' }}>
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
          </Box>
        </Box>
        <MainContent>
          <WelcomeSection>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 700,
                color: '#000',
                fontSize: { xs: '28px', md: '32px' },
                lineHeight: 1.2
              }}
            >
              Welcome to Mashreq
            </Typography>
            <FormDivider />
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700,
                color: '#000',
                fontSize: { xs: '32px', md: '40px' },
                lineHeight: 1.2
              }}
            >
              Rent Advance Loan
            </Typography>

            <LoginFormSection>
              <StyledTextField
                placeholder="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!!error}
              />
              <StyledTextField
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!error}
                helperText={error}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOffOutlinedIcon fontSize="small" />
                        ) : (
                          <VisibilityOutlinedIcon fontSize="small" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <StyledButton 
                fullWidth
                onClick={handleLogin}
                sx={{
                  backgroundColor: '#FF5E00',
                  '&:hover': {
                    backgroundColor: '#E65500',
                  }
                }}
              >
                Sign In
              </StyledButton>
            </LoginFormSection>
          </WelcomeSection>

          <IllustrationBox>
            <Box sx={{ width: '700px', height: '700px', position: 'relative' }}>
              <Image
                src="/images/login-illustration.png"
                alt="Login Illustration"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>
          </IllustrationBox>
        </MainContent>
      </LoginContainer>
    </ThemeProvider>
  );
}
