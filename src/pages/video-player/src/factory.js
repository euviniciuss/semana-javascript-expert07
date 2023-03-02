import Service from "./service.js"
import Controller from "./controller.js"
import View from "./view.js"

const [rootPath] = window.location.href.split('/pages/')

const factory = {
  async initialize() {
    return Controller.initialize({
      view: new View({ }),
      service: new Service({ })
    })
  }
}

export default factory