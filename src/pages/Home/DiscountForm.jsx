// DiscountForm.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, Button, Container, Box } from '@mui/material';

const DiscountForm = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xs" sx={{ bgcolor: 'transparent', paddingTop: 6, paddingBottom: 0, borderRadius: 2 }}>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          required
          fullWidth
          id="name"
          label={t('name')}
          name="name"
          autoComplete="name"
          autoFocus
          sx={{ bgcolor: 'transparent', borderRadius: 1, mb: 2, input: { color: 'white' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
        <TextField
          required
          fullWidth
          id="phone"
          label={t('phoneNumber')}
          name="phone"
          autoComplete="phone"
          sx={{ bgcolor: 'transparent', borderRadius: 1, mb: 2, input: { color: 'white' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
        <TextField
          required
          fullWidth
          id="email"
          label={t('email')}
          name="email"
          autoComplete="email"
          sx={{ bgcolor: 'transparent', borderRadius: 1, mb: 2, input: { color: 'white' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            padding: 1.5,
            bgcolor: 'white',
            color: 'black',
            width: '100%',
          }}
        >
          {t('getDiscount')}
        </Button>
      </Box>
    </Container>
  );
};

export default DiscountForm;
