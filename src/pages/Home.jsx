import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import heroImage from "../assets/bg.png";
import printer from "../assets/3dprinter.png";
import { Link as RouterLink } from "react-router-dom";

function Home() {
  const cardSx = {
    borderRadius: "10px",
    p: { xs: 4, md: 6 },
    background: "linear-gradient(135deg, #00061B 16%, #001D81 100%)",
    boxShadow: "0px 20px 60px rgba(0,0,0,0.45)",
    border: "1px solid rgba(61, 194, 236, 0.10)",
    transition:
      "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease, background 200ms ease",
    cursor: "pointer",

    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow:
        "0px 28px 80px rgba(0,0,0,0.60), 0px 0px 45px rgba(61, 194, 236, 0.18)",
      borderColor: "rgba(61, 194, 236, 0.35)",
      background: "linear-gradient(135deg, #00123f 0%, #001D81 100%)",
    },

    "&:active": {
      transform: "translateY(-2px)",
    },
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          bgcolor: "#070F2B",
          overflow: "hidden",
          minHeight: "100vh",
          alignItems: "center",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            inset: 0,
            zIndex: 1,
          }}
        ></Box>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Stack spacing={2} sx={{ color: "white" }}>
            <Typography variant="h4">
              <Box component="span" sx={{ display: "block" }}>
                TURNING{" "}
                <Box component="span" sx={{ color: "#3DC2EC" }}>
                  DIGITAL DESIGNS
                </Box>
              </Box>
              <Box component="span" sx={{ display: "block" }}>
                INTO REAL-WORLD PARTS
              </Box>
            </Typography>
            <Typography variant="body1">
              We deliver high-precision 3D prints using modern materials and
              proven workflows.
            </Typography>
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent="center"
              sx={{ flexWrap: "wrap" }}
            >
              <Button
                variant="contained"
                component={RouterLink}
                to="/contact"
                sx={{
                  bgcolor: "#3DC2EC",
                  transition:
                    "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease, background 200ms ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow:
                      "0px 10px 80px rgba(0,0,0,0.60), 0px 0px 45px rgba(61, 194, 236, 0.18)",
                  },
                }}
              >
                CONTACT US
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                sx={{
                  borderColor: "#3DC2EC",
                  color: "white",
                  transition:
                    "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease, background 200ms ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow:
                      "0px 10px 80px rgba(0,0,0,0.60), 0px 0px 45px rgba(61, 194, 236, 0.18)",
                    borderColor: "#3DC2EC",
                    backgroundColor: "#3DC2EC",
                  },
                }}
              >
                OUR SERVICES
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#00061B", color: "#3DC2EC" }}>
        <Container maxWidth={"lg"}>
          <Grid container spacing={6} alignItems={"center"}>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Stack spacing={2}>
                <Typography variant="h4">Built Around Precision</Typography>
                <Typography variant="body1">
                  {" "}
                  We are a small, focused 3D printing studio dedicated to
                  turning ideas into high-quality physical parts. From
                  prototypes to custom components, we combine modern technology
                  with a practical, hands-on approach.
                </Typography>
                <Typography variant="body1">
                  Our goal is to make 3D printing clear, fast, and reliable. We
                  work closely with our clients, choose the right materials for
                  each use case, and deliver precise results without unnecessary
                  complexity. Every print is treated as a unique project —
                  because details matter.
                </Typography>
              </Stack>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Box
                component="img"
                src={printer}
                alt="3D printing"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 2 }, bgcolor: "#00061B" }}>
        <Container maxWidth={"lg"}>
          <Typography variant="h3" sx={{ textAlign: "center", py: 5 }}>
            <Box component="span" sx={{ color: "#ffffffff" }}>
              HOW IT{" "}
            </Box>
            <Box component="span" sx={{ color: "#3DC2EC" }}>
              WORKS?
            </Box>
          </Typography>
          <Box></Box>
          <Grid container spacing={6} alignItems={"stretch"}>
            <Grid item size={{ xs: 12, sm: 4 }} sx={cardSx}>
              <Stack spacing={1}>
                <Typography
                  variant="h1"
                  sx={{
                    background:
                      "linear-gradient(180deg, #00061B 0%, #3DC2EC 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  1
                </Typography>
                <Typography variant="h5" sx={{ color: "#E4E4E4" }}>
                  SEND YOUR FILE
                </Typography>
                <Typography variant="body1" sx={{ color: "#B9B9B9" }}>
                  Upload your 3D model or describe your idea. We review the file
                  and check printability.
                </Typography>
              </Stack>
            </Grid>
            <Grid item size={{ xs: 12, sm: 4 }} sx={cardSx}>
              <Stack spacing={1}>
                <Typography
                  variant="h1"
                  sx={{
                    background:
                      "linear-gradient(180deg, #00061B 0%, #3DC2EC 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  2
                </Typography>
                <Typography variant="h5" sx={{ color: "#E4E4E4" }}>
                  GET A QUOTE
                </Typography>
                <Typography variant="body1" sx={{ color: "#B9B9B9" }}>
                  You receive pricing, material options, and an estimated
                  delivery time — no surprises.
                </Typography>
              </Stack>
            </Grid>
            <Grid item size={{ xs: 12, sm: 4 }} sx={cardSx}>
              <Stack spacing={1}>
                <Typography
                  variant="h1"
                  sx={{
                    background:
                      "linear-gradient(180deg, #00061B 0%, #3DC2EC 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  3
                </Typography>
                <Typography variant="h5" sx={{ color: "#E4E4E4" }}>
                  WE PRINT & DELIVER
                </Typography>
                <Typography variant="body1" sx={{ color: "#B9B9B9" }}>
                  Once approved, we start printing and prepare your part for
                  pickup or delivery.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        id="services"
        sx={{
          py: { xs: 8, md: 2 },
          bgcolor: "#00061B",
          color: "white",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth={"lg"}>
          <Grid container spacing={6}>
            <Grid
              item
              size={{ xs: 12, md: 6 }}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              <Typography variant="h3">
                <Box component="span" sx={{ color: "#ffffffff" }}>
                  WHAT WE{" "}
                </Box>
                <Box component="span" sx={{ color: "#3DC2EC" }}>
                  PRINT & CREATE{" "}
                </Box>
                <Box component="span" sx={{ color: "#ffffffff" }}>
                  FOR OUR CLIENTS
                </Box>
              </Typography>
            </Grid>
            <Grid
              item
              size={{ xs: 12, md: 6 }}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              <Box
                sx={{ backgroundColor: "#3DC2EC", height: "1px", mb: "20px" }}
              ></Box>
              <Stack
                spacing={3}
                divider={
                  <Divider sx={{ width: "100%", borderColor: "#3DC2EC" }} />
                }
              >
                <Typography variant="body1">CUSTOM PARTS</Typography>
                <Typography variant="body1">PROTOTYPES</Typography>
                <Typography variant="body1">SMALL-BATCH PARTS</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 8, md: 2 },
          background: "linear-gradient(-180deg, #00061B 20%, #001A75 100%)",
          color: "white",
          minHeight: "40vh",
        }}
      >
        <Container maxWidth={"lg"}>
          <Stack spacing={3} textAlign={"center"}>
            <Typography variant="h3">
              <Box component="span" sx={{ display: "block" }}>
                READY TO TURN{" "}
                <Box component="span" sx={{ color: "#3DC2EC" }}>
                  YOUR IDEA{" "}
                </Box>
                INTO A{" "}
              </Box>
              <Box component="span" sx={{ display: "block" }}>
                REAL PART?
              </Box>
            </Typography>
            <Typography variant="body2">
              Upload your file or describe your project — we’ll handle the rest.
            </Typography>
            <Button
              variant="outlined"
              component={RouterLink}
              to="/contact"
              sx={{
                alignSelf: "center",
                borderColor: "#3DC2EC",
                color: "white",
                borderRadius: "20px",
                transition:
                  "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease, background 200ms ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow:
                    "0px 10px 80px rgba(0,0,0,0.60), 0px 0px 45px rgba(61, 194, 236, 0.18)",
                  borderColor: "#3DC2EC",
                  backgroundColor: "#3DC2EC",
                },
              }}
            >
              SEND A REQUEST
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          bgcolor: "#00061B",
          color: "white",
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  3D STUDIO
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ maxWidth: "400px", color: "#B9B9B9" }}
                >
                  Turning digital designs into real-world parts. High-precision
                  3D printing for prototypes, custom parts, and small-batch
                  production.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack
                spacing={1}
                alignItems={{ xs: "flex-start", md: "flex-end" }}
                sx={{ textAlign: { xs: "left", md: "right" } }}
              >
                <Typography variant="body2">
                  Email: hello@3dprintstudio.com
                </Typography>
                <Typography variant="body2">Phone: +381 60 123 4567</Typography>
                <Typography variant="body2">Location: Serbia / EU</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Home;
