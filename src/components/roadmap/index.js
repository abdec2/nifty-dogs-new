
const Roadmap = () => {
  return (
    <div className="tw-relative tw-h-full tw-overflow-hidden tw-pb-4" id="roadmap">
      <div className="custom-shape-divider-top-1657558878">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="tw-pt-32 tw-container tw-mx-auto tw-max-w-[1320px]">
        <div className="tw-mt-12 tw-px-2">
          <h1 className="tw-uppercase tw-text-5xl tw-text-white tw-font-Alfa">Roadmap</h1>
        </div>

        <div className="tw-mt-16 tw-text-white tw-font-Barlow tw-text-lg tw-z-10 tw-relative">
          <div className="tw-px-2 md:tw-px-10">
            <ul className="timeline tw-w-full md:tw-w-[75%]">
              <li className="tw-mb-16 tw-pl-28 md:tw-pl-36 " data-no="01">
                <h6 className="tw-font-bold tw-pt-4">COMMUNITY LAUNCH</h6>
                <p className="tw-mt-8 tw-capitalize tw-text-lg">The mission is released to the public and the Nifty Dogs Community is born. Connect with us on Discord, Twitter and IG to get Nifty Dog News. Also,  stay engaged to earn monthly giveaways on Discord. Giveaways will include, AirPods, Oculus, Call of Duty, PS5, and crypto rewards.</p>
              </li>

              <li className="tw-mb-16 tw-pl-28 md:tw-pl-36" data-no="02">
                <h6 className="tw-font-bold tw-pt-4">GOFUNDME LAUNCH</h6>
                <p className="tw-mt-8 tw-capitalize tw-text-lg">A GoFundMe account will be created in conjunction with K9s for Warriors. Nifty Dogs community members can make donations to level-up in Discord and be granted access to the whitelist minting of the first collection.</p>
              </li>

              <li className="tw-mb-16 tw-pl-28 md:tw-pl-36 tw-relative" data-no="03">
                
                <h6 className="tw-font-bold tw-pt-4">WEBSITE LAUNCH</h6>
                <p className="tw-mt-8 tw-capitalize tw-text-lg">The Nifty Dogs Project website launches. Niftydogs.io is live to the world and the first stages of the roadmap are released.</p>
              </li>

              <li className="tw-mb-16 tw-pl-28 md:tw-pl-36" data-no="04">
                <h6 className="tw-font-bold tw-pt-4">BISCUIT AWARDS LAUNCH</h6>
                <p className="tw-mt-8 tw-capitalize tw-text-lg">Level up and participate in the Nifty Dog discord community and get rewarded with “Biscuits” Nifty Dogs Version of the Token. Tokenization evolution will take place as the project progresses.</p>
              </li>

              <li className="tw-mb-16 tw-pl-28 md:tw-pl-36" data-no="05">
                <h6 className="tw-font-bold tw-pt-4">WHITELIST MINTING</h6>
                <p className="tw-mt-8 tw-capitalize tw-text-lg">This is a unique and exclusive collection of 777 hand-drawn Nifty Dog NFTs stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.</p>
                <p className="tw-mt-8 tw-capitalize tw-text-lg">Our first series of 777 Nifty Dogs will forever be the premium collection, and will provide holders more value than any future Nifty Dog NFTs.</p>
              </li>

              <li className="tw-mb-16 tw-pl-28 md:tw-pl-36" data-no="06">
                <h6 className="tw-font-bold tw-pt-4">PUBLIC MINTING</h6>
                <p className="tw-mt-8 tw-capitalize tw-text-lg">The remainder of first collection can be minted from the niftydogs.io website and 3rd party sales can be found on OpenSea.</p>
              </li>

              <li className="tw-mb-16 tw-pl-28 md:tw-pl-36" data-no="07">
                <h6 className="tw-font-bold tw-pt-4">MONTHLY GIVEAWAYS</h6>
                <p className="tw-mt-8 tw-capitalize tw-text-lg">Each month NFT holders are automatically entered into a raffle with the chance to win Biscuits, prizes and other exclusive offers such as travel, tickets to events, tactical gear and everything crypto.</p>
              </li>

              <li className="tw-mb-16 tw-pl-28 md:tw-pl-36" data-no="08">
                <h6 className="tw-font-bold tw-pt-4">SELLOUT & DAO DONATION</h6>
                <p className="tw-mt-8 tw-capitalize tw-text-lg">Once the first collection sells out, the Nifty Dogs DAO will be created and all 1st collection NFT holders will have stakeholder rights in the DAO with 1 vote per NFT.</p>

                <p className="tw-mt-8 tw-capitalize tw-text-lg">A donation of $10,000 goes towards the building of the mega kennel where Service Dogs and Veterans get trained and paired together.</p>
              </li>

              <li className="tw-mb-16 tw-pl-28 md:tw-pl-36" data-no="09">
                <h6 className="tw-font-bold tw-pt-4">DAO VOTING DAY</h6>
                <p className="tw-mt-8 tw-capitalize tw-text-lg">Various voting days will be announced where NFT holders decide on the overall direction of the project by voting on topics like development, community engagement, philanthropic decisions, how sales revenue is spent on each collection that is released.</p>
              </li>

              <li className="tw-mb-16 tw-pl-28 md:tw-pl-36" data-no="10">
                <h6 className="tw-font-bold tw-pt-4">TO NIFTY AND BEYOND!</h6>
                <p className="tw-mt-8 tw-capitalize tw-text-lg">Future development and gamification will take place. The DAO will consider voting on topics like, donations, tokenization and art creation.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="roadmap_dogImage tw-hidden lg:tw-block"></div>
      <div className="roadmap_greenpoly tw-z-[9]"></div>
      <div className="tw-h-[500px] tw-bg-[#292C1B] tw-absolute tw-bottom-0 tw-left-0 tw-w-full greenArea tw-z-0"></div>
    </div>
  )
}

export default Roadmap