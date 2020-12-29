export default interface Post {
    avatar: string;
    name: string;
    subtitle: string;
    mainImage: string;
    subject: string;
}

export interface apiPost {
    owner: Owner;
    publishDate: Date;
    likes: number;
    image: string;
    text: string;
}

export interface Owner {
    firstName: string;
    lastName: string;
}