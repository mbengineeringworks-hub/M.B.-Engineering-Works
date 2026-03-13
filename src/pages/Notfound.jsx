export default function NotFound() {
  return (
    <div className="container text-center py-5">

      <h1 className="display-3 fw-bolder text-danger">
        404
      </h1>

      <h3 className="mb-3">
        Page Not Found
      </h3>

      <p className="text-muted">
        The page you are looking for does not exist.
      </p>

      <a href="/" className="btn btn-primary mt-3">
        Go Home
      </a>

    </div>
  );
}