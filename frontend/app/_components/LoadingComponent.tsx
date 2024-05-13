import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import GlobalModal from './GolbalModal';


type Props = {

}

const LoadingComponent = (props: Props) => {
    return (
        <div>
            <GlobalModal>
                <div className='flex flex-col gap-8 content-center items-center '>
                    <CircularProgress color="success" />
                    <svg width="94" height="74" viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.8042 25.042L21.9831 31.9982V10.118L21.7301 9.48562L22.236 6.32375L23.3743 5.62176L38.8042 0V25.042Z" fill="#00977D" />
                        <path d="M5.66775 25.042L21.983 31.9982V10.7504L22.236 10.118V6.32375L21.1869 5.65427L5.66775 0V25.042Z" fill="#00977D" />
                        <path d="M2 6.70312V31.9981H14.9004" stroke="#00977D" stroke-width="2.5295" stroke-linecap="round" />
                        <path d="M42.472 6.70312V31.9981H29.5716" stroke="#00977D" stroke-width="2.5295" stroke-linecap="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.236 8.47375L21.1845 7.67848V11.9882H16.7633L22.2649 22.1524L27.7664 11.9882H23.2478V7.6543L22.236 8.47375Z" fill="white" />
                    </svg>

                    <h1 className="text-2xl font-bold text-center">Loading...</h1>

                </div>
            </GlobalModal>
        </div>
    )
}

export default LoadingComponent