import { Link } from "react-router-dom";
import style from "./NotFoundPage.module.css"; 

const NotFoundPage = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Oops! Page not found</h1>
      <p className={style.message}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className={style.backLink}>
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;