"use client";
import nacl from "tweetnacl";
import {
  generateMnemonic as generateMnemonicPhrase,
  mnemonicToSeedSync,
} from "bip39";
import { derivePath } from "ed25519-hd-key";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import WalletCard from "./WalletCard";
import Mnemonicard from "./mnemonicCard";

type Wallet = {
  id: number;
  publickey: string;
  privatekey: string;
};

const WalletGenerator = () => {
  const [mnemonic, setMnemonic] = useState<string |" ">("");
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [nextId, setNextId] = useState<number>(0);
  
  
  useEffect(() => {
    const storedMnemonic = localStorage.getItem("mnemonic");
    const storedWallets = localStorage.getItem("wallets");

    if (storedMnemonic) {
      setMnemonic(storedMnemonic);
      
    }

    if (storedWallets) {
      setWallets(JSON.parse(storedWallets));
      setNextId(JSON.parse(storedWallets).length);
    }
  }, []);

  // Function to generate and store wallet and mnemonic
  function createWallet() {
    if (!mnemonic) {
      const mnemonicPhrase = generateMnemonicPhrase();
      setMnemonic(mnemonicPhrase);
      localStorage.setItem("mnemonic", mnemonicPhrase);
    }

    const seed = mnemonicToSeedSync(mnemonic!);
    const derived = derivePath(
      `m/44'/501'/0'/${nextId}'`,
      seed.toString("hex")
    );

    const keypair = nacl.sign.keyPair.fromSeed(derived.key);
    const walletData = {
      id: nextId,
      publickey: Buffer.from(keypair.publicKey).toString("hex"),
      privatekey: Buffer.from(keypair.secretKey).toString("hex"),
    };

    // Update wallets state and localStorage

    const updatedWallets = [...wallets, walletData];
    setWallets(updatedWallets);
    setNextId(nextId + 1); 
    localStorage.setItem("wallets", JSON.stringify(updatedWallets));
  }

  // Function to clear wallets and mnemonic from localStorage and state
  function handleClearWallet() {
    localStorage.removeItem("mnemonic");
    localStorage.removeItem("wallets");
    setMnemonic("");
    setWallets([]);
  }

  // Function to delete a wallet by its ID
  function deleteWallet(id: number) {
    const updatedWallets = wallets.filter((wallet) => wallet.id !== id);
    setWallets(updatedWallets);
    localStorage.setItem("wallets", JSON.stringify(updatedWallets));
  }

  return (
    <div>
      <div>
      {mnemonic && wallets.length > 0 && <Mnemonicard mnemonic={mnemonic} />}
      </div>
      <div className="p-6">
        <div className="flex px-2 h-[56px] rounded-xl shadow-md bg-slate-50 border border-slate-400 justify-between items-center">
          <h1 className="sm:font-bold sm:text-4xl font-bold">Solana Wallet</h1>
          <div className="flex gap-3">
            <Button onClick={createWallet}>Add Wallet</Button>
            <Button onClick={handleClearWallet} className="bg-red-700">
              Clear Wallets
            </Button>
          </div>
        </div>
        <div className="">
          {wallets.length > 0 ? (
            wallets.map((wallet) => (
              <WalletCard
                key={wallet.id} // Use wallet.id as key for better performance
                mnemonic={mnemonic!}
                wallet={wallet}
                deleteWallet={deleteWallet} // Pass deleteWallet function to WalletCard
              />
            ))
          ) : (
            <div className="font-bold p-10">No wallets created</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletGenerator;
