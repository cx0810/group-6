import { useState } from "react";

import StyledButton from "./StyledButton";
import {FormControl} from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');

  // TODO: create handle submit function
  const handleSubmit = () => {
    return;
  }

  return (
    <>
      <section>
        <h1>Sign In</h1>
        <FormControl onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <StyledButton>Sign In</StyledButton>
        </FormControl>
      </section>
    </>
  )
}

export default Login