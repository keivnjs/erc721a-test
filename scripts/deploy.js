const hre = require('hardhat');

async function main() {
  const TuwagaNFT = await hre.ethers.getContractFactory('TuwagaNFT');
  const tuwagaNFT = await TuwagaNFT.deploy();

  await tuwagaNFT.deployed();

  console.log('TuwagaNFT deployed to:', tuwagaNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
