this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.loadMore"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"load-more\">\n  <button data-load-more class=\"btn btn-link btn-block\">Load more</button>\n  <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></i>\n</div>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.noNotifications"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"no-notifications\">\n  <h3>No notifications yet</h3>\n  <p>Check again later for updates</p>\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.notification"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"notification {{#if readStatus}}notification-read{{else}}notification-unread{{/if}}{{#if hasLink}} has-action{{/if}}\" data-notification-id=\"{{id}}\" data-notification-status=\"{{status}}\">\n  {{#if data.title}}<h2 class=\"title\">{{#unless readStatus}}<div class=\"notification-badge\"></div>{{/unless}}{{data.title}}</h2>{{/if}}\n  {{#if data.message}}<div class=\"description\">{{data.message}}</div>{{/if}}\n  {{#if hasLink}}<a class=\"action\" href=\"#\">See more</a>{{/if}}\n  <div class=\"subtitle\" title=\"{{moment orderAt format=\"YYYY-MM-DD hh:mm:ss A\"}}\">{{moment orderAt calendar=\"null\"}}</div>\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.notificationsError"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"notifications-error\">\n  <h3>There was an error loading notifications</h3>\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.toolbar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p><span class=\"toolbar-read-all\"><a data-read-all href=\"#\">Mark all as read</a></span><i class=\"fa fa-lg fa-fw fa-cog pull-right\" data-settings></i><i class=\"fa fa-lg fa-fw fa-refresh pull-right\" data-refresh></i></p>\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.toolbar.empty"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>&nbsp;<i class=\"fa fa-lg fa-fw fa-cog pull-right\" data-settings></i><i class=\"fa fa-lg fa-fw fa-refresh pull-right\" data-refresh></i></p>\n";
},"useData":true});