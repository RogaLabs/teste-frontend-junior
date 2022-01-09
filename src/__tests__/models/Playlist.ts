import albums from '~/mocks/albums.json';
import { Playlist } from '~/models/Playlist';

describe('Playlist', function () {
  let playlist: PlaylistType;

  beforeEach(function () {
    playlist = new Playlist();
    playlist.addAlbum(albums[0]);
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
    playlist.addAlbum(albums[1]);
    expect(playlist.isLastAlbum(1)).toBeTruthy();
  });

  it('Rejects non-last album', function () {
    playlist.addAlbum(albums[1]);
    expect(playlist.isLastAlbum(0)).toBeFalsy();
  });
});
