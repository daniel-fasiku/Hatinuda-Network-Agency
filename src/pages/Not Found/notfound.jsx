import { Link } from "react-router-dom";
import "./notfound.css";

const notfound = () => {
  return (
    <section className="not-found-container">
      <div>
      <h1 className="not-found-text">Page Not Found</h1>
      <Link to="/" className="not-found-button">Go Back Home</Link>
      </div>
    </section>
  )
}

export default notfound