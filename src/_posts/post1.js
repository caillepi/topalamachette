import Post from "./postTemplate"
import img1 from "../_img/post1Img/post1_1.jpg"
import ImageComponent from "../component/ImageComponent/ImageComponent"

let post_title = "La magestueuse île de Lifou"
let post_text =
    <div>
        <div className = 'FullPostPicture'>
            <ImageComponent img = { img1 } alt = { "FIRST SLIDE" } description = {" Description de mon imageComponent" } />
            <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </span>
        </div>
    </div>
let post_description = "Voici la description de mon post"
let post_date = "15 novembre 2023"
let post_location = "Lifou"
let post_category = ["Provinse des îles", "Île de Lifou"]
let post_picCard = <img src = { img1 } alt = "FIRST SLIDE" />
let post_mapinfo = {
        'center': [-20.969065,  167.226035],
        'zoom': 9
    }
let post_mapMarkers = [
    {
        'center': [-20.969065,  167.226035]
    }
]
let post1 = new Post(post_title, post_text, post_description, post_date, post_location, post_category, post_picCard, post_mapinfo, post_mapMarkers)

export default post1;