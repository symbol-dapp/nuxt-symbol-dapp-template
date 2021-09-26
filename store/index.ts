import { Dispatch } from 'vuex'
import { CommandDispatcher } from '@symbol-dapp/core';
import { NetworkType, Order, TransactionGroup, TransactionSearchCriteria } from 'symbol-sdk';
import { HTTPRepositoryFactory } from '~/services/RepositoryFacade';
import { ProjectJournalResolver } from '~/services/ProjectJournalResolver';

const transactionHttp = HTTPRepositoryFactory.createTransactionRepository();

const commandDispatcher = new CommandDispatcher();

export const actions = {
  nuxtClientInit ({ dispatch }: { dispatch: Dispatch }) {
    const searchCriteria: TransactionSearchCriteria = {
      group: TransactionGroup.Confirmed,
      address: ProjectJournalResolver(),
      pageNumber: 1,
      pageSize: 100,
      order: Order.Asc
    };
    transactionHttp.search(searchCriteria).subscribe(
      (page) => {
        page.data.forEach(transaction => commandDispatcher.dispatch(transaction));
      },
      err => console.error(err)
    );
  }
};