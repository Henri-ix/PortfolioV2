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