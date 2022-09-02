export default function NotificationApi() {
  const handleNewNotification = async () => {
    const result = await Notification.requestPermission();
    if (result === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("Vibration Sample", {
          body: "Buzz! Buzz!",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "vibration-sample"
        });
      });
    }
  };

  return Notification ? (
    <button onClick={handleNewNotification}>
      <span>Show notification</span>
    </button>
  ) : null;
}
