---
layout: plain-page
title: Althea
permalink: /en/how-it-works
---

# The Problem

Because today's ISPs are often monopolies in the markets they serve, they're able to provide a low bar of customer service, and an even lower bar of internet quality—all at a high price. But they don't manage the entire global internet: they just tap into bandwidth from the internet backbone at data centers, and build infrastructure from those locations to different towns, neighborhoods, and eventually, individual homes and businesses.

Two barriers to entry have helped these monopolies hold onto their power:

1. Laying the physical infrastructure that runs from their primary source of bandwidth all the way to your house, and supplying each house with the hardware they need, is expensive.
2. Starting and managing a traditional ISP requires significant time, human resources, and technical know-how to manage the network manually.

Althea networks break down the first barrier by distributing the up-front investment in the hardware required to run the network. Each participant owns the equipment that connects their own home or business. The return on this individual investment is, for all users, better and more reliable internet service—and for users that connect other nodes nearby, the ability to make money too.

This individual ownership is made possible because Althea allows each node to automatically buy and sell bandwidth from neighboring nodes, effectively making each node its own ISP. Althea allows communities to cut out the middleman.

Althea also addresses the second barrier: the sheer complexity of centralized network management. Althea nodes manage their own connections to their peers, eliminating most network management (although physical installation wires and aiming of antennas is still necessary). This dramatically reduces the workload of the local groups (see “Subnet DAOs” below) that start, promote, and support the networks.

# Components of Althea

### Price aware routing

Althea uses a price aware routing protocol (a modified version of the Babel protocol), which ensures that packets take the fastest and cheapest route through the network. If a node is connected to several neighbors, whoever owns the node can be confident that they are getting the best price and fastest speeds available, on a second by second basis. This “automatically competitive” aspect of Althea means that prices stay low and speeds stay high.

### Expansion and Resiliency

Althea networks have a built-in incentive for organic expansion. Anyone with an Althea node can make a connection to a neighbor and expand the network. Now their node is selling bandwidth to their neighbor and will generate a small profit. A node serving one or two other nodes may offset its owner's own internet use, while a node serving a larger number of other nodes can generate a healthy profit.

Althea networks also have a built-in incentive for organic resiliency. Because packets are always routed over the best and cheapest paths, establishing a new link between two parts of a network can generate a good profit if there is a price differential between those parts of the network. Because of this, Althea networks have a natural incentive to become more interlinked over time, resulting in more reliability, increased speeds, and even better resistance to natural disasters.

### Hardware

Althea is designed to use the same professional-grade radio equipment as is used by wireless ISPs. Even though this equipment is fast, it is also quite affordable. A radio dish capable of sending 100mbps many miles can be purchased for under $100. Faster equipment capable of transmitting gigabits of bandwidth, or connecting to many other nodes at once are closer to $1000.

### Subnet DAOs

Starting an Althea subnet DAO is a way for one person or a group of people to get paid by bringing faster, cheaper internet to their area, with lower investment and technical know-how than is required to start a traditional ISP. Investment to start a subnet DAO is low, since the equipment cost is spread out among the nodes in the network. Technical know-how required is also low, since Althea's protocols allow the network to configure itself and route packets mostly automatically. The main administration done by the subnet DAO is to add nodes for new users, and remove any nodes which are causing problems on the network or providing bad service.

The subnet DAO collects a fixed per-month fee from every node on the subnet, and holds the money in an on-chain vault. A subnet DAO can have any number of members who manage the network. They can also all vote on what to do with the collected fee, for instance allocating it to promotional activities, or paying themselves or others to provide technical support to the nodes on their subnet. It can be beneficial for the subnet DAO group to also use a legal organization such as an LLC or a nonprofit to get some liability protection and tax benefits. However, a subnet DAO is fully able to earn and store funds, and be governed by its members without legal paperwork.

### Global TCR

Much as subnet DAOs provide quality control for their local networks, the global TCR provides quality control for Althea as a whole. Althea Governance Token holders participate in an on-blockchain voting system called a Token Curated Registry, or TCR. This is a registry of subnet DAOs which are providing good service.

The TCR kicks off any subnet DAOs which are not providing good service, are behaving monopolistically, or are otherwise damaging the network. Subnet DAOs can stake tokens on their listing, which they will lose if they are kicked off the registry. This gives consumers an assurance that they have chosen a reputable subnet DAO in their area.
