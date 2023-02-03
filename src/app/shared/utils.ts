import { IAccount } from './interfaces';

export const searchTree = (
  tree: IAccount,
  searchTerm: string
): IAccount | null => {
  if (!tree) return null;

  const filteredAccounts = tree.accounts
    .map((node) => searchTree(node, searchTerm))
    .filter((node) => node) as IAccount[];

  return tree.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    filteredAccounts.length
    ? { ...tree, accounts: filteredAccounts }
    : null;
};
