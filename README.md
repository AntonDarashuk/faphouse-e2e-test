## Faphouse Playwrite tests

#### ! important remark

Sometimes the home page is **displaying** section **'Hot videos for you' and not displaying 'Best Videos'**. That is happening with git actions and locally. It's reproducible manually. Probably some A/B test or some other logic is behind it.

### Where to see reports

You can see test report on the git page https://vitalygryaznov.github.io/faphouse-e2e-test/

### How to run locally

- copy everything from '.env-blueprint' in the root of the project to '.env' to setup environment variables
- install
  ```console
     npm install
  ```
  ```console
     npx playwright install
  ```
- run
  ```console
     npx playwright test
  ```
- or run in debug mode with
  ```console
     npx playwright test --ui
  ```
