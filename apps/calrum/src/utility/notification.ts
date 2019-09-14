export const displayNotification = (
  message: string,
  date: Date,  header: string = 'Erinnerung!',
  vibrate: number[] = [100, 50, 100],
  icon: string = ''
) => {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(reg => {
      const options = {
        body: message,
        icon: icon,
        vibrate: vibrate,
        data: {
          dateOfArrival: new Date(date)
        }
      };
      reg.showNotification(header, options);
    });
  }
};
