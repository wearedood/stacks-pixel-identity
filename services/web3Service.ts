import * as StacksConnectNamespace from '@stacks/connect';
import { TARGET_CONTRACT_ADDRESS, CONTRACT_NAME } from '../types';

// Technique de sioux pour contrer le bug d'import de Vite
const Connect: any = (StacksConnectNamespace as any).default || StacksConnectNamespace;
const { showConnect, openContractCall, AppConfig, UserSession } = Connect;

const appConfig = new AppConfig(['store_write', 'publish_data']);
export const userSession = new UserSession({ appConfig });

const appDetails = {
  name: 'Stacks Identity',
  icon: window.location.origin + '/favicon.ico',
};

export const connectWallet = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (typeof showConnect !== 'function') {
      return reject(new Error("Stacks Connect not loaded properly"));
    }
    showConnect({
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

export const sendInteractionTransaction = async (address: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    openContractCall({
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
