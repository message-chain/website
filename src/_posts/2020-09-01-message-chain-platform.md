---
title: The Message Chain Platform
date: 2020-09-01
author: marcus
location: Istanbul  
tags: 
  - news
---
The goal behind Message Chain (MC) is to create a secure, censorship-free public chat and private messaging platform. To accomplish this goal, MC will be completely decentralized. It will be an HTML/JavaScript app (SPA) that will run locally with the files hosted on IPFS and elsewhere. Data will be stored on the Factom blockchain (https://www.factomprotocol.org/). Factom provides an inexpensive way to keep data on-chain for as little as 1KB / $0.001.  With encryption and signatures, we should be able to store a message for under a penny.

### Outline 

1. The app will create a W3C DID (https://www.w3.org/TR/did-core/) and store it on Factom. Users will be able to specify their own username. In the future, if users don't want to be anonymous, they'll be able to bind their MC ID with a verified identity - such as Remme (https://remme.io/).
2. Each MC username will have its own Factom Chain. Anyone can send a user a private message by publishing it to the recipient's chain. Messages are encrypted with the receiving user's public key and are signed by the sender. The message format will be released soon. 
3. A Factom Chain will represent a chat "server." Within the server, there will be multiple chat groups/rooms. These are public servers/groups, and anyone will be able to read any post messages. Since all messages are stored on-chain, they cannot be censored. The application will allow users to hide messages from users they wish to block.

### To run the app, you'll need:

1. The MC app itself, again retrieved from IPFS or GitHub.
2. Access to a Factom node, either the Factom Open Node (https://factomd.net/) or a self-hosted node.
3. Factom Entry Credits (EC) to publish messages (retrieving messages is free). ECs can be obtained by converting Factom tokens (FCT) into ECs or by purchasing from a third party such as DeFacto (https://ec.de-facto.pro/). DeFacto is a Factom  Authority Node Operator (ANO) and contributes to the Factom Open Node. In the future, MC support relay services that will cover the EC costs. Here users would still sign and encrypt their messages, but the relay will publish them to Factom (paying the ECs to do so). 

### Anonymity issue

We want to ensure user anonymity for those that wish to remain anonymous. MC will be designed to no leak any public information, but all transactions on a blockchain are traceable. The EC public key that publishes a message is part of the Factom transaction. The public key of the Factom account that created the EC is part of the chain. The account where the FCT came from is stored on-chain. To remain anonymous, you must be careful on how you obtain your Factom tokens. We'll provide some guidance in the future. 

MC will be developed openly, and the code will be shared on GitHub soon.