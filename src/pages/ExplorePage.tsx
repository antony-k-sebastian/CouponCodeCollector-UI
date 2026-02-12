import { Container, Box } from "@mui/material";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CouponCard from "../components/CouponCard";
import Footer from "../components/Footer";
import { useState } from "react";
import AuthModal from "../modals/AuthModal";
import AddCouponModal from "../modals/AddCouponModal";

export default function ExplorePage() {
  const [authOpen, setAuthOpen] = useState(false);
  const [openAddCoupon, setOpenAddCoupon] = useState(false);
  return (
    <>
      <Header
        onLoginClick={() => setAuthOpen(true)}
        onAddCouponClick={() => setOpenAddCoupon(true)}
      />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
      <AddCouponModal
        open={openAddCoupon}
        onClose={() => setOpenAddCoupon(false)}
        onSubmit={(payload) => {
          console.log("Submitting coupon", payload);
          setOpenAddCoupon(false);
        }}
      />
      <Container maxWidth="md" sx={styles.container}>
        <Box sx={styles.searchBar}>
          <SearchBar placeholder="Search by company..." />
        </Box>

        <Box sx={styles.couponList}>
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
        </Box>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

const styles = {
  container: {
    mt: 2,
  },
  searchBar: {
    maxWidth: 360,
    mb: 2,
  },
  couponList: {
    height: "calc(100vh - 220px)",
    overflowY: "auto",
  },
};
