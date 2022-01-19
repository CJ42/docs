"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[67],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return f}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),l=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),m=l(a),f=r,u=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return a?n.createElement(u,o(o({ref:e},d),{},{components:a})):n.createElement(u,o({ref:e},d))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9394:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=["components"],s={title:"Interfaces Ids",sidebar_position:10},c="Interfaces Ids",l={unversionedId:"standards/smart-contracts/interface-ids",id:"standards/smart-contracts/interface-ids",title:"Interfaces Ids",description:"Interfaces Ids helps to check if a contract supports a specific interface, it's a meta-interface so to say. This is useful if we want to interact with a contract but we don't know if it supports an interface such as ERC725Y or LSP1UniversalReceiver, etc.",source:"@site/docs/standards/smart-contracts/interface-ids.md",sourceDirName:"standards/smart-contracts",slug:"/standards/smart-contracts/interface-ids",permalink:"/standards/smart-contracts/interface-ids",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/smart-contracts/interface-ids.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Interfaces Ids",sidebar_position:10},sidebar:"standardsSidebar",previous:{title:"LSP1 Universal Receiver Delegate Vault",permalink:"/standards/smart-contracts/lsp1-universal-receiver-delegate-vault"},next:{title:"Multi-channel nonces",permalink:"/standards/faq/channel-nonce"}},d=[],p={toc:d};function m(t){var e=t.components,a=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interfaces-ids"},"Interfaces Ids"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Interfaces Ids")," helps to check if a contract supports a specific interface, it's a meta-interface so to say. This is useful if we want to interact with a contract but we don't know if it supports an interface such as ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y"},"ERC725Y"))," or ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md"},"LSP1UniversalReceiver")),", etc."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"supportsInterface")," function from ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-165"},"ERC165 Standard"))," returns ",(0,i.kt)("strong",{parentName:"p"},"TRUE")," if the standard is supported, ",(0,i.kt)("strong",{parentName:"p"},"FALSE")," otherwise."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Interface Ids are not the best secure way to ensure that a contract implements specific functions as its manually set and could be set by anyone to any value."))))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Contract"),(0,i.kt)("th",{parentName:"tr",align:"left"},"InterfaceId"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"ERC725X")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x44c028fe")),(0,i.kt)("td",{parentName:"tr",align:"left"},"General executor.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"ERC725Y")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x5a988c0f")),(0,i.kt)("td",{parentName:"tr",align:"left"},"General key-value store.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"LSP1UniversalReceiver")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x6bb56a14")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Universal Receiver entry function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"ERC1271")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x1626ba7e")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Standard Signature Validation Method for Contracts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"LSP0ERC725Account")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x63cb749b")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Account that represent an identity on-chain")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"LSP6KeyManager")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x6f4df48b")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Controller for the ERC725Account.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"LSP1UniversalReceiverDelegate")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0xc2d7bcc1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Universal Receiver delegated to an other smart contract.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"LSP7DigitalAsset")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0xe33f65c3")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Digital Assets either fungible or non-fungible. ",(0,i.kt)("em",{parentName:"td"},"ERC20 A-like"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"LSP8IdentifiableDigitalAsset")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x49399145")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Identifiable Digital Assets (NFT). ",(0,i.kt)("em",{parentName:"td"},"ERC721 A-like"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"LSP9Vault")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x75edcee5")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Vault that could interact with other smart contracts and hold assets.")))))}m.isMDXComponent=!0}}]);