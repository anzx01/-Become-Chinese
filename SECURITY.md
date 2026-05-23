# Security Policy

## Reporting a Vulnerability

Please do not open a public issue for sensitive security reports.

If you discover a vulnerability, contact the repository owner privately with:

- A clear description of the issue.
- Steps to reproduce it.
- Any relevant logs or screenshots with secrets removed.
- The affected version or commit when possible.

## Supported Versions

Security fixes are handled on the default branch unless a release process is
introduced later.

## Secret Handling

Never commit real Supabase keys, database URLs, API keys, private keys, tokens,
or personal data. Use `.env.example` for documentation only.
