import News from "../models/News";


// 글 등록(인트아이 회원 권한)
export const PostWriteNews = async(req, res, next) => {
    const user = req.user;
    const {title, contents, createdAt} = req.body;
    // author 관련 부분 수정?
    
    // user가 인트아이 회원이 아닐 때 false
    if(user.role !== 1){
        return res.status(400).json({success: false, message : "Member of int-i can upload "});
    } 
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
        next(); 

        //return res.status(400).json({success : true})
    } catch (error) {
        res.status(400).send({error : error.message});
    }
}

// 글 삭제
export const PostDeleteNews = async(req,res, next) => {
    const user = req.user;
    const { _id } = req.body;

    try {
        const findBody = await News.findOne({_id});
        res.locals.rawData = findBody;
        res.locals.schema = News;
        res.locals.schemaName = "News";

        if(findBody.author !== user.nickname){
            return res.status(403).json({success:false, message : "You can only delete posts that you wrote"})
        }

        await News.remove({news : _id}) 
        // req.body와 동일한 객체 news를 삭제
        next();
    } catch (err){
        console.log("게시글을 삭제하는 데 실패했습니다.", err);
        next(err);
    }
}

// 글 수정
export const PostEditNews = async(req, res, next) => {
    const {_id ,title, contents, createdAt } = req.body;
    // 수정된 값 전달 받기
    const user = req.user;

    if(!title || !contents){ // title나 contents가 비었을 때
        return res.status(400).json({success : false, message : "title and contents both are required"});
    }

    try {
        const findBody = await News.findOne({_id});

        if(findBody.author !== user.nickname){
            return res.status(403).json({success : false, message : "You can only edit posts that you wrote "});
        }
        // _id로 게시글 찾고 업데이트
        const rawData  = await News.findByIdAndUpdate(_id, {$set : {title : title, contents : contents}}) // 수정 날짜는 업데이트 하지 않음
        res.locals.schema = News;
        res.locals.rawData= rawData;
        res.locals.schemaName = "News";
        next();
    }catch (error) {
        console.log("게시글을 삭제하는 데 실패했습니다.", err);
        next(err);
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
    const { _id }= req.body;

    try{
        const news = await News.findById({_id});
        return res.status(200).json({news:news});
    } catch(err){
        console.log("404 : Cannot get the page of showing the board", err);
        res.status(400).send({error : error.message});
    }
}

