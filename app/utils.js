/// <reference path="../typings/node_modules/@types/howler/howler.d.ts" />
var RacingGame;
(function (RacingGame) {
    class Sounds {
        constructor() {
            this.background = new Howl({
                src: ['media/audio/musicfox_demo_MF-4131.mp3']
            });
            this.start = new Howl({
                src: ['media/audio/Car-Engine-Starting-A1.mp3']
            });
            this.changeDirection = new Howl({
                src: ['media/audio/Cool_UI_Button.wav']
            });
            this.finish = new Howl({
                src: ['media/audio/Congrats_4.wav']
            });
            this.collect = new Howl({
                src: ['media/audio/5_Wickets.wav']
            });
            this.error = new Howl({
                src: ['media/audio/Health_Alert_3.wav']
            });
        }
    }
    RacingGame.Sounds = Sounds;
})(RacingGame || (RacingGame = {}));
//# sourceMappingURL=utils.js.map