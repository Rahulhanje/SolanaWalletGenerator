import { Github, Wallet } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className=" p-6 border-b rounded-xl border-slate-200 shadow-sm">
      <div className="px-8 flex justify-between">
      <Wallet size={38} />
      <Link href="https://github.com/Rahulhanje/SolanaWalletGenerator">
        <Button>
          <Github></Github>
          <span className="font-bold text-md">GitHub</span>
        </Button>
      </Link>
      </div>
    </div>
  );
};

export default Navbar;
