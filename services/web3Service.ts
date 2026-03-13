import { TARGET_CONTRACT_ADDRESS, CONTRACT_NAME } from '../types';

// On récupère la librairie chargée par le script HTML
const getStacks = () => (window as any).StacksConnect;

export const userSession = new (getStacks().UserSession)({
  appConfig: new (getStacks().AppConfig)(['store_write', 'publish_data'])
});

const appDetails = {
  name: 'Stacks Identity',
  icon: window.location.origin + '/favicon.ico',
};

export const connectWallet = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    getStacks().showConnect({
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
    getStacks().openContractCall({
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
