/********************************************************
 * Album
 ********************************************************/

interface TrackData {
  title: string;
  url: string;
}

interface AlbumData {
  artist: string;
  title: string;
  tracks: TrackData[];
}

interface Album {
  readonly artist: string;
  readonly title: string;
  readonly tracks: TrackData[];

  getUrlFromIndex(index: number): string | null;
  isFirstTrack(index: number): boolean;
  isLastTrack(index: number): boolean;
}

interface AlbumCtor {
  new (data: AlbumData): Album;
}

/********************************************************
 * Playlist
 ********************************************************/

interface Playlist {
  readonly albums: Album[];

  addAlbum(data: AlbumData);
  isFirstAlbum(index: number): boolean;
  isLastAlbum(index: number): boolean;
}

/********************************************************
 * Player
 ********************************************************/

interface Player {
  readonly album: Album | null;
  readonly playing: boolean;
  readonly playlist: Playlist;
  readonly trackUrl: string | null;

  albumIndex: number;
  trackIndex: number;

  play(): void;
  pause(): void;
  nextTrack(): void;
  prevTrack(): void;
}
