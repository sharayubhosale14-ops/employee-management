interface EmptyStateProps {
  message?: string;
}

function EmptyState({
  message = "No Data Available",
}: EmptyStateProps) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h2>{message}</h2>

      <p>
        There is currently no data
        to display.
      </p>
    </div>
  );
}

export default EmptyState;