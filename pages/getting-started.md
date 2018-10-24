---
layout: plain-page
title: Getting Started
permalink: /getting-started
---

<style>
table { width: 100%; border: 1px solid black; margin-bottom: 20px; }
td + td, th + th { border-left: 1px solid black; padding-left: 20px; }
td, th { border-bottom: 1px solid black; padding: 10px; vertical-align: top; }
</style>

# Getting Started with Althea  

## How it works

Althea is a system that lets routers pay each other for bandwidth. We call this “incentivized mesh.” Our vision is a world where your device automatically buys bandwidth from whichever provider is cheaper and faster, whether that’s your neighbor, an independent wireless ISP, or even a conventional ISP or cellular network.

Any high performance network will be made up of fast, high capacity, long range links that carry traffic most of the way to its destination, along with lower performance hops that take it the rest of the way there. Althea networks will be no exception to this rule. Inside of an Althea network, there will be house-to-house links, along with higher capacity networks owned and operated by professionals. Althea takes traffic from your house, over the “last mile” to the nearest internet exchange. Then goes onto the internet backbone to be taken across the world.

We are working on firmware that we will ship on branded routers. The physical connections will be made according to whatever works best for the site. That could mean an inexpensive directional wifi antenna aimed across the street, an outdoor ethernet cable across the yard, or more professional equipment mounted on a radio tower.


<img src="/images/roles.jpg" width="100%" title="Meshnet Roles" alt="Meshnet Roles" />

## Talk to the Althea Team

We would love to hear about your mesh net project! Planning and implementing a community network can be challenging and we are here to help. Whether you have concrete plans and a well organized group, or you are an end user willing to participate in a local network, you can reach out to us at hello@altheamesh.com or add a pin to the test deployment map at www.altheamesh.com. 

We offer live, video conference meetings with a member of our team, which can be scheduled by email.
Our forum can also be a great place to learn, ask questions, and get connected to those nearby. https://forum.altheamesh.com/ 

<img src="/images/foggytower.jpg" width="100%" title="Foggy Tower" alt="Foggy Tower" />

## Planning an Althea powered Mesh Net

