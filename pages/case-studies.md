---
layout: plain-page
title: Althea
permalink: /en/case-studies
---

# Glossary

**Routing Protocol**
A routing protocol is a decentralized algorithm which lets a network of routers figure out how to get internet traffic to its destination along the fastest path. Althea uses a price aware routing protocol which routes packets along the fastest and cheapest path, and allows routers to pay each other for forwarding packets.

**Subnet**
An Althea subnet is a local Althea network. An Althea subnet will have at least one gateway node, a large number of end user nodes, and larger intermediary nodes which relay the signal to end users who are not able to connect to the gateway(s) directly. Multiple subnets can operate in the same area, and can even run on the same physical equipment. See the subnet DAO definition below for more information on how this can be useful.

**Subnet DAO**
DAO stands for Decentralized Autonomous Organization. A subnet DAO is organization that lives on the blockchain and is able to collect fees and add and remove nodes from its subnet. Subnet DAOs are controlled by local subnet DAO organizers. Subnet DAOs can collect a fixed per-month fee from nodes on their subnet. This allows them to earn money by providing customer service and promoting their subnet.

Starting an Althea subnet DAO is a way for a group of people to get paid by bringing faster, cheaper internet to their area, with lower investment and technical know-how than is required to start a traditional ISP. Investment to start a subnet DAO is low, since the equipment cost is spread out among the nodes in the network. Technical know-how required is also low, since Althea's protocols allow the network to configure itself and route packets automatically. The main administration done by the subnet DAO is to add nodes for new users, and remove any nodes which are causing problems on the network or providing bad service.

Multiple subnets can operate in the same area, and can even run on the same physical equipment. This can be useful because different subnet DAO groups might charge different fees for providing different levels of service to their end user. For example, an entrepreneur or property owner might run several Althea intermediary nodes on some tall buildings. They don't have to worry about which subnet DAO users in the area are on, they can join several to reach as many users as possible.

**Subnet Organizer
**Subnet Organizers start Subnet DAOs and set up and manage Althea networks. While they may start out as leaders, it's important to note that no one is the “boss” of an Althea network, since the equipment in the network is owned by the people using it.

**Althea Router (or “node”)**
This is a router running Althea's software, which allows it to automatically connect to other Althea routers, and buy and sell internet access to them. Each Althea router has a wallet which can store funds, and is able to find the cheapest and fastest path through the network to get to the internet. These generally look like small home wifi routers, and usually need to be connected to outdoor antennas to connect to other nodes.

**Outdoor wifi antenna**
An outdoor wifi antenna can send internet signals long distances at high speeds. It uses most of the same radio technology that is used by indoor wifi, but focuses the signal into a tight and powerful beam. These can cost from $50-$2000 depending on the speed and range. Althea does not make this equipment, but Althea routers can connect to any of them. We recommend [certain models]() for people starting out.

**Sector Antenna**
This is an outdoor antenna with a wider beam that can connect to 10-60 other antennas at once. These are ideal for Althea nodes which will be selling to a large number of other nodes, like the gateways in [Clatskanie]() or [Medellin]().

**CPE**
This stands for “Consumer Premises Equipment” and refers to a smaller, cheaper outdoor antenna that is usually used by end users. These often connect to the sector antenna of a larger intermediary node or gateway node. Two CPEs can also usually be connected to each other (“bridged”) to create a connection between two Althea nodes.

**WISP**
WISP stands for Wireless ISP. Wireless ISPs have been around for about 15 years, ever since high speed outdoor wifi antennas became available. They have been picking up even more steam as the equipment gets better. There are several differences between an Althea subnet and a WISP:

- WISPs typically own and administer an entire network, while nodes in an Althea subnet are owned by many different people.
- WISPs provide customer service

**Backhaul**
Usually refers to a commercial-grade internet connection with a guaranteed speed which can be resold to a large network. These are much pricier than home connections but can handle much more traffic. For instance, a 500 megabit backhaul might be able to supply 200 or more end users with 500 megabit internet speeds. Althea subnets need backhaul to connect to the global internet, which is provided by gateway nodes.

**Gateway Node**
Gateway nodes sell internet bandwidth into Althea subnets.

\*\*Internet Exchange

\*\*

# Case Studies

Althea networks can be set up by anyone, anywhere. We work with [subnet organizers]() all over the world to help them set up networks from scratch: from finding the right source of bandwidth, to setting up and optimizing equipment, through finding new users and rallying their community around the cause. No two networks are the same, as each is built from the ground up to meet the unique needs of the area.

Our routing protocol makes it easy to manage these networks once they're up and running. With automated usage monitoring, billing and payments, organizers can focus on growing and improving these networks, instead of drowning in administrative needs. We're excited about our first deployments—if you're interested in starting one in your community, please [get in touch]()!

## CASE STUDY: MEDELLIN

### Legacy ISP: Slow or No Bandwidth

In many parts of Medellin, internet connections are spotty, slow, expensive, or non-existent. The subnet organizers at [red_medellin]() are deploying their first Althea network in the hillside community neighborhood Communa 13, where a small number of high-speed, line-of-sight connections can bring better bandwidth to homes, schools, and businesses.

