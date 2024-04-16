
import React, { useEffect } from 'react'
import { useState } from 'react'
import useFormContext from '../hooks/useFormContext';

interface ImageProps {
    selectedImage: File | null;
}



export default function AdvancedInformation() {
    const {formData , updateFormData , /* selectedImage, setSelectedImage */} = useFormContext();
    /* const [selectedVideo, setSelectedVideo] = useState<File | null>(null); */
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files === null) {
            return;
        }
        const selectedFile: File = event.target.files[0];
        console.log(selectedFile.type.split('/')[0])
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
            console.log(('the file must be of type image'))
        }


    };
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        updateFormData({
            description: event.target.value
        })
    }
    return (
        <div>
            <label htmlFor="imageFile">Select Image:</label>
            <input type="file" id="imageFile" name="imageFile" accept='image/' onChange={handleImageChange} />
            {/* <label htmlFor='videoFile'>Select Video:</label>
            <input type='file' id='videoFile' name='videoFile' accept='video/'  onChange={handleImageChange}/> */}
            {formData.thumbnail && (
                <div>
                    <p>Selected image: {formData.thumbnail.name}</p>
                    {/* Optionally display a preview of the image */}
                    <img src={URL.createObjectURL(formData.thumbnail)} alt="Selected Image Preview" width={"50px"} />
                </div>
            )}
            {/* {selectedVideo && (
                <div>
                    <p>Selected video: {selectedVideo.name}</p>
                    
                    <video src={URL.createObjectURL(selectedVideo)} width={"500px"}  controls/> 
                </div>
            )} */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px', backgroundColor: '#f2f2f2', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
                <label style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>Course description</label>
                <textarea value={formData.description} onChange={(e)=>handleDescriptionChange(e)} style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    fontSize: '16px',
                    resize: 'vertical',
                    minHeight: '200px'
                }} placeholder="Enter course description" required rows={10} cols={15}></textarea>
            </div>
        </div >
    );
    ;

}