## Faphouse Playwrite tests

#### ! important remark

Something the home page is **displaying** section **'Hot videos for you' and not showing 'Best Videos'**. That is happening sometimes with git actions and sometimes is happening for me locally. It's reproducible manually. Probably some A/B test or some other logic is behind it.

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
