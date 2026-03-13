import { showConnect, AppConfig, UserSession, openContractCall } from '@stacks/connect';
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
      onFinish: () => {
        const userData = userSession.loadUserData();
        resolve(userData.profile.stxAddress.mainnet);
      },
      onCancel: () => reject(new Error("Connection cancelled"))
    });
  });
};

export const sendInteractionTransaction = async (address: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    openContractCall({
      network: 'mainnet',
      contractAddress: TARGET_CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: 'reveal-my-identity',
      functionArgs: [],
      onFinish: (data) => resolve(data.txId),
      onCancel: () => reject(new Error("Transaction cancelled"))
    });
  });
};
