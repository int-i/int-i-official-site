// SNS 로그인시 학번 입력 페이지
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
//npm install antd

const StudentID = () => {
  const [StudentID, setStudentID] = useState("");

  const onStudentIDHandler = (event) => {
    setStudentID(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("StudentID", StudentID);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const studentIDstyle = {
    position: "absolute",
    top: "20%",
    left: "40%",
    textAlign: "center",
    border: "solid 1px white",
  };

  return (
    <div style={studentIDstyle}>
      <h2>학번 입력</h2>
      <br />
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onSubmit={onSubmitHandler}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name="StudentID">
          <Input
            value={StudentID}
            onChange={onStudentIDHandler}
            style={{ width: "450px", height: "40px" }}
          />
        </Form.Item>
        <div style={{ color: "red", fontSize: "14px", textAlign: "left" }}>
          인트아이 회원으로 인증되어야 게시글 열람이 가능합니다.
        </div>
        <br />
        <Form.Item>
          <div style={{ lineHeight: "50%" }}>
            <Button style={{ width: "450px" }} type="primary" htmlType="submit">
              입력 완료
            </Button>
            <br />
            <br />
            <Button style={{ width: "450px" }} htmlType="button">
              입력 건너뛰기
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StudentID;
