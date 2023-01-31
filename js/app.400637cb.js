;(function (e) {
  function t(t) {
    for (
      var s, o, a = t[0], m = t[1], d = t[2], g = 0, h = [];
      g < a.length;
      g++
    )
      (o = a[g]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && h.push(r[o][0]),
        (r[o] = 0)
    for (s in m) Object.prototype.hasOwnProperty.call(m, s) && (e[s] = m[s])
    l && l(t)
    while (h.length) h.shift()()
    return n.push.apply(n, d || []), i()
  }
  function i() {
    for (var e, t = 0; t < n.length; t++) {
      for (var i = n[t], s = !0, a = 1; a < i.length; a++) {
        var m = i[a]
        0 !== r[m] && (s = !1)
      }
      s && (n.splice(t--, 1), (e = o((o.s = i[0]))))
    }
    return e
  }
  var s = {},
    r = { app: 0 },
    n = []
  function o(t) {
    if (s[t]) return s[t].exports
    var i = (s[t] = { i: t, l: !1, exports: {} })
    return e[t].call(i.exports, i, i.exports, o), (i.l = !0), i.exports
  }
  ;(o.m = e),
    (o.c = s),
    (o.d = function (e, t, i) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i })
    }),
    (o.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e
      var i = Object.create(null)
      if (
        (o.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var s in e)
          o.d(
            i,
            s,
            function (t) {
              return e[t]
            }.bind(null, s)
          )
      return i
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default']
            }
          : function () {
              return e
            }
      return o.d(t, 'a', t), t
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (o.p = '')
  var a = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    m = a.push.bind(a)
  ;(a.push = t), (a = a.slice())
  for (var d = 0; d < a.length; d++) t(a[d])
  var l = m
  n.push(['56d7', 'chunk-vendors']), i()
})({
  '00c0': function (e) {
    e.exports = JSON.parse(
      '[{"id":"tb","name":"暗流涌动","author":"The Pandemonium Institute","description":"Clouds roll in over Ravenswood Bluff, engulfing this sleepy town and its superstitious inhabitants in foreboding shadow. Freshly-washed clothes dance eerily on lines strung between cottages. Chimneys cough plumes of smoke into the air. Exotic scents waft through cracks in windows and under doors, as hidden cauldrons lay bubbling. An unusually warm Autumn breeze wraps around vine-covered walls and whispers ominously to those brave enough to walk the cobbled streets.\\n\\nAnxious mothers call their children home from play, as thunder begins to clap on the horizon. If you listen more closely, however, noises stranger still can be heard echoing from the neighbouring forest. Under the watchful eye of a looming monastery, silhouetted figures skip from doorway to doorway. Those who can read the signs know there is... Trouble Brewing.","level":"Beginner","roles":[],"isOfficial":true},{"id":"bmr","name":"血月升起","author":"The Pandemonium Institute","description":"The sun is swallowed by a jagged horizon as another winter\'s day surrenders to the night. Flecks of orange and red decay into deeper browns, the forest transforming in silent anticipation of the coming snow.\\n\\nRavenous wolves howl from the bowels of a rocky crevasse beyond the town borders, sending birds scattering from their cozy rooks. Travelers hurry into the inn, seeking shelter from the gathering chill. They warm themselves with hot tea, sweet strains of music and hearty ale, unaware that strange and nefarious eyes stalk them from the ruins of this once great city.\\n\\nTonight, even the livestock know there is a... Bad Moon Rising.","level":"Intermediate","roles":[],"isOfficial":true},{"id":"snv","name":"教派与紫罗兰","author":"The Pandemonium Institute","description":"Vibrant spring gives way to a warm and inviting summer. Flowers of every description blossom as far as the eye can see, tenderly nurtured in public gardens and window boxes overlooking the lavish promenade. Birds sing, artists paint and philosophers ponder life\'s greatest mysteries inside a bustling tavern as a circus pitches its endearingly ragged tent on the edge of town.\\n\\nAs the townsfolk bask in frivolity and mischief, indulging themselves in fine entertainment and even finer wine, dark and clandestine forces are assembling. Witches and cults lurk in majestic ruins on the fringes of the community, hosting secret meetings in underground caves and malevolently plotting the downfall of Ravenswood Bluff and its revelers.\\n\\nThe time is ripe for... Sects & Violets.","level":"Intermediate","roles":[],"isOfficial":true},{"id":"luf","name":"虚妄自由","author":"The Pandemonium Institute","description":"","level":"Veteran","roles":["balloonist","savant","amnesiac","fisherman","artist","cannibal","mutant","lunatic","widow","goblin","leviathan"],"isOfficial":true},{"id":"bge","name":"超凡双生","author":"Wedge McCloud","description":"","level":"Intermediate","roles":[],"isOfficial":true},{"id":"lse","name":"谍影重重","author":"Emptyset","description":"","level":"Intermediate","roles":[],"isOfficial":true},{"id":"aoi","name":"精神错乱","author":"Soup","description":"","level":"Intermediate","roles":[],"isOfficial":true},{"id":"iob","name":"鲜血庆典","author":"Stitchface","description":"","level":"Veteran","roles":[],"isOfficial":true},{"id":"ti","name":"邪灵附身","author":"CakeFound","description":"","level":"Expert","roles":[],"isOfficial":true},{"id":"mm","name":"古老魔法","author":"Stellarium","description":"","level":"Veteran","roles":[],"isOfficial":true},{"id":"sr","name":"茵席之乱","author":"Subdog&Sionar","description":"","level":"Expert","roles":[],"isOfficial":true},{"id":"sos","name":"寰宇决战","author":"Essler","description":"","level":"Simple","roles":[],"isOfficial":true},{"id":"wm","name":"魔法祭典","author":"Essler","description":"","level":"Expert","roles":[],"isOfficial":true},{"id":"bim","name":"无人生还","author":"Aero","description":"","level":"Simple","roles":[],"isOfficial":true}]'
    )
  },
  '00ce': function (e, t, i) {
    e.exports = i.p + 'img/maniac_ti.be999b77.png'
  },
  '013f': function (e, t, i) {
    e.exports = i.p + 'img/washerwoman.554de332.png'
  },
  '027a': function (e, t, i) {
    e.exports = i.p + 'img/barista.6c427e65.png'
  },
  '037e': function (e, t, i) {
    e.exports = i.p + 'img/draco_sr.d82d60da.png'
  },
  '0436': function (e, t, i) {
    e.exports = i.p + 'img/cerenovus.cc343942.png'
  },
  '043b': function (e, t, i) {
    e.exports = i.p + 'img/amnesiac.fbd5ab33.png'
  },
  '043f': function (e, t, i) {
    'use strict'
    i('bd0d')
  },
  '04d0': function (e, t, i) {
    e.exports = i.p + 'img/doppelganger_ti.6fa1f984.png'
  },
  '06d6': function (e, t, i) {
    e.exports = i.p + 'img/blackmailer_bim.2ad31353.png'
  },
  '0786': function (e, t, i) {
    e.exports = i.p + 'img/traitor_sos.77845856.png'
  },
  '07ab': function (e, t, i) {
    e.exports = i.p + 'img/politician.521cc53f.png'
  },
  '0985': function (e, t, i) {
    e.exports = i.p + 'img/tattletale_lse.358c34db.png'
  },
  '098f': function (e, t, i) {},
  '0a58': function (e, t, i) {
    e.exports = i.p + 'img/pariah_lse.829cc920.png'
  },
  '0a83': function (e, t, i) {
    e.exports = i.p + 'img/publicdefender_bge.93a8d83e.png'
  },
  '0a98': function (e, t, i) {
    e.exports = i.p + 'img/headnurse_ti.523bf1ab.png'
  },
  '0aaa': function (e, t, i) {
    e.exports = i.p + 'img/tb.438499cd.png'
  },
  '0ad2': function (e, t, i) {
    e.exports = i.p + 'img/secondhand_iob.974407d3.png'
  },
  '0b29': function (e, t, i) {
    e.exports = i.p + 'img/shabaloth.589858d2.png'
  },
  '0b61': function (e, t, i) {
    e.exports = i.p + 'img/lunatic.39fb7a2a.png'
  },
  '0c10': function (e, t, i) {
    'use strict'
    i('8ad3')
  },
  '0c12': function (e, t, i) {
    e.exports = i.p + 'img/oracle.8b13b932.png'
  },
  '0c4b': function (e, t, i) {
    'use strict'
    i('a063')
  },
  '0c59': function (e, t, i) {
    e.exports = i.p + 'img/ravenkeeper.a1dfbc31.png'
  },
  '0c5b': function (e, t, i) {
    e.exports = i.p + 'img/cardina_sr.30de1a68.png'
  },
  '0d06': function (e, t, i) {
    e.exports = i.p + 'img/spiritofivory.ef077db5.png'
  },
  '0e20': function (e, t, i) {
    e.exports = i.p + 'img/undertaker.4f2e9806.png'
  },
  '0e50': function (e, t, i) {
    e.exports = i.p + 'img/entropist_wm.b4aa8b66.png'
  },
  '0eae': function (e, t, i) {
    e.exports = i.p + 'img/thespian_lse.4887a7e5.png'
  },
  '0f72': function (e, t, i) {
    e.exports = i.p + 'img/bogman_iob.5f3f5798.png'
  },
  '0ff9': function (e, t, i) {
    e.exports = i.p + 'img/archmage_wm.4df42fc2.png'
  },
  1144: function (e, t, i) {
    e.exports = i.p + 'img/cinematographer_aoi.dc15c05f.png'
  },
  '11a2': function (e, t, i) {
    'use strict'
    i('8521')
  },
  '125e': function (e, t, i) {
    e.exports = i.p + 'img/chambermaid.5fa8599d.png'
  },
  '12d6': function (e, t, i) {
    'use strict'
    i('99c2')
  },
  '12f6': function (e, t, i) {
    e.exports = i.p + 'img/seer_mm.7ada769d.png'
  },
  '130e': function (e, t, i) {
    e.exports = i.p + 'img/podcaster_aoi.6a05c5d4.png'
  },
  '131d': function (e, t, i) {
    e.exports = i.p + 'img/architect_aoi.f686515a.png'
  },
  '13b7': function (e, t, i) {
    e.exports = i.p + 'img/rogue_mm.1fa24ee2.png'
  },
  1489: function (e, t, i) {
    e.exports = i.p + 'img/squire_mm.05733f23.png'
  },
  '160b': function (e, t, i) {
    e.exports = i.p + 'img/plus.9b84ce65.png'
  },
  '162b': function (e, t, i) {
    e.exports = i.p + 'img/poacher_iob.6dbf8aed.png'
  },
  '16b8': function (e, t, i) {
    e.exports = i.p + 'img/pretender_sr.79e45ecb.png'
  },
  '16b9': function (e, t, i) {
    e.exports = i.p + 'img/student_bim.f97961de.png'
  },
  '16d6': function (e, t, i) {
    e.exports = i.p + 'img/scaredycat_ti.1e628e39.png'
  },
  '16e4': function (e, t, i) {
    e.exports = i.p + 'img/bge.5effec2f.png'
  },
  '177d': function (e, t, i) {
    e.exports = i.p + 'img/recluse.81a048d5.png'
  },
  '17ad': function (e, t, i) {
    e.exports = i.p + 'img/mutant.1b9f9dee.png'
  },
  '17ad4': function (e, t, i) {
    e.exports = i.p + 'img/pyromancer_wm.1849bc37.png'
  },
  '183f': function (e, t, i) {
    e.exports = i.p + 'img/researcher_sos.d888bb13.png'
  },
  1923: function (e, t, i) {
    e.exports = i.p + 'img/huntsman.994fb309.png'
  },
  '1a76': function (e, t, i) {
    e.exports = i.p + 'img/skeptic_wm.26fff995.png'
  },
  '1ada': function (e, t, i) {
    e.exports = i.p + 'img/ghosthunter_aoi.0ec4661b.png'
  },
  '1d01': function (e, t, i) {
    e.exports = i.p + 'img/buddhist.2d7c4106.png'
  },
  '1e08': function (e, t, i) {
    e.exports = i.p + 'img/eye_aoi.59817d8a.png'
  },
  '1e83': function (e, t, i) {
    e.exports = i.p + 'img/chef.c2256a45.png'
  },
  '1fdc': function (e, t, i) {
    e.exports = i.p + 'img/obsessed_aoi.9b8a03d3.png'
  },
  2094: function (e, t, i) {
    e.exports = i.p + 'img/preacher.a86e913b.png'
  },
  '20ca': function (e, t, i) {
    e.exports = i.p + 'img/zombuul.2872fbb3.png'
  },
  '21c2': function (e, t, i) {
    e.exports = i.p + 'img/archivist_aoi.193e6a35.png'
  },
  2216: function (e, t, i) {
    e.exports = i.p + 'img/doctor_sos.0cdae0a5.png'
  },
  '223c': function (e, t, i) {
    e.exports = i.p + 'img/sailor.a9d4454a.png'
  },
  '22c9': function (e, t, i) {
    e.exports = i.p + 'img/widow.3ae71cbf.png'
  },
  '23b1': function (e, t, i) {
    e.exports = i.p + 'img/bonecollector.bd2d8b7a.png'
  },
  2490: function (e, t, i) {
    e.exports = i.p + 'img/outsider.2c6bc66e.png'
  },
  '249e': function (e, t, i) {
    'use strict'
    i('6af6')
  },
  '24d3': function (e, t, i) {
    e.exports = i.p + 'img/baron.2628f49e.png'
  },
  '25f6': function (e, t, i) {
    e.exports = i.p + 'img/bureaucrat.6a892d56.png'
  },
  '26a5': function (e, t, i) {
    e.exports = i.p + 'img/righthandman_iob.57ad9fe6.png'
  },
  '26fc': function (e, t, i) {
    e.exports = i.p + 'img/sylph_mm.ce35fc1a.png'
  },
  '27a3': function (e, t, i) {
    e.exports = i.p + 'img/puzzlemaster.b4ec360b.png'
  },
  '281d': function (e, t, i) {
    e.exports = i.p + 'img/chieftain_iob.d2b75d71.png'
  },
  '287e': function (e, t, i) {
    e.exports = i.p + 'img/corruptor_aoi.99dac502.png'
  },
  2890: function (e, t, i) {
    e.exports = i.p + 'img/assistant_sos.8f6749b3.png'
  },
  '28bf': function (e, t, i) {
    e.exports = i.p + 'img/bmr-minion.6559191b.png'
  },
  '295a': function (e, t, i) {
    e.exports = i.p + 'img/warden_iob.cd84bc19.png'
  },
  '2b04': function (e, t, i) {
    e.exports = i.p + 'img/leviathan.24f3cd86.png'
  },
  '2c89': function (e, t, i) {
    'use strict'
    i('bba0')
  },
  '2cd0': function (e, t, i) {
    e.exports = i.p + 'img/artist.e76624f3.png'
  },
  '2e3d': function (e, t, i) {
    e.exports = i.p + 'img/paladin_wm.8640063f.png'
  },
  '2fd0': function (e, t, i) {
    e.exports = i.p + 'img/snv.288a42ad.png'
  },
  '303d': function (e, t, i) {
    e.exports = i.p + 'img/broker_lse.091b19ee.png'
  },
  '30b0': function (e, t, i) {
    e.exports = i.p + 'img/cassanova_bim.9ba5ad2c.png'
  },
  '30b6': function (e, t, i) {
    e.exports = i.p + 'img/sage.8afae02e.png'
  },
  '30c0': function (e, t, i) {
    e.exports = i.p + 'img/assistant_aoi.e7218699.png'
  },
  '313e': function (e, t, i) {
    e.exports = i.p + 'img/anarchist_ti.9a8fcc11.png'
  },
  3176: function (e, t, i) {
    e.exports = i.p + 'img/beastmaster_iob.cc4f9a59.png'
  },
  '31fa': function (e, t, i) {
    e.exports = i.p + 'img/chamberlain_sr.11b6e7c7.png'
  },
  3213: function (e, t, i) {
    e.exports = i.p + 'img/corpseobsessed_ti.ac447008.png'
  },
  3273: function (e, t, i) {
    e.exports = i.p + 'img/poppygrower.c9d4c880.png'
  },
  '327a': function (e, t, i) {
    e.exports = i.p + 'img/scapegoat.73640c39.png'
  },
  '339d': function (e, t, i) {
    e.exports = i.p + 'img/lamplighter_lse.2e55622e.png'
  },
  '34fa': function (e, t, i) {
    e.exports = i.p + 'img/crawler_sos.bfd9125b.png'
  },
  3603: function (e, t, i) {
    e.exports = i.p + 'img/philosopher.9a154d6c.png'
  },
  3636: function (e, t, i) {
    'use strict'
    i('d4b2')
  },
  '363c': function (e, t, i) {
    e.exports = i.p + 'img/matchmaker_lse.ebdf0e2e.png'
  },
  3651: function (e, t, i) {
    e.exports = i.p + 'img/specimen006_sos.5580235b.png'
  },
  3670: function (e, t, i) {
    e.exports = i.p + 'img/buried_aoi.8b92bcfd.png'
  },
  '370b': function (e, t, i) {
    e.exports = i.p + 'img/refugee_sos.d61b6945.png'
  },
  '37dd': function (e, t, i) {
    e.exports = i.p + 'img/butcher.2efedb75.png'
  },
  '37ff': function (e, t, i) {
    e.exports = i.p + 'img/arsonist_bim.8d7b127f.png'
  },
  '38a5': function (e, t, i) {
    e.exports = i.p + 'img/towncrier.8c7af52c.png'
  },
  '398f': function (e, t, i) {
    e.exports = i.p + 'img/cultleader.1f9a22f0.png'
  },
  '39eb': function (e, t, i) {
    e.exports = i.p + 'img/toymaker.a96806e5.png'
  },
  '3a43': function (e, t, i) {
    e.exports = i.p + 'img/vortox.f022015e.png'
  },
  '3a74': function (e, t, i) {
    e.exports = i.p + 'img/crescendo_lse.a3672cf1.png'
  },
  '3b0c': function (e, t, i) {
    e.exports = i.p + 'img/curator_aoi.5101d358.png'
  },
  '3b65': function (e, t, i) {
    e.exports = i.p + 'img/deviant.9fcfb58a.png'
  },
  '3b77': function (e, t, i) {
    e.exports = i.p + 'img/morgana_sr.439164b1.png'
  },
  '3cd0': function (e, t, i) {
    e.exports = i.p + 'img/mm.f4d7178e.png'
  },
  '3cd8': function (e, t, i) {
    e.exports = i.p + 'img/nightwatchman.a2460a3d.png'
  },
  '3e03': function (e, t, i) {
    e.exports = i.p + 'img/rabblerouser_lse.895db60d.png'
  },
  '3e18': function (e, t, i) {
    e.exports = i.p + 'img/civilian_sos.d7ccefd0.png'
  },
  '3e70': function (e, t, i) {
    e.exports = i.p + 'img/imp.ff808901.png'
  },
  '3edd': function (e, t, i) {
    e.exports = i.p + 'img/clairvoyant_wm.a1732655.png'
  },
  '3f65': function (e, t, i) {
    e.exports = i.p + 'img/moonchild.04fb95f1.png'
  },
  '3f8a': function (e, t, i) {
    e.exports = i.p + 'img/architect_bge.ff32b8f4.png'
  },
  '3f8f': function (e, t, i) {
    'use strict'
    i('557b')
  },
  4019: function (e, t, i) {
    e.exports = i.p + 'img/queen_sr.fe08a797.png'
  },
  4021: function (e, t, i) {
    e.exports = i.p + 'img/snakecharmer.7769a0cc.png'
  },
  '41ba': function (e, t, i) {
    e.exports = i.p + 'img/knight_sr.0cfd790a.png'
  },
  4206: function (e, t, i) {
    e.exports = i.p + 'img/trapper_iob.2c3f3a77.png'
  },
  '422e': function (e, t, i) {
    e.exports = i.p + 'img/tarantella_lse.a0706f6a.png'
  },
  4265: function (e, t, i) {
    e.exports = i.p + 'img/wechat.3ed7b9c3.jpeg'
  },
  '435e': function (e, t, i) {
    e.exports = i.p + 'img/friar_sr.24e22f01.png'
  },
  '43ba': function (e, t, i) {
    e.exports = i.p + 'img/wm.d7f79bb1.png'
  },
  '43e8': function (e, t, i) {
    e.exports = i.p + 'img/fortuneteller.a641461f.png'
  },
  '441d': function (e, t, i) {
    e.exports = i.p + 'img/custom.5334aaeb.png'
  },
  '451a': function (e, t, i) {
    e.exports = i.p + 'img/snv-minion.60768802.png'
  },
  4720: function (e, t, i) {
    e.exports = i.p + 'img/fool.0d847910.png'
  },
  4898: function (e, t, i) {
    e.exports = i.p + 'img/nightcrawler_mm.88d19084.png'
  },
  '48ff': function (e, t, i) {
    e.exports = i.p + 'img/warrior_iob.e522299c.png'
  },
  '496f': function (e, t, i) {
    e.exports = i.p + 'img/rook_sr.363a20e8.png'
  },
  '49c0': function (e, t, i) {
    e.exports = i.p + 'img/foodtaster_sr.616da868.png'
  },
  '4a2c': function (e, t, i) {
    e.exports = i.p + 'img/psychologist_ti.79aa660b.png'
  },
  '4aac': function (e, t, i) {
    e.exports = i.p + 'img/sr.86deb501.png'
  },
  '4bea': function (e, t, i) {
    e.exports = i.p + 'img/apprentice.ff782fd9.png'
  },
  '4c60': function (e, t, i) {
    e.exports = i.p + 'img/waiter_bim.71e8f966.png'
  },
  '4cfe': function (e, t, i) {
    e.exports = i.p + 'img/wendigo_bim.5bb5187b.png'
  },
  '4d73': function (e, t, i) {
    e.exports = i.p + 'img/librarian.c867e6d6.png'
  },
  '4dd9': function (e, t, i) {
    e.exports = i.p + 'img/snv-outsider.5b5cae7f.png'
  },
  '4e76': function (e, t, i) {
    e.exports = i.p + 'img/soldier.ebde76f0.png'
  },
  '4eb3': function (e, t, i) {
    e.exports = i.p + 'img/golem.4a791883.png'
  },
  '4efd': function (e, t, i) {
    e.exports = i.p + 'img/minstrel.29c42f5b.png'
  },
  '4f74': function (e, t, i) {
    e.exports = i.p + 'img/framer_bim.418638a8.png'
  },
  '501c': function (e, t, i) {
    e.exports = i.p + 'img/aoi.6e06b29e.png'
  },
  5072: function (e, t, i) {
    e.exports = i.p + 'img/exorcist.4d617582.png'
  },
  5085: function (e, t, i) {
    e.exports = i.p + 'img/detective_aoi.e654c631.png'
  },
  '509f': function (e, t, i) {
    e.exports = i.p + 'img/venividivici_lse.ead34ff8.png'
  },
  '50d1': function (e, t, i) {},
  '50f6': function (e, t, i) {
    e.exports = i.p + 'img/smuggler_lse.4bbfe266.png'
  },
  '51ea': function (e, t, i) {
    e.exports = i.p + 'img/testsubject_sos.a488a985.png'
  },
  5339: function (e, t, i) {
    e.exports = i.p + 'img/iob.94a55bee.png'
  },
  5386: function (e, t, i) {
    e.exports = i.p + 'img/bootblack_lse.b1644a9b.png'
  },
  5426: function (e, t, i) {
    e.exports = i.p + 'img/haunt_mm.109efa65.png'
  },
  '557b': function (e, t, i) {},
  '559e': function (e, t, i) {
    e.exports = i.p + 'img/harlot.403b3498.png'
  },
  '55aa': function (e, t, i) {
    e.exports = i.p + 'img/goon.eb004322.png'
  },
  '55c1': function (e, t, i) {
    e.exports = i.p + 'img/thief_mm.0be31962.png'
  },
  '560e': function (e, t, i) {
    e.exports = i.p + 'img/scoundrel_sr.abf4e220.png'
  },
  5624: function (e, t, i) {
    e.exports = i.p + 'img/darkpassenger_bge.a6fe3b96.png'
  },
  5626: function (e, t, i) {
    e.exports = i.p + 'img/heretic.0bbeab70.png'
  },
  '56d7': function (e, t, i) {
    'use strict'
    i.r(t)
    var s = i('2b0e'),
      r = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t
        return i(
          'div',
          {
            class: { night: e.grimoire.isNight, static: e.grimoire.isStatic },
            style: {
              backgroundImage: e.grimoire.background
                ? "url('" + e.grimoire.background + "')"
                : ''
            },
            attrs: { id: 'app', tabindex: '-1' },
            on: { keyup: e.keyup }
          },
          [
            e.grimoire.background &&
            e.grimoire.background.match(/\.(mp4|webm)$/i)
              ? i('video', {
                  attrs: {
                    id: 'background',
                    src: e.grimoire.background,
                    autoplay: '',
                    loop: ''
                  }
                })
              : e._e(),
            i('div', { staticClass: 'backdrop' }),
            i(
              'transition',
              { attrs: { name: 'blur' } },
              [
                e.players.length ? e._e() : i('Intro'),
                e.players.length && !e.session.nomination
                  ? i('TownInfo')
                  : e._e(),
                e.session.nomination ? i('Vote') : e._e()
              ],
              1
            ),
            i('TownSquare'),
            i('Menu', { ref: 'menu' }),
            i('EditionModal'),
            i('FabledModal'),
            i('RolesModal'),
            i('ReferenceModal'),
            i('NightOrderModal'),
            i('VoteHistoryModal'),
            i('GameStateModal'),
            i('DonateModal'),
            i('Gradients'),
            e._m(0)
          ],
          1
        )
      },
      n = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t
          return i('span', { attrs: { id: 'version' } }, [
            i(
              'a',
              {
                attrs: {
                  href: 'https://clydeshen.github.io/bloodontower/docs',
                  target: '_blank'
                }
              },
              [e._v('游戏规则及身份说明')]
            )
          ])
        }
      ],
      o = i('2f62'),
      a = i('9224'),
      m = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t
        return i(
          'div',
          {
            staticClass: 'square',
            class: {
              public: e.grimoire.isPublic,
              spectator: e.session.isSpectator,
              vote: e.session.nomination
            },
            attrs: { id: 'townsquare' }
          },
          [
            i(
              'ul',
              { staticClass: 'circle', class: ['size-' + e.players.length] },
              e._l(e.players, function (t, s) {
                return i('Player', {
                  key: s,
                  class: {
                    from: Math.max(e.swap, e.move, e.nominate) === s,
                    swap: e.swap > -1,
                    move: e.move > -1,
                    nominate: e.nominate > -1
                  },
                  attrs: { player: t },
                  on: {
                    trigger: function (t) {
                      return e.handleTrigger(s, t)
                    }
                  }
                })
              }),
              1
            ),
            e.players.length
              ? i(
                  'div',
                  {
                    ref: 'bluffs',
                    staticClass: 'bluffs',
                    class: { closed: !e.isBluffsOpen }
                  },
                  [
                    i(
                      'h3',
                      [
                        e.session.isSpectator
                          ? i('span', [e._v('不在场身份')])
                          : i('span', [e._v('恶魔的伪装身份')]),
                        i('font-awesome-icon', {
                          attrs: { icon: 'times-circle' },
                          on: {
                            click: function (t) {
                              return t.stopPropagation(), e.toggleBluffs(t)
                            }
                          }
                        }),
                        i('font-awesome-icon', {
                          attrs: { icon: 'plus-circle' },
                          on: {
                            click: function (t) {
                              return t.stopPropagation(), e.toggleBluffs(t)
                            }
                          }
                        })
                      ],
                      1
                    ),
                    i(
                      'ul',
                      e._l(e.bluffSize, function (t) {
                        return i(
                          'li',
                          {
                            key: t,
                            on: {
                              click: function (i) {
                                return e.openRoleModal(-1 * t)
                              }
                            }
                          },
                          [i('Token', { attrs: { role: e.bluffs[t - 1] } })],
                          1
                        )
                      }),
                      0
                    )
                  ]
                )
              : e._e(),
            e.fabled.length
              ? i(
                  'div',
                  { staticClass: 'fabled', class: { closed: !e.isFabledOpen } },
                  [
                    i(
                      'h3',
                      [
                        i('span', [e._v('传奇角色')]),
                        i('font-awesome-icon', {
                          attrs: { icon: 'times-circle' },
                          on: {
                            click: function (t) {
                              return t.stopPropagation(), e.toggleFabled(t)
                            }
                          }
                        }),
                        i('font-awesome-icon', {
                          attrs: { icon: 'plus-circle' },
                          on: {
                            click: function (t) {
                              return t.stopPropagation(), e.toggleFabled(t)
                            }
                          }
                        })
                      ],
                      1
                    ),
                    i(
                      'ul',
                      e._l(e.fabled, function (t, s) {
                        return i(
                          'li',
                          {
                            key: s,
                            on: {
                              click: function (t) {
                                return e.removeFabled(s)
                              }
                            }
                          },
                          [
                            e.nightOrder.get(t).first && e.grimoire.isNightOrder
                              ? i('div', { staticClass: 'night-order first' }, [
                                  i('em', [
                                    e._v(e._s(e.nightOrder.get(t).first) + '.')
                                  ]),
                                  t.firstNightReminder
                                    ? i('span', [
                                        e._v(e._s(t.firstNightReminder))
                                      ])
                                    : e._e()
                                ])
                              : e._e(),
                            e.nightOrder.get(t).other && e.grimoire.isNightOrder
                              ? i('div', { staticClass: 'night-order other' }, [
                                  i('em', [
                                    e._v(e._s(e.nightOrder.get(t).other) + '.')
                                  ]),
                                  t.otherNightReminder
                                    ? i('span', [
                                        e._v(e._s(t.otherNightReminder))
                                      ])
                                    : e._e()
                                ])
                              : e._e(),
                            i('Token', { attrs: { role: t } })
                          ],
                          1
                        )
                      }),
                      0
                    )
                  ]
                )
              : e._e(),
            i('ReminderModal', { attrs: { 'player-index': e.selectedPlayer } }),
            i('RoleModal', { attrs: { 'player-index': e.selectedPlayer } })
          ],
          1
        )
      },
      d = [],
      l = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t
        return s(
          'li',
          { style: e.zoom },
          [
            s(
              'div',
              {
                ref: 'player',
                staticClass: 'player',
                class: [
                  {
                    dead: e.player.isDead,
                    marked: e.session.markedPlayer === e.index,
                    'no-vote': e.player.isVoteless,
                    you:
                      e.session.sessionId &&
                      e.player.id &&
                      e.player.id === e.session.playerId,
                    'vote-yes': e.session.votes[e.index],
                    'vote-lock': e.voteLocked
                  },
                  e.player.role.team
                ]
              },
              [
                s('div', {
                  staticClass: 'shroud',
                  on: {
                    click: function (t) {
                      return e.toggleStatus()
                    }
                  }
                }),
                s('div', {
                  staticClass: 'life',
                  on: {
                    click: function (t) {
                      return e.toggleStatus()
                    }
                  }
                }),
                e.nightOrder.get(e.player).first && e.grimoire.isNightOrder
                  ? s('div', { staticClass: 'night-order first' }, [
                      s('em', [
                        e._v(e._s(e.nightOrder.get(e.player).first) + '.')
                      ]),
                      e.player.role.firstNightReminder
                        ? s('span', [
                            e._v(e._s(e.player.role.firstNightReminder))
                          ])
                        : e._e()
                    ])
                  : e._e(),
                e.nightOrder.get(e.player).other && e.grimoire.isNightOrder
                  ? s('div', { staticClass: 'night-order other' }, [
                      s('em', [
                        e._v(e._s(e.nightOrder.get(e.player).other) + '.')
                      ]),
                      e.player.role.otherNightReminder
                        ? s('span', [
                            e._v(e._s(e.player.role.otherNightReminder))
                          ])
                        : e._e()
                    ])
                  : e._e(),
                s('Token', {
                  attrs: { role: e.player.role },
                  on: {
                    'set-role': function (t) {
                      return e.$emit('trigger', ['openRoleModal'])
                    }
                  }
                }),
                s(
                  'div',
                  { staticClass: 'overlay' },
                  [
                    s('font-awesome-icon', {
                      staticClass: 'vote',
                      attrs: { icon: 'hand-paper', title: 'Hand UP' },
                      on: {
                        click: function (t) {
                          return e.vote()
                        }
                      }
                    }),
                    s('font-awesome-icon', {
                      staticClass: 'vote',
                      attrs: { icon: 'times', title: 'Hand DOWN' },
                      on: {
                        click: function (t) {
                          return e.vote()
                        }
                      }
                    }),
                    s('font-awesome-icon', {
                      staticClass: 'cancel',
                      attrs: { icon: 'times-circle', title: 'Cancel' },
                      on: {
                        click: function (t) {
                          return e.cancel()
                        }
                      }
                    }),
                    s('font-awesome-icon', {
                      staticClass: 'swap',
                      attrs: {
                        icon: 'exchange-alt',
                        title: 'Swap seats with this player'
                      },
                      on: {
                        click: function (t) {
                          return e.swapPlayer(e.player)
                        }
                      }
                    }),
                    s('font-awesome-icon', {
                      staticClass: 'move',
                      attrs: {
                        icon: 'redo-alt',
                        title: 'Move player to this seat'
                      },
                      on: {
                        click: function (t) {
                          return e.movePlayer(e.player)
                        }
                      }
                    }),
                    s('font-awesome-icon', {
                      staticClass: 'nominate',
                      attrs: {
                        icon: 'hand-point-right',
                        title: 'Nominate this player'
                      },
                      on: {
                        click: function (t) {
                          return e.nominatePlayer(e.player)
                        }
                      }
                    })
                  ],
                  1
                ),
                e.player.id && e.session.sessionId
                  ? s('font-awesome-icon', {
                      staticClass: 'seat',
                      class: { highlight: e.session.isRolesDistributed },
                      attrs: { icon: 'chair' }
                    })
                  : e._e(),
                e.player.isDead && !e.player.isVoteless
                  ? s('font-awesome-icon', {
                      staticClass: 'has-vote',
                      attrs: { icon: 'vote-yea', title: 'Ghost vote' },
                      on: {
                        click: function (t) {
                          return e.updatePlayer('isVoteless', !0)
                        }
                      }
                    })
                  : e._e(),
                s(
                  'div',
                  { staticClass: 'marked' },
                  [s('font-awesome-icon', { attrs: { icon: 'skull' } })],
                  1
                ),
                s(
                  'div',
                  {
                    staticClass: 'name',
                    class: { active: e.isMenuOpen },
                    on: {
                      click: function (t) {
                        e.isMenuOpen = !e.isMenuOpen
                      }
                    }
                  },
                  [
                    s('span', [e._v(e._s(e.player.name))]),
                    e.player.pronouns
                      ? s('font-awesome-icon', {
                          attrs: { icon: 'venus-mars' }
                        })
                      : e._e(),
                    e.player.pronouns
                      ? s('div', { staticClass: 'pronouns' }, [
                          s('span', [e._v(e._s(e.player.pronouns))])
                        ])
                      : e._e()
                  ],
                  1
                ),
                s('transition', { attrs: { name: 'fold' } }, [
                  e.isMenuOpen
                    ? s(
                        'ul',
                        { staticClass: 'menu' },
                        [
                          !e.session.isSpectator ||
                          (e.session.isSpectator &&
                            e.player.id === e.session.playerId)
                            ? s(
                                'li',
                                { on: { click: e.changePronouns } },
                                [
                                  s('font-awesome-icon', {
                                    attrs: { icon: 'venus-mars' }
                                  }),
                                  e._v('改人称代词 ')
                                ],
                                1
                              )
                            : e._e(),
                          e.session.isSpectator
                            ? e._e()
                            : [
                                s(
                                  'li',
                                  { on: { click: e.changeName } },
                                  [
                                    s('font-awesome-icon', {
                                      attrs: { icon: 'user-edit' }
                                    }),
                                    e._v('改名 ')
                                  ],
                                  1
                                ),
                                s(
                                  'li',
                                  {
                                    class: { disabled: e.session.lockedVote },
                                    on: {
                                      click: function (t) {
                                        return e.movePlayer()
                                      }
                                    }
                                  },
                                  [
                                    s('font-awesome-icon', {
                                      attrs: { icon: 'redo-alt' }
                                    }),
                                    e._v(' 移动玩家 ')
                                  ],
                                  1
                                ),
                                s(
                                  'li',
                                  {
                                    class: { disabled: e.session.lockedVote },
                                    on: {
                                      click: function (t) {
                                        return e.swapPlayer()
                                      }
                                    }
                                  },
                                  [
                                    s('font-awesome-icon', {
                                      attrs: { icon: 'exchange-alt' }
                                    }),
                                    e._v(' 换座 ')
                                  ],
                                  1
                                ),
                                s(
                                  'li',
                                  {
                                    class: { disabled: e.session.lockedVote },
                                    on: { click: e.removePlayer }
                                  },
                                  [
                                    s('font-awesome-icon', {
                                      attrs: { icon: 'times-circle' }
                                    }),
                                    e._v(' 移除 ')
                                  ],
                                  1
                                ),
                                e.player.id && e.session.sessionId
                                  ? s(
                                      'li',
                                      {
                                        on: {
                                          click: function (t) {
                                            return e.updatePlayer('id', '', !0)
                                          }
                                        }
                                      },
                                      [
                                        s('font-awesome-icon', {
                                          attrs: { icon: 'chair' }
                                        }),
                                        e._v(' 空座位 ')
                                      ],
                                      1
                                    )
                                  : e._e(),
                                e.session.nomination
                                  ? e._e()
                                  : [
                                      s(
                                        'li',
                                        {
                                          on: {
                                            click: function (t) {
                                              return e.nominatePlayer()
                                            }
                                          }
                                        },
                                        [
                                          s('font-awesome-icon', {
                                            attrs: { icon: 'hand-point-right' }
                                          }),
                                          e._v(' 提名 ')
                                        ],
                                        1
                                      )
                                    ]
                              ],
                          e.session.isSpectator
                            ? s(
                                'li',
                                {
                                  class: {
                                    disabled:
                                      e.player.id &&
                                      e.player.id !== e.session.playerId
                                  },
                                  on: { click: e.claimSeat }
                                },
                                [
                                  s('font-awesome-icon', {
                                    attrs: { icon: 'chair' }
                                  }),
                                  e.player.id
                                    ? e.player.id === e.session.playerId
                                      ? [e._v(' 站起 ')]
                                      : [e._v('座位被占')]
                                    : [e._v(' 坐下 ')]
                                ],
                                2
                              )
                            : e._e()
                        ],
                        2
                      )
                    : e._e()
                ])
              ],
              1
            ),
            e.player.reminders
              ? e._l(e.player.reminders, function (t) {
                  return s(
                    'div',
                    {
                      key: t.role + ' ' + t.name,
                      staticClass: 'reminder',
                      class: [t.role],
                      on: {
                        click: function (i) {
                          return e.removeReminder(t)
                        }
                      }
                    },
                    [
                      s('span', {
                        staticClass: 'icon',
                        style: {
                          backgroundImage:
                            'url(' +
                            (t.image && e.grimoire.isImageOptIn
                              ? t.image
                              : i('61b0')(
                                  './' + (t.imageAlt || t.role) + '.png'
                                )) +
                            ')'
                        }
                      }),
                      s('span', { staticClass: 'text' }, [e._v(e._s(t.name))])
                    ]
                  )
                })
              : e._e(),
            s(
              'div',
              {
                staticClass: 'reminder add',
                on: {
                  click: function (t) {
                    return e.$emit('trigger', ['openReminderModal'])
                  }
                }
              },
              [s('span', { staticClass: 'icon' })]
            )
          ],
          2
        )
      },
      g = [],
      h = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t
        return s(
          'div',
          {
            staticClass: 'token',
            class: [e.role.id],
            on: { click: e.setRole }
          },
          [
            e.role.id
              ? s('span', {
                  staticClass: 'icon',
                  style: {
                    backgroundImage:
                      'url(' +
                      (e.role.image && e.grimoire.isImageOptIn
                        ? e.role.image
                        : i('61b0')(
                            './' + (e.role.imageAlt || e.role.id) + '.png'
                          )) +
                      ')'
                  }
                })
              : e._e(),
            e.role.firstNight || e.role.firstNightReminder
              ? s('span', { staticClass: 'leaf-left' })
              : e._e(),
            e.role.otherNight || e.role.otherNightReminder
              ? s('span', { staticClass: 'leaf-right' })
              : e._e(),
            e.reminderLeaves
              ? s('span', { class: ['leaf-top' + e.reminderLeaves] })
              : e._e(),
            e.role.setup ? s('span', { staticClass: 'leaf-orange' }) : e._e(),
            s(
              'svg',
              { staticClass: 'name', attrs: { viewBox: '0 0 150 150' } },
              [
                s('path', {
                  attrs: {
                    d: 'M 13 75 C 13 160, 138 160, 138 75',
                    id: 'curve',
                    fill: 'transparent'
                  }
                }),
                s(
                  'text',
                  {
                    staticClass: 'label mozilla',
                    attrs: {
                      width: '150',
                      x: '66.6%',
                      'text-anchor': 'middle',
                      'font-size': e._f('nameToFontSize')(e.role.name)
                    }
                  },
                  [
                    s('textPath', { attrs: { 'xlink:href': '#curve' } }, [
                      e._v(' ' + e._s(e.role.name) + ' ')
                    ])
                  ]
                )
              ]
            ),
            s('div', {
              staticClass: 'edition',
              class: ['edition-' + e.role.edition, e.role.team]
            }),
            e.role.ability
              ? s('div', { staticClass: 'ability' }, [
                  e._v(' ' + e._s(e.role.ability) + ' ')
                ])
              : e._e()
          ]
        )
      },
      p = [],
      c = {
        name: 'Token',
        props: { role: { type: Object, default: () => ({}) } },
        computed: {
          reminderLeaves: function () {
            return (
              (this.role.reminders || []).length +
              (this.role.remindersGlobal || []).length
            )
          },
          ...Object(o['d'])(['grimoire'])
        },
        data() {
          return {}
        },
        filters: {
          nameToFontSize: (e) => (e && e.length > 10 ? '90%' : '110%')
        },
        methods: {
          setRole() {
            this.$emit('set-role')
          }
        }
      },
      f = c,
      u = (i('5720'), i('2877')),
      b = Object(u['a'])(f, h, p, !1, null, 'deec739a', null),
      N = b.exports,
      _ = {
        components: { Token: N },
        props: { player: { type: Object, required: !0 } },
        computed: {
          ...Object(o['d'])('players', ['players']),
          ...Object(o['d'])(['grimoire', 'session']),
          ...Object(o['b'])({ nightOrder: 'players/nightOrder' }),
          index: function () {
            return this.players.indexOf(this.player)
          },
          voteLocked: function () {
            const e = this.session,
              t = this.players.length
            if (!e.nomination) return !1
            const i = (this.index - 1 + t - e.nomination[1]) % t
            return i < e.lockedVote - 1
          },
          zoom: function () {
            const e = this.innerWidth > this.innerHeight ? 'vh' : 'vw'
            return this.players.length < 7
              ? { width: 18 + this.grimoire.zoom + e }
              : this.players.length <= 10
              ? { width: 16 + this.grimoire.zoom + e }
              : this.players.length <= 15
              ? { width: 14 + this.grimoire.zoom + e }
              : { width: 12 + this.grimoire.zoom + e }
          }
        },
        data() {
          return {
            isMenuOpen: !1,
            isSwap: !1,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
          }
        },
        mounted() {
          ;(this.innerHeight = window.innerHeight),
            (this.innerWidth = window.innerWidth)
          const e = new ResizeObserver(() => {
            ;(this.innerHeight = window.innerHeight),
              (this.innerWidth = window.innerWidth)
          })
          e.observe(document.body),
            this.$once('hook:beforeDestroy', () => {
              e.disconnect()
            })
        },
        methods: {
          changePronouns() {
            if (
              this.session.isSpectator &&
              this.player.id !== this.session.playerId
            )
              return
            const e = prompt('玩家人称代词', this.player.pronouns)
            null !== e && this.updatePlayer('pronouns', e, !0)
          },
          toggleStatus() {
            this.grimoire.isPublic
              ? this.player.isDead
                ? this.player.isVoteless
                  ? (this.updatePlayer('isVoteless', !1),
                    this.updatePlayer('isDead', !1))
                  : this.updatePlayer('isVoteless', !0)
                : (this.updatePlayer('isDead', !0),
                  this.player.isMarked && this.updatePlayer('isMarked', !1))
              : (this.updatePlayer('isDead', !this.player.isDead),
                this.player.isMarked && this.updatePlayer('isMarked', !1),
                this.player.isVoteless && this.updatePlayer('isVoteless', !1))
          },
          changeName() {
            if (this.session.isSpectator) return
            const e = prompt('玩家名', this.player.name) || this.player.name
            this.updatePlayer('name', e, !0)
          },
          removeReminder(e) {
            const t = [...this.player.reminders]
            t.splice(this.player.reminders.indexOf(e), 1),
              this.updatePlayer('reminders', t, !0)
          },
          updatePlayer(e, t, i = !1) {
            ;(this.session.isSpectator &&
              'reminders' !== e &&
              'pronouns' !== e) ||
              (this.$store.commit('players/update', {
                player: this.player,
                property: e,
                value: t
              }),
              i && (this.isMenuOpen = !1))
          },
          removePlayer() {
            ;(this.isMenuOpen = !1), this.$emit('trigger', ['removePlayer'])
          },
          swapPlayer(e) {
            ;(this.isMenuOpen = !1), this.$emit('trigger', ['swapPlayer', e])
          },
          movePlayer(e) {
            ;(this.isMenuOpen = !1), this.$emit('trigger', ['movePlayer', e])
          },
          nominatePlayer(e) {
            ;(this.isMenuOpen = !1),
              this.$emit('trigger', ['nominatePlayer', e])
          },
          cancel() {
            this.$emit('trigger', ['cancel'])
          },
          claimSeat() {
            ;(this.isMenuOpen = !1), this.$emit('trigger', ['claimSeat'])
          },
          vote() {
            this.session.isSpectator ||
              (this.voteLocked &&
                this.$store.commit('session/voteSync', [
                  this.index,
                  !this.session.votes[this.index]
                ]))
          }
        }
      },
      y = _,
      R = (i('74c9'), Object(u['a'])(y, l, g, !1, null, null, null)),
      v = R.exports,
      w = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t
        return e.modals.reminder &&
          e.availableReminders.length &&
          e.players[e.playerIndex]
          ? s(
              'Modal',
              {
                on: {
                  close: function (t) {
                    return e.toggleModal('reminder')
                  }
                }
              },
              [
                s('h3', [e._v('选择一个提醒标记:')]),
                s(
                  'ul',
                  { staticClass: 'reminders' },
                  e._l(e.availableReminders, function (t) {
                    return s(
                      'li',
                      {
                        key: t.role + ' ' + t.name,
                        staticClass: 'reminder',
                        class: [t.role],
                        on: {
                          click: function (i) {
                            return e.addReminder(t)
                          }
                        }
                      },
                      [
                        s('span', {
                          staticClass: 'icon',
                          style: {
                            backgroundImage:
                              'url(' +
                              (t.image && e.grimoire.isImageOptIn
                                ? t.image
                                : i('61b0')(
                                    './' + (t.imageAlt || t.role) + '.png'
                                  )) +
                              ')'
                          }
                        }),
                        s('span', { staticClass: 'text' }, [e._v(e._s(t.name))])
                      ]
                    )
                  }),
                  0
                )
              ]
            )
          : e._e()
      },
      k = [],
      x = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t
        return i('transition', { attrs: { name: 'modal-fade' } }, [
          i('div', { staticClass: 'modal-backdrop', on: { click: e.close } }, [
            i(
              'div',
              {
                staticClass: 'modal',
                class: { maximized: e.isMaximized },
                attrs: {
                  role: 'dialog',
                  'aria-labelledby': 'modalTitle',
                  'aria-describedby': 'modalDescription'
                },
                on: {
                  click: function (e) {
                    e.stopPropagation()
                  }
                }
              },
              [
                i(
                  'div',
                  { staticClass: 'top-right-buttons' },
                  [
                    i('font-awesome-icon', {
                      staticClass: 'top-right-button',
                      attrs: {
                        icon: [
                          'fas',
                          e.isMaximized ? 'window-minimize' : 'window-maximize'
                        ]
                      },
                      on: {
                        click: function (t) {
                          e.isMaximized = !e.isMaximized
                        }
                      }
                    }),
                    i('font-awesome-icon', {
                      staticClass: 'top-right-button',
                      attrs: { icon: 'times-circle' },
                      on: { click: e.close }
                    })
                  ],
                  1
                ),
                i('div', { staticClass: 'slot' }, [e._t('default')], 2)
              ]
            )
          ])
        ])
      },
      S = [],
      O = {
        data: function () {
          return { isMaximized: !1 }
        },
        methods: {
          close() {
            this.$emit('close')
          }
        }
      },
      M = O,
      I = (i('8781'), Object(u['a'])(M, x, S, !1, null, null, null)),
      C = I.exports
    const P =
      ({ id: e, image: t, imageAlt: i }) =>
      (s) => ({ role: e, image: t, imageAlt: i, name: s })
    var j = {
        components: { Modal: C },
        props: ['playerIndex'],
        computed: {
          availableReminders() {
            let e = []
            const { players: t, bluffs: i } = this.$store.state.players
            return (
              this.$store.state.roles.forEach((s) => {
                ;(t.some((e) => e.role.id === s.id) ||
                  i.some((e) => e.id === s.id)) &&
                  (e = [...e, ...s.reminders.map(P(s))]),
                  s.remindersGlobal &&
                    s.remindersGlobal.length &&
                    (e = [...e, ...s.remindersGlobal.map(P(s))])
              }),
              this.$store.state.players.fabled.forEach((t) => {
                e = [...e, ...t.reminders.map(P(t))]
              }),
              this.$store.state.otherTravelers.forEach((i) => {
                t.some((e) => e.role.id === i.id) &&
                  (e = [...e, ...i.reminders.map(P(i))])
              }),
              e.push({ role: 'good', name: '善良' }),
              e.push({ role: 'evil', name: '邪恶' }),
              e.push({ role: 'custom', name: '自定义' }),
              e
            )
          },
          ...Object(o['d'])(['modals', 'grimoire']),
          ...Object(o['d'])('players', ['players'])
        },
        methods: {
          addReminder(e) {
            const t = this.$store.state.players.players[this.playerIndex]
            let i
            if ('custom' === e.role) {
              const e = prompt('添加一个自定义提醒')
              if (!e) return
              i = [...t.reminders, { role: 'custom', name: e }]
            } else i = [...t.reminders, e]
            this.$store.commit('players/update', {
              player: t,
              property: 'reminders',
              value: i
            }),
              this.$store.commit('toggleModal', 'reminder')
          },
          ...Object(o['c'])(['toggleModal'])
        }
      },
      V = j,
      $ = (i('ad25'), Object(u['a'])(V, w, k, !1, null, 'c46788ce', null)),
      T = $.exports,
      E = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t
        return e.modals.role && e.availableRoles.length
          ? i('Modal', { on: { close: e.close } }, [
              i('h3', [
                e._v(
                  ' 为 ' +
                    e._s(
                      e.playerIndex >= 0 && e.players.length
                        ? e.players[e.playerIndex].name
                        : '恶魔的伪装身份'
                    ) +
                    ' 选择角色 '
                )
              ]),
              'editionRoles' !== e.tab && e.otherTravelers.size
                ? e._e()
                : i(
                    'ul',
                    { staticClass: 'tokens' },
                    e._l(e.availableRoles, function (t) {
                      return i(
                        'li',
                        {
                          key: t.id,
                          class: [t.team],
                          on: {
                            click: function (i) {
                              return e.setRole(t)
                            }
                          }
                        },
                        [i('Token', { attrs: { role: t } })],
                        1
                      )
                    }),
                    0
                  ),
              'otherTravelers' === e.tab && e.otherTravelers.size
                ? i(
                    'ul',
                    { staticClass: 'tokens' },
                    e._l(e.otherTravelers.values(), function (t) {
                      return i(
                        'li',
                        {
                          key: t.id,
                          class: [t.team],
                          on: {
                            click: function (i) {
                              return e.setRole(t)
                            }
                          }
                        },
                        [i('Token', { attrs: { role: t } })],
                        1
                      )
                    }),
                    0
                  )
                : e._e(),
              e.playerIndex >= 0 &&
              e.otherTravelers.size &&
              !e.session.isSpectator
                ? i('div', { staticClass: 'button-group' }, [
                    i(
                      'span',
                      {
                        staticClass: 'button',
                        class: { townsfolk: 'editionRoles' === e.tab },
                        on: {
                          click: function (t) {
                            e.tab = 'editionRoles'
                          }
                        }
                      },
                      [e._v('剧本角色')]
                    ),
                    i(
                      'span',
                      {
                        staticClass: 'button',
                        class: { townsfolk: 'otherTravelers' === e.tab },
                        on: {
                          click: function (t) {
                            e.tab = 'otherTravelers'
                          }
                        }
                      },
                      [e._v('其他旅行者')]
                    )
                  ])
                : e._e()
            ])
          : e._e()
      },
      H = [],
      z = {
        components: { Token: N, Modal: C },
        props: ['playerIndex'],
        computed: {
          availableRoles() {
            const e = [],
              t = this.$store.state.players.players
            return (
              this.$store.state.roles.forEach((i) => {
                ;(this.playerIndex >= 0 ||
                  (this.playerIndex < 0 &&
                    !t.some((e) => e.role.id === i.id))) &&
                  e.push(i)
              }),
              e.push({}),
              e
            )
          },
          ...Object(o['d'])(['modals', 'roles', 'session']),
          ...Object(o['d'])('players', ['players']),
          ...Object(o['d'])(['otherTravelers'])
        },
        data() {
          return { tab: 'editionRoles' }
        },
        methods: {
          setRole(e) {
            if (this.playerIndex < 0)
              this.$store.commit('players/setBluff', {
                index: -1 * this.playerIndex - 1,
                role: e
              })
            else {
              if (this.session.isSpectator && 'traveler' === e.team) return
              const t = this.$store.state.players.players[this.playerIndex]
              this.$store.commit('players/update', {
                player: t,
                property: 'role',
                value: e
              })
            }
            ;(this.tab = 'editionRoles'),
              this.$store.commit('toggleModal', 'role')
          },
          close() {
            ;(this.tab = 'editionRoles'), this.toggleModal('role')
          },
          ...Object(o['c'])(['toggleModal'])
        }
      },
      G = z,
      A = (i('2c89'), Object(u['a'])(G, E, H, !1, null, '5a2f7662', null)),
      D = A.exports,
      F = {
        components: { Player: v, Token: N, RoleModal: D, ReminderModal: T },
        computed: {
          ...Object(o['b'])({ nightOrder: 'players/nightOrder' }),
          ...Object(o['d'])(['grimoire', 'roles', 'session']),
          ...Object(o['d'])('players', ['players', 'bluffs', 'fabled'])
        },
        data() {
          return {
            selectedPlayer: 0,
            bluffSize: 3,
            swap: -1,
            move: -1,
            nominate: -1,
            isBluffsOpen: !0,
            isFabledOpen: !0
          }
        },
        methods: {
          toggleBluffs() {
            this.isBluffsOpen = !this.isBluffsOpen
          },
          toggleFabled() {
            this.isFabledOpen = !this.isFabledOpen
          },
          removeFabled(e) {
            this.session.isSpectator ||
              this.$store.commit('players/setFabled', { index: e })
          },
          handleTrigger(e, [t, i]) {
            'function' === typeof this[t] && this[t](e, i)
          },
          claimSeat(e) {
            this.session.isSpectator &&
              (this.session.playerId === this.players[e].id
                ? this.$store.commit('session/claimSeat', -1)
                : this.$store.commit('session/claimSeat', e))
          },
          openReminderModal(e) {
            ;(this.selectedPlayer = e),
              this.$store.commit('toggleModal', 'reminder')
          },
          openRoleModal(e) {
            const t = this.players[e]
            ;(this.session.isSpectator && t && 'traveler' === t.role.team) ||
              ((this.selectedPlayer = e),
              this.$store.commit('toggleModal', 'role'))
          },
          removePlayer(e) {
            if (
              !this.session.isSpectator &&
              !this.session.lockedVote &&
              confirm(`你想移除${this.players[e].name}吗?`)
            ) {
              const { nomination: t } = this.session
              t &&
                (t.includes(e)
                  ? this.$store.commit('session/nomination')
                  : (t[0] > e || t[1] > e) &&
                    this.$store.commit('session/setNomination', [
                      t[0] > e ? t[0] - 1 : t[0],
                      t[1] > e ? t[1] - 1 : t[1]
                    ])),
                this.$store.commit('players/remove', e)
            }
          },
          swapPlayer(e, t) {
            if (!this.session.isSpectator && !this.session.lockedVote)
              if (void 0 === t) this.cancel(), (this.swap = e)
              else {
                if (this.session.nomination) {
                  const e = this.players.indexOf(t),
                    i = this.session.nomination.map((t) =>
                      t === this.swap ? e : t === e ? this.swap : t
                    )
                  ;(this.session.nomination[0] === i[0] &&
                    this.session.nomination[1] === i[1]) ||
                    this.$store.commit('session/setNomination', i)
                }
                this.$store.commit('players/swap', [
                  this.swap,
                  this.players.indexOf(t)
                ]),
                  this.cancel()
              }
          },
          movePlayer(e, t) {
            if (!this.session.isSpectator && !this.session.lockedVote)
              if (void 0 === t) this.cancel(), (this.move = e)
              else {
                if (this.session.nomination) {
                  const e = this.players.indexOf(t),
                    i = this.session.nomination.map((t) =>
                      t === this.move
                        ? e
                        : t > this.move && t <= e
                        ? t - 1
                        : t < this.move && t >= e
                        ? t + 1
                        : t
                    )
                  ;(this.session.nomination[0] === i[0] &&
                    this.session.nomination[1] === i[1]) ||
                    this.$store.commit('session/setNomination', i)
                }
                this.$store.commit('players/move', [
                  this.move,
                  this.players.indexOf(t)
                ]),
                  this.cancel()
              }
          },
          nominatePlayer(e, t) {
            if (!this.session.isSpectator && !this.session.lockedVote)
              if (void 0 === t)
                this.cancel(), e !== this.nominate && (this.nominate = e)
              else {
                const e = [this.nominate, this.players.indexOf(t)]
                this.$store.commit('session/nomination', { nomination: e }),
                  this.cancel()
              }
          },
          cancel() {
            ;(this.move = -1), (this.swap = -1), (this.nominate = -1)
          }
        }
      },
      J = F,
      B = (i('3636'), Object(u['a'])(J, m, d, !1, null, null, null)),
      q = B.exports,
      L = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t
        return s('ul', { staticClass: 'info' }, [
          s('li', {
            staticClass: 'edition',
            class: ['edition-' + e.edition.id],
            style: {
              backgroundImage:
                'url(' +
                (e.edition.logo && e.grimoire.isImageOptIn
                  ? e.edition.logo
                  : i('ce23')('./' + e.edition.id + '.png')) +
                ')'
            }
          }),
          e.players.length - e.teams.traveler < 5
            ? s('li', [e._v(' 请添加更多玩家! ')])
            : e._e(),
          s('li', [
            e.edition.isOfficial
              ? e._e()
              : s('span', { staticClass: 'meta' }, [
                  e._v(
                    ' ' +
                      e._s(e.edition.name) +
                      ' ' +
                      e._s(e.edition.author ? 'by ' + e.edition.author : '') +
                      ' '
                  )
                ]),
            s(
              'span',
              [
                e._v(' ' + e._s(e.players.length) + ' '),
                s('font-awesome-icon', {
                  staticClass: 'players',
                  attrs: { icon: 'users' }
                })
              ],
              1
            ),
            s(
              'span',
              [
                e._v(' ' + e._s(e.teams.alive) + ' '),
                s('font-awesome-icon', {
                  staticClass: 'alive',
                  attrs: { icon: 'heartbeat' }
                })
              ],
              1
            ),
            s(
              'span',
              [
                e._v(' ' + e._s(e.teams.votes) + ' '),
                s('font-awesome-icon', {
                  staticClass: 'votes',
                  attrs: { icon: 'vote-yea' }
                })
              ],
              1
            )
          ]),
          e.players.length - e.teams.traveler >= 5
            ? s('li', [
                s(
                  'span',
                  [
                    e._v(' ' + e._s(e.teams.townsfolk) + ' '),
                    s('font-awesome-icon', {
                      staticClass: 'townsfolk',
                      attrs: { icon: 'user-friends' }
                    })
                  ],
                  1
                ),
                s(
                  'span',
                  [
                    e._v(' ' + e._s(e.teams.outsider) + ' '),
                    s('font-awesome-icon', {
                      staticClass: 'outsider',
                      attrs: {
                        icon: e.teams.outsider > 1 ? 'user-friends' : 'user'
                      }
                    })
                  ],
                  1
                ),
                s(
                  'span',
                  [
                    e._v(' ' + e._s(e.teams.minion) + ' '),
                    s('font-awesome-icon', {
                      staticClass: 'minion',
                      attrs: {
                        icon: e.teams.minion > 1 ? 'user-friends' : 'user'
                      }
                    })
                  ],
                  1
                ),
                s(
                  'span',
                  [
                    e._v(' ' + e._s(e.teams.demon) + ' '),
                    s('font-awesome-icon', {
                      staticClass: 'demon',
                      attrs: {
                        icon: e.teams.demon > 1 ? 'user-friends' : 'user'
                      }
                    })
                  ],
                  1
                ),
                e.teams.traveler
                  ? s(
                      'span',
                      [
                        e._v(' ' + e._s(e.teams.traveler) + ' '),
                        s('font-awesome-icon', {
                          staticClass: 'traveler',
                          attrs: {
                            icon: e.teams.traveler > 1 ? 'user-friends' : 'user'
                          }
                        })
                      ],
                      1
                    )
                  : e._e(),
                e.grimoire.isNight
                  ? s(
                      'span',
                      [
                        e._v(' 夜晚阶段 '),
                        s('font-awesome-icon', {
                          attrs: { icon: ['fas', 'cloud-moon'] }
                        })
                      ],
                      1
                    )
                  : e._e()
              ])
            : e._e()
        ])
      },
      U = [],
      W = i('634a'),
      Z = {
        computed: {
          teams: function () {
            const { players: e } = this.$store.state.players,
              t = this.$store.getters['players/nonTravelers'],
              i = e.filter((e) => !0 !== e.isDead).length
            return {
              ...W[t - 5],
              traveler: e.length - t,
              alive: i,
              votes:
                i +
                e.filter((e) => !0 === e.isDead && !0 !== e.isVoteless).length
            }
          },
          ...Object(o['d'])(['edition', 'grimoire']),
          ...Object(o['d'])('players', ['players'])
        }
      },
      K = Z,
      Q = (i('249e'), Object(u['a'])(K, L, U, !1, null, '2821e21c', null)),
      Y = Q.exports,
      X = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t
        return i('div', { attrs: { id: 'controls' } }, [
          i(
            'span',
            {
              directives: [
                {
                  name: 'show',
                  rawName: 'v-show',
                  value: e.session.voteHistory.length && e.session.sessionId,
                  expression: 'session.voteHistory.length && session.sessionId'
                }
              ],
              staticClass: 'nomlog-summary',
              attrs: {
                title:
                  e.session.voteHistory.length +
                  ' recent ' +
                  (1 == e.session.voteHistory.length
                    ? 'nomination'
                    : 'nominations')
              },
              on: {
                click: function (t) {
                  return e.toggleModal('voteHistory')
                }
              }
            },
            [
              i('font-awesome-icon', { attrs: { icon: 'book-dead' } }),
              e._v(' ' + e._s(e.session.voteHistory.length) + ' ')
            ],
            1
          ),
          e.session.sessionId
            ? i(
                'span',
                {
                  staticClass: 'session',
                  class: {
                    spectator: e.session.isSpectator,
                    reconnecting: e.session.isReconnecting
                  },
                  attrs: {
                    title:
                      e.session.playerCount +
                      '名其他玩家在这个房间里' +
                      (e.session.ping
                        ? ' (' + e.session.ping + '毫秒延迟)'
                        : '')
                  },
                  on: { click: e.leaveSession }
                },
                [
                  i('font-awesome-icon', {
                    attrs: { icon: 'broadcast-tower' }
                  }),
                  e._v(' ' + e._s(e.session.playerCount) + ' ')
                ],
                1
              )
            : e._e(),
          i(
            'div',
            { staticClass: 'menu', class: { open: e.grimoire.isMenuOpen } },
            [
              i('font-awesome-icon', {
                attrs: { icon: 'cog' },
                on: { click: e.toggleMenu }
              }),
              i(
                'ul',
                [
                  i(
                    'li',
                    { staticClass: 'tabs', class: e.tab },
                    [
                      i('font-awesome-icon', {
                        attrs: { icon: 'book-open' },
                        on: {
                          click: function (t) {
                            e.tab = 'grimoire'
                          }
                        }
                      }),
                      e.session.isSpectator
                        ? e._e()
                        : i('font-awesome-icon', {
                            attrs: { icon: 'users' },
                            on: {
                              click: function (t) {
                                e.tab = 'players'
                              }
                            }
                          }),
                      i('font-awesome-icon', {
                        attrs: { icon: 'theater-masks' },
                        on: {
                          click: function (t) {
                            e.tab = 'characters'
                          }
                        }
                      }),
                      i('font-awesome-icon', {
                        attrs: { icon: 'question' },
                        on: {
                          click: function (t) {
                            e.tab = 'help'
                          }
                        }
                      })
                    ],
                    1
                  ),
                  'grimoire' === e.tab
                    ? [
                        i('li', { staticClass: 'headline' }, [e._v('魔典')]),
                        e.players.length
                          ? i(
                              'li',
                              { on: { click: e.toggleGrimoire } },
                              [
                                e.grimoire.isPublic ? e._e() : [e._v('隐藏')],
                                e.grimoire.isPublic ? [e._v('显示')] : e._e(),
                                i('em', [e._v('[G]')])
                              ],
                              2
                            )
                          : e._e(),
                        e.session.isSpectator
                          ? e._e()
                          : i(
                              'li',
                              { on: { click: e.toggleNight } },
                              [
                                e.grimoire.isNight
                                  ? e._e()
                                  : [e._v('切换至夜晚')],
                                e.grimoire.isNight
                                  ? [e._v('切换至白天')]
                                  : e._e(),
                                i('em', [e._v('[S]')])
                              ],
                              2
                            ),
                        e.players.length
                          ? i('li', { on: { click: e.toggleNightOrder } }, [
                              e._v(' 夜晚顺序 '),
                              i(
                                'em',
                                [
                                  i('font-awesome-icon', {
                                    attrs: {
                                      icon: [
                                        'fas',
                                        e.grimoire.isNightOrder
                                          ? 'check-square'
                                          : 'square'
                                      ]
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          : e._e(),
                        e.players.length
                          ? i('li', [
                              e._v(' 缩放 '),
                              i(
                                'em',
                                [
                                  i('font-awesome-icon', {
                                    attrs: { icon: 'search-minus' },
                                    on: {
                                      click: function (t) {
                                        return e.setZoom(e.grimoire.zoom - 1)
                                      }
                                    }
                                  }),
                                  e._v(
                                    ' ' +
                                      e._s(
                                        Math.round(100 + 10 * e.grimoire.zoom)
                                      ) +
                                      '% '
                                  ),
                                  i('font-awesome-icon', {
                                    attrs: { icon: 'search-plus' },
                                    on: {
                                      click: function (t) {
                                        return e.setZoom(e.grimoire.zoom + 1)
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          : e._e(),
                        i('li', { on: { click: e.setBackground } }, [
                          e._v(' 背景图 '),
                          i(
                            'em',
                            [
                              i('font-awesome-icon', {
                                attrs: { icon: 'image' }
                              })
                            ],
                            1
                          )
                        ]),
                        e.edition.isOfficial
                          ? e._e()
                          : i('li', { on: { click: e.imageOptIn } }, [
                              i('small', [e._v('显示自定义图片')]),
                              i(
                                'em',
                                [
                                  i('font-awesome-icon', {
                                    attrs: {
                                      icon: [
                                        'fas',
                                        e.grimoire.isImageOptIn
                                          ? 'check-square'
                                          : 'square'
                                      ]
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                        i('li', { on: { click: e.toggleStatic } }, [
                          e._v(' 关闭动画 '),
                          i(
                            'em',
                            [
                              i('font-awesome-icon', {
                                attrs: {
                                  icon: [
                                    'fas',
                                    e.grimoire.isStatic
                                      ? 'check-square'
                                      : 'square'
                                  ]
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        i('li', { on: { click: e.toggleMuted } }, [
                          e._v(' 静音 '),
                          i(
                            'em',
                            [
                              i('font-awesome-icon', {
                                attrs: {
                                  icon: [
                                    'fas',
                                    e.grimoire.isMuted
                                      ? 'volume-mute'
                                      : 'volume-up'
                                  ]
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ]
                    : e._e(),
                  'session' === e.tab
                    ? [
                        e.session.sessionId
                          ? i('li', { staticClass: 'headline' }, [
                              e._v(
                                ' ' +
                                  e._s(
                                    e.session.isSpectator ? '玩家' : '说书人'
                                  ) +
                                  ' '
                              )
                            ])
                          : i('li', { staticClass: 'headline' }, [
                              e._v(' 联机游戏 ')
                            ]),
                        e.session.sessionId
                          ? [
                              e.session.ping
                                ? i('li', [
                                    e._v(
                                      ' 连接' +
                                        e._s(
                                          e.session.isSpectator
                                            ? '说书人'
                                            : '玩家'
                                        ) +
                                        '的延迟 '
                                    ),
                                    i('em', [e._v(e._s(e.session.ping) + 'ms')])
                                  ])
                                : e._e(),
                              i('li', { on: { click: e.copySessionUrl } }, [
                                e._v(' 复制房间号 '),
                                i(
                                  'em',
                                  [
                                    i('font-awesome-icon', {
                                      attrs: { icon: 'copy' }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              e.session.isSpectator
                                ? e._e()
                                : i(
                                    'li',
                                    { on: { click: e.distributeRoles } },
                                    [
                                      e._v(' 发送角色 '),
                                      i(
                                        'em',
                                        [
                                          i('font-awesome-icon', {
                                            attrs: { icon: 'theater-masks' }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  ),
                              e.session.voteHistory.length ||
                              !e.session.isSpectator
                                ? i(
                                    'li',
                                    {
                                      on: {
                                        click: function (t) {
                                          return e.toggleModal('voteHistory')
                                        }
                                      }
                                    },
                                    [e._v(' 投票记录'), i('em', [e._v('[V]')])]
                                  )
                                : e._e(),
                              i('li', { on: { click: e.leaveSession } }, [
                                e._v(' 离开房间 '),
                                i('em', [e._v(e._s(e.session.sessionId))])
                              ])
                            ]
                          : [
                              i('li', { on: { click: e.hostSession } }, [
                                e._v('创建房间(说书人)'),
                                i('em', [e._v('[H]')])
                              ]),
                              i('li', { on: { click: e.joinSession } }, [
                                e._v('加入房间(玩家)'),
                                i('em', [e._v('[J]')])
                              ])
                            ]
                      ]
                    : e._e(),
                  'players' !== e.tab || e.session.isSpectator
                    ? e._e()
                    : [
                        i('li', { staticClass: 'headline' }, [e._v('玩家')]),
                        e.players.length < 20
                          ? i('li', { on: { click: e.addPlayer } }, [
                              e._v(' 添加座位'),
                              i('em', [e._v('[A]')])
                            ])
                          : e._e(),
                        e.players.length > 2
                          ? i('li', { on: { click: e.randomizeSeatings } }, [
                              e._v(' 随机座位 '),
                              i(
                                'em',
                                [
                                  i('font-awesome-icon', {
                                    attrs: { icon: 'dice' }
                                  })
                                ],
                                1
                              )
                            ])
                          : e._e(),
                        e.players.length
                          ? i('li', { on: { click: e.clearPlayers } }, [
                              e._v(' 移除全部 '),
                              i(
                                'em',
                                [
                                  i('font-awesome-icon', {
                                    attrs: { icon: 'trash-alt' }
                                  })
                                ],
                                1
                              )
                            ])
                          : e._e()
                      ],
                  'characters' === e.tab
                    ? [
                        i('li', { staticClass: 'headline' }, [e._v('角色')]),
                        e.session.isSpectator
                          ? e._e()
                          : i(
                              'li',
                              {
                                on: {
                                  click: function (t) {
                                    return e.toggleModal('edition')
                                  }
                                }
                              },
                              [e._v(' 选择剧本 '), i('em', [e._v('[E]')])]
                            ),
                        !e.session.isSpectator && e.players.length > 4
                          ? i(
                              'li',
                              {
                                on: {
                                  click: function (t) {
                                    return e.toggleModal('roles')
                                  }
                                }
                              },
                              [e._v(' 配置角色 '), i('em', [e._v('[C]')])]
                            )
                          : e._e(),
                        e.session.isSpectator
                          ? e._e()
                          : i(
                              'li',
                              {
                                on: {
                                  click: function (t) {
                                    return e.toggleModal('fabled')
                                  }
                                }
                              },
                              [
                                e._v(' 添加传奇角色 '),
                                i(
                                  'em',
                                  [
                                    i('font-awesome-icon', {
                                      attrs: { icon: 'dragon' }
                                    })
                                  ],
                                  1
                                )
                              ]
                            ),
                        e.players.length
                          ? i('li', { on: { click: e.clearRoles } }, [
                              e._v(' 移除全部 '),
                              i(
                                'em',
                                [
                                  i('font-awesome-icon', {
                                    attrs: { icon: 'trash-alt' }
                                  })
                                ],
                                1
                              )
                            ])
                          : e._e()
                      ]
                    : e._e(),
                  'help' === e.tab
                    ? [
                        i('li', { staticClass: 'headline' }, [e._v('帮助')]),
                        i(
                          'li',
                          {
                            on: {
                              click: function (t) {
                                return e.toggleModal('reference')
                              }
                            }
                          },
                          [e._v(' 角色技能表 '), i('em', [e._v('[R]')])]
                        ),
                        i(
                          'li',
                          {
                            on: {
                              click: function (t) {
                                return e.toggleModal('nightOrder')
                              }
                            }
                          },
                          [e._v(' 夜间顺序表 '), i('em', [e._v('[N]')])]
                        ),
                        i(
                          'li',
                          {
                            on: {
                              click: function (t) {
                                return e.toggleModal('gameState')
                              }
                            }
                          },
                          [
                            e._v(' 游戏状态JSON '),
                            i(
                              'em',
                              [
                                i('font-awesome-icon', {
                                  attrs: { icon: 'file-code' }
                                })
                              ],
                              1
                            )
                          ]
                        ),
                        i('li', [
                          i(
                            'a',
                            {
                              attrs: {
                                href: 'https://discord.gg/Gd7ybwWbFk',
                                target: '_blank'
                              }
                            },
                            [e._v(' 加入Discord ')]
                          ),
                          i('em', [
                            i(
                              'a',
                              {
                                attrs: {
                                  href: 'https://discord.gg/Gd7ybwWbFk',
                                  target: '_blank'
                                }
                              },
                              [
                                i('font-awesome-icon', {
                                  attrs: { icon: ['fab', 'discord'] }
                                })
                              ],
                              1
                            )
                          ])
                        ]),
                        i('li', [
                          i(
                            'a',
                            {
                              attrs: {
                                href: 'https://github.com/bra1n/townsquare',
                                target: '_blank'
                              }
                            },
                            [e._v(' 源代码 ')]
                          ),
                          i('em', [
                            i(
                              'a',
                              {
                                attrs: {
                                  href: 'https://github.com/bra1n/townsquare',
                                  target: '_blank'
                                }
                              },
                              [
                                i('font-awesome-icon', {
                                  attrs: { icon: ['fab', 'github'] }
                                })
                              ],
                              1
                            )
                          ])
                        ])
                      ]
                    : e._e()
                ],
                2
              )
            ],
            1
          )
        ])
      },
      ee = [],
      te = {
        computed: {
          ...Object(o['d'])(['grimoire', 'session', 'edition']),
          ...Object(o['d'])('players', ['players'])
        },
        data() {
          return { tab: 'grimoire' }
        },
        methods: {
          setBackground() {
            const e = prompt('输入自定义背景图地址')
            ;(e || '' === e) && this.$store.commit('setBackground', e)
          },
          hostSession() {
            if (this.session.sessionId) return
            const e = prompt('输入房间号', Math.round(1e4 * Math.random()))
            e &&
              (this.$store.commit('session/clearVoteHistory'),
              this.$store.commit('session/setSpectator', !1),
              this.$store.commit('session/setSessionId', e),
              this.copySessionUrl())
          },
          copySessionUrl() {
            const e = window.location.href.split('#')[0],
              t = e + '#' + this.session.sessionId
            navigator.clipboard.writeText(t)
          },
          distributeRoles() {
            if (this.session.isSpectator) return
            const e = '你是否希望给所有坐下的玩家分发角色?'
            confirm(e) &&
              (this.$store.commit('session/distributeRoles', !0),
              setTimeout(
                (() => {
                  this.$store.commit('session/distributeRoles', !1)
                }).bind(this),
                2e3
              ))
          },
          imageOptIn() {
            const e =
              '你确定你要允许自定义图片吗？恶意的剧本文件作者可能会以这种方式追踪你的IP地址。'
            ;(this.grimoire.isImageOptIn || confirm(e)) &&
              this.toggleImageOptIn()
          },
          joinSession() {
            if (this.session.sessionId) return this.leaveSession()
            let e = prompt('输入房间号')
            e.match(/^https?:\/\//i) && (e = e.split('#').pop()),
              e &&
                (this.$store.commit('session/clearVoteHistory'),
                this.$store.commit('session/setSpectator', !0),
                this.$store.commit('toggleGrimoire', !1),
                this.$store.commit('session/setSessionId', e))
          },
          leaveSession() {
            confirm('你是否希望离开该房间?') &&
              (this.$store.commit('session/setSpectator', !1),
              this.$store.commit('session/setSessionId', ''))
          },
          addPlayer() {
            if (this.session.isSpectator) return
            if (this.players.length >= 20) return
            const e = prompt('玩家名')
            e && this.$store.commit('players/add', e)
          },
          randomizeSeatings() {
            this.session.isSpectator ||
              (confirm('你是否希望随机全部座位?') &&
                this.$store.dispatch('players/randomize'))
          },
          clearPlayers() {
            this.session.isSpectator ||
              (confirm('你是否希望移除全部玩家?') &&
                (this.session.nomination &&
                  this.$store.commit('session/nomination'),
                this.$store.commit('players/clear')))
          },
          clearRoles() {
            confirm('你是否希望移除全部玩家的角色?') &&
              this.$store.dispatch('players/clearRoles')
          },
          toggleNight() {
            this.$store.commit('toggleNight'),
              this.grimoire.isNight &&
                this.$store.commit('session/setMarkedPlayer', -1)
          },
          ...Object(o['c'])([
            'toggleGrimoire',
            'toggleMenu',
            'toggleImageOptIn',
            'toggleMuted',
            'toggleNightOrder',
            'toggleStatic',
            'setZoom',
            'toggleModal'
          ])
        }
      },
      ie = te,
      se = (i('ebe9'), Object(u['a'])(ie, X, ee, !1, null, '20b089bf', null)),
      re = se.exports,
      ne = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t
        return e.modals.roles && e.nonTravelers >= 5
          ? i(
              'Modal',
              {
                staticClass: 'roles',
                on: {
                  close: function (t) {
                    return e.toggleModal('roles')
                  }
                }
              },
              [
                i('h3', [
                  e._v('为当前' + e._s(e.nonTravelers) + '名玩家选择角色 :')
                ]),
                e._l(e.roleSelection, function (t, s) {
                  return i(
                    'ul',
                    { key: s, staticClass: 'tokens' },
                    [
                      i('li', { staticClass: 'count', class: [s] }, [
                        e._v(
                          ' ' +
                            e._s(
                              t.reduce(function (e, t) {
                                var i = t.selected
                                return e + i
                              }, 0)
                            ) +
                            ' / ' +
                            e._s(e.game[e.nonTravelers - 5][s]) +
                            ' '
                        )
                      ]),
                      e._l(t, function (t) {
                        return i(
                          'li',
                          {
                            key: t.id,
                            class: [t.team, t.selected ? 'selected' : ''],
                            on: {
                              click: function (e) {
                                t.selected = t.selected ? 0 : 1
                              }
                            }
                          },
                          [
                            i('Token', { attrs: { role: t } }),
                            t.setup
                              ? i('font-awesome-icon', {
                                  attrs: { icon: 'exclamation-triangle' }
                                })
                              : e._e(),
                            e.allowMultiple
                              ? i(
                                  'div',
                                  { staticClass: 'buttons' },
                                  [
                                    i('font-awesome-icon', {
                                      attrs: { icon: 'minus-circle' },
                                      on: {
                                        click: function (e) {
                                          e.stopPropagation(), t.selected--
                                        }
                                      }
                                    }),
                                    i('span', [
                                      e._v(
                                        e._s(
                                          t.selected > 1 ? 'x' + t.selected : ''
                                        )
                                      )
                                    ]),
                                    i('font-awesome-icon', {
                                      attrs: { icon: 'plus-circle' },
                                      on: {
                                        click: function (e) {
                                          e.stopPropagation(), t.selected++
                                        }
                                      }
                                    })
                                  ],
                                  1
                                )
                              : e._e()
                          ],
                          1
                        )
                      })
                    ],
                    2
                  )
                }),
                e.hasSelectedSetupRoles
                  ? i(
                      'div',
                      { staticClass: 'warning' },
                      [
                        i('font-awesome-icon', {
                          attrs: { icon: 'exclamation-triangle' }
                        }),
                        i('span', [
                          e._v(
                            ' 警告: 目前选择的角色会修改游戏的初始角色配置！随机分发器不会识别这些角色的功能。建议说书人手动调整要分发的角色。 '
                          )
                        ])
                      ],
                      1
                    )
                  : e._e(),
                i(
                  'label',
                  {
                    staticClass: 'multiple',
                    class: { checked: e.allowMultiple }
                  },
                  [
                    i('font-awesome-icon', {
                      attrs: {
                        icon: e.allowMultiple ? 'check-square' : 'square'
                      }
                    }),
                    i('input', {
                      directives: [
                        {
                          name: 'model',
                          rawName: 'v-model',
                          value: e.allowMultiple,
                          expression: 'allowMultiple'
                        }
                      ],
                      attrs: { type: 'checkbox', name: 'allow-multiple' },
                      domProps: {
                        checked: Array.isArray(e.allowMultiple)
                          ? e._i(e.allowMultiple, null) > -1
                          : e.allowMultiple
                      },
                      on: {
                        change: function (t) {
                          var i = e.allowMultiple,
                            s = t.target,
                            r = !!s.checked
                          if (Array.isArray(i)) {
                            var n = null,
                              o = e._i(i, n)
                            s.checked
                              ? o < 0 && (e.allowMultiple = i.concat([n]))
                              : o > -1 &&
                                (e.allowMultiple = i
                                  .slice(0, o)
                                  .concat(i.slice(o + 1)))
                          } else e.allowMultiple = r
                        }
                      }
                    }),
                    e._v(' 允许重复角色 ')
                  ],
                  1
                ),
                i('div', { staticClass: 'button-group' }, [
                  i(
                    'div',
                    {
                      staticClass: 'button',
                      class: {
                        disabled:
                          e.selectedRoles > e.nonTravelers || !e.selectedRoles
                      },
                      on: { click: e.assignRoles }
                    },
                    [
                      i('font-awesome-icon', {
                        attrs: { icon: 'people-arrows' }
                      }),
                      e._v(' 随机分配' + e._s(e.selectedRoles) + '个角色 ')
                    ],
                    1
                  ),
                  i(
                    'div',
                    {
                      staticClass: 'button',
                      on: { click: e.selectRandomRoles }
                    },
                    [
                      i('font-awesome-icon', { attrs: { icon: 'random' } }),
                      e._v(' 随机角色 ')
                    ],
                    1
                  )
                ])
              ],
              2
            )
          : e._e()
      },
      oe = []
    const ae = (e) => e[Math.floor(Math.random() * e.length)]
    var me = {
        components: { Token: N, Modal: C },
        data: function () {
          return { roleSelection: {}, game: W, allowMultiple: !1 }
        },
        computed: {
          selectedRoles: function () {
            return Object.values(this.roleSelection)
              .map((e) => e.reduce((e, { selected: t }) => e + t, 0))
              .reduce((e, t) => e + t, 0)
          },
          hasSelectedSetupRoles: function () {
            return Object.values(this.roleSelection).some((e) =>
              e.some((e) => e.selected && e.setup)
            )
          },
          ...Object(o['d'])(['roles', 'modals']),
          ...Object(o['d'])('players', ['players']),
          ...Object(o['b'])({ nonTravelers: 'players/nonTravelers' })
        },
        methods: {
          selectRandomRoles() {
            ;(this.roleSelection = {}),
              this.roles.forEach((e) => {
                this.roleSelection[e.team] ||
                  this.$set(this.roleSelection, e.team, []),
                  this.roleSelection[e.team].push(e),
                  this.$set(e, 'selected', 0)
              }),
              delete this.roleSelection['traveler']
            const e = Math.max(5, this.nonTravelers),
              t = this.game[e - 5]
            Object.keys(t).forEach((e) => {
              for (let i = 0; i < t[e]; i++)
                if (this.roleSelection[e]) {
                  const t = this.roleSelection[e].filter((e) => !e.selected)
                  t.length && (ae(t).selected = 1)
                }
            })
          },
          assignRoles() {
            if (this.selectedRoles <= this.nonTravelers && this.selectedRoles) {
              const e = Object.values(this.roleSelection)
                .map((e) =>
                  e.reduce((e, t) => [...e, ...Array(t.selected).fill(t)], [])
                )
                .reduce((e, t) => [...e, ...t], [])
                .map((e) => [Math.random(), e])
                .sort((e, t) => e[0] - t[0])
                .map((e) => e[1])
              this.players.forEach((t) => {
                if ('traveler' !== t.role.team && e.length) {
                  const i = e.pop()
                  this.$store.commit('players/update', {
                    player: t,
                    property: 'role',
                    value: i
                  })
                }
              }),
                this.$store.commit('toggleModal', 'roles')
            }
          },
          ...Object(o['c'])(['toggleModal'])
        },
        mounted: function () {
          Object.keys(this.roleSelection).length || this.selectRandomRoles()
        },
        watch: {
          roles() {
            this.selectRandomRoles()
          }
        }
      },
      de = me,
      le = (i('0c4b'), Object(u['a'])(de, ne, oe, !1, null, '1ec09ce1', null)),
      ge = le.exports,
      he = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t
        return e.modals.edition
          ? s(
              'Modal',
              {
                staticClass: 'editions',
                on: {
                  close: function (t) {
                    return e.toggleModal('edition')
                  }
                }
              },
              [
                e.isCustom
                  ? s('div', { staticClass: 'custom' }, [
                      s('h3', [e._v('加载自定义剧本/角色')]),
                      e._v(' 若想玩自定义剧本，请在'),
                      s(
                        'a',
                        {
                          attrs: {
                            href: 'https://script.bloodontheclocktower.com/',
                            target: '_blank'
                          }
                        },
                        [e._v('官方剧本工具')]
                      ),
                      e._v(
                        '中选择想玩的角色然后上传生成的"custom-list.json"文件或提供包含JSON文件的URL链接。 '
                      ),
                      s('br'),
                      e._v(
                        ' 若想玩自定义角色，请阅读关于如何编写自定义角色定义文件的'
                      ),
                      s(
                        'a',
                        {
                          attrs: {
                            href: 'https://github.com/bra1n/townsquare#custom-characters',
                            target: '_blank'
                          }
                        },
                        [e._v('文档')]
                      ),
                      e._v('。 '),
                      s('br'),
                      s('b', [e._v('请勿上传未知来源的自定义JSON文件！')]),
                      s('h3', [e._v('剧本：')]),
                      s(
                        'ul',
                        { staticClass: 'scripts' },
                        e._l(e.scripts, function (t, i) {
                          return s(
                            'li',
                            {
                              key: i,
                              on: {
                                click: function (i) {
                                  return e.handleURL(t[1])
                                }
                              }
                            },
                            [e._v(' ' + e._s(t[0]) + ' ')]
                          )
                        }),
                        0
                      ),
                      s('input', {
                        ref: 'upload',
                        attrs: { type: 'file', accept: 'application/json' },
                        on: { change: e.handleUpload }
                      }),
                      s('div', { staticClass: 'button-group' }, [
                        s(
                          'div',
                          {
                            staticClass: 'button',
                            on: { click: e.openUpload }
                          },
                          [
                            s('font-awesome-icon', {
                              attrs: { icon: 'file-upload' }
                            }),
                            e._v(' 上传JSON ')
                          ],
                          1
                        ),
                        s(
                          'div',
                          { staticClass: 'button', on: { click: e.promptURL } },
                          [
                            s('font-awesome-icon', { attrs: { icon: 'link' } }),
                            e._v(' 输入URL ')
                          ],
                          1
                        ),
                        s(
                          'div',
                          {
                            staticClass: 'button',
                            on: {
                              click: function (t) {
                                e.isCustom = !1
                              }
                            }
                          },
                          [
                            s('font-awesome-icon', { attrs: { icon: 'undo' } }),
                            e._v(' 返回 ')
                          ],
                          1
                        )
                      ])
                    ])
                  : s('div', [
                      s('h3', [e._v('选择剧本:')]),
                      s(
                        'ul',
                        { staticClass: 'editions' },
                        [
                          e._l(e.editions, function (t) {
                            return s(
                              'li',
                              {
                                key: t.id,
                                staticClass: 'edition',
                                class: ['edition-' + t.id],
                                style: {
                                  backgroundImage:
                                    'url(' +
                                    i('ce23')('./' + t.id + '.png') +
                                    ')'
                                },
                                on: {
                                  click: function (i) {
                                    return e.setEdition(t)
                                  }
                                }
                              },
                              [e._v(' ' + e._s(t.name) + ' ')]
                            )
                          }),
                          s(
                            'li',
                            {
                              staticClass: 'edition edition-custom',
                              style: {
                                backgroundImage: 'url(' + i('441d') + ')'
                              },
                              on: {
                                click: function (t) {
                                  e.isCustom = !0
                                }
                              }
                            },
                            [e._v(' 自定义剧本/角色 ')]
                          )
                        ],
                        2
                      )
                    ])
              ]
            )
          : e._e()
      },
      pe = [],
      ce = i('00c0'),
      fe = {
        components: { Modal: C },
        data: function () {
          return {
            editions: ce,
            isCustom: !1,
            scripts: [
              [
                '忏悔日',
                'https://gist.githubusercontent.com/bra1n/0337cc44c6fd2c44f7589256ed5486d2/raw/16be38fa3c01aaf49827303ac80577bdb52c0b25/penanceday.json'
              ],
              [
                '瓦釜雷鸣',
                'https://gist.githubusercontent.com/bra1n/8a5ec41a7bbf945f6b7dfc1cef72b569/raw/a312ab93c2f302e0ef83c8b65a4e8e82760fda3a/catfishing.json'
              ],
              [
                '如履薄冰 (小剧本)',
                'https://gist.githubusercontent.com/bra1n/8dacd9f2abc6f428331ea1213ab153f5/raw/0cacbcaf8ed9bddae0cca25a9ada97e9958d868b/on-thin-ice.json'
              ],
              [
                '逐底竞争 (小剧本)',
                'https://gist.githubusercontent.com/bra1n/63e1354cb3dc9d4032bcd0623dc48888/raw/5acb0eedcc0a67a64a99c7e0e6271de0b7b2e1b2/race-to-the-bottom.json'
              ],
              [
                '失控造物 (小剧本)',
                'https://gist.githubusercontent.com/bra1n/32c52b422cc01b934a4291eeb81dbcee/raw/5bf770693bbf7aff5e86601c82ca4af3222f4ba6/Frankensteins_Mayor_by_Ted.json'
              ],
              [
                '永生之境 (小剧本)',
                'https://gist.githubusercontent.com/bra1n/1f65bd4a999524719d5dabe98c3c2d27/raw/22bbec6bf56a51a7459e5ae41ed47e41971c5445/VigormortisHighSchool.json'
              ]
            ]
          }
        },
        computed: Object(o['d'])(['modals']),
        methods: {
          openUpload() {
            this.$refs.upload.click()
          },
          handleUpload() {
            const e = this.$refs.upload.files[0]
            if (e && e.size) {
              const t = new FileReader()
              t.addEventListener('load', () => {
                try {
                  const e = JSON.parse(t.result)
                  this.parseRoles(e)
                } catch (e) {
                  alert('Error reading custom script: ' + e.message)
                }
                this.$refs.upload.value = ''
              }),
                t.readAsText(e)
            }
          },
          promptURL() {
            const e = prompt('输入包含custom-script.json文件的URL')
            e && this.handleURL(e)
          },
          async handleURL(e) {
            const t = await fetch(e)
            if (t && t.json)
              try {
                const e = await t.json()
                this.parseRoles(e)
              } catch (i) {
                alert('Error loading custom script: ' + i.message)
              }
          },
          parseRoles(e) {
            if (!e || !e.length) return
            const t = e.findIndex(({ id: e }) => '_meta' === e)
            let i = {}
            if (
              (t > -1 && (i = e.splice(t, 1).pop()),
              this.$store.commit('setCustomRoles', e),
              this.$store.commit(
                'setEdition',
                Object.assign({}, i, { id: 'custom' })
              ),
              e.some(({ id: e }) => this.$store.state.fabled.has(e)))
            ) {
              const t = []
              e.forEach(({ id: e }) => {
                this.$store.state.fabled.has(e) &&
                  t.push(this.$store.state.fabled.get(e))
              }),
                this.$store.commit('players/setFabled', { fabled: t })
            }
            this.isCustom = !1
          },
          ...Object(o['c'])(['toggleModal', 'setEdition'])
        }
      },
      ue = fe,
      be = (i('0c10'), Object(u['a'])(ue, he, pe, !1, null, '92553e84', null)),
      Ne = be.exports,
      _e = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t
        return i('div', { staticClass: 'intro' }, [
          i('img', { attrs: { src: 'static/apple-icon.png', alt: '' } }),
          e._v(' 欢迎使用'),
          i('b', [e._v('血染钟楼')]),
          e._v('电子魔典！'),
          i('br'),
          e._v(' 你可以点击顶部的 '),
          i(
            'span',
            { staticClass: 'button', on: { click: e.toggleMenu } },
            [
              i('font-awesome-icon', { attrs: { icon: 'cog' } }),
              e._v(' 菜单 ')
            ],
            1
          ),
          e._v(' 添加玩家 '),
          i('b', [e._v('[A]')]),
          e._v('。'),
          i('br'),
          e._v(' 你也可以按 '),
          i('b', [e._v('[J]')]),
          e._v(' 键加入线上游戏房间。 '),
          e._m(0)
        ])
      },
      ye = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t
          return i('div', { staticClass: 'footer' }, [
            e._v(' 本项目是开源项目，源代码地址是 '),
            i(
              'a',
              {
                attrs: {
                  href: 'https://github.com/bra1n/townsquare',
                  target: '_blank'
                }
              },
              [e._v('GitHub')]
            ),
            e._v(
              '。 本项目是非官方项目。「血染钟楼」是由Steven Medway设计，The Pandemonium Institute公司出品的桌游。 '
            ),
            e._v(' 中文规则请查看 '),
            i(
              'a',
              {
                attrs: {
                  href: 'https://clydeshen.github.io/bloodontower/docs',
                  target: '_blank'
                }
              },
              [e._v('游戏规则及身份说明')]
            )
          ])
        }
      ],
      Re = { methods: Object(o['c'])(['toggleMenu']) },
      ve = Re,
      we = (i('11a2'), Object(u['a'])(ve, _e, ye, !1, null, '630214a9', null)),
      ke = we.exports,
      xe = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t
        return e.modals.reference && e.roles.size
          ? s(
              'Modal',
              {
                staticClass: 'characters',
                on: {
                  close: function (t) {
                    return e.toggleModal('reference')
                  }
                }
              },
              [
                s('font-awesome-icon', {
                  staticClass: 'toggle',
                  attrs: { icon: 'cloud-moon', title: 'Show Night Order' },
                  on: {
                    click: function (t) {
                      return e.toggleModal('nightOrder')
                    }
                  }
                }),
                s(
                  'h3',
                  [
                    e._v(' 角色技能表 '),
                    s('font-awesome-icon', { attrs: { icon: 'address-card' } }),
                    e._v(' ' + e._s(e.edition.name || 'Custom Script') + ' ')
                  ],
                  1
                ),
                e.states.length
                  ? s('div', { staticClass: 'team states' }, [
                      s('aside', [s('h4', [e._v('状态')])]),
                      s(
                        'ul',
                        [
                          e._l(e.states, function (t, i) {
                            return s('li', { key: i }, [
                              s('span', { staticClass: 'icon' }),
                              s('div', { staticClass: 'role' }, [
                                s('span', { staticClass: 'name' }, [
                                  e._v(e._s(t.name))
                                ]),
                                s('span', { staticClass: 'ability' }, [
                                  e._v(e._s(t.description))
                                ])
                              ])
                            ])
                          }),
                          s('li'),
                          s('li')
                        ],
                        2
                      )
                    ])
                  : e._e(),
                e._l(e.rolesGrouped, function (t, r) {
                  return s('div', { key: r, class: ['team', r] }, [
                    s('aside', [s('h4', [e._v(e._s(e.getTeamZhCN(r)))])]),
                    s(
                      'ul',
                      [
                        e._l(t, function (t) {
                          return s('li', { key: t.id, class: [r] }, [
                            t.id
                              ? s('span', {
                                  staticClass: 'icon',
                                  style: {
                                    backgroundImage:
                                      'url(' +
                                      (t.image && e.grimoire.isImageOptIn
                                        ? t.image
                                        : i('61b0')(
                                            './' + (t.imageAlt || t.id) + '.png'
                                          )) +
                                      ')'
                                  }
                                })
                              : e._e(),
                            s('div', { staticClass: 'role' }, [
                              Object.keys(e.playersByRole).length
                                ? s('span', { staticClass: 'player' }, [
                                    e._v(
                                      e._s(
                                        e.playersByRole[t.id]
                                          ? e.playersByRole[t.id].join(', ')
                                          : ''
                                      )
                                    )
                                  ])
                                : e._e(),
                              s('span', { staticClass: 'name' }, [
                                e._v(e._s(t.name))
                              ]),
                              s('span', { staticClass: 'ability' }, [
                                e._v(e._s(t.ability))
                              ])
                            ])
                          ])
                        }),
                        s('li', { class: [r] }),
                        s('li', { class: [r] })
                      ],
                      2
                    )
                  ])
                }),
                e.jinxed.length
                  ? s('div', { staticClass: 'team jinxed' }, [
                      s('aside', [s('h4', [e._v('冲突')])]),
                      s(
                        'ul',
                        [
                          e._l(e.jinxed, function (t, r) {
                            return s('li', { key: r }, [
                              s('span', {
                                staticClass: 'icon',
                                style: {
                                  backgroundImage:
                                    'url(' +
                                    i('61b0')('./' + t.first.id + '.png') +
                                    ')'
                                }
                              }),
                              s('span', {
                                staticClass: 'icon',
                                style: {
                                  backgroundImage:
                                    'url(' +
                                    i('61b0')('./' + t.second.id + '.png') +
                                    ')'
                                }
                              }),
                              s('div', { staticClass: 'role' }, [
                                s('span', { staticClass: 'name' }, [
                                  e._v(
                                    e._s(t.first.name) +
                                      ' & ' +
                                      e._s(t.second.name)
                                  )
                                ]),
                                s('span', { staticClass: 'ability' }, [
                                  e._v(e._s(t.reason))
                                ])
                              ])
                            ])
                          }),
                          s('li'),
                          s('li')
                        ],
                        2
                      )
                    ])
                  : e._e()
              ],
              2
            )
          : e._e()
      },
      Se = [],
      Oe = {
        components: { Modal: C },
        computed: {
          jinxed: function () {
            const e = []
            return (
              this.roles.forEach((t) => {
                this.jinxes.get(t.id) &&
                  this.jinxes.get(t.id).forEach((i, s) => {
                    this.roles.get(s) &&
                      e.push({ first: t, second: this.roles.get(s), reason: i })
                  })
              }),
              e
            )
          },
          rolesGrouped: function () {
            const e = {}
            return (
              this.roles.forEach((t) => {
                e[t.team] || (e[t.team] = []), e[t.team].push(t)
              }),
              delete e['traveler'],
              delete e['fabled'],
              e
            )
          },
          playersByRole: function () {
            const e = {}
            return (
              this.players.forEach(({ name: t, role: i }) => {
                i &&
                  i.id &&
                  'traveler' !== i.team &&
                  (e[i.id] || (e[i.id] = []), e[i.id].push(t))
              }),
              e
            )
          },
          ...Object(o['d'])([
            'roles',
            'modals',
            'edition',
            'grimoire',
            'jinxes',
            'states'
          ]),
          ...Object(o['d'])('players', ['players'])
        },
        methods: {
          ...Object(o['c'])(['toggleModal']),
          getTeamZhCN(e) {
            let t = {
              townsfolk: '村民',
              outsider: '外来者',
              minion: '爪牙',
              fabled: '传奇',
              demon: '恶魔'
            }
            return t[e]
          }
        }
      },
      Me = Oe,
      Ie = (i('e5a5'), Object(u['a'])(Me, xe, Se, !1, null, '4d02de88', null)),
      Ce = Ie.exports,
      Pe = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t
        return s(
          'div',
          { attrs: { id: 'vote' } },
          [
            s('div', { staticClass: 'arrows' }, [
              s('span', { staticClass: 'nominee', style: e.nomineeStyle }),
              s('span', { staticClass: 'nominator', style: e.nominatorStyle })
            ]),
            s(
              'div',
              { staticClass: 'overlay' },
              [
                s('audio', { attrs: { src: i('f6a8'), preload: 'auto' } }),
                s('em', { staticClass: 'blue' }, [
                  e._v(e._s(e.nominator.name))
                ]),
                e._v(' 提名了 '),
                s('em', [e._v(e._s(e.nominee.name))]),
                e._v('! '),
                s('br'),
                s('em', { staticClass: 'blue' }, [
                  e._v(' ' + e._s(e.voters.length) + ' ')
                ]),
                e._v(' 票 '),
                'traveler' !== e.nominee.role.team
                  ? s('em', [
                      e._v(' (满' + e._s(Math.ceil(e.alive / 2)) + '票为通过) ')
                    ])
                  : s('em', [
                      e._v(
                        '(满' +
                          e._s(Math.ceil(e.players.length / 2)) +
                          '票为通过)'
                      )
                    ]),
                e.session.isSpectator
                  ? e.canVote
                    ? [
                        e.session.isVoteInProgress
                          ? e._e()
                          : s('div', [
                              e._v(
                                ' 投票间隔' +
                                  e._s(e.session.votingSpeed / 1e3) +
                                  '秒 '
                              )
                            ]),
                        s('div', { staticClass: 'button-group' }, [
                          s(
                            'div',
                            {
                              staticClass: 'button townsfolk',
                              class: { disabled: !e.currentVote },
                              on: {
                                click: function (t) {
                                  return e.vote(!1)
                                }
                              }
                            },
                            [e._v(' 放下 ')]
                          ),
                          s(
                            'div',
                            {
                              staticClass: 'button demon',
                              class: { disabled: e.currentVote },
                              on: {
                                click: function (t) {
                                  return e.vote(!0)
                                }
                              }
                            },
                            [e._v(' 举手 ')]
                          )
                        ])
                      ]
                    : e.player
                    ? e._e()
                    : s('div', [e._v(' 坐下后才能投票 ')])
                  : [
                      !e.session.isVoteInProgress && e.session.lockedVote < 1
                        ? s(
                            'div',
                            [
                              e._v(' 每位玩家的时间: '),
                              s('font-awesome-icon', {
                                attrs: { icon: 'minus-circle' },
                                on: {
                                  mousedown: function (t) {
                                    return (
                                      t.preventDefault(), e.setVotingSpeed(-500)
                                    )
                                  }
                                }
                              }),
                              e._v(
                                ' ' + e._s(e.session.votingSpeed / 1e3) + 's '
                              ),
                              s('font-awesome-icon', {
                                attrs: { icon: 'plus-circle' },
                                on: {
                                  mousedown: function (t) {
                                    return (
                                      t.preventDefault(), e.setVotingSpeed(500)
                                    )
                                  }
                                }
                              })
                            ],
                            1
                          )
                        : e._e(),
                      s(
                        'div',
                        { staticClass: 'button-group' },
                        [
                          e.session.isVoteInProgress
                            ? e._e()
                            : s(
                                'div',
                                {
                                  staticClass: 'button townsfolk',
                                  on: { click: e.countdown }
                                },
                                [e._v(' 倒计时 ')]
                              ),
                          e.session.isVoteInProgress
                            ? [
                                s(
                                  'div',
                                  {
                                    staticClass: 'button townsfolk',
                                    class: { disabled: !e.session.lockedVote },
                                    on: { click: e.pause }
                                  },
                                  [
                                    e._v(
                                      ' ' +
                                        e._s(e.voteTimer ? '暂停' : '继续') +
                                        ' '
                                    )
                                  ]
                                ),
                                s(
                                  'div',
                                  {
                                    staticClass: 'button',
                                    on: { click: e.stop }
                                  },
                                  [e._v('重置')]
                                )
                              ]
                            : s(
                                'div',
                                {
                                  staticClass: 'button',
                                  on: { click: e.start }
                                },
                                [
                                  e._v(
                                    ' ' +
                                      e._s(
                                        e.session.lockedVote
                                          ? '重新开始'
                                          : '开始'
                                      ) +
                                      ' '
                                  )
                                ]
                              ),
                          s(
                            'div',
                            {
                              staticClass: 'button demon',
                              on: { click: e.finish }
                            },
                            [e._v('关闭')]
                          )
                        ],
                        2
                      ),
                      'traveler' !== e.nominee.role.team
                        ? s('div', { staticClass: 'button-group mark' }, [
                            s(
                              'div',
                              {
                                staticClass: 'button',
                                class: {
                                  disabled:
                                    e.session.nomination[1] ===
                                    e.session.markedPlayer
                                },
                                on: { click: e.setMarked }
                              },
                              [e._v(' 标记处决 ')]
                            ),
                            s(
                              'div',
                              {
                                staticClass: 'button',
                                on: { click: e.removeMarked }
                              },
                              [e._v(' 清除标记 ')]
                            )
                          ])
                        : e._e()
                    ]
              ],
              2
            ),
            s('transition', { attrs: { name: 'blur' } }, [
              e.session.isVoteInProgress && !e.session.lockedVote
                ? s('div', { staticClass: 'countdown' }, [
                    s('span', [e._v('3')]),
                    s('span', [e._v('2')]),
                    s('span', [e._v('1')]),
                    s('span', [e._v('开始')]),
                    s('audio', {
                      attrs: {
                        autoplay: !e.grimoire.isMuted,
                        src: i('f6a8'),
                        muted: e.grimoire.isMuted
                      }
                    })
                  ])
                : e._e()
            ])
          ],
          1
        )
      },
      je = [],
      Ve = {
        computed: {
          ...Object(o['d'])('players', ['players']),
          ...Object(o['d'])(['session', 'grimoire']),
          ...Object(o['b'])({ alive: 'players/alive' }),
          nominator: function () {
            return this.players[this.session.nomination[0]]
          },
          nominatorStyle: function () {
            const e = this.players.length,
              t = this.session.nomination[0]
            return {
              transform: `rotate(${Math.round((t / e) * 360)}deg)`,
              transitionDuration: this.session.votingSpeed - 100 + 'ms'
            }
          },
          nominee: function () {
            return this.players[this.session.nomination[1]]
          },
          nomineeStyle: function () {
            const e = this.players.length,
              t = this.session.nomination[1],
              i = this.session.lockedVote,
              s = (360 * (t + Math.min(i, e))) / e
            return {
              transform: `rotate(${Math.round(s)}deg)`,
              transitionDuration: this.session.votingSpeed - 100 + 'ms'
            }
          },
          player: function () {
            return this.players.find((e) => e.id === this.session.playerId)
          },
          currentVote: function () {
            const e = this.players.findIndex(
              (e) => e.id === this.session.playerId
            )
            return e >= 0 ? !!this.session.votes[e] : void 0
          },
          canVote: function () {
            if (!this.player) return !1
            if (this.player.isVoteless && 'traveler' !== this.nominee.role.team)
              return !1
            const e = this.session,
              t = this.players.length,
              i = this.players.indexOf(this.player),
              s = (i - 1 + t - e.nomination[1]) % t
            return s >= e.lockedVote - 1
          },
          voters: function () {
            const e = this.session.nomination[1],
              t = Array(this.players.length)
                .fill('')
                .map((e, t) =>
                  this.session.votes[t] ? this.players[t].name : ''
                ),
              i = [...t.slice(e + 1), ...t.slice(0, e + 1)]
            return (
              this.session.lockedVote
                ? i.slice(0, this.session.lockedVote - 1)
                : i
            ).filter((e) => !!e)
          }
        },
        data() {
          return { voteTimer: null }
        },
        methods: {
          countdown() {
            this.$store.commit('session/lockVote', 0),
              this.$store.commit('session/setVoteInProgress', !0),
              (this.voteTimer = setInterval(() => {
                this.start()
              }, 4e3))
          },
          start() {
            this.$store.commit('session/lockVote', 1),
              this.$store.commit('session/setVoteInProgress', !0),
              clearInterval(this.voteTimer),
              (this.voteTimer = setInterval(() => {
                this.$store.commit('session/lockVote'),
                  this.session.lockedVote > this.players.length &&
                    (clearInterval(this.voteTimer),
                    this.$store.commit('session/setVoteInProgress', !1))
              }, this.session.votingSpeed))
          },
          pause() {
            this.voteTimer
              ? (clearInterval(this.voteTimer), (this.voteTimer = null))
              : (this.voteTimer = setInterval(() => {
                  this.$store.commit('session/lockVote'),
                    this.session.lockedVote > this.players.length &&
                      (clearInterval(this.voteTimer),
                      this.$store.commit('session/setVoteInProgress', !1))
                }, this.session.votingSpeed))
          },
          stop() {
            clearInterval(this.voteTimer),
              (this.voteTimer = null),
              this.$store.commit('session/setVoteInProgress', !1),
              this.$store.commit('session/lockVote', 0)
          },
          finish() {
            clearInterval(this.voteTimer),
              this.$store.commit('session/addHistory', this.players),
              this.$store.commit('session/nomination')
          },
          vote(e) {
            if (!this.canVote) return !1
            const t = this.players.findIndex(
              (e) => e.id === this.session.playerId
            )
            t >= 0 &&
              !!this.session.votes[t] !== e &&
              this.$store.commit('session/voteSync', [t, e])
          },
          setVotingSpeed(e) {
            const t = Math.round(this.session.votingSpeed + e)
            t > 0 && this.$store.commit('session/setVotingSpeed', t)
          },
          setMarked() {
            this.$store.commit(
              'session/setMarkedPlayer',
              this.session.nomination[1]
            )
          },
          removeMarked() {
            this.$store.commit('session/setMarkedPlayer', -1)
          }
        }
      },
      $e = Ve,
      Te = (i('a1b6'), Object(u['a'])($e, Pe, je, !1, null, '7308e080', null)),
      Ee = Te.exports,
      He = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t
        return i(
          'div',
          { attrs: { id: 'gradients' } },
          e._l(e.gradients, function (e, t) {
            return i(
              'svg',
              { key: t, attrs: { width: '0', height: '0' } },
              [
                i(
                  'linearGradient',
                  {
                    attrs: {
                      id: e[0],
                      x1: '50%',
                      y1: '100%',
                      x2: '50%',
                      y2: '0%'
                    }
                  },
                  [
                    i('stop', {
                      style: { 'stop-color': e[2], 'stop-opacity': 1 },
                      attrs: { offset: '0%' }
                    }),
                    i('stop', {
                      style: { 'stop-color': e[1], 'stop-opacity': 1 },
                      attrs: { offset: '100%' }
                    })
                  ],
                  1
                )
              ],
              1
            )
          }),
          0
        )
      },
      ze = [],
      Ge = {
        data() {
          return {
            gradients: [
              ['demon', '#ce0100', '#000'],
              ['townsfolk', '#1f65ff', '#000'],
              ['default', '#4E4E4E', '#000']
            ]
          }
        }
      },
      Ae = Ge,
      De = (i('3f8f'), Object(u['a'])(Ae, He, ze, !1, null, '1e202a64', null)),
      Fe = De.exports,
      Je = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t
        return e.modals.nightOrder && e.roles.size
          ? s(
              'Modal',
              {
                staticClass: 'night-reference',
                on: {
                  close: function (t) {
                    return e.toggleModal('nightOrder')
                  }
                }
              },
              [
                s('font-awesome-icon', {
                  staticClass: 'toggle',
                  attrs: {
                    icon: 'address-card',
                    title: 'Show Character Reference'
                  },
                  on: {
                    click: function (t) {
                      return e.toggleModal('reference')
                    }
                  }
                }),
                s(
                  'h3',
                  [
                    e._v(' 夜间顺序 '),
                    s('font-awesome-icon', { attrs: { icon: 'cloud-moon' } }),
                    e._v(' ' + e._s(e.edition.name || 'Custom Script') + ' ')
                  ],
                  1
                ),
                s('div', { staticClass: 'night' }, [
                  s(
                    'ul',
                    { staticClass: 'first' },
                    [
                      s('li', { staticClass: 'headline' }, [e._v('第一夜')]),
                      e._l(e.rolesFirstNight, function (t) {
                        return s('li', { key: t.name, class: [t.team] }, [
                          s('span', { staticClass: 'name' }, [
                            e._v(' ' + e._s(t.name) + ' '),
                            t.players.length
                              ? s(
                                  'span',
                                  { staticClass: 'player' },
                                  [
                                    s('br'),
                                    e._l(t.players, function (i, r) {
                                      return s(
                                        'small',
                                        { key: r, class: { dead: i.isDead } },
                                        [
                                          e._v(
                                            e._s(
                                              i.name +
                                                (t.players.length > r + 1
                                                  ? ','
                                                  : '')
                                            )
                                          )
                                        ]
                                      )
                                    })
                                  ],
                                  2
                                )
                              : e._e()
                          ]),
                          t.id
                            ? s('span', {
                                staticClass: 'icon',
                                style: {
                                  backgroundImage:
                                    'url(' +
                                    (t.image && e.grimoire.isImageOptIn
                                      ? t.image
                                      : i('61b0')(
                                          './' + (t.imageAlt || t.id) + '.png'
                                        )) +
                                    ')'
                                }
                              })
                            : e._e(),
                          t.firstNightReminder
                            ? s('span', { staticClass: 'reminder' }, [
                                e._v(' ' + e._s(t.firstNightReminder) + ' ')
                              ])
                            : e._e()
                        ])
                      })
                    ],
                    2
                  ),
                  s(
                    'ul',
                    { staticClass: 'other' },
                    [
                      s('li', { staticClass: 'headline' }, [e._v('其他夜')]),
                      e._l(e.rolesOtherNight, function (t) {
                        return s('li', { key: t.name, class: [t.team] }, [
                          t.id
                            ? s('span', {
                                staticClass: 'icon',
                                style: {
                                  backgroundImage:
                                    'url(' +
                                    (t.image && e.grimoire.isImageOptIn
                                      ? t.image
                                      : i('61b0')(
                                          './' + (t.imageAlt || t.id) + '.png'
                                        )) +
                                    ')'
                                }
                              })
                            : e._e(),
                          s('span', { staticClass: 'name' }, [
                            e._v(' ' + e._s(t.name) + ' '),
                            t.players.length
                              ? s(
                                  'span',
                                  { staticClass: 'player' },
                                  [
                                    s('br'),
                                    e._l(t.players, function (i, r) {
                                      return s(
                                        'small',
                                        { key: r, class: { dead: i.isDead } },
                                        [
                                          e._v(
                                            e._s(
                                              i.name +
                                                (t.players.length > r + 1
                                                  ? ','
                                                  : '')
                                            )
                                          )
                                        ]
                                      )
                                    })
                                  ],
                                  2
                                )
                              : e._e()
                          ]),
                          t.otherNightReminder
                            ? s('span', { staticClass: 'reminder' }, [
                                e._v(' ' + e._s(t.otherNightReminder) + ' ')
                              ])
                            : e._e()
                        ])
                      })
                    ],
                    2
                  )
                ])
              ],
              1
            )
          : e._e()
      },
      Be = [],
      qe = {
        components: { Modal: C },
        computed: {
          rolesFirstNight: function () {
            const e = []
            return (
              this.players.length > 6 &&
                e.push(
                  {
                    id: 'evil',
                    name: '爪牙信息',
                    firstNight: 5,
                    team: 'minion',
                    players: this.players.filter(
                      (e) => 'minion' === e.role.team
                    ),
                    firstNightReminder:
                      '如果爪牙多于一位，让他们互相看清彼此。展示这是恶魔卡片。指向恶魔。'
                  },
                  {
                    id: 'evil',
                    name: '恶魔信息与伪装身份',
                    firstNight: 8,
                    team: 'demon',
                    players: this.players.filter(
                      (e) => 'demon' === e.role.team
                    ),
                    firstNightReminder:
                      '展示这些是你的爪牙卡片。指向每个爪牙。展示这些身份不在游戏中卡片。展示3个不在场的善良身份'
                  }
                ),
              this.roles.forEach((t) => {
                const i = this.players.filter((e) => e.role.id === t.id)
                t.firstNight &&
                  ('traveler' !== t.team || i.length) &&
                  e.push(Object.assign({ players: i }, t))
              }),
              this.fabled
                .filter(({ firstNight: e }) => e)
                .forEach((t) => {
                  e.push(Object.assign({ players: [] }, t))
                }),
              e.sort((e, t) => e.firstNight - t.firstNight),
              e
            )
          },
          rolesOtherNight: function () {
            const e = []
            return (
              this.roles.forEach((t) => {
                const i = this.players.filter((e) => e.role.id === t.id)
                t.otherNight &&
                  ('traveler' !== t.team || i.length) &&
                  e.push(Object.assign({ players: i }, t))
              }),
              this.fabled
                .filter(({ otherNight: e }) => e)
                .forEach((t) => {
                  e.push(Object.assign({ players: [] }, t))
                }),
              e.sort((e, t) => e.otherNight - t.otherNight),
              e
            )
          },
          ...Object(o['d'])(['roles', 'modals', 'edition', 'grimoire']),
          ...Object(o['d'])('players', ['players', 'fabled'])
        },
        methods: { ...Object(o['c'])(['toggleModal']) }
      },
      Le = qe,
      Ue = (i('cea5'), Object(u['a'])(Le, Je, Be, !1, null, '46aacb94', null)),
      We = Ue.exports,
      Ze = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t
        return e.modals.fabled && e.fabled.length
          ? i(
              'Modal',
              {
                on: {
                  close: function (t) {
                    return e.toggleModal('fabled')
                  }
                }
              },
              [
                i('h3', [e._v(' 选择一个传奇角色 ')]),
                i(
                  'ul',
                  { staticClass: 'tokens' },
                  e._l(e.fabled, function (t) {
                    return i(
                      'li',
                      {
                        key: t.id,
                        on: {
                          click: function (i) {
                            return e.setFabled(t)
                          }
                        }
                      },
                      [i('Token', { attrs: { role: t } })],
                      1
                    )
                  }),
                  0
                )
              ]
            )
          : e._e()
      },
      Ke = [],
      Qe = {
        components: { Token: N, Modal: C },
        computed: {
          ...Object(o['d'])(['modals', 'fabled', 'grimoire']),
          fabled() {
            const e = []
            return (
              this.$store.state.fabled.forEach((t) => {
                this.$store.state.players.fabled.some((e) => e.id === t.id) ||
                  e.push(t)
              }),
              e
            )
          }
        },
        methods: {
          setFabled(e) {
            this.$store.commit('players/setFabled', { fabled: e }),
              this.$store.commit('toggleModal', 'fabled')
          },
          ...Object(o['c'])(['toggleModal'])
        }
      },
      Ye = Qe,
      Xe = (i('12d6'), Object(u['a'])(Ye, Ze, Ke, !1, null, '01374d14', null)),
      et = Xe.exports,
      tt = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t
        return !e.modals.voteHistory ||
          (!e.session.voteHistory && e.session.isSpectator)
          ? e._e()
          : i(
              'Modal',
              {
                staticClass: 'vote-history',
                on: {
                  close: function (t) {
                    return e.toggleModal('voteHistory')
                  }
                }
              },
              [
                e.session.isSpectator
                  ? i('font-awesome-icon', {
                      staticClass: 'clear',
                      attrs: { icon: 'trash-alt', title: 'Clear vote history' },
                      on: { click: e.clearVoteHistory }
                    })
                  : e._e(),
                i('h3', [e._v('投票记录')]),
                e.session.isSpectator
                  ? e._e()
                  : [
                      i('div', { staticClass: 'options' }, [
                        i(
                          'div',
                          {
                            staticClass: 'option',
                            on: { click: e.setRecordVoteHistory }
                          },
                          [
                            i('font-awesome-icon', {
                              attrs: {
                                icon: [
                                  'fas',
                                  e.session.isVoteHistoryAllowed
                                    ? 'check-square'
                                    : 'square'
                                ]
                              }
                            }),
                            e._v(' 玩家可查看 ')
                          ],
                          1
                        ),
                        i(
                          'div',
                          {
                            staticClass: 'option',
                            on: { click: e.clearVoteHistory }
                          },
                          [
                            i('font-awesome-icon', {
                              attrs: { icon: 'trash-alt' }
                            }),
                            e._v(' 清除记录 ')
                          ],
                          1
                        )
                      ])
                    ],
                i('table', [
                  i('thead', [
                    i('tr', [
                      i('td', [e._v('时间')]),
                      i('td', [e._v('发起提名')]),
                      i('td', [e._v('被提名')]),
                      i('td', [e._v('类型')]),
                      i('td', [e._v('票数')]),
                      i('td', [e._v('通过票数')]),
                      i(
                        'td',
                        [
                          i('font-awesome-icon', {
                            attrs: { icon: 'user-friends' }
                          }),
                          e._v(' 投票人 ')
                        ],
                        1
                      )
                    ])
                  ]),
                  i(
                    'tbody',
                    e._l(e.session.voteHistory, function (t, s) {
                      return i('tr', { key: s }, [
                        i('td', [
                          e._v(
                            ' ' +
                              e._s(
                                t.timestamp
                                  .getHours()
                                  .toString()
                                  .padStart(2, '0')
                              ) +
                              ':' +
                              e._s(
                                t.timestamp
                                  .getMinutes()
                                  .toString()
                                  .padStart(2, '0')
                              ) +
                              ' '
                          )
                        ]),
                        i('td', [e._v(e._s(t.nominator))]),
                        i('td', [e._v(e._s(t.nominee))]),
                        i('td', [e._v(e._s(e.typeZhCN[t.type]))]),
                        i(
                          'td',
                          [
                            e._v(' ' + e._s(t.votes.length) + ' '),
                            i('font-awesome-icon', {
                              attrs: { icon: 'hand-paper' }
                            })
                          ],
                          1
                        ),
                        i(
                          'td',
                          [
                            e._v(' ' + e._s(t.majority) + ' '),
                            i('font-awesome-icon', {
                              attrs: {
                                icon: [
                                  'fas',
                                  t.votes.length >= t.majority
                                    ? 'check-square'
                                    : 'square'
                                ]
                              }
                            })
                          ],
                          1
                        ),
                        i('td', [e._v(' ' + e._s(t.votes.join(', ')) + ' ')])
                      ])
                    }),
                    0
                  )
                ])
              ],
              2
            )
      },
      it = [],
      st = {
        components: { Modal: C },
        computed: { ...Object(o['d'])(['session', 'modals']) },
        data() {
          return { typeZhCN: { Execution: '处决', Exile: '流放' } }
        },
        methods: {
          clearVoteHistory() {
            this.$store.commit('session/clearVoteHistory')
          },
          setRecordVoteHistory() {
            this.$store.commit(
              'session/setVoteHistoryAllowed',
              !this.session.isVoteHistoryAllowed
            )
          },
          ...Object(o['c'])(['toggleModal'])
        }
      },
      rt = st,
      nt = (i('aae0'), Object(u['a'])(rt, tt, it, !1, null, '7f42db10', null)),
      ot = nt.exports,
      at = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t
        return e.modals.gameState
          ? i(
              'Modal',
              {
                staticClass: 'game-state',
                on: {
                  close: function (t) {
                    return e.toggleModal('gameState')
                  }
                }
              },
              [
                i('h3', [e._v('当前游戏状态')]),
                i('textarea', {
                  domProps: { value: e.gamestate },
                  on: {
                    input: function (t) {
                      t.stopPropagation(), (e.input = t.target.value)
                    },
                    click: function (e) {
                      return e.target.select()
                    },
                    keyup: function (e) {
                      e.stopPropagation()
                    }
                  }
                }),
                i('div', { staticClass: 'button-group' }, [
                  i(
                    'div',
                    { staticClass: 'button townsfolk', on: { click: e.copy } },
                    [
                      i('font-awesome-icon', { attrs: { icon: 'copy' } }),
                      e._v(' 复制JSON ')
                    ],
                    1
                  ),
                  e.session.isSpectator
                    ? e._e()
                    : i(
                        'div',
                        { staticClass: 'button demon', on: { click: e.load } },
                        [
                          i('font-awesome-icon', { attrs: { icon: 'cog' } }),
                          e._v(' 加载状态 ')
                        ],
                        1
                      )
                ])
              ]
            )
          : e._e()
      },
      mt = [],
      dt = {
        components: { Modal: C },
        computed: {
          gamestate: function () {
            return JSON.stringify({
              bluffs: this.players.bluffs.map(({ id: e }) => e),
              edition: this.edition.isOfficial
                ? { id: this.edition.id }
                : this.edition,
              roles: this.edition.isOfficial
                ? ''
                : this.$store.getters.customRolesStripped,
              fabled: this.players.fabled.map((e) =>
                e.isCustom ? e : { id: e.id }
              ),
              players: this.players.players.map((e) => ({
                ...e,
                role: e.role.id || {}
              }))
            })
          },
          ...Object(o['d'])([
            'modals',
            'players',
            'edition',
            'roles',
            'session'
          ])
        },
        data() {
          return { input: '' }
        },
        methods: {
          copy: function () {
            navigator.clipboard.writeText(this.input || this.gamestate)
          },
          load: function () {
            if (!this.session.isSpectator)
              try {
                const e = JSON.parse(this.input || this.gamestate),
                  { bluffs: t, edition: i, roles: s, fabled: r, players: n } = e
                s && this.$store.commit('setCustomRoles', s),
                  i && this.$store.commit('setEdition', i),
                  t.length &&
                    t.forEach((e, t) => {
                      this.$store.commit('players/setBluff', {
                        index: t,
                        role: this.$store.state.roles.get(e) || {}
                      })
                    }),
                  r &&
                    this.$store.commit('players/setFabled', {
                      fabled: r.map(
                        (e) =>
                          this.$store.state.fabled.get(e) ||
                          this.$store.state.fabled.get(e.id) ||
                          e
                      )
                    }),
                  n &&
                    this.$store.commit(
                      'players/set',
                      n.map((e) => ({
                        ...e,
                        role:
                          this.$store.state.roles.get(e.role) ||
                          this.$store.getters.rolesJSONbyId.get(e.role) ||
                          {}
                      }))
                    ),
                  this.toggleModal('gameState')
              } catch (e) {
                alert('Unable to parse JSON: ' + e)
              }
          },
          ...Object(o['c'])(['toggleModal'])
        }
      },
      lt = dt,
      gt = (i('043f'), Object(u['a'])(lt, at, mt, !1, null, 'b9168f24', null)),
      ht = gt.exports,
      pt = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t
        return e.modals.donate
          ? s(
              'Modal',
              {
                on: {
                  close: function (t) {
                    return e.toggleModal('donate')
                  }
                }
              },
              [
                s('h3', [e._v('捐助:')]),
                s('div', { staticClass: 'donate-container' }, [
                  s(
                    'div',
                    {
                      staticClass: 'donate',
                      staticStyle: { 'margin-right': '2vw' }
                    },
                    [
                      s('img', { attrs: { src: i('9a6e'), alt: '' } }),
                      s('div', [e._v('支付宝')])
                    ]
                  ),
                  s('div', { staticClass: 'donate' }, [
                    s('img', { attrs: { src: i('4265'), alt: '' } }),
                    s('div', [e._v('微信')])
                  ])
                ]),
                s('div', { staticStyle: { 'text-align': 'center' } }, [
                  e._v('收到的款项会用于服务器运维和扩容')
                ])
              ]
            )
          : e._e()
      },
      ct = [],
      ft = {
        components: { Modal: C },
        computed: { ...Object(o['d'])(['modals']) },
        methods: { ...Object(o['c'])(['toggleModal']) }
      },
      ut = ft,
      bt = (i('800f'), Object(u['a'])(ut, pt, ct, !1, null, '34a06e2c', null)),
      Nt = bt.exports,
      _t = {
        components: {
          GameStateModal: ht,
          VoteHistoryModal: ot,
          FabledModal: et,
          NightOrderModal: We,
          Vote: Ee,
          ReferenceModal: Ce,
          Intro: ke,
          TownInfo: Y,
          TownSquare: q,
          Menu: re,
          EditionModal: Ne,
          RolesModal: ge,
          DonateModal: Nt,
          Gradients: Fe
        },
        computed: {
          ...Object(o['d'])(['grimoire', 'session']),
          ...Object(o['d'])('players', ['players'])
        },
        data() {
          return { version: a['a'] }
        },
        methods: {
          keyup({ key: e, ctrlKey: t, metaKey: i }) {
            if (!t && !i)
              switch (e.toLocaleLowerCase()) {
                case 'g':
                  this.$store.commit('toggleGrimoire')
                  break
                case 'a':
                  this.$refs.menu.addPlayer()
                  break
                case 'h':
                  this.$refs.menu.hostSession()
                  break
                case 'j':
                  this.$refs.menu.joinSession()
                  break
                case 'r':
                  this.$store.commit('toggleModal', 'reference')
                  break
                case 'n':
                  this.$store.commit('toggleModal', 'nightOrder')
                  break
                case 'e':
                  if (this.session.isSpectator) return
                  this.$store.commit('toggleModal', 'edition')
                  break
                case 'c':
                  if (this.session.isSpectator) return
                  this.$store.commit('toggleModal', 'roles')
                  break
                case 'v':
                  ;(!this.session.voteHistory.length &&
                    this.session.isSpectator) ||
                    this.$store.commit('toggleModal', 'voteHistory')
                  break
                case 's':
                  if (this.session.isSpectator) return
                  this.$refs.menu.toggleNight()
                  break
                case 'escape':
                  this.$store.commit('toggleModal')
              }
          }
        }
      },
      yt = _t,
      Rt = (i('5c0b'), Object(u['a'])(yt, r, n, !1, null, null, null)),
      vt = Rt.exports,
      wt = i('dfb1'),
      kt = i.n(wt)
    class xt {
      constructor(e) {
        ;(this._wss = 'wss://clocktower.valentichu.xyz:8080/'),
          (this._socket = null),
          (this._isSpectator = !0),
          (this._gamestate = []),
          (this._store = e),
          (this._pingInterval = 3e4),
          (this._pingTimer = null),
          (this._reconnectTimer = null),
          (this._players = {}),
          (this._pings = {}),
          this._store.state.session.sessionId &&
            this.connect(this._store.state.session.sessionId)
      }
      _open(e) {
        this.disconnect(),
          (this._socket = new WebSocket(
            this._wss +
              e +
              '/' +
              (this._isSpectator ? this._store.state.session.playerId : 'host')
          )),
          this._socket.addEventListener(
            'message',
            this._handleMessage.bind(this)
          ),
          (this._socket.onopen = this._onOpen.bind(this)),
          (this._socket.onclose = (t) => {
            ;(this._socket = null),
              clearInterval(this._pingTimer),
              (this._pingTimer = null),
              1e3 !== t.code
                ? (this._store.commit('session/setReconnecting', !0),
                  (this._reconnectTimer = setTimeout(
                    () => this.connect(e),
                    3e3
                  )))
                : (this._store.commit('session/setSessionId', ''),
                  t.reason && alert(t.reason))
          })
      }
      _send(e, t) {
        this._socket &&
          1 === this._socket.readyState &&
          this._socket.send(JSON.stringify([e, t]))
      }
      _sendDirect(e, t, i) {
        e ? this._send('direct', { [e]: [t, i] }) : this._send(t, i)
      }
      _onOpen() {
        this._isSpectator
          ? this._sendDirect(
              'host',
              'getGamestate',
              this._store.state.session.playerId
            )
          : this.sendGamestate(),
          this._ping()
      }
      _ping() {
        this._handlePing(),
          this._send('ping', [
            this._isSpectator
              ? this._store.state.session.playerId
              : Object.keys(this._players).length,
            'latency'
          ]),
          clearTimeout(this._pingTimer),
          (this._pingTimer = setTimeout(
            this._ping.bind(this),
            this._pingInterval
          ))
      }
      _handleMessage({ data: e }) {
        let t, i
        try {
          ;[t, i] = JSON.parse(e)
        } catch (s) {
          console.log('unsupported socket message', e)
        }
        switch (t) {
          case 'getGamestate':
            this.sendGamestate(i)
            break
          case 'edition':
            this._updateEdition(i)
            break
          case 'fabled':
            this._updateFabled(i)
            break
          case 'gs':
            this._updateGamestate(i)
            break
          case 'player':
            this._updatePlayer(i)
            break
          case 'claim':
            this._updateSeat(i)
            break
          case 'ping':
            this._handlePing(i)
            break
          case 'nomination':
            if (!this._isSpectator) return
            i ||
              this._store.commit(
                'session/addHistory',
                this._store.state.players.players
              ),
              this._store.commit('session/nomination', { nomination: i })
            break
          case 'swap':
            if (!this._isSpectator) return
            this._store.commit('players/swap', i)
            break
          case 'move':
            if (!this._isSpectator) return
            this._store.commit('players/move', i)
            break
          case 'remove':
            if (!this._isSpectator) return
            this._store.commit('players/remove', i)
            break
          case 'marked':
            if (!this._isSpectator) return
            this._store.commit('session/setMarkedPlayer', i)
            break
          case 'isNight':
            if (!this._isSpectator) return
            this._store.commit('toggleNight', i)
            break
          case 'isVoteHistoryAllowed':
            if (!this._isSpectator) return
            this._store.commit('session/setVoteHistoryAllowed', i),
              this._store.commit('session/clearVoteHistory')
            break
          case 'votingSpeed':
            if (!this._isSpectator) return
            this._store.commit('session/setVotingSpeed', i)
            break
          case 'clearVoteHistory':
            if (!this._isSpectator) return
            this._store.commit('session/clearVoteHistory')
            break
          case 'isVoteInProgress':
            if (!this._isSpectator) return
            this._store.commit('session/setVoteInProgress', i)
            break
          case 'vote':
            this._handleVote(i)
            break
          case 'lock':
            this._handleLock(i)
            break
          case 'bye':
            this._handleBye(i)
            break
          case 'pronouns':
            this._updatePlayerPronouns(i)
            break
        }
      }
      connect(e) {
        this._store.state.session.playerId ||
          this._store.commit(
            'session/setPlayerId',
            Math.random().toString(36).substr(2)
          ),
          (this._pings = {}),
          this._store.commit('session/setPlayerCount', 0),
          this._store.commit('session/setPing', 0),
          (this._isSpectator = this._store.state.session.isSpectator),
          this._open(e)
      }
      disconnect() {
        ;(this._pings = {}),
          this._store.commit('session/setPlayerCount', 0),
          this._store.commit('session/setPing', 0),
          this._store.commit('session/setReconnecting', !1),
          clearTimeout(this._reconnectTimer),
          this._socket &&
            (this._isSpectator &&
              this._sendDirect(
                'host',
                'bye',
                this._store.state.session.playerId
              ),
            this._socket.close(1e3),
            (this._socket = null))
      }
      sendGamestate(e = '', t = !1) {
        if (!this._isSpectator)
          if (
            ((this._gamestate = this._store.state.players.players.map((e) => ({
              name: e.name,
              id: e.id,
              isDead: e.isDead,
              isVoteless: e.isVoteless,
              pronouns: e.pronouns,
              ...(e.role && 'traveler' === e.role.team
                ? { roleId: e.role.id }
                : {})
            }))),
            t)
          )
            this._sendDirect(e, 'gs', {
              gamestate: this._gamestate,
              isLightweight: t
            })
          else {
            const { session: t, grimoire: i } = this._store.state,
              { fabled: s } = this._store.state.players
            this.sendEdition(e),
              this._sendDirect(e, 'gs', {
                gamestate: this._gamestate,
                isNight: i.isNight,
                isVoteHistoryAllowed: t.isVoteHistoryAllowed,
                nomination: t.nomination,
                votingSpeed: t.votingSpeed,
                lockedVote: t.lockedVote,
                isVoteInProgress: t.isVoteInProgress,
                markedPlayer: t.markedPlayer,
                fabled: s.map((e) => (e.isCustom ? e : { id: e.id })),
                ...(t.nomination ? { votes: t.votes } : {})
              })
          }
      }
      _updateGamestate(e) {
        if (!this._isSpectator) return
        const {
            gamestate: t,
            isLightweight: i,
            isNight: s,
            isVoteHistoryAllowed: r,
            nomination: n,
            votingSpeed: o,
            votes: a,
            lockedVote: m,
            isVoteInProgress: d,
            markedPlayer: l,
            fabled: g
          } = e,
          h = this._store.state.players.players
        if (h.length < t.length)
          for (let p = h.length; p < t.length; p++)
            this._store.commit('players/add', t[p].name)
        else if (h.length > t.length)
          for (let p = h.length; p > t.length; p--)
            this._store.commit('players/remove', p - 1)
        t.forEach((e, t) => {
          const i = h[t],
            { roleId: s } = e
          if (
            (['name', 'id', 'isDead', 'isVoteless', 'pronouns'].forEach((t) => {
              const s = e[t]
              i[t] !== s &&
                this._store.commit('players/update', {
                  player: i,
                  property: t,
                  value: s
                })
            }),
            s && i.role.id !== s)
          ) {
            const e =
              this._store.state.roles.get(s) ||
              this._store.getters.rolesJSONbyId.get(s)
            e &&
              this._store.commit('players/update', {
                player: i,
                property: 'role',
                value: e
              })
          } else
            s ||
              'traveler' !== i.role.team ||
              this._store.commit('players/update', {
                player: i,
                property: 'role',
                value: {}
              })
        }),
          i ||
            (this._store.commit('toggleNight', !!s),
            this._store.commit('session/setVoteHistoryAllowed', r),
            this._store.commit('session/nomination', {
              nomination: n,
              votes: a,
              votingSpeed: o,
              lockedVote: m,
              isVoteInProgress: d
            }),
            this._store.commit('session/setMarkedPlayer', l),
            this._store.commit('players/setFabled', {
              fabled: g.map((e) => this._store.state.fabled.get(e.id) || e)
            }))
      }
      sendEdition(e = '') {
        if (this._isSpectator) return
        const { edition: t } = this._store.state
        let i
        t.isOfficial || (i = this._store.getters.customRolesStripped),
          this._sendDirect(e, 'edition', {
            edition: t.isOfficial ? { id: t.id } : t,
            ...(i ? { roles: i } : {})
          })
      }
      _updateEdition({ edition: e, roles: t }) {
        if (
          this._isSpectator &&
          (this._store.commit('setEdition', e),
          t &&
            (this._store.commit('setCustomRoles', t),
            this._store.state.roles.size !== t.length))
        ) {
          const e = []
          t.forEach(({ id: t }) => {
            this._store.state.roles.get(t) || e.push(t)
          }),
            alert(
              "This session contains custom characters that can't be found. Please load them before joining! Missing roles: " +
                e.join(', ')
            ),
            this.disconnect(),
            this._store.commit('toggleModal', 'edition')
        }
      }
      sendFabled() {
        if (this._isSpectator) return
        const { fabled: e } = this._store.state.players
        this._send(
          'fabled',
          e.map((e) => (e.isCustom ? e : { id: e.id }))
        )
      }
      _updateFabled(e) {
        this._isSpectator &&
          this._store.commit('players/setFabled', {
            fabled: e.map((e) => this._store.state.fabled.get(e.id) || e)
          })
      }
      sendPlayer({ player: e, property: t, value: i }) {
        if (this._isSpectator || 'reminders' === t) return
        const s = this._store.state.players.players.indexOf(e)
        'role' === t
          ? i.team && 'traveler' === i.team
            ? ((this._gamestate[s].roleId = i.id),
              this._send('player', { index: s, property: t, value: i.id }))
            : this._gamestate[s].roleId &&
              (delete this._gamestate[s].roleId,
              this._send('player', { index: s, property: t, value: '' }))
          : this._send('player', { index: s, property: t, value: i })
      }
      _updatePlayer({ index: e, property: t, value: i }) {
        if (!this._isSpectator) return
        const s = this._store.state.players.players[e]
        if (s)
          if ('role' === t)
            if (i || 'traveler' !== s.role.team) {
              const e =
                this._store.state.roles.get(i) ||
                this._store.getters.rolesJSONbyId.get(i) ||
                {}
              this._store.commit('players/update', {
                player: s,
                property: 'role',
                value: e
              })
            } else
              this._store.commit('players/update', {
                player: s,
                property: 'role',
                value: {}
              })
          else
            this._store.commit('players/update', {
              player: s,
              property: t,
              value: i
            })
      }
      sendPlayerPronouns({ player: e, value: t, isFromSockets: i }) {
        if (
          i ||
          (this._isSpectator && this._store.state.session.playerId !== e.id)
        )
          return
        const s = this._store.state.players.players.indexOf(e)
        this._send('pronouns', [s, t])
      }
      _updatePlayerPronouns([e, t]) {
        const i = this._store.state.players.players[e]
        this._store.commit('players/update', {
          player: i,
          property: 'pronouns',
          value: t,
          isFromSockets: !0
        })
      }
      _handlePing([e = 0, t] = []) {
        const i = new Date().getTime()
        if (this._isSpectator)
          t && this._store.commit('session/setPing', parseInt(t, 10))
        else {
          for (let e in this._players)
            i - this._players[e] > 2 * this._pingInterval &&
              (delete this._players[e], delete this._pings[e])
          if (
            (this._store.state.players.players.forEach((e) => {
              e.id &&
                !this._players[e.id] &&
                this._store.commit('players/update', {
                  player: e,
                  property: 'id',
                  value: ''
                })
            }),
            e)
          ) {
            this._players[e] = i
            const s = parseInt(t, 10)
            if (s && s > 0 && s < 3e4) {
              this._pings[e] = s
              const t = Object.values(this._pings)
              this._store.commit(
                'session/setPing',
                Math.round(t.reduce((e, t) => e + t, 0) / t.length)
              )
            }
          }
        }
        ;(this._isSpectator && !e) ||
          this._store.commit(
            'session/setPlayerCount',
            this._isSpectator ? e : Object.keys(this._players).length
          )
      }
      _handleBye(e) {
        this._isSpectator ||
          (delete this._players[e],
          this._store.commit(
            'session/setPlayerCount',
            Object.keys(this._players).length
          ))
      }
      claimSeat(e) {
        if (!this._isSpectator) return
        const t = this._store.state.players.players
        t.length > e &&
          (e < 0 || !t[e].id) &&
          this._send('claim', [e, this._store.state.session.playerId])
      }
      _updateSeat([e, t]) {
        if (this._isSpectator) return
        const i = 'id',
          s = this._store.state.players.players,
          r = s.findIndex(({ id: e }) => e === t)
        if (
          (r >= 0 &&
            r !== e &&
            this._store.commit('players/update', {
              player: s[r],
              property: i,
              value: ''
            }),
          e >= 0)
        ) {
          const r = s[e]
          if (!r) return
          this._store.commit('players/update', {
            player: r,
            property: i,
            value: t
          })
        }
        this._handlePing([!0, t, 0])
      }
      distributeRoles() {
        if (this._isSpectator) return
        const e = {}
        this._store.state.players.players.forEach((t, i) => {
          t.id &&
            t.role &&
            (e[t.id] = [
              'player',
              { index: i, property: 'role', value: t.role.id }
            ])
        }),
          Object.keys(e).length && this._send('direct', e)
      }
      nomination(e) {
        if (this._isSpectator) return
        const t = (e && e.nomination) || e,
          i = this._store.state.players.players
        ;(!t || (i.length > t[0] && i.length > t[1])) &&
          (this.setVotingSpeed(this._store.state.session.votingSpeed),
          this._send('nomination', t))
      }
      setVoteInProgress() {
        this._isSpectator ||
          this._send(
            'isVoteInProgress',
            this._store.state.session.isVoteInProgress
          )
      }
      setIsNight() {
        this._isSpectator ||
          this._send('isNight', this._store.state.grimoire.isNight)
      }
      setVoteHistoryAllowed() {
        this._isSpectator ||
          this._send(
            'isVoteHistoryAllowed',
            this._store.state.session.isVoteHistoryAllowed
          )
      }
      setVotingSpeed(e) {
        this._isSpectator || (e && this._send('votingSpeed', e))
      }
      setMarked(e) {
        this._isSpectator || this._send('marked', e)
      }
      clearVoteHistory() {
        this._isSpectator || this._send('clearVoteHistory')
      }
      vote([e]) {
        const t = this._store.state.players.players[e]
        ;(this._store.state.session.playerId !== t.id && this._isSpectator) ||
          this._send('vote', [
            e,
            this._store.state.session.votes[e],
            !this._isSpectator
          ])
      }
      _handleVote([e, t, i]) {
        const { session: s, players: r } = this._store.state,
          n = r.players.length,
          o = (e - 1 + n - s.nomination[1]) % n
        ;(i || o >= s.lockedVote - 1) &&
          this._store.commit('session/vote', [e, t])
      }
      lockVote() {
        if (this._isSpectator) return
        const {
            lockedVote: e,
            votes: t,
            nomination: i
          } = this._store.state.session,
          { players: s } = this._store.state.players,
          r = (i[1] + e - 1) % s.length
        this._send('lock', [this._store.state.session.lockedVote, t[r]])
      }
      _handleLock([e, t]) {
        if (
          this._isSpectator &&
          (this._store.commit('session/lockVote', e), e > 1)
        ) {
          const { lockedVote: e, nomination: i } = this._store.state.session,
            { players: s } = this._store.state.players,
            r = (i[1] + e - 1) % s.length
          this._store.state.session.votes[r] !== t &&
            this._store.commit('session/vote', [r, t])
        }
      }
      swapPlayer(e) {
        this._isSpectator || this._send('swap', e)
      }
      movePlayer(e) {
        this._isSpectator || this._send('move', e)
      }
      removePlayer(e) {
        this._isSpectator || this._send('remove', e)
      }
    }
    var St = (e) => {
      const t = new xt(e)
      e.subscribe(({ type: e, payload: i }, s) => {
        switch (e) {
          case 'session/setSessionId':
            s.session.sessionId
              ? t.connect(s.session.sessionId)
              : ((window.location.hash = ''), t.disconnect())
            break
          case 'session/claimSeat':
            t.claimSeat(i)
            break
          case 'session/distributeRoles':
            i && t.distributeRoles()
            break
          case 'session/nomination':
          case 'session/setNomination':
            t.nomination(i)
            break
          case 'session/setVoteInProgress':
            t.setVoteInProgress(i)
            break
          case 'session/voteSync':
            t.vote(i)
            break
          case 'session/lockVote':
            t.lockVote()
            break
          case 'session/setVotingSpeed':
            t.setVotingSpeed(i)
            break
          case 'session/clearVoteHistory':
            t.clearVoteHistory()
            break
          case 'session/setVoteHistoryAllowed':
            t.setVoteHistoryAllowed()
            break
          case 'toggleNight':
            t.setIsNight()
            break
          case 'setEdition':
            t.sendEdition()
            break
          case 'players/setFabled':
            t.sendFabled()
            break
          case 'session/setMarkedPlayer':
            t.setMarked(i)
            break
          case 'players/swap':
            t.swapPlayer(i)
            break
          case 'players/move':
            t.movePlayer(i)
            break
          case 'players/remove':
            t.removePlayer(i)
            break
          case 'players/set':
          case 'players/clear':
          case 'players/add':
            t.sendGamestate('', !0)
            break
          case 'players/update':
            'pronouns' === i.property
              ? t.sendPlayerPronouns(i)
              : t.sendPlayer(i)
            break
        }
      })
      const i = window.location.hash.substr(1)
      i &&
        (e.commit('session/setSpectator', !0),
        e.commit('session/setSessionId', i),
        e.commit('toggleGrimoire', !1))
    }
    const Ot = {
        name: '',
        id: '',
        role: {},
        reminders: [],
        isVoteless: !1,
        isDead: !1,
        pronouns: ''
      },
      Mt = () => ({ players: [], fabled: [], bluffs: [] }),
      It = {
        alive({ players: e }) {
          return e.filter((e) => !e.isDead).length
        },
        nonTravelers({ players: e }) {
          const t = e.filter((e) => 'traveler' !== e.role.team)
          return Math.min(t.length, 15)
        },
        nightOrder({ players: e, fabled: t }) {
          const i = [0],
            s = [0]
          e.forEach(({ role: e }) => {
            e.firstNight && !i.includes(e.firstNight) && i.push(e.firstNight),
              e.otherNight && !s.includes(e.otherNight) && s.push(e.otherNight)
          }),
            t.forEach((e) => {
              e.firstNight && !i.includes(e.firstNight) && i.push(e.firstNight),
                e.otherNight &&
                  !s.includes(e.otherNight) &&
                  s.push(e.otherNight)
            }),
            i.sort((e, t) => e - t),
            s.sort((e, t) => e - t)
          const r = new Map()
          return (
            e.forEach((e) => {
              const t = Math.max(i.indexOf(e.role.firstNight), 0),
                n = Math.max(s.indexOf(e.role.otherNight), 0)
              r.set(e, { first: t, other: n })
            }),
            t.forEach((e) => {
              const t = Math.max(i.indexOf(e.firstNight), 0),
                n = Math.max(s.indexOf(e.otherNight), 0)
              r.set(e, { first: t, other: n })
            }),
            r
          )
        }
      },
      Ct = {
        randomize({ state: e, commit: t }) {
          const i = e.players
            .map((e) => [Math.random(), e])
            .sort((e, t) => e[0] - t[0])
            .map((e) => e[1])
          t('set', i)
        },
        clearRoles({ state: e, commit: t, rootState: i }) {
          let s
          i.session.isSpectator
            ? (s = e.players.map(
                (e) => (
                  'traveler' !== e.role.team && (e.role = {}),
                  (e.reminders = []),
                  e
                )
              ))
            : ((s = e.players.map(({ name: e, id: t, pronouns: i }) => ({
                ...Ot,
                name: e,
                id: t,
                pronouns: i
              }))),
              t('setFabled', { fabled: [] })),
            t('set', s),
            t('setBluff')
        }
      },
      Pt = {
        clear(e) {
          ;(e.players = []), (e.bluffs = []), (e.fabled = [])
        },
        set(e, t = []) {
          e.players = t
        },
        update(e, { player: t, property: i, value: s }) {
          const r = e.players.indexOf(t)
          r >= 0 && (e.players[r][i] = s)
        },
        add(e, t) {
          e.players.push({ ...Ot, name: t })
        },
        remove(e, t) {
          e.players.splice(t, 1)
        },
        swap(e, [t, i]) {
          ;([e.players[t], e.players[i]] = [e.players[i], e.players[t]]),
            e.players.splice(0, 0)
        },
        move(e, [t, i]) {
          e.players.splice(i, 0, e.players.splice(t, 1)[0])
        },
        setBluff(e, { index: t, role: i } = {}) {
          void 0 !== t ? e.bluffs.splice(t, 1, i) : (e.bluffs = [])
        },
        setFabled(e, { index: t, fabled: i } = {}) {
          void 0 !== t
            ? e.fabled.splice(t, 1)
            : i && (Array.isArray(i) ? (e.fabled = i) : e.fabled.push(i))
        }
      }
    var jt = {
      namespaced: !0,
      state: Mt,
      getters: It,
      actions: Ct,
      mutations: Pt
    }
    const Vt = (e, [t, i]) => {
        e.nomination &&
          ((e.votes = [...e.votes]),
          (e.votes[t] = void 0 === i ? !e.votes[t] : i))
      },
      $t = () => ({
        sessionId: '',
        isSpectator: !1,
        isReconnecting: !1,
        playerCount: 0,
        ping: 0,
        playerId: '',
        claimedSeat: -1,
        nomination: !1,
        votes: [],
        lockedVote: 0,
        votingSpeed: 3e3,
        isVoteInProgress: !1,
        voteHistory: [],
        markedPlayer: -1,
        isVoteHistoryAllowed: !0,
        isRolesDistributed: !1
      }),
      Tt = {},
      Et = {},
      Ht = (e) => (t, i) => {
        t[e] = i
      },
      zt = {
        setPlayerId: Ht('playerId'),
        setSpectator: Ht('isSpectator'),
        setReconnecting: Ht('isReconnecting'),
        setPlayerCount: Ht('playerCount'),
        setPing: Ht('ping'),
        setVotingSpeed: Ht('votingSpeed'),
        setVoteInProgress: Ht('isVoteInProgress'),
        setMarkedPlayer: Ht('markedPlayer'),
        setNomination: Ht('nomination'),
        setVoteHistoryAllowed: Ht('isVoteHistoryAllowed'),
        claimSeat: Ht('claimedSeat'),
        distributeRoles: Ht('isRolesDistributed'),
        setSessionId(e, t) {
          e.sessionId = t
            .toLocaleLowerCase()
            .replace(/[^0-9a-z]/g, '')
            .substr(0, 10)
        },
        nomination(
          e,
          {
            nomination: t,
            votes: i,
            votingSpeed: s,
            lockedVote: r,
            isVoteInProgress: n
          } = {}
        ) {
          ;(e.nomination = t || !1),
            (e.votes = i || []),
            (e.votingSpeed = s || e.votingSpeed),
            (e.lockedVote = r || 0),
            (e.isVoteInProgress = n || !1)
        },
        addHistory(e, t) {
          if (!e.isVoteHistoryAllowed && e.isSpectator) return
          if (!e.nomination || e.lockedVote <= t.length) return
          const i = 'traveler' === t[e.nomination[1]].role.team
          e.voteHistory.push({
            timestamp: new Date(),
            nominator: t[e.nomination[0]].name,
            nominee: t[e.nomination[1]].name,
            type: i ? 'Exile' : 'Execution',
            majority: Math.ceil(t.filter((e) => !e.isDead || i).length / 2),
            votes: t.filter((t, i) => e.votes[i]).map(({ name: e }) => e)
          })
        },
        clearVoteHistory(e) {
          e.voteHistory = []
        },
        vote: Vt,
        voteSync: Vt,
        lockVote(e, t) {
          e.lockedVote = void 0 !== t ? t : e.lockedVote + 1
        }
      }
    var Gt = {
        namespaced: !0,
        state: $t,
        getters: Tt,
        actions: Et,
        mutations: zt
      },
      At = i('b1d9'),
      Dt = i('bdc5'),
      Ft = i('b249'),
      Jt = i('c825')
    s['a'].use(o['a'])
    const Bt = (e = ce[0]) =>
        new Map(
          At.filter((t) => t.edition === e.id || e.roles.includes(t.id))
            .sort((e, t) => t.team.localeCompare(e.team))
            .map((e) => [e.id, e])
        ),
      qt = (e = ce[0]) => Dt.filter((t) => t.edition === e.id),
      Lt = (e = ce[0]) =>
        new Map(
          At.filter(
            (t) =>
              'traveler' === t.team &&
              t.edition !== e.id &&
              !e.roles.includes(t.id)
          ).map((e) => [e.id, e])
        ),
      Ut =
        (e) =>
        ({ grimoire: t }, i) => {
          t[e] = i
        },
      Wt =
        (e) =>
        ({ grimoire: t }, i) => {
          t[e] = !0 === i || !1 === i ? i : !t[e]
        },
      Zt = (e) => e.toLocaleLowerCase().replace(/[^a-z0-9]/g, ''),
      Kt = new Map(ce.map((e) => [e.id, e])),
      Qt = new Map(At.map((e) => [e.id, e])),
      Yt = new Map(Ft.map((e) => [e.id, e]))
    let Xt = {}
    try {
      Xt = new Map(
        Jt.map(({ id: e, hatred: t }) => [
          Zt(e),
          new Map(t.map(({ id: e, reason: t }) => [Zt(e), t]))
        ])
      )
    } catch (mi) {
      console.error("couldn't load jinxes", mi)
    }
    const ei = {
      id: '',
      name: '',
      image: '',
      ability: '',
      edition: 'custom',
      firstNight: 0,
      firstNightReminder: '',
      otherNight: 0,
      otherNightReminder: '',
      reminders: [],
      remindersGlobal: [],
      setup: !1,
      team: 'townsfolk',
      isCustom: !0
    }
    var ti = new o['a'].Store({
        modules: { players: jt, session: Gt },
        state: {
          grimoire: {
            isNight: !1,
            isNightOrder: !0,
            isPublic: !0,
            isMenuOpen: !1,
            isStatic: !1,
            isMuted: !1,
            isImageOptIn: !1,
            zoom: 0,
            background: ''
          },
          modals: {
            edition: !1,
            fabled: !1,
            gameState: !1,
            nightOrder: !1,
            reference: !1,
            reminder: !1,
            role: !1,
            roles: !1,
            voteHistory: !1,
            donate: !1
          },
          edition: Kt.get('tb'),
          roles: Bt(),
          states: qt(),
          otherTravelers: Lt(),
          fabled: Yt,
          jinxes: Xt
        },
        getters: {
          customRolesStripped: ({ roles: e }) => {
            const t = [],
              i = Object.keys(ei),
              s = ['firstNightReminder', 'otherNightReminder', 'isCustom']
            return (
              e.forEach((e) => {
                if (e.isCustom) {
                  const r = {}
                  for (let t in e) {
                    if (s.includes(t)) continue
                    const n = e[t]
                    i.includes(t) && n !== ei[t] && (r[i.indexOf(t)] = n)
                  }
                  t.push(r)
                } else t.push({ id: e.id })
              }),
              t
            )
          },
          rolesJSONbyId: () => Qt
        },
        mutations: {
          setZoom: Ut('zoom'),
          setBackground: Ut('background'),
          toggleMuted: Wt('isMuted'),
          toggleMenu: Wt('isMenuOpen'),
          toggleNightOrder: Wt('isNightOrder'),
          toggleStatic: Wt('isStatic'),
          toggleNight: Wt('isNight'),
          toggleGrimoire: Wt('isPublic'),
          toggleImageOptIn: Wt('isImageOptIn'),
          toggleModal({ modals: e }, t) {
            t && (e[t] = !e[t])
            for (let i in e) i !== t && (e[i] = !1)
          },
          setCustomRoles(e, t) {
            const i = t
              .map((e) => {
                if (e[0]) {
                  const t = Object.keys(ei),
                    i = {}
                  for (let s in e) t[s] && (i[t[s]] = e[s])
                  return i
                }
                return e
              })
              .map((e) => ((e.id = Zt(e.id)), e))
              .map(
                (t) =>
                  Qt.get(t.id) || e.roles.get(t.id) || Object.assign({}, ei, t)
              )
              .map(
                (e) => (
                  Qt.get(e.id) ||
                    ((e.imageAlt =
                      {
                        townsfolk: 'good',
                        outsider: 'outsider',
                        minion: 'minion',
                        demon: 'evil',
                        fabled: 'fabled'
                      }[e.team] || 'custom'),
                    (e.firstNight = Math.abs(e.firstNight)),
                    (e.otherNight = Math.abs(e.otherNight))),
                  e
                )
              )
              .filter((e) => e.name && e.ability && e.team)
              .sort((e, t) => t.team.localeCompare(e.team))
            ;(e.roles = new Map(
              i.filter((e) => 'fabled' !== e.team).map((e) => [e.id, e])
            )),
              (e.fabled = new Map([
                ...i.filter((e) => 'fabled' === e.team).map((e) => [e.id, e]),
                ...Ft.map((e) => [e.id, e])
              ])),
              (e.otherTravelers = new Map(
                At.filter(
                  (e) => 'traveler' === e.team && !t.some((t) => t.id === e.id)
                ).map((e) => [e.id, e])
              ))
          },
          setEdition(e, t) {
            Kt.has(t.id)
              ? ((e.edition = Kt.get(t.id)),
                (e.roles = Bt(e.edition)),
                (e.states = qt(e.edition)),
                (e.otherTravelers = Lt(e.edition)))
              : (e.edition = t),
              (e.modals.edition = !1)
          }
        },
        plugins: [kt.a, St]
      }),
      ii = i('ecee'),
      si = i('c074'),
      ri = i('f2d1'),
      ni = i('ad3d')
    const oi = [
        'AddressCard',
        'BookOpen',
        'BookDead',
        'BroadcastTower',
        'Chair',
        'CheckSquare',
        'CloudMoon',
        'Cog',
        'Copy',
        'Dice',
        'Dragon',
        'ExchangeAlt',
        'ExclamationTriangle',
        'FileCode',
        'FileUpload',
        'HandPaper',
        'HandPointRight',
        'Heartbeat',
        'Image',
        'Link',
        'MinusCircle',
        'PeopleArrows',
        'PlusCircle',
        'Question',
        'Random',
        'RedoAlt',
        'SearchMinus',
        'SearchPlus',
        'Skull',
        'Square',
        'TheaterMasks',
        'Times',
        'TimesCircle',
        'TrashAlt',
        'Undo',
        'User',
        'UserEdit',
        'UserFriends',
        'Users',
        'VenusMars',
        'VolumeUp',
        'VolumeMute',
        'VoteYea',
        'WindowMaximize',
        'WindowMinimize'
      ],
      ai = ['Github', 'Discord', 'Alipay']
    ii['c'].add(
      ...oi.map((e) => si['a']['fa' + e]),
      ...ai.map((e) => ri['a']['fa' + e])
    ),
      s['a'].component('font-awesome-icon', ni['a']),
      (s['a'].config.productionTip = !1),
      new s['a']({ render: (e) => e(vt), store: ti }).$mount('#app')
  },
  '56fb': function (e, t, i) {},
  5720: function (e, t, i) {
    'use strict'
    i('50d1')
  },
  5740: function (e, t, i) {
    e.exports = i.p + 'img/riot.a2890eee.png'
  },
  '57b7': function (e, t, i) {
    e.exports = i.p + 'img/ritualist_wm.d43585fe.png'
  },
  5891: function (e, t, i) {
    e.exports = i.p + 'img/page_mm.be4094af.png'
  },
  5966: function (e, t, i) {
    e.exports = i.p + 'img/sorcerer_wm.a63780d3.png'
  },
  '5b44': function (e, t, i) {
    e.exports = i.p + 'img/fabled.227b24f9.png'
  },
  '5bd9': function (e, t, i) {
    e.exports = i.p + 'img/cannibal.54808c1a.png'
  },
  '5c0b': function (e, t, i) {
    'use strict'
    i('9c0c')
  },
  '5c56': function (e, t, i) {
    e.exports = i.p + 'img/duchess.f8361787.png'
  },
  '5c85': function (e, t, i) {
    e.exports = i.p + 'img/conspirator_sr.933b9ccf.png'
  },
  '5c8e': function (e, t, i) {
    e.exports = i.p + 'img/goblin.ec4fe0e0.png'
  },
  '5cf2': function (e, t, i) {
    e.exports = i.p + 'img/x.d2209023.png'
  },
  '5d2d': function (e, t, i) {
    e.exports = i.p + 'img/scribe_wm.a7d65a5f.png'
  },
  '5d6f': function (e, t, i) {
    e.exports = i.p + 'img/prince_sr.4deb86cf.png'
  },
  '5ddb': function (e, t, i) {
    e.exports = i.p + 'img/replicant_sos.025e8486.png'
  },
  '5e44': function (e, t, i) {
    e.exports = i.p + 'img/stargazer_iob.ec941842.png'
  },
  '5ec1': function (e, t, i) {
    e.exports = i.p + 'img/partymagician_wm.ae0113cc.png'
  },
  '5f05': function (e, t, i) {
    e.exports = i.p + 'img/thug_bge.1a7e3116.png'
  },
  '5f4e': function (e, t, i) {
    e.exports = i.p + 'img/tb-minion.b01c557e.png'
  },
  '61b0': function (e, t, i) {
    var s = {
      './acrobat.png': '887b',
      './alchemist.png': 'dbe8',
      './alhadikhia.png': '9989',
      './amnesiac.png': '043b',
      './analyst_aoi.png': '67b9',
      './analyst_sos.png': 'a623',
      './anarchist_ti.png': '313e',
      './angel.png': 'bfe2',
      './apprentice.png': '4bea',
      './apprentice_wm.png': 'd212',
      './architect_aoi.png': '131d',
      './architect_bge.png': '3f8a',
      './archivist_aoi.png': '21c2',
      './archmage_wm.png': '0ff9',
      './armorer_sos.png': 'de53',
      './arsonist_bim.png': '37ff',
      './artist.png': '2cd0',
      './assassin.png': '9187',
      './assistant_aoi.png': '30c0',
      './assistant_sos.png': '2890',
      './astrologer_aoi.png': 'b977',
      './atheist.png': 'ca7a',
      './auspex_bge.png': 'dce6',
      './avatar_aoi.png': 'e3b5',
      './backlash_wm.png': 'b278',
      './balloonist.png': '65db',
      './barber.png': 'fcc6',
      './bard_mm.png': '795e',
      './bard_wm.png': 'cb09',
      './barista.png': '027a',
      './baron.png': '24d3',
      './bartender_bim.png': '95b9',
      './beastmaster_iob.png': '3176',
      './befuddled_aoi.png': '7b6a',
      './beggar.png': 'cfcc',
      './bishop.png': '8030',
      './blackmailer_bim.png': '06d6',
      './blasphemer_iob.png': 'fe21',
      './bloodletter_iob.png': '6227',
      './bloodmage_wm.png': 'fef4',
      './bogman_iob.png': '0f72',
      './boilermaker_bim.png': 'e301',
      './bonecollector.png': '23b1',
      './bontyhunter_sos.png': 'e724',
      './bookbinder_aoi.png': '6298',
      './boomdandy.png': 'aae9',
      './bootblack_lse.png': '5386',
      './botanist_sos.png': 'e0db',
      './bouncer_bim.png': 'e6ca',
      './bountyhunter.png': '899d',
      './brainleech_sos.png': '81fb',
      './brainwashed_sos.png': 'd051',
      './broker_lse.png': '303d',
      './buddhist.png': '1d01',
      './bureaucrat.png': '25f6',
      './buried_aoi.png': '3670',
      './butcher.png': '37dd',
      './butler.png': '64fe',
      './cannibal.png': '5bd9',
      './captain_sos.png': 'c283',
      './cardina_sr.png': '0c5b',
      './cassanova_bim.png': '30b0',
      './cerenovus.png': '0436',
      './chamberlain_sr.png': '31fa',
      './chambermaid.png': '125e',
      './chaosmage_wm.png': 'd595',
      './charlatan_sr.png': '6b7b',
      './chauffeur_lse.png': '99f7',
      './chef.png': '1e83',
      './chieftain_iob.png': '281d',
      './choirboy.png': 'd6bc',
      './chosenone_mm.png': 'e475',
      './cinematographer_aoi.png': '1144',
      './civilian_sos.png': '3e18',
      './clairvoyant_ti.png': 'f821',
      './clairvoyant_wm.png': '3edd',
      './cleaner_bim.png': 'feb5',
      './cleric_wm.png': '6863',
      './clockmaker.png': 'f93f',
      './clone_bge.png': '8331',
      './commander_sos.png': '706b',
      './concubine_sr.png': '93f5',
      './conservator_aoi.png': '84c1',
      './conspiracy_ti.png': 'ed35',
      './conspirator_sr.png': '5c85',
      './contessa_bge.png': 'c234',
      './copycat_ti.png': 'bddc',
      './corpseobsessed_ti.png': '3213',
      './corruptor_aoi.png': '287e',
      './courtier.png': 'ee02',
      './crawler_sos.png': '34fa',
      './crescendo_lse.png': '3a74',
      './cryomancer_wm.png': '7e93',
      './cultleader.png': '398f',
      './cupbearer_sr.png': 'e1a4',
      './curator_aoi.png': '3b0c',
      './curator_lse.png': '7d1e',
      './cursed_mm.png': '78ab',
      './custom.png': 'fd83',
      './cyclox_bge.png': '94f0',
      './damsel.png': '72d7',
      './darkpassenger_bge.png': '5624',
      './deathgripp_lse.png': 'ccca',
      './demagogue_bge.png': 'a313',
      './detective_aoi.png': '5085',
      './detective_bim.png': '7cbf',
      './deusexfiasco.png': '9002',
      './deviant.png': '3b65',
      './devilsadvocate.png': 'cd8b',
      './djinn.png': 'e222',
      './doctor_sos.png': '2216',
      './doomsayer.png': '659f',
      './doomsdaypreacher_ti.png': 'a566',
      './doopliss_iob.png': 'e15d',
      './doppelganger_ti.png': '04d0',
      './doubleagent_bge.png': 'd881',
      './draco_sr.png': '037e',
      './draconis_wm.png': 'dd5c',
      './dreamer.png': '71b8',
      './druid_wm.png': 'a45c',
      './drunk.png': 'd97d',
      './duchess.png': '5c56',
      './eclipse_iob.png': '745c',
      './effigy_iob.png': '8bf7',
      './emissary_sr.png': '8953',
      './empath.png': 'bb7a',
      './enchanter_wm.png': 'ef02',
      './engineer.png': 'ea17',
      './engineer_sos.png': '6af1',
      './enrage_ti.png': '9f0e',
      './entropist_wm.png': '0e50',
      './evil.png': 'c24f',
      './eviltwin.png': 'e014',
      './executioner_bim.png': 'a5ee',
      './exorcist.png': '5072',
      './eye_aoi.png': '1e08',
      './fabled.png': '5b44',
      './fanggu.png': '6ac0',
      './farmer.png': '7a7f',
      './fearmonger.png': 'd69f',
      './fibbin.png': '6eb1',
      './fiddler.png': '64be',
      './fisherman.png': 'c5db',
      './flowergirl.png': '66ae',
      './foodtaster_sr.png': '49c0',
      './fool.png': '4720',
      './forager_iob.png': 'bdd9',
      './fortuneteller.png': '43e8',
      './framer_bim.png': '4f74',
      './friar_sr.png': '435e',
      './fugitive_bge.png': 'a1fe',
      './gambler.png': 'dce6c',
      './gangster.png': '97c6',
      './gardener_bge.png': '824a',
      './gaslighter_ti.png': 'ef01',
      './general.png': 'ac9c',
      './geomancer_wm.png': 'c252',
      './ghosthunter_aoi.png': '1ada',
      './goblin.png': '5c8e',
      './godfather.png': '99d0',
      './golem.png': '4eb3',
      './good.png': '667e',
      './goon.png': '55aa',
      './gorgon_lse.png': '6f7e',
      './gossip.png': 'cadc',
      './governor_bim.png': 'd466',
      './grandmother.png': 'c9f5',
      './gravedigger_bge.png': 'dced',
      './grist_lse.png': '9921',
      './gunslinger.png': 'ee92',
      './guru_bge.png': '78f7',
      './hanabi_bge.png': '850e',
      './harlot.png': '559e',
      './haunt_mm.png': '5426',
      './headnurse_ti.png': '0a98',
      './heir_mm.png': '88db',
      './hel8000_sos.png': 'a819',
      './hellslibrarian.png': 'a367',
      './herald_sr.png': '94c7',
      './heretic.png': '5626',
      './hex_bge.png': '77ff',
      './highroller_bge.png': 'aafb',
      './hitman_bge.png': '9f8b',
      './huntsman.png': '1923',
      './idolkeeper_mm.png': '6d98',
      './illusionist_wm.png': 'be22',
      './imp.png': '3e70',
      './infected_sos.png': 'f2c2',
      './infernal_wm.png': 'e9cf',
      './infernomancer_wm.png': '6b9f',
      './infiltrator_mm.png': '7c29',
      './infirm_sos.png': '9521',
      './innkeeper.png': '663c',
      './inquisitor_lse.png': 'd8d1',
      './interrogator_ti.png': 'ac41',
      './investigator.png': 'b570',
      './jabberwocky_sr.png': '9132',
      './jailor_bim.png': 'd1eb',
      './joker_ti.png': 'ebf0',
      './judge.png': 'f09b',
      './juggler.png': '65ab',
      './keresa_bim.png': '80a4',
      './kilo_iob.png': '7947',
      './king.png': '9639',
      './klutz.png': 'adfc',
      './knight_sr.png': '41ba',
      './lamplighter_lse.png': '339d',
      './landlord_bge.png': 'a130',
      './legion.png': 'da81',
      './leviathan.png': '2b04',
      './liar_ti.png': 'a07d',
      './librarian.png': '4d73',
      './lieutenant_bim.png': '93ec',
      './lilmonsta.png': 'c492',
      './lleech.png': '9f74',
      './lunatic.png': '0b61',
      './lycanthrope.png': 'c316',
      './machinist_bge.png': 'bdbb',
      './mage_mm.png': '76df',
      './magician.png': 'ab3c',
      './majesty_sr.png': '8ebb',
      './maniac_ti.png': '00ce',
      './marionette.png': 'e69f',
      './marshall_bim.png': '7330',
      './mastermind.png': 'f834',
      './matchmaker_lse.png': '363c',
      './mathematician.png': '8888',
      './matron.png': 'b1cb',
      './mayor.png': 'b223',
      './medicineman_iob.png': 'f3b5',
      './mephit.png': 'df5e',
      './merchant_sos.png': '7f5d',
      './mezepheles.png': 'c7b7',
      './minion.png': '75bc',
      './minstrel.png': '4efd',
      './mobster_bge.png': 'a504',
      './monark_mm.png': '9be4',
      './monk.png': '6741',
      './moonchild.png': '3f65',
      './morgana_sr.png': '3b77',
      './muse_mm.png': 'a575',
      './mutant.png': '17ad',
      './necromancer_wm.png': 'eeb2',
      './nightcrawler_mm.png': '4898',
      './nightwatchman.png': '3cd8',
      './nihilist_ti.png': '966e',
      './noble.png': 'f7d3',
      './nodashii.png': '68a4',
      './numerologist_aoi.png': 'cba1',
      './nurse_sos.png': 'df71',
      './obsessed_aoi.png': '1fdc',
      './octovore_bge.png': '88e9',
      './officer_sos.png': '873c',
      './omen_lse.png': 'cb2e',
      './oneirocritic_aoi.png': '9fa7',
      './oracle.png': '0c12',
      './outsider.png': '2490',
      './pacifist.png': 'fff1',
      './page_mm.png': '5891',
      './paladin_wm.png': '2e3d',
      './pariah_bim.png': 'edae',
      './pariah_lse.png': '0a58',
      './partymagician_wm.png': '5ec1',
      './pawn_sr.png': '87fd',
      './pessimist_lse.png': 'd61f',
      './philosopher.png': '3603',
      './pillhorder_ti.png': 'e333',
      './piper_mm.png': 'c0aa',
      './pithag.png': '7f07',
      './pixie.png': 'a7b6',
      './plus.png': '160b',
      './po.png': 'c73a',
      './poacher_iob.png': '162b',
      './podcaster_aoi.png': '130e',
      './poisoner.png': 'f282',
      './politician.png': '07ab',
      './poppetmaker_mm.png': '6327',
      './poppygrower.png': '3273',
      './postmaster_lse.png': 'a2d0',
      './preacher.png': '2094',
      './pretender_sr.png': '16b8',
      './prince_mm.png': '6c59',
      './prince_sr.png': '5d6f',
      './princess_sr.png': '94fb',
      './probe_sos.png': 'a472',
      './professor.png': 'b30c',
      './psychologist_aoi.png': 'd5e5',
      './psychologist_ti.png': '4a2c',
      './psychopath.png': 'fcdb',
      './publicdefender_bge.png': '0a83',
      './pukka.png': 'a6a2',
      './puzzlemaster.png': '27a3',
      './pyro_mm.png': 'f6d1',
      './pyromancer_wm.png': '17ad4',
      './quartermaster_sos.png': '6ced',
      './queen_sr.png': '4019',
      './rabblerouser_lse.png': '3e03',
      './rambler_ti.png': 'f4a4',
      './ranger_iob.png': '7e23',
      './ravenkeeper.png': '0c59',
      './receptionist_aoi.png': 'afd1',
      './recluse.png': '177d',
      './redshirt_sos.png': '877c',
      './refugee_sos.png': '370b',
      './replicant_sos.png': '5ddb',
      './researcher_aoi.png': 'ff17',
      './researcher_sos.png': '183f',
      './retrogradus_iob.png': '7d4e',
      './revenant_bge.png': '9ea8',
      './revolutionary.png': 'aa2d',
      './righthandman_iob.png': '26a5',
      './riot.png': '5740',
      './ritualist_aoi.png': 'dd60',
      './ritualist_wm.png': '57b7',
      './rogue_mm.png': '13b7',
      './rook_sr.png': '496f',
      './sacrifice_aoi.png': 'd912',
      './sage.png': '30b6',
      './sailor.png': '223c',
      './saint.png': '6936',
      './savant.png': 'd715',
      './scapegoat.png': '327a',
      './scaredycat_ti.png': '16d6',
      './scarletwoman.png': 'f322',
      './scemer_ti.png': 'cd9e',
      './scholar_aoi.png': 'c514',
      './scoundrel_sr.png': '560e',
      './scribe_sr.png': '942f',
      './scribe_wm.png': '5d2d',
      './seamstress.png': 'ac7c',
      './secondhand_iob.png': '0ad2',
      './securitychief_sos.png': '8c9e',
      './securityguard_ti.png': 'c559',
      './seer_mm.png': '12f6',
      './sentinel.png': 'af68',
      './servant_mm.png': '8c61',
      './shabaloth.png': '0b29',
      './shoulderangel_ti.png': '81e9',
      './shoulderdevil_ti.png': '9ec4',
      './skeptic_wm.png': '1a76',
      './slayer.png': 'd62b',
      './sleeper_bim.png': 'fc48',
      './smuggler_lse.png': '50f6',
      './snakebite_lse.png': 'ae6b',
      './snakecharmer.png': '4021',
      './snitch.png': 'b7e8',
      './sociopath_ti.png': '61e7',
      './soldier.png': '4e76',
      './soothsayer_iob.png': 'fbe6',
      './sorcerer_wm.png': '5966',
      './spacepirate_sos.png': '80d2',
      './specimen006_sos.png': '3651',
      './specter_bge.png': '94d7',
      './spell_wm.png': 'ef97',
      './spira_aoi.png': 'c97a',
      './spiritofivory.png': '0d06',
      './spree_lse.png': 'cc59',
      './spy.png': 'ec1e',
      './squire_mm.png': '1489',
      './stalker_iob.png': 'caff',
      './starcrossed_iob.png': 'ee00',
      './stargazer_iob.png': '5e44',
      './stormcatcher.png': 'a4c2',
      './student_bim.png': '16b9',
      './summoner_mm.png': 'f6a84',
      './summoner_wm.png': 'f674',
      './sweetheart.png': 'f1e5',
      './sylph_mm.png': '26fc',
      './tarantella_lse.png': '422e',
      './tattletale_lse.png': '0985',
      './tealady.png': 'ba9b',
      './testsubject_sos.png': '51ea',
      './thaumaturge_wm.png': '8ea9',
      './theshroudedvoid_wm.png': '6fb0',
      './thespian_lse.png': '0eae',
      './thief.png': '9ce3',
      './thief_mm.png': '55c1',
      './thug_bge.png': '5f05',
      './tinker.png': '9f7e',
      './tombspitter_bge.png': 'f2c3',
      './towncrier.png': '38a5',
      './toymaker.png': '39eb',
      './traitor_sos.png': '0786',
      './trapper_iob.png': '4206',
      './understudy_lse.png': 'c71b',
      './undertaker.png': '0e20',
      './unionist_bim.png': 'de10',
      './usurper_sr.png': 'ec1e8',
      './venividivici_lse.png': '509f',
      './vicar_bim.png': '7127',
      './viceroy_iob.png': 'f700',
      './vigormortis.png': 'f4bd',
      './virgin.png': 'eff4',
      './vividdreamer_ti.png': '7265',
      './vortox.png': '3a43',
      './voudon.png': 'a710',
      './waiter_bim.png': '4c60',
      './warden_bim.png': '6644',
      './warden_iob.png': '295a',
      './warlock_mm.png': 'b55d',
      './warlock_wm.png': '84fd',
      './warrior_iob.png': '48ff',
      './washerwoman.png': '013f',
      './web_aoi.png': '6e20',
      './wellspring_wm.png': 'cd8c',
      './wendigo_bim.png': '4cfe',
      './wiccan_mm.png': '88c4',
      './wicked_iob.png': '882c',
      './widow.png': '22c9',
      './witch.png': 'f558',
      './witness_bim.png': '7723',
      './witness_lse.png': 'd2cd',
      './x.png': '5cf2',
      './ysbaddaden_sr.png': 'b3d9',
      './yurei_bim.png': 'c86c',
      './zombuul.png': '20ca'
    }
    function r(e) {
      var t = n(e)
      return i(t)
    }
    function n(e) {
      if (!i.o(s, e)) {
        var t = new Error("Cannot find module '" + e + "'")
        throw ((t.code = 'MODULE_NOT_FOUND'), t)
      }
      return s[e]
    }
    ;(r.keys = function () {
      return Object.keys(s)
    }),
      (r.resolve = n),
      (e.exports = r),
      (r.id = '61b0')
  },
  '61e7': function (e, t, i) {
    e.exports = i.p + 'img/sociopath_ti.b2569bce.png'
  },
  6227: function (e, t, i) {
    e.exports = i.p + 'img/bloodletter_iob.4c35f07e.png'
  },
  6298: function (e, t, i) {
    e.exports = i.p + 'img/bookbinder_aoi.5b06585a.png'
  },
  6327: function (e, t, i) {
    e.exports = i.p + 'img/poppetmaker_mm.a60e2e29.png'
  },
  '634a': function (e) {
    e.exports = JSON.parse(
      '[{"townsfolk":3,"outsider":0,"minion":1,"demon":1},{"townsfolk":3,"outsider":1,"minion":1,"demon":1},{"townsfolk":5,"outsider":0,"minion":1,"demon":1},{"townsfolk":5,"outsider":1,"minion":1,"demon":1},{"townsfolk":5,"outsider":2,"minion":1,"demon":1},{"townsfolk":7,"outsider":0,"minion":2,"demon":1},{"townsfolk":7,"outsider":1,"minion":2,"demon":1},{"townsfolk":7,"outsider":2,"minion":2,"demon":1},{"townsfolk":9,"outsider":0,"minion":3,"demon":1},{"townsfolk":9,"outsider":1,"minion":3,"demon":1},{"townsfolk":9,"outsider":2,"minion":3,"demon":1}]'
    )
  },
  '64be': function (e, t, i) {
    e.exports = i.p + 'img/fiddler.d1730aaa.png'
  },
  '64fe': function (e, t, i) {
    e.exports = i.p + 'img/butler.f4fd1640.png'
  },
  '659f': function (e, t, i) {
    e.exports = i.p + 'img/doomsayer.7ddbe262.png'
  },
  '65ab': function (e, t, i) {
    e.exports = i.p + 'img/juggler.819f88b8.png'
  },
  '65db': function (e, t, i) {
    e.exports = i.p + 'img/balloonist.c35c6644.png'
  },
  '663c': function (e, t, i) {
    e.exports = i.p + 'img/innkeeper.da072f0d.png'
  },
  6644: function (e, t, i) {
    e.exports = i.p + 'img/warden_bim.af06fc31.png'
  },
  '667e': function (e, t, i) {
    e.exports = i.p + 'img/good.daf3b560.png'
  },
  '66ae': function (e, t, i) {
    e.exports = i.p + 'img/flowergirl.6196eef9.png'
  },
  6741: function (e, t, i) {
    e.exports = i.p + 'img/monk.ff81aec2.png'
  },
  '67b9': function (e, t, i) {
    e.exports = i.p + 'img/analyst_aoi.079dcc7a.png'
  },
  6863: function (e, t, i) {
    e.exports = i.p + 'img/cleric_wm.817c0515.png'
  },
  '68a4': function (e, t, i) {
    e.exports = i.p + 'img/nodashii.5220cac3.png'
  },
  6936: function (e, t, i) {
    e.exports = i.p + 'img/saint.b7a15b85.png'
  },
  '6ac0': function (e, t, i) {
    e.exports = i.p + 'img/fanggu.8fbd2e39.png'
  },
  '6af1': function (e, t, i) {
    e.exports = i.p + 'img/engineer_sos.a7c23440.png'
  },
  '6af6': function (e, t, i) {},
  '6b1e': function (e, t, i) {},
  '6b7b': function (e, t, i) {
    e.exports = i.p + 'img/charlatan_sr.8fab47ef.png'
  },
  '6b9f': function (e, t, i) {
    e.exports = i.p + 'img/infernomancer_wm.26c541fd.png'
  },
  '6c59': function (e, t, i) {
    e.exports = i.p + 'img/prince_mm.d6d02816.png'
  },
  '6ced': function (e, t, i) {
    e.exports = i.p + 'img/quartermaster_sos.4e3f5c10.png'
  },
  '6d98': function (e, t, i) {
    e.exports = i.p + 'img/idolkeeper_mm.6d17b0e4.png'
  },
  '6e20': function (e, t, i) {
    e.exports = i.p + 'img/web_aoi.ba13ce94.png'
  },
  '6eb1': function (e, t, i) {
    e.exports = i.p + 'img/fibbin.9f01eb47.png'
  },
  '6f7e': function (e, t, i) {
    e.exports = i.p + 'img/gorgon_lse.3d739699.png'
  },
  '6fb0': function (e, t, i) {
    e.exports = i.p + 'img/theshroudedvoid_wm.1a058aff.png'
  },
  '706b': function (e, t, i) {
    e.exports = i.p + 'img/commander_sos.7265b166.png'
  },
  7127: function (e, t, i) {
    e.exports = i.p + 'img/vicar_bim.3ccb340c.png'
  },
  '71b8': function (e, t, i) {
    e.exports = i.p + 'img/dreamer.fe5645e1.png'
  },
  7265: function (e, t, i) {
    e.exports = i.p + 'img/vividdreamer_ti.0077cd50.png'
  },
  '72d7': function (e, t, i) {
    e.exports = i.p + 'img/damsel.040c275d.png'
  },
  7330: function (e, t, i) {
    e.exports = i.p + 'img/marshall_bim.57d7000a.png'
  },
  '73a1': function (e, t, i) {
    e.exports = i.p + 'img/tb-outsider.9ae6ef1b.png'
  },
  '745c': function (e, t, i) {
    e.exports = i.p + 'img/eclipse_iob.f9f2f033.png'
  },
  7496: function (e, t, i) {
    e.exports = i.p + 'img/bmr.1d06ca78.png'
  },
  '74c9': function (e, t, i) {
    'use strict'
    i('9fd8')
  },
  '75bc': function (e, t, i) {
    e.exports = i.p + 'img/minion.e02a5c96.png'
  },
  '76df': function (e, t, i) {
    e.exports = i.p + 'img/mage_mm.199a0080.png'
  },
  7723: function (e, t, i) {
    e.exports = i.p + 'img/witness_bim.33621223.png'
  },
  '77ff': function (e, t, i) {
    e.exports = i.p + 'img/hex_bge.6cc6835b.png'
  },
  7828: function (e, t, i) {},
  '78ab': function (e, t, i) {
    e.exports = i.p + 'img/cursed_mm.2bf7e91b.png'
  },
  '78f7': function (e, t, i) {
    e.exports = i.p + 'img/guru_bge.837e79d0.png'
  },
  7947: function (e, t, i) {
    e.exports = i.p + 'img/kilo_iob.8a311f49.png'
  },
  '795e': function (e, t, i) {
    e.exports = i.p + 'img/bard_mm.0dd595d5.png'
  },
  '7a7f': function (e, t, i) {
    e.exports = i.p + 'img/farmer.1534709d.png'
  },
  '7b6a': function (e, t, i) {
    e.exports = i.p + 'img/befuddled_aoi.c77f6a86.png'
  },
  '7c29': function (e, t, i) {
    e.exports = i.p + 'img/infiltrator_mm.180956b7.png'
  },
  '7cbf': function (e, t, i) {
    e.exports = i.p + 'img/detective_bim.ad917e5f.png'
  },
  '7d1e': function (e, t, i) {
    e.exports = i.p + 'img/curator_lse.200232a4.png'
  },
  '7d4e': function (e, t, i) {
    e.exports = i.p + 'img/retrogradus_iob.76352126.png'
  },
  '7e23': function (e, t, i) {
    e.exports = i.p + 'img/ranger_iob.ea61f25e.png'
  },
  '7e93': function (e, t, i) {
    e.exports = i.p + 'img/cryomancer_wm.352de316.png'
  },
  '7f07': function (e, t, i) {
    e.exports = i.p + 'img/pithag.9bdfc5a3.png'
  },
  '7f5d': function (e, t, i) {
    e.exports = i.p + 'img/merchant_sos.8cd54c2b.png'
  },
  '800f': function (e, t, i) {
    'use strict'
    i('098f')
  },
  8030: function (e, t, i) {
    e.exports = i.p + 'img/bishop.1f25f092.png'
  },
  '80a4': function (e, t, i) {
    e.exports = i.p + 'img/keresa_bim.7b67f70c.png'
  },
  '80d2': function (e, t, i) {
    e.exports = i.p + 'img/spacepirate_sos.9b453c3f.png'
  },
  '81e9': function (e, t, i) {
    e.exports = i.p + 'img/shoulderangel_ti.27f6cd57.png'
  },
  '81fb': function (e, t, i) {
    e.exports = i.p + 'img/brainleech_sos.d51d5fbf.png'
  },
  '824a': function (e, t, i) {
    e.exports = i.p + 'img/gardener_bge.68ef8d0b.png'
  },
  8331: function (e, t, i) {
    e.exports = i.p + 'img/clone_bge.b1cde998.png'
  },
  '84c1': function (e, t, i) {
    e.exports = i.p + 'img/conservator_aoi.0676a734.png'
  },
  '84fd': function (e, t, i) {
    e.exports = i.p + 'img/warlock_wm.2f501805.png'
  },
  '850e': function (e, t, i) {
    e.exports = i.p + 'img/hanabi_bge.6e960268.png'
  },
  8521: function (e, t, i) {},
  '873c': function (e, t, i) {
    e.exports = i.p + 'img/officer_sos.31dd2fbe.png'
  },
  '877c': function (e, t, i) {
    e.exports = i.p + 'img/redshirt_sos.15fbf0aa.png'
  },
  8781: function (e, t, i) {
    'use strict'
    i('6b1e')
  },
  '87fd': function (e, t, i) {
    e.exports = i.p + 'img/pawn_sr.9e5d5296.png'
  },
  '882c': function (e, t, i) {
    e.exports = i.p + 'img/wicked_iob.52a60321.png'
  },
  '887b': function (e, t, i) {
    e.exports = i.p + 'img/acrobat.be49ceac.png'
  },
  8888: function (e, t, i) {
    e.exports = i.p + 'img/mathematician.cc67c625.png'
  },
  '88c4': function (e, t, i) {
    e.exports = i.p + 'img/wiccan_mm.8278896d.png'
  },
  '88db': function (e, t, i) {
    e.exports = i.p + 'img/heir_mm.48dcec96.png'
  },
  '88e9': function (e, t, i) {
    e.exports = i.p + 'img/octovore_bge.9fbadbfa.png'
  },
  8953: function (e, t, i) {
    e.exports = i.p + 'img/emissary_sr.4b10e9c1.png'
  },
  '899d': function (e, t, i) {
    e.exports = i.p + 'img/bountyhunter.b208dc71.png'
  },
  '8a47': function (e, t, i) {},
  '8ad3': function (e, t, i) {},
  '8bf7': function (e, t, i) {
    e.exports = i.p + 'img/effigy_iob.77978e77.png'
  },
  '8c61': function (e, t, i) {
    e.exports = i.p + 'img/servant_mm.62c9df3a.png'
  },
  '8c9e': function (e, t, i) {
    e.exports = i.p + 'img/securitychief_sos.72744188.png'
  },
  '8ea9': function (e, t, i) {
    e.exports = i.p + 'img/thaumaturge_wm.1b7c03ad.png'
  },
  '8ebb': function (e, t, i) {
    e.exports = i.p + 'img/majesty_sr.604d45e0.png'
  },
  9002: function (e, t, i) {
    e.exports = i.p + 'img/deusexfiasco.96e5d2eb.png'
  },
  9044: function (e, t, i) {},
  9132: function (e, t, i) {
    e.exports = i.p + 'img/jabberwocky_sr.4bea50a1.png'
  },
  9187: function (e, t, i) {
    e.exports = i.p + 'img/assassin.ae0f2fba.png'
  },
  9224: function (e) {
    e.exports = JSON.parse('{"a":"2.15.3"}')
  },
  '92d8': function (e, t, i) {
    e.exports = i.p + 'img/luf.8e16a6e6.png'
  },
  '93ec': function (e, t, i) {
    e.exports = i.p + 'img/lieutenant_bim.0b963a8c.png'
  },
  '93f5': function (e, t, i) {
    e.exports = i.p + 'img/concubine_sr.18308cff.png'
  },
  '942f': function (e, t, i) {
    e.exports = i.p + 'img/scribe_sr.a8acb3dd.png'
  },
  '94c7': function (e, t, i) {
    e.exports = i.p + 'img/herald_sr.eace3273.png'
  },
  '94d7': function (e, t, i) {
    e.exports = i.p + 'img/specter_bge.079b6afc.png'
  },
  '94f0': function (e, t, i) {
    e.exports = i.p + 'img/cyclox_bge.75cab937.png'
  },
  '94fb': function (e, t, i) {
    e.exports = i.p + 'img/princess_sr.61ecdcd2.png'
  },
  9521: function (e, t, i) {
    e.exports = i.p + 'img/infirm_sos.023aa7e1.png'
  },
  '95b9': function (e, t, i) {
    e.exports = i.p + 'img/bartender_bim.812272b2.png'
  },
  9639: function (e, t, i) {
    e.exports = i.p + 'img/king.3f722bb8.png'
  },
  '966e': function (e, t, i) {
    e.exports = i.p + 'img/nihilist_ti.0a772912.png'
  },
  '97c6': function (e, t, i) {
    e.exports = i.p + 'img/gangster.72167674.png'
  },
  9921: function (e, t, i) {
    e.exports = i.p + 'img/grist_lse.65f2f3c0.png'
  },
  9989: function (e, t, i) {
    e.exports = i.p + 'img/alhadikhia.1d64887e.png'
  },
  '99c2': function (e, t, i) {},
  '99d0': function (e, t, i) {
    e.exports = i.p + 'img/godfather.d64b901e.png'
  },
  '99f7': function (e, t, i) {
    e.exports = i.p + 'img/chauffeur_lse.7ef206ba.png'
  },
  '9a6e': function (e, t, i) {
    e.exports = i.p + 'img/alipay.cebf3ef5.jpeg'
  },
  '9be4': function (e, t, i) {
    e.exports = i.p + 'img/monark_mm.5ac202b3.png'
  },
  '9c0c': function (e, t, i) {},
  '9ce3': function (e, t, i) {
    e.exports = i.p + 'img/thief.04afd5e0.png'
  },
  '9ea8': function (e, t, i) {
    e.exports = i.p + 'img/revenant_bge.1003ea4f.png'
  },
  '9ec4': function (e, t, i) {
    e.exports = i.p + 'img/shoulderdevil_ti.fbd62537.png'
  },
  '9f0e': function (e, t, i) {
    e.exports = i.p + 'img/enrage_ti.e18735bf.png'
  },
  '9f74': function (e, t, i) {
    e.exports = i.p + 'img/lleech.da66feee.png'
  },
  '9f7e': function (e, t, i) {
    e.exports = i.p + 'img/tinker.ce44bde6.png'
  },
  '9f8b': function (e, t, i) {
    e.exports = i.p + 'img/hitman_bge.aeec0eda.png'
  },
  '9fa7': function (e, t, i) {
    e.exports = i.p + 'img/oneirocritic_aoi.df7aadd7.png'
  },
  '9fd8': function (e, t, i) {},
  a063: function (e, t, i) {},
  a07d: function (e, t, i) {
    e.exports = i.p + 'img/liar_ti.1bf2e967.png'
  },
  a130: function (e, t, i) {
    e.exports = i.p + 'img/landlord_bge.501512b4.png'
  },
  a1b6: function (e, t, i) {
    'use strict'
    i('8a47')
  },
  a1fe: function (e, t, i) {
    e.exports = i.p + 'img/fugitive_bge.98c20109.png'
  },
  a2d0: function (e, t, i) {
    e.exports = i.p + 'img/postmaster_lse.9fa079e7.png'
  },
  a313: function (e, t, i) {
    e.exports = i.p + 'img/demagogue_bge.b5986e87.png'
  },
  a367: function (e, t, i) {
    e.exports = i.p + 'img/hellslibrarian.3df1d423.png'
  },
  a3b0: function (e, t, i) {
    e.exports = i.p + 'img/tb-demon.0ac8cce6.png'
  },
  a45c: function (e, t, i) {
    e.exports = i.p + 'img/druid_wm.21529fb1.png'
  },
  a472: function (e, t, i) {
    e.exports = i.p + 'img/probe_sos.edfbad56.png'
  },
  a4c2: function (e, t, i) {
    e.exports = i.p + 'img/stormcatcher.3f5110c6.png'
  },
  a504: function (e, t, i) {
    e.exports = i.p + 'img/mobster_bge.127a82bb.png'
  },
  a566: function (e, t, i) {
    e.exports = i.p + 'img/doomsdaypreacher_ti.9c9798d9.png'
  },
  a575: function (e, t, i) {
    e.exports = i.p + 'img/muse_mm.5f262d49.png'
  },
  a5ee: function (e, t, i) {
    e.exports = i.p + 'img/executioner_bim.a1b56e0c.png'
  },
  a623: function (e, t, i) {
    e.exports = i.p + 'img/analyst_sos.95b09ffd.png'
  },
  a6a2: function (e, t, i) {
    e.exports = i.p + 'img/pukka.1b1700de.png'
  },
  a710: function (e, t, i) {
    e.exports = i.p + 'img/voudon.4c0eb80c.png'
  },
  a7b6: function (e, t, i) {
    e.exports = i.p + 'img/pixie.2db5f1a2.png'
  },
  a819: function (e, t, i) {
    e.exports = i.p + 'img/hel8000_sos.1e1d9465.png'
  },
  aa2d: function (e, t, i) {
    e.exports = i.p + 'img/revolutionary.68827d94.png'
  },
  aae0: function (e, t, i) {
    'use strict'
    i('e440')
  },
  aae9: function (e, t, i) {
    e.exports = i.p + 'img/boomdandy.009c74b1.png'
  },
  aafb: function (e, t, i) {
    e.exports = i.p + 'img/highroller_bge.ac199b52.png'
  },
  ab3c: function (e, t, i) {
    e.exports = i.p + 'img/magician.c1bcf13c.png'
  },
  ac41: function (e, t, i) {
    e.exports = i.p + 'img/interrogator_ti.48dc503c.png'
  },
  ac7c: function (e, t, i) {
    e.exports = i.p + 'img/seamstress.209ed80b.png'
  },
  ac9c: function (e, t, i) {
    e.exports = i.p + 'img/general.2fc65230.png'
  },
  ad25: function (e, t, i) {
    'use strict'
    i('9044')
  },
  adfc: function (e, t, i) {
    e.exports = i.p + 'img/klutz.99df79cb.png'
  },
  ae6b: function (e, t, i) {
    e.exports = i.p + 'img/snakebite_lse.e1d51fbf.png'
  },
  af68: function (e, t, i) {
    e.exports = i.p + 'img/sentinel.93d312eb.png'
  },
  afd1: function (e, t, i) {
    e.exports = i.p + 'img/receptionist_aoi.5283c549.png'
  },
  b1cb: function (e, t, i) {
    e.exports = i.p + 'img/matron.6e1551e5.png'
  },
  b1d9: function (e) {
    e.exports = JSON.parse(
      '[{"id":"washerwoman","name":"洗衣妇","edition":"tb","team":"townsfolk","firstNight":32,"firstNightReminder":"唤醒洗衣妇，并向洗衣妇展示一个在场的村民身份标志。然后指向两名玩家，其中一名是该身份。","otherNight":0,"otherNightReminder":"","reminders":["对应村民","非对应"],"setup":false,"ability":"游戏开始时，你得知两名玩家其中一名的村民身份。"},{"id":"librarian","name":"图书馆员","edition":"tb","team":"townsfolk","firstNight":33,"firstNightReminder":"唤醒图书馆员，并向图书馆员展示一个在场的外来者身份标志。然后指向两名玩家，其中一名是该身份。","otherNight":0,"otherNightReminder":"","reminders":["对应外来者","非对应"],"setup":false,"ability":"游戏开始时，你会得知两名玩家其中一名的外来者身份，或得知本局没有外来者。"},{"id":"investigator","name":"调查员","edition":"tb","team":"townsfolk","firstNight":34,"firstNightReminder":"唤醒调查员，并向调查员展示一个在场的爪牙身份标志。然后指向两名玩家，其中一名是该身份。","otherNight":0,"otherNightReminder":"","reminders":["对应爪牙","非对应"],"setup":false,"ability":"游戏开始时，你会得知两名玩家其中一名的爪牙身份。"},{"id":"chef","name":"厨师","edition":"tb","team":"townsfolk","firstNight":35,"firstNightReminder":"唤醒厨师，并告知厨师场上有多少对邪恶玩家为邻座。","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"游戏开始时，你会得知有多少对邪恶玩家为邻座。"},{"id":"empath","name":"神使","edition":"tb","team":"townsfolk","firstNight":36,"firstNightReminder":"唤醒神使，并告知神使他相邻的存活玩家有多少名属于邪恶阵营。","otherNight":53,"otherNightReminder":"唤醒神使，并告知神使他相邻的存活玩家有多少名属于邪恶阵营。","reminders":[],"setup":false,"ability":"每个夜晚，你得知与你相邻的存活玩家中有多少名属于邪恶阵营。"},{"id":"fortuneteller","name":"预言家","edition":"tb","team":"townsfolk","firstNight":37,"firstNightReminder":"预言家指向两名玩家，告知他这两名玩家中是否有恶魔。","otherNight":54,"otherNightReminder":"预言家指向两名玩家，告知他这两名玩家中是否有恶魔。","reminders":["错误信息"],"setup":false,"ability":"每个夜晚，你选择两名玩家，并得知他们两人中是否有恶魔。有一名善良玩家，你的技能始终会把他误认为恶魔。"},{"id":"undertaker","name":"送葬者","edition":"tb","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":56,"otherNightReminder":"如果有玩家今天被处决，唤醒送葬者，并向送葬者展示那个玩家的身份标记。","reminders":["被处决"],"setup":false,"ability":"每个夜晚*，你得知今天被处决的玩家的身份。"},{"id":"monk","name":"僧侣","edition":"tb","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":13,"otherNightReminder":"僧侣指向一名其他玩家。标记那名玩家为被保护状态。","reminders":["被保护"],"setup":false,"ability":"每个夜晚*，选择一名其他玩家，使他在今晚免受恶魔侵害。"},{"id":"ravenkeeper","name":"养鸦人","edition":"tb","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":42,"otherNightReminder":"当养鸦人在夜晚死亡时，唤醒他并让他指向一名玩家。展示那名玩家的身份标记。","reminders":[],"setup":false,"ability":"当你在夜晚死亡时，选择一名玩家，得知他的身份。"},{"id":"virgin","name":"处女","edition":"tb","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["无技能"],"setup":false,"ability":"当你第一次被提名时，如果提名你的玩家是村民，他立刻被处决。"},{"id":"slayer","name":"杀手","edition":"tb","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["无技能"],"setup":false,"ability":"整局游戏限一次，白天，你可以公开选择一名玩家，如果他是恶魔，他死亡。"},{"id":"soldier","name":"军人","edition":"tb","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"你免受恶魔侵害。"},{"id":"mayor","name":"镇长","edition":"tb","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"当剩下三名玩家存活，且当天没有玩家被处决时，你的阵营获胜。当你在夜晚死亡时，可能有其他玩家代替你死亡。"},{"id":"butler","name":"家仆","edition":"tb","team":"outsider","firstNight":38,"firstNightReminder":"家仆指向一名玩家。在那名玩家的身份标志旁放置主人标记。","otherNight":55,"otherNightReminder":"家仆指向一名玩家。在那名玩家的身份标志旁放置主人标记。","reminders":["主人"],"setup":false,"ability":"每个夜晚，选择一名其他玩家，明天当他投票时，你才能投票。"},{"id":"drunk","name":"酒鬼","edition":"tb","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"remindersGlobal":["醉酒"],"setup":true,"ability":"你不知道你是酒鬼，你以为你是一个村民身份，但其实你不是。"},{"id":"recluse","name":"隐士","edition":"tb","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"你可能被视为一名邪恶的爪牙或恶魔。即使你已经死亡。"},{"id":"saint","name":"圣徒","edition":"tb","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"当你被处决时，你的阵营落败。"},{"id":"poisoner","name":"毒师","edition":"tb","team":"minion","firstNight":17,"firstNightReminder":"毒师指向一名玩家。在那名玩家的身份标志旁放置中毒标记。","otherNight":8,"otherNightReminder":"上一名中毒玩家恢复健康。毒师指向一名玩家。在那名玩家的身份标志旁放置中毒标记。","reminders":["中毒"],"setup":false,"ability":"每个夜晚，选择一名玩家，他中毒，直到下个黄昏。"},{"id":"spy","name":"间谍","edition":"tb","team":"minion","firstNight":47,"firstNightReminder":"间谍查看魔典，不限制观看时长。","otherNight":67,"otherNightReminder":"间谍查看魔典，不限制观看时长。","reminders":[],"setup":false,"ability":"每个夜晚，你查看魔典。你可能被视为一名善良的村民或外来者，即使你已经死亡。"},{"id":"scarletwoman","name":"荡妇","edition":"tb","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":20,"otherNightReminder":"如果荡妇变成了恶魔，唤醒荡妇，告知她成为了哪个恶魔。","reminders":["恶魔"],"setup":false,"ability":"当存活玩家大于5人且恶魔死亡时(不包括旅行者)，你成为新的恶魔。"},{"id":"baron","name":"男爵","edition":"tb","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":true,"ability":"本局游戏存在额外的外来者。[+2外来者]"},{"id":"imp","name":"小恶魔","edition":"tb","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":24,"otherNightReminder":"小恶魔指向一名玩家，那名玩家被杀害。如果小恶魔指向自己，将一名爪牙变为小恶魔，并唤醒他，然后向他展示“你是”卡和小恶魔的身份标志。","reminders":["被杀害"],"setup":false,"ability":"每个夜晚*，选择一名玩家，将他杀害。当你杀害自己时，一名爪牙变为新的小恶魔。"},{"id":"bureaucrat","name":"官员","edition":"tb","team":"traveler","firstNight":1,"firstNightReminder":"官员指向一名玩家。将三票标记放在那名玩家的身份标志旁。","otherNight":1,"otherNightReminder":"官员指向一名玩家。将三票标记放在那名玩家的身份标志旁。","reminders":["三票"],"setup":false,"ability":"每个夜晚，选择一名其他玩家，明天他的一票视为三票。"},{"id":"thief","name":"盗贼","edition":"tb","team":"traveler","firstNight":1,"firstNightReminder":"盗贼指向一名玩家。将负票标记放在那名玩家的身份标志旁。","otherNight":1,"otherNightReminder":"盗贼指向一名玩家。将负票标记放在那名玩家的身份标志旁。","reminders":["负票"],"setup":false,"ability":"每个夜晚，选择一名其他玩家，明天他的票视为负数。"},{"id":"gunslinger","name":"枪手","edition":"tb","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"每个白天，当第一次投票结束后，你可以选择一名投票的玩家，那名玩家死亡。"},{"id":"scapegoat","name":"替罪羊","edition":"tb","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"如果一名阵营与你相同的玩家将要被处决，你可能代替他被处决。"},{"id":"beggar","name":"乞丐","edition":"tb","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"你必须使用投票标记才能投票。死亡的玩家可以将自己的投票标记交给你，你得知他的阵营。你不会中毒或醉酒。"},{"id":"grandmother","name":"祖母","edition":"bmr","team":"townsfolk","firstNight":39,"firstNightReminder":"唤醒祖母并展示一个善良身份标志，然后指向该身份对应的玩家。","otherNight":50,"otherNightReminder":"当孙子被恶魔杀害时，祖母死亡。","reminders":["孙子"],"setup":false,"ability":"游戏开始时，你得知一名善良玩家与他的身份，当恶魔杀害他时，你死亡。"},{"id":"sailor","name":"水手","edition":"bmr","team":"townsfolk","firstNight":10,"firstNightReminder":"水手指向一名存活玩家。在水手或那名玩家的身份标志旁放置醉酒标记。","otherNight":4,"otherNightReminder":"原本的醉酒玩家恢复清醒，水手指向一名存活玩家，在水手或那名玩家的身份标志旁放置醉酒标记。","reminders":["醉酒"],"setup":false,"ability":"你不会死亡。每个夜晚，选择一名存活玩家，你和他其中一名醉酒，直到下个黄昏。"},{"id":"chambermaid","name":"女佣","edition":"bmr","team":"townsfolk","firstNight":50,"firstNightReminder":"女佣指向两名玩家。告知她这些玩家中有几名因为他们的技能在今晚被唤醒。","otherNight":70,"otherNightReminder":"女佣指向两名玩家。告知她这些玩家中有几名因为他们的技能在今晚被唤醒。","reminders":[],"setup":false,"ability":"每个夜晚，选择两名其他存活玩家，你得知今晚他们当中有多少名由于自身的技能被唤醒。"},{"id":"exorcist","name":"驱魔师","edition":"bmr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":22,"otherNightReminder":"驱魔师指向一名和上一夜不同的玩家。如果那名玩家是恶魔，将他唤醒，然后展示驱魔师的身份标志，并指向驱魔师。恶魔今晚不会被唤醒。","reminders":["被选择"],"setup":false,"ability":"每个夜晚*，选择一名玩家（需与上一夜不同）如果你选中了恶魔，他在今晚不会被唤醒，并得知你是谁。"},{"id":"innkeeper","name":"旅店老板","edition":"bmr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":9,"otherNightReminder":"移除先前的被保护标记和醉酒标记。旅店老板指向两名玩家。为那两名玩家放置被保护标记，其中一名放置醉酒标记。","reminders":["被保护","醉酒"],"setup":false,"ability":"每个夜晚*，选择两名玩家，他们在今晚不会死亡，但其中一名会醉酒，直到下个黄昏。"},{"id":"gambler","name":"赌徒","edition":"bmr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":11,"otherNightReminder":"赌徒指向一名玩家和一个身份列表上的身份。如果那名玩家不是该身份，赌徒死亡。","reminders":["死亡"],"setup":false,"ability":"每个夜晚*，选择一名玩家并猜测他的身份，当你猜测错误时，你死亡。"},{"id":"gossip","name":"散谣者","edition":"bmr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":47,"otherNightReminder":"如果散谣者白天的公开声明正确，选择一名今晚未被保护的玩家，那名玩家死亡。","reminders":["死亡"],"setup":false,"ability":"每个白天，你可以做出一项公开声明。如果声明正确，一名玩家在今晚死亡。"},{"id":"courtier","name":"侍臣","edition":"bmr","team":"townsfolk","firstNight":19,"firstNightReminder":"侍臣不使用技能，或指向身份列表上的一个身份，如果那个身份在场，在对应的玩家的身份标志旁放置醉酒3标记。","otherNight":10,"otherNightReminder":"减少醉酒玩家的持续天数，替换为少一天的标记。如果侍臣未使用技能，侍臣不使用技能，或指向剧本列表上的一个身份，如果那个身份在场，在对应的玩家的身份标志旁放置醉酒3标记。","reminders":["醉酒3","醉酒2","醉酒1","无技能"],"setup":false,"ability":"整局游戏限一次，夜晚，选择一个身份，如果该身份在场，使对应的玩家醉酒三天三夜。"},{"id":"professor","name":"教授","edition":"bmr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":45,"otherNightReminder":"教授不使用技能或指向一名玩家。如果那名玩家在教授视角内已经死亡，实际上也已死亡，并且他是一名村民，那名玩家被复活。","reminders":["复活","无技能"],"setup":false,"ability":"整局游戏限一次，夜晚*，选择一名死亡的玩家，如果他是村民，将他复活。"},{"id":"minstrel","name":"吟游诗人","edition":"bmr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["所有人醉酒"],"setup":false,"ability":"当爪牙被处决时，除了旅行者之外的所有玩家醉酒到明天的黄昏。"},{"id":"tealady","name":"茶女","edition":"bmr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["不会死亡"],"setup":false,"ability":"如果与你相邻的存活玩家属于善良阵营，他们不会死亡。"},{"id":"pacifist","name":"调停者","edition":"bmr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"善良阵营的玩家被处决时，可能不会死亡。"},{"id":"fool","name":"小丑","edition":"bmr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["无技能"],"setup":false,"ability":"当你第一次死亡时，你不会死亡。"},{"id":"tinker","name":"修补匠","edition":"bmr","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":48,"otherNightReminder":"修补匠随时可能死亡。","reminders":["死亡"],"setup":false,"ability":"你随时可能死亡。"},{"id":"moonchild","name":"月之子","edition":"bmr","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":49,"otherNightReminder":"如果月之子今天使用了他的技能选择了一名玩家，并且该玩家属于善良阵营，他死亡。","reminders":["死亡"],"setup":false,"ability":"当你得知你死亡时，公开选择一名活着的玩家，如果他属于善良阵营，今晚，他死亡。"},{"id":"goon","name":"暴徒","edition":"bmr","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["醉酒"],"setup":false,"ability":"每个夜晚，当第一次有玩家选择你作为技能目标时，他醉酒直到下个黄昏。然后你加入他的阵营。"},{"id":"lunatic","name":"狂人","edition":"bmr","team":"outsider","firstNight":7,"firstNightReminder":"当多于7名玩家时，告知狂人等同于本局爪牙数的爪牙，向狂人展示3个善良身份标记。如果狂人收到的恶魔身份在第一夜就会被唤醒，允许狂人执行行动，并放置攻击标记。唤醒恶魔，告知他是真的恶魔，并告知他谁是狂人。如果狂人攻击了一名玩家，告知恶魔狂人攻击了哪些玩家，然后移除这些标记。 ","otherNight":21,"otherNightReminder":"允许狂人执行恶魔行动，放置攻击标记。如果狂人攻击了一名玩家，告知恶魔狂人攻击了哪些玩家，然后移除这些标记。 ","reminders":["攻击1","攻击2","攻击3"],"setup":false,"ability":"你以为你是恶魔，但其实你不是。恶魔知道你是谁，以及你在每晚选择了谁。"},{"id":"godfather","name":"教父","edition":"bmr","team":"minion","firstNight":21,"firstNightReminder":"唤醒教父并向他展示所有在场的外来者身份标记。","otherNight":38,"otherNightReminder":"如果上个白天有外来者死亡，唤醒教父并让其选择一名玩家，那名玩家被杀害。","reminders":["白天死亡","死亡"],"setup":true,"ability":"游戏开始时，你得知本局存在的外来者身份。当一名外来者在白天死亡时，当晚，你选择一名玩家，将他杀害。[±1外来者]"},{"id":"devilsadvocate","name":"律师","edition":"bmr","team":"minion","firstNight":22,"firstNightReminder":"律师指向一名存活玩家，该玩家下个白天被处决时不会死亡。","otherNight":14,"otherNightReminder":"律师指向一名与前一晚不同的存活玩家，该玩家下个白天被处决时不会死亡。","reminders":["不会被处决"],"setup":false,"ability":"每个夜晚，选择一名存活玩家(需与上一夜不同)，明天，当他被处决时，他不会死亡。"},{"id":"assassin","name":"刺客","edition":"bmr","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":37,"otherNightReminder":"刺客指向一名玩家或不使用技能。如果刺客选择了玩家，那名玩家死亡。","reminders":["被杀害","无技能"],"setup":false,"ability":"整局游戏限一次，夜晚*，选择一名玩家，将他杀害。即使你因为某些原因不能这么做。"},{"id":"mastermind","name":"主谋","edition":"bmr","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"当恶魔死于处决导致游戏结束时，再多进行一天游戏。当这一天有玩家被处决时，该玩家的阵营落败。"},{"id":"zombuul","name":"僵尸","edition":"bmr","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":25,"otherNightReminder":"如果没有人在白天死亡，僵尸选择一名玩家杀害 ","reminders":["白天死亡","被杀害"],"setup":false,"ability":"每个夜晚*，当白天没有玩家死亡时，选择一名玩家，将他杀害。当你第一次死亡时，你仍然活着，但被视为死亡。"},{"id":"pukka","name":"疫魔","edition":"bmr","team":"demon","firstNight":28,"firstNightReminder":"疫魔指向一名玩家，该玩家中毒。","otherNight":26,"otherNightReminder":"疫魔指向一名玩家，该玩家中毒。先前已中毒的玩家被杀害。","reminders":["中毒","被杀害"],"setup":false,"ability":"每个夜晚，选择一名玩家，他中毒。先前已经中毒的玩家死亡并恢复健康。"},{"id":"shabaloth","name":"憎恶","edition":"bmr","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":27,"otherNightReminder":"前一晚憎恶选择的玩家之一可能会复活。憎恶指向两名玩家，这两名玩家死亡。","reminders":["被杀害","复活"],"setup":false,"ability":"每个夜晚*，选择两名玩家，将他们杀害。你上一晚选择的玩家可能会因反刍而复活。"},{"id":"po","name":"“迷迭香”","edition":"bmr","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":28,"otherNightReminder":"“迷迭香”指向一名玩家或不使用技能，如果“迷迭香”指向了一名玩家，将他杀害。如果“迷迭香”上一次放弃了选择，改为选择三名玩家。","reminders":["被杀害","三次杀害"],"setup":false,"ability":"每个夜晚*，你可以选择一名玩家，将他杀害。如果你上次放弃了选择，你这次改为选择三名。"},{"id":"apprentice","name":"学徒","edition":"bmr","team":"traveler","firstNight":1,"firstNightReminder":"向学徒展示一个村民或爪牙标记。在魔典中，用那个身份标记代替学徒的身份标记，并在该身份旁放置曾是学徒标记。","otherNight":0,"otherNightReminder":"","reminders":["曾是学徒"],"setup":false,"ability":"在你的第一个夜晚，如果你属于善良阵营，获得一个村民身份的技能。如果你属于邪恶阵营，获得一个爪牙身份的技能。"},{"id":"matron","name":"宿管","edition":"bmr","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"每天限三次，令两名玩家交换位置。玩家们不允许离开座位私聊。"},{"id":"judge","name":"法官","edition":"bmr","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["无技能"],"setup":false,"ability":"整局游戏限一次，在一次其他玩家发起的提名投票结束后，你可以强制执行处决或否决已经通过的投票。"},{"id":"bishop","name":"主教","edition":"bmr","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["提名善良方","提名邪恶方"],"setup":false,"ability":"只有说书人可以发起提名。每天，都会有至少一名与你阵营不同的玩家被提名。"},{"id":"voudon","name":"巫毒师","edition":"bmr","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"只有你和死亡的玩家可以在提名中投票，这不会消耗投票标记。取消投票达半才能处决的限制。"},{"id":"clockmaker","name":"钟表匠","edition":"snv","team":"townsfolk","firstNight":40,"firstNightReminder":"唤醒钟表匠并告知他恶魔距他最近的爪牙相隔几名玩家。","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"游戏开始时，你得知恶魔距他最近的爪牙之间的距离。"},{"id":"dreamer","name":"入梦人","edition":"snv","team":"townsfolk","firstNight":41,"firstNightReminder":"入梦人指向一名玩家。向入梦人展示一个善良身份标记和一个邪恶身份标记，其中一个是他指向的玩家的真实身份。","otherNight":57,"otherNightReminder":"入梦人指向一名玩家。向入梦人展示一个善良身份标记和一个邪恶身份标记，其中一个是他指向的玩家的真实身份。","reminders":[],"setup":false,"ability":"每个夜晚，选择一名其他玩家，你得知一个善良身份与一个邪恶身份，其中一个是他的真实身份。"},{"id":"snakecharmer","name":"耍蛇人","edition":"snv","team":"townsfolk","firstNight":20,"firstNightReminder":"耍蛇人指向一名玩家，如果那名玩家是恶魔，交换恶魔和耍蛇人的身份和阵营。依次唤醒并向他展示“你是”卡和新的身份标志与阵营。新的耍蛇人中毒。","otherNight":12,"otherNightReminder":"耍蛇人指向一名玩家，如果那名玩家是恶魔，交换恶魔和耍蛇人的身份和阵营。依次唤醒并向他展示“你是”卡和新的身份标志与阵营。新的耍蛇人中毒。","reminders":["中毒"],"setup":false,"ability":"每个夜晚，选择一名存活玩家，当你选中一名恶魔时，交换你和他的身份以及阵营，然后，他中毒。"},{"id":"mathematician","name":"数学家","edition":"snv","team":"townsfolk","firstNight":50,"firstNightReminder":"唤醒数学家并告知有几名玩家的技能受其他玩家影响而未正常生效。","otherNight":70,"otherNightReminder":"唤醒数学家并告知有几名玩家的技能受其他玩家影响而未正常生效。","reminders":["未正常生效"],"setup":false,"ability":"每个夜晚，你得知有多少玩家的技能因为其他玩家的技能未正常生效。(从拂晓开始算起)"},{"id":"flowergirl","name":"花艺师","edition":"snv","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":58,"otherNightReminder":"唤醒花艺师，并告知花艺师白天恶魔是否投票。当恶魔投票时，标记恶魔已投票，否则在黄昏时标记恶魔未投票。","reminders":["恶魔已投票","恶魔未投票"],"setup":false,"ability":"每个夜晚*，你得知恶魔在白天是否进行了投票。"},{"id":"towncrier","name":"传令员","edition":"snv","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":59,"otherNightReminder":"唤醒传令员，并告知传令员白天爪牙是否发起了提名。当爪牙提名时，标记爪牙已提名，否则在黄昏时标记爪牙未提名。","reminders":["爪牙已提名","爪牙未提名"],"setup":false,"ability":"每个夜晚*，你得知爪牙在白天是否发起了提名。"},{"id":"oracle","name":"祭司","edition":"snv","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":60,"otherNightReminder":"唤醒祭司，并告知祭司有多少名死亡的邪恶玩家。","reminders":[],"setup":false,"ability":"每个夜晚*，你得知死去的玩家中有多少名属于邪恶阵营。"},{"id":"savant","name":"学者","edition":"snv","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"每个白天，拜访说书人并获取两条信息，其中一条是正确的，一条是错误的。"},{"id":"seamstress","name":"裁缝","edition":"snv","team":"townsfolk","firstNight":42,"firstNightReminder":"裁缝指向两名玩家或不使用技能，如果指向了两名玩家，告知他这两名玩家是否为同一阵营。","otherNight":61,"otherNightReminder":"裁缝指向两名玩家或不使用技能，如果指向了两名玩家，告知他这两名玩家是否为同一阵营。","reminders":["无技能"],"setup":false,"ability":"整局游戏限一次，夜晚，选择两名其他玩家，得知他们是否属于同阵营。"},{"id":"philosopher","name":"哲学家","edition":"snv","team":"townsfolk","firstNight":2,"firstNightReminder":"哲学家指向身份列表的一个身份或不使用技能。如果选择了身份，将一个不在场的身份与哲学家替换，或在在场的对应身份旁放置醉酒标记。","otherNight":2,"otherNightReminder":"哲学家指向身份列表的一个身份或不使用技能。如果选择了身份，将一个不在场的身份与哲学家替换，或在在场的对应身份旁放置醉酒标记。","reminders":["醉酒","曾是哲学家"],"setup":false,"ability":"整局游戏限一次，夜晚，选择一个善良身份，获取他的技能，如果有玩家为该身份，他醉酒。"},{"id":"artist","name":"艺术家","edition":"snv","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["无技能"],"setup":false,"ability":"整局游戏限一次，白天，拜访说书人并询问一个“是/否”的问题。"},{"id":"juggler","name":"杂技演员","edition":"snv","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":62,"otherNightReminder":"如果杂耍演员在第一天猜测了身份，告知他放置的正确标记的总数量。","reminders":["正确"],"setup":false,"ability":"在你的第一天白天，公开猜测至多五名玩家的身份，当晚，你将会得知猜对了多少个。"},{"id":"sage","name":"贤者","edition":"snv","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":43,"otherNightReminder":"当贤者被恶魔杀害时，唤醒贤者并指向两名玩家，其中一名是恶魔。","reminders":[],"setup":false,"ability":"当恶魔杀害你时，你得知两名玩家，其中一名是恶魔。"},{"id":"mutant","name":"变种人","edition":"snv","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"当你对“我是外来者”疯狂时，你可能会被处决。"},{"id":"sweetheart","name":"意中人","edition":"snv","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":41,"otherNightReminder":"选择一名醉酒玩家。","reminders":["醉酒"],"setup":false,"ability":"当你死亡时，一名玩家醉酒。"},{"id":"barber","name":"理发师","edition":"snv","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":40,"otherNightReminder":"如果理发师今天死亡，唤醒恶魔，告知他理发师死了。恶魔可以选择不使用理发师技能，或指向两名玩家，交换这两名玩家的身份标记。然后依次唤醒两名玩家，并向他展示“你是”卡和对应的身份标志，但不告知身份改变的原因。","reminders":["今晚理发"],"setup":false,"ability":"如果你死亡，恶魔在当晚可以选择两名玩家交换身份。（不可以交换自己以外的其他恶魔）"},{"id":"klutz","name":"笨蛋","edition":"snv","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"当你得知你死亡时，公开选择一名活着的玩家，如果他属于邪恶阵营，你的阵营落败。"},{"id":"eviltwin","name":"黑白双子","edition":"snv","team":"minion","firstNight":23,"firstNightReminder":"唤醒黑白双子和他的双胞胎，两人互相确认。展示双方的身份标记给对方查看。","otherNight":0,"otherNightReminder":"","reminders":["双胞胎"],"setup":false,"ability":"你与一名对立阵营的玩家互知。如果其中的善良玩家被处决，邪恶阵营获胜。当两个双子均存活时，善良阵营不能获胜。"},{"id":"witch","name":"女巫","edition":"snv","team":"minion","firstNight":24,"firstNightReminder":"女巫指向一名玩家。那名玩家在下个白天发起提名时会死去。","otherNight":15,"otherNightReminder":"如果有四名或更多玩家存活，女巫指向一名玩家。那名玩家在下个白天发起提名时会死去。","reminders":["被诅咒"],"setup":false,"ability":"每个夜晚，选择一名玩家，下个白天，当他发起提名时，他死亡。场上剩下三名玩家存活时，你失去该技能。"},{"id":"cerenovus","name":"洗脑师","edition":"snv","team":"minion","firstNight":25,"firstNightReminder":"洗脑师指向一名玩家和一个身份列表上的身份。唤醒那名玩家，告知他被洗脑，以及他被洗脑的身份是什么。如果该玩家下个白天没有对他是该身份疯狂，你可以处决他。","otherNight":16,"otherNightReminder":"洗脑师指向一名玩家和一个身份列表上的身份。唤醒那名玩家，告知他被洗脑，以及他被洗脑的身份是什么。如果该玩家下个白天没有对他是该身份疯狂，你可以处决他。","reminders":["被洗脑"],"setup":false,"ability":"每个夜晚，选择一名玩家和一个善良身份，明天他将对“他是这个身份”疯狂，如果他不这么做，他可能会被处决。"},{"id":"pithag","name":"炼药师","edition":"snv","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":17,"otherNightReminder":"炼药师指向一名玩家和一个身份表格上的身份。如果该身份不在场，唤醒那名玩家并向他展示“你是”卡和这个身份标志，但不告知他原因，并将他的身份标记替换。如果那个身份在场，则无事发生。","reminders":[],"setup":false,"ability":"每个夜晚*，选择一名玩家和一个身份，他变为该身份(如不存在)。如果你创造了一个恶魔，当晚所有恶魔将随机行动。"},{"id":"fanggu","name":"染魂","edition":"snv","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":29,"otherNightReminder":"染魂指向一名玩家，将他杀害。如果那名玩家是一名外来者且没有其他染魂，染魂代替那名玩家死去。唤醒新的染魂，向他展示“你是”卡和染魂的身份标志并给出向下的大拇指。","reminders":["被杀害","已侵染"],"setup":true,"ability":"每个夜晚*，选择一名玩家，将他杀害。当染魂第一次杀死外来者时，他变为一个邪恶的染魂，你死亡。[+1外来者]"},{"id":"vigormortis","name":"巫妖","edition":"snv","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":32,"otherNightReminder":"巫妖指向一名玩家，将他杀害。如果该玩家是爪牙，保留技能，并且该爪牙的一名相邻村民会中毒。","reminders":["被杀害","保留技能","中毒"],"setup":true,"ability":"每个夜晚*，选择一名玩家，将他杀害。被你杀害的爪牙保留技能，并且一名与他相邻的村民中毒。[-1外来者]"},{"id":"nodashii","name":"蚀魂魔","edition":"snv","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":30,"otherNightReminder":"蚀魂魔指向一名玩家，将他杀害。","reminders":["被杀害","中毒"],"setup":false,"ability":"每个夜晚*，选择一名玩家，将他杀害。与你相邻的村民中毒。"},{"id":"vortox","name":"混沌","edition":"snv","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":31,"otherNightReminder":"混沌指向一名玩家，将他杀害。","reminders":["被杀害"],"setup":false,"ability":"每个夜晚*，选择一名玩家，将他杀害。村民的技能必定获取错误信息。每个白天，如果没有玩家被处决，邪恶阵营获胜。"},{"id":"barista","name":"咖啡师","edition":"snv","team":"traveler","firstNight":1,"firstNightReminder":"咖啡师指向一名玩家，随后将咖啡师指向的玩家唤醒，告知他咖啡师选择的是什么效果。","otherNight":1,"otherNightReminder":"咖啡师指向一名玩家，随后将咖啡师指向的玩家唤醒，告知他咖啡师选择的是什么效果。","reminders":["清醒&健康","技能发动两次"],"setup":false,"ability":"每个夜晚，选择一名玩家与一项效果，持续到下个黄昏: 1)必定获取正确信息。2)技能生效两次。他知道你选择了什么。"},{"id":"harlot","name":"妓女","edition":"snv","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":1,"otherNightReminder":"妓女指向一名玩家，将他唤醒，那名玩家通过点头摇头选择同意或拒绝。如果他同意，将他的身份标记展示给妓女看。然后说书人可以决定两名玩家是否会一起死去。","reminders":["死亡"],"setup":false,"ability":"每个夜晚*，选择一名存活玩家，如果他同意，你得知他的身份，但是你们可能死亡。"},{"id":"butcher","name":"刽子手","edition":"snv","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"每个白天，在第一次处决后，你可以再次发起提名。"},{"id":"bonecollector","name":"寻骨者","edition":"snv","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":1,"otherNightReminder":"寻骨者指向一名死亡玩家或选择不使用技能。放置寻回技能标记作为提示，该玩家当晚可能会因此醒来并使用技能。","reminders":["无技能","寻回技能"],"setup":false,"ability":"整局游戏限一次，夜晚*，选择一名死亡的玩家，他恢复他的技能直到下个黄昏。"},{"id":"deviant","name":"怪咖","edition":"snv","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"如果你在白天表现的很搞笑，你不能被流放。"},{"id":"noble","name":"贵族","edition":"","team":"townsfolk","firstNight":43,"firstNightReminder":"唤醒贵族并指向三名玩家，其中有且仅有一名是邪恶玩家，并为这三名玩家放置被知晓标记。","otherNight":0,"otherNightReminder":"","reminders":["被知晓"],"setup":false,"ability":"游戏开始时，你得知三名玩家，他们之中有且只有一名属于邪恶阵营。"},{"id":"bountyhunter","name":"赏金猎人","edition":"","team":"townsfolk","firstNight":45,"firstNightReminder":"指向一名邪恶玩家。唤醒加入邪恶阵营的村民告知他已转变为邪恶阵营。","otherNight":65,"otherNightReminder":"如果之前被知晓的邪恶玩家已经死亡，指向另一名邪恶玩家。","reminders":["被知晓"],"setup":true,"ability":"游戏开始时，你得知一名邪恶玩家。如果该玩家死亡，当晚，你再得知一名其他邪恶玩家。[一位村民加入邪恶阵营]"},{"id":"pixie","name":"精灵","edition":"","team":"townsfolk","firstNight":29,"firstNightReminder":"向精灵展示一个在游戏中的村民身份标志。","otherNight":0,"otherNightReminder":"","reminders":["疯狂","获取技能"],"setup":false,"ability":"游戏开始时，你得知一个本局存在的村民身份，当你对“我是该身份”疯狂时，你将在他死亡时获得他的技能。"},{"id":"general","name":"上将","edition":"","team":"townsfolk","firstNight":49,"firstNightReminder":"如果你觉得善良方占据优势，向上将展示向上的大拇指, 如果你觉得邪恶方占据优势，向上将展示向下的大拇指，如果你觉得双方均势，指向侧面。","otherNight":69,"otherNightReminder":"如果你觉得善良方占据优势，向上将展示向上的大拇指, 如果你觉得邪恶方占据优势，向上将展示向下的大拇指，如果你觉得双方均势，指向侧面。","reminders":[],"setup":false,"ability":"每个夜晚，你得知说书人认为当前哪个阵营优势更大。"},{"id":"preacher","name":"传教士","edition":"","team":"townsfolk","firstNight":14,"firstNightReminder":"传教士选择一名玩家，如果选中了爪牙, 唤醒爪牙并向他展示“这个角色选中了你”卡，然后展示传教士的身份标志。","otherNight":7,"otherNightReminder":"传教士选择一名玩家，如果选中了爪牙, 唤醒爪牙并向他展示“这个角色选中了你”卡，然后展示传教士的身份标志。","reminders":["布道"],"setup":false,"ability":"每个夜晚，选择一名玩家，当你选中了爪牙时，他会得知自己被选中。被你选中的爪牙失去技能。"},{"id":"king","name":"国王","edition":"","team":"townsfolk","firstNight":9,"firstNightReminder":"唤醒恶魔并向他展示“这个角色选中了你”卡，然后展示国王的身份标志并指向国王玩家。","otherNight":64,"otherNightReminder":"如果死亡的玩家数超过了存活的玩家数, 展示一名存活玩家的身份标志。","reminders":[],"setup":false,"ability":"每个夜晚，如果死亡玩家数超过了存活玩家数，你得知一个存活的身份。恶魔知道你是谁。"},{"id":"balloonist","name":"热气球驾驶员","edition":"","team":"townsfolk","firstNight":44,"firstNightReminder":"选择一种尚未被气球驾驶员知晓的身份类型，并告知其一个符合该类型的玩家。在该玩家旁边标记已被知晓。","otherNight":63,"otherNightReminder":"选择一种尚未被气球驾驶员知晓的身份类型，并告知其一个符合该类型的玩家。在该玩家旁边标记已被知晓。如果所有类型均已被知晓或无该种类型，气球驾驶员不会醒来。","reminders":["知晓村民","知晓外来者","知晓爪牙","知晓恶魔","知晓旅行者"],"setup":true,"ability":"每个夜晚，你得知一名玩家。你得知的玩家均是不同身份类型。直到你每个身份类型都得知了一次。[+1外来者]"},{"id":"cultleader","name":"秘教领袖","edition":"","team":"townsfolk","firstNight":47,"firstNightReminder":"如果秘教领袖改变了阵营, 给出大拇指朝上的信号代表他属于善良阵营，大拇指朝下代表他属于邪恶阵营。","otherNight":67,"otherNightReminder":"如果秘教领袖改变了阵营, 给出大拇指朝上的信号代表他属于善良阵营，大拇指朝下代表他属于邪恶阵营。","reminders":[],"setup":false,"ability":"每个夜晚，你的阵营变得与一名相邻的存活玩家相同。如果所有善良玩家都加入了你的教派，你的阵营获胜。"},{"id":"lycanthrope","name":"狼人","edition":"","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":23,"otherNightReminder":"狼人指向一名玩家，如果该玩家属于善良阵营，他死亡，并且今晚不会再有其他玩家死亡。","reminders":["狼人杀害"],"setup":false,"ability":"每个夜晚*，选择一名存活玩家，如果他属于善良阵营，他死亡，并且今晚不会再有其他玩家死亡。"},{"id":"amnesiac","name":"追忆者","edition":"","team":"townsfolk","firstNight":12,"firstNightReminder":"决定追忆者的技能。如果追忆者的技能会让他在今晚醒来，唤醒他并执行其技能。","otherNight":5,"otherNightReminder":"如果追忆者的技能会让他在今晚醒来，唤醒他并执行其技能。","reminders":["?"],"setup":false,"ability":"你不知道你的技能是什么。你每个白天都可以向说书人猜测一次，并得知你猜测的有多准确。"},{"id":"nightwatchman","name":"守夜人","edition":"","team":"townsfolk","firstNight":46,"firstNightReminder":"守夜人可以指向一名玩家，唤醒那名玩家, 并向他展示“这个角色选中了你”卡，然后展示守夜人的身份标志并指向守夜人玩家。","otherNight":66,"otherNightReminder":"守夜人可以指向一名玩家，唤醒那名玩家, 并向他展示“这个角色选中了你”卡，然后展示守夜人的身份标志并指向守夜人玩家。","reminders":["无技能"],"setup":false,"ability":"整局游戏限一次，夜晚，选择一名玩家，那名玩家得知你是谁。"},{"id":"engineer","name":"工程师","edition":"","team":"townsfolk","firstNight":13,"firstNightReminder":"工程师不发动技能, 或指向身份表格中一个爪牙或恶魔身份。如果工程师选择了一个身份, 将恶魔或爪牙替换为他选择的身份，然后唤醒被改变身份的玩家，并展示“你是”卡片，然后展示工程师选中的身份标记。","otherNight":6,"otherNightReminder":"工程师不发动技能, 或指向身份表格中一个爪牙或恶魔身份。如果工程师选择了一个身份, 将恶魔或爪牙替换为他选择的身份，然后唤醒被改变身份的玩家，并展示“你是”卡片，然后展示工程师选中的身份标记。","reminders":["无技能"],"setup":false,"ability":"整局游戏限一次，夜晚，选择一个爪牙或恶魔身份，该身份出现在游戏中。"},{"id":"fisherman","name":"渔夫","edition":"","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["无技能"],"setup":false,"ability":"整局游戏限一次，白天，让说书人给予你一条可以帮助你的阵营获胜的建议。"},{"id":"huntsman","name":"猎人","edition":"","team":"townsfolk","firstNight":30,"firstNightReminder":"猎人不发动技能，或指向一名玩家。 如果他指向了少女， 展示“你是”卡片与一个不在游戏中的村民身份。","otherNight":51,"otherNightReminder":"猎人不发动技能，或指向一名玩家。 如果他指向了少女， 展示“你是”卡片与一个不在游戏中的村民身份。","reminders":["无技能"],"setup":true,"ability":"整局游戏限一次，夜晚，选择一名存活玩家，如果她是少女，将她变为一名不在游戏中的村民。[+少女]"},{"id":"alchemist","name":"炼金术师","edition":"","team":"townsfolk","firstNight":3,"firstNightReminder":"向炼金术师展示一个不在游戏中的爪牙身份标志，将炼金术师的身份替换为该身份，并放置炼金术师标记。","otherNight":0,"otherNightReminder":"","reminders":[],"remindersGlobal":["炼金术师"],"setup":false,"ability":"你拥有一个不在游戏中的爪牙身份的技能。"},{"id":"farmer","name":"农夫","edition":"","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":46,"otherNightReminder":"如果农夫在今晚死亡, 选择一名其他善良玩家并将他变为农夫. 唤醒他, 展示“你是”卡片与农夫身份。","reminders":[],"setup":false,"ability":"当你在夜晚死亡时，一名善良的存活玩家变为农夫。"},{"id":"magician","name":"魔术师","edition":"","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"恶魔会把你误认为爪牙，爪牙们会把你误认为恶魔。"},{"id":"choirboy","name":"唱诗班","edition":"","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":44,"otherNightReminder":"如果国王被恶魔杀害, 唤醒唱诗班并指向恶魔玩家。","reminders":[],"setup":true,"ability":"如果国王死亡，当晚，你得知恶魔是谁。[+国王]"},{"id":"poppygrower","name":"罂粟农","edition":"","team":"townsfolk","firstNight":4,"firstNightReminder":"不要让恶魔和爪牙们之间彼此互知。","otherNight":3,"otherNightReminder":"如果罂粟农已经死亡，使恶魔和爪牙们彼此之间互相知晓。","reminders":["邪恶苏醒"],"setup":false,"ability":"恶魔与爪牙们不互知。如果你死亡，他们在当晚得知彼此是谁。"},{"id":"atheist","name":"无神论者","edition":"","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":true,"ability":"说书人可以打破游戏规则。当说书人被处决时，善良阵营获胜，即使你已经死亡。[无邪恶玩家]"},{"id":"cannibal","name":"食人族","edition":"","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["中毒","食髓知味"],"setup":false,"ability":"你拥有最近被处决而死的玩家的技能。如果该玩家属于邪恶阵营，你中毒直到下一个善良玩家被处决。"},{"id":"snitch","name":"告密者","edition":"","team":"outsider","firstNight":6,"firstNightReminder":"在爪牙们得知恶魔是谁后，向他们三个不在场身份标志。展示这些身份可能彼此相同或不同，也可以和给恶魔展示的身份相同或不同。","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"游戏开始时，爪牙得知三个不在游戏中的身份。"},{"id":"acrobat","name":"马戏演员","edition":"","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":39,"otherNightReminder":"如果一名与马戏演员相邻的存活玩家中毒/醉酒，并且他属于善良阵营，马戏演员玩家死亡。","reminders":["意外死亡"],"setup":false,"ability":"每个夜晚*，如果一名与你相邻的存活玩家中毒/醉酒，并且他属于善良阵营，你死亡。"},{"id":"puzzlemaster","name":"解谜大师","edition":"","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["醉酒","已解密"],"setup":false,"ability":"一名玩家醉酒，即使你死了。整局游戏限一次，猜测他是谁，如果你猜对了，得知恶魔是谁，否则得知错误信息。"},{"id":"heretic","name":"异教徒","edition":"","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"对调双方的胜利条件，即使你已经死亡。"},{"id":"damsel","name":"少女","edition":"","team":"outsider","firstNight":31,"firstNightReminder":"唤醒所有爪牙, 向他们展示“这个身份选择了你”卡和少女身份标志。","otherNight":52,"otherNightReminder":"如果少女被猎人选中, 唤醒少女, 向他们展示“你是”卡和一个不在游戏中的村民身份标志。","reminders":["爪牙已猜测"],"setup":false,"ability":"爪牙知道你在游戏中。整局游戏限一次，一名爪牙可以公开猜测你是谁，如果他猜对了，你的阵营落败。"},{"id":"golem","name":"魔像","edition":"","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["不可提名"],"setup":false,"ability":"整局游戏你只能提名一次。被你提名的玩家如果不是恶魔，他死亡。"},{"id":"politician","name":"政治家","edition":"","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"如果你是对你的阵营落败负最大责任的人，你改变阵营并获胜，即使你已经死亡。"},{"id":"widow","name":"寡妇","edition":"","team":"minion","firstNight":18,"firstNightReminder":"寡妇查看魔典。然后指向一名玩家，他中毒。然后唤醒一名善良玩家，告知他本局存在寡妇。","otherNight":0,"otherNightReminder":"","reminders":["中毒"],"remindersGlobal":["已被知晓"],"setup":false,"ability":"在你的第一个夜晚，你查看魔典并选择一名玩家，使他中毒。一名善良玩家会得知本局存在寡妇。"},{"id":"fearmonger","name":"恐惧之灵","edition":"","team":"minion","firstNight":26,"firstNightReminder":"恐惧之灵指向一名玩家，在该玩家的身份标志旁放置复仇标记，并宣布一名新的玩家已经被恐惧之灵选中。","otherNight":18,"otherNightReminder":"恐惧之灵指向一名玩家，在该玩家的身份标志旁放置复仇标记，并宣布一名新的玩家已经被恐惧之灵选中。","reminders":["复仇"],"setup":false,"ability":"每个夜晚，选择一名玩家，如果你提名并且处决了他，他的阵营落败。当你改变技能目标时，所有玩家都会得知。"},{"id":"psychopath","name":"杀人狂","edition":"","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"每个白天，在提名前，你可以公开选择一名玩家，将他杀害。当你被处决时，进行一次石头剪刀布，只有输了你才会被处决。"},{"id":"goblin","name":"哥布林","edition":"","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["已声明"],"setup":false,"ability":"白天，你可以公开声称自己是哥布林，如果你在当天因为提名而被处决，你的阵营获胜。"},{"id":"mephit","name":"言灵师","edition":"","team":"minion","firstNight":27,"firstNightReminder":"向言灵师展示秘密词语。","otherNight":19,"otherNightReminder":"唤醒第一名说出言灵师秘密词语的善良玩家，向他展示“你是”卡，并给出大拇指朝下的手势。","reminders":["融入邪恶","无技能"],"setup":false,"ability":"游戏开始时，说书人告知你一个词语。第一名说出该词语的善良玩家，在当晚加入邪恶阵营。"},{"id":"mezepheles","name":"言灵师","edition":"","team":"minion","firstNight":27,"firstNightReminder":"向言灵师展示秘密词语。","otherNight":19,"otherNightReminder":"唤醒第一名说出言灵师秘密词语的善良玩家，向他展示“你是”卡，并给出大拇指朝下的手势。","reminders":["融入邪恶","无技能"],"setup":false,"ability":"游戏开始时，说书人告知你一个词语。第一名说出该词语的善良玩家，在当晚加入邪恶阵营。"},{"id":"marionette","name":"傀儡","edition":"","team":"minion","firstNight":11,"firstNightReminder":"选择一名与恶魔相邻的善良玩家并放置傀儡的提示标志，唤醒恶魔并告知他谁是傀儡","otherNight":0,"otherNightReminder":"","reminders":[],"remindersGlobal":["傀儡"],"setup":true,"ability":"你认为你是一个善良身份，但其实你不是。恶魔知道你是谁。[傀儡与恶魔相邻]"},{"id":"boomdandy","name":"炸弹客","edition":"","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"当你被处决时，杀害若干玩家直到剩下3名玩家存活。1分钟后，所有玩家互相投票，票数最多的玩家死亡。"},{"id":"lilmonsta","name":"罪孽之种","edition":"","team":"demon","firstNight":16,"firstNightReminder":"同时唤醒所有爪牙，让他们通过指向来投票决定谁来保管罪孽之种。","otherNight":36,"otherNightReminder":"同时唤醒所有爪牙，让他们通过指向来投票决定谁来保管罪孽之种。说书人选择一名玩家杀害。","reminders":[],"remindersGlobal":["恶魔寄生","被杀害"],"setup":true,"ability":"每个夜晚，爪牙们选择谁来保管罪孽之种，该玩家被视为恶魔。每个夜晚*，一名玩家被杀害。[+1爪牙]"},{"id":"lleech","name":"噬脑魔","edition":"","team":"demon","firstNight":15,"firstNightReminder":"噬脑魔指向一名玩家，在他旁边放置中毒&宿主标记。","otherNight":35,"otherNightReminder":"噬脑魔指向一名玩家将他杀害。","reminders":["被杀害","中毒&宿主"],"setup":false,"ability":"每个夜晚*，选择一名玩家，将他杀害。游戏开始时，你选择一名活着的玩家，他中毒。当他死亡时，你死亡，他存活时，你不能死亡。"},{"id":"alhadikhia","name":"血肉囚笼","edition":"","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":33,"otherNightReminder":"血肉囚笼选择三名玩家。唤醒第一名玩家，点头代表选择生，摇头代表选择死，让他闭上眼睛然后唤醒下一名玩家，如此反复。如果三名玩家都选择生，三名玩家都死亡。","reminders":["1","2","3","选择死","选择生"],"setup":false,"ability":"每个夜晚*，选择三名玩家（他们彼此互知），他们私下决定自己今晚是生是死，如果全部选择了生，他们全部死亡。"},{"id":"legion","name":"军团","edition":"","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":34,"otherNightReminder":"说书人可以选择一名玩家，将他杀害","reminders":["被杀害","将死之人"],"setup":true,"ability":"每个夜晚*，可能有一名玩家被杀害。如果只有邪恶玩家投票，处决会失败。你同时被视为爪牙。[半数以上玩家为军团]"},{"id":"leviathan","name":"利维坦","edition":"","team":"demon","firstNight":52,"firstNightReminder":"放置第一天标记。告知玩家利维坦在游戏中，现在是第一天。","otherNight":72,"otherNightReminder":"将天数标记更换为下一天。","reminders":["第一天","第二天","第三天","第四天","第五天","善良玩家被处决"],"setup":false,"ability":"如果超过一名善良阵营玩家被处决，邪恶阵营获胜。所有玩家都知道你在游戏中。第五个白天结束时，邪恶阵营获胜。"},{"id":"riot","name":"暴乱","edition":"","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":true,"ability":"被提名的玩家死亡，但是可以立刻再度发起提名（第三天必须这么做），第三个白天结束时，邪恶阵营获胜。[所有的爪牙变为暴乱]"},{"id":"gangster","name":"歹徒","edition":"","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"每个白天，你可以杀害一名你两侧最近的活着的玩家，但需要另一侧的玩家同意。"},{"id":"clone_bge","name":"克隆人","edition":"bge","team":"townsfolk","firstNight":9,"firstNightReminder":"唤醒克隆人，指向被放置了克隆标记的玩家并展示他的身份标记。","otherNight":0,"otherNightReminder":"","reminders":["克隆"],"setup":false,"ability":"游戏开始时，你得知一名村民玩家和他的身份，当他第一次死亡时，你代替他死亡。"},{"id":"mobster_bge","name":"匪徒","edition":"bge","team":"townsfolk","firstNight":11,"firstNightReminder":"唤醒匪徒，并向匪徒展示本局游戏存在的外来者身份。","otherNight":4,"otherNightReminder":"如果一名外来者在白天死亡，匪徒在今晚不会死亡。","reminders":["安全","白天死亡"],"setup":true,"ability":"游戏开始时，你得知本局游戏存在的外来者身份。如果一名外来者在白天死亡，你在当晚不会死亡。[+1外来者]"},{"id":"contessa_bge","name":"怪杰","edition":"bge","team":"townsfolk","firstNight":10,"firstNightReminder":"唤醒怪杰，并向怪杰展示一个或者更多本局游戏存在的外来者身份，如果本局游戏没有外来者，向他摇头以告知无外来者。","otherNight":21,"otherNightReminder":"如果一名外来者在白天死亡，唤醒怪杰，并告知怪杰场上还有多少名外来者存活。","reminders":["白天死亡"],"setup":true,"ability":"游戏开始时，你得知本局游戏存在的至少一名外来者。（或得知无外来者）如果一名外来者在白天死亡，你在当晚得知场上还有多少外来者存活。[±1外来者]"},{"id":"publicdefender_bge","name":"辩护人","edition":"bge","team":"townsfolk","firstNight":16,"firstNightReminder":"辩护人指向一名存活玩家，如果那名玩家属于善良阵营，为他放置无法处决标记。","otherNight":16,"otherNightReminder":"辩护人指向一名存活玩家，如果那名玩家属于善良阵营，为他放置无法处决标记。","reminders":["无法处决"],"setup":false,"ability":"每个夜晚，选择一名存活玩家，如果他在明天被处决，并且他属于善良阵营，他不会死亡。"},{"id":"demagogue_bge","name":"煽动者","edition":"bge","team":"townsfolk","firstNight":17,"firstNightReminder":"煽动者指向一名玩家，为那名玩家放置煽动标记。","otherNight":17,"otherNightReminder":"唤醒煽动者，告知煽动者有多少名邪恶玩家向拥有煽动标记的玩家投票，并移除煽动标记。然后煽动者指向一名玩家，为那名玩家放置煽动标记。","reminders":["煽动"],"setup":false,"ability":"每个夜晚，选择一名玩家，下个夜晚，你得知上个白天有多少邪恶玩家向他投票。"},{"id":"octovore_bge","name":"哈姆","edition":"bge","team":"townsfolk","firstNight":11,"firstNightReminder":"哈姆指向一名玩家，如果那名玩家属于邪恶阵营，唤醒那名玩家，并向他展示哈姆的身份标志，同时指向哈姆。","otherNight":9,"otherNightReminder":"哈姆指向一名与上一夜不同的玩家，如果那名玩家属于邪恶阵营，唤醒那名玩家，并向他展示哈姆的身份标志，同时指向哈姆。","reminders":["中毒"],"setup":false,"ability":"每个夜晚，选择一名玩家(需与上一夜不同)，如果你选择了一名邪恶玩家，他得知你是谁，并中毒直到下个黄昏。"},{"id":"tombspitter_bge","name":"死灵法师","edition":"bge","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":10,"otherNightReminder":"死灵法师指向一名存活玩家，为该玩家放置死灵术标记，如果那名玩家在当晚被恶魔杀害，一名其他玩家可能复活，如果有玩家复活，为那名复活的玩家放置中毒标记与复活标记。","reminders":["死灵术","复活","中毒"],"setup":false,"ability":"每个夜晚*，选择一名存活玩家，如果他在当晚被恶魔杀害，一名死亡的玩家可能复活，并中毒直到下个黄昏。"},{"id":"auspex_bge","name":"知来鸟","edition":"bge","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":18,"otherNightReminder":"知来鸟不使用技能或指向一名玩家，如果指向了一名玩家，向他展示两个身份标志，其中一个身份标志为被指向的玩家的身份。如果知来鸟上次放弃了选择，指向三名玩家并展示四个身份，其中三个为被指向的玩家的身份。","reminders":["选择三名"],"setup":false,"ability":"每个夜晚*，你可以选择一名玩家，并得知两个身份，其中一个是他的真实身份。如果你上次放弃了选择，改为选择三个玩家并展示四个身份，其中三个是他们的真实身份。"},{"id":"doubleagent_bge","name":"双面间谍","edition":"bge","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":20,"otherNightReminder":"唤醒双面间谍，依次指向每名死亡的玩家，并向双面间谍展示他们的身份标志，同时告知双面间谍该玩家的阵营，大拇指朝上代表善良阵营，朝下代表邪恶阵营。","reminders":[],"setup":false,"ability":"每个夜晚*，你得知所有死亡的玩家的阵营和身份。你可能被视为一名邪恶的爪牙或恶魔，即使你已经死亡。"},{"id":"darkpassenger_bge","name":"夜行者","edition":"bge","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":22,"otherNightReminder":"唤醒夜行者，告知他有多少玩家的技能造成了一人以上的死亡。","reminders":["满手杀孽"],"setup":false,"ability":"每个夜晚*，你得知有多少玩家的技能造成了一人以上的死亡。如果你被这些玩家提名并处决，你不会死亡。"},{"id":"hitman_bge","name":"猎杀者","edition":"bge","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["猜测正确","中毒"],"setup":false,"ability":"每个白天，你可以公开猜测一名玩家的身份，如果你猜对，他从当晚开始中毒，直到明天的黄昏。"},{"id":"architect_bge","name":"策划者","edition":"bge","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":19,"otherNightReminder":"如果一名爪牙在白天被处决，唤醒策划者并指向一名不是恶魔的玩家。","reminders":["爪牙死亡","得知"],"setup":false,"ability":"每个夜晚，如果一名爪牙在白天被处决，你得知一名不是恶魔的玩家。"},{"id":"revenant_bge","name":"归来者","edition":"bge","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":23,"otherNightReminder":"如果白天无人被处决，并且归来者只是假死实际上没有死亡，你可以将他复活。","reminders":["假死","复活"],"setup":false,"ability":"当你第一次死亡时，你仍然存活，但被视为死亡，每个夜晚，如果今天白天无人死亡，你可能解除假死状态。"},{"id":"hex_bge","name":"巫婆","edition":"bge","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":6,"otherNightReminder":"拥有提名者标记的玩家可能死亡。","reminders":["提名者","死亡"],"setup":false,"ability":"提名你的玩家可能会在当晚死亡。"},{"id":"specter_bge","name":"无害游魂","edition":"bge","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":7,"otherNightReminder":"当无害游魂死亡时并且没有其他无害游魂在游戏中，选择一名村民，将他变为无害游魂，唤醒新的无害游魂并向他展示“你是”卡和无害游魂的身份标志。","reminders":["已侵染"],"setup":false,"ability":"当无害游魂第一次死亡时，一名村民在当晚变为无害游魂。"},{"id":"cyclox_bge","name":"回环","edition":"bge","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["混沌降临"],"setup":false,"ability":"当你死亡时，村民的能力从当晚开始获取错误信息，直到明天的黄昏。"},{"id":"hanabi_bge","name":"花火","edition":"bge","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["死亡"],"setup":false,"ability":"如果你对“本局存在花火”疯狂，你可能被处决。当你被处决时，一名与你相邻的村民死亡。"},{"id":"thug_bge","name":"恶棍","edition":"bge","team":"minion","firstNight":5,"firstNightReminder":"唤醒邪恶的村民玩家并向他展示“你是”卡和向下的大拇指，然后指向恶棍并向他展示恶棍的身份标志。","otherNight":0,"otherNightReminder":"","reminders":["邪恶","中毒"],"setup":true,"ability":"一名村民加入邪恶阵营，并得知你是谁，如果他死亡，一名与他相邻的村民中毒。[一名村民加入邪恶阵营]"},{"id":"fugitive_bge","name":"逃亡者","edition":"bge","team":"minion","firstNight":5,"firstNightReminder":"在爪牙们得知彼此是谁后，向每名爪牙展示两个不在场的身份标志。每名爪牙获取的被展示的身份可能相同也可能不同，也可能与恶魔得知的身份相同或不同。","otherNight":0,"otherNightReminder":"","reminders":[],"setup":true,"ability":"游戏开始时，爪牙们得知两个不在场的身份。你可能被视为一名善良的村民或外来者，即使你已经死亡。[+1外来者]"},{"id":"gravedigger_bge","name":"掘墓人","edition":"bge","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":8,"otherNightReminder":"向掘墓人展示今天白天被处决的玩家的身份，如果掘墓人点头，为这名玩家放置将归标记并为掘墓人放置中毒标记，这名玩家在明晚复活并加入邪恶阵营，届时为他放置邪恶标记。","reminders":["处决","将归","复活","邪恶","中毒"],"setup":false,"ability":"每个夜晚*，你得知今天被处决的玩家的身份。如果你曾在该玩家的处决中投票，并且该玩家不是恶魔，你可以在当晚决定让他在明晚复活，复活后，他将加入你的阵营，然后你中毒。"},{"id":"guru_bge","name":"古鲁","edition":"bge","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":15,"otherNightReminder":"如果古鲁在今天死亡，唤醒他并让他指向一名玩家，杀害被他指向的玩家并展示该玩家的身份标志。","reminders":["被杀害"],"setup":false,"ability":"当你死亡时，当晚，选择一名玩家，得知他的身份并将他杀害。"},{"id":"landlord_bge","name":"鬼屋之主","edition":"bge","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":12,"otherNightReminder":"移除先前醉酒的玩家的醉酒标记。鬼屋之主指向两名玩家，其中一名被杀害，为另外一名放置醉酒标记。","reminders":["被杀害","醉酒"],"setup":false,"ability":"每个夜晚*，你可以选择两名玩家，其中一名醉酒到下个黄昏，另外一名被杀害。"},{"id":"highroller_bge","name":"骰子鬼","edition":"bge","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":13,"otherNightReminder":"骰子鬼指向一名玩家并指向身份表上的一个身份，那名玩家被杀害，如果他猜测正确，你点头并让他再指向一名玩家，那名玩家也被杀害，否则你摇头。","reminders":["被杀害"],"setup":false,"ability":"每个夜晚*，你可以选择一名玩家并猜测他的身份。如果你猜测正确，再杀害一名其他玩家。"},{"id":"gardener_bge","name":"莳魂人","edition":"bge","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":14,"otherNightReminder":"莳魂人指向一名玩家，将那名玩家杀害。如果莳魂人第一次死亡并且场上存活玩家数量大于等于五人且没有莳魂人，一名爪牙变为新的莳魂人，当晚，唤醒那名爪牙并展示“你是”卡和莳魂人的身份标志。","reminders":["被杀害","灵魂转移"],"setup":false,"ability":"每个夜晚*，你可以选择一名玩家，将他杀害。当你第一次死亡时，如果仍有五名以上玩家存活，一名爪牙变为莳魂人。"},{"id":"machinist_bge","name":"疯狂博士","edition":"bge","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":11,"otherNightReminder":"疯狂博士指向一名玩家或不使用技能，如果他指向了一名玩家，将那名玩家杀害。如果疯狂博士上次没有指向玩家，改为指向三名玩家，他指向的第一名玩家被杀害，另外两名玩家随时可能死亡。","reminders":["被杀害","随时死亡","蓄力完成！"],"setup":false,"ability":"每个夜晚*，你可以选择一名玩家。将他杀害，如果你上次放弃了选择，改为选择三名玩家。你选择的第一名玩家被你杀害，另外两名玩家随时可能死亡。"},{"id":"broker_lse","name":"经纪人","edition":"lse","team":"townsfolk","firstNight":8,"firstNightReminder":"在恶魔信息期间，改为提供给恶魔四个身份，其中两个身份在场，两个身份不在场。并在在场的身份旁放置在场标记。","otherNight":25,"otherNightReminder":"如果经纪人死亡，向恶魔展示两个放置了在场标记的身份标志。","reminders":["在场"],"setup":false,"ability":"游戏开始时，恶魔将得知四个身份作为开局信息，但其中两个实际上存在于游戏中，当你死亡时，当晚，他得知哪两个在游戏中。"},{"id":"tattletale_lse","name":"侃山客","edition":"lse","team":"townsfolk","firstNight":11,"firstNightReminder":"在一名玩家的身份标志旁放置在场标记，然后向侃山客展示拥有在场标记的身份和一个不在场身份的标志。","otherNight":0,"otherNightReminder":"","reminders":["在场"],"setup":false,"ability":"游戏开始时，你得知两个身份，其中有且只有一个存在游戏中。"},{"id":"postmaster_lse","name":"信使","edition":"lse","team":"townsfolk","firstNight":12,"firstNightReminder":"唤醒信使，并向他展示一个不在场的身份标志。","otherNight":27,"otherNightReminder":"唤醒信使，并向他展示一个不在场的身份标志。","reminders":[],"setup":false,"ability":"每个夜晚，你得知一个不在游戏中的身份。"},{"id":"bootblack_lse","name":"鞋匠","edition":"lse","team":"townsfolk","firstNight":13,"firstNightReminder":"唤醒鞋匠，告知他有多少名存活的外来者与邪恶玩家相邻。","otherNight":28,"otherNightReminder":"唤醒鞋匠，告知他有多少名存活的外来者与邪恶玩家相邻。","reminders":[],"setup":true,"ability":"每个夜晚，你得知有多少名存活的外来者与邪恶玩家相邻。[+1外来者]"},{"id":"smuggler_lse","name":"走私犯","edition":"lse","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":15,"otherNightReminder":"走私犯指向任意数量的玩家，如果其中有两名以上邪恶玩家，走私犯死亡。","reminders":["死亡"],"setup":false,"ability":"每个夜晚*，选择任意数量的玩家，如果他们其中有两名以上玩家属于邪恶阵营，你死亡。"},{"id":"thespian_lse","name":"演员","edition":"lse","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":14,"otherNightReminder":"演员指向一名玩家，如果那名玩家是恶魔，演员死亡，并在魔典中央放置安全标记。","reminders":["死亡","安全"],"setup":false,"ability":"每个夜晚*，选择一名玩家，如果他是恶魔，你死亡，并阻止今晚的其他死亡。"},{"id":"pessimist_lse","name":"厌世者","edition":"lse","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":13,"otherNightReminder":"厌世者指向两名玩家，你指向你认为更有可能在今晚死亡的玩家。","reminders":[],"setup":false,"ability":"每个夜晚*，选择两名玩家，你得知他们两名玩家中，哪名更有可能在今晚死亡。"},{"id":"understudy_lse","name":"替身","edition":"lse","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":11,"otherNightReminder":"替身指向一名玩家，为那名玩家放置替身标记。","reminders":["替身","死亡"],"setup":false,"ability":"每个夜晚*，选择一名玩家，如果他在今晚死亡，你代替他死亡并且他将得知被保护。"},{"id":"matchmaker_lse","name":"媒婆","edition":"lse","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":16,"otherNightReminder":"媒婆指向两名存活玩家，如果他们不属于同一阵营，其中一名玩家死亡。","reminders":["死亡"],"setup":false,"ability":"每个夜晚*，你可以选择两名存活的其他玩家，如果他们不属于同一阵营，其中一名玩家死亡。"},{"id":"witness_lse","name":"目击者","edition":"lse","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":29,"otherNightReminder":"唤醒目击者，指向一名在今晚死亡的玩家，并指向身份表格上导致他死亡的对应身份类型。","reminders":["醉酒"],"setup":false,"ability":"每个夜晚*，你得知一名玩家是由于哪个身份类型的技能而死亡。如果你成为了其他玩家的技能目标，你醉酒直到拂晓。"},{"id":"lamplighter_lse","name":"点灯人","edition":"lse","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":10,"otherNightReminder":"点灯人指向一名玩家，为该玩家放置光源标记，那名玩家和在今晚选择了该玩家的玩家（不包括你自己），在今晚不会死亡。","reminders":["光源","安全"],"setup":false,"ability":"每个夜晚*，选择一名其他玩家，该玩家和在今晚选择了该玩家的玩家（不包括你自己），在今晚不会死亡。"},{"id":"chauffeur_lse","name":"司机","edition":"lse","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":12,"otherNightReminder":"司机指向一名与上一夜不同的存活玩家，如果那名玩家是村民，为司机放置安全标记。","reminders":["安全","被选择"],"setup":false,"ability":"每个夜晚*，选择一名存活的其他玩家（需与上一夜不同），如果他是村民，你在今晚不会死亡。"},{"id":"inquisitor_lse","name":"审判官","edition":"lse","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["死亡","无技能"],"setup":false,"ability":"整局游戏限一次，白天，你可以公开询问一名玩家一个是/否问题，如果他没有如实回答，他将会在当晚死亡。"},{"id":"snakebite_lse","name":"毒蛇","edition":"lse","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":17,"otherNightReminder":"被毒蛇选择的玩家可能死亡，即使他们不能死亡。","reminders":[],"remindersGlobal":["毒蛇","死亡","被选择"],"setup":true,"ability":"你认为你是一名村民，尽管你不是，但你拥有他的技能。每个夜晚*，被你选择的玩家可能会死亡，即使他们免疫死亡。"},{"id":"pariah_lse","name":"遭弃者","edition":"lse","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":8,"otherNightReminder":"如果遭弃者在白天被处决，唤醒他并向他展示“你是”卡和向下的大拇指。","reminders":["邪恶"],"setup":false,"ability":"如果你被处决，你加入邪恶阵营。"},{"id":"rabblerouser_lse","name":"暴民","edition":"lse","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["被替换"],"setup":false,"ability":"当与你相邻的存活玩家发动技能时，如果他选择了一名或多名玩家，你可能被替换为他的一个技能目标。"},{"id":"curator_lse","name":"博物馆长","edition":"lse","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":26,"otherNightReminder":"如果博物馆长被放置了今晚改变标记，当晚，恶魔被唤醒并指向一名玩家和一个身份表格上的非恶魔身份，如果该身份不在游戏中，那名玩家变为该身份。","reminders":["今晚改变"],"setup":false,"ability":"如果你死亡，当晚，恶魔可以选择一名玩家和一个非恶魔身份，那名玩家变为该身份。（如果该身份不在游戏中）"},{"id":"omen_lse","name":"噩兆","edition":"lse","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["？"],"setup":false,"ability":"你所疯狂的事情可能会变为现实。"},{"id":"gorgon_lse","name":"美杜莎","edition":"lse","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":18,"otherNightReminder":"唤醒美杜莎，并指向每一名被放置了凝视标记的玩家，美杜莎可以指向其中一名玩家并将他杀害，或者摇头放弃使用技能。","reminders":["凝视","被杀害"],"setup":false,"ability":"每个夜晚*，你得知今天有哪些玩家选择过你作为技能目标（从拂晓开始算起），你可以选择其中一名玩家杀害。"},{"id":"crescendo_lse","name":"残响","edition":"lse","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":19,"otherNightReminder":"如果残响在白天因处决而死亡，唤醒他，如果他点头，为今晚将要死亡的玩家放置休止符标记，他们在明晚死亡，并且额外有一名玩家也会在明晚死亡。如果他摇头，不发生任何事情。","reminders":["被处决","休止符","被杀害"],"setup":false,"ability":"如果你死于处决，今晚，你可以将今晚死亡的玩家改为在明晚死亡，并且会有一名其他玩家在明晚死亡。"},{"id":"tarantella_lse","name":"毒舞者","edition":"lse","team":"minion","firstNight":9,"firstNightReminder":"唤醒毒舞者，并向他展示当前中毒的玩家的身份标志。","otherNight":9,"otherNightReminder":"唤醒毒舞者，并向他展示当前中毒的玩家的身份标志。","reminders":["中毒"],"setup":false,"ability":"一名存活玩家中毒，你知道因你的技能而中毒的玩家的身份。如果他成为了村民的技能目标，中毒转移到选择他的玩家。"},{"id":"deathgripp_lse","name":"死之握","edition":"lse","team":"demon","firstNight":10,"firstNightReminder":"死之握指向一名玩家，为那名玩家放置将死之人标记。","otherNight":20,"otherNightReminder":"如果放置了将死之人标记的玩家仍然存活，他被杀害，否则一名与他相邻的村民被杀害。死之握指向一名玩家，为那名玩家放置将死之人标记。","reminders":["将死之人","被杀害"],"setup":false,"ability":"每个夜晚，选择一名玩家。如果你上一夜选择的玩家仍然存活，将他杀害，否则，一名与他相邻的村民杀害。"},{"id":"grist_lse","name":"石像鬼","edition":"lse","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":23,"otherNightReminder":"石像鬼指向一名玩家，将那名玩家杀害。","reminders":["石像鬼","被杀害"],"setup":false,"ability":"每个夜晚*，选择一名玩家，将他杀害。当你由于技能而死亡时，一名爪牙变为新的邪恶的石像鬼。"},{"id":"venividivici_lse","name":"三相","edition":"lse","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":21,"otherNightReminder":"三相指向一名玩家，将那名玩家杀害，如果三相杀害了自己，并且场上已经没有外来者存活，邪恶阵营获胜。","reminders":["被杀害"],"setup":true,"ability":"每个夜晚*，选择一名玩家，将他杀害。如果你杀害了自己，并且场上没有外来者存活，邪恶方获胜。[本局游戏固定为3名外来者]"},{"id":"spree_lse","name":"狂戮","edition":"lse","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":22,"otherNightReminder":"狂戮点头并指向一名玩家并指向身份表格上的一个身份，他可以重复这个动作数次，直到他摇头为止。如果他猜测全部正确，这些玩家全部被杀害。如果狂戮没有选择任何玩家，说书人选择一名玩家杀害。","reminders":["被杀害"],"setup":false,"ability":"每个夜晚*，你可以选择任意数量的玩家，并猜测他们的身份，如果你猜对了他们的身份，将他们全部杀害。如果你放弃选择，一名玩家被杀害。"},{"id":"receptionist_aoi","name":"接待员","edition":"aoi","team":"townsfolk","firstNight":26,"firstNightReminder":"唤醒接待员并向同时他展示两个放置了已登记标记的身份标志，以及两个不在场身份，这些身份的类型需各不相同，如果接待员陷入了癫狂，展示四个不在场身份。","otherNight":0,"otherNightReminder":"","reminders":["已登记"],"setup":false,"ability":"游戏开始时，你得知每种身份类型各一个身份。这些身份里只有两个身份在游戏中。如果你陷入癫狂，这些身份都不在游戏中。"},{"id":"detective_aoi","name":"侦探","edition":"aoi","team":"townsfolk","firstNight":27,"firstNightReminder":"唤醒侦探并向他展示一个在游戏中的爪牙身份标志。","otherNight":22,"otherNightReminder":"如果侦探在今晚死亡，唤醒侦探并向他展示一个在游戏中的恶魔身份标志。","reminders":[],"setup":false,"ability":"游戏开始时，你得知一个在游戏中的爪牙身份。当你在夜晚死亡时，得知一个在游戏中的恶魔身份。"},{"id":"scholar_aoi","name":"学士","edition":"aoi","team":"townsfolk","firstNight":17,"firstNightReminder":"学士不使用技能或选择一名玩家，如果他选择了一名玩家，告知学士这名玩家的阵营，并为一名玩家放置癫狂标记。","otherNight":13,"otherNightReminder":"学士不使用技能或选择一名玩家，如果他选择了一名玩家，告知学士这名玩家的阵营，并为一名玩家放置癫狂标记。","reminders":["癫狂"],"setup":false,"ability":"每个夜晚，你可以选择一名玩家，得知他的阵营，然后一名玩家陷入癫狂。"},{"id":"psychologist_aoi","name":"心理医生","edition":"aoi","team":"townsfolk","firstNight":19,"firstNightReminder":"唤醒心理医生并让他指向两名玩家，如果他们都属于善良阵营，移除他们的癫狂标记。","otherNight":15,"otherNightReminder":"唤醒心理医生并让他指向两名玩家，如果他们都属于善良阵营，移除他们的癫狂标记。","reminders":[],"setup":false,"ability":"每个夜晚，选择两名玩家，如果他们都属于善良阵营，使他们恢复理智。"},{"id":"ghosthunter_aoi","name":"抓鬼人","edition":"aoi","team":"townsfolk","firstNight":22,"firstNightReminder":"唤醒抓鬼人，并告知他与邪恶玩家相邻的癫狂玩家数量。","otherNight":18,"otherNightReminder":"唤醒抓鬼人，并告知他与邪恶玩家相邻的癫狂玩家数量。","reminders":[],"setup":false,"ability":"每个夜晚，你得知有多少名癫狂玩家与邪恶玩家相邻。"},{"id":"archivist_aoi","name":"卷宗管理员","edition":"aoi","team":"townsfolk","firstNight":24,"firstNightReminder":"唤醒卷宗管理员，并让他选择一个身份，如果他选中了一个在游戏中的身份，指向三名玩家，其中一名是该身份。否则，指向三名随机玩家。","otherNight":20,"otherNightReminder":"唤醒卷宗管理员，并让他选择一个身份，如果他选中了一个在游戏中的身份，指向三名玩家，其中一名是该身份。否则，指向三名随机玩家。","reminders":[],"setup":false,"ability":"每个夜晚，选择一个其他身份，如果该身份在游戏中，你得知三个玩家，他们其中一人为该身份。如果不在游戏中，你今晚的信息将随机获取。"},{"id":"researcher_aoi","name":"研究员","edition":"aoi","team":"townsfolk","firstNight":25,"firstNightReminder":"唤醒研究员，并告知他一名相邻存活玩家的身份类型。","otherNight":21,"otherNightReminder":"唤醒研究员，并告知他一名相邻存活玩家的身份类型。","reminders":[],"setup":false,"ability":"每个夜晚，你得知一名相邻存活玩家的身份类型。"},{"id":"astrologer_aoi","name":"占星师","edition":"aoi","team":"townsfolk","firstNight":23,"firstNightReminder":"唤醒占星师，并指向三名不是同一阵营的玩家。","otherNight":19,"otherNightReminder":"唤醒占星师，并指向三名不是同一阵营的玩家。","reminders":[],"setup":false,"ability":"每个夜晚，你得知三名玩家，他们来自不同阵营。"},{"id":"numerologist_aoi","name":"灵数师","edition":"aoi","team":"townsfolk","firstNight":20,"firstNightReminder":"唤醒灵数师，告知他场上有多少对相邻的癫狂玩家。","otherNight":16,"otherNightReminder":"唤醒灵数师，告知他场上有多少对相邻的癫狂玩家。","reminders":[],"setup":false,"ability":"每个夜晚，你得知场上有多少对相邻的癫狂玩家。你不会因为癫狂获取错误信息。"},{"id":"conservator_aoi","name":"博物馆员","edition":"aoi","team":"townsfolk","firstNight":18,"firstNightReminder":"如果与博物馆员相邻的善良玩家癫狂，移除他们的癫狂标记，并将恢复理智标记放置在他的身份标志旁，如果有玩家拥有恢复理智标记，唤醒博物馆员并点头告知他有人恢复理智，否则摇头。","otherNight":14,"otherNightReminder":"如果与博物馆员相邻的善良玩家癫狂，移除他们的癫狂标记，并将恢复理智标记放置在他的身份标志旁，如果有玩家拥有恢复理智标记，唤醒博物馆员并点头告知他有人恢复理智，否则摇头。","reminders":["恢复理智"],"setup":false,"ability":"每个夜晚，与你相邻的存活善良玩家会恢复理智。你得知你的技能是否触发。"},{"id":"psychologist_aoi","name":"心理医生","edition":" ","team":"townsfolk","firstNight":19,"firstNightReminder":"唤醒心理医生并让他指向两名玩家，如果他们都属于善良阵营，移除他们的癫狂标记。","otherNight":15,"otherNightReminder":"唤醒心理医生并让他指向两名玩家，如果他们都属于善良阵营，移除他们的癫狂标记。","reminders":[],"setup":false,"ability":"每个夜晚，选择两名玩家，如果他们都属于善良阵营，使他们恢复理智。"},{"id":"assistant_aoi","name":"助理","edition":"aoi","team":"townsfolk","firstNight":16,"firstNightReminder":"助理不使用技能或选择一名玩家，如果他指向了一名玩家，为助理放置无技能标记，为他选择的玩家放置理智&正确标记并移除癫狂标记，唤醒那名玩家并向他展示“这个身份选择了你”卡与助理的身份标志。","otherNight":12,"otherNightReminder":"助理不使用技能或选择一名玩家，如果他指向了一名玩家，为助理放置无技能标记，为他选择的玩家放置理智&正确标记并移除癫狂标记，唤醒那名玩家并向他展示“这个身份选择了你”卡与助理的身份标志。","reminders":["无技能","清醒&理智"],"setup":false,"ability":"整局游戏限一次，夜晚，选择一名玩家，使他恢复理智，并且必定在今晚获取正确信息。他知道自己成为了助理的目标。"},{"id":"analyst_aoi","name":"分析师","edition":"aoi","team":"townsfolk","firstNight":21,"firstNightReminder":"如果技能未使用，唤醒分析师，如果他点头，指向每名放置了癫狂标记的玩家（可能会多一名或少一名玩家）。","otherNight":17,"otherNightReminder":"如果技能未使用，唤醒分析师，如果他点头，指向每名放置了癫狂标记的的玩家（可能会多一名或少一名玩家）。","reminders":["无技能"],"setup":false,"ability":"整局游戏限一次，夜晚，你可以获得一份陷入癫狂的玩家名单（不包括你自己）。但其中可能有一名玩家并未癫狂。"},{"id":"oneirocritic_aoi","name":"解梦师","edition":"aoi","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"如果你在夜晚死亡，下个白天，你可以拜访说书人并从那里获取两条正确信息。"},{"id":"befuddled_aoi","name":"患者:痴呆","edition":"aoi","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"当你存活时，你的精神状况可能会被误判。当你死亡时，与你相邻的玩家的精神状况可能会被误判。"},{"id":"obsessed_aoi","name":"患者:偏执","edition":"aoi","team":"outsider","firstNight":15,"firstNightReminder":"为一名村民放置癫狂标记与无法解除标记。","otherNight":23,"otherNightReminder":"如果拥有无法解除标记的玩家死亡，唤醒患者:偏执并向他展示该玩家的身份标志。","reminders":["癫狂","无法解除"],"setup":false,"ability":"一名村民陷入癫狂，并且无法恢复理智。当他死亡时，你得知他的身份。"},{"id":"sacrifice_aoi","name":"患者:狂祭","edition":"aoi","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["癫狂"],"setup":false,"ability":"当你死亡时，一名玩家的精神状况改变。"},{"id":"architect_aoi","name":"患者:臆想","edition":"aoi","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":10,"otherNightReminder":"当患者:臆想死亡时，放置幻象崩溃标记。如果存在幻象崩溃标记，唤醒恶魔，让他指向一名玩家并指向身份表格上的一个非恶魔身份，如果该身份不在游戏中，那名玩家变为该身份。","reminders":["幻象崩溃"],"setup":false,"ability":"如果你死亡，当晚，恶魔可以选择一名玩家和一个非恶魔身份，如果该身份不在游戏中，那名玩家变为该身份。"},{"id":"avatar_aoi","name":"化形者","edition":"aoi","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":8,"otherNightReminder":"如果恶魔放置了他自己的杀害标记，向化形者展示“你是”卡以及当晚死亡的恶魔身份标志，并为化形者放置恶魔标记。","reminders":["恶魔"],"setup":false,"ability":"当恶魔由于自身的技能而死亡时，你变为恶魔。你可能被视为一名善良的村民或外来者。"},{"id":"ritualist_aoi","name":"邪祭师","edition":"aoi","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["癫狂"],"setup":false,"ability":"如果一名邪恶玩家被提名，提名者陷入癫狂。"},{"id":"bookbinder_aoi","name":"人皮启示录","edition":"aoi","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":9,"otherNightReminder":"如果一名外来者死亡，为与他相邻的村民放置癫狂标记，如果已经放置癫狂标记，移除他的癫狂标记","reminders":["癫狂"],"setup":true,"ability":"当一名外来者死亡时，与他相邻的村民的精神状况改变。[+1外来者]"},{"id":"corruptor_aoi","name":"腐化之源","edition":"aoi","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["癫狂","无法解除"],"setup":false,"ability":"与你相邻的村民陷入癫狂，并且无法恢复理智。"},{"id":"eye_aoi","name":"全视之眼","edition":"aoi","team":"demon","firstNight":12,"firstNightReminder":"向全视之眼展示魔典，并让他选择一名玩家陷入癫狂。","otherNight":4,"otherNightReminder":"全视之眼指向一名玩家，那名玩家被杀害。","reminders":["癫狂","被杀害"],"setup":true,"ability":"每个夜晚*，选择一名玩家，将他杀害。第一个夜晚，你查看魔典并选择一名玩家，他陷入癫狂。[-1外来者]"},{"id":"spira_aoi","name":"真理之环","edition":"aoi","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":5,"otherNightReminder":"真理之环指向一名玩家，那名玩家被杀害。","reminders":["被杀害"],"setup":false,"ability":"每个夜晚*，选择一名玩家，将他杀害。癫狂玩家获取正确信息，未癫狂玩家获取错误信息。"},{"id":"web_aoi","name":"结命之网","edition":"aoi","team":"demon","firstNight":13,"firstNightReminder":"移除一名玩家的癫狂标记并放置今晚恢复标记，并为一名未癫狂的玩家放置癫狂标记与今晚癫狂标记。","otherNight":6,"otherNightReminder":"移除一名玩家的癫狂标记并放置今晚恢复标记，并为一名未癫狂的玩家放置癫狂标记与今晚癫狂标记。然后让结命之网指向一名玩家，那名玩家被杀害。","reminders":["癫狂","今晚恢复","今晚癫狂","被杀害"],"setup":false,"ability":"每个夜晚*，选择一名玩家，将他杀害。每个夜晚，一名玩家恢复理智，另一名玩家陷入癫狂。"},{"id":"buried_aoi","name":"湮生之冢","edition":"aoi","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":7,"otherNightReminder":"湮生指向一名玩家，那名玩家被杀害。并为一名与他相邻的村民放置癫狂标记。","reminders":["癫狂","被杀害"],"setup":true,"ability":"每个夜晚*，选择一名玩家，将他杀害。一名与他相邻的村民陷入癫狂。[+1外来者]"},{"id":"curator_aoi","name":"美术馆长","edition":"aoi","team":"traveler","firstNight":11,"firstNightReminder":"唤醒美术馆长并让他指向一名玩家，然后唤醒那名玩家，向他展示“这个身份选择了你”卡和美术馆长的身份标志，如果他摇头，不会发生任何事情。如果他点头，再次唤醒美术馆长，告知他该玩家的精神状况，然后，你可以改变该玩家的精神状况。","otherNight":2,"otherNightReminder":"唤醒美术馆长并让他指向一名玩家，然后唤醒那名玩家，向他展示“这个身份选择了你”卡和美术馆长的身份标志，如果他摇头，不会发生任何事情。如果他点头，再次唤醒美术馆长，告知他该玩家的精神状况，然后，你可以改变该玩家的精神状况。","reminders":["癫狂"],"setup":false,"ability":"每个夜晚，选择一名玩家，如果他同意，你得知他的精神状况，然后他的精神状况可能改变。"},{"id":"podcaster_aoi","name":"播客","edition":"aoi","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":3,"otherNightReminder":"如果播客被放置了被流放标记，唤醒他，并告诉他场上放置了多少个真实声明标记。","reminders":["被流放","真实声明"],"setup":false,"ability":"每个白天，说书人会做出一项公开声明，当你被流放时，当晚，你会得知有多少条正确。"},{"id":"cinematographer_aoi","name":"摄影师","edition":"aoi","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"每次投票时，你可以决定是顺时针投票还是逆时针投票。"},{"id":"chieftain_iob","name":"酋长","edition":"iob","team":"townsfolk","firstNight":16,"firstNightReminder":"向酋长展示一个在游戏中的外来者身份标志。","otherNight":15,"otherNightReminder":"唤醒酋长，如果当前命运时针指向了一名外来者，向他点头，否则摇头。","reminders":["外来者"],"setup":true,"ability":"游戏开始时，你得知一个在游戏中的外来者身份。每个夜晚，你得知命运时针是否指向了一名外来者。[+1外来者]"},{"id":"blasphemer_iob","name":"渎神者","edition":"iob","team":"townsfolk","firstNight":17,"firstNightReminder":"向渎神者展示一个在游戏中的村民身份标志。","otherNight":6,"otherNightReminder":"唤醒渎神者，如果他摇头，无事发生，如果他点头，并且命运时针指向了他，他死亡两次。","reminders":["村民","死亡"],"setup":false,"ability":"游戏开始时，你得知一个在游戏中的村民身份。每个夜晚，选择是/否，如果你选择了是，并且命运时针指向了你，你死亡两次。"},{"id":"trapper_iob","name":"捕手","edition":"iob","team":"townsfolk","firstNight":10,"firstNightReminder":"唤醒捕手，他指向一名玩家，在该玩家的身份标志旁放置绊索标记。","otherNight":16,"otherNightReminder":"唤醒捕手，如果拥有绊索标记的玩家被命运时针指向，点头，否则摇头。","reminders":["绊索"],"setup":false,"ability":"在你的第一个夜晚，选择一名其他玩家，每个夜晚，你得知你和他是否被命运时针指向。"},{"id":"poacher_iob","name":"偷猎者","edition":"iob","team":"townsfolk","firstNight":0,"firstNightReminder":"偷猎者不使用技能或选择一名玩家，如果他选择了一名玩家，且该玩家或他顺时针方向最近的玩家被命运时针指向，你点头，否则摇头。","otherNight":17,"otherNightReminder":"偷猎者不使用技能或选择一名玩家，如果他选择了一名玩家，且该玩家或他顺时针方向最近的玩家被命运时针指向，你点头，否则摇头。","reminders":["无技能"],"setup":false,"ability":"整局游戏限一次，夜晚*，选择一名玩家，你得知他和他顺时针方向最近的玩家是否被命运时针指向。"},{"id":"stargazer_iob","name":"观星者","edition":"iob","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":18,"otherNightReminder":"唤醒观星者，并告知他被命运时针指向的玩家的阵营，如果指向了善良阵营玩家，给出向上的大拇指，否则给出向下的大拇指。","reminders":[],"setup":false,"ability":"每个夜晚*，你得知命运时针指向的玩家的阵营。"},{"id":"soothsayer_iob","name":"骨卜师","edition":"iob","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":19,"otherNightReminder":"","reminders":["醉酒"],"setup":false,"ability":"每个夜晚*，选择一名玩家，得知他的身份，当你或者邪恶玩家被命运时针指向时，你醉酒，当命运时针不再指向这些玩家时，解除醉酒。"},{"id":"bloodletter_iob","name":"脏卜师","edition":"iob","team":"townsfolk","firstNight":15,"firstNightReminder":"一名玩家流血。","otherNight":13,"otherNightReminder":"脏卜师不使用技能或选择一名玩家，如果他选择了一名玩家，告知脏卜师该玩家的阵营，如果指向了善良阵营玩家，给出向上的大拇指，否则给出向下的大拇指。然后，为一名玩家放置流血标记。","reminders":["流血"],"setup":false,"ability":"游戏开始时，一名玩家流血。每个夜晚*，你可以选择一名玩家，你得知他的阵营并可能使一名玩家流血。"},{"id":"stalker_iob","name":"侦察兵","edition":"iob","team":"townsfolk","firstNight":19,"firstNightReminder":"唤醒侦察兵，如果侦察兵顺时针方向最近的存活玩家是一名爪牙，点头，否则摇头。","otherNight":20,"otherNightReminder":"唤醒侦察兵，如果侦察兵顺时针方向最近的存活玩家是一名爪牙，点头，否则摇头。","reminders":[],"setup":false,"ability":"每个夜晚，你得知你顺时针方向最近的存活玩家是否是一名爪牙。"},{"id":"ranger_iob","name":"巡林人","edition":"iob","team":"townsfolk","firstNight":20,"firstNightReminder":"向巡林人展示一个在游戏中的爪牙身份标志。","otherNight":22,"otherNightReminder":"当巡林人在夜晚死亡时，唤醒他，并指向开局展示的身份对应的爪牙玩家。","reminders":["爪牙"],"setup":false,"ability":"游戏开始时，你得知一个在游戏中的爪牙身份。当你在夜晚死亡时，你得知他是谁。"},{"id":"warden_iob","name":"守卫","edition":"iob","team":"townsfolk","firstNight":18,"firstNightReminder":"唤醒守卫，并向他展示一个在游戏中的恶魔身份标志。","otherNight":0,"otherNightReminder":"","reminders":["防护"],"setup":false,"ability":"游戏开始时，你得知在游戏中的恶魔身份。被命运时针指向的玩家被防护。"},{"id":"forager_iob","name":"清道夫","edition":"iob","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":22,"otherNightReminder":"清道夫不使用技能或指向一名已死亡的玩家，如果他指向了一名玩家，告知清道夫该玩家的阵营。","reminders":["防护"],"setup":false,"ability":"整局游戏限一次，夜晚*，选择一名死亡玩家，得知他的阵营。你顺时针方向最近的玩家被防护。"},{"id":"warrior_iob","name":"勇士","edition":"iob","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":23,"otherNightReminder":"唤醒勇士，如果勇士处于流血状态，点头，否则摇头。","reminders":["防护"],"setup":false,"ability":"每个夜晚*，你得知自己是否流血。夜晚期间，你自我防护。"},{"id":"medicineman_iob","name":"草药师","edition":"iob","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":2,"otherNightReminder":"唤醒草药师并指向两名玩家，他们获得防护效果，持续到下个拂晓。","reminders":["防护"],"setup":false,"ability":"每个夜晚*，选择两名其他玩家，他们被防护。"},{"id":"wicked_iob","name":"恶徒","edition":"iob","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":5,"otherNightReminder":"如果恶徒被命运时针指向，唤醒他，并向他展示向下的大拇指，然后唤醒恶魔，展示恶徒的身份标志并指向恶徒。","reminders":["叛变"],"setup":false,"ability":"当你被命运时针指向时，你加入邪恶阵营，并使恶魔得知你是谁。"},{"id":"starcrossed_iob","name":"不祥者","edition":"iob","team":"outsider","firstNight":14,"firstNightReminder":"不详者流血。","otherNight":2,"otherNightReminder":"如果不详者被放置了停摆标记，当晚，唤醒恶魔，询问他今晚是否要移动命运时针。","reminders":["流血","停摆"],"setup":false,"ability":"如果你被处决，当晚，恶魔可以决定是否旋转命运时针。游戏开始时，你流血。"},{"id":"righthandman_iob","name":"“得力助手”","edition":"iob","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["“好兄弟”"],"setup":false,"ability":"当你顺时针方向最近的玩家被处决时，如果他属于善良阵营，你的阵营落败。"},{"id":"beastmaster_iob","name":"兽王","edition":"iob","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":14,"otherNightReminder":"如果兽王死亡，一名玩家死亡（只有在场上存活玩家大于等于六名时才可选这项），或者三名玩家流血。","reminders":["野兽出逃","流血","死亡"],"setup":false,"ability":"当你死亡时，一名玩家死亡，或者三名玩家流血，当存活玩家在五人以下时，只可能会导致三名玩家流血。"},{"id":"eclipse_iob","name":"蚀日","edition":"iob","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":3,"otherNightReminder":"唤醒蚀日，如果已经死亡，询问他是否要旋转命运时针。如果他没有死亡且他点头，将他杀害，并询问他是否要旋转命运时针，否则无事发生。","reminders":["杀害","停摆"],"setup":false,"ability":"当你死亡时，当晚，你可以决定是否旋转命运时针。每个夜晚，你可以杀害自己。"},{"id":"viceroy_iob","name":"总督","edition":"iob","team":"minion","firstNight":12,"firstNightReminder":"总督查看魔典，如果他点头，为他顺时针方向最近的村民的身份标志放置中毒标记，如果他摇头，则无事发生。","otherNight":1,"otherNightReminder":"总督查看魔典，如果他点头，为他顺时针方向最近的村民的身份标志放置中毒标记，如果他摇头，则无事发生。","reminders":["中毒"],"setup":false,"ability":"每个夜晚，你查看魔典，并选择是否使你顺时针最近的村民中毒，中毒持续到下个黄昏。"},{"id":"effigy_iob","name":"巫毒娃娃","edition":"iob","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":12,"otherNightReminder":"巫毒娃娃指向一名玩家，如果他指向了一名外来者，向他点头，否则摇头，并在被指向的玩家身份标志旁放置流血标记。","reminders":["被杀害"],"setup":true,"ability":"每个夜晚*，选择一名玩家，你得知他是否是外来者。如果他不是，他流血。[+1外来者]"},{"id":"secondhand_iob","name":"黑猫","edition":"iob","team":"minion","firstNight":9,"firstNightReminder":"黑猫流血。","otherNight":11,"otherNightReminder":"唤醒黑猫，黑猫指向一名玩家，如果该玩家被命运时针指向，将他杀害，否则他流血。","reminders":["流血","被杀害"],"setup":false,"ability":"每个夜晚*，选择一名玩家，使他流血，如果你选择的玩家在当晚被命运时针指向，改为将他杀害。游戏开始时，你流血。"},{"id":"retrogradus_iob","name":"溯时行者","edition":"iob","team":"demon","firstNight":11,"firstNightReminder":"为一名村民放置中毒标记。","otherNight":7,"otherNightReminder":"溯时行者指向一名玩家，那名玩家被杀害。","reminders":["逆向时针","中毒","被杀害"],"setup":true,"ability":"每个夜晚*，选择一名玩家，将他杀害。第一个夜晚，一名玩家中毒，直到下个黄昏。[逆时针旋转命运时针]"},{"id":"bogman_iob","name":"沼怪","edition":"iob","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":8,"otherNightReminder":"沼怪指向一名玩家，那名玩家被杀害。","reminders":["中毒","命运时针","被杀害"],"setup":false,"ability":"每个夜晚*，选择一名玩家，将他杀害。被命运时针指向的玩家以及他顺时针方向最近的玩家如果是村民，他们中毒。"},{"id":"doopliss_iob","name":"鬼魅","edition":"iob","team":"demon","firstNight":0,"firstNightReminder":"鬼魅指向一名玩家，为那名玩家放置中毒&消弭标记。","otherNight":10,"otherNightReminder":"鬼魅指向一名玩家，那名玩家被杀害。","reminders":["命运时针","中毒&消弭","被杀害"],"setup":false,"ability":"每个夜晚*，选择一名玩家，将他杀害。第一个夜晚，选择一名玩家，他中毒，并且不计入邪恶阵营的获胜条件的人数限制中。"},{"id":"kilo_iob","name":"基洛","edition":"iob","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":9,"otherNightReminder":"唤醒基洛，他指向一名或三名玩家，如果基洛指向了一名玩家，将他杀害，如果基洛指向了三名玩家，他们流血。","reminders":["命运时针","流血","被杀害"],"setup":false,"ability":"每个夜晚*，选择一名或三名玩家。如果你选择了一名玩家，将他杀害，如果你选择了三名玩家，他们流血。"},{"id":"headnurse_ti","name":"护士长","edition":"ti","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":14,"otherNightReminder":"护士长指向一名玩家，如果该玩家已行动，让护士长闭眼，并等待一段时间后再将其唤醒，期间可以处理其他玩家的行动。唤醒后，你指向护士长选择的玩家所选的每名技能目标，并告知护士长与该玩家得知的信息相同的信息，如果该玩家未行动，待该玩家行动后唤醒护士长并告知信息。如果护士长选中了恶魔，唤醒恶魔，并向他展示“你是”卡同时指向身份表格上的恶魔。","reminders":["监察","他的目标"],"setup":false,"ability":"每个夜晚*，选择一名玩家，你得知他今晚选择了谁以及他得知了什么。恶魔将会在被你选择时得知自己是恶魔，你不可能是恶魔。"},{"id":"psychologist_ti","name":"心理学家","edition":"ti","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":17,"otherNightReminder":"心理医学家指向一名玩家，你唤醒那名玩家，并向他展示“这名玩家选择了你”卡和心理学家的身份标志，如果他点头，你分别告知该玩家和心理学家，他们之间是否有恶魔，如果存在恶魔，你点头，否则你摇头。如果他摇头以拒绝心理学家，则无事发生。","reminders":[],"setup":false,"ability":"每个夜晚*，选择一名玩家，如果他同意，你们得知彼此之间是否有恶魔。你不可能是恶魔。"},{"id":"conspiracy_ti","name":"阴谋论者","edition":"ti","team":"townsfolk","firstNight":15,"firstNightReminder":"阴谋论者指向等同于本局设置中邪恶玩家数量的玩家，如果他指向了所有邪恶玩家，善良阵营获胜。","otherNight":15,"otherNightReminder":"阴谋论者指向等同于本局设置中邪恶玩家数量的玩家，如果他指向了所有邪恶玩家，善良阵营获胜。","reminders":[],"setup":false,"ability":"每个夜晚，选择等同于初始设置中邪恶玩家数量的玩家，如果你选中了所有邪恶玩家，善良阵营获胜。"},{"id":"vividdreamer_ti","name":"化梦师","edition":"ti","team":"townsfolk","firstNight":13,"firstNightReminder":"唤醒化梦师并选择一个标记，让化梦师指向两名玩家，并根据你选择的标记点头或摇头，然后将该标记放置在化梦师的身份标志旁。","otherNight":16,"otherNightReminder":"唤醒化梦师并选择一个标记，让化梦师指向两名玩家，并根据你选择的标记点头或摇头，如果今夜是奇数夜晚，将该标记放置在化梦师的身份标志旁。如果今夜是偶数夜晚，向化梦师展示这两夜你拿取的提示标记，但不要告诉他他的信息分别对应哪一夜。","reminders":["同一阵营？","恶魔相邻？","存在恶魔？"],"setup":false,"ability":"每个夜晚，选择两名玩家，你得知他们是否属于同一阵营，或他们是否与恶魔相邻，或他们当中是否有恶魔（你只会得知是否）。每逢偶数夜晚，你会得知你这两天所获取的信息对应哪两项。"},{"id":"pillhorder_ti","name":"药师","edition":"ti","team":"townsfolk","firstNight":12,"firstNightReminder":"药师指向两名玩家，在其中一名玩家的身份标志旁放置清醒健康&被保护标记，为另一名玩家放置醉酒标记。","otherNight":3,"otherNightReminder":"药师指向两名玩家，在其中一名玩家的身份标志旁放置清醒健康&被保护标记，为另一名玩家放置醉酒标记。","reminders":["清醒健康&被保护","醉酒"],"setup":false,"ability":"每个夜晚，选择两名玩家，他们其中一名免疫醉酒与中毒，并免受恶魔侵害，另外一名醉酒，持续到下个黄昏。"},{"id":"securityguard_ti","name":"安保人员","edition":"ti","team":"townsfolk","firstNight":10,"firstNightReminder":"安保人员指向两名玩家，在其中的爪牙玩家的身份标志旁放置不被唤醒标记。","otherNight":1,"otherNightReminder":"安保人员指向两名玩家，在其中的爪牙玩家的身份标志旁放置不被唤醒标记。","reminders":["不被唤醒"],"setup":false,"ability":"每个夜晚，选择两名玩家，当你选中爪牙时，该爪牙在今晚不会被唤醒。"},{"id":"doomsdaypreacher_ti","name":"末日传道士","edition":"ti","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":19,"otherNightReminder":"末日传道士指向两名玩家，告知他那两名玩家在今晚一共选择了多少名玩家。","reminders":[],"setup":false,"ability":"每个夜晚*，选择两名玩家，你得知他们在今晚一共选择了多少名玩家。"},{"id":"clairvoyant_ti","name":"通灵师","edition":"ti","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":13,"otherNightReminder":"通灵师指向两名玩家，在其中的恶魔玩家的身份标志旁放置回归本质标记。","reminders":["回归本质"],"setup":false,"ability":"每个夜晚*，你选择两名玩家，从现在开始，他们被视为他们原本的阵营与身份类型，即使因为某些原因不能这么做。"},{"id":"copycat_ti","name":"模仿者","edition":"ti","team":"townsfolk","firstNight":14,"firstNightReminder":"模仿者指向一名玩家，如果那名玩家属于善良阵营，向他展示“你是”卡和该玩家的身份标志，否则向他展示“你是”卡和任意一个身份标志，然后在模仿者的身份标志旁放置醉酒标记。","otherNight":0,"otherNightReminder":"","reminders":["醉酒","模仿"],"setup":false,"ability":"在你的第一个夜晚，选择一名玩家。如果他属于善良阵营，你变为与他相同的身份，如果他属于邪恶阵营，你醉酒。"},{"id":"liar_ti","name":"说谎者","edition":"ti","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":19,"otherNightReminder":"说谎者指向两名玩家，如果其中存在恶魔，在恶魔玩家的身份标志旁放置表面中毒标记。","reminders":["表面中毒"],"setup":false,"ability":"每个夜晚*，选择两名玩家，当你选中恶魔时，他认为自己拥有的技能从现在开始按中毒处理。"},{"id":"scaredycat_ti","name":"懦夫","edition":"ti","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":8,"otherNightReminder":"懦夫指向两到四名玩家，如果其中存在恶魔，在懦夫身份标志旁放置安全标记。","reminders":["安全"],"setup":false,"ability":"每个夜晚*，选择两到四名玩家，当你选中恶魔时，你在当晚不会死亡。"},{"id":"corpseobsessed_ti","name":"冰恋者","edition":"ti","team":"townsfolk","firstNight":17,"firstNightReminder":"冰恋者指向两名玩家，为他们放置恋尸癖标记。","otherNight":20,"otherNightReminder":"唤醒冰恋者，如果拥有恋尸癖标记的玩家死亡，向冰恋者展示该玩家的身份标志，并移除恋尸癖标记。然后冰恋者指向两名玩家，为他们放置恋尸癖标记。","reminders":["恋尸癖"],"setup":false,"ability":"每个夜晚，选择两名玩家，当他们其中一人在下个黄昏前死去时，你在当晚得知他的身份。"},{"id":"interrogator_ti","name":"审讯官","edition":"ti","team":"townsfolk","firstNight":16,"firstNightReminder":"为一名玩家的身份标志放置错误信息标志。审讯官指向两名玩家，如果他们当中存在邪恶玩家，你给出向下的大拇指，否则给出向上的大拇指。","otherNight":21,"otherNightReminder":"审讯官指向两名玩家，如果他们当中存在邪恶玩家，你给出向下的大拇指，否则给出向上的大拇指。","reminders":["错误信息"],"setup":false,"ability":"每个夜晚，选择两名玩家，你得知他们当中是否存在邪恶玩家。有一名玩家始终可能会被你的技能误认为邪恶玩家。"},{"id":"anarchist_ti","name":"无政府主义者","edition":"ti","team":"outsider","firstNight":11,"firstNightReminder":"无政府主义者指向两名玩家，在他们的身份标志旁放置被选择标记。","otherNight":2,"otherNightReminder":"无政府主义者指向两名玩家，在他们的身份标志旁放置被选择标记。","reminders":["被选择"],"setup":false,"ability":"每个夜晚，选择两名存活玩家。当晚，所有指定他们作为目标的技能，都可能替换你作为其中一个技能目标。"},{"id":"nihilist_ti","name":"虚无主义者","edition":"ti","team":"outsider","firstNight":0,"firstNightReminder":"虚无主义者指向两名玩家，在他们的身份标志旁放置被选择标记。","otherNight":9,"otherNightReminder":"虚无主义者指向两名玩家，在他们的身份标志旁放置被选择标记。","reminders":["被选择","死亡"],"setup":false,"ability":"每个夜晚，选择两名存活玩家。当晚，当他们其中一人死亡时，你可能代替他而死亡。"},{"id":"rambler_ti","name":"漫步者","edition":"ti","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["疯狂","已疯狂"],"setup":false,"ability":"每个白天，都会有一名玩家（不会重复）需要对“我是漫步者”疯狂，否则他可能被处决。如果你对“我是漫步者”疯狂，你可能会被处决。你不会是恶魔。"},{"id":"joker_ti","name":"丑角","edition":"ti","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["随机杀害"],"setup":false,"ability":"如果你是恶魔，你产生的杀害将随机决定。"},{"id":"gaslighter_ti","name":"煤气灯人","edition":"ti","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["村民"],"setup":true,"ability":"一名村民认为他是煤气灯人，并且不能使用他的技能，即使你死了。如果你被处决，他寻回他的技能，其他爪牙不知道你是谁，你也不知道他们是谁。"},{"id":"shoulderangel_ti","name":"告死天使","edition":"ti","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":12,"otherNightReminder":"告死天使指向一名玩家，在那名玩家的身份标志旁放置罪孽标记。","reminders":["罪孽"],"setup":false,"ability":"每个夜晚*，选择一名玩家（需与上一夜不同），他在今晚被视为一名邪恶的恶魔。"},{"id":"shoulderdevil_ti","name":"告死邪魔","edition":"ti","team":"minion","firstNight":9,"firstNightReminder":"唤醒一名善良玩家，向他展示告死邪魔的身份标志。","otherNight":94,"otherNightReminder":"告死邪魔指向一名玩家，那名玩家被杀害。","reminders":["被杀害","已被知晓"],"setup":false,"ability":"每个夜晚*，选择一名玩家，今晚被他选择的玩家中，会有一名被你杀害。一名善良玩家知道你在游戏中。恶魔无法杀害玩家。"},{"id":"scemer_ti","name":"幕后黑手","edition":"ti","team":"minion","firstNight":100,"firstNightReminder":"唤醒幕后黑手，指向每名在今晚被恶魔选择的玩家。然后，如果他点头，向他展示“你是”卡，并选择一个恶魔，根据恶魔的技能向他展示一个村民或外来者身份标志（如果你决定让幕后黑手成为双生暗影，向他展示一个场上已经存在的身份，并将那名玩家转换为双生暗影），原先的恶魔转换为对应的善良身份（如果原先的恶魔是双生暗影，会导致场上出现两名身份相同的善良身份）。如果他摇头，则无事发生。","otherNight":100,"otherNightReminder":"唤醒幕后黑手，指向每名在今晚被恶魔选择的玩家。然后，如果他点头，向他展示“你是”卡，并选择一个恶魔，根据恶魔的技能向他展示一个村民或外来者身份标志（如果你决定让幕后黑手成为双生暗影，向他展示一个场上已经存在的身份，并将那名玩家转换为双生暗影），原先的恶魔转换为对应的善良身份（如果原先的恶魔是双生暗影，会导致场上出现两名身份相同的善良身份）。如果他摇头，则无事发生。","reminders":["化身为魔"],"setup":false,"ability":"每个夜晚，你可以选择成为恶魔。如果你这么做了，当前的恶魔变为他自己认为的身份对应的善良玩家，你知道恶魔每晚选择的玩家。"},{"id":"enrage_ti","name":"缚魂灵","edition":"ti","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","remindersGlobal":["被杀害","保留技能","缚魂灵"],"setup":true,"ability":"[村民]爪牙们代替你得知开局信息。"},{"id":"maniac_ti","name":"狂煞","edition":"ti","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"remindersGlobal":["被杀害","中毒","已改变目标","狂煞"],"setup":true,"ability":"[村民]当你第一次杀害村民时，改为使其中毒，并杀害一名与他相邻的玩家。"},{"id":"sociopath_ti","name":"厉鬼","edition":"ti","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"remindersGlobal":["被杀害","已改变目标","厉鬼"],"setup":true,"ability":"[外来者]当你第一次杀害外来者时，改为杀害一名与他相邻的玩家。"},{"id":"doppelganger_ti","name":"双生暗影","edition":"ti","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"remindersGlobal":["被杀害","双生暗影"],"setup":true,"ability":"[村民/外来者]两名玩家为双生暗影，并且拥有相同的技能，你们不能杀害彼此，而且每晚只会有一名玩家被杀害。[-1爪牙]"},{"id":"majesty_sr","name":"国王","edition":"sr","team":"townsfolk","firstNight":22,"firstNightReminder":"唤醒国王，并告知他臣子为他提供的信息。","otherNight":13,"otherNightReminder":"唤醒国王，并告知他臣子为他提供的信息。","reminders":[],"setup":true,"ability":"每个夜晚，从你的臣子那里获取信息。中毒的臣子必定会提供给你错误信息。[必定存在一个国王/伪王/伊斯巴达登]"},{"id":"prince_sr","name":"王子","edition":"sr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":12,"otherNightReminder":"如果王子变为了新的国王，告知他。","reminders":["新王登基"],"setup":false,"ability":"当国王死亡时，你变为新的国王。"},{"id":"princess_sr","name":"公主","edition":"sr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":16,"otherNightReminder":"如果放置了国王已死标记，唤醒公主，他指向一名玩家，并向他展示该玩家的身份标志。","reminders":["国王已死"],"setup":false,"ability":"如果国王死亡，当晚，选择一名玩家，得知他的身份。"},{"id":"queen_sr","name":"王后","edition":"sr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["相邻"],"setup":false,"ability":"每个夜晚，国王得知与他相邻的玩家中有多少名属于邪恶阵营。"},{"id":"knight_sr","name":"骑士","edition":"sr","team":"townsfolk","firstNight":18,"firstNightReminder":"骑士指向一名玩家，并为该玩家放置得知标记，该信息会在国王/伪王/伊斯巴达登的行动阶段提供给对应玩家。","otherNight":8,"otherNightReminder":"骑士指向一名玩家，并为该玩家放置得知标记，该信息会在国王/伪王/伊斯巴达登的行动阶段提供给对应玩家。","reminders":["得知"],"setup":false,"ability":"每个夜晚，选择一名玩家，如果他是村民，国王得知他的身份。"},{"id":"cardina_sr","name":"主教","edition":"sr","team":"townsfolk","firstNight":19,"firstNightReminder":"主教指向一名玩家，并为该玩家放置得知标记，该信息会在国王/伪王/伊斯巴达登的行动阶段提供给对应玩家。","otherNight":9,"otherNightReminder":"主教指向一名玩家，并为该玩家放置得知标记，该信息会在国王/伪王/伊斯巴达登的行动阶段提供给对应玩家。","reminders":["得知"],"setup":false,"ability":"每个夜晚，选择一名玩家，如果他是外来者，国王得知他的身份。"},{"id":"rook_sr","name":"城堡","edition":"sr","team":"townsfolk","firstNight":20,"firstNightReminder":"城堡指向一名玩家，并为该玩家放置得知标记，该信息会在国王/伪王/伊斯巴达登的行动阶段提供给对应玩家。","otherNight":10,"otherNightReminder":"城堡指向一名玩家，并为该玩家放置得知标记，该信息会在国王/伪王/伊斯巴达登的行动阶段提供给对应玩家。","reminders":["得知"],"setup":false,"ability":"每个夜晚，选择一名玩家，如果他是爪牙，国王得知他的身份。"},{"id":"scribe_sr","name":"书吏","edition":"sr","team":"townsfolk","firstNight":16,"firstNightReminder":"为一名玩家放置对应的报告村民/外来者/爪牙/恶魔身份标记，该信息会在国王/伪王/伊斯巴达登的行动阶段提供给对应玩家。","otherNight":6,"otherNightReminder":"如果今天是前三夜，为一名玩家放置对应的报告村民/外来者/爪牙/恶魔身份标记，该信息会在国王/伪王/伊斯巴达登的行动阶段提供给对应玩家。","reminders":["报告村民","报告外来者","报告爪牙","报告恶魔"],"setup":false,"ability":"在你的前三个夜晚里的每个夜晚，国王都会得知一名玩家，这三名玩家的身份类型均不同。"},{"id":"herald_sr","name":"传令官","edition":"sr","team":"townsfolk","firstNight":15,"firstNightReminder":"唤醒传令官，并指向国王玩家。","otherNight":0,"otherNightReminder":"","reminders":["得知"],"setup":false,"ability":"游戏开始时，你得知国王是谁。"},{"id":"chamberlain_sr","name":"内侍","edition":"sr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["被保护"],"setup":false,"ability":"国王免受恶魔侵害。"},{"id":"cupbearer_sr","name":"酒臣","edition":"sr","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["今日已使用"],"setup":false,"ability":"每个白天，你可以邀请一名玩家共饮美酒。如果他接受了，并且他属于邪恶阵营，他死亡。如果你中毒了，他接受了，并且他属于善良阵营，他死亡。"},{"id":"friar_sr","name":"修士","edition":"sr","team":"townsfolk","firstNight":17,"firstNightReminder":"修道士指向一名玩家，为该玩家放置被选择标记。","otherNight":7,"otherNightReminder":"如果拥有被选择标记的玩家或者修士死亡，在今晚将对应信息提供给国王/伪王/伊斯巴达登。","reminders":["被选择"],"setup":false,"ability":"在你的第一个夜晚，选择一名玩家，当你和他其中一人死亡时，国王得知你选择的人的阵营。"},{"id":"foodtaster_sr","name":"试毒员","edition":"sr","team":"townsfolk","firstNight":13,"firstNightReminder":"试毒员指向一名玩家，为该玩家放置被选择标记，直到下个黄昏，所有影响目标的技能都改为影响你。（影响包括中毒/杀害/转变阵营，不包括得知身份）","otherNight":2,"otherNightReminder":"试毒员指向一名玩家，为该玩家放置被选择标记，直到下个黄昏，所有影响目标的技能都改为影响你。（影响包括中毒/杀害/转变阵营，不包括得知身份）","reminders":["被选择"],"setup":false,"ability":"每个夜晚，选择一名其他玩家，直到下个黄昏，所有影响他的技能改为影响你。"},{"id":"pretender_sr","name":"伪王","edition":"sr","team":"outsider","firstNight":23,"firstNightReminder":"唤醒国王，并告知他臣子为他提供的信息，这些信息必定是错误的。","otherNight":14,"otherNightReminder":"唤醒国王，并告知他臣子为他提供的信息，这些信息必定是错误的。","reminders":[],"setup":true,"ability":"你以为你是国王，并且你被视为国王。每个夜晚，你从你的臣子那里获取错误信息。[必定存在一个国王/伪王/伊斯巴达登]"},{"id":"pawn_sr","name":"兵卒","edition":"sr","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["兵卒"],"setup":true,"ability":"你拥有一个村民身份的技能，但你不知道你的技能是什么。"},{"id":"emissary_sr","name":"密使","edition":"sr","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":1,"otherNightReminder":"如果密使被非国王玩家/他自己提名，为那名玩家放置变得邪恶标记，下个黄昏，唤醒他并向他展示“你是”卡和向下的大拇指，告知他已经加入邪恶阵营","reminders":["无技能","变得邪恶"],"setup":false,"ability":"当第一名除了国王和你之外的玩家提名你时，他在下个黄昏加入邪恶阵营。"},{"id":"concubine_sr","name":"小妾","edition":"sr","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":2,"otherNightReminder":"小妾死亡时，为国王放置醉酒2标记，如果今天是醉酒第二天，将醉酒标记替换为醉酒1标记，如果今天是第三天，将醉酒1标记移除。","reminders":["醉酒2","醉酒1"],"setup":false,"ability":"当你死亡时，国王醉酒两天两夜。"},{"id":"charlatan_sr","name":"骗徒","edition":"sr","team":"minion","firstNight":21,"firstNightReminder":"骗徒指向身份表格上的两个身份，国王今天从这些身份的技能中获取随机信息，即使这些身份不在场。","otherNight":11,"otherNightReminder":"骗徒指向身份表格上的两个身份，国王今天从这些身份的技能中获取随机信息，即使这些身份不在场。","reminders":["随机信息"],"setup":false,"ability":"每个夜晚，选择两个身份，国王从他们那里获取随机信息，即使他们不在场。"},{"id":"conspirator_sr","name":"阴谋家","edition":"sr","team":"minion","firstNight":14,"firstNightReminder":"阴谋家指向一名玩家，为那名玩家放置被选择标记，为今晚所有选择他的其他善良玩家放置中毒标记。","otherNight":2,"otherNightReminder":"阴谋家指向一名玩家，为那名玩家放置被选择标记，为今晚所有选择他的其他善良玩家放置中毒标记。","reminders":["被选择","中毒"],"setup":false,"ability":"每个夜晚，选择一名玩家。当晚选择他的善良玩家中毒到下个黄昏。[+2外来者]"},{"id":"scoundrel_sr","name":"毒士","edition":"sr","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["今日已使用"],"setup":false,"ability":"每个白天，你可以邀请一名玩家共饮美酒。如果他接受了，并且他属于善良阵营，他死亡。你可能被视为一名善良的酒臣。"},{"id":"usurper_sr","name":"篡位者","edition":"sr","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":17,"otherNightReminder":"如果国王已死亡，邪恶方获胜，如果莫甘娜在游戏中，且国王已死亡，篡位者单独获胜。","reminders":[],"setup":false,"ability":"每个拂晓，如果国王已死亡，邪恶方获胜，此时如果莫甘娜在游戏中，篡位者单独获胜。"},{"id":"ysbaddaden_sr","name":"伊斯巴达登","edition":"sr","team":"demon","firstNight":24,"firstNightReminder":"唤醒伊斯巴达登，并告知他臣子为他提供的信息，如同向国王一般为他提供信息。","otherNight":2,"otherNightReminder":"伊斯巴达登指向一名玩家，将那名玩家杀害。在唤醒伪王后再次唤醒伊斯巴达登，如同向国王一般为他提供信息。","reminders":["被杀害"],"setup":true,"ability":"每个夜晚*，选择一名玩家，将他杀害。游戏开始时你得知国王是谁，你被视为一名善良的国王，每个夜晚，你从他的臣子那里获取信息。[必定存在一个国王/伪王/伊斯巴达登]"},{"id":"draco_sr","name":"德拉古","edition":"sr","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":3,"otherNightReminder":"德拉古指向一名玩家，将那名玩家杀害，如果德拉古指向了与他相邻的共计三名玩家，将那三名玩家都杀害。","reminders":["无技能","被杀害"],"setup":false,"ability":"每个夜晚*，选择一名玩家，将他杀害。整局游戏限一次，如果场上存活玩家在五名以上，同时杀害与他相邻的存活玩家。"},{"id":"jabberwocky_sr","name":"贾巴沃克","edition":"sr","team":"demon","firstNight":14,"firstNightReminder":"贾巴沃克不发动技能或者使所有玩家中毒，如果他点头发动技能，在魔典中央放置全体中毒。","otherNight":4,"otherNightReminder":"贾巴沃克指向一名玩家，将那名玩家杀害。并询问他是否发动技能，如果他点头发动技能，在魔典中央放置全体中毒，如果贾巴沃克已发动技能且昨天魔典中央已经放置了全体中毒，将标记替换为明日中毒，否则将明日中毒替换为全体中毒。","reminders":["无技能","被杀害","全体中毒","明日中毒"],"setup":false,"ability":"每个夜晚*，选择一名玩家，将他杀害。整局游戏限一次，当晚，使所有村民中毒到下个拂晓，然后他们每隔一天再次中毒到下个拂晓。"},{"id":"morgana_sr","name":"莫甘娜","edition":"sr","team":"demon","firstNight":12,"firstNightReminder":"为所有善良玩家放置变得邪恶标记，然后依次唤醒他们并向他们展示“你是”卡和向下的大拇指。","otherNight":5,"otherNightReminder":"莫甘娜指向一名玩家，将那名玩家杀害。","reminders":["被杀害","变得邪恶"],"setup":false,"ability":"每个夜晚，选择一名玩家杀害。所有的非国王玩家都加入邪恶阵营。如果国王死亡，或者当场上只有五名以下玩家存活时，国王只投票给了你，邪恶阵营落败。"},{"id":"mage_mm","name":"巫师","edition":"mm","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["今日已询问"],"setup":false,"ability":"游戏开始时，你得知五条信息。每个白天，你可以去拜访说书人并指定其中一条信息，得知它的正误。"},{"id":"squire_mm","name":"乡绅","edition":"mm","team":"townsfolk","firstNight":13,"firstNightReminder":"唤醒乡绅并指向一名善良玩家，然后为那名玩家放置得知标记。","otherNight":16,"otherNightReminder":"如果一名玩家同时被放置了得知和被提名标记，再次唤醒乡绅并指向一名未放置得知标记的善良玩家，然后为那名玩家放置得知标记。","reminders":["得知","被提名"],"setup":false,"ability":"游戏开始时，你得知一名善良玩家。如果他被提名，你在下个夜晚再得知一名善良玩家。"},{"id":"page_mm","name":"侍从","edition":"mm","team":"townsfolk","firstNight":12,"firstNightReminder":"唤醒侍从并指向三名玩家，为那些玩家放置得知标记。","otherNight":0,"otherNightReminder":"","reminders":["得知","被提名"],"setup":false,"ability":"游戏开始时，你得知三名玩家。白天，如果你已对这些玩家均已发起过提名，你可以拜访说书人并得知他们的身份。"},{"id":"prince_mm","name":"王子","edition":"mm","team":"townsfolk","firstNight":11,"firstNightReminder":"每当一名玩家被爪牙选择时，就为他放置被选择标记。王子指向一名玩家，如果那名玩家已经被爪牙选择两次，他死亡，并在魔典中央放置防止死亡标记。","otherNight":13,"otherNightReminder":"每当一名玩家被爪牙选择时，就为他放置被选择标记。王子指向一名玩家，如果那名玩家已经被爪牙选择两次，他死亡，并在魔典中央放置防止死亡标记。","reminders":["被选择一次","被选择两次","防止死亡"],"setup":false,"ability":"每个夜晚，选择一名玩家，如果他被爪牙选择过两次以上，他死亡，并防止今晚的其他死亡。"},{"id":"muse_mm","name":"缪斯","edition":"mm","team":"townsfolk","firstNight":14,"firstNightReminder":"缪斯指向一名玩家，为那名玩家放置技能升级标记。","otherNight":2,"otherNightReminder":"移除先前的技能升级标记。缪斯指向一名玩家，为那名玩家放置技能升级标记。","reminders":["技能升级"],"setup":false,"ability":"每个夜晚，选择一名玩家，如果他属于善良阵营，说书人升级他的能力直到下个黄昏。"},{"id":"seer_mm","name":"先知","edition":"mm","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["得知"],"setup":false,"ability":"每个白天，你拜访说书人并得知一名玩家，当你在夜晚死亡时，你得知你已得知的玩家中有多少名属于邪恶阵营。"},{"id":"sylph_mm","name":"气仙","edition":"mm","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["被选择身份","安全于该身份"],"setup":false,"ability":"每个白天，你可以向说书人指名两名其他玩家和一个身份，他们免受该身份侵害，直到下个拂晓。"},{"id":"rogue_mm","name":"侠盗","edition":"mm","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":3,"otherNightReminder":"侠盗指向一名玩家，为那名玩家放置代替标记，如果那名玩家成为邪恶玩家的技能目标，侠盗代替他承受。","reminders":["代替"],"setup":false,"ability":"每个夜晚*，选择一名玩家，当他成为邪恶玩家的技能目标时，你代替他承受技能效果，直到下个黄昏。"},{"id":"servant_mm","name":"佣人","edition":"mm","team":"townsfolk","firstNight":9,"firstNightReminder":"佣人指向三名玩家，为其中一名放置免受恶魔标记，为其中另外一名放置免收爪牙标记。","otherNight":18,"otherNightReminder":"移除先前的标记。佣人指向三名玩家，为其中一名放置免受恶魔标记，为其中另外一名放置免收爪牙标记。","reminders":["免受恶魔","免受爪牙"],"setup":false,"ability":"每个夜晚*，选择三名玩家，其中一名在今晚免受恶魔侵害，其中一名免受爪牙侵害，直到下个黄昏。"},{"id":"thief_mm","name":"怪盗","edition":"mm","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":12,"otherNightReminder":"怪盗指向一名玩家，如果那名玩家是善良玩家，怪盗获得他的技能并可能在今晚再次被唤醒（他不知道自己获得了什么技能），为那名玩家放置醉酒标记，否则为怪盗放置醉酒标记。","reminders":["技能窃取","醉酒"],"setup":false,"ability":"每个夜晚*，选择一名玩家，你获得他的技能，直到下个黄昏。如果他属于善良阵营，他醉酒直到下个黄昏，否则你醉酒直到下个黄昏。"},{"id":"heir_mm","name":"继承人","edition":"mm","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":17,"otherNightReminder":"将在前天死亡的玩家的可继承标记移除，唤醒继承人并指向他可继承的玩家，如果他指向了其中一名玩家，向他展示那名玩家的身份标志，并在那名玩家的身份旁放置继承人标记。","reminders":["继承人","可继承","无技能"],"setup":false,"ability":"整局游戏限一次，夜晚*，选择一名在昨天死亡的玩家。你得知他的身份并获取他的技能。"},{"id":"wiccan_mm","name":"魔法师","edition":"mm","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":11,"otherNightReminder":"魔法师不使用技能或指向一名玩家和一个身份表格上的村民身份，如果该身份不在游戏中，唤醒那名玩家并告知他身份的改变。","reminders":["无技能"],"setup":false,"ability":"整局游戏限一次，夜晚*，选择一名玩家和一个村民身份，如果他不是恶魔并且该身份不在游戏中，他变为该身份。"},{"id":"bard_mm","name":"乐手","edition":"mm","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":14,"otherNightReminder":"当一名与乐手相邻的玩家死亡时，为那名玩家放置下夜得知标记。如果有玩家被放置了下夜得知标记，唤醒乐手，指向那名玩家并向他展示那名玩家的身份。","reminders":["下夜得知"],"setup":false,"ability":"当一名与你相邻的玩家死亡时，你在下个夜晚得知他的身份。"},{"id":"chosenone_mm","name":"天选之子","edition":"mm","team":"outsider","firstNight":15,"firstNightReminder":"天选之子指向一名玩家，为那名玩家放置天选标记，明天天选之子只能提名该玩家。","otherNight":15,"otherNightReminder":"天选之子指向一名玩家，为那名玩家放置天选标记，明天天选之子只能提名该玩家。","reminders":["天选"],"setup":false,"ability":"每个夜晚，选择一名玩家，明天你只能提名他。"},{"id":"cursed_mm","name":"遇诅之人","edition":"mm","team":"outsider","firstNight":16,"firstNightReminder":"遇诅之人指向一名玩家，为那名玩家放置诅咒标记。","otherNight":18,"otherNightReminder":"如果遇诅之人已经死亡，或者白天被遇诅之人提名的玩家被处决，被诅咒的玩家就会遭遇一些不好的事情，唤醒遇诅之人，并告知那名玩家遭遇了什么。然后遇诅之人指向一名玩家，为那名玩家放置诅咒标记。","reminders":["诅咒","?"],"setup":false,"ability":"每个夜晚，选择一名存活玩家，如果你已经死亡，或者你提名的玩家被处决，被你选择的玩家就可能会遭遇一些不好的事情，即使你已经死亡。你知道他遭遇了什么。"},{"id":"haunt_mm","name":"不散阴魂","edition":"mm","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":9,"otherNightReminder":"如果不散阴魂在白天被提名，今晚可能有一名玩家死亡。如果不散阴魂打破了疯狂，你可以放置两次行动标记，标记存在时恶魔行动两次。","reminders":["被提名","两次行动"],"setup":false,"ability":"当你被提名时，一名善良玩家可能会在今晚死亡。如果你对“我是不散阴魂”疯狂，恶魔可能会在今晚行动两次，即使你已经死亡。"},{"id":"idolkeeper_mm","name":"圣像守卫","edition":"mm","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":1,"otherNightReminder":"如果圣像守卫死亡，在魔典中央放置永久升级标记，并永久升级所有邪恶阵营玩家的技能。","reminders":["永久升级"],"setup":false,"ability":"当你死亡时，在下个夜晚，所有邪恶阵营的玩家的技能永久升级。"},{"id":"warlock_mm","name":"术士","edition":"mm","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":10,"otherNightReminder":"术士指向一名玩家，你唤醒那名玩家，并向他展示两个选项，他选择其中一项执行。","reminders":[],"setup":false,"ability":"每个夜晚*，选择一名善良玩家，他需要在说书人处做出一项选择，选择的内容由说书人决定。"},{"id":"nightcrawler_mm","name":"梦魇","edition":"mm","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":8,"otherNightReminder":"梦魇不使用技能或指向一名玩家，如果那名玩家属于善良阵营，将他杀害，否则，将他与梦魇的身份交换，并分别唤醒两名玩家，告知他们的新身份，然后将他杀害。","reminders":["无技能","被杀害"],"setup":false,"ability":"整局游戏限一次，夜晚*，选择一名玩家，如果他属于善良阵营，将他杀害。否则，你与他交换身份，然后将他杀害。"},{"id":"infiltrator_mm","name":"渗透者","edition":"mm","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["中毒"],"setup":false,"ability":"当你提名一名玩家时，他中毒直到下个拂晓。你可能被视为一名善良的村民或外来者。"},{"id":"pyro_mm","name":"火妖","edition":"mm","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"当一名玩家提名并处决一名与他阵营相同的玩家时，一名与他们相邻的玩家可能会被杀害。"},{"id":"monark_mm","name":"蒙纳克","edition":"mm","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":4,"otherNightReminder":"蒙纳克指向一名玩家，将那名玩家杀害。如果那名玩家是外来者或爪牙，你可以为一名与他相邻的玩家放置中毒标记。","reminders":["中毒","被杀害"],"setup":true,"ability":"每个夜晚*，选择一名玩家，将他杀害，如果他是一名外来者或爪牙，一名与他相邻的玩家可能会中毒直到下个拂晓。[+1/2外来者]"},{"id":"poppetmaker_mm","name":"傀儡师","edition":"mm","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":5,"otherNightReminder":"傀儡师指向两名玩家，将其中一名玩家杀害。为另一名放置操控标记，从现在开始，所有与他相关的由说书人判定的事件、提供的信息改为由傀儡师执行，但不能打破规则。","reminders":["操控","被杀害"],"setup":false,"ability":"每个夜晚*，选择两名玩家，其中一名将被杀害。另外一名玩家从现在开始，所有由说书人决定的与他相关的事情将由你决定。"},{"id":"piper_mm","name":"风笛手","edition":"mm","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":6,"otherNightReminder":"如果风笛手第一次提名了一名玩家，唤醒那名玩家并告知他阵营的改变。风笛手指向一名玩家，将那名玩家杀害。","reminders":["变得邪恶","被杀害"],"setup":true,"ability":"每个夜晚*，选择一名玩家，将他杀害。第一个被你提名的玩家在下个黄昏加入邪恶阵营。[-1外来者]"},{"id":"summoner_mm","name":"邪术师","edition":"mm","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":7,"otherNightReminder":"邪术师指向一名玩家和一个非恶魔身份，将那名玩家杀害，然后，你可以唤醒一名与他相邻的玩家，并告知他的新身份，你也可以不改变任何人的身份。","reminders":["被杀害"],"setup":false,"ability":"每个夜晚*，选择一名玩家和一个非恶魔身份。将那名玩家杀害，与他相邻玩家可能变为该身份。（如该身份不在游戏中）"},{"id":"armorer_sos","name":"装甲师","edition":"sos","team":"townsfolk","firstNight":15,"firstNightReminder":"为一个邪恶身份放置“得知”标记，然后唤醒装甲师，向他展示该身份标记。当对应玩家被处决时，为他放置“被处决”标记。","otherNight":15,"otherNightReminder":"如果场上一名玩家同时拥有“得知”和“被处决”标记，唤醒装甲师，向他展示一个在游戏中的邪恶身份标志。","reminders":["得知","被处决"],"setup":false,"ability":"游戏开始时，你得知一个在游戏中的邪恶身份。如果该玩家被处决，当晚，你再得知一个。"},{"id":"quartermaster_sos","name":"舵手","edition":"sos","team":"townsfolk","firstNight":14,"firstNightReminder":"唤醒舵手，向他竖起等同于场上存活善良玩家数量的手指(0,1,2,等)。","otherNight":18,"otherNightReminder":"唤醒舵手，向他竖起等同于场上存活善良玩家数量的手指(0,1,2,等)。","reminders":[],"setup":false,"ability":"每个夜晚，你得知场上还有多少名存活的善良玩家。"},{"id":"officer_sos","name":"军官","edition":"sos","team":"townsfolk","firstNight":17,"firstNightReminder":"为一个在游戏中的身份放置“在游戏中”标记，然后唤醒军官，同时向他展示放置了“在游戏中”标记的身份和另一个不在游戏中的身份。","otherNight":17,"otherNightReminder":"为一个在游戏中的身份放置“在游戏中”标记，然后唤醒军官，同时向他展示放置了“在游戏中”标记的身份和另一个不在游戏中的身份。","reminders":["在游戏中"],"setup":false,"ability":"每个夜晚，你得知两个身份，其中有且仅有一个在游戏中。"},{"id":"nurse_sos","name":"护士","edition":"sos","team":"townsfolk","firstNight":11,"firstNightReminder":"护士指向一名玩家，如果那名玩家是一名村民，唤醒那名玩家，并告知他被注射。","otherNight":3,"otherNightReminder":"护士指向一名玩家，如果那名玩家是一名村民，唤醒那名玩家，并告知他被注射。","reminders":[],"setup":false,"ability":"每个夜晚，选择一名玩家，为他注射。"},{"id":"analyst_sos","name":"化验员","edition":"sos","team":"townsfolk","firstNight":18,"firstNightReminder":"化验员依次指向任意名玩家和身份表格上的身份，他每猜对一名玩家的身份，就放置一个“正确”提醒标志。由你决定给予他什么奖励。","otherNight":20,"otherNightReminder":"化验员依次指向任意名玩家和身份表格上的身份，他每猜对一名玩家的身份，就放置一个“正确”提醒标志。由你决定给予他什么奖励。","reminders":["正确","奖励"],"setup":false,"ability":"每个夜晚，猜测所有人的身份。可能会根据你猜测的接近程度发生一些好事。"},{"id":"doctor_sos","name":"医生","edition":"sos","team":"townsfolk","firstNight":16,"firstNightReminder":"医生指向一名玩家，如果那名玩家处于中毒/醉酒状态，或是已死亡，向医生点头，否则摇头。","otherNight":16,"otherNightReminder":"医生指向一名玩家，如果那名玩家处于中毒/醉酒状态，或是已死亡，向医生点头，否则摇头。","reminders":[],"setup":false,"ability":"每个夜晚，选择一名玩家，你得知他是否中毒/醉酒/死亡。"},{"id":"captain_sos","name":"太空站长","edition":"sos","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":7,"otherNightReminder":"为白天被太空站长公开选择的玩家放置“被选择”标记。夜晚，如果一名玩家被放置了“被选择”标记，他死亡。","reminders":["无技能","死亡","被选择"],"setup":false,"ability":"整局游戏限一次，白天，公开选择一名玩家，他在当晚死亡。"},{"id":"researcher_sos","name":"科研人员","edition":"sos","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["今日已使用"],"setup":false,"ability":"每个白天，你可以拜访说书人并得知一些与恶魔有关的信息。"},{"id":"engineer_sos","name":"机械师","edition":"sos","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":5,"otherNightReminder":"机械师指向一名玩家，为那名玩家放置“不会出错”标志，那名玩家的技能不会出现预期外的情况，直到下个黄昏。","reminders":["不会出错"],"setup":false,"ability":"每个夜晚*，选择一名玩家，那名玩家的技能不会出现预期外的情况，直到下个黄昏。你的技能不会出现预期外的情况。"},{"id":"botanist_sos","name":"植物学家","edition":"sos","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":19,"otherNightReminder":"唤醒植物学家，向他竖起等同于魔典中放置的“邪恶投票”标记数量的手指(0,1,2,等)。","reminders":["邪恶投票"],"setup":false,"ability":"每个夜晚*，你得知今天有多少邪恶玩家投票。"},{"id":"assistant_sos","name":"秘书","edition":"sos","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":6,"otherNightReminder":"秘书指向一名玩家，为那名玩家放置“老板”提示标记，如果那名玩家在今晚死亡，交换他与秘书的身份，并依次唤醒这两名玩家，向他们展示“你是”卡和他们的新身份标志。","reminders":["老板"],"setup":false,"ability":"每个夜晚*，选择一名玩家，如果他在今晚死亡，你与他交换身份。"},{"id":"securitychief_sos","name":"安保队长","edition":"sos","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["醉酒"],"setup":false,"ability":"被你提名的爪牙醉酒到下个拂晓。"},{"id":"redshirt_sos","name":"红衫军","edition":"sos","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":25,"otherNightReminder":"当红衫军在夜晚死亡时，依次唤醒每名善良玩家，向他们展示红衫军的身份标志并指向红衫军玩家。","reminders":[],"setup":false,"ability":"当你在夜晚死亡时，所有善良玩家得知你的身份。"},{"id":"infirm_sos","name":"病人","edition":"sos","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":11,"otherNightReminder":"如果病人处于中毒状态，他死亡。","reminders":["死亡"],"setup":false,"ability":"每个夜晚*，如果你中毒，你死亡。你不会因为中毒/醉酒失去技能。"},{"id":"civilian_sos","name":"庶民","edition":"sos","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["被提名"],"setup":false,"ability":"当你被提名时，可能会发生一些不好的事情。"},{"id":"testsubject_sos","name":"实验体","edition":"sos","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":2,"otherNightReminder":"如果实验体变为了一名恶魔，唤醒他，并告知他变成了哪个恶魔，不要告诉他有没有醉酒，此后按照恶魔的正常行动顺序唤醒他。","reminders":["醉酒","实验体"],"setup":false,"ability":"如果你没有对“我是一名村民”疯狂，你可能变为一名恶魔，并可能醉酒。"},{"id":"brainwashed_sos","name":"被洗脑者","edition":"sos","team":"outsider","firstNight":6,"firstNightReminder":"唤醒所有爪牙，向他们展示被洗脑者的身份标志，并指向那名玩家，然后唤醒被洗脑者，如同他真的拥有爪牙的技能一般让他行动，，然后唤醒所有爪牙，向他们展示被洗脑者的身份标记，并指向每名他选择的玩家。","otherNight":11,"otherNightReminder":"唤醒被洗脑者，如同他真的拥有爪牙的技能一般让他行动，然后唤醒所有爪牙，向他们展示被洗脑者的身份标记，并指向每名他选择的玩家。","reminders":[],"remindersGlobal":["被洗脑者"],"setup":false,"ability":"你认为你是一名爪牙，但其实你不是，你的技能无效。爪牙们知道你是谁以及你在夜晚选择了谁。"},{"id":"traitor_sos","name":"背叛者","edition":"sos","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["无技能","杀害"],"setup":false,"ability":"你可能被视为一名善良玩家。整局游戏限一次，白天，你可以公开选择一名玩家，他可能被你杀害。"},{"id":"brainleech_sos","name":"脑虫","edition":"sos","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["中毒"],"setup":false,"ability":"与你相邻的存活的善良玩家中毒。"},{"id":"infected_sos","name":"病原体","edition":"sos","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":12,"otherNightReminder":"如果场上还有四名以上玩家存活，你可以使病原体死亡，然后为一名他两侧最近的善良玩家放置中毒标记。","reminders":["中毒","死亡"],"setup":false,"ability":"每个夜晚*，如果有四名以上玩家存活，你可能死亡，然后一名与你相邻的善良玩家中毒。"},{"id":"probe_sos","name":"探针号无人机","edition":"sos","team":"minion","firstNight":10,"firstNightReminder":"探针号无人机指向一名玩家，为那名玩家放置中毒标记，如果那名玩家是村民，唤醒那名玩家，并告知他被注射。","otherNight":13,"otherNightReminder":"探针号无人机指向一名玩家，为那名玩家放置中毒标记，如果那名玩家是村民，唤醒那名玩家，并告知他被注射。","reminders":["中毒"],"setup":false,"ability":"每个夜晚，选择一名玩家，他中毒到下个黄昏，并为他注射。"},{"id":"specimen006_sos","name":"样本#006","edition":"sos","team":"demon","firstNight":2,"firstNightReminder":"告知所有玩家本局游戏的恶魔是样本#006，然后跳过恶魔开局信息的阶段。","otherNight":8,"otherNightReminder":"样本#006指向两名玩家，将那两名玩家杀害。","reminders":["被杀害"],"setup":false,"ability":"所有玩家都知道你在游戏中，你不会获取开局信息。每个夜晚*，选择两名玩家，将他们杀害。"},{"id":"replicant_sos","name":"复制人","edition":"sos","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":9,"otherNightReminder":"复制人指向一名玩家，将那名玩家杀害。","reminders":["被杀害"],"setup":true,"ability":"每个夜晚*，选择一名玩家，将他杀害。你可能被视为一名善良的村民或外来者。[+1外来者]"},{"id":"hel8000_sos","name":"海拉-8000型","edition":"sos","team":"demon","firstNight":9,"firstNightReminder":"让海拉-8000型查看魔典，不限制观看时长。","otherNight":10,"otherNightReminder":"海拉-8000型指向一名玩家，将那名玩家杀害。","reminders":["被杀害"],"setup":true,"ability":"每个夜晚*，选择一名玩家，将他杀害。你的第一个夜晚，你查看魔典。[-1外来者]"},{"id":"crawler_sos","name":"太空异形","edition":"sos","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":4,"otherNightReminder":"太空异形指向一名玩家或杀害所有已被选择的玩家，如果他指向了一名玩家，为那名玩家放置被选择标记，如果那名玩家是村民，为他放置中毒标记并唤醒他，告知他已被注射。如果太空异形选择杀害所有被选择的玩家，将所有放置了被选择标记的玩家杀害。","reminders":["被选择","中毒","被杀害"],"setup":false,"ability":"每个夜晚*，你可以选择一名玩家或杀害所有已被你选择的玩家。被你选择的村民中毒，并为他们注射。"},{"id":"merchant_sos","name":"星际商人","edition":"sos","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["今日已使用"],"setup":false,"ability":"每个白天，你可以给予一个没有投票标记的死亡玩家一个投票标记。"},{"id":"spacepirate_sos","name":"太空海盗","edition":"sos","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["今日已使用"],"setup":false,"ability":"每个白天，你可以公开夺走一名死亡玩家的投票标记。"},{"id":"commander_sos","name":"指挥官","edition":"sos","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":21,"otherNightReminder":"如果被指挥官命令的玩家没有选择指挥官要求选择的目标，你可以将那名玩家杀害。","reminders":["被命令","要求目标","死亡"],"setup":false,"ability":"每个白天，你可以要求一名玩家在今晚必须选择一名玩家作为技能目标，如果他没有那么做，他可能死亡。"},{"id":"bontyhunter_sos","name":"赏金证人","edition":"sos","team":"traveler","firstNight":1,"firstNightReminder":"唤醒赏金证人，并指向一名善良玩家，为那名玩家放置“得知”标记。","otherNight":1,"otherNightReminder":"如果场上一名玩家同时拥有“得知”和“被处决”标记，唤醒赏金证人，并指向一名善良玩家。","reminders":["得知","被处决"],"setup":false,"ability":"游戏开始时，你得知一名善良玩家。如果那名玩家被处决，可能会发生一些好事，并且你会再得知一名善良玩家。"},{"id":"refugee_sos","name":"星际难民","edition":"sos","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"当你被流放时，可能会发生一些不好的事情。（即使你已经被流放）"},{"id":"archmage_wm","name":"大法师","edition":"wm","team":"townsfolk","firstNight":17,"firstNightReminder":"唤醒大法师，如果他点头，你再释放一个法术。","otherNight":13,"otherNightReminder":"唤醒大法师，如果他点头，你再释放一个法术。","reminders":["额外释放"],"setup":false,"ability":"每个夜晚，你可以使当晚有一个额外的法术被释放。"},{"id":"paladin_wm","name":"圣骑士","edition":"wm","team":"townsfolk","firstNight":23,"firstNightReminder":"唤醒圣骑士，如果当天有邪恶玩家的法术被释放，向他点头，否则，向他摇头。","otherNight":22,"otherNightReminder":"唤醒圣骑士，如果当天有邪恶玩家的法术被释放，向他点头，否则，向他摇头。","reminders":["邪恶法术释放"],"setup":false,"ability":"每个夜晚，你得知是否有邪恶玩家的法术被释放。"},{"id":"cryomancer_wm","name":"寒霜法师","edition":"wm","team":"townsfolk","firstNight":9,"firstNightReminder":"","otherNight":0,"otherNightReminder":"寒霜法师指向一名玩家，为那名玩家放置无法释放标记，那名玩家的法术在今晚不能被释放。","reminders":["无法释放"],"setup":false,"ability":"每个夜晚，选择一名玩家，他的法术在今晚不能被释放。"},{"id":"thaumaturge_wm","name":"奇术师","edition":"wm","team":"townsfolk","firstNight":14,"firstNightReminder":"","otherNight":7,"otherNightReminder":"","reminders":[],"setup":false,"ability":"每个夜晚，当第一个法术将要被释放时，你得知那个法术，并且你可以改为释放另一个法术。"},{"id":"druid_wm","name":"德鲁伊","edition":"wm","team":"townsfolk","firstNight":22,"firstNightReminder":"唤醒德鲁伊，并向他展示一个在今晚被成功释放的法术。","otherNight":21,"otherNightReminder":"唤醒德鲁伊，并向他展示一个在今晚被成功释放的法术。","reminders":[],"setup":false,"ability":"每个夜晚，你得知一个被成功释放的法术。"},{"id":"illusionist_wm","name":"幻术师","edition":"wm","team":"townsfolk","firstNight":10,"firstNightReminder":"幻术师指向一名玩家，为那名玩家放置相反标记，当那名玩家的法术被释放时，可能会产生相反的效果。","otherNight":3,"otherNightReminder":"幻术师指向一名玩家，为那名玩家放置相反标记，当那名玩家的法术被释放时，可能会产生相反的效果。","reminders":["相反"],"setup":false,"ability":"每个夜晚，你选择一名玩家，当晚，那名玩家的法术可能会产生相反的效果。"},{"id":"sorcerer_wm","name":"巫师","edition":"wm","team":"townsfolk","firstNight":20,"firstNightReminder":"如果巫师的法术没有被释放，唤醒他，巫师点头强制释放或摇头闭眼睡去，如果巫师点头，你可以释放巫师的法术，并可以选择一名邪恶玩家的法术一同释放。","otherNight":16,"otherNightReminder":"如果巫师的法术没有被释放，唤醒他，巫师点头强制释放或摇头闭眼睡去，如果巫师点头，你可以释放巫师的法术，并可以选择一名邪恶玩家的法术一同释放。","reminders":["强制释放"],"setup":false,"ability":"每个夜晚，如果你的法术没有被释放，你可以强制释放它，但是可能失败。如果你这么做了，一名邪恶玩家的法术可能被同时释放。"},{"id":"clairvoyant_wm","name":"预言法师","edition":"wm","team":"townsfolk","firstNight":24,"firstNightReminder":"预言法师指向一名玩家，将那名玩家尝试释放的法术展示给预言法师。","otherNight":23,"otherNightReminder":"预言法师指向一名玩家，将那名玩家尝试释放的法术展示给预言法师。","reminders":[],"setup":false,"ability":"每个夜晚，选择一名玩家，你得知他尝试释放的法术。"},{"id":"geomancer_wm","name":"风水师","edition":"wm","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":2,"otherNightReminder":"风水师指向一名玩家，如果那名玩家的法术在今晚被释放，为他放置被保护标记。","reminders":["被保护"],"setup":false,"ability":"每个夜晚*，选择一名其他玩家。如果他的法术在今晚被释放，从现在开始，只要你存活，他就免受恶魔侵害。"},{"id":"ritualist_wm","name":"仪式法师","edition":"wm","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["成功1次","成功2次","成功3次"],"setup":false,"ability":"玩家在白天准备法术时可以准备仪式法术，如果有[2+爪牙数]的善良玩家准备仪式法术，则仪式成功。如果仪式释放成功[1+爪牙数]次，你的阵营获胜。邪恶阵营玩家在参与仪式时任然可以准备他们的法术。"},{"id":"cleric_wm","name":"牧师","edition":"wm","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["复活"],"setup":false,"ability":"你可以随意释放三号禁咒。"},{"id":"summoner_wm","name":"召唤师","edition":"wm","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["克隆体"],"setup":false,"ability":"整局游戏限一次，白天，如果你的法术在上个夜晚被释放，你可以在魔典中召唤一个自己的分身。当你们其中一个死亡时，你们一同死亡，你同时掌控两票。"},{"id":"enchanter_wm","name":"附魔师","edition":"wm","team":"townsfolk","firstNight":21,"firstNightReminder":"如果附魔师上个白天没有提交法术，唤醒他，附魔师点头释放自己封存的法术或者摇头闭眼睡去，如果附魔师点头，释放他开局得知的法术。","otherNight":15,"otherNightReminder":"如果附魔师上个白天没有提交法术，唤醒他，附魔师点头释放自己封存的法术或者摇头闭眼睡去，如果附魔师点头，释放他开局得知的法术。","reminders":[],"setup":false,"ability":"你的第一个夜晚，你得知一个被释放的法术。每个夜晚*，你可以释放你得知的法术。"},{"id":"apprentice_wm","name":"导管法师","edition":"wm","team":"outsider","firstNight":11,"firstNightReminder":"导管法师指向一名玩家，为那名玩家放置导管连接标记。如果今晚导管法师的法术被释放，改为释放那名玩家的法术。","otherNight":4,"otherNightReminder":"导管法师指向一名玩家，为那名玩家放置导管连接标记。如果今晚导管法师的法术被释放，改为释放那名玩家的法术。","reminders":["导管连接"],"setup":false,"ability":"每个夜晚，选择一名玩家，如果你的法术将要在今晚被释放，改为释放他的法术。"},{"id":"chaosmage_wm","name":"混沌法师","edition":"wm","team":"outsider","firstNight":15,"firstNightReminder":"当混沌法师的法术被释放时，可能发生一些不好的事情，厄运的内容由你决定。","otherNight":8,"otherNightReminder":"当混沌法师的法术被释放时，可能发生一些不好的事情，厄运的内容由你决定。","reminders":["厄运"],"setup":false,"ability":"当你的法术被释放时，可能会发生一些不好的事情，这个效果忽略会阻止它的效果。"},{"id":"pyromancer_wm","name":"烈焰术士","edition":"wm","team":"outsider","firstNight":19,"firstNightReminder":"当烈焰术士的法术被释放时，可能会有至多两名玩家死亡，是否死亡/谁死亡由你决定。","otherNight":9,"otherNightReminder":"当烈焰术士的法术被释放时，可能会有至多两名玩家死亡，是否死亡/谁死亡由你决定。","reminders":["死亡"],"setup":false,"ability":"当你的法术被释放时，可能会有至多两名玩家死亡。"},{"id":"entropist_wm","name":"反熵法师","edition":"wm","team":"outsider","firstNight":12,"firstNightReminder":"移除一名善良玩家的法术，即使反熵法师已死亡。","otherNight":5,"otherNightReminder":"移除一名善良玩家的法术，即使反熵法师已死亡。","reminders":["今晚移除"],"setup":false,"ability":"每个夜晚，一名善良玩家的法术被摧毁，即使你已经死亡。"},{"id":"necromancer_wm","name":"死灵法师","edition":"wm","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":10,"otherNightReminder":"唤醒死灵法师并给他查看所有死亡玩家在先前准备的法术，他可以选择其中之一释放。","reminders":[],"setup":false,"ability":"每个夜晚*，你可以释放一名死亡玩家在先前准备的法术，但可能释放失败。"},{"id":"warlock_wm","name":"天眼术士","edition":"wm","team":"minion","firstNight":18,"firstNightReminder":"天眼术士查看魔典和所有法术，他可以选择其中一名善良玩家的法术来释放。","otherNight":12,"otherNightReminder":"天眼术士查看魔典和所有法术，他可以选择其中一名善良玩家的法术来释放。","reminders":[],"setup":false,"ability":"每个夜晚，你查看魔典和所有法术，然后，你可以释放一名善良玩家的法术。"},{"id":"infernomancer_wm","name":"炼狱术士","edition":"wm","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":11,"otherNightReminder":"炼狱术士点头杀害自己或摇头闭眼睡去，如果他杀害了自己，恶魔的法术可能被释放。","reminders":["杀害"],"setup":false,"ability":"每个夜晚*，如果场上有五名以上玩家存活，你可以杀害自己。如果你这么做，你可能释放恶魔准备的法术。"},{"id":"bloodmage_wm","name":"血法师","edition":"wm","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["死亡","变得邪恶","技能覆盖","复活"],"setup":false,"ability":"你可以释放禁咒。如果你这么做，你死亡。"},{"id":"draconis_wm","name":"龙巫","edition":"wm","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":17,"otherNightReminder":"龙巫指向一名玩家，将他杀害。","reminders":["被杀害"],"setup":true,"ability":"每个夜晚*，选择一名玩家，将他杀害。你每个白天可以准备至多三个法术。[+1外来者]"},{"id":"infernal_wm","name":"炼狱","edition":"wm","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":18,"otherNightReminder":"炼狱指向一名玩家，将他杀害。","reminders":["被杀害"],"setup":false,"ability":"每个夜晚*，选择一名玩家，将他杀害。法术可能产生相反的效果。"},{"id":"theshroudedvoid_wm","name":"秘骸","edition":"wm","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":20,"otherNightReminder":"秘骸指向一名玩家，将他杀害，然后向秘骸展示所有在今晚被释放的法术。","reminders":["被杀害"],"setup":false,"ability":"每个夜晚*，选择一名玩家，将他杀害。你得知今晚所有被释放的法术。"},{"id":"backlash_wm","name":"驳魂","edition":"wm","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":19,"otherNightReminder":"驳魂指向一名玩家，将他杀害，在今晚成功释放法术的善良玩家也可能被杀害。","reminders":["释放成功","被杀害"],"setup":false,"ability":"每个夜晚*，选择一名玩家，将他杀害。成功施放法术的善良玩家可能死亡。"},{"id":"scribe_wm","name":"卷轴法师","edition":"wm","team":"traveler","firstNight":14,"firstNightReminder":"向卷轴法师展示所有你决定释放的法术，他可以在其中一个法术中增加/修改/删除一个词。","otherNight":7,"otherNightReminder":"向卷轴法师展示所有你决定释放的法术，他可以在其中一个法术中增加/修改/删除一个词。","reminders":[],"setup":false,"ability":"每个夜晚，查看所有将要被释放的法术，你可以在其中的一个法术中增加/修改/删除一个词。"},{"id":"partymagician_wm","name":"宴会法师","edition":"wm","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["首先&额外释放"],"setup":false,"ability":"如果你的法术很搞笑，你的法术就会第一个被释放，并且当晚会有一个额外法术被释放。"},{"id":"bard_wm","name":"吟游歌者","edition":"wm","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":[],"setup":false,"ability":"你的法术内容改为歌词，如果这个法术被释放，说书人会根据你的歌词制定出对应的法术并释放。"},{"id":"wellspring_wm","name":"泉涌法师","edition":"wm","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["释放全部"],"setup":false,"ability":"你的法术不会被释放。如果你死亡，当晚，释放你的所有法术。"},{"id":"skeptic_wm","name":"怀疑论者","edition":"wm","team":"traveler","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["无效"],"setup":false,"ability":"你不能准备法术。每个白天，你都可以公开要求说书人使今晚第一个被释放的法术无效。"},{"id":"cassanova_bim","name":"花花公子","edition":"bim","team":"townsfolk","firstNight":15,"firstNightReminder":"花花公子指向身份表格上任一善良身份，如果那个身份在游戏中，为那个身份放置“一同死亡”标记。","otherNight":0,"otherNightReminder":"","reminders":["一同死亡"],"setup":false,"ability":"游戏开始时，你选择一个善良身份。如果该身份在游戏中，当你死亡时，对应的玩家一同死亡。"},{"id":"vicar_bim","name":"牧师","edition":"bim","team":"townsfolk","firstNight":14,"firstNightReminder":"唤醒牧师左右两侧最近的村民之一，为他放置得知标记，并向他展示牧师的身份标志。","otherNight":0,"otherNightReminder":"","reminders":["得知"],"setup":false,"ability":"游戏开始时，一名与你相邻的村民得知你的存在。当你在夜晚死亡时，下个白天，拜访说书人并获取一些信息。"},{"id":"bartender_bim","name":"酒保","edition":"bim","team":"townsfolk","firstNight":19,"firstNightReminder":"唤醒酒保，并向他展示一个技能在当晚正常生效的身份标志。","otherNight":19,"otherNightReminder":"唤醒酒保，并向他展示一个技能在当晚正常生效的身份标志。","reminders":[],"setup":false,"ability":"每个夜晚，你得知一个在当晚技能正常生效的身份。"},{"id":"jailor_bim","name":"狱警","edition":"bim","team":"townsfolk","firstNight":13,"firstNightReminder":"狱警指向一名玩家，为那名玩家放置无法行动标记。","otherNight":12,"otherNightReminder":"狱警指向一名玩家，为那名玩家放置无法行动标记。如果那名玩家已经被放置了无法行动标记，将他杀害。移除先前放置的无法行动标记。","reminders":["无法行动","死亡"],"setup":false,"ability":"每个夜晚，选择一名存活玩家，如果他是一名村民，今晚他无法行动。如果你昨天也选择了他，他死亡。"},{"id":"waiter_bim","name":"服务员","edition":"bim","team":"townsfolk","firstNight":16,"firstNightReminder":"服务员指向一名玩家，如果他两侧的玩家属于同一阵营，向他点头，否则向他摇头。如果那名玩家属于邪恶阵营，为服务员放置醉酒标记。","otherNight":17,"otherNightReminder":"服务员指向一名玩家，如果他两侧的玩家属于同一阵营，向他点头，否则向他摇头。如果那名玩家属于邪恶阵营，为服务员放置醉酒标记。","reminders":["醉酒"],"setup":false,"ability":"每个夜晚，选择一名玩家，你得与他相邻的玩家是否属于同一阵营。如果你选择了一名邪恶玩家，你醉酒直到下个黄昏。"},{"id":"lieutenant_bim","name":"警督","edition":"bim","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":14,"otherNightReminder":"警督指向一名玩家，如果那名玩家是爪牙，你选择一名外来者，为他放置醉酒标记，然后他死亡。","reminders":["醉酒","死亡"],"setup":true,"ability":"每个夜晚*，选择一名玩家，如果他是爪牙，一名外来者醉酒并死亡。[+0/1外来者]"},{"id":"detective_bim","name":"侦探","edition":"bim","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":16,"otherNightReminder":"唤醒侦探，如果有玩家由于其他村民的技能而死亡，向他点头，否则向他摇头。","reminders":[],"setup":false,"ability":"每个夜晚*，你得知是否有玩家由于其他村民的技能而死亡。"},{"id":"warden_bim","name":"看守","edition":"bim","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":18,"otherNightReminder":"唤醒看守，向他竖起等同于恶魔两侧最近的死亡玩家数量的手指（0,1,2等）。","reminders":[],"setup":false,"ability":"每个夜晚*，你得知与恶魔相邻的死亡的玩家中，有多少名属于邪恶阵营。"},{"id":"bouncer_bim","name":"保镖","edition":"bim","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":5,"otherNightReminder":"保镖指向两名与上一夜不同的玩家，为那两名玩家放置不会死亡标记，如果保镖在今晚被恶魔杀害，他们一同死亡。","reminders":["不会死亡","死亡"],"setup":false,"ability":"每个夜晚*，选择两名其他玩家（需与上一夜不同），如果他们都属于善良阵营，今晚他们不会死亡。如果你被恶魔杀害，他们一同死亡。"},{"id":"governor_bim","name":"州长","edition":"bim","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":6,"otherNightReminder":"如果在上个白天有玩家在与你的私聊中触发了州长的技能，为州长放置不会死亡标志。","reminders":["不会死亡","疯狂"],"setup":false,"ability":"每个白天，如果至少一名其他玩家（需与上个白天不同）在和说书人的私聊中对“你是州长”疯狂，则你在今晚不会死亡。"},{"id":"student_bim","name":"学生","edition":"bim","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":13,"otherNightReminder":"如果你回答了学生的问题，为他放置好奇害死猫标记，如果他拥有这个标记，你可以在夜晚将他杀害。","reminders":["好奇害死猫","死亡"],"setup":false,"ability":"每个白天，你可以私下询问说书人一个问题，如果说书人回答了你，你可能会在今晚死亡。"},{"id":"marshall_bim","name":"执法官","edition":"bim","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":7,"otherNightReminder":"执法官点头发动技能或不发动技能，如果执法官发动技能，今晚不会有任何玩家死亡，并为执法官放置无技能标记。","reminders":["无技能"],"setup":false,"ability":"整局游戏限一次，夜晚，阻止在当晚的所有死亡。"},{"id":"unionist_bim","name":"帮派成员","edition":"bim","team":"townsfolk","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["是帮派成员","中毒"],"setup":false,"ability":"当你第一次提名并处决一名玩家时，你获得他的技能。如果被处决的玩家属于邪恶阵营，你中毒。"},{"id":"executioner_bim","name":"行刑官","edition":"bim","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":17,"otherNightReminder":"为一名玩家放置醉酒标记，唤醒行刑官，向行刑官展示那名玩家的身份标志。","reminders":["醉酒"],"setup":false,"ability":"游戏开始时，你得知一个在场身份，该身份对应玩家醉酒。当白天只剩下三名玩家存活并且当天无人被处决时，你的阵营落败，即使你死了。"},{"id":"witness_bim","name":"证人","edition":"bim","team":"outsider","firstNight":18,"firstNightReminder":"为一名玩家放置被目击标记，唤醒那名玩家，向他展示证人的身份标志。","otherNight":0,"otherNightReminder":"","reminders":["被目击"],"setup":false,"ability":"游戏开始时，一名玩家得知你的存在。如果该玩家因为提名被处决，他的阵营落败。他可能被视为一名邪恶的爪牙或恶魔，即使你死了。"},{"id":"pariah_bim","name":"贱民","edition":"bim","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["被处决","疯狂"],"setup":false,"ability":"如果你或者一名活着的外来者对“我是外来者”疯狂，一名善良玩家可能被处决，即使你死了。"},{"id":"boilermaker_bim","name":"锅炉工","edition":"bim","team":"outsider","firstNight":0,"firstNightReminder":"","otherNight":0,"otherNightReminder":"","reminders":["错误信息"],"setup":false,"ability":"与你相邻的村民技能获取错误信息，即使你死了。"},{"id":"blackmailer_bim","name":"敲诈犯","edition":"bim","team":"minion","firstNight":11,"firstNightReminder":"敲诈犯指向一名玩家，为那名玩家放置被敲诈标记，他可能被视为任何身份/阵营，直到下个黄昏。","otherNight":3,"otherNightReminder":"敲诈犯指向一名玩家，为那名玩家放置被敲诈标记，他可能被视为任何身份/阵营，直到下个黄昏。","reminders":["被敲诈"],"setup":false,"ability":"每个夜晚，选择一名玩家，他可能被视为任何身份/阵营，直到下个黄昏。"},{"id":"arsonist_bim","name":"纵火狂","edition":"bim","team":"minion","firstNight":12,"firstNightReminder":"纵火狂指向一名玩家，唤醒那名玩家，向他展示“这个身份选择了你”卡和纵火狂的身份标志，并为那名玩家放置浇油！标记。","otherNight":4,"otherNightReminder":"纵火狂指向一名玩家，唤醒那名玩家，向他展示“这个身份选择了你”卡和纵火狂的身份标志，并为那名玩家放置浇油！标记。","reminders":["浇油！"],"setup":false,"ability":"每个夜晚，选择一名玩家，如果你选择的玩家对“本局游戏存在纵火狂”疯狂，被你选择过的玩家可能被全部处决。"},{"id":"cleaner_bim","name":"清洁工","edition":"bim","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":2,"otherNightReminder":"如果有玩家死亡且是第一名死亡，唤醒他，并向他展示清洁工的身份标志。","reminders":["获取技能","得知"],"setup":false,"ability":"你拥有最近被处决的爪牙的技能。第一名死亡的玩家知道你的存在。只要你存活，善良阵营就无法获胜。"},{"id":"framer_bim","name":"欺诈师","edition":"bim","team":"minion","firstNight":0,"firstNightReminder":"","otherNight":15,"otherNightReminder":"为被恶魔杀害的玩家放置伪装标记，不要宣布他们的死亡。","reminders":["伪装"],"setup":false,"ability":"被恶魔杀死的玩家得知欺诈师的存在，并且在其他玩家眼中仍然存活。如果死亡的玩家发起了提名，他的阵营落败。"},{"id":"wendigo_bim","name":"温迪戈","edition":"bim","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":9,"otherNightReminder":"你选择一名玩家杀害。你可以唤醒拥有处决同伴标记的善良玩家，将他转入邪恶阵营并告知他。","reminders":["被杀害","处决同伴","邪恶"],"setup":false,"ability":"每个夜晚*，一名玩家被杀害。如果一名善良玩家提名并处决了另一名善良玩家，发起提名的善良玩家可能在当晚变为一个邪恶的温迪戈。"},{"id":"yurei_bim","name":"幽灵","edition":"bim","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":10,"otherNightReminder":"幽灵选择一名玩家，将他杀害。如果幽灵选择杀害自己，在魔典中央放置已附体标记，然后一名与你私聊过的玩家变为新的幽灵，告知他他的身份和阵营的变化。","reminders":["被杀害","已附体","私聊过"],"setup":true,"ability":"每个夜晚*，选择一名玩家，将他杀害。当幽灵第一次通过这种方式杀害自己时，上个白天和说书人私聊过的一名玩家变为邪恶的幽灵。[-1外来者]"},{"id":"keresa_bim","name":"领主","edition":"bim","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":11,"otherNightReminder":"领主选择一名玩家，将他杀害。如果上个白天有爪牙被处决，改为选择两名玩家。","reminders":["被杀害","两次杀害"],"setup":true,"ability":"每个夜晚*，选择一名玩家，将他杀害。如果当天有爪牙被处决，改为选择两名玩家杀害。[+1外来者]"},{"id":"sleeper_bim","name":"夜魇","edition":"bim","team":"demon","firstNight":0,"firstNightReminder":"","otherNight":8,"otherNightReminder":"夜魇选择一名玩家，将他杀害，或者不选择任何玩家，如果他这么做，在魔典中央放置全体中毒标记，代表所有村民中毒。","reminders":["被杀害","全体中毒"],"setup":true,"ability":"每个夜晚*，你可以选择一名玩家，将他杀害。如果你没有选择玩家，所有村民中毒，直到下个黄昏。[-1外来者]"}]'
    )
  },
  b223: function (e, t, i) {
    e.exports = i.p + 'img/mayor.da8876ae.png'
  },
  b249: function (e) {
    e.exports = JSON.parse(
      '[{"id":"doomsayer","firstNightReminder":"","otherNightReminder":"","reminders":[],"setup":false,"name":"末日使者","team":"fabled","ability":"如果有4名以上玩家存活，每名玩家限一次，你可以公开要求说书人杀死一名与他阵营相同的玩家。"},{"id":"angel","firstNightReminder":"","otherNightReminder":"","reminders":["被保护","不好的事"],"setup":false,"name":"天使","team":"fabled","ability":"对新玩家的死亡负最大责任的玩家可能会遭遇一些不好的事情。"},{"id":"buddhist","firstNightReminder":"","otherNightReminder":"","reminders":[],"setup":false,"name":"佛祖","team":"fabled","ability":"在每一天的前2分钟，老玩家禁止发言。"},{"id":"hellslibrarian","firstNightReminder":"","otherNightReminder":"","reminders":["不好的事"],"setup":false,"name":"地狱图书馆员","team":"fabled","ability":"当说书人要求安静时，还在说话的玩家可能会遭遇一些不好的事情。"},{"id":"revolutionary","firstNightReminder":"","otherNightReminder":"","reminders":["被使用"],"setup":false,"name":"革命家","team":"fabled","ability":"指定两名阵营相同且彼此相邻的玩家。整局游戏限一次，他们可能被视为其他身份/阵营。"},{"id":"fiddler","firstNightReminder":"","otherNightReminder":"","reminders":[],"setup":false,"name":"提琴手","team":"fabled","ability":"整局游戏限一次，恶魔秘密选择一名对立阵营的玩家，所有玩家投票选择其中一名玩家获胜。"},{"id":"toymaker","firstNightReminder":"","otherNight":1,"otherNightReminder":"如果当晚恶魔的杀害会结束游戏，为恶魔放置“末夜禁止攻击”标记，然后跳过恶魔的行动。（恶魔不会被唤醒）","reminders":["末夜禁止攻击"],"setup":false,"name":"玩具匠人","team":"fabled","ability":"恶魔可以选择在夜晚放弃杀害，并且整局游戏至少要放弃一次。恶魔和爪牙正常获取开局信息。"},{"id":"fibbin","firstNightReminder":"","otherNightReminder":"","reminders":["已使用"],"setup":false,"name":"菲宾","team":"fabled","ability":"整局游戏限一次，使一名善良阵营的玩家可能获取错误信息。"},{"id":"duchess","firstNightReminder":"","otherNight":1,"otherNightReminder":"依次唤醒每名拥有拜访者/错误信息标记的玩家。向他们展示女伯爵的标记，然后告知他们拥有拜访者/错误信息标记的玩家中有多少名属于邪恶阵营，如果你唤醒了一名拥有错误信息标记的玩家，告知他除了真实信息之外的任意答案。","reminders":["拜访者","错误信息"],"setup":false,"name":"女伯爵","team":"fabled","ability":"每个白天，3名玩家可以来拜访你。当晚*，你告知这些玩家他们之中有几名玩家属于邪恶阵营，一名玩家获取错误信息。"},{"id":"sentinel","firstNightReminder":"","otherNightReminder":"","reminders":[],"setup":true,"name":"哨兵","team":"fabled","ability":"本局游戏可能±1外来者。"},{"id":"spiritofivory","firstNightReminder":"","otherNightReminder":"","reminders":["无额外邪恶"],"setup":false,"name":"圣洁之魂","team":"fabled","ability":"整局游戏不会出现超过1名的额外邪恶玩家。"},{"id":"djinn","firstNight":0,"firstNightReminder":"","otherNightReminder":"","reminders":[],"setup":false,"name":"神灵","team":"fabled","ability":"采用神灵特殊规则，所有玩家都知道这条规则是什么。"},{"id":"stormcatcher","firstNight":1,"firstNightReminder":"为一名善良玩家放置安全标记，唤醒每名邪恶玩家并告知他们被标记的玩家是谁。","otherNightReminder":"","reminders":["安全"],"setup":false,"name":"风暴主宰","team":"fabled","ability":"游戏开始时，选择一个善良身份，如果该身份在游戏中，对应玩家只能因为处决而死亡，但是邪恶阵营知道他是谁。"},{"id":"deusexfiasco","firstNightReminder":"","otherNightReminder":"","reminders":["哎呀"],"setup":false,"name":"机械降神","team":"fabled","ability":"整局游戏限一次，说书人会犯一个错误，说书人可以纠正错误并公开承认它。"},{"id":"spell_wm","name":"法术释放","team":"fabled","firstNight":13,"firstNightReminder":"","otherNight":6,"otherNightReminder":"","reminders":[],"setup":false,"ability":"用于夜晚行动顺序表，标注了法术在何时被释放。"}]'
    )
  },
  b278: function (e, t, i) {
    e.exports = i.p + 'img/backlash_wm.2818b0e5.png'
  },
  b30c: function (e, t, i) {
    e.exports = i.p + 'img/professor.48f01bcb.png'
  },
  b3d9: function (e, t, i) {
    e.exports = i.p + 'img/ysbaddaden_sr.00a0619a.png'
  },
  b55d: function (e, t, i) {
    e.exports = i.p + 'img/warlock_mm.3a8bd50f.png'
  },
  b570: function (e, t, i) {
    e.exports = i.p + 'img/investigator.a817cc04.png'
  },
  b7e8: function (e, t, i) {
    e.exports = i.p + 'img/snitch.0f51b730.png'
  },
  b977: function (e, t, i) {
    e.exports = i.p + 'img/astrologer_aoi.5a32a807.png'
  },
  ba9b: function (e, t, i) {
    e.exports = i.p + 'img/tealady.5fc21e59.png'
  },
  bb2f: function (e, t, i) {
    e.exports = i.p + 'img/sos.90a99216.png'
  },
  bb7a: function (e, t, i) {
    e.exports = i.p + 'img/empath.b772c7ff.png'
  },
  bba0: function (e, t, i) {},
  bd0d: function (e, t, i) {},
  bdbb: function (e, t, i) {
    e.exports = i.p + 'img/machinist_bge.d53c9c43.png'
  },
  bdc5: function (e) {
    e.exports = JSON.parse(
      '[{"id":"insane","name":"癫狂","edition":"aoi","description":"癫狂的玩家必定获取错误信息（类似于混沌的效果），癫狂不会因为效果来源的死亡/中毒/醉酒/消失而解除。"},{"id":"bloodied","name":"流血","edition":"iob","description":"流血的玩家如果再次被施加流血状态就会死亡。流血不会因为效果来源的死亡/中毒/醉酒/消失而解除。"},{"id":"clockhand","name":"命运时针","edition":"iob","description":"命运时针在游戏开始时指向恶魔，每个黄昏，顺时针旋转并指向下一名玩家，许多角色的技能和命运时针有联动效果。"},{"id":"triaged","name":"防护","edition":"iob","description":"被防护的玩家无法被施加流血效果，如果被防护的玩家死亡，改为被施加流血效果。"},{"id":"upgrade","name":"升级","edition":"mm","description":"当一名玩家的技能被升级时，他的技能将变得更加强大（但他不知道），升级后的效果由说书人决定。"},{"id":"possessed","name":"附体","edition":"ti","description":"该剧本的恶魔[]内的文字代表他会附身的身份类型，被附身的玩家均获得以下技能：你认为你是一名[]内的对应身份，尽管你不是，但你拥有他的技能。从第二夜开始，一名被你选择的玩家会被你杀害。爪牙们代替你得知开局信息，但他们得知的恶魔可能是错误的。"},{"id":"injection","name":"注射","edition":"sos","description":"当一名玩家被注射时，如果他是一名村民，他会得知自己被注射。"},{"id":"spell","name":"法术","edition":"wm","description":"白天，玩家可以将一件想要发生的事情写在纸条上，并在上面写上名称，这个纸条被称为法术，这个行为被称为准备法术。"},{"id":"cast","name":"施放","edition":"wm","description":"每个夜晚，说书人会随机抽取[1+爪牙数]的法术，被抽取的法术描述的事情可能会成真（这被称为释放法术）。如果说书人没有决定释放法术，重复该流程，直到所有的法术都被丢弃，或者有[1+爪牙数]的法术已被释放。"},{"id":"forbiddenspell","name":"禁咒","edition":"wm","description":"包含以下一项或多项效果的法术被称为禁咒：1)改变阵营;2)废除/改变/提供技能;3)复活。"}]'
    )
  },
  bdd9: function (e, t, i) {
    e.exports = i.p + 'img/forager_iob.ea1b2422.png'
  },
  bddc: function (e, t, i) {
    e.exports = i.p + 'img/copycat_ti.916d4069.png'
  },
  be22: function (e, t, i) {
    e.exports = i.p + 'img/illusionist_wm.d51faf3d.png'
  },
  bfe2: function (e, t, i) {
    e.exports = i.p + 'img/angel.cae6c8fc.png'
  },
  c0aa: function (e, t, i) {
    e.exports = i.p + 'img/piper_mm.a04a84ba.png'
  },
  c234: function (e, t, i) {
    e.exports = i.p + 'img/contessa_bge.2d0440c2.png'
  },
  c24f: function (e, t, i) {
    e.exports = i.p + 'img/evil.8723a4ee.png'
  },
  c252: function (e, t, i) {
    e.exports = i.p + 'img/geomancer_wm.b7e9749b.png'
  },
  c283: function (e, t, i) {
    e.exports = i.p + 'img/captain_sos.34198a6f.png'
  },
  c316: function (e, t, i) {
    e.exports = i.p + 'img/lycanthrope.48660758.png'
  },
  c3d7: function (e, t, i) {
    e.exports = i.p + 'img/lse.c6378a06.png'
  },
  c492: function (e, t, i) {
    e.exports = i.p + 'img/lilmonsta.4814ed76.png'
  },
  c514: function (e, t, i) {
    e.exports = i.p + 'img/scholar_aoi.4827f05b.png'
  },
  c559: function (e, t, i) {
    e.exports = i.p + 'img/securityguard_ti.4c3ff379.png'
  },
  c5db: function (e, t, i) {
    e.exports = i.p + 'img/fisherman.0511031e.png'
  },
  c71b: function (e, t, i) {
    e.exports = i.p + 'img/understudy_lse.506597a3.png'
  },
  c73a: function (e, t, i) {
    e.exports = i.p + 'img/po.015a8956.png'
  },
  c7b7: function (e, t, i) {
    e.exports = i.p + 'img/mezepheles.b1f4ea9e.png'
  },
  c825: function (e) {
    e.exports = JSON.parse(
      '[{"id":"Chambermaid","hatred":[{"id":"Mathematician","reason":"女佣知道数学家在今晚是否醒来，即使女佣被唤醒的顺序先于数学家。"}]},{"id":"Butler","hatred":[{"id":"Cannibal","reason":"如果食人族获得了家仆的技能，食人族会得知。"}]},{"id":"Lunatic","hatred":[{"id":"Mathematician","reason":"数学家会得知狂人的攻击目标是否与恶魔真正的攻击目标不同，如果是这样，狂人的技能被算作未正常生效。"}]},{"id":"Pit-Hag","hatred":[{"id":"Heretic","reason":"炼药师不可以创造异教徒。"},{"id":"Damsel","reason":"如果炼药师想要创造少女，由说书人决定谁来变为少女。"},{"id":"Politician","reason":"炼药师不可以创造邪恶的政治家"}]},{"id":"Cerenovus","hatred":[{"id":"Goblin","reason":"洗脑师可以使一名玩家对他是哥布林疯狂。"}]},{"id":"Leviathan","hatred":[{"id":"Soldier","reason":"如果利维坦提名并处决了军人，军人不会死亡。"},{"id":"Monk","reason":"如果利维坦提名并处决了僧侣保护的目标，那名玩家不会死亡。"},{"id":"Innkeeper","reason":"如果利维坦提名并处决了旅店老板保护的目标，那名玩家不会死亡。"},{"id":"Ravenkeeper","reason":"如果利维坦在游戏中，而养鸦人被处决，养鸦人在死亡的当晚被唤醒并使用技能。"},{"id":"Sage","reason":"如果利维坦在游戏中，而贤者被处决，贤者在死亡的当晚被唤醒并使用技能。"},{"id":"Farmer","reason":"如果利维坦在游戏中，而农夫被处决，一名善良玩家在农夫死亡的当晚变为新的农夫。"},{"id":"Mayor","reason":"如果利维坦在游戏中，并且第五天无人被处决，善良阵营获胜。"}]},{"id":"Al-Hadikhia","hatred":[{"id":"Scarlet Woman","reason":"如果场上有两个存活的血肉囚笼，荡妇变成的血肉囚笼会变回荡妇。"},{"id":"Mastermind","reason":"不会同时出现在游戏中。邪恶方知道哪个在游戏中，并且知道他是谁。"}]},{"id":"Lil\' Monsta","hatred":[{"id":"Poppy Grower","reason":"如果罂粟农在游戏中，爪牙们不会同时醒来。而是依次被唤醒，直到其中一人主动选择被罪孽之种寄生。"},{"id":"Magician","reason":"不会同时出现在游戏中。"},{"id":"Scarlet Woman","reason":"如果有五名以上玩家存活并且罪孽之种的宿主死亡，荡妇在当晚被罪孽之种寄生。"}]},{"id":"Lycanthrope","hatred":[{"id":"Gambler","reason":"如果狼人存活且赌徒在当晚导致自己死亡，当晚不会有任何玩家死亡。"}]},{"id":"Legion","hatred":[{"id":"Engineer","reason":"军团和工程师在游戏开始时不可同时存在于游戏中。如果工程师选择创造军团，半数以上玩家（包括所有邪恶玩家）变为邪恶的军团。"},{"id":"Preacher","reason":"不会同时出现在游戏中。"}]},{"id":"Fang Gu","hatred":[{"id":"Scarlet Woman","reason":"如果染魂选择了一名外来者导致自己死亡，荡妇不会变成染魂。"}]},{"id":"Spy","hatred":[{"id":"Magician","reason":"当间谍查看魔典时，移除魔术师和恶魔的身份标志。"},{"id":"Alchemist","reason":"炼金术士无法获得间谍的技能。"},{"id":"Poppy Grower","reason":"如果罂粟农在游戏中，间谍不能查看魔典直到罂粟农死亡。"},{"id":"Damsel","reason":"不会同时出现在游戏中。"},{"id":"Heretic","reason":"不会同时出现在游戏中。"}]},{"id":"Widow","hatred":[{"id":"Magician","reason":"当寡妇查看魔典时，移除魔术师和恶魔的身份标志。"},{"id":"Poppy Grower","reason":"如果罂粟农在游戏中，寡妇不能查看魔典直到罂粟农死亡。"},{"id":"Alchemist","reason":"炼金术士无法获得间谍的技能。"},{"id":"Damsel","reason":"不会同时出现在游戏中。"},{"id":"Heretic","reason":"不会同时出现在游戏中。"}]},{"id":"Godfather","hatred":[{"id":"Heretic","reason":"不会同时出现在游戏中。"}]},{"id":"Marionette","hatred":[{"id":"Lil\' Monsta","reason":"傀儡与一名爪牙相邻，而非恶魔。在爪牙们选择罪孽之种寄生目标时，傀儡不会被唤醒。"},{"id":"Poppy Grower","reason":"当罂粟农死亡时，恶魔得知傀儡是谁，但是傀儡不会得知任何事情。"},{"id":"Snitch","reason":"傀儡在游戏开始时不会得知三个不在场身份，但是当告密者死亡时他会得知三个不在场身份。"},{"id":"Balloonist","reason":"如果傀儡认为他是热气球驾驶员，+1外来者。"},{"id":"Damsel","reason":"傀儡不会得知少女在游戏中。"},{"id":"Huntsman","reason":"如果傀儡认为他是猎人，+少女。"}]},{"id":"Riot","hatred":[{"id":"Engineer","reason":"暴乱和工程师在游戏开始时不可同时存在于游戏中。如果工程师选择创造暴乱，所有邪恶玩家变为暴乱。"},{"id":"Golem","reason":"如果魔像提名了一名暴乱，那名玩家不会死亡。"},{"id":"Snitch","reason":"如果告密者在游戏中，每名暴乱玩家额外得知三个不在场身份"},{"id":"Saint","reason":"如果善良玩家提名并杀害了圣徒，圣徒的阵营落败。"},{"id":"Butler","reason":"家仆不可以提名他的主人。"},{"id":"Pit-Hag","reason":"如果炼药师创造了一名暴乱，所有邪恶玩家变为暴乱。如果此时已经是第三天之后的某一天，游戏再多进行一天。"},{"id":"Mayor","reason":"如果第三天开始时场上只有三名玩家存活，玩家们可以主动选择完全放弃提名。如果他们这么做了，并且镇长在场，镇长的阵营获胜。"},{"id":"Monk","reason":"如果暴乱提名了被僧侣保护的玩家，那名玩家不会死亡。"},{"id":"Farmer","reason":"如果暴乱提名并杀害了农夫，一名善良玩家在农夫死亡的当晚变为新的农夫。"},{"id":"Innkeeper","reason":"如果暴乱提名了被旅店老板保护的玩家，那名玩家不会死亡。"},{"id":"Sage","reason":"如果暴乱提名并杀害了贤者，贤者在死亡的当晚被唤醒并使用技能。"},{"id":"Ravenkeeper","reason":"如果暴乱提名并杀害了养鸦人，养鸦人在死亡的当晚被唤醒并使用技能。"},{"id":"Soldier","reason":"如果暴乱提名了军人, 军人不会死亡。"},{"id":"Grandmother","reason":"如果暴乱提名并杀害了祖母的孙子，祖母一同死亡。"},{"id":"King","reason":"如果暴乱提名并杀害了国王，同时唱诗班存活，唱诗班在国王死亡的当晚被唤醒并使用技能。"},{"id":"Exorcist","reason":"不会同时出现在游戏中。"},{"id":"Minstrel","reason":"不会同时出现在游戏中。"},{"id":"Flowergirl","reason":"不会同时出现在游戏中。"},{"id":"Undertaker","reason":"因提名而死亡的玩家对于送葬者而言是被处决的。"},{"id":"Cannibal","reason":"因提名而死亡的玩家对于食人族而言是被处决的。"},{"id":"Pacifist","reason":"因提名而死亡的玩家对于食人族而言是被处决的。"},{"id":"Devil\'s Advocate","reason":"因提名而死亡的玩家对于食人族而言是被处决的。"},{"id":"Investigator","reason":"对调查员而言，暴乱被视为爪牙。"},{"id":"Clockmaker","reason":"对钟表匠而言，暴乱被视为爪牙。"},{"id":"Town Crier","reason":"对传令员而言，暴乱被视为爪牙。"},{"id":"Damsel","reason":"对少女而言，暴乱被视为爪牙。"},{"id":"Preacher","reason":"对传教士而言，暴乱被视为爪牙。"}]},{"id":"Lleech","hatred":[{"id":"Mastermind","reason":"如果主谋存活，而噬脑魔的宿主因处决而死亡。噬脑魔不会死亡但是失去技能。"},{"id":"Slayer","reason":"如果杀手选中了噬脑魔的宿主，他死亡。"}]}]'
    )
  },
  c850: function (e, t, i) {},
  c86c: function (e, t, i) {
    e.exports = i.p + 'img/yurei_bim.550a439c.png'
  },
  c97a: function (e, t, i) {
    e.exports = i.p + 'img/spira_aoi.8a56e488.png'
  },
  c9f5: function (e, t, i) {
    e.exports = i.p + 'img/grandmother.18ee536e.png'
  },
  ca7a: function (e, t, i) {
    e.exports = i.p + 'img/atheist.d8060ae8.png'
  },
  cadc: function (e, t, i) {
    e.exports = i.p + 'img/gossip.5165a7ee.png'
  },
  cae1: function (e, t, i) {
    e.exports = i.p + 'img/bmr-demon.75dfa056.png'
  },
  caff: function (e, t, i) {
    e.exports = i.p + 'img/stalker_iob.454b4a86.png'
  },
  cb09: function (e, t, i) {
    e.exports = i.p + 'img/bard_wm.743a8ede.png'
  },
  cb2e: function (e, t, i) {
    e.exports = i.p + 'img/omen_lse.a8d840fd.png'
  },
  cba1: function (e, t, i) {
    e.exports = i.p + 'img/numerologist_aoi.49cf69be.png'
  },
  cc59: function (e, t, i) {
    e.exports = i.p + 'img/spree_lse.5304be9a.png'
  },
  cc6e: function (e, t, i) {
    e.exports = i.p + 'img/ti.1d088e6f.png'
  },
  ccca: function (e, t, i) {
    e.exports = i.p + 'img/deathgripp_lse.4e092412.png'
  },
  cd8b: function (e, t, i) {
    e.exports = i.p + 'img/devilsadvocate.18bb00ce.png'
  },
  cd8c: function (e, t, i) {
    e.exports = i.p + 'img/wellspring_wm.bf337627.png'
  },
  cd9e: function (e, t, i) {
    e.exports = i.p + 'img/scemer_ti.df577546.png'
  },
  ce23: function (e, t, i) {
    var s = {
      './aoi.png': '501c',
      './bge.png': '16e4',
      './bim.png': 'e704',
      './bmr-demon.png': 'cae1',
      './bmr-minion.png': '28bf',
      './bmr-outsider.png': 'e898',
      './bmr-townsfolk.png': 'e988',
      './bmr.png': '7496',
      './custom.png': '441d',
      './iob.png': '5339',
      './lse.png': 'c3d7',
      './luf.png': '92d8',
      './mm.png': '3cd0',
      './snv-demon.png': 'f347',
      './snv-minion.png': '451a',
      './snv-outsider.png': '4dd9',
      './snv-townsfolk.png': 'ed00',
      './snv.png': '2fd0',
      './sos.png': 'bb2f',
      './sr.png': '4aac',
      './tb-demon.png': 'a3b0',
      './tb-minion.png': '5f4e',
      './tb-outsider.png': '73a1',
      './tb-townsfolk.png': 'f7a3',
      './tb.png': '0aaa',
      './ti.png': 'cc6e',
      './wm.png': '43ba'
    }
    function r(e) {
      var t = n(e)
      return i(t)
    }
    function n(e) {
      if (!i.o(s, e)) {
        var t = new Error("Cannot find module '" + e + "'")
        throw ((t.code = 'MODULE_NOT_FOUND'), t)
      }
      return s[e]
    }
    ;(r.keys = function () {
      return Object.keys(s)
    }),
      (r.resolve = n),
      (e.exports = r),
      (r.id = 'ce23')
  },
  cea5: function (e, t, i) {
    'use strict'
    i('7828')
  },
  cfcc: function (e, t, i) {
    e.exports = i.p + 'img/beggar.90311684.png'
  },
  d051: function (e, t, i) {
    e.exports = i.p + 'img/brainwashed_sos.3a4bb24c.png'
  },
  d1eb: function (e, t, i) {
    e.exports = i.p + 'img/jailor_bim.4faa1b02.png'
  },
  d212: function (e, t, i) {
    e.exports = i.p + 'img/apprentice_wm.f34fed4d.png'
  },
  d2cd: function (e, t, i) {
    e.exports = i.p + 'img/witness_lse.0f0ea660.png'
  },
  d466: function (e, t, i) {
    e.exports = i.p + 'img/governor_bim.904da9b2.png'
  },
  d4b2: function (e, t, i) {},
  d595: function (e, t, i) {
    e.exports = i.p + 'img/chaosmage_wm.29b2a3f4.png'
  },
  d5e5: function (e, t, i) {
    e.exports = i.p + 'img/psychologist_aoi.d218e3f8.png'
  },
  d61f: function (e, t, i) {
    e.exports = i.p + 'img/pessimist_lse.1ad99cec.png'
  },
  d62b: function (e, t, i) {
    e.exports = i.p + 'img/slayer.4cde6d70.png'
  },
  d69f: function (e, t, i) {
    e.exports = i.p + 'img/fearmonger.4233784c.png'
  },
  d6bc: function (e, t, i) {
    e.exports = i.p + 'img/choirboy.9d62c6b3.png'
  },
  d715: function (e, t, i) {
    e.exports = i.p + 'img/savant.0fe828cf.png'
  },
  d881: function (e, t, i) {
    e.exports = i.p + 'img/doubleagent_bge.14197e5e.png'
  },
  d8d1: function (e, t, i) {
    e.exports = i.p + 'img/inquisitor_lse.7edcc4aa.png'
  },
  d912: function (e, t, i) {
    e.exports = i.p + 'img/sacrifice_aoi.4ceca13c.png'
  },
  d97d: function (e, t, i) {
    e.exports = i.p + 'img/drunk.947841e5.png'
  },
  da81: function (e, t, i) {
    e.exports = i.p + 'img/legion.a5ecb237.png'
  },
  dbe8: function (e, t, i) {
    e.exports = i.p + 'img/alchemist.c860a284.png'
  },
  dce6: function (e, t, i) {
    e.exports = i.p + 'img/auspex_bge.09e8996a.png'
  },
  dce6c: function (e, t, i) {
    e.exports = i.p + 'img/gambler.7e6e9736.png'
  },
  dced: function (e, t, i) {
    e.exports = i.p + 'img/gravedigger_bge.de3de2a9.png'
  },
  dd5c: function (e, t, i) {
    e.exports = i.p + 'img/draconis_wm.88fdbe67.png'
  },
  dd60: function (e, t, i) {
    e.exports = i.p + 'img/ritualist_aoi.1a3b9252.png'
  },
  de10: function (e, t, i) {
    e.exports = i.p + 'img/unionist_bim.3e74d8d0.png'
  },
  de53: function (e, t, i) {
    e.exports = i.p + 'img/armorer_sos.21c996bf.png'
  },
  df5e: function (e, t, i) {
    e.exports = i.p + 'img/mephit.b1f4ea9e.png'
  },
  df71: function (e, t, i) {
    e.exports = i.p + 'img/nurse_sos.c73687ab.png'
  },
  dfb1: function (e, t) {
    e.exports = (e) => {
      const t = (e) => (document.title = e ? '城镇广场' : '魔典')
      if (
        (localStorage.getItem('background') &&
          e.commit('setBackground', localStorage.background),
        localStorage.getItem('muted') && e.commit('toggleMuted', !0),
        localStorage.getItem('static') && e.commit('toggleStatic', !0),
        localStorage.getItem('imageOptIn') && e.commit('toggleImageOptIn', !0),
        localStorage.getItem('zoom') &&
          e.commit('setZoom', parseFloat(localStorage.getItem('zoom'))),
        localStorage.getItem('isGrimoire') &&
          (e.commit('toggleGrimoire', !1), t(!1)),
        void 0 !== localStorage.roles &&
          (e.commit('setCustomRoles', JSON.parse(localStorage.roles)),
          e.commit('setEdition', { id: 'custom' })),
        void 0 !== localStorage.edition &&
          e.commit('setEdition', JSON.parse(localStorage.edition)),
        void 0 !== localStorage.bluffs &&
          JSON.parse(localStorage.bluffs).forEach((t, i) => {
            e.commit('players/setBluff', {
              index: i,
              role: e.state.roles.get(t) || {}
            })
          }),
        void 0 !== localStorage.fabled &&
          e.commit('players/setFabled', {
            fabled: JSON.parse(localStorage.fabled).map(
              (t) => e.state.fabled.get(t.id) || t
            )
          }),
        localStorage.players &&
          e.commit(
            'players/set',
            JSON.parse(localStorage.players).map((t) => ({
              ...t,
              role:
                e.state.roles.get(t.role) ||
                e.getters.rolesJSONbyId.get(t.role) ||
                {}
            }))
          ),
        localStorage.getItem('playerId') &&
          e.commit('session/setPlayerId', localStorage.getItem('playerId')),
        localStorage.getItem('session') && !window.location.hash.substr(1))
      ) {
        const [t, i] = JSON.parse(localStorage.getItem('session'))
        e.commit('session/setSpectator', t), e.commit('session/setSessionId', i)
      }
      e.subscribe(({ type: e, payload: i }, s) => {
        switch (e) {
          case 'toggleGrimoire':
            s.grimoire.isPublic
              ? localStorage.removeItem('isGrimoire')
              : localStorage.setItem('isGrimoire', 1),
              t(s.grimoire.isPublic)
            break
          case 'setBackground':
            i
              ? localStorage.setItem('background', i)
              : localStorage.removeItem('background')
            break
          case 'toggleMuted':
            s.grimoire.isMuted
              ? localStorage.setItem('muted', 1)
              : localStorage.removeItem('muted')
            break
          case 'toggleStatic':
            s.grimoire.isStatic
              ? localStorage.setItem('static', 1)
              : localStorage.removeItem('static')
            break
          case 'toggleImageOptIn':
            s.grimoire.isImageOptIn
              ? localStorage.setItem('imageOptIn', 1)
              : localStorage.removeItem('imageOptIn')
            break
          case 'setZoom':
            0 !== i
              ? localStorage.setItem('zoom', i)
              : localStorage.removeItem('zoom')
            break
          case 'setEdition':
            localStorage.setItem('edition', JSON.stringify(i)),
              s.edition.isOfficial && localStorage.removeItem('roles')
            break
          case 'setCustomRoles':
            i.length
              ? localStorage.setItem('roles', JSON.stringify(i))
              : localStorage.removeItem('roles')
            break
          case 'players/setBluff':
            localStorage.setItem(
              'bluffs',
              JSON.stringify(s.players.bluffs.map(({ id: e }) => e))
            )
            break
          case 'players/setFabled':
            localStorage.setItem(
              'fabled',
              JSON.stringify(
                s.players.fabled.map((e) => (e.isCustom ? e : { id: e.id }))
              )
            )
            break
          case 'players/add':
          case 'players/update':
          case 'players/remove':
          case 'players/clear':
          case 'players/set':
          case 'players/swap':
          case 'players/move':
            s.players.players.length
              ? localStorage.setItem(
                  'players',
                  JSON.stringify(
                    s.players.players.map((e) => ({
                      ...e,
                      role: e.role.id || {}
                    }))
                  )
                )
              : localStorage.removeItem('players')
            break
          case 'session/setSessionId':
            i
              ? localStorage.setItem(
                  'session',
                  JSON.stringify([s.session.isSpectator, i])
                )
              : localStorage.removeItem('session')
            break
          case 'session/setPlayerId':
            i
              ? localStorage.setItem('playerId', i)
              : localStorage.removeItem('playerId')
            break
        }
      })
    }
  },
  e014: function (e, t, i) {
    e.exports = i.p + 'img/eviltwin.10ab31a8.png'
  },
  e0db: function (e, t, i) {
    e.exports = i.p + 'img/botanist_sos.a95339cb.png'
  },
  e15d: function (e, t, i) {
    e.exports = i.p + 'img/doopliss_iob.8a1c70f1.png'
  },
  e1a4: function (e, t, i) {
    e.exports = i.p + 'img/cupbearer_sr.9c29600e.png'
  },
  e222: function (e, t, i) {
    e.exports = i.p + 'img/djinn.e1c507e5.png'
  },
  e301: function (e, t, i) {
    e.exports = i.p + 'img/boilermaker_bim.589379fd.png'
  },
  e333: function (e, t, i) {
    e.exports = i.p + 'img/pillhorder_ti.255bf01a.png'
  },
  e3b5: function (e, t, i) {
    e.exports = i.p + 'img/avatar_aoi.37a92df7.png'
  },
  e440: function (e, t, i) {},
  e475: function (e, t, i) {
    e.exports = i.p + 'img/chosenone_mm.1e8a70e6.png'
  },
  e5a5: function (e, t, i) {
    'use strict'
    i('56fb')
  },
  e69f: function (e, t, i) {
    e.exports = i.p + 'img/marionette.8aceb38b.png'
  },
  e6ca: function (e, t, i) {
    e.exports = i.p + 'img/bouncer_bim.6a559856.png'
  },
  e704: function (e, t, i) {
    e.exports = i.p + 'img/bim.2b472aef.png'
  },
  e724: function (e, t, i) {
    e.exports = i.p + 'img/bontyhunter_sos.f2633a6a.png'
  },
  e898: function (e, t, i) {
    e.exports = i.p + 'img/bmr-outsider.971a3d5d.png'
  },
  e988: function (e, t, i) {
    e.exports = i.p + 'img/bmr-townsfolk.9bf859b4.png'
  },
  e9cf: function (e, t, i) {
    e.exports = i.p + 'img/infernal_wm.35ec0770.png'
  },
  ea17: function (e, t, i) {
    e.exports = i.p + 'img/engineer.1e44d3e4.png'
  },
  ebe9: function (e, t, i) {
    'use strict'
    i('c850')
  },
  ebf0: function (e, t, i) {
    e.exports = i.p + 'img/joker_ti.7ca39773.png'
  },
  ec1e: function (e, t, i) {
    e.exports = i.p + 'img/spy.d411c998.png'
  },
  ec1e8: function (e, t, i) {
    e.exports = i.p + 'img/usurper_sr.fd9447d3.png'
  },
  ed00: function (e, t, i) {
    e.exports = i.p + 'img/snv-townsfolk.83cf9a72.png'
  },
  ed35: function (e, t, i) {
    e.exports = i.p + 'img/conspiracy_ti.a03847dc.png'
  },
  edae: function (e, t, i) {
    e.exports = i.p + 'img/pariah_bim.25ff2ebc.png'
  },
  ee00: function (e, t, i) {
    e.exports = i.p + 'img/starcrossed_iob.66ca380f.png'
  },
  ee02: function (e, t, i) {
    e.exports = i.p + 'img/courtier.7060de3f.png'
  },
  ee92: function (e, t, i) {
    e.exports = i.p + 'img/gunslinger.1360a66d.png'
  },
  eeb2: function (e, t, i) {
    e.exports = i.p + 'img/necromancer_wm.1152e20f.png'
  },
  ef01: function (e, t, i) {
    e.exports = i.p + 'img/gaslighter_ti.572a9ab1.png'
  },
  ef02: function (e, t, i) {
    e.exports = i.p + 'img/enchanter_wm.ec57fb62.png'
  },
  ef97: function (e, t, i) {
    e.exports = i.p + 'img/spell_wm.1da8b38f.png'
  },
  eff4: function (e, t, i) {
    e.exports = i.p + 'img/virgin.a4b2d7a4.png'
  },
  f09b: function (e, t, i) {
    e.exports = i.p + 'img/judge.b1034c71.png'
  },
  f1e5: function (e, t, i) {
    e.exports = i.p + 'img/sweetheart.29949c36.png'
  },
  f282: function (e, t, i) {
    e.exports = i.p + 'img/poisoner.61c83e0f.png'
  },
  f2c2: function (e, t, i) {
    e.exports = i.p + 'img/infected_sos.ab06bf55.png'
  },
  f2c3: function (e, t, i) {
    e.exports = i.p + 'img/tombspitter_bge.d41475cb.png'
  },
  f322: function (e, t, i) {
    e.exports = i.p + 'img/scarletwoman.5377675d.png'
  },
  f347: function (e, t, i) {
    e.exports = i.p + 'img/snv-demon.2fe55248.png'
  },
  f3b5: function (e, t, i) {
    e.exports = i.p + 'img/medicineman_iob.bbf2254e.png'
  },
  f4a4: function (e, t, i) {
    e.exports = i.p + 'img/rambler_ti.26602dad.png'
  },
  f4bd: function (e, t, i) {
    e.exports = i.p + 'img/vigormortis.981de17e.png'
  },
  f558: function (e, t, i) {
    e.exports = i.p + 'img/witch.f75f1601.png'
  },
  f674: function (e, t, i) {
    e.exports = i.p + 'img/summoner_wm.110860d4.png'
  },
  f6a8: function (e, t, i) {
    e.exports = i.p + 'media/countdown.1462f20c.mp3'
  },
  f6a84: function (e, t, i) {
    e.exports = i.p + 'img/summoner_mm.cbeae40a.png'
  },
  f6d1: function (e, t, i) {
    e.exports = i.p + 'img/pyro_mm.a766bf05.png'
  },
  f700: function (e, t, i) {
    e.exports = i.p + 'img/viceroy_iob.308e0e01.png'
  },
  f7a3: function (e, t, i) {
    e.exports = i.p + 'img/tb-townsfolk.550a119b.png'
  },
  f7d3: function (e, t, i) {
    e.exports = i.p + 'img/noble.3909ea29.png'
  },
  f821: function (e, t, i) {
    e.exports = i.p + 'img/clairvoyant_ti.8b9e5b2b.png'
  },
  f834: function (e, t, i) {
    e.exports = i.p + 'img/mastermind.91ffd4fd.png'
  },
  f93f: function (e, t, i) {
    e.exports = i.p + 'img/clockmaker.5378c03d.png'
  },
  fbe6: function (e, t, i) {
    e.exports = i.p + 'img/soothsayer_iob.1f83dfdc.png'
  },
  fc48: function (e, t, i) {
    e.exports = i.p + 'img/sleeper_bim.37e46d3b.png'
  },
  fcc6: function (e, t, i) {
    e.exports = i.p + 'img/barber.6c91c1f5.png'
  },
  fcdb: function (e, t, i) {
    e.exports = i.p + 'img/psychopath.cd71a0a2.png'
  },
  fd83: function (e, t, i) {
    e.exports = i.p + 'img/custom.402e9bc3.png'
  },
  fe21: function (e, t, i) {
    e.exports = i.p + 'img/blasphemer_iob.097e84cd.png'
  },
  feb5: function (e, t, i) {
    e.exports = i.p + 'img/cleaner_bim.45f55756.png'
  },
  fef4: function (e, t, i) {
    e.exports = i.p + 'img/bloodmage_wm.ad6d6b8d.png'
  },
  ff17: function (e, t, i) {
    e.exports = i.p + 'img/researcher_aoi.15b550c1.png'
  },
  fff1: function (e, t, i) {
    e.exports = i.p + 'img/pacifist.0637fdf0.png'
  }
})
