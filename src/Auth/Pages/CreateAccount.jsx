import React, { useState } from "react";
import { AuthNavbar } from "../Components/AuthNavbar";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

export const CreateAccount = () => {
  const [career, setCareer] = useState("");
  const [works, setWorks] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <header>
        <AuthNavbar />
      </header>

      <Typography
        variant="h5"
        sx={{
          px: "40px",
          mt: "40px",
          textAlign: { xs: "center", md: "start" },
        }}
      >
        Crea tu cuenta y encuentra el empleo que estás buscando
      </Typography>

      <Box
        sx={{
          width: "95%",
          mx: "auto",
          my: "10px",
          px: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* form */}
        <form>
          <Grid2 container md={12} sx={{}} spacing={3}>
            {/* inputs -> grid items */}
            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Nombre completo"
                type="text"
                placeholder="Nombre completo"
                fullWidth
                name="displayName"
              />
            </Grid2>

            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth label="Apellido(s)" id="lastnames" />
            </Grid2>

            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth label="Telefono" id="phone" />
            </Grid2>

            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Carrera</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={career}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid2>

            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Trabajos</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={works}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid2>

            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                type="date"
                id="Birdthday"
                sx={{
                  "& input::placeholder": { color: "gray", opacity: 1 },
                }}
              />
            </Grid2>

            <Grid2 item size={12}>
              <TextField
                fullWidth
                label="Acerca de"
                id="about"
                multiline
                rows={6}
              />
            </Grid2>
          </Grid2>

          {/* btns */}

          <Grid2 container direction="column" sx={{ my: "25px" }}>
            <FormControlLabel
              sx={{ mb: "10px", color: "gray" }}
              control={<Checkbox />}
              label="Acepto los términos y condiciones de UNICHAMBA"
            />
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <Button
                sx={{ backgroundColor: "#04061A", fontWeight: "bold" }}
                type="submit"
                variant="contained"
                fullWidth
              >
                Crear cuenta
              </Button>
            </Grid2>
          </Grid2>
        </form>

        <Box
          sx={{
            width: "350px",
            height: "350px",
            backgroundImage: 'url("../public/createAccount.png")',
            backgroundPosition: "center",
            display: { xs: "none", md: "flex" },
            mt: "30px",
          }}
        ></Box>
      </Box>
    </>
  );
};
