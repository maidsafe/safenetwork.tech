export default {
  banner: {
    title: 'Autonomous, Decentralised, Encrypted.',
    aside: {
      para: 'Powered by the spare capacity of everyday computers, SAFE replaces the vulnerable structure of the existing Web with a decentralised, autonomous network. One that is secure, and accessible to everyone.',
      CTA: {
        name: `Here's how it works`,
        url: '/faq/#what-is-a-vault'
      }
    },
  },
  topics: [
    {
      name: 'Introduction',
      desc: [
        {
          title: 'Getting to grips with the SAFE Network',
          para: [
            'If you don’t understand what a new decentralised web might mean, you’re far from alone. But once the benefits of a new web built on the SAFE Network become clear—permanent data, never again stored by untrustworthy and hackable third parties that you alone can access at any time from anywhere around the globe—the value becomes clearer. There’s a huge amount of work required to build a system that can deliver on such promises. So to get you started, here’s a few pointers about some of the technology that lies under the hood.'
          ]
        }
      ]
    }, {
      name: 'Browsing',
      desc: [
        {
          title: 'All human knowledge, available to all humanity',
          para: [
            `Perhaps you only want to view content on the Network. For many, that may seem no different to the Web today. But for the 1.5 billion people around the world blocked from sites like Wikipedia, it's a giant leap forward. And all they need to do is download the SAFE browser—the gateway to the new Web—accessible by anyone, anywhere.`,
            'Browsing SAFE is private, anonymous, and secure—free from tracking by corporate or government interests. The choices you make are yours alone. No more having The Invisible Other looking over your shoulder.'
          ]
        }
      ],
      aside: {
        position: 1,
        para: 'Want to try the SAFE Network, and help build the future of the Internet?',
        CTA: {
          name: 'Get Involved',
          url: '/get-involved/'
        }
      }
    }, {
      name: 'Storing Data',
      desc: [
        {
          title: 'Pay once, securely store forever',
          para: [
            `You're likely to want to store data on the Network. Why? Because in return for a very small one-time Safecoin payment, your data will then be stored forever, encrypted and accessible anywhere in the world and only by you—unless you choose to share it.`
          ],
          quote: `"Your credentials can't be stolen, because at no point are they ever stored on the Network"`
        }, {
          para: `The Network is permissionless. That means you don't need to apply to a third party to take part—and, crucially, no-one can stop you. This happens  because the SAFE Network has Self-Authentication. It's the only decentralised Network in the world that lets someone securely and anonymously create an account and log in without needing a third party to manage the login process or to store and manage users' credentials. That means your credentials can't be stolen, because at no point are they ever stored on the Network itself.`
        }, {
          title: 'Keeping your data private',
          para: [
            `Next, let's talk encryption. Imagine you want to store a photo. That data is protected by a number of layers of encryption. Your photo starts by being broken into pieces which are then encrypted with the other parts of that same file. This 'Self-Encryption' happens before the data ever hits the Network. So, unless you choose to override it, none of your data touches the Network unless it is encrypted. And it’s designed so that you're the only one that ever holds the key.`,
            `This is a very different approach to blockchain-based storage platforms which often secure just the pointer that shows where the data is stored. With data stored elsewhere, you can prove that data hasn’t been tampered with. But it doesn't protect the data itself. The SAFE Network has a different approach altogether. The data itself is encrypted and stored on the Network. That means no data stores to protect elsewhere.`
          ]
        }
      ],
    }, {
      name: 'Where Is Data Stored?',
      desc: [
        {
          title: 'Behold, The Serverless Internet',
          para: [
            'The Web is fragile today partly because data is stored in central locations. These become targets for hackers, thieves and data harvesters, or anyone else who wants to snoop around your personal data.',
            'The SAFE Network doesn’t have these centralised servers. It has no single point which can be attacked, hacked or snooped upon. All uploaded data is broken into chunks, encrypted, dispersed across the Network, and continually moved between computers.',
            'So how could an attacker search for your photo?  Without reading them, he’d have to know  which encrypted chunks made up any one file; where each piece was stored; control a number of computers that has responsibility for managing each of those different locations on the Network at any one point in time; and then somehow break the encryption (with no password!).',
            `And that's a simplification. It's actually much harder than that. But that gives you a feel for just how secure data is on the SAFE Network. Once you take on board that it's the Network itself that makes decisions autonomously about locations and who does what, the challenge facing any attacker becomes even clearer.`
          ]
        }
      ],
      aside: {
        position: 3,
        title: 'When will it be finished?',
        para: 'We’re at the dawn of a new Web, and the final pieces of the SAFE Network are being put in place.',
        CTA: {
          name: 'See the Roadmap',
          url: '/roadmap/'
        }
      }
    }, {
      name: 'Who Stores Your Data?',
      desc: [
        {
          title: 'The Web hosted by everyone, controlled by no-one',
          para: [
            'With no centralised storage, data is instead stored in Vaults. People download free Vault software to their home computers which tells the Network that they’re happy to take part. By providing storage and bandwidth to support the Network, you can get rewarded in Safecoin, the cryptocurrency that powers the Network.',
            'The Network just makes use of the space you’ve offered and asks you to manage whichever chunks of encrypted data it needs to ensure the system is safe and resilient. The key point here is that no-one (either computers or Network) can read this data. Each chunk of encrypted data is managed by its own Group. The Network decides which computers should be members of which Groups and this changes frequently. And at no time can a person who runs a Vault read any of the data that his computer is storing.',
            'By running a Vault, your computer races to return any data that is requested by its owner. The rewards paid out by the system will be varied according the Network which varies the price of Safecoin in order to balance the Network in such a way that it consistently maintains around 30% of Vaults unused.'
          ]
        }
      ]
    }, {
      name: 'Network Architecture',
      desc: [
        {
          title: 'Anatomy of an Autonomous Network',
          para: [
            'The SAFE Network is self-managing. It manages how computers can act on the Network in real-time, changing roles and responsibilities dynamically in response to real-time changes without any input from humans or businesses.',
            'The Network is built on a foundation of open source software that allows computers to connect directly to each other, anywhere around the world. The Routing layer sits above this and sets the rules of the Network. This means that computers will act in a certain way that guarantees the Network will function efficiently without a centralised administrator.',
            'These rules ensure that computers reach agreement on what is and isn’t allowed, and the order in which they happen. Decisions are made by computers in standalone Sections that have a history of good behaviour and thanks to a cutting-edge DAG-based consensus algorithm called PARSEC, the Network is guaranteed to reach agreement despite vast numbers of events taking place simultaneously every second around the world.'
          ]
        }, {
          title: 'Global Communication, Global Scale',
          para: 'Whilst Sections stand alone, the Network is designed to enable trusted communications. It does this by ensuring that any contact between unknown computers is accompanied by cryptographic proof that every computer involved is a valid part of the Network. With Secure Message Relay comes Data Chains, a novel way which ensures that vast quantities of data can be passed reliably and securely between different nodes that have never known each other previously. All of this is made possible by the key design decision that we started with: all data is stored on the Network. Encrypted and ready to scale the globe from Day One.'
        }
      ]
    }
  ]
}
