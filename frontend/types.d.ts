

type CourseType = {
    map(arg0: (course: CourseType) => void): unknown;
    _id: string;
    title: string;
    category: string;
    description: string;
    owner :  userType ;
    lessons: [LessonType];
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
    priceId: string;
    category: string;
}

type LessonType ={
    _id:String
    title: String,
    description: String,
    videoUrl: String,
    course : [String],
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
    map(arg0: (course: CourseType) => void): unknown;
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
    courses:[string];
    purshasedCourses: [string];
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

type review = {
    user?: any;
    username: string,
    rating:number,
    reviewText : string,
    courseId : string,
    courseOwner:string
}

type CartContextType = {
    cartCourses: CourseType[]; // replace CourseType with the actual type of your courses
    setCartCourses: (courses: CourseType[]) => void;
    getCartCourses:  () => Promise<void>;
    removeCourseFromCart: (course: CourseType) => void; // replace string with the type of your course id if it's not a string
    purchaseCourse: (course: CourseType) => void; // replace string with the type of your course id if it's not a string
 };

  type lessonContextType = {
    lessons: LessonType[]; 
    setLessons: (lessons: [string]) => void;
    getCoursLesssons:  () => Promise<void>;
  };





type selectedChat = {
    _id:string;
    name:string;
    pic:string;
  }







type ChatType = {
    _id: string;
    name:string
    members:? [string];
    messages:? [string];
    pic: string;
    createdAt:? string;
    updatedAt:? string;
}
type chatProps = {
    _id: string;
    name: string;
    pic: string;

}


type MessageType = {
    _id: string;
    chat: string;
    sender: string;
    message: string;
    senderphp: string;
    createdAt: string;
    updatedAt: string;
}