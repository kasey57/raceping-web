// Shared site constants (single source of truth for links and assets).
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const ICON_SRC = `${BASE_PATH}/icon.png`;

// OAuth2 invite: bot + slash commands with minimal permissions
// (View Channel, Send Messages, Embed Links, Mention Everyone, Read History, Use Commands).
export const INVITE_URL =
  'https://discord.com/oauth2/authorize?client_id=1558550077948043345&permissions=2147699712&scope=bot+applications.commands';

// TODO: paste your Buy Me a Coffee account link here.
export const BMC_URL = '#';
