"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[9229],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?n.createElement(f,a(a({ref:r},p),{},{components:t})):n.createElement(f,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5512:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:1.3},c="Providers",l={unversionedId:"tools/erc725js/providers",id:"tools/erc725js/providers",title:"Providers",description:"The provider by which @erc725/erc725.js will request blockchain data is set on",source:"@site/docs/tools/erc725js/providers.md",sourceDirName:"tools/erc725js",slug:"/tools/erc725js/providers",permalink:"/tools/erc725js/providers",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/erc725js/providers.md",tags:[],version:"current",sidebarPosition:1.3,frontMatter:{sidebar_position:1.3},sidebar:"toolsSidebar",previous:{title:"Schemas",permalink:"/tools/erc725js/schemas"},next:{title:"Writing Data",permalink:"/tools/erc725js/writing-data"}},p=[{value:"Web3",id:"web3",children:[],level:2},{value:"Ethereum (MetaMask)",id:"ethereum-metamask",children:[],level:2}],u={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"providers"},"Providers"),(0,i.kt)("p",null,"The provider by which ",(0,i.kt)("inlineCode",{parentName:"p"},"@erc725/erc725.js")," will request blockchain data is set on\nthe instantiation of the class, through the configuration object."),(0,i.kt)("p",null,"The following provider types are supported:"),(0,i.kt)("h2",{id:"web3"},"Web3"),(0,i.kt)("p",null,"This will use the web3 provider available at web3.providers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import Web3 from 'web3';\n\nconst web3provider = new Web3(\n  new Web3.providers.HttpProvider('https://rpc.l14.lukso.network'),\n);\n")),(0,i.kt)("h2",{id:"ethereum-metamask"},"Ethereum (MetaMask)"),(0,i.kt)("p",null,"This is the provider available at ",(0,i.kt)("inlineCode",{parentName:"p"},"window.ethereum")," injected into a\ncompatible web browser from the ",(0,i.kt)("a",{parentName:"p",href:"https://metamask.io/"},"Metamask plugin"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const ethereumProvider = window.ethereum;\n")))}d.isMDXComponent=!0}}]);