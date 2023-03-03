import Camera from "../../../lib/shared/camera.js"
import { supportsWorkerTypes } from "../../../lib/shared/util.js"

import Service from "./service.js"
import Controller from "./controller.js"
import View from "./view.js"

async function getWorker() {
  if (supportsWorkerTypes()) {
    console.log('suporta!')
    const worker = new Worker('./src/worker.js', { type: "module" })
    return worker
  }

  const workerMock = {
    async postMessage() {},
    onmessage(msg) {}
  }

  console.log('não suporta')
  return workerMock 
}

const worker = await getWorker()
console.log({ worker })

const camera = await Camera.init()

const [rootPath] = window.location.href.split('/pages/')

const factory = {
  async initialize() {
    return Controller.initialize({
      view: new View(),
      service: new Service({ })
    })
  }
}

export default factory