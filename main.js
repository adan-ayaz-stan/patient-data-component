// activeProblems-modal , medications-modal , allergies-modal , pastProblems-modal

const minimizer = document.getElementById("minimizer");
const closeIcon = document.getElementById("close-icon");

const viewChanger = document.getElementById("viewChanger");
const viewerOverview = document.getElementById("viewer-overview");
const viewerUnabriged = document.getElementById("viewer-unabriged");

const profileNameBox = document.getElementById("profileNameBox");

const activeProblemsModal = document.getElementById("activeProblems-modal");
const pastProblemsModal = document.getElementById("pastProblems-modal");
const medicationsModal = document.getElementById("medications-modal");
const medicationsModalPastProblems = document.getElementById(
  "medications-modal-past-problems"
);
const allergiesModal = document.getElementById("allergies-modal");

const activeProblemsInterface = document.getElementById("activeProblems");
const pastProblemsInterface = document.getElementById("pastProblems");
const medicationsInterface = document.getElementById("medications");
const allergiesInterface = document.getElementById("allergies");

const activeProblemsInnerButton = document.getElementById(
  "activeProblems-innerButton"
);
const pastProblemsInnerButton = document.getElementById(
  "pastProblems-innerButton"
);
const medicationsInnerButton = document.getElementById(
  "medications-innerButton"
);
const allergiesInnerButton = document.getElementById("allergies-innerButton");

// FUNCTIONS

// ACTIVE MODAL FUNCTIONS

function isActiveModalShow() {
  if (
    activeProblemsModal.classList.contains("clicked") &&
    activeProblemsInnerButton.classList.contains("buttonSelected")
  ) {
    return true;
  } else {
    return false;
  }
}

function ToggleHoverActiveModal() {
  activeProblemsModal.classList.toggle("no-hover");
}

function EnableActiveModal() {
  activeProblemsModal.classList.add("clicked");
  activeProblemsInnerButton.classList.add("buttonSelected");
}
function DisableActiveModal() {
  activeProblemsModal.classList.remove("clicked");
  activeProblemsInnerButton.classList.remove("buttonSelected");
}

// PAST MODAL FUNCTIONS
function isPastModalShow() {
  if (
    pastProblemsModal.classList.contains("clicked") &&
    pastProblemsInnerButton.classList.contains("buttonSelected")
  ) {
    return true;
  } else {
    return false;
  }
}
function ToggleHoverPastModal() {
  pastProblemsModal.classList.toggle("no-hover");
}

function EnablePastModal() {
  pastProblemsModal.classList.add("clicked");
  pastProblemsInnerButton.classList.add("buttonSelected");
}
function DisablePastModal() {
  pastProblemsModal.classList.remove("clicked");
  pastProblemsInnerButton.classList.remove("buttonSelected");
}

// MEDICATIONS MODAL FUNCTIONS
function isMedicationsModalShow() {
  if (
    medicationsModal.classList.contains("clicked") &&
    medicationsModalPastProblems.classList.contains("clicked") &&
    medicationsInnerButton.classList.contains("buttonSelected")
  ) {
    return true;
  } else {
    return false;
  }
}
function ToggleHoverMedicationsModal() {
  activeProblemsModal.classList.toggle("no-hover");
  pastProblemsModal.classList.toggle("no-hover");
  medicationsModal.classList.toggle("no-hover");
  medicationsModalPastProblems.classList.toggle("no-hover");
}

function EnableMedicationsModal() {
  medicationsModal.classList.add("clicked");
  medicationsModalPastProblems.classList.add("clicked");
  medicationsInnerButton.classList.add("buttonSelected");
}
function DisableMedicationsModal() {
  medicationsModal.classList.remove("clicked");
  medicationsModalPastProblems.classList.remove("clicked");
  medicationsInnerButton.classList.remove("buttonSelected");
}

// ALLERGIES MODAL FUNCTIONS

function isAllergiesModalShow() {
  if (
    allergiesModal.classList.contains("clicked") &&
    allergiesInnerButton.classList.contains("buttonSelected")
  ) {
    return true;
  } else {
    return false;
  }
}

function ToggleHoverAllergiesModal() {
  allergiesModal.classList.toggle("no-hover");
}
function EnableAllergiesModal() {
  allergiesModal.classList.add("clicked");
  allergiesInnerButton.classList.add("buttonSelected");
  allergiesInnerButton.style.backgroundColor = "#1D71B8";
}
function DisableAllergiesModal() {
  allergiesModal.classList.remove("clicked");
  allergiesInnerButton.classList.remove("buttonSelected");
  allergiesInnerButton.style.backgroundColor = "black";
}

