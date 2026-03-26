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
    description: 'Decode, verify, and audit JWTs. Multi-tab workspace, signature verification (HMAC/RSA/EC/JWKS), security audit, diff view, history, and code snippets — all client-side.',
    icon: '🔑',
    tags: ['JWT', 'Auth', 'Decode', 'Verify', 'Security'],
  },
  {
    name: 'Hash Pro Tool',
    slug: 'hash-tool',
    description: 'Hash text or files with SHA-1/256/384/512 and MD5. Supports HMAC, hash verification with auto-algorithm detection, and file drag-and-drop — all client-side.',
    icon: '#',
    tags: ['Hash', 'SHA', 'MD5', 'HMAC', 'Verify', 'File'],
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
