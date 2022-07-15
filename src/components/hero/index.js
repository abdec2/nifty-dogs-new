import { useState, useContext, useEffect, useRef } from 'react'
import hero from './../../assets/hero.png'
import { GlobalContext } from './../../context/GlobalContext'
import Form from 'react-bootstrap/Form';
import CONFIG from './../../config/config.json'
import contractAbi from './../../config/abi.json'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ethers } from 'ethers';
const MySwal = withReactContent(Swal)


const Hero = ({ setError, setErrMsg }) => {
    const [fbClick, setFbClick] = useState(false)
    const [loading, setLoading] = useState(false);
    const { account, delAccount, web3, ConnectWallet } = useContext(GlobalContext)
    const mintAmount = useRef(1)

    const mint = async () => {
        try {
            if (!account) {

                MySwal.fire({
                    icon: 'error',
                    title: 'Please connnect wallet',
                    showConfirmButton: false,
                    timer: 1500
                })
                return;
            }

            setLoading(true)
            const signer = web3.provider.getSigner();
            const contract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, contractAbi, signer);
            const totalCost = CONFIG.COST * parseInt(mintAmount.current.value);
            const balance = ethers.utils.formatEther(await web3.provider.getBalance(signer.getAddress()));

            if (balance < totalCost) {
                setLoading(false);
                MySwal.fire({
                    icon: 'error',
                    title: 'Insufficient Balance',
                    showConfirmButton: false,
                    timer: 1500
                })
                return;
            }

            const value = ethers.utils.parseEther(totalCost.toString());
            const estimate = await contract.estimateGas.mint(account, mintAmount.current.value, { value: value.toString() })
            const tx = {
                gasLimit: estimate.toString(),
                value: value.toString()
            }

            const mintTx = await contract.mint(account, mintAmount.current.value, tx)
            await mintTx.wait()

            MySwal.fire({
                icon: 'success',
                title: 'NFT minted successfully',
                showConfirmButton: false,
                timer: 1500
            })

            setLoading(false)
        } catch (e) {
            console.log(e)
            MySwal.fire({
                icon: 'error',
                title: 'Something went wrong',
                showConfirmButton: false,
                timer: 1500
            })
            setLoading(false)
        }
    }

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', accounts => {
                ConnectWallet(setError, setErrMsg)
            })
            window.ethereum.on('chainChanged', chainId => {
                window.location.reload();
            })
        }
    }, [account])

    return (
        <div className="tw-h-[800px] tw-relative">
            <div className="tw-container tw-mx-auto tw-max-w-[1320px] tw-px-3 tw-relative tw-py-14">
                <div className='tw-flex tw-items-end tw-justify-end tw-relative tw-z-30'>
                    <div className="tw-w-full lg:tw-w-[60%]">
                        <div className='tw-flex tw-flex-col tw-items-center tw-justify-center lg:tw-justify-end lg:tw-items-end'>
                            <h1 className="tw-text-center tw-text-white tw-uppercase tw-font-Alfa tw-text-5xl lg:tw-text-right tw-w-full tw-break-words lg:tw-text-6xl">The Nifty Dogs Alpha Collection</h1>
                            {
                                !fbClick && (
                                    <a href="https://facebook.com/" target="_blank" rel='noreferrer' className="tw-my-10  tw-text-black tw-bg-white tw-font-Barlow tw-text-xl tw-font-bold tw-uppercase tw-px-10 tw-py-3 tw-rounded-full tw-transition-all tw-ease-in-out tw-duration-700 hover:tw-scale-110 tw-text-center lg:tw-text-2xl" onClick={() => setFbClick(true)}>Join us on Facebook</a>
                                )
                            }
                            {
                                fbClick && !account && (
                                    <a className="tw-my-10  tw-text-black tw-bg-white tw-font-Barlow tw-text-xl tw-font-bold tw-uppercase tw-px-10 tw-py-3 tw-rounded-full tw-transition-all tw-ease-in-out tw-duration-700 hover:tw-scale-110 tw-text-center lg:tw-text-2xl tw-cursor-pointer" onClick={() => ConnectWallet(setError, setErrMsg)} >Connect Wallet</a>
                                )
                            }

                            {
                                fbClick && account && (
                                    <div className='tw-my-10 tw-w-full tw-flex tw-flex-row-reverse tw-items-center tw-justify-center lg:tw-justify-start'>
                                        <button disabled={loading} className="tw-text-black tw-bg-white tw-font-Barlow tw-text-xl tw-font-bold tw-uppercase tw-px-10 tw-py-3 tw-rounded-full tw-transition-all tw-ease-in-out tw-duration-700 hover:tw-scale-110 tw-text-center lg:tw-text-2xl tw-cursor-pointer" onClick={mint}>{loading ? 'Busy' : 'Mint'}</button>
                                        <Form.Select size="lg" className='tw-w-24 tw-rounded-full tw-py-3 tw-mr-2 tw-text-center' ref={mintAmount}>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </Form.Select>
                                    </div>
                                )
                            }

                            <img src={hero} alt="" className='tw-w-[80%] tw-relative -tw-z-10 lg:tw-hidden' />
                        </div>
                    </div>
                </div>
                {/* <div className='tw-clear-both'></div> */}
                <div className='tw-absolute tw-top-0 tw-left-0 tw-translate-x-[-70px] tw-translate-y-20 tw-hidden lg:tw-block' >
                    <div className='tw-relative w-full'>
                        <img src={hero} alt="" className='tw-w-[80%] tw-relative -tw-z-10' />
                    </div>
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1657471885 tw-z-30">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>

        </div>
    )
}

export default Hero