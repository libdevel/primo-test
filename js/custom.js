(function () {
    "use strict";
    'use strict';


  //  var app = angular.module('viewCustom', ['angularLoad']);

    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/


/***************************************************************/

/*  Test01 view */

/*add report a problem*/
  app.controller('prmActionListAfterController', ['$scope', function ($scope) {
    var vm = this;
    vm.$onInit = function () {
      vm.prmActionCtrl.actionLabelNamesMap["report_a_problem"] = "Report a Database Problem";
      vm.prmActionCtrl.actionIconNamesMap["report_a_problem"] = "report_a_problem";
      vm.prmActionCtrl.actionIcons["report_a_problem"] = {
        icon: "ic_announcement_24px",
        iconSet: "action",
        type: "svg"
      };
      //TODO - what about if something gets added to this list - may need to refactor for loop
      if (!vm.prmActionCtrl.actionListService.actionsToIndex["report_a_problem"]) {
        vm.prmActionCtrl.actionListService.requiredActionsList.unshift("report_a_problem");
        vm.prmActionCtrl.actionListService.actionsToDisplay.unshift("report_a_problem");
        vm.prmActionCtrl.actionListService.actionsToIndex["report_a_problem"] = 1;
      }
        var url = "https://sunybroome.libwizard.com/f/report-a-problem?5327305=" + vm.prmActionCtrl.item.pnx.display.title[0] + " (https://suny-bcc.primo.exlibrisgroup.com/discovery/fulldisplay?" + encodeURIComponent("docid=" + vm.prmActionCtrl.item.pnx.control.recordid + "&vid=01SUNY_BCC:TEST01&onCampus=true") + ")";

      if (vm.prmActionCtrl.actionListService.onToggle) {
        vm.prmActionCtrl.actionListService.onToggle["report_a_problem"] = function () {
          window.open(url, '_blank');
        };
      }
      if (vm.prmActionCtrl.onToggle) {
        vm.prmActionCtrl.onToggle["report_a_problem"] = function () {
          window.open(url, '_blank');
        };
      }
    };
  }]);
  app.component('prmActionListAfter', {
    require: {
      prmActionCtrl: '^prmActionList'
    },
    controller: 'prmActionListAfterController'
  });

  app.controller('prmBriefResultContainerAfterController', ['$scope', function ($scope) {
    var vm = this;
    vm.$onInit = function () {
      vm.prmBriefResultCtrl.upFrontActionsService.actionIconNamesMap["report_a_problem"] = "report_a_problem";
      vm.prmBriefResultCtrl.upFrontActionsService.actionLabelNamesMap["report_a_problem"] = "Report a Database Problem";
      vm.prmBriefResultCtrl.actionsIcons["report_a_problem"] = {
        icon: "ic_announcement_24px",
        iconSet: "action",
        type: "svg"
      };
      //TODO - what about if something gets added to this list - may need to refactor for loop
      var index = vm.prmBriefResultCtrl.upFrontActionsService.requiredUpFrontActionsList.length;
      if (vm.prmBriefResultCtrl.upFrontActionsService.requiredUpFrontActionsList[0] != "report_a_problem") {
        // ensure we aren't duplicating the entry
        if (index > 1) {
          vm.prmBriefResultCtrl.upFrontActionsService.requiredUpFrontActionsList[index - (index - 2)] = vm.prmBriefResultCtrl.upFrontActionsService.requiredUpFrontActionsList[1];
        }
        vm.prmBriefResultCtrl.upFrontActionsService.requiredUpFrontActionsList[index - (index - 1)] = vm.prmBriefResultCtrl.upFrontActionsService.requiredUpFrontActionsList[0];
        vm.prmBriefResultCtrl.upFrontActionsService.requiredUpFrontActionsList[0] = "report_a_problem";
      }

        var url = "https://sunybroome.libwizard.com/f/report-a-problem?5327305=" + vm.prmBriefResultCtrl.item.pnx.display.title[0] + " (https://suny-bcc.primo.exlibrisgroup.com/discovery/fulldisplay?" + encodeURIComponent("docid=" + vm.prmBriefResultCtrl.item.pnx.control.recordid + "&vid=01SUNY_BCC:TEST01&onCampus=true") + ")";
	
      vm.prmBriefResultCtrl.openTab = function (e, t) {
        e.stopPropagation();
        if (t == "report_a_problem") {
          window.open(url, '_blank');
        } else {
          this.openItemMenu(e);
          this.selectedAction = t;
        }
      };
    };
  }]);
  app.component('prmBriefResultContainerAfter', {
    require: {
      prmBriefResultCtrl: '^prmBriefResultContainer'
    },
    controller: 'prmBriefResultContainerAfterController'
  });
  /*end add report a problem*/



/*add report a problem - adapted from Northeastern University Library, then by SUNY Upstate (Go Heidi) */
 




 // Report a Problem
 // app.controller('ActionContainerAfterController', [function() {
 //     var vm = this;
//
 //     this.$onInit = function(){
 //       {
 //         vm.getPermalink = getPermalink;
//
  //        function getPermalink() {
 //             var permalink = encodeURIComponent(window.location.href);
  //            var formField = 'https://sunybroome.libanswers.com/form?queue_id=3369&resource=';
  //            formField += permalink;
 //             return formField;
 //         return vm.parentCtrl.hasSearchResults;
 //           console.log('url: ' + window.location.href);
 //         }
 //       }
 //     };
 // }]);
 // app.component('prmActionContainerAfter', {
 //     bindings: { parentCtrl: '<' },
 //     controller: 'ActionContainerAfterController',
 //     template: '<div id="report-problem" layout="row" layout-align="center center"><a id="problemLink" target="_blank" href="{{$ctrl.getPermalink()}}" title="Report a problem"><img src="custom/01SUNY_BCC-TEST01/img/warning.png">&nbsp;&nbsp;Report a problem with this item</a></div>'
  //});


// app.component('prmServiceDetailsAfter', {
//          template: '<show-pnx></show-pnx>'
//        });

//angular.module('showPNX', []).component('show-pnx', {
 // bindings: { parentCtrl: '<' },
//  controller: function controller($scope, $http, $element) {
//    this.$onInit = function () {

 //	var pnx= $scope.$parent.$parent.$parent.$parent.$ctrl.item.pnx;
//	var recordid = $scope.$parent.$ctrl.item.pnx.control.recordid[0];
//	// console.log("PNX: "+ recordid);
//	return recordid;
//	}}}



/*----------below is the code for libchat-----------*/
                // Adds the chat button
                (function() {
                                var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = 'true';
                                lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'sunybroome.libanswers.com/load_chat.php?hash=32a52ccc4379f28df643eee2e80b1bfb';
                                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
                })();
/*---------------libchat code ends here---------------*/


/* external search - Ithaca College */

// External search links
app.controller('ebscoLinkController', [function ($stateParams, $state) {
  this.$onInit = function () {
    {
      var spaceToPlus = function spaceToPlus(str) {
        return str.replace(/\s+/g, '+');
      };

      var convertToEbsco = function convertToEbsco(primoSearch) {
        var ebscoSearchString = '';
        if (!Array.isArray(primoSearch)) {
          ebscoSearchString = spaceToPlus(primoSearch.split(/,/)[2]);
        } else {
          for (var i = 0; i < primoSearch.length; i++) {
            var searchTerms = spaceToPlus(primoSearch[i].split(/,/)[2]);
            var conjunction = primoSearch[i].split(/,/)[3] || '';
            switch (primoSearch[i].split(/,/)[0]) {
              case 'title':
                ebscoSearchString += 'TI+(' + searchTerms + ')';
                break;
              case 'creator':
                ebscoSearchString += 'AU+(' + searchTerms + ')';
                break;
              case 'sub':
                ebscoSearchString += 'SU+(' + searchTerms + ')';
                break;
              default:
                // handles 'any' case
                ebscoSearchString += '(' + searchTerms + ')';
            }
            if (i !== primoSearch.length - 1) {
              ebscoSearchString += '+' + conjunction + '+';
            }
          }
        }
        return ebscoSearchString;
      };

      var convertToWorldCat = function convertToWorldCat(primoSearch) {
        var worldCatSearchString = '';
        if (!Array.isArray(primoSearch)) {
          worldCatSearchString = spaceToPlus(primoSearch.split(/,/)[2]);
        } else {
          for (var i = 0; i < primoSearch.length; i++) {
            var searchTerms = spaceToPlus(primoSearch[i].split(/,/)[2]);
            var conjunction = primoSearch[i].split(/,/)[3] || '';
            switch (primoSearch[i].split(/,/)[0]) {
              case 'title':
                worldCatSearchString += 'ti:' + searchTerms;
                break;
              case 'creator':
                worldCatSearchString += 'au:' + searchTerms;
                break;
              default:
                worldCatSearchString += 'kw:' + searchTerms;
            }
            if (i !== primoSearch.length - 1) {
              worldCatSearchString += '+';
            }
          }
        }
        return worldCatSearchString;
      };

      var convertToGoogle = function convertToGoogle(primoSearch) {
        var googleSearchString = '';
        if (!Array.isArray(primoSearch)) {
          googleSearchString = spaceToPlus(primoSearch.split(/,/)[2]);
        } else {
          for (var i = 0; i < primoSearch.length; i++) {
            var searchTerms = spaceToPlus(primoSearch[i].split(/,/)[2]);
            var conjunction = primoSearch[i].split(/,/)[3] || '';
            googleSearchString += '(' + searchTerms + ')';
            if (i !== primoSearch.length - 1) {
              googleSearchString += '+' + conjunction + '+';
            }
          }
        }
        return googleSearchString;
      };

       function convertToNewspaper(primoSearch) {
         let newspaperSearchString = '';
         if (!Array.isArray(primoSearch)) {
           newspaperSearchString = spaceToPlus(primoSearch);
         } else {
           for (let i=0; i<primoSearch.length; i++) {
             let bit = primoSearch[i].replace(/contains/g, '');
             newspaperSearchString += spaceToPlus(bit) + ',';
           }
         }
         return newspaperSearchString;
       }

      // get the view for image paths
      var queryString = window.location.search;
      var urlParams = new URLSearchParams(queryString);
      this.view = urlParams.get('vid').replace(':', '-');

      var primoSearch = this.parentCtrl.$stateParams.query; // can be a string OR array!

      var proxyString = 'http://webster.sunybroome.edu:2048/login?url=';

      var ebscoSearchString = convertToEbsco(primoSearch);
      var googleSearchString = convertToGoogle(primoSearch);
      var worldCatSearchString = convertToWorldCat(primoSearch);
       const npSearchString = convertToNewspaper(primoSearch);

       this.newspaperLabel = 'Newspapers';
       const newspaperBase = 'https://suny-bcc.primo.exlibrisgroup.com/discovery/npsearch?vid=01SUNY_BCC:TEST01&lang=en';
       this.newspaperSearchUrl = newspaperBase + '&query=' + npSearchString;

      this.ebscoLabel = 'EBSCO';
      var ebscoBaseUrl = 'https://search.ebscohost.com/login.aspx?direct=true&site=eds-live&scope=site&type=0&custid=s8999690&groupid=main&profid=eds&mode=bool&lang=en&authtype=ip,guest';
      var ebscoSearchUrl = ebscoBaseUrl + '&bquery=' + ebscoSearchString;
      this.ebscoProxiedSearchUrl = proxyString + ebscoSearchUrl;

      this.googleLabel = 'Google Scholar';
      var googleBaseUrl = 'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C33&inst=7210957415625843320&q=';
      this.googleProxiedSearchUrl = googleBaseUrl + googleSearchString;

      this.worldCatLabel = 'WorldCat';
      var worldCatBaseUrl = 'https://sunybroome.on.worldcat.org/search?queryString=';
      this.worldCatSearchUrl = worldCatBaseUrl + worldCatSearchString;
   //   this.worldCatProxiedSearchUrl = proxyString + worldCatBaseUrl + worldCatSearchString;
    }
  };
}]);


 app.component('prmSearchResultSortByAfter', {
//app.component('prmFacetAfter', {
  bindings: { parentCtrl: '<' },
  controller: 'ebscoLinkController',
  template: '<div id="ic-external-links"><h3 ng-class="section-title-header"><span>Try My Search In&hellip;</span></h3><div id="ic-ebsco-link-block"><a href="{{$ctrl.ebscoProxiedSearchUrl}}" target="_blank" id="ic-ebsco-link"><img src="custom/{{$ctrl.view}}/img/ebsco.svg"> {{$ctrl.ebscoLabel}} <prm-icon svg-icon-set="primo-ui" icon-type="svg" icon-definition="open-in-new"></prm-icon></a></div><div id="ic-google-link-block"><a href="{{$ctrl.googleProxiedSearchUrl}}" target="_blank" id="ic-google-link"><img src="custom/{{$ctrl.view}}/img/google.svg"> {{$ctrl.googleLabel}} <prm-icon svg-icon-set="primo-ui" icon-type="svg" icon-definition="open-in-new"></prm-icon></a></div><div id="ic-worldcat-link-block"><a href="{{$ctrl.worldCatSearchUrl}}" target="_blank" id="ic-worldcat-link"><img src="custom/{{$ctrl.view}}/img/WorldCat.svg"> {{$ctrl.worldCatLabel}} <prm-icon svg-icon-set="primo-ui" icon-type="svg" icon-definition="open-in-new"></prm-icon></a></div><div id="ic-newspaper-link-block"><a href="{{$ctrl.newspaperSearchUrl}}" target="_blank" id="ic-worldcat-link"><img src="custom/{{$ctrl.view}}/img/WorldCat.svg"> {{$ctrl.newspaperLabel}} <prm-icon svg-icon-set="primo-ui" icon-type="svg" icon-definition="open-in-new"></prm-icon></a></div></div>'
});







/* Hide/Show Other Institutions Button - Pacific University

prmAlmaMoreInstAfter  = prmAlmaOtherMembersAfter

 */

  app.component('prmAlmaOtherMembersAfter', {
    bindings: {parentCtrl: '<'},
    controller: function () {
      this.$onInit = function () {
        angular.element(document.querySelector('prm-alma-other-members md-tabs')).addClass("hide");
      };
    },
    template: '<div class="hide_show_other_institutions_container"><button class="hide_show_other_institutions_button" onclick="hide_show_other_institutions()">Show Other SUNY Libraries</button></div>'
  });

})();

