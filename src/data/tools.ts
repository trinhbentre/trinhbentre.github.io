export interface Tool {
  name: string
  slug: string
  description: string
  icon: string
  tags: string[]
}

export const tools: Tool[] = [
  {
    name: 'JSON Beautify',
    slug: 'json-beautify',
    description: 'Format, validate, and minify JSON with syntax highlighting.',
    icon: '{ }',
    tags: ['JSON', 'Format', 'Validate'],
  },
  {
    name: 'JWT Debugger',
    slug: 'jwt-debugger',
    description: 'Decode and inspect JWT header, payload, and signature.',
    icon: '🔑',
    tags: ['JWT', 'Auth', 'Decode'],
  },
  {
    name: 'Hash Tool',
    slug: 'hash-tool',
    description: 'Generate SHA-1, SHA-256, SHA-384, SHA-512 hashes from text.',
    icon: '#',
    tags: ['Hash', 'SHA', 'Crypto'],
  },
  {
    name: 'Crypto Tool',
    slug: 'crypto-tool',
    description: 'AES-GCM encrypt and decrypt text with a passphrase.',
    icon: '🔐',
    tags: ['AES', 'Encrypt', 'Decrypt'],
  },
  {
    name: 'Encoding Tool',
    slug: 'encoding-tool',
    description: 'Base64 and URL encode/decode text instantly.',
    icon: '≈',
    tags: ['Base64', 'URL', 'Encode'],
  },
]
