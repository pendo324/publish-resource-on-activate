workspace.clientActivated.connect(function (client) {
  if (client) {
    if (client.resourceClass) {
      callDBus(
        'org.pendo324.PublishResourceOnActivate',
        '/PublishResourceOnActivate',
        'org.pendo324.PublishResourceOnActivate',
        'WindowFocused',
        client.resourceClass.toString()
      );
      // something like this could eliminate the need for a separate DBus listener, but it doesn't work for some reason
      // callDBus('inputremapper.Control', '/Control', 'inputremapper.Control', 'stop_all')
      // another alternative is to use something like KLauncher to execute invoke a program/script, but that also doesn't work
      // https://bugs.kde.org/show_bug.cgi?id=450897
    }
  }
})
