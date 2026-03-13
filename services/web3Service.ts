import { showConnect, AppConfig, UserSession, openContractCall } from '@stacks/connect';
import { StacksMainnet } from '@stacks/network';
import { TARGET_CONTRACT_ADDRESS, CONTRACT_NAME } from '../types';

const appConfig = new AppConfig(['store_write', 'publish_data']);
export const userSession = new UserSession({ appConfig });

export const connectWallet = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    showConnect({
      appDetails: {
        name: 'Stacks Pixel Identity',
        icon: window.location.origin + '/favicon.ico',
      },
      redirectTo: '/',
      onFinish: () => {
        const userData = userSession.loadUserData();
        const address = userData.profile.stxAddress.mainnet;
        resolve(address);
      },
      onCancel: () => {
        reject(new Error("Wallet connection cancelled."));
      }
    });
  });
};

export const sendInteractionTransaction = (address: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    openContractCall({
      network: new StacksMainnet(),
      contractAddress: TARGET_CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: 'reveal-my-identity',
      functionArgs: [],
      onFinish: (data) => {
        resolve(data.txId);
      },
      onCancel: () => {
        reject(new Error("Transaction cancelled."));
      }
    });
  });
};
