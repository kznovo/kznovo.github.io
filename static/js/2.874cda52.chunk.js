(window.webpackJsonp=window.webpackJsonp||[]).push([[2,15],{39:function(e,t,n){},45:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),l=n.n(o),s=n(4),i=n.n(s),c=n(13),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var u=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},g=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return n=r=p(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!u(e)){e.preventDefault();var t=r.context.router.history,n=r.props,a=n.replace,o=n.to;a?t.replace(o):t.push(o)}},p(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);i()(this.context.router,"You should not use <Link> outside a <Router>"),i()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,l="string"===typeof t?Object(c.b)(t,null,null,o.location):t,s=o.createHref(l);return a.a.createElement("a",h({},r,{onClick:this.handleClick,href:s,ref:n}))},t}(a.a.Component);g.propTypes={onClick:l.a.func,target:l.a.string,replace:l.a.bool,to:l.a.oneOfType([l.a.string,l.a.object]).isRequired,innerRef:l.a.oneOfType([l.a.string,l.a.func])},g.defaultProps={replace:!1},g.contextTypes={router:l.a.shape({history:l.a.shape({push:l.a.func.isRequired,replace:l.a.func.isRequired,createHref:l.a.func.isRequired}).isRequired}).isRequired},t.a=g},7:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var r=n(8),a=n(9),o=n(11),l=n(10),s=n(12),i=n(0),c=n.n(i),h=n(45),p=(n(39),c.a.lazy(function(){return Promise.all([n.e(0),n.e(23)]).then(n.bind(null,26))})),u=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){document.title="Kznovo - "+this.props.title}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,this.props.title),c.a.createElement("small",null,this.props.date),c.a.createElement("br",null),c.a.createElement("h3",null,"About this project"),c.a.createElement("p",null,"I made this website to practice web development and tech blogging, in both English and Japanese (my first language is Japanese). For those purposes I want to make this website an exciting project where I challenge various engineering problems while having fun blogging about it.",c.a.createElement("br",null),"And this ",c.a.createElement("strong",null,"Blog Project")," series in particular is about this website itself, where I challenge making this website more modern and exciting.",c.a.createElement("br",null),"You can see the source code of this website ",c.a.createElement("a",{href:"https://github.com/kznovo/kznovo.github.io/tree/dev",target:"_blank",rel:"noopener noreferrer"},"here"),"."),c.a.createElement("h3",null,"Main tech/tool choices and develpment style for this project"),c.a.createElement("p",null,"I used ",c.a.createElement("strong",null,"React")," with the help of ",c.a.createElement("strong",null,"create-react-app")," to bootstrap this website. I have experience writing webpack.config before, and had good times with hot reloading etc. that create-react-app doesn't support out of the box, but I just don't want to deal with .babelrc and ecmascript specs myself anymore; I love create-react-app because it just ",c.a.createElement("i",null,"works"),"."),c.a.createElement("p",null,"For ",c.a.createElement("strong",null,"formatting"),", I write most of the css myself except for the code blocks where I use the ",c.a.createElement("a",{href:"https://github.com/akiran/react-highlight",target:"_blank",rel:"noopener noreferrer"},"react-highlight")," npm package. The fonts I use is ",c.a.createElement("a",{href:"https://fonts.google.com/specimen/Pacifico",target:"_blank",rel:"noopener noreferrer"},"Pacifico")," for the title, ",c.a.createElement("a",{href:"https://fonts.google.com/specimen/Merriweather",target:"_blank",rel:"noopener noreferrer"},"Merriweather")," for the body, and ",c.a.createElement("a",{href:"https://fonts.google.com/specimen/Noto+Sans+JP",target:"_blank",rel:"noopener noreferrer"},"Noto Sans JP")," for the Japanese texts. I was amazed by the amount of ",c.a.createElement("a",{href:"https://fonts.googleapis.com/css?family=Noto+Sans+JP",target:"_blank",rel:"noopener noreferrer"},"the font-face properties I have to add to my css for Noto Sans JP"),"."),c.a.createElement("p",null,"I recently learned to ",c.a.createElement("strong",null,"code-split")," using ",c.a.createElement("a",{href:"https://reactjs.org/docs/code-splitting.html#reactlazy",target:"_blank",rel:"noopener noreferrer"},"React.lazy")," + ",c.a.createElement("a",{href:"https://reactjs.org/docs/code-splitting.html#suspense",target:"_blank",rel:"noopener noreferrer"},"React.Suspense"),", which I used in ",c.a.createElement(h.a,{to:"/blog/python-responder-simple-rest-api/"},"my first blog post")," that gets split up into 10 chunks using those technologies. The code blocks using react-highlight tends to become large in size, probably because of the package, and it slowed down the loading time, so I mostly split up the code blocks into separate files. I don't know if it was the best practice, but it loads faster with code-splitting in chrome's slow 3G mode."),c.a.createElement("p",null,"The ",c.a.createElement("strong",null,"directory structure")," of this website is currently very original and chaotic. As of this writing, the blog posts and their url, title, etc. is managed in a single file called ",c.a.createElement("a",{href:"https://github.com/kznovo/kznovo.github.io/blob/dev/src/manage.blog.posts.js",target:"_blank",rel:"noopener noreferrer"},"src/manage.blog.posts.js"),". Aside from ",c.a.createElement(h.a,{to:"/about"},"the about page")," and ",c.a.createElement(h.a,{to:"/"},"the home page"),", all the components are specified through this array of objects and read in ",c.a.createElement("a",{href:"https://github.com/kznovo/kznovo.github.io/blob/dev/src/index.js",target:"_blank",rel:"noopener noreferrer"},"src/index.js"),". I may change the structure heavily in the future."),c.a.createElement("p",null,"I use react classes naively to write blog posts. A single blog post would look like this:"),c.a.createElement(c.a.Suspense,{fallback:"Loading..."},c.a.createElement(p,null)),c.a.createElement("ul",null,c.a.createElement("li",null,"Class component structure allows me to use component lifecycles and states, which may come in handy when I want to write blog posts about topics such as AI where I'd demonstrate the AI model that I'd host in a backend server somewhere and the post will be the client app that interacts with it."),c.a.createElement("li",null,"The title and the date of the post are passed as props to the component at the index page, so the post has access to them to use for setting the document.title and post headers."),c.a.createElement("li",null,"I use componentDidMount() to set the document title."),c.a.createElement("li",null,"For convenience in writing, I reset the indentation to the left in the render."),c.a.createElement("li",null,"There is a directory called ",c.a.createElement("strong",null,"codes")," with all the code blocks I want to handle with code-splitting.")),c.a.createElement("p",null,"For ",c.a.createElement("strong",null,"deployment"),", I chose ",c.a.createElement("a",{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},"GitHub Pages")," for hosting because it's free. I am using the ",c.a.createElement("a",{href:"https://github.com/tschaub/gh-pages",target:"_blank",rel:"noopener noreferrer"},"gh-pages")," npm package to integrate the react app with GitHub Pages. The dev branch is where I develop and write the blog posts, and the main branch is where the gh-pages package pushes the built source in for deployment."),c.a.createElement("h3",null,"TODOs for this project"),c.a.createElement("p",null,"I want to re-engineer some wheels in this project because the primary motivation is to learn how the web works. Only after I tried working with webapck myself I realized how useful create-react-app is; that is why I did not choose a site-generator such as ",c.a.createElement("a",{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"},"Gatsby")," to bootstrap this website, although I am interested in using it in the future after I experienced the problems the tools solve.",c.a.createElement("br",null),"These are some of the things I want to try creating:"),c.a.createElement("ul",null,c.a.createElement("li",null,"Managing tags for blog posts"),c.a.createElement("li",null,"Search capability"),c.a.createElement("li",null,"Accepting comments (backend server + DB integration)"),c.a.createElement("li",null,"RSS"),c.a.createElement("li",null,"Multi language support")),c.a.createElement("p",null,"Also, since GitHub Pages handles some heavy lifting out of the box, I don't get to work with file server related technologies such as configuring Nginx and SSL. I'd love to migrate to AWS or other services in the future where I try those things myself."),c.a.createElement("p",null,"Other tech/tool I want to try using in this website:"),c.a.createElement("ul",null,c.a.createElement("li",null,"Use ",c.a.createElement("a",{href:"https://github.com/developit/htm",target:"_blank",rel:"noopener noreferrer"},"htm")," instead of JSX."),c.a.createElement("li",null,"Host this website on AWS or other hosting services.")))}}]),t}(c.a.Component)}}]);
//# sourceMappingURL=2.874cda52.chunk.js.map