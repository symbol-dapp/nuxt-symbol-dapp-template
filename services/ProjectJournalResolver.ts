import { NetworkType } from 'symbol-sdk';

export const ProjectJournalResolver = () => {
  const network = process.env.prod ? NetworkType.MAIN_NET : NetworkType.TEST_NET;
  throw Error('replace this with your journal address');
}