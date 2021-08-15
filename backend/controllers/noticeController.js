import Notice from "../models/Notice";

// 글 등록(관리자 권한)
export const postWriteNotice = async(req, res) => {
    const {title, contents, createdAt} = req.body;
    
    if(!title || !contents){ // title나 contents가 비었을 때
        return res.status(400).json({success : false, message : "title and contents both are required"});
    }

    try{
        const notice = await Notice.create({
            title,
            contents,
            author : "Admin",
            createdAt
        });
        res.locals.post = notice;
        res.locals.schema = Notice;
        // 클라이언트로 변수 전송
        return res.status(200).json({success : true})
    } catch (error) {
        res.status(400).send({success : false, error : error.message});
    }
}

// 글 삭제(관리자 권한)
export const postDeleteNotice = async(req,res) => {
    try{
        const rawData = await Notice.findByIdAndDelete({seq : req.params.id});
        res.locals.rawData = rawData;
        res.locals.schema = Notice;
        return res.status(200).json({success : true})

    }  catch (err) {
        console.log("게시글 삭제 실패");
        return res.status(400).json({success : false, error : error.message});
    }
}

// 글 수정
export const postEditNotice = async(req, res) => {
    const {title, contents } = req.body;
    // 수정된 값 전달 받기

    if(!title || !contents){ // title나 contents가 비었을 때
        return res.status(400).json({success : false, message : "title and contents both are required"});
    }

    try{
        const rawData = await Notice.findByIdAndUpdate({seq : req.params.id},
            { $set : {title : title, contents  : contents}});
        res.locals.schema = Notice;
        res.locals.rawData= rawData;
        return res.status(200).json({success : true})
        
    } catch (error) {
        console.log("게시글 수정 실패", err);
        return res.status(400).json({success: false, error : error.message});
    }
};

// 기술 뉴스 게시판에서 글 전체 조회(인트아이 회원만 조회 가능)
export const getAllNotice = async (req, res) => {

    try {
        const notice = await Notice.find({});
        return res.status(200).json({notice :notice});

    }catch (error) {
        console.log("404 : Cannot get the page of showing all lists", error);
        res.status(400).send({error : error.message});
    }
}

// 클릭한 게시글 하나만 조회
export const getOneNotice = async(req, res) => {
    try{
        const notice = await Notice.findById({seq : req.params.id});
        return res.status(200).json({notice:notice});
    } catch(err){
        console.log("404 : Cannot get the page of showing the board", err);
        res.status(400).send({error : error.message});
    }
}

