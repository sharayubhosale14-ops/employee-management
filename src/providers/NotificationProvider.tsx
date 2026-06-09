import {
  createContext,
  useContext,
  useState,
} from "react";

import type { ReactNode } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

type Severity =
  | "success"
  | "error"
  | "warning"
  | "info";

interface NotificationContextType {
  showNotification: (
    message: string,
    severity: Severity
  ) => void;
}

const NotificationContext =
  createContext<
    NotificationContextType | undefined
  >(undefined);

export const NotificationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [open, setOpen] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [severity, setSeverity] =
    useState<Severity>("info");

  const showNotification = (
    msg: string,
    type: Severity
  ) => {
    setMessage(msg);
    setSeverity(type);
    setOpen(true);
  };

  return (
    <NotificationContext.Provider
      value={{ showNotification }}
    >
      {children}

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() =>
          setOpen(false)
        }
      >
        <Alert
          severity={severity}
          variant="filled"
          onClose={() =>
            setOpen(false)
          }
        >
          {message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};

export const useNotification =
  () => {
    const context = useContext(
      NotificationContext
    );

    if (!context) {
      throw new Error(
        "useNotification must be used inside NotificationProvider"
      );
    }

    return context;
  };