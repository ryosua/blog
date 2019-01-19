---
title: Understanding Casper
date: '2018-02-22'
---

The Ethereum development team is working hard on Casper, which is the codename for proof of stake consensus on Ethereum. In this blog post, I aim to give an extremely high-level overview of what proof of work and proof of stake are, what the benefits of proof of stake are over proof of work, and what it means for the Ethereum ecosystem.

## PoW as a Consensus Mechanism

Before diving into the proof of stake, I am going to quickly explain what proof of work is for readers who are new to the Ethereum ecosystem.

If you think of a blockchain as a distributed database or even a collection of data that is stored by every computer on the network, it is easier to make sense of what these consensus mechanisms are. With a normal database that serves say a few hundred or a few thousand users of an application, there is no need for a consensus mechanism because all of the data is in one spot, and there is only one instance of that data. The data that is in the database is considered correct. However with a blockchain, every computer on the network stores all the data and every computer on the network has to come to a consensus about which data is correct. Since the network is open, and anyone can participate, who gets to decide which transactions come next, and what makes a valid transaction? How does the network come to a consensus on what the next set of transactions are?

This is where proof of work comes in. When a node (a computer on the network) sends a transaction to the other nodes, the node that receives the transaction will check to see if it is valid. The node will consider that transaction valid if it passes all the rules that the network has agreed upon. An example of one of the most important rules is whether or not that sender of the transaction has the funds available to send. If the transaction is valid the node will continue to pass the transaction along to other nodes until it is mined.

The nodes on the network will also pass along blocks(groups of transactions that have been confirmed) if they are valid. Unlike transactions, blocks consist of only transactions that have been verified and linked to the blockchain. For a block to be valid there are a set of rules like transactions, but the most important ones are that the block contains only valid transactions, that it is linked to the main chain, and that it includes a proof of work.

Finally, we get to the part of the process that the consensus mechanism is named after. To compete for a block reward miners try to be the next to solve a puzzle. Basically, all they are doing is very quickly running random inputs through a hashing algorithm and trying to find an input that has a certain number of zeroes at the end.

Try this yourself. Go to this website: https://www.movable-type.co.uk/scripts/sha256.html

and start typing random characters in the text field until you get a hash that ends in 0. One solution that I got was `asdlfasdfklasdflkskfkskaka,b[`. Which gives me a hash of `417bf723baa577bd2af2513ffee68522a111e818c7bd60a5644585973443e630`. If you enter my input into the text field you will get the same solution instantly, but to come up with your own unique solution, it will take you a few seconds. That is the basically the same thing that the miners are trying to do, except that they are trying to find a solution with many more zeros at the end. To come up with these solutions they run random inputs through the program, but they can do several million guesses per second. So going back to the process of validating a block, each node will make sure there is a valid proof of work as part of the validation checks that it performs on new blocks.

## Problems with Proof of Work

Proof of work is a really elegant solution for allowing all the nodes on the network to reach consensus, but it is not without problems. Proof of stake address proof of work's biggest problem (energy consumption) while enhancing proof of work's advantages (security and decentralization).

## What is Proof of Stake

Proof of stake does away with the puzzle solving. Instead of miners, you have validators who get to decide which transactions to include in blocks. To become a validator, a participant in the network needs to stake or lock up, a certain amount of ether. The validators get a reward for creating new blocks, in proportion to how much they have staked. But instead of the winning miner getting the reward for the solved puzzle, validators are chosen at random to create new blocks. They can create whatever block they want if they are chosen, but if they break one of the network's rules (including an invalid transaction for example), the block will be invalid, and the validator will lose a portion of their stake for breaking the rules.

That is an extremely simplified explanation of proof of stake, so if you want to learn more about what exactly proof of stake is, check out the links that I have included at the end of this blog post.

## Benefits of Proof of Stake

As I mentioned earlier, proof of stake has a number of benefits over proof of work. Proof of stake is better for the environment, it is more secure, and it is more decentralized.

### Better for the Environment

One of the biggest issues with proof of work is the amount of energy burned by the network. Currently, the Ethereum network burns as much energy as [Slovenia](https://digiconomist.net/ethereum-energy-consumption), a country in Europe with a population of about 2 million. Proof of stake does not require nearly as much electricity which is a huge benefit because the energy required to sustain a proof of work blockchain will be even greater in the future.

### More secure

Vitalik described [in the panel at Devcon](https://www.youtube.com/watch?v=2r2k6awEJr8) a hypothetical scenario where a government does a 51% of attack against a proof of work chain. The best possible counter-attack in this situation is to do a hard fork to a new consensus algorithm. Otherwise, they will do something called a spawn camp attack where they keep attacking the chain every time the network regains control. But in that scenario, the good guys lose their mining equipment investment as well.

In the alternate scenario where someone attacks a PoS network, the network can again hard fork, but this time the bad guys lose all of the money that they used for the attack, and the good guys do not. Eventually, the bad guys will run out of money, and the holders of Eth get rich in the end because the supply of Eth goes down.

So in both cases, there is a hard fork, but in the proof of stake scenario, the hard fork is a viable counter that successfully wards off the attack.

### More Decentralized

Proof of stake is more decentralized because it does not have the same economies of scale that mining has. With proof of stake, your return on investment is the same as you invest more money. If you make 2% from staking your ether, you will make 2% of $100 if you invest $100 or you will make 2% of $1000 if you invest $1000. With proof of work, your return on investment grows as your investment grows. For example, say I want to build a mining rig and buy a motherboard that can have up to 8 graphics cards. My return on investment is going to be much better if I invest enough to buy all 8 graphics cards instead of using only 4 out of the eight slots. The barrier to entry for proof of stake will likely be much lower than proof of work as well. Like mining, investors with only a small amount of money will have to join pools in order to participate, but someone who wants to participate in proof of stake does not need to buy a graphics card to start staking.

### Supports Greater Scale

I have read in some places that proof of stake will help Ethereum scale but have been unable to find many details regarding this. And although I do not understand why proof of stake is said to enable sharding which is one of the main initiatives that will help Ethereum scale.

## Two Caspers

To complicate an already complicated topic, there are actually two projects under Casper. One is called _Casper the Friendly Finality Gadget_ or FFG for short and the other is called _Casper the Friendly GHOST: Correct-by-Construction_ or CBC for short. The most important distinction here is that FFG is a hybrid of proof of work and proof of stake. The final version of Casper will likely be a combination of these two different implementations of proof of stake.

## More information

This is a really good overview, and where I got most of the information for this blog post. It is not overly technical, but also probably not for complete beginners:
https://medium.com/@jonchoi/ethereum-casper-101-7a851a4f1eb0

Official FAQs on Proof of Stake and Sharding:
https://github.com/ethereum/wiki/wiki/Sharding-FAQ

https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ

Vitalik on the design philosophy behind Casper:
https://medium.com/@VitalikButerin/a-proof-of-stake-design-philosophy-506585978d51

A panel and Q&A, recommended for the average user or developer:
https://www.youtube.com/watch?v=2r2k6awEJr8

_If you enjoyed this post, please check out the new decentralized social network that I am building at [fragmented.world](http://www.fragmented.world/)._
