---
title: GPU Mining for Fun and Profit
date: '2017-06-22'
---

## What is GPU Mining?

One of the key value propositions of any cryptocurrency is decentralization. Bitcoin, Ethereum, and other cryptocurrencies are unique because there is not one organization that verifies transactions. Instead, transactions are verified by a network of miners. GPU mining is the act of verifying cryptocurrency transactions in exchange for a reward using GPUs. Anyone with a computer can participate in mining at least one cryptocurrency, but it is difficult to make a significant amount of money from mining unless you have at the very least a single high-powered gaming PC.

## Prerequisites

This post is less of a guide and more of a high-level overview of some of the concepts and considerations involved in GPU mining. In order to mine, in general, you will need a graphics card with more than 2 GB of memory, basic knowledge of how to use the command line or willingness to learn, and an Ethereum wallet(or a wallet corresponding to whatever coin you are mining). After choosing the graphics card, mining software, and pool, mining Ethereum is actually pretty straightforward. If you want some help with these prerequisites or a more detailed guide to getting started check out the [Ethereum Mining Wiki](http://ethereum-mining.wikia.com/wiki/Ethereum_Mining_Wikia). With mining, the details of how to mine and the best strategies are constantly changing, so if you want to get into mining be prepared to figure some of the details out for yourself. It probably helps to understand to some extent how cryptocurrencies work and to keep up with the latest trends in the market.

## Why Mine?

### Mine for Profit

The most obvious benefit to mining is to make a profit. Different types of investments have trade-offs in risk and reward as well as the amount of time and/or money needed to invest. GPU mining is a unique type of investment that requires a relatively low up-front investment in time and money to get started. After that your computer or mining rig will generate a high rate of return without you doing much at all. The main downside is that you quickly reach a cap on the amount of money you can invest in mining because you will reach the limits of how much electricity your home/apartment can provide without the circuit tripping. If you are looking to invest more than a few thousand dollars you are out of luck unless you want to rent or buy a dedicated property for mining, and hire an electrician. Even before that, you may be reluctant to have a monster computer with multiple GPUs generating lots of excess heat and noise in your home. What this means is that GPU mining can be a great investment up to a certain amount before it loses its appeal. In my case, I bought a graphics card for about $320 and installed it on the PC that I already have. Using a profitability calculator, it looks like I'll make somewhere between $500 - $2000 dollars in profit over the next year excluding the cost of the card that I wanted to buy for gaming anyway. That is if all of the parameters were to stay the same(which they won't) so it is an extremely rough estimate. In addition, I won't be selling any of the ETH that I mine, so I will benefit from the additional gains in the price of ETH. If instead I took that same investment and put it in a bond fund, I would only make somewhere between $10-20 in interest. So for me at least investing in one card was a no-brainer.

### Mining Benefits Outside of Profit

