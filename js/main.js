(function(html) {
    html.className = html.className.replace(/\bno-js\b/, 'js')
})(document.documentElement);

/* <![CDATA[ */
var cnArgs = {
    "ajaxUrl": "https:\/\/www.ukshowplates.com\/wp-admin\/admin-ajax.php",
    "nonce": "2c5e3675eb",
    "hideEffect": "fade",
    "position": "bottom",
    "onScroll": "0",
    "onScrollOffset": "100",
    "onClick": "0",
    "cookieName": "cookie_notice_accepted",
    "cookieTime": "2592000",
    "cookieTimeRejected": "2592000",
    "cookiePath": "\/",
    "cookieDomain": "",
    "redirection": "0",
    "cache": "0",
    "refuse": "0",
    "revokeCookies": "0",
    "revokeCookiesOpt": "automatic",
    "secure": "1"
};
/* ]]> */


[{
        "@context": "https:\/\/schema.org",
        "@type": "WebSite",
        "@id": "https:\/\/www.ukshowplates.com#website",
        "headline": "UK Show Plates",
        "name": "UK Show Plates",
        "description": "UNITED_KINGDOM Show Plates is the market leader when it comes to providing exceptional grade Show Plates & Number Plates at the best prices online \ud83d\udd25",
        "url": "https:\/\/www.ukshowplates.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https:\/\/www.ukshowplates.com\/?s={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    },
    // Schema & Structured Data For WP v1.9.23
    {
        "@context": "https:\/\/schema.org",
        "@type": "WebPage",
        "@id": "https:\/\/www.ukshowplates.com\/#webpage",
        "inLanguage": "en-GB",
        "name": "UK Show Plates | Quality Show Plates &amp; Number Plates to Buy Online",
        "url": "https:\/\/www.ukshowplates.com\/",
        "description": "UK Show Plates is the UK\u2019s No 1 show plates &amp; number plate maker, we make high quality replacement registration plates and showplates that are guaranteed to last! You\u2019ll love our service, our plates are high quality, and delivered direct to you with a range of delivery options.",
        "mainEntity": {
            "@type": "Article",
            "mainEntityOfPage": "https:\/\/www.ukshowplates.com\/",
            "image": "",
            "headline": "UK Show Plates | Quality Show Plates &amp; Number Plates to Buy Online",
            "description": "UK Show Plates is the UK\u2019s No 1 show plates &amp; number plate maker, we make high quality replacement registration plates and showplates that are guaranteed to last! You\u2019ll love our service, our plates are high quality, and delivered direct to you with a range of delivery options.",
            "keywords": "",
            "datePublished": "2012-11-08T09:17:50+00:00",
            "dateModified": "2020-03-31T10:36:45+00:00",
            "author": {
                "@type": "Person",
                "name": "ukshowplateress",
                "description": "",
                "url": ""
            },
            "publisher": {
                "@type": "Organization",
                "logo": {
                    "@type": "ImageObject",
                    "url": "",
                    "width": "",
                    "height": ""
                },
                "name": "UK Show Plates"
            }
        },
        "speakable": {
            "@type": "SpeakableSpecification",
            "xpath": ["\/html\/head\/title", "\/html\/head\/meta[@name='description']\/@content"]
        }
    }
]
var OrdersID = "";








$(document).ready(function() {

    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar_srink");
        } else {
            $(".navbar").removeClass("navbar_srink");
        }
    });




    /* ============================ SCROLL IT JS ====================== */
    $.scrollIt({
        topOffset: -50
    });
    $(".nav-link").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    });


    // ======================
    $(".carousel-lft").waypoint(function(dir) {
        $(".carousel-lft").addClass('animate__animated animate__bounceInLeft animate__slow')


    }, {
        offset: '200px'
    })

    // $(".carousel-up").waypoint(function(dir) {

    //     $(".carousel-up").addClass('animate__animated animate__bounceInUp')

    // }, {
    //     offset: '400px'
    // })

    // $(".carousel-down").waypoint(function(dir) {

    //     $(".carousel-down").addClass('animate__animated animate__bounceInDown')

    // }, {
    //     offset: '400px'
    // })

    // $(".carousel-right").waypoint(function(dir) {

    //     $(".carousel-right").addClass('animate__animated animate__bounceInRight')

    // }, {
    //     offset: '400px'
    // })

});

// ==================== CROLL EFFECTS

// var waypoint = new Waypoint({
//     element: document.getElementById('px-offset-waypoint'),
//     handler: function(direction) {
//         notify('I am 20px from the top of the window')
//     },
//     offset: 20
// })
document.getElementsByClassName('navigation-top')[0].style.display = 'block';
document.getElementsByClassName('largemenu')[0].style.display = 'block';

window.__lo_site_id = 224969;

(function() {
    var wa = document.createElement('script');
    wa.type = 'text/javascript';
    wa.async = true;
    wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wa, s);
})();

(function(w, d, t, r, u) {
    var f, n, i;
    w[u] = w[u] || [], f = function() {
        var o = {
            ti: "26346791"
        };
        o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad")
    }, n = d.createElement(t), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function() {
        var s = this.readyState;
        s && s !== "loaded" && s !== "complete" || (f(), n.onload = n.onreadystatechange = null)
    }, i = d.getElementsByTagName(t)[0], i.parentNode.insertBefore(n, i)
})(window, document, "script", "//bat.bing.com/bat.js", "uetq");