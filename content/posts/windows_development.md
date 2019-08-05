---
title: "Windowsの環境構築の話"
date: 2018-11-20T03:29:03+09:00
draft: false
tags: ["Development"]
---

こんにちは，[Santa](https://twitter.com/santa_sukitoku)です．

先日，大学合格祝いにRazer Blade 15を購入したので，自分がどのような環境構築をしたのか記したいと思います(Windowsの環境構築を忘れないうちにメモっておきたいだけ)．

<blockquote class="twitter-tweet" data-lang="en"><p lang="ja" dir="ltr">カッコよすぎでは？<br>というかUS配列〜 <a href="https://t.co/UmUqYd0Yj4">pic.twitter.com/UmUqYd0Yj4</a></p>&mdash; Santa (@santa_sukitoku) <a href="https://twitter.com/santa_sukitoku/status/1063945982486822912?ref_src=twsrc%5Etfw">November 18, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### マシンスペック

- Razer Blade 15
- CPU: Intel® Core™ i7-8750H 6 コアプロセッサ
- GPU: NVIDIA® GeForce® GTX 1070 Max-Q Design VR 対応グラフィックス
- SSD容量: 256GB → 1TBのSSDに換装しました．
- メモリ容量: 16GB
- リフレッシュレート: 144Hz
- キー配列: US配列 (amazon.comで個人輸入)

### マシンの使用用途
- TouchDesignerやglsl，Unityでのvisual制作，インスタレーション制作．
- TidalCyclesでの演奏．
- Adobeソフトウェアでのデザイン，映像制作．

### 環境構築
#### エディタ
PythonやGLSL，Markdownなどを書くときはVisual Studio Codeを使用しています．また，TouchDesignerの外部エディタもVisual Studio Codeに設定しています．たまにVisual Studioも使ったり...)

ちなみに，エディタでは[Cica](https://github.com/miiton/Cica)というフォントを使っています．プログラミング向けの等幅日本語フォントで，個人的には読みやすいので気に入ってます．

#### SNS関連
TweetdeckとSlack，Discordは[Station](https://getstation.com)を使って統合させています．

#### シェル

<a href="https://photos.google.com/share/AF1QipPClMHE1ep7OEEhUoJpW1MHEY6PiMB9OQ3MJHNSScZLV4itmVk8kOsPsi_QsVesuQ?key=UVk3MlRfQWtuNEdoRHZ5ZWxHTFZLNGpWRzJYbExB&amp;source=ctrlq.org"><img src="https://lh3.googleusercontent.com/uD67OMn0tOjmqlTwyvVtVgtYR3LnTBX1ZoDiz6J545xF3S3jJGeWv9f33NYH5N8kWr4sBlp8fYfSglI4PW6QhwEF1g3DOAaIY1kTkD2fmGZyY4Ai5ub8I4wONypcmgs1CKy89JAjJA=w2400"></a>

Windowsで[Cmder](http://cmder.net) + bashを使ってます．

#### キーバインド

Razer Synapseで内蔵キーボード，Havitのツールで外付けキーボードのCtrlとAltを入れ替えました．Macでよく使う⌘キーに近いwindowsのキーがCtrlなので，Macの⌘キーの位置にCtrlを置くことでショートカットキーが打ちやすくなりました．また，caps lockはMacでCtrlとして使っていたのでRazer Blade 15でも同じように設定しました．

キーバインドは，[AutoHotKey](https://www.autohotkey.com)を使ってCtrlキーの空打ちでIMEのon/offを切り替えるようにしました．Macの英数/かなのように使えて超快適になりました．

下のGitHubページからAltキーの空打ちでIMEのon/offを切り替えるソースコードをダウンロードして，ソースコードのAltをCtrlに書き換えて使用しています．

[https://github.com/karakaram/alt-ime-ahk](https://github.com/karakaram/alt-ime-ahk)

#### ランチャー

ランチャーは[Keypirinha](http://keypirinha.com)を使っています．デザインがAlfredに近いので使うことにしました．

Macでは⌘ + SpaceでSpotlightを起動していたので，Razer Blade 15ではCtrl + SpaceでKeypirinhaを起動するように設定しました．

<blockquote class="twitter-tweet" data-lang="en"><p lang="ja" dir="ltr">ランチャーのKeypirinhaがとても便利． <a href="https://t.co/TJQi3HFXdL">pic.twitter.com/TJQi3HFXdL</a></p>&mdash; Santa (@santa_sukitoku) <a href="https://twitter.com/santa_sukitoku/status/1064698232427573248?ref_src=twsrc%5Etfw">November 20, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="en"><p lang="ja" dir="ltr">今知ったんだけど，KeypirinhaでYoutubeの検索かけられるのめちゃくちゃ便利だな． <a href="https://t.co/WHA39SO4sL">pic.twitter.com/WHA39SO4sL</a></p>&mdash; Santa (@santa_sukitoku) <a href="https://twitter.com/santa_sukitoku/status/1065565867939774464?ref_src=twsrc%5Etfw">November 22, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### まとめ

他にもWindowsの環境構築でおすすめのtipsがあったらおしえてください...!