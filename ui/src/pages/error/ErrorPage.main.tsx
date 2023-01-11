import { Container } from "reactstrap";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export const ErrorPage: React.FunctionComponent = () => {
  const error: any = useRouteError();
  return (
    <div
      style={{ height: "100vh" }}
      className="bg-light d-flex justify-content-center"
    >
      <Container className="w-auto align-self-center d-flex flex-column align-items-center">
        <h1>404 Page Not Found</h1>
        <p>{error.statusText || error.message}</p>
        <Link to={"/"}>Go back</Link>
      </Container>
    </div>
  );
};
