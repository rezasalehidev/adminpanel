(this.webpackJsonpadminpanel=this.webpackJsonpadminpanel||[]).push([[7],{165:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(160),r=n(1),o=n.n(r),c=o.a.createContext(),l=function(e,t){switch(t.type){case"login":var n=t.payload;return localStorage.setItem("token",n),{state:n};case"check":localStorage.getItem("token")||t.payload.history.replace("/");break;case"logout":localStorage.removeItem("token"),t.payload.history.push("/");break;default:return e}};t.b=function(e){var t=Object(r.useReducer)(l,""),n=Object(a.a)(t,2),u=n[0],i=n[1];return o.a.createElement(c.Provider,{value:{state:u,dispatch:i}},e.children)}},427:function(e,t,n){e.exports=n(524)},500:function(e,t,n){},501:function(e,t,n){},524:function(e,t,n){"use strict";n.r(t);n(428),n(438),n(120),n(121),n(122),n(123),n(124),n(125),n(126),n(127),n(128),n(129),n(130),n(131),n(132),n(133),n(134),n(225),n(227),n(228),n(229),n(230),n(231),n(232),n(234),n(235),n(137),n(237),n(238),n(77),n(239),n(240),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(256),n(257),n(258),n(259),n(260),n(138),n(63),n(261),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(139),n(279),n(280),n(281),n(283),n(285),n(286),n(287),n(288),n(289),n(290),n(292),n(293),n(295),n(296),n(297),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(90),n(315),n(316),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(147),n(336),n(337),n(91),n(338),n(339),n(340),n(341),n(75),n(342),n(343),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(362),n(363),n(364),n(365),n(366),n(367),n(368),n(369),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(381),n(382),n(383),n(384),n(385),n(386),n(387),n(388),n(389),n(390),n(391),n(392),n(393),n(394),n(395),n(396),n(397),n(398),n(399),n(400),n(401),n(402),n(403),n(404),n(104),n(406),n(449),n(450),n(451),n(452),n(453),n(454),n(181),n(182),n(183),n(184),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(456),n(457),n(458),n(459),n(460),n(461),n(462),n(463),n(464),n(465),n(466),n(467),n(468),n(469),n(470),n(471),n(473),n(474),n(475),n(476),n(477),n(478),n(479),n(480),n(481),n(482),n(483),n(198),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(484),n(485),n(486),n(488),n(221),n(222),n(223),n(489),n(490),n(491),n(492),n(493),n(494),n(495),n(407),n(119),n(408),n(409),n(410),n(412),n(152);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var a=n(1),r=n.n(a),o=n(161),c=n.n(o),l=(n(500),n(156)),u=n(157),i=n(158),s=n(159),d=n(164),m=n(18),p=(n(501),n(165)),f=r.a.lazy((function(){return Promise.all([n.e(11),n.e(80)]).then(n.bind(null,1034))})),h=r.a.lazy((function(){return Promise.all([n.e(10),n.e(84)]).then(n.bind(null,975))})),b=r.a.lazy((function(){return Promise.all([n.e(19),n.e(85)]).then(n.bind(null,976))})),v=r.a.lazy((function(){return n.e(23).then(n.bind(null,977))})),E=r.a.lazy((function(){return n.e(24).then(n.bind(null,978))})),g=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(d.BrowserRouter,null,r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"Loading...")},r.a.createElement(p.b,null,r.a.createElement(m.g,null,r.a.createElement(m.d,{exact:!0,path:"/",name:"Login Page",render:function(e){return r.a.createElement(h,e)}}),r.a.createElement(m.d,{exact:!0,path:"/register",name:"Register Page",render:function(e){return r.a.createElement(b,e)}}),r.a.createElement(m.d,{exact:!0,path:"/404",name:"Page 404",render:function(e){return r.a.createElement(v,e)}}),r.a.createElement(m.d,{exact:!0,path:"/500",name:"Page 500",render:function(e){return r.a.createElement(E,e)}}),r.a.createElement(m.d,{path:"/",name:"Home",render:function(e){return r.a.createElement(f,e)}})))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(82),w=n.n(y),k=function(){var e=localStorage.getItem("token");return e||""}();w.a.defaults.baseURL="https://proshop50.herokuapp.com/graphql",w.a.defaults.headers.post.Accept="application/json",w.a.defaults.headers.post.token=k,c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[427,8,9]]]);
//# sourceMappingURL=main.c5cc3608.chunk.js.map