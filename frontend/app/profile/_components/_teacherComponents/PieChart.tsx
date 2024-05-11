import { PieChart } from '@mui/x-charts/PieChart';
import React from 'react'
type Props = {
    value: number
    value1: number
}


const PiesChart = ({ value, value1 }: Props) => {
    return (
        <div className='mx-auto my-auto z-0'>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: value, label: 'online' },
                            { id: 1, value: value1, label: 'in-person' },

                        ],
                    },
                ]}
                width={400}
                height={200}
            />
        </div>
    )
}
export default PiesChart