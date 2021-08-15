import Promotion from "../models/Promotion";


// 글 등록(인트아이 회원 권한)
export const PostWRitePromotion = async(req, res, next) => {
    const user = req.user;
    const { title, contents, createdAt} = req.body;
    // author 관련 부분 수정?
    
    // user가 인트아이 회원이 아닐 때 false
    if(user.role !== 1){
        return res.status(400).json({success: false, message : "Member of int-i can upload "});
    } 
    if(!title || !contents){ // title나 contents가 비었을 때
        return res.status(400).json({success : false, message : "title and contents both are required"});
    }

    try{
        const promotion = await Promotion.create({
            title,
            contents,
            author : user.nickname,
            createdAt
        });
        res.locals.post = promotion;
        res.locals.schema = Promotion;
        res.locals.schemaName = "Promotion";
        // 클라이언트로 변수 전송
        next(); 

        //return res.status(400).json({success : true})
    } catch (error) {
        res.status(400).send({error : error.message});
    }
}

// 글 삭제
export const postDeletePromotion = async(req,res, next) => {
    const user = req.user;
    const { _id } = req.body;

    try {
        const findBody = await Promotion.findOne({_id});
        res.locals.rawData = findBody;
        res.locals.schema = Promotion;
        res.locals.schemaName = "Promotion";

        if(findBody.author !== user.nickname){
            return res.status(403).json({success:false, message : "You can only delete posts that you wrote"})
        }

        await Promotion.remove({promotion : _id}) 
        next();
    } catch (err){
        console.log("게시글을 삭제하는 데 실패했습니다.", err);
        next(err);
    }
}

// 글 수정 
export const postEditPromotion = async(req, res, next) => {
    const {_id ,title, contents, createdAt } = req.body;
    // 수정된 값 전달 받기
    const user = req.user;

    if(!title || !contents){ // title나 contents가 비었을 때
        return res.status(400).json({success : false, message : "title and contents both are required"});
    }

    try {
        const findBody = await Promotion.findOne({_id});

        if(findBody.author !== user.nickname){
            return res.status(403).json({success : false, message : "You can only edit posts that you wrote "});
        }
        // _id로 게시글 찾고 업데이트
        const rawData  = await Promotion.findByIdAndUpdate(_id, {$set : {title : title, contents : contents, createdAt: createdAt}}) 
        res.locals.schema = Promotion;
        res.locals.rawData= rawData;
        res.locals.schemaName = "Promotion";
        next();
    }catch (error) {
        console.log("게시글을 삭제하는 데 실패했습니다.", err);
        next(err);
    }   
};

// 기술 뉴스 게시판에서 글 전체 조회
export const getAllPromotion = async (req, res) => {
    try {
        const promotion = await Promotion.find({});
        return res.status(200).json({promotion : promotion});
    }catch (error) {
        console.log("404 : Cannot get the page of showing all lists", error);
        res.status(400).send({error : error.message});
    }
}

// 클릭한 게시글 하나만 조회
export const getOnePromotion = async(req, res) => {
    const { _id }= req.body;

    try{
        const promotion = await Promotion.findById({_id});
        return res.status(200).json({promotion : promotion});
    } catch(err){
        console.log("404 : Cannot get the page of showing the board", err);
        res.status(400).send({error : error.message});
    }
}
