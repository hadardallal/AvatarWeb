import { Box, Typography } from '@mui/material';

export const IntroSection: React.FC = () => {
  return (
    <Box py={3}>
      <Typography variant="h5" mb={2} fontWeight={600}>This is the place where dreams come true...</Typography>
      <Typography variant="h2" mb={5} fontWeight={700}>
        Welcome to creating the next innovation for your business!
      </Typography>
      <Typography variant="h6" maxWidth={500}>
        Create your avatar simply and quickly
      </Typography>
    </Box>
  );
};
