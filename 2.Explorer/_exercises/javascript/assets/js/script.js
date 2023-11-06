import { Router } from "./exercise-16-router.js"

const router = new Router()
router.add('/', "/assets/pages/home.html")
router.add("/about", "/assets/pages/about.html")
router.add("/contact", "/assets/pages/contact.html")
router.add(404, "/assets/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()