interface Document {
  adoptedStyleSheets: any;
}

/********************************************************
 * Album
 ********************************************************/

interface TrackData {
  title: string;
  url: string;
}

interface AlbumData {
  artist: string;
  cover: string;
  title: string;
  tracks: TrackData[];
}

interface AlbumType {
  readonly artist: string;
  readonly cover: string;
  readonly title: string;
  readonly tracks: TrackData[];

  getUrlFromIndex(index: number): string | null;
  isFirstTrack(index: number): boolean;
  isLastTrack(index: number): boolean;
}

interface AlbumCtor {
  new (data: AlbumData): AlbumType;
}

/********************************************************
 * Playlist
 ********************************************************/

interface PlaylistType {
  readonly albums: AlbumType[];

  addAlbum(data: AlbumData);
  isFirstAlbum(index: number): boolean;
  isLastAlbum(index: number): boolean;
}

/********************************************************
 * Player
 ********************************************************/

interface PlayerType {
  readonly album: AlbumType | null;
  readonly playing: boolean;
  readonly playlist: PlaylistType;
  readonly trackUrl: string | null;

  albumIndex: number;
  trackIndex: number;

  play(): void;
  pause(): void;
  nextTrack(): void;
  prevTrack(): void;
}
