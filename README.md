# React Native boilerplate app created with Expo

## This boilerplate includes:

- TypeScript
- the React Context state management system,
- React Navigation library for routing and Navigation,
- Axios for dealing with REST servers,
- the Jest framework for testing,
- i18next internationalization library,
- React Query library for data synchronization.

---

## Project structure examples:

- https://www.reactnative.express/app/project_structure
- App.tsx is an entry file

<p> In React Native, component names must be capitalized, so the file name will usually be capitalized too for consistency. We can use default exports.</p>

### Folder structure

- folders for screens, components, navigation
- A few other common categories of file:
  - api: network API calls, often organized by provider or route
  - assets: images and other files to bundle with the app
  - hooks: custom hooks
  - reducers: reducer functions, for managing app data with the useReducer hook (or another library)
  - theme: shared colors and text styles (sometimes called styles)
  - utils: miscellaneous tools like string formatting

#### Example:

Code can be organized in screens, components and containers folders - If we wanted container components that didn't represent entire screens in the app, but rather portions of a screen (that might be shared between different screens), we might additionally make a containers directory.

- App.tsx
- /src folder can contain the following:
  - screens - Home.tsx, Details.tsx
  - navigation - Router.tsx
  - components - Button.tsx, Input.tsx
  - containers - List.tsx
  - assets - /images, /fonts
  - hooks - useAPI - maybe for ReactQuery?
  - utils - constants.tsx, configs.tsx
  - theme ( styles) - styles.tsx
  - i18n
  - http (or api) - axios abstraction

---

#### For development:

- eslint
- prettier
- https://www.npmjs.com/package/eslint-plugin-react-native

---

#### Important topics to consider:

- Coding standards;
- Pull requests, code merging standards
- Code reviewers
- Naming conventions
- Branching conventions
- Commits naming
- Sprint planning process and sprint review
- Tasks description, micro design
- JIRA comments, time logging
- Are we going to write unit tests?
- Time estimates for writing unit tests

---

### Documentation:

#### Expo: https://docs.expo.dev/

#### Expo code examples: https://github.com/expo/examples

#### React Native: https://reactnative.dev/

#### React Navigation: https://reactnavigation.org/

---

### On using TypeScript in your project: https://docs.expo.dev/guides/typescript/#typescript-for-config-files

`yarn add -D ts-node typescript`

---

## Running the application:

---

#### Start the development server by running the following command:

```sh 
npx expo start
```

or if you are using Yarn:

```sh
yarn expo start
```
Note: pass -c if you edit the babel config

#### Build
Internal distribution
https://docs.expo.dev/build/internal-distribution/

```sh
eas device:create eas build --profile preview --platform all 
```

```sh
eas build --profile preview --platform android
```

#### Expo CLI starts Metro Bundler. This bundler is an HTTP server that compiles the JavaScript code of your app using Babel and serves it to the Expo app.

---

#### Opening the app on your phone/tablet:

To open the app you will need to install <b>Expo Go</b> application on your phone.

- On your Android device, press "Scan QR Code" on the "Home" tab of the Expo Go app and scan the QR code you see in the terminal.
- On your iPhone or iPad, open the default Apple "Camera" app and scan the QR code you see in the terminal.
