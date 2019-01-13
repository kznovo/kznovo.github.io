(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{235:function(n,e,t){"use strict";t.r(e);var r=t(31);t.d(e,"default",function(){return r.g})},31:function(n,e,t){"use strict";t.d(e,"a",function(){return c}),t.d(e,"b",function(){return s}),t.d(e,"c",function(){return u}),t.d(e,"d",function(){return p}),t.d(e,"e",function(){return i}),t.d(e,"f",function(){return m}),t.d(e,"g",function(){return d});var r=t(0),a=t.n(r),l=t(32),o=t.n(l),c=function(){return a.a.createElement(o.a,{className:"python code"},'\n# server_responder.py\n\nimport responder\n\napi = responder.API()\n\n@api.route("/hello")\nasync def hello(req, resp):\n    resp.text = "Hello World!"\n\nif __name__ == "__main__":\n    api.run(port=3000)\n    ')},s=function(){return a.a.createElement(o.a,{className:"shell code"},"\n$ pipenv run python server_responder.py\nINFO: Started server process [91078]\nINFO: Uvicorn running on http://127.0.0.1:3000 (Press CTRL+C to quit)\n    ")},u=function(){return a.a.createElement(o.a,{className:"shell code"},"\n$ curl localhost:3000/hello\nHello World!$\n    ")},p=function(){return a.a.createElement(o.a,{className:"shell code"},"\nINFO: ('127.0.0.1', 53672) - \"GET /hello HTTP/1.1\" 200\n    ")},i=function(){return a.a.createElement(o.a,{className:"html code"},'\n\x3c!-- templates/page.html --\x3e\n\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title>html page</title>\n  </head>\n  <body>\n    <h1>Hello, {{ name }}!</h1>\n  </body>\n</html>\n    ')},m=function(){return a.a.createElement(o.a,{className:"python code"},'\n# server_responder.py\n\nimport responder\n\napi = responder.API()\n\n@api.route("/hello/{name}")\nasync def hello(req, resp, *, name):\n    resp.content = api.template("page.html", name=name)\n\nif __name__ == "__main__":\n    api.run(port=3000)\n    ')},d=function(){return a.a.createElement(o.a,{className:"shell code"},'\n$ curl localhost:3000/hello/kazuya\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title>html page</title>\n  </head>\n  <body>\n    <h1>Hello, kazuya!</h1>\n  </body>\n</html>$\n    ')}}}]);
//# sourceMappingURL=code7.f66af47f.chunk.js.map