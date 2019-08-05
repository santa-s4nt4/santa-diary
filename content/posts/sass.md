---
title: "WindowsでSASSを使う話"
date: 2019-06-01T03:17:12+09:00
draft: false
tags: ["Development"]
---

こんにちは，[Santa](https://twitter.com/santa_sukitoku)です．

先日，GitHub Pagesでwebサイトを制作したのですが，そのサイト構築にSCSSを用いようとしたらHTMLでSCSSファイルを読み込めず，詰まったのでその対処法をメモしておきたいと思います．

### 何がいけなかったのか

SCSSが読み込めなかった理由は単純明快で，RubyがWindowsにインストールされてなかっただけでした．

### 対処法

まずはRubyインストーラーを[公式サイト](https://www.ruby-lang.org/ja/)からダウンロードしてRubyをインストールしましょう．

次に，コマンドプロンプトを起動して，ruby -vを実行して下記のように表示されていればRubyのインストールは完了です．

```
$ ruby -v
ruby 2.5.3p105 (2018-10-18 revision 65156) [x64-mingw32]
```

次に，gemというパッケージを使えるようにします．
gem -vを実行してgemを確認してください

```
$ gem -v
2.7.8
```

日本語を使うとエンコーディングの問題でエラーが出るので，環境変数LANGの指定を「UTF-8」に変更しておきます．

```
$ set LANG=ja_JP.UTF-8
```

gem update –systemを実行してgemを最新の状態にします．

```
$ gem update --system
```

念のために，もう一度gem -vを実行してバージョンを確認してください．

次に，gem install sassでSassをインストールしてください

```
$ gem install sass
```

gem update sassでSassを最新の状態にしてください．

```
$ gem update sass
```

sass -vでSassのバージョンを確認してください．

```
$ sass -v
```

これで，WindowsでSassを書くことができるようになりました．

### SASS→CSSにコンパイル

SassファイルをCSSファイルとして読み込ませるために，SassファイルをCSSファイルにコンパイルする必要があります．

Sass(SCSS)ファイルが存在するディレクトリにコマンドプロンプトで移動し，
"sass –watch ○○.scss:○○.css –style compressed"を実行すれば，ファイルの状況を監視し，更新されたら圧縮されたCSSファイルを生成してくれるようになります．

```
$ sass --watch ○○.scss:○○.css --style compressed
```

### まとめ

やはりWindowsは開発環境を整えるのが面倒ですね...