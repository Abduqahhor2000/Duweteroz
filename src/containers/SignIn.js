import React from "react";
import { Row, Col } from "antd";

export default function SignIn () {
    return(
        <div>
            <Row gutter={16}>
                <Col style={{background: "red", padding: "8px"}} span={1}>salom </Col>
                <Col style={{background: "red", padding: "8px"}} span={2}>mujik </Col>
                <Col style={{background: "red", padding: "8px"}} span={3}>tirimisan </Col>
                <Col style={{background: "red", padding: "8px"}} span={6}>axvallar </Col>
                <Col style={{background: "red", padding: "8px"}} span={12}>jallima </Col>
                <Col style={{background: "red", padding: "8px"}} span={24}>nichik </Col>
            </Row>
        </div>
    );
}