import News from "../models/News";

// 글 등록(인트아이 회원 권한)
export const postWriteNews = async(req, res) => {
    const user = req.user;
    const {title, contents, createdAt} = req.body;

    if(!title || !contents){ // title나 contents가 비었을 때
        return res.status(400).json({success : false, message : "title and contents both are required"});
    }

    try{
        const news = await News.create({
            title,
            contents,
            author : user.nickname, // user의 nickname으로 author 값 지정 
            createdAt
        });
        res.locals.post = news;
        res.locals.schema = News;
        res.locals.schemaName = "News";
        // 클라이언트로 변수 전송
        return res.status(200).json({success : true})
    } catch (error) {
        res.status(400).send({success : false, error : error.message});
    }
}

// 글 삭제
export const postDeleteNews = async(req,res) => {
    const user = req.user;

    try{
        const news = await News.findOne({seq : req.params.id});
        
        if(news.author !== user.nickname){ // 글 작성자가 아닌 경우 예외처리
            return res.status(403).json({success : false, message : "You can only edit posts that you wrote "});
        }
        const rawData = await News.findByIdAndDelete({seq : req.params.id});
        res.locals.rawData = rawData;
        res.locals.schema = News;
        res.locals.schemaName = "News";
        return res.status(200).json({success : true})
    }  catch (err) {
        console.log("게시글 삭제 실패");
        return res.status(400).json({success : false, error : error.message});
    }
}

// 글 수정
export const postEditNews = async(req, res) => {
    const user = req.user;
    const { title, contents } = req.body;
    // 수정된 값 전달 받기

    if(!title || !contents){ // title나 contents가 비었을 때
        return res.status(400).json({success : false, message : "title and contents both are required"});
    }

    try{
        const news = await News.findOne({seq: req.params.id});
        // 작성자 본인이 아닐 경우
        if(news.author !== user.nickname){
            return res.status(403).json({success : false, message : "You can only edit posts that you wrote "});
        }
        const rawData = await News.findByIdAndUpdate({seq : req.params.id},
            { $set : {title : title, contents  : contents}});
        res.locals.schema = News;
        res.locals.rawData= rawData;
        res.locals.schemaName = "News";
        return res.status(200).json({success : true})

    } catch (error) {
        console.log("게시글 수정 실패", err);
        return res.status(400).json({success: false, error : error.message});
    }
};


// 기술 뉴스 게시판에서 글 전체 조회
export const getAllNews = async (req, res) => {
    try {
        const news = await News.find({});
        return res.status(200).json({news : news});
    }catch (error) {
        console.log("404 : Cannot get the page of showing all lists", error);
        res.status(400).send({error : error.message});
    }
}

// 클릭한 게시글 하나만 조회
export const getOneNews = async(req, res) => {
    try{
        const news = await News.findById({seq : req.params.id});
        return res.status(200).json({news:news});
    } catch(err){
        console.log("404 : Cannot get the page of showing the board", err);
        res.status(400).send({error : error.message});
    }
}

