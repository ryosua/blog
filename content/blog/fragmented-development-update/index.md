---
title: Fragmented Development Update 7/30/18
date: '2018-07-30'
---

I have not shared any updates on Fragmented in a while, so wanted to create a post to share my progress since the [last update](http://beta.fragmented.world/news-item-detail?id=cjed8odgtumj10109jhmaeaj7), and to share my thoughts on where the project is headed in the short and long term. Since the last update there are a lot of new subscribers to my Fragmented email list, so for those new to the project, here are some links you can visit to learn more about Fragmented:

- [Landing Page](http://fragmented.world/)
- [Beta](http://beta.fragmented.world)
- [Original Vision Post](https://www.ryanyosua.me/decentralized-social-network/)

Since the last update, I have only made a few small changes to the front end, and have been focusing most of my attention on learning Solidity and working on the curation contract.

## Progress on Milestones

### Milestone 1 - Validation of the Idea

In the original vision post I set three goals to meet in order to gauge interest for the project:

1. This blog post gets >= 1000 total page views in the three months after I post it.
2. The landing page has a conversion rate of 7.5% or higher where a conversion is someone signing up for the mailing list through the landing page.
3. The mailing list gets >= 100 signups within a year after I publish it.

The idea was that if I met 2/3 of these goals, I would continue working on the project, otherwise I would try testing other startup/side project ideas. At the time of writing here is the progress towards these goals:

1. The blog post had 696 page views after three months, now it has 1,108.
2. I did meet the click-through rate goal, and since then I added a funnel for clicking the "Try the Beta" button on the landing page. The landing page has an 11.49% click-through rate in the last 90 days, and the "Try the Beta" button has a click-through rate of 33.33%.
3. The mailing list has 214 signups.

So in summary, I did not meet the first goal in the timeline that I set but did meet the other two goals. I am confident that people are interested in this idea, and if I can execute on it, I will be able to attract users.

### Milestone 2 - Launch of a Simple Centralized Version

I have also made a lot of progress toward the second milestone by launching the [beta version of Fragmented](http://beta.fragmented.world). Users can now create an account, create posts, comment on posts, and tip other authors on the site. The site is centralized with the exception of tipping which users can do peer to peer. If you tip another user on the site, your tip is a direct transfer of ETH to the other user. You do not pay any fee to Fragmented, only the Ethereum network fee charged by miners.

### Milestone 3 - Integrate ETH Micropayments for Upvotes

This is the milestone that I am currently working on. My current plan is to decouple the micropayments and tipping. My original thinking was that I would rank posts by the sum of the tips that were sent to the post's author, but I realized that is easily exploited by a Sybil attack - a user can just create a second account and tip themselves.

My current model for tipping is to let users upvote or downvote each post. The smart contract will keep track of which accounts have upvoted and downvoted each post, and then the posts will be ranked by the account balances of the upvoters minus the account balances of the downvoters at the time that the data is read from the backend. This model has some advantages and disadvantages. The main advantage is that no ether or tokens will be sent anywhere with a vote, leaving no risk of a hack where users lose money. This model also prevents Sybil attacks by weighting the votes by ether instead of the number accounts or addresses that have voted. The downside is that users who have the most ether have a greater say on the platform. I am willing to accept this tradeoff for now because, in the future, I would like to make it so that people can create their own sub-community with their own token that they can distribute more evenly if they like. In addition, users with large amounts of ETH are more likely to have a greater amount of respect in the community. To give an example - Vitalik's vote on a post would have a much larger weight than someone trying to manipulate the news in order to pump the price of a competing cryptocurrency like EOS. The EOS user would likely have a lower stake in Ethereum and would be outvoted by users who have a larger stake in Ethereum.

I am new to Solidity, so the contract is still in progress. I have gone through some of the beginner resources like [Cryptozombies](https://cryptozombies.io/) and [Truffle's Ethereum pet shop](https://truffleframework.com/tutorials/pet-shop). I have written the [first version of the smart contract](https://github.com/Fragmented-World/fragmented-web-ui/blob/feature/curation-testing/contracts/Curation.sol) and have started [testing it](https://github.com/Fragmented-World/fragmented-web-ui/blob/feature/curation-testing/test/curation.js) with Truffle. The tests that I have written are not yet passing, so I have some work to do as I learn the language.

This contract is not intended to be the final version. Unlike many Ethereum projects, I am not designing the entire system, releasing a white paper, and then building it. That approach seems too much like waterfall software development to me, and I know that I will have to learn and adapt as I develop the software. What this means though is that I will eventually replace the curation contract with a better version, and the ranking of the existing posts will be nullified with the transition. That again is a tradeoff that I am willing to accept because as of today, there are very few posts on Fragmented other than my own.

As to what that new curation contract might be, I have been following [Simon de la Rouviere's writings on curved token bonding](https://medium.com/@simondlr) and the [work of the district0x team](https://blog.district0x.io/) in implementing a curation market through the [Meme Factory](https://memefactory.io/). I think that some of these ideas might be useful as a basis for the Fragmented's eventual curation contract.

## Future of Fragmented

### Decentralized Storage

I originally planned on using Swarm or IPFS to store the post data(text, pictures, etc) for Fragmented, but I am now considering using the Loom Network and running the app on a side chain. I still think it is very early for all three of these technologies, so it will likely be a bit of time before I move in that direction. If I built Fragmented using Loom Network, that would make it much cheaper and faster to use the app because most transactions on the site would be off chain, so that is my favored approach at the moment. When I started to write this post, gas prices had spiked considerably, and as I finish the post now, they are about as low as they go. This type of fluctuation would make an app like Fragmented unusable during peak gas prices, so although there are scaling improvements coming in the future, I see the benefits of using a sidechain instead.

### Decentralized Governance

Besides voting and tipping, I would like to use Ethereum for moderation as well. Users should be able to elect moderators and to vote directly on policies of the site and sub-communities. For this, I am thinking of integrating with Aragon so that I don't have to write all the governance contracts myself. The Aragon project is making a lot of great progress, but I will have to wait sometime before I could integrate with that project on the main net.