In addition to the profit that you can generate from mining, mining also helps contribute to Ethereum or the cryptocurrency that you are mining which I believe is a positive force in the world and worth supporting. Outside of ETH, a miner could mine [Curecoin](https://curecoin.net/) and help the world by folding proteins, or mine [Primecoin](http://primecoin.io/) and help the world by finding prime numbers. There are also benefits to learning about the technology. I think that because you can hit a ceiling so fast on the amount that you can invest in mining, it is only worth it if you believe in these less tangible benefits to some extent and you are interested in the technology behind it. On the other hand, if you already have a powerful home PC that you use for gaming or VR, then it is not going to hurt to have it mine at night and while you are at work.

## Long Term Profitability of GPU Mining

Not all cryptocurrencies can be mined profitably with GPUs. In the earliest days of Bitcoin mining (long before I knew about Bitcoin), people could mine thousands of Bitcoins with their CPU alone. At some point, someone wrote a program that allowed miners to mine Bitcoin with their GPUs which allowed them to significantly increase their hash rate. As people switched over to GPU mining it became unprofitable to mine with a CPU. Sometime later people started designing and selling ASICs to mine Bitcoin and then it became unprofitable to mine Bitcoin with a GPU. Eventually, lots of other cryptocurrencies were designed that chose to use different hashing algorithms which could not as easily be mined with ASICs. For example, Ethereum uses a different hashing algorithm that requires lots of memory. In addition miners have to execute smart contract code in order to verify blocks. Because Ethereum is Turing complete, these contracts can have any arbitrary code, so it is unlikely that an ASIC could be designed to mine ETH effectively. Finally, with Ethereum switching to proof of stake soon, it would not make sense to design an ASIC that would work only for the next year or so. With this switch from a proof of work consensus algorithm to a proof of stake algorithm, there is a very small window of profitability left for mining ETH. Once that switch is complete, GPU miners will have to switch to other coins. Fortunately for miners, there are plenty of other coins that can be mined with GPUs. It is likely that GPU mining will be profitable for at least the next few years. Of course miners will have to upgrade their GPUs every 1-3 years or so to stay competitive because of the [Law of Accelerating Returns](https://en.wikipedia.org/wiki/Accelerating_change#Kurzweil.27s_The_Law_of_Accelerating_Returns).

In the long term, I think proof of stake will become the dominant consensus algorithm and more cryptocurrencies will use proof of stake except for the ones where the proof of work algorithm provides some useful result like Primecoin and Curecoin. This is because proof of stake is more secure and uses less electricity then proof of work.

## Choosing Mining Software

### Genoil

When choosing mining software I wanted to use one of the official Ethereum clients so that I could trust that the software did not contain any hidden malware, and to ensure that it did not charge any fees. I was surprised to find that the standard Ethereum clients written in Go, C++, and Rust do not support GPU mining out of the box, and all point to a repo called Genoil which is a fork of the cpp client. For example, [the official cpp client](https://github.com/Genoil/cpp-ethereum) includes this text in their Readme:

"This project is not suitable for Ethereum mining. The support for GPU mining has been dropped some time ago including the ethminer tool. Try using the fork https://github.com/genoil/cpp-ethereum."

To use Genoil you need download a binary from the releases folder in their repo, not the zip on the releases tab in Github. I tried mining with Genoil and got it running fine, but was not able to find any shares within an hour. While troubleshooting the problem, I found a Github issue that suggested it may be an issue with the latest AMD drivers. One of the replies recommended switching to Ethminer because it is more up to date. I am still not sure what caused the problem, or if I was just unlucky, but when I tried Ethminer I was able to successfully find shares.

### Ethminer

[Ethminer](https://github.com/ethereum-mining/ethminer) is a fork of Genoil which seems slightly more active in terms of development. I downloaded the latest version and was able to successfully get it to mine. I am now comparing my results against Claymore's Miner which is the first miner that I used for a few weeks. I recommend Ethminer because it charges 0 fees, is open source and seems to have one developer who is actively making commits to the project. Claymore's miner is a bit easier to use, but the shadiness of the app makes me want to use something else.

### Claymore's Miner

The first miner that I got working was one that I saw people recommending on r/ethermining called [Claymore's Miner](https://github.com/nanopool/Claymore-Dual-Miner). It seems that this is a mining client associated with Nanopool. I was hesitant to use this miner for a number of reasons. Fist, the code is not open source. The Github repo belongs to Nanopool and when you look at their website there is no information about whether a company or individual owns it.

The fact that it is closed source and seemingly developed by a person who does not want to use a real identity is slightly suspicious. Another shady thing is that apparently, Windows Defender recognizes it as a virus. From the Claymore Readme:

> Windows 10 Defender recognizes miner as a virus, some antiviruses do the same. Miner is not a virus, add it to Defender exceptions. I write miners since 2014. Most of them are recognized as viruses by some paranoid antiviruses, perhaps because I pack my miners to protect them from disassembling, perhaps because some people include them into their botnets, or perhaps these antiviruses are not good, I don't know. For these years, a lot of people used my miners and nobody confirmed that my miner stole anything or did something bad. Note that I can guarantee clean binaries only for official links in my posts on this forum (bitcointalk). If you downloaded miner from some other link - it really can be a virus. However, my miners are closed-source so I cannot prove that they are not viruses. If you think that I write viruses instead of good miners - do not use this miner, or at least use it on systems without any valuable data.

On top of this risk, the developer takes a 1-2% fee depending on whether or not you dual mine. Despite all these red flags, I decided to use the software at first and accept the risks. Nanopool owns about 12% of the hashing power of the Ethereum network, and many people seem to use Claymore without any complaints. Also, the software seems to have an advantage over competitors. It is able to mine two coins at once because different hashing algorithms used by different coins utilize the GPUs in different ways which allow more than one coin to be mined at the same time without hurting the profitability of the other too much. However, I have not gotten dual mining to work without crashing.

I later ran into this [thread on Reddit](https://www.reddit.com/r/EtherMining/comments/6h01sc/is_it_worth_switching_from_genoil_ethminer_to/diugisx/?st=j3w8j9ly&sh=3352b457) which accuses Claymore's miner of taking more than the advertised fee, and/or resulting in a lesser hash power despite claiming advantages over competitors. It was at this point that I decided to give Ethminer and Genoil a try.

### Nicehash

A really interesting mining program called [Nicehash](https://www.nicehash.com/) is something else I would like to try. It sounds like it runs a bunch of profilers on your computer then automatically switches to mining the most profitable coin based on your hardware and the crypto market. You then get paid in Bitcoin for your hashing power. I am happy with Ethminer for now, but will probably try Nicehash after Ethereum switches from proof of work to proof of stake.

## Selecting a Mining Pool

### Nanopool

Etherchain has a [nice pie chart of the top ETH miners](https://etherchain.org/statistics/miners). I went with Nanopool in the end because it is hosted by the same developer of Claymore which is the first miner I got working. The Claymore configs have the pool addresses setup to mine at Nanopool. You just have to add your address, email, and a name you choose for your "worker". It seems simple enough to switch to a new pool if I wanted, but this was the easiest way for me to start out. A cool thing about Nanopool is that they have a public API, so you could build an app or website to monitor your "workers" while you are away. Their own website does a decent job of displaying stats as well, and will even send you an email if your miner stops.

### Other Pools

Before deciding on Nanopool, I looked at Dwarf Pool but it only had servers in Canada and France. I don't know if this is a big deal to have a greater network latency, but just in case, I wanted to use something with servers on the east coast. Alpereum was another one recommended on Reddit a few times, but it shut down now. [Smart Pool](http://smartpool.io/) is a decentralized mining pool, that is in development that I am looking forward to trying out.

## Dual Mining

One of the cool features of Claymore's Miner is that you can dual mine two coins at once. For each of these dual mining configurations Ethereum is the main coin, but is paired with your choice of Sia, Decreed, or LBRY. When I tried dual mining, I chose to go with Sia because they have offer cloud storage that is 10x cheaper than their competitors like Google and Dropbox, which I find pretty impressive. The Dual mining is supposed to work a different part of the GPU so that neither coin will see much of an efficiency hit. I did notice that my ETH hashrate was a bit lower, and my GPU was working much harder, with the fan speed increasing by about 10-15%. It worked for awhile and then my computer started crashing so I went back to mining just ETH. After I switched back to just ETH, I was able to mine continuously for several days in a row without any issues.

### Optimizations

With mining there are a lot of things you can do to optimize profits. You can download drivers that are more efficient for mining than others, overclock your GPU, try different mining programs, try different mining pools, and try mining other coins. In the end these optimizations will help, but there are diminishing returns on your time. That is why I don't stress too much about having the perfect setup.

## Proof of Stake vs Proof of Work

The consensus algorithm for Ethereum is going to switch from proof of work to proof of stake soon. A simplified explanation of proof of stake is that instead of miners verifying transactions through mining, you have validators who deposit an amount of ETH for the right to validate transactions. They risk losing their stake if they violate the rules of validation set by the protocol. Proof of stake is the superior consensus algorithm because it is more secure than proof of work, and uses much less electricity. People who want to help secure the Ethereum network can still make money by staking and becoming a validator.

All of this means that GPU miners will eventually have to switch to mining something else. There are a number of alternatives that look promising in addition to Sia, Decreed, and LBRY. In my experience Sia was much less profitable than mining Ether, so I will probably look for alternatives. One that seems to be recommended a lot is ZCash. If I can find a coin that gives as much profit as ETH or close to it, then I would like to build a 3-6 GPU mining rig to multiply the profits. I'll have to do some investigation to see which is the best coin though. It might be as simple as running Nicehash.

Read more about proof of stake vs proof of work:
https://blockgeeks.com/guides/proof-of-work-vs-proof-of-stake/

http://www.coindesk.com/ethereums-big-switch-the-new-roadmap-to-proof-of-stake/

https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ

_If you enjoyed this post, please check out the new decentralized social network that I am building at [fragmented.world](http://www.fragmented.world/)._
