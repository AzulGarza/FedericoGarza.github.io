// Space of graph
var width = 400,
    height = 400;

// Place of graph
var barchart = d3.select("#barchart")
                 .append("svg")
                  .attr("width", width)
                  .attr("height", height)
                 .append("g")

// Scale of axis
var scaleX = d3.scaleBand()
               .range([0, width])
               .padding([0.2])

var scaleY = d3.scaleLinear()
               .range([0, height])

// Gráfica con datos
d3.csv("/data/data.csv").then( function(data) {
  // Type of data
  data.forEach( function(d) {
    d.value = +d.value;
  })

  // Updating scales
  scaleX.domain(data.map(function(d) { return d.year; }))
  scaleY.domain([0, d3.max(data, function(d) { return d.value; })])

  // Graph
  barchart.selectAll(".bar")
          .data(data)
          .enter()
          .append("rect")
            .attr("x", function(d) { return scaleX(d.year); })
            //.attr("y", function(d) { return scaleY(d.value); })
            .attr("width", scaleX.bandwidth())
            //.attr("height", function(d){ return height - scaleY(d.value)})
          .transition()
            .delay(function(d, i) { return i*100; })
            .ease(d3.easeLinear)
            //.attr("x", function(d) { return scaleX(d.year); })
            .attr("y", function(d) { return height - scaleY(d.value); })
            //.attr("width", scaleX.bandwidth())
            .attr("height", function(d) { return scaleY(d.value); });

});
