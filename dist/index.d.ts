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
export {};
