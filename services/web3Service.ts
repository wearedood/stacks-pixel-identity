import * as StacksConnect from '@stacks/connect';
import { TARGET_CONTRACT_ADDRESS, CONTRACT_NAME } from '../types';

const appConfig = new StacksConnect.AppConfig(['store_write', 'publish_data']);
export const userSession = new StacksConnect.UserSession({ appConfig });

const appDetails = {
  name: 'Stacks Identity',
  icon: window.location.origin + '/favicon.ico',
};

export const connectWallet = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    StacksConnect.showConnect({
      userSession,
      appDetails,
      onFinish: () => {
        const userData = userSession.loadUserData();
        resolve(userData.profile.stxAddress.mainnet);
      },
      onCancel: () => reject(new Error("Canceled"))
    });
  });
};

export const sendInteractionTransaction = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    StacksConnect.openContractCall({
      network: 'mainnet',
      appDetails,
      contractAddress: TARGET_CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: 'reveal-my-identity',
      functionArgs: [],
      onFinish: (data: any) => resolve(data.txId),
      onCancel: () => reject(new Error("Canceled"))
    });
  });
};