// GLOBAL FUNCTIONS

function isAllModalShow() {
  if (
    isActiveModalShow() &&
    isPastModalShow() &&
    isMedicationsModalShow() &&
    isAllergiesModalShow()
  ) {
    return true;
  } else {
    return false;
  }
}

function OuterRingAllNotSelectedCorrector() {
  if (
    !isActiveModalShow() ||
    !isPastModalShow() ||
    !isMedicationsModalShow() ||
    !isAllergiesModalShow()
  ) {
    activeProblemsInterface.classList.remove("outerButtonSelected");
    pastProblemsInterface.classList.remove("outerButtonSelected");
    medicationsInterface.classList.remove("outerButtonSelected");
    allergiesInterface.classList.remove("outerButtonSelected");
  }
}

function EnableAll() {
  EnableActiveModal();
  EnablePastModal();
  EnableMedicationsModal();
  EnableAllergiesModal();

  if (
    isActiveModalShow() &&
    isPastModalShow() &&
    isMedicationsModalShow() &&
    isAllergiesModalShow()
  ) {
    activeProblemsInterface.classList.add("outerButtonSelected");
    pastProblemsInterface.classList.add("outerButtonSelected");
    medicationsInterface.classList.add("outerButtonSelected");
    allergiesInterface.classList.add("outerButtonSelected");
  }
}

function DisableAll() {
  DisableActiveModal();
  DisablePastModal();
  DisableMedicationsModal();
  DisableAllergiesModal();

  OuterRingAllNotSelectedCorrector();
}

// MINIMIZER LOGIC
minimizer.addEventListener("click", () => {
  if (minimizer.textContent == "-") {
    minimizer.textContent = "+";
    closeIcon.classList.toggle("close-icon-hidden");
  } else {
    minimizer.textContent = "-";
    closeIcon.classList.toggle("close-icon-hidden");
  }
  profileNameBox.classList.toggle("profileNameBoxMinimized");
  viewChanger.classList.toggle("destroyed");
  activeProblemsModal.classList.toggle("destroyed");
  pastProblemsModal.classList.toggle("destroyed");
  medicationsModal.classList.toggle("destroyed");
  medicationsModalPastProblems.classList.toggle("destroyed");
  allergiesModal.classList.toggle("destroyed");
});

// VIEWER LOGIC

function viewerCorrection() {
  if (
    activeProblemsModal.classList.contains("clicked") &&
    activeProblemsModal.classList.contains("clicked") &&
    pastProblemsModal.classList.contains("clicked") &&
    medicationsModal.classList.contains("clicked") &&
    medicationsModalPastProblems.classList.contains("clicked") &&
    allergiesModal.classList.contains("clicked")
  ) {
    viewerOverview.classList.remove("viewActive");
    viewerUnabriged.classList.add("viewActive");
  } else if (
    !activeProblemsModal.classList.contains("clicked") &&
    !activeProblemsModal.classList.contains("clicked") &&
    !pastProblemsModal.classList.contains("clicked") &&
    !medicationsModal.classList.contains("clicked") &&
    !medicationsModalPastProblems.classList.contains("clicked") &&
    !allergiesModal.classList.contains("clicked")
  ) {
    viewerUnabriged.classList.remove("viewActive");
    viewerOverview.classList.add("viewActive");
    DisableAll();
  } else if (
    activeProblemsModal.classList.contains("clicked") ||
    activeProblemsModal.classList.contains("clicked") ||
    pastProblemsModal.classList.contains("clicked") ||
    medicationsModal.classList.contains("clicked") ||
    medicationsModalPastProblems.classList.contains("clicked") ||
    allergiesModal.classList.contains("clicked")
  ) {
    viewerOverview.classList.remove("viewActive");
    viewerUnabriged.classList.add("viewActive");
  }
  OuterRingAllNotSelectedCorrector();
}

let viewerStateShowAll = false;

viewerOverview.addEventListener("click", () => {
  viewerOverview.classList.add("viewActive");
  viewerUnabriged.classList.remove("viewActive");
  viewerStateShowAll = false;
  DisableAll();
});

