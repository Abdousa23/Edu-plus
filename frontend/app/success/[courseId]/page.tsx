import SuccessComponent from "../_component/SuccessComponent";
type Params = {
    params: {
        courseId: string
    }
}
export default function page({ params: { courseId } }: Params) {
    
    return (
        <SuccessComponent params={{courseId}} />    
    )
}

export async function generateStaticParams() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home/`)
    const data = await response?.json();
    if(response?.status === 404){
        throw new Error('Not Found');
    }
    return data.map((course:CourseType) => {
        return {
            params: {
                courseId: course._id
            }
        }
    })
    
  }