(function(){var e={463:function(e,n,t){"use strict";t.d(n,{Jg:function(){return a},jf:function(){return r},xK:function(){return i}});const o={ChainId:"",TokenName:"DZ",TokenDecimals:6,TokenAddress:"TLGrCbpk8fZz4Paig8mk64jzyBqH7PMMfG",USDT:"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",TokenAbi:[],PoolAddress:"TG2pmoQYFNk7QpiirSVnxUPxSziHotSAxM",PoolAbi:[],PurchaseAddress:"",PurchaseAbi:[],HOLE:"T9yD14Nj9j7xAB4dbGeiX9h8upfCg3PBbY",PowerDecimals:6,ActiveAmount:"50",node:"https://api.trongrid.io",defaultActiveAddress:"TAjTaKLYL712fP8zHY8SXmPjTavEjG6bSn",exchangeMin:1,exchangeMax:2e3,ExchangeAddress:""},a=o,i={TRON:[{symbol:"TRX",name:"",icon:"./coin/trx.svg",address:"",decimal:6,isDefault:!0},{symbol:"USDT",name:"Tether USDT",icon:"./coin/usdt-tron.svg",address:"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",decimal:6},{symbol:"DZ",name:"DZ Swap",icon:"./coin/dz.svg",address:a.TokenAddress,decimal:a.TokenDecimals},{symbol:"AMC",name:"DZ Swap",icon:"./coin/amc.svg",address:"TRpvWVzoQx1hLDW3rNS519StQe5NfNYrf9",decimal:6},{symbol:"SPA",name:"DZ Swap",icon:"./coin/spa.svg",address:"THig22CbvGqi1wBAhdQXPZQ3fdV9MgxAHy",decimal:18},{symbol:"USDC",name:"USD Coin",icon:"./coin/usdc-tron.png",address:"TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8",decimal:6},{symbol:"JST",name:"JUST",icon:"./coin/jst-tron.png",address:"TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9",decimal:18},{symbol:"BTC",name:"Bitcoin",icon:"./coin/btc-tron.png",address:"TN3W4H6rK2ce4vX9YnFQHwKENnHjoxb3m9",decimal:8},{symbol:"DOGE",name:"Dogecoin",icon:"./coin/doge-tron.png",address:"THbVQp8kMjStKNnf2iCY6NEzThKMK5aBHg",decimal:8},{symbol:"SUN",name:"SUN",icon:"./coin/sun-tron.png",address:"TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S",decimal:18}]},r=(a.TokenAddress,a.TokenDecimals,[{id:0,poolIcon:"./mining-icon/amc.png",poolName:"AMC",icon1:"./coin/usdt-tron.svg",tokenName1:"USDT",tokenAddress1:a.USDT,tokenDecimal1:6,icon2:"./coin/amc.svg",tokenName2:"AMC",tokenAddress2:"TRpvWVzoQx1hLDW3rNS519StQe5NfNYrf9",tokenDecimal2:6,isShow:!0,powers:"--.--",consumes:"--.--",price:"--.--",ins:"--",rate:"",decimal:6,index:0},{id:1,poolIcon:"./mining-icon/spa.png",poolName:"SPA",icon1:"./coin/usdt-tron.svg",tokenName1:"USDT",tokenAddress1:a.USDT,tokenDecimal1:6,icon2:"./coin/spa.svg",tokenName2:"SPA",tokenAddress2:"THig22CbvGqi1wBAhdQXPZQ3fdV9MgxAHy",tokenDecimal2:18,isShow:!0,powers:"--.--",consumes:"--.--",price:"--.--",ins:"--",rate:"",decimal:18,index:1}])},7608:function(e,n,t){"use strict";t.d(n,{dE:function(){return l},ku:function(){return u},c1:function(){return d},oj:function(){return m},nz:function(){return p},Gd:function(){return g},Gm:function(){return f},ic:function(){return h},fI:function(){return w},eI:function(){return v},_6:function(){return y},QS:function(){return T},ZN:function(){return b},xx:function(){return S},r4:function(){return k}});var o=t(1046),a=t(6441),i=t(335),r=t(463);t(2201);const s=new Map;async function c(e,n){try{if(!e.provider||!e.account)return void console.log("no provider!");let t=s.get(n);return t||(t=await e.provider.contract().at(n),s.set(n,t)),t}catch(t){console.log("contract error:",t.message)}}async function l(e,n,t){const a=await c(e,n);return a.approve(t,o.Bz).send()}async function u(e){try{const n=await c(e,r.Jg.PoolAddress),t=await n.miner(e.account).call(),o=await n.isActive(e.account).call();return{hashRate:a.bM(t.hashrate,r.Jg.TokenDecimals),bonus:a.bM(t.bonus,r.Jg.TokenDecimals),rewardDebt:a.bM(t.out,r.Jg.TokenDecimals),isActiveAccount:o}}catch(n){console.log(n)}}async function d(e){try{const n=await c(e,r.Jg.PoolAddress),t=await n.referee(e.account).call();let o=await n.refers(e.account).call();return o=o.map((n=>e.provider.address.fromHex(n))),{referee:e.provider.address.fromHex(t),refers:o}}catch(n){console.log(n)}}async function m(e){try{const n=await c(e,r.Jg.PoolAddress),t=await n.activeValue().call();return a.bM(t,6)}catch(n){console.log(n)}}async function p(e,n){const t=await c(e,r.Jg.PoolAddress);return t.isActive(n).call()}async function g(e,n,t){const o=await c(e,r.Jg.PoolAddress);return o.active(n).send({callValue:a.vz(t,6)})}async function f(e){const n=await c(e,r.Jg.PoolAddress);return n.supportTokenInfos().call()}async function h(e){try{const n=await c(e,r.Jg.USDT),t=await n.allowance(e.account,r.Jg.PoolAddress).call(),o=await n.balanceOf(e.account).call();return{isApprove:t.remaining?!t.remaining.isZero():!t.isZero(),balance:a.bM(o,6)}}catch(n){console.log(n)}}async function w(e,n,t){const o=await c(e,r.Jg.PoolAddress);return o.reflectHashrate(n,t).call()}async function v(e,n){const t=await c(e,n.tokenAddress2),o=await t.allowance(e.account,r.Jg.PoolAddress).call(),i=await t.balanceOf(e.account).call();return console.log(i),{approveToken2:o.remaining?!o.remaining:!o.isZero(),balanceToken2:a.bM(i._isBigNumber?i:i.balance,n.tokenDecimal2)}}async function y(e,n,t){const o=await c(e,r.Jg.PoolAddress),a=Math.floor((new Date).getTime()/1e3)+30;return o.deposit(n,t,a).send()}async function T(e){const n=await c(e,r.Jg.PoolAddress);return n.claim().send()}async function b(e){try{const n=await c(e,r.Jg.PoolAddress),t=await n.pool().call();return i.xs.from(a.bM(t.ism,6)).mulUnsafe(i.xs.from(String(86400))).round(0).toString()}catch(n){console.log(n)}}async function S(e){try{const n=await c(e,r.Jg.TokenAddress),t=await n.balanceOf(r.Jg.PoolAddress).call();return a.bM(t,r.Jg.TokenDecimals)}catch(n){console.log(n)}}async function k(e){try{const n=await c(e,r.Jg.TokenAddress),t=await n.totalSupply().call(),o=await n.balanceOf(r.Jg.HOLE).call(),i=await n.balanceOf(r.Jg.PoolAddress).call();return{totalSupply:a.bM(t,r.Jg.TokenDecimals),holeBalance:a.bM(o,r.Jg.TokenDecimals),poolBalance:a.bM(i,r.Jg.TokenDecimals)}}catch(n){console.log(n)}}},466:function(e,n,t){"use strict";t(3474);var o=t(6622),a=(t(1087),t(5803)),i=(t(9763),t(5023)),r=(t(9485),t(9813)),s=(t(6866),t(9439)),c=(t(4268),t(5948)),l=(t(7595),t(8323)),u=t(9963),d=t(6252);function m(e,n,t,o,a,i){const r=(0,d.up)("router-view");return(0,d.wg)(),(0,d.j4)(r)}var p=t(2262),g=t(894),f=t(463);const h=e=>{window.addEventListener("message",(({data:{message:e}})=>{!e||"accountsChanged"!==e.action&&"setNode"!==e.action||window.location.reload()}))},w=()=>new Promise(((e,n)=>{let t=0;const o=setInterval((()=>{t>50&&(clearInterval(o),window.tronWeb?window.tronWeb.defaultAddress.base58?n(new Error("timeout")):n(new Error("unlock")):n(new Error("install"))),window.tronWeb&&window.tronWeb.defaultAddress.base58&&(clearInterval(o),e(window.tronWeb)),t++}),100)})),v=async e=>{e.chainName="TRON",e.status="connecting",h(e);try{const n=await w();e.provider=n,e.account=n.defaultAddress.base58,e.status="connected",e.isActive=!0}catch(n){console.log(n.message),e.status=n.message}};var y={name:"App",setup(){const e=(0,g.oR)(),n=(0,p.qj)({account:"",provider:null,status:"connecting",isActive:!1,chainId:"",chainName:""});(0,d.JJ)("chainInfo",n);const t=async()=>{await v(n)};return(0,d.bv)((async()=>{console.log(f.Jg.PoolAddress),await v(n)})),(0,d.Ah)((()=>{clearInterval()})),{chainInfo:n,reconnect:t,txList:(0,p.Fl)((()=>e.state.txList))}}};y.render=m;var T=y,b=t(2119);(0,d.dD)("data-v-099bd91a");const S={id:"basic-layout"},k={class:"page-container"};function A(e,n,t,o,a,i){const r=(0,d.up)("NavMenu"),s=(0,d.up)("router-view");return(0,d.wg)(),(0,d.iD)("div",S,[(0,d.Wm)(r),(0,d._)("div",k,[(0,d.Wm)(s)])])}(0,d.Cn)();var P=t.p+"img/text-logo.d72c0f43.png";(0,d.dD)("data-v-a4a09736");const x={class:"nav-bar"},C={class:"container"},D=(0,d._)("div",{class:"title font-bold font18"},[(0,d._)("img",{src:P,alt:""})],-1),I={class:"lang-menu"};function L(e,n,t,o,a,i){const r=(0,d.up)("SliderMenu"),s=(0,d.up)("van-popup");return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d._)("div",x,[(0,d._)("div",C,[(0,d._)("div",{class:"menu-icon",onClick:n[0]||(n[0]=e=>o.state.show=!0)}),D,(0,d._)("div",{class:"lang-icon",onClick:n[1]||(n[1]=e=>o.state.showLangMenu=!o.state.showLangMenu)}),(0,d.wy)((0,d._)("div",I,[(0,d._)("div",{class:"menu-item",onClick:n[2]||(n[2]=e=>o.onSelectLang("zh"))},"中文"),(0,d._)("div",{class:"menu-item",onClick:n[3]||(n[3]=e=>o.onSelectLang("en"))},"English")],512),[[u.F8,o.state.showLangMenu]])])]),(0,d.Wm)(s,{id:"slider",show:o.state.show,"onUpdate:show":n[5]||(n[5]=e=>o.state.show=e),position:"left"},{default:(0,d.w5)((()=>[(0,d.Wm)(r,{onHide:n[4]||(n[4]=e=>o.state.show=!1)})])),_:1},8,["show"])],64)}(0,d.Cn)();var N=t(1994),_=t(3577);(0,d.dD)("data-v-77e0c8f2");const M={class:"slider-menu"},E={class:"account-card"},H={key:0,class:"mb-2"},O=(0,d._)("div",{class:"font18"},"Address",-1),j={class:"address font12"},J={class:"flex flex-align-center"},R={href:"#"},V=(0,d._)("i",{class:"code"},null,-1),B={class:"nav-item"},Z={href:"https://dzswap.github.io/info/",target:"_blank"},z=(0,d._)("i",{class:"product"},null,-1),U={href:"#"},q=(0,d._)("i",{class:"community"},null,-1),W={href:"#"},Q=(0,d._)("i",{class:"disclaimer"},null,-1);function Y(e,n,t,o,a,i){const r=(0,d.up)("router-link");return(0,d.wg)(),(0,d.iD)("div",M,[(0,d._)("div",E,["connected"===o.chainInfo.status?((0,d.wg)(),(0,d.iD)("div",H,[O,(0,d._)("div",j,(0,_.zw)(o.chainInfo.account),1)])):(0,d.kq)("",!0),(0,d._)("div",J,[(0,d._)("span",{class:(0,_.C_)(["status",o.chainInfo.status])},null,2),(0,d._)("span",null,(0,_.zw)(o.chainInfo.chainName)+" "+(0,_.zw)(e.$t(o.chainInfo.status)),1)])]),((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(a.menuOptions,(t=>((0,d.wg)(),(0,d.iD)("div",{class:"nav-item",key:t.name,onClick:n[0]||(n[0]=n=>e.$emit("hide"))},[(0,d.Wm)(r,{to:t.url},{default:(0,d.w5)((()=>[(0,d._)("i",{class:(0,_.C_)(t.name)},null,2),(0,d._)("span",null,(0,_.zw)(e.$t(t.name)),1)])),_:2},1032,["to"])])))),128)),(0,d._)("div",{class:"nav-item",onClick:n[1]||(n[1]=n=>o.Toast(e.$t("comingSoon")))},[(0,d._)("a",R,[V,(0,d._)("span",null,(0,_.zw)(e.$t("openSourceCode")),1)])]),(0,d._)("div",B,[(0,d._)("a",Z,[z,(0,d._)("span",null,(0,_.zw)(e.$t("auditReport")),1)])]),(0,d._)("div",{class:"nav-item",onClick:n[2]||(n[2]=n=>o.Toast(e.$t("comingSoon")))},[(0,d._)("a",U,[q,(0,d._)("span",null,(0,_.zw)(e.$t("communityStatement")),1)])]),(0,d._)("div",{class:"nav-item",onClick:n[3]||(n[3]=n=>o.Toast(e.$t("comingSoon")))},[(0,d._)("a",W,[Q,(0,d._)("span",null,(0,_.zw)(e.$t("disclaimer")),1)])])])}(0,d.Cn)();var G={name:"SliderMenu",setup(){const e=(0,d.f3)("chainInfo"),n=(0,g.oR)(),t=(0,p.qj)({modalVisible:!1,exitModalVisible:!1});return{chainInfo:e,userInfo:n.state.userInfo,state:t,Toast:a.Z,fixedNumber:N.Bs}},emits:["close","hide"],data(){return{menuOptions:[{name:"pool",url:"/pool"},{name:"swap",url:"/swap"},{name:"team",url:"/team"},{name:"invite",url:"/invite"}]}}};G.render=Y,G.__scopeId="data-v-77e0c8f2";var K=G,$=t(1522),F={pool:"Pool",poolInfo:"pool info",swap:"Swap",team:"Team",invite:"Invite",auditReport:"Project",openSourceCode:"OpenSource",disclaimer:"Disclaimer",communityStatement:"Application",networkError:"Network error",switchNetwork:"Select network",install:"Install wallet plugin",unlock:"Unlock the wallet",connecting:"Connecting...",timeout:"Connection timeout",connected:"Connected",connectWallet:"Connecting wallet",reconnect:"reconnect",assets:"assets",noData:"No data at this time",balance:"Balance",confirm:"OK",transferIn:"Transfer in",transferOut:"Transfer out",inputAmount:"Enter amount",availableBalance:"Available Balance",selectToken:"Select token",deposit:"Pledge",exchange:"Exchange",inputQuantity:"Input quantity",copy:"Copy",hash:"Hash",timestamp:"Timestamp",exchangeNow:"Exchange Now",close:"Close",destroy:"Destroy",swapView:{capitalPool:"pool",exchangeRate:"Exchange rate",fee:"fee",exchangeNow:"Exchange Now",exchangeRecord:"Exchange record",transferSetting:"Transaction Settings",slippageSetting:"slippage setting",deadline:"Deadline",min:"minutes",settingTip1:"If the price moves by more than this percentage, your trade will be returned.",settingTip2:"If your trade is still pending confirmation after this time, your trade will be returned.",confirmSet:"Confirmation settings",minReceive:"Minimum amount to receive"},poolView:{luckMining:"Mining",activeAccount:"Active",activeP1:"Welcome to DZSwap",activeP2:"Activate miners to mine together with arithmetic",activePay:"Activate Payments",searchTip:"Enter the coin to search for",totalPower:"Total network power",totalDestroy:"Total Destroyed",totalMining:"Total mining",userComputePower:"Hashrate",userIncome:"Earnings",exitPool:"Quit the pool",upgradeVip:"Upgrade level",withdraw:"Withdraw",totalLockAmount:"Total Lock Amount",userLockAmount:"Locked positions",deposit:"Deposit",receive:"Harvest",upgradeNow:"Upgrade Now",destroy:"Destroy",price:"Price",minerInfo:"Information",exchange:"Exchange",join:"Join",community:"Community",communityPower:"Hashrate",rewardPower:"Live Power",communityIntro:"Community Intro"},poolInfoView:{tokenAddress:"Token Contract",openSourceStatus:"Open Source Status",openSource:"Open Sourced",totalAmount:"Total Issue",holdAddress:"Hold Address",dayOutput:"Daily Production",poolContractBalance:"Pool Contract",circulation:"Circulation",blackHoleAddress:"BlackHole Address",dayTradingVolume:"24-hour Trading Volume",dayTradingAmount:"24-hour Volume",liquidityPool:"Liquidity Pool",buy:"Buy",sell:"Sell",addLiquidity:"Add Liquidity",removeLiquidity:"Remove Liquidity",latest:"Latest",refresh:"Refresh"},teamView:{myTeam:"Team",inviteReward:"Reward",referer:"Inviter"},shareView:{scanTip:"Swipe or copy link"},networkErrorTip:"Please make sure the network connection is correct",copySuccess:"Copied",insufficientBalance:"Insufficient balance",operationSucceed:"Operation succeeded",activeInputTip:"Please enter the invitation address first to activate your account",inputAddressTip:"Please enter the correct address",activeAccountTip:"Can not use your own address",transactionSubmitted:"The transaction has been submitted",minAmount:"Minimum amount",maxAmount:"Maximum amount",comingSoon:"Coming soon",coinPairNotOpen:"The transaction pair has not been opened yet",SUCCESS:"Success",REVERT:"REVERT",exchangeLoading:"In transaction..."},X={pool:"矿池",poolInfo:"矿池信息",swap:"Swap",team:"区块节点",invite:"节点裂变",auditReport:"项目介绍",openSourceCode:"开源源码",disclaimer:"免责声明",communityStatement:"社区申请",networkError:"网络错误",switchNetwork:"选择网络",install:"安装钱包插件",unlock:"解锁钱包",connecting:"连接中...",timeout:"连接超时",connected:"已连接",connectWallet:"连接钱包",reconnect:"重新连接",assets:"资产",noData:"暂无数据",balance:"余额",confirm:"确定",transferIn:"转入",transferOut:"转出",inputAmount:"输入金额",availableBalance:"可用余额",selectToken:"选择代币",deposit:"质押",exchange:"兑换",inputQuantity:"输入数量",copy:"复制",hash:"哈希",timestamp:"时间",exchangeNow:"立即兑换",close:"关闭",destroy:"销毁",swapView:{capitalPool:"资金池",exchangeRate:"汇率",fee:"手续费",exchangeNow:"立即兑换",exchangeRecord:"兑换记录",transferSetting:"交易设置",slippageSetting:"滑点设置",deadline:"截止时间",min:"分钟",settingTip1:"如果价格变动幅度超过此百分比，您的交易将退回。",settingTip2:"若您的交易超过此时间仍处于待确认状态，您的交易将退回。",confirmSet:"确认设置",minReceive:"最小接收额",swapStatus:"兑换状态",exchangePrice:"兑换价格"},poolView:{luckMining:"幸运挖矿",activeAccount:"激活矿工",activeP1:"欢迎来到DZSwap",activeP2:"激活矿工一起拼算力挖矿",activePay:"激活支付",searchTip:"输入要搜索的币种",totalPower:"全网算力",totalDestroy:"总销毁量",totalMining:"累计挖矿",userComputePower:"我的算力",userIncome:"我的收益",exitPool:"退出矿池",upgradeVip:"提升等级",withdraw:"提取收益",totalLockAmount:"锁仓总量",userLockAmount:"锁仓",deposit:"质押",receive:"收获",upgradeNow:"立刻升级",destroy:"销毁",price:"价格",minerInfo:"矿池信息",exchange:"兑换",join:"加入",community:"社区",communityPower:"算力",rewardPower:"活得算力",communityIntro:"社区介绍"},poolInfoView:{tokenAddress:"代币合约",openSourceStatus:"开源情况",openSource:"已开源",totalAmount:"总发行量",holdAddress:"持币地址",dayOutput:"今日产矿",poolContractBalance:"矿池合约",circulation:"流通量",blackHoleAddress:"黑洞地址",dayTradingVolume:"24小时成交数",dayTradingAmount:"24小时成交额",liquidityPool:"流动资金池",buy:"买入",sell:"卖出",addLiquidity:"添加流动性",removeLiquidity:"移除流动性",latest:"最新交易",refresh:"刷新"},teamView:{myTeam:"直系节点",inviteReward:"邀请奖励",referer:"前区块节点"},shareView:{scanTip:"扫一扫或复制链接"},networkErrorTip:"请确认网络连接正确",copySuccess:"已复制",insufficientBalance:"余额不足",operationSucceed:"操作成功",activeInputTip:"请先输入邀请地址用以激活账号",inputAddressTip:"请输入正确地址",activeAccountTip:"不能使用自己的的地址",transactionSubmitted:"交易已提交",minAmount:"最小额度",maxAmount:"最大额度",comingSoon:"即将到来",refereeNotActivated:"邀请帐号未激活",coinPairNotOpen:"暂未开放该交易对",exchangeTip1:"交易确认中...",exchangeComplete:"兑换已完成",SUCCESS:"兑换成功",REVERT:"兑换失败",exchangeLoading:"兑换中..."};const ee={en:{...F},zh:{...X}},ne=(0,$.o)({locale:localStorage.getItem("language")||"en",messages:ee});var te=ne,oe={name:"NavMenu",components:{SliderMenu:K},setup(){const e=(0,p.qj)({show:!1,showLangMenu:!1,lang:localStorage.getItem("language")}),n=n=>{e.lang=n,te.global.locale=n,localStorage.setItem("language",n),e.showLangMenu=!1};return{state:e,formatAddress:N.Tg,onSelectLang:n}}};oe.render=L,oe.__scopeId="data-v-a4a09736";var ae=oe,ie={name:"BasicLayout",components:{NavMenu:ae}};ie.render=A,ie.__scopeId="data-v-099bd91a";var re=ie;const se=[{path:"/",name:"BasicLayout",component:re,redirect:"/swap",children:[{path:"/pool",name:"pool",component:()=>t.e(793).then(t.bind(t,5793))},{path:"/pool-info",name:"poolInfo",component:()=>Promise.all([t.e(58),t.e(152),t.e(119)]).then(t.bind(t,3119))},{path:"/swap",name:"swap",component:()=>Promise.all([t.e(58),t.e(790)]).then(t.bind(t,4790))},{path:"/invite",name:"invite",component:()=>Promise.all([t.e(152),t.e(676)]).then(t.bind(t,1676))},{path:"/team",name:"team",component:()=>t.e(325).then(t.bind(t,5325))}]}],ce=(0,b.p7)({history:(0,b.r5)("/"),routes:se});var le=ce,ue=t(7608);var de=(0,g.MT)({state:{usdtPrice:"",userInfo:{hashRate:"--.--",bonus:"--.--",rewardDebt:"--.--",isActiveAccount:!1},teamInfo:{referee:"",refers:[]},defaultChainCoin:{name:"TRX",decimal:6,address:""},poolBannerInfo:{totalComputingPower:"--.--",destroyAmount:"--.--",earnings:"--.--"},poolsData:{tokenList:[],consumes:[],powers:[],hashrates:[],ins:[]},transactionList:[],poolPrimaryToken:{isApprove:!1,balance:"--.--"},swapTransactionList:[],swapPendingTxHashList:[],isClaim:!1},mutations:{},actions:{async getPools({state:e},n){const t=await(0,ue.Gm)(n);e.poolsData.tokenList=t.tokens,e.poolsData.powers=t.powers,e.poolsData.consumes=t.consumes,e.poolsData.hashrates=t.hashrates,e.poolsData.ins=t.ins},async getPrimaryTokenInfo({state:e},n){e.poolPrimaryToken=await(0,ue.ic)(n)},async getUserInfo({state:e},n){e.userInfo=await(0,ue.ku)(n)},async getUserTeamInfo({state:e},n){e.teamInfo=await(0,ue.c1)(n),console.log(e.teamInfo)},async fetchData({dispatch:e,state:n},t){try{await e("getUserInfo",t),await e("getPrimaryTokenInfo",t),await e("getPools",t)}catch(o){console.log(o),(0,a.Z)(o.data||o.message||o)}},setClaimStatus({state:e},n){e.isClaim=n},committedTransaction({state:e},n){e.transactionList.push(n)},getSwapRecord({state:e}){localStorage.getItem("swapTx")&&(e.swapTransactionList=JSON.parse(localStorage.getItem("swapTx"))),localStorage.getItem("pendingTx")&&(e.swapPendingTxHashList=JSON.parse(localStorage.getItem("pendingTx")))},committedSwapTransaction({state:e},n){let t=!1;for(let o=0;o<e.swapTransactionList.length;o++)if(e.swapTransactionList[o].txHash===n.txHash){t=!0,e.swapTransactionList[o].timestamp=n.timestamp,e.swapTransactionList[o].status=n.status;const a=e.swapPendingTxHashList.indexOf(e.swapTransactionList[o].txHash);e.swapPendingTxHashList.splice(a,1);break}console.log(t,n),t||(e.swapPendingTxHashList.push(n.txHash),e.swapTransactionList.unshift(n)),e.swapTransactionList.length>10&&(e.swapTransactionList=e.swapTransactionList.slice(0,10)),localStorage.setItem("swapTx",JSON.stringify(e.swapTransactionList)),localStorage.setItem("pendingTx",JSON.stringify(e.swapPendingTxHashList))}},modules:{}});const me=(0,u.ri)(T);me.config.productionTip=!1,me.use(o.Z).use(a.Z).use(i.Z).use(r.Z).use(s.Z).use(c.Z).use(l.Z).use(te).use(de).use(le).mount("#app")},1994:function(e,n,t){"use strict";t.d(n,{Tg:function(){return i},Bs:function(){return r},mr:function(){return s}});var o=t(335),a=t(558);function i(e){return!e||""===e||e.length<12?e:`${e.substring(0,6)}...${e.substring(e.length-6)}`}function r(e,n=4){return(0,a.kE)(e)?0===n?parseInt(o.xs.fromString(e).round(0).toString()):o.xs.fromString(e).round(n).toString():e}function s(e,n){if(0===arguments.length||!e)return null;const t=n||"{y}-{m}-{d} {h}:{i}:{s}";let o;"object"===typeof e?o=e:("string"===typeof e&&(e=/^[0-9]+$/.test(e)?parseInt(e):e.replace(new RegExp(/-/gm),"/")),"number"===typeof e&&10===e.toString().length&&(e*=1e3),o=new Date(e));const a={y:o.getFullYear(),m:o.getMonth()+1,d:o.getDate(),h:o.getHours(),i:o.getMinutes(),s:o.getSeconds(),a:o.getDay()},i=t.replace(/{([ymdhisa])+}/g,((e,n)=>{const t=a[n];return"a"===n?["日","一","二","三","四","五","六"][t]:t.toString().padStart(2,"0")}));return i}},558:function(e,n,t){"use strict";t.d(n,{JG:function(){return a},kE:function(){return i},dD:function(){return r}});t(1087);var o=t(5803);function a(e="test",n){(0,o.Z)("click"),navigator.clipboard.writeText(e).then((()=>{(0,o.Z)({message:n})}),(e=>{console.log(e),(0,o.Z)(e.message)}))}function i(e){return null!==e&&""!==e&&!isNaN(e)}function r(e){return i(e)?(new Intl.NumberFormat).format(e):e}},6601:function(){}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var i=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){var e=[];t.O=function(n,o,a,i){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],i=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||r>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<r&&(r=i));if(s){e.splice(u--,1);var l=a();void 0!==l&&(n=l)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,a,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{58:"b36a3418",119:"2fae361f",152:"62c3427a",325:"4c9dfddb",676:"1f8fa3a3",790:"d6630835",793:"a97ccc14"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+({143:"app",998:"chunk-vendors"}[e]||e)+"."+{119:"008090fb",143:"d09090ef",325:"0f0153cc",676:"730d4ea5",790:"455462d7",793:"923166bb",998:"9c65703c"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="dz-swap:";t.l=function(o,a,i,r){if(e[o])e[o].push(a);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+i),s.src=o),e[o]=[a];var m=function(n,t){s.onerror=s.onload=null,clearTimeout(p);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(i){if(a.onerror=a.onload=null,"load"===i.type)t();else{var r=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=s,a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=i,a.href=n,document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var a=t[o],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===n))return a}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){a=r[o],i=a.getAttribute("data-href");if(i===e||i===n)return a}},o=function(o){return new Promise((function(a,i){var r=t.miniCssF(o),s=t.p+r;if(n(r,s))return a();e(o,s,a,i)}))},a={143:0};t.f.miniCss=function(e,n){var t={119:1,325:1,676:1,790:1,793:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=o(e).then((function(){a[e]=0}),(function(n){throw delete a[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,o){var a=t.o(e,n)?e[n]:void 0;if(0!==a)if(a)o.push(a[2]);else{var i=new Promise((function(t,o){a=e[n]=[t,o]}));o.push(a[2]=i);var r=t.p+t.u(n),s=new Error,c=function(o){if(t.o(e,n)&&(a=e[n],0!==a&&(e[n]=void 0),a)){var i=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;s.message="Loading chunk "+n+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,a[1](s)}};t.l(r,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var a,i,r=o[0],s=o[1],c=o[2],l=0;if(r.some((function(n){return 0!==e[n]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(c)var u=c(t)}for(n&&n(o);l<r.length;l++)i=r[l],t.o(e,i)&&e[i]&&e[i][0](),e[r[l]]=0;return t.O(u)},o=self["webpackChunkdz_swap"]=self["webpackChunkdz_swap"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(466)}));o=t.O(o)})();