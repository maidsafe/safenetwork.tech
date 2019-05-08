export default {
  title: 'Network Fundamentals',
  desc: 'There are certain concepts that have driven every stage of the design of the Network ever since the project started in 2006. Since that time, the SAFE community has grown and we’re delighted to see just how many people and projects have come to recognise the vital importance of a global, secure and private decentralised platform for storage and communication.',
  qa: {
    section: {
      title: 'The Network will...',
      items: [
        {
          question: 'Allow a person to create an account and login anonymously and without intervention',
          answer: [
            'Creating a new account and logging into the Network will never require a third party. Those processes will always be carried out directly between the User and the Network. It is worth noting that (for technical reasons) account creation may require the presence of Safecoin in the user’s account in certain circumstances (if this, for example, minimises the possibility of one entity creating millions of new accounts to attack the Network).'
          ]
        },
        {
          question: 'Enable Users to securely and with no controlling intermediaries share information and messages',
          answer: [
            'The SAFE Network will never have any third parties who have the ability to either read or store the information sent by a User (unless that User consents in some way).'
          ]
        },
        {
          question: 'Allow the transfer of Safecoin to any User free of transaction costs',
          answer: [
            'Each User will be able to use any of their identities as a wallet address in order to be able to send and receive Safecoin.'
          ]
        },
        {
          question: 'Enable Users to anonymously create and share data worldwide',
          answer: [
            'The Network will always ensure that the User has the ability to send transaction messages and posts with a temporary and single-use ID that is not linked to any known identity on the Network.'
          ]
        },
        {
          question: 'Let anyone browse content anonymously and free of charge',
          answer: [
            'It is crucial that the new decentralised web is without barriers. One of the most important foundations for a global, collaborative platform is that anyone can access public content for free at any time without the need to create an account.'
          ]
        },
        {
          question: 'Allow Users to associate multiple identities to their account',
          answer: [
            'Each Client Account manages information about the User which will include several identities. These identities are likely to be cryptographic key pairs.'
          ]
        },
        {
          question: 'Let Users use any of their identities to send/receive Safecoin',
          answer: [
            'Each individual must be able to use any of their identities as a wallet address in order to be able to send and receive Safecoin.'
          ]
        },
        {
          question: 'Store data in perpetuity',
          answer: [
            'All public/published data on the Network will be immutable and available on the Network in perpetuity. In exactly the same way as the Internet Archive stores versions of website that were published with mistakes, it will be impossible to delete any data from the Network after it has been uploaded. That does not mean that you won’t be able to change data - you will be able to make append-only changes, i.e. historic, earlier versions of data will always remain stored on the Network (whether they are accessible or not).'
          ]
        },
        {
          question: 'Never require passwords to be stored on the Network or on the machines used by the Clients to access the Network',
          answer: [
            'The Network itself will never hold passwords as this is a common cause of data loss. Instead, a User will only ever be required to enter a password locally on the device which they use to access the Network.'
          ]
        },
        {
          question: 'Allow any User, on any machine, to access the network and leave no trace of that User on the machine',
          answer: [
            'The Network must ultimately be accessible to any User on any device. When that User logs out from the Network and leaves that machine, there must be no evidence (other than any software downloaded to access the Network, such as the browser) that shows what activity the User undertook on the SAFE Network.'
          ]
        },
        {
          question: 'Scrub all Client IP addresses from Hop 1 of the overlay network (i.e on SAFE)',
          answer: [
            'After a User has started to communicate directly with anyone else after the first SAFE Network node that it connects to, the User’s IP address is scrubbed and untraceable. For clarity, we are using the phrase ‘Hop 1’ to refer to the transfer directly after that connection to the first SAFE Network node (not the hop that may take place from your computer to your home WiFi router, for example).'
          ]
        },
        {
          question: 'Only accept more Vaults when it needs them',
          answer: [
            'Like any species or group of organisms, unbounded growth leads to demise. The SAFE Network could be attacked by a bad actor simply adding millions of nodes and then closing them down (or worse). To help prevent this, the Network will only allow new nodes to join when it needs them. This also nicely slows any attacker and dilutes them with good actors also trying to join. The Network can then balance supply and demand as it sees fit as opposed to relying on external controls.'
          ]
        },
        {
          question: 'Increase farming rewards when it needs more resources (Vaults) and decrease rewards when resources are plentiful',
          answer: [
            'If the Network simply accepted any Vault that wanted to join, it would likely either be targeted by a botnet attack or an attacker might attempt to set up an overwhelming number of malicious nodes initially whilst the Network size is small at launch. The Network must be able to balance this supply of Vaults itself to avoid there being a large number of nodes that have very little data, as this would push the farming rates down.'
          ]
        },
        {
          question: 'Rank nodes over time and increase trust in higher ranked nodes',
          answer: [
            'A crucial part of Node Ageing (one of the ways by which the SAFE Network prevents Sybil attacks) comes from the fact that the Network is designed to only permit the most trustworthy nodes within each of the Close Groups to vote on the decisions in the Network.'
          ]
        },
        {
          question: 'Not have servers',
          answer: [
            'The SAFE Network will never rely on servers (as the term is traditionally understood) as to do so introduces a third party weakness that undermines the entire Network.'
          ]
        },
        {
          question: 'Digitally sign all transactions',
          answer: [
            'By ensuring that all transactions are digitally signed, the Network is able to ensure that the transactions have been authorised in accordance with the rules of the Network.'
          ]
        },
        {
          question: 'Ensure that Client-to-Client direct messages are free. It will charge, however, for Client-to-Client messages involving traversal through the SAFE Network',
          answer: [
            'Clients are software programs that allow users to connect to the SAFE Network. There will never be charge levied by the Network if messages are sent directly between two Clients. However, any indirect messages that are sent between Clients that involve travel across the Network will carry a cost.'
          ]
        },
        {
          question: 'Never use time as a network tool (although nodes may use local durations)',
          answer: [
            'There is no concept of time in a decentralised network such as SAFE unless it reaches out to centralised servers and services. SAFE uses a completely event-driven paradigm to circumvent the need to try and synchronise and then use time periods as valid tools on the network. These periods require magic numbers which would need to be set by developers and this is something the Network avoids with rigour.'
          ]
        },
        {
          question: 'Only ever use encrypted services and encrypted traffic',
          answer: [
            'Services or traffic must be encrypted if they are to be used by the SAFE Network.'
          ]
        },
        {
          question: 'Allow real-time upgrades in a secure manner (i.e the Network will refuse upgrades that could break it)',
          answer: [
            'The Network must be able to roll out improvements which are compatible with at least the previous version of the Network software, in order to ensure that the new iteration is an improvement in practice. As this will require significant effort, each node may run upgrades in parallel to existing working code before upgrading.'
          ]
        },
      ]
    }
  },
  safecoin: {
    title: 'Safecoin',
    lists: [
      {
        name: 'A.',
        para: 'Safecoin is the unique incentivisation mechanism built into the SAFE Network. All Safecoins are recycled when they are paid to the Network in exchange for resources. On launch, Safecoin will be distributed as follows: (1) Pay the creators of the Network (MaidSafe shareholders) 5% of the total Safecoin; (2) Pay the 2014 crowdsale investors of the Network 10% of the total Safecoin.'
      },
      {
        name: 'B.',
        para: 'Safecoin will be distributed on an ongoing basis: (1) Pay Vaults for providing service (85% of rewards); (2) Pay developers who produce apps that people use (10% of rewards); (3) Pay the maintainers of the Network code (5% of rewards)'
      },
    ],
    notes: {
      title: 'Note:',
      para: 'Whilst the above explanation is a handy approximation of the split, the rewards will in fact be dynamically adjusted according to the Farming Rate determined by the Network:',
      points: [
        'Farmers who run the Vaults are paid at 100% of the Farming Rate for all GETs on the Network. I.e. 86.95% (100/115) of all rewards.',
        'Application Developers are paid at 10% of the Farming Rate for all GETs on the Network (that relate to their applications). I.e. 8.695% (10/115) of all rewards.',
        'Maintainer Developers are paid at 5% of the Farming Rate for all GETs on the Network. I.e. 4.348% (5/115) of all rewards.'
      ]
    }
  }
}
