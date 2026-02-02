import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#263238",
        color: "white",
      }}
    >
      <Typography variant="caption">© 2026 Coupon Code Collector</Typography>
    </Box>
  );
}
