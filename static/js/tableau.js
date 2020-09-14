$(document).ready(function() {
    initializeViz();

    initializeViz2();
    initializeViz3();


    $("#pdf").click(function() {
        exportPDF();
    });
    $("#image").click(function() {
        exportImage();
    });
    // $("#crosstab").click(function() {
    //     exportCrossTab();
    // });
    $("#data").click(function() {
        exportData();
    });
    // $("#revert").click(function() {
    //     revertAll();
    // });


});

function initializeViz() {

    var placeholderDiv = document.getElementById("tableauViz");
    var url = "https://public.tableau.com/views/Spotify_15995350192610/AVGPopularity";
    var options = {
        width: placeholderDiv.offsetWidth,
        height: placeholderDiv.offsetHeight,
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function() {
            workbook = viz.getWorkbook();
            activeSheet = workbook.getActiveSheet();
        }
    };
    viz = new tableau.Viz(placeholderDiv, url, options);



}

// second viz
function initializeViz2() {
    var placeholderDiv2 = document.getElementById("tableauDashboard");
    var url2 = "https://public.tableau.com/views/Spotify_15995350192610/Dashboard1";
    var options2 = {
        // width: placeholderDiv2.offsetWidth,
        // height: placeholderDiv2.offsetHeight,
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function() {
            workbook2 = viz.getWorkbook();
            activeSheet = workbook.getActiveSheet();
        }
    };
    viz2 = new tableau.Viz(placeholderDiv2, url2, options2);
}

// third viz
function initializeViz3() {
    var placeholderDiv3 = document.getElementById("tableauViz3");
    var url3 = "https://public.tableau.com/views/RD1_15997002017250/Story1";
    var options3 = {
        // width: placeholderDiv3.offsetWidth,
        // height: placeholderDiv3.offsetHeight,
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function() {
            workbook3 = viz.getWorkbook();
            activeSheet = workbook.getActiveSheet();
        }
    };
    Viz3 = new tableau.Viz(placeholderDiv3, url3, options3);
}


// buttons
function exportPDF() {
    viz.showExportPDFDialog();
    viz2.showExportPDFDialog();
    Viz3.showExportPDFDialog();
}

function exportImage() {
    viz.showExportImageDialog();
    viz2.showExportImageDialog();
    Viz3.showExportImageDialog();
}

// function exportCrossTab() {
//     viz.showExportCrossTabDialog();
//     viz2.showExportCrossTabDialog();
//     viz3.showExportCrossTabDialog();
// }

function exportData() {
    viz.showExportDataDialog();
    viz2.showExportDataDialog();
    viz3.showExportDataDialog();
}

// function revertAll() {
//     workbook.revertAllAsync();
//     workbook2.revertAllAsync();
//     workbook3.revertAllAsync();
// }