function hide_show_other_institutions()
{
  if(angular.element(document.querySelector('prm-alma-other-members md-tabs')).hasClass("hide"))
  {
    angular.element(document.querySelector('prm-alma-other-members md-tabs')).removeClass("hide");
    angular.element(document.getElementsByClassName('hide_show_other_institutions_button')).text("Hide Libraries");
  }
  else
  {
    angular.element(document.querySelector('prm-alma-other-members md-tabs')).addClass("hide");
    angular.element(document.getElementsByClassName('hide_show_other_institutions_button')).text("Show Libraries");
  }

  // place button above list of libraries
  angular.element(document.querySelector('prm-alma-other-members-after')).after(angular.element(document.querySelector('prm-alma-other-members md-tabs')));
}

/*
* Add a top banner
*/
var topBanner = document.createElement('div');
topBanner.innerHTML = "<a href=https://sunybroome.libguides.com/primo-info >This is the Test View. View Current Configuration Tests for more info.</a>";
topBanner.setAttribute("style", "padding: 5px 0px 5px 0px; display: inline-block; background: #FFE300; text-align: left; width: 100%; font-weight: bold;");
var body = document.body;
body.insertBefore(topBanner, body.firstChild);	


/* Google Tag Manager */
const gtmId = 'GTM-N4TKSWC'
function addGTM(doc) {
 const newScript = doc.createElement('script')
 const scriptText = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&amp;l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`
 newScript.innerHTML = scriptText
 doc.head.append(newScript)
  
 const noscript = doc.createElement('noscript')
 const noscriptText = `&lt;iframe src="//www.googletagmanager.com/ns.html?id=${gtmId}"
height="0" width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;`
 noscript.innerHTML = noscriptText
 doc.body.insertBefore(noscript, doc.body.firstChild)
}
addGTM(document)



