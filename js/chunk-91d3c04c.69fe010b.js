(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91d3c04c"],{"011a":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("d4ec"),i=(n("b0c0"),function e(){Object(a["a"])(this,e),this.name="",this.iconLink="",this.abi="",this.tokenAddress="",this.decimals=0,this.symbol="",this.tokenLendingAddress="",this.underlying=0,this.myTVL=0,this.balanceInWallet=0,this.balanceInVault=0,this.balanceInPool=0,this.balanceInLending=0,this.tokenApproved=!1,this.approveLoading=!1}),p=function e(){Object(a["a"])(this,e),this.index=0,this.id=0,this.token0=new i,this.token1=new i,this.feeTier="",this.currentAPR=0,this.capacity="",this.tvl=0,this.maxTVL=0,this.ofCapUsed=0,this.vaultRange=0,this.vaultLending=0,this.tvlTotal0=0,this.tvlTotal1=0,this.tvlTotal0USD=0,this.tvlTotal1USD=0,this.lendingRatio=0,this.uniswapRatio=0,this.uniToken0Rate=0,this.uniToken1Rate=0,this.lendingToken0Rate=0,this.lendingToken1Rate=0,this.tickLower=0,this.tickUpper=0,this.currentTick=0,this.currentPrice=0,this.vaultAddress="",this.strategyAddress="",this.token0Address="",this.token1Address="",this.poolAddress="",this.keeperContract={},this.token0Contract={},this.token1Contract={},this.token0LendingContract={},this.token1LendingContract={},this.myShare=0,this.totalShares=0,this.myValueToken0Locked=0,this.myValueToken1Locked=0,this.myValueToken0USDLocked=0,this.myValueToken1USDLocked=0,this.flipped=!1,this.gettingData=!1,this.loadDataCompleted=!1,this.uniliqs={},this.assets={},this.netAPY=0,this.currentDeposits=0,this.maxTotalSupply="",this.governanceAddress="",this.teamAddress="",this.uniPortionRatio="",this.protocolFee=""}},"1bf6":function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_pool","type":"address"},{"internalType":"address payable","name":"_weth","type":"address"},{"internalType":"address","name":"_cToken0","type":"address"},{"internalType":"address","name":"_cToken1","type":"address"},{"internalType":"address","name":"_cEth","type":"address"},{"internalType":"uint256","name":"_protocolFee","type":"uint256"},{"internalType":"uint256","name":"_maxTotalSupply","type":"uint256"},{"internalType":"int24","name":"_maxTwapDeviation","type":"int24"},{"internalType":"uint32","name":"_twapDuration","type":"uint32"},{"internalType":"uint128","name":"_quoteAmount","type":"uint128"},{"internalType":"uint8","name":"_uniPortion","type":"uint8"},{"internalType":"address","name":"_team","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"maker","type":"address"},{"indexed":false,"internalType":"uint256","name":"uFees0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"uFees1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lFees0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lFees1","type":"uint256"}],"name":"CollectFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"reason","type":"string"}],"name":"ErrorLogging","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"subject","type":"string"},{"indexed":false,"internalType":"address","name":"value","type":"address"}],"name":"GeneralA","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"subject","type":"string"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"GeneralB","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"subject","type":"string"},{"indexed":false,"internalType":"string","name":"value","type":"string"}],"name":"GeneralS","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"MyLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"MyLog2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"MyLog4","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"uniAmt0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"uniAmt1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cmpAmt0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cmpAmt1","type":"uint256"}],"name":"Rebalance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"int24","name":"tick","type":"int24"},{"indexed":false,"internalType":"uint256","name":"totalAmount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalAmount1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"Snapshot","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Withdraw","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Assetholder","outputs":[{"internalType":"uint256","name":"deposit0","type":"uint256"},{"internalType":"uint256","name":"deposit1","type":"uint256"},{"internalType":"uint256","name":"current0","type":"uint256"},{"internalType":"uint256","name":"current1","type":"uint256"},{"internalType":"uint256","name":"block","type":"uint256"},{"internalType":"uint8","name":"withdrawPCT","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CEther","outputs":[{"internalType":"contract IcEther","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CToken0","outputs":[{"internalType":"contract IcErc20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CToken1","outputs":[{"internalType":"contract IcErc20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Fees","outputs":[{"internalType":"uint256","name":"U3Fees0","type":"uint256"},{"internalType":"uint256","name":"U3Fees1","type":"uint256"},{"internalType":"uint256","name":"LcFees0","type":"uint256"},{"internalType":"uint256","name":"LcFees1","type":"uint256"},{"internalType":"uint256","name":"AccruedProtocolFees0","type":"uint256"},{"internalType":"uint256","name":"AccruedProtocolFees1","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"contract IWETH9","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"accId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptGovernance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"accounts","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"alloc","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cHigh","outputs":[{"internalType":"int24","name":"","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cLow","outputs":[{"internalType":"int24","name":"","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"curComp0","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"curComp1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToken0","type":"uint256"},{"internalType":"uint256","name":"amountToken1","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCAmounts","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"}],"name":"getPositionAmounts","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint128","name":"baseAmount","type":"uint128"},{"internalType":"address","name":"baseToken","type":"address"},{"internalType":"address","name":"quoteToken","type":"address"}],"name":"getQuoteAtTick","outputs":[{"internalType":"uint256","name":"quoteAmount","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"}],"name":"getSSLiquidity","outputs":[{"internalType":"uint128","name":"liquidity","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"uint32","name":"period","type":"uint32"}],"name":"getTwap","outputs":[{"internalType":"int24","name":"tick","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governance","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingGovernance","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"protocolFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"quoteAmount","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_governance","type":"address"}],"name":"setGovernance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMax","type":"uint256"}],"name":"setMaxTotalSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int24","name":"_maxTwapDeviation","type":"int24"}],"name":"setMaxTwapDeviation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_protocolFee","type":"uint256"}],"name":"setProtocolFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_team","type":"address"}],"name":"setTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_twapDuration","type":"uint32"}],"name":"setTwapDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"ratio","type":"uint8"}],"name":"setUniPortionRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int24","name":"newLow","type":"int24"},{"internalType":"int24","name":"newHigh","type":"int24"}],"name":"strategy1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_erc20Contract","type":"address"},{"internalType":"address","name":"_cErc20Contract","type":"address"},{"internalType":"uint256","name":"_numTokensToSupply","type":"uint256"}],"name":"supplyErc20ToCompound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_cEtherContract","type":"address"},{"internalType":"address","name":"_ctoken","type":"address"}],"name":"supplyEthToCompound","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"sweep","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"team","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniPortion","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"uniswapV3MintCallback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"amount0Delta","type":"int256"},{"internalType":"int256","name":"amount1Delta","type":"int256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"uniswapV3SwapCallback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint8","name":"percent","type":"uint8"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"percent","type":"uint8"}],"name":"withdrawPending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraws","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')},"54fe":function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"exchangeRateStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')},5992:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return p}));n("99af");function a(e){return null!==e&&void 0!==e&&""!==e?e.toUpperCase().substring(0,6).concat("...",e.toUpperCase().substring(-4,4)):""}function i(e,t,n){return console.log("price=",e,"decimal0=",t,"decimal1=",n),Math.log(e/Math.pow(10,t-n))/Math.log(1.0001)}function p(e,t,n){return console.log("decimal0=",t,"decimal1=",n),console.log("Math.pow(1.0001, tick)=",Math.pow(1.0001,e),"decimal=",t-n),Math.pow(1.0001,e)*Math.pow(10,t-n)}}}]);