viewerUnabriged.addEventListener("click", () => {
  viewerUnabriged.classList.add("viewActive");
  viewerOverview.classList.remove("viewActive");
  EnableAll();
  viewerStateShowAll = true;
});

// ACTIVE PROBLEMS LOGIC

// INNER BUTTON HOVER AND CLICK STATE FUNCTION
function isActiveInnerButtonHovered() {
  if (activeProblemsModal.classList.contains("no-hover") == false) {
    return true;
  } else {
    return false;
  }
}

activeProblemsInnerButton.addEventListener("mouseover", () => {
  // STYLE LOGIC
  activeProblemsInnerButton.style.backgroundColor = "#1D71B8";
  activeProblemsInterface.addEventListener("mouseover", () => {
    activeProblemsInterface.style.borderColor = "black";
  });

  // MODAL LOGIC
  ToggleHoverActiveModal();
});
activeProblemsInnerButton.addEventListener("mouseout", () => {
  // STYLE LOGIC
  activeProblemsInnerButton.style.backgroundColor = "black";
  activeProblemsInterface.addEventListener("mouseover", () => {
    activeProblemsInterface.style.borderColor = "#E6332A";
  });

  // MODAL LOGIC
  ToggleHoverActiveModal();
});

activeProblemsInterface.addEventListener("mouseover", () => {
  activeProblemsInterface.style.borderColor = "#E6332A";
});
activeProblemsInterface.addEventListener("mouseout", () => {
  activeProblemsInterface.style.borderColor = "black";
});

// ACTIVE PROBLEMS CLICK LOGIC

activeProblemsInterface.addEventListener("click", async () => {
  if (isActiveInnerButtonHovered() == true) {
    if (isActiveModalShow() == false) {
      EnableActiveModal();
      if (isAllModalShow() == true) {
        EnableAll();
        viewerCorrection();
      }
      // Inner Button Clicked
      console.log("Inner button is clicked");
      viewerCorrection();
    } else if (isActiveModalShow() == true) {
      // Outer Button Clicked
      DisableActiveModal();
      viewerCorrection();
    }
  } else if (isActiveInnerButtonHovered() == false) {
    console.log("Outer Button Click");
    if (isAllModalShow() == false) {
      EnableAll();
      viewerCorrection();
    } else if (isAllModalShow() == true) {
      DisableAll();
      viewerCorrection();
    }
  }
});

// PAST PROBLEMS LOGIC

// INNER BUTTON HOVER AND CLICK STATE FUNCTION
function isPastInnerButtonHovered() {
  if (pastProblemsModal.classList.contains("no-hover") == false) {
    return true;
  } else {
    return false;
  }
}

pastProblemsInnerButton.addEventListener("mouseover", () => {
  // STYLE LOGIC
  pastProblemsInnerButton.style.backgroundColor = "#1D71B8";
  pastProblemsInterface.addEventListener("mouseover", () => {
    pastProblemsInterface.style.borderColor = "black";
  });

  // MODAL LOGIC
  ToggleHoverPastModal();
});
pastProblemsInnerButton.addEventListener("mouseout", () => {
  // STYLE LOGIC
  pastProblemsInnerButton.style.backgroundColor = "black";
  pastProblemsInterface.addEventListener("mouseover", () => {
    pastProblemsInterface.style.borderColor = "#E6332A";
  });

  // MODAL LOGIC
  ToggleHoverPastModal();
});

pastProblemsInterface.addEventListener("mouseover", () => {
  pastProblemsInterface.style.borderColor = "#E6332A";
});
pastProblemsInterface.addEventListener("mouseout", () => {
  pastProblemsInterface.style.borderColor = "black";
});

// PAST PROBLEMS CLICK LOGIC

pastProblemsInterface.addEventListener("click", async () => {
  if (isPastInnerButtonHovered() == true) {
    if (isPastModalShow() == false) {
      EnablePastModal();
      if (isAllModalShow() == true) {
        EnableAll();
        viewerCorrection();
      }
      // Inner Button Clicked
      console.log("Inner button is clicked");
      viewerCorrection();
    } else if (isPastModalShow() == true) {
      // Outer Button Clicked
      DisablePastModal();
      viewerCorrection();
    }
  } else if (isPastInnerButtonHovered() == false) {
    console.log("Outer Button Click");
    if (isAllModalShow() == false) {
      EnableAll();
      viewerCorrection();
    } else if (isAllModalShow() == true) {
      DisableAll();
      viewerCorrection();
    }
  }
});