### Althea: Faster, Cheaper Internet— Owned by the people using it

The [red_medellin]() [subnet DAO]() is bringing internet access to Communa 13, partnering with another local organization to buy bandwidth, and beaming it by radio to the neighborhood. While some nodes on the network will just be accessing the internet, others can help grow the network organically by getting their neighbors set up too—offsetting the cost of their own connection, or even earning a little money doing so.

red_medellin was started by 4 young Americans living in Medellin. However, they do not own the network. Althea's decentralized architecture means that each node is owned by the people using it to buy and/or sell internet access. The red_medellin subnet organizers provide technical support and installation services to this network of independently-owned nodes.

### Technology & Topology

#### Gateway Node

Red_medellin has partnered with local recording studio Son Bata to buy commercial bandwidth and beam it to Comuna 13. This connection will travel 1.6km by point-to-point radio to a school that sits on a hill above the neighborhood, with a great line of sight to many of the houses and buildings nearby.

#### Intermediary Nodes

Any houses with a direct view of the school can point an inexpensive antenna to the sector antennas set up above the school and connect to the internet. These houses can then “pass on” this connection to their neighbors via ethernet cable, earning some money.

#### User Nodes

Users access bandwidth through intermediary nodes, or directly from the gateway node, and don't pass it on to anyone else... yet. Anytime they want to, these users could become intermediary nodes by selling their connection on to their neighbors.

### Learn more

- [Read our interview]() with the Red_medellin team on our blog
- [Visit their website]() for regular updates on their progress
- [Send us an email]() with any questions or to get connected with the Red_medellin subnet

## CASE STUDY: CLATSKANIE

### Legacy ISP

A fiber connection runs through the center of the small town of Clatskanie. But with a population of only 2000, ISPs in the area just aren't motivated to build adequate infrastructure to the outlying areas. Some residents only option is expensive internet access through cell phone companies which can cost upwards of $150 per month.

### Althea

While ISPs aren't motivated to address these access issues, Clatskanie's residents are resourceful. With Althea, they are able to set up a network whose nodes are owned by the local residents who use them to access the internet. Soon, these nodes will pay each other, giving families who host nodes that relay traffic for other houses a small income to offset their payments for internet access.

The network's current main gateway is at Deborah's computer repair shop. At the computer repair shop, there is a sector antenna which connects to 5 homes in the surrounding town, up to 2 miles away. There is a tower on a hill above town with an intermediary node which relays the internet access to another home.

The subnet DAO, ClatskanieCoop, is structured as a legal cooperative. A legal entity is not necessary for all Althea subnets, since the subnet DAO software allows a local group to administer the network and manage revenue from the network on the blockchain, but the cooperative structure has proven useful for ClatskanieCoop because it allows them to interface with the traditional legal system to co-own hardware and get permits.

Some residents are planning to put up towers to reach larger areas as a side hustle, investing a few thousand dollars in the tower equipment to be able to make a few hundred dollars a month going forward.

Clatskanie was Althea's first deployment, and is being spearheaded by one of Althea's founders, Deborah Simpier. She is joined by 4 other co-organizers: Yvonne owns the local fruit stand, and is a bus driver. Dante is a young game developer. Shaun is a programmer and and tinkerer who design the telescoping tower that ClatskanieCoop is currently using. Clark is a retired Intel project manager.

### Future vision

An additional 25 houses are currently on the waitlist. After this, there are plans to extend the network to other communities along the Columbia River like Marshland, Woodson, and Kerry. Because of Althea's decentralized structure, it's easy for anyone to buy some equipment and extend the network, but ClatskanieCoop will play a guiding role, as organizers of their subnet DAO.

### Technology / Topology

#### Gateway nodes

The backhaul is provided by a commercial internet subscription at Deborah's computer shop. This costs x per month. This is broadcasted out to the town by some sector antennas on the computer shop's roof. ClatskanieCoop has opted to use 2.4ghz radios instead of 5ghz because the lower frequencies go through foliage more easily.

Another idea for a second gateway is to work with the Smoky Waters wireless ISP which is based on a nearby island. Smoky Waters could sell bandwidth into the ClatskanieCoop subnet from their network. Althea's architecture allows multiple gateway nodes to serve a subnet. Individual routers automatically choose the gateway which is faster and cheaper, which tends to be physically near to them.

#### Intermediary nodes

Currently, the tower and a couple of homes in Clatskanie are serving as intermediary nodes. Any Althea node can sell bandwidth to other nodes, but we call a node that has better antennas and earns money forwarding packets for other nodes an intermediary node. In the future, another tower over Clatskanie and one covering Marshland will be intermediary nodes. Also, anyone who wants to hook up their neighbor or any other house they have line of sight to can become an intermediary node.

#### User nodes

Users access bandwidth through intermediary nodes, or directly from the gateway node, and don't pass it on to anyone else... yet. Anytime they want to, these users could become intermediary nodes by selling their connection on to their neighbors.
