"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8889],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(f,s(s({ref:n},c),{},{components:t})):a.createElement(f,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(3117),r=t(7294),o=t(2389),s=t(9443);var l=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(6681),u=t(6010),c="tabItem_1uMI";function d(e){var n,t,o,s=e.lazy,d=e.block,p=e.defaultValue,m=e.values,f=e.groupId,y=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,i.lx)(v,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=b[0])?void 0:o.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=l(),P=h.tabGroupChoices,w=h.setTabGroupChoices,T=(0,r.useState)(g),O=T[0],j=T[1],x=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var N=P[f];null!=N&&N!==O&&v.some((function(e){return e.value===N}))&&j(N)}var S=function(e){var n=e.currentTarget,t=x.indexOf(n),a=v[t].value;a!==O&&(E(n),j(a),null!=f&&w(f,a))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;t=x[r]||x[x.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},y)},v.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:S,onClick:S},o,{className:(0,u.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function p(e){var n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},7525:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),s=t(6396),l=t(8215),i=["components"],u={sidebar_label:"Create a LSP7 Digital Asset (Token)",sidebar_position:2.4},c="Create a LSP7 Digital Asset (Token)",d={unversionedId:"guides/create-lsp7-digital-asset",id:"guides/create-lsp7-digital-asset",title:"Create a LSP7 Digital Asset (Token)",description:"In this guide, we will learn how to create our own token (known as LSP7 Digital Asset) and transfer it between Universal Profiles (UP).",source:"@site/docs/guides/create-lsp7-digital-asset.md",sourceDirName:"guides",slug:"/guides/create-lsp7-digital-asset",permalink:"/guides/create-lsp7-digital-asset",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/create-lsp7-digital-asset.md",tags:[],version:"current",sidebarPosition:2.4,frontMatter:{sidebar_label:"Create a LSP7 Digital Asset (Token)",sidebar_position:2.4},sidebar:"guidesSidebar",previous:{title:"Giving Permissions to addresses",permalink:"/guides/key-manager/giving-permissions"}},p=[{value:"Deploy a LSP7 Digital Asset contract",id:"deploy-a-lsp7-digital-asset-contract",children:[],level:2},{value:"Mint tokens for your Universal Profile",id:"mint-tokens-for-your-universal-profile",children:[],level:2},{value:"Transfer tokens to an other Universal Profile",id:"transfer-tokens-to-an-other-universal-profile",children:[],level:2}],m={toc:p};function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-lsp7-digital-asset-token"},"Create a LSP7 Digital Asset (Token)"),(0,o.kt)("p",null,"In this guide, we will learn how to create our own token (known as ",(0,o.kt)("a",{parentName:"p",href:"../standards/nft-2.0/lsp7-digital-asset"},"LSP7 Digital Asset"),") and transfer it between Universal Profiles (UP)."),(0,o.kt)("h2",{id:"deploy-a-lsp7-digital-asset-contract"},"Deploy a LSP7 Digital Asset contract"),(0,o.kt)("p",null,"We will use a specific implementation of LSP7, called ",(0,o.kt)("inlineCode",{parentName:"p"},"LSP7Mintable"),". It allows the contract deployer to mint new tokens."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP7Mintable from '@lukso/universalprofile-smart-contracts/artifacts/LSP7Mintable.json';\n\nconst myEOA = '<address-of-up-owner>';\nconst tokenParams = [\n  'My LSP7 Token', // token name\n  'LSP7', // token symbol\n  myEOA, // new owner\n  false, // isNFT (make your token divisible or not)\n];\n\n// create an instance\nconst myToken = new web3.eth.Contract(LSP7Mintable.abi, {\n  gas: 5_000_000,\n  gasPrice: '1000000000',\n});\n\n// deploy the token contract\nawait myToken\n  .deploy({ data: LSP7Mintable.bytecode, arguments: tokenParams })\n  .send({ from: myEOA });\n"))),(0,o.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import LSP7Mintable from '@lukso/universalprofile-smart-contracts/artifacts/LSP7Mintable.json';\n\nconst myEOA = '<address-of-up-owner>';\nconst tokenParams = [\n  'My LSP7 Token', // token name\n  'LSP7', // token symbol\n  myEOA, // new owner\n  false, // isNFT (make your token divisible or not)\n];\n\n// deploy + create an instance of the token contract\nconst lsp7Factory = await ethers.getContractFactory('LSP7Mintable');\nconst myToken = await lsp7Factory.deploy(tokenParams);\n")))),(0,o.kt)("h2",{id:"mint-tokens-for-your-universal-profile"},"Mint tokens for your Universal Profile"),(0,o.kt)("p",null,"The code snippet below shows how to mint 100 tokens with your Universal Profile as a beneficiary."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"await myToken.methods\n  .mint('<up-address>', 100, false, '0x')\n  .send({ from: myEOA });\n"))),(0,o.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"await myToken.connect(myEOA).mint('<up-address>', 100, false, '0x');\n")))),(0,o.kt)("h2",{id:"transfer-tokens-to-an-other-universal-profile"},"Transfer tokens to an other Universal Profile"),(0,o.kt)("p",null,"The following code snippet show how to transfer 15 tokens from your UP to another UP called ",(0,o.kt)("inlineCode",{parentName:"p"},"bobUP"),"."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const bobUP = '<bob-up-address>';\nconst amount = 15;\n\n// 1. generate the payload to transfer tokens\nconst tokenPayload = myToken.methods\n  .transfer('<up-address>', bobUP, amount, false, '0x')\n  .encodeABI();\n\n// 2. generate payload for Universal Profile to execute the token transfer on the token contract\nconst upPayload = myUniversalProfile.methods\n  .execute(0, myToken._address, 0, tokenPayload)\n  .encodeABI();\n\n// 3. execute via the KeyManager\nawait myKeyManager.methods.execute(upPayload).send({\n  from: myEOA,\n  gas: 5_000_000,\n  gasPrice: '1000000000',\n});\n"))),(0,o.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const bobUP = '<bob-up-address>';\nconst amount = 15;\n\n// 1. generate the payload to transfer tokens\nconst tokenPayload = myToken.interface.encodeFunctionData('transfer', [\n  '<up-address>',\n  bobUP,\n  amount,\n  false,\n  '0x',\n]);\n\n// 2. generate payload for Universal Profile to execute the token transfer on the token contract\nconst upPayload = myUniversalProfile.interface.encodeFunctionData('execute', [\n  0,\n  myToken._address,\n  0,\n  tokenPayload,\n]);\n\n// 3. execute via the KeyManager\nawait myKeyManager.connect(myEOA).execute(upPayload, ({\n  from: myEOA.address,\n  gas: 5_000_000,\n  gasPrice: '1000000000',\n});\n")))))}f.isMDXComponent=!0}}]);