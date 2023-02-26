## Publish Resource Class on Activate

This is a very simple KWin script that publishes a client/window's resourceClass when its activated (focussed).

### Installation

1. `kpackagetool5 --type=KWin/Script -i .`
1. Enable the script either using the system settings page or:
```
kwriteconfig5 --file kwinrc --group Plugins --key publishResourceOnActivate true
qdbus org.kde.KWin /KWin reconfigure
```

### Usage

One example of how you can use the output of this script is available in the [kde-key-switcher repo](https://github.com/pendo324/kde-key-switcher).
