# Welcome to the Javascript-CI tutorial Repo! #

This is a tutorial repo used for the SWE4103 CI seminar, to setup circle ci in a
repo.

1. Fork the repo 
2. Edit config.yml to be a working circleCI configuration
3. Setup CircleCI account
4. Add Github Checks
5. Work, Add tests, and use pull requests.

<details>
<summary>Working Configurations</summary>
<p markdown="1">

#### Working version one

```YAML
version: 2.1
jobs:                                         
  build:                               
    docker:                                   
      - image: circleci/node:8
    steps:
        - checkout
        - run:
            name: Install Frontend Environment
            command: npm ci
        - run:
            name: Run tests
            command: npm test
```
</p>

<p markdown="1">

#### Working version two

```YAML
version: 2.1
orbs:                      
  node: circleci/node@3.0.0
workflows:
  node-tests:
    jobs:
      - node/test
```
</p>
</details>
