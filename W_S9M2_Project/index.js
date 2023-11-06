let isPainting = false

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const startPaint = (event) => {
  isPainting = true
  draw(event)
}

const stopPaint = () => {
  isPainting = false
  ctx.beginPath()
}

const draw = (event) => {
  if (!isPainting) return

  ctx.lineWidth = 3
  ctx.lineCap = 'round'
  ctx.strokeStyle = '#ff4b00'

  ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
}

canvas.addEventListener('mousedown', startPaint)
canvas.addEventListener('mouseup', stopPaint)
canvas.addEventListener('mousemove', draw)
