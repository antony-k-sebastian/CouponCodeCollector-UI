import CouponCard from './components/CouponCard';
import Header from './components/Header';
import { Container, Box } from "@mui/material";

function App() {
  return (
    <>
    <Header />
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
      <CouponCard />
      </Box>
    </Container>
    </>
  );
}

export default App;
