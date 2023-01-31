import { Button, Grid, Modal, TextStyles } from '@cedcommerce/ounce-ui'
import { useState } from 'react'

const GridComp = ({arr}) => {
    var [data,setData]=useState({})
    var [open,setOpen]=useState(false)
    
    const setFunc=(e)=>{
        setData(e)
        if(open==false){
            setOpen(true)
        }
    }

  return (
  <>
  <Grid columns={[{ align: 'center',dataIndex: 'id',key: 'id',title: 'Id',width: 100},{align: 'center',dataIndex: 'title',key: 'title',title: 'Title',width: 100},{align: 'center',key: 'operation',title: 'Actions',width: 100,render:(e)=> <Button content='View More...' type='TextButton' onClick={()=>setFunc(e)}/>}]} dataSource={arr}/>
  <Modal close={()=>setOpen(false)} open={open} heading={data.title} modalSize="small">
    <><TextStyles content={`userId: ${data.userId}`} fontweight='extraBold'/>{data.body}</>
  </Modal>
  </>
  )
}

export default GridComp