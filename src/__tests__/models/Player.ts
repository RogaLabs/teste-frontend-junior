import albums from '~/mocks/albums.json';
import { Player } from '~/models/Player';

describe('Player', function () {
  let player: PlayerType;

  describe('With no items', function () {
    beforeEach(function () {
      player = new Player();
    });

    it('Starts with album 0', function () {
      expect(player.albumIndex).toEqual(0);
    });

    it('Starts with track 0', function () {
      expect(player.trackIndex).toEqual(0);
    });
  });

  describe('With added album', function () {
    beforeEach(function () {
      player = new Player();
      player.playlist.addAlbum(albums[0]);
    });

    it('Is paused', function () {
      expect(!player.playing).toBeTruthy();
    });

    describe('While playing', function () {
      beforeEach(function () {
        player.play();
      });

      it('Is playing', function () {
        expect(player.playing).toBeTruthy();
      });

      it('Has a current album', function () {
        expect(player.album?.title).toEqual(albums[0].title);
      });

      it('Has a current track URL', function () {
        expect(player.trackUrl).toEqual(albums[0].tracks[0].url);
      });

      it('Pauses', function () {
        player.pause();
        expect(player.playing).toBeFalsy();
      });

      describe('Updating indexes', function () {
        beforeEach(function () {
          player.playlist.addAlbum(albums[1]);
        });

        it('Should update with a valid index', function () {
          player.albumIndex = 1;
          player.trackIndex = 0;

          expect(player.albumIndex).toEqual(1);
          expect(player.trackIndex).toEqual(0);
        });

        it('Should prevent invalid indexes', function () {
          player.albumIndex = 10;
          player.trackIndex = 10;

          expect(player.albumIndex).toEqual(0);
          expect(player.trackIndex).toEqual(0);
        });
      });

      describe('Next track', function () {
        beforeEach(function () {
          player.playlist.addAlbum(albums[1]);
        });

        it('Increments within an album', function () {
          player.nextTrack();

          expect(player.albumIndex).toEqual(0);
          expect(player.trackIndex).toEqual(1);
        });

        it('Goes to the next album', function () {
          player.trackIndex = 2;
          player.nextTrack();

          expect(player.albumIndex).toEqual(1);
          expect(player.trackIndex).toEqual(0);
        });

        it('Goes to the first album if at end', function () {
          player.albumIndex = 1;
          player.trackIndex = 2;
          player.nextTrack();

          expect(player.albumIndex).toEqual(0);
          expect(player.trackIndex).toEqual(0);
        });
      });

      describe('Previous track', function () {
        beforeEach(function () {
          player.playlist.addAlbum(albums[1]);
        });

        it('Goes to the previous track in an album', function () {
          player.trackIndex = 1;
          player.prevTrack();

          expect(player.albumIndex).toEqual(0);
          expect(player.trackIndex).toEqual(0);
        });

        it('Goes to the last track of previous album', function () {
          player.albumIndex = 1;
          player.prevTrack();

          expect(player.albumIndex).toEqual(0);
          expect(player.trackIndex).toEqual(2);
        });

        it('Wraps around if at the very beginning', function () {
          player.prevTrack();

          expect(player.albumIndex).toEqual(1);
          expect(player.trackIndex).toEqual(2);
        });
      });
    });
  });
});
