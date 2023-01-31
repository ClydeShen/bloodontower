const pdfjsLib = window['pdfjs-dist/build/pdf']
pdfjsLib.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js'
let pdfDoc = null
let pageRendering = false
let pageNumPending = null
const scale = 1.5
const pdfEle = document.getElementById('pdf')
const pdfURL = pdfEle.dataset.url

function renderPage(num, canvas) {
  var ctx = canvas.getContext('2d')
  pageRendering = true
  // Using promise to fetch the page
  pdfDoc.getPage(num).then(function (page) {
    var viewport = page.getViewport({ scale })
    canvas.height = viewport.height
    canvas.width = viewport.width

    // Render PDF page into canvas context
    var renderContext = {
      canvasContext: ctx,
      viewport: viewport
    }
    var renderTask = page.render(renderContext)

    // Wait for rendering to finish
    renderTask.promise.then(function () {
      pageRendering = false
      if (pageNumPending !== null) {
        // New page rendering is pending
        renderPage(pageNumPending)
        pageNumPending = null
      }
    })
  })
}

pdfjsLib.getDocument(pdfURL).promise.then(function (pdfDoc_) {
  pdfDoc = pdfDoc_

  const pages = parseInt(pdfDoc.numPages)

  var canvasHtml = ''
  for (var i = 0; i < pages; i++) {
    canvasHtml += '<canvas id="canvas_' + i + '"></canvas>'
  }

  pdfEle.innerHTML = canvasHtml

  for (var i = 0; i < pages; i++) {
    var canvas = document.getElementById('canvas_' + i)
    renderPage(i + 1, canvas)
  }
})
