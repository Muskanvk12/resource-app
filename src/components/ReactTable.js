import {useTable} from 'react-table'
import { useState, useEffect, useMemo } from 'react'
import { Center, Spinner, Table,Thead, Tbody, Th, Tr, Td , Checkbox} from '@chakra-ui/react'

import axios from 'axios'


let url = "https://media-content.ccbp.in/website/react-assignment/resources.json"

const tableColumn = [
  {
    header: "",
    accessor : "id",
    Cell:({row})=><Checkbox value={row.values.id}></Checkbox>
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

  const [items, setitems] = useState([]);

  const columns = useMemo(()=>tableColumn,[])
  const datas = useMemo(()=>items,[items])

  const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
     useTable({
    columns: columns,
    data: datas,
  })

  useEffect(()=>{
    const callApi = async()=>{
      try{
        const datas = await axios.get(url)
        setitems(datas.data)
      }
      catch(err){
        console.log(err)
      }
    }
    callApi()
  },[])
  


  if (items.length === 0) {
    return <Center><Spinner /></Center>
  }

  return (
    <div className='ReactTable'>
      <Table  variant='simple' borderColor={"#D7DFE9"} backgroundColor={"white"} borderRadius={"10px"} {...getTableProps}>
        <Thead>
          {
            headerGroups.map((headerGroup)=>{
              return(<Tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map((column)=>{
                    return(<Th {...column.getHeaderGroupProps}>
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
            rows.map((row, i)=>{
              prepareRow(row)
              return(
                <Tr borderTop={"2px solid #D7DFE9"} {...rows.getRowsProps}>
                  {row.cells.map((cell)=>{
                    return(<Td {...cell.getCellProps}>
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
  )
}
