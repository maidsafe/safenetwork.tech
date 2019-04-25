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
      para: 'Access to the SAFE Network is by invite only while we are in Alpha. You’ll need to claim a one to get started.',
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
            `While the network is in Alpha you'll need an account. See 'How do I create an account?' below for a step-by-step guide.`,
            `Then all you need to do is [download the SAFE Browser](https://github.com/maidsafe/safe_browser/releases) and enter a SAFE site into the address bar and that's you browsing the SAFE Network.`,
            'Some sample SAFE sites (copy and paste the address into the SAFE Browser address bar):',
            `\n* [safe://maidsafe.safenet](safe://maidsafe.safenet) \n* [safe://racer.game/v4.final.html](safe://racer.game/v4.final.html) \n* [safe://hello](safe://hello)`,
            '_[Get the SAFE Browser](https://github.com/maidsafe/safe_browser/releases/)_'
          ]
        },
        {
          question: 'Do I need an account to access the network?',
          answer: [
            `While the network is in Alpha then yes, you'll need to have an account. See 'How do I create an account?' below for a step-by-step guide.`
          ]
        },
        {
          question: 'How do I create an account?',
          answer: [
            'Here’s a step-by-step Guide:',
            `* [Download](https://github.com/maidsafe/safe_browser/releases) and Install the SAFE Browser. \n* [Register on the forum](https://safenetforum.org/), it takes less than a minute. \n* Gain basic trust level—this requires around an hour reading and interacting. This is a measure to stop the test network being spammed during development. \n* Open the SAFE browser. \n* Click ‘Create Account’ at the bottom of the screen. \n* In the next screen select ‘Claim An Invitation’. \n* Login to the forum within the SAFE Browser, the setup process will prompt you to do this if you have not already done so. \n* Select the Alpha 2 Network. \n* The installer will now provide you with your invitation code. Please note: it is important that your current and registered IPs match, if they do not, click to update. \n* Copy the invite code at the bottom of the screen and paste this back into the field that asks for an ‘Invitation Token’ in the SAFE Browser. \n* You will now be asked to create an Account Secret and Password. Please make sure you keep these safe as only you will ever have access to your credentials. There is no central record of these credentials anywhere within the system and without them you will not be able to access your data. \n* Congratulations! You are now ready to not just browse the SAFE Network, but upload your own data, create websites and use some of the demo apps being worked on by the community.`
          ]
        },
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
