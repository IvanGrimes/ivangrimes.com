import { execSync } from 'child_process'

type ChangeItem = { change: keyof typeof changeTypes; filename: string }

const changeTypes = {
  M: 'modified',
  A: 'added',
  D: 'deleted',
  R: 'moved',
}

export const getChangedFiles = (
  currentCommitSha: string,
  compareCommitSha: string
) => {
  try {
    const lineParser = /^(?<change>\w).*?\s+(?<filename>.+$)/
    const gitOutput = execSync(
      `git diff --name-status ${currentCommitSha} ${compareCommitSha}`
    ).toString()

    const changedFiles = gitOutput
      .split('\n')
      .map<ChangeItem>((line) => line.match(lineParser)?.groups as ChangeItem)
      .filter(Boolean)
    const changes = []

    // eslint-disable-next-line no-restricted-syntax
    for (const { change, filename } of changedFiles) {
      const changeType = changeTypes[change]

      if (changeType) {
        changes.push({ changeType: changeTypes[change], filename })
      } else {
        console.error(`Unknown change type: ${change} ${filename}`)
      }
    }

    return changes
  } catch (error) {
    console.error(`Something went wrong trying to get changed files.`, error)
    return null
  }
}
