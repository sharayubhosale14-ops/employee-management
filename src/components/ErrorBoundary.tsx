import { Component } from "react";

import type {
  ErrorInfo,
  ReactNode,
} from "react";
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(
    error: Error,
    errorInfo: ErrorInfo
  ) {
    console.error(
      "Error Boundary:",
      error,
      errorInfo
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          <h1>
            Something went wrong.
          </h1>

          <p>
            Please refresh the page.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;