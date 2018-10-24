---
layout: plain-page
title: Glossary
permalink: /glossary
---

# Glossary

### Althea Router (or “node”)

This is a router running Althea's software, which allows it to automatically connect to other Althea routers, and buy and sell internet access to them. Each Althea router has a wallet which can store funds, and is able to find the cheapest and fastest path through the network to get to the internet. These generally look like small home wifi routers, and usually need to be connected to outdoor antennas to connect to other nodes.

### Backhaul

Usually refers to a commercial-grade internet connection with a guaranteed speed which can be resold to a large network. These are much pricier than home connections but can handle much more traffic. For instance, a 500 megabit backhaul might be able to supply 200 or more end users with 500 megabit internet speeds. Althea subnets need backhaul to connect to the global internet, which is provided by gateway nodes.

All networks need a source of bandwidth—some buy it directly from data exchanges on the internet backbone, while others partner with local businesses or WISPs to .. 

### CPE

This stands for “Consumer Premises Equipment” and refers to a smaller, cheaper outdoor antenna that is usually used by end users. These often connect to the sector antenna of a larger intermediary node or gateway node. Two CPEs can also usually be connected to each other (“bridged”) to create a connection between two Althea nodes.

### End user node

This is a node that is mostly used by someone to buy internet access, rather than selling it. Any end user node can become an intermediary node by connecting it to another node that doesn't have internet and selling it some internet.

### Gateway Node

Gateway nodes sell internet bandwidth into Althea subnets. Any node can become a gateway node if it is connected to the internet. However, every network will need at least one gateway connected to a commercial-grade internet connection, or “backhaul”.

### Intermediary Node

Intermediary nodes earn money selling internet to other Althea nodes, by forwarding packets through the network. Any Althea node can become an intermediary node, simply by connecting it to another node that needs internet. 

### Internet Backbone

Data routes between the largest computer networks and core routers on the Internet. These data routes are hosted by commercial, government, academic and other high-capacity network centers. They operate Internet exchange points and network access points that exchange Internet traffic between countries and continents.

### Outdoor Wifi Antenna

An outdoor wifi antenna can send internet signals long distances at high speeds. It uses most of the same radio technology that is used by indoor wifi, but focuses the signal into a tight and powerful beam. These can cost from $50-$2000 depending on the speed and range. Althea does not make this equipment, but Althea routers can connect to any of them. We recommend [certain models]() for people starting out.

### Sector Antenna

This is an outdoor antenna with a wider beam that can connect to 10-60 other antennas at once. These are ideal for Althea nodes which will be selling to a large number of other nodes, like the gateways in [Clatskanie]() or [Medellin]().

### Subnet

An Althea subnet is a local Althea network. An Althea subnet will have at least one gateway node, a large number of end user nodes, and larger intermediary nodes which relay the signal to end users who are not able to connect to the gateway(s) directly. Multiple subnets can operate in the same area, and can even run on the same physical equipment. See the subnet DAO definition below for more information on how this can be useful. 

### Subnet DAO

DAO stands for Decentralized Autonomous Organization. A subnet DAO is organization that lives on the blockchain and is able to collect fees and add and remove nodes from its subnet. Subnet DAOs are controlled by local subnet DAO organizers. Subnet DAOs can collect a fixed per-month fee from nodes on their subnet. This allows them to earn money by providing customer service and promoting their subnet.

Starting an Althea subnet DAO is a way for a group of people to get paid by bringing faster, cheaper internet to their area, with lower investment and technical know-how than is required to start a traditional ISP. Investment to start a subnet DAO is low, since the equipment cost is spread out among the nodes in the network. Technical know-how required is also low, since Althea's protocols allow the network to configure itself and route packets automatically. The main administration done by the subnet DAO is to add nodes for new users, and remove any nodes which are causing problems on the network or providing bad service.

Multiple subnets can operate in the same area, and can even run on the same physical equipment. This can be useful because different subnet DAO groups might charge different fees for providing different levels of service to their end user. For example, an entrepreneur or property owner might run several Althea intermediary nodes on some tall buildings. They don't have to worry about which subnet DAO users in the area are on, they can join several to reach as many users as possible.

### Subnet Organizer

Subnet Organizers start Subnet DAOs and set up and manage Althea networks. While they may start out as leaders, it's important to note that no one is the “boss” of an Althea network, since the equipment in the network is owned by the people using it.

### WISP

WISP stands for Wireless ISP. Wireless ISPs have been around for about 15 years, ever since high speed outdoor wifi antennas became available. They have been picking up even more steam as the equipment gets better. There are several differences between an Althea subnet and a WISP:

- WISPs typically own and administer an entire network, while nodes in an Althea subnet are owned by many different people.
- WISPs provide customer service 
