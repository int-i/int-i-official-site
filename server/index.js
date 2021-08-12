import express from "express";
// 추가해야 할 모듈 및 미들웨어 : path, cors, cookie-parser, config, mongoose, Routers, routes
const app = express();

// 여기서 미들웨어 세팅
// app.use(cors()); // CORS 도입 후 주석 해제

// 여기서 라우팅 설정(dev)
app.get('/', (req,res) => {
    res.send('First Routing');
});

if(process.env.NODE_ENV === "production") {
    // 빌드 배포 환경에서의 라우팅 설정

    app.use(express.static("client/build"));

    app.get("*", (req, res) => { 
        // res.sendFile()
     })
}

// 서버 리스닝

const port = process.env.PORT || 5000

function HandleListening() {
    console.log(`✅ http://localhost:${port} 에서 서버 리스닝에 성공했습니다.`)
}

app.listen(port, HandleListening);