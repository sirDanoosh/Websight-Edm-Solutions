import React from 'react'
import useTable from './useTable'

import './index.css'

const Table = () => {
    const {data, isLoading, setPage, columns, page, columnSort, sortColumns, closeSearchModal,searchModalVisible,showSearchModal,submitSearch,updateSearchKeyWord} = useTable()
    return <div className='table-view'>
        <table>
            <thead>
                <tr>
                    {columns.map((column, index) => <th key={index} onClick={() => sortColumns(index)}>
                        <span onClick={(e) => {
                            e.stopPropagation()
                            e.preventDefault()
                            showSearchModal(index)
                        }}>
                            <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" className='search-icon' alt='search-icon' />
                        </span>
                        <span>{column}</span>
                        {columnSort.id === index && <span>
                            <img src="data:image/png;base64,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" className={`direction-icon ${columnSort.dir === 'asc' ? 'down' : columnSort.dir === 'desc' ? 'up' : ''}`} alt='sort-icon' />
                        </span>}
                    </th>)}
                </tr>
            </thead>
            <tbody>
                {isLoading ?
                    <tr>
                        <td colSpan={columns.length}>Loading...</td>
                    </tr>
                    : data!.map((row, index) => <tr key={index}>
                        <td>
                            {row.id}
                        </td>
                        <td title={row.name}>
                            {row.name}
                        </td>
                        <td title={row.detail}>
                            {row.detail}
                        </td>
                    </tr>)}
                </tbody>
        </table>
        <div className='pagination'></div>
        {searchModalVisible && <div className='search-modal'>
            <input name="like" id="like" placeholder={`search keyword ...`} onChange={updateSearchKeyWord} />
            <div className='search-modal__btn-wrapper'>
                <button className='search-btn modal-btn' onClick={submitSearch}>Search</button>
                <button className='cancel-btn modal-btn' onClick={closeSearchModal}>Cancel</button>
            </div>
        </div>}
    </div>
}

export default Table