// Nitro auto-imports everything exported from server/utils/* into server/routes and server/api.
export function getSiteOrigin(): string {
    return 'https://' + (process.env.API_HOST || 'localhost:3000');
}
