- https://github.com/cassidoo/todometer
- https://www.electronjs.org/docs

## 1. 초기 프로젝트 설정

- npm init -y
- npm i -D electron electron-builder
- npm i -D react react-dom react-scripts @rescripts/cli @rescripts/rescript-env
- npm i -D concurrently wait-on
- package.json scripts 수정
- **Folder Architecture**
  - .webpack.config.js
  - .rescripts.js
  - /assets
    - /mac
    - /win
    - /png
  - /public
    - electron.js
    - index.html
  - /src
    - index.js
    - App.js
    - /components

---

## 2. Electron, electron.js

- npm i electron-is-dev electron-store

1. Application Architecture

2. Features

- **Notifications**
  - HTML5 Notification API를 통해 알림을 보내고, 해당 운영체제의 내장 notification API를 사용해 화면에 표시함
  - 운영체제마다 코드, 사용자 경험(UX)이 다를수 있음
- **Recent Document**
  - Windows 및 MacOS는 각각 JumpList or Dock 메뉴를 통해 애플리케이션에서 열었던 최근문서목록에 대한 엑세스를 제공함.
- **Progress-Bar**
  - 작업 표시줄 버튼에 ProgressBar를 표시할 수 있음
- **Custom Dock Menu**
  - macOS Dock에 앱의 아이콘을 구성
  - 커스텀 dock menu를 구성하기 위해 app.dock.setMenu를 사용
- **Custom Windows taskbar**
  - windows 작업 표시줄에 앱의 아이콘을 구성
  - JumpList, 미리보기 툴바, 작업 표시줄에서 아이콘 오버레이, 깜빡이는 창
- **Custom linux desktop actions**
- **Keyboard shortcuts**
  - 로컬 및 전역 키보드 단축키 설정
  - 로컬 단축키
    - 애플리케이션이 포커스 되어있을때만 사용되는 키보드 단축키 설정
  - 전역 단축키
    - 애플리케이션이 키보드 포커스를 갖지 않을때에도 키보드 이벤트 감지
  - BrowserWindows 간의 단축키
    - 렌더러 프로세스 안에 있는 윈도우 오브젝트 상에 keyup, keydown 이벤트 리스너 사용
- **Online-Offline Events**
  - HTML5 API인 navigator.online을 사용해 렌더러 프로세스에서 온라인 및 온프라인 감지
- **macOS BrowserWindows에 대한 파일 표현**
- **Native file drag drop**
- **Offscreen Rendering**
- **macOS Dark Mode**
- **Web embeds**
  - Iframe, WebView, BrowserViews

3. API

- **사용자 지정 DOM 요소**

  - File
  - webview Tag
  - window.open
  - BrowserWindowProxy

- **Main Process**
  - app
    - application의 이벤트 수명주기 제어
  - BrowserWindow
  - Menu
  - dialog
  - powerMonitor
  - shell
  - Notification
  - ipcMain
- **Renderer Process**
  - ipcRenderer
  - desktopCapturer
  - remote
  - webFrames
- **Public**
  - clipboard
  - crashReporter
  - nativeImage
  - shell

4. Accessibility

5. Debugging

6. Distribution

7. Updates

8. Security

---
