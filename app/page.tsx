import Footer from "@/components/footer";
import WalletGenerator from "@/components/wallethanler";
export default function Home() {
  return (
    <div className="h-screen">
      <WalletGenerator />
      <Footer/>
    </div>
  );
}
