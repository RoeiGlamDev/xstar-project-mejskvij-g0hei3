import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  backgroundColor: '#000', // Black background for luxury feel
  color: '#FFC0CB', // Pink text for elegance
  padding: '50px',
  borderRadius: '10px',
});

const PricingCard = styled(Grid)({
  backgroundColor: '#222', // Darker card background
  borderRadius: '10px',
  padding: '20px',
  margin: '10px',
  textAlign: 'center',
  boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
});

const PricingPage: React.FC = () => {
  return (
    <StyledContainer>
      <Typography variant="h2" align="center" gutterBottom>
        Pricing Plans
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <PricingCard item xs={12} sm={4}>
          <Typography variant="h4">Basic</Typography>
          <Typography variant="h6">$99/night</Typography>
          <Typography variant="body1">Perfect for short stays</Typography>
          <Button variant="contained" color="secondary">Book Now</Button>
        </PricingCard>
        <PricingCard item xs={12} sm={4}>
          <Typography variant="h4">Deluxe</Typography>
          <Typography variant="h6">$199/night</Typography>
          <Typography variant="body1">Ideal for families</Typography>
          <Button variant="contained" color="secondary">Book Now</Button>
        </PricingCard>
        <PricingCard item xs={12} sm={4}>
          <Typography variant="h4">Luxury</Typography>
          <Typography variant="h6">$299/night</Typography>
          <Typography variant="body1">Experience the finest</Typography>
          <Button variant="contained" color="secondary">Book Now</Button>
        </PricingCard>
      </Grid>
    </StyledContainer>
  );
};

export default PricingPage;