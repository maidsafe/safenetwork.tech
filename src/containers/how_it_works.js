import React from 'react'
import { withSiteData, Head } from 'react-static'
import SubNav from './partials/sub_nav';
import PageEnd from './partials/page_end';
// import YouTubeWarn from './partials/youtube_warn';
import CustomVideo from './partials/custom_video';
//
import { getAppLink, genSubNavScrollPos } from '../utils';
import CONST from '../constants';

class Banner extends React.Component {
  render() {
    return (
      <div className="hiw-bnr">
        <div className="hiw-bnr-b">
          <h1 className="hiw-bnr-h bnr-head">Autonomous, Decentralised, Encrypted.</h1>
          <p className="hiw-bnr-para bnr-para">The SAFE Network: How it works, and what it means for the future of communication.</p>
        </div>
        <SubNav at="hiw" isScrolling={this.props.isScrolling} scrollPos={this.props.scrollPos} />
      </div>
    )
  }
}

class Vault extends React.Component {
  render() {
    const browserLink = getAppLink('browser');
    return (
      <div id="Vault" className="hiw-vault">
        <div className="hiw-vault-b">
          <div className="hiw-vault-cntr1 hiw-ctnt hiw-common-lay">
            <div className="hiw-vault-cntr1-b">
              <h2 className="hiw-ctnt-h">Vaults</h2>
              <p className="hiw-ctnt-para">The SAFE Network is powered by the spare computing power of its users, with data stored as encrypted pieces on other people’s devices, in storage locations called Vaults.</p>
              <p className="hiw-ctnt-para">Connected together, these Vaults—or nodes—create a network that can manage all our data and communications: a global decentralised network free from corporate servers, so it can’t be controlled or restricted. Instead, everyone in the world has equal and secure access to information.</p>
              <p className="hiw-ctnt-para">Each node is rewarded in Safecoin by the Network as data is stored and retrieved from their computer.</p>
            </div>
          </div>
          <div className="hiw-vault-cntr2">
            <div className="hiw-vault-cntr2-b">
              <p className="hiw-vault-cntr2-para">The web hosted by everyone, controlled by no-one.</p>
              <a href={CONST.links.hiw.vault.learnVaults} className="hiw-vault-cntr2-link lnk-underline">Learn more about Vaults</a>
            </div>
          </div>
          <div className="hiw-vault-cntr3 hiw-ctnt hiw-common-lay">
            <div className="hiw-vault-cntr3-b">
              <h2 className="hiw-ctnt-h">Browsing the SAFE Network</h2>
              <p className="hiw-ctnt-para">For secure, anonymous and completely private access to the Network all you need to download is a SAFE browser. No more snooping, eavesdropping, or censorship. And when you’re done, close the browser and leave no trace behind.</p>
              <p className="hiw-ctnt-para">Try browsing the SAFE Network, which is currently in the Alpha 2 stage of development.</p>
            </div>
          </div>
          <div className="hiw-vault-cntr4">
            <div className="hiw-vault-cntr4-b">
              <p className="hiw-vault-cntr4-para">You can try out the SAFE Network, which is currently in Alpha 2 stage of development, by downloading the SAFE Browser</p>
              <a href={browserLink} target="_blank" className="lnk-btn">Download Browser</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Autonomous extends React.Component {
  render() {
    return (
      <div className="hiw-autonomous">
        <div className="hiw-autonomous-b">
          <div className="hiw-autonomous-cntr1 hiw-ctnt" id="Autonomous">
            <div className="hiw-autonomous-cntr1-b hiw-common-lay">
              <h2 className="hiw-ctnt-h">The First Autonomous Network</h2>
              <p className="hiw-ctnt-para"> We’re creating the world’s first, and only, autonomous network. There is no human intervention required for it to manage your data and communications.</p>
              <p className="hiw-ctnt-para">This self-managing and self-configuring behaviour, inspired by the humble ant, enables an Internet completely free of middlemen, that is not owned or controlled by any corporation or government. It’s the Internet owned by humanity as a whole, for the benefit of everyone. Exactly as it should be.</p>
            </div>
          </div>
          <div className="hiw-autonomous-cntr2">
            <div className="hiw-autonomous-cntr2-b">
              <p className="hiw-autonomous-cntr2-para">A network owned by humanity, not by corporations</p>
              <a href={CONST.links.hiw.autonomous} className="lnk-underline">Why we need an Autonomous Network</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Authentication extends React.Component {
  render() {
    return (
      <div id="Authentication" className="hiw-authentication">
        <div className="hiw-authentication-b">
          <div className="hiw-authentication-cntr1 hiw-ctnt">
            <div className="hiw-authentication-cntr1-b hiw-common-lay">
              <h2 className="hiw-ctnt-h">Self Authentication</h2>
              <p className="hiw-ctnt-para">Create an account to upload, store and edit your data. Interact directly with the Network: no third parties are involved. Anyone can open an account.</p>
              <p className="hiw-ctnt-para">The SAFE Browser acts as your secure gateway to the Network, your data and your apps. Authenticate using one password in the Browser and you have complete control of your data.</p>
              <p className="hiw-ctnt-para">Your SAFE password never leaves your computer, meaning it can’t be stolen from the Network. And to retain anonymity, the identity (IP address) of your computer on the Network is hidden using SAFE’s Self Authentication technology.</p>
            </div>
          </div>
          <div className="hiw-authentication-cntr2">
            <div className="hiw-authentication-cntr2-b">
              <p className="hiw-authentication-cntr2-para">One password for everything. No gatekeepers.</p>
              <a href={CONST.links.hiw.authentication} className="lnk-underline">Why Self-Authentication Matters</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Encryption extends React.Component {
  render() {
    return (
      <div id="Encryption" className="hiw-encryption">
        <div className="hiw-encryption-b">
          <div className="hiw-encryption-cntr1 hiw-ctnt">
            <div className="hiw-encryption-cntr1-b hiw-common-lay">
              <h2 className="hiw-ctnt-h">Self Encryption</h2>
              <p className="hiw-ctnt-para">All data on the SAFE Network is protected by several layers of encryption. As data is uploaded to the Network it is first broken into pieces which are then ‘self-encrypted’, a process where the data encrypts itself with itself.</p>
              <p className="hiw-ctnt-para">Once the data is split into encrypted chunks, the Network autonomously stores these across the Network, at random locations selected by, and only known to, the Network.</p>
              <p className="hiw-ctnt-para">As the data is encrypted on your computer before being stored, no keys or passwords ever leave your machine. This means only you can access your data, unless of course you choose to share it, or make it public.</p>
            </div>
          </div>
          <div className="hiw-encryption-cntr2">
            <div className="hiw-encryption-cntr2-b">
              {/* <div className="utube-warn-parent">
                <YouTubeWarn name="encryption" location="howItWorks" />
                <iframe src="https://www.youtube-nocookie.com/embed/ivwQVe12OAY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              </div> */}
              <CustomVideo links={CONST.videoLinks.self_encryption}/>
              <div className="hiw-encryption-cntr2-cap">Self Encryption Explained</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class DataChain extends React.Component {
  render() {
    return (
      <div id="DataChain" className="hiw-data-chain">
        <div className="hiw-data-chain-b">
          <div className="hiw-data-chain-cntr1 hiw-ctnt">
            <div className="hiw-data-chain-cntr1-b hiw-common-lay">
              <h2 className="hiw-ctnt-h">Data Chains</h2>
              <p className="hiw-ctnt-para">Many decentralised networks use blockchains. These work well as public ledgers, however they don’t perform well for data storage. They are simply too expensive, too slow and have problems with scalability.</p>
              <p className="hiw-ctnt-para">That’s why the SAFE Network doesn’t use a blockchain. Instead it uses something designed for the task: Data Chains.</p>
              <p className="hiw-ctnt-para">Data Chains facilitate large amounts of data being passed between nodes at and can also enable the network to recover from a full system outage. And by using and recording nodes digital signatures, we can also ensure that it is not possible to forge identities in the network, keeping your data safe and secure.</p>
            </div>
          </div>
          <div className="hiw-data-chain-cntr2">
            <div className="hiw-data-chain-cntr2-b">
              <p className="hiw-data-chain-cntr2-para">Exchanging data on a global scale. Far beyond blockchain</p>
              <a href={CONST.links.hiw.dataChain} className="lnk-underline">What are Data Chains?</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class HIW extends React.Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.setupSubNav = this.setupSubNav.bind(this);
    this.state = {
      yPos: 0,
      scrollPos: {},
      subNavPos: 0
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.setupSubNav);
      this.setupSubNav();
    }
  }

  setupSubNav() {
    const subNavData = genSubNavScrollPos(
      [
        { id: 'Vault', name: 'Vault', colr: 'red' },
        { id: 'Autonomous', name: 'Autonomy', colr: 'red' },
        { id: 'Authentication', name: 'Authentication', colr: 'half-white' },
        { id: 'Encryption', name: 'Encryption', colr: 'red' },
        { id: 'DataChain', name: 'Data Chains', colr: 'half-white' }
      ]
    );
    this.setState({ scrollPos: subNavData.stopPos, subNavPos: subNavData.scrollTop });
  }

  handleScroll(e) {
    this.setState({
      yPos: window.pageYOffset,
    });
  }

  render() {
    const isScrolling = !(this.state.yPos <= this.state.subNavPos);
    return (
      <section className="hiw">
        <Head>
          <title>{CONST.meta.hiw.title}</title>
          <meta name="description" content={CONST.meta.hiw.desc} />
        </Head>
        <div className="hiw-b header-adjust">
          <Banner isScrolling={isScrolling} scrollPos={this.state.scrollPos} />
          <Vault />
          <Autonomous />
          <Authentication />
          <Encryption />
          <DataChain />
          <PageEnd />
        </div>
      </section>
    );
  }
}

export default withSiteData(() => (
  <HIW />
));
