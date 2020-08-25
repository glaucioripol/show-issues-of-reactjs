import { useState } from 'react'
import { useSelector } from 'react-redux'

import { issuesState as issuesData } from '../../../../redux/store/issues'

export function useFilters() {
  const issuesState = useSelector(issuesData)

  const isLoading = issuesState.isLoading

  const [filterData, setFilterData] = useState({
    since: null,
    state: '',
    per_page: ''
  })

  function handleOnChange({ target }, semanticUiTarget = {}) {
    if (target.id && target.value) {
      setFilter(target)
      return
    }
    setFilter(semanticUiTarget)
  }

  function setFilter({ id, value }) {
    if (id) {
      setFilterData({
        ...filterData,
        [id]: value
      })
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    alert(JSON.stringify(filterData, null, 4))
  }

  return {
    isLoading,
    filterData,
    handleOnChange,
    handleOnSubmit
  }
}
