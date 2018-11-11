<header>
HTMLサーバー比較
============
</header>

<main>
## はじめに
HTTPサーバーを作るPythonの[responder](http://python-responder.org/en/latest/)というパッケージが新しくKenneth Reitzさんによって作られたということを[Hacker News](https://news.ycombinator.com/item?id=18234192)で読んだので、使ってみようかと思い、ついでに他のサーバーパッケージも入れたすごく簡単な動作比較をします。


少ないですが、次のフレームワークを比較します。
- [responder](http://python-responder.org/en/latest/) (python)
- [flask](http://flask.pocoo.org/) (python)
- [express](https://expressjs.com) (node.js)


## 環境構築

pythonとnodejsの環境構築です。

>**python**
>```bash
>$ pipenv --python 3.6
>$ pipenv install responder flask
>```
>><details><summary>TypeError: 'module' object is not callable　エラーが出るとき</summary>Pipenvのバグで、pip18.1を使っているとエラーがでます。(10/17/2018現在)
>>pip18.0にダウングレードすると直ります。  
>>
>>`$ pipenv run pip install pip==18.0`

>**node.js** (v11.0.0)
>```bash
>$ npm init -y
>$ npm i -S express
>```




## REST API（Hello World）
localhost:3000/hello へ `GET` すると `Hello World!`が返るREST API

### responder


```python
# server_responder.py

import responder

api = responder.API()

@api.route("/hello")
async def hello(req, resp):
    resp.text = "Hello World!"

if __name__ == "__main__":
    api.run(port=3000)
```

サーバー開始
```bash
$ pipenv run python server_responder.py
INFO: Started server process [91078]
INFO: Uvicorn running on http://127.0.0.1:3000 (Press CTRL+C to quit)
```

curlでチェック
```bash
$ curl localhost:3000/hello
Hello World!$
```
返ってきました。サーバー側のログも出ています。
```bash
INFO: ('127.0.0.1', 53672) - "GET /hello HTTP/1.1" 200
```


### flask

```python
# server_flask.py

from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"
```

サーバー開始
```bash
$ FLASK_APP=server_flask.py pipenv run flask run --port 3000
 * Serving Flask app "server_flask.py"
 * Environment: production
   WARNING: Do not use the development server in a production environment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:3000/ (Press CTRL+C to quit)
```

Flaskでは `if __name__ == "__main__": ...` でもできますが、コマンドで起動することを推奨しています。  
ポートもコマンドで指定します。


curlでチェック
```bash
$ curl localhost:3000/hello
Hello World!$
```
サーバーログ
```bash
127.0.0.1 - - [07/Nov/2018 22:17:04] "GET /hello HTTP/1.1" 200 -
```

### express

```javascript
// server_express.js

const express = require("express");
const app = express();

app.get("/hello", (req, res) => res.send("Hello World!"))

app.listen(3000, () => console.log("server on"))
```

サーバー開始
```bash
$ node server_express.js
server on
```

Expressはログを自動で返しません。サーバーが起動したことを示すためにコールバック関数で`server on`とコンソールに出力しました。

curlでチェック
```bash
$ curl localhost:3000/hello
Hello World!$
```

ログは一切出ません。

><details><summary>ログを出すには</summary>  
>別のモジュールである morgan をインストールして使います。
>
>```bash
>$ npm i -S morgan
>```
>
>```javascript
>// server_express.js
>
>const express = require("express");
>const app = express();
>
>// morganをミドルウェアとして使う
>const logger = require("morgan");
>app.use(logger("dev"))
>
>app.get("/hello", (req, res) => res.send("Hello World!"))
>
>app.listen(3000, () => console.log("server on"))
>```
>起動してから、curlテストした際のログ
>
>```bash
>GET /hello 200 7.132 ms - 12
>```
></details>



## サーバーサイドレンダリングされたHTMLページ
HTMLを返すエンドポイントを作ります。  
サーバーサイドでそのままHTMLを書いても使えますが、変数を渡したりするにはテンプレートエンジンというものを使います。  
pythonのパッケージのresponderとflaskではデフォルトで[jinja2](http://jinja.pocoo.org/)が使われていて、node.jsでは色々選べますがここではexpressで公式に紹介されている[pug](https://pugjs.org/)を使います。  

それぞれ、 `Hello, {名前}!`と名前の部分を変数としたHTMLを作成します。

### responder
実は上でサーバーを起動した際に、自動で`static/`と`templates/`の二つのファイルがルートに作成されています。ここに返すHTMLを作ります。  
自動で作られた`templates/`内に`page.html`を作り、Jinja templateを使ってテンプレーティングします。

```html
<!-- templates/page.html -->

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>html page</title>
    </head>
    <body>
        <h1>Hello, {{ name }}!</h1>
    </body>
</html>
``` 
エンドポイント

```python
# server.py

import responder

api = responder.API()

@api.route("/hello/{name}")
async def hello(req, resp, *, name):
    resp.content = api.template("page.html", name=name)

if __name__ == "__main__":
    api.run(port=3000)
```

ブラウザで`localhost:3000/hello/kazuya`にアクセスすると、`Hello, kazuya!`と表示され、タイトルは`html page`となっています。

curlでもテスト
```bash
$ curl localhost:3000/hello/kazuya
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>html page</title>
    </head>
    <body>
        <h1>Hello, kazuya!</h1>
    </body>
</html>
```


>このコードを実行した時、エラーが出て、イシューをあげたら直してもらえました。
>https://github.com/kennethreitz/responder/issues/76


### flask

同じJinja2を使ってレンダリングしているので、HTMLは同じで大丈夫です。  
気をつけるのは、ここではresponderが自動でtemplatesフォルダを作ってるのでそれを使いますが、flaskだけでやる場合は自分でフォルダを作らないといけないことです。

```python
# server_flask.py

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/hello/<name>")
def hello(name=None):
    return render_template("page.html", name=name)
```

結果はresponderと一緒です。


### express

pugをインストールします。

```bash
npm i -S pug
```

pugは書き方が独特で、yamlみたいな書き方をします。

```pug
html
    body
        h1 Hello, #{ name }!
```

expressにテンプレートエンジンと、HTMLファイルのある場所の設定をします。

```javascript
const express = require("express");
const path = require("path");

const app = express();

// viewsフォルダを見るように設定
app.set("views", path.join(__dirname, "views"));
// テンプレートエンジンをpugに設定
app.set("view engine", "pug")

app.get("/hello/:name", (req, res) => {
  res.render("page", { name: req.params.name })
})

app.listen(3000, () => console.log("server on"))
```

結果はpythonのパッケージと同じになります。


## 考察

pythonはデコレータを使って、node.jsはコールバック関数を使ってHTTPリクエストに対する挙動をプログラムしている。  
responderとexpressは両方エンドポイントで用いる関数にrequest, response的なオブジェクトが渡されることになっていたり、そのうちresponse側のオブジェクトで返答を定義するところが似ている。flaskはそういうのが無い。  
あとrequestsとexpressではasync/awaitがサポートされているけど、flaskには無い。でもサーバー側で非同期処理ってどのくらいメリットがあるのか自分は知らない。  
pythonのパッケージはログとかテンプレートエンジンとか諸々最初からサポートされているけど、expressは全部自分で入れていかないといけない。Unix的にはexpressの方が良いパッケージなんだろうが、ちょっとめんどくさい。今回までのセットアップでも若干pythonパッケージの方が便利だった。  
その代わりパフォーマンスは、間違いなくexpressの方が良いはず。
</main>