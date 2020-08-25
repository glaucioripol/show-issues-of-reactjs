import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { issuesState as issuesData, issuesActions } from '../../../../redux/store/issues'

export function useDataContainerTable() {
  const dispatch = useDispatch()
  const issuesState = useSelector(issuesData)

  useEffect(retrieveIssues, [])
  function retrieveIssues() {
    dispatch(issuesActions.request())
  }

  return { issuesState }
}
