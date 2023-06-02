"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
const sol_merger_1 = require("sol-merger");
const contracts_1 = require("./contracts");
const filesystem_1 = require("./filesystem");
(0, config_1.extendEnvironment)(async (hre) => {
    const { config } = hre;
    const { merger } = config;
    hre.config.merger = {
        outDir: merger?.outDir || "merged",
        inDir: merger?.inDir || "contracts",
        includeContracts: merger?.includeContracts || ["*"],
        excludeContracts: merger?.excludeContracts || [],
    };
});
(0, config_1.task)("merger", async (args, hre) => {
    const { artifacts, config } = hre;
    const { merger } = config;
    const { outDir, inDir, includeContracts, excludeContracts } = merger;
    const contractNames = (await (0, contracts_1.getContracts)(artifacts, inDir))
        .filter(contractName => includeContracts.includes("*") || includeContracts.includes(contractName))
        .filter(contractName => !excludeContracts.includes("*") && !excludeContracts.includes(contractName));
    await (0, filesystem_1.mkdir)(outDir);
    for await (const contractName of contractNames) {
        const { sourceName } = await artifacts.readArtifact(contractName);
        const margedContract = await (0, sol_merger_1.merge)(sourceName);
        await (0, filesystem_1.write)(`${outDir}/${contractName}.sol`, margedContract);
    }
});
