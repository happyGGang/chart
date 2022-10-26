;(function () {
  'use strict'

  const get = (element) => {
    document.querySelector(element)
  }

  class Chart {
    constructor(parent = 'body', data = {}, { width, hetght, radius, colors }) {
      this.parent = get(parent)
      this.canvas = document.createElement('canvas')
      this.canvas.width = width
      this.canvas.height = hetght
      this.ctx = this.canvas.getContext('2d')
      this.legends = document.createElement('div')
      this.legends.classList.add('legends')
      this.parent.appendChild(this.canvas)
      this.parent.appendChild(this.legends)
      this.label = ''
      this.total = 0
      this.datas = Object.entries(data)
      this.radius = radius
      this.colors = colors
    }
  }

  const getTotal = () => {
    for(const [data, value] of this.datas) {
      this.total += value
    }
  }

  

  const data = {
    guitar: 30,
    bass: 20,
    drun: 18,
    piano: 18
  }

  const option = {
    radius: 150,
    width: 700,
    hetght: 500,
    colors: ['#c15454', '#6fd971', '#687bd2', '#b971e0']
  }

  const labelOption = {
    color: '#FFFFFF',
    font: '20px',
  }

  const chart = new Chart('.canvas', data, option)
  const { width, hetght, radius, colors } = option
  chart.getTotal()
  chart.drawlegends()
  chart.drawChart(false, width / 2 - 10 -radius, hetght / 2, labelOption)
})()
