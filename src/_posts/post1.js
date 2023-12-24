import Post from "./postTemplate"
import img1 from "../_img/post1Img/post1_1.jpg"
import img2 from "../_img/post1Img/post1_2.jpg"
import img3 from "../_img/post1Img/post1_3.jpg"
import img4 from "../_img/post1Img/post1_4.jpg"
import img5 from "../_img/post1Img/post1_5.jpg"
import img6 from "../_img/post1Img/post1_6.jpg"
import vid1 from "../_img/post1Img/post1_7.mp4"
import img7 from "../_img/post1Img/post1_8.jpg"
import ImageComponent from "../component/ImageComponent/ImageComponent"
import MapLayer from '../component/MapLayer/MapLayer'

let post_title = "Voyage Paris - Nouméa"
let post_text =
    <div>
        <div className = 'FullPostPicture'>
            <span>
                La Nouvelle-Calédonie, ça sera mérite. 23h de vol, 27h de trajet, 35h porte-à-porte.
                <br/><br/>
                Je pars avec Antoine et Benjamin de Paris, fatigués mais assez excités.
                <br/> <br/>
                <strong>Première étape :</strong> Paris -> Abu-Dhabi, A350 de Etihad, 6h de vol
                <ImageComponent img = { img1 } alt = { "Paris Abu Dhabi" } description = { "" } />
                <ImageComponent img = { img4 } alt = { "Abu Dhabi" } description = { "" } />
                L'aéroport d'Abu Dhabi est énorme. Il y a plusieurs bâtiments / immeubles dedans. Dans le centre commercial, beaucoup de boutiques françaises (nourriture et beauté). Aux toilettes, il y a un employé qui s'occupe d'essuyer les gouttes d'eau tombées à côté du lavabo...
                <br/> <br/>
                <strong>Deuxième étape :</strong> Abu-Dhabi -> Singapour, B787 de Etihad, 8h de vol
                <ImageComponent img = { img2 } alt = { "Abu Dhabi Singapour" } description = { "" } />
                Nous retrouvons l'autre partie de la troupe à Singapour à savoir : Adrien, Camille et Alice.
                <br/> <br/>
                <strong>Troisème étape :</strong> Singapour -> Nouméa, A330néo de Aircalin, 9h de vol
                <ImageComponent img = { img3 } alt = { "Singapour Nouméa" } description = { "" } />
                <ImageComponent img = { img6 } alt = { "Singapour décollage" } description = { "" } />
                <ImageComponent img = { img5 } alt = { "Singapour décollage" } description = { "" } />
                Lorsque nous décollons de Singapour, nous voyons tous les porte-conteneurs. Il y en a des centaines.
                <br/> <br/>
                Le moment du repas dans l'avion est le meilleur, ça occupe... c'est la seule chose à faire à bord.
                Les jambes sont vites engourdies et difficile d'allonger les jambes.
                Forcément, il y a des bébés qui braillent à bord et on tombe juste à côté. Histoire de faire durer un peu plus le voyage.
                <br/> <br />
                <ImageComponent img = { img7 } alt = { "Singapour décollage" } description = { "" } />
                Enfin arrivé à Nouméa !! Sans les valises mais arrivés (4 d'entre nous) ! Elles sont bloqués à Abu-Dhabi. On nous donne en composentation un kit de survie : brosse à dent, dentifrice, gel douche, un t-shirt et shirt. On a une sacré dégaine tous avec les mêmes vêtements. Le voyage commence bien.
                <br/> <br/>
                <video width = "70%" margin = "auto" controls>
                    <source src = { vid1 } />
                </video>
                <br/>
                D'ailleurs, on ne sait pas si la valise est toujours en entier étant donné son traitement dès le départ.
            </span>
        </div>
    </div>
let post_description = "Petit résumé du voyage et quelques photos des vols"
let post_date = "15 et 16 novembre 2023"
let post_location = "Paris / Abu-Dhabi / Singapour / Nouméa"
let post_category = ["Voyage", "Nouvelle-Calédonie"]
let post_picCard = <img src = { img6 } alt = "Avion Aircalin" />
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