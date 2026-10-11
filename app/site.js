// Shared site constants (single source of truth for links and assets).
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const ICON_SRC = `${BASE_PATH}/icon.png`;

// OAuth2 invite: bot + slash commands; View Channel, Send Messages, Embed Links.
export const INVITE_URL =
  'https://discord.com/oauth2/authorize?client_id=1558550077948043345&permissions=19456&scope=bot+applications.commands';

export const SUPPI_URL = 'https://www.suppi.pl/kaseyowski';
