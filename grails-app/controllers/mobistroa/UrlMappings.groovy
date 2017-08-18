package mobistroa

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(controller: "Home")
        "500"(view:'/500')
        "404"(view:'/404')
    }
}
