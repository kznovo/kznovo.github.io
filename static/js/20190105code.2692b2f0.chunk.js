(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{228:function(n,e,o){"use strict";o.r(e);var t=o(0),s=o.n(t),a=o(32),c=o.n(a);o(33);e.default=function(){return s.a.createElement(c.a,{className:"javascript code"},'\nimport React from "react";\nimport "../Blog.css";\n\nconst CodeBlock1 = React.lazy(() => import("./codes/CodeBlock1"));\n\nexport default class Post20XXXXXX extends React.Component {\n\n  componentDidMount() {\n    document.title = "Kznovo - " + this.props.title;\n  }\n\n  render() {\n    return (\n\n<>\n\n<h2>{this.props.title}</h2>\n<small>{this.props.date}</small>\n\n{/* blog body */}\n\n<React.Suspense fallback="Loading...">\n  <CodeBlock1/>\n</React.Suspense>\n\n{/* more blog body */}\n\n</>\n\n    );\n  }\n}\n    ')}}}]);
//# sourceMappingURL=20190105code.2692b2f0.chunk.js.map