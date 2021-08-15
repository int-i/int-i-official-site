import News from "../models/News";


// 글 등록(인트아이 회원 권한)
export const PostWriteNews = async(req, res) => {
    const user = req.user;
    const {title, contents,  author, createdAt, updatedAt} = req.body;
    
    // user가 인트아이 회원이 아닐 때 redirect해서 메인 페이지로 이동
    if(user.role !== 1){
        return res.status(400).json({addNews: false, message : "Member of int-i can upload"});
    } else if(!title || !contents){ // title, contents가 비었을 때
        return res.status(400).json({addNews : false, message : "title and contents both are required"});
    }

    try{
        await News.create({
            title,
            contents,
            author : user.nickname,
            createdAt
        });

        res.status(200).json({addNews : true});
    } catch (error) {
        res.status(400).send({error : error.message});
    }

}

// 글 삭제
export const PostDeleteNews = async(req,res) => {


}


// 글 수정 (수정 날짜도 표시)
export const PostEditNews = async(req, res) => {
    const {title, contents, createdAt } = req.body;
    const user = req.user;

    
}


// 기술 뉴스 게시판에서 글 전체 조회
export const getAllNews = async (req, res) => {

}

// 클릭한 게시글 하나만 조회