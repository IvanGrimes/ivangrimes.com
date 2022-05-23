import https from 'https'

const { DOMAIN, VERCEL_DOMAIN } = process.env

const CURRENT_DOMAIN = DOMAIN || VERCEL_DOMAIN

if (!CURRENT_DOMAIN) {
  throw new Error('Environment variable DOMAIN is not defined')
}

export const getCommitSha = () =>
  new Promise<string>((resolve, reject) => {
    https
      .get(`https://${CURRENT_DOMAIN}`, (response) =>
        resolve(response.headers['X-Build-ID'] as string)
      )
      .on('error', reject)
  })
