# Hardhat Merger Plugin

This is a plugin for Hardhat that allows you to generate merged smart contracts in Solidity. The plugin provides a seamless way to combine multiple Solidity files into a single output file, making it easier to manage and deploy your contracts.

## Installation

To use this plugin, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org) installed on your machine.
2. Install Hardhat by running `npm install --save-dev hardhat`.
3. Install the Hardhat-Abigen plugin by running `npm install --save-dev hardhat-merger`.

## Usage

To use the plugin, import it in your JavaScript or TypeScript file as follows:

### JavaScript

```javascript
require("hardhat-merger");
```

### TypeScript

```typescript
import "hardhat-merger";
```

### Configuration

The plugin supports custom configuration options, which can be specified in your Hardhat configuration file (`hardhat.config.js` or `hardhat.config.ts`). Here is an example configuration for the `merger` section:

### JavaScript

```javascript
module.exports = {
  // ...other configuration options...

  merger: {
    outDir: "merged", // The output directory for the merged contracts (default: "merged")
    inDir: "contracts", // The input directory containing the individual contracts (default: "contracts")
    includeContracts: ["*"], // An array of contract patterns to include in the merge (default: ["*"])
    excludeContracts: [], // An array of contract patterns to exclude from the merge (default: [])
  },
};
```

### TypeScript

```typescript
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  // ...other configuration options...

  merger: {
    outDir: "merged", // The output directory for the merged contracts (default: "merged")
    inDir: "contracts", // The input directory containing the individual contracts (default: "contracts")
    includeContracts: ["*"], // An array of contract patterns to include in the merge (default: ["*"])
    excludeContracts: [], // An array of contract patterns to exclude from the merge (default: [])
  },
};

export default config;
```

Make sure to adjust the configuration according to your project's needs.

## Generating merged contracts

To generate smart contracts, run the following command:

```
npx hardhat merger
```

This will generate the merged contracts in the specified `outDir` directory.

## License

This plugin is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.

---

**Note:** Please ensure that you have a backup of your contracts before using the Hardhat Merger plugin. While every effort has been made to ensure the reliability and accuracy of the plugin, it is always recommended to perform thorough testing and review before deploying merged contracts in a production environment.

---

I hope this plugin simplifies your development workflow by automatically generating merged smart contracts in Solidity. If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/nazarkhatsko/hardhat-merger/issues). Contributions are also welcome!
