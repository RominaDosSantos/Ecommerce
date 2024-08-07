import { Box, Button, Grid } from "@mui/material";
import styles from "./landing.module.css";

const LandingPage = () => {
  return (
    <Box className={styles.landingContainer}>
      <Grid
        container
        spacing={2}
        sx={{
          "&.MuiGrid-root": {
            marginTop: "0px",
          },
        }}
      >
        <Grid item xs={4}>
          <Box className={styles.textContainer}>
            <Box className={styles.title}>
              Explore a World of Style and Comfort
            </Box>
            <Box className={styles.description}>
              Explore our handpicked selection of the latest men&apos;s fashion
              trends. From classic suits to casual essentials, we have you
              covered.
            </Box>
            <Button className={styles.shopNow} variant="contained">
              SHOP NOW
            </Button>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            className={styles.imageContainer}
            sx={{
              backgroundImage: "url('../landing-photo.jpg')",
              height: "600px !important", 
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
