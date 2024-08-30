import { ethers } from "hardhat";

async function main() {
    const web3CXITokenAddress = "0xe6B266d72d16a4C01F0415167De79797d3911421";
    const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);

    const saveERC20ContractAddress = "0x0F53263CcC552aa00D7DAf93Ba206478229D0dA8";
    const saveERC20 = await ethers.getContractAt("ISaveERC20", saveERC20ContractAddress);

    // Approve savings contract to spend token
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
    approveTx.wait();

    const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
    console.log("Contract balance before :::", contractBalanceBeforeDeposit);

    const depositAmount = ethers.parseUnits("150", 18);
    const depositTx = await saveERC20.deposit(depositAmount);

    console.log(depositTx);

    depositTx.wait();

    const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

    console.log("Contract balance after :::", contractBalanceAfterDeposit);



    // Withdrawal Interaction

    console.log("________________________________________________");
    console.log("Withdraw");
    console.log("________________________________________________");

    const withdrawAmount = ethers.parseUnits("150", 18);
    const withdrawTX = await saveERC20.deposit(withdrawAmount);

    console.log(withdrawAmount);

    depositTx.wait();

    const contractBalanceAfterWithdraw = await saveERC20.getContractBalance();

    console.log("Contract balance after :::", contractBalanceAfterWithdraw);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
