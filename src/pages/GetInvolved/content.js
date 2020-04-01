import CONSTANT from 'constant'

export default {
  title: 'It’s the dawn of a new web.\n Help us create it.',
  pageDesc: 'The SAFE Network is an Open Source and collaborative effort between developers and the community using it. You can get involved by testing, suggesting, coding, or promoting. Here’s how.',
  develop: {
    trySafeNet: {
      title: 'Try the SAFE Network',
      para: [
        'SAFE will change how we’ll interact with the web and our own data. A leap as big as this requires continuous testing and feedback from the people who it is designed for—and that’s where you can help.',
        'Download the SAFE Browser to browse the Network, or why not join the community and be one of many that provide feedback, contribute to code and essentially, help shape the Network.'
      ]
    },
    startDevelop: {
      title: 'Start Developing on SAFE',
      para: [
        'The SAFE Network is a platform for creating decentralised apps. It is secure, privacy focussed, has a built-in revenue stream, and next to no infrastructure costs.',
        'Right now development of simpler, dev-facing APIs is underway. As such documentation is still to be finalised, but you can access the latest SAFE API documentation in this repo.'
      ],
      CTA: {
        name: 'SAFE API GitHub Repo',
        url: 'https://github.com/maidsafe/safe-api/blob/master/README.md'
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
        'The SAFE Network Forum is the main discussion forum of this growing community and is a great place to help test new releases by the development teams, receive support, discuss the latest Internet trends and read the weekly dev updates. To meet others in person, take a look at the various meetups taking place around the world.'
      ],
      CTA: {
        name: 'Join the Forum',
        url: 'https://safenetforum.org'
      }
    },
    subscribe: {
      title: 'Stay Up-to-date'
    }
  },
  invite: {
    title: 'Get Started',
    joinNetwork: {
      id: 'joinNetwork',
      title: 'Connect to the Baby Fleming Public Shared Section',
      para: 'This shared section is hosted on DigitalOcean and consists of eight vaults on eight separate droplets, all connected together in one section. Please note that this testnet may require to be taken down.',
      CTA: {
        button: {
          name: 'Learn more',
          url: 'https://safenetforum.org/t/baby-fleming-public-shared-section/31377'
        },
        link: {
          name: 'CLI User Guide',
          url: 'https://github.com/maidsafe/safe-api/blob/master/safe-cli/README.md#download'
        }
      }
    },
    installBrowser: {
      id: 'installBrowser',
      title: 'Install the SAFE Browser',
      para: 'Grab the latest SAFE Browser to start browsing the Network today!',
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
          name: 'Join the Forum',
          url: 'https://safenetforum.org'
        }
      }
    }
  },
  faqs: {
   sections: [
    {
      title: 'Getting Started: Frequently Asked Questions',
      items: [
        {
          question: 'How do I get involved with the SAFE Network community?',
          answer: [
            'The Community is most active on the [SAFE Network Forum](https://safenetforum.org/) and we’d suggest starting in the [beginners section](https://safenetforum.org/c/beginners )',
            '_[Visit the Forum](https://safenetforum.org/)_'
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
   ],
   CTA: {
     name: 'More FAQs',
     url: '/faq'
   }
  }
}
