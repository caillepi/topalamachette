import post1_1 from "../_img/post1Img/post1_1.jpg"
import post2_1 from "../_img/post1Img/post1_2.jpg"

class Post {
    constructor (title, text, description, date, location, category, picCard) {
        this.title = title
        this.text = text
        this.description = description
        this.date = date
        this.location = location
        this.category = category
        this.picCard = picCard
    }
}

/** POST 1 */
let post1_title = "La magestueuse île de Lifou"
let post1_text =
    <div>
        <div className = 'FullPostPicture col-sm-12'>
            <img src = { post1_1 } alt = "FIRST SLIDE" />
            <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </span>
        </div>
    </div>
let post1_description = "Voici la description de mon post"
let post1_date = "15 novembre 2023"
let post1_location = "Lifou"
let post1_category = ["Provinse des îles", "Île de Lifou"]
let post1_picCard = <img src = { post1_1 } alt = "FIRST SLIDE" />
let post1 = new Post(post1_title, post1_text, post1_description, post1_date, post1_location, post1_category, post1_picCard)


/** POST 2 */
let post2_title = "Le paradis sur terre : l'île des Pins"
let post2_text =
    <div>
        <div className = 'FullPostPicture col-sm-12'>
            <img src = { post2_1 } alt = "SECOND SLIDE" />
            <span className = 'PostPictureDescription'>On mange bien ici dis donc, deuxième carbonnade</span>
        </div>
    </div>
let post2_description = "Voici la description de mon second post"
let post2_date = "16 novembre 2023"
let post2_location = "Îles des pins"
let post2_category = ["Provinse Sud", "Île des pins"]
let post2_picCard = <img src = { post2_1 } alt = "FIRST SLIDE" />
let post2 = new Post(post2_title, post2_text, post2_description, post2_date, post2_location, post2_category, post2_picCard)

export const postContentService = {
    post1, post2
}