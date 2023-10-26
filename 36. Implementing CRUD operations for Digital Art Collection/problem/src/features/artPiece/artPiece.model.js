export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  // TODO: Implement your ArtPiece model methods here
  static albumDB() {
    return albums;
  } 

  static add({ title, artist, year, imageUrl }) {
    const artPiece = new ArtPiece(
      albums.length + 1,
      title,
      artist,
      year,
      imageUrl
    );
    albums.push(artPiece);
    return artPiece;
  }

  static getAll(query) {
    let filteredArtPieces = [...albums];

    if (query.year) {
      filteredArtPieces = filteredArtPieces.filter(
        (artPiece) => artPiece.year === parseInt(query.year)
      );
    }

    if (query.artist) {
      const artistName = query.artist.toLowerCase();
      filteredArtPieces = filteredArtPieces.filter((artPiece) =>
        artPiece.artist.toLowerCase().includes(artistName)
      );
    }

    return filteredArtPieces;
  }

  static get(id) {
    const artPiece = albums.find(i => i.id === id);
    return artPiece;
  }

  static update(id, artPiece) {
    const index = albums.findIndex(i => i.id === id);
    if(index)
      albums(index) = artPiece;
  }

  // static update(id, bodyData) {
  //   const artPiece = get(id);
  //   if (artPiece) {
  //     Object.assign(artPiece, bodyData);
  //   }
  //   return artPiece;
  // }

  static delete(id) {
    const index = albums.findIndex(i => i.id === id);
    if(index !== -1)
      albums.splice(index, 1);
  }

}

var albums = [];
