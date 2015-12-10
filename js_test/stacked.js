function stackedArea(containerDiv){
  d3.json('data/data_tweet.json', function(data) {
  //d3.json('data/stackedAreaData.json', function(data) {
    var chart = nv.models.stackedAreaChart()
                  .margin({right: 100})
                  .x(function(d) { return d[0] })   //We can modify the data accessor functions...
                  .y(function(d) { return d[1] })   //...in case your data is formatted differently.
                  .useInteractiveGuideline(true)    //Tooltips which show all data points. Very nice!
                  .rightAlignYAxis(true)      //Let's move the y-axis to the right side.
                  //.transitionDuration(500)
                  .showControls(true)       //Allow user to choose 'Stacked', 'Stream', 'Expanded' mode.
                  .clipEdge(true);

    //Format x-axis labels with custom function.
    chart.xAxis
        .tickFormat(function(d) { 
          return d3.time.format('%x')(new Date(d)) 
    });

    chart.yAxis
        .tickFormat(d3.format(',.2f'));

    d3.select('#horizonGraph')
      .datum(data)
      .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });
}
// function stackedArea(containerDiv){
//   d3.json('data/stackedAreaData.json', function(data) {
//     nv.addGraph(function() {
//       var chart = nv.models.stackedAreaChart()
//                     .margin({right: 100})
//                     .x(function(d) { return d[0] })   //We can modify the data accessor functions...
//                     .y(function(d) { return d[1] })   //...in case your data is formatted differently.
//                     .useInteractiveGuideline(true)    //Tooltips which show all data points. Very nice!
//                     .rightAlignYAxis(true)      //Let's move the y-axis to the right side.
//                     //.transitionDuration(500)
//                     .showControls(true)       //Allow user to choose 'Stacked', 'Stream', 'Expanded' mode.
//                     .clipEdge(true);

//       //Format x-axis labels with custom function.
//       chart.xAxis
//           .tickFormat(function(d) { 
//             return d3.time.format('%x')(new Date(d)) 
//       });

//       chart.yAxis
//           .tickFormat(d3.format(',.2f'));

//       d3.select('#horizonGraph')
//         .datum(data)
//         .call(chart);

//       nv.utils.windowResize(chart.update);

//       return chart;
//     });
//   })
// }

