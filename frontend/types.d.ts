type CourseType = {
    _id: number;
    title: string;
    category: string;
    description: string;
    owner : string;
    lessons: [number];
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
    availableSears: number;
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