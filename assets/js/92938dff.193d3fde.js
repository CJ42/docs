"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[1025],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return p}});var t=r(7294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(r),p=s,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||a;return r?t.createElement(m,o(o({ref:n},c),{},{components:r})):t.createElement(m,o({ref:n},c))}));function p(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8215:function(e,n,r){var t=r(7294);n.Z=function(e){var n=e.children,r=e.hidden,s=e.className;return t.createElement("div",{role:"tabpanel",hidden:r,className:s},n)}},5064:function(e,n,r){r.d(n,{Z:function(){return f}});var t=r(7462),s=r(7294),a=r(2389),o=r(9443);var i=function(){var e=(0,s.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(3039),u=r(6010),c="tabItem_1uMI";function d(e){var n,r,t,a=e.lazy,o=e.block,d=e.defaultValue,f=e.values,p=e.groupId,m=e.className,b=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),y=(0,l.lx)(v,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?n:null==(t=b[0])?void 0:t.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=i(),S=h.tabGroupChoices,E=h.setTabGroupChoices,P=(0,s.useState)(g),A=P[0],w=P[1],k=[],I=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=S[p];null!=O&&O!==A&&v.some((function(e){return e.value===O}))&&w(O)}var N=function(e){var n=e.currentTarget,r=k.indexOf(n),t=v[r].value;t!==A&&(I(n),w(t),null!=p&&E(p,t))},R=function(e){var n,r=null;switch(e.key){case"ArrowRight":var t=k.indexOf(e.currentTarget)+1;r=k[t]||k[0];break;case"ArrowLeft":var s=k.indexOf(e.currentTarget)-1;r=k[s]||k[k.length-1]}null==(n=r)||n.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},m)},v.map((function(e){var n=e.value,r=e.label;return s.createElement("li",{role:"tab",tabIndex:A===n?0:-1,"aria-selected":A===n,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":A===n}),key:n,ref:function(e){return k.push(e)},onKeyDown:R,onFocus:N,onClick:N},null!=r?r:n)}))),a?(0,s.cloneElement)(b.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==A})}))))}function f(e){var n=(0,a.Z)();return s.createElement(d,(0,t.Z)({key:String(n)},e))}},9443:function(e,n,r){var t=(0,r(7294).createContext)(void 0);n.Z=t},4212:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return f},default:function(){return m}});var t=r(7462),s=r(3366),a=(r(7294),r(3905)),o=r(5064),i=r(8215),l=["components"],u={sidebar_label:"Giving Permissions to addresses",sidebar_position:2.3},c="Giving permissions to addresses",d={unversionedId:"guides/key-manager/giving-permissions",id:"guides/key-manager/giving-permissions",isDocsHomePage:!1,title:"Giving permissions to addresses",description:"The Key Manager (KM) enables you to give permissions to other addresses, so they can edit data on your Universal Profile (UP) or interact with it on your behalf. In this section, we will see how to set up these permissions.",source:"@site/docs/guides/key-manager/03-giving-permissions.md",sourceDirName:"guides/key-manager",slug:"/guides/key-manager/giving-permissions",permalink:"/guides/key-manager/giving-permissions",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/key-manager/03-giving-permissions.md",tags:[],version:"current",sidebarPosition:2.3,frontMatter:{sidebar_label:"Giving Permissions to addresses",sidebar_position:2.3},sidebar:"guidesSidebar",previous:{title:"Interact with other contracts",permalink:"/guides/universal-profile/interact-with-contracts"},next:{title:"Create a LSP7 Digital Asset (Token)",permalink:"/guides/create-lsp7-digital-asset"}},f=[],p={toc:f};function m(e){var n=e.components,r=(0,s.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"giving-permissions-to-addresses"},"Giving permissions to addresses"),(0,a.kt)("p",null,"The Key Manager (KM) enables you to give permissions to other addresses, so they can edit data on your Universal Profile (UP) or interact with it on your behalf. In this section, we will see how to set up these permissions."),(0,a.kt)("p",null,"Below is a list of ERC725Y Permission Keys related to the Key Manager.\nWe will store these values in a file ",(0,a.kt)("inlineCode",{parentName:"p"},"constants.js"),", and reuse them through the next code snippets."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="constants.js"',title:'"constants.js"'},'// keccak256(\'AddressPermissions[]\')\nconst PERMISSIONS_ARRAY =\n  \'0xdf30dba06db6a30e65354d9a64c609861f089545ca58c6b4dbe31a5f338cb0e3\';\n\n// prettier-ignore\nconst ADDRESSES = {\n  PERMISSIONS:      "0x4b80742d0000000082ac0000", // AddressPermissions:Permissions:<address> --\x3e bytes32\n  ALLOWEDADDRESSES: "0x4b80742d00000000c6dd0000", // AddressPermissions:AllowedAddresses:<address> --\x3e address[]\n  ALLOWEDFUNCTIONS: "0x4b80742d000000008efe0000", // AddressPermissions:AllowedFunctions:<address> --\x3e bytes4[]\n}\n\n// prettier-ignore\nconst PERMISSIONS = {\n  CHANGEOWNER:      "0x0000000000000000000000000000000000000000000000000000000000000001", // 0000 0000 0000 0001\n  CHANGEPERMISSIONS:"0x0000000000000000000000000000000000000000000000000000000000000002", // .... .... .... 0010\n  ADDPERMISSIONS:   "0x0000000000000000000000000000000000000000000000000000000000000004", // .... .... .... 0100\n  SETDATA:          "0x0000000000000000000000000000000000000000000000000000000000000008", // .... .... .... 1000\n  CALL:             "0x0000000000000000000000000000000000000000000000000000000000000010", // .... .... 0001 ....\n  STATICCALL:       "0x0000000000000000000000000000000000000000000000000000000000000020", // .... .... 0010 ....\n  DELEGATECALL:     "0x0000000000000000000000000000000000000000000000000000000000000040", // .... .... 0100 ....\n  DEPLOY:           "0x0000000000000000000000000000000000000000000000000000000000000080", // .... .... 1000 ....\n  TRANSFERVALUE:    "0x0000000000000000000000000000000000000000000000000000000000000100", // .... 0001 .... ....\n  SIGN:             "0x0000000000000000000000000000000000000000000000000000000000000200", // .... 0010 .... ....\n}\n\nmodule.exports = {\n  ADDRESSES,\n  PERMISSIONS,\n  PERMISSIONS_ARRAY,\n};\n')),(0,a.kt)("p",null,"The code snippets below show how to set permissions for ",(0,a.kt)("strong",{parentName:"p"},"Bob")," on a Universal Profile owned by ",(0,a.kt)("inlineCode",{parentName:"p"},"yourEOA"),".\nIt assumes that the profile has been deployed with our ",(0,a.kt)("a",{parentName:"p",href:"https://docs.lukso.tech/tools/lsp-factoryjs/introduction/getting-started.md"},"lsp-factory.js")," tool."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"web3js",label:"web3.js",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// see file above constants.js\nimport { ADDRESSES, PERMISSIONS, PERMISSIONS_ARRAY } from './constants';\n\nimport UniversalProfile from '@lukso/universalprofile-smart-contracts/build/artifacts/UniversalProfile.json';\nimport KeyManager from '@lukso/universalprofile-smart-contracts/build/artifacts/KeyManager.json';\n\nconst universalProfile = new web3.eth.Contract(\n  UniversalProfile.abi,\n  '<your-UniversalProfile-address>',\n);\nconst keyManager = new web3.eth.Contract(\n  KeyManager.abi,\n  '<your-KeyManager-Address>',\n);\n\nlet bobAddress = '0xcafecafecafecafecafecafecafecafecafecafe';\nlet bobPermissions = PERMISSIONS.SETDATA;\n\n// give the permission SETDATA to Bob\nasync function setBobPermission() {\n  let payload = await universalProfile.methods\n    .setData(\n      [\n        KEYS.PERMISSIONS + bobAddress.substr(2), // allow Bob to setData on your UP\n        KEYS.PERMISSIONS_ARRAY, // length of AddressPermissions[]\n        KEYS.PERMISSIONS_ARRAY.slice(0, 34) +\n          '00000000000000000000000000000001', // add Bob's address into the list of permissions\n      ],\n      [\n        bobPermissions,\n        3, // 3 because UP owner + Universal Receiver Delegate permission have already been set by lsp-factory\n        bobAddress,\n      ],\n    )\n    .encodeABI();\n\n  keyManager\n    .execute(payload)\n    .send({ from: '<your-eoa-address>', gas: 300_000 });\n}\n\nsetBobPermission();\n"))),(0,a.kt)(i.Z,{value:"etherjs",label:"ether.js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// see file above constants.js\nimport { ADDRESSES, PERMISSIONS, PERMISSIONS_ARRAY } from './constants';\n\nimport UniversalProfile from '@lukso/universalprofile-smart-contracts/build/artifacts/UniversalProfile.json';\nimport KeyManager from '@lukso/universalprofile-smart-contracts/build/artifacts/KeyManager.json';\n\nconst universalProfile = new ethers.Contract(\n  '<your-UniversalProfile-address>',\n  UniversalProfile.abi,\n);\nconst keyManager = new ethers.Contract(\n  '<your-KeyManager-Address>',\n  KeyManager.abi,\n);\n\nlet bobAddress = '0xcafecafecafecafecafecafecafecafecafecafe';\nlet bobPermissions = ethers.utils.hexZeroPad(PERMISSIONS.SETDATA, 32);\n\n// give the permission SETDATA to Bob\nasync function setBobPermission() {\n  let payload = universalProfile.interface.encodeFunctionData('setData', [\n    [\n      KEYS.PERMISSIONS + bobAddress.substr(2),\n      KEYS.PERMISSIONS_ARRAY, // length of AddressPermissions[]\n      KEYS.PERMISSIONS_ARRAY.slice(0, 34) + '00000000000000000000000000000001', // add Bob's address into the list of\n    ],\n    [\n      bobPermissions,\n      3, // 3 because UP owner + Universal Receiver Delegate permission have already been set by lsp-factory\n      bobAddress,\n    ],\n  ]);\n\n  await keyManager.connect(yourEOA).execute(payload); // yourEOA should be of type Signer\n}\n\nsetBobPermission();\n")))))}m.isMDXComponent=!0}}]);