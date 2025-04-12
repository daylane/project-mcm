import { styled } from "@mui/material";

export const ContentForm = styled.div`
  padding: 1rem;
  width: 30%;

  .text-secondary {
    color: '#8c8c8c';
  }

  img {
    min-width: 8%;
    width: 100%;
  }

  form {
    width: 100%;
    margin: 1rem 2rem 1rem;
  }

  .logo {
  }

  .header {
    margin: 1rem 2rem 1rem;

    h1 {
      font-weight: bold;
    }

    p {
    }
  }

  /* form {
    input {
    width: 50%;
  }
  } */

  button {
    margin-top: 1rem;
    /* width: 80%; */
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    .header {
      text-align: center;
    }

    form input {
      width: 100%;
    }

    button {
      margin-top: 1rem;
      width: 100%;
    }
  }
`;