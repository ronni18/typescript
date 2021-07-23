export{};

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

//super clase

abstract class Item { //se declara clase abstracta para que no se creen objetos con ella

    //propiedades

    protected _id: number;
    protected _title: string;

    public  constructor(id: number, title: string) {
        this._id = id;
        this._title = title;        
    }

    //accediendo a las variables por medio de get
    //dando valores a las variables por medio del metodo set

    get id() {
        return this._id;
    }
    
    set id(id : number) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    
    set title(title : string) {
        this._title = title;
    }
    
    
}


 class Picture extends Item{
     public static photoOrientation = PhotoOrientation;

    //propiedades

   private _orientation: PhotoOrientation;
  

   public constructor(id:number,
                title:string,
                orientation: PhotoOrientation) {
                    super(id,title); // constructor de super clase
                    this._orientation =orientation;
                
    }

    //comportamiento

   public toString (){
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this._orientation}]`

    }

    get orientation() {
        return this._orientation;
    }
    
    public set orientation(orientation : PhotoOrientation) {
        this._orientation = orientation;
    }
    
}

class Album extends Item{

    private pictures: Picture[];


   public constructor(  id: number, title: string ) {
       super(id,title); // constructor de super clase
        this.pictures = [];
        
    }

  public addPicture( picture: Picture) {
        this.pictures.push( picture );
    }
    
}

const album: Album = new Album(1, 'local picture');
const picture: Picture = new Picture(1, 'roni personal', PhotoOrientation.Square);
album.addPicture( picture );
console.log(album);


//accediendo a los miembros publicos

console.log('picture.id ' , picture.id) //get id()
picture.id = 100; // private , set id(100)
picture.title = 'nuevo titulo'; //private 
album.title = 'nuevo album'; //private
console.log(album);

//const item = new Item(1, 'new title'); //no se puede crear un objeto debido a que es una clase abstracta
//console.log('new item',item);

console.log('photoOrientation : ',Picture.photoOrientation.Portrait);