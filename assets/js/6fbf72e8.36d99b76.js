"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[5031],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7462),r=a(7294),o=a(2389),i=a(9443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(3039),c=a(6010),u="tabItem_1uMI";function d(e){var t,a,n,o=e.lazy,i=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=h[0])?void 0:n.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),w=g.tabGroupChoices,N=g.setTabGroupChoices,b=(0,r.useState)(k),C=b[0],P=b[1],x=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=w[m];null!=j&&j!==C&&v.some((function(e){return e.value===j}))&&P(j)}var U=function(e){var t=e.currentTarget,a=x.indexOf(t),n=v[a].value;n!==C&&(T(t),P(n),null!=m&&N(m,n))},O=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;a=x[n]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;a=x[r]||x[x.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},f)},v.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":C===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:U,onClick:U},null!=a?a:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},7679:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(5064),l=a(8215),s=["components"],c={sidebar_label:"Create a Universal Profile",sidebar_position:2.2},u="Create a Universal Profile",d={unversionedId:"standards/getting-started/create-universal-profile",id:"standards/getting-started/create-universal-profile",isDocsHomePage:!1,title:"Create a Universal Profile",description:"We recommend using our lsp-factory.js tool. It is the easiest way to get started with Universal Profile. It will deploy your UP + make all the setup for you.",source:"@site/docs/standards/getting-started/01-create-universal-profile.md",sourceDirName:"standards/getting-started",slug:"/standards/getting-started/create-universal-profile",permalink:"/standards/getting-started/create-universal-profile",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/getting-started/01-create-universal-profile.md",tags:[],version:"current",sidebarPosition:2.2,frontMatter:{sidebar_label:"Create a Universal Profile",sidebar_position:2.2},sidebar:"standardsSidebar",previous:{title:"Setup",permalink:"/standards/getting-started/getting-started"},next:{title:"Add control with a Key Manager",permalink:"/standards/getting-started/add-key-manager"}},p=[{value:"Deploy your Universal Profile",id:"deploy-your-universal-profile",children:[],level:2},{value:"Create an instance",id:"create-an-instance",children:[],level:2},{value:"Interact with your UP",id:"interact-with-your-up",children:[{value:"Add / Edit your <code>LSP3Profile</code> metadata",id:"add--edit-your-lsp3profile-metadata",children:[],level:3},{value:"Set data in the key-value store",id:"set-data-in-the-key-value-store",children:[],level:3},{value:"Transfer LYX",id:"transfer-lyx",children:[],level:3},{value:"Interact with other contracts",id:"interact-with-other-contracts",children:[],level:3}],level:2}],m={toc:p};function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-universal-profile"},"Create a Universal Profile"),(0,o.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Useful Tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We recommend using our ",(0,o.kt)("a",{parentName:"p",href:"/tools/lsp-factoryjs/introduction/getting-started"},"lsp-factory.js")," tool. It is the easiest way to get started with Universal Profile. It will deploy your UP + make all the setup for you."))),(0,o.kt)("h2",{id:"deploy-your-universal-profile"},"Deploy your Universal Profile"),(0,o.kt)("p",null,"Our ",(0,o.kt)("a",{parentName:"p",href:"/tools/lsp-factoryjs/introduction/getting-started"},"lsp-factory.js tool")," let you easily deploy a Universal Profile with just few lines of code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { LSPFactory } = require("@lukso/lsp-factory.js");\n\nconst lspFactory = new LSPFactory(\n  provider.connection.url, // https://rpc.l14.lukso.network\n  {\n    deployKey: \'0x...\'; // Private key of the account which will deploy the UP,\n    chainId: 22, // chain Id of the L14 network\n  }\n);\n\n// Deploy UniversalProfile + KeyManager + UniversalReceiverDelegate\nconst myContracts = await lspFactory.LSP3UniversalProfile.deploy({\n    controllingAccounts: ["0x..."], // Address which will controll the UP\n    lsp3Profile: {\n        name: "My Universal Profile",\n        description: "My cool Universal Profile",\n        links: [{ title: "My Website", url: "www.my-website.com" }],\n    },\n});\n\nconst myUPAddress = myContracts.ERC725Account.address;\n')),(0,o.kt)("h2",{id:"create-an-instance"},"Create an instance"),(0,o.kt)("p",null,"You can then create an instance of your UP ready to interact with."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import UniversalProfile from '@lukso/universalprofile-smart-contracts/artifacts/UniversalProfile.json';\n\nconst myUP = new web3.eth.Contract(UniversalProfile.abi, myUPAddress);\n"))),(0,o.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import UniversalProfile from '@lukso/universalprofile-smart-contracts/artifacts/UniversalProfile.json';\n\nconst myUP = new ethers.Contract(myUPAddress, UniversalProfile.abi);\n")))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"interact-with-your-up"},"Interact with your UP"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have deployed your UP with ",(0,o.kt)("a",{parentName:"p",href:"/tools/lsp-factoryjs/introduction/getting-started"},"lsp-factory.js"),", your UP is deployed with a KeyManager attached to it.\nPlease head over ",(0,o.kt)("a",{parentName:"p",href:"/standards/getting-started/add-key-manager"},(0,o.kt)("em",{parentName:"a"},"Interact via the Key Manager"))," in the next page."))),(0,o.kt)("h3",{id:"add--edit-your-lsp3profile-metadata"},"Add / Edit your ",(0,o.kt)("inlineCode",{parentName:"h3"},"LSP3Profile")," metadata"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have deployed your UP with ",(0,o.kt)("a",{parentName:"p",href:"/tools/lsp-factoryjs/introduction/getting-started"},"lsp-factory.js"),", you can skip this section. Your profile details were already setup on deployment :)"))),(0,o.kt)("p",null,"You can add details to your Universal Profile (or edit existing details) by adding / updating the LSP3Profile metadata."),(0,o.kt)("p",null,"This take the form of a JSON file on stored on ipfs, where your Universal Profile refers to."),(0,o.kt)("p",null,"You can do so in 3 steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"upload the JSON file to IPFS (via lsp-factory, or manually)"),(0,o.kt)("li",{parentName:"ol"},"encode the JSON file (our ",(0,o.kt)("inlineCode",{parentName:"li"},"erc725.js")," tool provide convenience for this)"),(0,o.kt)("li",{parentName:"ol"},"set your new ",(0,o.kt)("inlineCode",{parentName:"li"},"LSP3Profile")," metadata in your profile.")),(0,o.kt)("h3",{id:"set-data-in-the-key-value-store"},"Set data in the key-value store"),(0,o.kt)("p",null,"Below is a basic example of how to set any key-value pair in the storage of your Universal Profile."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const key = web3.utils.keccak256('MyFirstKey');\nconst value = web3.utils.stringToHex('Hello LUKSO!');\n\nawait myUp.methods.setData([key], [value], { from: '<address-of-up-owner>' });\n"))),(0,o.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const key = ethers.utils.keccak256('MyFirstKey');\nconst value = ethers.utils.hexlify(ethers.utils.toUtf8Bytes('Hello LUKSO!'));\n\n// upOwner should be of type SignerWithAddress\nawait myUp.connect(upOwner).setData([key], [value]);\n")))),(0,o.kt)("h3",{id:"transfer-lyx"},"Transfer LYX"),(0,o.kt)("p",null,"You can transfer LYX from your Universal Profile to any ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," via the ",(0,o.kt)("inlineCode",{parentName:"p"},".execute(...)")," function."),(0,o.kt)("p",null,"The parameters of the function will be as follow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_operation"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," (for ",(0,o.kt)("inlineCode",{parentName:"li"},"CALL"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_to"),": the ",(0,o.kt)("inlineCode",{parentName:"li"},"address")," you want to send LYX to (Externally Owned Account or contract address)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_value"),": the amount of LYX you want to transfer (in Wei)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_data"),": empty payload (",(0,o.kt)("inlineCode",{parentName:"li"},"0x"),")")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const OPERATION_CALL = 0;\nconst recipient = '0xcafecafecafecafecafecafecafecafecafecafe';\nconst amount = web3.utils.toWei('3');\n// payload executed at the target. Here nothing (just a plain LYX transfer)\nconst data = '0x';\n\nawait myUp.methods.execute(OPERATION_CALL, recipient, amount, data, {\n  from: '<address-of-up-owner>',\n});\n"))),(0,o.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const OPERATION_CALL = 0;\nconst recipient = '0xcafecafecafecafecafecafecafecafecafecafe';\nconst amount = web3.utils.toWei('3');\n// payload executed at the target. Here nothing (just a plain LYX transfer)\nconst data = '0x';\n\nawait myUp.connect(upOwner).execute(OPERATION_CALL, recipient, amount, data);\n")))),(0,o.kt)("p",null,"As you can see from the code snippet above, transferring LYX from a Universal Profile is as simple as making a standard contract ",(0,o.kt)("inlineCode",{parentName:"p"},"CALL"),", with some ",(0,o.kt)("inlineCode",{parentName:"p"},"_value")," attached to the contract call. Since we are just making a simple LYX transfer, the fourth parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"_data")," should be empty."),(0,o.kt)("h3",{id:"interact-with-other-contracts"},"Interact with other contracts"),(0,o.kt)("p",null,"We have seen in the previous example how to send LYX from your UP via the ",(0,o.kt)("inlineCode",{parentName:"p"},".execute")," function."),(0,o.kt)("p",null,"This function offers a fourth parameter: ",(0,o.kt)("inlineCode",{parentName:"p"},"_data"),", that provides a lot of flexibility when interacting from your UP. The ",(0,o.kt)("inlineCode",{parentName:"p"},"_data")," parameter is especially useful when the ",(0,o.kt)("inlineCode",{parentName:"p"},"_to")," recipient is a smart contract."),(0,o.kt)("p",null,"To make your UP call a function on a specific contract deployed on the network, the parameters of the ",(0,o.kt)("inlineCode",{parentName:"p"},".execute")," function will be as follow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_operation"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," (for ",(0,o.kt)("inlineCode",{parentName:"li"},"CALL"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_to"),": the ",(0,o.kt)("inlineCode",{parentName:"li"},"address")," of the smart contract you want to interact with."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_value_"),": empty (0)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_data"),": the abi-encoded function name + arguments, to to be run at the ",(0,o.kt)("inlineCode",{parentName:"li"},"_to")," contract address."),(0,o.kt)("li",{parentName:"ul"},"Let's imagine a smart contract ",(0,o.kt)("inlineCode",{parentName:"li"},"targetContract")," deployed on the network. You want your UP to call the function ",(0,o.kt)("inlineCode",{parentName:"li"},"myCoolFunction")," on this contract. You will have to:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"abi-encode the function call with the parameters you want to pass."),(0,o.kt)("li",{parentName:"ol"},"pass this payload as the fourth argument ",(0,o.kt)("inlineCode",{parentName:"li"},"_data")," of the ",(0,o.kt)("inlineCode",{parentName:"li"},".execute")," function.")),(0,o.kt)("p",null,"The code snippets below show you how to do this."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"web3js",label:"web3.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const OPERATION_CALL = 0;\n\n// assuming targetContract is a Contract instance\nconst abi = targetContract.methods.myCoolfunction('dummyParameter').encodeABI();\n\n// do something on another Smart Contract\nawait myUp.methods.execute(\n  OPERATION_CALL,\n  targetContract.address,\n  0,\n  abi\n  {\n    from: '<address-of-up-owner>',\n  },\n);\n"))),(0,o.kt)(l.Z,{value:"ethersjs",label:"ethers.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const OPERATION_CALL = 0;\n\n// assuming targetContract is a Contract instance\nconst abi = targetContract.methods.myCoolfunction('dummyParameter').encodeABI();\n\n// do something on another Smart Contract\nawait myUp\n  .connect(upOwner)\n  .execute(OPERATION_CALL, targetContract.address, 0, abi);\n")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.10/abi-spec.html#function-selector-and-argument-encoding"},"Solidity docs")," for more infos on function + arguments encoding."))))}f.isMDXComponent=!0}}]);