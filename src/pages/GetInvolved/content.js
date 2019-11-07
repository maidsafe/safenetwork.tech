import CONSTANT from 'src/constant'

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
        'SAFE will change how we’ll interact with the web and our own data. A leap as big as this requires continuous testing and feedback from the people who it is designed for—and that’s where you can help.',
        'Download the SAFE Browser to browse the Network, or why not join the community and be one of many that provide feedback, contribute to code and essentially, help shape the Network.'
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
        url: 'https://safenetforum.org'
      }
    },
    subscribe: {
      title: 'Stay Up-to-date'
    }
  },
  invite: {
    title: 'Get Started',
    joinCommunity: {
      id: 'joinCommunity',
      title: 'Join the community',
      para: 'Join the community and meet minded individuals dedicated to making the digital world a safer, more private place.',
      CTA: {
        button: {
          name: 'Forum',
          url: 'http://safenetforum.org'
        },
        // link: {
        //   name: 'Learn more',
        //   url: 'https://github.com/maidsafe/safe-api'
        // }
      }
    },
    installBrowser: {
      id: 'installBrowser',
      title: 'Install the SAFE Browser',
      para: 'Grab the latest SAFE Browser to start browsing the Network today!”',
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
    }
  },
  faqs: {
   sections: [
    {
      title: 'Getting Started: Frequently Asked Questions',
      items: [
        {
          question: 'How do I get involved with The SAFE Network community?',
          answer: [
            'The Community is most active on the [SAFE Network Forum](https://safenetforum.org/) and we’d suggest starting in the [beginners section](https://safenetforum.org/c/beginners )',
            '_[Visit the Forum](https://safenetforum.org/)_'
          ]
        },
        {
          question: 'How do I get help?',
          answer: [
            'The [SAFE Network Community](https://safenetforum.org) is the place to head to for all questions on the Network.',
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
