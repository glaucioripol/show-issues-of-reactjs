import { useState } from 'react'

export function useFilters() {
  const isLoading = false
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
