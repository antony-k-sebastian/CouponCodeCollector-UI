import { Container, Box } from "@mui/material";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CouponCard from "../components/CouponCard";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import AuthModal from "../modals/AuthModal";
import AddCouponModal from "../modals/AddCouponModal";
import { getPublicCoupons, getPrivateCoupons } from "../api/getCoupons";
import { useAuth } from "../auth/authContext";

type ViewMode = "public" | "private";

export default function ExplorePage() {
  const [authOpen, setAuthOpen] = useState(false);
  const [openAddCoupon, setOpenAddCoupon] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const [view, setView] = useState<ViewMode>("public");

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        if (view == "public") {
          const data = await getPublicCoupons();
          setCoupons(data);
          return;
        }
        if (!isLoggedIn) {
          setCoupons([]);
          return;
        }
        const data = await getPrivateCoupons();
        setCoupons(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCoupons();
  }, [view, isLoggedIn]);

  const handleExploreClick = () => setView("public");

  const handleMyCouponClick = () => {
    console.log("My Coupons clicked", { isLoggedIn });
    if (!isLoggedIn) {
      setAuthOpen(true);
      return;
    }
    setView("private");
  };

  return (
    <>
      <Header
        onLoginClick={() => setAuthOpen(true)}
        onAddCouponClick={() => setOpenAddCoupon(true)}
        onMyCouponClick={handleMyCouponClick}
        onExploreClick={handleExploreClick}
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
          {coupons.map((c) => (
            <CouponCard key={c.id} coupon={c} />
          ))}
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
