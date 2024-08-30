import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0xe6B266d72d16a4C01F0415167De79797d3911421";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0x0F53263CcC552aa00D7DAf93Ba206478229D0dA8
