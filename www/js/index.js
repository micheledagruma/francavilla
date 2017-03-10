//swipe home
$( document ).on( "pagecreate", "#home",  function() {
    $( document ).on( "swipeleft swiperight", "#home", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {//pannel chiuso
            if ( e.type === "swiperight" ) {
                $( "#panel-home" ).panel( "open" );
            }
        }else{// panel aperto
          if ( e.type === "swipeleft" ) {
             $( "#panel-home" ).panel( "close" );
          }
        }
    });
});

//swipe laCitta
$( document ).on( "pagecreate", "#laCitta",  function() {
    $( document ).on( "swipeleft swiperight", "#laCitta", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {//pannel chiuso
            if ( e.type === "swiperight" ) {
                $( "#panel-laCitta" ).panel( "open" );
            }
        }else{// panel aperto
          if ( e.type === "swipeleft" ) {
             $( "#panel-laCitta" ).panel( "close" );
          }
        }
    });
});
//swipe itinerari
$( document ).on( "pagecreate", "#itinerari",  function() {
    $( document ).on( "swipeleft swiperight", "#itinerari", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {//pannel chiuso
            if ( e.type === "swiperight" ) {
                $( "#panel-itinerari" ).panel( "open" );
            }
        }else{// panel aperto
          if ( e.type === "swipeleft" ) {
             $( "#panel-itinerari" ).panel( "close" );
          }
        }
    });
});
//swipe mappa
$( document ).on( "pagecreate", "#mappa",  function() {
    $( document ).on( "swipeleft swiperight", "#mappa", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {//pannel chiuso
            if ( e.type === "swiperight" ) {
                $( "#panel-mappa" ).panel( "open" );
            }
        }else{// panel aperto
          if ( e.type === "swipeleft" ) {
             $( "#panel-mappa" ).panel( "close" );
          }
        }
    });
});
//swipe gallery
$( document ).on( "pagecreate", "#gallery",  function() {
    $( document ).on( "swipeleft swiperight", "#gallery", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {//pannel chiuso
            if ( e.type === "swiperight" ) {
                $( "#panel-gallery" ).panel( "open" );
            }
        }else{// panel aperto
          if ( e.type === "swipeleft" ) {
             $( "#panel-gallery" ).panel( "close" );
          }
        }
    });
});
//swipe contatti
$( document ).on( "pagecreate", "#contatti",  function() {
    $( document ).on( "swipeleft swiperight", "#contatti", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {//pannel chiuso
            if ( e.type === "swiperight" ) {
                $( "#panel-contatti" ).panel( "open" );
            }
        }else{// panel aperto
          if ( e.type === "swipeleft" ) {
             $( "#panel-contatti" ).panel( "close" );
          }
        }
    });
});
//swipe utility
$( document ).on( "pagecreate", "#utility",  function() {
    $( document ).on( "swipeleft swiperight", "#utility", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {//pannel chiuso
            if ( e.type === "swiperight" ) {
                $( "#panel-utility" ).panel( "open" );
            }
        }else{// panel aperto
          if ( e.type === "swipeleft" ) {
             $( "#panel-utility" ).panel( "close" );
          }
        }
    });
});
