import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

type HeaderProps = {
  onLoginClick: () => void;
  onAddCouponClick?: () => void;
};

export default function Header({onLoginClick, onAddCouponClick}: HeaderProps) {
  return (
    <AppBar position="sticky" elevation={1} sx={styles.appBar}>
      <Container maxWidth="md" disableGutters>
        <Box sx={styles.wrapper}>
          {/* Title */}
          <Toolbar disableGutters sx={styles.titleToolbar}>
            <Typography variant="h6" sx={styles.title}>
              Coupon Code Collector
            </Typography>
          </Toolbar>

          {/* Nav + Search + Actions */}
          <Toolbar disableGutters>
            <Box sx={styles.navButtons}>
              <Button color="inherit">Explore</Button>
              <Button color="inherit">My Coupons</Button>
            </Box>

            <Box sx={styles.spacer} />

            <Button color="inherit" onClick={onAddCouponClick}>Add Coupon</Button>
            <Button color="inherit" onClick={onLoginClick}>Login</Button>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
}

const styles = {
  appBar: {
    backgroundColor: "#263238",
  },
  wrapper: {
    px: 2,
  },
  titleToolbar: {
    minHeight: 64,
  },
  title: {
    fontFamily: "'Playfair Display', cursive",
    fontWeight: 400,
    letterSpacing: 0.5,
    fontSize: 28,
  },
  navButtons: {
    display: { xs: "none", sm: "flex" },
    gap: 1,
  },
  spacer: {
    flexGrow: 1,
  },
};
