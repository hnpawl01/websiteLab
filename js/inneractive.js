d3.select(".choose")
    .on("click", function(){
    d3.select("#animals")
    .classed("hidden",false);
});
d3.select("#bird")
.on("mouseenter",function()
   {
    d3.select("#adoption")
    .text("Has Been Adopted");
});
d3.select("#bird")
.on("mouseleave",function()
   {
    d3.select("#adoption")
    .text("  ");
});
d3.select("#cat")
.on("mouseenter",function()
   {
    d3.select("#adoption")
    .text("Not Adopted Yet");
});
d3.select("#cat")
.on("mouseleave",function()
   {
    d3.select("#adoption")
    .text("  ");
});
d3.select("#dog")
.on("mouseenter",function()
   {
    d3.select("#adoption")
    .text("Has Been Adopted");
});
d3.select("#dog")
.on("mouseleave",function()
   {
    d3.select("#adoption")
    .text("  ");
});
d3.select("#cat")
.on("click",function()
   {
    d3.select("#adoption")
    .text("You Have Now Adopted A Kitten :)");
});
d3.select("#bird")
.on("click",function()
   {
    d3.select("#adoption")
    .text("Sorry They Have Been Adopted Already :(");
});
d3.select("#dog")
.on("click",function()
   {
    d3.select("#adoption")
    .text("Sorry They Have Been Adopted Already :(");
});