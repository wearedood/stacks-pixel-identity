import { request } from '@stacks/connect';
import { TARGET_CONTRACT_ADDRESS, CONTRACT_NAME } from '../types';

export const connectWallet = async (): Promise<string> => {
  const response = await request('getAddresses');
  const stxAddress = response.addresses.stx[0].address;
  return stxAddress;
};

export const sendInteractionTransaction = async (): Promise<string> => {
  const response = await request('stx_callContract', {
    contract: `${TARGET_CONTRACT_ADDRESS}.${CONTRACT_NAME}`,
    functionName: 'reveal-my-identity',
    functionArgs: [],
    network: 'mainnet',
  });
  return response.txid;
};
