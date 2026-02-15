interface File {
    title : string;
    url : string;
}

interface Folder extends File{

    title: string;
    url:string;
    options: File[]
    parent : string;

}