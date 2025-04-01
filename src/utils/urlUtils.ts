import crypto from 'crypto';

export function generateShortUrl(): string {
  const uniqueId = crypto.randomBytes(3).toString('hex');
  return uniqueId;
}
