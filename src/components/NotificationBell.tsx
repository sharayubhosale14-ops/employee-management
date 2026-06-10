import { useEffect, useState } from "react";

function NotificationBell() {
  const [notifications, setNotifications] =
    useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const messages = [
        "New employee added",
        "HR department updated",
        "Salary record changed",
        "Employee profile updated",
      ];

      const randomMessage =
        messages[
          Math.floor(
            Math.random() *
              messages.length
          )
        ];

      setNotifications((prev) => [
        randomMessage,
        ...prev,
      ]);
    }, 5000);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">
          🔔 Notifications
        </h2>

        <span className="bg-red-500 text-white px-3 py-1 rounded-full">
          {notifications.length}
        </span>
      </div>

      {notifications.length === 0 ? (
        <p>No notifications yet</p>
      ) : (
        <div className="space-y-2">
          {notifications.map(
            (item, index) => (
              <div
                key={index}
                className="bg-slate-100 p-2 rounded-lg"
              >
                {item}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default NotificationBell;