// MEDICATIONS LOGIC

// INNER BUTTON HOVER AND CLICK STATE FUNCTION
function isMedicationsInnerButtonHovered() {
  if (medicationsModal.classList.contains("no-hover") == false) {
    return true;
  } else {
    return false;
  }
}

medicationsInnerButton.addEventListener("mouseover", () => {
  // STYLE LOGIC
  medicationsInnerButton.style.backgroundColor = "#1D71B8";
  medicationsInterface.addEventListener("mouseover", () => {
    medicationsInterface.style.borderColor = "black";
  });

  // MODAL LOGIC
  ToggleHoverMedicationsModal();
});
medicationsInnerButton.addEventListener("mouseout", () => {
  // STYLE LOGIC
  medicationsInnerButton.style.backgroundColor = "black";
  medicationsInterface.addEventListener("mouseover", () => {
    medicationsInterface.style.borderColor = "#E6332A";
  });

  // MODAL LOGIC
  ToggleHoverMedicationsModal();
});

medicationsInterface.addEventListener("mouseover", () => {
  medicationsInterface.style.borderColor = "#E6332A";
});
medicationsInterface.addEventListener("mouseout", () => {
  medicationsInterface.style.borderColor = "black";
});

// MEDICATIONS PROBLEMS CLICK LOGIC

medicationsInterface.addEventListener("click", async () => {
  if (isMedicationsInnerButtonHovered() == true) {
    if (isMedicationsModalShow() == false) {
      EnableActiveModal();
      EnablePastModal();
      EnableMedicationsModal();
      if (isAllModalShow() == true) {
        EnableAll();
        viewerCorrection();
      }
      // Inner Button Clicked
      console.log("Inner button is clicked");
      viewerCorrection();
    } else if (isMedicationsModalShow() == true) {
      // Inner Button Un-Clicked
      DisableActiveModal();
      DisablePastModal();
      DisableMedicationsModal();
      viewerCorrection();
    }
  } else if (isMedicationsInnerButtonHovered() == false) {
    console.log("Outer Button Click");
    if (isAllModalShow() == false) {
      EnableAll();
      viewerCorrection();
    } else if (isAllModalShow() == true) {
      DisableAll();
      viewerCorrection();
    }
  }
});

// ALLERGIES LOGIC

// INNER BUTTON HOVER AND CLICK STATE FUNCTION
function isAllergiesInnerButtonHovered() {
  if (allergiesModal.classList.contains("no-hover") == false) {
    return true;
  } else {
    return false;
  }
}

allergiesInnerButton.addEventListener("mouseover", () => {
  // STYLE LOGIC
  allergiesInnerButton.style.backgroundColor = "#1D71B8";
  allergiesInterface.addEventListener("mouseover", () => {
    allergiesInterface.style.borderColor = "black";
  });

  // MODAL LOGIC
  ToggleHoverAllergiesModal();
});
allergiesInnerButton.addEventListener("mouseout", () => {
  // STYLE LOGIC
  allergiesInnerButton.style.backgroundColor = "black";
  allergiesInterface.addEventListener("mouseover", () => {
    allergiesInterface.style.borderColor = "#E6332A";
  });

  // MODAL LOGIC
  ToggleHoverAllergiesModal();
});

allergiesInterface.addEventListener("mouseover", () => {
  allergiesInterface.style.borderColor = "#E6332A";
});
allergiesInterface.addEventListener("mouseout", () => {
  allergiesInterface.style.borderColor = "black";
});

// ACTIVE PROBLEMS CLICK LOGIC

allergiesInterface.addEventListener("click", async () => {
  if (isAllergiesInnerButtonHovered() == true) {
    if (isAllergiesModalShow() == false) {
      EnableAllergiesModal();
      if (isAllModalShow() == true) {
        EnableAll();
        viewerCorrection();
      }
      // Inner Button Clicked
      console.log("Inner button is clicked");
      viewerCorrection();
    } else if (isAllergiesModalShow() == true) {
      // Outer Button Clicked
      DisableAllergiesModal();
      viewerCorrection();
    }
  } else if (isAllergiesInnerButtonHovered() == false) {
    console.log("Outer Button Click");
    if (isAllModalShow() == false) {
      EnableAll();
      viewerCorrection();
    } else if (isAllModalShow() == true) {
      DisableAll();
      viewerCorrection();
    }
  }
});

setInterval(() => {
  viewerCorrection();
}, 1000);
