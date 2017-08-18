package com.oa

class HomeController {

    def index() {
        render view: "/Home/Index"
    }

    def dashboard() {
        render view: "/Home/Dashboard"
    }

    def welcome() {
        render view: "/Home/Welcome"
    }
}
