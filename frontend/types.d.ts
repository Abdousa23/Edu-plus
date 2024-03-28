

type CourseType = {
    _id: number;
    title: string;
    category: string;
    description: string;
    owner : string;
    lessons: [string];
    ressources: [string];
    level: string;
    language: string;
    studentEnrolled: studentEnrolled ;
    rating: number;
    reviews: [string];
    price: number;
    liveVideo: liveVideo;
    date: string;
    location: string;
    availableSeats: number;
    isAvailable: boolean;
    imageUrl: string;
    type : string;
    category: string;
}
type CategoryType = {
    _id:mumber;
    name:string;
    courses: [string];
}
type studentEnrolled = {
    students: [string];
    studentsNumber: number;
}
type liveVideo = {
    title: string;
    url : string;
    scheduledDate: string;
}
type pfp = {
    url: string;
    publicId: string;
}
type userType ={ 
    _id: string;
    username: string;
    email: string;
    roles: [number];
    pfp: pfp;
    bio: string;
    city: string;
    country: string;
    phonenumber: string;
    firstname: string;
    lastname: string;
    createdAt: string;
    updatedAt: string;
}
type LoginProps = {
    email: string;
    password: string;
}
type ErrorProps = {
    errmessage: string,
}
type SuccessProps ={
    successMessage:string
}


type CustomButtonProps= {
    title:string;
    containerStyle?:string
    handleClick?:MouseEventHandler<HTMLButtonElement>
    btnType?:"button" | "submit"
}
type course = {
    course?: CourseType
  }

type ressource = {
    title : string , 
    ressourceUrl : string,
    size : string
    course : string
}