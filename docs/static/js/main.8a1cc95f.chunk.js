(this["webpackJsonpwebsite-new"] = this["webpackJsonpwebsite-new"] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, a) {
      e.exports = {
        footer: "Footer_footer__2hXiu",
        quoteArea: "Footer_quoteArea__1fM7d",
        footerLogo: "Footer_footerLogo__1t612",
        footerNav: "Footer_footerNav__3Eu0I",
        navEntry: "Footer_navEntry__2Ne1s",
        orgInfoArea: "Footer_orgInfoArea__2V2jy"
      };
    },
    function(e, t, a) {
      e.exports = {
        header: "Header_header__3OFlU",
        logo: "Header_logo__11pfq",
        headerNav: "Header_headerNav__1h7hj",
        navEntry: "Header_navEntry__q7VoF"
      };
    },
    ,
    ,
    function(e, t, a) {
      e.exports = {
        partnerList: "LandingPartners_partnerList__1ecTJ",
        partnerEntry: "LandingPartners_partnerEntry__1pD1i"
      };
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, a) {
      e.exports = { heroImage: "LandingHero_heroImage__BVO7y" };
    },
    ,
    ,
    ,
    ,
    function(e, t, a) {},
    function(e, t, a) {
      e.exports = { pageBody: "PageBody_pageBody__3VPFC" };
    },
    function(e, t, a) {
      e.exports = { button: "Button_button__1_02_" };
    },
    function(e, t, a) {
      e.exports = { heroOverlay: "LandingHeroOverlay_heroOverlay__1h__R" };
    },
    function(e, t, a) {
      e.exports = { contentArea: "LandingBodyContent_contentArea__2ceg6" };
    },
    function(e, t, a) {},
    function(e, t, a) {},
    function(e, t, a) {},
    function(e, t, a) {
      e.exports = a(50);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, a) {},
    function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(2),
        r = a(3),
        l = a(5),
        i = a(4),
        o = a(6),
        c = a(0),
        s = a.n(c),
        m = a(8),
        u = a.n(m),
        d = a(10),
        p = a(16),
        h = a(20),
        E = (a(42), a(15)),
        g = a.n(E),
        b = (function(e) {
          function t() {
            var e;
            return (
              Object(n.a)(this, t),
              ((e = Object(l.a)(this, Object(i.a)(t).call(this))).state = {
                color: "red"
              }),
              e
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return s.a.createElement(
                    "div",
                    null,
                    s.a.createElement(
                      "div",
                      { className: g.a.header },
                      s.a.createElement(
                        "div",
                        { className: g.a.logo },
                        s.a.createElement(
                          d.b,
                          { to: "/", className: "nav-link" },
                          s.a.createElement("img", {
                            src: "/images/logo-full.png",
                            style: { width: "100%", marginTop: "2.5%" }
                          })
                        )
                      ),
                      s.a.createElement(
                        "div",
                        { className: g.a.headerNav },
                        s.a.createElement(
                          d.b,
                          { to: "/create", className: "nav-link" },
                          s.a.createElement(
                            "div",
                            { className: g.a.navEntry },
                            "CREATE"
                          )
                        ),
                        s.a.createElement(
                          d.b,
                          { to: "/learn", className: "nav-link" },
                          s.a.createElement(
                            "div",
                            { className: g.a.navEntry },
                            "LEARN"
                          )
                        ),
                        s.a.createElement(
                          d.b,
                          { to: "/play", className: "nav-link" },
                          s.a.createElement(
                            "div",
                            { className: g.a.navEntry },
                            "PLAY"
                          )
                        ),
                        s.a.createElement(
                          d.b,
                          { to: "/earn", className: "nav-link" },
                          s.a.createElement(
                            "div",
                            { className: g.a.navEntry },
                            "EARN"
                          )
                        ),
                        s.a.createElement(
                          d.b,
                          { to: "/support-us", className: "nav-link" },
                          s.a.createElement(
                            "div",
                            { className: g.a.navEntry },
                            "SUPPORT US"
                          )
                        )
                      ),
                      s.a.createElement("div", null),
                      s.a.createElement("div", null)
                    ),
                    s.a.createElement(
                      "div",
                      {
                        className: "header-pusher",
                        style: {
                          position: "relative",
                          width: "100%",
                          minHeight: "7.5vh"
                        }
                      },
                      "x"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(s.a.Component),
        v = a(29),
        y = a.n(v),
        f = a(30),
        j = a.n(f),
        O = (function(e) {
          function t() {
            return (
              Object(n.a)(this, t),
              Object(l.a)(this, Object(i.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return s.a.createElement(
                    "div",
                    { className: j.a.pageBody },
                    this.props.children
                  );
                }
              }
            ]),
            t
          );
        })(s.a.Component),
        k = a(24),
        N = a.n(k),
        x = a(31),
        w = a.n(x),
        _ = (function(e) {
          function t() {
            return (
              Object(n.a)(this, t), Object(l.a)(this, Object(i.a)(t).call(this))
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "clickHandler",
                value: function() {
                  Object(h.b)(
                    "This site is currently under development, check back soon!"
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  return s.a.createElement(
                    "button",
                    { className: w.a.button, onClick: this.clickHandler },
                    this.props.label
                  );
                }
              }
            ]),
            t
          );
        })(s.a.Component),
        S = (function(e) {
          function t() {
            var e;
            return (
              Object(n.a)(this, t),
              ((e = Object(l.a)(this, Object(i.a)(t).call(this))).state = {
                color: "red"
              }),
              e
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return s.a.createElement(
                    "div",
                    { className: N.a.heroImageContainer },
                    s.a.createElement("div", { className: N.a.heroImage })
                  );
                }
              }
            ]),
            t
          );
        })(s.a.Component),
        C = a(32),
        U = a.n(C),
        A = (function(e) {
          function t() {
            var e;
            return (
              Object(n.a)(this, t),
              ((e = Object(l.a)(this, Object(i.a)(t).call(this))).state = {
                color: "red"
              }),
              e
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return s.a.createElement(
                    "div",
                    { className: U.a.heroOverlay },
                    s.a.createElement(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          left: "10%",
                          bottom: "10%",
                          width: "50%",
                          fontWeight: "bold",
                          fontSize: "5vw",
                          color: "white",
                          fontFamily: "'Holtwood One SC', serif",
                          lineHeight: "1.1em"
                        }
                      },
                      s.a.createElement(
                        "span",
                        { style: { textShadow: "4px 4px 1px black" } },
                        "Join the journey"
                      ),
                      s.a.createElement("br", null),
                      s.a.createElement(_, { label: "BECOME A DEVELOPER!" })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(s.a.Component),
        z = a(33),
        F = a.n(z),
        P = a(34),
        D = a.n(P),
        L = (function(e) {
          function t() {
            var e;
            return (
              Object(n.a)(this, t),
              ((e = Object(l.a)(this, Object(i.a)(t).call(this))).state = {
                color: "red"
              }),
              e
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return s.a.createElement(
                    "div",
                    { className: D.a.landingBody },
                    s.a.createElement(
                      "h1",
                      null,
                      "Create your own apps and games!"
                    ),
                    "No matter who you are, or where you are in your tech career, Dev Launchers will propel you to the next level!",
                    s.a.createElement(
                      "ul",
                      null,
                      s.a.createElement(
                        "li",
                        null,
                        "Students new to technology learn with hands on instruction from tech experts"
                      ),
                      s.a.createElement(
                        "li",
                        null,
                        "Adults seeking experience are given opportunities to work alongside tech mentors"
                      ),
                      s.a.createElement(
                        "li",
                        null,
                        "Tech professionals gain skills managing teams, leading projects, and contributing to a powerful platform built to solve a",
                        " ",
                        s.a.createElement("b", null, "serious problem")
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(s.a.Component),
        H = a(35),
        R = a.n(H),
        T = (function(e) {
          function t() {
            var e;
            return (
              Object(n.a)(this, t),
              ((e = Object(l.a)(this, Object(i.a)(t).call(this))).state = {
                color: "red"
              }),
              e
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return s.a.createElement(
                    "div",
                    { className: R.a.landingBody },
                    s.a.createElement(
                      "h1",
                      null,
                      "Our Programs ",
                      s.a.createElement(
                        "span",
                        { style: { fontSize: "1rem" } },
                        "(for teens)"
                      )
                    ),
                    s.a.createElement(
                      "div",
                      {
                        className: "spark-program-area",
                        style: { display: "flex" }
                      },
                      s.a.createElement(
                        "div",
                        {
                          className: "program-image",
                          style: {
                            width: "40%",
                            height: "20%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                          }
                        },
                        s.a.createElement(
                          "div",
                          {
                            style: {
                              width: "80%",
                              backgroundColor: "#1c1c1c",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center"
                            }
                          },
                          s.a.createElement("img", {
                            src: "/images/spark-symbol.png",
                            style: { width: "80%", padding: "5%" }
                          }),
                          s.a.createElement(_, {
                            label: "Join Spark!",
                            fontSize: "2rem"
                          })
                        )
                      ),
                      s.a.createElement(
                        "div",
                        { style: { width: "60%" } },
                        s.a.createElement("h2", null, "Spark"),
                        "The Spark Program introduces teen students to the skills needed to develop their own games and apps! Come hang out with Dev Launchers and learn how to Code or create Digital Art.",
                        s.a.createElement(
                          "ul",
                          null,
                          s.a.createElement(
                            "li",
                            null,
                            "Learn computer science and digital design through games and apps!"
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            "Work alongside professional developers!"
                          ),
                          s.a.createElement("li", null, "Make friends!"),
                          s.a.createElement("li", null, "Eat free snacks!"),
                          s.a.createElement(
                            "li",
                            null,
                            "Earn levels and prizes!"
                          )
                        )
                      )
                    ),
                    s.a.createElement(
                      "div",
                      {
                        className: "ignition-program-area",
                        style: { display: "flex", marginTop: "5%" }
                      },
                      s.a.createElement(
                        "div",
                        {
                          className: "program-image",
                          style: {
                            width: "40%",
                            height: "20%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                          }
                        },
                        s.a.createElement(
                          "div",
                          {
                            style: {
                              width: "80%",
                              backgroundColor: "#1c1c1c",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center"
                            }
                          },
                          s.a.createElement("img", {
                            src: "/images/launch-symbol.png",
                            style: { width: "80%", padding: "5%" }
                          }),
                          s.a.createElement(_, {
                            label: "Join Ignition!",
                            fontSize: "2rem"
                          })
                        )
                      ),
                      s.a.createElement(
                        "div",
                        { style: { width: "60%" } },
                        s.a.createElement("h2", null, "Ignition"),
                        "Our Ignition Program offers an in-depth, rigorous development experience for students looking to take a deeper dive into the realm of technology and digital creation. We'll work with you to create your own unique game or app while preparing you for a highly paid career doing something you love!",
                        s.a.createElement(
                          "ul",
                          null,
                          s.a.createElement("li", null, "Create your own app!"),
                          s.a.createElement("li", null, "Eat free snacks!"),
                          s.a.createElement(
                            "li",
                            null,
                            "Free meals during lab sessions!"
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            "Earn levels and prizes!"
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            "Get connected to internship opportunities, code bootcamps, tech companies, and schools!"
                          )
                        ),
                        "For students who qualify, we also offer:",
                        s.a.createElement(
                          "ul",
                          null,
                          s.a.createElement(
                            "li",
                            null,
                            "Free transportation to sessions"
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            "Free take-home laptop rentals!"
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(s.a.Component),
        M = a(36),
        I = a.n(M),
        B = (function(e) {
          function t() {
            var e;
            return (
              Object(n.a)(this, t),
              ((e = Object(l.a)(this, Object(i.a)(t).call(this))).state = {
                color: "red"
              }),
              e
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return s.a.createElement(
                    "div",
                    { className: I.a.landingBody },
                    s.a.createElement(
                      "h1",
                      null,
                      "Our Organization",
                      s.a.createElement(
                        "span",
                        { style: { fontSize: "1rem" } },
                        " (for everyone)"
                      )
                    ),
                    "Dev Launchers is a nonprofit intent on empowering young people from diverse communities",
                    s.a.createElement(
                      "div",
                      null,
                      s.a.createElement(
                        "h2",
                        null,
                        "We love what we do. You should too!"
                      ),
                      s.a.createElement(
                        "div",
                        { style: { display: "flex" } },
                        s.a.createElement(
                          "div",
                          { style: { width: "50%" } },
                          "Your time is valuable, do something you love. Dev Launchers is built for people just like you, take a look around and join us!"
                        ),
                        s.a.createElement(
                          "div",
                          {
                            style: {
                              width: "50%",
                              display: "flex",
                              justifyContent: "center"
                            }
                          },
                          s.a.createElement(_, { label: "Become a Mentor" })
                        )
                      )
                    ),
                    s.a.createElement(
                      "div",
                      null,
                      s.a.createElement(
                        "h2",
                        null,
                        "Technology should be accessible"
                      ),
                      s.a.createElement(
                        "div",
                        { style: { display: "flex" } },
                        s.a.createElement(
                          "div",
                          { style: { width: "50%" } },
                          "We seek out individuals from diverse, underserved communities and empower them to create. Know a young person who's excited about technology? Send them our way!"
                        ),
                        s.a.createElement(
                          "div",
                          {
                            style: {
                              width: "50%",
                              display: "flex",
                              justifyContent: "center"
                            }
                          },
                          s.a.createElement(_, { label: "Nominate a Student" })
                        )
                      )
                    ),
                    s.a.createElement(
                      "div",
                      null,
                      s.a.createElement(
                        "h2",
                        null,
                        "We believe in Open Source"
                      ),
                      s.a.createElement(
                        "div",
                        { style: { display: "flex" } },
                        s.a.createElement(
                          "div",
                          { style: { width: "50%" } },
                          "Everything, from our platform to our curriculum to the projects we develop, is released to the open source community. We rely on contributors to grow our platform and continue serving our students!"
                        ),
                        s.a.createElement(
                          "div",
                          {
                            style: {
                              width: "50%",
                              display: "flex",
                              justifyContent: "center"
                            }
                          },
                          s.a.createElement(_, { label: "Find us on GitHub" })
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(s.a.Component),
        W = a(18),
        V = a.n(W),
        q = (function(e) {
          function t() {
            var e;
            return (
              Object(n.a)(this, t),
              ((e = Object(l.a)(this, Object(i.a)(t).call(this))).state = {
                color: "red"
              }),
              e
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return s.a.createElement(
                    "div",
                    { className: V.a.landingBody },
                    s.a.createElement("h1", null, "Our Partners"),
                    "We partner with organizations doing outreach to bring in a diverse range of students, and for-profit partners so Dev Launchers can grow and continue to do what we love!",
                    s.a.createElement(
                      "div",
                      { className: V.a.partnerList },
                      s.a.createElement(
                        "div",
                        { className: V.a.partnerEntry },
                        "Austin Public Library"
                      ),
                      s.a.createElement(
                        "div",
                        { className: V.a.partnerEntry },
                        "CodeSandbox"
                      ),
                      s.a.createElement(
                        "div",
                        { className: V.a.partnerEntry },
                        "Phaser 3"
                      )
                    ),
                    s.a.createElement("div", null),
                    s.a.createElement("div", null)
                  );
                }
              }
            ]),
            t
          );
        })(s.a.Component),
        G = (function(e) {
          function t() {
            var e;
            return (
              Object(n.a)(this, t),
              ((e = Object(l.a)(this, Object(i.a)(t).call(this))).state = {
                color: "red"
              }),
              e
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return s.a.createElement(
                    "div",
                    { className: F.a.contentArea },
                    s.a.createElement(L, null),
                    s.a.createElement("hr", null),
                    s.a.createElement(T, null),
                    s.a.createElement("hr", null),
                    s.a.createElement(B, null),
                    s.a.createElement("hr", null),
                    s.a.createElement(q, null)
                  );
                }
              }
            ]),
            t
          );
        })(s.a.Component),
        J = (function(e) {
          function t() {
            var e;
            return (
              Object(n.a)(this, t),
              ((e = Object(l.a)(this, Object(i.a)(t).call(this))).state = {
                color: "red"
              }),
              e
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return s.a.createElement(
                    "div",
                    { className: y.a.landingBody },
                    s.a.createElement(S, null),
                    s.a.createElement(A, null),
                    s.a.createElement(O, null, s.a.createElement(G, null))
                  );
                }
              }
            ]),
            t
          );
        })(s.a.Component),
        Y = a(14),
        Q = a.n(Y),
        K = (function(e) {
          function t() {
            var e;
            return (
              Object(n.a)(this, t),
              ((e = Object(l.a)(this, Object(i.a)(t).call(this))).state = {
                color: "red"
              }),
              e
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return s.a.createElement(
                    "div",
                    { className: Q.a.footer },
                    s.a.createElement(
                      "div",
                      { className: Q.a.quoteArea },
                      this.getRandomQuote()
                    ),
                    s.a.createElement("img", {
                      className: Q.a.footerLogo,
                      src: "/images/logo-monogram.png"
                    }),
                    " ",
                    s.a.createElement(
                      "div",
                      { className: Q.a.footerNav },
                      s.a.createElement(
                        d.b,
                        { to: "/create", className: "nav-link" },
                        s.a.createElement(
                          "div",
                          { className: Q.a.navEntry },
                          "CREATE"
                        )
                      ),
                      s.a.createElement(
                        d.b,
                        { to: "/learn", className: "nav-link" },
                        s.a.createElement(
                          "div",
                          { className: Q.a.navEntry },
                          "LEARN"
                        )
                      ),
                      s.a.createElement(
                        d.b,
                        { to: "/play", className: "nav-link" },
                        s.a.createElement(
                          "div",
                          { className: Q.a.navEntry },
                          "PLAY"
                        )
                      ),
                      s.a.createElement(
                        d.b,
                        { to: "/earn", className: "nav-link" },
                        s.a.createElement(
                          "div",
                          { className: Q.a.navEntry },
                          "EARN"
                        )
                      ),
                      s.a.createElement(
                        d.b,
                        { to: "/support-us", className: "nav-link" },
                        s.a.createElement(
                          "div",
                          { className: Q.a.navEntry },
                          "SUPPORT US"
                        )
                      )
                    ),
                    s.a.createElement(
                      "div",
                      { className: Q.a.orgInfoArea },
                      "Terms of Service | Privacy Policy | \xa9Dev Launchers, 2020."
                    )
                  );
                }
              },
              {
                key: "getRandomQuote",
                value: function() {
                  var e = [
                    "Technology, like art, is a soaring exercise of the human imagination. \u2013 Daniel Bell",
                    "Innovation is the outcome of a habit, not a random act. \u2013 Sukant Ratnakar",
                    "Any sufficiently advanced technology is indistinguishable from magic. \u2013 Arthur C. Clarke",
                    "The technology you use impresses no one. The experience you create with it is everything. \u2013 Sean Gerety",
                    "Technology is best when it brings people together. \u2013 Matt Mullenweg",
                    "Technology is nothing. What\u2019s important is that you have a faith in people, that they\u2019re basically good and smart, and if you give them tools, they\u2019ll do wonderful things with them. \u2013 Steve Jobs"
                  ];
                  return e[parseInt(e.length * Math.random())];
                }
              }
            ]),
            t
          );
        })(s.a.Component),
        X = (function(e) {
          function t() {
            return (
              Object(n.a)(this, t), Object(l.a)(this, Object(i.a)(t).call(this))
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return s.a.createElement(
                    "div",
                    null,
                    s.a.createElement(b, null),
                    s.a.createElement(J, null),
                    s.a.createElement(K, null)
                  );
                }
              }
            ]),
            t
          );
        })(s.a.Component),
        $ = (function(e) {
          function t() {
            return (
              Object(n.a)(this, t), Object(l.a)(this, Object(i.a)(t).call(this))
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return s.a.createElement(
                    "div",
                    null,
                    s.a.createElement(b, null),
                    s.a.createElement(
                      O,
                      null,
                      s.a.createElement("br", null),
                      s.a.createElement(
                        "h1",
                        { id: "title" },
                        "Create Games and Apps"
                      ),
                      s.a.createElement(
                        "div",
                        { className: "page-description" },
                        "These templates are where projects begin. They provide the generic structure and base logic, so you can focus on what makes your app special!"
                      ),
                      s.a.createElement("hr", null),
                      s.a.createElement(
                        "div",
                        { className: "games-area" },
                        s.a.createElement("h2", null, "Game Templates"),
                        s.a.createElement(
                          "div",
                          { className: "collection collection--small-cards" },
                          Z.games.map(function(e, t) {
                            return s.a.createElement(
                              "div",
                              { className: "entry", key: t },
                              s.a.createElement(
                                "div",
                                { className: "entry-heading" },
                                s.a.createElement(
                                  "a",
                                  {
                                    className: "entry-title",
                                    href: e.sandboxUrl,
                                    target: "_blank"
                                  },
                                  e.title
                                )
                              ),
                              s.a.createElement(
                                "div",
                                { className: "entry-content" },
                                s.a.createElement(
                                  "div",
                                  { className: "entry-image-holder" },
                                  s.a.createElement(
                                    "a",
                                    { href: e.sandboxUrl, target: "_blank" },
                                    s.a.createElement("img", {
                                      src: e.imageSrc,
                                      className: "entry-image"
                                    })
                                  )
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "entry-description" },
                                  e.description
                                )
                              )
                            );
                          })
                        )
                      ),
                      s.a.createElement("hr", null),
                      s.a.createElement(
                        "div",
                        { className: "apps-area" },
                        s.a.createElement("h2", null, "App Templates"),
                        s.a.createElement(
                          "div",
                          { className: "collection collection--small-cards" },
                          Z.apps.map(function(e, t) {
                            return s.a.createElement(
                              "div",
                              { className: "entry", key: t },
                              s.a.createElement(
                                "div",
                                { className: "entry-heading" },
                                s.a.createElement(
                                  "a",
                                  {
                                    className: "entry-title",
                                    href: e.sandboxUrl,
                                    target: "_blank"
                                  },
                                  e.title
                                )
                              ),
                              s.a.createElement(
                                "div",
                                { className: "entry-content" },
                                s.a.createElement(
                                  "div",
                                  { className: "entry-image-holder" },
                                  s.a.createElement(
                                    "a",
                                    { href: e.sandboxUrl, target: "_blank" },
                                    s.a.createElement("img", {
                                      src: e.imageSrc,
                                      className: "entry-image"
                                    })
                                  )
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "entry-description" },
                                  e.description
                                )
                              )
                            );
                          })
                        )
                      )
                    ),
                    s.a.createElement(K, null)
                  );
                }
              }
            ]),
            t
          );
        })(s.a.Component),
        Z = {
          apps: [
            {
              title: "Basic App",
              description:
                "A basic React app, ready to add your own custom designs and features to!",
              sandboxUrl:
                "https://codesandbox.io/s/project-templatesbasic-app-xfkij?fontsize=14&hidenavigation=1&theme=dark",
              githubUrl: "",
              imageSrc: "/images/thumbnails/create/basic-app.png"
            }
          ],
          games: [
            {
              title: "Virtual Pet",
              description:
                "A simple virtual pet base project. An animal moves back and forth within the screen space, interacts with a ball, and eats food.",
              sandboxUrl:
                "https://codesandbox.io/s/project-template-virtual-pet-1oyty?fontsize=14&module=%2F.DO_NOT_TOUCH%2Fmain.js",
              githubUrl: "",
              imageSrc: "/images/thumbnails/create/virtual-pet.png"
            },
            {
              title: "Space Arcade",
              description: "A twist on the classic space shooter genre!",
              sandboxUrl:
                "https://codesandbox.io/s/project-templatespace-arcade-k84gf?fontsize=14&hidenavigation=1&module=%2Findex.js&theme=dark",
              githubUrl: "",
              imageSrc: "/images/thumbnails/create/space-arcade.png"
            },
            {
              title: "Pong",
              description:
                "A simple recreation of the physics involved with the classic Pong game.",
              sandboxUrl:
                "https://codesandbox.io/s/project-template-pong-opot8?fontsize=14&module=%2Findex.js",
              githubUrl: "",
              imageSrc: "/images/thumbnails/create/pong.png"
            },
            {
              title: "Platformer",
              description:
                "A simple recreation of the physics involved with a basic platformer game.",
              sandboxUrl:
                "https://codesandbox.io/s/project-template-platformer-ky2et?fontsize=14&module=%2Findex.js",
              githubUrl: "",
              imageSrc: "/images/thumbnails/create/platformer.png"
            },
            {
              title: "Simple Physics Skeleton",
              description:
                "An incredibly simple example of joint constraints, limited to joints affecting each other in one direction.",
              sandboxUrl:
                "https://codesandbox.io/s/project-templateone-way-joint-constraints-vdily?fontsize=14",
              githubUrl: "",
              imageSrc: "/images/thumbnails/create/simple-physics-skeleton.png"
            }
          ]
        },
        ee = (function(e) {
          function t() {
            return (
              Object(n.a)(this, t), Object(l.a)(this, Object(i.a)(t).call(this))
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return s.a.createElement(
                    "div",
                    null,
                    s.a.createElement(b, null),
                    s.a.createElement(
                      O,
                      null,
                      s.a.createElement("br", null),
                      s.a.createElement(
                        "h1",
                        { id: "title" },
                        "Learn Code and Design"
                      ),
                      s.a.createElement(
                        "div",
                        { className: "page-description" },
                        "These activities are meant to familiarize students with the concepts and tools needed to begin creating games with Dev Launchers."
                      ),
                      s.a.createElement("hr", null),
                      s.a.createElement(
                        "div",
                        { className: "collection novice-area" },
                        s.a.createElement("h2", null, "Novice Activities"),
                        s.a.createElement(
                          "div",
                          { className: "collection collection--small-cards" },
                          te.novice.map(function(e, t) {
                            return s.a.createElement(
                              "div",
                              { className: "entry", key: t },
                              s.a.createElement(
                                "div",
                                { className: "entry-heading" },
                                s.a.createElement(
                                  "a",
                                  {
                                    className: "entry-title",
                                    href: e.sandboxUrl,
                                    target: "_blank"
                                  },
                                  e.title
                                )
                              ),
                              s.a.createElement(
                                "div",
                                { className: "entry-content" },
                                s.a.createElement(
                                  "div",
                                  { className: "entry-image-holder" },
                                  s.a.createElement(
                                    "a",
                                    { href: e.sandboxUrl, target: "_blank" },
                                    s.a.createElement("img", {
                                      src: e.imageSrc,
                                      className: "entry-image"
                                    })
                                  )
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "entry-description" },
                                  e.description
                                )
                              )
                            );
                          })
                        )
                      ),
                      s.a.createElement(
                        "div",
                        { className: "collection intermediate-area" },
                        s.a.createElement(
                          "h2",
                          null,
                          "Intermediate Activities"
                        ),
                        s.a.createElement(
                          "div",
                          { className: "collection collection--small-cards" },
                          te.intermediate.map(function(e, t) {
                            return s.a.createElement(
                              "div",
                              { className: "entry", key: t },
                              s.a.createElement(
                                "div",
                                { className: "entry-heading" },
                                s.a.createElement(
                                  "a",
                                  {
                                    className: "entry-title",
                                    href: e.sandboxUrl,
                                    target: "_blank"
                                  },
                                  e.title
                                )
                              ),
                              s.a.createElement(
                                "div",
                                { className: "entry-content" },
                                s.a.createElement(
                                  "div",
                                  { className: "entry-image-holder" },
                                  s.a.createElement(
                                    "a",
                                    { href: e.sandboxUrl, target: "_blank" },
                                    s.a.createElement("img", {
                                      src: e.imageSrc,
                                      className: "entry-image"
                                    })
                                  )
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "entry-description" },
                                  e.description
                                )
                              )
                            );
                          })
                        )
                      ),
                      s.a.createElement(
                        "div",
                        { className: "collection advanced-area" },
                        s.a.createElement("h2", null, "Advanced Activities"),
                        s.a.createElement(
                          "div",
                          { className: "collection collection--small-cards" },
                          te.advanced.map(function(e, t) {
                            return s.a.createElement(
                              "div",
                              { className: "entry", key: t },
                              s.a.createElement(
                                "div",
                                { className: "entry-heading" },
                                s.a.createElement(
                                  "a",
                                  {
                                    className: "entry-title",
                                    href: e.sandboxUrl,
                                    target: "_blank"
                                  },
                                  e.title
                                )
                              ),
                              s.a.createElement(
                                "div",
                                { className: "entry-content" },
                                s.a.createElement(
                                  "div",
                                  { className: "entry-image-holder" },
                                  s.a.createElement(
                                    "a",
                                    { href: e.sandboxUrl, target: "_blank" },
                                    s.a.createElement("img", {
                                      src: e.imageSrc,
                                      className: "entry-image"
                                    })
                                  )
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "entry-description" },
                                  e.description
                                )
                              )
                            );
                          })
                        )
                      )
                    ),
                    s.a.createElement(K, null)
                  );
                }
              }
            ]),
            t
          );
        })(s.a.Component),
        te = {
          novice: [
            {
              title: "Loot Boxes - Variables Intro",
              description: "Set a variable and win a prize!",
              sandboxUrl:
                "https://codesandbox.io/s/activityloot-boxesvariables-intro-kecbj?fontsize=14&module=%2FREADME.md",
              githubUrl: "",
              imageSrc:
                "/images/thumbnails/learn/loot-boxes__variables-intro.png"
            },
            {
              title: "Virtual Pet - Integer Feeding",
              description:
                "Learn to set numerical variables to feed a virtual pet.",
              sandboxUrl:
                "https://codesandbox.io/s/activityvirtual-petinteger-feeding-6cvo0?fontsize=14&module=%2FREADME.md",
              githubUrl: "",
              imageSrc:
                "/images/thumbnails/learn/virtual-pet__integer-feeding.png"
            },
            {
              title: "Loot Boxes - Multiple Variables",
              description: "Set multiple variables to win multiple prizes!",
              sandboxUrl:
                "https://codesandbox.io/s/activityloot-boxesmultiple-variables-r4lbx?fontsize=14&module=%2FREADME.md",
              githubUrl: "",
              imageSrc:
                "/images/thumbnails/learn/loot-boxes__multiple-variables.png"
            },
            {
              title: "Title Screen - Sun Position",
              description:
                "Learn about screen space by changing the position of the sun!",
              sandboxUrl:
                "https://codesandbox.io/s/activitytitle-screensun-position-bvt7z?fontsize=14&module=%2FREADME.md",
              githubUrl: "",
              imageSrc:
                "/images/thumbnails/learn/title-screen__sun-position.png"
            },
            {
              title: "Title Screen - Customize It",
              description: "Play around and create your very own title screen!",
              sandboxUrl:
                "https://codesandbox.io/s/activitytitle-screencustomize-it-zs9xp?fontsize=14&module=%2FREADME.md",
              githubUrl: "",
              imageSrc:
                "/images/thumbnails/learn/title-screen__customize-it.png"
            },
            {
              title: "Stage Maker - Array Intro",
              description:
                "Modify a stage to help your character reach their goal!",
              sandboxUrl:
                "https://codesandbox.io/s/activitystage-makerarray-intro-hye31?fontsize=14&module=%2FREADME.md",
              githubUrl: "",
              imageSrc: "/images/thumbnails/learn/stage-maker__array-intro.png"
            },
            {
              title: "Stage Maker - Multi Dimensional",
              description:
                "Modify a more complex stage to help your character reach their goal!",
              sandboxUrl:
                "https://codesandbox.io/s/activitystage-makermulti-dimensional-3e4z0?fontsize=14&module=%2FREADME.md",
              githubUrl: "",
              imageSrc:
                "/images/thumbnails/learn/stage-maker__multi-dimensional.png"
            },
            {
              title: "Stage Maker - Customize It",
              description:
                "Create your own stage using multidimensional arrays!",
              sandboxUrl:
                "https://codesandbox.io/s/activitystage-makercustomize-it-stvqt?fontsize=14&module=%2FREADME.md",
              githubUrl: "",
              imageSrc: "/images/thumbnails/learn/stage-maker__customize-it.png"
            }
          ],
          intermediate: [
            {
              title: "Block Bots - Player vs Machine",
              description:
                "Pit your programmable bot against a series of bots with increasing difficulty",
              sandboxUrl:
                "https://codesandbox.io/s/activityblock-botsplayer-vs-machine-jzdh4?fontsize=14&module=%2FREADME.md",
              githubUrl: "",
              imageSrc:
                "/images/thumbnails/learn/block-bots__player-vs-machine.png"
            },
            {
              title: "Block Bots - Player vs Player",
              description: "Pit your programmable bot against another player",
              sandboxUrl:
                "https://codesandbox.io/s/activityblock-botsplayer-vs-player-xhc1k?fontsize=14&module=%2FREADME.md",
              githubUrl: "",
              imageSrc:
                "/images/thumbnails/learn/block-bots__player-vs-player.png"
            }
          ],
          advanced: [
            {
              title: "Staircase - Array Sort",
              description: "Sort an array!",
              sandboxUrl:
                "https://codesandbox.io/s/activitystaircasearray-sort-rjurf?fontsize=14&module=%2FREADME.md",
              githubUrl: "",
              imageSrc: "/images/thumbnails/learn/staircase__array-sort.png"
            }
          ]
        },
        ae = a(17),
        ne = a.n(ae),
        re = (function(e) {
          function t() {
            var e;
            return (
              Object(n.a)(this, t),
              ((e = Object(l.a)(this, Object(i.a)(t).call(this))).state = {
                projects: []
              }),
              e.populateProjects(),
              e
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "populateProjects",
                value: function() {
                  var e = this;
                  ie().then(function(t) {
                    var a = t.devData,
                      n = t.prodData;
                    console.log(a);
                    var r = [],
                      l = Object.keys(a),
                      i = Object.keys(n);
                    l.forEach(function(e) {
                      if (0 == e.search("project__")) {
                        var t = a[e];
                        r.push({
                          name: t.name,
                          description: t.description,
                          devUrl: "https://devlaunchers.com/dev/" + t.name,
                          prodUrl: "https://devlaunchers.com/launch/" + t.name,
                          repoUrl: t.html_url
                        });
                      }
                    }),
                      i.forEach(function(e) {
                        if (0 == e.search("project__") && !l.includes(e)) {
                          var t = n[e];
                          r.push({
                            name: t.name,
                            description: t.description,
                            devUrl: "https://devlaunchers.com/dev/" + t.name
                          });
                        }
                      }),
                      e.setState({ projects: r });
                  });
                }
              },
              {
                key: "render",
                value: function() {
                  return s.a.createElement(
                    "div",
                    null,
                    s.a.createElement(b, null),
                    s.a.createElement(
                      O,
                      null,
                      s.a.createElement("br", null),
                      s.a.createElement("h1", { id: "title" }, "Check It Out"),
                      s.a.createElement(
                        "div",
                        { className: "page-description" },
                        "These games are all made by our students! Open up the development links to see their latest changes, or the production links for more stable versions of the games"
                      ),
                      s.a.createElement("hr", null),
                      s.a.createElement(
                        "div",
                        { className: "projects-area" },
                        s.a.createElement("h2", null, "Projects"),
                        s.a.createElement(
                          "div",
                          { className: "collection collection--large-cards" },
                          this.state.projects.map(function(e, t) {
                            return s.a.createElement(
                              "div",
                              { className: "entry", key: t },
                              s.a.createElement(
                                "div",
                                { className: "entry-heading" },
                                s.a.createElement(
                                  "a",
                                  {
                                    className: "entry-title",
                                    href: e.devUrl,
                                    target: "_blank"
                                  },
                                  e.name
                                ),
                                s.a.createElement(
                                  "a",
                                  {
                                    style: {
                                      display: "block",
                                      float: "right",
                                      fontSize: ".85rem",
                                      marginRight: "1%"
                                    },
                                    href: e.repoUrl,
                                    target: "_blank"
                                  },
                                  "GitHub Repo"
                                )
                              ),
                              s.a.createElement(
                                "div",
                                { className: "entry-content" },
                                s.a.createElement(
                                  "div",
                                  { className: "entry-image-holder" },
                                  s.a.createElement(
                                    "a",
                                    { href: e.sandboxUrl, target: "_blank" },
                                    s.a.createElement("div", {
                                      src: e.imageSrc,
                                      className: "entry-image"
                                    })
                                  )
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "entry-description" },
                                  e.description
                                )
                              )
                            );
                          })
                        )
                      )
                    ),
                    s.a.createElement(K, null)
                  );
                }
              }
            ]),
            t
          );
        })(s.a.Component);
      function le(e) {
        var t, a, n, r;
        return ne.a.async(function(l) {
          for (;;)
            switch ((l.prev = l.next)) {
              case 0:
                return (l.next = 2), ne.a.awrap(fetch(e));
              case 2:
                return (t = l.sent), (l.next = 5), ne.a.awrap(t.json());
              case 5:
                for (a = l.sent, n = {}, r = 0; r < a.length; r++)
                  n[a[r].name] = a[r];
                return l.abrupt("return", n);
              case 9:
              case "end":
                return l.stop();
            }
        });
      }
      function ie() {
        var e, t;
        return ne.a.async(function(a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                return (
                  (a.next = 2),
                  ne.a.awrap(
                    le(
                      "https://api.github.com/users/dev-launchers-sandbox/repos"
                    )
                  )
                );
              case 2:
                return (
                  (e = a.sent),
                  (a.next = 5),
                  ne.a.awrap(
                    le("https://api.github.com/users/dev-launchers/repos")
                  )
                );
              case 5:
                return (
                  (t = a.sent), a.abrupt("return", { devData: e, prodData: t })
                );
              case 7:
              case "end":
                return a.stop();
            }
        });
      }
      var oe = (function(e) {
          function t() {
            return (
              Object(n.a)(this, t), Object(l.a)(this, Object(i.a)(t).call(this))
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return s.a.createElement(
                    "div",
                    null,
                    s.a.createElement(b, null),
                    s.a.createElement(
                      O,
                      null,
                      s.a.createElement("br", null),
                      s.a.createElement("h1", null, "Work Hard, Play Hard"),
                      s.a.createElement(
                        "h3",
                        null,
                        "For students who join the Dev Launchers Ignition Program:"
                      ),
                      s.a.createElement(
                        "ul",
                        null,
                        s.a.createElement(
                          "li",
                          null,
                          "Create games and apps, earn rewards"
                        ),
                        s.a.createElement(
                          "li",
                          null,
                          "Help other members, receive bonus points"
                        ),
                        s.a.createElement(
                          "li",
                          null,
                          "Become a developer, get paid"
                        )
                      ),
                      s.a.createElement("hr", null),
                      s.a.createElement("h2", null, "Earn points"),
                      s.a.createElement(
                        "table",
                        {
                          style: {
                            width: "90%",
                            boxShadow:
                              "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
                            marginLeft: "auto",
                            marginRight: "auto"
                          }
                        },
                        s.a.createElement(
                          "tbody",
                          null,
                          s.a.createElement(
                            "tr",
                            {
                              style: {
                                fontWeight: "bold",
                                fontFamily: "Holtwood One SC"
                              }
                            },
                            s.a.createElement("td", null, "For Everyone")
                          ),
                          s.a.createElement(
                            "tr",
                            { style: { fontSize: ".9rem" } },
                            s.a.createElement("td", null, "Perserverence")
                          ),
                          s.a.createElement(
                            "tr",
                            null,
                            s.a.createElement(
                              "td",
                              null,
                              "\u2003Attend a lab session"
                            ),
                            s.a.createElement(
                              "td",
                              {
                                style: {
                                  fontFamily: "Holtwood One SC",
                                  fontSize: ".8rem"
                                }
                              },
                              "+5 points"
                            )
                          ),
                          s.a.createElement(
                            "tr",
                            null,
                            s.a.createElement(
                              "td",
                              null,
                              "\u2003\u2003\u2003 + Fill out session sign up form at least 24 hours before session"
                            ),
                            s.a.createElement(
                              "td",
                              {
                                style: {
                                  fontFamily: "Holtwood One SC",
                                  fontSize: ".8rem"
                                }
                              },
                              "+10 points"
                            )
                          ),
                          s.a.createElement(
                            "tr",
                            null,
                            s.a.createElement(
                              "td",
                              null,
                              "\u2003Attend 3 sessions in a row"
                            ),
                            s.a.createElement(
                              "td",
                              {
                                style: {
                                  fontFamily: "Holtwood One SC",
                                  fontSize: ".8rem"
                                }
                              },
                              "+20 points"
                            )
                          ),
                          s.a.createElement(
                            "tr",
                            { style: { fontSize: ".9rem" } },
                            s.a.createElement("td", null, "Communication")
                          ),
                          s.a.createElement(
                            "tr",
                            null,
                            s.a.createElement(
                              "td",
                              null,
                              "\u2003Send a (meaningful) message on Slack at least once during the week"
                            ),
                            s.a.createElement(
                              "td",
                              {
                                style: {
                                  fontFamily: "Holtwood One SC",
                                  fontSize: ".8rem"
                                }
                              },
                              "+1 points"
                            )
                          ),
                          s.a.createElement(
                            "tr",
                            null,
                            s.a.createElement(
                              "td",
                              null,
                              "\u2003Send at least 10 (meaningful) Slack messages during the week"
                            ),
                            s.a.createElement(
                              "td",
                              {
                                style: {
                                  fontFamily: "Holtwood One SC",
                                  fontSize: ".8rem"
                                }
                              },
                              "+15 points"
                            )
                          ),
                          s.a.createElement(
                            "tr",
                            null,
                            s.a.createElement(
                              "td",
                              null,
                              "\u2003Help another member during a lab session(record this on Slack!)"
                            ),
                            s.a.createElement(
                              "td",
                              {
                                style: {
                                  fontFamily: "Holtwood One SC",
                                  fontSize: ".8rem"
                                }
                              },
                              "+2 points"
                            )
                          ),
                          s.a.createElement(
                            "tr",
                            { style: { fontSize: ".9rem" } },
                            s.a.createElement("td", null, "Goal Oriented")
                          ),
                          s.a.createElement(
                            "tr",
                            null,
                            s.a.createElement(
                              "td",
                              null,
                              "\u2003Create a project board"
                            ),
                            s.a.createElement(
                              "td",
                              {
                                style: {
                                  fontFamily: "Holtwood One SC",
                                  fontSize: ".8rem"
                                }
                              },
                              "+10 points"
                            )
                          ),
                          s.a.createElement(
                            "tr",
                            null,
                            s.a.createElement(
                              "td",
                              null,
                              "\u2003Finish your MVP"
                            ),
                            s.a.createElement(
                              "td",
                              {
                                style: {
                                  fontFamily: "Holtwood One SC",
                                  fontSize: ".8rem"
                                }
                              },
                              "+100 points"
                            )
                          ),
                          s.a.createElement(
                            "tr",
                            {
                              style: {
                                fontWeight: "bold",
                                fontFamily: "Holtwood One SC"
                              }
                            },
                            "For Coders"
                          ),
                          s.a.createElement(
                            "tr",
                            {
                              style: {
                                fontWeight: "bold",
                                fontFamily: "Holtwood One SC"
                              }
                            },
                            s.a.createElement(
                              "td",
                              null,
                              "For Digital Designers"
                            )
                          ),
                          s.a.createElement("tr", null),
                          s.a.createElement(
                            "tr",
                            {
                              style: {
                                textAlign: "left",
                                color: "red",
                                fontSize: "1rem",
                                fontWeight: "bold"
                              }
                            },
                            s.a.createElement(
                              "td",
                              null,
                              "* Points are calculated on Saturdays before lab sessions"
                            )
                          )
                        )
                      ),
                      s.a.createElement("div", {
                        style: {
                          textAlign: "left",
                          color: "red",
                          fontSize: "1rem",
                          fontWeight: "bold"
                        }
                      }),
                      s.a.createElement("hr", null),
                      s.a.createElement("h2", null, "Spend points"),
                      "Tell me, ",
                      s.a.createElement("b", null, "what do you want?"),
                      s.a.createElement("br", null),
                      s.a.createElement("br", null),
                      "Points == $?",
                      s.a.createElement("br", null),
                      s.a.createElement("br", null),
                      s.a.createElement("br", null)
                    ),
                    s.a.createElement(K, null)
                  );
                }
              }
            ]),
            t
          );
        })(s.a.Component),
        ce = (function(e) {
          function t() {
            return (
              Object(n.a)(this, t), Object(l.a)(this, Object(i.a)(t).call(this))
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return s.a.createElement(
                    "div",
                    null,
                    s.a.createElement(b, null),
                    s.a.createElement(
                      O,
                      null,
                      s.a.createElement("br", null),
                      s.a.createElement("h1", null, "SUPPORT US")
                    ),
                    s.a.createElement(K, null)
                  );
                }
              }
            ]),
            t
          );
        })(s.a.Component),
        se =
          (a(49),
          (function(e) {
            function t() {
              return (
                Object(n.a)(this, t),
                Object(l.a)(this, Object(i.a)(t).call(this))
              );
            }
            return (
              Object(o.a)(t, e),
              Object(r.a)(t, [
                {
                  key: "render",
                  value: function() {
                    return s.a.createElement(
                      "div",
                      { className: "App" },
                      s.a.createElement(h.a, {
                        className: "toast-container",
                        toastClassName: "toast",
                        progressClassName: "toast-progress"
                      }),
                      s.a.createElement(
                        d.a,
                        null,
                        s.a.createElement(
                          p.c,
                          null,
                          s.a.createElement(p.a, {
                            exact: !0,
                            path: "/",
                            component: X
                          }),
                          s.a.createElement(p.a, {
                            path: "/create",
                            component: $
                          }),
                          s.a.createElement(p.a, {
                            path: "/learn",
                            component: ee
                          }),
                          s.a.createElement(p.a, {
                            path: "/play",
                            component: re
                          }),
                          s.a.createElement(p.a, {
                            path: "/earn",
                            component: oe
                          }),
                          s.a.createElement(p.a, {
                            path: "/support-us",
                            component: ce
                          })
                        )
                      )
                    );
                  }
                }
              ]),
              t
            );
          })(s.a.Component));
      u.a.render(s.a.createElement(se, {}), document.getElementById("root"));
    }
  ],
  [[37, 1, 2]]
]);
//# sourceMappingURL=main.8a1cc95f.chunk.js.map
