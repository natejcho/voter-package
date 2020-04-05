# voter-package

## Set up Firebase Locally

- Provision a key in the [Firebase console](https://console.cloud.google.com/iam-admin/serviceaccounts?project=voter-package-dev).
- Get your account credentials from the Firebase console at _Project settings > Service accounts_, where you can click on _Generate new private key_ and download the credentials as a json file. It will contain keys such as `project_id`, `client_email` and `client_id`. 
- add the file to your root directory **Do not check this in**.
<!-- - Get your authentication credentials from the Firebase console under _Project settings > General> Your apps_ Add a new web app if you don't already have one. Under _Firebase SDK snippet_ choose _Config_ to get the configuration as JSON. It will include keys like `apiKey`, `authDomain` and `databaseUrl`. Set the appropriate environment variables in the `.env` file at the root of this project. -->
<!-- - Set the environment variables `SESSION_SECRET_CURRENT` and `SESSION_SECRET_PREVIOUS` in the `.env` file. (These are used by [`cookie-session`](https://github.com/expressjs/cookie-session/#secret).] -->
- we use [now secrets](https://zeit.co/docs/now-cli#commands/secrets) for Zeit now.sh 
```sh
yarn now secrets add firebase-secret "$(cat firebase-secret.json | base64)"
```