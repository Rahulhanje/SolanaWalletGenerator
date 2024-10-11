"use client";

import {  Eye, EyeOff, Trash } from "lucide-react";
import { useState } from "react";

type Wallet = {
    id: number; 
    publickey: string;
    privatekey: string;
};

const WalletCard = ({
    mnemonic,
    wallet,
    deleteWallet,
}: {
    mnemonic: string;
    wallet: Wallet;
    deleteWallet: (id: number) => void; 
}) => {
    const [showPrivateKey, setShowPrivateKey] = useState(false);

    const togglePrivateKeyVisibility = () => {
        setShowPrivateKey((prev) => !prev);
    };

    return (
        <div className="mt-2 p-5 shadow-2xl rounded-xl mx-2 w-full bg-slate-200">
            
            <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <h1 className="font-bold text-lg md:text-xl">Wallet</h1>
                    <div className="pr-2">
                        <Trash onClick={() => deleteWallet(wallet.id)} color="red" />
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <h2 className="font-bold text-sm md:text-base pb-1">Public Key</h2>
                        <p className="text-sm md:text-base">{wallet.publickey}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="font-bold text-sm md:text-base pb-1">Private Key</h2>
                            <p className="text-sm md:text-base">
                                {showPrivateKey ? (
                                    wallet.privatekey
                                ) : (
                                    <div className="flex font-thin overflow-hidden">
                                        {"•".repeat(wallet.privatekey.length)}
                                    </div>
                                )}
                            </p>
                        </div>
                        <div
                            className="pr-2 cursor-pointer"
                            onClick={togglePrivateKeyVisibility}
                        >
                            {showPrivateKey ? <Eye /> : <EyeOff />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalletCard;
