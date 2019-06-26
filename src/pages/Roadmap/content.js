export default {
  banner: {
    pageTitle: 'The ~~Im~~Possible Network',
    pageDesc: `12 years of research and development is coming to fruition as we put together the final building blocks of what some said was impossible: Secure Access For Everyone.`,
    latestUpdate: {
      overline: 'Latest Update',
      date: '26 June 2019',
      title: 'SAFE Browser v0.14.0',
      para: `The latest version of the SAFE Browser has been released with new features, bug fixes and updates.`,
      // CTA: {
      //   name: 'Read the RFC',
      //   url: 'https://github.com/maidsafe/rfcs/blob/master/text/0059-bls-scheme-in-routing/0059-bls-scheme-in-routing.md'
      // }
    }
  },
  subscribe: {
    title: 'Subscribe for updates:'
  },
  releases: {
    release1: {
      overline: 'Live Now',
      title: 'The Alpha 2 Network',
      para: 'The Alpha 2 Network lets you experiment with the first released SAFE Network features. This is a test Network in order to prove functionality so there is a limit on the amount of data that you can upload. At this stage, all data on the Alpha 2 Network is temporary in the sense that it will not be carried forward to future test networks.',
      accordion: {
        header: [
          'Alpha 2 Feature',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'Self-Authentication',
            desc: 'The ability to log into a decentralised network without the permission or existence of a third party',
            status: 'Complete',
            para: [
              'MaidSafe invented the technology that lets someone log into a decentralised network securely without requiring the involvement of a third party. The Alpha 2 Network is the only place in the world today that you can see this in action.'
            ],
          }, {
            feature: 'Self-Encryption',
            desc: 'Data is encrypted on your computer before being stored on the Network: no keys or passwords ever leave your machine',
            status: 'Complete',
            para: [
              'Invented by MaidSafe, this is the process by which any file to be stored in the Network is first broken into chunks, hashed, and then encrypted. These chunks are then themselves encrypted using the hash of another chunk from the same file.'
            ],
            video: {
              url: 'https://s3.eu-west-2.amazonaws.com/ms-marketing/website-videos/Self+Encryption+on+the+SAFE+Network.mp4',
              caption: 'Self-Encryption explained'
            }
          }, {
            feature: 'Disjoint Sections',
            desc: 'Otherwise known as Sharding, this allows the Network to scale by splitting responsibilities for specific Network functions.',
            status: 'Complete',
            para: [
              'Ensures that the Network can scale by managing the responsibilities and locations of each node without requiring any human intervention. This also acts as a security measure to ensure that an attacker cannot choose their location or responsibilities.'
            ],
            CTA: {
              name: 'Read More',
              url: 'https://safenetforum.org/t/step-by-step-the-road-to-fleming-6-disjoint-sections/28530'
            },
          }, {
            feature: 'Message Relay',
            desc: 'Ensures a message can be sent between nodes in different Disjoint Sections',
            status: 'Complete',
            para: [
              'Ensures that a message can be sent between nodes in different Disjoint Sections. In this early iteration, each message contains signatures of the members of the Disjoint Sections but does not yet verify the signatures themselves.'
            ],
          },
        ]
      }
    },
    release2: {
      overline: 'Upcoming Milestone',
      title: 'SAFE Fleming Network',
      para: 'The next major milestone for the SAFE Network. Whilst the Alpha 2 Network will continue to function, this will be a standalone Network that will enable individuals to run decentralised routing nodes from home. There will be no data storage capacity on the Network as such. Instead, you’ll see fully-encrypted transient data moving across a Network that also responds to malicious nodes.',
      accordion: {
        header: [
          'Fleming Feature',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'PARSEC',
            desc: 'Asynchronous consensus algorithm',
            status: 'Complete',
            para: [
              'Ensures that a global decentralised, permissionless Network can reach agreement about events that are permitted and the order in which they are to be recorded. A DAG-based algorithm that achieves the highest standard of security possibile, invented by MaidSafe in such a way that it ensures it is mathematically certain that every part of the Network will reach eventual agreement. In Fleming, we’ll be releasing a highly asynchronous version of PARSEC, with full asynchronicity to come later.'
            ],
            CTA: {
              name: 'Read More',
              url: 'https://hub.safedev.org/parsec/'
            },
          }, {
            feature: 'Node Ageing',
            desc: 'A decentralised system for ranking the behaviour, performance and abilities of nodes on the Network that requires no human intervention.',
            status: 'Development',
            para: [
              'Each node on the SAFE Network is given an age by the Network itself. The node age increments every time that a node moves between Disjoint Sections, with only the most senior (Elders) entitled to vote during the PARSEC consensus algorithm.',
              'Dig into the detail in the RFC, and [join the discussion](https://forum.safedev.org/t/rfc-45-node-ageing/157) on the forum.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0045-node-ageing/0045-node-ageing.md'
            },
          }, {
            feature: 'Secure Message Delivery',
            desc: 'Trusted communication between nodes - messages with authenticated source',
            status: 'Design',
            para: [
              'Ensures messages are sent and signed in such a way that lets nodes rely on the contents of each message despite having no previous relationship with the sender. This solves a problem faced by many existing blockchain-based projects and is essential when you have a Network that will autonomously move nodes around as required.',
              'Feel free to [join in the discussion](https://safenetforum.org/t/rfc-56-secure-message-delivery/28622) of the RFC in the forum.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0056-secure-message-delivery/0056-secure-message-delivery.md'
            },
          }, {
            feature: 'Reliable Message Delivery',
            desc: 'Communication guaranteeing the successful delivery of messages.',
            status: 'Development',
            para: [
              'Ensures that all sent messages will be successfully delivered to their destinations, even when some nodes responsible for the delivery are failing.',
              'Feel free to [join in the discussion](https://safenetforum.org/t/rfc-58-reliable-message-delivery/28689) of the RFC in the forum.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0058-reliable-message-delivery/0058-reliable-message-delivery.md'
            },
          }, {
            feature: 'QUIC-P2P',
            desc: 'The low-level language which users connecting to SAFE will use for all network communications',
            status: 'Complete',
            para: [
              'Software that lets computers communicate in an encrypted manner on the SAFE Network. The software provides the infrastructure for messages to travel whilst the Routing layer of the Network sets the rules about which directions those messages can travel in.'
            ],
          }, {
            feature: 'Malice Detection',
            desc: 'Preventing malicious nodes subverting the consensus algorithm, PARSEC',
            status: 'Complete',
            para: [
              'The way that nodes identify malicious nodes that are damaging the Network within a Disjoint Section and the mechanism by which they agree to eject that node, or mitigate the risk.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0050-malice_in_parsec/0050-malice_in_parsec.md'
            },
          }
        ]
      }
    },
    release3: {
      overline: 'Next Up',
      title: 'SAFE Maxwell Network',
      para: 'The release of SAFE Maxwell is a key stage as it reintroduces Vaults (decentralised storage from home computers). The software that creates Vaults was previously released by MaidSafe for widespread testing by the Community. In fact the Community today continues to run a standalone test Vault Network themselves. The release of Maxwell will be notable for many reasons, not least the fact that with data storage, the Network will now also contain Test Safecoin. ',
      accordion: {
        header: [
          'Maxwell Feature',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'Test Safecoin & Wallet',
            desc: 'Allow the Network to charge, and a user to send and receive payments to a wallet, in units called Test Safecoins',
            status: 'RFC',
            para: [
              'Safecoin is the incentive mechanism that encourages individuals to provide the computing resources that the Network requires: storage, broadband, and CPU resources.',
              '[Join in the discussion](https://safenetforum.org/t/rfc-57-safecoin-revised/28660) on the forum'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0057-safecoin-revised/0057-safecoin-revised.md'
            },
          }, {
            feature: 'Farming',
            desc: 'The process of providing resource and receiving Safecoin in return',
            status: 'RFC',
            para: [
              'Individuals who choose to supply the resources that the Network requires have the opportunity to be rewarded with Safecoin. This work ensures that the Network rewards those who provide it with valuable resources.',
              '[Join in the discussion](https://safenetforum.org/t/rfc-57-safecoin-revised/28660) on the forum'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0057-safecoin-revised/0057-safecoin-revised.md'
            },
          }, {
            feature: 'Vaults From Home',
            desc: 'The ability for anyone to download software and run Vaults from home, creating decentralised storage for the Network',
            status: 'Development',
            para: [
              'Decentralised data storage is a key element of the SAFE Network. This release will enable nodes to participate regardless of the resources they offer.'
            ],
          }, {
            feature: 'Spam Handling',
            desc: 'Ability to handle spam attacks',
            status: 'Concept',
            para: [
              'Spam includes nodes attempting to carry out activities that they shouldn’t or valid activities at a scale that is intended to choke the Network. The Network should be able to withstand a reasonable volume of such attacks.'
            ],
          }, {
            feature: 'Identity Management',
            desc: 'Ability for users to create and manage multiple identities for use on the network',
            status: 'Concept',
            para: [
              'Users will be able to create multiple identities in the Network. Each identity can be used as required by the User and each should be independent unless the User explicitly wants to connect them. This helps protect identity and privacy.'
            ],
          }
        ]
      }
    },
    release4: {
      overline: 'Coming Soon',
      title: 'Upcoming Network Features',
      para: 'The following list represents network work that remains to be completed. The order should not be seen as fixed in any way as in certain cases, work will be carried out in parallel by different teams.',
      accordion: {
        header: [
          'Feature',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'Upgrades',
            desc: 'The ability for the Network to upgrade itself, with no harm caused',
            status: 'Concept',
            para: [
              'The Network will have the ability to upgrade itself in order to allow features and improvements to disseminate throughout the Network. The upgrades must be done in a way such that they don’t cause harm to the Network.',
              'This is an important stage in the evolution of the Network as it means that new software can then continue to be rolled out onto the existing Network without disrupting the existing functionality.'
            ],
            CTA: {
              name: 'Follow the Discussion',
              url: 'https://safenetforum.org/t/step-by-step-the-road-to-fleming-5-network-upgrades/28319'
            },
          }, {
            feature: 'Secure Enclaves',
            desc: 'A trusted executable environment within existing computers',
            status: 'Concept',
            para: [
              'Creates an area within the hardware of a computer that is a secure, trusted environment that stands separate from the rest of the computer. It functions like a mini-computer inside existing computers that cannot be opened.'
            ],
          }, {
            feature: 'Network Growth',
            desc: 'Allow the network to grow and scale in a sustainable way',
            status: 'Concept',
            para: [
              'The Network allows controlled growth to ensure that the majority of decision-makers are healthy nodes that follow the rules of the Network. This growth should be sustainable in order to avoid unnecessary mergers between Sections.'
            ],
          }, {
            feature: 'Network Restarts',
            desc: 'Ability for the network to restart after a catastrophe',
            status: 'Concept',
            para: [
              'In the event of a catastrophic outage, the Network should be able to rebuild itself because it maintains the integrity of essential data (such as chain history) which enables it to start functioning again on the basis of the last known state of the Network.'
            ],
          }, {
            feature: 'RDF Support',
            desc: 'The Network will have native support for RDF, enabling data to be compatible with the Semantic Web',
            status: 'RFC',
            para: [
              'Ensures that data on the SAFE Network is stored in such a way that the format can be understood by other Semantic Web projects, such as Solid.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/nbaksalyar/rfcs/blob/master/text/0000-rdf-in-client-libs/0000-rdf-in-client-libs.md'
            },
          }, {
            feature: 'Obfuscating stored data',
            desc: 'All data stored within a Vault on an individual’s computer must be entirely encrypted and unreadable',
            status: 'Concept',
            para: [
              'Ensures that even the smallest piece of data that is stored in a Vault cannot be read by the person controlling the computer on which it is stored.'
            ],
          }, {
            feature: 'Common Coin',
            desc: 'Replace our concrete coin with a common coin to make PARSEC fully asynchronous',
            status: 'Design',
            para: [
              'Common coin is a device that nodes can use to generate a “random” binary value (true or false). Every time a node flips the coin, all other nodes are guaranteed to observe the same value for their coin flip. Also, the value must be unpredictable, which means that no malicious node can know the outcome before a honest node has observed it.'
            ],
          }, {
            feature: 'Published and Unpublished Data Types',
            desc: 'Allow the network to store Published and Unpublished data via AppendOnlyData or MutableData types',
            status: 'RFC',
            para: [
              'Published data refers to content that is published (made available) for everyone such as websites, blogs, or research papers. For such public content, it becomes important to retain a history of changes. History must not be allowed to be tampered with and the published data must remain forever. Unpublished data is data that is not desired to be made public such as personal data or organisations’ data stored on the network',
              'Get the detail in the RFC linked below, and [join the discussion](https://safenetforum.org/t/rfc-54-published-and-unpublished-datatype/28620) on the forum.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0054-published-and-unpublished-mutable-data/0054-published-and-unpublished-mutable-data.md'
            },
          }, {
            feature: 'Unpublished ImmutableData Data Type',
            desc: 'Enhance ImmutableData to make it an unpublished or published, with the difference that unpublished can be deleted',
            status: 'RFC',
            para: [
              'There are many times when a user will require to create Immutable Data to store private content. As long as this content is not published (made available for others) this will be deleteable by the data owner only.',
              'Dig into the detail in the RFC, and [join the discussion](https://safenetforum.org/t/rfc-55-unpublished-immutabledata/28621) on the forum.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0055-unpublished-immutable-data/0055-unpublished-immutable-data.md'
            },
          }
        ]
      }
    }
  },
  apps: {
    title: 'Apps and User Experience',
    list: [
      {
        id: 'safeBrowser',
        name: 'SAFE Browser',
        para: 'Browse the Alpha 2 network. It also includes the Authenticator: enabling you to securely sign into the SAFE Network, and manage access and permissions of SAFE Apps.',
        status: 'Latest Version v0.14.0'
      },
      {
        id: 'webHostingManager',
        name: 'Web Hosting Manager',
        para: 'Add data, create websites, and manage Public Names with the Web Hosting Manager.',
        status: 'Latest Version v0.5.1'
      }
    ],
    currentMilestone: {
      status: 'Current Milestone',
      title: 'The Perpetual Web',
      para: 'The SAFE Network is designed to ensure that public data is permanent and can never be deleted. Individuals and groups can choose to keep their data private, but once it’s been published, it will remain permanently available. This milestone aims to showcase the incredible power of this facet of the Network, by building out the User Experience, and iterating on it right through to launch.',
      accordion: {
        header: [
          'Milestone Features',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'SAFE Browser',
            desc: 'Enhancements to the browser designed specifically to take advantage of the functionalities of the Perpetual Web',
            status: 'Design',
            para: [
              'The SAFE Browser functionality will be extended to incorporate new features that are unique to the Perpetual Web, such as the ability to roll-back through the version history of any SAFE website or asset.'
            ],
          },
          {
            feature: 'Mobile Browser',
            desc: 'Mobile version of SAFE browser which is limited to browsing published data from the SAFE Network',
            status: 'Concept',
            para: [
              'Enables individuals to access the SAFE Network directly by using a browser on their mobile phone'
            ],
          },
          {
            feature: 'Data Manager',
            desc: 'Streamlined publishing of SAFE sites and Perpetual Data',
            status: 'Development',
            para: [
              'A suite of tools which provides the necessary functionality to add data to the SAFE Network, publish perpetual data, and manage Public Names. This will supersede the Web Hosting Manager.'
            ],
          },
          {
            feature: 'SAFE CLI',
            desc: 'An advanced CLI to manage accounts and data',
            status: 'Development',
            para: [
              'A command line tool to manage data on the SAFE Network. It will allow the user to store data on the network and manage accounts, identities, and permissions. This is the tool that the frontend apps and features—such as the Data Manager—will build upon.'
            ],
          },
          {
            feature: 'Public Name System',
            desc: 'Content stored should be accessible with human-readable URLs, via a decentralised domain name system: the Public Name System',
            status: 'RFC',
            para: [
              'A domain name system translates numerical IP addresses into a format that can be read by humans (eg. http//216.58.206.35 resolves to Google.com). The current web relies on a centralised organisation to maintain that record. The SAFE Network requires this process to be outside the control of a single party in order to avoid censorship and repression.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/maidsafe/rfcs/issues/283'
            },
          },
        ]
      }
    },
    upcomingMilestones: {
      status: 'Upcoming Milestones',
      list: [
        {
          title: 'Private Communications',
          para: 'If we want a world in which individuals can communicate freely whenever they choose, privacy is essential. This milestone aims to deliver just that.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Private Messaging',
                desc: 'Send secure private messages between clients',
                status: 'Concept',
                para: [
                  'One of the most sought after features of the SAFE Network: secure, private, instant messaging.'
                ],
              },
              {
                feature: 'Identity Management',
                desc: 'Ability for users to create and manage multiple identities',
                status: 'Concept',
                para: [
                  'Improves the user experience for individuals as they switch between the identities (or profiles) that they choose to represent themselves with on the SAFE Network, without the need to create multiple accounts.'
                ],
              },
              {
                feature: 'Contacts Management',
                desc: 'Find, connect and stay up-to-date with other SAFE Network users  ',
                status: 'Concept',
                para: [
                  'Enables SAFE users to find and connect with other people across a range of applications in a consistent way.'
                ],
              },
            ]
          }
        },
        {
          title: 'Take Control of Your Data',
          para: 'The SAFE Network turns the current data ownership model on its head. Personal information will no longer be stored on corporate servers. Self Authentication gives you complete control over your data. You can grant (and revoke) permission for apps to use your data at any time and prevent any unauthorised company or third party ever gaining access.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Data Manager',
                desc: 'Fine-grained management of your personal data',
                status: 'Concept',
                para: [
                  'The extension of the Data Manager tool to allow fine-grained control by individuals over their private and unpublished data.'
                ],
              },
              {
                feature: 'RDF Support',
                desc: 'Support storing and querying RDF resources in SAFE-Core',
                status: 'RFC',
                para: [
                  'Ensures that the SAFE Network understands a way of describing the architecture of data that is understood by other projects, such as Solid'
                ],
                CTA: {
                  name: 'Read the RFC',
                  url: 'https://github.com/maidsafe/rfcs/issues/289'
                },
              },
              {
                feature: 'SPARQL Support',
                desc: 'Add native support for SPARQL to allow searching of data',
                status: 'Concept',
                para: [
                  'Enhances the functionality of SAFE by adding SPARQL support to SAFE Client Libs and SAFE Vault.  This ensures that the Network can understand a well-known semantic query language, and enables users to search.'
                ],
              },
              {
                feature: 'Collaboration',
                desc: 'Tools to enable collaboration through sharing and group permissions on private unpublished data',
                status: 'Concept',
                para: [
                  'Manage sharing and permissions of private, unpublised data and files, for collaboration between individuals and groups. '
                ],
              },
              {
                feature: 'XOR URLs',
                desc: 'A way of sharing and accessing SAFE Network files without the need for a Public Name',
                status: 'RFC',
                para: [
                  'Create a system of standardised URL’s on the SAFE Network that are based on the XOR address of the content being referenced. Ensures that individuals can access and locate  data and files in a more user-friendly manner. [join in the discussion](https://forum.safedev.org/t/rfc-discussion-xor-urls/2365) on the developers forum.'
                ],
                CTA: {
                  name: 'Read the RFC',
                  url: 'https://github.com/maidsafe/rfcs/blob/master/text/0053-xor-urls/0053-xor-urls.md'
                },
              }
            ]
          }
        },
        {
          title: 'The New Digital Economy',
          para: 'The new digital economy is all about ensuring that you no longer pay for your digital life with data. Instead, you use a cryptocurrency that’s integral and distributed by the SAFE Network. You earn value in return for providing resources to the Network.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Test Safecoin Wallet',
                desc: 'Transact using Test Safecoins',
                status: 'RFC',
                para: [
                  'Users will be able to use Test Safecoin in the Network, allowing an ecosystem to built around the SAFE incentive mechanism. The ability to create multiple wallets, associate them with an identity, and also one-time-use wallets to enable anonymous transactions, will all be part of this.',
                  '[Join in the discussion](https://safenetforum.org/t/rfc-57-safecoin-revised/28660) on the forum'
                ],
                CTA: {
                  name: 'Read the RFC',
                  url: 'https://github.com/maidsafe/rfcs/blob/master/text/0057-safecoin-revised/0057-safecoin-revised.md'
                },
              },
              {
                feature: 'Vault User Interface',
                desc: 'Easily set up, run, and manage a Vault',
                status: 'Concept',
                para: [
                  'Users will see greatly-improved Vault User Experience. Anyone providing storage to the Network can expect to see a number of usability improvements, making it easy to offer resources and start farming on everyday home computers and devices.'
                ],
              },
            ]
          }
        }
      ]
    }
  }
}
