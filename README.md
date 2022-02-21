# MultiRewardDistribution

[![Tests](https://github.com/Wonderland-Money/multi-reward-distribution/actions/workflows/tests.yml/badge.svg?branch=main)](https://github.com/Wonderland-Money/multi-reward-distribution/actions/workflows/tests.yml)

This repository contains the MultiRewardDistribution.

## Testing

```sh
$ yarn
```

Compile hardhat components:

```sh
$ yarn compile
```

Run tests:

```sh
$ yarn test
```
#yarn add --dev hardhat-deploy dotenv
/home/dev/www/wonder/wonder-multi-reward-distribution/hardhat.config.ts
yarn hardhat run — network c4ei scripts/deployScript.ts
yarn hardhat deploy --network c4ei

설정을 완료 후, 아래와 같이 입력한다. 네트워크 설정, deploy한 컨트랙트의 주소, deploy시에 입력했던 constructor 인자를 함께 입력한다.
yarn hardhat verify --network ropsten 0xa...123 “10000” “FirstAssetToken” “FAT” “0”

