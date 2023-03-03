import { Component, ErrorInfo, ReactElement } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component<{ children: ReactElement }> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container p-3 md:p-5 mx-auto pt-10 dark:text-white/80">
          <h2>Whoops something went wrong. Please try again later.</h2>
          <Link
            to="/"
            className="flex items-center mt-3 bg-white dark:bg-dark-blue rounded-lg py-3 px-8 text-sm shadow w-fit">
            Return to homepage
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
