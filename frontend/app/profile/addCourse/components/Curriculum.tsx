import React from 'react'

type Props = {}

export default function Curriculum() {
/*     const handlePop = ()=>{
        const pop = document.getElementById()
    } */
    return (
        <section style={{padding : '10px 40px', height:'1239px' ,width : "77%" , display : 'flex' , flexDirection :'column' ,alignItems : 'center'}}>
        <div style={{
            backgroundColor: '#F5F7FA',
            width: '73%',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }} >
            
            <div style={{
                height: '80%',
                width: '91%',
                backgroundColor: 'white',
                marginLeft: '30px',
                marginRight: '20px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <h1 style={{ fontSize: '20px' , padding : "10px 10px " }}>lecture</h1>
                <select style={{
                    width : '100',
                    height: '34px',
                    margin : '20px 10px',
                    backgroundColor: '#E9F8F3',
                    border: 'none',
                    color: 'black',
                    cursor: 'pointer',
                    
                }}>
                    <option defaultValue={"Content"}>Content</option>
                </select>
            </div>
        </div>
        <button style={{
                width : "100%",
                height: '30px',
                backgroundColor: '#E9F8F3',
                border: 'none',
                color: 'black',
                cursor: 'pointer',
                margin: '20px 10px',
            }}>Add lecture</button>
        </section>
    )
}