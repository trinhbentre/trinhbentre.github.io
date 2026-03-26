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
    description: 'MD5, SHA-1/256/384/512, SHA-3, CRC32 hashing + HMAC, file hashing (streaming, supports large files), batch mode, checksum verifier, compare hashes, multi-hash preview — all client-side.',
    icon: '#',
    tags: ['Hash', 'SHA', 'MD5', 'HMAC', 'SHA3', 'CRC32', 'Verify', 'File'],
  },
  {
    name: 'Crypto Tool',
    slug: 'crypto-tool',
    description: 'AES-GCM/CBC/CTR encrypt/decrypt, RSA-OAEP, RSA-PSS & ECDSA sign/verify, AES/RSA/EC key generation — all client-side via Web Crypto API. Passphrase (PBKDF2) or raw key, PEM/JWK support, details panel.',
    icon: '🔐',
    tags: ['AES', 'RSA', 'ECDSA', 'Encrypt', 'Decrypt', 'Sign', 'Verify', 'KeyGen', 'Crypto'],
  },
  {
    name: 'Encoding Tool',
    slug: 'encoding-tool',
    description: 'Base64 and URL encode/decode text instantly.',
    icon: '≈',
    tags: ['Base64', 'URL', 'Encode'],
  },
]
