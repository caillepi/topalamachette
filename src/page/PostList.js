import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Post from '../component/Post/Post'
import MapLayer from '../component/MapLayer/MapLayer'
import "./Style/PostList.css"
import { mapService } from '../_service/Map_service'

const PostList = () => {
    return (
        <Container fluid className = 'PostList'>
            <Row className = 'justify-content-center'>
                <Col className = 'PostListMapPart col-11 col-md-11'>
                    <MapLayer   mapCenter = { mapService.mapCenter } 
                                zoom = { mapService.mapZoom }
                                markersProps = { mapService.markers }/>
                </Col>
            </Row>

            <Row>
                <Col className = 'PostListPostPart col-11 col-md-10 col-lg-7'>
                    <Post card = { true } uid = { 1 } map = { false }/>
                </Col>
            </Row>
        </Container>
    );
};

export default PostList;