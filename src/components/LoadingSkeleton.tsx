import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

function LoadingSkeleton() {
  return (
    <Stack spacing={2}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={60}
      />

      <Skeleton
        variant="rectangular"
        width="100%"
        height={60}
      />

      <Skeleton
        variant="rectangular"
        width="100%"
        height={60}
      />
    </Stack>
  );
}

export default LoadingSkeleton;