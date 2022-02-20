import { Album } from './Album';

export class Playlist implements PlaylistType {
  private _albums: AlbumType[] = [];

  addAlbum(data: AlbumData) {
    this._albums.push(new Album(data));
  }

  isFirstAlbum(index: number): boolean {
    return index === 0;
  }

  isLastAlbum(index: number): boolean {
    return index === this._albums.length - 1;
  }

  public get albums(): AlbumType[] {
    return this._albums;
  }
}
