export type Route = {
  path: string
  label: string
}

export type Routes = Record<string, Route>

export const routes: Routes = {
  CONSOLE: {
    path: '/',
    label: 'Console',
  },
  INSIGHTS: {
    path: '/insights',
    label: 'Insights',
  },
  ACCOUNT: {
    path: '/settings/account',
    label: 'Account',
  },
  CONTRACTS: {
    path: '/settings/contracts',
    label: 'Contracts',
  },
  WALLETS: {
    path: '/settings/wallets',
    label: 'Wallets',
  },
} as const satisfies Routes

export const externalRoutes: Routes = {
  // Support items
  DEV_FORUM: {
    path: 'https://github.com/ethereum-optimism/developers/discussions',
    label: 'Developer Forum',
  },
  FARCASTER: {
    path: 'https://warpcast.com/~/channel/op-stack',
    label: 'Farcaster',
  },
  DISCORD: {
    path: 'https://discord.optimism.io/',
    label: 'Discord',
  },
  DAPP_EXAMPLES: {
    path: 'https://github.com/ethereum-optimism/ecosystem',
    label: 'Dapp Examples',
  },
  // Documentation items
  ETH_DOCS: {
    path: 'https://ethereum.org/developers/docs',
    label: 'Ethereum',
  },
  BASE_DOCS: {
    path: 'https://docs.base.org/',
    label: 'Base',
  },
  FRAX_DOCS: {
    path: 'https://docs.frax.com/fraxtal',
    label: 'Fraxtal',
  },
  LISK_DOCS: {
    path: 'https://documentation.lisk.com/',
    label: 'Lisk',
  },
  MODE_DOCS: {
    path: 'https://docs.mode.network/introduction/introducing-mode',
    label: 'Mode',
  },
  OPTIMISM_DOCS: {
    path: 'https://docs.optimism.io/',
    label: 'Optimism',
  },
  REDSTONE_DOCS: {
    path: 'https://redstone.xyz/docs/what-is-redstone',
    label: 'Redstone',
  },
  ZORA_DOCS: {
    path: 'https://docs.zora.co/',
    label: 'Zora',
  },
  // Project links
  SUPERCHAIN_FAUCET: {
    path: 'https://app.optimism.io/faucet',
    label: 'Superchain Faucet',
  },
  RETRO_PGF: {
    path: 'https://app.optimism.io/retropgf',
    label: 'Retro PGF',
  },

  // Misc links
  SUPERCHAIN: {
    path: 'https://optimism.io/superchain',
    label: 'Superchain',
  },
  TERMS: {
    path: 'https://optimism.io/terms',
    label: 'Terms',
  },
  PRIVACY_POLICY: {
    path: 'https://optimism.io/data-privacy-policy',
    label: 'Privacy Policy',
  },

  // Build links
  TESTNET_PAYMASTER_GITHUB: {
    path: 'https://github.com/ethereum-optimism/ecosystem/tree/main/docs/superchain-paymaster',
    label: 'Testnet paymaster',
  },
  LEARN_ABOUT_PAYMASTER: {
    path: 'https://www.erc4337.io/docs/paymasters/introduction',
    label: 'Learn about paymasters',
  },
  SUPERCHAIN_SAFE_OP: {
    path: 'https://safe.optimism.io/welcome',
    label: 'Superchain Safe',
  },
  SUPERCHAIN_SAFE_OTHER: {
    path: 'https://app.safe.global/welcome/accounts',
    label: 'Superchain Safe',
  },

  // Promo links
  ALCHEMY_LEARN_MORE: {
    path: 'https://www.alchemy.com/',
    label: 'Learn about Alchemy',
  },
  ALCHEMY_SUBGRAPHS_LEARN_MORE: {
    path: 'https://www.alchemy.com/subgraphs',
    label: 'Learn about Subgraphs',
  },
  THIRDWEB_LEARN_MORE: {
    path: 'https://thirdweb.com/community/startup-program',
    label: 'Learn more',
  },
  GELATO_LEARN_MORE: {
    path: 'https://docs.google.com/document/d/1ewcG2FIjSwhWlgXngaKJm2J955_bjVZ9PHhuyi19uuQ',
    label: 'Learn more',
  },
  QUICKNODE_LEARN_MORE: {
    path: 'https://quicknode.notion.site/OP-Labs-x-QuickNode-f11ee23df47b4107a70c5cbfcb0b1e38',
    label: 'Learn more',
  },
}

export const forms = {
  CONTACT_US: 'https://share.hsforms.com/1fvxLHGW9TQuxdGCmgSlRRgqoshb',
  UX_REVIEW_TESTNET: 'https://share.hsforms.com/1bPQi4dwCTEGafybJi6yv8Aqoshb',
  MAINNET_PAYMASTER: 'https://share.hsforms.com/1cbNWGorjSR2Dn_QLC-lHogqoshb',
  MEGAPHONE: 'https://share.hsforms.com/1XHQ9Io_lT0-vf9nSVoUahQqoshb',
  USER_FEEDBACK_MAINNET:
    'https://share.hsforms.com/1nKIdgLNpQeqsocMP2qMrXAqoshb',
  ALCHEMY_GROWTH:
    'https://alchemyapi.typeform.com/to/Ka0tJ3oT?typeform-source=www.console.optimism.io',
  ALCHEMY_SUBGRAPHS:
    'https://alchemyapi.typeform.com/to/vJAnlTwy?typeform-source=www.console.optimism.io',
  THIRDWEB: 'https://share.hsforms.com/1WCgMOvmuQqmCjdEqtu1NdAea58c',
  GELATO: 'https://share-eu1.hsforms.com/1kaQ2KRLYRym3mZNOF2aEVQ2bmmck',
  QUICKNODE: 'https://quiknode.typeform.com/to/sWxlcYV4#cd=H7qNVcJb',
}

export const supportItems = [
  externalRoutes.DEV_FORUM,
  externalRoutes.FARCASTER,
  externalRoutes.DISCORD,
  externalRoutes.DAPP_EXAMPLES,
]

export const docsItems = [
  {
    ...externalRoutes.ETH_DOCS,
    logo: '/logos/eth-logo.png',
  },
  {
    ...externalRoutes.BASE_DOCS,
    logo: '/logos/base-logo.png',
  },
  {
    ...externalRoutes.FRAX_DOCS,
    logo: '/logos/frax-logo.png',
  },
  {
    ...externalRoutes.LISK_DOCS,
    logo: '/logos/lisk-logo.png',
  },
  {
    ...externalRoutes.MODE_DOCS,
    logo: '/logos/mode-logo.png',
  },
  {
    ...externalRoutes.OPTIMISM_DOCS,
    logo: '/logos/opmainnet-logo.png',
  },
  {
    ...externalRoutes.REDSTONE_DOCS,
    logo: '/logos/redstone-logo.png',
  },
  {
    ...externalRoutes.ZORA_DOCS,
    logo: '/logos/zora-logo.png',
  },
]
