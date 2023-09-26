import Post from "./postTemplate"
import post_1 from "../_img/post1Img/post1_2.jpg"

let post_title = "Le paradis sur terre : l'île des Pins"
let post_text =
    <div>
        <div className = 'FullPostPicture'>
            <img src = { post_1 } alt = "SECOND SLIDE" />
            <span className = 'PostPictureDescription'>On mange bien ici dis donc, deuxième carbonnade</span>
        </div>
    </div>
let post_description = "Voici la description de mon second post"
let post_date = "16 novembre 2023"
let post_location = "Îles des pins"
let post_category = ["Provinse Sud", "Île des pins"]
let post_picCard = <img src = { post_1 } alt = "FIRST SLIDE" />
let post_mapinfo = {
        'center': [-22.6154562, 167.480045],
        'zoom': 11
    }
let post_mapMarkers = [
        {
            'center': [-22.6154562, 167.480045]
        }
    ]
let post2 = new Post(post_title, post_text, post_description, post_date, post_location, post_category, post_picCard, post_mapinfo, post_mapMarkers)

export default post2;