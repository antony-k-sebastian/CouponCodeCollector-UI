import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tab,
  Tabs,
  Box,
  TextField,
  Button,
} from "@mui/material";
import {login, register} from "../api/auth";
import { useAuth } from "../auth/authContext"; 

type AuthModalProps = {
  open: boolean;
  onClose: () => void;
};

function AuthModal({ open, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {setToken} = useAuth();
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle sx={styles.title}>Welcome</DialogTitle>
      <DialogContent>
        <Tabs
          value={mode}
          onChange={(_, value) => setMode(value)}
          variant="fullWidth"
        >
          <Tab label="Login" value="login" />
          <Tab label="Register" value="register" />
        </Tabs>
        <Box sx={styles.fields}>
          {mode === "register" && (
            <TextField 
            label="Username" 
            fullWidth 
            size="small"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <TextField 
          label="Email" 
          type="email"
          fullWidth
          size="small" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <TextField 
          label="Password" 
          type="password" 
          fullWidth
          size="small" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          {mode === "register" && (
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              size="small"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button variant="contained" color="primary" onClick={async () => {
          try {
            if (mode === "register") {
              if(password !== confirmPassword){
                console.error("Passwords do not match");
                return;
              }
              await register({username, email, password});
            } else {
              const data = await login({email, password});
              setToken(data.token);
            }

            onClose();
          } catch (error) {
            console.error("Authentication error:", error);
          }
        }}>
          {mode === "login" ? "Login" : "Register"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AuthModal;

const styles = {
  title: {
    textAlign: "center",
  },
  fields: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    mt: 2,
  },
};
