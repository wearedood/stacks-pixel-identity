import { request } from '@stacks/connect';
import { TARGET_CONTRACT_ADDRESS, CONTRACT_NAME } from '../types';

export const connectWallet = async (): Promise<string> => {
  const response = await request('getAddresses');
  const stxAccount = response.addresses.find((a: any) => a.symbol === 'STX');
  if (!stxAccount) throw new Error('No STX address found');
  return stxAccount.address;
};

export const sendInteractionTransaction = async (address: string): Promise<string> => {
  const response = await request('stx_callContract', {
    contract: `${TARGET_CONTRACT_ADDRESS}.${CONTRACT_NAME}`,
    functionName: 'reveal-my-identity',
    functionArgs: [],
    network: 'mainnet',
  });
  return response.txid;
};
