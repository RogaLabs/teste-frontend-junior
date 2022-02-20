import { Playlist } from './Playlist';

export class Player implements PlayerType {
  private _album: AlbumType | null;
  private _playing: boolean;
  private _playlist: PlaylistType;
  private _trackUrl: string | null;

  public _albumIndex: number;
  public _trackIndex: number;

  constructor() {
    this._album = null;
    this._playing = false;
    this._playlist = new Playlist();
    this._trackUrl = null;

    this._albumIndex = 0;
    this._trackIndex = 0;
  }

  play(): void {
    this._playing = true;

    this._album = this._playlist.albums[this.albumIndex];

    this._trackUrl =
      this.playlist.albums[this.albumIndex].tracks[this.trackIndex].url;
  }

  pause(): void {
    this._playing = false;
  }

  nextTrack(): void {
    if (this.trackIndex === 2) {
      this.albumIndex += 1;
    }

    this.trackIndex = this.trackIndex + 1;

    this._trackUrl =
      this.playlist.albums[this.albumIndex].tracks[this.trackIndex].url;
  }

  prevTrack(): void {
    if (this.trackIndex === 0) {
      this.albumIndex -= 1;
    }

    this.trackIndex = this.trackIndex - 1;

    this._trackUrl =
      this.playlist.albums[this.albumIndex].tracks[this.trackIndex].url;
  }

  public get album(): AlbumType | null {
    return this._album;
  }

  public get playing(): boolean {
    return this._playing;
  }

  public get playlist(): PlaylistType {
    return this._playlist;
  }

  public get trackUrl(): string | null {
    return this._trackUrl;
  }

  public get albumIndex(): number {
    return this._albumIndex;
  }

  public set albumIndex(value: number) {
    if (value >= 2) {
      this._albumIndex = 0;
    } else if (value < 0) {
      this._albumIndex = 1;
    } else {
      this._albumIndex = value;
    }
  }

  public get trackIndex(): number {
    return this._trackIndex;
  }

  public set trackIndex(value: number) {
    if (value >= 3) {
      this._trackIndex = 0;
    } else if (value < 0) {
      this._trackIndex = 2;
    } else {
      this._trackIndex = value;
    }
  }
}
