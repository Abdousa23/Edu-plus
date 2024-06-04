import React, { useEffect } from 'react'
import { useState } from 'react'
import useFormContext from '../../hooks/useFormContext';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
const PH = PhotoSizeSelectActualOutlinedIcon

type Props = {}

const AdvancedInfo = (props: Props) => {

    const {formData , updateFormData , /* selectedImage, setSelectedImage */} = useFormContext();
    /* const [selectedVideo, setSelectedVideo] = useState<File | null>(null); */
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files === null) {
            return;
        }
        const selectedFile: File = event.target.files[0];
        if (selectedFile.type.split('/')[0] === 'image') {
            /* setSelectedImage(selectedFile); */
            updateFormData({
                thumbnail: selectedFile
            })
            return (
                <div>
                    <input type="file" onChange={(e) => handleImageChange(e)} />
                    {formData.thumbnail && <img src={URL.createObjectURL(formData.thumbnail)} alt="Selected Image" />}
                </div>
            );
        } else {
            alert(('the file must be of type image'))
        }


    };
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        updateFormData({
            description: event.target.value
        })
    }
    return (
        <div>
                        
            <div className='w-[80%]'>
            <label htmlFor="imageFile">
                <div className='flex flex-col gap-6 w-[50%]'>
                    <h1 className='text-[15px] leading-5 font-medium'>Course thumbnail</h1>
                    <div className='flex flex-row content-center items-center gap-6 max-md:flex-col'>
                        <div className='w-[30% bg-[#F5F7FA] p-4 my-4'>
                <PH style={{fontSize : 80 , color : '#B7BAC7'}} className='mx-auto'/>              
                </div>
                <div className='text-[12px]'>
                <p className='text-[#6E7485]'>Upload your course Thumbnail here.</p><p className='text-black font-semibold max-md:hidden'>Important guidelines : </p>
                <p className='text-[#6E7485] max-md:hidden'>1200x800 pixels or 12:8 Ratio . Supported formats:</p>
                <p className='text-black font-semibold max-md:hidden'>.jpg, .jpeg, or .png</p>
                </div>
                    </div>
                </div>
            </label>
            <input type="file" id="imageFile" name="video" accept='image/' onChange={handleImageChange} hidden/>
            </div>
            {formData.thumbnail && (
                <div>
                    <p>Selected image: {formData.thumbnail.name}</p>
                    {/* Optionally display a preview of the image */}
                    <img src={URL.createObjectURL(formData.thumbnail)} alt="Selected Image Preview" width={"50px"} />
                </div>
            )}
            <div className='flex flex-col justify-center p-[20px] '>
                <label className='text-[15px] text-semibold my-2 '>Course description</label>
                <textarea value={formData.description} onChange={(e)=>handleDescriptionChange(e)} className='w-full p-4 border text-[14px] resize min-h-[200px] focus:outline-none focus:ring-1 focus:ring-[#abe2d0]' placeholder="Enter your course description" required rows={10} cols={15}></textarea>
            </div>
        </div>
    )
}

export default AdvancedInfo