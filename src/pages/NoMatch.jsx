import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>404 - Page not found</h2>
      <p>The route you are trying to access does not exist.</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
}
