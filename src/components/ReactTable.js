import { useTable, useSortBy, usePagination } from 'react-table'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import { Center, Spinner, Table, Thead, Tbody, Th, Tr, Td, Checkbox, Button, Icon } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import axios from 'axios'


let url = "https://media-content.ccbp.in/website/react-assignment/resources.json"

const tableColumn = [
  {
    header: "",
    accessor: "id",
    Cell: ({ row }) => <Checkbox value={row.values.id}></Checkbox>
  },
  {
    header: "TITLE",
    accessor: "title"
  },
  {
    header: "DESCRIPTION",
    accessor: "description"
  },
  {
    header: "LINK",
    accessor: "link"
  }
]

export default function ReactTable() {

  let navigate = useNavigate()

  function toAddItemPage() {
    navigate('/additem')
  }

  const [items, setitems] = useState([]);

  const columns = useMemo(() => tableColumn, [])
  const datas = useMemo(() => items, [items])

  const {
    getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canNextPage, canPreviousPage,setPageSize, state, prepareRow } =
    useTable({
      columns: columns,
      data: datas,
    }, useSortBy, usePagination)

  const { pageIndex, pageSize } = state

  useEffect(() => {
    const callApi = async () => {
      try {
        const datas = await axios.get(url)
        setitems(datas.data)
      }
      catch (err) {
        console.log(err)
      }
    }
    callApi()
    setPageSize(6)
  }, [])



  if (items.length === 0) {
    return <Center><Spinner /></Center>
  }

  return (
    <div className='ReactTable'>
      <div className="tableWrapper">
        <Table variant='simple' width={"100%"} backgroundColor={"white"} borderRadius={"10px"} {...getTableProps}>
          <Thead>
            {
              headerGroups.map((headerGroup) => {
                return (<Tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    headerGroup.headers.map((column) => {
                      return (<Th {...column.getHeaderGroupProps}>
                        {column.render("header")}
                      </Th>)
                    })
                  }
                </Tr>)
              })
            }
          </Thead>
          <Tbody {...getTableBodyProps}>
            {
              page.map((row, i) => {
                prepareRow(row)
                return (
                  <Tr borderTop={"2px solid #D7DFE9"} {...row.getRowsProps}>
                    {row.cells.map((cell) => {
                      return (<Td {...cell.getCellProps}>
                        {cell.render("Cell")}
                      </Td>)
                    })}
                  </Tr>
                )
              })
            }
          </Tbody>
        </Table>
      </div>
      <div className="resourceBottom">
        <div className="resourceBottomLeft">
          <div className="bottomBtns addItemBtn" onClick={toAddItemPage}>ADD ITEM</div>
          <div className="bottomBtns deleteBtn">DELETE</div>
        </div>
        <div className="resourceBottomRight"><Button height="1.5rem" width="1.5rem" size="xs" backgroundColor={"#FFFFFF"} border={"1px solid #D7DDE9"} borderRadius={"2px"} onClick={() => { previousPage() }} disabled={!canPreviousPage}><Icon as={ChevronLeftIcon} w={18} h={18} color="#171F46" /></Button>
         2 3 4 5 6 7 8 9 
         <Button height="1.5rem" width="1.5rem" size="xs" backgroundColor={"#FFFFFF"} border={"1px solid #D7DDE9"} borderRadius={"2px"} onClick={() => { nextPage() }} disabled={!canNextPage}><Icon as={ChevronRightIcon} w={18} h={18} color="#171F46" /></Button></div>
      </div>
    </div>
  )
}
