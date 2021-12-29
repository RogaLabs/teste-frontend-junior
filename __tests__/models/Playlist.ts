import albumData from '@/albums.json';
import { TunesPlaylist } from '~/models/Playlist';

describe('Playlist', function () {
  let playlist: TunesPlaylist;

  beforeEach(function () {
    playlist = new TunesPlaylist();
    playlist.addAlbum(albumData[0]);
  });

  it('Initialize correctly', function () {
    expect(playlist.albums.length).toEqual(1);
  });

  it('Identifies first album', function () {
    expect(playlist.isFirstAlbum(0)).toBeTruthy();
  });

  it('Rejects non-first album', function () {
    expect(playlist.isFirstAlbum(1)).toBeFalsy();
  });

  it('Identifies last album', function () {
    playlist.addAlbum(albumData[1]);
    expect(playlist.isLastAlbum(1)).toBeTruthy();
  });

  it('Rejects non-last album', function () {
    playlist.addAlbum(albumData[1]);
    expect(playlist.isLastAlbum(0)).toBeFalsy();
  });
});
