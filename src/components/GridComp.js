import { Accordion, Button, Grid, TextStyles } from '@cedcommerce/ounce-ui'

const GridComp = ({arr}) => {
    console.log(arr)
    const noRefCheck=()=>{
        alert()
    }
    
  return (
    <>
    <Grid
     columns={[
        {
          align: 'center',
          dataIndex: 'id',
          key: 'id',
          title: 'Id',
          width: 100
        },
        {
          align: 'center',
          dataIndex: 'title',
          key: 'title',
          title: 'Title',
          width: 100
        },
        {
            align: 'center',
            dataIndex: 'Actions',
            key: 'Actions',
            title: 'Actions',
            width: 100,
            render:()=> <Button   content="View..." halign="Equal" iconAlign="left" length="none" onClick={()=>  <Accordion
                boxed
                icon
                iconAlign="left"
                onClick={function noRefCheck(){}}
                title="Accordion Header"
              ><TextStyles content='dskdsk'/></Accordion>} type="TextButton"/>
        }
      ]}
      dataSource={arr}
    />
    </>
  )
}

export default GridComp