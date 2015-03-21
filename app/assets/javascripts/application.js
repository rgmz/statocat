// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets

var githubLangs = {
  "ABAP": {
    "type": "programming",
    "extensions": [
      ".abap"
    ],
    "ace_mode": "abap"
  },
  "AGS Script": {
    "type": "programming",
    "color": "#B9D9FF",
    "aliases": [
      "ags"
    ],
    "extensions": [
      ".asc",
      ".ash"
    ],
    "tm_scope": "source.c++",
    "ace_mode": "c_cpp"
  },
  "AMPL": {
    "type": "programming",
    "color": "#00008B",
    "extensions": [
      ".ampl"
    ],
    "tm_scope": "source.ampl",
    "ace_mode": "text"
  },
  "ANTLR": {
    "type": "programming",
    "color": "#9DC3FF",
    "extensions": [
      ".g4"
    ],
    "ace_mode": "text"
  },
  "APL": {
    "type": "programming",
    "color": "#8a0707",
    "extensions": [
      ".apl",
      ".dyalog"
    ],
    "tm_scope": "source.apl",
    "ace_mode": "text"
  },
  "ASP": {
    "type": "programming",
    "color": "#6a40fd",
    "search_term": "aspx-vb",
    "tm_scope": "text.html.asp",
    "aliases": [
      "aspx",
      "aspx-vb"
    ],
    "extensions": [
      ".asp",
      ".asax",
      ".ascx",
      ".ashx",
      ".asmx",
      ".aspx",
      ".axd"
    ],
    "ace_mode": "text"
  },
  "ATS": {
    "type": "programming",
    "color": "#1ac620",
    "aliases": [
      "ats2"
    ],
    "extensions": [
      ".dats",
      ".hats",
      ".sats"
    ],
    "tm_scope": "source.ats",
    "ace_mode": "ocaml"
  },
  "ActionScript": {
    "type": "programming",
    "tm_scope": "source.actionscript.3",
    "color": "#e3491a",
    "search_term": "as3",
    "aliases": [
      "actionscript 3",
      "actionscript3",
      "as3"
    ],
    "extensions": [
      ".as"
    ],
    "ace_mode": "actionscript"
  },
  "Ada": {
    "type": "programming",
    "color": "#02f88c",
    "extensions": [
      ".adb",
      ".ada",
      ".ads"
    ],
    "aliases": [
      "ada95ada2005"
    ],
    "ace_mode": "ada"
  },
  "Agda": {
    "type": "programming",
    "color": "#467C91",
    "extensions": [
      ".agda"
    ],
    "ace_mode": "text"
  },
  "Alloy": {
    "type": "programming",
    "color": "#cc5c24",
    "extensions": [
      ".als"
    ],
    "ace_mode": "text"
  },
  "Ant Build System": {
    "type": "data",
    "tm_scope": "text.xml.ant",
    "filenames": [
      "ant.xml",
      "build.xml"
    ],
    "ace_mode": "xml"
  },
  "ApacheConf": {
    "type": "markup",
    "aliases": [
      "aconf",
      "apache"
    ],
    "extensions": [
      ".apacheconf"
    ],
    "tm_scope": "source.apache-config",
    "ace_mode": "apache_conf"
  },
  "Apex": {
    "type": "programming",
    "extensions": [
      ".cls"
    ],
    "tm_scope": "source.java",
    "ace_mode": "java"
  },
  "AppleScript": {
    "type": "programming",
    "aliases": [
      "osascript"
    ],
    "extensions": [
      ".applescript",
      ".scpt"
    ],
    "interpreters": [
      "osascript"
    ],
    "ace_mode": "applescript"
  },
  "Arc": {
    "type": "programming",
    "color": "#ca2afe",
    "extensions": [
      ".arc"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Arduino": {
    "type": "programming",
    "color": "#bd79d1",
    "extensions": [
      ".ino"
    ],
    "tm_scope": "source.c++",
    "ace_mode": "c_cpp"
  },
  "AsciiDoc": {
    "type": "prose",
    "ace_mode": "asciidoc",
    "wrap": true,
    "extensions": [
      ".asciidoc",
      ".adoc",
      ".asc"
    ],
    "tm_scope": "text.html.asciidoc"
  },
  "AspectJ": {
    "type": "programming",
    "color": "#1957b0",
    "extensions": [
      ".aj"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Assembly": {
    "type": "programming",
    "color": "#6E4C13",
    "search_term": "nasm",
    "aliases": [
      "nasm"
    ],
    "extensions": [
      ".asm",
      ".a51",
      ".nasm"
    ],
    "tm_scope": "source.asm.x86",
    "ace_mode": "assembly_x86"
  },
  "Augeas": {
    "type": "programming",
    "extensions": [
      ".aug"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "AutoHotkey": {
    "type": "programming",
    "color": "#6594b9",
    "aliases": [
      "ahk"
    ],
    "extensions": [
      ".ahk",
      ".ahkl"
    ],
    "tm_scope": "source.ahk",
    "ace_mode": "autohotkey"
  },
  "AutoIt": {
    "type": "programming",
    "color": "#36699B",
    "aliases": [
      "au3",
      "AutoIt3",
      "AutoItScript"
    ],
    "extensions": [
      ".au3"
    ],
    "tm_scope": "source.autoit.3",
    "ace_mode": "autohotkey"
  },
  "Awk": {
    "type": "programming",
    "extensions": [
      ".awk",
      ".auk",
      ".gawk",
      ".mawk",
      ".nawk"
    ],
    "interpreters": [
      "awk",
      "gawk",
      "mawk",
      "nawk"
    ],
    "ace_mode": "text"
  },
  "Batchfile": {
    "type": "programming",
    "group": "Shell",
    "search_term": "bat",
    "aliases": [
      "bat",
      "batch",
      "dosbatch",
      "winbatch"
    ],
    "extensions": [
      ".bat",
      ".cmd"
    ],
    "tm_scope": "source.dosbatch",
    "ace_mode": "batchfile"
  },
  "Befunge": {
    "type": "programming",
    "extensions": [
      ".befunge"
    ],
    "ace_mode": "text"
  },
  "Bison": {
    "type": "programming",
    "tm_scope": "source.bison",
    "extensions": [
      ".y"
    ],
    "ace_mode": "text"
  },
  "BitBake": {
    "type": "programming",
    "tm_scope": "none",
    "extensions": [
      ".bb"
    ],
    "ace_mode": "text"
  },
  "BlitzBasic": {
    "type": "programming",
    "aliases": [
      "b3d",
      "blitz3d",
      "blitzplus",
      "bplus"
    ],
    "extensions": [
      ".bb",
      ".decls"
    ],
    "tm_scope": "source.blitzmax",
    "ace_mode": "text"
  },
  "BlitzMax": {
    "type": "programming",
    "color": "#cd6400",
    "extensions": [
      ".bmx"
    ],
    "aliases": [
      "bmax"
    ],
    "ace_mode": "text"
  },
  "Bluespec": {
    "type": "programming",
    "extensions": [
      ".bsv"
    ],
    "tm_scope": "source.bsv",
    "ace_mode": "verilog"
  },
  "Boo": {
    "type": "programming",
    "color": "#d4bec1",
    "extensions": [
      ".boo"
    ],
    "ace_mode": "text"
  },
  "Brainfuck": {
    "type": "programming",
    "extensions": [
      ".b",
      ".bf"
    ],
    "tm_scope": "source.bf",
    "ace_mode": "text"
  },
  "Brightscript": {
    "type": "programming",
    "extensions": [
      ".brs"
    ],
    "tm_scope": "source.brightscript",
    "ace_mode": "text"
  },
  "Bro": {
    "type": "programming",
    "extensions": [
      ".bro"
    ],
    "ace_mode": "text"
  },
  "C": {
    "type": "programming",
    "color": "#555555",
    "extensions": [
      ".c",
      ".cats",
      ".h",
      ".idc",
      ".w"
    ],
    "interpreters": [
      "tcc"
    ],
    "ace_mode": "c_cpp"
  },
  "C#": {
    "type": "programming",
    "ace_mode": "csharp",
    "tm_scope": "source.cs",
    "search_term": "csharp",
    "color": "#178600",
    "aliases": [
      "csharp"
    ],
    "extensions": [
      ".cs",
      ".cshtml",
      ".csx"
    ]
  },
  "C++": {
    "type": "programming",
    "ace_mode": "c_cpp",
    "search_term": "cpp",
    "color": "#f34b7d",
    "aliases": [
      "cpp"
    ],
    "extensions": [
      ".cpp",
      ".c++",
      ".cc",
      ".cp",
      ".cxx",
      ".h",
      ".h++",
      ".hh",
      ".hpp",
      ".hxx",
      ".inl",
      ".ipp",
      ".tcc",
      ".tpp"
    ]
  },
  "C-ObjDump": {
    "type": "data",
    "extensions": [
      ".c-objdump"
    ],
    "tm_scope": "objdump.x86asm",
    "ace_mode": "assembly_x86"
  },
  "C2hs Haskell": {
    "type": "programming",
    "group": "Haskell",
    "aliases": [
      "c2hs"
    ],
    "extensions": [
      ".chs"
    ],
    "tm_scope": "source.haskell",
    "ace_mode": "haskell"
  },
  "CLIPS": {
    "type": "programming",
    "extensions": [
      ".clp"
    ],
    "tm_scope": "source.clips",
    "ace_mode": "text"
  },
  "CMake": {
    "type": "programming",
    "extensions": [
      ".cmake",
      ".cmake.in"
    ],
    "filenames": [
      "CMakeLists.txt"
    ],
    "ace_mode": "text"
  },
  "COBOL": {
    "type": "programming",
    "extensions": [
      ".cob",
      ".cbl",
      ".ccp",
      ".cobol",
      ".cpy"
    ],
    "ace_mode": "cobol"
  },
  "CSS": {
    "type": "markup",
    "tm_scope": "source.css",
    "ace_mode": "css",
    "color": "#563d7c",
    "extensions": [
      ".css"
    ]
  },
  "Cap'n Proto": {
    "type": "programming",
    "tm_scope": "source.capnp",
    "extensions": [
      ".capnp"
    ],
    "ace_mode": "text"
  },
  "CartoCSS": {
    "type": "programming",
    "aliases": [
      "Carto"
    ],
    "extensions": [
      ".mss"
    ],
    "ace_mode": "text",
    "tm_scope": "source.css.mss"
  },
  "Ceylon": {
    "type": "programming",
    "extensions": [
      ".ceylon"
    ],
    "ace_mode": "text"
  },
  "Chapel": {
    "type": "programming",
    "color": "#8dc63f",
    "aliases": [
      "chpl"
    ],
    "extensions": [
      ".chpl"
    ],
    "ace_mode": "text"
  },
  "ChucK": {
    "type": "programming",
    "extensions": [
      ".ck"
    ],
    "tm_scope": "source.java",
    "ace_mode": "java"
  },
  "Cirru": {
    "type": "programming",
    "color": "#aaaaff",
    "ace_mode": "cirru",
    "extensions": [
      ".cirru"
    ]
  },
  "Clean": {
    "type": "programming",
    "color": "#3a81ad",
    "extensions": [
      ".icl",
      ".dcl"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Clojure": {
    "type": "programming",
    "ace_mode": "clojure",
    "color": "#db5855",
    "extensions": [
      ".clj",
      ".cl2",
      ".cljc",
      ".cljs",
      ".cljs.hl",
      ".cljscm",
      ".cljx",
      ".hic"
    ],
    "filenames": [
      "riemann.config"
    ]
  },
  "CoffeeScript": {
    "type": "programming",
    "tm_scope": "source.coffee",
    "ace_mode": "coffee",
    "color": "#244776",
    "aliases": [
      "coffee",
      "coffee-script"
    ],
    "extensions": [
      ".coffee",
      "._coffee",
      ".cjsx",
      ".cson",
      ".iced"
    ],
    "filenames": [
      "Cakefile"
    ],
    "interpreters": [
      "coffee"
    ]
  },
  "ColdFusion": {
    "type": "programming",
    "group": "ColdFusion",
    "ace_mode": "coldfusion",
    "color": "#ed2cd6",
    "search_term": "cfm",
    "aliases": [
      "cfm",
      "cfml",
      "coldfusion html"
    ],
    "extensions": [
      ".cfm",
      ".cfml"
    ],
    "tm_scope": "text.html.cfm"
  },
  "ColdFusion CFC": {
    "type": "programming",
    "group": "ColdFusion",
    "ace_mode": "coldfusion",
    "color": "#ed2cd6",
    "search_term": "cfc",
    "aliases": [
      "cfc"
    ],
    "extensions": [
      ".cfc"
    ],
    "tm_scope": "source.cfscript"
  },
  "Common Lisp": {
    "type": "programming",
    "tm_scope": "source.lisp",
    "color": "#3fb68b",
    "aliases": [
      "lisp"
    ],
    "extensions": [
      ".lisp",
      ".asd",
      ".cl",
      ".lsp",
      ".ny",
      ".podsl"
    ],
    "interpreters": [
      "lisp",
      "sbcl",
      "ccl",
      "clisp",
      "ecl"
    ],
    "ace_mode": "lisp"
  },
  "Component Pascal": {
    "type": "programming",
    "color": "#b0ce4e",
    "extensions": [
      ".cp",
      ".cps"
    ],
    "tm_scope": "source.pascal",
    "aliases": [
      "delphi",
      "objectpascal"
    ],
    "ace_mode": "pascal"
  },
  "Cool": {
    "type": "programming",
    "extensions": [
      ".cl"
    ],
    "tm_scope": "source.cool",
    "ace_mode": "text"
  },
  "Coq": {
    "type": "programming",
    "extensions": [
      ".coq",
      ".v"
    ],
    "ace_mode": "text"
  },
  "Cpp-ObjDump": {
    "type": "data",
    "extensions": [
      ".cppobjdump",
      ".c++-objdump",
      ".c++objdump",
      ".cpp-objdump",
      ".cxx-objdump"
    ],
    "tm_scope": "objdump.x86asm",
    "aliases": [
      "c++-objdumb"
    ],
    "ace_mode": "assembly_x86"
  },
  "Creole": {
    "type": "prose",
    "wrap": true,
    "extensions": [
      ".creole"
    ],
    "tm_scope": "text.html.creole",
    "ace_mode": "text"
  },
  "Crystal": {
    "type": "programming",
    "extensions": [
      ".cr"
    ],
    "ace_mode": "ruby",
    "tm_scope": "source.ruby",
    "interpreters": [
      "crystal"
    ]
  },
  "Cucumber": {
    "type": "programming",
    "extensions": [
      ".feature"
    ],
    "tm_scope": "text.gherkin.feature",
    "aliases": [
      "gherkin"
    ],
    "ace_mode": "text"
  },
  "Cuda": {
    "type": "programming",
    "extensions": [
      ".cu",
      ".cuh"
    ],
    "tm_scope": "source.cuda-c++",
    "ace_mode": "c_cpp"
  },
  "Cycript": {
    "type": "programming",
    "extensions": [
      ".cy"
    ],
    "tm_scope": "source.js",
    "ace_mode": "javascript"
  },
  "Cython": {
    "type": "programming",
    "group": "Python",
    "extensions": [
      ".pyx",
      ".pxd",
      ".pxi"
    ],
    "aliases": [
      "pyrex"
    ],
    "ace_mode": "text"
  },
  "D": {
    "type": "programming",
    "color": "#fcd46d",
    "extensions": [
      ".d",
      ".di"
    ],
    "ace_mode": "d"
  },
  "D-ObjDump": {
    "type": "data",
    "extensions": [
      ".d-objdump"
    ],
    "tm_scope": "objdump.x86asm",
    "ace_mode": "assembly_x86"
  },
  "DM": {
    "type": "programming",
    "color": "#075ff1",
    "extensions": [
      ".dm"
    ],
    "aliases": [
      "byond"
    ],
    "tm_scope": "source.c++",
    "ace_mode": "c_cpp"
  },
  "DTrace": {
    "type": "programming",
    "extensions": [
      ".d"
    ],
    "interpreters": [
      "dtrace"
    ],
    "tm_scope": "source.c",
    "ace_mode": "c_cpp"
  },
  "Darcs Patch": {
    "type": "data",
    "search_term": "dpatch",
    "aliases": [
      "dpatch"
    ],
    "extensions": [
      ".darcspatch",
      ".dpatch"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Dart": {
    "type": "programming",
    "color": "#98BAD6",
    "extensions": [
      ".dart"
    ],
    "ace_mode": "dart"
  },
  "Diff": {
    "type": "data",
    "color": "#88dddd",
    "extensions": [
      ".diff",
      ".patch"
    ],
    "aliases": [
      "udiff"
    ],
    "tm_scope": "source.diff",
    "ace_mode": "diff"
  },
  "Dockerfile": {
    "type": "data",
    "tm_scope": "source.dockerfile",
    "extensions": [
      ".dockerfile"
    ],
    "filenames": [
      "Dockerfile"
    ],
    "ace_mode": "dockerfile"
  },
  "Dogescript": {
    "type": "programming",
    "color": "#cca760",
    "extensions": [
      ".djs"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Dylan": {
    "type": "programming",
    "color": "#3ebc27",
    "extensions": [
      ".dylan",
      ".dyl",
      ".intr",
      ".lid"
    ],
    "ace_mode": "text"
  },
  "E": {
    "type": "programming",
    "color": "#ccce35",
    "extensions": [
      ".E"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "ECL": {
    "type": "programming",
    "color": "#8a1267",
    "extensions": [
      ".ecl",
      ".eclxml"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Eagle": {
    "type": "markup",
    "color": "#3994bc",
    "extensions": [
      ".sch",
      ".brd"
    ],
    "tm_scope": "text.xml",
    "ace_mode": "xml"
  },
  "Ecere Projects": {
    "type": "data",
    "group": "JavaScript",
    "extensions": [
      ".epj"
    ],
    "tm_scope": "source.json",
    "ace_mode": "json"
  },
  "Eiffel": {
    "type": "programming",
    "color": "#946d57",
    "extensions": [
      ".e"
    ],
    "ace_mode": "eiffel"
  },
  "Elixir": {
    "type": "programming",
    "color": "#6e4a7e",
    "extensions": [
      ".ex",
      ".exs"
    ],
    "ace_mode": "elixir"
  },
  "Elm": {
    "type": "programming",
    "color": "#60B5CC",
    "extensions": [
      ".elm"
    ],
    "tm_scope": "source.elm",
    "ace_mode": "elm"
  },
  "Emacs Lisp": {
    "type": "programming",
    "tm_scope": "source.lisp",
    "color": "#c065db",
    "aliases": [
      "elisp",
      "emacs"
    ],
    "filenames": [
      ".emacs",
      ".emacs.desktop"
    ],
    "extensions": [
      ".el",
      ".emacs",
      ".emacs.desktop"
    ],
    "ace_mode": "lisp"
  },
  "EmberScript": {
    "type": "programming",
    "color": "#f64e3e",
    "extensions": [
      ".em",
      ".emberscript"
    ],
    "tm_scope": "source.coffee",
    "ace_mode": "coffee"
  },
  "Erlang": {
    "type": "programming",
    "color": "#0faf8d",
    "extensions": [
      ".erl",
      ".es",
      ".escript",
      ".hrl"
    ],
    "ace_mode": "erlang",
    "interpreters": [
      "escript"
    ]
  },
  "F#": {
    "type": "programming",
    "color": "#b845fc",
    "search_term": "fsharp",
    "aliases": [
      "fsharp"
    ],
    "extensions": [
      ".fs",
      ".fsi",
      ".fsx"
    ],
    "tm_scope": "source.fsharp",
    "ace_mode": "text"
  },
  "FLUX": {
    "type": "programming",
    "color": "#33CCFF",
    "extensions": [
      ".fx",
      ".flux"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "FORTRAN": {
    "type": "programming",
    "color": "#4d41b1",
    "extensions": [
      ".f90",
      ".f",
      ".f03",
      ".f08",
      ".f77",
      ".f95",
      ".for",
      ".fpp"
    ],
    "tm_scope": "source.fortran.modern",
    "ace_mode": "text"
  },
  "Factor": {
    "type": "programming",
    "color": "#636746",
    "extensions": [
      ".factor"
    ],
    "filenames": [
      ".factor-boot-rc",
      ".factor-rc"
    ],
    "ace_mode": "text"
  },
  "Fancy": {
    "type": "programming",
    "color": "#7b9db4",
    "extensions": [
      ".fy",
      ".fancypack"
    ],
    "filenames": [
      "Fakefile"
    ],
    "ace_mode": "text"
  },
  "Fantom": {
    "type": "programming",
    "color": "#dbded5",
    "extensions": [
      ".fan"
    ],
    "tm_scope": "source.fan",
    "ace_mode": "text"
  },
  "Formatted": {
    "type": "data",
    "extensions": [
      ".for"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Forth": {
    "type": "programming",
    "color": "#341708",
    "extensions": [
      ".fth",
      ".4th",
      ".f",
      ".for",
      ".forth",
      ".fr",
      ".frt",
      ".fs"
    ],
    "ace_mode": "forth"
  },
  "Frege": {
    "type": "programming",
    "color": "#00cafe",
    "extensions": [
      ".fr"
    ],
    "tm_scope": "source.haskell",
    "ace_mode": "haskell"
  },
  "G-code": {
    "type": "data",
    "extensions": [
      ".g",
      ".gco",
      ".gcode"
    ],
    "tm_scope": "source.gcode",
    "ace_mode": "gcode"
  },
  "GAMS": {
    "type": "programming",
    "extensions": [
      ".gms"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "GAP": {
    "type": "programming",
    "extensions": [
      ".g",
      ".gap",
      ".gd",
      ".gi",
      ".tst"
    ],
    "tm_scope": "source.gap",
    "ace_mode": "text"
  },
  "GAS": {
    "type": "programming",
    "group": "Assembly",
    "extensions": [
      ".s"
    ],
    "tm_scope": "source.asm.x86",
    "ace_mode": "assembly_x86"
  },
  "GDScript": {
    "type": "programming",
    "extensions": [
      ".gd"
    ],
    "tm_scope": "source.gdscript",
    "ace_mode": "text"
  },
  "GLSL": {
    "type": "programming",
    "extensions": [
      ".glsl",
      ".fp",
      ".frag",
      ".frg",
      ".fs",
      ".fshader",
      ".geo",
      ".geom",
      ".glslv",
      ".gshader",
      ".shader",
      ".vert",
      ".vrx",
      ".vshader"
    ],
    "ace_mode": "glsl"
  },
  "Game Maker Language": {
    "type": "programming",
    "color": "#8ad353",
    "extensions": [
      ".gml"
    ],
    "tm_scope": "source.c++",
    "ace_mode": "c_cpp"
  },
  "Genshi": {
    "type": "programming",
    "extensions": [
      ".kid"
    ],
    "tm_scope": "text.xml.genshi",
    "aliases": [
      "xml+genshi",
      "xml+kid"
    ],
    "ace_mode": "xml"
  },
  "Gentoo Ebuild": {
    "type": "programming",
    "group": "Shell",
    "extensions": [
      ".ebuild"
    ],
    "tm_scope": "source.shell",
    "ace_mode": "sh"
  },
  "Gentoo Eclass": {
    "type": "programming",
    "group": "Shell",
    "extensions": [
      ".eclass"
    ],
    "tm_scope": "source.shell",
    "ace_mode": "sh"
  },
  "Gettext Catalog": {
    "type": "prose",
    "search_term": "pot",
    "searchable": false,
    "aliases": [
      "pot"
    ],
    "extensions": [
      ".po",
      ".pot"
    ],
    "tm_scope": "source.po",
    "ace_mode": "text"
  },
  "Glyph": {
    "type": "programming",
    "color": "#e4cc98",
    "extensions": [
      ".glf"
    ],
    "tm_scope": "source.tcl",
    "ace_mode": "tcl"
  },
  "Gnuplot": {
    "type": "programming",
    "color": "#f0a9f0",
    "extensions": [
      ".gp",
      ".gnu",
      ".gnuplot",
      ".plot",
      ".plt"
    ],
    "interpreters": [
      "gnuplot"
    ],
    "ace_mode": "text"
  },
  "Go": {
    "type": "programming",
    "color": "#375eab",
    "extensions": [
      ".go"
    ],
    "ace_mode": "golang"
  },
  "Golo": {
    "type": "programming",
    "color": "#f6a51f",
    "extensions": [
      ".golo"
    ],
    "tm_scope": "source.golo",
    "ace_mode": "text"
  },
  "Gosu": {
    "type": "programming",
    "color": "#82937f",
    "extensions": [
      ".gs",
      ".gst",
      ".gsx",
      ".vark"
    ],
    "tm_scope": "source.gosu.2",
    "ace_mode": "text"
  },
  "Grace": {
    "type": "programming",
    "extensions": [
      ".grace"
    ],
    "tm_scope": "source.grace",
    "ace_mode": "text"
  },
  "Gradle": {
    "type": "data",
    "extensions": [
      ".gradle"
    ],
    "tm_scope": "source.groovy.gradle",
    "ace_mode": "text"
  },
  "Grammatical Framework": {
    "type": "programming",
    "aliases": [
      "gf"
    ],
    "wrap": false,
    "extensions": [
      ".gf"
    ],
    "searchable": true,
    "color": "#ff0000",
    "tm_scope": "source.haskell",
    "ace_mode": "haskell"
  },
  "Graph Modeling Language": {
    "type": "data",
    "extensions": [
      ".gml"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Graphviz (DOT)": {
    "type": "data",
    "tm_scope": "source.dot",
    "extensions": [
      ".dot",
      ".gv"
    ],
    "ace_mode": "text"
  },
  "Groff": {
    "type": "markup",
    "extensions": [
      ".man",
      ".1",
      ".2",
      ".3",
      ".4",
      ".5",
      ".6",
      ".7"
    ],
    "tm_scope": "text.groff",
    "aliases": [
      "nroff"
    ],
    "ace_mode": "text"
  },
  "Groovy": {
    "type": "programming",
    "ace_mode": "groovy",
    "color": "#e69f56",
    "extensions": [
      ".groovy",
      ".grt",
      ".gtpl",
      ".gvy"
    ],
    "interpreters": [
      "groovy"
    ]
  },
  "Groovy Server Pages": {
    "type": "programming",
    "group": "Groovy",
    "aliases": [
      "gsp",
      "java server page"
    ],
    "extensions": [
      ".gsp"
    ],
    "tm_scope": "text.html.jsp",
    "ace_mode": "jsp"
  },
  "HTML": {
    "type": "markup",
    "tm_scope": "text.html.basic",
    "ace_mode": "html",
    "color": "#e44b23",
    "aliases": [
      "xhtml"
    ],
    "extensions": [
      ".html",
      ".htm",
      ".html.hl",
      ".st",
      ".xht",
      ".xhtml"
    ]
  },
  "HTML+Django": {
    "type": "markup",
    "tm_scope": "text.html.django",
    "group": "HTML",
    "extensions": [
      ".mustache",
      ".jinja"
    ],
    "aliases": [
      "html+django/jinja",
      "html+jinja",
      "htmldjango"
    ],
    "ace_mode": "django"
  },
  "HTML+ERB": {
    "type": "markup",
    "tm_scope": "text.html.erb",
    "group": "HTML",
    "aliases": [
      "erb"
    ],
    "extensions": [
      ".erb",
      ".erb.deface"
    ],
    "ace_mode": "html_ruby"
  },
  "HTML+PHP": {
    "type": "markup",
    "tm_scope": "text.html.php",
    "group": "HTML",
    "extensions": [
      ".phtml"
    ],
    "ace_mode": "php"
  },
  "HTTP": {
    "type": "data",
    "extensions": [
      ".http"
    ],
    "tm_scope": "source.httpspec",
    "ace_mode": "text"
  },
  "Hack": {
    "type": "programming",
    "ace_mode": "php",
    "extensions": [
      ".hh",
      ".php"
    ],
    "tm_scope": "text.html.php"
  },
  "Haml": {
    "group": "HTML",
    "type": "markup",
    "extensions": [
      ".haml",
      ".haml.deface"
    ],
    "ace_mode": "haml"
  },
  "Handlebars": {
    "type": "markup",
    "color": "#01a9d6",
    "aliases": [
      "hbs",
      "htmlbars"
    ],
    "extensions": [
      ".handlebars",
      ".hbs"
    ],
    "tm_scope": "text.html.handlebars",
    "ace_mode": "handlebars"
  },
  "Harbour": {
    "type": "programming",
    "color": "#0e60e3",
    "extensions": [
      ".hb"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Haskell": {
    "type": "programming",
    "color": "#29b544",
    "extensions": [
      ".hs",
      ".hsc"
    ],
    "ace_mode": "haskell"
  },
  "Haxe": {
    "type": "programming",
    "ace_mode": "haxe",
    "color": "#f7941e",
    "extensions": [
      ".hx",
      ".hxsl"
    ],
    "tm_scope": "source.haxe.2"
  },
  "Hy": {
    "type": "programming",
    "ace_mode": "text",
    "color": "#7891b1",
    "extensions": [
      ".hy"
    ],
    "aliases": [
      "hylang"
    ],
    "tm_scope": "source.hy"
  },
  "IDL": {
    "type": "programming",
    "color": "#e3592c",
    "extensions": [
      ".pro",
      ".dlm"
    ],
    "ace_mode": "text"
  },
  "IGOR Pro": {
    "type": "programming",
    "extensions": [
      ".ipf"
    ],
    "aliases": [
      "igor",
      "igorpro"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "INI": {
    "type": "data",
    "extensions": [
      ".ini",
      ".cfg",
      ".prefs",
      ".pro",
      ".properties"
    ],
    "tm_scope": "source.ini",
    "aliases": [
      "dosini"
    ],
    "ace_mode": "ini"
  },
  "IRC log": {
    "type": "data",
    "search_term": "irc",
    "aliases": [
      "irc",
      "irc logs"
    ],
    "extensions": [
      ".irclog",
      ".weechatlog"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Idris": {
    "type": "programming",
    "extensions": [
      ".idr",
      ".lidr"
    ],
    "ace_mode": "text"
  },
  "Inform 7": {
    "type": "programming",
    "wrap": true,
    "extensions": [
      ".ni",
      ".i7x"
    ],
    "tm_scope": "source.Inform7",
    "aliases": [
      "i7",
      "inform7"
    ],
    "ace_mode": "text"
  },
  "Inno Setup": {
    "type": "programming",
    "extensions": [
      ".iss"
    ],
    "tm_scope": "source.inno",
    "ace_mode": "text"
  },
  "Io": {
    "type": "programming",
    "color": "#a9188d",
    "extensions": [
      ".io"
    ],
    "ace_mode": "io"
  },
  "Ioke": {
    "type": "programming",
    "color": "#078193",
    "extensions": [
      ".ik"
    ],
    "interpreters": [
      "ioke"
    ],
    "ace_mode": "text"
  },
  "Isabelle": {
    "type": "programming",
    "color": "#fdcd00",
    "extensions": [
      ".thy"
    ],
    "tm_scope": "source.isabelle.theory",
    "ace_mode": "text"
  },
  "J": {
    "type": "programming",
    "color": "#2d8abd",
    "extensions": [
      ".ijs"
    ],
    "tm_scope": "source.j",
    "ace_mode": "text"
  },
  "JSON": {
    "type": "data",
    "tm_scope": "source.json",
    "group": "JavaScript",
    "ace_mode": "json",
    "searchable": false,
    "extensions": [
      ".json",
      ".lock"
    ],
    "filenames": [
      ".jshintrc",
      "composer.lock"
    ]
  },
  "JSON5": {
    "type": "data",
    "extensions": [
      ".json5"
    ],
    "tm_scope": "source.js",
    "ace_mode": "javascript"
  },
  "JSONLD": {
    "type": "data",
    "group": "JavaScript",
    "ace_mode": "javascript",
    "extensions": [
      ".jsonld"
    ],
    "tm_scope": "source.js"
  },
  "JSONiq": {
    "type": "programming",
    "ace_mode": "jsoniq",
    "extensions": [
      ".jq"
    ],
    "tm_scope": "source.xquery"
  },
  "Jade": {
    "group": "HTML",
    "type": "markup",
    "extensions": [
      ".jade"
    ],
    "tm_scope": "source.jade",
    "ace_mode": "jade"
  },
  "Jasmin": {
    "type": "programming",
    "ace_mode": "java",
    "extensions": [
      ".j"
    ],
    "tm_scope": "source.jasmin"
  },
  "Java": {
    "type": "programming",
    "ace_mode": "java",
    "color": "#b07219",
    "extensions": [
      ".java"
    ]
  },
  "Java Server Pages": {
    "type": "programming",
    "group": "Java",
    "search_term": "jsp",
    "aliases": [
      "jsp"
    ],
    "extensions": [
      ".jsp"
    ],
    "tm_scope": "text.html.jsp",
    "ace_mode": "jsp"
  },
  "JavaScript": {
    "type": "programming",
    "tm_scope": "source.js",
    "ace_mode": "javascript",
    "color": "#f1e05a",
    "aliases": [
      "js",
      "node"
    ],
    "extensions": [
      ".js",
      "._js",
      ".bones",
      ".es6",
      ".frag",
      ".gs",
      ".jake",
      ".jsb",
      ".jsfl",
      ".jsm",
      ".jss",
      ".jsx",
      ".njs",
      ".pac",
      ".sjs",
      ".ssjs",
      ".sublime-build",
      ".sublime-commands",
      ".sublime-completions",
      ".sublime-keymap",
      ".sublime-macro",
      ".sublime-menu",
      ".sublime-mousemap",
      ".sublime-project",
      ".sublime-settings",
      ".sublime-theme",
      ".sublime-workspace",
      ".sublime_metrics",
      ".sublime_session",
      ".xsjs",
      ".xsjslib"
    ],
    "filenames": [
      "Jakefile"
    ],
    "interpreters": [
      "node"
    ]
  },
  "Julia": {
    "type": "programming",
    "extensions": [
      ".jl"
    ],
    "color": "#a270ba",
    "ace_mode": "julia"
  },
  "KRL": {
    "type": "programming",
    "color": "#f5c800",
    "extensions": [
      ".krl"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Kit": {
    "type": "markup",
    "ace_mode": "html",
    "extensions": [
      ".kit"
    ],
    "tm_scope": "text.html.basic"
  },
  "Kotlin": {
    "type": "programming",
    "extensions": [
      ".kt",
      ".ktm",
      ".kts"
    ],
    "tm_scope": "source.Kotlin",
    "ace_mode": "text"
  },
  "LFE": {
    "type": "programming",
    "extensions": [
      ".lfe"
    ],
    "color": "#004200",
    "group": "Erlang",
    "tm_scope": "source.lisp",
    "ace_mode": "lisp"
  },
  "LLVM": {
    "type": "programming",
    "extensions": [
      ".ll"
    ],
    "ace_mode": "text"
  },
  "LOLCODE": {
    "type": "programming",
    "extensions": [
      ".lol"
    ],
    "color": "#cc9900",
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "LSL": {
    "type": "programming",
    "ace_mode": "lsl",
    "extensions": [
      ".lsl"
    ],
    "interpreters": [
      "lsl"
    ],
    "color": "#3d9970"
  },
  "LabVIEW": {
    "type": "programming",
    "extensions": [
      ".lvproj"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Lasso": {
    "type": "programming",
    "color": "#2584c3",
    "extensions": [
      ".lasso",
      ".las",
      ".lasso8",
      ".lasso9",
      ".ldml"
    ],
    "tm_scope": "file.lasso",
    "aliases": [
      "lassoscript"
    ],
    "ace_mode": "text"
  },
  "Latte": {
    "type": "markup",
    "color": "#A8FF97",
    "group": "HTML",
    "extensions": [
      ".latte"
    ],
    "tm_scope": "source.smarty",
    "ace_mode": "smarty"
  },
  "Lean": {
    "type": "programming",
    "extensions": [
      ".lean",
      ".hlean"
    ],
    "ace_mode": "lean"
  },
  "Less": {
    "type": "markup",
    "group": "CSS",
    "extensions": [
      ".less"
    ],
    "tm_scope": "source.css.less",
    "ace_mode": "less"
  },
  "LilyPond": {
    "type": "programming",
    "extensions": [
      ".ly",
      ".ily"
    ],
    "ace_mode": "text"
  },
  "Liquid": {
    "type": "markup",
    "extensions": [
      ".liquid"
    ],
    "tm_scope": "text.html.liquid",
    "ace_mode": "liquid"
  },
  "Literate Agda": {
    "type": "programming",
    "group": "Agda",
    "extensions": [
      ".lagda"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Literate CoffeeScript": {
    "type": "programming",
    "tm_scope": "source.litcoffee",
    "group": "CoffeeScript",
    "ace_mode": "text",
    "wrap": true,
    "search_term": "litcoffee",
    "aliases": [
      "litcoffee"
    ],
    "extensions": [
      ".litcoffee"
    ]
  },
  "Literate Haskell": {
    "type": "programming",
    "group": "Haskell",
    "search_term": "lhs",
    "aliases": [
      "lhaskell",
      "lhs"
    ],
    "extensions": [
      ".lhs"
    ],
    "tm_scope": "text.tex.latex.haskell",
    "ace_mode": "text"
  },
  "LiveScript": {
    "type": "programming",
    "color": "#499886",
    "aliases": [
      "live-script",
      "ls"
    ],
    "extensions": [
      ".ls",
      "._ls"
    ],
    "filenames": [
      "Slakefile"
    ],
    "ace_mode": "livescript"
  },
  "Logos": {
    "type": "programming",
    "extensions": [
      ".xm",
      ".x",
      ".xi"
    ],
    "ace_mode": "text"
  },
  "Logtalk": {
    "type": "programming",
    "extensions": [
      ".lgt",
      ".logtalk"
    ],
    "ace_mode": "text"
  },
  "LookML": {
    "type": "programming",
    "ace_mode": "yaml",
    "color": "#652B81",
    "extensions": [
      ".lookml"
    ],
    "tm_scope": "source.yaml"
  },
  "LoomScript": {
    "type": "programming",
    "extensions": [
      ".ls"
    ],
    "tm_scope": "source.loomscript",
    "ace_mode": "text"
  },
  "Lua": {
    "type": "programming",
    "ace_mode": "lua",
    "color": "#fa1fa1",
    "extensions": [
      ".lua",
      ".fcgi",
      ".nse",
      ".pd_lua",
      ".rbxs",
      ".wlua"
    ],
    "interpreters": [
      "lua"
    ]
  },
  "M": {
    "type": "programming",
    "aliases": [
      "mumps"
    ],
    "extensions": [
      ".mumps",
      ".m"
    ],
    "tm_scope": "source.lisp",
    "ace_mode": "lisp"
  },
  "MTML": {
    "type": "markup",
    "color": "#0095d9",
    "extensions": [
      ".mtml"
    ],
    "tm_scope": "text.html.basic",
    "ace_mode": "html"
  },
  "MUF": {
    "type": "programming",
    "group": "Forth",
    "extensions": [
      ".muf",
      ".m"
    ],
    "tm_scope": "none",
    "ace_mode": "forth"
  },
  "Makefile": {
    "type": "programming",
    "aliases": [
      "bsdmake",
      "make",
      "mf"
    ],
    "extensions": [
      ".mak",
      ".d",
      ".mk"
    ],
    "filenames": [
      "GNUmakefile",
      "Makefile",
      "makefile"
    ],
    "interpreters": [
      "make"
    ],
    "ace_mode": "makefile"
  },
  "Mako": {
    "type": "programming",
    "extensions": [
      ".mako",
      ".mao"
    ],
    "tm_scope": "text.html.mako",
    "ace_mode": "text"
  },
  "Markdown": {
    "type": "prose",
    "ace_mode": "markdown",
    "wrap": true,
    "extensions": [
      ".md",
      ".markdown",
      ".mkd",
      ".mkdn",
      ".mkdown",
      ".ron"
    ],
    "tm_scope": "source.gfm"
  },
  "Mask": {
    "type": "markup",
    "color": "#f97732",
    "ace_mode": "mask",
    "extensions": [
      ".mask"
    ],
    "tm_scope": "source.mask"
  },
  "Mathematica": {
    "type": "programming",
    "extensions": [
      ".mathematica",
      ".cdf",
      ".m",
      ".ma",
      ".nb",
      ".nbp",
      ".wl",
      ".wlt"
    ],
    "aliases": [
      "mma"
    ],
    "ace_mode": "text"
  },
  "Matlab": {
    "type": "programming",
    "color": "#bb92ac",
    "extensions": [
      ".matlab",
      ".m"
    ],
    "ace_mode": "matlab"
  },
  "Maven POM": {
    "type": "data",
    "tm_scope": "text.xml.pom",
    "filenames": [
      "pom.xml"
    ],
    "ace_mode": "xml"
  },
  "Max": {
    "type": "programming",
    "color": "#ce279c",
    "aliases": [
      "max/msp",
      "maxmsp"
    ],
    "search_term": "max/msp",
    "extensions": [
      ".maxpat",
      ".maxhelp",
      ".maxproj",
      ".mxt",
      ".pat"
    ],
    "tm_scope": "source.json",
    "ace_mode": "json"
  },
  "MediaWiki": {
    "type": "prose",
    "wrap": true,
    "extensions": [
      ".mediawiki"
    ],
    "tm_scope": "text.html.mediawiki",
    "ace_mode": "text"
  },
  "Mercury": {
    "type": "programming",
    "color": "#abcdef",
    "ace_mode": "prolog",
    "interpreters": [
      "mmi"
    ],
    "extensions": [
      ".m",
      ".moo"
    ],
    "tm_scope": "source.mercury"
  },
  "MiniD": {
    "type": "programming",
    "searchable": false,
    "extensions": [
      ".minid"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Mirah": {
    "type": "programming",
    "search_term": "mirah",
    "color": "#c7a938",
    "extensions": [
      ".druby",
      ".duby",
      ".mir",
      ".mirah"
    ],
    "tm_scope": "source.ruby",
    "ace_mode": "ruby"
  },
  "Modelica": {
    "type": "programming",
    "extensions": [
      ".mo"
    ],
    "tm_scope": "source.modelica",
    "ace_mode": "text"
  },
  "Monkey": {
    "type": "programming",
    "extensions": [
      ".monkey"
    ],
    "ace_mode": "text"
  },
  "Moocode": {
    "type": "programming",
    "extensions": [
      ".moo"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "MoonScript": {
    "type": "programming",
    "extensions": [
      ".moon"
    ],
    "interpreters": [
      "moon"
    ],
    "ace_mode": "text"
  },
  "Myghty": {
    "type": "programming",
    "extensions": [
      ".myt"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "NL": {
    "type": "data",
    "extensions": [
      ".nl"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "NSIS": {
    "type": "programming",
    "extensions": [
      ".nsi",
      ".nsh"
    ],
    "ace_mode": "text"
  },
  "Nemerle": {
    "type": "programming",
    "color": "#0d3c6e",
    "extensions": [
      ".n"
    ],
    "ace_mode": "text"
  },
  "NetLogo": {
    "type": "programming",
    "color": "#ff2b2b",
    "extensions": [
      ".nlogo"
    ],
    "tm_scope": "source.lisp",
    "ace_mode": "lisp"
  },
  "NewLisp": {
    "type": "programming",
    "lexer": "NewLisp",
    "color": "#eedd66",
    "extensions": [
      ".nl",
      ".lisp",
      ".lsp"
    ],
    "interpreters": [
      "newlisp"
    ],
    "tm_scope": "source.lisp",
    "ace_mode": "lisp"
  },
  "Nginx": {
    "type": "markup",
    "extensions": [
      ".nginxconf"
    ],
    "tm_scope": "source.nginx",
    "aliases": [
      "nginx configuration file"
    ],
    "ace_mode": "text"
  },
  "Nimrod": {
    "type": "programming",
    "color": "#37775b",
    "extensions": [
      ".nim",
      ".nimrod"
    ],
    "ace_mode": "text",
    "tm_scope": "source.nim"
  },
  "Ninja": {
    "type": "data",
    "tm_scope": "source.ninja",
    "extensions": [
      ".ninja"
    ],
    "ace_mode": "text"
  },
  "Nit": {
    "type": "programming",
    "color": "#0d8921",
    "extensions": [
      ".nit"
    ],
    "tm_scope": "source.nit",
    "ace_mode": "text"
  },
  "Nix": {
    "type": "programming",
    "color": "#7070ff",
    "extensions": [
      ".nix"
    ],
    "aliases": [
      "nixos"
    ],
    "tm_scope": "source.nix",
    "ace_mode": "nix"
  },
  "Nu": {
    "type": "programming",
    "color": "#c9df40",
    "aliases": [
      "nush"
    ],
    "extensions": [
      ".nu"
    ],
    "filenames": [
      "Nukefile"
    ],
    "tm_scope": "source.scheme",
    "ace_mode": "scheme",
    "interpreters": [
      "nush"
    ]
  },
  "NumPy": {
    "type": "programming",
    "group": "Python",
    "extensions": [
      ".numpy",
      ".numpyw",
      ".numsc"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "OCaml": {
    "type": "programming",
    "ace_mode": "ocaml",
    "color": "#3be133",
    "extensions": [
      ".ml",
      ".eliom",
      ".eliomi",
      ".ml4",
      ".mli",
      ".mll",
      ".mly"
    ]
  },
  "ObjDump": {
    "type": "data",
    "extensions": [
      ".objdump"
    ],
    "tm_scope": "objdump.x86asm",
    "ace_mode": "assembly_x86"
  },
  "Objective-C": {
    "type": "programming",
    "tm_scope": "source.objc",
    "color": "#438eff",
    "aliases": [
      "obj-c",
      "objc",
      "objectivec"
    ],
    "extensions": [
      ".m",
      ".h"
    ],
    "ace_mode": "objectivec"
  },
  "Objective-C++": {
    "type": "programming",
    "tm_scope": "source.objc++",
    "color": "#4886FC",
    "aliases": [
      "obj-c++",
      "objc++",
      "objectivec++"
    ],
    "extensions": [
      ".mm"
    ],
    "ace_mode": "objectivec"
  },
  "Objective-J": {
    "type": "programming",
    "color": "#ff0c5a",
    "aliases": [
      "obj-j",
      "objectivej",
      "objj"
    ],
    "extensions": [
      ".j",
      ".sj"
    ],
    "tm_scope": "source.js.objj",
    "ace_mode": "text"
  },
  "Omgrofl": {
    "type": "programming",
    "extensions": [
      ".omgrofl"
    ],
    "color": "#cabbff",
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Opa": {
    "type": "programming",
    "extensions": [
      ".opa"
    ],
    "ace_mode": "text"
  },
  "Opal": {
    "type": "programming",
    "color": "#f7ede0",
    "extensions": [
      ".opal"
    ],
    "tm_scope": "source.opal",
    "ace_mode": "text"
  },
  "OpenCL": {
    "type": "programming",
    "group": "C",
    "extensions": [
      ".cl",
      ".opencl"
    ],
    "tm_scope": "source.c",
    "ace_mode": "c_cpp"
  },
  "OpenEdge ABL": {
    "type": "programming",
    "aliases": [
      "progress",
      "openedge",
      "abl"
    ],
    "extensions": [
      ".p",
      ".cls"
    ],
    "tm_scope": "source.abl",
    "ace_mode": "text"
  },
  "OpenSCAD": {
    "type": "programming",
    "extensions": [
      ".scad"
    ],
    "tm_scope": "source.scad",
    "ace_mode": "scad"
  },
  "Org": {
    "type": "prose",
    "wrap": true,
    "extensions": [
      ".org"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Ox": {
    "type": "programming",
    "extensions": [
      ".ox",
      ".oxh",
      ".oxo"
    ],
    "tm_scope": "source.ox",
    "ace_mode": "text"
  },
  "Oxygene": {
    "type": "programming",
    "color": "#5a63a3",
    "extensions": [
      ".oxygene"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Oz": {
    "type": "programming",
    "color": "#fcaf3e",
    "extensions": [
      ".oz"
    ],
    "tm_scope": "source.oz",
    "ace_mode": "text"
  },
  "PAWN": {
    "type": "programming",
    "color": "#dbb284",
    "extensions": [
      ".pwn"
    ],
    "tm_scope": "source.c++",
    "ace_mode": "c_cpp"
  },
  "PHP": {
    "type": "programming",
    "tm_scope": "text.html.php",
    "ace_mode": "php",
    "color": "#4F5D95",
    "extensions": [
      ".php",
      ".aw",
      ".ctp",
      ".fcgi",
      ".php3",
      ".php4",
      ".php5",
      ".phpt"
    ],
    "filenames": [
      "Phakefile"
    ],
    "interpreters": [
      "php"
    ],
    "aliases": [
      "inc"
    ]
  },
  "PLSQL": {
    "type": "programming",
    "ace_mode": "sql",
    "tm_scope": "source.plsql.oracle",
    "extensions": [
      ".pls",
      ".pkb",
      ".pks",
      ".plb",
      ".plsql",
      ".sql"
    ]
  },
  "PLpgSQL": {
    "type": "programming",
    "ace_mode": "pgsql",
    "tm_scope": "source.sql",
    "extensions": [
      ".sql"
    ]
  },
  "Pan": {
    "type": "programming",
    "color": "#cc0000",
    "extensions": [
      ".pan"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Papyrus": {
    "type": "programming",
    "color": "#6600cc",
    "extensions": [
      ".psc"
    ],
    "tm_scope": "source.papyrus",
    "ace_mode": "text"
  },
  "Parrot": {
    "type": "programming",
    "color": "#f3ca0a",
    "extensions": [
      ".parrot"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Parrot Assembly": {
    "group": "Parrot",
    "type": "programming",
    "aliases": [
      "pasm"
    ],
    "extensions": [
      ".pasm"
    ],
    "interpreters": [
      "parrot"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Parrot Internal Representation": {
    "group": "Parrot",
    "tm_scope": "source.parrot.pir",
    "type": "programming",
    "aliases": [
      "pir"
    ],
    "extensions": [
      ".pir"
    ],
    "interpreters": [
      "parrot"
    ],
    "ace_mode": "text"
  },
  "Pascal": {
    "type": "programming",
    "color": "#b0ce4e",
    "extensions": [
      ".pas",
      ".dfm",
      ".dpr",
      ".lpr",
      ".pp"
    ],
    "ace_mode": "pascal"
  },
  "Perl": {
    "type": "programming",
    "tm_scope": "source.perl",
    "ace_mode": "perl",
    "color": "#0298c3",
    "extensions": [
      ".pl",
      ".cgi",
      ".fcgi",
      ".perl",
      ".ph",
      ".plx",
      ".pm",
      ".pod",
      ".psgi",
      ".t"
    ],
    "interpreters": [
      "perl"
    ]
  },
  "Perl6": {
    "type": "programming",
    "color": "#0298c3",
    "extensions": [
      ".6pl",
      ".6pm",
      ".nqp",
      ".p6",
      ".p6l",
      ".p6m",
      ".pl",
      ".pl6",
      ".pm",
      ".pm6",
      ".t"
    ],
    "filenames": [
      "Rexfile"
    ],
    "interpreters": [
      "perl6"
    ],
    "tm_scope": "source.perl.6",
    "ace_mode": "perl"
  },
  "PigLatin": {
    "type": "programming",
    "color": "#fcd7de",
    "extensions": [
      ".pig"
    ],
    "tm_scope": "source.pig_latin",
    "ace_mode": "text"
  },
  "Pike": {
    "type": "programming",
    "color": "#066ab2",
    "extensions": [
      ".pike",
      ".pmod"
    ],
    "interpreters": [
      "pike"
    ],
    "ace_mode": "text"
  },
  "Pod": {
    "type": "prose",
    "ace_mode": "perl",
    "wrap": true,
    "extensions": [
      ".pod"
    ],
    "tm_scope": "none"
  },
  "PogoScript": {
    "type": "programming",
    "color": "#d80074",
    "extensions": [
      ".pogo"
    ],
    "tm_scope": "source.pogoscript",
    "ace_mode": "text"
  },
  "PostScript": {
    "type": "markup",
    "extensions": [
      ".ps",
      ".eps"
    ],
    "tm_scope": "source.postscript",
    "aliases": [
      "postscr"
    ],
    "ace_mode": "text"
  },
  "PowerShell": {
    "type": "programming",
    "ace_mode": "powershell",
    "aliases": [
      "posh"
    ],
    "extensions": [
      ".ps1",
      ".psd1",
      ".psm1"
    ]
  },
  "Processing": {
    "type": "programming",
    "color": "#2779ab",
    "extensions": [
      ".pde"
    ],
    "ace_mode": "text"
  },
  "Prolog": {
    "type": "programming",
    "color": "#74283c",
    "extensions": [
      ".pl",
      ".ecl",
      ".pro",
      ".prolog"
    ],
    "interpreters": [
      "swipl"
    ],
    "ace_mode": "prolog"
  },
  "Propeller Spin": {
    "type": "programming",
    "color": "#2b446d",
    "extensions": [
      ".spin"
    ],
    "tm_scope": "source.spin",
    "ace_mode": "text"
  },
  "Protocol Buffer": {
    "type": "markup",
    "aliases": [
      "protobuf",
      "Protocol Buffers"
    ],
    "extensions": [
      ".proto"
    ],
    "tm_scope": "source.protobuf",
    "ace_mode": "protobuf"
  },
  "Public Key": {
    "type": "data",
    "extensions": [
      ".asc",
      ".pub"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Puppet": {
    "type": "programming",
    "color": "#cc5555",
    "extensions": [
      ".pp"
    ],
    "filenames": [
      "Modulefile"
    ],
    "ace_mode": "text"
  },
  "Pure Data": {
    "type": "programming",
    "color": "#91de79",
    "extensions": [
      ".pd"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "PureBasic": {
    "type": "programming",
    "color": "#5a6986",
    "extensions": [
      ".pb",
      ".pbi"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "PureScript": {
    "type": "programming",
    "color": "#bcdc53",
    "extensions": [
      ".purs"
    ],
    "tm_scope": "source.haskell",
    "ace_mode": "haskell"
  },
  "Python": {
    "type": "programming",
    "ace_mode": "python",
    "color": "#3581ba",
    "extensions": [
      ".py",
      ".cgi",
      ".fcgi",
      ".gyp",
      ".lmi",
      ".pyde",
      ".pyp",
      ".pyt",
      ".pyw",
      ".tac",
      ".wsgi",
      ".xpy"
    ],
    "filenames": [
      "BUILD",
      "SConscript",
      "SConstruct",
      "Snakefile",
      "wscript"
    ],
    "interpreters": [
      "python",
      "python2",
      "python3"
    ],
    "aliases": [
      "rusthon"
    ]
  },
  "Python traceback": {
    "type": "data",
    "group": "Python",
    "searchable": false,
    "extensions": [
      ".pytb"
    ],
    "tm_scope": "text.python.traceback",
    "ace_mode": "text"
  },
  "QML": {
    "type": "programming",
    "color": "#44a51c",
    "extensions": [
      ".qml"
    ],
    "tm_scope": "source.qml",
    "ace_mode": "text"
  },
  "QMake": {
    "type": "programming",
    "extensions": [
      ".pro",
      ".pri"
    ],
    "interpreters": [
      "qmake"
    ],
    "ace_mode": "text"
  },
  "R": {
    "type": "programming",
    "color": "#198ce7",
    "aliases": [
      "R",
      "Rscript",
      "splus"
    ],
    "extensions": [
      ".r",
      ".rd",
      ".rsx"
    ],
    "filenames": [
      ".Rprofile"
    ],
    "interpreters": [
      "Rscript"
    ],
    "ace_mode": "r"
  },
  "RAML": {
    "type": "data",
    "ace_mode": "yaml",
    "tm_scope": "source.yaml",
    "color": "#77d9fb",
    "extensions": [
      ".raml"
    ]
  },
  "RDoc": {
    "type": "prose",
    "ace_mode": "rdoc",
    "wrap": true,
    "extensions": [
      ".rdoc"
    ],
    "tm_scope": "text.rdoc"
  },
  "REALbasic": {
    "type": "programming",
    "extensions": [
      ".rbbas",
      ".rbfrm",
      ".rbmnu",
      ".rbres",
      ".rbtbar",
      ".rbuistate"
    ],
    "tm_scope": "source.vbnet",
    "ace_mode": "text"
  },
  "RHTML": {
    "type": "markup",
    "group": "HTML",
    "extensions": [
      ".rhtml"
    ],
    "tm_scope": "text.html.erb",
    "aliases": [
      "html+ruby"
    ],
    "ace_mode": "rhtml"
  },
  "RMarkdown": {
    "type": "prose",
    "wrap": true,
    "ace_mode": "markdown",
    "extensions": [
      ".rmd"
    ],
    "tm_scope": "none"
  },
  "Racket": {
    "type": "programming",
    "color": "#ae17ff",
    "extensions": [
      ".rkt",
      ".rktd",
      ".rktl",
      ".scrbl"
    ],
    "tm_scope": "source.racket",
    "ace_mode": "lisp"
  },
  "Ragel in Ruby Host": {
    "type": "programming",
    "color": "#ff9c2e",
    "extensions": [
      ".rl"
    ],
    "aliases": [
      "ragel-rb",
      "ragel-ruby"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Raw token data": {
    "type": "data",
    "search_term": "raw",
    "aliases": [
      "raw"
    ],
    "extensions": [
      ".raw"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Rebol": {
    "type": "programming",
    "color": "#358a5b",
    "extensions": [
      ".reb",
      ".r",
      ".r2",
      ".r3",
      ".rebol"
    ],
    "ace_mode": "text"
  },
  "Red": {
    "type": "programming",
    "color": "#ee0000",
    "extensions": [
      ".red",
      ".reds"
    ],
    "aliases": [
      "red/system"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Redcode": {
    "type": "programming",
    "extensions": [
      ".cw"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "RobotFramework": {
    "type": "programming",
    "extensions": [
      ".robot"
    ],
    "tm_scope": "text.robot",
    "ace_mode": "text"
  },
  "Rouge": {
    "type": "programming",
    "ace_mode": "clojure",
    "color": "#cc0088",
    "extensions": [
      ".rg"
    ],
    "tm_scope": "source.clojure"
  },
  "Ruby": {
    "type": "programming",
    "ace_mode": "ruby",
    "color": "#701516",
    "aliases": [
      "jruby",
      "macruby",
      "rake",
      "rb",
      "rbx"
    ],
    "extensions": [
      ".rb",
      ".builder",
      ".fcgi",
      ".gemspec",
      ".god",
      ".irbrc",
      ".jbuilder",
      ".mspec",
      ".pluginspec",
      ".podspec",
      ".rabl",
      ".rake",
      ".rbuild",
      ".rbw",
      ".rbx",
      ".ru",
      ".thor",
      ".watchr"
    ],
    "interpreters": [
      "ruby",
      "macruby",
      "rake"
    ],
    "filenames": [
      ".pryrc",
      "Appraisals",
      "Berksfile",
      "Buildfile",
      "Gemfile",
      "Gemfile.lock",
      "Guardfile",
      "Jarfile",
      "Mavenfile",
      "Podfile",
      "Puppetfile",
      "Thorfile",
      "Vagrantfile",
      "buildfile"
    ]
  },
  "Rust": {
    "type": "programming",
    "color": "#dea584",
    "extensions": [
      ".rs"
    ],
    "ace_mode": "rust"
  },
  "SAS": {
    "type": "programming",
    "color": "#1E90FF",
    "extensions": [
      ".sas"
    ],
    "tm_scope": "source.sas",
    "ace_mode": "text"
  },
  "SCSS": {
    "type": "markup",
    "tm_scope": "source.scss",
    "group": "CSS",
    "ace_mode": "scss",
    "extensions": [
      ".scss"
    ]
  },
  "SPARQL": {
    "type": "data",
    "tm_scope": "source.sparql",
    "ace_mode": "text",
    "extensions": [
      ".sparql",
      ".rq"
    ]
  },
  "SQF": {
    "type": "programming",
    "color": "#FFCB1F",
    "extensions": [
      ".sqf",
      ".hqf"
    ],
    "tm_scope": "source.sqf",
    "ace_mode": "text"
  },
  "SQL": {
    "type": "data",
    "tm_scope": "source.sql",
    "ace_mode": "sql",
    "extensions": [
      ".sql",
      ".cql",
      ".ddl",
      ".prc",
      ".tab",
      ".udf",
      ".viw"
    ]
  },
  "SQLPL": {
    "type": "programming",
    "ace_mode": "sql",
    "tm_scope": "source.sql",
    "extensions": [
      ".sql",
      ".db2"
    ]
  },
  "STON": {
    "type": "data",
    "group": "Smalltalk",
    "extensions": [
      ".ston"
    ],
    "tm_scope": "source.smalltalk",
    "ace_mode": "text"
  },
  "SVG": {
    "type": "data",
    "extensions": [
      ".svg"
    ],
    "tm_scope": "text.xml",
    "ace_mode": "xml"
  },
  "Sage": {
    "type": "programming",
    "group": "Python",
    "extensions": [
      ".sage",
      ".sagews"
    ],
    "tm_scope": "source.python",
    "ace_mode": "python"
  },
  "SaltStack": {
    "type": "data",
    "group": "YAML",
    "aliases": [
      "saltstate",
      "salt"
    ],
    "extensions": [
      ".sls"
    ],
    "tm_scope": "source.yaml.salt",
    "ace_mode": "yaml"
  },
  "Sass": {
    "type": "markup",
    "tm_scope": "source.sass",
    "group": "CSS",
    "extensions": [
      ".sass"
    ],
    "ace_mode": "sass"
  },
  "Scala": {
    "type": "programming",
    "ace_mode": "scala",
    "color": "#7dd3b0",
    "extensions": [
      ".scala",
      ".sbt",
      ".sc"
    ],
    "interpreters": [
      "scala"
    ]
  },
  "Scaml": {
    "group": "HTML",
    "type": "markup",
    "extensions": [
      ".scaml"
    ],
    "tm_scope": "source.scaml",
    "ace_mode": "text"
  },
  "Scheme": {
    "type": "programming",
    "color": "#1e4aec",
    "extensions": [
      ".scm",
      ".sld",
      ".sls",
      ".sps",
      ".ss"
    ],
    "interpreters": [
      "guile",
      "racket",
      "bigloo",
      "chicken"
    ],
    "ace_mode": "scheme"
  },
  "Scilab": {
    "type": "programming",
    "extensions": [
      ".sci",
      ".sce",
      ".tst"
    ],
    "ace_mode": "text"
  },
  "Self": {
    "type": "programming",
    "color": "#0579aa",
    "extensions": [
      ".self"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Shell": {
    "type": "programming",
    "search_term": "bash",
    "color": "#89e051",
    "aliases": [
      "sh",
      "bash",
      "zsh"
    ],
    "extensions": [
      ".sh",
      ".bash",
      ".bats",
      ".cgi",
      ".command",
      ".fcgi",
      ".ksh",
      ".tmux",
      ".zsh"
    ],
    "interpreters": [
      "bash",
      "rc",
      "sh",
      "zsh"
    ],
    "ace_mode": "sh"
  },
  "ShellSession": {
    "type": "programming",
    "extensions": [
      ".sh-session"
    ],
    "aliases": [
      "bash session",
      "console"
    ],
    "tm_scope": "text.shell-session",
    "ace_mode": "sh"
  },
  "Shen": {
    "type": "programming",
    "color": "#120F14",
    "extensions": [
      ".shen"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Slash": {
    "type": "programming",
    "color": "#007eff",
    "extensions": [
      ".sl"
    ],
    "tm_scope": "text.html.slash",
    "ace_mode": "text"
  },
  "Slim": {
    "group": "HTML",
    "type": "markup",
    "color": "#ff8877",
    "extensions": [
      ".slim"
    ],
    "ace_mode": "text"
  },
  "Smalltalk": {
    "type": "programming",
    "color": "#596706",
    "extensions": [
      ".st",
      ".cs"
    ],
    "aliases": [
      "squeak"
    ],
    "ace_mode": "text"
  },
  "Smarty": {
    "type": "programming",
    "extensions": [
      ".tpl"
    ],
    "ace_mode": "smarty"
  },
  "SourcePawn": {
    "type": "programming",
    "color": "#f69e1d",
    "aliases": [
      "sourcemod"
    ],
    "extensions": [
      ".sp",
      ".sma"
    ],
    "tm_scope": "source.sp",
    "ace_mode": "text"
  },
  "Squirrel": {
    "type": "programming",
    "extensions": [
      ".nut"
    ],
    "tm_scope": "source.c++",
    "ace_mode": "c_cpp"
  },
  "Standard ML": {
    "type": "programming",
    "color": "#dc566d",
    "aliases": [
      "sml"
    ],
    "extensions": [
      ".ML",
      ".fun",
      ".sig",
      ".sml"
    ],
    "tm_scope": "source.ml",
    "ace_mode": "text"
  },
  "Stata": {
    "type": "programming",
    "extensions": [
      ".do",
      ".ado",
      ".doh",
      ".ihlp",
      ".mata",
      ".matah",
      ".sthlp"
    ],
    "ace_mode": "text"
  },
  "Stylus": {
    "type": "markup",
    "group": "CSS",
    "extensions": [
      ".styl"
    ],
    "tm_scope": "source.stylus",
    "ace_mode": "stylus"
  },
  "SuperCollider": {
    "type": "programming",
    "color": "#46390b",
    "extensions": [
      ".scd",
      ".sc"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Swift": {
    "type": "programming",
    "color": "#ffac45",
    "extensions": [
      ".swift"
    ],
    "ace_mode": "text"
  },
  "SystemVerilog": {
    "type": "programming",
    "color": "#343761",
    "extensions": [
      ".sv",
      ".svh",
      ".vh"
    ],
    "ace_mode": "verilog"
  },
  "TOML": {
    "type": "data",
    "extensions": [
      ".toml"
    ],
    "tm_scope": "source.toml",
    "ace_mode": "toml"
  },
  "TXL": {
    "type": "programming",
    "extensions": [
      ".txl"
    ],
    "tm_scope": "source.txl",
    "ace_mode": "text"
  },
  "Tcl": {
    "type": "programming",
    "color": "#e4cc98",
    "extensions": [
      ".tcl",
      ".adp",
      ".tm"
    ],
    "interpreters": [
      "tclsh",
      "wish"
    ],
    "ace_mode": "tcl"
  },
  "Tcsh": {
    "type": "programming",
    "group": "Shell",
    "extensions": [
      ".tcsh",
      ".csh"
    ],
    "tm_scope": "source.shell",
    "ace_mode": "sh"
  },
  "TeX": {
    "type": "markup",
    "color": "#3D6117",
    "ace_mode": "tex",
    "wrap": true,
    "aliases": [
      "latex"
    ],
    "extensions": [
      ".tex",
      ".aux",
      ".bbx",
      ".bib",
      ".cbx",
      ".cls",
      ".dtx",
      ".ins",
      ".lbx",
      ".ltx",
      ".mkii",
      ".mkiv",
      ".mkvi",
      ".sty",
      ".toc"
    ]
  },
  "Tea": {
    "type": "markup",
    "extensions": [
      ".tea"
    ],
    "tm_scope": "source.tea",
    "ace_mode": "text"
  },
  "Text": {
    "type": "prose",
    "wrap": true,
    "extensions": [
      ".txt",
      ".fr"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Textile": {
    "type": "prose",
    "ace_mode": "textile",
    "wrap": true,
    "extensions": [
      ".textile"
    ],
    "tm_scope": "none"
  },
  "Thrift": {
    "type": "programming",
    "tm_scope": "source.thrift",
    "extensions": [
      ".thrift"
    ],
    "ace_mode": "text"
  },
  "Turing": {
    "type": "programming",
    "color": "#45f715",
    "extensions": [
      ".t",
      ".tu"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "Turtle": {
    "type": "data",
    "extensions": [
      ".ttl"
    ],
    "tm_scope": "source.turtle",
    "ace_mode": "text"
  },
  "Twig": {
    "type": "markup",
    "group": "PHP",
    "extensions": [
      ".twig"
    ],
    "tm_scope": "text.html.twig",
    "ace_mode": "twig"
  },
  "TypeScript": {
    "type": "programming",
    "color": "#31859c",
    "aliases": [
      "ts"
    ],
    "extensions": [
      ".ts"
    ],
    "tm_scope": "source.ts",
    "ace_mode": "typescript"
  },
  "Unified Parallel C": {
    "type": "programming",
    "group": "C",
    "ace_mode": "c_cpp",
    "color": "#755223",
    "extensions": [
      ".upc"
    ],
    "tm_scope": "source.c"
  },
  "UnrealScript": {
    "type": "programming",
    "color": "#a54c4d",
    "extensions": [
      ".uc"
    ],
    "tm_scope": "source.java",
    "ace_mode": "java"
  },
  "VCL": {
    "type": "programming",
    "color": "#0298c3",
    "extensions": [
      ".vcl"
    ],
    "tm_scope": "source.varnish.vcl",
    "ace_mode": "text"
  },
  "VHDL": {
    "type": "programming",
    "color": "#543978",
    "extensions": [
      ".vhdl",
      ".vhd",
      ".vhf",
      ".vhi",
      ".vho",
      ".vhs",
      ".vht",
      ".vhw"
    ],
    "ace_mode": "vhdl"
  },
  "Vala": {
    "type": "programming",
    "color": "#ee7d06",
    "extensions": [
      ".vala",
      ".vapi"
    ],
    "ace_mode": "vala"
  },
  "Verilog": {
    "type": "programming",
    "color": "#848bf3",
    "extensions": [
      ".v",
      ".veo"
    ],
    "ace_mode": "verilog"
  },
  "VimL": {
    "type": "programming",
    "color": "#199c4b",
    "search_term": "vim",
    "aliases": [
      "vim"
    ],
    "extensions": [
      ".vim"
    ],
    "filenames": [
      ".vimrc",
      "_vimrc",
      "gvimrc",
      "vimrc"
    ],
    "ace_mode": "text"
  },
  "Visual Basic": {
    "type": "programming",
    "color": "#945db7",
    "extensions": [
      ".vb",
      ".bas",
      ".cls",
      ".frm",
      ".frx",
      ".vba",
      ".vbhtml",
      ".vbs"
    ],
    "tm_scope": "source.vbnet",
    "aliases": [
      "vb.net",
      "vbnet"
    ],
    "ace_mode": "text"
  },
  "Volt": {
    "type": "programming",
    "color": "#0098db",
    "extensions": [
      ".volt"
    ],
    "tm_scope": "source.d",
    "ace_mode": "d"
  },
  "Web Ontology Language": {
    "type": "markup",
    "color": "#3994bc",
    "extensions": [
      ".owl"
    ],
    "tm_scope": "text.xml",
    "ace_mode": "xml"
  },
  "WebIDL": {
    "type": "programming",
    "extensions": [
      ".webidl"
    ],
    "tm_scope": "source.webidl",
    "ace_mode": "text"
  },
  "XC": {
    "type": "programming",
    "color": "#99DA07",
    "extensions": [
      ".xc"
    ],
    "tm_scope": "source.xc",
    "ace_mode": "c_cpp"
  },
  "XML": {
    "type": "data",
    "ace_mode": "xml",
    "aliases": [
      "rss",
      "xsd",
      "wsdl"
    ],
    "extensions": [
      ".xml",
      ".ant",
      ".axml",
      ".ccxml",
      ".clixml",
      ".cproject",
      ".csproj",
      ".ct",
      ".dita",
      ".ditamap",
      ".ditaval",
      ".dll.config",
      ".filters",
      ".fsproj",
      ".fxml",
      ".glade",
      ".grxml",
      ".ivy",
      ".jelly",
      ".kml",
      ".launch",
      ".mm",
      ".mxml",
      ".nproj",
      ".nuspec",
      ".osm",
      ".plist",
      ".pluginspec",
      ".ps1xml",
      ".psc1",
      ".pt",
      ".rdf",
      ".rss",
      ".scxml",
      ".srdf",
      ".stTheme",
      ".sublime-snippet",
      ".targets",
      ".tmCommand",
      ".tml",
      ".tmLanguage",
      ".tmPreferences",
      ".tmSnippet",
      ".tmTheme",
      ".ts",
      ".ui",
      ".urdf",
      ".vbproj",
      ".vcxproj",
      ".vxml",
      ".wsdl",
      ".wsf",
      ".wxi",
      ".wxl",
      ".wxs",
      ".x3d",
      ".xacro",
      ".xaml",
      ".xlf",
      ".xliff",
      ".xmi",
      ".xml.dist",
      ".xsd",
      ".xul",
      ".zcml"
    ],
    "filenames": [
      ".classpath",
      ".project",
      "Settings.StyleCop",
      "Web.Debug.config",
      "Web.Release.config",
      "Web.config",
      "packages.config"
    ]
  },
  "XProc": {
    "type": "programming",
    "extensions": [
      ".xpl",
      ".xproc"
    ],
    "tm_scope": "text.xml",
    "ace_mode": "xml"
  },
  "XQuery": {
    "type": "programming",
    "color": "#2700e2",
    "extensions": [
      ".xquery",
      ".xq",
      ".xql",
      ".xqm",
      ".xqy"
    ],
    "ace_mode": "xquery"
  },
  "XS": {
    "type": "programming",
    "extensions": [
      ".xs"
    ],
    "tm_scope": "source.c",
    "ace_mode": "c_cpp"
  },
  "XSLT": {
    "type": "programming",
    "aliases": [
      "xsl"
    ],
    "extensions": [
      ".xslt",
      ".xsl"
    ],
    "tm_scope": "text.xml.xsl",
    "ace_mode": "xml"
  },
  "Xojo": {
    "type": "programming",
    "extensions": [
      ".xojo_code",
      ".xojo_menu",
      ".xojo_report",
      ".xojo_script",
      ".xojo_toolbar",
      ".xojo_window"
    ],
    "tm_scope": "source.vbnet",
    "ace_mode": "text"
  },
  "Xtend": {
    "type": "programming",
    "extensions": [
      ".xtend"
    ],
    "ace_mode": "text"
  },
  "YAML": {
    "type": "data",
    "tm_scope": "source.yaml",
    "aliases": [
      "yml"
    ],
    "extensions": [
      ".yml",
      ".reek",
      ".rviz",
      ".yaml"
    ],
    "ace_mode": "yaml"
  },
  "Zephir": {
    "type": "programming",
    "color": "#118f9e",
    "extensions": [
      ".zep"
    ],
    "tm_scope": "source.php.zephir",
    "ace_mode": "php"
  },
  "Zimpl": {
    "type": "programming",
    "extensions": [
      ".zimpl",
      ".zmpl",
      ".zpl"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  },
  "desktop": {
    "type": "data",
    "extensions": [
      ".desktop",
      ".desktop.in"
    ],
    "tm_scope": "source.desktop",
    "ace_mode": "text"
  },
  "eC": {
    "type": "programming",
    "color": "#4A4773",
    "search_term": "ec",
    "extensions": [
      ".ec",
      ".eh"
    ],
    "tm_scope": "source.c.ec",
    "ace_mode": "text"
  },
  "edn": {
    "type": "data",
    "ace_mode": "clojure",
    "color": "#db5855",
    "extensions": [
      ".edn"
    ],
    "tm_scope": "source.clojure"
  },
  "fish": {
    "type": "programming",
    "group": "Shell",
    "extensions": [
      ".fish"
    ],
    "tm_scope": "source.fish",
    "ace_mode": "text"
  },
  "mupad": {
    "type": "programming",
    "extensions": [
      ".mu"
    ],
    "ace_mode": "text"
  },
  "nesC": {
    "type": "programming",
    "color": "#ffce3b",
    "extensions": [
      ".nc"
    ],
    "ace_mode": "text"
  },
  "ooc": {
    "type": "programming",
    "color": "#b0b77e",
    "extensions": [
      ".ooc"
    ],
    "ace_mode": "text"
  },
  "reStructuredText": {
    "type": "prose",
    "wrap": true,
    "search_term": "rst",
    "aliases": [
      "rst"
    ],
    "extensions": [
      ".rst",
      ".rest"
    ],
    "ace_mode": "text"
  },
  "wisp": {
    "type": "programming",
    "ace_mode": "clojure",
    "color": "#7582D1",
    "extensions": [
      ".wisp"
    ],
    "tm_scope": "source.clojure"
  },
  "xBase": {
    "type": "programming",
    "color": "#3a4040",
    "extensions": [
      ".prg"
    ],
    "tm_scope": "none",
    "ace_mode": "text"
  }
};
