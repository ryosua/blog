---
title: Is EOS a Threat to Ethereum?
date: '2018-04-29'
---

_Disclosure - I own Ether, Bitcoin Cash, Bitcoin, and some tokens on Ethereum, but no EOS tokens. Please keep this bias in mind while reading this blog post._

As an Ethereum enthusiast, investor, and DApp developer, I like to keep an eye out for emerging smart contract platforms that could unseat Ethereum as the dominant smart contract platform. I do this because I feel that many members of the Bitcoin community did not recognize the potential of Ethereum until it had overtaken Bitcoin in many key metrics. Lately, I have been hearing more and more about EOS, so I decided to do some research.

If you Google EOS you might come across articles like [this one](https://www.forbes.com/sites/cbovaird/2018/04/27/eos-is-leaving-top-cryptos-in-the-dust/#3a41057e4bfd) on Forbes with the headline:

> EOS Is Leaving Top Cryptos In The Dust

And as I look at [coinmarketcap.com](https://coinmarketcap.com/), this headline has some truth.

![coinmarketcap](./coinmarketcap.PNG)

I won't talk about the price for much longer, but as you can see there is some momentum around this EOS token. It is important to note that **EOS has not yet launched**, and that the asset that is number 5 in market cap is an ERC20 token on Ethereum. My understanding is that once the platform is launched there will be a mechanism for token holders to exchange these tokens for the native EOS cryptocurrency.

## Why is there so much interest in EOS?

Much of this price momentum for EOS can be explained by that fact that EOS claims to be able to solve a key problem with Ethereum which is scaling. At the height of the last crypto-insanity in December/January, the price to send a transaction on Ethereum was a few dollars which made it prohibitively expensive to use many of the DApps on Ethereum. At the time of writing the SafeLow cost for a transfer on [ETH Gas Station](https://ethgasstation.info/) is \$0.056 which is much better, but still a bit high if you are playing one of the many games running on Ethereum where each action in the game requires a call to a smart contract. If you have used Ethereum at all then you know that calls to a smart contract cost more than the basic transfer fee listed on ETH Gas Station.

EOS claims to be able to solve this scaling problem by using a different consensus mechanism called Delegated Proof of Stake often abbreviated as DPoS, I have written a little bit about Proof of Work and Proof of Stake in [this post](https://www.ryanyosua.me/understanding-casper/), but DPoS is a little different. If you have a basic understanding of PoS, my understanding of DPoS is that it is very similar, but there are a smaller number of nodes which are able to confirm transactions which makes it more like a democracy than a permissionless network. This allows the network to process many more transactions with the tradeoff that it is less decentralized, and in turn less secure.

## Arguments Against EOS

DPoS is not completely unproven. Notably, Steem and Bitshares use a DPoS blockchain. Dan Larimer the CTO of BlockOne has had a prominent role in the creation of all three of these networks. But DPoS is not without its criticisms either.

I consider myself an application developer, so while I understand a little about the different tradeoffs between the different consensus mechanisms, a lot of the details and arguments for or against DPoS go over my head. Vitalik recently posted arguments against DPoS in this [blog post](https://vitalik.ca/general/2018/03/28/plutocracy.html), most of which I did not understand. My impression is that DPoS my have some vulnerabilities in the way that is designed and we may or may not see these play out when EOS launches and people actually start to use it at scale.

Another argument against using EOS to develop apps is that Ethereum already offers DPoS for DApps through application-specific sidechains with the [Loom Network](https://loomx.io/). Loom has already launched an application like StackOverflow as a sidechain called [DelegateCall](https://delegatecall.com/) which allows users to earn karma on the sidechain and then transfer it to the main Ethereum network as an ERC20 token. This approach seems to be the best of both worlds, where users can benefit from fast and cheap (or free) transactions while using the app, but can securely store their tokens on the main chain that uses PoW or PoS in the future.

In popular culture, John Oliver did a [segment on cryptocurrencies which featured EOS](https://youtu.be/g6iDZspbRMg?t=18m40s). John Oliver's main criticism of EOS is the affiliation with Brock Pierce. While Brock Pierce does seem to have a questionable past, it would be a [rhetorical fallacy](https://informationisbeautiful.net/visualizations/rhetological-fallacies/) ("Guilt by Association") to claim that the EOS as a network is a scam just based off of that observation.

## Can there be more than one smart contract platform?

For a long time, many people (myself included) thought that the cryptocurrency market would turn out to be a winner take all market where one cryptocurrency dominated all. Instead, we now have 1000s of cryptocurrencies and tokens competing for users, developers, and miners. In retrospect, this makes sense because we do not have a single currency. I am beginning to wonder if smart contracts are the same way. Can Ethereum coexist with EOS, Cardano, NEO, and others? My guess is that there is less room for competition in this space because of the network effect for smart contract platforms is much stronger. A merchant can easily accept multiple different types of cryptocurrencies for payments, but an app developer can not build a DApp that simultaneously works with say Ethereum and EOS. This forces developers to choose one platform to specialize in. We can see this in the way that the web evolved where there are a limited number of protocols that became dominant and each one serves a specific purpose. For example, when you access a web application you are using TCP/IP and HTTP to send and receive data from the server. There is not a whole lot of competing protocols to interact with websites. So I think that there is an argument to made for one smart contract becoming the dominant platform for Web 3.

## Conclusion

It will be interesting to see how EOS performs when the network actually launches, and the claims made by BlockOne are put to the test. To be successful, EOS will have to fight over a limited number of app developers, and cryptocurrency users. While there is plenty of speculation money to go around, the number of people who are actually interested in using and building on top of smart contract platforms is still a small group of people in comparison. To answer the question that this blog post poses - "Is EOS a Threat to Ethereum?", the best non-answer I can give is this:

It is too early to tell, but we will soon find out.

_If you enjoyed this post, please check out the new decentralized social network that I am building at [fragmented.world](http://www.fragmented.world/)._
