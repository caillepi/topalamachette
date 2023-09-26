import React from 'react';
import { postContentService } from "../../_service/Post_service"
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import CALENDAR from "../../_img/calendar.png"
import LOCATION from "../../_img/location.png"
import CHEVRON from "../../_img/chevron.png"
import "./Post.css"
import "../../page/Style/PostId.css"
import MapLayer from '../MapLayer/MapLayer';

const Post = ({ card, uid, map }) => {
    let navigate = useNavigate();
    let firstCat = true;

    let uid2 = useParams().uid

    let buttonOnClickHandler = () => {
        navigate("./posts/" + uid, { replace: false })
    }

    let onBackButtonClick = () => {
        navigate("../../", { replace: false })
    }

    if (card) {
        return (
            <Container fluid className = "PostArticle">
                <Row>
                    <Col className = 'PostTitle'>
                        <span>{ postContentService["post" + uid].title }</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container fluid className = 'PostInformationContainer '>
                            <Row className = 'PostInformation '>
                                <Col className = 'PostDate col-12 col-sm-12 col-md-auto'>
                                    <img src = { CALENDAR } alt = 'calendar' />
                                    { postContentService["post" + uid].date }
                                </Col>
                                <Col className = 'PostLocation col-sm-12 col-md-auto'>
                                    <img src = { LOCATION } alt = ' calendar ' />
                                    { postContentService["post" + uid].location }
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className = 'PostPicCard'>
                    <Col>
                        { postContentService["post" + uid].picCard }
                    </Col>
                </Row>
                <Row className = 'PostText col-11'>
                    <Col>
                        { postContentService["post" + uid].description }   
                    </Col>
                </Row>
                <Row className = 'PostButtonRow'>
                    <Col className = 'PostButton'>
                        <button onClick = { () => buttonOnClickHandler() }>
                            Voir le post
                            <img src = { CHEVRON } alt = "chevron" />
                        </button>
                    </Col>
                </Row>
            </Container>
        )
    }
    else {
        return (
            <Container fluid className = 'FullPost col-sm-11 col-lg-7'>
                <Row>
                    <Col className = 'PostBackButton col-sm-12'>
                        <button onClick = { () => onBackButtonClick() }>
                            <img src = { CHEVRON } alt = "chevron" />
                            Retour à la liste des posts
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col className = 'FullPostTitle'>
                        { postContentService["post" + uid2].title }
                    </Col>
                </Row>

                <div id = "PostCategory">
                    { postContentService["post" + uid2].category.map((cat) => {
                        return (
                            <span key = { cat }>
                                {cat} { firstCat && " - " }
                                { firstCat = false }
                            </span>
                        )
                    }) }
                </div>

                <Row>
                    <Col className = 'FullPostMap col-11 col-md-12'>
                        {
                            map &&
                            <MapLayer   mapCenter = { postContentService["post" + uid2].mapInfo.center } 
                                        zoom = { postContentService["post" + uid2].mapInfo.zoom }
                                        markersProps = { postContentService["post" + uid2].mapMarkers }/>
                        }
                        
                    </Col>
                </Row>

                <div className = 'PostText col-11 col-md-12'>
                    { postContentService["post" + uid2].text }
                </div>
            </Container>
        )
    }
};

export default Post;