export const pushNotify = async (title, body) => {
  try {
    if (!('Notification' in window)) {
      console.error('This browser does not support notifications');
      return false;
    }

    if (Notification.permission === 'default') {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        console.warn('Notification permission was denied');
        return false;
      }
    } else if (Notification.permission === 'denied') {
      console.warn('Notification permission was denied');
      return false;
    }

    const notification = new Notification(title, { 
      body,
    });

    notification.onclick = () => {
      window.focus();
      notification.close();
    };

    return true;
  } catch (error) {
    console.error('Error showing notification:', error);
    return false;
  }
}