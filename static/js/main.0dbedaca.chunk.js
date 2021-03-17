(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return l}));var n=a(0),r=a.n(n),c=function(e){return parseFloat(e)/1e24||0};function l(){return r.a.createElement("div",{className:"d-flex justify-content-center",key:"loader"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")))}function i(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Hello"),r.a.createElement("ul",null,r.a.createElement("p",null,"This is NEAR Account Marketplace. It allows you to sell, bet and buy NEAR Account names.")),r.a.createElement("h4",null,"For whom"),r.a.createElement("ul",null,r.a.createElement("p",null,"Founders \u2014 to allow you to find brilliant account names and place them onto the market for selling."),r.a.createElement("p",null,"Believers \u2014 to participate in finding fair price, taking rewards for your faithful evaluation and wisdom."),r.a.createElement("p",null,"Claimers \u2014 to obtain perfect account names for inner usage, personal collection or further resales.")),r.a.createElement("h4",null,"Basics"),r.a.createElement("ul",null,r.a.createElement("p",null,"Initial placement costs ~0.42 NEAR. Initial claim price is 1 NEAR. There are two operations available:"),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Place a bet. "),"This costs half of the current price (starts from 0.5 NEAR at initial state). The payment goes to previous believers, and the price increases for x1.2 times.")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Claim an account. "),"This costs full price. You need to wait 48 hours to make sure no one wants to bet on the account. If someone will bet within 48 hours, you will receive all your funds back plus forfeits paid by believer who bets. If no one will bet, the account is totally yours, congratulations!"))),r.a.createElement("h4",null,"Rewards for bets"),r.a.createElement("ul",null,r.a.createElement("p",null,"Each new bet triggers the reward distribution function for previous believers. This means, if you even bet only once, you will receive rewards multiple times. The function converges to 25% rewards for each bet."),r.a.createElement("p",null,r.a.createElement("i",null,"Example. Let's say, you bet 0.6 NEAR for ",r.a.createElement("strong",null,"apple.near"),". In a couple days its price has been increased by series of bets, and you have been received 0.75 NEAR rewards for that bet in total."))),r.a.createElement("h4",null,"Rewards for claims"),r.a.createElement("ul",null,r.a.createElement("p",null,"Claim is the most important and unique procedure as it finalizes the lifetime of account on the market. The rewards for the successful claim are the biggest."),r.a.createElement("p",null,"First of all, the founder of the account gets 25% of claim price as additional reward. It means, even not betting at all, it's still possible to take huge rewards by bringing awesome account names to the market."),r.a.createElement("p",null,r.a.createElement("i",null,"Due to importance of claiming accounts, as it helps for the main purpose of the project, the marketplace takes zero commission for claiming."))),r.a.createElement("h4",null,"Commission"),r.a.createElement("ul",null,r.a.createElement("p",null,"Marketplace takes 5% commission for each bet plus small constant for initial placement (~0.42 NEAR)."),r.a.createElement("p",null,"Marketplace takes 5% commission in addition, in case of betting for account which is under claiming. This is necessary to prevent holding the account with no willing to actually claim it. Strategies that disturbing market in such way are not welcomed as they diverge with the purpose of the marketplace."),r.a.createElement("p",null,"Marketplace takes zero commission for claim.")),r.a.createElement("h4",null,"Forfeits"),r.a.createElement("ul",null,r.a.createElement("p",null,"Forfeit is an additional cost for placing a bet while the account is under claiming. Its value grows linearly from 0% at the moment when claim requested, and up to 20% at the end of 48-hours period. Forfeits are paid to claimers directly. The purpose of forfeit is to pay for claimers' willing to obtain an account.")),r.a.createElement("h4",null,"Specific cases"),r.a.createElement("ul",null,r.a.createElement("p",null,"Knowing the mechanics, try to find your personal way to reach the maximal value. There are couple examples that may help you."),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Using multiple accounts and place series of bets. "),"As all Believers behind their accounts are anonymous, you can use multiple accounts while betting. That's why there is no reason to disallow to bet multiple times from the same account - you can simply bet from another one. You may use this trick if you want to hide your interest or intentions by spreading up your bets between multiple accounts.")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Sell the account for the full price. "),"If you are sure about fair price, you shouldn't wait until others bet. You can simply bet as many times as necessary to increase the price up to the value that makes sense to you. In this case you may take up to 87.5% rewards taken from claimer directly, not sharing with anyone.")),r.a.createElement("p",null,"Also mechanics is tuned in such way to make sure it's impossible to take less than you bet.")),r.a.createElement("h4",null,"Account claiming procedure"),r.a.createElement("ul",null,r.a.createElement("p",null,"1. (For experts) replace public key 2. TBD")),r.a.createElement("h4",null,"Example of distribution"),r.a.createElement("ul",null,r.a.createElement("p",null,"The following spreadsheet shows rewards distribution for an account that has been bet for 15 times and claimed afterwards. 0-th bet means initial offering from founder, all other lines correspond to bets."),r.a.createElement("p",null,r.a.createElement("samp",null,"Claim price: 15.407",r.a.createElement("br",null),"Sum of bets: 36.4342",r.a.createElement("br",null),"Commission: 2.2175",r.a.createElement("br",null),"0 bet:  0.4167,  rewards:  4.6018,   ratio:  11.0442",r.a.createElement("br",null),"1 bet:  0.5000,  rewards:  0.6250,   ratio:  1.2500",r.a.createElement("br",null),"2 bet:  0.6000,  rewards:  0.7500,   ratio:  1.2500",r.a.createElement("br",null),"3 bet:  0.7200,  rewards:  0.9000,   ratio:  1.2500",r.a.createElement("br",null),"4 bet:  0.8640,  rewards:  1.0800,   ratio:  1.2500",r.a.createElement("br",null),"5 bet:  1.0368,  rewards:  1.2959,   ratio:  1.2499",r.a.createElement("br",null),"6 bet:  1.2442,  rewards:  1.5550,   ratio:  1.2499",r.a.createElement("br",null),"7 bet:  1.4930,  rewards:  1.8656,   ratio:  1.2496",r.a.createElement("br",null),"8 bet:  1.7916,  rewards:  2.2375,   ratio:  1.2489",r.a.createElement("br",null),"9 bet:  2.1499,  rewards:  2.6811,   ratio:  1.2471",r.a.createElement("br",null),"10 bet:  2.5799,  rewards:  3.2047,   ratio:  1.2422",r.a.createElement("br",null),"11 bet:  3.0959,  rewards:  3.8073,   ratio:  1.2298",r.a.createElement("br",null),"12 bet:  3.7150,  rewards:  4.4595,   ratio:  1.2004",r.a.createElement("br",null),"13 bet:  4.4581,  rewards:  5.0908,   ratio:  1.1419",r.a.createElement("br",null),"14 bet:  5.3497,  rewards:  5.8400,   ratio:  1.0917",r.a.createElement("br",null),"15 bet:  6.4196,  rewards:  9.6294,   ratio:  1.5000",r.a.createElement("br",null),"Sum of rewards: 49.6237"))))}},187:function(e,t,a){"use strict";(function(e){var n=a(201),r=a(1),c=a.n(r),l=a(6),i=a(188),s=a(189),o=a(202),u=a(200),m=a(0),d=a.n(m),f=(a(108),a(229),a(230),a(231),a(232),a(45)),b=a(190),p=a.n(b),E=a(17),h=a(4),g=a(10),v=a(25),y=a.n(v),w=a(191),N=a(195),_=a(196),x=a(197),k=a(198),O=a(203),I="berry.cards"===window.location.hostname?{accountSuffix:"near",networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",archivalNodeUrl:"https://rpc.mainnet.internal.near.org",contractName:"cards.berryclub.ek.near",walletUrl:"https://wallet.near.org",marketPublicKey:"ed25519:EgmA4v9E2SjFVu31bmJKJtNW6cjkx2cbM3HyXprsYvrA",wasmCode:"../public/bin"}:{accountSuffix:"testnet",networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",archivalNodeUrl:"https://rpc.testnet.internal.near.org",contractName:"dev-1615934646069-3103644",walletUrl:"https://wallet.testnet.near.org",marketPublicKey:"ed25519:EgmA4v9E2SjFVu31bmJKJtNW6cjkx2cbM3HyXprsYvrA",wasmCode:"../public/bin"},j=function(e){return e?{participation:e.participation,acquisitions:e.acquisitions,betsVolume:Object(g.a)(e.bets_volume),availableRewards:Object(g.a)(e.available_rewards),profitTaken:Object(g.a)(e.profit_taken),numOffers:e.num_offers,numBets:e.num_bets,numClaims:e.num_claims,numAcquisitions:e.num_acquisitions}:{participation:[],acquisitions:[],betsVolume:Object(g.a)(0),availableRewards:Object(g.a)(0),profitTaken:Object(g.a)(0),numOffers:0,numBets:0,numClaims:0,numAcquisitions:0}},A=function(t){Object(o.a)(r,t);var a=Object(u.a)(r);function r(e){var t;return Object(i.a)(this,r),(t=a.call(this,e))._near={},t._near.lsKey=I.contractName+":v01:",t._near.lsOfferAccountId=t._near.lsKey+"offerAccountId",t._near.lsFavorAccountId=t._near.lsKey+"favorAccountId",t._near.lsPrevKeys=t._near.lsKey+"prevKeys",t._near.lsMsg=t._near.lsKey+"msg",t._near.config=I,t._near.marketPublicKey=I.marketPublicKey,t._near.accountSuffix=I.accountSuffix,t.state={connected:!1,account:null},t._initNear().then((function(){t.setState({signedIn:!!t._near.accountId,signedAccountId:t._near.accountId,connected:!0})})),t}return Object(s.a)(r,[{key:"_initNear",value:function(){var t=Object(l.a)(c.a.mark((function t(){var a,n,r,i,s,o,u,m,d,b,p,E,h,g,v,w=this;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new f.keyStores.BrowserLocalStorageKeyStore,t.next=3,f.connect(Object.assign({deps:{keyStore:a}},I));case 3:if(n=t.sent,this._near.keyStore=a,this._near.near=n,this._near.walletConnection=new f.WalletConnection(n,I.contractName),this._near.accountId=this._near.walletConnection.getAccountId(),this._near.account=this._near.walletConnection.account(),this._near.contract=new f.Contract(this._near.account,I.contractName,{viewMethods:["get_profile","get_bid","get_top_bets","get_top_claims","get_global_stats"],changeMethods:["offer","bet","claim","finalize","acquire"]}),this._near.profiles={},this._near.getProfile=function(e){return e in w._near.profiles||(w._near.profiles[e]=Promise.resolve(Object(l.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=j,t.next=3,w._near.contract.get_profile({profile_id:e});case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})))())),w._near.profiles[e]},this._near.logOut=function(){w._near.walletConnection.signOut(),w._near.accountId=null,w.setState({signedIn:!!w._accountId,signedAccountId:w._accountId})},this._near.refreshAllowance=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.logOut();case 2:return e.next=4,w.requestSignIn();case 4:case"end":return e.stop()}}),e)}))),!this._near.accountId){t.next=101;break}return t.next=17,this._near.getProfile(this._near.accountId);case 17:return r=t.sent,this.setState({profile:r}),t.next=21,this._near.account.getAccessKeys();case 21:if(i=t.sent,s=!1,i.forEach((function(e){e.public_key===w._near.marketPublicKey&&(s=!0)})),o=y.a.get(this._near.lsOfferAccountId),u=y.a.get(this._near.lsFavorAccountId),s){t.next=101;break}return t.prev=27,t.next=30,this._near.near.account(this._near.accountId);case 30:return m=t.sent,t.next=33,m.addKey(this._near.marketPublicKey,void 0,void 0,0);case 33:if(this._near.accountId===o){t.next=40;break}return t.next=36,m.deleteKey(this._near.marketPublicKey);case 36:console.log("wrong account"),y.a.set(this._near.lsMsg,"Current account "+this._near.accountId+" is not equal to offered one"+o),t.next=95;break;case 40:return t.next=42,this._near.contract.offer({profile_id:u},"200000000000000",String(parseInt(45e7))+"000000000000000");case 42:return d=t.sent,console.log("offer result",d),t.next=46,m.state();case 46:return b=t.sent,console.log(b),t.next=50,fetch(I.wasmCode);case 50:return p=t.sent,console.log("!",p),t.next=54,p.arrayBuffer();case 54:return E=t.sent,t.next=57,m.deployContract(new Uint8Array(E));case 57:return t.next=59,new f.Contract(m,this._near.accountId,{viewMethods:[],changeMethods:["new"],sender:this._near.accountId});case 59:return h=t.sent,console.log("Deploying done. Initializing contract..."),t.t0=console,t.next=64,h.new(e.from('{"owner_id":"'+I.contractName+'"}'));case 64:return t.t1=t.sent,t.t0.log.call(t.t0,t.t1),console.log("Init is done."),t.t2=console,t.next=70,m.state();case 70:return t.t3=t.sent.code_hash,t.t2.log.call(t.t2,"code hash",t.t3),t.next=74,m.deleteKey(this._near.marketPublicKey);case 74:return t.next=76,this._near.walletConnection._keyStore.getKey(I.networkId,this._near.accountId);case 76:g=t.sent.getPublicKey().toString(),console.log("all keys",i),console.log("all local keys",this._near.walletConnection._authData.allKeys),console.log("last key",g),v=0;case 81:if(!(v<i.length)){t.next=90;break}if(g===i[v].public_key){t.next=87;break}return console.log("deleting ",i[v]),t.next=86,m.deleteKey(i[v].public_key);case 86:console.log("deleting ",i[v],"done");case 87:v++,t.next=81;break;case 90:return console.log("deleting last key",g),t.next=93,m.deleteKey(g);case 93:console.log("deleting ",g,"done"),y.a.set(this._near.lsMsg,"Account "+this._near.accountId+" successfully added to the Marketplace!");case 95:this._near.logOut(),t.next=101;break;case 98:t.prev=98,t.t4=t.catch(27),console.log("FullAccessKey not found",t.t4);case 101:case"end":return t.stop()}}),t,this,[[27,98]])})));return function(){return t.apply(this,arguments)}}()},{key:"requestSignIn",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&t.preventDefault(),"Accounts Marketplace",e.next=4,this._near.walletConnection.requestSignIn(I.contractName,"Accounts Marketplace");case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=Object(n.a)({_near:this._near,refreshAllowance:function(){return e._near.refreshAllowance()}},this.state),a=this.state.connected?this.state.signedIn?d.a.createElement("div",null,d.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return e._near.logOut()}},"Sign out (",this.state.signedAccountId,")")):d.a.createElement("div",null,d.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return e.requestSignIn(t)}},"Sign in with NEAR Wallet")):d.a.createElement("div",null,"Connecting... ",d.a.createElement("span",{className:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"}));return d.a.createElement("div",{className:"App"},d.a.createElement(E.a,{basename:""},d.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-3"},d.a.createElement("div",{className:"container-fluid"},d.a.createElement(E.b,{className:"navbar-brand",to:"/",title:"near.bet"},d.a.createElement("img",{src:p.a,alt:"NEAR Accounts Marketplace",className:"d-inline-block align-middle"}),"[BETA] NEAR Accounts Marketplace"),d.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},d.a.createElement("span",{className:"navbar-toggler-icon"})),d.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},d.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},d.a.createElement("li",{className:"nav-item"},d.a.createElement(E.b,{className:"nav-link","aria-current":"page",to:"/"},"Accounts")),this.state.signedIn&&d.a.createElement("li",{className:"nav-item"},d.a.createElement(E.b,{className:"nav-link","aria-current":"page",to:"/profile/".concat(this.state.signedAccountId)},"Profile")),d.a.createElement("li",{className:"nav-item"},d.a.createElement(E.b,{className:"nav-link","aria-current":"page",to:"/offer"},"Offer")),d.a.createElement("li",{className:"nav-item"},d.a.createElement(E.b,{className:"nav-link","aria-current":"page",to:"/rules"},"Rules"))),d.a.createElement("form",{className:"d-flex"},a)))),d.a.createElement("a",{className:"github-fork-ribbon right-bottom fixed",href:"https://github.com/kouprin/accounts-marketplace","data-ribbon":"Fork me on GitHub",title:"Fork me on GitHub"},"Fork me on GitHub"),d.a.createElement(h.c,null,d.a.createElement(h.a,{exact:!0,path:"/"},d.a.createElement(w.a,t)),d.a.createElement(h.a,{exact:!0,path:"/rules"},d.a.createElement(_.a,t)),d.a.createElement(h.a,{exact:!0,path:"/offer"},d.a.createElement(N.a,t)),d.a.createElement(h.a,{exact:!0,path:"/profile/:profileId"},d.a.createElement(x.a,t)),d.a.createElement(h.a,{exact:!0,path:"/bid/:bidId"},d.a.createElement(O.a,t)),d.a.createElement(h.a,{exact:!0,path:"/acquire/:bidId"},d.a.createElement(k.a,t)))))}}]),r}(d.a.Component);t.a=A}).call(this,a(5).Buffer)},190:function(e,t,a){e.exports=a.p+"static/media/logo.af8e6949.png"},191:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(105),l=a(6),i=a(16),s=(a(287),a(0)),o=a.n(s),u=a(33),m=a(194),d=a.n(m);t.a=function(e){var t=Object(s.useState)([]),a=Object(i.a)(t,2),n=a[0],m=a[1],f=Object(s.useState)(!1),b=Object(i.a)(f,2),p=b[0],E=b[1],h=function(){var t=Object(l.a)(r.a.mark((function t(){var a,l,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(c.a)(n),l=a.length>0?a[a.length-1]:null,t.next=4,e._near.contract.get_top_bets({from_key:l,limit:25});case 4:i=t.sent,a.push.apply(a,Object(c.a)(i)),0===i.length&&E(!1),m(a);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(s.useEffect)((function(){e.connected&&E(!0)}),[e.connected]);var g=n.map((function(t){var a=Object(i.a)(t,2),n=(a[0],a[1]);return o.a.createElement(u.a,Object.assign({},e,{key:n,bidId:n}))})),v=o.a.createElement("div",{key:"1",className:"d-flex justify-content-center"},o.a.createElement("div",{className:"spinner-grow",role:"status"},o.a.createElement("span",{className:"visually-hidden"},"Loading...")));return o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",null,o.a.createElement("h3",null,"Account names on sale")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement(d.a,{pageStart:0,loadMore:h,hasMore:p,loader:v},g)))))}},195:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(6),l=a(0),i=a.n(l),s=a(25),o=a.n(s);t.a=function(e){var t=e._near.accountSuffix;function a(){return(a=Object(c.a)(r.a.mark((function t(a){var n,c,l,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n="Accounts Marketplace",e.signedIn&&e._near.logOut(),!e.connected){t.next=16;break}return c=document.getElementById("offerInput").value+"."+e._near.accountSuffix,t.next=7,e._near.near.account(c);case 7:return l=t.sent,t.next=10,l.getAccessKeys();case 10:return i=t.sent,o.a.set(e._near.lsPrevKeys,i),o.a.set(e._near.lsFavorAccountId,document.getElementById("rewardsInput").value+"."+e._near.accountSuffix),o.a.set(e._near.lsOfferAccountId,c),t.next=16,e._near.walletConnection.requestSignIn("",n);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var n=o.a.get(e._near.lsMsg);return i.a.createElement("div",{className:"container my-auto"},i.a.createElement("h1",{className:"text-center"},"Offer your account"),i.a.createElement("h2",{className:"text-center"},"Here you can offer your account to the Market. Choose an account to transfer all rewards after claiming your account."),n?i.a.createElement("h3",null,n):i.a.createElement("div",null),i.a.createElement("form",{onSubmit:function(e){return function(e){return a.apply(this,arguments)}(e)}},i.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},i.a.createElement("div",{className:"form-group",style:{width:"400px",margin:"25px"}},i.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Account you offer"),i.a.createElement("div",{className:"account-suffix account-suffix-"+t},i.a.createElement("input",{type:"text",className:"form-control mt-2",id:"offerInput",placeholder:"Example: satoshi"})),i.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"All your access keys will be removed"),i.a.createElement("div",{style:{margin:"25px"}}),i.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Account which takes rewards"),i.a.createElement("div",{className:"account-suffix account-suffix-"+t},i.a.createElement("input",{type:"text",className:"form-control mt-2",id:"rewardsInput",placeholder:"Example: vitalik"})),i.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"All rewards will be transferred to this account"),i.a.createElement("br",null),i.a.createElement("button",{className:"btn btn-outline-warning mt-5 w-100"},"Offer"),i.a.createElement("h2",{className:"text-center"},"DO NOT REFRESH THIS PAGE UNTIL YOU SEE RESULTS")))))}},196:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(6),l=a(16),i=a(0),s=a.n(i),o=a(10);t.a=function(e){var t=Object(i.useState)(null),a=Object(l.a)(t,2),n=a[0],u=a[1],m=Object(i.useState)(!0),d=Object(l.a)(m,2),f=d[0],b=d[1],p=Object(i.useCallback)(Object(c.a)(r.a.mark((function t(){var a,n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e._near.contract.get_global_stats()]);case 2:return a=t.sent,n=Object(l.a)(a,1),c=n[0],t.abrupt("return",{numProfiles:(r=c)[0],numBids:r[1],totalCommission:Object(o.a)(r[2]),numOffers:r[3],numBets:r[4],numClaims:r[5],numAcquisitions:r[6]});case 6:case"end":return t.stop()}var r}),t)}))),[e._near]);return Object(i.useEffect)((function(){e.connected&&p().then((function(e){u(e),b(!1)}))}),[e.connected,p]),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},f?s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("div",{className:"spinner-grow",role:"status"},s.a.createElement("span",{className:"visually-hidden"},"Loading...")))):s.a.createElement("div",{className:"col col-12 col-lg-8 col-xl-8"},Object(o.c)(),s.a.createElement("div",null,s.a.createElement("h3",null,"Global Stats"),s.a.createElement("ul",null,s.a.createElement("li",null,"Num active profiles: ",n.numProfiles),s.a.createElement("li",null,"Num active bids: ",n.numBids))))))}},197:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(6),l=a(16),i=a(0),s=a.n(i),o=a(4),u=a(33);t.a=function(e){var t=Object(o.f)().profileId,a=Object(i.useState)(null),n=Object(l.a)(a,2),m=n[0],d=n[1],f=Object(i.useCallback)(Object(c.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e._near.getProfile(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)}))),[e._near,t]);Object(i.useEffect)((function(){e.connected&&f().then(d)}),[e.connected,f]);var b=null,p=null;e.connected&&m&&(b=m.acquisitions.map((function(t){return s.a.createElement(u.a,Object.assign({},e,{key:t,bidId:t,onAcquisition:!0}))})),p=m.participation.map((function(t){return s.a.createElement(u.a,Object.assign({},e,{key:t,bidId:t}))})));var E=s.a.createElement("div",{className:"d-flex justify-content-center",key:"loader"},s.a.createElement("div",{className:"spinner-grow",role:"status"},s.a.createElement("span",{className:"visually-hidden"},"Loading...")));return s.a.createElement("div",null,s.a.createElement("div",{className:"container"},e.connected?s.a.createElement("div",{className:"row justify-content-md-center"},m?s.a.createElement("div",{className:"col col-12 col-lg-4 col-xl-4"},s.a.createElement("h3",null,"Stats"),s.a.createElement("ul",null,s.a.createElement("li",null,"Bets volume: ",m.betsVolume.toFixed(2)," NEAR"),s.a.createElement("li",null,"Available rewards: ",m.availableRewards.toFixed(2)," NEAR"),s.a.createElement("li",null,"TODO BUTTON TO COLLECT REWARDS"),s.a.createElement("li",null,"TODO PRINT OTHER LOCAL STATS"))):s.a.createElement("div",{className:"col col-12 col-lg-8 col-xl-6"},s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("div",{className:"spinner-grow",role:"status"},s.a.createElement("span",{className:"visually-hidden"},"Loading..."))))):s.a.createElement("div",null),s.a.createElement("div",{className:"col"},s.a.createElement("h3",null,"Successful claims"),b||E),s.a.createElement("div",{className:"col"},s.a.createElement("h3",null,"Participating"),p||E)))}},198:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(6),l=a(0),i=a.n(l),s=a(4),o=a(10),u=a(199);t.a=function(e){var t=Object(s.f)().bidId;function a(){return(a=Object(c.a)(r.a.mark((function a(n){var c,l;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),c=document.getElementById("acquireSeedPhrase").value,l=Object(u.parseSeedPhrase)(c,"").publicKey,console.log(l),a.next=6,e._near.contract.acquire({bid_id:t,new_public_key:l},"200000000000000","0");case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function n(){return(n=Object(c.a)(r.a.mark((function a(n){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),c=document.getElementById("acquirePublicKey").value,console.log(c),a.next=5,e._near.contract.acquire({bid_id:t,new_public_key:c},"200000000000000","0");case 5:case"end":return a.stop()}}),a)})))).apply(this,arguments)}var l=e._near.config.walletUrl+"/setup-seed-phrase/"+t+"/phrase",m=e._near.config.walletUrl+"/recover-seed-phrase";return i.a.createElement("div",{className:"container my-auto"},i.a.createElement("h1",{className:"text-center"},"Acquire ",t),i.a.createElement("h2",{className:"text-center"},"Do it easy way or like a pro?"),i.a.createElement("hr",null),i.a.createElement("form",{onSubmit:function(e){return function(e){return a.apply(this,arguments)}(e)}},i.a.createElement("h3",{className:"text-center"},"Generate a seed phrase"),i.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},i.a.createElement("div",{className:"form-group",style:{width:"600px",margin:"25px"}},i.a.createElement("div",null,"1. Generate a new seed phrase"),i.a.createElement("a",{href:l},"Go to the NEAR wallet and copy your seed phrase"),i.a.createElement("div",null,'2. Put your seed phrase here and click on "Acquire using seed phrase"'),i.a.createElement("div",null,i.a.createElement("input",{type:"text",className:"form-control mt-2",id:"acquireSeedPhrase",placeholder:"Example: van honey cattle trend garbage human cereal donor pipe you response gym "})),e.connected?i.a.createElement("button",{className:"btn btn-outline-warning my-3 w-100"},"Acquire using seed phrase"):Object(o.b)(),i.a.createElement("div",null,"3. Restore you account at NEAR wallet using seed phrase"),i.a.createElement("a",{href:m},"Go to the NEAR wallet and restore your account")))),i.a.createElement("hr",null),i.a.createElement("form",{onSubmit:function(e){return function(e){return n.apply(this,arguments)}(e)}},i.a.createElement("h3",{className:"text-center"},"or \u2014 Transfer your public key"),i.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},i.a.createElement("div",{className:"form-group",style:{width:"600px",margin:"25px"}},i.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Put your base58 public key"),i.a.createElement("div",null,i.a.createElement("input",{type:"text",className:"form-control mt-2",id:"acquirePublicKey",placeholder:"Example: 9bk1tm45X2hBSffmD65pA2vch862jtcz75mkRR7MXNVj"})),e.connected?i.a.createElement("button",{className:"btn btn-outline-warning mt-3 w-100"},"Acquire using new public key"):Object(o.b)()))))}},203:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(6),l=a(16),i=a(0),s=a.n(i),o=a(4),u=a(10);function m(e){var t=e.betPrice,a=e.forfeit,n=Object(u.a)(t)+Object(u.a)(a);function l(){return(l=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),console.log(String(1e9*n)+"000000000000000"),t.next=4,e._near.contract.bet({bid_id:e.bidId},"200000000000000",String(parseInt(1.01*n*1e9))+"000000000000000");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return s.a.createElement("button",{className:"btn btn-primary btn-lg btn-block",disabled:!e.signedIn,onClick:function(e){return function(e){return l.apply(this,arguments)}(e)}},"Bet for ",n.toFixed(6)," NEAR")}function d(e){console.log(e);var t=Object(u.a)(e.claimPrice);function a(e){return n.apply(this,arguments)}function n(){return(n=Object(c.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),console.log(String(1e9*t)+"000000000000000"),a.next=4,e._near.contract.claim({bid_id:e.bidId},"200000000000000",String(parseInt(1e9*t))+"000000000000000");case 4:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return t?s.a.createElement("button",{className:"btn btn-success btn-lg btn-block",disabled:!e.signedIn,onClick:function(e){return a(e)}},"Claim for ",t.toFixed(6)," NEAR"):s.a.createElement("button",{className:"btn btn-outline-warning btn-lg btn-block",disabled:!0,onClick:function(e){return a(e)}},"Already claimed - you can only bet")}function f(e){function t(){return(t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),(n=document.getElementById("finalize_button_input")).disabled=!0,n.innerText="Finalizing...",t.next=6,e._near.contract.finalize({bid_id:e.bidId},"200000000000000","0");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return s.a.createElement("button",{id:"finalize_button_input",className:"btn btn-primary btn-lg btn-block",disabled:!e.signedIn,onClick:function(e){return function(e){return t.apply(this,arguments)}(e)}},"Finalize")}function b(e){function t(){return(t=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),(a=document.getElementById("acquire_button_input")).disabled=!0,a.innerText="Acquiring...";case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return s.a.createElement("button",{id:"acquire_button_input",className:"btn btn-success btn-lg btn-block",disabled:!e.signedIn,onClick:function(e){return function(e){return t.apply(this,arguments)}(e)}},"Acquire")}function p(e){var t=e.bidInfo,a=t.isAtMarket,n=t.isOnAcquisition,r=!1;return e.signedIn&&e.profile.acquisitions.forEach((function(t){t===e.bidId&&(r=!0)})),a?n?s.a.createElement("div",null,s.a.createElement("div",{className:"row py-3"},s.a.createElement(f,Object.assign({},e,{bidInfo:e.bidInfo})))):s.a.createElement("div",null,s.a.createElement("div",{className:"row py-3"},s.a.createElement(m,Object.assign({},e,{betPrice:t.betPrice,forfeit:t.forfeit})),s.a.createElement("div",{className:"row py-1"}),s.a.createElement(d,Object.assign({},e,{claimPrice:t.claimPrice})))):r?s.a.createElement("div",null,s.a.createElement("h4",null,"Congratulations! You claimed the account successfully. Please proceed to the acquisition procedure."),s.a.createElement("div",{className:"row py-3"},s.a.createElement(b,Object.assign({},e,{bidInfo:e.bidInfo})))):s.a.createElement("div",null,"Is not on market. Is it a good fit?")}var E=a(33);t.a=function(e){var t=Object(o.f)().bidId,a=Object(i.useState)(null),n=Object(l.a)(a,2),u=n[0],m=n[1],d=e.refreshTime,f=e.hidden,b=Object(i.useCallback)(Object(c.a)(r.a.mark((function a(){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=E.b,a.next=3,e._near.contract.get_bid({bid_id:t});case 3:return a.t1=a.sent,(n=(0,a.t0)(a.t1)).refreshTime=d,a.abrupt("return",n);case 7:case"end":return a.stop()}}),a)}))),[e._near,t,d]);return Object(i.useEffect)((function(){e.connected&&!f&&b().then(m)}),[e.connected,b,t,f]),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col col-12 col-lg-8 col-xl-6"},u?s.a.createElement("div",{className:"bid m-2"},s.a.createElement("div",{className:"bid-body text-start"},s.a.createElement("h3",null,t),u.claimedBy?s.a.createElement("div",null,s.a.createElement("p",null,"Claimed by ",u.claimedBy[0])):s.a.createElement("div",null,s.a.createElement("p",null,"Not claimed by anyone.")),s.a.createElement("div",null,s.a.createElement("p",null,"Accounts who bet:"),s.a.createElement("table",{className:"table"},s.a.createElement("tbody",null,u.bets.map((function(e,t){return s.a.createElement("tr",{key:t},e)})))))),s.a.createElement("div",{className:"text-center"},s.a.createElement(p,Object.assign({},e,{bidId:t,bidInfo:u})),s.a.createElement("div",{className:"row text-muted text-start"},"Price breakdown: ...",s.a.createElement("p",null,"blah")))):s.a.createElement("div",{className:"bid m-2"},s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("div",{className:"spinner-grow",role:"status"},s.a.createElement("span",{className:"visually-hidden"},"Loading...")))))))}},204:function(e,t,a){e.exports=a(205)},205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(186),l=a.n(c),i=(a(210),a(187));l.a.render(r.a.createElement(i.a,null),document.getElementById("root"))},210:function(e,t,a){},231:function(e,t,a){},232:function(e,t,a){},236:function(e,t){},242:function(e,t){},257:function(e,t){},259:function(e,t){},287:function(e,t,a){},288:function(e,t,a){},297:function(e,t){},299:function(e,t){},33:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(6),l=a(16),i=(a(288),a(0)),s=a.n(i),o=a(17),u=a(10);function m(e){return s.a.createElement("div",null,s.a.createElement(o.b,{to:"/acquire/".concat(e.bidId),className:"btn btn-success"},"Acquire"))}function d(e){return s.a.createElement("div",null,s.a.createElement(o.b,{to:"/bid/".concat(e.bidId),className:"btn btn-success"},"Starts from ",(Object(u.a)(e.price)+Object(u.a)(e.forfeit)).toFixed(2)," NEAR"))}function f(e){return s.a.createElement("div",null,s.a.createElement(o.b,{to:"/bid/".concat(e.bidId),className:"btn btn-primary"},"Details"))}a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var b=function(e){return e?{isAtMarket:!0,numClaims:e.num_claims,claimedBy:e.claim,bets:e.bets,betPrice:e.bet_price,claimPrice:e.claim_price,forfeit:e.forfeit,isOnAcquisition:e.on_acquisition}:{isAtMarket:!1,numClaims:0,claimedBy:null,bets:[],betPrice:0,claimPrice:0,forfeit:null,isOnAcquisition:!1}};function p(e){var t=Object(i.useState)(e.bid),a=Object(l.a)(t,2),n=a[0],u=a[1],p=e.bidId,E=e.bid,h=!!e.onAcquisition,g=Object(i.useCallback)(Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(h){t.next=8;break}return t.t0=b,t.next=4,e._near.contract.get_bid({bid_id:p});case 4:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 8:return t.abrupt("return",b(null));case 9:case"end":return t.stop()}}),t)}))),[e._near,p,h]);return Object(i.useEffect)((function(){e.connected&&(E?u(E):g().then(u))}),[e.connected,E,g]),n?s.a.createElement("div",{className:"container m-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-5"},s.a.createElement(o.b,{className:"nav-link",to:"/bid/".concat(p)},p)),s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"row py-2"})),s.a.createElement("div",{className:"col-6"},h?s.a.createElement(m,Object.assign({},e,{bidId:p})):n.isOnAcquisition?s.a.createElement(f,Object.assign({},e,{bidId:p})):s.a.createElement(d,Object.assign({},e,{bidId:p,price:n.betPrice,forfeit:n.forfeit}))))):s.a.createElement("div",{className:"container m-2"},s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("div",{className:"spinner-grow",role:"status"},s.a.createElement("span",{className:"visually-hidden"},"Loading..."))))}},332:function(e,t){},334:function(e,t){},335:function(e,t){},340:function(e,t){},342:function(e,t){},349:function(e,t){},368:function(e,t){},380:function(e,t){},383:function(e,t){}},[[204,1,2]]]);
//# sourceMappingURL=main.0dbedaca.chunk.js.map