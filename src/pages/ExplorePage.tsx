import { Container, Box } from "@mui/material";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CouponCard from "../components/CouponCard";
import Footer from "../components/Footer";

export default function ExplorePage() {
  return (
    <>
      <Header />

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
