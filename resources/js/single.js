var post_url = window.location.href;

$(document).ready(function () {	
    $("ul#mentions-list").empty();

    $.getJSON("https://webmention.io/api/mentions?per-page=50&page=0&jsonp=?", {
        target: post_url
    }, function (data) {
        if (data.links.length !== 0) {
            $("#post-mentions").show();
        }

        $.each(data.links, function (_, link) {
            var activity_type = link.activity.type;

            if (
                ! (
                    link.data.author
                    && link.data.author.name
                    && activity_type
                )
            ) {
                return;
            }

            var $list = $("ul#mentions-list");

            switch (activity_type) {
                case "like":
                    $list.prepend("<li class=\"mention-social\"><a href=\"" + link.data.url + "\">" + link.data.author.name + "</a> <span class=\"commented\">liked this.</span></li>");
                    break;
                case "link":
                    $list.prepend("<li class=\"mention-social\"><a href=\"" + link.data.url + "\">" + link.data.author.name + "</a> <span class=\"commented\">linked to this.</span></li>");
                    break;
                case "repost":
                    $list.prepend("<li class=\"mention-social\"><a href=\"" + link.data.url + "\">" + link.data.author.name + "</a> <span class=\"commented\">reposted this.</span></li>");
                    break;
                case "reply":
                    let mention_date = new Date(link.verified_date);
                    $list.prepend( "<li class=\"mention\">"
                        + "<div class=\"mention-author u-author\">" 
                        + "<img src=\"" + link.data.author.photo + "\" class=\"u-photo\"" 
                        + "title=\"" + link.data.author.name + "\" width=\"40\" >" 
                        + "<a href=\"" + link.data.author.url + "\" >"
                        + link.data.author.name + "</a> replied:</div>"
                        + "<div class=\"mention-text\">" + (link.data.content || "") + "</div>"
                        + "<a href=\"" + link.data.url + "\">"
                        + "<time>" + mention_date.getUTCDate() + "/" + (mention_date.getUTCMonth() + 1) 
                        + "/" + mention_date.getUTCFullYear()
                        + "</time></a>"
                        + "</li>");
                    break;
                default:
                    console.error('Unhandled activity type: ' + activity_type);
                    break;
            }	
        });
    });
});
