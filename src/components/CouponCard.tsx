import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
  IconButton,
} from "@mui/material";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function CouponCard() {
  return (
    <Container maxWidth="sm" sx={styles.container}>
      <Card sx={styles.card}>
        <CardContent>
          {/* Coupon Code */}
          <Box sx={styles.topRow}>
            <Typography variant="h6">SAVE20</Typography>
            <IconButton size="small">
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Company */}
          <Typography variant="subtitle1" sx={styles.company}>
            Amazon
          </Typography>

          {/* Description */}
          <Typography variant="body2" color="text.secondary">
            Get 20% off on electronics
          </Typography>

          {/* Dates */}
          <Box sx={styles.datesBox}>
            <Typography variant="caption">Published: 01/01/2024</Typography>
            <Typography variant="caption">Expires: 01/01/2025</Typography>
          </Box>

          {/* Tags */}
          <Box sx={styles.tagsBox}>
            <Chip
              label="Public"
              color="success"
              size="small"
              sx={styles.chip}
            />
            <Chip
              label="Single-use"
              color="success"
              size="small"
              sx={styles.chip}
            />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CouponCard;

const styles = {
  container: {
    mt: 2,
  },
  card: {
    width: "100%",
    borderRadius: 2,
  },
  company: {
    mt: { mt: 0.5 },
  },
  chip: {
    mt: 1,
  },
  topRow: {
    display: "flex",
    alignItems: "baseline",
    gap: 1,
  },
  datesBox: {
    display: "flex",
    gap: 1,
  },
  tagsBox: {
    display: "flex",
    gap: 1,
  },
};
