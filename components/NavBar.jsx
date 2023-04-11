import React,{useEffect,useContext,useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHandsHelping} from 'react-icons/fa';
import { Data } from '@/pages/_app';
import Web3Modal from "web3modal";
import { ethers } from 'ethers';
//import { connectingWithWallet } from './function';
import Contract from '../artifacts/contracts/InFocus.sol/InFocus.json';



const NavBar = () => {
  
  const {wallet,setWallet,chain,setChain,account,setAccount,provider,setProvider,contract,setContract}=useContext(Data);
  
  useEffect(()=>{
    const loadContents=async()=>{
      
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });



      if(accounts.length>0){

        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract=new ethers.Contract(process.env.NEXT_APP_CONTRACT_KEY,Contract.abi,signer);

      
        setAccount(accounts[0]);
        setWallet(true);
        setProvider(provider);
        setContract(contract);
        
      }
    }
    loadContents();
  },[]);
 
  async function connectWallet(){
      
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      
    } catch (error) {
      console.log("error",error);
    }

  }
  

  return (
   <div className=''  >
    <div className=''>
       <div className=''>
         <Link href="/" ><FaHandsHelping className=''/></Link>
       </div>
       <div className=''>
          <Link href="/" className=''>HOME</Link>
          <Link href="/create" className=' '>CREATE</Link>
          <Link href="/campaigns" className=''>CAMPAIGNS</Link>
       </div>
       <div className=''>
           <button className=''onClick={connectWallet} >
            {account=='Connect Wallet'?account:account.slice(0,5)+"..."+account.slice(-5,)}
           </button>
       </div>
    </div>
  </div>
  )
}

export default NavBar