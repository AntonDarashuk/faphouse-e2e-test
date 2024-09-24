## Faphouse Playwrite tests

#### ! important remark

Probably based on IP or on something else the home page sometimes is **displaying** section **'Hot videos for you' and not showing 'Best Videos'** on the home page. That is happening for execution with git actions and sometimes is happening for me locally.

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
