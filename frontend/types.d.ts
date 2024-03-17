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
    category: string;
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