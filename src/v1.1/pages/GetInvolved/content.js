import CONSTANT from 'src/v1.1/constant'

export default {
  title: 'It’s the dawn of a new web.\n Help us create it.',
  pageDesc: 'The SAFE Network is an Open Source and collaborative effort between developers and the community using it. You can get involved by testing, suggesting, coding, or promoting. Here’s how.',
  develop: {
    trySafeNet: {
      title: 'Try the SAFE Network',
      para: [
        'SAFE will change how we’ll interact with the web and our own data. A leap as big as this requires continuous testing and feedback from the people who it is designed for—and that’s where you can help.',
        'The network is currently in Alpha testing, meaning that it lacks some features, and will contain bugs that could make the network unstable. By running these earlier versions and providing feedback you’ll be helping to shape the new Internet.'
      ]
    },
    startDevelop: {
      title: 'Start Developing on SAFE',
      para: [
        'The SAFE Network is a platform for creating decentralised apps. It is secure, privacy focussed, has a built-in revenue stream, and next to no infrastructure costs.',
        'If you want to get started building a SAFE DApp, you’ll find all the tools you need on our DevHub; such as key concepts, APIs and documentation.'
      ],
      CTA: {
        name: 'Visit the DevHub',
        url: 'https://hub.safedev.org'
      }
    },
    joinForum: {
      title: 'Join the Developer Community',
      para: [
        'In addition to the developer hub, we also have a growing developer forum. It’s a great way to get support and collaborate.'
      ],
      CTA: {
        name: 'Developer Forum',
        url: 'https://forum.safedev.org'
      }
    },
    coreNetwork: {
      title: 'Help Build the Core Network',
      para: [
        'You can also get involved by helping to maintain the Networks underlying open source libraries. As we reach beta launch it will be possible to be compensated in Safecoin for fixing bugs, optimising code and developing new features.'
      ],
      CTA: {
        name: 'Contribute on GitHub',
        url: 'https://github.com/maidsafe/'
      }
    }
  },
  engage: {
    community: {
      title: 'Be part of the community',
      para: [
        'The SAFE Network community is comprised of thousands of people from all over the world passionate about the unfettered access and sharing of data.',
        'Safenetforum.org is the main discussion forum of this growing community and is a great place to help test new releases by the development teams, receive support, discuss the latest Internet trends and read the weekly dev updates. To meet others in person, take a look at the various meetups taking place around the world.'
      ],
      CTA: {
        name: 'Join the Forum',
        url: '/'
      }
    },
    subscribe: {
      title: 'Stay Up-to-date'
    }
  },
  invite: {
    title: 'Get Started',
    claimInvite: {
      id: 'claimInvite',
      title: 'Claim an Invite',
      para: 'Access to the SAFE Network is by invite only while we are in Alpha. You’ll need to claim an one to get started.',
      CTA: {
        button: {
          name: 'Get an Invite',
          url: '/'
        },
        link: {
          name: 'I’ve got one',
          url: '#installBrowser'
        }
      }
    },
    installBrowser: {
      id: 'installBrowser',
      title: 'Install the SAFE Browser',
      para: 'Grab the latest SAFE Browser to create your SAFE Account, and start using the Alpha 2 Network.',
      CTA: {
        button: {
          name: 'Download for',
          url: '/'
        },
        link: {
          name: 'More Options',
          url: CONSTANT.downloadApps.browser.others
        }
      }
    },
    feedback: {
      id: 'feedback',
      title: 'Feedback & Contribute',
      para: 'Building the SAFE Network is a team effort. You can help out by making suggestions, reporting bugs, or contributing code.',
      CTA: {
        button: {
          name: 'Join Community',
          url: 'https://safenetforum.org'
        }
      }
    },
    modal: {
      title: 'Get an Invite',
      caption: 'There are two ways to get an invite',
      request: {
        title: 'Ask Us',
        para: 'We’re giving out a limited number of invite codes every month. Send us an email and we’ll hook you up!',
        CTA: {
          name: 'Request Invite',
          url: '/'
        }
      },
      joinForum: {
        title: 'Join the Forum',
        para: 'Forum members are automatically given an invite after they reach Trust Level 1. It doesn’t take long, so come say hello!',
        CTA: {
          name: 'Join Forum',
          url: '/'
        }
      },
      whyInvite: {
        name: 'Why do I need an Invite?',
        url: '/'
      }
    }
  },
  faqs: {
   sections: [
    {
      title: 'Getting Started: Frequently Asked Questions',
      items: [
        {
          question: 'What do I need in order to browse the SAFE Network?',
          answer: [
            'The SAFE (Secure Access For Everyone) Network is a new secure way to access apps that value the security of your data above all else. Downloading the free SAFE software will provide access to: messaging, apps, email, social networks, data storage, video conferencing, and much more.',
            'Rather than using data centres and servers which are prone to data theft and surveillance, as is common on today\'s Internet, the SAFE Network uses advanced peer-to-peer technology that joins together the spare computing capacity of all SAFE users, creating a global network.',
            'The SAFE Network is made up of the unused hard drive space, processing power and data connection of its users. It offers a level of security and privacy not currently available on the existing Internet and turns the tables on companies, putting users in control of their data, rather than trusting it to organisations.',
            'By providing your unused computing resources to SAFE, you will be paid in a network token called [Safecoin](/safecoin).'
          ]
        },
        {
          question: 'Do I need an account to access the network?',
          answer: [
            'An Autonomous Network is one which has no human gatekeepers. Anyone is able to join and—crucially—no-one can be prevented from taking part.',
            'From the moment you upload your encrypted data, no human is required to ensure that your data remains secure and accessible until you alone choose to access it. Without the involvement of humans, the SAFE Network intelligently moves chunks of your data between nodes that it also constantly reassigns to different groups in order to provide total security and privacy at all times. You decide what information you will store—and the autonomous Network secures it to ensure that you retain total control.',
            '_[Read more about Autonomous Networks](https://metaquestions.me/2017/08/12/the-impossible-network/)_'
          ]
        },
        {
          question: 'How do I create an account?',
          answer: [
            'Applications and programs on the existing Internet compromise your privacy through advertising and effectively control your data, granting you access when you login. On the SAFE Network, only you control who has access to your data and the distributed security features make your data safer than ever before. If you contribute some of your spare computing power to the network, you will be compensated for doing so with the Network’s built-in token, [Safecoin](/safecoin).'
          ]
        },
        {
          question: 'How do I get involved with The SAFE Network community?',
          answer: [
            '**No one.**',
            'The SAFE Network is [open source](https://github.com/maidsafe). Our vision is to create a resource that can be used by everyone to spread all human knowledge and to facilitate sharing across the planet, regardless of country of residence, culture, or economic background.'
          ]
        },
        {
          question: 'How do I get help?',
          answer: [
            'Started in 2006 by Scottish engineer David Irvine, MaidSafe are the core developers of the SAFE Network.  It’s a small team comprised of: thinkers, inventors, tinkerers, PHDs, engineers and designers. Although based in Ayr, Scotland, we work remotely with talents from many different cultures and countries, reflecting the users that we serve. Despite this variety, we all share a single mission: providing security and privacy for everyone.',
            '[Visit Maidsafe.net](https://maidsafe.net)'
          ]
        },
        {
          question: 'Who are MaidSafe?',
          answer: [
            'Started in 2006 by Scottish engineer David Irvine, MaidSafe are the core developers of the SAFE Network.  It’s a small team comprised of: thinkers, inventors, tinkerers, PHDs, engineers and designers. Although based in Ayr, Scotland, we work remotely with talents from many different cultures and countries, reflecting the users that we serve. Despite this variety, we all share a single mission: providing security and privacy for everyone.',
            '[Visit Maidsafe.net](https://maidsafe.net)'
          ]
        }
      ]
    },
   ],
   CTA: {
     name: 'More FAQs',
     url: '/'
   }
  }
}
