import { getCommitSha } from './getCommitSha'
import { getChangedFiles } from './getChangedFiles'

const { GITHUB_COMMIT_SHA: currentCommitSha } = process.env

if (!currentCommitSha) {
  throw new Error('Environment variable GITHUB_COMMIT_SHA is not defined')
}

export const hasCodeChanges = async () => {
  const compareCommitSha = await getCommitSha()
  const changedFiles = getChangedFiles(currentCommitSha, compareCommitSha)

  console.error('Determining whether there are code changes', {
    currentCommitSha,
    compareCommitSha,
    changedFiles,
  })

  const hasCodeChanged =
    changedFiles === null ||
    changedFiles.length === 0 ||
    changedFiles.some(({ filename }) => !filename.startsWith('content'))

  console.error(
    hasCodeChanged ? '🟢 There are code changes' : '🔴 No code changes',
    { hasCodeChanged }
  )
  console.log(hasCodeChanged)
}

hasCodeChanges().catch((e) => {
  console.error(e)
  console.log('true')
})
