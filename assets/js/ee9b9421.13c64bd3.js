"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[6677],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),k=r,c=m["".concat(i,".").concat(k)]||m[k]||u[k]||o;return n?a.createElement(c,l(l({ref:t},p),{},{components:n})):a.createElement(c,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8223:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],s={sidebar_position:2},i="L16 Public Testnet",d={unversionedId:"networks/l16-testnet",id:"networks/l16-testnet",title:"L16 Public Testnet",description:"| Setting                      | Value                                                                                            |",source:"@site/docs/networks/l16-testnet.md",sourceDirName:"networks",slug:"/networks/l16-testnet",permalink:"/networks/l16-testnet",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/networks/l16-testnet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"networksSidebar",previous:{title:"Mainnet",permalink:"/networks/mainnet"},next:{title:"L15 Public Testnet",permalink:"/networks/l15-testnet"}},p={},u=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Minimum System Requirements",id:"minimum-system-requirements",level:3},{value:"Recommended System Requirements",id:"recommended-system-requirements",level:3},{value:"Running the nodes",id:"running-the-nodes",level:2},{value:"Installing dependencies",id:"installing-dependencies",level:3},{value:"Installing the nodes",id:"installing-the-nodes",level:3},{value:"Change node name (optional)",id:"change-node-name-optional",level:3},{value:"Starting the nodes",id:"starting-the-nodes",level:3},{value:"Check the network status",id:"check-the-network-status",level:3},{value:"How to become a validator",id:"how-to-become-a-validator",level:2},{value:"Request some test tokens: LYXt",id:"request-some-test-tokens-lyxt",level:3},{value:"Create wallet and deposit data",id:"create-wallet-and-deposit-data",level:3},{value:"Submitting your deposit transaction",id:"submitting-your-deposit-transaction",level:3},{value:"Get your address and private key from MetaMask",id:"get-your-address-and-private-key-from-metamask",level:4},{value:"Update secrets.env and submit transactions",id:"update-secretsenv-and-submit-transactions",level:4},{value:"Run the validator client",id:"run-the-validator-client",level:3},{value:"Troubleshooting in LUKSO Beta Testnet",id:"troubleshooting-in-lukso-beta-testnet",level:2},{value:"1. Permission denied while spinning up the node",id:"1-permission-denied-while-spinning-up-the-node",level:3},{value:"2. Consensus (prysm) not syncing and Execution (geth) stops syncing after a few blocks",id:"2-consensus-prysm-not-syncing-and-execution-geth-stops-syncing-after-a-few-blocks",level:3},{value:"3. For Ubuntu 20.04 LTS you get unmarshal related issue",id:"3-for-ubuntu-2004-lts-you-get-unmarshal-related-issue",level:3},{value:"FAQ",id:"faq",level:2},{value:"1. What ports are needed for LUKSO Beta testnet?",id:"1-what-ports-are-needed-for-lukso-beta-testnet",level:3}],m={toc:u};function k(e){var t=e.components,s=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"l16-public-testnet"},"L16 Public Testnet"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Setting"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Network Name"),(0,o.kt)("td",{parentName:"tr",align:null},"L16 Beta")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"New RPC URL"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://rpc.beta.l16.lukso.network"},"https://rpc.beta.l16.lukso.network"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,o.kt)("td",{parentName:"tr",align:null},"19051978 (0x122B5CA)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Currency Symbol"),(0,o.kt)("td",{parentName:"tr",align:null},"LYXt")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Execution Block Explorer URL"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://ethstats.l16.d.lukso.dev"},"https://ethstats.l16.d.lukso.dev"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Consensus Block Explorer URL"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://consensus.stats.beta.l16.lukso.network"},"https://consensus.stats.beta.l16.lukso.network"))))),(0,o.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,o.kt)("h3",{id:"minimum-system-requirements"},"Minimum System Requirements"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Settings"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating System"),(0,o.kt)("td",{parentName:"tr",align:null},"Linux or Darwin")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Number of CPU cores"),(0,o.kt)("td",{parentName:"tr",align:null},"2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RAM"),(0,o.kt)("td",{parentName:"tr",align:null},"16 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SSD"),(0,o.kt)("td",{parentName:"tr",align:null},"100 GB")))),(0,o.kt)("h3",{id:"recommended-system-requirements"},"Recommended System Requirements"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Settings"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating System"),(0,o.kt)("td",{parentName:"tr",align:null},"Linux or Darwin")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Number of CPU cores"),(0,o.kt)("td",{parentName:"tr",align:null},"8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RAM"),(0,o.kt)("td",{parentName:"tr",align:null},"32 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SSD"),(0,o.kt)("td",{parentName:"tr",align:null},"512 GB")))),(0,o.kt)("h2",{id:"running-the-nodes"},"Running the nodes"),(0,o.kt)("h3",{id:"installing-dependencies"},"Installing dependencies"),(0,o.kt)("p",null,"Prepare your environment. You need:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Docker (",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"How to install docker"),")"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://macappstore.org/curl/"},"curl")),(0,o.kt)("li",{parentName:"ol"},"wget (linux users only)"),(0,o.kt)("li",{parentName:"ol"},"Make"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/"},"jq"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example script for installing docker"',title:'"Example',script:!0,for:!0,installing:!0,'docker"':!0},'# install dependencies\nsudo apt-get -y update\nsudo apt-get -y install make curl wget jq\n\n# install docker\ncurl -fsSL https://get.docker.com -o get-docker.sh\nsudo sh get-docker.sh\n\n# install docker-compose\nsudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\nsudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose\ndocker-compose --version\n')),(0,o.kt)("h3",{id:"installing-the-nodes"},"Installing the nodes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir lukso-l16-testnet && cd lukso-l16-testnet\ncurl https://raw.githubusercontent.com/lukso-network/network-configs/l16-dev/l16/network_setup_kit/install.sh | bash\n")),(0,o.kt)("p",null,"This will download ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"configs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," files."),(0,o.kt)("h3",{id:"change-node-name-optional"},"Change node name (optional)"),(0,o.kt)("p",null,"To update your node name, you need to edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_NAME")," variable in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file. You can edit it with vim:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vim .env\n")),(0,o.kt)("p",null,"If your node is already running, you will need to restart it to apply the changes."),(0,o.kt)("h3",{id:"starting-the-nodes"},"Starting the nodes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Start your nodes\nmake start\n\n# You can check logs with\nmake log_execution\nmake log_consensus\n\n# Stop your nodes\nmake stop\n\n# If your nodes are stopped, you could reset them using\n# Reset clears the database, which forces your node to sync again on start\nmake reset\n")),(0,o.kt)("h3",{id:"check-the-network-status"},"Check the network status"),(0,o.kt)("p",null,"You can see you node in the following page:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://ethstats.l16.d.lukso.dev/"},"https://ethstats.l16.d.lukso.dev/")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://consensus.stats.beta.l16.lukso.network"},"https://consensus.stats.beta.l16.lukso.network"))),(0,o.kt)("h2",{id:"how-to-become-a-validator"},"How to become a validator"),(0,o.kt)("h3",{id:"request-some-test-tokens-lyxt"},"Request some test tokens: LYXt"),(0,o.kt)("p",null,"Make sure to install ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),"."),(0,o.kt)("p",null,"To add the L16 Beta Network to ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," you can follow this tutorial: ",(0,o.kt)("a",{parentName:"p",href:"https://blog.suhailkakar.com/add-custom-networks-to-metamask"},"https://blog.suhailkakar.com/add-custom-networks-to-metamask")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use the following parameters:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Setting"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Network Name"),(0,o.kt)("td",{parentName:"tr",align:null},"L16 Beta")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"New RPC URL"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://rpc.beta.l16.lukso.network"},"https://rpc.beta.l16.lukso.network"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,o.kt)("td",{parentName:"tr",align:null},"19051978 (0x122B5CA)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Currency Symbol"),(0,o.kt)("td",{parentName:"tr",align:null},"LYXt")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Block Explorer URL"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://consensus.stats.beta.l16.lukso.network"},"https://consensus.stats.beta.l16.lukso.network"))))),(0,o.kt)("p",null,"Then select ",(0,o.kt)("inlineCode",{parentName:"p"},"L16 Beta")," from the dropdown"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"metamask_dropdown.png",src:n(6676).Z,width:"718",height:"726"})),(0,o.kt)("p",null,"Copy address to the clipboard using the box icon"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"account_address.png",src:n(8342).Z,width:"718",height:"120"})),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.beta.l16.lukso.network"},"https://faucet.beta.l16.lukso.network")),(0,o.kt)("p",null,'Paste the copied address to the box and press "Request 35 LYX"'),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"faucet.png",src:n(3380).Z,width:"952",height:"536"})),(0,o.kt)("p",null,"Wait for 1 minute and check balance in your MetaMask. You should have received 35 LYX."),(0,o.kt)("h3",{id:"create-wallet-and-deposit-data"},"Create wallet and deposit data"),(0,o.kt)("p",null,"First generate a validator mnemonic seed phrase. ",(0,o.kt)("strong",{parentName:"p"},"This mnemonic seed generates your validator private key, store it in a safe location.")),(0,o.kt)("p",null,"You will need this mnemonic to create your validator address and deposit data. If you want to generate a separate withdrawal mnemonic then generate another mnemonic using the same command and copy both of the mnemonics in a safe place."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make mnemonic\n")),(0,o.kt)("p",null,"Generate a wallet using the following command. It will ask for the number of validators, validator-mnemonic (generated using above command) and a keystore password."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make create-wallet\n")),(0,o.kt)("p",null,"A directory named keystore will be created."),(0,o.kt)("p",null,"Generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit-data.json")," using the following command. It will ask for the number of validators, validator mnemonic and withdrawal mnemonic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make create-deposit\n")),(0,o.kt)("p",null,"You will find ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit-data.json")," file inside your current directory."),(0,o.kt)("h3",{id:"submitting-your-deposit-transaction"},"Submitting your deposit transaction"),(0,o.kt)("h4",{id:"get-your-address-and-private-key-from-metamask"},"Get your address and private key from MetaMask"),(0,o.kt)("p",null,"Open MetaMask and click on the 3 dots menu on the right side and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Account details")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"account_details_selection.png",src:n(8383).Z,width:"712",height:"502"})),(0,o.kt)("p",null,"Click on Export Private Key and copy it into the clipboard"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"export_private_key.png",src:n(1478).Z,width:"658",height:"822"})),(0,o.kt)("h4",{id:"update-secretsenv-and-submit-transactions"},"Update secrets.env and submit transactions"),(0,o.kt)("p",null,"Update ",(0,o.kt)("inlineCode",{parentName:"p"},"secrets.env")," using the public address and private key from MetaMask"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ETH1_FROM_ADDR=YOUR_WALLET_ADDRESS\nETH1_FROM_PRIV=YOUR_PRIVATE_KEY\n")),(0,o.kt)("p",null,"Submit transactions, this will send the transaction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# submit deposit\nmake submit-deposit\n\n# wait 8h till validator is activated\n")),(0,o.kt)("p",null,"You will need to wait for 8 hours to activate your validator."),(0,o.kt)("h3",{id:"run-the-validator-client"},"Run the validator client"),(0,o.kt)("p",null,"Once your validator is activated you spin up a validator client. ",(0,o.kt)("strong",{parentName:"p"},"Make sure your ",(0,o.kt)("em",{parentName:"strong"},"consensus")," and ",(0,o.kt)("em",{parentName:"strong"},"execution")," clients are running (running ",(0,o.kt)("inlineCode",{parentName:"strong"},"make start"),").")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make start-validator\n\n# You can check logs with\nmake log_validator\n\n# You can stop the validator using, this will also stop all other nodes\nmake stop\n")),(0,o.kt)("h2",{id:"troubleshooting-in-lukso-beta-testnet"},"Troubleshooting in LUKSO Beta Testnet"),(0,o.kt)("h3",{id:"1-permission-denied-while-spinning-up-the-node"},"1. Permission denied while spinning up the node"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Context"),": While running ",(0,o.kt)("inlineCode",{parentName:"p"},"make start")," you are getting permission related issues. You can have log like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.24/containers/json": dial unix /var/run/docker.sock: connect: permission denied "docker kill" requires at least 1 argument. See \'docker kill --hel\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Proposed Solution:")," try running make command as ",(0,o.kt)("inlineCode",{parentName:"p"},"super user"),". For example: ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo make start")),(0,o.kt)("h3",{id:"2-consensus-prysm-not-syncing-and-execution-geth-stops-syncing-after-a-few-blocks"},"2. Consensus (prysm) not syncing and Execution (geth) stops syncing after a few blocks"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Context"),": You found your consensus client has no peer and execution engine stops syncing after a few blocks\n",(0,o.kt)("strong",{parentName:"p"},"Proposed Solution:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file using any text editor. For ",(0,o.kt)("inlineCode",{parentName:"li"},"vim")," the command will be ",(0,o.kt)("inlineCode",{parentName:"li"},"vim .env")),(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"PRYSM_BOOTSTRAP_NODE")," to this")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"PRYSM_BOOTSTRAP_NODE=enr:-MK4QACsMyCBqoH7E2xTFMyVKd0wbaOEoff6q_N1Vx_HVZuVYBk1JoB5Ava9h6eBlS5XzxM5LHFI1BG1IchMdI6JMhWGAX8tHtE1h2F0dG5ldHOIAAAAAAAAAACEZXRoMpC3QoawYgAAcf__________gmlkgnY0gmlwhCJbPjCJc2VjcDI1NmsxoQJp3RTwCXObnrJNuiJlLaM4LlhYOaWXhtj4Hz3PW9sfgYhzeW5jbmV0cwCDdGNwgjLIg3VkcIIu4A\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Restart the node using: ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo make stop && sudo make start"))),(0,o.kt)("h3",{id:"3-for-ubuntu-2004-lts-you-get-unmarshal-related-issue"},"3. For Ubuntu 20.04 LTS you get unmarshal related issue"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Context:")," Check your execution log by ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo make log_execution"),". If you find this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'log_execution: err="peer connected on snap without compatible eth support" log_consensus: level=error msg="Could not connect to powchain endpoint: could not dial eth1 nodes: json: cannot unmarshal string into Go struct field SyncProgress.CurrentBlock of type uint64" prefix=powchain\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Proposed solution"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# stop docker containser\nsudo make stop\n# reset data directory\nsudo make reset\n# remove previous images\ndocker system prune --all --force --volumes\n# delete lukso testnet directory\ncd .. && rm -rf ./lukso-l16-testnet\n")),(0,o.kt)("p",null,"Then follow the doc and re-run everything from the start."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"1-what-ports-are-needed-for-lukso-beta-testnet"},"1. What ports are needed for LUKSO Beta testnet?"),(0,o.kt)("p",null,"The following ports and protocols are needed to be opened for the outside world."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tcp:30303\ntcp:8545\ntcp:8598\ntcp:8080\ntcp:3500\ntcp:4000\ntcp:13000\nudp:12000\n")))}k.isMDXComponent=!0},8342:function(e,t,n){t.Z=n.p+"assets/images/account_address-fe8eaf68f73adb61a75763fcd847e592.png"},8383:function(e,t,n){t.Z=n.p+"assets/images/account_details_selection-dde46575dcb96eec5392f6a9ec7c328d.png"},1478:function(e,t,n){t.Z=n.p+"assets/images/export_private_key-7fdc20b80122dc53c091e431cc094213.png"},3380:function(e,t,n){t.Z=n.p+"assets/images/faucet-58797c98ab7ffea67c07eace546e86c5.png"},6676:function(e,t,n){t.Z=n.p+"assets/images/metamask_dropdown-60f6328737142ebf3729219fc015101f.png"}}]);