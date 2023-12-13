import { Web3 } from "web3";

const web3 = new Web3("http://127.0.0.1:8545");

const account = (await web3.eth.getAccounts())[0];

const balance = await web3.eth.getBalance(account);

console.log("Account:\t", account);
console.log("Balance (ETH):\t", web3.utils.fromWei(balance, "ether"));