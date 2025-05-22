import { styled } from "@mui/material/styles";

export const ContentForm = styled("div")(({ theme }) => ({
  padding: "1rem",
  width: "30%",

  ".text-secondary": {
    color: "#8c8c8c",
  },

  img: {
    minWidth: "8%",
    width: "100%",
  },

  form: {
    width: "100%",
    margin: "1rem 2rem",
  },

  ".header": {
    margin: "1rem 2rem",

    h1: {
      fontWeight: "bold",
    },
  },

  button: {
    marginTop: "1rem",
  },

  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",

    ".header": {
      textAlign: "center",
    },

    "form input": {
      width: "100%",
    },

    button: {
      marginTop: "1rem",
      width: "100%",
    },
  },
}));
