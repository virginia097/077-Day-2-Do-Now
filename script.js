$("button").click(function() {
    let name = $(".name").val();
    let firstYear = $(".startSchool").val();
    let lastYear = $(".lastSchool").val();
    //1.Create a new variable on line 9 that represents years of school and uses an operators to determine the correct year!

let hoursInSchool=(lastYear-firstYear);

    //2.Write code to add the computers calculation response to the user to the correct part of the webpage using .append and concatenation to create a coherent sentence.
    $(".Calculation").append(name+", You have been in school for " + hoursInSchool+ " hours." + "<br>");

});
   //3. Test to see if it works!