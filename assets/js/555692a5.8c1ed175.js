"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[4038],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return f}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(a),f=r,k=c["".concat(s,".").concat(f)]||c[f]||m[f]||i;return a?n.createElement(k,l(l({ref:e},d),{},{components:a})):n.createElement(k,l({ref:e},d))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5904:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={sidebar_position:3,title:"LSP7DigitalAsset"},s="LSP7DigitalAsset",p={unversionedId:"tools/lsp-factoryjs/classes/lsp7-digital-asset",id:"tools/lsp-factoryjs/classes/lsp7-digital-asset",title:"LSP7DigitalAsset",description:"deploy",source:"@site/docs/tools/lsp-factoryjs/classes/lsp7-digital-asset.md",sourceDirName:"tools/lsp-factoryjs/classes",slug:"/tools/lsp-factoryjs/classes/lsp7-digital-asset",permalink:"/tools/lsp-factoryjs/classes/lsp7-digital-asset",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/lsp-factoryjs/classes/lsp7-digital-asset.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"LSP7DigitalAsset"},sidebar:"toolsSidebar",previous:{title:"LSP4DigitalAssetMetadata",permalink:"/tools/lsp-factoryjs/classes/lsp4-digital-asset-metadata"},next:{title:"LSP8IdentifiableDigitalAsset",permalink:"/tools/lsp-factoryjs/classes/lsp8-identifiable-digital-asset"}},d={},m=[{value:"deploy",id:"deploy",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Parameters of <code>digitalAssetDeploymentOptions</code>",id:"parameters-of-digitalassetdeploymentoptions",level:4},{value:"Returns",id:"returns",level:4},{value:"Deployment of LSP7 Digital Asset Example",id:"deployment-of-lsp7-digital-asset-example",level:4},{value:"Deployment of Reactive LSP7 Digital Asset Example",id:"deployment-of-reactive-lsp7-digital-asset-example",level:4}],c={toc:m};function f(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lsp7digitalasset"},"LSP7DigitalAsset"),(0,i.kt)("h2",{id:"deploy"},"deploy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"lspFactory.LSP7DigitalAsset.deploy(\n  digitalAssetDeploymentOptions,\n  contractDeploymentOptions?\n);\n")),(0,i.kt)("p",null,"Deploys a mintable ",(0,i.kt)("a",{parentName:"p",href:"../../../standards/nft-2.0/LSP7-Digital-Asset"},"LSP7 Digital Asset"),"."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"digitalAssetDeploymentOptions")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ",(0,i.kt)("a",{parentName:"td",href:"../../../../../standards/smart-contracts/lsp7-digital-asset#constructor"},"constructor parameters")," used when deploying.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"contractDeploymentOptions?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Specification for ",(0,i.kt)("a",{parentName:"td",href:"/tools/lsp-factoryjs/deployment/digital-asset"},"Contract Deployment Options"),".")))),(0,i.kt)("h4",{id:"parameters-of-digitalassetdeploymentoptions"},"Parameters of ",(0,i.kt)("inlineCode",{parentName:"h4"},"digitalAssetDeploymentOptions")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the token.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"symbol")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The symbol of the token.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"controllerAddress")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The owner of the contract.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"isNFT")),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specify if the token should be fungible by setting the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/lsp-smart-contracts/blob/develop/docs/ILSP7DigitalAsset.md#decimals"},"LSP7 decimals")," value to 18.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"digitalAssetMetadata?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"LSP4MetadataBeforeUpload or string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md"},"LSP4")," metadata to be attached to the smart contract.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"creators?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string","[\xa0]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md"},"LSP4")," metadata to be attached to the smart contract.")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The property ",(0,i.kt)("inlineCode",{parentName:"p"},"digitalAssetMetadata?")," can be:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"an encoded hex string,"),(0,i.kt)("li",{parentName:"ul"},"an IPFS URL, or"),(0,i.kt)("li",{parentName:"ul"},"a metadata object as defined in ",(0,i.kt)("a",{parentName:"li",href:"./lsp4-digital-asset-metadata#uploadMetadata"},"Uploading LSP4 Digital Asset Metadata"),".\nThe property ",(0,i.kt)("inlineCode",{parentName:"li"},"creators?")," is used to set the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md#lsp4creators"},"LSP4Creators[","\xa0","]")," key on the contract.\n:::")),(0,i.kt)("h4",{parentName:"div",id:"parameters-of-contractdeploymentoptions"},"Parameters of ",(0,i.kt)("inlineCode",{parentName:"h4"},"contractDeploymentOptions?")),(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"version?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The contract version you want to deploy. Defaults to latest version of the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/lsp-smart-contracts"},"lsp-smart-contracts")," library.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"byteCode?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The creation + runtime bytecode of the contract to deploy.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"libAddress?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address of a base contract to be used in deployment as implementation behind a proxy contract (e.g., ",(0,i.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-1167"},"EIP1167"),").")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"deployReactive?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether to return an ",(0,i.kt)("a",{parentName:"td",href:"https://rxjs.dev/guide/observable"},"RxJS Observable")," of deployment events. Defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"deployProxy?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether the contract should be deployed using a proxy contract implementation (e.g., ",(0,i.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-1167"},"EIP1167"),"). Defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"uploadOptions?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Specification of how the metadata should be uploaded.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ipfsClientOptions?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The IPFS client options as defined by the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client#createoptions"},"IPFS-HTTP-Client")," used internally.")))))),(0,i.kt)("p",null,"You can read more about the ",(0,i.kt)("inlineCode",{parentName:"p"},"contractDeploymentOptions?")," specification on ",(0,i.kt)("a",{parentName:"p",href:"/tools/lsp-factoryjs/deployment/digital-asset"},"its official page"),".\n:::"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Promise")),(0,i.kt)("td",{parentName:"tr",align:"left"},"<DeployedLSP7DigitalAsset",">",", or <DigitalAssetDeploymentEvent",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"An object containing deployed contract details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Observable")),(0,i.kt)("td",{parentName:"tr",align:"left"},"RxJS <Object",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"An ",(0,i.kt)("a",{parentName:"td",href:"https://rxjs.dev/guide/observable"},"RxJS Observable"),", if ",(0,i.kt)("inlineCode",{parentName:"td"},"deployReactive")," is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),".")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"deployReactive")," flag can be set in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ContractDeploymentOptions")," object, and returns an ",(0,i.kt)("a",{parentName:"p",href:"https://rxjs.dev/guide/observable"},"RxJS Observable")," of deployment events."))),(0,i.kt)("h4",{id:"deployment-of-lsp7-digital-asset-example"},"Deployment of LSP7 Digital Asset Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying an LSP7 Digital Asset"',title:'"Deploying',an:!0,LSP7:!0,Digital:!0,'Asset"':!0},"await lspFactory.LSP7DigitalAsset.deploy({\n  name: 'My token',\n  symbol: 'TKN',\n  controllerAddress: '0xb74a88C43BCf691bd7A851f6603cb1868f6fc147',\n  isNFT: true,\n});\n/**\n{\n  LSP7DigitalAsset: {\n    address: '0x32208e331d023c2ABcdfD160Ee25B97219aEfCD9',\n    receipt: {\n      to: null,\n      from: '0x9Fba07e245B415cC9580BD6c890a9fd7D22e20db',\n      contractAddress: '0x32208e331d023c2ABcdfD160Ee25B97219aEfCD9',\n      transactionIndex: 0,\n      gasUsed: [BigNumber],\n      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n      blockHash: '0x1b44bd472b1b202620a78847138692828149e7f692763c884d99a9adf0b8a94c',\n      transactionHash: '0xe923acc3431ef24fc11103b53b4219611d0f72e59734fc3c7db8da3eb4564844',\n      logs: [],\n      blockNumber: 12028918,\n      confirmations: 1,\n      cumulativeGasUsed: [BigNumber],\n      status: 1,\n      type: 0,\n      byzantium: true,\n      events: []\n    }\n  }\n}\n*/\n")),(0,i.kt)("h4",{id:"deployment-of-reactive-lsp7-digital-asset-example"},"Deployment of Reactive LSP7 Digital Asset Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Deploying a Reactive LSP7 Digital Asset"',title:'"Deploying',a:!0,Reactive:!0,LSP7:!0,Digital:!0,'Asset"':!0},"await lspFactory.LSP7DigitalAsset.deploy(\n  {\n    name: 'My token',\n    symbol: 'TKN',\n    controllerAddress: '0xb74a88C43BCf691bd7A851f6603cb1868f6fc147',\n    isNFT: true,\n  },\n  {\n    deployReactive: true,\n  },\n).subscribe({\n  next: (deploymentEvent) => {\n    console.log(deploymentEvent);\n  },\n  complete: () => {\n    console.log('Deployment Complete');\n  },\n});\n/**\n{\n  type: 'PROXY',\n  contractName: 'LSP7DigitalAsset',\n  status: 'PENDING',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'PROXY',\n  contractName: 'LSP7DigitalAsset',\n  status: 'PENDING',\n  receipt: {\n    ...\n  }\n}\n{\n  type: 'PROXY',\n  contractName: 'LSP7DigitalAsset',\n  functionName: 'initialize',\n  status: 'PENDING',\n  transaction: {\n    ...\n  }\n}\n{\n  type: 'PROXY',\n  contractName: 'LSP7DigitalAsset',\n  functionName: 'initialize',\n  status: 'COMPLETE',\n  receipt: {\n    ...\n  }\n}\nDeployment Complete\n*/\n")))}f.isMDXComponent=!0}}]);