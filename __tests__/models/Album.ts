import albumData from '@/albums.json';
import { TunesAlbum } from '~/models/Album';

describe('Album', function () {
  let album: Album;

  beforeEach(function () {
    album = new TunesAlbum(albumData[0]);
  });

  it('Initialize correctly', function () {
    expect(album.tracks.length).toEqual(2);
  });

  describe('First track', function () {
    it('Identifies first track', function () {
      expect(album.isFirstTrack(0)).toBeTruthy();
    });

    it('Rejects non-first track', function () {
      expect(album.isFirstTrack(10)).toBeFalsy();
    });
  });

  describe('Last track', function () {
    it('Identifies last track', function () {
      expect(album.isLastTrack(1)).toBeTruthy();
    });

    it('Rejects non-last track', function () {
      expect(album.isLastTrack(0)).toBeFalsy();
    });
  });

  describe('Get url from index', function () {
    it('Returns URL for existing track', function () {
      expect(album.getUrlFromIndex(0)).toEqual(albumData[0].tracks[0].url);
    });

    it('Returns null for non-existing track', function () {
      expect(album.getUrlFromIndex(5)).toBe(null);
    });
  });
});
