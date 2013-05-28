
  try
	{
		// Adding addtional data in case it is required by client code
		var wnSiteConfigGeneral = {
			"baseUrl": "www.myfoxdfw.com",
			"contentDomain": "http://content.worldnow.com",
			"feedsApiDomain": "http://api.worldnow.com",
			"affiliateName": "KDFW",
			"affiliateNumber": "1115",
			"staticFarmImagePrefix": "http://sphotos-d.ak.fbcdn.net/hphotos-ak-prn1/923129_10201271091644656_2017344743_n.jpg",
			"enableCommentsWidget":	"false",
			"cacheVersionBuster" : "2013-04-17-0400"
		};
	}
	catch (e) {}

	if (typeof wng_pageInfo === 'undefined') {
		var wng_pageInfo = {}; 
	}

	
	
	if (typeof wn === 'undefined') {
		document.write('<li' + 'nk rel="stylesheet" type="text/css" href="' + wnSiteConfigGeneral.contentDomain + '/global/css/_pub/off-platform.min.css?ver=' + wnSiteConfigGeneral.cacheVersionBuster + '"><\/li' + 'nk>');
		document.write('<scr' + 'ipt id="wnAffiliateConfig" type="text/javascript" src="' + wnSiteConfigGeneral.staticFarmImagePrefix + '/interface/js/wnaffiliateconfig.js?ver=' + wnSiteConfigGeneral.cacheVersionBuster + '"><\/scr' + 'ipt>');
	  document.write('<scr' + 'ipt id="wnOffPlatform" type="text/javascript" src="' + wnSiteConfigGeneral.contentDomain + '/global/js/_pub/off-platform.min.js?ver=' + wnSiteConfigGeneral.cacheVersionBuster + '"><\/scr' + 'ipt>');
	}
	
	
	
  /* 
  * Embed player. 
  */
  var wnEmbedPickUpList = wnEmbedPickUpList || [];
  var wnEmbedQS = "";
  var wnScriptsOnPage = document.getElementsByTagName('script');
  for (var i = 0, l = wnScriptsOnPage.length; i < l; i++) {
      if (wnScriptsOnPage[i].src.toLowerCase().indexOf("/wnvideo.js?") > -1 && wnScriptsOnPage[i].src.indexOf("_EMBEDDEDscript") > -1) {
          wnEmbedQS = "&" + wnScriptsOnPage[i].src.replace(/^[^\?]+\??/, '');
          if (typeof wn !== 'undefined') {
        	  wnEmbedPlayer(wnEmbedQS);
          } else {
        	  wnEmbedPickUpList.push(wnEmbedQS);
		      }
      }
  }	
	
	
	    
	var wnWidgetsIsProducerURL = new RegExp("://manage[A-Za-z0-9.]*\.worldnow.com");

	if (wnWidgetsIsProducerURL.test(document.location.href) == false) {
	// Third party reporting includes
	
	}

	
