let barengaCoin = new Blockchain();

barengaCoin.createTransaction(new Transaction("address1", "address2", 100));
barengaCoin.createTransaction(new Transaction("address2", "address1", 50));

console.log(
  "\naddress1's balance is: " +
    barengaCoin.getBalanceOfAddress("address1")
);

console.log(
  "\naddress2's balance is: " +
    barengaCoin.getBalanceOfAddress("address2")
);

console.log("\nStarting the miner...");
barengaCoin.minePendingTransactions("william's-address");

console.log(
  "\nWilliam's balance is: " +
    barengaCoin.getBalanceOfAddress("william's-address")
);

console.log(
  "\naddress1's balance is: " +
    barengaCoin.getBalanceOfAddress("address1")
);

console.log(
  "\naddress2's balance is: " +
    barengaCoin.getBalanceOfAddress("address2")
);