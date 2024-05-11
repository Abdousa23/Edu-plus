// 'use client'

// import { createContext , useState , ReactNode} from "react";
// import useFetchPrivate from "@/app/_hooks/useFetchPrivate";

// type lessonContextProps = {
//   children: ReactNode,
// }

// export const lessonContext = createContext<lessonContextType>({
//   lessons: [],
//   setLessons: () => {},
//   getCoursLesssons:  () => Promise.resolve(),
// });

// export const lessonProvider = ({ children }:lessonContextProps) => {
//   const [lessons, setLessons] = useState<LessonType[]>([])
//   const fetchPrivate = useFetchPrivate()

//   const getCoursLesssons = async () => {
//     try {
//         const response = await fetchPrivate(`${process.env.NEXT_PUBLIC_API_URL}/watchCourse`,{
//             method: 'GET'
        
//         })
//         const data = await response?.json()
//         if(!response?.ok){
//             throw new Error(data.message)
//         }
//         setLessons(data?.Lessons)
//     } catch (error) {
//         console.log(error)
//     }
// }

// return <lessonContext.Provider value={{lessons,setLessons,getCoursLesssons}}>
// {children}
// </lessonContext.Provider>;

// }