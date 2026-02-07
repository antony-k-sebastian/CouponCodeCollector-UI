import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tab,
  Tabs,
  Box,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

type AuthModalProps = {
  open: boolean;
  onClose: () => void;
};

function AuthModal({ open, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">("login");
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
            <TextField label="Name" fullWidth size="small" />
          )}
          <TextField label="Email" type="email" fullWidth size="small" />
          <TextField label="Password" type="password" fullWidth size="small" />
          {mode === "register" && (
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              size="small"
            />
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button variant="contained" color="primary">
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
