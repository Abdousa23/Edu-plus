import { use } from "react";
import useFormContext from "../hooks/useFormContext";

function reOrder(arr: any[]) {
    arr.sort((a: any, b: any) => a.id - b.id);
    for (let i = 0; i < arr.length; i++) {
        arr[i].id = i;
    }
}
const handleTitle = (id: number, e: React.ChangeEvent<HTMLInputElement> , lessonContent : any, setLessonContent : any , formData:any , setFormData : any) => {
    console.log(id)
    lessonContent[id].title = e.target.value;
    setLessonContent([...lessonContent]);
    setFormData({ ...formData, lesson: [...lessonContent] });
};
const handleAddLesson = (lessonContent : any, setLessonContent : any , formData:any , setFormData : any) => {
    setLessonContent([...lessonContent, { id: lessonContent.length }]);
    reOrder(lessonContent);
    setFormData({ ...formData, lesson: [...lessonContent] });
    /* console.log(lessonContent) */
};
const handleDeleteLesson = (index: number , lessonContent : any, setLessonContent : any , formData:any , setFormData : any) => {
    setLessonContent(
        lessonContent.filter((item: any, i: number) => i !== index)
    );
    /*         lessonContent.sort((a: any, b: any) => a.id - b.id)
                for (let i = 0; i < lessonContent.length; i++) {
                    lessonContent[i].id = i 
                } */
    reOrder(lessonContent);
    setFormData({ ...formData, lesson: [...lessonContent] });
};
const handleVideoChange = (id: number, e: React.ChangeEvent<HTMLInputElement> , lessonContent:any , setLessonContent  : any , formData:any , setFormData : any) => {
console.log('the id is ', id)

if (e.target.files === null) {
    return
}
const selectedFile = e.target.files[0];
if (selectedFile.type.split("/")[0] === "video") {
    // Create a new copy of the lessonContent state
    const newLessonContent = [...lessonContent];
    // Update the copy with the new videoUrl, pop and open values
    newLessonContent[id] = {
        ...newLessonContent[id],
        videoUrl: selectedFile,
        pop: true,
        open: false,
    };
    // Set the state with the new copy
    setLessonContent(newLessonContent);
    // Update formData state
    setFormData((prevFormData: any) => {
        const newFormData = { ...prevFormData };
        // Check if formData.lesson is an array and it has an element at the index id
        if (Array.isArray(newFormData.lesson) && newFormData.lesson[id]) {
            newFormData.lesson[id].videoUrl = selectedFile;
            newFormData[`lesson${id}`] = selectedFile
            setFormData(newFormData)
            console.log(newFormData)
        } else {
            // If formData.lesson[id] is undefined, initialize it with an empty object and then set the videoUrl property
            newFormData.lesson[id] = {};
            newFormData.lesson[id].videoUrl = selectedFile;
        }
        return newFormData;
    });
}
};
const handleClose = (id: number , lessonContent : any, setLessonContent : any , formData:any , setFormData : any) => {

    lessonContent[id].videoUrl = ''
    lessonContent[id].pop = false
    setLessonContent([...lessonContent])
    setFormData({ ...formData, lesson: [...lessonContent] });

}
const handleLessonDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>, id: number , lessonContent : any , setLessonContent : any , formData:any , setFormData : any) => {
    lessonContent[id].description = e.target.value;
    setLessonContent([...lessonContent]);
    setFormData({ ...formData, lesson: [...lessonContent] });
}
const handlePop = (id: number , lessonContent : any, setLessonContent : any , formData:any , setFormData : any) => {
    if (lessonContent[id].videoUrl) { lessonContent[id].pop = true, setLessonContent([...lessonContent]) } else { lessonContent[id].open = true, setLessonContent([...lessonContent]) }
}



export {reOrder , handleAddLesson , handleClose , handleDeleteLesson , handleLessonDescriptionChange , handlePop , handleTitle , handleVideoChange } 