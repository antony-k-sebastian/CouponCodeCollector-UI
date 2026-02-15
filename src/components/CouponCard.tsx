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

type Coupon = {
  id: number;
  code: string;
  company: string;
  description: string;
  publishedAt: string;
  expiryDate: string;
  visibility: string;
  usabilioty: string;
};

function CouponCard({ coupon }: { coupon: Coupon }) {
  const published = coupon.createdAt
    ? coupon.createdAt.split("T")[0].split(" ")[0]
    : "—";

  return (
    <Container maxWidth="sm" sx={styles.container}>
      <Card sx={styles.card}>
        <CardContent>
          {/* Coupon Code */}
          <Box sx={styles.topRow}>
            <Typography variant="h6">{coupon.code}</Typography>
            <IconButton size="small">
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Company */}
          <Typography variant="subtitle1" sx={styles.company}>
            {coupon.company}
          </Typography>

          {/* Description */}
          <Typography variant="body2" color="text.secondary">
            {coupon.description}
          </Typography>

          {/* Dates */}
          <Box sx={styles.datesBox}>
            <Typography variant="caption">
              Published: {published}
            </Typography>
            <Typography variant="caption">
              Expires: {coupon.expiryDate}
            </Typography>
          </Box>

          {/* Tags */}
          <Box sx={styles.tagsBox}>
            <Chip
              label={coupon.visibility}
              color="success"
              size="small"
              sx={styles.chip}
            />
            <Chip
              label={coupon.usageType}
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