Althea’s software makes providing internet access easy and sustainable, whether you are looking to provide rural last-mile access or configure multi-unit housing, and anything in between. 
This is a step by step guide for setting up a community based mesh network. Althea’s software is adaptable to a variety of scenarios and your setup might vary. 
Many helpful tools can also be found at [http://www.startyourownisp.com](www.startyourownisp.com) or [http://communitytechnology.github.io](communitytechnology.github.io)

## Make a Plan

### A - Conduct a Site Survey

A site survey is a good place to start and should take into consideration distance between nodes, channel noise, and line-of-sight access. It may be useful to make a network map using Google Earth which is free to use or www.towercoverage.com, which has a free trial option. 
A site survey in an apartment or condominium entails the evaluation of existing wiring and network infrastructure as well as determining the ownership of the infrastructure. Another option, in certain circumstances, are powerline adapters, which utilizes the electrical wiring as the medium of transport. 

### B - Determine the arrangement of your group or organization 

The structure and organization of your group will determine which licenses need to be obtained, and what, if any, other paperwork needs to be filed. Collaboration and a more formally structured organization can be helpful on larger, more ambitious projects.  It may also be helpful to determine if users will install equipment themselves or if someone will install for them. 

### C – Determine support needs

Regardless of whether your group is loosely organized or a structured business, It may be useful to designate a support person for “on-site” problems or initial installation. Analyzing your hardware choices for ease in long term maintenance will help keep support costs low. 
Althea mesh net groups can also offer their end users direct phone support from Althea, minimizing the workload of on-site personnel. Phone support is available at a low monthly cost.


## Prepare a Budget

### A - Hardware Costs

Once you have considered your network layout you can make a better choice about which equipment will fulfill your needs. Althea is radio/antenna agnostic so any wifi broadcasting, or wired equipment that is designed to be plugged into a router should work. Ubiquiti has a handy guide to help you choose which of their equipment might best fit your needs – https:/help.ubnt.com/hc/en-us/articles/205197750-airMAX-Which-product-should-I-use-. 

Buying shielded cable, hardware mounts, grounding hardware, and a good set of tools should also factor into your budget. 
Wired installations should consider the cost of a DSLAM, G.Fast, switches, and possible cabling. 

### B - Installers 
If users do not wish to install themselves, factor the labor costs of installation into the budget. There may also be liability concerns if volunteers are installing equipment at a customer’s premises. 

### C - Applicable Licensing and Permits
This can include business licenses and permits for hardware like antennas and radio towers. Licensing and permits will vary by municipality, county and state. 

### D - Monthly costs for Backhaul or Business Grade Internet Connection

Business class re-saleable internet can sometimes be obtained from your local, last mile ISP. There may also be affordable options from “middle mile” carriers. In major urban areas a traditional backhaul  carrier may be available. 

Make sure to include the cost of radio tower or roof lease, if applicable. 

If you are looking for a creative solution for a larger project, you may consider obtaining unused or “dark” fiber. Your municipality or local ISP would be a good place to learn who owns the dark fiber in your area. A good resource for locating backhaul is https://www.telecomramblings.com/metro-fiber-maps/, and www.antennasearch.com can help find information about radio towers in your area. 

## Order Equipment and Service

Once the number of users and the needs of the Gateway and Intermediary nodes has been determined, it’s time to order routers! The Ubiquiti EdgeRouter X is currently the best choice for the Gateway router of most networks and can be obtained from an Ubiquiti distributor or from most major online retailers, like Amazon. 

Client routers can be purchase pre-flashed through Althea, or programming instructions for our most commonly used routers can be obtained here - 
https://github.com/althea-mesh/althea-firmware/releases. 

Exit nodes decrypt the traffic on the network and handle DMCA notices and the liability of the traffic content of the network. Most users will want to use an Althea exit node, which will offset much of this liability, so be sure to reach out to our team and we can help you get set up. 

## Build the Network

### Wireless

- If you are deploying a wireless point-to-point mesh, first program your radios and configure them to bridge mode.  Remember to update your radios to the latest firmware! Instructions will vary by manufacturer and device. Ubiquiti published a handy guide for their M2 and AC radios here - https://help.ubnt.com/hc/en-us/articles/205142890-airMAX-How-to-Configure-a-Point-to-Point-Link-Layer-2-Transparent-Bridge-
- Antenna mounts - These can be obtained at major retailers like Amazon or from a distributor, or custom made. Follow manufacturer's instructions and keep safety in mind. Make sure to properly ground your antennas. 
- Connect your radio/antenna into one of the mesh ports of your Althea router and you are ready to go! 

### Wired

- In a multi-unit setup, often a building is wired with coaxial cable, fiber or ethernet to a central server cabinet. 
- An Althea Router can be placed in that cabinet or junction box and wired north of the networking that distributes the internet to each separate unit.  In areas where fiber is available nearby, equipment like the G.Fast units can be incorporated to improve speed and quality of old copper wires. 
- Powerline adapters connect routers via electrical wires and are a good fit for networking between adjacent units or in smaller deployments. 


# Example 1:

Pat’s Mesh Net group is located in a rural town in the US. Their current internet service provider does not supply broadband access to some of the outlying homes. 

Pat holds a meeting with a few interested people and the customers who need internet access and they form a plan. They agree that using Althea’s software will be helpful because they won’t have to worry about billing the customers, traffic in the network is encrypted, and Althea’s exit node will handle much of the liability concerns. 

Using Google Earth, they map the proposed sites, and decide that customers will install the hardware themselves. 

<img src="/images/rural.jpg" width="100%" title="Rural Town Deployment" alt="Rural Town Deployment" />


Using this map, a budget is proposed. 

### Budget

<table>
  <thead>
    <tr>
      <th>Node</th>
      <th>Description</th>
      <th>Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Gateway</td>
      <td>Sector Antennas x2 ($220)<br>Mounting Hardware</td>
      <td>$440<br>$100</td>
    </tr>
    <tr>
      <td>Intermediary</td>
      <td>Rocket Dish x2<br>Radio Tower</td>
      <td>$270<br>$500</td>
    </tr>
    <tr>
      <td>Users Nodes x4<br>Mounting Hardware</td>
      <td>Airgrid Antennas ($70 each)<br>Standard Mount ($50 each)</td>
      <td>$280<br>$200</td>
    </tr>
    <tr>
      <td>Misc Costs</td>
      <td>Shielded Cat5e, 1000’<br>Shielded Cat5e ends</td>
      <td>$200<br>$30</td>
    </tr>
    <tr>
      <td>Backhaul Costs</td>
      <td>100mbps business class internet/month</td>
      <td>$100 (per month)</td>
    </tr>
  </tbody>
</table>

The total hardware cost to build this mesh network is $2020 and $100/month for internet backhaul costs. Because users, in the case, will install their own equipment, the total remaining cost of $1540 is what Pat’s mesh net will be required to raise.

Pat’s members decide to pool their own funds to build their network. Pat places an order with Althea for a gateway, intermediary, and six user routers. (A replacement router or two is handy to have on hand should one go down.) Pat’s group meets at a regular time every month and schedules someone to help assist the homeowner’s with their installs, and program their radios for them.  Pat’s users pay Althea for monthly support, but they also designate a specific member to handle all on-site specific problems should they occur.  Pat’s meshnet is running well and his users are happy to have reasonably priced internet access. Pat and his group paid off their initial investment in a few months and are a making a profit while helping their community. Pat’s members will continue to meet regularly to discuss the needs of their users expansion of the network. 

# Example 2:

Lisa is a building owner who would like to offer her tenants quality internet at a low cost. Currently the only available option is DSL. By upgrading the internet service available to her tenants, the value of Lisa’s building will increase, and she will be able to make some additional revenue.  

Lisa called the cable provider in her area and got a quote to provide backhaul to the building. She hired a local company to install a networking cabinet with an Edgerouter Pro with Althea, a switch and cat6 to each apartment. One of Lisa’s tennents is tech savvy and agrees to help maintain the network in exchange for reduced cost internet. 

Lisa’s Budget is much more simple. 

<table>
  <thead>
    <tr>
      <th>Node</th>
      <th>Description</th>
      <th>Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cabinet</td>
      <td>Install of 10 cable runs and networking equipment $1,500. Edgerouter Pro $350</td>
      <td>$1850</td>
    </tr>
    <tr>
      <td>CPEx 10</td>
      <td>TP Link C7 ($85 each)</td>
      <td>$850</td>
    </tr>
    <tr>
      <td>Backhaul</td>
      <td>1GB Business Class internet</td>
      <td>$200 (per month)</td>
    </tr>
  </tbody>
</table>

Total initial investment was $2900.  Figuring for an average use of 200GB per month and charging $0.20/per GB, each apartment tenant will pay an average of $40/month. Lisa will start seeing a profit on her initial investment in just 16 months and will make an average of $200 a month, while offering her tenants quality internet at around $40 per month. 

# Example 3:

Frank and his group, “Neighborhood Co-op”, want to provide internet to a low income housing community. 

Frank’s group will offer educational classes about networking at little to no cost, thus uplifting their community and providing support for their Althea Network. 

Frank’s building was already wired with DSL, but they can improve the speeds by installing G.Fast. Like Lisa’s deployment, Frank hired a local company to install the networking equipment, 
