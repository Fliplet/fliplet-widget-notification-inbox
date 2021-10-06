// Include your namespaced libraries
var NotificationInbox = new Fliplet.Registry.get('notification-inbox:1.0:core');

// This function will run for each instance found in the page
Fliplet.Widget.instance('notification-inbox-1-0-0', function(data) {
  // The HTML element for each instance. You can use $(element) to use jQuery functions on it
  var element = this;

  // Sample implementation to initialize the widget
  var inbox = new NotificationInbox(element, data);

  $(element).translate();

  Fliplet.Widget.register('NotificationInbox', function() {
    return inbox;
  });

  Fliplet.Hooks.on('beforeNotificationsInit', function() {
    if (data.mode === 'demo' && Fliplet.App.isPreview(true)) {
      // Initialize inbox as demo
      inbox.init({
        mode: 'demo'
      });

      return;
    }

    // Initialize Notification Inbox component
    inbox.init();
  });
});

Fliplet.Analytics.trackEvent({
  category: 'notification_inbox',
  action: 'inbox_visit',
  nonInteraction: true
});
