import { useSelector } from 'react-redux'

import { issuesState as issuesData } from '../../../../redux/store'

export function useDataContainerTable() {
  const issuesState = useSelector(issuesData)
  return { issuesState }
}
