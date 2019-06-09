import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    max-width: 400px;
    width: 300px;
  }

  a {
    text-align: center;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.p`
  border: 1 1 1 1;
  border-color: red;
`;
