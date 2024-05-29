import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton, InputAdornment, Checkbox, FormControlLabel } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider } from '../../firebaseConfig'; 
import './AuthModal.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
  background: 'linear-gradient(135deg, #012B65, #004080)',
  color: '#fff',
};

function AuthModal({ open, handleClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSwitch = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  const handleSubmit = async () => {
    if (!email || !password || (!isLogin && password !== confirmPassword)) {
      setError('Por favor, completa todos los campos correctamente.');
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      handleClose();
    } catch (error) {
      console.error('Error en la autenticación:', error);
      setError('Error en la autenticación. Inténtalo de nuevo.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      handleClose();
    } catch (error) {
      console.error('Error en la autenticación con Google:', error);
      setError('Error en la autenticación con Google. Inténtalo de nuevo.');
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <IconButton className="close-icon" onClick={handleClose} sx={{ position: 'absolute', top: 10, right: 10, color: '#fff' }}>
          <FontAwesomeIcon icon={faTimes} />
        </IconButton>
        <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 2 }}>
          {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
        </Typography>
        <TextField
          fullWidth
          label="Correo Electrónico"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: '#fff' }} />
              </InputAdornment>
            ),
            style: { color: '#fff' }
          }}
          InputLabelProps={{ style: { color: '#fff' } }}
        />
        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faLock} style={{ color: '#fff' }} />
              </InputAdornment>
            ),
            style: { color: '#fff' }
          }}
          InputLabelProps={{ style: { color: '#fff' } }}
        />
        {!isLogin && (
          <TextField
            fullWidth
            label="Confirmar Contraseña"
            type="password"
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faLock} style={{ color: '#fff' }} />
                </InputAdornment>
              ),
              style: { color: '#fff' }
            }}
            InputLabelProps={{ style: { color: '#fff' } }}
          />
        )}
        {error && <Typography color="error" sx={{ textAlign: 'center', mt: 2 }}>{error}</Typography>}
        <FormControlLabel
          control={<Checkbox style={{ color: '#fff' }} />}
          label="Recuérdame"
          sx={{ mt: 2, color: '#fff' }}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          sx={{ mt: 2, backgroundColor: '#28A745', '&:hover': { backgroundColor: '#1E7A36' } }}
        >
          {isLogin ? 'Ingresar' : 'Registrarse'}
        </Button>
        <Button variant="text" onClick={handleSwitch} sx={{ mt: 2, color: '#fff' }}>
          {isLogin ? '¿No tienes cuenta? Registrarse' : '¿Ya tienes cuenta? Iniciar Sesión'}
        </Button>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#fff', mb: 1 }}>o ingresa con</Typography>
          <IconButton sx={{ color: '#fff' }} onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} /></IconButton>
        </Box>
      </Box>
    </Modal>
  );
}

export default AuthModal;
