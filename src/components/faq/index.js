import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext'

function CustomToggle({ children, eventKey }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log(activeEventKey),
    );

    return (
        <div
            className='tw-w-full tw-border-t tw-border-white tw-py-4 tw-px-4 tw-font-Barlow tw-font-bold tw-text-lg tw-flex tw-items-center tw-justify-between tw-cursor-pointer'
            onClick={decoratedOnClick}
        >
            {children}
            {activeEventKey === eventKey ? (
                <div>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 64 64" width="48px" height="48px" enableBackground="new 0 0 64 64">
                        <g id="Layer_1">
                            <rect fill="#ffffff" x="1" y="24" width="48" height="2" />
                        </g>
                        <g>
                        </g>
                    </svg>
                </div>

            ) : (
                <div>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="48px" height="48px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
                        <g>
                            <line fill="none" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" x1="32" y1="50" x2="32" y2="14" />
                            <line fill="none" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" x1="14" y1="32" x2="50" y2="32" />
                        </g>
                    </svg>

                </div>
            )}

        </div>
    );
}


const FAQ = () => {

    return (
        <div className="tw-text-white tw-py-36" id="faq">
            <div className="tw-container tw-mx-auto tw-max-w-[1320px] tw-px-3">
                <div className="">
                    <div className='tw-mb-16'>
                        <h1 className='tw-font-Alfa tw-text-5xl'>FAQ</h1>
                    </div>
                    <Accordion defaultActiveKey="0" className='tw-w-full'>
                        <div>
                            <div>
                                <CustomToggle eventKey="0">
                                    <div>
                                         WHAT IS AN NFT?
                                    </div>
                                </CustomToggle>
                            </div>
                            <Accordion.Collapse eventKey="0">
                                <div className='tw-px-4 tw-mb-10'>A non-fungible token (NFT) is a financial security consisting of digital data stored in a blockchain. Nifty Dog NFTs are unique pieces of digital data stored on the Ethereum blockchain. The ownership of an NFT is recorded in the blockchain, and can be transferred by the owner, allowing NFTs to be sold and traded on various exchanges and marketplaces.

                                </div>
                            </Accordion.Collapse>
                        </div>

                        <div>
                            <div>
                                <CustomToggle eventKey="1">
                                    <div>
                                    HOW CAN I BUY A NIFTY DOG NFT?
                                    </div>
                                </CustomToggle>
                            </div>
                            <Accordion.Collapse eventKey="1">
                                <div className='tw-px-4 tw-mb-10'>Nifty Dogs NFTs will be mintable from the niftydog.io website and then available on OpenSea for 3rd party sales and trading.
                                </div>
                            </Accordion.Collapse>
                        </div>

                        <div>
                            <div>
                                <CustomToggle eventKey="2">
                                    <div>
                                    WHAT DOES “MINT” MEAN?
                                    </div>
                                </CustomToggle>
                            </div>
                            <Accordion.Collapse eventKey="2">
                                <div className='tw-px-4 tw-mb-10'>When you “MINT” a Nifty Dogs NFT you are converting digital data into crypto collections or digital assets that are recorded on the Ethereum blockchain. Nifty Dog digital products or files will be stored in a distributed ledger or decentralized database and cannot be edited, modified, or deleted.
                                </div>
                            </Accordion.Collapse>
                        </div>

                        <div>
                            <div>
                                <CustomToggle eventKey="3">
                                    <div>
                                    HOW MUCH DOES IT COST BUY ONE OF THE NIFTY DOGS?
                                    </div>
                                </CustomToggle>
                            </div>
                            <Accordion.Collapse eventKey="3">
                                <div className='tw-px-4 tw-mb-10'>Nifty Dogs NFTs will cost .0777 ETH. This is around $200 USD or whatever the market value of Ethereum is at the time of minting.
                                </div>
                            </Accordion.Collapse>
                        </div>

                        <div className='tw-border-b tw-border-white'>
                            <div>
                                <CustomToggle eventKey="4">
                                    <div>
                                    WHAT ARE THE GOALS OF THE PROJECT?
                                    </div>
                                </CustomToggle>
                            </div>
                            <Accordion.Collapse eventKey="4">
                                <div className='tw-px-4 tw-mb-10'>The Nifty Dogs mission is to pair emotional support animals with people in need through NFTs and blockchain technologies. Funding will go towards obedience training with the pet and owner as well as emotional support animal application and certification.
                                </div>
                            </Accordion.Collapse>
                        </div>

                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default FAQ