import { ChangeEvent, useEffect, useState } from "react"

export interface IViewerData {userId: number,
    id: number,
    title: string,
    completed: boolean
    }

export interface IEditorData {
        id: number,
        name: string,
        username: string,
        email: string,
        address: {
            street: string,
            suite: string,
            city: string,
            zipcode: string,
            geo: {
                lat: string,
                lng: string
            }
        },
        phone: string,
        website: string,
        company: {
            name: string,
            catchPhrase: string,
            bs: string
        }
    }

const useTable = () => {
    const [userType, setUserType] = useState<'viewer' | 'editor'>()
    const [page, setPage] = useState<number>(1)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [columnSort, setColumnSort] = useState<{ id: number, dir: 'asc' | 'desc' | null }>({
        id: 0,
        dir:'asc'
    })
    const [data, setData] = useState<Array<{
        id: number,
        name: string,
        detail: string
    }>>([])
    const [columns, setColumns] = useState<string[]>([])
    const [searchModalVisible, setSearchModalVisible] = useState<boolean>(false)
    const [searchKeyWord, setSearchKeyWord] = useState<string>('')
    const [searchColumnName, setSearchColumnName] = useState<string>('')
    
    function sortColumns(columnId: number) {
        if(columnSort.id === columnId) {
            setColumnSort(prev => ({
                ...prev,
                dir: prev.dir === 'asc' ? 'desc' : prev.dir === 'desc' ? null : 'asc'
            }))
        } else {
            setColumnSort({
                id: columnId,
                dir: 'asc'
            })
        }
    }

    function showSearchModal(columnId: number) {
        setSearchModalVisible(true)
        setSearchColumnName(columns[columnId])
    }

    function closeSearchModal() {
        setSearchModalVisible(false)
        setSearchKeyWord('')
    }

    function submitSearch() {
        fetchDataHandler()
        setSearchModalVisible(false)
    }

    function updateSearchKeyWord(e: ChangeEvent<HTMLInputElement>) {
        setSearchKeyWord(e.target.value)
    }

    function fetchDataHandler() {
        setData([])
        setIsLoading(true)
        if (userType === 'editor') {
            fetch(`https://jsonplaceholder.typicode.com/users?_sort=${columns[columnSort.id]}&_order=${columnSort.dir}${searchKeyWord && '&'+searchColumnName+'_like='+searchKeyWord}`)
                .then(response => response.json())
                .then(json => {
                    json.map((item: IEditorData) => { 
                        setData(prev => [...prev, {
                            id: item.id,
                            name: item.name,
                            detail: item.email
                        }])
                    })
                    setColumns([
                        'id',
                        'name',
                        'email'
                    ])
                    setIsLoading(false)
                })
        } else {
            fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_sort=${columns[columnSort.id]}&_order=${columnSort.dir}${searchKeyWord && '&'+searchColumnName+'_like='+searchKeyWord}`)
                .then(response => response.json())
                .then(json => {
                    json.map((item: IViewerData) => { 
                        setData(prev => [...prev, {
                            id: item.id,
                            name: item.title,
                            detail: item.completed.toString()
                        }])
                    })
                    setColumns([
                        'id',
                        'title',
                        'completed'
                    ])
                    setIsLoading(false)
                })
        }
    }
    
    useEffect(() => {
        const userTypeTemp = window.location.search.split('?')[1]
        if (window.location.search && ['viewer', 'editor'].includes(userTypeTemp)) { 
            setUserType(userTypeTemp as 'viewer' | 'editor')
        } else {
            setUserType('viewer')
        }
    }, [])
    
    useEffect(() => {
        if (!userType) {
            return
        }
        fetchDataHandler()
    }, [userType, page, columnSort])

    return {
        data,
        columns,
        page,
        setPage,
        isLoading,
        columnSort,
        sortColumns,
        showSearchModal,
        closeSearchModal,
        submitSearch,
        updateSearchKeyWord,
        searchModalVisible
    }
}

export default useTable