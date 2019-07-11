

function addTfPoint) {
    // Validate input first
    if ($(this)[0].checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      //Adds indications of what input is invalid.
      $(this).addClass('was-validated');
      return false
    }

    // Removes validity symbols if input accepted
    $(this).removeClass("was-validated")

    const valueInput = parseFloat($(this)[0][0].value);
    const alphaInput = parseFloat($(this)[0][1].value);
    const colorInput = $(this)[0][2].value
    console.log(valueInput)
    console.log(alphaInput)
    console.log(colorInput)
    //TODO test if all are decently valid

    // Add a new element for the added point.
    // This is not pretty.
    let elementString = (
      '<div class="row row-margin">' +
      '<form class="col-sm-6" name="tfPoint">' +
      '<div class="input-group">' +
      '<input type="text" class="form-control" value="' + valueInput + '" disabled>' +
      '<input type="text" class="form-control" value="' + alphaInput + '" disabled>' +
      '<input class="form-control" type="color" value="' + colorInput + '" disabled>' +
      '<div class="input-group-append">' +
      '<button class="btn btn-primary" type="submit">-</button>' +
      '</div>' +
      '</div>' +
      '</form>' +
      '</div>');
    // $("#tfPoints").prepend(elementString);


    console.log("ALL POINTS:");
    // console.log($("#tfPoints"));
    // console.log($("#tfPoints")[0]);
    // console.log($("#tfPoints")[0].children);

    // Insert new element at correct index
    let inserted = false;
    let insertionIndex = 0;
    let tfPoints = [[valueInput, alphaInput, colorInput]]
    for (let i = 0; i < $("#tfPoints")[0].children.length; i++) {
      let formNode = $("#tfPoints")[0].children[i].children[0];
      if (formNode.getAttribute("id") == "tfAdder") {
        continue;
      }

      let formValue = parseFloat(formNode.children[0].children[0].value);
      let formAlpha = parseFloat(formNode.children[0].children[1].value);
      let formColor = formNode.children[0].children[2].value;
      tfPoints.push([formValue, formAlpha, formColor]);

      if (valueInput == formValue) {
        insertionIndex = -2;
        break;
      }
      if (valueInput < formValue && !inserted) {
        insertionIndex = i;
        inserted = true;
      }
    }
    console.log(JSON.stringify(tfPoints))
    if (insertionIndex == -2) {
      // TODO: Set invalid input
      console.log("Point with that value already exist.")
    }
    // else if (insertionIndex == -1)
    //   $("#tfPoints").prepend(elementString);
    else {
      let rowNode = $("#tfPoints")[0].children[insertionIndex];
      // tfPoints.splice(insertionIndex, 0, )
      $(elementString).insertBefore($(rowNode))
    }

    return false; //Return false to stop page from reloading
  });

  $('[name="tfPoint"]').on("submit", function () {
    console.log("- pressed")
    return false;
  });