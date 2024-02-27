export default {
  banner: {
    title: "Welcome to the New\n Digital Economy",
    desc: "…an economy where you don’t pay by sacrificing your privacy, but one where you own your personal data and are rewarded for what you contribute, in a currency inherent to the Network: Safe Network Tokens.",
  },
  video: {
    caption: "See how easy it will be to start earning",
  },
  textBlock1: {
    title: "Share resources, get paid",
    para: [
      "The Safe Network has a cryptocurrency like no other. Digital cash with no public ledger. There’s no limit to the number of transactions which can take place instantly, privately and simultaneously.",
      "Earning Safe Network Tokens is simple. Choose to become a Farmer and connect your computer to the Network. Watch as the Network automatically and continually moves chunks of data around the world to ensure efficiency. Proof of Resource takes the place of more expensive alternatives, like Proof of Work.",
      "These tokens can then be used to buy Network resources—like the one-time fee for uploading data—or exchanged for goods and services like any other currency.",
    ],
  },
  textBlock2: {
    title: "Contribute and be rewarded",
    para: [
      "The current ad-supported internet model is broken. On Safe, popular apps and sites are paid directly by the Network according to how much they get used.",
      "Want to build an app or create content? The days of having to meet your website infrastructure costs are gone. With an open source platform, just build and deploy. Your personal data is no longer an asset for the profit of others.",
    ],
    CTA: {
      name: "Start developing",
      url: "https://hub.safedev.org/",
    },
  },
  textBlock3: {
    title: "Pay Anonymously, be paid privately.",
    para: [
      "Safe Network Tokens act as digital cash. Unlike blockchain based cryptocurrencies there is no public ledger; only the current and previous owner of each coin are known to each other. So you can be paid in privacy.",
      "And you can even pay anonymously if you require it. It’s your choice.",
    ],
  },
  textBlock4: {
    title: "Whaddaya mean, no Blockchain?",
    para: [
      "Unlike most cryptocurrencies the Safe Network will not have a blockchain. This means it will be highly scalable, unburdened by an ever-growing ledger of transactions.",
      "This, combined with what is known as Close Group Consensus mechanism, provides something truly special: transactions that are confirmed at network speed and with zero transaction costs.",
    ],
    CTA: {
      name: "What is Close Group Consensus?",
      url: "/faq/#what-is-close-group-consensus",
    },
  },
  textBlock5: {
    title: "How do I buy Safe Network Tokens?",
    para: [
      "Safe Network Tokens are the currency that will power the Safe Network. They will be available to be farmed, used or traded. You can’t buy them yet, but you can buy MaidSafeCoin.",
      "MaidSafeCoin is a token that was created in a crowdsale in 2014 to support the project, and each coin will be able to be exchanged for a Safe Network Token when the Network launches.",
      "MaidSafeCoin was originally on the Omni protocol (MAID) but is now available as an ERC20 token [(EMAID)](https://coinmarketcap.com/currencies/maidsafecoin-/).",
    ],
  },
  textBlock6: {
    title: "Buying MaidSafeCoin (EMAID)",
    para: [
      "MaidSafeCoin (EMAID) is available on the [Bitmart](https://www.bitmart.com/trade/en-US?symbol=EMAID_USDT) exchange and on [UniSwap V3](https://info.uniswap.org/#/pools/0x35593881b7723b39a5bdbcb421e55c1ff1953f4b)",
    ],
  },
  exchanges: [
    {
      name: "BitMart",
      url: "https://www.bitmart.com/trade/en-US?symbol=EMAID_USDT",
    },
    {
      name: "UniSwap",
      url: "https://info.uniswap.org/#/pools/0x35593881b7723b39a5bdbcb421e55c1ff1953f4b",
    },
  ],
  faqs: {
    sections: [
      {
        title: "Safe Network Tokens: Frequently Asked Questions",
        items: [
          {
            question: "How do I buy Safe Network Tokens?",
            answer: [
              `Safe Network Tokens won’t be issued until the Network goes live so they cannot be purchased at the moment. Currently you can buy MaidSafeCoin which will be swapped on a 1-to-1 basis for Safe Network Tokens when released.`,
              "You can buy MaidSafeCoin from:",
              "[Bitmart](https://www.bitmart.com/trade/en-US?symbol=EMAID_USDT)",
              "[UniSwap V3](https://info.uniswap.org/#/pools/0x35593881b7723b39a5bdbcb421e55c1ff1953f4b)",
            ],
          },
          {
            question: "What is MaidSafeCoin?",
            answer: [
              "MaidSafeCoin (EMAID) is a proxy token that supports the development of the Safe Network and allows pre-purchase of its native currency: Safe Network Tokens. ",
              "After the Network is launched, MaidSafeCoins can be swapped 1-for-1 with Safe Network Tokens.",
              "MaidSafeCoin was originally launched on the Omni protocol (MAID) but is now available as an ERC20 token: EMAID. You buy it from Bitmart and on UniSwap V3",
            ],
          },
          {
            question: "How do I buy MaidSafeCoin?",
            answer: [
              "You can buy MaidSafeCoin from:",
              "[Bitmart](https://www.bitmart.com/trade/en-US?symbol=EMAID_USDT)",
              "[UniSwap V3](https://info.uniswap.org/#/pools/0x35593881b7723b39a5bdbcb421e55c1ff1953f4b)",
            ],
          },

          {
            question: "What is Farming?",
            answer: [
              "Safe Network Tokens are given as an incentive to users for providing their resources to the Network. These resources are their: storage space, CPU, bandwidth and online time that enable the encrypted chunks of network data to be stored and retrieved from their computer.",
              "The process of providing resources and receiving Safe Network Tokens in return is called ‘Farming’.",
              `Each piece of encrypted network data is stored in a Farmer's ‘Node’, a data storage and management location on the Farmer's computer which they cannot read, or access. The Safe Network is designed to self-manage these resources.`,
            ],
          },
          {
            question: "How will Farming work?",
            answer: [
              "When a user of the network requests some data, for example by browsing a website, a number of things happen: First, the client software makes a request for the required data chunks. This message (a GET request) is then propagated across the Network and when the chunk is found there is a competition between the Nodes in that Section to deliver it to the Network where it will be routed back to the requester.  The first Node to deliver will have a chance of being rewarded with one Safe Network Token. This is described as a Farming Attempt.",
              "Farming Attempt means: by delivering data chunks when requested, a Node occasionally gains the opportunity to make a Farming Attempt. This consists of sending a validated request to a random Safe Network Token address. If an owned Token already exists at that address, the Attempt fails. If there are no Tokens there, one is created and awarded to the requesting Node (i.e. a successful Farming Attempt has been made).",
              "Farming is therefore when a Node delivers data chunks that it is storing to the Network and earns Tokens in return. The probability of gaining a Farming Attempt is dependent on the farming_rate, which is a variable related to the quantity of available storage resources in the Network.",
            ],
          },
        ],
      },
    ],
    CTA: {
      name: "More FAQs",
      url: "/faq/",
    },
  },
};
