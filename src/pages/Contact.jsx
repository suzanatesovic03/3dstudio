import {
  Box,
  Container,
  Grid,
  Input,
  Stack,
  Typography,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";

function Contact() {
  const inputSx = {
    "& .MuiOutlinedInput-root": {
      color: "white",
      "& fieldset": { borderColor: "rgba(61,194,236,0.35)" },
      "&:hover fieldset": { borderColor: "#3DC2EC" },
      "&.Mui-focused fieldset": { borderColor: "#3DC2EC" },
    },
  };

  const emptyForm = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  };

  const [form, setForm] = useState(emptyForm);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setOpen(true);
    setForm(emptyForm);
  };

  return (
    <Box
      sx={{
        bgcolor: "#070F2B",
        color: "white",
        py: 4,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth={"lg"}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item size={{ xs: 12, md: 5 }}>
            <Typography variant="h1">LET'S GET IN <Box color={"#3DC2EC"}>TOUCH</Box></Typography>
          </Grid>
          <Grid item size={{ xs: 12, md: 7 }}>
            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  id="demo-helper-text-aligned-no-helper"
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  InputLabelProps={{
                    style: { color: "rgba(255,255,255,0.7)" },
                  }}
                  sx={inputSx}
                />
                <TextField
                  type="email"
                  id="demo-helper-text-aligned-no-helper"
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  InputLabelProps={{
                    style: { color: "rgba(255,255,255,0.7)" },
                  }}
                  sx={inputSx}
                />
                <TextField
                  label="Phone"
                  fullWidth
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  sx={inputSx}
                  InputLabelProps={{
                    style: { color: "rgba(255,255,255,0.7)" },
                  }}
                />
                <FormControl fullWidth sx={inputSx}>
                  <InputLabel sx={{ color: "rgba(255,255,255,0.7)" }}>
                    Service
                  </InputLabel>
                  <Select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    label="Service"
                    defaultValue=""
                    sx={{
                      color: "white",
                      ".MuiSvgIcon-root": { color: "rgba(255,255,255,0.7)" },
                    }}
                  >
                    <MenuItem value="prototypes">Prototypes</MenuItem>
                    <MenuItem value="custom-parts">Custom Parts</MenuItem>
                    <MenuItem value="small-batch">Small-Batch Prints</MenuItem>
                    <MenuItem value="design-help">Design Help</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Message"
                  fullWidth
                  multiline
                  minRows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  sx={inputSx}
                  InputLabelProps={{
                    style: { color: "rgba(255,255,255,0.7)" },
                  }}
                />
                <Button
                  type="submit"
                  variant="outlined"
                  color="#3DC2EC"
                  sx={{
                    color: "#3DC2EC",
                    p: 1,
                    transition:
                      "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease, background 200ms ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow:
                        "0px 10px 80px rgba(0,0,0,0.60), 0px 0px 45px rgba(61, 194, 236, 0.18)",
                      borderColor: "#3DC2EC",
                      backgroundColor: "#3DC2EC",
                      color: "#00061B",
                    },
                  }}
                >
                  SEND MESSAGE
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          variant="filled"
          sx={{ bgcolor: "#3DC2EC", color: "#00061B", fontWeight: 700 }}
        >
          Message sent!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contact;
