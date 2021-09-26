import { RepositoryFactoryHttp } from 'symbol-sdk';

const testNodeUrl = 'https://ngl-api-001.testnet.symboldev.network:3001';
const testWsNodeUrl = ''
const prodNodeUrl = 'https://ngl-api-001.testnet.symboldev.network:3001';
const prodWsNodeUrl = ''
export const HTTPRepositoryFactory = new RepositoryFactoryHttp(process.env.prod ? prodNodeUrl : testNodeUrl);
export const WSSRepositoryFactory = new RepositoryFactoryHttp(process.env.prod ? prodNodeUrl : testNodeUrl, {
  websocketUrl: process.env.prod ? prodWsNodeUrl : testWsNodeUrl,
  websocketInjected: WebSocket
});
