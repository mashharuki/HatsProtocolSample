# HatsProtocolSample

HatsProtocol を調査・学習するためのサンプルリポジトリです。

## 動かし方

- インストール

  ```bash
  yarn
  ```

- 環境変数の設定

  `pkgs/sample` ディレクトリ直下に `.env`ファイルを作成し、以下の変数をセットする。

  ```txt
  PRIVATE_KEY=""
  RPC_URL=""
  ```

  `pkgs/sample-hats-module`ディレクトリ直下に `.env`ファイルを作成し、以下の変数をセットする。

  ```txt
  GC_RPC=
  POLYGON_RPC=
  INFURA_KEY=
  export PRIVATE_KEY=
  ETHERSCAN_KEY=
  GNOSISSCAN_KEY=
  POLYGONSCAN_KEY=
  OPTIMISM_KEY=
  ARBISCAN_KEY=
  FOUNDRY_PROFILE=
  ```

- サンプルスクリプトの実行

  ```bash
  yarn sample sample
  ```

- Subgraph 用の SDK のサンプルスクリプトの実行

  ```bash
  yarn sample subgraph
  ```

- TopHat をミントするスクリプトの実行

  ```bash
  yarn sample mintTopHat
  ```

  ```bash
  mintTopHatResult: {
    status: 'success',
    transactionHash: '0xadcb165c2a65f6a0b348a0387c4cc5426cf59607585ce32e486454efaf5b977a',
    hatId: 12078056106883486628010822758984794541789440701298176471534417391648768n
  }
  ```

  [mintTopHat Transaction](https://sepolia.etherscan.io/tx/0xadcb165c2a65f6a0b348a0387c4cc5426cf59607585ce32e486454efaf5b977a)

- createHat

  ```bash
  yarn sample createHat
  ```

  ```bash
  createHatResult: {
    status: 'success',
    transactionHash: '0x2d0a7c492a0ba9a49ab6fda97bfb329a6a22dff6c27f65670ab97fe229b03898',
    hatId: 12078056518259625958312333297727090181127066946982142879929383228801024n
  }
  ```

- batchCreateHats

  ```bash
  yarn sample batchCreateHats
  ```

  ```bash
  batchCreateHatsResult: {
    status: 'success',
    transactionHash: '0xaa70d7e8bf6e7eaf2ee586297a93892942b6db0385a90f11f117de9826fd6654',
    hatIds: [
      12078056929635765288613843836469385820464693192666109288324349065953280n
    ]
  }
  ```

- mintHat

  ```bash
  yarn sample mintHat
  ```

  ```bash
  mintTopHatResult: {
    status: 'success',
    transactionHash: '0x734483b0ebba7e8ad3a75c263a1e0742e61215fb33afae2feb06356fce30987c'
  }
  ```

- transferHat

  ```bash
  yarn sample transferHat
  ```

  管理権限を持っているアカウントで操作可能。

  ```bash
  transferHatResult: {
    status: 'success',
    transactionHash: '0xaa5366f06f93f5003e36ea612dd80c0608d5b2178f43f327cba7526416f4538f'
  }
  Done in 13.16s.
  ```

  https://sepolia.etherscan.io/tx/0xaa5366f06f93f5003e36ea612dd80c0608d5b2178f43f327cba7526416f4538f

- renounceHat

  ```bash
  yarn sample renounceHat
  ```

  ```bash

  ```

- HatsModule SDK の読み取り系メソッドを実行するスクリプト

  ```bash
  yarn sample hatsModule
  ```

  ```bash

  ```

- HatsModules コントラクトのセットアップ

  ```bash
  yarn sample-hats-module setUp
  ```

  `forge install` が実行される。

- HatsModules コントラクトのフォーマットチェック

  ```bash
  yarn sample-hats-module fmt
  ```

- HatsModules コントラクトのビルド

  ```bash
  yarn sample-hats-module build
  ```

- HatsModules コントラクトのテスト

  ```bash
  yarn sample-hats-module test
  ```

  ```bash
  Ran 5 tests for test/Module.t.sol:Deployment
  [PASS] test_hatId() (gas: 13088)
  [PASS] test_hats() (gas: 13212)
  [PASS] test_implementation() (gas: 13205)
  [PASS] test_initialization() (gas: 19603)
  [PASS] test_version() (gas: 18366)
  Suite result: ok. 5 passed; 0 failed; 0 skipped; finished in 2.05s (1.08ms CPU time)

  Ran 1 test suite in 2.05s (2.05s CPU time): 5 tests passed, 0 failed, 0 skipped (5 total tests)
  Done in 3.02s.
  ```

- HatsModules コントラクトをデプロイする

  ```bash
  yarn sample-hats-module deploy -vvv --tc Deploy --chain sepolia --broadcast --verify
  ```

  ```bash

  ```

- フロントエンドのビルド

  ```bash
  yarn frontend build
  ```

- フロントエンドの起動

  ```bash
  yarn frontend dev
  ```
