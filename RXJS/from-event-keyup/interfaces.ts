export interface imageLInk {
    smallThumbnail: string
    thumbnail : string
}
export interface  volumeInfo {
    title : string
    description : string
    authors? : string[]
    categories?: string[]
    imageLinks : imageLInk
}
export interface book {
    id: string
    volumeInfo : volumeInfo
}
export interface books {
    items : book[]
    totalItems : number
    kind : string

}
export interface BookInfo {
    title: string
    description?: string
    authors?: string
    categories: string
    thumbnail: string
}
    