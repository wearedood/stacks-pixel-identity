import * as StacksConnect from '@stacks/connect';
import { STACKS_MAINNET } from '@stacks/network';
import { AnchorMode, PostConditionMode } from '@stacks/transactions';
import { TARGET_CONTRACT_ADDRESS, TARGET_CONTRACT_NAME } from '../types';

const network = STACKS_MAINNET;

export const connectWallet = (onFinish: (address: string) => void): void => {
  // Try showConnect, then authenticate as fallback
  const connectFn = StacksConnect.showConnect || (StacksConnect as any).authenticate;
  
  if (typeof connectFn !== 'function') {
    console.error('Stacks Connect: showConnect is not a function', StacksConnect);
    return;
  }

  connectFn({
    appDetails: {
      name: 'Stacks Pixel Identity',
      icon: window.location.origin + '/favicon.ico',
    },
    onFinish: (payload: any) => {
      const userData = payload.userSession.loadUserData();
      onFinish(userData.profile.stxAddress.mainnet);
    },
    onCancel: () => {
      console.log('User cancelled login');
    },
  });
};

export const sendInteractionTransaction = async (onFinish: (txId: string) => void, onCancel: () => void): Promise<void> => {
  const callFn = StacksConnect.openContractCall || (StacksConnect as any).showContractCall;
  
  if (typeof callFn !== 'function') {
    console.error('Stacks Connect: openContractCall is not a function', StacksConnect);
    return;
  }

  await callFn({
    network,
    contractAddress: TARGET_CONTRACT_ADDRESS,
    contractName: TARGET_CONTRACT_NAME,
    functionName: 'reveal-my-identity',
    functionArgs: [],
    anchorMode: AnchorMode.Any,
    postConditionMode: PostConditionMode.Allow,
    onFinish: (data: any) => {
      onFinish(data.txId);
    },
    onCancel: () => {
      onCancel();
    },
  });
};
