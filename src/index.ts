import { extendEnvironment, task } from "hardhat/config";
import { merge } from "sol-merger";
import { getContracts } from "./contracts";
import { mkdir, write } from "./filesystem";

interface MergerConfig {
  outDir: string;
  inDir: string;
  includeContracts: string[];
  excludeContracts: string[];
}

declare module "hardhat/types/config" {
  interface HardhatUserConfig {
    merger?: Partial<MergerConfig>;
  }

  interface HardhatConfig {
    merger: MergerConfig;
  }
}

extendEnvironment(async hre => {
  const { config } = hre;
  const { merger } = config;

  hre.config.merger = {
    outDir: merger?.outDir ?? "merged",
    inDir: merger?.inDir ?? "contracts",
    includeContracts: merger?.includeContracts ?? ["*"],
    excludeContracts: merger?.excludeContracts ?? [],
  };
});

task("merger", async (args, hre) => {
  const { artifacts, config } = hre;
  const { merger } = config;
  const { outDir, inDir, includeContracts, excludeContracts } = merger;

  const contractNames = (await getContracts(artifacts, inDir))
    .filter(contractName => includeContracts.includes("*") || includeContracts.includes(contractName))
    .filter(contractName => !excludeContracts.includes("*") && !excludeContracts.includes(contractName));

  await mkdir(outDir);
  for await (const contractName of contractNames) {
    const { sourceName } = await artifacts.readArtifact(contractName);
    const margedContract = await merge(sourceName);
    await write(`${outDir}/${contractName}.sol`, margedContract);
  }
});
