import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

type AddCouponPayload = {
  code: string;
  description: string;
  company: string;
  expiryDate: string;
  visibility: string;
  usability: string;
  usageLimit: number;
};

type AddCouponModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (payload: AddCouponPayload) => Promise<void> | void;
};

function AddCouponModal({ open, onClose, onSubmit }: AddCouponModalProps) {
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [visibility, setVisibility] = useState("");
  const [usability, setUsability] = useState("");
  const [usageLimit, setUsageLimit] = useState(0);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={styles.title}>Add Coupon</DialogTitle>
      <DialogContent sx={styles.dialogContent}>
        <TextField
          label="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          fullWidth
          size="small"
        />

        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          size="small"
        />

        <TextField
          label="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          fullWidth
          size="small"
        />

        <TextField
          label="Expiry Date"
          type="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          fullWidth
          size="small"
          InputLabelProps={{shrink: true }}
        />

        <TextField
          label="Visibility"
          select
          value={visibility}
          onChange={(e) => setVisibility(e.target.value)}
          fullWidth
          size="small"
        >
          <MenuItem value="public">Public</MenuItem>
          <MenuItem value="private">Private</MenuItem>
        </TextField>

        <TextField
          label="Usability"
          select
          value={usability}
          onChange={(e) => setUsability(e.target.value)}
          fullWidth
          size="small"
        >
          <MenuItem value="single-use">Single Use</MenuItem>
          <MenuItem value="multi-use">Multi Use</MenuItem>
        </TextField>

        <TextField
          label="Usage Limit"
          type="number"
          value={usageLimit}
          onChange={(e) => setUsageLimit(Number(e.target.value))}
          fullWidth
          size="small"
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={async () => {
            await onSubmit({
              code,
              description,
              company,
              expiryDate,
              visibility,
              usability,
              usageLimit,
            });
            onClose();
          }}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddCouponModal;

const styles = {
  title: {
    textAlign: "center",
  },
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    mt: 1,
  },
};
