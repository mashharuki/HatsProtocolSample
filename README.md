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

- HatsModules コントラクトのセットアップ

  ```bash
  yarn sample-hats-module setUp
  ```

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
- HatsModules コントラクトをデプロイする

  ```bash
  yarn sample-hats-module deploy -f sepolia --broadcast --verify
  ```