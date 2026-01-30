import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";

import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <AppBar position="sticky" elevation={1} sx={{ backgroundColor: "#263238" }}>
      <Container maxWidth="md">
        {/* Title */}
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Coupon Code Collector
          </Typography>
        </Toolbar>

        {/* Nav + Search + Actions */}
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            <Button color="inherit">Explore</Button>
            <Button color="inherit">My Coupons</Button>
          </Box>

          {/* Primary search */}
          <Box sx={{ flexGrow: 1, mx: 2 }}>
            <SearchBar placeholder="Search based on company" />
          </Box>

          <Button color="inherit">Add</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
