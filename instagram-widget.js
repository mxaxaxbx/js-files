jQuery(document).ready(function(a){const t=a(".widget-instagram").attr("id");t&&(a(".username-insta").append(a('<span class="fab fa-instagram instagram__logo"></span>')).append(t).attr({href:"https://www.instagram.com/"+t,target:"_blank"}),a.get("https://www.instagram.com/"+t).done(function(t){const e=t.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0,-1);console.log(e);const r=JSON.parse(e).entry_data.ProfilePage[0].graphql.user;a(".username-insta span").remove(),a(".username-insta").prepend("<img src="+r.profile_pic_url+">").after(a("<ul class=instagram />"));for(let t of r.edge_owner_to_timeline_media.edges){const e=t.node;let r="";switch(e.__typename){case"GraphVideo":r="instagram__video",e.product_type&&"igtv"===e.product_type&&(r="instagram__igtv");break;case"GraphSidecar":r="instagram__multi-fotos"}a("<img />",{src:e.thumbnail_src}).appendTo(a(".instagram")).wrap(a("<li>")).wrap(a("<a>",{href:"https://www.instagram.com/p/"+e.shortcode,target:"_blank",class:r}))}}).fail(function(a){console.error("Unable to retrieve photos. Reason: "+a.toString())}))});
