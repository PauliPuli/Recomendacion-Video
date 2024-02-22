//clases//
class Multimedia {
  constructor(url) {
    this._url = url;
  }
  get url() {
    return this._url;
  }
  set url(nueva_url) {
    this._url = nueva_url;
  }

  setInicio() {
    return `Este método es para realizar un cambio en la URL del video`;
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }
  get id(){
    return this._id
  };
  set id(nuevo_id){
    this._id=nuevo_id;
  }

  setInicio(tiempo) {
    this.id.setAtribute("src", `${this.url}?start=${tiempo}`);
  }
  playMultimedia() {
    mostrarVideo.videoPublico(this._url,this._id);   //Deja esta parte para después de hacer la función privada//
  }
}
//función privada y funció pública
let mostrarVideo = (() => {
  let videoPrivado = (url, id) => {
    let element = document.getElementById(id);
    element.setAttribute("src", url);

  };
  return {
    videoPublico: (url, id) => {
      videoPrivado(url, id);
    },
  };
})();


///instanciar
let musica= new Reproductor('https://www.youtube.com/embed/Lv_oZaL5nSI?si=FOpUqvKeQvrgRh1h','musica');
let peliculas= new Reproductor('https://www.youtube.com/embed/l9tP4M8URhQ?si=bljmBLu0MkgcsnTl','peliculas');
let series= new Reproductor('https://www.youtube.com/embed/Gb0nQe8eLVw?si=CZcE_fq0co8IUlqX','series')

//metodos que modifican la url
musica.playMultimedia()
peliculas.playMultimedia()
series.playMultimedia()

musica.setInicio(1);
series.setInicio(2);
peliculas.setInicio(1)