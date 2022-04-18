"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[6677],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,c=u["".concat(s,".").concat(k)]||u[k]||m[k]||o;return n?a.createElement(c,l(l({ref:t},p),{},{components:n})):a.createElement(c,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8223:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:2},s="L16 Public Testnet",d={unversionedId:"networks/l16-testnet",id:"networks/l16-testnet",title:"L16 Public Testnet",description:"The L16 Public Testnet will be the last stable test network before the mainnet launch and will likely stay online in parallel for experimental purposes.",source:"@site/docs/networks/l16-testnet.md",sourceDirName:"networks",slug:"/networks/l16-testnet",permalink:"/networks/l16-testnet",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/networks/l16-testnet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"networksSidebar",previous:{title:"Mainnet",permalink:"/networks/mainnet"},next:{title:"L15 Public Testnet",permalink:"/networks/l15-testnet"}},p={},m=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Minimum System Requirements",id:"minimum-system-requirements",level:3},{value:"Recommended System Requirements",id:"recommended-system-requirements",level:3},{value:"Running a Node",id:"running-a-node",level:2},{value:"Installing Dependencies",id:"installing-dependencies",level:3},{value:"Installing the Node",id:"installing-the-node",level:3},{value:"Naming the Node",id:"naming-the-node",level:3},{value:"Starting the Node",id:"starting-the-node",level:3},{value:"Check the Network Status",id:"check-the-network-status",level:3},{value:"Become a Validator",id:"become-a-validator",level:2},{value:"Request LYXt Tokens:",id:"request-lyxt-tokens",level:3},{value:"Create a Wallet",id:"create-a-wallet",level:3},{value:"Deposit the Validator Data",id:"deposit-the-validator-data",level:3},{value:"Submit the Deposit Transaction",id:"submit-the-deposit-transaction",level:3},{value:"Get your Address and Private Key from MetaMask",id:"get-your-address-and-private-key-from-metamask",level:4},{value:"Update Secrets and submit Transaction",id:"update-secrets-and-submit-transaction",level:4},{value:"Send the transaction.",id:"send-the-transaction",level:4},{value:"Run the Validator Client",id:"run-the-validator-client",level:3},{value:"Troubleshooting L16 Beta Testnet",id:"troubleshooting-l16-beta-testnet",level:2},{value:"Denied Permission",id:"denied-permission",level:3},{value:"Stalled Synchronization",id:"stalled-synchronization",level:3},{value:"Unmarshalling Error",id:"unmarshalling-error",level:3},{value:"FAQ",id:"faq",level:2},{value:"What ports must be open on a node?",id:"what-ports-must-be-open-on-a-node",level:3}],u={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"l16-public-testnet"},"L16 Public Testnet"),(0,o.kt)("p",null,"The L16 Public Testnet will be the last stable test network before the mainnet launch and will likely stay online in parallel for experimental purposes."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"L16-Testnet Beta has ended.")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This Testnet will soon go live again. Get updates on our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/lukso"},"Discord")," server"))),(0,o.kt)("h1",{id:"metamask"},"MetaMask"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Setting"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Network Name"),(0,o.kt)("td",{parentName:"tr",align:null},"L16 Beta")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"New RPC URL"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://rpc.beta.l16.lukso.network"},"https://rpc.beta.l16.lukso.network"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,o.kt)("td",{parentName:"tr",align:null},"19051978 (0x122B5CA)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Currency Symbol"),(0,o.kt)("td",{parentName:"tr",align:null},"LYXt")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Execution Block Explorer URL"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://ethstats.l16.d.lukso.dev"},"https://ethstats.l16.d.lukso.dev"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Consensus Block Explorer URL"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://consensus.stats.beta.l16.lukso.network"},"https://consensus.stats.beta.l16.lukso.network"))))),(0,o.kt)("p",null,"And if you need it, ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC"},"here is a tutorial on how to do it"),"."),(0,o.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,o.kt)("h3",{id:"minimum-system-requirements"},"Minimum System Requirements"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Settings"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating System"),(0,o.kt)("td",{parentName:"tr",align:null},"Linux or MacOS")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Number of CPU cores"),(0,o.kt)("td",{parentName:"tr",align:null},"2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RAM"),(0,o.kt)("td",{parentName:"tr",align:null},"16 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SSD"),(0,o.kt)("td",{parentName:"tr",align:null},"100 GB")))),(0,o.kt)("h3",{id:"recommended-system-requirements"},"Recommended System Requirements"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Settings"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating System"),(0,o.kt)("td",{parentName:"tr",align:null},"Linux or MacOS")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Number of CPU cores"),(0,o.kt)("td",{parentName:"tr",align:null},"8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RAM"),(0,o.kt)("td",{parentName:"tr",align:null},"32 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SSD"),(0,o.kt)("td",{parentName:"tr",align:null},"512 GB")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Apple's new M1 chips are not supported natively by our node client. However, you can follow ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@luki3k5/running-lukso-node-on-m1-mac-acf92d433a38"},"this guide")," to run it by using Rosetta, Apple's built-in emulation software."))),(0,o.kt)("h2",{id:"running-a-node"},"Running a Node"),(0,o.kt)("h3",{id:"installing-dependencies"},"Installing Dependencies"),(0,o.kt)("p",null,"Prepare your environment. You need:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://macappstore.org/curl/"},"curl")),(0,o.kt)("li",{parentName:"ol"},"wget (linux users only)"),(0,o.kt)("li",{parentName:"ol"},"Make"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/"},"jq"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example script for installing docker"',title:'"Example',script:!0,for:!0,installing:!0,'docker"':!0},'# install dependencies\nsudo apt-get -y update\nsudo apt-get -y install make curl wget jq\n\n# install docker\ncurl -fsSL https://get.docker.com -o get-docker.sh\nsudo sh get-docker.sh\n\n# install docker-compose\nsudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\nsudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose\ndocker-compose --version\n')),(0,o.kt)("h3",{id:"installing-the-node"},"Installing the Node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir lukso-l16-testnet && cd lukso-l16-testnet\ncurl https://raw.githubusercontent.com/lukso-network/network-configs/l16-dev/l16/network_setup_kit/install.sh | bash\n")),(0,o.kt)("p",null,"The script will download the following files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yaml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Makefile")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".env"))),(0,o.kt)("h3",{id:"naming-the-node"},"Naming the Node"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optional:")," If you want change your node's name, you need to edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_NAME")," variable in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file to update your node name. You can edit it with vim:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vim .env\n")),(0,o.kt)("p",null,"If your node is already running, you will need to restart it to apply the changes."),(0,o.kt)("h3",{id:"starting-the-node"},"Starting the Node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Start your nodes\nmake start\n\n# You can check logs with\nmake log_execution\nmake log_consensus\n\n# Stop your nodes\nmake stop\n\n# If your nodes are stopped, you could reset them using\n# Reset clears the database, which forces your node to sync again on start\nmake reset\n")),(0,o.kt)("h3",{id:"check-the-network-status"},"Check the Network Status"),(0,o.kt)("p",null,"You can see your node on the following page:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://ethstats.l16.d.lukso.dev/"},"https://ethstats.l16.d.lukso.dev/")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://consensus.stats.beta.l16.lukso.network"},"https://consensus.stats.beta.l16.lukso.network"))),(0,o.kt)("h2",{id:"become-a-validator"},"Become a Validator"),(0,o.kt)("h3",{id:"request-lyxt-tokens"},"Request LYXt Tokens:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure to install ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the L16 Beta Testnet to ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),", by following ",(0,o.kt)("a",{parentName:"p",href:"https://blog.suhailkakar.com/add-custom-networks-to-metamask"},"this tutorial"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the MetaMask parameters from above and select ",(0,o.kt)("inlineCode",{parentName:"p"},"L16 Beta")," from the dropdown.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy your MetaMask address to the clipboard using the box icon.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.beta.l16.lukso.network"},"L16 Faucet"),", paste the copied address and request your test tokens.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wait for the transaction to go through and check the balance in your MetaMask. You should have received 35 LYX."))),(0,o.kt)("h3",{id:"create-a-wallet"},"Create a Wallet"),(0,o.kt)("p",null,"First, generate a validator mnemonic seed phrase. ",(0,o.kt)("strong",{parentName:"p"},"This mnemonic seed phrase generates your validator's private key. Store it in a safe location.")),(0,o.kt)("p",null,"You will need this mnemonic to create your validator address and deposit data. If you want to generate a separate withdrawal mnemonic. Generate another mnemonic using the same command and copy both of the mnemonics in a safe place."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make mnemonic\n")),(0,o.kt)("p",null,"Generate a wallet using the following command. It will ask for the number of validators, validator-mnemonic (generated using the above command), and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Keystore")," password."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make create-wallet\n")),(0,o.kt)("p",null,"This command will create a directory named ",(0,o.kt)("inlineCode",{parentName:"p"},"keystore"),"."),(0,o.kt)("h3",{id:"deposit-the-validator-data"},"Deposit the Validator Data"),(0,o.kt)("p",null,"Generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit-data.json")," using the following command. It will ask for the number of validators, validator mnemonic, and withdrawal mnemonic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make create-deposit\n")),(0,o.kt)("p",null,"You will find the ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit-data.json")," file inside your current directory."),(0,o.kt)("h3",{id:"submit-the-deposit-transaction"},"Submit the Deposit Transaction"),(0,o.kt)("h4",{id:"get-your-address-and-private-key-from-metamask"},"Get your Address and Private Key from MetaMask"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open MetaMask and click on the three dots menu on the right side and select ",(0,o.kt)("inlineCode",{parentName:"li"},"Account details.")),(0,o.kt)("li",{parentName:"ol"},"Click on Export Private Key and copy it into the clipboard.")),(0,o.kt)("h4",{id:"update-secrets-and-submit-transaction"},"Update Secrets and submit Transaction"),(0,o.kt)("p",null,"Update ",(0,o.kt)("inlineCode",{parentName:"p"},"secrets.env")," using the public address and private key from MetaMask."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ETH1_FROM_ADDR=YOUR_WALLET_ADDRESS\nETH1_FROM_PRIV=YOUR_PRIVATE_KEY\n")),(0,o.kt)("h4",{id:"send-the-transaction"},"Send the transaction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# submit deposit\nmake submit-deposit\n\n# wait 8h till validator is activated\n")),(0,o.kt)("p",null,"You will need to wait for eight hours to activate your validator."),(0,o.kt)("h3",{id:"run-the-validator-client"},"Run the Validator Client"),(0,o.kt)("p",null,"Once your validator is activated, you spin up a validator client."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Make sure your ",(0,o.kt)("em",{parentName:"strong"},"consensus")," and ",(0,o.kt)("em",{parentName:"strong"},"execution")," clients are running (by typing ",(0,o.kt)("inlineCode",{parentName:"strong"},"make start"),").")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make start-validator\n\n# You can check logs with\nmake log_validator\n\n# You can stop the validator using, this will also stop all other nodes\nmake stop\n")),(0,o.kt)("h2",{id:"troubleshooting-l16-beta-testnet"},"Troubleshooting L16 Beta Testnet"),(0,o.kt)("h3",{id:"denied-permission"},"Denied Permission"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Context")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"While running ",(0,o.kt)("inlineCode",{parentName:"p"},"make start")," you are getting permission-related issues. You can have a log like this:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},'Permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.24/containers/json": dial unix /var/run/docker.sock: connect: permission denied "docker kill" requires at least 1 argument. See `docker kill --help`\n')))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Proposed Solution:")," Try running the ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," command as super user by using ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo make start"),"."),(0,o.kt)("h3",{id:"stalled-synchronization"},"Stalled Synchronization"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Context")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You found your consensus (prysm) client has no peer and the execution engine (geth) stops syncing after a few blocks."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Proposed Solution:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file using any text editor. For ",(0,o.kt)("inlineCode",{parentName:"li"},"vim")," the command will be ",(0,o.kt)("inlineCode",{parentName:"li"},"vim .env")),(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"PRYSM_BOOTSTRAP_NODE")," to this")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"PRYSM_BOOTSTRAP_NODE=enr:-MK4QACsMyCBqoH7E2xTFMyVKd0wbaOEoff6q_N1Vx_HVZuVYBk1JoB5Ava9h6eBlS5XzxM5LHFI1BG1IchMdI6JMhWGAX8tHtE1h2F0dG5ldHOIAAAAAAAAAACEZXRoMpC3QoawYgAAcf__________gmlkgnY0gmlwhCJbPjCJc2VjcDI1NmsxoQJp3RTwCXObnrJNuiJlLaM4LlhYOaWXhtj4Hz3PW9sfgYhzeW5jbmV0cwCDdGNwgjLIg3VkcIIu4A\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Restart the node by typing: ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo make stop && sudo make start"))),(0,o.kt)("h3",{id:"unmarshalling-error"},"Unmarshalling Error"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Context")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Check your execution log by ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo make log_execution"),". For Ubuntu 20.04 LTS you may get an unmarshal-related issue like:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},'log_execution: err="peer connected on snap without compatible eth support" log_consensus: level=error msg="Could not connect to powchain endpoint: could not dial eth1 nodes: json: cannot unmarshal string into Go struct field SyncProgress.CurrentBlock of type uint64" prefix=powchain\n')))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Proposed Solution:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# stop docker containser\nsudo make stop\n# reset data directory\nsudo make reset\n# remove previous images\ndocker system prune --all --force --volumes\n# delete lukso testnet directory\ncd .. && rm -rf ./lukso-l16-testnet\n")),(0,o.kt)("p",null,"After trying out the proposed solution, re-run your node setup from the start."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"what-ports-must-be-open-on-a-node"},"What ports must be open on a node?"),(0,o.kt)("p",null,"It would be best if you opened the following ports and protocols in the network to run your node correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tcp:30303\ntcp:8545\ntcp:8598\ntcp:8080\ntcp:3500\ntcp:4000\ntcp:13000\nudp:12000\n")))}k.isMDXComponent=!0}}]);