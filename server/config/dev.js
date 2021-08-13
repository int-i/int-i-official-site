const devkey = {
    mongoURI: "mongodb+srv://testuser:test1234@intidb.xs94h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    sessionSecret: "intigod",
    hashSecret: 12,
    
    githubClientId: "c95d9d523f6b3bbbb7c6",
    githubSecret: "52e0606c231bb1f58aecd038b6f2c445efefd2eb",
    githubCallbackUri: "http://localhost:5000/api/auth/github/callback",
    
    kakaoClientId: "f4901feed6bb4c33df7d2e3ebd0b44c2",
    kakaoSecret: "",
    kakaoCallbackUri: "http://localhost:5000/api/auth/kakao/callback",
    
    googleClientId: "296099078687-dora4l977b9u8kddm319io6hjqr3tkq9.apps.googleusercontent.com",
    googleSecret: "kUib5bYVgxN40Defv1tcKC3x",
    googleCallbackUri: "http://localhost:5000/api/auth/google/callback"
}
export default devkey;