$('#login').on("click",function () {
    window.location.href = "";
// alert("login clicked");

})
if (typeof window.location.origin === "undefined"){
    window.location.origin = window.location.protocol + "//" + window.location.host;
}
var utils = {
  // console.log(typeof(utils));
        renderPageTemplate:function(templateId, data) {
        var _data = data || {};
        // console.log(_data);
        var templateScript = $(templateId).html();
        // console.log(templateScript);
        var template = Handlebars.compile(templateScript);
        // console.log(template);

          $("#page-container").empty();
        $("#page-container").append(template(_data));
    },
      pageNotFoundError: function() {
      // console.log(typeof(pageNotFoundError));
        var data = {
          // console.log(data),
            errorMessage: "404 - Page Not Found"
        };
        this.renderPageTemplate("#error-page-template", data);
        console.log(  this.renderPageTemplate("#error-page-template", data));
    },
    fetch: function(url, data) {
        var _data = data || {};
        // console.log(typeof(fetch));
        // console.log(fetch);
        return $.ajax({
            context: this,
            url: window.location.origin + "/" + url,
            data: _data,
            method: "GET",
            dataType: "JSON"
        });
    }
};
var router = {
  // console.log(router);
    routes: {},
    init: function() {
      // console.log(typeof(init));
      // console.log(init);
        this.bindEvents(); //METHOD CALLING WHICH IS STORED IN bindEvents VARIABLE
        $(window).trigger("hashchange");
          // $(#Login).trigger("click");
          // console.log($('#login'));
             $('#login').trigger('click');
    },
    bindEvents: function() {
      // console.log(typeof(bindEvents));
        $(window).on("hashchange", this.render.bind(this));/////
        // console.log(this.render.bind(this));
    },
    render: function() {
        var keyName = window.location.hash.split("/")[0];
        // console.log(keyName);
        var url = window.location.hash;
        // console.log(url);
        $("#page-container")
            .find(".active")
                .hide()
                    .removeClass("active");
        if (this.routes[keyName]) {
            this.routes[keyName](url);
            // console.log(  this.routes[keyName](url));

        } else {
            utils.pageNotFoundError();
        }
    }
};
var spaRoutes = {
// console.log(spaRoutes);
// console.log(typeof(spaRoutes));
    "#home": function(url) {
      // console.log(typeof(home));
      // console.log(home);
        console.log('home was called...');
        utils.renderPageTemplate("#home-page-template");
    },
    "#SignUp": function(url) {
      // console.log(typeof(SignUp));
      // console.log(SignUp);
        // console.log('about was called...');
        utils.renderPageTemplate("#about-page-template");
    },
    "#Login": function(url) {
      // console.log(typeof(Login));
      // console.log(Login);
        // console.log('contact was called...');
        utils.renderPageTemplate("#contact-page-template");
    }
};
var spaRouter = $.extend({}, router, {
  // console.log(spaRouter);
    routes: spaRoutes
});
 // console.log(spaRouter);
// console.log(routes);
spaRouter.init();
  //  window.location.hash = "#Login";
