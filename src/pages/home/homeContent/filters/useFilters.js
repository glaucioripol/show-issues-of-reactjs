import { useState } from 'react'

export function useFilters() {
  const [filterData, setFilterData] = useState({
    since: null,
    state: '',
    per_page: '10'
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

  return {
    filterData,
    handleOnChange
  }
}
