import { ArweaveWalletKit, ConnectButton } from "arweave-wallet-kit";

function Wallet() {
  return (
    <ArweaveWalletKit>
      <div className="App">
        <ConnectButton
          accent="rgb(197, 7, 181)"
          profileModal={false}
          showBalance={true}
        />
      </div>
    </ArweaveWalletKit>
  );
}

export default Wallet;
