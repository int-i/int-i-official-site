import Promotion from "../models/Promotion";

// 글 등록(인트아이 회원 권한)
export const postWritePromotion = async(req, res) => {
    const user = req.user;
    const { title, contents, createdAt} = req.body;
    
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
        // 클라이언트로 변수 전송

        return res.status(200).json({success : true})

    } catch (error) {
        return res.status(400).send({success : false, error : error.message});
    }
}

// 글 삭제
export const postDeletePromotion = async(req,res) => {
    const user = req.user;

    try{
        const promotion = await Promotion.findOne({seq : req.params.id});

        if(promotion.author !== user.nickname){ // 글 작성자가 아닌 경우 예외처리
            return res.status(403).json({success : false, message : "You can only edit posts that you wrote "});
        }
        const rawData = await Promotion.findByIdAndDelete({seq : req.params.id});
        res.locals.rawData = rawData;
        res.locals.schema = Promotion;
        return res.status(200).json({success : true})

    }  catch (err) {
        console.log("게시글 삭제 실패");
        return res.status(400).json({success : false, error : error.message});
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

    try{
        const promotion = await Promotion.findOne({seq: req.params.id});
        // 작성자 본인이 아닐 경우
        if(promotion.author !== user.nickname){
            return res.status(403).json({success : false, message : "You can only edit posts that you wrote "});
        }
        const rawData = await Promotion.findByIdAndUpdate({seq : req.params.id},
            { $set : {title : title, contents  : contents}});
        res.locals.schema = News;
        res.locals.rawData= rawData;
        return res.status(200).json({success : true})

    } catch (error) {
        console.log("게시글 수정 실패", err);
        return res.status(400).json({success: false, error : error.message});
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
    try{
        const promotion = await Promotion.findById({seq : req.params.id});
        return res.status(200).json({promotion:promotion});
    } catch(err){
        console.log("404 : Cannot get the page of showing the board", err);
        res.status(400).send({error : error.message});
    }
}
