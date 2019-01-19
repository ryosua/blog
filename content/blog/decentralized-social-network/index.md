---
title: Vision for a Decentralized Social Network Built on Ethereum
date: '2017-10-21'
---

I want to build a decentralized social network for Ethereum enthusiasts. Ethereum users spend a lot of their time posting, commenting, upvoting, and downvoting on Reddit. All that value goes to the owners of the Reddit, which are often not the same people as the users. Even worse, some subreddits suffer from heavy censorship where the moderators can ban any post they want without any recourse. Wouldn't it be cool to use a social network that mirrors the open, decentralized, and democratic nature of Ethereum while talking about Ethereum online? There are a few tipbot apps that interact with Reddit, but that user experience could be made a lot better by integrating it directly into the UI of the site. I can envision a decentralized version of Reddit that lets users of the network receive a portion of the ad revenue from the site, and that lets them tip each other using Ethereum. In addition to tipping it could use a smart contract based karma system to help users find the best content.

There are many different types of social networks, but the ones that I like to use are in the Reddit-like category. The two Reddit-like social networks that I use are Reddit and Hacker News. A few blockchain based social networks have begun to emerge as well - [Akasha](https://akasha.world/), [Steemit](https://steem.io/), and [Yours](https://www.yours.org/). While these emerging social networks share the same great idea - to create a social network that rewards users for their contribution, they are all flawed in some way.

## Problems With Existing Blockchain Based Social Networks

### Akasha

When I first wrote about Akasha over 6 months ago, I was very excited for the project, but since then there has been little activity. It seems as the developers have not made updates to the software. It still suffers from slowness. It is lacking many features that are essential to this type of platform like a basic ranking algorithm that sorts posts by upvotes. Finally, it still uses a token that is not live on the main net, so the token has no real value. Despite all these problems, users still come to Akasha and seem excited about the idea. Why hasn't anyone created an alternative to Akasha using Ethereum by now?

While writing this post, I came across an [update on an upcoming beta release of Akasha](https://www.reddit.com/r/ethereum/comments/75v0v6/what_happened_to_akasha_social_network/?st=j8rugkz0&sh=3b6c8781) from Mihai, the founder, and CEO. I am excited to see that a beta is coming, and will definitely try it out, but as Mihai commented on a question about Steemit,"there's room in this space for multiple experiments".

### Steemit

Steemit seems like the biggest blockchain based social network at the moment. But Steemit's biggest downside is that the developers built Steemit on a whole new blockchain instead of using Ethereum. Ethereum could bring many benefits to a decentralized social network that to me it makes no sense to create a whole new blockchain. A decentralized social network built on Ethereum would benefit from the network effects of Ethereum, it would benefit from all of the scaling improvements that the Ethereum team is working on. Ethereum has a much, much larger user base. It would benefit from people being able to use ETH or a custom ERC20 token that users could shapeshift money to and from, and hold in their existing Ethereum wallets. Most importantly, a [DAO](http://www.ryanyosua.me/decentralized-autonomous-organizations-as-the-killer-app-of-the-blockchain/) could be created to develop the project so the platform is truly decentralized, and not just a social network with cryptocurrency micropayments. I tried to create an account on Steemit to see what it was like, and am still waiting for my account to be approved about a week later. I am not sure if the network is not accepting new users, or if they are having technical issues.

    Edit (11/12/17): I still have not been able to create an account on Steemit to try it out. It seems like they are giving new users some Steem when they join the platform, so they have to manually verify new accounts so that people don't abuse this. I have reached out to their support team, so might be able to get in soon to check it out.

### Yours

Yours suffers from the same problems that Steemit does by building on top of [Bitcoin Cash](http://www.ryanyosua.me/bitcoin-hard-fork/) instead of Ethereum. Bitcoin cash may be safe from scaling issues for the meantime but has a [tiny user base](https://bitinfocharts.com/comparison/transactions-eth-bch.html) compared to Ethereum. The coming Bitcoin hard fork in November is a huge existential risk to Bitcoin Cash. Segwit2x will bring transaction fees down to a reasonable amount, and in the long term, Segwit will help give Bitcoin the scalability that will be needed for billions of people to use a social network. This will leave Bitcoin cash with even fewer users than it has now. Bitcoin cash may be here to stay, but with most of the support behind Segwit2x, it will only take a tiny minority of the users that Bitcoin has. In the meantime, Yours will be an interesting experiment to watch.

    Edit (11/12/17): Segwit2x got called off. I didn't see that coming! This was a huge win for Bitcoin Cash and Yours. Yours will benefit from a huge influx of users into Bitcoin Cash and will be a more viable competitor because of this. I still think that building on top of Ethereum has huge benefits because smart contracts let you do lots of interesting things that can not be done with Bitcoin Cash.

## Introducing Fragmented, a New Decentralized Social Network for Ethereum Users

With these problems with existing Reddit-like social networks and the appeal of using a decentralized Reddit-like social network built on Ethereum, I have decided to start building one myself.

### Features

This is the feature set that I would like Fragmented to eventually have:

- Post, comment, upvote, and downvote - Users can do all of these essential basic actions that you can do on Reddit and Hacker News
- Monetized - Users get monetary value for posts and comments in proportion to the number of upvotes. At first, they will receive Ether, and later as the platform is built out, they will receive an app specific ERC20 token
- Decentralized - Fragmented will be open source, it will be built on IPFS or Swarm, and revenue from the platform will flow to a DAO which will decide whether to reinvest in the platform or distribute a dividend to token holders
- Advertising - Advertisers will be able to post ads in which a portion of the revenue goes to the users that view the ads, and a portion goes to the Fragmented DAO

Most Ethereum projects these days are creating tokens that they claim are not securities. For reasons that Jack du Rose explains in [his excellent post describing the Colony token sale](https://blog.colony.io/the-colony-token-sale-7ac14c845bc0) these projects are exposing themselves to a lot of risks because they seem to qualify as securities by the Howey Test. For this project, I'd like to go the other direction and go through whatever regulatory hurdles I need to create a legal security token. The reason for this is that the business model and incentive structure will be much simpler. It will create stronger network effects if the users are also the equity owners in the project because it will give them a further incentive to spread the word about the platform. Once the token is created and used to govern the project through a DAO, the fate, responsibility, and rewards gained from building the platform will be distributed between Ethereum users who want to take part in the platform. Creating a legal security token creates a lot of regulatory hurdles, but is not impossible to do with platforms like [Coinlist](https://coinlist.co/), and laws like the JOBS Act. Ideally, I would like to integrate the token into the platform as much as possible so that users of the platform get rewarded by using it, and developers get rewarded for building features.

This is an ambitious feature set and will need to be built in stages. I have created a set of milestones that will guide the project for now. It is important to note that the earliest version of the network will not be anything like the vision outlined above. I want to get working software in the hands of users as quickly as possible so that they can have a say in what is important to them, and what should get built next. For this reason, the first version of the platform will be a simple Hacker News clone with a lot of the functionality of Hacker News stripped out. There will be no cryptocurrency payments of any kind, and it will be open source, but not decentralized. From there we will build toward the vision that I laid out, building the features that are most important to users of the platform first. To start out, my target audience will be Ethereum users because, in the beginning, I would rather have a small group of users that love the product rather than a ton that like it. For this reason, it makes sense to concentrate the topics of discussion around Ethereum. As the product matures, I would target other segments as well.

## Milestones

In starting this project I am defining a few milestones:

1. Validation of the idea

It is risky to commit to building a software product without first validating that there is interest from customers. This is especially dangerous in the crypto space where a highly speculative token can give a startup tens of millions of dollars that could go to waste building a product that no one actually wants. In the real world, a startup without any market demand will likely never get funding. If they do, they will burn through their cash and die. Right now, it seems as if any project that raises a token is getting funded before they even have an app in production. I want to avoid this by waiting until Fragmented has lots of users before thinking about a token sale. So the first milestone will be to prove that people actually care enough about this project.

The first validation step is this blog post. I will be able to gauge the excitement that Ethereum users have in Fragmented if this post receives a lot of views relative to the other blog posts that I have posted in the past. Another way I plan to validate the idea is a mailing list to capture interest in the project. The third way I plan to validate the idea is to create a landing page.

Of course, this is not an exact science, but I will consider the idea "validated" if 2/3 of the following metrics are met:

- This blog post gets >= 1000 total page views in the three months after I post it
- The landing page has a conversion rate of 7.5% or higher where a conversion is someone signing up for the mailing list through the landing page
- The mailing list gets >= 100 signups within a year after I publish it

Once all three of these metrics are achieved or 2/3 are achieved within the year, I will move on to the next milestone. If I fail at 2/3 of these metrics, then I will move on to another project. These goals are not big enough to validate the demand of the project alone, but if I fail to hit them, then it is a pretty clear sign that there is not a lot of demand.

2. Launch of a simple centralized version

The second milestone is to launch a simple centralized version of the project so people can start sharing feedback, and I can learn what people want. My target user for this iteration will be Ethereum users. I have already started to work on the app, and am starting off with a fork of a [Hacker News clone](https://github.com/clintonwoo/hackernews-react-graphql) that I found on Hacker News of course. You can watch the progress [here](https://github.com/Fragmented-World/). I may work on this a little in parallel to milestone 1, but until milestone 1 is reached the main focus will be on driving traffic to the blog post, landing page, and mailing list. Milestone 2 will be built with a BaaS as the backend, so it will not be decentralized at this stage.

3. Integrate ETH micropayments for upvotes
   After the simple version of Fragmented is released, I would begin integrating ETH tips on upvotes. It would be a simple system where users pay me (or the dev team at this stage) to create a post, users pay a tip to the poster when they comment or upvote, and users receive a tip when other users upvote their comments. If this economical model doesn't work out, I can experiment with some other economic models.

4. Move backend to IPFS or Swarm
   The next step would be technical decentralization of Fragmented by moving the Backend to IPFS or Swarm. IPFS is still in its very early stages, and I have not seen one example of an app that performs well on it. Akasha and Open Bazaar both use IPFS and suffer from usability issues. Colony recently wrote about the [challenges they have faced creating a DApp](https://blog.colony.io/colony-q4-update-287cda939fde) as well. I am not sure about the status of Swarm, and from my understanding, it is highly experimental. For this reason, I would wait to switch over the entire app until I can ensure that the user experience would be smooth. I would probably launch a second experimental instance of Fragmented on IPFS/Swarm for users that care about decentralization over usability while working on it and allow the centralized version to exist for users who want to wait until the UX is better.

5. Token sale and decentralized governance
   Fragmented will not be truly decentralized until a DAO controls the revenue stream created by the platform. Creating a DAO to govern Fragmented will allow token holders to vote on key decisions, and even to allocate the revenue to build the features they want. To implement decentralized governance I plan to use Aragon or Colony. It is too early to say which one I would use at this point because they are both still in alpha/beta, and I have not yet seen Colony's app. I have read both whitepapers, and have tested out Aragon's alpha app, and I do not think there is a clear winner in this category yet. Since the Aragon alpha is available now, I have [created an organization](https://kovan.etherscan.io/address/0x4b627c9a7311c0ac8ce611b4f1a394f7c37c1619) on the Kovan testnet to experiment with the technology and to establish equity proportions to distribute to any early contributors that join me. When the either Aragon or Colony goes live on the mainnet, I will create a new org on one of those two platforms.

6. Transition to a community driven project with deep decentralization
   Once the IPFS architecture is in place, and a DAO is created, it will be time to put in place deep decentralization features into the platform. Ideally, there would be a system like liquid democracy that allows token holders to make direct votes or delegate votes on any decision that affects Fragmented from managing the feature backlog to the ability to hire a new CEO.

For any of this to be possible, I need your help. You can have a huge impact on the project by being one of the first to join the Fragmented newsletter and push us closer to achieving the first milestone. Join me today at http://www.fragmented.world/.
