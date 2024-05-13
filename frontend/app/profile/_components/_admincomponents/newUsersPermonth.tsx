import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const UserGraph: React.FC<{ userData: Record<string, { type1: number; type2: number }> }> = ({ userData }) => {
    useEffect(() => {
        const labels = Object.keys(userData);
        const type1Data = labels.map(month => userData[month].type1);
        const type2Data = labels.map(month => userData[month].type2);

        const ctx = document.getElementById('userGraph') as HTMLCanvasElement;
        let chartInstance: Chart | null = null;

        if (ctx) {
            
            
            chartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Students',
                            data: type1Data,
                            backgroundColor: '#4AB58E', 
                            borderColor: '',
                            borderWidth: 0
                        },
                        {
                            label: 'teachers',
                            data: type2Data,
                            backgroundColor: '#FFCF00', 
                            borderColor: '',
                            borderWidth: 0
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                display: false
                            }
                            
                        },
                        x:{
                          grid: {
                            display: false
                          }
                        }
                    }
                }
            });
        }

        return () => {
            if (chartInstance) {
                chartInstance.destroy(); // Cleanup on component unmount
            }
        };
    }, [userData]);

    return <canvas id="userGraph" className='m-5 bg-white ' />;
};

export default UserGraph;
