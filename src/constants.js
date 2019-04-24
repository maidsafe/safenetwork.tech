const pages = {
  home: '/',
  hiw: '/how-it-works/',
  timeline: '/timeline/',
  safecoins: '/safecoin/',
  fundamentals: '/fundamentals/',
  faq: '/faq/',
  pKit: '/press-kit/',
  getInv: '/get-involved/',
  cookies: '/cookies/',
  privacy: '/privacy/',
  about: '/about-maidsafe/'
};

export default {
  targetServer: {
    development: `http://localhost:8080`,
    production: `https://services.maidsafe.net/mail-subscription`
  },
  breakPointMob: 799,
  localStorage: {
    youtubeWarn: 'ut_warn'
  },
  videoLinks: {
    safe_network: {
      mp4: 'https://s3.eu-west-2.amazonaws.com/ms-marketing/website-videos/Getting+Started.mp4',
      ogv: 'https://s3.eu-west-2.amazonaws.com/ms-marketing/website-videos/Getting+Started.ogv',
      webm: 'https://s3.eu-west-2.amazonaws.com/ms-marketing/website-videos/GS+webM.webm'
    },
    self_encryption: {
      mp4: 'https://s3.eu-west-2.amazonaws.com/ms-marketing/website-videos/Self+Encryption+on+the+SAFE+Network.mp4',
      ogv: 'https://s3.eu-west-2.amazonaws.com/ms-marketing/website-videos/Self+Encryption+on+the+SAFE+Network_1.ogv',
      webm: 'https://s3.eu-west-2.amazonaws.com/ms-marketing/website-videos/Self+Encryption+on+the+SAFE+Network_1.webm',
    },
    security: {
      ogv: 'https://s3.eu-west-2.amazonaws.com/ms-marketing/website-videos/Safecoin+Promo+Video+(Vimeo+%2B+Mastered+Audio)+4.22+(1)_1.ogv',
      mp4: 'https://s3.eu-west-2.amazonaws.com/ms-marketing/website-videos/Safecoin+Promo+Video+(Vimeo+%2B+Mastered+Audio)+4.22.mp4',
      webm: 'https://s3.eu-west-2.amazonaws.com/ms-marketing/website-videos/Safecoin+Promo+Video+(Vimeo+%2B+Mastered+Audio)+4.22+(1).webm'
    }
  },
  apps: {
    browser: {
      macOs: 'https://github.com/maidsafe/safe_browser/releases/latest',
      win: 'https://github.com/maidsafe/safe_browser/releases/latest',
      linux: 'https://github.com/maidsafe/safe_browser/releases/latest',
      android: 'https://github.com/maidsafe/safe_mobile/releases/download/alpha-2/net.maidsafe.SafeAuthenticator.apk',
      others: 'https://github.com/maidsafe/safe_browser/releases/latest'
    },
    emailApp: {
      macOs: 'https://github.com/maidsafe/safe_examples/releases/download/0.16.0/safe-mail-tutorial-v0.4.3-osx-x64.zip',
      win: 'https://github.com/maidsafe/safe_examples/releases/download/0.16.0/safe-mail-tutorial-v0.4.3-win-x64.zip',
      linux: 'https://github.com/maidsafe/safe_examples/releases/download/0.16.0/safe-mail-tutorial-v0.4.3-linux-x64.zip',
      android: 'https://github.com/maidsafe/safe_mobile/releases/download/alpha-2/net.maidsafe.SafeMessages.apk',
      others: 'https://github.com/maidsafe/safe_examples/releases/tag/0.16.0'
    },
    hostingApp: {
      macOs: 'https://github.com/maidsafe/safe-web-hosting-manager-electron/releases/latest',
      win: 'https://github.com/maidsafe/safe-web-hosting-manager-electron/releases/latest',
      linux: 'https://github.com/maidsafe/safe-web-hosting-manager-electron/releases/latest',
      others: 'https://github.com/maidsafe/safe-web-hosting-manager-electron/releases/latest'
    },
  },
  UA: {
    OS: {
      macOs: 'Mac OS',
      win: 'Windows',
      android: 'Android',
      ios: 'iOS'
    }
  },
  meta: {
    home: {
      title: 'The SAFE Network | Building the new decentralised Internet',
      desc: 'The SAFE Network is the world’s first autonomous data and communications network. Built to provide Safe Access For Everyone!'
    },
    hiw: {
      title: 'How It Works: Under the hood | SAFE Network',
      desc: 'The SAFE Network is a unique platform, it does not use a blockchain or proof of work so how does it work?'
    },
    safecoin: {
      title: 'Safecoin: Privacy focused cryptocurrency | SAFE Network',
      desc: 'Acting as the incentive mechanism to the SAFE Network, Safecoin is a cryptocurrency like no other; zero fees, unlimited scalability and instant transactions.'
    },
    timeline: {
      title: 'Timeline: The growth of the SAFE Network | SAFE Network',
      desc: 'The SAFE Network has grown out of an idea and a single man to a global team with a mission to change the way data is controlled.'
    },
    faq: {
      title: 'Frequently Asked Questions | SAFE Network',
      desc: 'We answer your top questions from Safecoin to self authentication; from data privacy to data portability.'
    },
    fundamentals: {
      title: 'Network Fundamentals | SAFE Network',
      desc: 'The fundamental driving principles of the SAFE network'
    },
    pKit: {
      title: 'Press Kit | SAFE Network',
      desc: 'Resources for journalists looking to find out more about the new decentralised Internet and how the SAFE Network will benefit data security and privacy'
    },
    getInv: {
      title: 'Get Involved | Take back control of your data | SAFE Network',
      desc: 'Join the vibrant open source SAFE Network community to help us continue to create a new autonomous system for the people by the people.'
    },
    cookies: {
      title: 'No Cookie Policy | SAFE Network',
      desc: 'No tracking, no cookies.'
    },
    privacy: {
      title: 'Privacy Policy | SAFE Network',
      desc: 'Our Privacy Policy'
    },
    about: {
      title: 'About MaidSafe | SAFE Network',
      desc: 'About MaidSafe'
    },

  },
  links: {
    pages,
    mainNav: {
      howItWorks: {
        name: 'How it Works',
        href: pages.hiw
      },
      safecoins: {
        name: 'Safecoin',
        href: pages.safecoins
      },
      fundamentals: {
        name: 'Fundamentals',
        href: pages.fundamentals
      },
      timeline: {
        name: 'Timeline',
        href: pages.timeline
      },
      faq: {
        name: 'FAQ',
        href: pages.faq
      },
      pressKit: {
        name: 'Press Kit',
        href: pages.pKit
      },
      getInvolved: {
        name: 'Get Involved',
        href: pages.getInv
      },
    },
    home: {
      intro: {
        subNav: {
          freedom: '#Freedom',
          control: '#Control',
          security: '#Security',
          newEco: '#NewEconomy'
        },
        cntr2: {
          hiw: pages.hiw
        }
      },
      freedom: {
        autonomous: '/faq/#what-is-an-autonomous-network'
      },
      security: {
        hiw: pages.hiw
      },
      control: {
        salfAuth: '/how-it-works/#Authentication',
        whyBlockChain: '/how-it-works/'
      },
      newEco: {
        safecoins: pages.safecoins
      }
    },
    hiw: {
      vault: {
        learnVaults: '/faq/#what-is-a-vault',
      },
      autonomous:'/faq/#why-do-we-need-an-autonomous-network',
      authentication: '/faq/#what-is-selfauthentication',
      dataChain: '/faq/#what-are-data-chains'
    },
    safeCoins: {
      contribute: {
        startDev: 'https://hub.safedev.org/',
        closeGrp: '/faq/#what-is-close-group-consensus'
      },
      faq: {
        all: '/faq/',
        more: '/faq/#about-safecoin'
      },
      exchanges: {
        poloniex: 'https://poloniex.com/exchange#btc_maid',
        hitBtc: 'https://hitbtc.com/MAID-to-BTC',
        cryptopia: 'https://www.cryptopia.co.nz/Exchange/?market=MAID_BTC',
        openLedger: 'https://openledger.io/market/MAID_BTC',
        bitker: 'https://www.bitker01.com/#/bbTrades/maid_btc',
      }
    },
    timeline: {
      roadmap: {
        authenticator: 'https://github.com/maidsafe/beaker-plugin-safe-authenticator',
        safeBrowser: 'https://github.com/maidsafe/safe_browser/',
        whm: 'https://github.com/maidsafe/safe-web-hosting-manager-electron/releases/latest',
        safeMail: 'https://github.com/maidsafe/safe_examples/tree/archived-examples/email_app',
      }
    },
    pKit: {
      download: {
        logos: '/downloads/SAFE-Network-Logo-Pack.zip',
        imagePack: '/downloads/MaidSafe-Team-Press-Photos-Pack.zip',
        parsec: 'http://docs.maidsafe.net/Whitepapers/pdf/PARSEC.pdf'
      },
      interviewReq: 'mailto:pr@maidsafe.net'
    },
    getInv: {
      community: {
        safenetwork: 'https://safenetforum.org',
        meetup: 'https://safenetwork.org/meetup-groups/',
        join: 'https://safenetforum.org'
      },
      develop: {
        devHub: 'https://hub.safedev.org/',
        devForum: 'https://forum.safedev.org/'
      },
      faq: {
        all: '/faq/',
        more: '/faq/#getting-started'
      },
    },
    footer: {
      blog: 'https://medium.com/safenetwork',
      comm: {
        forum: 'https://safenetforum.org/',
        devForum: 'https://forum.safedev.org/'
      },
      dev: {
        hub: 'https://hub.safedev.org/',
        github: 'https://github.com/maidsafe/'
      },
      comp: {
        maidsafe: '/about-maidsafe',
        contact: 'https://maidsafe.net/contact',
        career: 'https://maidsafe.net/careers',
      },
      legal: {
        policy: '/privacy',
        cookies: '/cookies',
        credits: 'https://maidsafe.net/credits'
      },
      social: {
        medium: {
          url: 'https://medium.com/safenetwork',
          name: 'Medium',
          style: 'medium'
        },
        fb: {
          url: 'https://www.facebook.com/GetMaidSafe/',
          name: 'Facebook',
          style: 'fb'
        },
        twitter: {
          url: 'https://twitter.com/maidsafe',
          name: 'Twitter',
          style: 'twitter'
        },
        reddit: {
          url: 'https://www.reddit.com/r/safenetwork/',
          name: 'Reddit',
          style: 'reddit'
        },
        telegram: {
          url: 'https://t.me/safenetwork',
          name: 'Telegram',
          style: 'telegram'
        },
        riot: {
          url: 'https://riot.im/app/#/room/#safenetwork:matrix.org',
          name: 'Riot',
          style: 'riot'
        },
        youTube: {
          url: 'https://www.youtube.com/channel/UChDck5R_C9i6XTrS66tbwOw',
          name: 'YouTube',
          style: 'youtube'
        },
      }
    }
  }
};
