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

- Hat をミントするスクリプトの実行

  ```bash
  yarn sample mintHat
  ```
