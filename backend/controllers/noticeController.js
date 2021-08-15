import Notice from "../models/Notice";


// 글 등록(관리자 권한)
export const postWriteNotice = async(req, res, next) => {
    const user = req.user;
    const {title, contents, createdAt} = req.body;
    // author 관련 부분 수정?
    
    // user가 관리자가 아닐 때 false
    if(user.role !== 2){
        return res.status(400).json({success: false, message : "Only Admin can an upload in this board "});
    } 
    if(!title || !contents){ // title나 contents가 비었을 때
        return res.status(400).json({success : false, message : "title and contents both are required"});
    }

    try{
        const notice = await Notice.create({
            title,
            contents,
            createdAt
        });
        res.locals.post = notice;
        res.locals.schema = Notice;
        res.locals.schemaName = "Notice";
        // 클라이언트로 변수 전송
        next(); 
        //return res.status(400).json({success : true})
    } catch (error) {
        res.status(400).send({error : error.message});
    }
}

// 글 삭제(접근한 author === req.body.)
export const postDeleteNotice = async(req,res, next) => {
    const user = req.user;
    const { _id } = req.body;

    try {
        if(user.role !== 2){ // 사용자가 관리자가 아닐 때 
            return res.status(403).json({success:false, message : "Only Admin can delete this post."})
        }
        const checkAuthor = await Notice.findOne({ _id });
        res.locals.rawData = checkAuthor;
        res.locals.schema = Notice;
        res.locals.schemaName = "Notice";

        await Notice.remove({notice : _id}) 
        next();
    } catch (err){
        console.log("게시글을 삭제하는 데 실패했습니다.", err);
        next(err);
    }
}

// 글 수정
export const postEditNotice = async(req, res, next) => {
    const {_id ,title, contents } = req.body;
    // 수정된 값 전달 받기
    const user = req.user;

    if(!title || !contents){ // title나 contents가 비었을 때
        return res.status(400).json({success : false, message : "title and contents both are required"});
    }

    try {
        if(user.role !== 2){
            return res.status(403).json({success : false, message : "Only Admin can edit this post. "});
        }
        // _id로 게시글 찾고 업데이트
        const rawData  = await Notice.findByIdAndUpdate(_id, {$set : {title : title, contents : contents}}) // 수정 날짜는 업데이트 하지 않음
        res.locals.schema = Notice;
        res.locals.rawData= rawData;
        res.locals.schemaName = "Notice";
        next();
    }catch (error) {
        console.log("게시글을 삭제하는 데 실패했습니다.", err);
        next(err);
    }   
};

// 기술 뉴스 게시판에서 글 전체 조회(인트아이 회원만 조회 가능)
export const getAllNotice = async (req, res) => {
    const user = req.user;
    if(user.role === -1){ // 비회원이면
        return res.status(400).json({success : false, message: "Only member of int-i can access this board"});
    }

    try {
        const notice = await Notice.find({});
        return res.status(200).json({notice : Notice});
    }catch (error) {
        console.log("404 : Cannot get the page of showing all lists", error);
        res.status(400).send({error : error.message});
    }
}

// 클릭한 게시글 하나만 조회
export const getOneNotice = async(req, res) => {
    const { _id }= req.body;
    const user = req.user;
    if(user.role === -1){ // 비회원이면
        return res.status(400).json({success : false, message: "Only member of int-i can access this board"});
    }

    try{
        const notice = await Notice.findById({_id});
        return res.status(200).json({notice:notice});
    } catch(err){
        console.log("404 : Cannot get the page of showing the board", err);
        res.status(400).send({error : error.message});
    }
}

