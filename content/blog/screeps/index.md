---
title: Screeps - A Game About Programming AIs
date: '2019-12-08'
---

I've had a lot of free time lately, and have been happy to return to an old hobby that I have been neglecting - gaming. Recently I have discovered a really interesting game called Screeps.

## What is Screeps?

Screeps is a game where you pick a room in a large grid of rooms and write JavaScript code to control AI units called creeps to harvest resources, upgrade the room, build structures, attack, and defend.

If you play games, it's basically an MMO RTS where you do all the programming for your player's units. It's somewhat hard to explain, so take a minute to check out the trailer:

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZboTgOajnGg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The game runs 24/7 and time takes place in ticks. On the shard(fraction of the game world) that I am playing on, there is a tick every 2.9 seconds on average. So when you play Screeps, you write code for what each of your creeps should do for that tick. And then you watch it play out on the screen. In the early game, this means writing code to efficiently gather resources. Later in the game, you could be coordinating resources between multiple rooms to construct and fuel multiple nukers. A nuker is a structure that lets you nuke another player's room.

## Coding AI

After playing Screeps for a few weeks my colony is smart enough to havest resources, repair structures, and defend against attackers by using towers. I don't have any fancy machine learning algorithms powering my creeps yet, they are just driven by simple scripting. Screeps is a unique game in that it is very open-ended in how you play it. You can program your creeps to be completely autonomous or like me, you can manually intervene to guide your creeps to attack and change variables to affect your resource production on the fly. For example, most of my colony is autonomous, but I have a constants file where I have the number of creeps allocated to certain roles like harvesters, builders, and attackers which I change manually based on the current needs of the colony. I can also plant a flag in an enemy's room manually that prompts my attackers to move toward the flag, and then attack once they get to the enemy room. This creates a neat hybrid gameplay of writing code and more manual RTS-like gameplay.

## The Goal

The goal of Screeps for me is to move up the leaderboard which is reset monthly. Players are ranked by how many control points they earn when upgrading controllers. Each room has a structure called a controller that you can upgrade by programming your creeps to send energy to it. The more rooms you control, the faster you can level up and the higher your rank will be. The amount of rooms you control is capped by your "Global Control Level" which you can level up by upgrading rooms.

## Benefits of Playing Screeps

I've always loved playing video games and mostly see them as a form of entertainment. Screeps is one of the few games that I feel I gain real-world skills by playing it. Since I am a professional JavaScript developer, it is very cool to be able to practice programming in JavaScript and play a game at the same time. While the game is not marketed to people who don't know how to code, I think it would also be helpful to people trying to learn JavaScript if they take an online course on the basics before starting. Beyond just being a game, Screeps is a playground for me to experiment with new tools and coding patterns. For example, I have never had the opportunity to use TypeScript professionally, but I am planning on converting my Screeps code to TypeScript to try it out.

If you want to give screeps a try, check out their [website](https://screeps.com/).
