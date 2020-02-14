  export default {
  title: 'Frequently Asked Questions',
  sections: [
    {
      title: 'About the SAFE Network',
      items: [
        {
          question: 'What is the SAFE Network?',
          answer: [
            'The SAFE (Secure Access For Everyone) Network is a new secure way to access apps that value the security of your data above all else. Downloading the free SAFE software will provide access to: messaging, apps, email, social networks, data storage, video conferencing, and much more.',
            'Rather than using data centres and servers which are prone to data theft and surveillance, as is common on today\'s Internet, the SAFE Network uses advanced peer-to-peer technology that joins together the spare computing capacity of all SAFE users, creating a global network.',
            'The SAFE Network is made up of the unused hard drive space, processing power and data connection of its users. It offers a level of security and privacy not currently available on the existing Internet and turns the tables on companies, putting users in control of their data, rather than trusting it to organisations.',
            'By providing your unused computing resources to SAFE, you will be paid in a network token called [Safecoin](/safecoin).'
          ]
        },
        {
          question: 'What is an Autonomous Network?',
          answer: [
            'An Autonomous Network is one which has no human gatekeepers. Anyone is able to join and—crucially—no-one can be prevented from taking part.',
            'From the moment you upload your encrypted data, no human is required to ensure that your data remains secure and accessible until you alone choose to access it. Without the involvement of humans, the SAFE Network intelligently moves chunks of your data between nodes that it also constantly reassigns to different groups in order to provide total security and privacy at all times. You decide what information you will store—and the autonomous Network secures it to ensure that you retain total control.',
            '_[Read more about Autonomous Networks](https://metaquestions.me/2017/08/12/the-impossible-network/)_'
          ]
        },
        {
          question: 'Why should I use the SAFE Network?',
          answer: [
            'Applications and programs on the existing Internet compromise your privacy through advertising and effectively control your data, granting you access when you login. On the SAFE Network, only you control who has access to your data and the distributed security features make your data safer than ever before. If you contribute some of your spare computing power to the network, you will be compensated for doing so with the Network’s built-in token, [Safecoin](/safecoin).'
          ]
        },
        {
          question: 'Who owns the SAFE Network?',
          answer: [
            '**No one.**',
            'The SAFE Network is [open source](https://github.com/maidsafe). Our vision is to create a resource that can be used by everyone to spread all human knowledge and to facilitate sharing across the planet, regardless of country of residence, culture, or economic background.'
          ]
        },
        {
          question: 'Who are MaidSafe?',
          answer: [
            'Started in 2006 by Scottish engineer David Irvine, MaidSafe are the core developers of the SAFE Network.  It’s a small team comprised of: thinkers, inventors, tinkerers, PhDs, engineers and designers. Although based in Ayr, Scotland, we work remotely with talents from many different cultures and countries, reflecting the users that we serve. Despite this variety, we all share a single mission: providing security and privacy for everyone.',
            '_[Visit Maidsafe.net](https://maidsafe.net)_'
          ]
        },
        {
            question: 'What do I need in order to browse the SAFE Network?',
            answer: [
              '[Download the SAFE Network App!](https://github.com/maidsafe/safe-network-app/releases/latest)'
            ]
          },
        {
          question: 'How do I get involved with the SAFE Network community?',
          answer: [
            'The Community is most active on the [SAFE Network Forum](https://safenetforum.org/) and we’d suggest starting in the [beginners section](https://safenetforum.org/c/beginners).',
            '*[Visit the Forum](https://safenetforum.org/)*'
          ]
        },
        {
          question: 'How do I get help?',
          answer: [
            'The [SAFE Network Forum](https://safenetforum.org) is the place to head to for all questions on the Network.',
            '_[Visit the Forum](https://safenetforum.org/)_'
          ]
        }
      ]
    },
    // {
    //   title: 'Getting Started',
    //   items: [
        // {
        //   question: 'What do I need in order to browse the SAFE Network?',
        //   answer: [
        //     '[Download the SAFE Network App!](https://github.com/maidsafe/safe-network-app/releases)'
        //   ]
        // },
        // {
        //   question: 'Do I need an account to access the network?',
        //   answer: [
        //     'While the network is in Alpha then yes, you\'ll need to have an account.  See \'How do I create an account?\' below for a step-by-step guide.'
        //   ]
        // },
        // {
        //   question: 'How do I create an account?',
        //   answer: [
        //     '#### Here’s a step-by-step Guide:',
        //     '- [Download](https://github.com/maidsafe/safe_browser/releases/) and install the SAFE Browser.\n- [Register an account on the community forum](https://safenetforum.org/), it takes less than a minute. \n- [Gain basic trust level](https://safenetforum.org/t/trust-level-1-basic-user-requirements/15200). — this requires around an hour reading and interacting as a measure to stop the test network being spammed during the development phase.\n- Open the SAFE browser.\n- Click *Create Account* at the bottom of the screen.\n- In the next screen select ‘Claim An Invitation’.\n- Login to the forum within the SAFE Browser, the setup process will prompt you to do this if you have not already done so.\n- Select the Shared Vault Network.- The installer will now provide you with your invitation code. Please note: it is important that your current and registered IPs match, if they do not, click to update.\n- Copy the invite code at the bottom of the screen and paste this back into the field that asks for an ‘Invitation Token’ in the SAFE Browser.\n- You will now be asked to create an Account Secret and Password. Please make sure you keep these safe as only you will ever have access to your credentials. There is no central record of these credentials anywhere within the system and without them you will not be able to access your data.\n- Congratulations! You are now ready to not just browse the SAFE Network, but upload your own data, create websites and use some of the demo apps being worked on by the community.'
        //   ]
        // },
        
    //   ]
    // },
    {
      title: 'How it works',
      items: [
        {
          question: 'What is a Vault?',
          answer: [
            'The SAFE Network is made up of nodes called Vaults. A Vault is a program that runs on a device which connects the machine to the Network. Collectively, Vaults manage the storage of all data on the Network by managing the movement of chunks of encrypted user data that are stored across the Network. No Farmer (user) can ever decrypt a chunk of data that his or her Vault receives and, in return for providing the storage capacity to the Network, is rewarded with Safecoin.',
            'Vaults ensure that the events occurring on the Network are valid. They are clustered into small groups, each with responsibility for looking after the data stored within a Section (a certain range of addresses).',
            'These groups of nodes form, merge and split without any human oversight as the SAFE Network itself has complete control of the process. In the same way, the encrypted data chunks move around the Network in a fully autonomous way. No central servers or agents (like BitTorrent trackers) are required by the Network. No central authority oversees the proceedings.',
            'Just as children are not allowed to vote in elections, a Vault is not allowed to vote on Network events (such as a new member joining or the storage of a data chunk) until it has proven itself to be reliable. Initially, a Vault has to successfully complete a [Proof of Resource](https://www.youtube.com/watch?v=rdczpOlLaVk) request to join the Network, proving that it can provide a certain amount of bandwidth and CPU capacity. It is then assigned to a Section and given a low Node Age. This is a measure of its trustworthiness. After that initial connection, the Network will autonomously move (churn) that Vault at random from Section to Section, giving it the opportunity to build its reputation (Node Age). Once its Node Age reaches a certain value, it can be an active participant in group decisions. A Vault with the greatest Node Age in a Section is known as an Elder. As a result, because new Vaults must prove their worth in various random Sections before they can vote, targeting a particular Section on the SAFE Network by an attacker is close to impossible.',
            'Vaults also cryptographically check messages and take on more defined roles, called personas. Each Vault will have a Client Manager persona. This keeps a record of the account details for each Client (user) within its Section. For example, this will confirm how much data has been uploaded to the Network, how much is being stored and the balance of Safecoin remaining to fund further uploads. Whilst a Client Manager will know the account balance, it has no way of linking this to an identity (i.e. an IP address, username or public identity).',
            'Each Vault also has a Data Manager persona. This manages where encrypted chunks of other users’ data is held and has responsibility for the chunks in its Section.'
          ]
        },
        {
          question: 'Why do we need an Autonomous Network?',
          answer: [
            'An autonomous network is one that manages all of our data and communications without any human intervention and no intermediaries. It is a network that configures itself. Resources are not added by a centralised IT administrator—reducing the opportunity for malicious or negligent activities. The Network becomes permissionless—participation is open to all who seek it, removing the risks of monopolisation by single entities whose power can grow unchecked.',
            'Many data breaches are caused by human error. But the issue is more fundamental. We are becoming increasingly reliant on systems in which our data is stored by others. As more of our personal data in the hands of third parties, the risks of failure grow higher by the day. We already see our data being used for purposes that we dislike today. How likely is it that your access will be revoked entirely? That you will no longer control that stream of data about your life? In some countries, that is already a reality.',
            'We can improve physical security. We must ensure that data cannot be deleted, changed, corrupted or accessed without the data owner’s consent. And only by removing humans from the management of our data can physical security be provided. You must have storage locations that are unknown to anyone but the network and one in which the user cannot be identified. Only an autonomous network provides this level of security.',
            'An autonomous network automatically splits and encrypts (using self-encryption) all data before storing this dynamically at locations that it selects. Nodes join anonymously and the Network will constantly move these nodes between groups—again without any human intervention or centralised record. Together each group of nodes takes decisions based on the messages that they receive.',
            'An autonomous network is also able to create additional copies of popular data which means that requests are served more quickly. At the same time, the Network itself can identify duplicate copies of identical data and reduce these to a minimum.',
            'Our design approach is influenced by the humble ant. Ant colonies exhibit complex and highly organised behaviour on a massive scale without reliance on a central authority. Instead, each ant fulfils different duties based on the needs of the colony. In a similar way, nodes on the SAFE Network perform different functions based on the types of messages that they need.',
            'So why do we need an autonomous network? Because humans make mistakes, centralised storage facilities are prone to failure—and we collectively need to build a platform upon which mankind can collaborate as we move into the future.'
          ]
        },
        {
          question: 'What is Proof of Resource?',
          answer: [
            'Proof of Resource is the process that measures a Vault’s ability to store and retrieve data chunks. A User’s computer receives a score based on its CPU speed, bandwidth availability, disk space and time online.',
            'Proof of Resource in the SAFE Network uses a mechanism similar to a Zero Knowledge Proof. The checking mechanism does not need to know what data is being checked—it simply needs to know that the correct data is being held and accurately.'
          ]
        },
        {
          question: 'What is self&#8209;encryption?',
          answer: [
            'Self-encryption is the way in which a piece of data is split and then each chunk is encrypted using the other pieces of that same piece of data. It is a crucial process in the SAFE Network and ensures that the data is unrecognisable and resistant to decryption—even in the event of an encryption algorithm being compromised.',
            'All data is self-encrypted before it is reaches the SAFE Network. The process is automatic and happens instantaneously.',
            'As data is saved to a User\'s virtual hard drive, it is broken up into a minimum of three chunks, [hashed](https://en.wikipedia.org/wiki/Hash_function) and then encrypted. To further obfuscate the data, every chunk is passed through an [XOR](https://en.wikipedia.org/wiki/Exclusive_or) function using the hashes of other chunks. Each chunk is then broken up and key value pairs are added to a table in the Users account, called a data map. The data map contains the locations of each chunk that makes up the file. The data map, with hashes before and after encryption, is used when retrieving and decoding the User\'s data, as the encryption process is non-reversible.',
            'This entire process takes place on the Client (i.e. the User\'s computer) so that data is always encrypted on the network and only Users with the correct credentials can decrypt the file. This also means that passwords can never be stolen from the network as they never pass beyond the Users computer. For additional security the data map is also run through the self-encryption process.',
            '[Watch a Video Explainer](https://youtu.be/Jnvwv4z17b4)'
          ]
        },
        {
          question: 'What is PARSEC?',
          answer: [
            '**P**rotocol for **A**synchronous, **R**eliable, **S**ecure & **E**fficient **C**onsensus.',
            'PARSEC is the consensus algorithm which allows decentralised networks to reach agreement on a series of events, actions or activities in a secure and reliable manner that is not only highly asynchronous but also Byzantine Fault Tolerant. In other words, the Network is mathematically guaranteed to reach consensus (provided no more than one-third of nodes are malicious or unresponsive for whatever reason).',
            '[Read the whitepaper](https://docs.maidsafe.net/Whitepapers/pdf/PARSEC.pdf)',
            '_PDF_',
            '[Watch a video giving a technical overview](https://youtu.be/JKagaPUrDsY)',
            '_YouTube_',
            '[Let Dug from MaidSafe talk you through it](https://youtu.be/3YRaTCET5ZU)',
            '_YouTube_'
          ]
        },
        {
          question: 'What is data deduplication?',
          answer: [
            'The SAFE Network uses [data deduplication](https://en.wikipedia.org/wiki/Data_deduplication) to ensure that space is used efficiently when storing multiple copies of data which have been uniquely encrypted. The network is able to distinguish identical pieces of data by comparing the hashes of each chunk. Vaults also use hashes to identify themselves (known as Guaranteed Vault Identification).'
          ]
        },
        {
          question: 'What is Self-Authentication?',
          answer: [
            'Self-Authentication means that you can log in and secure your data with no middle man. You never have to give your password to anyone or ask a third party’s permission to access your data. Your information, and access to it, belongs to you and no one else. Your Secret and Password are used to locate your data on the Network and then used to decrypt that data locally. That means that no one needs to hold a record of your files or your login details—and there’s no need to ask anyone for permission to access it. This is known as Self-Authentication and enables you to find, unlock and decrypt your own data. '
          ]
        },
        {
          question: 'What is Close Group Consensus?',
          answer: [
            'A key requirement for distributed computer networks is consensus. In other words how can nodes reach agreement when there is no centralised authority and when you are likely to have nodes that are either malicious or fail. Many projects will rely on a blockchain in order to achieve this consensus but, as we know, [this approach doesn’t work](https://www.youtube.com/watch?v=i-RLdU8Y0Qc) with the SAFE Network where the number of transactions is greater and the expectation of users will be to retrieve data instantaneously. So how do you reach consensus on an increasingly large group of decentralised nodes without compromising security?',
            'The answer lies within close groups. Using Close Group Consensus, small groups are able to make statements on behalf of the entire Network which means that the Network does not need to communicate directly with every single node each time.',
            'On the SAFE Network, the concept of ‘closeness’ comes from something called XOR networking. This is a way of randomising the physical location of data on a distributed network and ensuring that each location is unique. However, in this sense, it is also used because every Vault has a XOR location also. A Close Group is then comprised of the closest Vault ID’s to the user’s Vault ID in terms of XOR distance. This is distance measured in the mathematical sense, as opposed to the geographical sense.',
            'The Group of Vaults managing a Section will always try to reach consensus (agreement) amongst themselves on any state and action. They also ‘group sign’ messages that travel over the wider network so that other Vaults in other Groups can cryptographically verify each message and action (such as groups forming, splitting and merging). These group signatures are stored in Data Chains which are secured and held by all Vaults in the Group.',
            'Close Group Consensus is not used for every operation on the Network as this would cause unnecessary load. It is only used for putting data on the Network—cryptographic signatures are used for other activities—for example, simple amendments to data or sending a Safecoin to another user.'
          ]
        },
        {
          question: 'What are Data Chains?',
          answer: [
            'In the same way that the Bitcoin blockchain does not hold bitcoins, a data chain doesn’t hold data. However, it does provide evidence that a piece of data exists and where it should exist. Crucially, with the SAFE Network the data identified is real (documents, videos etc). That means that we can use that data identifier to prove the actual data itself is valid Network data (i.e. it has been accepted previously by the Network).',
            'So what is the architecture of a Data Chain? Imagine a block of data. This contains the data identifiers (for example, hash, name, type of data etc). Connected to this block is a link. This link a collection of signatures by all of the members of a group who agree that the details within this block of data are correct. With every change in the membership of the group, a new link is created and added to the Data Chain.',
            'There is much more to the detail of this architecture but to summarise, the Data Chain will split as the Network grows whilst the collective record will remain, accessible to all nodes. The links prove the membership and agreement that has taken place in the past. Using Data Chains, nodes have a provable history on the Network which means that they can prove group membership and be ranked easily for security purposes. Some nodes will not need to hold the actual data but instead hold only identifiers as the existence of that data is guaranteed. And crucially, Data Chains will ultimately enable the secure republishing of data should the Network ever lose power, as well as providing validation that data has been stored on the Network.',
            'We believe that Data Chains appear to be a natural progression for decentralised systems. They allow data of any type, size or format to be looked after and maintained in a secure and decentralised manner-in the sense of not only protecting physical data but also the validity of such data on the Network.'
          ]
        }
      ]
    },
    {
      title: 'About Safecoin',
      items: [
        {
          question: 'What is Safecoin?',
          answer: [
            'Safecoin is a digital token that is generated automatically by the SAFE Network and stays on the SAFE Network. The Network will autonomously confirm account balances to Wallets and allow transactions to take place. Safecoin is transferred using the digital signature of the coin’s last owner. This operation is \'network atomic\'; in other words, the Network ensures that all copies update to reflect the transaction. This is a different approach to the blockchain mechanism employed in other projects, such as Bitcoin.'
          ]
        },
        {
          question: 'What\'s the use of Safecoin in the SAFE Network?',
          answer: [
            'Safecoin is the currency of the SAFE Network. It is an incentive mechanism that rewards Users and developers, as well as providing access to network services.',
            'Without any human intervention, the SAFE Network pays out Safecoin automatically to Farmers (users who join the Network by contributing their computing resources) and to Builders (application developers, who get paid automatically depending on how much their applications are used).',
            'In addition, Core Developers who improve the core SAFE Network codebase can also earn Safecoin by providing bug fixes and new features.',
            'Safecoin only lives on the SAFE Network. It is stored in a User\'s wallet and can be used to buy network services, such as increased storage space and access to network applications. There is no set distribution time for the 4.3 billion Safecoin produced during the life of the SAFE Network.'
          ]
        },
        {
          question: 'How do I buy Safecoin?',
          answer: [
            'Safecoin won’t be issued until the Network goes live so they cannot be purchased at the moment. Currently you can buy MaidSafeCoin which will be swapped on a 1-to-1 basis for Safecoin when released.',
            'MaidSafeCoin is listed on the Bitcoin blockchain and can be purchased on a number of exchanges including:',
            '- [Bittrex](https://global.bittrex.com/Market/Index?MarketName=BTC-MAID)\n- [HitBTC](https://hitbtc.com/MAID-to-BTC)'
          ]
        },
        {
          question: 'Why not just use Bitcoin?',
          answer: [
            'Bitcoin is completely unrelated to the SAFE Network and cannot be generated or distributed by the SAFE Network. Safecoin is generated in response to network use (stored data being retrieved or apps are created) and is the digital currency of the SAFE Network.'
          ]
        },
        {
          question: 'How is Safecoin valued?',
          answer: [
            'The value of Safecoin will be set by the market. In other words, the demand to acquire Safecoin will be driven by the demand to buy things on the Network using Safecoin (e.g. other currency, products, services etc). Whilst simply viewing data on the Network will be free, Safecoin will be needed to buy distributed data storage and for communications. Farmers should earn more than enough Safecoin to enable them to use the Network. Those who earn more than they need will likely sell excess Safecoin to the exchanges.',
            'It is worth noting that the generation and distribution of Safecoin will be entirely network-led, meaning that a great demand for Safecoin will result in a large volume being created, while low demand will lead to minimal coins being generated.'
          ]
        },
        {
          question: 'How is Safecoin distributed?',
          answer: [
            'The total number of Safecoin that can exist on the SAFE Network is 2^32, or just under 4.3 billion. 5% of that total has been allocated to compensate early investors who backed the Network development in the early days. A further 10% was sold to crowdsale participants in early 2014. They received MaidSafeCoin (a blockchain-based token that will be exchanged for Safecoin on a one-for-one ratio when the Network launches). At that stage, the holders can use Safecoin however they wish.',
            'Beyond that, Safecoin will come into and go out of circulation in a continuous flow as follows:',
            'All new Safecoin are generated as a part of the farming process and distributed to Farmers, App Builders and the Core Developer pool according to their individual algorithms, as described below.',
            'Safecoin is distributed as the product of a successful “farming attempt.” The sequence leading up to a successful farming attempt starts when a Farmer’s Vault accurately delivers up stored data when the data is requested. When this is successfully done, the Vault seeks to qualify for a farming attempt. The chance of gaining a farming attempt is regulated by the network Farming Rate (FR) which prevails at that moment, and adjusts the ease or difficulty of gaining a farming attempt, depending on prevailing network conditions (availability or scarcity of storage resources).',
            '\n*   Farmers qualify for farming attempts at 100% of the Farming Rate (FR) (as modified by Vault performance ranking).\n*   App Builders qualify for farming attempts at 10% of the FR\n*   The pool from which Core Developers are rewarded for their contributions qualifies for farming attempts at 5% of the FR.'
          ]
        },
        {
          question: 'What is MaidSafeCoin?',
          answer: [
            'MaidSafeCoin is a proxy token that was released during MaidSafe\'s crowd sale and will be swapped for Safecoin on a 1:1 basis when Safecoin is released.',
            'MaidSafeCoin is listed on the Bitcoin blockchain and can be purchased on a number of exchanges including [Bittrex](https://global.bittrex.com/Market/Index?MarketName=BTC-MAID) and [HitBTC](https://hitbtc.com/MAID-to-BTC).',
          ]
        },
        {
          question: 'How do I buy MaidSafeCoin?',
          answer: [
            'In essence all we have to do is buy bitcoin and exchange it for MaidSafeCoin. There are a few simple steps required to do this.',
            '\n1.  Create an [OmniWallet](http://omniwallet.org/).\n2.  Purchase bitcoin using your preferred vendor.\n3.  Create a trade account on an exchange which lists MaidSafeCoin (e.g. on [Bittrex](https://global.bittrex.com/Market/Index?MarketName=BTC-MAID)).\n4.  Send bitcoin to the trading account.\n5.  Trade bitcoin for MaidSafeCoin.\n6.  Withdraw / Transfer to OmniWallet.\n7.  MaidSafeCoin is now in your OmniWallet!'
          ]
        },
        {
          question: 'Where can I store MaidSafeCoin?',
          answer: [
            'As MaidSafeCoin is built using the Omni protocol on the Bitcoin blockchain, it can be stored in any wallet. They may not be visible within all wallet software (due to lack of Omni support) but the MaidSafeCoin will be OK there as long as your machine and private key for that address are secure and you will be able to view them using [omniexplorer.info](https://omniexplorer.info).',
            'To create a new Omniwallet or open an existing one visit [omniwallet.org](https://www.omniwallet.org/).'
          ]
        },
        {
          question: 'How will MaidSafeCoin be converted to Safecoin?',
          answer: [
            'Once the SAFE Network goes live, MaidSafeCoin can be exchanged for Safecoin at a ratio of 1:1. This will probably be achieved by sending MaidSafeCoin to an unspendable address, thereby burning them. In return, an equal number of Safecoin will then be issued to the sender\'s User account on the SAFE Network.'
          ]
        }
      ]
    },
    {
      title: 'About Farming',
      items: [
        {
          question: 'What is Farming?',
          answer: [
            'Safecoin is given as an incentive to users for providing their resource to the network. This resource is their: storage space, CPU, bandwidth and online time that enable the encrypted chunks of network data to be stored and retrieved from their computer.',
            'The process of providing resource and receiving Safecoin in return is called ‘Farming’.',
            'Each piece of encrypted network data is stored in a Farmer\'s ‘Vault’, a data storage and management location on the Farmer\'s computer which they cannot read, or access. The SAFE Network is designed to self-manage these resources.'
          ]
        },
        {
          question: 'How will farming work in practice?',
          answer: [
            'When a user of the network requests some data, for example by browsing a website, a number of things happen: First, the client software makes a request for the required data chunks. This message (a GET request) is then propagated across the Network and when the chunk is found there is a competition between the Vaults in that Section to deliver it to the Network where it will be routed back to the requester. The first Vault to deliver will have a chance of being rewarded with Safecoin. This is described as a Farming Attempt.',
            'Farming Attempt means: by delivering data chunks when requested, a Vault occasionally gains the opportunity to make a Farming Attempt. This consists of sending a validated request to a random Safecoin address. If an owned Safecoin already exists at that address, the Attempt fails. If there is no Safecoin there, one is created and awarded to the requesting Vault (i.e. a successful Farming Attempt has been made).',
            'Farming is therefore when a Vault delivers data chunks that it is storing to the network and earns Safecoin in return.',
            'The probability of gaining a Farming Attempt is dependent on the farming rate, which is a variable related to the quantity of available storage resources in the Network.'
          ]
        },
        {
          question: 'What is stopping a hosting provider from farming?',
          answer: [
            'Nothing. Everyone is welcome to farm and thereby contribute to the network. To prevent centralisation, the use of one huge farming rig will be economically discouraged as compared to running multiple smaller nodes. The Safecoin earning algorithm is based on a Sigmoid curve, in that all Vaults earn, slowly at first and the rate increases as the Farmer stores up to the network average. The earning rate also takes into account the rank of the Vault, a process whereby the network scores the usefulness of each node from 0 (being the worst) to 1 (the best).',
            'The Safecoin farming rate is ultimately the result of the network rate (a balance of the demand and supply on the network) multiplied by the Vault rank. The network rate will start to level at 20% above average, thus discouraging massive Vaults which would bring centralisation to the network’s farming process.'
          ]
        }
      ]
    },
    {
      title: 'For Developers',
      items: [
        {
          question: 'What’s in it for developers?',
          answer: [
            '15% of all Safecoin earned will be allocated to the developer pool. This will ensure the developer community is highly motivated and rewarded for providing free-to-use applications as their revenue model. It is proposed that developers are able to use the SAFE Network to publish their applications. These application developers are called Builders and the network will reward use of these applications by paying the Builders in Safecoin based on the application use by users of the system. This is possible since the application developer can insert their own network immutable wallet address in their application. This creates a fully automatic revenue model for both open source projects, private individuals and application development companies. Developers who contribute code that enhances or fixes bugs in the SAFE Network that are accepted into the master branch of the codebase will also be able to earn Safecoin.',
            'Reasons for developing on the SAFE Network:',
            '\n*   Get your apps everywhere\n*   No API key—just download our code and start using it\n*   Extremely low customer acquisition costs and no infrastructure costs\n*   Apps that adapt in real-time to changes in demand\n*   Provide security, privacy and anonymity to all your users'
          ]
        },
        {
          question: 'As a developer how do I get involved?',
          answer: [
            'On top of our informative and helpful [Dev Forum](https://forum.safedev.org/), the SAFE Network has a dedicated [developer hub](https://hub.safedev.org/) that is the hub for all development resources.',
            '[Visit the DevHub](https://hub.safedev.org/)'
          ]
        },
        {
          question: 'Why is the SAFE Network open source?',
          answer: [
            'Because the SAFE Network has the potential to become a vital part of the lives of every connected person on the planet, MaidSafe are 100% committed to ensuring that all software is released under an open source licence. This encourages innovation and helps prevent any single person, company or organisation gaining control over the technology.'
          ]
        },
        {
          question: 'What open source licenses does the SAFE Network use?',
          answer: [
            'All SAFE Network and MaidSafe code is made available under [GPLv3](https://www.gnu.org/licenses/gpl.html), [BSD](http://www.linfo.org/bsdlicense.html) or [MIT](https://opensource.org/licenses/MIT) license.'
          ]
        }
      ]
    }
  ]
}
