const {
  app,
  BrowserWindow,
  Menu,
  dialog,
  powerMonitor,
  shell,
  Notification,
} = require('electron');
const Store = require('electron-store');
const isDev = require('electron-is-dev');
const path = require('path');

const store = new Store();

global.notificationSettings = {
  resetNotification: store.get('reset') || true,
  reminderNotification: store.get('reminder') || 'hour',
};

let win = {
  show: () => {
    console.log('show');
  },
};

let willQuit = false;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreenable: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
};

const menuSetup = () => {
  const menuTemplate = [
    {
      label: 'todoapp',
      submenu: [
        {
          label: 'About',
          click: () => {
            dialog.showMessageBox(win, {
              type: 'info',
              title: 'About',
              message: 'utopier todoapp',
              detail: 'Utopier TodoApp, electron + react + rxjs + emotion',
              // icon: path.join(__dirname, "assets/png/64x64.png")
            });
          },
        },
        {
          label: 'Contirbute github',
          click: () => {
            shell.openExternal('https://github.com/utopier');
          },
        },
        {
          type: 'separator',
        },
        {
          label: 'Quit',
          accelerator: 'CommandOrControl+Q',
          click: () => {
            app.quit();
          },
        },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'delete' },
        { role: 'selectall' },
      ],
    },
    {
      label: 'View',
      submenu: [
        // {
        //   label: "Light mode",
        //   type: "checkbox",
        //   checked: false,
        //   click: e => {
        //     win.isLightMode = e.checked;
        //   }
        // },
        {
          type: 'separator',
        },
        { role: 'reload' },
        { role: 'togglefullscreen' },
        { role: 'minimize' },
        { role: 'close' },
      ],
    },
    {
      label: 'Notifications',
      submenu: [
        {
          label: 'Enable reset notification',
          type: 'checkbox',
          checked: store.get('reset'),
          click: (e) => {
            global.notificationSettings.resetNotification = e.checked;
            store.set('reset', e.checked);
          },
        },
        {
          label: 'Reminder notifications',
          submenu: [
            {
              label: 'Never',
              type: 'radio',
              checked: store.get('reminder') === 'never',
              click: (e) => {
                if (e.checked) {
                  global.notificationSettings.reminderNotification = 'never';
                  store.set('reminder', 'never');
                }
              },
            },
            {
              label: 'Every 15 minutes',
              type: 'radio',
              checked: store.get('reminder') === 'quarterhour',
              click: (e) => {
                if (e.checked) {
                  global.notificationSettings.reminderNotification =
                    'quarterhour';
                  store.set('reminder', 'quarterhour');
                }
              },
            },
            {
              label: 'Every 30 minutes',
              type: 'radio',
              checked: store.get('reminder') === 'halfhour',
              click: (e) => {
                if (e.checked) {
                  global.notificationSettings.reminderNotification = 'halfhour';
                  store.set('reminder', 'halfhour');
                }
              },
            },
            {
              label: 'Every hour',
              type: 'radio',
              checked: store.get('reminder') === 'hour',
              click: (e) => {
                if (e.checked) {
                  win.reminderNotification = 'hour';
                  store.set('reminder', 'hour');
                }
              },
            },
          ],
        },
        {
          label: 'Show example notification',
          click: (e) => {
            let exNotification = new Notification({
              title: 'todometer reminder!',
              body: "Here's an example todometer notification!",
            });
            exNotification.show();
          },
        },
      ],
    },
  ];
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
};

app.on('ready', () => {
  createWindow();
  menuSetup();

  powerMonitor.on('resume', () => {
    win.reload();
  });

  win.on('close', (e) => {
    if (willQuit || process.platform === 'win32') {
      win = null;
      app.quit();
    } else {
      e.preventDefault();
      win.hide();
    }
  });
});

app.on('activate', () => {
  win.show();
});

// app.on('window-all-closed', () => {
// });

app.on('before-quit', () => (willQuit = true));
