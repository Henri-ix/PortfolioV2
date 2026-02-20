export interface File {
    title : string;
    url : string;
}

export interface Folder extends File{

    title: string;
    url:string;
    options: File[]
    parent ?: string;

}


export interface experience {
    file : File,
    jobTitle: String,
    date : String
}

export interface project{
    title : string,
    imageURl: string,
    
}