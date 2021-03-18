export default {
  banner: {
    pageTitle: 'The ~~Im~~Possible Network',
    pageDesc: `14 years of research and development is coming to fruition as we put together the final building blocks of what some said was impossible: Secure Access For Everyone.`,
    // latestUpdate: {
    //   overline: 'Latest Update',
    //   date: 'March 26, 2020',
    //   title: 'Baby Fleming iteration 3',
    //   para: `The Baby Fleming release is about iterating from a single node network into a multiple nodes (single-section) network. Iteration 3 has been updated to use the latest version of the Quinn library (via quic-p2p).`,
    //    CTA: {
    //      name: 'Safe Network Forum',
    //      url: 'https://safenetforum.org/t/safe-network-dev-update-march-26-2020/31360'
    //    }
    // }
  },
  /*subscribe: {
    title: 'Subscribe for updates:'
  },*/
  releases: {
    /*release1: {
      overline: 'Live Now',
      title: 'Baby Fleming Network',
      para:[
        `From a user perspective, the exact same type of operations and use cases as Vaults Phase 1 are being supported by Baby Fleming, i.e. Test Safecoin, wallets, files, NRS names, Safe sites, etc.`,
        'We’ve set up a [public shared section](https://safenetforum.org/t/baby-fleming-public-shared-section/31377) for you to play with. You can also set up your own local network. See the [CLI User Guide](https://github.com/maidsafe/sn_api/blob/master/sn_cli/README.md#download) for full instructions.'
      ],
      // accordion: {
      //   header: [
      //     'The Share Vault Network Feature',
      //     'Description',
      //     'Status'
      //   ],
      //   items: [
      //   ]
      // }
    },*/
    release2: {
      overline: 'Upcoming Milestone',
      title: 'Safe Fleming Network',
      para: ['The next major milestone for the Safe Network. This will be a standalone Network that will enable individuals to run Nodes - decentralised storage from home computers. The release of Fleming will be notable for many reasons, not least the fact that with data storage, the Network will now also contain Test Safe Network Tokens.'],
      accordion: {
        header: [
          'Fleming Feature',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'Self-Authentication',
            desc: 'The ability to log into a decentralised network without the permission or existence of a third party',
            status: 'Complete',
            para: [
              'MaidSafe invented the technology that lets someone log into a decentralised network securely without requiring the involvement of a third party. The testnets we have released are the only place in the world today that you can see this in action.'
            ],
            // CTA: {
            //   name: 'Read More',
            //   url: 'https://safenetwork.tech/roadmap/#self-authentication'
            // },
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
              'Ensures that a message can be sent between nodes in different Disjoint Sections. Each message contains signatures of the members of the Disjoint Sections and is verified using these signatures.'
            ],
          },
          {
            feature: 'Node Ageing',
            desc: 'A decentralised system for ranking the behaviour, performance and abilities of nodes on the Network that requires no human intervention.',
            status: 'Complete',
            para: [
              'Each node on the Safe Network is given an age by the Network itself. The node age increments every time that a node moves between Disjoint Sections, with only the most senior (Elders) entitled to vote.',
              'Dig into the detail in the RFC, and [join the discussion](https://forum.safedev.org/t/rfc-45-node-ageing/157) on the forum.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0045-node-ageing/0045-node-ageing.md'
            },
          }, {
            feature: 'Secure Message Delivery',
            desc: 'Trusted communication between nodes - messages with authenticated source',
            status: 'Complete',
            para: [
              'Ensures messages are sent and signed in such a way that lets nodes rely on the contents of each message despite having no previous relationship with the sender. This solves a problem faced by many existing blockchain-based projects and is essential when you have a Network that will autonomously move nodes around as required.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0056-secure-message-delivery/0056-secure-message-delivery.md'
            },
          }, {
            feature: 'Reliable Message Delivery',
            desc: 'Communication guaranteeing the successful delivery of messages.',
            status: 'Complete',
            para: [
              'Ensures that all sent messages will be successfully delivered to their destinations, even when some nodes responsible for the delivery are failing.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0058-reliable-message-delivery/0058-reliable-message-delivery.md'
            },
          }, {
            feature: 'QP2P',
            desc: 'The low-level language which users connecting to Safe will use for all network communications',
            status: 'Complete',
            para: [
              'Software that lets computers communicate in an encrypted manner on the Safe Network. The software provides the infrastructure for messages to travel whilst the Routing layer of the Network sets the rules about which directions those messages can travel in.'
            ],
          }, {
            feature: 'Test Safe Network Tokens & Wallet',
            desc: 'Allow the Network to charge, and a user to send and receive payments to a wallet, in units called Test Safe Network Tokens',
            status: 'Complete',
            para: [
              'Safe Network Tokens are the incentive mechanism that encourages individuals to provide the computing resources that the Network requires: storage, broadband, and CPU resources.',
            ]
          }, {
            feature: 'Farming',
            desc: 'The process of providing resource and receiving Safe Network Tokens in return',
            status: 'Development',
            para: [
              'Individuals who choose to supply the resources that the Network requires have the opportunity to be rewarded with Safe Network Tokens. This work ensures that the Network rewards those who provide it with valuable resources.',
            ],
          }, {
            feature: 'Nodes From Home',
            desc: 'The ability for anyone to download software and run Nodes from home, creating decentralised storage for the Network',
            status: 'Complete',
            para: [
              'Decentralised data storage is a key element of the Safe Network. This enables nodes to participate regardless of the resources they offer.'
            ],
          }, {
            feature: 'Published and Unpublished Data Types',
            desc: 'Allow the network to store Published and Unpublished data via AppendOnlyData or MutableData types',
            status: 'Complete',
            para: [
              'Published data refers to content that is published (made available) for everyone such as websites, blogs, or research papers. For such public content, it becomes important to retain a history of changes. History must not be allowed to be tampered with and the published data must remain forever. Unpublished data is data that is not desired to be made public such as personal data or organisations’ data stored on the network'
            ],
            //CTA: {
              //name: 'Read the RFC',
              //url: 'https://github.com/maidsafe/rfcs/blob/master/text/0054-published-and-unpublished-mutable-data/0054-published-and-unpublished-mutable-data.md'
            //},
          }, {
            feature: 'Unpublished ImmutableData Data Type',
            desc: 'Enhance ImmutableData to make it unpublished or published, with the difference that unpublished can be deleted',
            status: 'Complete',
            para: [
              'There are many times when a user will require to create Immutable Data to store private content. As long as this content is not published (made available for others) this will be deleteable by the data owner only.'
            ],
            //CTA: {
              //name: 'Read the RFC',
              //url: 'https://github.com/maidsafe/rfcs/blob/master/text/0055-unpublished-immutable-data/0055-unpublished-immutable-data.md'
            //},
          }
        ]
      }
    },
    release3: {
      overline: 'Next Up',
      title: 'Safe Maxwell Network',
      para: ['The release of Safe Maxwell builds on top of Fleming and enables the network to upgrade, improves security and sets the ground work for switching Test Safe Network Tokens to real Safe Network Tokens.'],
      accordion: {
        header: [
          'Maxwell Feature',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'Spam Handling',
            desc: 'Ability to handle spam attacks',
            status: 'Concept',
            para: [
              'Spam includes nodes attempting to carry out activities that they shouldn’t or valid activities at a scale that is intended to choke the Network. The Network should be able to withstand a reasonable volume of such attacks.'
            ],
          },
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
            }
          }
        ]
      }
    },
    release4: {
      overline: 'Coming Soon',
      title: 'Upcoming Network Features',
      para: ['The following list represents network work that remains to be completed. The order should not be seen as fixed in any way as in certain cases, work will be carried out in parallel by different teams.'],
      accordion: {
        header: [
          'Feature',
          'Description',
          'Status'
        ],
        items: [
          {
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
              'Ensures that data on the Safe Network is stored in such a way that the format can be understood by other Semantic Web projects, such as Solid.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/nbaksalyar/rfcs/blob/master/text/0000-rdf-in-client-libs/0000-rdf-in-client-libs.md'
            },
          }, {
            feature: 'Obfuscating stored data',
            desc: 'All data stored within a Node on an individual’s computer must be entirely encrypted and unreadable',
            status: 'Concept',
            para: [
              'Ensures that even the smallest piece of data that is stored in a Node cannot be read by the person controlling the computer on which it is stored.'
            ],
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
        name: 'Safe Browser',
        para: 'The latest release includes some of the beginnings of the Perpetual Web. Please note that it\'s only compatible with the Nodes Phase 1 release.',
        status: 'Latest Version v0.16.0'
      }
    ],
    currentMilestone: {
      status: 'Current Milestone',
      title: 'The Perpetual Web',
      para: 'The Safe Network is designed to ensure that public data is permanent and can never be deleted. Individuals and groups can choose to keep their data private, but once it’s been published, it will remain permanently available. This milestone aims to showcase the incredible power of this facet of the Network, by building out the User Experience, and iterating on it right through to launch.',
      accordion: {
        header: [
          'Milestone Features',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'Safe Browser',
            desc: 'Enhancements to the browser designed specifically to take advantage of the functionalities of the Perpetual Web',
            status: 'Complete',
            para: [
              'The Safe Browser functionality will be extended to incorporate new features that are unique to the Perpetual Web, such as the ability to roll-back through the version history of any Safe website or asset.'
            ],
          },
          {
            feature: 'Mobile Browser',
            desc: 'Mobile version of Safe browser which is limited to browsing published data from the Safe Network',
            status: 'Complete',
            para: [
              'Enables individuals to access the Safe Network directly by using a browser on their mobile phone'
            ],
          },
          {
            feature: 'Data Manager',
            desc: 'Streamlined publishing of Safe sites and Perpetual Data',
            status: 'Development',
            para: [
              'A suite of tools which provides the necessary functionality to add data to the Safe Network, publish perpetual data, and manage Public Names. This will supersede the Web Hosting Manager.'
            ],
          },
          {
            feature: 'Safe CLI',
            desc: 'An advanced CLI to manage accounts and data',
            status: 'Complete',
            para: [
              'A command line tool to manage data on the Safe Network. It will allow the user to store data on the network and manage accounts, identities, and permissions. This is the tool that the frontend apps and features—such as the Data Manager—will build upon.'
            ],
          },
          {
            feature: 'Public Name System',
            desc: 'Content stored should be accessible with human-readable URLs, via a decentralised domain name system: the Public Name System',
            status: 'Complete',
            para: [
              'A domain name system translates numerical IP addresses into a format that can be read by humans (eg. http//216.58.206.35 resolves to Google.com). The current web relies on a centralised organisation to maintain that record. The Safe Network requires this process to be outside the control of a single party in order to avoid censorship and repression.'
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
                  'One of the most sought after features of the Safe Network: secure, private, instant messaging.'
                ],
              },
              {
                feature: 'Identity Management',
                desc: 'Ability for users to create and manage multiple identities',
                status: 'Concept',
                para: [
                  'Improves the user experience for individuals as they switch between the identities (or profiles) that they choose to represent themselves with on the Safe Network, without the need to create multiple accounts.'
                ],
              },
              {
                feature: 'Contacts Management',
                desc: 'Find, connect and stay up-to-date with other Safe Network users  ',
                status: 'Concept',
                para: [
                  'Enables Safe users to find and connect with other people across a range of applications in a consistent way.'
                ],
              },
            ]
          }
        },
        {
          title: 'Take Control of Your Data',
          para: 'The Safe Network turns the current data ownership model on its head. Personal information will no longer be stored on corporate servers. Self Authentication gives you complete control over your data. You can grant (and revoke) permission for apps to use your data at any time and prevent any unauthorised company or third party ever gaining access.',
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
                desc: 'Support storing and querying RDF resources in Safe-Core',
                status: 'RFC',
                para: [
                  'Ensures that the Safe Network understands a way of describing the architecture of data that is understood by other projects, such as Solid'
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
                  'Enhances the functionality of Safe by adding SPARQL support to Safe Network Client and Safe Network Node.  This ensures that the Network can understand a well-known semantic query language, and enables users to search.'
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
                desc: 'A way of sharing and accessing Safe Network files without the need for a Public Name',
                status: 'Complete',
                para: [
                  'Create a system of standardised URL’s on the Safe Network that are based on the XOR address of the content being referenced. Ensures that individuals can access and locate  data and files in a more user-friendly manner.'
                ],
              }
            ]
          }
        },
        {
          title: 'The New Digital Economy',
          para: 'The new digital economy is all about ensuring that you no longer pay for your digital life with data. Instead, you use a cryptocurrency that’s integral and distributed by the Safe Network. You earn value in return for providing resources to the Network.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Test Safe Network Token Wallet',
                desc: 'Transact using Test Safe Network Tokens',
                status: 'Development',
                para: [
                  'Users will be able to use Test Safe Network Tokens in the Network, allowing an ecosystem to built around the Safe incentive mechanism. The ability to create multiple wallets, associate them with an identity, and also one-time-use wallets to enable anonymous transactions, will all be part of this.',
                ],
              },
              {
                feature: 'Node User Interface',
                desc: 'Easily set up, run, and manage a Node',
                status: 'Concept',
                para: [
                  'Users will see greatly-improved Node User Experience. Anyone providing storage to the Network can expect to see a number of usability improvements, making it easy to offer resources and start farming on everyday home computers and devices.'
                ],
              },
            ]
          }
        }
      ]
    }
  }
}
