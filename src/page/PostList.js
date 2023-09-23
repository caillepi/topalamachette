import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Post from '../component/Post/Post'
import "./Style/PostList.css"

const PostList = () => {
    return (
        <Container fluid className = 'PostList'>
            <Row>
                <Col className = 'PostListMapPart'>
                    Carte à mettre (MapLayer)
                </Col>
            </Row>

            <Row>
                <Col className = 'PostListPostPart col-xs-11 col-md-10 col-lg-7'>
                    <Post card = { true } uid = { 1 } />
                </Col>
            </Row>

            <Row>
                <Col className = 'PostListPostPart col-xs-11 col-md-10 col-lg-7'>
                    <Post card = { true } uid = { 2 } />
                </Col>
            </Row>
        </Container>
    );
};

export default PostList;