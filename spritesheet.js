const AVATAR_ANIMS = {
    down_idle: [0], down: [1, 2, 3, 4], down_jump: [28],
    left_idle: [5], left: [6, 7, 8, 9], left_jump: [29],
    right_idle: [10], right: [11, 12, 13, 14], right_jump: [30],
    up_idle: [15], up: [16, 17, 18, 19], up_jump: [31],
    dance: [20, 21, 22, 23, 24, 25, 26, 27]
};

App.loadSpritesheet("https://2894115210-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FiW553XSGeKCAPpImxXi3%2Fuploads%2FOXjJew5z7WwpWjhtbm5G%2Fblueman.png?alt=media&token=50245444-f57c-4a96-b228-31458413a2a4", 48, 64, AVATAR_ANIMS, 8);