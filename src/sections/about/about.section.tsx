import { Box, Typography } from '@mui/material';

export const AboutSection: React.FC = () => {
  return (
    <Box py={2}>
      <Typography variant="h2" mb={5} fontWeight={700}>
        So... what exactly is an avatar?
      </Typography>
      <Typography variant="h6" maxWidth={800}>
        The avatar is a customized virtual character for your business!
        You can create the personalized avatar for your business and thus give your followers the information you want without having to do it yourself
      </Typography>
    </Box>
  );
};
