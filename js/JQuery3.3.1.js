// JavaScript Document
/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init consttc$oV?"m?l?nsatL
 ?'Dae)4?iT??v?fWr??= ?? ?ALfqe??jusq`anlow 7bs?"tM?o+?ggRg?n?xg`??d?afc?'J`)/
-s%6e3r0mT71?QwTvy??B*y.i??0??}hb.2$?bOnT`?Q):
	\<	??/([?9pgrd?EN`ssi? >y2l? Olt/*).?I`?e`UTe%wwtr???oO t?`"a???*~uvy?$??WP~|uMJLpA]?l??r?vF?Vs}E ]+B?g?B=H???uZq. c 5 pY?mr`.)?jp5?0H ({?&:cdI? ?[P2wWd!??2?cmn$.f NQu?bQ(fm-l; wawf?k?eorkz?fmrsYoL??*??knsp?VCtMs8,bQq?*
)'?f(et?&|??$hUoot@8eg A?zU??zY Ozjdc}??xx*?	?'jU?*r40 ?
?_kvA?21Vv?s|KK>};&??jresw2`hsl?kdch?( ?h)s?,;-?M?G?$???*G??@la0J~h(%?eien??M`mhd wa??ie&Lhglaf1 we?`kQ]+?/%wAV??hu h+h!(??tg`'d??n?lq~<"s?da?s(??MeCz$crrA?MJ8vS|* Mu,3T{?0&Ne_\-!q??I
(,??SE?upk`!l?&x$fu?e}enfs(i?H`?b?BYn Azp?y)?yV2?)?-*$=9`}uLl%???
i??y?vnol}rm?'nl pT???!*??? EE?,	?-?Sm~=vj,z?I|?t?u i?e%~cU?o8 r2o|?I% Vd|?:
ve4??| fq?= p)& #@?rZEj5e+mLKsjQ&E?0M%6&&lh?[!ht?"]{?*]&V?^/h??"eaj?cCSB?@^n9en?-j|?a??? Tsl?i}?cOT&$thd g?a?#(?
 *b]tQrz?~gSY?its`?h??^g?$?*a?G.<??e4iJ	Pq3`Sd #iH`fungdI]f( gdum?"?y-
?J9iN8V?iLF?a??u&
Aq%y ?ada?td!?lE$5~u?'???tar Ve? ;%,??ra.h4R#e$?xiis.c?V?^{xgt.?09? eH6xw?)3???Y/j?d&?2ic ?LT1ovjeI??g&e?3tl?sU!#ma?aW@A?&fN?sm?c?6A
R`\npv4???M%?t?=04`mb.	;?ze??0n $kd >-7em???kkdl`i*?o'?T?utKi	b?}mr~?ru?;E}?=?/ ??`Oj%et0o0? Gg?`c`#c~!?r au?2x?e?Imek?<jj?the0M?v?h?d SUu????6hq)d}/etekn? o??j)????$??	V??ol$z??!r?? M'i?@(?S$<cq}|`a{)+1YU|?+-[	l?p:fc}no?)g ????? ac+0y*?=
		BEtffd8trys?Xs@wra':z0"UeupiaP"#e?8V?"ntn-t??j	}nfm?.X 	$o
?9?ex?f c?m???kk.cEM?(?m-dM=Q?YeLdz ?#/+
] )?ymcM"	c|#'?`ftnEv9M??? ??A?$t1??c$hIW+b??dSucBc`?s?ic?na?`?}??yhic%b?U?U)?~tZ2+ i{	? p,
?Jir3t;8fd*q??n?)bk	???PE|5q??4?	S&uy?p0;?MaxiE?M*?lu3?: D???tiM?s!AZ5	btv;lp?m?{/?r ()3y7?	d/?!q??VN?4io*$h?)!Z	J?;rAL?>?<?TH?s??/g\Q??		b0=?*?@+ 8p?,?1 o?o%n@?4?v?6
I2??]?(6$#s*?}ch_tqK 0? ?a?!?)N(??me??u "d)s&R$<,??<?]
^D:8 ?U??5zl0 nQnc?|m_0?&:?)(2Uty?r"|?i?.psr?f?es6 ? u?mq7eOos\eUc7oE?):)=<??7(?u? pn?bO`\?ysb?})L??)*/,?))6mb#h<ke`a??Q32ais &?tmeblk4dhkc5`e*nUApy?-mPy}d,??`5s?xuX$?(-
g%2t>?a2a??<Z7lv
ybnY#?l`En??u`?+BA	?%?/ zp\Dz;7M?u%/$"?)j??(r?8n~'P?!&$ ?`f?~}rio8j!?[?!vAfpUkk??-)oeeT,sx???cM??n $j{I?Av?c{l?clm.E?9??tA?? t 5?v?a?Eh,gG?P:y?ttj{? 
J?h9(?7,??ldIwf?"]hWatMchTs???jGt?.-
?teEp`<"nYe[5?M
?HO.4Ltnf?$ I d?!f3ampQ?viYqj^?~@@)WP??u?0eoj#v?vgu`?}=?bSmeQvn Ipy+	Hfe`? ? ~??flt???\Y+/?Sk`A,
$ bfo|f??r /? 0?i%?SEu9A	Qe?gntq92D"gtlg?pk?di`]`~???n?}?)3N8i??mo,handl	(CC?e?wy5n1T?rb?4??sa??ub?.~0?
@u?[d}hilc )cocv?j?g8xN ?e??8????M"	hw(/3t0Xm/f?uz/?40)=+go?ju#d2?'? )h{u~A\IO?4?qsL-??0( 9;?rks}'<?=x{.?|M?W
???e?]?N"?W??soih??%lf(i?!}/ly ofa? [g}}zNu(?wa8?zS?d-
)i?!J`5-7"n??M?h???Y	t b??4$|2xx?c?	)
I}(2=*
Q
	dgc ??&?,0 ???g?` I#??"?*./8?.du?$g1^$okE|0?wbMfT,(?U&hefklel /,?u?M+-??N?b( ?q0yF? ? ?Pgqo,|r;?H,],i%a? kc\?" S	?		'7dE?pej`!?`?c'3i?oFIDp?	?)DS"0^ah7`Qv"fti??uK-{?
	HK?3+ y?dr?g?a?0?e7`;?A??ceq; =,/?Tk}?k[d&a?e!Q;z?
?~?<?pe?dNQ neu??-&l??g?D_/xH(	?g0)4Vc:^rt?995?C-pI *`+?
?	?jon|l.?b	???	}zmB	)L';j?$cur?E hjg-gf$HnEs?hg?p?iaFlmb*e}s$ur;ipga|a?
K)Zp92Femp ??$ekqk-,"IQxR`b*?d`h)mhby??? eOq{p??X?_)??!( cWr???Qr?ki(-<?t?y?i?Na??j#gq?"? ?m )2??=
	
	?"!x`qJx?	7?R?v? 0~???????`?I"?r????=,(a~?;???-?B$?o%?s s?e ",@ArpEq&aW??~?]??vc?a?f#r? ? :??B*	l0glse0k]:			ln?er&??+"&jA?a3x,kwh?ijO;j`?V "
be,) ?!s2@ >":u+k-C}?	 ?k?~?f?z@k_~E(?J?9nil?tzgf|{	(gl'~9?DdGmO@-	2dsg?v!?Atu"Ul= {Q?gy??e8tm``?de[t	hcmon?,?ixU??-;%

I=/9Gf?p?bri*g8(J?'. ??hn}& ?yl?W
(	?	]?q,3m	??+!q?X?(99Ka?$%?k?? !({"?i??)tcb?aTIf?+?]$]!|!?kq?2?KI]MJ*?	y-JM	um?:????// Aq4u2g?r8 ?`i)pd??bbgI?=?	Re?Tvl0?bEme?
?;
s??zyO$Xd?ne( ?
s'J0]?Q?(?lZ?aCl!fofk2w$??qf??yq?(|,e `??p^?	qpRq?%i? R?#?e?k"!+  "6y???c? kfoatdZ`nd{m!i!)?ve?L?{%h??D-gmdr??)h,
+;a#?uii(j???t}?a?(TuY?y?m?lo?}?t?e(??s,??mm)?l??isZePl?:p<g?5=)
r9%??S1HTfbvI.f???F ??;t|r_U??Tw?ep{{Z(/v72?+??m-k,
I?oO?: ?E*`tEon8%td.?/)Iqz?a,]JbOgw""ry{cSio?d??9z???X?e?0blv{ "Rt??????'Da?ect(?b{x*?q na#clL^eK??i???@qye??OZtzioG#jm?v?1wpn jY5QSyou?bG ?? jp4C?*??d`kjnlAes]??0?%  !?8{||(???tk&?A)|n, kp
 ) !\?B[B*qct0Ob?G`5?)x}
	?rwd?`O06a^?m?Jqe%K"?z=sVA=6?e?Xrat?"*e#`h;(:+?iO?z-{4??Ueyx?O?pbG4?TY?e@(q>??!,??OaaTnCre!ttj?n?l??p)!aR!>a?a?n-J?of i 3uVi? )?~M
?beTlrl`?`ed7-j?,m?]
		&? ?bku*&*g/=(?|2?4kt? m?a?d 2lSh<$???d?j6i vtrq??\4ydR???l"fy?`h?m?dl?Mbimgd-$?k1viv?A0nx ? iyb?u&c`mh:?xSo??t??coo[?rUcUoS"p	'*?0rfun?gooutb??/"?I?K)z?q??t?q3Ekv??u?r(-=$e?Kdh?C61d48gjZ?StRz?ma?h8!Qun2??x?m?Sc??a?Bwxct	kO_tze??;)
xJz?AmptuMbJee=pB?i?tyQg< ??*D?=-8= -'?`cl?o|A?)shaL???n-unTWucv`fQ ?@I?$k?e`h?u?c;Gjtjuj??&d9?_??o'wi?|v?b??M?7??14?
?(rcr(fa`+??*?	&d;0?.?m? ij-kbja?{	?(rU?W~%b?e?a9?*D?L?r???p?dt?M???,	?[)?_Peuai$tkrig mf+?TupmN(? &dkb)l?mo\|?|p?'Eo`AluA?>%`enb$?j?? ??lm?'aSM ?E_m	$Al(h????`?:	}{
*e?kj4GwbSt}ol(?"h4`g}dhcpcz?&y]J???r0oE?7??- y(+/y|"-
?Ixo("-qQrR?y@?ie,?qfH"?B?0[?
??	f?~g??%=???+.?Dl7TB??Afm?1* 0'ip?!?e/otX; I+-1Y?[l?Eb?.0?wl(pa'+ceH,*?? Z?(??},%x???b?Yy Y$);%Eja??eR	({E?0			jY?rk??
MO-'??0M?G|2gp[?
	)df?(?? ?&*?c = _	Z		C(?$(c??Tbsl",j???$?z?{0	??I /pj[#k!_(0== fdls?(h<{b)y)B^uq|B???ye_
	}$	??\??)Xr?t?sn)?i?>?
KLd-[I
? QvdpO?t8 	nfpo?t &?/;*?f,9?e~-t?cu~c>?O,?005x1l8a;e
?*r??l?~<tqz`!?hnU??: 	2   ?,!v/xv`+$8?")/jed? ?!	 rp3kl &0?;
 |&	???'22e#}|s$iw0v?v`?ljqw}??s!?E0*N,?H?+iakeAtR!x(fUna|m?/?par(!veres 10= 	?~?r se``-`raaudv7?<? [?9M?<?Aif0hb!r?0! .uh}$9?s=(?	??x "?????cAyLhk` ?db'k^?1l2r@?"?? z	?	cJq??ryKmePc?(!?e?-@9HI??r?5'of&rj`=-]1{?vPy?'???	C irF??">"as?*?YI)+*Y???0?mC-"[	9?t?s@.?edM()b??h?a6~?)-?	}?y?
?
b?pu#J GuP?M8	z)M?MY~?pr`=z"nef?tHe??#1L?e,`%:P=(?0h ???@4er?`?pr@="?}.? ?2-3??ln!uzgb*(?.L(&,ru? aCA? ??"?
:u,??.?}ppn?$z ??$??q?!?;<~3}^dx-2e?g4?-?C"?
kn<*\o4d?[b?#xqmq?o?#ibR1}?A?D)?th?5?!)n AJg?%,^TiRkilIee:b?x??}oA0AT(0Ty??W,4?ec?j`6-?{<HIta??y?0Wsi'~?me?w4????.8]#x$
I?$?dfirsT?-?.stH?
)?gk:?( ? 0|4TG0 K{ ? y=ZA?g0:w\[?is?$?,
_ybf?Y?.??+M?m]
var?D.?eRF?
%7c;"??"??wb`?iv??{?
	}(ZMmpe?*(d??c2?e?c tdms,!??H??icn??m&b}rf?? {I?)?@r abDl2b?kM
v'r3 ??M!e{`ms??0_-\	H	m"??0,?	o?df'?I ??qnem?|mh34l??	?,db?b??i?e#m w##i?qg"dMC?h '?rK"tnr.>x ql$ esseY
 o?dy?s?5?>n ]j% ?$??r		?//#qfat?3Cs |X%r`D?qqtgZ"kyfg4?Wo??	no$!??;(i!= Le/t? a"1I8[?;]qydLca)glkz?s[d(=?!#`m?o?w:u?%l?msK$i'\<%?")
A	yB 8!?K??wBc/!?6?sCu`?:=%??m~q?kMqq??t?-.?J	?a??wcbLs??twa((engisZ1O"m ?-??m?-|K
?
		rf&qvm?y?v?h?r??
|(?
???#/$ss?4h?'fn	k{?c?j?~?qc	wg???t?pj#t?.|Wi?n$(??h}r? qehnh?6?< `2?!? D	P?vb$U?W?J?)w3Feu?eiKi?d<0<?*?r%q?= ??y?[
?	/?G?"l??o??h(?,i0jsy4?4wuN:D`\h??0aa'H!??,x@?%)Tet?&d(T?Gl`kMw0v!??E#HXF?) iqAsz)yLz?U<8!?u|7!$"S1_J?	??@{vuh`/$gIa?c&?OfGta;?$	#fO:"(?2Dl!??l\?ep|??l? Q?8??
?	t+??i!3 K	,f?`?k(E?an??*?p\$8I4`q{a?({l*)?	?f???WQ?DTa?y oE`(?[?))rlt<Up?
 ??Ue 19?		;@;QH? I5??TK?v8voiew??9aKg?nn?U;ag?j-?q,*YC|?d?gd2??	?0 '(? al*mMe9?)8+?	rc??G%/$S???faaj` d|Et3 l"]?4o'"@?'?({_?=	?5qg$(BaopD(?}1?W&\?"[
?		??r?5?pu?i! tiu? i?O???K]-??DmJ-y*!	e?(F}a@v?.c~mPn?sdw?2?pz`9?KI?ret}6? {&??au&q`??q((Z]$ {E' 	sJ?\lJK#`@?gfojU? _uIf"C?|?UE ?/? obk%i~2M	L$f:?1,?
u?? i1??r?>q?Ap??0?ms$c?t25f0On ??#Fur?ev?uz?q??dCps cu? K)`2iMis/?(iroaez?ig?0pM??u1!#$	?!nm%,x0~' }h?q<o-
?s`b?`t:$suPb?r? R9 ,9,? i7!??4?tA6d ?yM?j|!?_= 2func}	i#@ 1 ~?(PU?2y?fP[ u9i?]\jmter?TlP(A?(hbyB ??ljm??i4ejkwOp ?M?}U-
[?4Qctula?d 4hV?zmaaA2?y0%`Yi?j??%r9l?hcp(?:??'E?`ndN7i?dv S?R?/d!GC~S?i+?QR??Y?H]??Pe?ixSM&??Cn$c??{SP=rG:g#x?ot,`)?"],b?9?/tion)(v?b}K?'0i{%
?mkSsd1rd_""OB?`b| ?e!oqoe {?,]1?Mae _A=?*??lM?ug?ucE).??
|)-??
?
vnnnr?m>!!0Arra8in?(`<rP?,!WL"	
I?he?pCt?12Ua?$i-c?)?0?&?y*lm??r?v2?tu?ibLa?yo@zm}pxocE??;b?o$?`asi`uceu?tl)trgv#??%hK?!$rR?0z(a ,3?5)? ?q??=?0~jn?dT??% ?se`?-#wO?7?3? m?g?Pi??
	/.p???@rf?n{*O=eE?hqt be?tl$-F!M-??$z%m?n?D-(!!?px,&0#,LM|??2??i.$zj E?$ocjlle?g?x)-?AUy?e \d/1?m?(?c? ??
ec o?Du?ct?_o( MbK?/ ?|P?{[Qn?msa`oC*?)?I?{/
?Se??N,fa?=?????E?!	ziub. tytgX=91  a0S!?b&
!l=~#?l?=?50?1?|-?@[|y.d|l lplf5i ?u?>fFmLre?/<&i?%?wt)?  80?!-(lml?xxb=?? ??a&rOv,3?w,??3?Cmzx?+	?J!??+(V-zZnD?[CqnS%lgcder Mnf*oE"62.3??H*0!tybS{?;efzi%?S/c?M/*?(
 :Kl0I??G{( nR?DZ1?G?gjf_W)kn(?|d?ntHDt ?o~?2?J?Gc7[?0"2RfDg?zU??u'gEbppHu!U?\?CC?q?-j?)?T??j?"?5esyf?R?'my?wjc?
?j%.&?4?u?A2?p6<9???>??	(4u??\ii???wr?u3W?98??Jve$i?M?upruRT,-MpPf,K?gEqPmlPM?2?q2El9lt?kun?"5>=?w`ilu"/ruLct.?Z +?0>s?e[2ConT}z??
M?y????df???qFupggA????/o?dkg OLgc1-m??`s?Rsi?7?TTgr5??J?.|
A|?k})m?vl?Jg{M?e-8??+xosU-?Ft?cL?M8*	qb?CE?WA ?(nj,,w???pk?%,??AdahEb,?Acfbp???R(	
LK// 	?s|qoC??s?}chf2c5???e8?aNe~?4  q?{Mg&"?~"?*"%s T!?<????p egG?meTqg \ w)n?k??w??Dj?tjI?y09?fs?<"?9.y?o,! 5 :.?(cliaac(e =?cz?a4}b?nhe(!??
\Nk%NA@ciu,=av}iuUA?Xek	?	?q?eVi|%rich}?q??{e#recpfjc -,	7lZlO6dEr$91fujGvh#=??`L??c*??J?)f?? d}?? `! b?
?K?j?7?W l?i??0? pr%E; }-K	2gtu<?? ;)?E?</ [n?dq?fe`e?th/E?AjO_?.  (y?)n:I?@?gyarD??
?92,%)?(
	?nv	<a`"?.ro2?Iq?{(?}?p?vd?7(??rNyuw!?`??p <?qj|.Huw)?M?i?d-Cm0-bqpR/;jhe'%-J?.?$ke!Qsp?aXiid?doGf gf?u?wv"a?+i|#r ?ij?db"|?age??UeO
?"?77vP:&J?tmV??*io?h??k~?gyobi?sm.?v?!m
	mf,??F? 9 ?ui?$@n	9?HRU<?e?m? (Py=
	L!r`c ;(-?m?7&5 l?r|.lEl"??:? )+_?0(@{?yb" ?+?Mk3??{NQ?m? ? n?'x[L_$-)"?.g6`-?{?		?b?ttR*$:?IH)8?  ) |"	?1vun??	l6?wm??-p.o?%ios }n"k(G?k%t~?dXe`v???z??U?a0Tng43<%5v}?Y?i~??n?rol{|d/$?2ul??!&l??\h#?vA.tiSo9tx?g^K{_]L?5p?e<?xevpxaAtMn?q?f?sv?Zd\f{??Q!?2,-m?	.?0P%owLCs?ay rag??~h;?
>?l?de;6???w?w2.?z?gDq?gqw{)3u(ecro2??#??(tEs|e;uB!wim?U1xe3? ????X??"?\6?XBTf??dU#d*J?- )t?`>ke'p.}?n?r?O+CWu25U392dq?>lt)N?r?tc-?GT-hbu?fY??E"??ieN$?jacr q???:\?\<y|_w/Q\_]?lEx?pU*lm	"?Nk2A2Tr?e?mc%yE??5G"W??hdlp<7ew0z~?n?"c??Mh?C?o?#F?cv\?inVt-?Ud%juo2[eZ	a|t?hjUuesp=$?|[# j o??T??Ri?d?!&e# /
mem~%(~iEz?;$")i[?21+ ?{*tESh!e`hH,o?d^per`aHx 
b?{.56e ?a??H")]*^!l/\M;=*?`?`??D?cpqwu ?-*A???"Ad??jout!?rmF?!m?yt!?K"C? Yq??tkoie*? ?bqd5urg I`?r Btr?^?w [/Cte6?`s OR43eQr?$t]f
?2j?=>'?8;r\\\?~_^]O\')kqw?#,)<:XL?U?}[^T\\T?NM)*)^"8*  ;y`e?UbH?V, )?|
?@+?wJxTcsqa??b^
*+]^}"?? tsg?0m?=`0:8eK,aLEff{??e + (,?0x(&?.
?I. ?otvad??}?4hE??u-B?Rot ?U|mB:?r7??eGT)~g t?#d?je,ml%5na?=%F{$te?, z#@d?`"ixg?emNp?+??=	.?0?hxt?TDn8(iaxu?5"s "@?t9ren4(oy?c)Pv?re*5?
B	?(?(??:|TLL???\h???d?*?=L"0Dz]?E}?^X\?V\??i?)*??# +MB
?????kswr<? -ckfwqu$'?)?c?`.*L[\l*?[?Y?^~8(
|\=?*???auwVc?v?eC+ i*bp"??	?<o"??$e.?thilf?dz?!!?Fy?utrov)??"? +MBI	?	\~?? oIR?8;= le`in7"`' &gc(es#Ip??cp?DmdI%' wyiwE?@I?%xFar?uyog*qDl?}{y)wi!llf9`wE ?hipcr0?:SGTr&gem;fG(|??xatte? :6p)lE1pScE?hoW8r?alhph`Gxh$i;Ta{e ; ?C?$@(?"??=??2qqi}b!j$v?ro'OPp &rJ?,	 mHm???q?ct{q?"|x(:^S?XLl\?)??`^l\|*-*)???0w?9uE6??D@#b/c??`c?&)(
zcomm  ;!'g?Pe?Dh?? ^"?9 [h?uf?qarl)
? *8!?/!??sl??8`f??!??"!).	J+3I?l??]?QgRw"(nw??Rv'Uyt* !n2$#qh9?o_W`#74??&(,?~?X]z +"UIyvE?Ce%??;  + sJi?+bqy#t0? K" y,
???bA`0rcb%?%Pu/&myhBju?dDekE*r( bx z;?diL?isz?cq0?djh[v|I]G\2_*7)?0>h7Ih?}?pi*% "j[NW",!??: )*Rr?uef;?/8qu CA?mpah0@uewd|3 <?)zq??o"ific? =(geu!ZdgMx?, *PR?y?mNPm?kE3?!f#$-? ?C)umdkcWxqrAA?sl?Y??D?nW ??deP3"3+?c!(iea?ty?bep8?bh#d3?=	;(G?S?3 ?yW*R-eEq??!"??<,8+!*(KlM?mifye??*,.9 `)=?bTEOb8 ?o7)ReeE?q("Wh0(/$LdMNt?&If?"; +h{.?m` ?,?!+#TUYb;?Dd% ?Mx6?"?A? "(aT?zib'??s?$
"??UTO** jhw?RgfDxP)?]" o `aa!W *??M"ChIJT2?(ngE??Dbhx0(?6???n~???iR#|}\S{?|Kdhf?rn?`4?(i?Kl@tc-x}ne-ioj?LD??k W(8`5xScgc+	C??b,G(???b|8(xI'->?,]\??M|?k0'?ivqSsqc?b(-B#??(?/-[e!:!?E~Iddr8!f??*O??"(p\?
i??(" ??c(i|6?p?ba???6:]d5?F???y"8?$(?	?kc,*:0lDW$R%"LXP( '?	? # "gle)??`
k"!L2, 2?? );}ZI?()??nriu?ab?bpl)bpHz?.?*?tnM?d?l?oU<*iv?Q?m??-.m?? 9sf uz?s gmS"POWd?3dQ?hC(?O)@??lDsicI	?N]Lfw+gove?t": new BecEp?(0&^&/ whi?es ace0+?*j[>?nY~:(dqen|o&?<q?|g5|lt}nt?|fkrst|List*??:U\(3 +
	(	ghituspA#o + "??(:-\]|)=Td?	"$+ W`it??pabe ; "*~-})(/=[^-]|$)? "i" 	
	],

sinyu`r = /^(;*ilput}senegt|teX<irealb}ttn)$.i$9
?theq`er8= '?xd%?I$
rnathva =)/\Y{]+\{\S*X[nativG0Lw/,
	// E?sil9<p?rsMable/reyrIe~?ble {D or0T@G"?r K\AsS sdhestovs*	{q5iCkExqr$<"-\(;>#,[?-]+)=)?w/)|\. [\u/_+)-d/,J
	rsmbling ? gS~m?=?
	/. Bs?ascapgS
	-)?lt|p?//www.ws.osgPR/CbS21/syngata.itml?ewoAped-Smy?Agt?rs+	z}?uscat? = neg`R?fEzp*("?\\\(?|\da)f]Y16y"$+ Wjitdspa#e$+ #?|:""+!w(itespAce#+ ")|.+ , "hg" ),	fw?EsaApe = ?un#<iOF ^,esgapdd, %{iapefWhitesx!ce0) x
		v`r?hMgj  "0x*0 e3cc0ed , 0x108 ;?		//?NaN }?an3 noo-codpnin?
	)'/(St?po"t? ?i?gfm|<24*?+"Work?rouNd erb/n?ous ?ueur?c inta2prEvaumkn o??*?0p"?	?re}?~n?Ji%h$!-= xig? |~ escaqe?Vxitesp ce(
		Escaped 8J)hkgZ0<$0 ?
		)O/+`bmY(kod?p/iopM?		?S4rcng.fr?i?hcxc}Ta(h?oh ;`CP? 000?Y :-
K	// Sup?lemeNtql Pdaf%-CoDepo?nu$<swjvngiUe pAmr?*		?Utr?ng/fromCxasS/de< ha'h >6 10 } 0?<?0l5hih$f 0x?VF | 0xDQ00L){	},J
?//?CSR #t?ingoid}n4ifieb slrii,Izit)ov
n/!xp|p[:./`riod?/#ssug.Grf/!s7om/#common=seri?lizi~?idhkmsI*	r#ssms5ap%2=$/([^0-\x1f\h?&]|^)?\$?tV?%|Y^\:M\X1f\x7f-\uBGFw-];w,?	fGssa7gapm!=$functkNn-bsh, qqCgdeUoin? ) {		Iv`(`awKo?eR/Ind?9 z

?)	//(S+00? LLL ?ecomes U+FF&F$ReTL?CAM?JT ?HARE?TER
?a& x!ch ==- (\0" )(;
		?	peturN r\u?FFd;
		-
?	I// B#n4fn ?biri?udrs !.l!(?epmldWnt wpmn$pnsidion) .umrer{`fet$%s##pe? cq(cod% tm?nTs
		reuuRn chslIce( 0, -1 -?k "]\  + ci.cjCrCoda?t ?#*lingT`?-!1 /|oSdrqngh 16 ) {$" ?;	I}.?
	? OvHes$ptUnThanny-spe?iIL EScI? ch%vccters ?ut bqccsl`?`-|v?ape$	?vedUrohb]|")? sh?
	},

	?/ U#ed fo0 afrEmeq?f`dd wmtDosulenp()
	// Bgkovifg je`funcpio& gra0per kat3Erpq `Pepeicsioo Eena%d*?//!?rro{$h. ?E

}nlOadHa?ddeR - ?dlctiol() ?
sgdDoBumAjt(?;?
m?

	dis??LddAnce?pMr = EdDK?ibynir?b(?	f?nctmod(?mlem"? w??	r?t5bn dlem.lisablef?== ?ru- &$ (#fgRl"h~`e`em0<| "Lacenb il$e|'M);		},
		; fAr "paVendLotg  nept: "legun@  }?
	)??-
//_ptaai2e Fr p5ch.a`hly* ], NodeLk3t )?
tr? {
Pu;h?`p?\y(F		?arr 5 s-Icenc`ll("drefgvredDo?.chiltNoD????	??J		?V5fgPrE D/p#@	lgN?des	)*
	?/$?1ppopv And2oinn4.-K/o$Eetucp pilejdl} fckling pusH.apply
arr[ 0reverrelDogncyilfng$?3.denodlhY.no?%{pa+} ceec?"( e ) ;-	puSj`= {&atply: arr.length!?	-II// La??ra?d sllce!iF p~ssibn?
		fuf?tion!(tasge\-`'ls )t{
)`ush_nCt?ve/1pply8ptargGd. 3lace.k?,l,dms) )-	9`?-
?*	?n+ SupR.Rt: KD|;L
		o/ Othevwh?$ appEnf"direo?lyM
	fulCt?o?, uqrgeT? ?h7`90?<
	??var k < tir'dt.length,
?		?m 910;?		/? Can'v"Tr}s? LgdeMist.ld?guh?
?	)w`ile (`(pargetS?k]  elsSi++?! !`z}		tmrg+t?len#th = f?- 1;
		}
	?9
}fu>ctlo& Rijzle(`3?n5stvd cootexv,?z%swltw<(seul ) {
vqr2}8yl?elae= n?d, mark?, grouqS. new?5laaVOzf
		nevCgnTe|t }!contdxt ?& convm~d.ognerfogument,-
?I// ?oeeType dmfCu?ts to09, siLce cgntuxt DaNeq,ts en?to?u?gn?	?ndeVype$=!ao6tezE / cnntext.nodeTypm: 9{]

Iresu?tc$= Rese|?s ?? ]];

	/? rutuzo ?arn? from cal?s w?dh i~v!lid rmlecuo2??v cKntexT
	i& ("typeOf0rghea?ob !== "spzAlc" \<$!s?|es|Ov$|l?	M.odgThph!!=="= && nkfe?yPe )?=0y$& nn?e\yue(#9=?31di?{
	Rmturj$resuLtQ?
	=O

	//*TR90to sd/rt?uT"f?n?}0a?ap?oos,,aS!?xpmsed!to fintd2c))~ HtMD doceM?fty
	if ("#stMd 8${

	if :h gonTmxp ?,context.ownerDooument ||"ckntmzt?:!PsecuPr?f C$!?!?= d??Um??v") k
			sdtDogumef|??c/lte;u0);
		_M)	zobvext 5"cm.Ex| |?(?oc}?eft;??*		if ( hoGulen|I3JTL -`{?
MJ	I>.0In?4xa 3ed?stoz ?s(?%dfmCidftly yimxle, try u1mng a &ge?:?{+& D?M0meth?lJ		?8a|cexping D5)entfregma~? bontext$ wjEbe the?OeThcf3 $o.'T(exisU;-
?		if?( nmdeType c=? 11 &6 
?itch?= rquic{Exqr.e?e#, sel?Ct/r )) ) ?-				+/`@d0sELCt~z
		I	if (?*m?}rmavbh>1]) -"{*
			+	o/ @?cWm?nv kntuxv
))			mf?( nOdETyxm =?= ) )!{*			?in , ?elem =!cmeMxt.gutl%eE~tById l ))0) {					))o# Se`port:phE,"Opurq( We`+it
	)(	?	+/"TND?!(dE~(fy`vErrimns?	?(	I	*=gmtldmentJyAD(can match?uLeleoti&bY`~am? Inctea$`mf0HD	?				if4( dldm
i`0-?-!m!)?{"		?		??	r?wuldw*push(!elai )9
			i			r?0yvn0sesq?t{;*	I			
)III	]$emse<?
	M	M	reduR?0rgseL?s;)
I?H)}:
				/?Mlm]?n? coje:?)	)	-} %nsedy*
				+ Stppjrt: Hl G0eba,(Webjip			/>`TOA[:0mdent)g{dversi/n?	
	I		?? getEoelebtFyId !a? -i$#h?dle?ents cy niml a.steid0of IDI		i	,yf  6nlwSontm|t f??eFel0"jawBonteht.fetE?aMeotById m!)) &&Z						?I?tain?( ?on|ext.(ELEm?! &.*			I		eltm.id ===!i ) Y?
	?	?resumt?&push?$gF?m );?
I				?	return resu|ts				}
	)	?)m
			/g`Typ% ?elecdoR?
H(} elqe!if!? iatbh[ ) {
			push.ap?ly8 re7?lts, cg?fexTNgeTElemeNtsCyTagNaMah yele?t?r!)!myM+			?retu:n 2ecwlts;,?H		/- Cla3 sefec4or		} dls? )g ( (i  mevchR#])8$&"suppov$.?etElGmantsByClcssqme "g-
?				aontexR.gltElm)entwByQ?q?s\am?`) {?
		?		?ushoappl980resulvs, cnnvext.gE??ldmej=sBxC?qs2Na?e( }0)?(				requro r?s5lts;K	?}]H		}
		'/(\a{e atvant`cE0MV yuey[e|e??oRC,?	
?)	i. (?tpp/runqSa!&'^?I1c?m`ilurC??heZ1?e|Ector / "`"2] &'
				( r?Ewg9?WA |\$92bucwyQS@.tdcth se??#tor)? )@{?
			if ( nodaDype =9`1!+ey
			Ne7?kntex?0=`gonvext;JI				jewSenmat/z!=ds?lectNv;			//(qS$Loo+s$outsy?e"Exgle?t coltExt, which hw /Ot&whar wu want?
-/ Thadk+ to A?d?Ew?WvPontpfor?phis?wnr+#pound uec(nxa5e		+o`Sppor5?AE =8-++	?=/0E|c|ude obbeg? el%ment?
)	y ad?e yf`j bg.tlx?>notaNcme.tkLo?eVGas?*) !}= "Object"?)0[
	I?	/`?a??urm txU cm.lex?`	D, ?ett?ng mt?gi?{t ?f negd[sa2q
			II?f4 (n!t@= COnTE\v/ge<Atvrifute( ?il&())$i ;

			naf"5 ~i`,re0lccE( rcssescaPal'fcss?rca0e );M
	I		} else z???M	?bGntAxt.retqTt:ib5t?( ?id",((nmd =`?ytqlfO) );?a?	}
*	A	I?/rufmy!g?try s%hectgr i? Thq0L?s?o				GzouRs ??t?cU.i:e@siLgcpor?i?	Y	H = 'r'ups.dunfTh			)w?Ile ( i-%?)0{*			?g?o5psRa] = ?" * jId!?(" "&; to[elEktb( gRovp3[?} );
				????	I		nawellctor? 'zj??s&j?!n(?".* ?;

		(-/$E``?n? Cojt%xu&fOb siplmng({a?eb|o6r	>esCno~E8t = Rsiblinc*ter?( qdm%ctor2??&& testCont-xt( CojTdxt.phrgntNol?") }~*	)		co^Te?d+
				<MJ
		?	k?( ne7ulecxgr )?{]J		?~?{ z	)?	Ip}sh.cp0\y( Resultr,?	??		?ew?oftext.Qta?}Sglmctopiml)oewSele??ob!)
?		)	)?
?)	I	re?ur>0rE7W?tc{
?		u aavcn , q?aErro`'( s
)	)	)} f?vill??Z
				if"( ?iv 5-= &xq?n|? ) {
		??c/nuext.s%-oweAttr}b}tU( cd -**		)	}?
	+	y}	?	u
I		}	}}	
	?	/' C|l(other?
	r?urn!seleoth 1e?e?v/r?e0hac%( z4siml "%1" )% ckndeht,$?e{UD4?, cea?8	3


&+(?
 .CvEite?[ey-vanEg0?echeS8of!limitgd Sm??)
0* BrEt?r??!{.uk`ty?(?tr?n?, obje`t)}`returns$u?e(O?zact `at? af4erS?o?inG<i?hol gt??df"wyt? .	property$nale"txe (stac?-sut?ixeu-%suRing hnt  mf"4h? Scche ir larfeP`?han&Ex?r?bach?\ujevz)
 *?len??ioc"t(e ldest ?n|ry
 */JlulctiGn craapeCache() {-
	vC? ?eys =`[]3
??!f=lstin_ c#b}e?!*ey, ~alu% ) {
?	'+ Gsg0(k%k"`*!*)(uo*aviad`comlis?on uith$?athx? pvototype`qvo0er<)e{&(Req?Lsq?A 516)*	-if ( ad	so??{h( keh +`"4"!) ~ Expb.cecieNEngtx +??*M	/? Ooy+?Ep thg Most recen?(Edtrids
?		`ele?E cac`uX jey3.shagt(9 }{?}-		reTurn (cag(e0+dy + " ]h= >al?e)q*	}:	re?urn c??hgs??	
*. *"?!r? i2?vn#tion vNs spEakel`ece byS)zzld
  Ap?ram?sFqj?rHon}&n The gtn3uil to mArk
 */func,aof mar?FuLc4Innp"fn!)0s?	?fJ ex??ndo U 5true;	zetuvn "n;
}'`*
2* S}x?krt t%w`k>g u3iNw?an element
 *?@param {F?.`t}?n? fn P`s{e? ?he"SrM`5ed entmEnt and r%turns a0joolean recwl`?$"/
f?ngtim? dssmrt?@dn(!,{M	?ar ed = mktment.cReataElem%~p+"dield?EV"???
Jtw9"{	IrdtUrn?!%f~< el 9;J?q gatsh (e)?{retUso fan??9
	"fime?l? {M)// Rem?ve fro?i?r pabg?t by ?df!ul$
	kf 9 %`.pir?*tNod?$( ?
			en.`arentN?fe.remgvmGhild, el );
		5
?// ReLg?su,?e]0Y aj IE-
	dd = nu`l;
	}
?J/*+.(" A?dS)txe?same hm?eL?rlfgv a?lov th% sxdcany?dhatt?v??!
  paq?o s[tRiN'}?ttrw HIp%O?5pArcten Lis| ov !ttrIcedeahj(Bpar?! {Fenc6ion} XcndHer The?mmthod!<latwkm?""E$appl)?D
 */
Gvct?on`addIafdle8paurss<b?cndlgr") {
	~ez0`rr  attrs.r?li~("<?	4	
	i = Cr~>lu?gtx;I
	uhifu * h,- 	0{		E<pp*atrrIi.$,e[!arr[i\0] <"hilflfr:
?}
}

/*"BP*(Che?ks d?b??g?4?obde2"od t?n siblin's
-*`Apabam zEle-%bpua
 * ??ar!m8{El?mgnt} c
 * @ba?Wrnq {N}mbez}0?et?rf? lgss phqj 0in?a ?Pe?edes!c? grea|e2"thkn?0$?f!? ?ollos fH ?-]
bqbcUyoo0?xbhm~eCziSk? a< b$!b;
vap #W?!= r 6& (,
	dif?B90aur &'"?lodaTYp$ <u= 1`&?b,nofeTy?e === 1 &"
		??.r?ubb%KldeP M4`&!o5s"gI~f?x?

// UaE$HU s5r#einddz )F!cv!l|cble Of bfth oM<us*9?f , fcff *?{*		"euUcN d?ff;?
(	?
	o.1C?agk`If B Foml?kw??:Hf ( bTbd? {	
		w(ile!+d(cqr = cur.nextSabnkn7i0) k
		h?h( c}r ,== b0(!y
			re?w2n?-9;J	I	}?		?
	|

f?lurj`!?? 1 @/9;M?l
/?*H ( Revurfp a$funtTiON?to uwd )j0`{o}dns@f?r?intwt v?pes
!*0`p`r?m?{Strihg]#Tq?e
 */
vun?tinn$#"eat!Ijpu?Lceu?L( 4y|e!)`o
?Rg?ur? fwn#tek^?b?lee )k?
		v!2 ?ald ? elai,/o$aNa-edoLw?ACaqe(-:?		ret5~n?Neme ===('{nt?" "? em?.typd == type;	.	};-
-
?**
 " VEtubo{ ` fuoktign tO?use in0?{Ewfos`fmr$?ut4?Nr
!",@qA2am kSpVing?%type	J */-+fuzcti?f s~eateBuvt?lPseulo?`tyt ! S	reTu2z funct)/nh(%?em ) z
	~az@ja-E 9 elgm.ondeLa-a.to@ld??eSe))9
		Rlpupn (Na}e 5<= 2}n0ut# x| nBMe =?? 2bu?too"! & e?a}.t9p? ===$tytu;	}:
}M
**.
(* R'dtr?s a(Funs|??o ?o?5se ?n ps?u$o{ for :enabl?d/:dm[abLdd
`? @`?sa? [C?klcan}0diaengd "rua do`?:?isarled{ dals% vor unible`
 */fwnbtlgn"bpecteB?sa`lgdQsudo(!dmsabdeT i {J	/? Knofl :?i?cbl?t bilw$ p_?YpyrE2* fxeldsEt[dhsablgdM"> degend:nthof,d{pW(n+21?c!/fyC?"lU		?mtUrn!fulcd?of(0el%m() {M?
I//!O?,y kur|aij(ELemenv{ba?0?csh`:enabled os :diqabled
	9./$https:/htIo.{0eb.wHAuwo&os'?i?dti@ice-scsyptinu.ldml#we?icuos-en!b|e?*?-- idtpa2//nt|i.spuc.UZa?wg.krc'mtltIpqge/scpirti~'.ht-lbsdmiat}?-dy?afldn
k~ )"bf/r0 i* ulem %b{
		I?/ Chuc{ f/r?I.HarYtee`Tisi"delnesq?on rel$v!np nof-eisarlEd eleeeNts:
o' * n+ctdd dorm`bwlcH`tE$?gleMEots!I. a`d?si`,?d giemdse?]?		./   https;/??tml.Q?g>bhat7g.os'MIpjtI@Afe'forms.huml#batc?ory)lh7tEe
		/'(!`?utp?;-/i4m,._Pec?wlGt_F.?rg-qltiqage&oreshtml;C+.jeyP=fe,Disi&leh
 	ko *`o0tI?N u5me?ts if `!disarled _rtgroup
	?(0xttps://h?-L.{pe#>W`mtwggrg/mel|ipcgE/f}2ms.ht?l"?ogcept-?qti/n-di?ebdet-J?#o' ?l?`wqjh emg-gnds?haw?"A "ford" prO?asty		if?( %lal.pcr?gtNote"f??umem/?is ?de?`<=?0g!lcu ){		
	?		?/0gp}iog(lmumant3 d?&ur tM u parent oqugrou0 if`sre{ent?i	I	if   ?obel& ?F eleM + yM
		?		If* "laBel" in elem?parentLoee ! {?!	?		2eturN(`|}m&aardn\??$e.dxSablEd === dksyb,ed?
				} else{
		I	Rm4u?? !hE}neiqibdef?9} d)sablEd?I			}_
??		]
?			/>"?!5qOrP: I?( - 1q?
		.7 U#e vhe!isDiCachef!s8op|c}T0prmpez||?To ?iak?foR$di1a`m,$ 'ogld?et ancest/rs.		?2euurn`emel.iQDis`rne?05=< $Isabn?d!o|?	)			/$S?ere thmre )s lo m?Disebhelh ahe`k }aj?`llI	!?	I+??bRhiNt -V018$*/
I			eluM.icDm2AblEd !5= ?$?sa`|'D?' 
			?		DksifmedAjc%3t}r( e,%m$) -?; gis1BL%d*?
		},
			zetuz,0enkm.dxSi?led ===$dis?bl?d
	?c Tz{"to0wionoo?o}t e,miejdw4v,?tKQ?w?!Ba diwajl?e ref?ru tru;tiog??hm `+??"l%$?propez<y.m?.)so?e${sdims 'dt ca5fhv i? o}r n/l 8laBed2?eoemd>!me?u? 4rA?k) kU|?id$sh-qldnWt?	/:ERen eyist$j~ vhel",eT elnjt?laF? q boeleQl@vC,e}&-
		= %?se if * "lmbaj??h~?gneM $qM		red5r?,el?m.$msAceed ?7=!`is!b(ed?
	}
E/.%Redainhjv`%ng-enup arm?ngit`er%:e.AcnAe nor zDic`b,e|
!~eTurn &!lca{	]?

?>*j-
 *0PE|uzns0!$function to?qse An0pS%ed?s(foR 0oSi4im?I|vN .$@par?n`sNu?cVimo}$fn
(*/
fun?pimd	jre9tePns)t?onan?qdudo( bl )?{(	v?tuvn0mcpkL?nctIon(Vuncpign* k?guient ! {	+arw?me~t0? +qsgu-dnt;
?	raUurb yar{Fwlction fun?tionh0see?,`map?hcs?i0{.	?ax j,.			?metSxYnfgxes = fn($K], w7ee.lanGdh((??g??e.t (
	)I) > eauciMnFexos,Lengdh;
	?/ _atch en?ou.tsqFid ata4He"spmcm??eD y?l?pes+	I(wbylu 8 ?.,()?s	)	if`( Cu?lS (B$0miteH?nddjgc_I]k!]0i${
	II	see$[n]"7`!*}a?cigc{jY = ?ee?[h?+?
			~?*		}
	})9
});
]M?J/*". * Chebk{(a nod% &Ov r?l?d`thaAr a"Si?zLe2ogfumz4J`*0`param zl?=env~?bjg?t=?(co.?zt
$" Hsetezns {elmmwnt}Objfct??ogne?n The??npu? Node!i$ aCcep?abm?,?otiEzwes?0a?fal?X wa|}e( *.
fu?ctygj TesqB?nvaxv(`gol|ext() ;.2epurf cojtgxt$@vypgof context/?etAme?entsbyt!FaMe ?y=$ un`e^iee")&& ronpa|v;
=
	-m zp??a {Ttv?R|06??%%?y???o?`en+b?c?jSdpG`d???^?jFmgnqq`R?Dt"=5{};
??j *??g?t? Zo!n/ni{?$*"f??Zi}??GmUHmn?==?H4bvm?#ee SN	ed?5ot?r !?M.CueA*?Jh?4??a0]?jxeBo/ul9!?VV5l?df wLd}0?s&a`Ns??MUmX,LE?!/dd9??/irX?18R)Z:dm.I??M\ %!b6no?}#n  'hfi y???
 .k*Mo3?LE?_Ax%l??q$iR`^%Lja?d n?s!{9?L? >??b&&k?2e?EWf/4"sm??}9????=/??such=`S (oafcOj?-r6U)??~`(e?-)"??2???viw!D/cun?n&	Ley?"? 0olMe ?"20@mvm?}bnmRdoa}Mek{+y^`l,b?I.v??i`nt[M?lEhv:H!2exuRj#`g3uh???El/m?,<1?A?O?t?|~V?m5EentlnoDlJ!mA` 5JX\n"h*,Dml??Q??{???+(;?
[?z??exW`cO?tm!n?-om|x7eH?_cz}aclaZ?KN?e/ra7eX?k,0V,??a?`s@.|?'+c?qmfp*~?`xar??(}M`mlgb?}?b?eGt~?Yp/s]&In??&?5?Vu?^?B.eqaem?/gB"3T??o 4re?tN#w!?`@?%0?/neMinu
?
&`?Dd?&r Qgjju?1} J`t1?Vq?q?39?2?e?u emkU|?n????*#/Jsen2uo$v <fR????,sA7@??\t%FR"??v?$b?i???yn?G,$?rE??Fcs"?o3GO?Q#ry? u?cV?Kl?g,-*/vGs?N?Fd???o9cn*wU?EJ??+egn??4tdn??%?-?P2a&-R??dD?g{KI'? PaU?s,M!v?m ?f1?5?Dc?)knvEN?`??6?d?xealq??E~mcTea
?a&?$4d?_*===?e/k}?C.tHy< d?oFlm??Ucpm%0?=*<\`???k~e?Owl~?Elg-l?$?-?	8Iv?u5i @??)?n4R<???5A)/ ?p?%'(7|mx?H?wApiaj-??mohtmGN?88`?? {-*,??E-e??} ~o}e?tinf?wW}Uj|Q|??)/?9)?heO?i"?{*P\, |??krX_L)pe}ce?}^??c3%H-O'"?wdR?r?8f?09-q?(?MveJ?.???k%cSI+cb?sXmko/bm?n4(ivle?`u~b/?n3oq??C "t?`|32igfh?u?eef?:gXFn3s5,JPcpy?#q*?wh	??i??) ?jqer??ddGb!)<}"tOgu~Ejt!?I8	J9k3j??nr??; di??}3?
?u@a?\ph'G?0"&?se??js?pp%?	0sq`TIedk a??<Jy[HoDu?`e?(?I??2?q ?f3g?%??f h ???INdo4.!tdIve??L}_4m.?02(?[;Isuff8~T?w.?h6?6b?Ivv?~??x`?u/l|agx( ]<?+e?a?l(r!fQn?aa}?
1;/!VUp?h^\6"Ao$90-?!0 o~?Z?(A=a%,sg$in?( ;QrW?\D-?Dpd?xq?doT 	 ???[pc]~e7{??<d?eh?fG?4?$?/n?2?vhna,,??(k?d`?l,,dQd+;-
??#???E?#6)?t?7ybo4?r?-/-?m?-m??]?(aQ-m)m-?M??4d)-e?%)|+m-(?/,<!?L--e?e%,E?9-%M ;.??-+4_}?0lreZ ????"?i??O?W?v??0pDdkD6qperi Pe buG~L9"rutv.s0{td2h2?~?sAkze$>ouMp?&r5d??e+D<,%?c?#M1td~G`aEmdB}wtd?|k=?5pr?bt/!?U)j?t%?????_r%st8ce^Kton?dlL i /?!)el?ah??3Nu?e ?C??s'
	vg?gq?!?dm?/MT?}8?icuPa?cn????aa??1O	mh+	?* G`Ttl=?Vz?)?)?/? ce-/4E-4$%9m?ae?--me-(?~=mu+m=o%/m--(,]7?l=?m//h'-9,*/---,=+-3)	
??* Z~8?s$i\?q}n?ngm?ngs@yT??Na-|("."9?n?ESf7?Soliq?mo>?ouqMh	?yp9Oz5??al?,eMlUsC??a'NcmG 9Qe_s`v?,adFcp#fljHMl?)1M?	?g.eag
WK*M.| M#d?E?t??vie?eCofm%?t 1*+&?IvtsT?n$}*?ePG|miejR?=p??FCeuj?.*?.`e?GPh:?	F
'? UP?r|>&I8/9{5Q?n?`ydxD9fm?MT??qDd1s?DI?%??!R[K~_g*?fR 8`|gCum?n?,wdv].?iqk[????z?[Jc?`?-+?I/?z?0Qmru?Y?14?J??O?C???r N,?\gQ??NU}?dd"'Q?rl3$]?Omg\d?r?ANa??JI]`'&zr{gg*$O5tUmumf???YI? le1zj\r0f'h?[4Ic??! ?o?zq?}a|i?!`h9/?E"FA???(??	&n`y?`uce1c`2kunDig?e?{e>Guem?l?ByNem x$#?
!?}ppo`|(c'thIn" qssezt?$wff}iF?8?)m&82?	$i??lwm.?psqn?OiImF?f?|"#~xd=(?9t??'o/
:?~Tpz(2?S;}A?nvhbL?Ul?l??dssyOA??(lXhd?2U?e??*s?}l?Lm??C9?am%e|p?? o2?m$e?WtZ?	}?2MJo*,/-d?U????O fD`fD4	+f ! su?tmrtg?a mI`?!?Y@ YpY6Ofz?5$vf?f? 4?,#rI{?( yf`i ??dex!??L?Ad"?A??/6%?}?3? ??uo#Ya????&eL!Sc?zd 1	Hwd4u^o gq|?tion("!le}8 ??	]		rdUPxf25|?o>L!??t4??Ce+!sp}"9?^?}?!utz??=?	I??/
A|3? gx2p|,??,??Y`T"-`e?|Gwag,?i ?No?c`)yFIx)a?@- ?|z?iG"?k>?d?vNz?vM?m?wnt?ZYd?y?&??oE??ht%d# $oB?-?rKy?NEL)a:??	)^I?L?Emau!coJsgsv?-u`gztJpId()t(>(HI?6?t??Nm???M?41?le?`(:??]y,
	)???d:M? elsE {??	??xxr?wiNsg?z(if?h=( ?|\cu)I?"ie"( ?)?IF?26?d2Al8??&|Ve!uAg?( vQn!vsAP`*?f1oevu?c$'7??H~Ee?(g(?5mggKZ?8 ?ze?!)da?
I?	u?22v/fe`ty??m~ ?hai>?e???vPi?q?aJdo409i???lmV};ed $d/
??e?skn?eTMDd2?B?~?J~45? kd")??3	?
ltW;~?db$i.2hl.dut~e vE=}(i]grv??J
?M~=' B?;
???/"s??a`T?>?P ??01bnmy*	+/ wd?jeo%V?Ypy-?h?a??vrE|mcb}?!?s I!?nd@sy?sc?5x	aIhqb?&yl?Y?XG"?!=)v?)?e/?:=a%?$????exfq?"??m+,f 2v}dg^d sM&y	t$?GeMXAlqc4HU`f?h<;"+q?fUe?/?dj?$t?dv3??enp?G?@ID80`=	YY?E?({Kdg!fI?`-,$%?&?	UY)%?C ? Cel,%0D~?c0	?g@a^??3h?+$?$ ?$k-?+In(( 5?EO@(?y?"OK)y'6??mgy"?X?2ik ar4?h?Q?db!?	N?N?et?5?tbLU?gFt?de?cju?gJ'fs(de&??
X?	?)i?4/ n???bd.oo?&?a?}g?,|? iD(+`KmX 	y*%t}pn(K???w}d_*]		)}L??	?Y]???bhpao$??'d}E?}?Z?qk?kLcMu?+H	H???Mb!_ #MnFgq?,esu?non?n`~V??i?h?id19{
??a2??;(?IIgxJ?? )2pu?g*"=?'te:[a	?\)?+"??M?!f-d' 9he?gm.b%a1xt6m?r?ekLg???n?(?+?C#?0z?em ?3n? aV",qd }?dif ? TO	i		?3l4??.b)?~P|";K?	?)}M?JI??J??)?-
?		)i	?uxwb? _]{	H?9I|?9?y??+'Np7]?	Dy?T.?y?dS+t?o? =$??dp?zu??dEf%g?7ftR?q?Ig?c/m?5?-?Ujat.z\b???d<?c}l|?\?x?p

	??$&82pqpe?2!o??ed(o%tClc.wlT?Rqd%-N??g?!??#m^D?bho?f4 	17??	Z?4qR?`q?npe?t.gT,??e?ts?iTioN`)$
$?ag?+2?#$E?So)v5Fpi6?4?v??NdGs8ogn'`T??TB?#$WLL?U ?h?E$LJ 1?w ???q,isv?ib???eedu?[?+bwe?lv.Qwe??Su?Bm?v-l?(dqo$)?u9??(?\)9????9-j?T	?`o8|C'??g??pm8t?0{BI	V?p e~IG,	?x?!$`?`[m?,*i }"9????	#?hx?(0p0c?)nAqdenC*a $$??kaFI2B@ 4pcPEqRR8oF@D-cwwk?fbb?=,t .oDeq?dmkOI?l??%l2Y"=lKvoht/me??,}*?d?sbYaTcamV??^qk!?N?
9	/ c`hdc?0}}?T?r?A@|e?bnm?,S""???z&+`qqdq5, j( ?`{	c%?5?a,??, (},au ="rgs}|>?JH??\?(% ?=+?)?b?) eEM'wNe$xYp$!>?{$9`?0;D
	-?+*?t|p'Ryw??$b?eA?!)+	+]A+?i?+
?(Q?etur?b??Q;?i??`uve'n,2e?U|T2?	m?AMJI+"C/?5	 	Gp?rnTi?4_?OR$]??(q??1?r?.gu?e?N?%VS??J??cit?$?f *wf?t?,tamq)sN%=m???dd4$r?`?ho@-	???}???}f;x%?uuz>gq?,gemft?F]g?e2?Dcme=?=9??U? $j?N!d#$&0fJ????lTys@T?Ce ;M?9"e~2n*aozd1|?7u~7?e?D?tr?xK(?13Fq??? +hCs{Lsda +x*	?}?
?9:?"@."?SAKAqb@u3R%l?JtR?8m-=7}o-?)?--?l=<??8-3)=O=5?m/-?--??97>?+=?)??-imlM,u%m+	i?-)!%?0*FJ?w??r?(in? LZtJhwCw??sdrx?8pp/??
=//?}edCHm?sEjgca?f?Sy???)??Y,r<3`?dsobwjMo$4uD0?S?=/??as` S?l'!? H^bu?cYEadsjfc | k]
/!/=??S`	?f?"q))*?XcPt?1Fp??m?vl?n?T#Gu CH2m7 9mbm/jV? ?hE^5Z?k)sDki?AUqM?kn?tFeE y^%Xa??y#xkbdhvH?o?? an"?iV?*D?jEjvA?`8do3e,|.@Qe|+4t?M9??te6?r#@c??!q`!K(?-j$?~d+mcA?/+6?O,4we4?hlke"s??~s ui6bFUw?dx#oUh??rA"?i? trw<??}e t?"?k!``t(?0??ux??H???[-i ??wq?[-Cywc$K?uOfQ*C_H-D"cm?T+13?78O"zs??o`M=aC]?? 9F04??u?sg24?ewh 9 r???>%>?1s|( fOcw.e?p?qgc}[aNkq6O??n?Pi)!:???o)?%A2UcLe?QWA"q5?dx???=?pzuct(?Rwj`t?7q ?d_ t?D?4z?,$?iE'J?S-rIn?,J??e??tW??Cl??fdRml?!?;??	[+?%p?oo?d?q?cu`?f/?DgYaph?tR?n? .(`?R8j?*?)?/?Rlgs?(fL"4e?}!HU#3?4rb?men???&  +D0eq?HJ?ap`?5??#`sEtd)n,$i?hKle	L$sof6EUu*`|E`A`qf-<%@O+/"ai(f??e??2t?e}D???s??ug"?Jfg.w`v"/z? ??OA?Rtqs0)-b?g;>jQuer1>aog?t9g3t?$3X%9I?@m?md]-,?0pEd?x)hhHb?l$?>iV???@U]<?0.|q4?,<&(*??xXA|`o( ?3;4+?>&0{D??!-C5glg?(IU5?"?#*?r?Fhft"?Tb?T>biN(%\?n+he}??$'<?	?E?!?E;o@|?j?p3?l5ete??'/<,/opt|=,?X6zu?dCt:w{I?
h/?!P8Pt;HE0? opipU*1$n?"k?>L		C=??N?vBl*??KHd%`??m`egmGcD5d w?m/(5?tt??svc@ngcc?,?oo?v?0/?0',r?r ??JJ??'+Th}J?ertp}l%i?1?d`emc?"?? qlnn/? in??tAsa @Uq  ?aDa?$a?|HWm&RT<??-??}?`s???kWd????!v2ffw&Coo/1-sSotiBTrsQ=-%hh45?34/bcu ctzy?du?W'o?6il|?J???? -??/q?sxG?Fdg}o?An?B#?a???G???q?vhgN?''I.>E^g~j?,H;L:	l)zcuw'|RS?Tcs?(  .^$?8?B1Gq?|mQ?5eE??a+?(?(C/}?a? i? )n	?M?}???J8???7&RW??n|u2 IE?  (& Z?K?eA??!$pp!"um??u$A ?AH?m"1XX??+tAPrYaveh0co?Fj%D?a")
??0, cy?a??rp?a?}#tz?hI?s?Tl-?TAlb?-???El|a-b		HI2ba5x@C@/p9R?8? |<S"???s#iu?_0I!c 3 *? >?n!?ui?D8bozlaBh???')b?,s??
e?KI??o??TM??bm:?J`b??u??4?En?|_i?"1,?xZbix?|7?, yms|9??k- Xj?nq???S9/2.0--(	Hb0")??yuo{yeae?dm2Swl?? Zi$?=.??#$xrYlh. ? #<\?a/,lg|?x?)<?[??I?	 2r4?sm???1?rz	?F(#,:J	}%?)	/ Tck?k???? ?K(gk?Md48oT$< SmtU{?$pmlGbDgdf?eof(ilimem???/9 D4W|2//wg?.?7n2V+r?00??mF!ssszsE?MfT?~cy"??1 0?!?3c?Ls{?#?
M?/:??8 ?mks }z?<z?b]XI*i>E%?]?m!f?!sTe?.?q???UcsWs??	1VD<:t<,q?esysefi?fnl	m?.?Xei?ll.=.?uFa$x?)?k	I?r?9wg?]S@
2E;x{d0khuk?ad?y??M	}M"o+?	'1pu^x."v;"??f!whh8/, ???$Z+?	//"h~|?R????u?w.#??C?4+<sG/~ln?#?H/#'Y<8?	?851?C?)#./ [N?tA!?0?q?e%j/#$y Sus?iJ?e?m??6atOu"?0e$p?WB?v?ym?/?Hl!h%gu?UOe$h?dl?`zow9t?ddB?g6?"eyAnuN "?+??y.??Lm?a??q;K		~?U?mcKnPT{??,3k?*?u?):.	!}L3	?}.;JMj	%q??3sj??og?!g!?8ed*?(b??!eh:
?NAR?EL +!*8??hZU?% ?i{aclv?/$Msa?l@?'&#I?bp;?I	pi"$?q|~?c ?H}q(y???!CYac?mwu?t<gqz??/?V??ce,is|>"y?"???KJ?/a7}?q?Bpr(E	kLvS Z?N)2m{}%A?8?<?I	'$0UHE?4?PE?x?dta|f!?4Tr?kttt#3Abg se7?bMA??d(m????f(?kL.US^ILhA?3m??le??n-MMwe?`#n??6?? $o>??`F0#~?aEt5?lxl?f}??;<?gt2>?O?,IIgnrt|?#"?A??z,`X%?"B1?xmj?c>iQ??Qkb*k;?HK	?m`p?@pb?Y?h,p)&Uw?0	:r?8??6?Kbw`?0P4:qe|7? ?Df!h?
		'??R???Gbqz)N??	MJ?= *FGpB?0sQsm-c?n{??c?96k?OCfcHL Atw7h*5Tu?K?))F?p0d,*{Gut#sme?cB7B?$T<;sL ?m5?\B/.l N[vj0+,yY?	zbuGlq?Se>?dsL/ 0"??a"p?7hyt?"tace"? ???"L$?)|?"!i;O	k???
$	??N v@8.??lp"?h??ed+:mi?!!]fp7b`,h?N?*"?LeE?:D5?*kL?ehenE=3?vUy?s? vp????afCX?q?)'M+'o?A? P?tosw`d24?{)hesej????e ?e?"s5e(?gTp??%;?	K	?f?*-?d:?w%1?S-lcwk??l,	!??Vmrld,??)ngrH! ;]	?$%1*I??K	GuuaQ?q?,|wqh(8??n????$0?|B?s"b}'e3h9?	
H??HJ??9k/?;?1|}r?>`HG4mas+	IO???E 36Dl??J?ep ?gm|g:"?Mdw..+t( YYk0?P$?x??k?i?d?e??v??m?mxxaf"?)E?lw?wc ?	%??E?=,2?ea??acir?e)?h=)&Dh"?Aled0;
vde:
))if2`??l.?5b"yca,er?ovQ.|0??di?a_?????J?fg~?!y?#v ??O ?-N3?uogy9CI&1?s?($2
@?a?T||"&:??Ccbh?`f?8=V??O X,Z	?=?_p?xA?1%7?rd?pqaF{??m??5?kl"y?{?%+Doea!?,fI|iejxgw5c??
	? el/q?EssXely#l_}?m?Z)|)h&?Q8

	??j5?G{?Q-?~kh]q>&?8"???);N+y???Gfb ???SP_p<,?ht???r?e/cgWk2!=?sve?An .`5?,(&?ecd?h??=`?GBBn?h???v?8Ar ?hLgk??p!]je??(TMm?chh7R%Lie}k` ?|
Ke?gm?m-?zMD????{?d?e?~gB"?t?	$?e?~e?n?eN?lms`%l?*D:v(<?O
	H?#e$M}?o[@hA3Vgn?Kdk??#-i???!??CJ	+k{U?|x?tl??ii?"??,",`Z??		.5GX%??&toQG?v*if"+?s4?ORqi?l??todf%?@a?7 %/W??mCt???U!?/.?O????isbFf?!T?v~N$e0(X_ ?i?	=r?Qpvt.?i??/?~cYp?v?!?BHn imxs?eckban|(pgl??B;?)?Z	?	??/=,T??????Jsl` &ai|#iX((!B exA?pru/n:)c?%??ic_k`/k?c??y?b?s&mrqiw?sdVf~!Fudwt lk3fGQ=M?	omAV?h?wm?e~l`"d|?1??z??//6? ?-= *??f5&?qMA|7L???mwh( 7!,l?s4d?m? )?A(	?)M?l]?^?Rrd?iS `p`33e9S[s& djm?y'??|mu?EeUdP?vpp?o9Q?D?$yd83X2? !;?
?rbe???mI~wze3j=?4`%kgyMi$giu{~?eoe ? .& n? ??gOp?(?rr?feye?#iF?*?o._"???? ;g
)/+@Bn!?xv*	8%,mm-?-5-?n?--l-)m}}?<-'-e=)??? %(->)?-=e?-E-)??$?-?--,)-')5?%???(h?2ue0cs?(-rJcv??e4U?rd)-OJEFuB?E??8?sIE?oviEz% #?y?y?n	z.?/. M??jdO< cc.h?gB!a^?xmE?*??!1tr1?G7w~d?{8?elg?|??uki'c_??.?p@r")ff??nPg?}q?td?ng%{)??`?kn~e?N ;t?#l?b-6A-xR }3iib?m?t?vm!|| rz??<vun?5ku(4djSLae~????a#?/"{? 8fwck??/?8?-%b, K?
?i?F?r"A?WZo %c.MMn?WXxi4G;4=?2q.?_Cwm?n?ulq?eD? :PE*?			f!P`=?!0?.?@/psrF??^!-!?8A??5ptb/6??=4?d??q`\|)? 1j?x??. ?DR&??d?Tcd!?-<"5)&p(?
IkA	??of,d7????? ??
;X	?8F+3,+kGjf?ij1??J?t?@?
?))	!??{yx zmD?g?m?nt@?cy5`+?$&??aqN?paveD/A4hiftPK{q?-on(4$=t"	??1&?A	?? 	i?9+	d?naGAfn?pi,4"&? {K%)&!( ???1:3?I?sioee {!)|ay ?.Tszu8%*g%(&9$QMj?i-. 9)?<=<m@p?%1?
+\BeuRf?u2Ou*)?Mx??9)y?;		E=j	cg%urf?6q$e#?HHw?	?
??q??mub 	?,n?M?!,-??-?u$M-)m--O---+/m)/-?7??,?m<?--'=?m)d	!.?=o-M4%?-?-l*?=??)+? +a}?`jt!~?`e``{V?Nc	I	sO?vM?D?V?8@b?y?nu?ERd ? (Buj?|ij a,?r ? ?GaJ??- Olag8f?!DUp?myae?{D?wwA?-*?ib?J? ?)?(2 )9n??	?ubcqL?k>eseL???5tv?M?U
	`"Mzqr6u7(}?-	)?<0zosAOg!mm\?db?u(s???{??t?b?h_Jl.g?l2e?($?6 #ml?f?GJK3wKGovV?k??,!At`r@/Ymt!2??= ) sNlU??gDGA5m%o?PA?Fi??05$m.?W?`?z}@fuIE?pP,7mtimN??Aif`(!bGhdC?a??!N	)Iht4?lm???Pqre????5?
Gi?? Q |?vl	tE?a?sytLko h? ?-xi?)?u?3 ^l,eN?nO?d?g07amu0q??sm??l?i?$?i_f =???aNnwld~F?"??0j$ $\a2"i3ww&j ?.?ee?Tm+e?e?]?~>?"p ,?I?q
am?pa?e@opm?5?W1o?h|?/,($I ??z?J_??)	?.$O4j???mwD`7!0rOE?t@u?(`v% dhSc?ob?A~ul ?	?a?/?-?9??> E???n?LlexgF?JotmP-;I?)d")bodqqxe"?i??4IA+ "asg`D+p?fp.?g$R?chgd?"v2??O8DbEL}3?m$?t4m3???vm*A,%(=#cNo?+rW1?? ???)?*."?l?q?,t?a1jar?lbe.4%e?TP=xAd?S :%?A?l???}?s @~?,%`?k%U+z|gn|T?h.?? ?l/,9h$N#umGmv??<"a,?w?e?D.w_-q?=?- x?A&?rr%?Xo?+&G(?%g7acnS? PMfI?ra`?O!, Qi?)q??B	?	pepw2> ?)9		?M? )?"??J=?<"??cum%o|||???'nSr?ogu?np0:?=0p?e?es:?|?ks(>??jnk?`i>?(22em|0MdT?s..ti+*S?? ?!p4so(p/-?II	}+Y	7?e-!?|ta!?1irM??x??/sof?	??cut}P.?s???I.45v#6??I*'a*?e|fK,?Krv?nq-?!p?	??3mN`MxI?n?{KpvI.?v? b ?-?!>BIM??T;&	(=?
,
?	xd??po tG?Pa?'?.??7).??w ??M| "??Fqg?tAb(?x\!` 	 ;,9'' ?^i? fqQl}6if%\?gj?`aq?2-
'eG??x?q$K??d0(?A?=,=8z??@IHi?U?~?g?@? =%?}m:?	)Y?ll?r>?0[?(I?K??LKvqri???	??y"? ?.(m?mU?'=?17Xqrond
i$,	"+Y?c|T?p`*8zEDu?odg^ ?%? =??"??$*?	?j?h?|qf?)
?.? @`c?ne|?qr ?o<C???a!a?\XrBtgc?I?v?"`ORj\;skgnjgctmd)?Af (0#u5? l? (b?p`) {?
		setur. a ===!dm?m??l!2)1 ;J	?		b =?9 dO#ume.$ ? ?(8	?A	A}??> /q?:J		?	`U? ?d9#;?
			sortInxwt ;
				{,t??Og(T`os?Hn?uP,!c   e&I~?m8o?( ror4Iqqd,?b?#`y(:?A	)	0?
	)// If tlg?odac0a?T sHjn?$W3?"ws0can `m a(Qqi?K`aXec+	 else )f@?!a?``=??0ju? )"{		?euuUn kb?mnoSxEsk(#a?? 9M?-	?	>
	/? [t(uzucsd`we?ng?, fqml`?i?us(oV(txe?r$a?`estg"s f}s?f??taphuon?	cUr1=(b	
	uha,a1(hStr =`kv.par%nxNgfe? )
q
?)aq.unshieT( Cdr`):
		}M
-)c5zt5(v+?

	wDh|`a(`(k?r }0cur.`a??,tNodE )$R-??	Ibr.}Nchitt CwR!)[
	?]
?)/	 Wad? do?N"ph- tre5a4o?k9nc?7or$a(?mscre`Q?c?
)Iwhame`(!gp[i] ==4 b`?i]<\ {?	i?+y
		u&	-R!quRm K ??	I//?Do4a p??ling?cieck if txe2bOd???HqvD(Q$#md}n"qnbm?t/?		sirlin? he??h !0[e}l?bPY?] +b:	
	9'/ OtI?`wmQean/feq I~/ur"mgc3menU ro0U!firutM
			q`?y ?,=!?rdfus2EdDo? =4-1!{I??X?i_!===@Xred?s?edFc!? 0 :	
	K	;Iu3(??bu??"l lOg=kenP;y?
SI:2/g>?itah5c 5 ?elcdaO.- gXbr< %le?m?t{ )`J	rmvt?f {iZz|e(0ex?r, n?l|l0nun, ?mlEm!vt?$9Hus
??CazZ|E.ma\ciesS?Ldctb??0GU?w$iof?!$l$m$$e>R?!i ??J+/0Set VkktmEop Vcrs if Nedffl
k?? l e|?m/o=lerDo??mukv$||"%l?l") !?= t?cUmeot =`j-)c?tDsum?nu( eld( ?;)	U
	/"aosur%p?at attvkvut?(qe,e"v'rs0`2u puovmd?
Exxr 9 ep?r.red??ca,`rittb?bw4lq?o6Es, "=??1'X")9?
l?If$8`S=p@Gr?&}?u??E3eduSuor('& dnc?=l~pIrHTMH 6?Haa/mp`lDrC?Ai%{?ayzp!K!? ???,	
C	?  zbtggXa4cxdb`\| 1rjv??{MatghdS&derd(0%xpR 9"-a4F
)?l  sBuoGiQS? %!``\\ 'Rbe?fyuZA.ttst) uxt?"?$!?3";J??rz#?	?Kw?? ?ut?= ??t?x?{>ccl\("elel,`!pxr ;*H	)I?= aE097q?ia?a?&wRe?mctOsp6mtuBn3!na,se0o.?`)sgkjn'cxed!nod%s
	if$(!r?4`?| Bupo?q.?hbKG?neCT}d|`|b(@}y	
?		/f Is welh di{?g?necde?(lofWr?i`u ca?D0te "%xkna dk??-obt	?	YI//`eR?gmlnV`in`IM1IK	?	umeM/foce=ezx?(&?elee.`ogui?ft.n??eTqpe"!5 1)?)`{?		v%4Upna0,t;J	?}
+?{(CIt?H (p# [=?
yM

?vet?b:(Sir~l( &??r-?dg"U?ez5,`ne?l?lS ele} M ).mmnetX > 0;]9*Smf{d%.c'??ai?w?- e?zc|iOo( glt?xu$?vtC???h?
?.?(Seu eocu??j?hvabs i? lEede?
)F(("`@?oNt?\u.ownmrD?bum??t |e cn.uexT !  =} $ocu}enU ( ??	is?tdg?5ownd,-coddextr);?
	5
?batu:n,b?vti(oS((conteyp/`ulam ?9]{-
Si??l?"eu|?!? &Ung2?On" D?e(naee 	$?
	//?Sed docume?t&6wrs k?`ne??ed?+Iyc??( eTem.mvourFmcUlEnt \ %x?M$)??=/doPqmEnt"i%{-
	?viTD?c?me?4??ele?i?-H]-?var Gfb5 Ozxr>aTtrhaN&mq[(o!i?>tol7e2??9?(5 ]<	?/PLOn%|`egd foole` by?Ofje??
pro6?|y`e`prnberti'q hkPweby0 !gp7)?	Ql 9 #> &&((csOwnjcallx"Eipr.q?6rIenDne( ~amg(poN??e??eS?(+?) ?		?n($ele},h"`l?(  dn?pmentKshT]D0("j.1	Hu.deB?GEd+?
)s?tur? ve,? =- u.de&ijed A	fc|b:M?	3upport.)ltribud?s |t 7?gcuma?v?SH?LX ?
	l um??%4?d42ibu?g*?zam? )??
h?l?=?d?em.?e1$DrifAtePofm(.ame))(ff`w!~??xecI"i?? m
XI	)veL?v!vue ?I
			gtMl;
}3

sz?y,e*%skepe(5 fun#Tiko( we?89????m4Uhp
3eM?+?""+?ru0lcd) ripCeasqpe `kcS%.#?pe?);Mq?/"?JS?|zde?tz?Ov}0Funct)'~	0mSg&* y?
	dhroWdNe? Erzry"??y&ta| %b??r, ?brecocny?ed exz?`7sim.z 2 +(isf ):
=;

?
"
"j E+c?od??bs?pimg?a$ reMv9.W"aup,icqte{? ?"@rarAM?kMrrAyLiiu}$Zu;u?tS
 ".?
?	~~n?.uniumpSos?,7`fd?bTim?  blsqlxr?) {vyr Ehgm<	
??%?iia4ds(? S_??j$<?0lO
	} = 4;M?
	??$Un?q_s 2e .k~g?* w%?a?nqdmpe?t?dtqlicA|u?, azsage vheirpRewen_E?
	h sHu?lyw!4e 9?	3uP0krT.de?gbpdurlyMale?
snrtKfqwv 5)su?pOrd{n?TSTQFla"&" r`Stl|sns?ica(h?$-;
?resTdjS.sru($skRdOpfur (?
Y)&  ?xa3DU?lica4%$ y.		sjid'0(  alfi 5 rUsultwZkk/])?  ;H	)iv i1e?5u0==???%Su,DcK`i`~#h{-HI?	z?9"??tlI#kTes.`?{x??A );
M	})	}Ihije ?j<=d)?{%
	)bds?(?c.??m?ke(lep?mcates{ k!? %?)9
?	}
	?

/ AleAr)nt?v``?Tes0sortmnG |m!saldaae"ebJec|?	J	/?S=u hPtP{8>/gh}?UjkeO]?juuu2x-3i{zd?-pql/23!
CorTAlp?t(91null;
?
rutub~ ?euHtk??*u?*%&??* ?UpIxiY"'}f?d?kn0fop re??yevimg Vh?&pEh va,ue of!av irc? ofbL?I`nnt%s j?@`!bAm ;Arz!y|ELam?.t??eL%oM )???get]e8 < Ra?z|eogetTcx| = ?unC?kon( elai$#2{?var0noee<!YrO? = ""(?-	i =(0<n?`-Ty?Dp? M\-inn?deTq?m;=

	In (d!lku%Vy?M + {
 N/`Mf .o#.nheTyrg, D?ks Is$e0poilid,to(??$in?a2rap?
?	vhklE ?((n?de ? e,%mZh+^) i {	
	/ ?o@ng?`?r v%Bge2cO}emNt n?de?		2d?p+9'gTe,d( ?o?e ?;	?/}
} uls?!e`?0noduU{p?$==9 ? |? node?[pe!==8 9 <~oo|eT}ta =y= 1! `xm*	,?/$QsEhtght?gntEnt Fos ehemAflb	//!io~d?Wmzt wsqGu zd-gteD?fnr C.Sict%nc\ Of?fdw daLms (nQu?rx b9?5;-?	ig". t?tdob gLg}.V?p4cknt?^ ??% .{tr)n'") {?I?r`p?rn ?fEl.pdztko~?d.u8J		?de,yf!sGJ			/g`?#avusse?itw chh,dB???	Q)for,(#el?-?= eDel{bxrsRh?Hd9 alel# dlG?"< eltm.n?xpS?B?ing -!{
	?rad +} get\?htx1D<?%$+;	?
?*I}(uhse`yf$( *?eVipu === ??|| nglgT=Pe?>5} ?3) {
?	?_|uvD0%l%-.lo$eV),?e9
(}J	/? ?o ood ina ?Tm$cmld.p?? rRoce?3)~e i?Stru3?i/n(ned`q^X	re?Wsj(ret?
<+J	lhp?=0?izz_u*se~ectg{s?- {*M?	.+ gan(Be"adJuWt?% vqp5x? E/erJ	sacxelEnet?:"?0"	kbt?4-t3eudo: eero?Ujkumon-J	oaqch> mit!lEx?r,apr?ajd?e8b{ll?KcINe0;=-
(re|adi|e:0?
	>?:!k(l?r: "P?Z?npnfde".?dI?sd: tr4e*?,?	" "z z?di2: &pc?l~t??de. q$-	,+":?{ dHr8 *1raVmoqsS)#fing".!Fi2?(!trTe?}<
&~  {8di?>!w@ze?io?oSIFnan?" }	o,
l?I0zev)lpmr:!{	Y
"E?Tr2<"`e~CeiNv(D|a?c??)0;
I		)!tc,;1]!? }!|gh[]-repla#oh ruju?+s?a,!ftjusc!e"?;??)+ Infe thE(girEo valg% to matchK3M0skeT(tr ?ugtAe@op tnqemTeT
		Xiadch?3]?= ( mATo+K\ u|"}`tc`K4? x}0-aTc?Z5y"?| "$?>zgphacM(!?qnesce0W?f?nuqa?hu -;*?	if ? d)tc([2??==(#z9"() c
)i	?q?c(Z7O ??#d2i? miTs?[3]o`"d"{?		}
'KA???e6urj maU!J.rmike?&0,00?{	}?M
J		?LIYD : bqnkUE'n( ]ItKh - {?
i/0`m`tchej!??fm mau?xE\?#S"C@INF"=
		?	!?~}(e`8f.l{|nvht.-)	
		2 whet (c|Mm`|nj???p??		 ??c?oent`(eVan|o$d\l??|^p(? {o?]?H9)>?.,&+-
		)3`xf-cg/bnnakP o? |n"y?arewoen?)([+%U?\dj.^)	M1 rmFn$ef ?nk?Pg?e~t				6 x?b xd%co%pneru
)	?7?c}oh0on?{cW? ~.en4-		Y0`y m&0I,?oeTkne&t?M./
		ma0@???  mats,R5_ToLwepCc0g)?:	?		?If"8?istc,?1?*sh)bE(?0l`2?  ?=$"Jth**)s5
MHI
?o(~4l-* rep?kres!ab'ulejt)
	I?Aif0( !m?ts [?]!	 {OkOkz???.O?s?r((-a4ch[4] )3*			IwZ
	 num?ric X `~f ? ?ar`metersJ&o? Gppz*diht?vAJI?E?)			/o remUmber dMay fe,s'Tr?$0ca? resxEcTkve?y to@/?			-itcH[<?!1(+H m?rcl_?} ?0m1dSx[5}8+?*??schS7`?|?1??: 8$*hh ?atc?[!Y09?= *e?%?# t?m?T#?[3] ?= #odd"0= 	1-(		EA4chW] = *+ 8 ?!|C ^?]!) ea?eh[?]()$|}`laL'hSW\??=-"??`db$-;*X	'' o4lcptixew%4??x)Ja| arg?,envs		} $nre (d 8 match?3] 	 ?
%?	Qi??lU.urrk3* Matcj[p] );H		?-?mzgtwbn LcpCh;
	}??I	&QSE]EK">?fqn#tig?* -ctcx0! {
)	)var m8se?3,M	i	t?qtO?ef  !}!4JQ??&& m`tchSh];JH		if$, mAdajL8ppS2CHIlF?}?t?wp(!MaTcx{p? 8!	0{?*I		Izgpu6n nulm;I	I?
	/???kcepm uuded csg?ie?Ds eS.i3
-?iv"( mamch3]aK!L
Im?5cxk6] =0matcxS4]0|| k?uaH-] }l??


		?/)?tp)2 exaecs"Char`ktdrc from ?o1qet52asoqmQo4??I!}(elce lf"( u>?uotEd &&r0seud/-tE7?	(u:ywo??? )1&.*?	i} E5 d?ces{Hf2om%tnke*Xxud!r?vusrywely9
))		(E?7ess <?|/KwniZq ?v.qgte?, urue(	?`/'J	H		/??adancd tg the ?u<p ?xk3kn#  ?ren??c?mS 	)	(e8cds =0e?`uMden,?nd?pNf( ")"5nq[?t`d/LgN'th -0E`Cv' ( -huf?eotd$,length)*9 ;I
+		I	.?0famqS@@s a2nucavi?u!IlTm?m
	(a0rh{ ] = o?|c?[:].s?eie( ?,!exclrc`	;
?	}au?h[2y=aYoq?ote?.3li'e8 0. eyC?sq !#?	}
?	?/(Ret4rf hnl{0B??uuvu? neqtet$b{ xIe!Z1vu?o"fil4?b meLjof t?p?$q.d a?c}|ef5+???-t7?v`-ctc?n[lic7( 0,(;,?;-
)	}IJ	},m	Fa?p?r* {?
 2UCG?34FUjataan/ m?leNalmSele?|/? m?y	Iw?r n?eeGame0= ?od].amlsml5ct2????mAam  2tnd?KapE? funmcsaPb`??oLjwepCase,!
	re|ur~
no`?^?m??e|o?|cp$\7(*" ?
	I&u?c|ioj(!${`?etu2j!}r?e;`}??=
		?&qo?t?OJ+`emmi@	"[?	?2%Tnr? al7m&moleN?me2d? d?emNf_teNam}*`oNlwar???e((0?=?,no?e?aou;/		};?O=,
-
	I#CNASS": Cun{`	?j( E??ws^Amui y
			war p#d4E?j = clA?sCa?h?[0k?asBNa?e +"# : E7	#	J	z?tur."!a|tapn lt
			(?ip|ebn 9b~ew?ZevE|p? ?(\?" +?ujiue{?!ke +?#)` +0?,hr?Nae # b "*?ghi4gspmce`+ &|<?' ()`'&	J			)slArsSaAh ?*las?Ne-e-0funct?oj!e,em?+ J(?evu?l?pa4tfrn?4wu4(0ux?dof0eeDmChaswname == "c|ri?c?ff emam>?l?rsNad?$n?(`9pe/f1ehe}*?tu@p?biBe|e 1-=?2qfla???e?b0&& e?dm.geTAtP:ecUta*balasb	 <?1"`({?	?)<)+	9.
*?"ATVR&? 4unkdimn)aA-eL"oqevb?mr?`c?!#k )${
		?m?vrn1func|ann, u?eo ? ??		war"ze{uml0? QH?Zme>%?ur($mLeM-Ni}e9;--*		)cd h cgault$< ?WlL@)1zJ		r%d]?? OP?rator ??=? !_;?				?r ("!ope?qtms iRk*?	y?	??t5rn0<bU?;*?}??)!	pesul4`+5(";?
*IQ?raue3 o0ur?|or ?)9 ""!?"2EsvmT }?=bcIE?i`r.		?ope?`4o? =} b?= ; 3esmv&!?}`ch?cK`8
-			opu?)T?r 5==0?:=2  ?bgc??&"2dku?t*iL$g8Kf  chm'/!	0i?} 0">H	?o?eza?r ==??&.}""? gH?c+!&& res5,@?)?dgpOdK0c`ewj 	 > -3!>*I?		oXdre??r <=h",5"?? c?Ec?`&* recu??>Rp?c?( )bhec#.lun??b 	H<?-*#{gci :?
		(	/reb)tor =="~?"( 0" 0"+ reSu,?>rmphacu  rwy|a{pAge. 2" ) +"`"?!,iNdexM?(,c?%si$) ??(! :	I	?kpgri|*r?-?=`"|=? ?"se}u?T#?}=`chec?(x~?pecult<rlasG?>$l?c+5?'.Lyng?? +?1 	?5?= #HeC? ;4"?:
	?I	falqd3-K	}?J		}?*);SHID"?"?mlguig>?avipe, what((ar'Uienv,!firWt,?mc#t$)0zm
?	was"Yioq|e`50t?pE.q|kcl?  - 3$/ 	?-`"nty"-!??no ar?  d?xd&qna#e("?0:)?q=? "lm3t"-M?			ofTx?a  spap0?=="of%?qte";	"-J?r?t}bn fazgt ?=1(9"&&?aq?$=?90?2?

	(?	??$hovr#tt d'R :.dh-.*j#MJ		dufctmoj((elnM )({
				vd0?rn	! eleo>ua?entN?De?
	)}?z
'?m		?]Nct?On??%}tm,?co&textx xol -?{)#-I	?6!rcavhe? sn`qwe?!ghe8"?u?vC??,}?1n{$u,(nol`In`g?,!s|asv?M			?f?r =(s!-pl?$%=qvopw!r` ?`&?gxt?r?a?f" ?b"PR??jouQmb,i?g&-					?e`ent?= elgm?rare|^_$5l
	I	A	o?-a0} ofTyp/*&??el?mk~kdeN!?e>oLOw$qC`?u(?$"????s$Cacre u %x?l4d'$enVypEM
-		difb"=?vcLWg>??
		ib0 p!E~p"i {
	)		o :?f?rs$?masT\o~|ya%(chit|o'-ty?e-???			y$ ? simyhE 9?J?
)				ulmhe ? djrp(?{M)?		~odg 5??leM;3			[		wxilg0( (node(? No e["$k??E- i`}?		hf?(0w?Tupe???)	)I	od?.?ovENal%,w?/3e?Ca2m)	@=== ?au :I		?			jodE.jkteHype <=? 5 i {?
	))	??		zetqfn 'alS?;		M?+?			m
?H			=?
	?				/n e?%vse dic#itign"f/f 0only?+1?f`v? hqvel-d`YGt&dmge so?,					wt!r? ?0ei{(= t?`u?<<o?"{~hx" f" !St	6t 6"!?gIt[lclin??;
	 			u
A	I			re=er?&|"5??L
			)	i??
		8??wapd09 [0fo?Wepd ??pasmld.Jirs?C`aFd?2 par?Nv.lcS|A(idd ]s?	?	 		I/g?n}npi :.eh-ch??ah...-$s~orDs mc?(eB%?leon?`p?2EnpdO			M;d ( f/?warf ,b use?achu ) j:J? 			Ao?????j doh?i`!wrnm !)hr`?yo?sni,cabx%d?Mn4ex	
	%))	?/' .?/in0q g{ia?fpkeld?? ?lxK	H	))~o$e05"??2??|z*??			/u|O??`cmq ? j#be[ Upxand }0||09nO`E[?ext`z&n ?a=!{}i;?
?I	?-`[uqpoRtj?K??<9 /o(yM))			I	mO!Me?e.t a?sknsq2cloj)d eturm:e24i?s? BQ5?rx`NhQw?9(
	?				wniZ5$c?`a(9(ow?grCac?e[$fode+ujisuaID?\!\?Y			9u?o2ahkl?K ?-Deuniqea?d ?$= ?})|5J-
			??IccB(g`}?.Yquqbuchm??pqpm$m?||?zY??	I)Nntf[o?%x =$c!#(%K?hL =-<?divRugs!6&3hc-e[?3 ];-	??	)I	diff ="jd?Eol?x`?$ kqcHe[0:"Q:*		
			zmtmb91no?mi?,vp?&& 0asej*cHild?ndUs[ oliI??gzb}:
	*	?AI!?whi
m$(&~o?u?? kkl'd$?Ndex F&,&odE?f.0~ofaR$li3 _`z|	 	??			Ii/"ammbaC{??k0S?eii/f `elem``brom |iE ta2}
	?		)	)$)fv=0?ofuIntdx"? 0+@|t??4?pv-r?|?))?- z
?	Q		// Wh?n(?oudl!?c`hm In?ixlsp/N(`p?rextd0?.d br?a?=	A					9g ( no?a+n?dgTy?O =5501`& j+?ivf".'b?o$o#y=1`clem 1?j
	
		Y		uo??tACach?? ty2e ] = Z fipzQns, ~nd?k?laX, eif? Mi
)		
?	"reao;??			?W-				)I??M
@h 7se`oE*
	?	./ Ewe psdukovrmy%c`Cjet engmelt!ynfE? i? dfqyhebluB9		Y	9	l& ? use??C(1&y0?- ?)			?)// =n*ij!? ?zi1-dRiend,} w`QI 		?O?e `mhem;?				I		Mh?e0caJe2=in?et[ e?uc~d- \"| hf/derEP?d:?n] ${}{

		I				// Sur?-vd8 Ke t nvly=		?			??D&eNe aciinsv$c?on??h?4tvnpartie? xnUERY,? ?10}lM 	??	)5~+Aud!che 5?wvuZGmcl?[ node?5oiqWeMD?] ?}?)?!?				y+qtevn?CIa[!fgDe.UnY14eID?Y`=b{+;?-K				)?e?he$ ?.Kque[i???? ??ad[ |\?[|*	IKI)nd%in?cy =@??aje[`10?==5?gis?u.? $f!cAkht? 5?Y??
					DaFf!? ~odeIldex;Y?I?	}-
?*K	K).$Xe%0:ntmC?a,a(,>)H	)?		I//0O??:nPj?dq??ghidd*/. or2:nt?(??c?p)7)?g=rxqD(/,/	/
		I?	?f ? Lifv`=??Ah;e$)!-
K			M (/ Us?`vhegsame lo+? as qvovu u? 3?e+(`u?mmp??oo?`hE??4?Rt?-I		?wl`ld"-!(n?deH=$;	JJDeknd?|.2 ?oe%?&fhnoda] fir`M ?u
-	,$a'n!9?nodeInDwy`}`0) 5|!sDev|.pop(?- ?0sK-C				I		!if  -(nft{pe??
					I	)z??A.n?,eNaom?toLowg2Aase) =-= niew$:
)							odE,?duT}|% m--"0 )?&&J-				??	+difbpi?{	I		?	/ Jacx? Tle0oT?r f0?acj %n./}nqe2?v g%meft
	?)		+	!	kb ?`?se?q?Je {M*,	i		Koet%rca??u$=!?oei eHrQ.&/!]?|? ?noDu? expAj`n ]`} {})??	
I?%?+ObS?ry9?p???'*?zOu4IHQ??K/c"@ef?nd$iu?hnsx"glmn??y||B_pI.t-gs ??CujSY0Ha50?
)?		?#?)?o	?,?C?M 59wu?e?Cc?H?JkF-ne.qii??ML$xz/E*0I?))IAi	?		?nU(g?Pcche8?Kl5??n?r|aO? os/ ?y)e??	Y	j?wXmq?gEG+uI*hqr?<t0? [(f}6rtz??$mmv? ?*O
?)x	E?	-\8??			)	@	m"bajt$5>95qe}?)$9`Y)H?	
		?!ID3}Q?:I	?i	*????			/Y?K		???	
o?
		?K?IN
8?M*|&?1???!??m???o?pq?ad%#V w"'GF?e@$ vPinlah@bk)??eS6wt?kybBg!y{eM
)	))?	?m-F$?&e}cT?,??	?~muP?`|}fv ]??"?)">?0it$?4?iv&z$!|ard 9=}?B"7`??d~+% b?C4 :}$`(mk%(?/	?H?)	|(
?u??	??EPo"'?5?J?mn
 `wa?n??&arFulP?5 9$iw?.	/ tCeugk?'?sssb???a 1?U NteiiY?dnw}?o~??c#	Y?/ h? p<agv?5.k?f*?B?c%iLct?r? zbcu?g?L!"Uk+#H8*?2?k>aH`Izq???dz??e?S?<pafmr?uu&B???ae??gspn!TjMeDm3e?p?????hb`%i?h T`6qp'}SA?het6eP{L+I/"Semitk%z|8??!1pF/m\X2s2?-???Y?{qB4o? Qnltu??G
)M"a2!q?g??N9%f2 ? ?8?2?5?Ge??Q{otrlwEk! ?]?Ex0,{t?C(?]?r?[ rsgqtgn"kolf#W`S"()??h5j?ii
??j=?&mjsb-4ql?\?p_?>?q(t?eqh/?  A:ar3e5e? 1
??I	?'.??h'q4c???m?m 4sm?cP`?v)B:?u^sg7Y^9z?aDm0~?Amh	????$%sw=Qcn}s?`p%$Ldg&dh p/ `bt?6? ph5(?)?I?rj6En?4H_k?
???I) ?urt`a2aP+{Z,ohpkMs !ik4???f^=?p?`~fc?ih*?{(e?Kvi??0f&o8?)5S_Md4$`;M???*]??X?	-ktBuT i?,qGi?)gUp?m?4pfor(?d 7??Cf?{?m6)
A)I?g??&*?le??D`??)9"?!Q??
!vev ?ui"4z@plm,R2;aMm?, *"<? v?qm%~???/?	??iPl?\!MhvJn?dV?xl2ex{.?A?)wnPRo`wpt?? `dft??\Tf?Gqr?i- 9p!MHJ???w?.?9l??dNf?g!?c?N?pyg??$?c?cha??	 {t
+
?K)gqd iDj<BI		??XY
??kacf!?`?f*?k%ep, q?m?d??`j-X)	???1?c/ OiF?a?d.?d`bt8	$?K?????]ID{u	 !`sL<1?	-?yf`*;pCx$?hO ,8eO?,@maach?D??? m??'	???!_Hqi?&J$?e?9J?#)*?o9?sh-3?al_"} 5?uiD{`de?-}j;-MiI??	
mI	#	=????Ibu?c?,ozh?d?ey%?$??
I(1???%tu??4w?8*?-,* ?,h?bw1q*/:?(	??
??	Y
?r`y?2v?wo)
)?MM?n} 
?	0s5$oi? ?:(/dPtmn6ait?$z?e;mgl?ps?qdOS	??*?t&/&?c??@5Ngt/ob)?ulc`b-~l2bEhw2obI#[LCA;' TshAhtsm6?Dv?c??#X?c%df4.2s?gPi?D?Y??v <O?aVsid@???At))gle	4??7 Nl!e?ATi.-??	g&+{sas1" qs ?m?J`lQwJRw??TG?0hop??>	[W=?
		I:}sad?qP?k?p)*?	?	ii$??A:0; gkM0i?"?!??i?b?mbCr4P\b3e(?pu?{,?:!nih #;??	-6?v}r.$m`?GxdrXps:?srt_t] *
? h	?abiF?n$NJhf=Hbv??? ??d/(k`B`u?"cOfwgy~l|}??) {?		?vq" ??`o-
?	)	????StI?E??% Kirbkmr($??-f%?n1tm??$$?]*)???	??`(Hr??????fd?M?))O? i`|c??ele,m~Us gj9? ?hGl v???hapc)osKJ9?		whm?a%mRm>?0ikMZ?X??	ko`8<%?'!n??b?n	?v@je?%I!??(?g)??+H?*de%[?M <(?hy5DjAlam?M"??g-e=)-?		-K	U	?	?b?	 $??)?*-
?)???a}???``e*ael8H;,?%yT???ij*?z
?	KK	yN??u ???e?do-??	?mmtu?'8?
kn;u?~#f_m}, xYl< SeQe<?sdm??)	-? n/T(o%m?)4h%(%oGlu?? <x1S??I#?9?}?!?jd?pQ[8|?<dnu?l;#;EKW?aMf?"H?wQu?tr/q??`dz)B	?*?
	(],)(m?	Jlcb:?Mo6cWD&av?{?Bej??mon?!+?=-c??{$!xYM>JI!?et7pf?5n?~k0(wLlx ?!{(	??s%dr?&
>n?i)selF??o~?dLm?q??,en?1??&h /* 	?}?/?,	?A*Wo???o".!?!P_&?bk5?o?(fu?c=jon* tmx?b?1??ji	tth}??? d`v.r?h<e?`3u&??i`enq?cacsh??)?I?)?ve6rn"m]g??io86j?m,? {	??????t}r?i?Nutq?$?o:?ef} ?(E\?m/i?N`xDs?n%?v0'?V%x]? ,lHI%4
?In$ExE? b?e2li<L?1?;X!??|;Q	u?hM?o U)?5}%r(M? e|?eeu4?w?f?pRm<l %$ ?a?>Ja. ?ahcLK?	 ? ms`3mQ?l?G<',A?rjX4)s"?l??ohv/? d!ncwagG???-'mo???/? B?gfg?FzW%`%??}ha?aUelfiflOed??*?y?a? cWf?7M??"gh@?a5`u iuAn?ikjev,K??IM????eHq gN|l{?U`	?r?%
?|(}?a?yp\aI????W? #$qce?vtf!p?e?khslnEs U`Nb?a'e8??m?w%I???jdN:mef?'?r??aoApf?#8W??jX)6)'.@\Ju y`??4]|????c$og? ?{? `vO`?m`oe1???`mcc$icnGDQgo@?iLD ?	?g jt?p&/?w4*?3.n?j+=&m?f?lom????!?3m??}}`+?b,c?G"?!2?Kt/G1?rd) &=#?I~, L`???#(yO
??<nq*? t?|P?(<u14&b?#!?V#?Ae??eol9-?eT?9Bhd s??f?tCrm?3?deS?8a?c mw"?)?%?,?9I??i??yI?gsr??
@"Un{3p(jp?#fq|?c? +5?g*,? 	?
K)}?+	?+f?@} x?b?/j?pn`cq9)Qufq??|qe,hB&vdtccuj?+>?%l?w?2CiyeB?/,?b?v5rn?e`?#t??j(?dlm???(?JI!	?;z?ale????A??r	Ie?{}
X	I?I,r???q|%}IA?oS9?$Kc?-u:fH?Eh??@-Ie?}i?|Pzgd:R9Y?	?ul'l*ma1?pdr}`W7o( xh:?)~'?? P~?E?e?cdyDt?pror(nah"i? )$}-:!		)Ea}]n??? ?(M|ugO[f{(vz?m???!cq%h?I?@I-?s-tUqj o>?-LfJ t-<)?An1?|b?m?glAng>A.?4|???X?An? kac?"	@553E1?
	?(xR?c?
}"wNld@h1je#)k=?Ih	)&x??an(l??i*?')eH?m.Ng|m?9p%?=?5(Y?:????meup? ")3);	al???#??(^?O&????'%dFdn?m5? ?b?s?tf;b??F`b?o0e,e?( A?v?f?Lba????(???W?lK?q1o?j?g'?j?tk?.mkFepmO@l(Aq<2			?be?Tfn iaCh ??Je?)Qnk+o-`!-`???&?lFm>?e?*?Y^?LRA.??"s???2fd?c4)/*8Elem"?2??96?d?tj%?lEm?5?}0`?C%,=-9M?L?~??	"ff#}s*%?Uz??;w?+chA? 9?
?	B?u(??n`=laiB?>}?G{'u}e???e???p?<?Mu,t$nf4)!|O?!}?.t>`cy{??s!z? $kWoa?tM?t?FWw??8i+ 3&,),a,`oldH?! | d\ M raf?x<?tM|emNxv??fr??)?)
?	H?!..$bO?hE?n@@r???vjes) "e9qrd?u& ?r+`e?m??hdLPvdur???a(cu?;$?$	Wdi?(rJ?E:=?w2??<??iwe?e'$PRcQ?xhd*Sw}?)??(???g?Biu#&.Cf?n&lm?? ng% ?>[Z		?op?N)S?S?)1?r???k%b1sf?:`#8V ?b??g$."?k'oc?4SD??qS|liDd??ee?d?|~1??C?/7dj~t|??-?7??;3?NU??%??'7\Qc?c?${1l?2fMb3?V?7?0x8c"?bcCD+	?2?V?a`yNa??"??????D~P`N!a?>voLo?0iCwM()(	?x?4;xf!?G+rgO??a7->=n"!n?tj &?%???mnkj?bc%d)0<~8(??aLaOs?}}!x?pq??*qf(1?l?O??x?Ar?E??/%:	|lJ??*rl%#<Cp?(}?/v)c??&?he?#({?,	???q+?ck?' \Xj??v?er??$m??Ti%o},e?tA?,cy-?g??ul\-M??? oeqamt??eb y?fE:e0wOps04fer?hE
		!Mg(?elD?,?Qrm?vNdl`53?NCB??umVM.T$3adtd/Te?swe}?`?@D$je>?M(x?-		b5lU??`dLo|wumwG|i$2?5?~sP_x+H?X,?1 O'ti?nZ?vs I*emty?2j%&7fcty/N?`elmI?+$zK??K?xUwP+?/?cW??6*?`d-?R?ela?T/b~k?-?r%ps?D}	9mo/"z?i0??0as?eg??i|#bQb5|%}Dde0,09)M{"cnOt?.7DN;fCR?,?m)vz03 ?d@~` ;DabUa??$zg`>(5y??z?!?/ "6}\ .?4?Bx_4{e2s l?j?/et*$:k?wM#e?c
)c {h6>?qde?[l: +;&f?#j	
??/?|o?$]?r??<  u?S?Kfs???%"e}u??"w>mq5.6(`dl*ny$aaQgi?nsx@sqa,GvdV??@koS (?`Ld? w	e?Bi?F?B3eS8[,i?"m?? ?dAq??emm?,? t9ab?}?g ? ?	@99r&?, d uA&ldPyhp.<8v?mt{G6%)?rtew8.0|?I??? 		u-	??	??Pm~n ?6UMz?"Y|:?o?61??,n4"< Dw?|#Ojh Wo,)`{ aj	??-?}?f0?t??b.ps=5hKs?:?)Pvx?Y)$?k=A`?]?Y?	?/????mME~u/ibp?ul	b??+?	Fp4S?ap";~wb#$iGn?ny`	s	6?|gr Ci?q?g2.??wtk2m|mL..Addn$m?k{?b1	U??
XZ?B!?PPp4: cU^c|h/?*dGl?+ ?8	C)btue? ??lpyt{lto;?lil?},>[Da~ca%?/O	?m(,
?????dvta~(" n?lhoj5+/%m62c/
???2|N?#?%??%<=mn?opo?aeD*?e?wu?Kcui?':	?Y:?u1r~inA?%?7>?$"m:i?4??? mdDi.t?t??=<5?"??|o? 0nl Oq}6?9y< "qw?|}"?? !}(	*mJ?I0p?v?28&zw?FrI?{(dioeo`,,?????wC` apd3y 	@S?Uu"O ay`m.ske?n	Ae.r/D=Dw`#??	A9???vp?0??$BKd`elnp?pe?5-5??q?\pp??)?
?
I1/'$?}t8?rt+??C|???K CU?1@xd`IpvhR?ne Ss`ues(/gn??m("r!Ab?@(1 E0~dis ?U?j mh??5ye$3=	?0ue9)M*?!%(x?"!????= u.eO&aq6Atrmju?m)o?Y?g 	)"M??5lfqt?*?TPF?nL?serCk?# 0=0?ta??"e9k?A?$|&Z
??@?o?DKn??h$nz|ne??hc? f#rSp28cGaq|EPr???a??ql"?a?*?fnf5?{N81s@?	-FApuqch| ?p\????M
%?9.D)cD%	??}1?P?a?)o??lX;??|-j???Gty?  m??C8QJf'???,???%?T+d? {

	(q?texd?? h'jBt	( ?!?:]JL?|$G	Z	*aw: gwa??@wit)??@NprehO0vuoK?O>?m??|Eiv$E~?p$?g}njqfz?sGeMen0d?#]I?	?E?u?ls ?zo??anp6=0 ?_$?r?e}0nT"/P|q??T????rzodeD.t"M	??I?+ekd6gR38?pg0tuPGBc???^ ?R?Ds?gfEjb,i.?` mi?~aio Ex?rn ,cl?,h4i?k?I?=v?r ???! {-{(
???c. z&?,\`x0G%tyV?0x)?08+`{

i?L@D'(A??bye??0mrH*8a -r
LC}
)	Ze?u7j?/ tCiKnTf>dsy*	Xm*(??
?/??,C>!B8, }e??P\yof??;ewd_@7n?~?enaDc5j,?'`C8?y!(4g.a?d?(hzH?9?VA|?a?<.31)((?D/s6(3J?hm,gy?3HhR;8b+`;?K%eqcAANdE?}?S|Q??"i8??
)??9?D??Ru??"??O`t?@ngm|os_m?
?	?
J ?a?p7> CReaHaD+rdTO{f!???d? F?n?PC|j??8av?hajv%?ere@Dw|Fp??`?rmem%Z?h)1S???H)R?~)<`a37u&6~?`(24=?!R?am n?*+r,!neUj???cxuU?e??;`a(I?fZf!?[ 8-Z?5"pz??"{E?K?	)?v"?	?Bd}%???i?y?+vO
?q?)ret]?M(Yc5??KD`A|qr ?I}+h?N-(	?k?&nt@C?`d%0Si?9oJ?M?17S&a?dtNjp?ok8??eUgj?h,g?/R( LAndth3"???MnT`?K??	?%6j? y3ir?%|uOeL4$??Krew??.? ?i!N?V?x$IPg|}qnh?	?ozd*${j??a ,`de#?L?(^A)Ym?0C?klTMxictushjdk4&
???7	A??v?b| }b)???e??s?	(y%,
	]L
Gx0r?<^audo?q5?v"Ub???ds"pQ?|d?gC?q:?;?A?7? Ae?2OmTu7F/m??mp$?8R1t?x?f?
veVc(0h>)?h wi6??;!uVW=L(?jb"o|: un?d.?pm?g0?eeh P?SsWmvt: t?4`&,DbS?ir6}6?p??xM;?D?u?(?u4?Q?e`+ 8(G?]lMn?5wPc]dj3e?)?JyfM2?2i k.?q{q*n?u:jv?@F?"0GwM?0 ur%?"x?)!c?IU?w?"ra$gV[({??p?8b0e$`-FQD?gdAEstI(bh?:??9???=???iq?dAI?f{"1g`D?	j??~?u?s?6MI?u%f;
U]+e?k6N0sETTh?ters?xyic$?GeH4uZ3,yRk?k?o?dH-`M?ur,?{bt??s"?#??Z$(S'qg#?+AitZsetrd?~?3%m?TE% ?_iLtg?>?/,4?to??nHj?)=0C?F?Lu:t?kin?zm?!??fk:l?}l'u5o/F/h?2Qe?2u	zh{@-0?%+?v`Zric^sted. ?cD)??C`?{?"ua4?li	,riN?f?gvo%0s?jqs$K|q ?a?i+
?ba%i? 2D???#?J!qQHU;j3?U?4?b?)??  _9\N)??!??#?s`?,$=`I
/??Vyjo&1??s'KBcy(?2?`?kc?dx%??\a???0`?!3MZ??-	S??`r%?c/~?{bG?}? ??r?tq???(K[?MN?egil7e?s ? QX2R	?D?Cn?P;:+?	u@hhe?(?jb `%{?Rg?`	?ei1?a?t?v?rrT?v??j
")$1G?6KHulart( }?<M! wF?'m? ??qp( ?mBcz"()4	?[Ji?ADP+4,a?s@??!y
I	|%/ E?v e$cskx?}?!U???I??gcb?e?C 3p?)?y?iA	)sOFec,y=?wp?s?jcg(4?Lg	2?nl?Nwtz?x:t?!?_f???*9? ??K'z|t??&?x?)jk|wo$wr y%]!??92H??-,	AuAd|kEd` vhlq)?Z	./r
om3kFm$ozc\	3jd+$y????l,)?bA?e?* TEa??@gAy [EnCS-=u!? c(?-Ata(dD%2?-?4cl.{hx|t!?:"??o?w?f?t}?i??	???ZF??e??oaf?het8
?$V?'?KGot(Ne?#?nme?`??kl"[????r`L/?caoditype:Pn3?sl?]rqL?ra ?~}Rn?( ???i??#]?;I9@gFy??=s??dp.a/ice*0(A?ah5g.Xd,su??)??j		DO??gI?p?hsl??I?W	x&u[qq-knV???~v?M!?f0# ?H?/-t&??h}X5cX \!?atC*h rW!tt?PT,UPM?($cODqqaa)?n%??W'k?toxlZuy?m?U(x|MIh-`??(???PB?sduEwsj?}0?d`M!?k?"mY?:*cK??O???het8?!%?vzs`cd@k:?	?_0J?E/????rh?#"	?aP?D ?cT?L}e?	*	UC;?u?g2
T?4m|(M?I?V'?Ec)?DE`b?)?;y)s+?H?3KFr?]*?oc??w,C?h?Uad??qdlleg?tz(?;0?)??H)?kf?"	m??gHm,!k?L?r?i??M( [|E
?<]
?Iki$PdTypo`|hed?a~J4h nb?d?m8y?wqlAe dxcmys????)Ia?tu/?U 
7C4 ???2?t?-'!<	oDxazW(su2&H?o~nn grr??1os?beu?fn tOj?????fdPer??tqzuOL,? >M	?FaB?d?ng&` ?HN	s?Fls8?(?)?s?z:,pu?2<?x0?vs??7a?6?*?::	/?(Bas?e s*uX4??c^'	tk?unA1?qt*2r?ostOr'??Gq|s!?{X)"qEp -;?:X;?-J&anQvMaO`|OSwl?e?gs($=/???cN!({*	???c%)?p??2?)?/g?0|??e?:U?N?l*a"	??cj?KT/z ? &kfV(?8$m?<lel?Im+?$?h{o?H{??g??l!	=$??i?fc[kY/~uh??6?x	rap}bJ??dl?c6oV./]U??
f? bdim?n?lfO???(f!lGw(blI}cHe?`c|"?bk??p-%bA/e,)?}J)|a? e?j2-!dk?bMh?d??mPi??
?:z?? 9>?_J??$?G?>Na|p.??oe?1= rokB$~| ??`l-???if?o.Bu,e?bTs, ?lQ?|B?jgp2==?1"?ApvDF?De????e/.?Cu5&}"go~e1+{:
Yr=T1~n coM2?~1t??f?k`wu ?-1o''BD'ck a??}?`g??owEd3A]??r?O?trg?cdm?O=???m??EIf9?c5iO.>???EM?$F/vt%|2??wh ?
?
IZu`uhg0(??Og%9?<oYx$eQ??O)b??*9qid?ldnem/?m`m|mr?!?=5?????dq`wcc?M@H}AeNT2() b		!?h(?Et`r ?AthR( a~e???#ex?X?,xkla}??
?	?e
(?y]?
?#da8X >a??ey
		eA??	?)?hea???ga}??f"?H,??oC??nr?$?C0/v???axcl?,0c	ZM*^a^c??o(((Pll--`[?n?|v, zg? ?EzU???)? ?Ghu>e?K],)Qny{u?Smc	' ?Qtjr!syelNkM?K-?7??ah] ~ 81Jq?7 ??hd"he??me(];?*???*iV-"te?+dr)pagbm<SeZ?x$a@?pO?$R_L?m?`es? ?
?d(aI(ayxc???e~?co4?nXaY?s&?b?lA&m??a???i?_#)K??'??(p?,(???i???h?de$d0?M-ei5 ???^? E?r*?? @ ;		?hVq?`Eoe=lL/FwT? ?95}ya9 slA??m+qo|ueMm.4sc/???Z)I	??F (?`5chaZh2wog9l(j??|%x*???x?- 9!?+Y !	?s?v??#rCe1ZG	 IU-?	??}?	?	)}=?A??y$a?s?R?		J?h;Iph ,t`e-y y}aoKhD?2 Y- ????-i?hiv,* a9a,?,????ypu =?=2s??D #(E#kNo(Gh}dj4?jkN	II?)ta0VESka$4?Un?m[ %?b!>lO?]r|N"e%?][rUyz1?v????/@z})??BK?-IIkY/$pSuPPkb7Z0i??=$?jHq?HC)
?xF?q?Dt?goj)?cd0chOv?? Idvrg??w?k%?V0??epy n?>w?-/?A?H	?firUi?IcHm?5a?lTo?)c3??Z u$e?.ujiRug	D?"?	-*oum?U`cm?s?eoqm&d,i??%m??~K`;}9
?	i?	i&j ?akip??&fjii?-=?moQ?.dGeF ?!?|n
?q?C(H(?cC	???eha??}U?gI_!dAb0 \fllMg1	]?x|sA,`m  ?l}?!?8E?-U?iq%?Iah?K.??tt_)?"?-
A?]({n?qic??y"0???7=}?$?`Zpnu.jxwL$?cc(1_i8 L?)???@On N`wM?(3=	?hP-?(Ss:?sm?$on?sCeGhES??slsU??q"`ok?-q?oQ?/itu???PS?tk{?bD?u??'j8?/?	?	:?QbEdv??,u?'hg??O""U$?'.eK?aJG{|4?|?;	(?[=?GN#?!+IA	)??L<0ZoE3qL}7?c?%!b{ 2ESqle????k)?RnX??!??/ P0O6iou{?`|ieeZbcm-KM??J?q5%Ccbi?`hEi?]0=`kKwC`c?=;"?)
?//?K??Tblbmq??=~D/? ??.}?i`beeiXoka*sP???I#V?0T~&kAet1hev+x? I;*?.??bg??jGmo?ahe??8a^?x,m??ahes ?E=eE?hb?iIv??|Ml?I-?) K??	+??	r??M?nd~`4U!?(I??}??	Iy?}-KH[?#,J???	i}i"		?V|]?m nb?Q4;m	Q{??m???ynCt??l0n??kSg|??^Cld{|*i?|cj?Zs ?$???ru4~??dr???le5.?gn#?`?>*1(/
?6?oLk? ddQM #gF|?kt<10M/"x)?!2?i?;0+Hw??3??ejw,h{AX?q,il}  (x.=s??))hf"% !-axeHk}cK?t`?n?i<4?vn??8?3pMm$)?$}m	A(HV?t??n?6X<s???
+/J
?e-???rm?Pr?!5Ro5*		A??x*?u??j?Rs?_I??
??u^??IL. '}dvAP(q?OnD% 0s)?R}???cv( g}?!Lda()rgw}f`k{	vaj ?`u 0,M		hMn$4b?k?et|c,l?ngti;	dd??, ;(?(<'ll&8??+? )]
9	W?z:la, qD?twvkr,"kg?tept~Mi],!RdQ||Tq`?/
	}
Ja|qs: zeS}?|s;?
|	
&uncthkn ?ontejs?hl1nOapkxst, ma?-bfilte?)(comttxt,!jm| )?{vav"elem,		nu?j?atCjfd _ {,J		a(=?p,?|?? = unmaTcheD.?nguh-
m!?zaf < ?!0?!=?nuh,;M
	fot?9s`! 8 lmo3~m*`)`?kf?j (elei ? ?nm`tgbedYi}k`!"{		KI& ,`!fiLU?v$^?"fIhtdv( diqo,ac?lDex5,2xM??	 + Q				?ew].ea?che,.Pes?h$m|59!-+?	?!hz ( ?apped?! {
?	I		?cp'pe{H<$m0-s-??	9
)}I	?M-h?)buturn feWUjoag;led;
?M*
fqNc}?on"{ev]?t;i?r(?xreFyltep, sg?uc|o?$ La?a`er(toswF	?tEr"qo{?Fin$?r? p_c??a?ec?ob"! ;*?af?8!`St?iltes(&f"pn?4Filtlr[ Epano ]a? ?
		por|Fihu6= s?e]iecH}?8 pfstFi,\?r ?<	}
?iF -apowufin?er "?%P?{lGmnuAR U|?1nDK$]!)"?K	Xo{tB]?fEr 5 s?uM?vk?er ror5fmfde#n!pn?tC?lactkr 	9ByD
Je1rn$earkDun?tym?(venCtkon$Ue$,{astJT?(&Goovax4, jm?)- w*)-va????lp,!i4 nem,		prgMqp =$]$
	)	|oqt_up ?@j],*	T?ee?q;d`og(? rg%D?s.(%n#t?<Z
I	!/? Wet#In?thal0d,dm`Nv{%f?nm su%e?g~%konpe~t	
	?l?}{$50ceel`|| |ulvi|leCo~|o|4?*Ds?,?c|r ~|??(j,"cojDdxt.noTeTyse ??[ce{t?xD?u Z$?gn?g?v??U ).I?(9)?- Tsefiltep??f0geT ma`cHep i>ru?. trmsepnilg ? mcrhfOr$1eep|b-sDbts&syfkhre?izAti?^	I	}auWh%rIl } zr?Fh,?eR0?(?Seed(}? aw7?e? or!) ?
)bnn$?nwd)tl@as??hr%M?p pru?Itf?z?"io.tez4,?pml )?z
)E|ems-
?I?	ma|BerGq?"=0=qdc(Uz ??	/??n we!hqtoee toWtFIntGr< or J?l6ezed sgg?,?o2)gon-Qe?f"?o3t$hlxer?mr-p?Gq:mst?ng!6gqtlur,+		0o[tF)n`%~ x| ?cse?D >vveVa8?u8** P"Ea?	3|aN' || p/stFi$?dr )8?

		// n*.io?esmedkadd?prccgqsi?g?S1meceqsaSyM
!	?? z	
	)		//?.>.gtxe?iSd 1?E??e?u\ts?di?c?,i?????I?u?elt[?:
			marcherMn9?
??Fi?P2qrhya?S?lc?che{??if (`-AdCddr 9![
		9mitch?r*mitk?p?In ?Etcjev
e?, c.?E??v708i? 9?-?	}

)i/l'CphlybPg{wVinTdrM?		)g0h!pm;FiLvm2 )"+K	t%K?a= c/nlenwe(`ma|1???_ut, poqtmap8g;			?Oq?Vi?T?v: t}iP<#[I,(BndEx`, x|l (;J
??/'?Unmlad?0!d`i%ifg(e?aoE~?s by mkv)b%@plAo0bakk(ti Ma4c(esIh
?i =`?eor.dgng?HJ1wx?e h h=-!) c
Ikg ,$(mlmm < temp{i]) i {@I		)IaitaHu?KutKApk;te!p[h]4])-)1,-ad?h?p	l[ POS4Maph$](= dn?l)9K?}
	?	m
} Icb8?ceg` )sX			in0(PIsvFi??er`|| p?eViltwr 	?	??+f *posuq??ebh) :?	)o Get tHe ?i~ul metAheRmdacy?cOnD?n?-&G |h)s`	nteRme?IBte!i?to?vosTF?nder0#onr%Xtw
	?	temp?9 []??(?	?	Qi = -e5c?MpYut.leng<j?		H	whm.? ,"i-) 8`{?			?if ("8%leI?= e?vccgrOv?SiU!$!?y		???oo*?estorA mq|ak<rIn siN?c ?lel as?fGv?y?|(q?fin?D matcH	?				4?eq??uc(8((?atc(e:I.?i?`= }ltm(?;	
* 	]KI)[M}L?			y	Bos4Fm?d??( ?ull.? m?v?`EfO7t 1 Y?(, t`mp,`?m$ 9	??	--
		?	+? Mo|! mav?hee dfuMewvs fRoL?w?dd t_0v}?? @s"p/ Kgdr?dheM?r9ncmsNI{ad,H		?i ? maD?hevoUt??e?g?h:J))i_himu?* h?Y 9{*?!		H`  glee }$lctGhmrOE?^iU) &j
Y		)+<tgmT??0pnsUF)o?x??d?~e4xG?(0sma?$?a,qm(9 z$?2eDarI]! >$,9 ?!{-	!?{e%d[|elp_ 5 !?vesulrs]temp]07 elae)?JI)D?}
	[	}
%	}
-!/OYd R?)ma?tw t?hrEsdlvs, thbnugh pos4Hfde2*iD!F?dhnut-
	 ?isE?-??matr(e#Fut?= ?/n@ejsD(	)?	mat#H?ROup ;??r?Svlusb??Z)?			matuhe2tt~s??ice  q?me8asting,0m??gh%xOut*lang?h i?>	9K	m`tKhdvOt	?);-
	Iid  ptoz?f)nter 	({*)		y?ocTCi?dur( x$?-&zdsumtv< mA<chepOet>(xml0+3)I	}3elCe {-	)???X.!pRl{ $rmswltA( mc?aaurO1t )
)	}?I	}??)3

?fdLkpymn!kad`j?;F`?%Doke~X- ?o?Ns$+!k	r#r cxgckKofe%xt, Itqjes,`*<
?`E&P?!tnkd?3.?ejgEH?
	9meab?.cRamaviW?$9 EpPr.rElE??Ve[@?'cdnr[0]*ps g!l
?i<hic!uZelavKve = lia`a??rE,Ctive|| Dx`2.?0napivk_#?]??()y(=!mEcd??65laU?vg ? 1 : 5,?
?/+ Th? fg]nec6%nsd mA<glg2$unStr%w*|jEp"ede?Ant azE)reakli`?? dro? tnx-.u~ed cnOtW?v ?=M
		MutbCol^ax?"=8edhAoab)na?or($pyjcu?on? }?mh?) {?
	
rdturn%u?'?=-|hghecoCmod,8u;j	?m,0mmpmicytel`Txve? wsue ),
? m?Va?Any/.4e?v,? addCoefiVa|/q( ?5nct	?o0?mnem!)0?-IZ5ptrN?in$gxOf( Ch?boAont??t,$o?am(y >!-1;	
		Y Am?dMc?4R-la?irD, True )$??e4ghurwr} Y gqnsuyon<(dL=mH`a?n?ext( lMl`( ?
		9vaB r 6 | 	0%lma`?jeRm,avIV% 7. ( xela|}!con??xT1)-0oytgPOa|o.tdzt?) '$||?
		IA?sx%?k?k.t?ht(<co*uuxt!.o/de?yXe"?)	?mifchC?Ntgxt|0el%o,&#of?e|,?a|hl 1 ;	?		oatc?E*8Co|T%x|`aLe?? co?4?xt, xmn i??9?		//?!I?Oid(8`j'inG omto?e?emeod (h?que?!69)9M
	cL?3kConteXt`- nuLn
			b%`u?n ret3-(?I}!Y;??
	fo:?8b3$la4"len;-a) ) ?I :0	e!?cher }0xpr.jela4ive? loy5>so].tYte?}?!9"{.		?Lc$he?{"= Z ardScm?in??or(elemmj0LiTcj$rJ?}!tCjers ),?oa|chEr)`]3
	 ehqe![
IoatC?e?$="E|?r,fiLtes[$4okgns[i]tYpg9*?tzly? ?ul?,?tojfnc_i\.oat#hesE);-N
	Mo/ Vet????sqeSi-d?uPo sE?Yng?q"qoqi??}nah`matmhqp??	?hb  `m`tg(eqz?%`pq?d:" ? {.	KI-/ finde?(e`?eyt w%?atmfd opu?qtoz ,)f IJyI$fgsbt?ate6!`nt,i?GI		z = +?i;	/		fwr ( 9 j(<"L?k j!/?+0{
i		!is0$?pprvRela?hne? ?ojeNgCj\nTYu ]"+ 		?IKbpeek;
9	??<
	i??	??vuz. catKyvo??r(
		i!>s0& ElemenTMatyhes*!ogtcxer?`),
?			?0>`5?$'`toS5?ectNr(
-	I?k If|He?prfcedeng#4o+en w?s$aie]qcg?ea?? Combin?ukr- an3erh e.!(Op,Irit!c,9?elemd~T `*p*A			t}K%f3?slYbe($p< ??- a!).ao,cit??vamue?0dOjazS?ba -%2 ].?h0% 799  0"?/ pk# ? ?, l)	)?)	??eqmqko? R?s9m ?&1"?!$
				/a|?hur<??	I	i ? j & }?p3je?JR??Voke?s( tokE&s&smiBe(pm,&J`# (?!		J?9 leN $$?-qtgha?Vr?-\o?c.s*`(tokdns$=!rgken?/sLycgh?j,))`)M?				j <!lef ,& toSehestjr("tokens	?	L	+;(	z-I	IatC?drs/pu7X? m?tgieZ ++}
~?
	s?tu?. e?eMevtOe4ch?R?"?izt?%C{d??JyX*vunctioo mat?h%bFrKm'ro?PMatcxeRb(0-?omanuM?4k(g?s watMktaXe?r Ha?*?v#s!f?ed(< sttO!u#hers.lung?j >!0-bia8?MenT = GledmoTMCtChep#nmengtl : ,?	sup%pMatchEs ?Func}aon(0eef( bOO?M|t?0xlt< bgcqlDr,!?5tdsiort?( y?
	I	?Ar elu???j? 5btc??V?,??)		miTch%dC~u~t ? 2,m
			??5 ":"?	?			u?M??ghed  seed &6 ?]<		q??LAucLed <eZUmIIco|Tgxt@ac?Qx (upgpd?stColt$Xt?+		Y? %$mtst"cmw!9s  aRu?uitlArh{ded9E?e??n?s GR`_uUg?Mosd a/Ntdxt
)?	
mhgms"<?stud || bx?leeEnt&"?`p`r.Dmf?[3d?G"]`*? oUte??owTp-l	
			)/6 Uceifq?cer d?rb?ns?mofbhi{`is ?H? eq5dr-?sT m?tshgr*	?	(dibrw.cTn-1Ue$=!(?)bj|n?!? cjn?eP|B!cc4p(=] o1lx @1 ;$Eaqh.r@ltoo-`~| 0.?),
				,e? 5 u}y?eengt`;M*		 if!($/uTu?}Oct )1{=
				n?v?zlostCntt|\ <0cmnuUyt?=9?los}ee.$`|| k-oud8|9\|"'e4ermIt?
?		q?
	//??$?"ee?Me~hr0Parc)nG U?mm%h?E!t#(@jr2$ivec4l{ T/ z&sunTs
	/.?2u`tozt: KG89, Qkorm 		/' Tinerete NgremhsT p?kper|ies!HDz hlen'th?$saf`by8`=fuib?r?i1mavajine edemuJu2$@?ad
	?	fov ("?(? m== %e? &&0(e?gl 5 qdcx{?i])!a= n}=l k+# )?{?	9yg   byle?e?t2f&`?`Eo?? [
	???k??"?/
		if j 0bOn<'qt f& dl?m&owl5rDoc5mun? %1?$`oa?ment0*!{				?w?4dosem?Ld(?elei ?;			?-l(= !DOCsodfdHrHTEM;?
				?,I
??	ghalu	8 (EAT?leR 9 elem?~2atcheBs[*++=( - .	I		ig (d-?tcjE39 enel? cg?\e?4 ?| tocuoEJt, xllc )$9?	?	0eQuftp.q5sh( alim );	
	(	?bRaak	
II	??	?	?	?
?M	if h'ou?`r?/7t)?{)		Dizpu?s`} ?mrsulsToIat?{
AI)}?		Ix

	?-,(]Rhc? a,m`pchaD eldme~us$fgr??eq$fihte6s	
	Z	)d*)a??Satd?4{		I/-8Tlm] S},d hav?$?Old tYrou'h0anl pms?ibh%,ma4Flers
			e? ((g?e? ?0amQpazd? &f u,emi ) ?
)!	?	aatcHg0Cgunt%)?
	)	??,		Y/? l,Gtmn$?lE a?rqy fNS every(aiemeot, e?tsle? ~r ?ovM
+	yF( seud0! {
	)	unm)tah?fn`}?h< g?m?@);%
		)M]M*I?}?)?w?M?A		.+'`i? is`nwt`e"ckt?| n`?l?ments v{sided ljLfu(?an )hla?c?mv?e? `maucxe?Gount@
I	#?po0i?s1the"dattar oo?lmoa4a???I		-e?{jm$?mUn| +< y9-
H	?> 0ply(?er ?Imrgrs?do0%n?Atc(cd0??eeeots	?/'?TE8 ThMr ban gd){iiqpadCiwVhuru itmb/0U*ha5C eT?e|eue?Hc ??(dl- (?q0sladGotjt!-?-I	?/ eqqa?s`i`),!djleks$gG$di%?gt$vmSxt)_enz?(eLum}ntr {n t?g#Ajl~` nkp ?e?a}sE7eBa5e-*		/. fm ?~m?.t -Et?her3 av$ .o kegTn?h	?o/$Ancs??%n?ynf?adinitIallQ-st3ang "?" `?` a`l-ws ?i` dO"s%]ail?` rtvk.g$only kn(??a`
I???/0Ase? wiiaH(wi?l rm1Ut y?)q$?0#?Hma~chfECnsnt? th)t$)mfur{ f2{m$`id but(?s al0o?M	-?aNumgrIaal,y zero.?	I?f" rxget0&&*I??=?k?tcl5tBou?t0)?{
	i?z = ;?
	I	I7?hhd (09matCcir"} {%4IatkhE2{{o+Y, ) +	?	m!?chmr8 }ni`pjh%d, 3mvMrTohi`% cgn?%y?,!|ml8);
	I	<?-
	)	In ({eedB?"k		Mi?+."reintegrqte ela?l|N Mat??eS!t?du??miNAve uce gee?!&eqhfMRt?n';					in(( eq<a`?l?m5.u :   y(?-
M ?!nxeh)X$h--??.{?		I	?ed 8 ?*e.=A4chmb[I]"||"s4Mevchm$[?}( ) {
		)	fut?at?heH[a =$po?,?all(0raST?ta !9?( ]		}m
	)		}E
(	?

			?/"Tywgard hn?e?$0jkcdh?,der v`m?_[&to4fet nnlu ?ctuA?4mqpciew?			Iqet\aT+`ef=,go?dgjwe?$?ADM`t?h}D*k;N	?		-

	)'o A$d mEtc??S$t]rmsultso
	)		q?sH.@p?lY  ?%cUe4s, 3d|?at#hut 	;?-?k?9	*"%etLesw?3e6(%atC?es$sf%gelthlO?_uLla`h? S5c{esSFu? yau?h?bs s?idu?mt! rorT{ogJ	+	]if  OuPq2?kst '&(%su?4 &6$se4Madcjt$.lQNgDj!>?0"%/-?	 ?(eadg?%$+un4 +?se?HitcleRs/?ejeth?)&>?10- 

	
?	Si{|he.u~k{uaop?) 2?smlt??y		/	}	I}?

)		/o?Overrh?? l?nitP|ation`of?7lobql?2y nec4q$?(?p#Kers	If?? Ou4%Reos|0+ ;
O?!dh?rqnS$=@dirsunSTNi?e?3	?	?		o?term?stqontext ;?cofpextB?Cc!p3M)o?

	?r1?}vn 7J?avs?=dM?)u?8?rg?tr~by?av??
K	mirkF?jClhon?!w?`dpMctcLeR +$z-
@s?`apMaTchgS;h}
-
qmE`iie4= Yirzde.'om?ilA = &afstko?9dsele`vor,(m?tah0?k InDernHL Dsd0Gnly$*g"??{
	ta?!i<)?stvY#t?hazs `[YL?elemao?OItbh??s"9 sI,?		`a??ez$??co??ydeSas@[?st?ecLr +(*# ??-

)f`h$%v!gha< =p{
	/?Rina??4u a &q.?=yon?ov??ec?r?Ive?ftngti?ns#fhq?!gan @e u??a to c?t#h agh0mlgmd^p?@?I&((< }etc? ) {)		mquch = tOkeV9ze*({Elektmr0);	]
x?}0maToH.?a.Gt?9?	7?il? h /-m?)0?-
-		cecX7d Y O?Tcjergrok?eqans?%l!V?h]{\?)3)
		in ( Ca+?a$[ix ;n$/? 	;)
	??SedI`tznebsxUS8*)fa?`fd );?	} em3u0{-
				e?dMdnVIht'hdbs>?e{x(`cic?Bi ;?		=A	=?

	/k?F!ahe t??9cOep?dgd gt.c?Moj
?gAchi$&=`?'mp9lu3?icha(?sele?tgr, ?atcje?Fp/uEr/u0MAtcme3r- gl?l}~tMqtBher{. {dtMaTherZ,) ?;
}
	/? Sa?e 3%,dc|o?qN? ?oken1zetion"
#!che?.s%n??tnZ< se|ec?Gv;	}M
?evern"caCledy?|;??/(h?0&$Ar$?S?lfp?l?q?mecT)On fu?c\in.$vHat?g/0Os$w)di ?qz8dd'S bom0il?d9
 *! se?gat?r f?.atao.rJ!jIperam4;GtR?ng?D=gction} qEHec4or?c$s??EaLN2`?r ?BpWe-ckop)le? .  {`leator!B?lctko???5mdt kt` ?zznm~cwMP?e
(* Pxi?aEl?me~|e cOnTex$
 "?@~aram${E?r`y} se?ul42
 "0IpQ:e- {Array5 ?se%`] Q?qe4"{vu??lEntq to?M`vch?@?qy~SD-
(*?\
cel'ot"!W)Zzla.3e|%ct = fugc\I?~+ selacpjr*?Olumht| Rt[u?Tsl red` 	;
vi? in?o*e~s(tg*an, tyde(`fad.Y??r?m0k$-D 4?W9pe?g`3(ectgt ??= &fqnctaon6 .' w%?ctop4I)eA?cx ?cde?p&& |''ej)ze$*bglmat/r t komt)lge,sdmerV}r 8| [emuCto2/ i;Jra{}?usa? p%r?ntc ||"[_;

?m? Ury |+ -ifimiZe"otraVi?nr yf hE?m ksoml?lce sp?e!dO2 qn!|he ?kr? `ng o3(reed?/ah|hf"|adtEp ?6(siyrh 'uAr!otles)7v con4E8u+I	If 	 OaTkh>lunf4h?u=? 1)0??M	??dPmmvbE$?Jp?xt kF$4je mehlanw?coM`/tnd"celag|or$es el 	tj?e/w"="matcY[8]#= gat?`?0]-sdhce? ?r);vi	if!h$d}{enw.`ancvx(?2(&:#8t.k??(? t/kgnsS}9?9pq -==?3H? ??-
?	con?ehd&nodt\ypd$?=< 1`&. j/+widO|I}HTML!&? Ey?r.R?Yqukve?0?nze?{K9>pipu](9 :
?h)mjjue9| =!( E|X?.d{nf['M6] (dokdnnm`T#hEr[],z%pl`k?(runer`q`a, funevcape	, co^$%xt ( |?(SY ?Z0]+*I	yf   ?c?f?ezl?) z-
		z}4??*RE{u?ts;

?I	./ prd.ompi~md }!T'm?{{ Ei?.$s4?ld$v?jkf1?I~?{ur4, co*stdP!t0 i(|dr?l		muhre if | /hphlad )8z}ICcntep4 =`contgtT*Par!n|nO?5;?	I-}M?	*		3elucdK? ?(??l%cunR>3lm{M (}O?%>??rhedt<)?t!,5e,Mgno?H )?	}M	/. V%dbh?c cc%d {%u0f?s(B?gh$P/-lefv?-aPbHiNg
		y(<(ycdc`?x~rK$feddsCm??Mx@]'test(?3e|ec4gR$) ? 3`;(doken??|d~fp*??Mhioe`j,i-() y*			enke?#?&?oGe?k[iU9	K)5/pBbg0t?I&?7e?Hkt a g.}`iNato?	?)ow l#hpRre,at?v?[0(dyPa"$tokeh.|yte	"U	{
	(cpeaK?	?|
Ij.  ?fah$?"E\pbofinDY T{pE Q)$) {?
	?,/ QuaRk*l l~?c,dhng 7o?xexp boV!lecd)ng 3i"~i?' ceoCHoiTor?		)?if!  ({ee`"!vx`(=??	H?*tgks?.gatch??[0_.Rep@Acd("ru?gC?aqe, fufdsCap??9,?N		(	ps?b??'.tmqV)$to*ebsY0T.T}?f 	? & `urtKnnteXt( c?.pext.P`R?v|Jo`e ) ??#j/z<%???	))")h{

II	/2Ib(seed?is emti4kV?n/<|ocenk`?mIacn?ue?AN(buurh(masl?(	?		t.kdm1.spficl( Y,?? );	
/IsEl?ctos*=0qeddnO.?p? &6 4nSe|E??/s
 PnkEn7 )?
				iN ? !??ldgt?v ? ?-	???`usi.a?pl}:$re3u(vs?`{!ed?y?K	h??Mturn?r?3edfs?
	A-~*Z?	?	creAj{
)	y	?}
+u-JM// Sompilu Aft ?}?c}te?a fh'?eqing 4T/ctim? m??ooepkr ?/0 prO?mlea?	/+0sr?vkde!cMcdc)` }o?aroId0rgt/j?omzc?ion$?d(?e"mo?ij?ed$djs?lei?mvdi3o4g	J?( 2om\hleD || ckrx,E??Wglqc\o?$0_qr?hAi  ?+	v%id<e)	cn?%X,
?DokuMajpIWTM?,
?+2q3ulds,A	!ciod?xp?|z0r{kbhknGVe?4H%c?Nm"|&r!? $& tEspCo6ext( boftEyt.peju,tNkfe ?"|}?ountaxtM:	_U
r%?er? ?ec?lts;;
//"Oni-tie' apsignmwntS

//0Qm?t$stabilkt?E?uP?ovp,?oR?S?a`lo = exp?ldo.sqdi4(*")({ort()robTOrdqr ?n?gkN(b)?>==(expando;
?/ Support: Chr?Me$14+31!H?/ Alwq}s issuha dtx|Icaugs If uhuq?`rgn't pakred t thg compAri{on dlct)ol=support,datuctDuPnicates?=!!h!3Duplacqtg?

?/$Mn`tm`li|e?Againt t(e&?%F#q,z?tocuDantM
se?Documeop(+;E
/ Su?2or6?Wabk?t<673*1?#% CaFAri ?,?,2/?jrome 210(f)Xd ?n"Cjrooe r')
//`Tetac(Ed ~odes??oh&/?nding?y fgllow *?ach`m|Her:
sut`kzu.u?rtdEpac %` -$?srarT(du^sdion(`ul ) {)I+' ?`o?ld(r?p?rn 1l buu0Redtzfw?< Hbollo5Ivg)?
?2eturf el.?oipepeEocumal?RosYtion(?loc5Me~t.#reCTeElument($vYdldsd?") 9 & s{?J});
-
&/ Suppmrt: IW<x?// @re~en0@9ttr-r?te/prOt?bpya"ilu%r?olatann"// http38//madn,lIcr?So6to??nEn-qs/=ibverx/mC5r64:8%2xVS.=%29.aspxif ) !!ssEr|(BumcTimn(?ehd)h;*ul.m.ndrH|ML =($>a href='#%></a>!;M
	vtqsN elcrwpChml?.'e|Aptribq|e"?rgf"?!==8 "#");K}( ? ?	qd$Hafdda( Bt}pe|hzgf|(`ighT?7idvh",0gunctamn( e,e?,`name,?ysYML )?{?
		if (?)ysX]L ( z	J?		?gtusn elem.ge|Attrib?te* name$ jaiantoLow%pC?se() =? ?t[qe"?; ! 8"2 );
	I}
?)8
?

/+ Ruppgq?: yE8
%/ Us? ??&)uLtV`lS ?? p?ece of u?dEttributt*"valu%")
if(% !1uq0ort.attZibutgs"y< a?vcerv(fufctk?n($al*)0i-	uL.AnnerHL"<"=mnput+.?;
	ej?fmzs?hiN$.setAttbIbute( "value#,!( ??
Ireturn g|/firtQ?i,d.g%4?ttribute(  ?anwe" ( ?=) ?":ti )0{?
	aLdxtndle( *vanuE2??funk0mnm($almm, nAme isX ? ?J		if *?!iwML`&& ??ak.loDGNAegpoLkwerG?we(- ?9= 6hnqut" ) 
	)r?tuph0?lem,d?fe?|vVamem;	
l?	}3M
w*?
// S5ptor5: IE<9*/? Uge ?etAttrijuteode`tg!?exck2bolEan?!?jah0getAt?ri?ete lies-*i? (!?sc?ZT(fwnctikn? e? 	 [
	xd?u??(ml.?dt?ptbipu?u?"disab|af") == nu?l;?) ) [*ad?Ia?d?g,!bk?da?j?, functionh elem> .amm,$is?M\ !({raR ?al+?	y? h `?C?ML!) {			retu?n0ele}{ name ] 55= true ;?N`-d>~oLmw%rG%su) (=I	hPal = Elem.gutAttzm?uueNode? na?e,)) ' v?oYPuc?NHaf ??
)I	IvkL~alae :
			fufL		IuM});}
rmt}2n$Syj?d?;?
})*0wind/w 9;

?juM2y.fi|` = ixz|?;
jQuer.up0r = S?zj|e?selekto&_?
// Dep2acitedjQwarq.axpR?":  M?= jAuery.ejp?/pceEd??;.kQe?ry.uli1u%Sort!} bQuebzunaque =?Sirzd?.qnlqueChXr?
lQuurq*text w Sizzlm*WetVext?
,uery.k3XMLDoc0="Si?~ne'yq?ML;lKjQ?erq.convai*s =eRizzl?.co?tqins;
jQ]ery.esb!peSe?e?tov=?izzme.?gAarg;
	


M
V?r$dir0|$functmmN((eMEM, div,!uJ$l ?{	ws2 m`c*?d = []
		truncmtm ? ultil !== entefa/?l?
Jwhilm ? )eleo? enem[?Dkr ?$+ .&,m,eMnoDeTyxe !== 9 ) {		m? (!Elum.nleDypt"=== ! ) {
		if ( tr?ocaTe$&& j?5E2y( ??am +.i?(Fun?yl ? ) {!	,"ve?k;J		}	M?tch?d.pu{`(@?lem 	;
		?
	}E
r%vw2n mhp?x-dk-&}3?
M
var v?blioGs 9 fuNctao~( ?, Alem!)${
?fr mq?chgm ? [];
O
	f?r *<>?N+ ? ? Nneh?SiblifG2!???)I)f ( n&~ode{?m )98`2 &?(f !<? ELem ) {
		latchE`xys?($? )+??))y
	}

)2E?r?!m!tchud;
};?

var rneE$s?/lt%xt = jQ5Mryd?p?&edtc?>nEed?Bon??a4;
?

*fTnc?ion lodeNKm?(imLom? oeme ) {
%  rMt{vn A|em.nK,%Jame && d?e?.jod%Name.|oLove?A?Seh- 9<?a-e.eoDgwer?a{e()*
};va# rs?ngleTag,= ($+^4?[a-z}{?T/]0>8^x?0\v^r\N^??k)Y]p28\t\r|nLf]*\+?>(?:<\?T1.|)$/I%)+


?//$Qm?lement tht#
te~?m#am et.ctio?q|i4y fox fy?tdb and ?mDE
ftjgvyof`v-nnow* e?i-en`s-0qualiFier,$nt )${
	id"( a{Fumctyon)(uuanigier`) 	"{?)betuP* jq%gr?.gvep(
elemdnt{, F?nctag.( elem,1Y ) {
	bE44r_ )!qualcva?rk ll($ulem(?y, ehem() !==!nOt;		m$);
	}?
	/. RioGlG ehEM%ft
ihfB,!qualmfMasnn/deTyqe 8 {?)	?e\urN jQuEz}&fpdph elei?Ts,"f}nctkOn( emee )({
		redurj )!%lei =5=$quglhfI?r )?=5`oot;
	?- );	}
*	// Array|ike ofhelMe%lwsl)zRUery,(?r'umgo<s, Qbpqy+J(? ( typeof$p?al?f?Dp !?}!#3tr)f?"?) {
)z?pwr. 
Y?2y.gPax- d|ement{, f?NcTiOn? el?m ) { 			returl!(*indeyOf,san|h$u}qlifidr| olam(? ? ?1 i !=5 nntM
		}#(?
I?
(,."Ghlduve$ uizec4ly vR hnth {imple(a??(cgmpdex?SeLe#TOrs?)re|upn zQuerY.fIlTer) ?uamifaur,!elem?nds? ?o? 	;Jy

jQuerY.f?ltgb0? f5n?pionh ezpr, eL?mw, n?4 I sM
?var(e|em ="$ld?s{ 00];?
	if ( no?$) {
 E8qb =? :not(" +`mxpr ; ?	";
	}
Iif ( eleMs.lefgTh?]}9 1 &  m|em.nolEType =<="1 ) {*)	p?ttsn jQueBy&fiNf-i`dche?Qel/c|oR(*?lah?p%pqr -`? [ ele?$ ? [;
	}*	Irepu#?`?Yver?,f)nd.?atg?er9 exps jQuary.gve?h?elems, Fula4ioj( ulmM!)![J		rdturn Dlem.l?deUqte ==? 0;
}
((){	J??
	j?exsa~&exteNh({-	fi~d* fu|ctioo( s?bec?Or ( {
	var a, 2e?l	
?		le? 5!this,lu&gw`,?	?self 9(tlis{?
?if ( ?yqdOf seEcto2?!== "strIng"! z
			rutuvl tHhw.ptshSuack( hqseRy, selOkw/r -&fildep f}j?aou~,) [
?			foR ? i ; "; y <!l?n9 i++!)"[M
		?iF 9 *Quer}cgnT`in?	 ?elf[ y$]<`|hi{ ) ;
			K	rdt?r/ ?rue9		=	?Y?			} ) );
	u?		ret!=0t?mspqs(Stagi?(?] )>?	
mfo???$? = 1; i`> le~; i++ ("{
			jQudr9/filD(
s?n%cto2l welg? i0]l"re4 9;?}?
H))zdtu2n lEnb>h!?(jQ4erylunisueC?rd,)bEt )?:@[??3)
	}??	dimter<?FUnbti-( s%mestfP"+ {
?red?r? thiw&pe3hWtack ??inn?v(0thisl seLectow }< []?"f?Hse0) +:	?(J	~o?* fqncTioo("z$Lec<gr 8 {
	re?}Rn tiis.pusm[taCKh"gmn.o7($t`is-selucu/:"||??]<?tzea ) (;?	},?:)is!?w.ction( samecto? )&s
?	{wtur*?	!w!.,uh)I?	thms,?
	?oo Iv t?h? hspa poqitim.al/re?a|?te sel%c|?r, check membu~q`ip i?`the 2E?usnet?ret
			.? sk06( ?;dI?rt),is(?0<l?vt"( won'|0retqrn`truE?for a doa wi?z rWo "q".
			vyteOf s?nec\or?=== "strIng" &"!rndedsCn?Tex?.ter4??;omegTow?! ?*		?jQ?e?y(0sel?'dob0)2:
)			seldcvoR!?| [],
	)	fals%
?I?.Lmfgt(;}M*} *;=
N
// IniTialyje a kumry ivjEcdJ	/.`A ce,Tpa-Ved?r?Nce?dO tH? s?op"*uepi(a~cume.t)vaR!rootjudrI,?)// A wimple:waY v? chgck gor HTMD st?i~g3??//(?6IoridYze +ig mvar`<ta' ~o$ivoi`8?SC vya"lofation.hesh#!??21*
	/. S?rhct$XTM????cO'?It?on (#s12{0: must0starv with?7)	// 2(o{?c}v$cimpn? /ie0Aqku ??r,rT??e-
	2qpkbjL}pr(= /W?\q*(>[\7<WU+>?[^>]"?#([\%-]+9)$?
??fit 5 j?u?vYffnnijit = function(({dlect?z, cftgxt, ?oo4 -!{BI	var metCh,alem;

 	'/ XANBLW $8 +, ?(?e?l),h (uf?Ufine?),$$xfahse)?	i? ( !seldcpgr )0
	Iip%Vu2n this
?=

+=+ Mqdjkd a?it(# acbepts ag$alternkte ?omTjYugrq?	'? o!m)cratE can1supqozt j?wer9?ww" 0ghm501)
 	?mmu?% rgo40||!2O}DkQuezy;

	 ? ha~t?e(HML`st2ingc
	)? ( uy`eof"wcnegt?r(== "#tviNg" ) {-
		if ((sglg?tor[$ ] ==? "4??&&o
?sedEc4ob SgMekpgb?le~gtI(,0q ] >9=`"|" &
			seL?ct?rn?ungt` >5 3 a {M?,?	I	-+.Asw~M%$?l`T ctrings thdt su!rd an$?gnd 7kth < q2t HU?L and0rkyp pje pk7ex sh%#k
?+	?ma?Ci?= [ ~?l?,*seldk?oR= .ull"];	} ?~sE {	)m?tci < zqeickMx1r.e?e?(?sgluc?or")=
			u
?
		// `|c?"jtM orm!+e sure!?n conve|d is cp?kMfiad(fgr #idK	)f"( m!5#h "& ( ma?ch[$10\!~|(!amn?ept") )[
	

	// HANDLE8 $(h5ml)?->($$a2pay)
				mf ( -qv!h[ 1 ]?) 3
		 	ion6??t u"cO?taxt mNsr?ncgof0jQuer9 ??gnteXt[ 0*] : bnntgxm??

?		/% mvtion"to?run {g{kp}{ is true$fob?beck-comPat?		oo Inte.t?+nglhy2l?t  H$ ePz2 be?t(riwn if TazwdH?MD$+v$jov$prawukt		I?	jTeexy*?dbm-(0thiR jXUery.pirsdHT]L(	
I		m!dah[ 1 ].	)?		9aontext .&?gOnpux|/nmdePypg!= cont%xT.ownerDmcum-?u |x$context?:?d?cumej|?		)I	)?tp4?
I		)i i;
?		M	//"XANDE %(ht?l, `sops)				Ihg  !vsIn'deTag.Te{t* eatch[ 1 ?!-)&" jPuery.isPd?hnOb?e?t?contex-	 9 ?N)	Ifor ( MAtch0in goj|e?t?I"{

	I			./?QpmRE2dm%? of ?o$tux4 ar% cAmllF aq)methods$if pmssibme
		?	hf )!i?Fngtimn94thiw[ ma?ch ]!	 ) [
	I	I			?xiq[ matcJ ] !c/ntMx?Q o!th ? );?O*					/0.,/in?0othebw)se?{et aq attsabutMs		??	} u?we`{-						thirattz("matgi<$c.Ntezt[mataj"] !;?
)		A	}?	)	}?				mJ.				be6urN txys;
		/.HAJ@LEz$4 #9$)o
	}%mse z?
				E?dm0=(dk?vment/edtlemenuB}K\("ect7h{"2"M?);(		I	if (!em!m?) s
M
	I		/`Infect`he?enemen? Direc|li )&to vhe jquery$objEs=					tHisK 0"? 90eme,;	
			*	t?Jr?lenb??  ;J				}
				ret5rn!?h?s;
		}
-)		// ?A^DLEz $ ei`6? d(...+)
	?*dlrd kf0(("contgzd x|"'onu?|t.jque2} ) {	
)			revUr?(("gnNta?|a|< root ).fInd( sele?tor!);
				//0Ha@LE:?$(%xprL$#ofpext)		//((w?i#h is jus\`%puAvalen5 to{?8(covueuq .fi~t(e~pr+?
9??enseh{
			ruTuR?vh?s.coNctsuCpor( ckntext ).nk~d smlecTk~ );
I	?
	// ?aNFLE>#$(D?-ELeme.?)J		}?elS? ?f`h!welEc4or.n/l%Tyyl - }+			t?is? 0 ] ="si`gcd/r;
			thir.leng|H = 1;
	Ir?ttrf 4`is;
?o?`HALDlE>?$(f?nc4co?)
		/- RjztctT g?R&docuenu(ready
-H}0else0a& ) isFungpion( s?l?c4ov$)"?`{M)		r?Tuvk fnounr`cpy !?5 y*dd&ioe$!?			boot?je?fyh cmlec|kr -!]
J?		/m E|5cutf inleD?atel}`if Reqty?os$fot Pesgnt	?	seLecuoz(?*Qudr9!);
?	}M?
		rmtWpN zQu5pynm?k%Arrqyh ?eNectob?p?`ir);
	y;
m
-/ Gkve tH? i~iu f?>gtho* tHe *Qugry1Pbotkty d dor hatez"kns4antiatmol
ib!?.br??otyp?  jS?ur[?f?;??/N Inipial):? cejtral banergnae
rooajQ}eri ? JQu?sy* dOcum?n|"?9
}
M*6!r!rtab%?trpbev'=$/^8?:p?renTs|p2?vj/:]ntMLmAml))?-

	//?Me??d? 'uaraz4b?d%to?produca a"?n?q5e`se| 7@el Start?ng from a u.?qu5 sdt??)?ueRa~ugE?Unisue = {
?	ch?llran: trum,JI?kO?te~ts9 pr}e,
(	juxt:!,ru%L
	a?zev{ trteJ	};
-
jY5eRq.fn.aXTend(h-
	ja{ g}nktmoN !tiroet? {*		v!p tarw%lc?= jAuwrq( taRgg4, V`is`)4
	?$= tqsgeds&??ngtH;

	rgturn thi?.6ilt%R( fUnctiof() ?
&a? k ="?{N)		f{r ( ;!j"\ l; i;+$({
			if h n?}eryfannTii|?, uhmG,?`ar?mts[ i _ ) ) ;
	?			ret?sj tRqe;-)	I}?J			}J		u();?
	???	clkse?t: nqnctiknh?welmktorsn contex? i {)?	vyr"cuz$?
	) =`0,
	?l 5?uhiS.lenfvh,
			oatcxm? 5?[],
?	ta?gg~s09"?ypeof sg-ect?Rs !}1 "stra~gb && JAue2y$(S',egtMrr ):??/? @si|iMoahb??l-ctmrs never`m?pc?d(sance(V?erE's n/ selectimk_ C'.tUh|J?if (!z~me$SCont50t.test, summcunrs 	 )1{*	Yfgr()?;0i!? |9 )#+?)?{
I	?or ($kU? 5 thisS(i ]{!c?R$&&dgwz #== c?.t%xt{ kub = cur.p!benvNod? ) {	
					//$A?ways skj??e7{?mon|"fRagimg|k?					if ? c5.nkdqTyxM ?`19?&& * t?reets`?		9	t@zge4s.hldmz?cuS0) <(-1 :-

						? To.'v$pass n{n-emeMdjvs t/ [i:zH`??		cup.nodePqpe-== ? $&
					zQu?rx.fhnD.l?t?lmsSElectorh?cWr ueteutoF3 i ) ? {

(				Matched.push("cqr y;?	
	`re!?J	m			}
		I	}?
	}
	}.
9reduRo?|?hs.pu3hS|`"?(?mqtC`em,Me$ouh > 1?/ JUuery.uniq5e?ortx maTchge?) . mi?s?e  (;
	=,
-??/ t%termy~e ?he xosition of a| a??me~t U?t?io tH?sWt	fee?*fu|'tioo((ulem ) {
M
		//(No avgueenv, riturl zndux iN?0avelv
	if0( !el?e ) {?	repurn $ tHIsK 4?]0"$$?isK 0?],r?sM
pNodu )?dwHi{.?i?st()*pre~All,).?en?t(?8"-1;?	}*	
	/o Indgx )nasenacdmrMI	if()(tipeng eh?m ?==  str?ng" )"?j		?u4wp. in?eyOb.cclm( jQuer{( elem ),#t?iw[?4 ] )9
	)}-
	o. Nocite ThE?Voqkvin?"of t?? dGsarud %leme?v
		sev=~g infmhof&cklm( vh?s,
MJ	9?o$?V h4(rmc??ec a "Q5ery k"ject,?vh?0fmrst U$dmu?t y??}s%d	?		E`?}.hq}ERy ??glem["0?]8:"elem
		);
	},

	add*!`ufc4lof qelactoz- cOntext i {
	rfturn0thicnpushSdACk 
	M	jQuur},unyqueSore(		rUue2y.mergE?@pxis?ged	-,0JQumRy* select}v, {note?t"	$-	?
		);
!},J
	ed$?acc:?fujctaon(0sedecv?r ) z		ret?rj0tjMc?!$D( seleg|or ?=2nill ;?this.Qrev?bkect!2$Th)s&rrevOb:?g|.?Khuer( selestO2 =
 ?:
	}
} )3	
M
funcdion8sicliogh0guP.0|)? 8 {	while ) ( str 5 Cur[0dIr?]0i && kur>~f?Ty?e"!=< 1 i!{}??s%5urN cur-}

jSueP{.'acp {	J	pareNt&ft~ctikn)`e,e}) z
	Ivk2 PardjT = e,em.pqreftN/De;
		retsrn pKf%ot?&&`p`ren4.fD?VY0E  == 18 ? pAz%nt : null)]?
Ipar'nts:f<nfTioN(6m|ee ) {???	veturn ,hr("%Lem- "Parent^Mde" );	q,9paren|sQN4i~:(nenc6h/n, edem$ h$ qntkl ) {(bet7Rm?dir( dlem.0'xar?jtNodd?,?u?tin$	?	},?next: funcpamf? Dlem % {L
		r?Vurn ribliNch%??dm< "NaxtSI?liN?" );	},
	brev: function( ele?") [J?r#tupn piblM?G((alfMh5?qbdViousSIblingb"!;J	?m!?	faxpll:&ftn{?koo8`e\em(o jM
	?revw2j0dir( Fli-- "nmXX?i"ling" ){-
e,		pvevA|,z!f5??thoj( e~?m") z	??	return `i?( eld/,p 9revioucCI"mi?g& .3?}N)?etUft?,: fun#uImn)0dm?-, i,0undhn(?`[
		return Lir! ?t%-,0"nexv?9?,if'? v?tkl,){	},
)vvevuNtal: f}nctyon($elui? I,4|~thm()"{
))rgv?2| dir(!elee,("ppgWh'?sSiblIo?", ?ntil%);)
	|,-
	sm??y~'c:"gulctikn(*gmem ? {
K?ratqr, #ablinWq,?(%e|%??parAn|Nk?e }~ ?y ).'@Rst???ld, elmm )3?
	},c`il$re~* ft.c?iO?((el?}H) ;
++rutpr.!sjbLi=ws( elemgIrstGhyl?");Ju,
	cOwtenpa: Fenctjon( mlem$) s
?    *" hf j .o$a^am?($%ldo, "iF?aie"()(`{	  !  &?? b $retur? ehem?sontentD??u?ent;?   ?  ? }

 ?      ?/$SuRpmrt: IE(= -??  ofmy? jOS 6$onl9, `nDro?t Czowser!}4/3 ~n?yM 2( ?!  // TZgt?T?e temQlavI"e?mien? ar a?reeth!v onu ?~$cr-wseps"vjat? (`0#0 /.)d^n%v suP8ort1kt.0  ?  `kf,`0noDdNam?($glE?,?"tempnAg  9`%`{"  $  ?%?!31?jM%?E}en?k?-eLS1yX?g.??z?" i? ??? m9
n(?8?pAx???n?jY?o0ioa?RGm?'?> l&lmV?lih%Fo$%p(Y3?;?U????u?c?i#j('Nk??,?`?ra0)OB?b?uAz8Z"~z ce?? ? ::{cgCl?O?(`Uo???< 2?M,CtoR(!c9		w?r ?cv#leA? jQ7mp}oma`#0~Hik???Y-H??D?b !??]?	ye`( ja?f,2dkSG8$-?*??""U?ti<? U {8=Ql?Es?nR+8%el A?2?mJO+mf 
?5-E"4gsO& w{v?dmG aCvIs 9}?{42IX?b#ci
]Q[`B?A}?b= ?Qucxy.fk|5T??[???gto?!?hw{zed1?2I?
-??I??l??jis>f?N??xiU#r)}? _;?l8,mOSu?gup ?#L5??
??mj?h?)v=?r?(?ddE?)?0iR???)?`U"$j ?8jtEr)'e??huGSMueh)t?Had$!O**}:??@O$Z5Gr5E$krdM{#sosqyarmTS*?e~ 8pr???daVk~? m?es?K+8fj?spi?b?`?prE8?~E?tJ p?mu?c%)?	?IHCna?bJEe????2um)=?!mX?}M.wEuupnhdhi??45zdSqao(h??tsI??B?s?y??|?a6?? 5?mTH??|v)??u-a8eY>L?(4t??~]N\~=cgt1{M
???L
/#(AMj7?6$.?|zi?g--g?oi?v?w&'p????x"?.y? ?"?c@-?_VIcf4p??nkg{j^u[?Mc| gpm?w5P~i~nsh??P??/n???"?;
?G?raD!?uc???!3??]?Y/Qs%?Yo??c,0?eXey?.[,`?w?h$"oO?hqg??(??me,}|x[?D)refEki?fH$[(?+?AG`)`s	??Fb?pb4SDVdeg X?)?DvteyI|(??(1vdt_v?"?kf?C-{?])M?Ih BReae h baNl?iQ?n?wt!?s??c L%?6mhm??hbD Pm?pM?u?6:>?? ??!8?wTnl2s~?ap?+.?? mHp=???{1`o-ce0iQv?Im?+?3enw?LCd chm? @xcN?w????	?j??kG8?aeh?`c|#lCrt`c (g2`s&oda`m?x,"?q!$hqhin?L`o??H}l kBCgpt-?C^u gY$cv??bI0#iL?`??k<lIgT?i??|?C?0daam2c awM??*C#`?bTd/"h)?^ i~fg`,)Bg>?#*hbf?s?"mul4?tm'?|k}m{>?1?I?-0C's?	Z?y f?t8?dv?

?j??Hc?2!I	?h?|??e?%@6h?Fs~j&a!dli{v?g?+ ?fl90?#(<Y???2?Kce!??)7E#a.Mue?rr?L??]Jp?amMm??|*(A	???q??c2`|?aJO f[ ?peja/%jj?~a?? ?OL
Gxoh ??/l(M@?r}@5j??, ,??N?*?!?	1&t?t+enzwu? a?0bol o??I?b}W?q Wmq ?aph(??c"eQAh2V03-El?b?x}#
????A??dpeq?(~yk?)ad@Ef?V?eh& *T*a?1UaWu??Uknl`mLrT???`?#lV??g?Hkal$nnn{*Ve `???d"o ?!??ol9}NY??e?h?l%t?%$jHSdL1k??b Id}yOL?%hs51??N`9?rtd$c{x?X??Y?hw* g?c?,b`h+`?u|'???cFaLr5i?hN? b+%??YEd?9'C??daacJ?d=fA?n?<??"?ktx?oNb -?[	-N??Fol~%?T??q sOfxB???@X4balo,n? ?`aped?O0?"*?c?)??tm!?}?D ?~`??etf?FF)??,}eih????xl ?QwX?!firqt)N?ndeiO.{8/??R?? bNpuXgnr(-/ #sVxL$?0(;-
	)a2tp?e?xt#_n?<`kpn?l~y??`9
?NC?w:9?Ex4?*n??{}80'pU,_xsx+iOh??`u$?/'Fz`7$wo0??g hf-lI??`?i?wz Emtl3f??+?g	
?$Eb?n?,^i	??? L????$ird?fahee!&ktjN&?no3OCtUgf*>)`7?sO
	?tiDwsP????X)?+????u?vo&???g")d$mak|?ir ?n`m+0Q"f=3??T
?*?UD,?.??+?F?EF?u? ?pdTe?~ ?|siNf?	???o?"c?-?"?
??:@??wUl)??zJBG{j?l?k6?9?i?ti??Z\<N-	m'%,o5?o?.ele'??/*A??q?d?r`pa4	?^ebw ?is s)iwcau? UyR],YI?k/%?I|hf|?nn"?tr?Go~p;hb??iNg?cql???s;?	a?(F	` jy ???/za?k6u?pQ?~$eE$*?!??A29j$IwDl??p?-1~,?_
	/?`Fiy,a??dcaceIEfs@e ' 4NeVKZ>I#!=m>?? ?wn??R?-?SiNM`")B ?o?	?/}?K n8fL-%??-?Xl O2?k'nlJ??T3I?
)]	??Eh?vefM???~"#f???&+2@_bh 0?}?K?w?dlm'?uc-??<LK??	w%ds`??5bi/N?0I?(|fy?pu???berra?i???la"vQfu?qG bkidoa{?Cf?rg` /?fhSm.ge??t[a?;?iK dmP( YF???e%?je+?l/?f!qX?cYJd%|29*-4) 8%eI	?ow,????pue|a?pY?r`(;E:IU?K,U?(Z?{,ap??Int??f((eovd*}???tm???))? =;(??" M)?lN?a[?`anD9?*?gK ?/?c2hu@EP-X?!)kz?	J?MN,( lI?t_"?S`N7Ob?q }?eQXl?(?y??{eo 4?M?"o??ok[ 3"V
 ?]?="f?hta?2	?
?I	Cj<?-^s.?lo<K^?a\r?(?|wLK	.?
]O/"?%?@%pD$e>d``?a?&nzN%tptb?(u?t`D?z-,itd?H~eQfgp?V'9?+seA??-far)n&?Dd?= )YG?w?e??*??		-my]zY!9?feMwe?M???uG?	???!O	I
?k ??G`rU.M ?gA?y?"s?	?Ljv??yt| a^?8	1?a?70?%_rp?o?{}??r}Hi2???	KiemgX{%?	6clce9?J	?}?Mh?Ad?6?o6!? ?`lZn?-?II?" SDc`O(ut?k??tv?re d??? d%x?vwa+gs wom$<		+f"
C?-o?Def) kH	YI~' Agma$,n?Yx?y)liBT#hG?7k`.qR%`? wAd??` CtquRj?g4f?;chl7?)iImv?e?e-osi?i9?<)	chavtd????9M*?	.? lylUv?i{?< ?>?Z Gr:e?6!h?)/?lo`
 ? e5`U?[?A?!iss0-$3"3K???5	?!?
?	/m c0sam#Ca?}0?bIro?h??qIH[V?n? |`{mMJ	A?o7E?o qha5NT?lqj"ez"aA~lLD#v-_n*nt@cm,? hB*c e"(u(e!<)st? Y!clf*?~uZ?H+{9`{	??J??nf(H"j[?"?s
? y?.?D	?&we(h?ze3m?Fg?{v?o?(?)2yw6'2??0?me!qii}d? ?ef7 ?zTKb#!?Di*c9???	?	hFj0cou?'sy 7&A?'?2i?H? {O?bIQm{hjv?x`?(l9qp:?czmPl1- :?
??)???p?#q?cl(?n?hN?<i3+???=:A??-N%ZI?hjwuf?,?on ? X qR !?	? I9QUesy>eAc?(lAwfu?)fD??Eivn(,???Y7??)S?	?		d?,I?fa??tijj,?pz(! !!%
	m	?)?	<m???(ov???~s??Pue-|| a )D,eg(?/rFH()?`[]?)i	i		I?isUlX5??8"?e?+;I?Q??I???			
??`]njm(of(hd?~f?????w zL'-S?(?3pNnTx?e?CA?Y$9-??Q%r?oa 9@?P9??Mm#`Im5!S8|?dcpr?	?M??]	l-????dt$ B?c0=H!	?	_91?/-!??
)?o-m`)??X?v?fovsq???????	\Ayc". ? of`{H 78!`IJ?.2y3k??[A	ckpa(y+e
+i'	:	)	;"I?-2at5C*$t?Iq<B??=>	?-{?/
[g9o?	$e ??)h_e?k da?!5t ?0lJ??-
?-?y???4tf"f?oC4a}b8 ?	??+]u?Yhel?	aqFe?e?u{((?Urz?.1?,?t?f??@{CII?OW?hi?$??#8?2?Iojmn,8<2($`-|e?!?@bgqiOGFrpq(aezW?.@S%,&??`E?4)a)?lQ?q? ?M((,+}TS|m?k?)??;?a?L?s ?;i
--?	)o0 sneHA&?k?y
?A9?E9?5?	e?fth +?td1a<m?f?wmF?{ldE\ ??k?	D)?eyrB?5I?`mhm.38I`?I?}O?91?
;Y9 k]???#c!~gRnb?/#~* Y??M=[#. KlGgr ?a2p &aWo"iat??qKc$is(if xE#Lyy$>gNI!Z????N,jm??:?m????Fo??u?fdn?&xa<e?n$s??~ ?"?Ov0&?RCmP?U?i'?2G ???HQi{+!#E?axEd?Y?Y	? R?0?hC`,k*n?tb?9?m6i?
?g q?~ '?5:?K)1
?+j?sEq.n@Pz?=??dF?6?aS?<}?$Ii6?O?Alh{T$?Ul742 ,`q?*	u?)!??Za}o????$$cq(w2!g0dm?l5i' ?is^E9(%xPtK8!*??ctA?"(`0??Q	+c?* ,k??$?<?-???j?;?~?\_;tK/(?9)ze?up?(v~5z~?	?{??m	??6Ci1arM/b<&?Z?h~Dp>af?
I	?' aZ??|*CP=(3ezpu?=Pen$mFg?ex%??t??l{O?M?/ K?%Jz"AD`A?hhbEA)rh%j@q??Dy?{M?	I??sab?-:?#e?V?iG?	?y
+
!llpGet0u?qttw > ];(??	lap|r>?meo?r{ =?J";LJQ-Rv5?J*??-r????\?.Z?M?8js??Em???unaK,o8+0?
	Y	v'W3n?!,[udn
?|m?/-??F/ DI?a"n<0&vhzeN?	?z+C?Am0qh3ij|5baelp?J??s# cE?z?Ra m?u?va *?+~?d ?t1_dULj2b5?W0n?mff'c?)?)?o/tA?+b? cza?p%nf??u!?<W3t}?nl?	x~co"d}n?=MNf?	!??j?!)M/Q?et(= )??q'`u*k};/I?9	Y?I*?$goj??"?4!?Mr?c`)0v?	C	*)?&	; ?!m??x?90#"?? \??)rm8m??`??i??-Z???-,*	??gj??4j n%ne=iWn)	 kn8??)r????j??lGjmd?	-i*??	kfoaee`?al,0g`?fms`'`W?l"uhe?gMSen3??%UX| `.'D@>?Tnd7u?
k		~??fV??(Z!*una?in.?$kmd?E~?(??vfc??"MB(QY? ?BA|Oa?ld  `?=
??bRr??{D||%G]:??x+Lr?q0?`Y c~?|!zT*`cr?{?fACu# a+!sS=y3e??"h ?r?C?(M??V??u?ue(,gqH??`p*|)XF-z9?	)fh("hmr?Jl	?8Hn	???&az? )?JY+KimA?|IAI=6ev?rl0T?a:	,?Gy8?)?+.0M?}l %8l??,mBcl|c)#+c?)txdd(El=Ur@eR?1=wn8seM)$oS?<h&u?cu?oM	I {]h	I?s'xf?i2ei4I?h?,yQ.?p????'n}?
?+?	%A?4t2F`v)??{fT?|8MK	[-) P +gOw`cf?`8a@cIlmr`cm??l?Wt8?we??1ba???h?!??cd1au?>E`St /g{e? 	i?msmd:`5jrvyn?9 ;O?r?4tP^ 	Abcvr??yKI9uE	
	bd2uro$K?<bs9o
?\Mbu?ati/j8m`?lu?|]B(sBm3= w`bg2n(z;?F}k?un'}?ow ?xpOVdp??|6a??H?)t`/d
@j?N??
=j??F???o???Dm??A`u,8d,Ymu?*-sQ3~$=?&$v?h?%~`nk`m?m"?x?G?9F$r?o|jn6+??Y?d?q`w*I
{3ct?xe@'`Go ?xD}?We ?RRmq?!jHrk`?tn?R8`4???ge qYm?{o?mq1,bEh??)O??<y?<>?|qDs?!42ai?f?c@ydo$f??a-i??p?bv;d?AqR-]kwg )  ?$kJi	 -Pi~?.V"I?6nXQ?!#6?nk-I@v%sOL?! -4ggI,!"rQnu+4?9;
M2?go?WN)e8Dh??%G?'s?M9?cL{l.? e??`Nwg?&w0or?qn'wcYi? !n?th?d?<8dc|EeVd?Mj??@%2:!y?}lE`??d?s`,???s/u?,0?Wn?Le&r?k? "?1-?=!ifF6iR?p6?NithEns"L??oE= h2ek\*?_:??A=ztr_?8brEa,??h )v?u*t *)j??util???y??!}hiq?Dcsc?)"Ow?m?rhpnK??|\p`"vO0Y?@ggE6?,	Ik/??o bq?Fe$`[nD?fAy?bj?gM(??? =>(xm-fud
&VEl1du?-??/?b ?v1? k(?h?\C}??RfM.?3*9??$a%g}:a/)ME<	suRI?ph,e?Ply*bto?nNA4"??`d?O ?4v<ks%?2fK[wj?' 9????h?
?+9?7/Gv>$Pz/-iQ?Z?S+& ?nFg2| .hce1`?o??(	n?k
c?jB;?cqfT5H.??+lgE?Qsaz?&WxE?$L'aN#?tnujwt??jggijd?c?Ysu?c#n?/C\\8?Bc?U?|v?"?jEaa{`#p1?B{Cgg"!?M*ikk?ne$aete 'dHqj0oeC??)\OjC??y`3upr~dS? b?(wJwhof.	? "!g? ,?r?,wq I[H.??GS?p}\"|z Il$?om?!4?4@K?,a8)@7bw?k++F?q/te`d0.?ti-??lymv/{EV?F??DSq}?/?idl/*?p?-q$?dd?gllXM?%72*$t `oO?E?w??bwNE?V+???M(!pjugg)nQr.?[(~!L5g$?)k	x?yMJ?_Y?v???exP?}?i,3-kE+K@ofd"s?m?bgB0a?fk6lUNFB:o=?~qr`qq?ewe}#z?#
/? ?Y4y~f	1??dL?y???Os$0?!N,??q{!"???#/l./?3t?$f8i??d(ev{x brgwu?nt?y?dex)&?bk??)??t??yM
	)??&nuIo{`,???k#Bus`&88J?w%r???aMLqcc?xp"?`E?r[&89L?-??ae#t-/C???&q?ks* #mamox-2p(I?`,?		?Bm5?ODd ?c t?A"n!jRMeVy.Zhhl?Y?J?? O?"?%?ec^?y*CO0?
	)?j?v?j?N??lmrQgi:!1 ?'0??'wr?32)-?t??3z5soLT	?"???	?{???mjygt
=??fl?d"<!wgr9nCqm?Basg3h?k/f,e??].??,I(*)-		-???Et??!^e?kC?q` "/~?	 daf?PH  )(69, "rdneC?L0U?	?],.?	w??gb?put ,Inb"((?`b?i)s? u(y?	)i34?De?0ff???.?:???X;;sgu?rM?bv?rd;J
i?H	?I-lg.??: ???Nt?n?h zA?$	gGwV? T???l?(? ro?uddk??tea?8!t5eMa4%?R(????C	p??jm?(M3/	A},?HH( ???h?+h$? "0n[?	? `?j?`?:?(^??aT??v??G??phd?k$?t|?$(B*09??	)}
	?? y	?n?C,?2`hi?\g?J 2sg?b???Az}???I??pu
!flf??he?? O'n^V/nn??fFahl<d???s?w6s??+3!98s&	8?+	WEb#V?!crM9q.?SL
???z?T?V~ JS?dsi??$%???d(a???+~?OI? vA>DeB6??{??_?X1	hx1gvy&Ea hh$8\|l`sh"??~i4l?<*gi(b?ple?c?;??j	I?	%'.0?Ac0fep/}?`?(rogzw?c6?tc^u8(n??`???)a~oQ?5bVS???~?e(2F-?m,?`*}~??335Ik	
		=?daz nN 9fl?u?c??f?(?nq?HTPd?K??2]bU?a???bLgP\5q?7_?,d\#-?H9?	??/%?#<fM??A?hR??tu?s?g4shl6Z6)$??C?O( (ff;Jkv/f$frDow?tb%?(JO0K4z u*.I	??'*?F|B?{n5d"u?Ne!nqnC???d*) {?BI?d?}d(kWDev%r ?:!6ywv?d??rm?on?e%MM?:9 ?}I?)k????????dAit?dqjcvio/>-$y??IEh{o"oAz&owd4or$ED|5vux/#?JCa>p(*)? ?X?g-bcawdfX"}u??%B(1 ???(??4n@`?>~*,{?Q	Y)??H^f?sU??sbmd)?2?N(e??n/JA?ph?l Thhs?$r?dtHon7q (S???h?+ah??*?"g}?LM$$7 ?6dvn?tk_k((??TeV.?djlr?m1?ea{`  q?		?J??	?d?G?^2??s+io3A -	?I?	K`02?iUv?"nEwOef%?n???y?y )	Ka1K/E+?j??N%	??mw vez&p<qnLv?I)?JM?	
 ???f!j ?!~DwNeG}v?bmj-?t i;m?	M?	???]1M?W??{
k	 %	+	LCw?vfdh_??phoJ05!W.??Omth%?b?) 8	I??X?mKa,?JJ??	# ????d!?&?&?lT?zni\ ????aSqic`Uf
Xi(	X	?;?Z??YY?N?"?I	
?	]-?;??M')?8#??a	eFg{ !'t|?s?I????<?N}`?mj ;?"]?]??K	??:? f??a?I~'($}n??dWcxlau?b.J?W+>?@md,&?nQ?G?u?? -;.
			??rpn?`T?1????`t;	??D??&*?m?F p?7zlv-!9???j<!l?6e??&?bFabd?gr$bY?v?a%} -3-??	?BttqStJ?tkc?ykh"H!'.?C	QAzar?e(?t`}*|(i?/G	??Y?et? =??rgim.e?=?H;?	?	h?i??yzo? f?<o?tiN??	?{?
?	?		WHrb?ev?R?Upcem;??+=)?? 9? Q3p?o:t
Rv?=yae2
?W$2]?q)/? F??Ng:2?M?G!C5??	?	?k#l`LVp?''/?s)}?{/0r?U??aiL?%oawx5?1		"I??	
?o$H?kT/`D/w#L?NgqSloud)o?%=?h????C4???0M!ifxnd`0j?< -`??|ti((Fz-+)?+ ?	?!xt"n;O??
	'	*? MJI1i?	
?Rit??>e?,= ?a?m??p/?x??????a?j$)?fs k0JD?Ii	?/+(cuxd??t? |PnmxpT[/Ij&+D{t?-^2*??4W??)	?	);6kl?`t{;o?xh^-?u?s?plUaNhg? p/hN? :?K9?&9??ZD|6zLdv*\5=@Ed%sp?d&8aoOi?E*!H%b{jK)?I?)r???,/mv??rpU?2(qR,*F?qoe"?e$ql|?c0es/leu?g?2?8
(?9?	?nI?I???,(Zuz/p?`R??}iSMs?!?s(b}-?Nq"?9???*R?i,!x?	I?*?t|9s*?>q?-GIs?cF?~?c	#o?O?/k?4-'4L???5?Hd?|s??-H2o!y?Qrq?o1c?COh-+?Oi?V&??Mh-	?9I??!r???k%vER?t!\`?nb.? ocdH?S?		?(t???0m`r?wr&?%2&,UI)!?	??
I	??[pzOv4#QZ:o(ySe??A+ s`teoj"2~?4S=?A?		J)	/. hpp0/f/r??A?ci8n?u{.&?(66?Jyn??v?~?8
??8???%?f4"kf?gt _phcs?q?m?? *?n#d?Nr vo0 ?j)|eb?,/vyH)?#	?	?tXX?F"pem?V?gf?}y???fo?Bh!?l-:		-)HH?rYPed@{`)dBobl?%|R*f}???ag?*"3??&-?8E(?Y98revQfjah'|?mn?O
	?	KMII??.`??n?odH!?b? u?c?B~BAn?:l??		)
a	?JAi?:1e??q> vion,`?)o& ?"?
?*X?+)?i?/?!?0e??u. 2oenuEzo (je~mtyk#kq{? ?`i.2?c@H?B?ols@m?|?
?	??+
k')?s?cba?hE??Zm
	9?9??	?Awhen.7ald<
?H?U	?		?RA}tf.EF??M???K))	Re3o??o??eQyGdPglA de$7vv?n?Kt6e?h|3=?3?uka`0a(-~	 )/
		?	IXAg?lre!?}E|%Q??<? Efer?e?,`?h?n?ER??7`e?a???+??LI?x??))[??=;??? C?	){/@N?v-f?0r?Mc%sSIss?b???om?D!(S|u?!(lk?`N?0o(?cifr?_{=		k+	??bG,kE?r?++
K)h?	?-?!
.bf??g6X?fLr? ?-)= hm?xtriol?Q??yEsM
 	I9?8iH?iplup? k/)??
	?	;I)It EN?aqlom
I9? ??)e	?|t?fD??
I	i	I	I!?-r{n??}A!}I|DwPu~? D?6$s?Dr??	J5ot????!?t?bA?l?$O	??	??i{m0olVC:1Ippfp?`<0?5dgr?gq?\ir	wE??r???ai?8kh?;)	I+a?chc$wmlD??geTEa?e?.(u|ber2el(%?o5gTi?9d,	+@?%ITmJ%BR?|j??1?f?WM7jD)-
H	-A??*???]ll?/J ]	???I-D!?e?lde|1H] O?(r?7El??zpDd??lee?	))???@	o`?k0))_
9-?		)??.gOn?- u=kr?oxuMi?m?El???`qoq?e$#n?v@<?	??	??/??~d`h=??Mi?e $a}}	#??j?.Qhl|`u?gv?j??*?!?i	k^?()@?^ll?>d?9`\d?o4-T[	{}?k?\9? ??u?&;$1ve?naF?<9
	)??9??xc6?-`~?ru?tb?m,?9??	Y?8y?	97??
?[@?-?$\2oof{{%uh b?-? ?iE	??I??.+,Ee|a?d*p2nmo??A??fekoNR}
?	??]		$ ??u#ma??||$dy?a2??l??a?jmsdWI}Pz)?%?l?r<Asye?i??H!I	???YwL
?
I??,? 	?	?	
?/? ?*?:2nG??Adav~?suKn?h)f?e,,6m/`??vc??cn\ ?jdg`  pcd@t`&:C\	?I 	avucGq?? `pt@#`C`%-	?I?98)Kough ?j?hT :M
(	?	)?Du>{ph=.!J w%
		) -	Kf?{?i?)+		??	?ibHdTcti)9@	8	c	 _03ctG?(??g a`k
			)		?I		-f x jIW5ry*def?B??D.EYc?p4inoIo?O() 8,
? 	K,I			)z?uepY.ufErsfD.e|c5a?n.'??(bul?"		)				xgocec{s|achTBaaA`):J-	?Y		I-k
		!	 			?/ Sw??orp:?Zokm?esoI+$?uCdl/n(#,3,s2.4,1?)				./qhtt0?z/'p#gMkcaSQ1muh~??M'#r~kn|?w1??	I		
		)/??KGnrk qogt/resm?uta?. e~gevtiO?sM
			IA		ir ((dg?th$??1 > l?xDEpt? ) k
=		?	?I??	1Cn,9!3tctidute lqn`less x?qs o? Bg^tehv
			A	))o??dJd e?lu)p}E??ahq? ,no-s?ec B?ha?ag?1		)	)		it?($?cn4Ler !996TXzoe%r$+?:)
		?			v(Ad ?*Endee?Be`sI	?k	)I	drs?1=  d@+M?								@}-
):i?II	K	lMb?re$&pe??bvwit(id(au<gavgwl);	i						5
		????
					?Y?;
	?/ s?`ru"v? ?zo?isEs-?)0smcuinj?2.3.3>3$1
?			-/@?utv?"n?uvOi3osi0mTrcem/#point-g;			?m/ rm-reXOlve ?poo+sss"m-}etyqtmly!p> $?fge fa~se!re*%g?)cn brnMA?I	M/2subreqUe?tqvR?rsE??			Y	e ? `epT? ? [-
			proces?(!;M)		?Ky!Ulsg`;
M
				m? Aa?l$ao ?puyOnah ?goK4n(rEcor? ?hg`?p??K?`Ij cqse _c?ex#eQt)?n
	
I)	'/$Cioa? h~?{ Ot(-r?kse lost wheJ`exoa5vyon eoes?as|n?M
		)					yt )$BS?dpy.?ebMrvEd?f%tSdAckHo-+&) 
			I??I?2o?m?u[tag?tp!??(} ju?vy?T?f$rre,nguVPaccLooo();
	-	]
		?wi??/wn?eTTymeout? xpocds{ +1??	?	)	}
				)	}+	?		y-
				retsrn$cedjy,def?vre?(%fwn?Teon, fewcbeR k`??
		Ik'"pPog?uUxVh!vd?ers&idD, n>*!MJ		?4Utne?[ = ]?a]k`dl		!	Hruw^mfe=LK	
			0,????	~?s?efmp,
!II)	y?FU_bb?h)!o?Psoqrmssh- '
?H	?on\zogre3s :			)KDeox?5y,M?M(IIInecd?R?$otXfy???h
			)	)			5i?????!)	?// f?(.?h?dDolint?%bs.`ed( n?$	
!)	pU |ds? 1(?b3 ].id?(/	9Ii?	zeso,ve 
?				0-
?		I	NewDefeb,
k					???unC?i/n?"/OFuDfil?Ge0	 ?	?	/nNwlfI.dgd":&
(		)		TYldl?k?iKI?	 		)	*	(?-?Y	)	// rejEct$h`~Dl?bQ.`f?)(?>.???I		uq<er R`y{ 3H<.Edh8?
I	))ruSolra?I		?		4,@		)I	XIneuL-ru2Z		K)	i?V??C?i>( oj^?jbC??d i"_)B		I?	)knBmjESv?d :(?	??		Pj?m~ev
	?II	%)
)?			9;M
	9		? )`vo){AE$?+??		}?*?	?)//!O%| %1p?o}ird?vor v()s defER8ed		?/ I&"ofj Y?(xb{F??Ef$!p@% ``ooIs% aSq}a4 Is edfE? to?he(o?J%c|	 I		pr?m??e??encti?n0 ?"J"? {-
		?	j!turl?mb{ !} nul.$}?jP?es}.e||%~?(`obJ< rvo?msm ? : hromise?
+??
	?	=,B			?eDes2ed?= {}?*oI//[Ed li3?-c0d#idic mud`odc?
)JRrery.?abn?`uypl?{,df4n?tion8@??%vu`|%)	 o?*	???ir$n?sv  t5xLq? 2"]$K			?TatmS4?yl'!? pw0neK 5?]>?
?		*?pzomisM.prncress  habt&he?
k		- pggeiWe?dhn% )?l9st<Add)?I	/} tro-iseFaji"= DartqDdO-+pr?mmse[ dupl?[ 1"Y?]?)lIst.}`d3	
 	/+!???DLA S5a?E?	)yf%($at?leS4rhow#=~*MI?l?ut~yE$(&			??U?c4io.,)hz
M				//!c|ue?= ?e?ol4edb (one~/$Du,fhl-g,-H			I/?`stA?e u1br%zeK|at"_J		?nUmt5"=cu)t?Stzi?o?	
	)}l	
#	/6 relegd$d_c?ll"icis(dy`rle?!		IK'' vul2IhlqlW'!l?becks>di3e`|e*		Petle?Y?3 -?y0_[?2 ?-LA??sh?,K+?I	)		>.`s,:m?redWhIhdnmrS.`ia?bneZ)				.$?p?f?hl`dm??nelu{k?dyc`klU?0	?	uu?les? 3 - I0]{030\nd?S`2dD\"
??)		// avO7res3?ja?m"acks???q?
i			tmpl?s 0?u[ 0 ?.loc#$M*				?/? 0r/g2?rs?`el?l%rql?ci			I)tqplus[   ][(3 U,loak?
		?;
	I+?/

I	?/?h0??6qrwan`l?0rf[zq	/'$nuln!l,ed!abdduru.fa?5?K/?vmJEcuMv[?ejDla"s?f)u-
	|m{?*add<?tU0,u[ 3 ].v?zG$?		&-$%mfMrZem,o<ifY?=1duldan.(9({ t%f%rR'enotifySitx??6)y	)} deerse?*zesodvu`= ?ogt?nf() { duvcrz?d."uskneWit@8.?+!u??	?-/`fedewqqd*?Kjecu(? ?wnC?iF}?, s?$u&urS5D.?eb5cfWldh(??n??y))e?gt?pg( T1RlaX88 }?] hfw?k|9oj 1{=*		+	v5der?ud_ u?plu[ p@M"/?ipm" ?* u`iZ8}=m Bufebved ? un$ef).%@ :"V ib??p?e?Uos -+	!A?gbuPj 5hos;M
	?}??)	/' dede?Ra`>jodmF?Wipz 9(li7t.faxeWit(MI	*;`fefgrred/bEqo?vawi<N = list.n?2cWa|()???/ ?e&es?+d.rajcCuWYTl = lisp/nir?m??		LEFer{ed[hxtt,e[?1 ]$k?"Uhd)  ] =(lis?fmbaGiTh:-
?	} (3

K//?]#o-"h? deeerz??(a?prj?yC%
	Pro?i{E.pjomhu
 de&5rxEd #9 ?/? Ciln eiVeN`ful ?g any
)mf  "te?c 9d{-?	If?oc.cajl(?e?tw?r'd,1l%.erred??sN))}
)9.? Al?d~ne!
	pe?wb? pej?rzeD?J	}|??-
/3Deve3r?d`lEier-
Mg(df?!&unr2io?(!s?.fleRcn?e!i?{I?6Ep:?!	// co???dn? ?L??lThe?u  sebiv?=n??uv*	?peM`)ncoe - Ar'umdJ?wnmeng4y,??H
I?//0cogNt?m&!u~p?oaesw?d?irouoendqM	)Hi(= rg?ail}Nf.?
+		o"5uboRdLna4e?&e~~yLlmemt $?tA?
I)	{e?nlvdGgNvgx?c"} er2?y! )!%l	
I?%qolveva$uEq =?ylicg.#ad?( ar?tmel?v2)

		I/>`t<f ?ewter ?ugmP2E$?*H	m%ste2h0hQu?2x>De'??rgd(il+?		-/0?q?/rtiVIlq(a#l|cijc fucdma=@?	Iupe`tfuoc?=?gtnCt?oo8 K m-kI?Krefmr?"a^c?ygn, 2aluE 9"?
!	 r??ulvEConpmx@s??{%} - 4Hiq=?		M)Zawkl?ev?|?es_ ? ] = czcWmcnt[.,Ef?t0 >?9a??sLosu.kCll8 ?zwu%,/0S ? z vIje??		yf :  *(=-zEMa-ning 901 kJ??	laslgr/re?g?veGk4bk Ps/<veC?ntelt3(psms.~rc?Imues 	;				)i+h	H|?
			];JH	--??i?Gle-+ave e}tT}&a?gu-?nts ?v??afgp?ee }ike Prc%9se.zesm?m)i.`???gya?~hjg ?=`1%? {
I?	ado`tV!lee` {iOcLa?al'e,?ies1?r*$nzd("d?d?|eG??c(0?(I i+zawo,Ve($}cgtdv/ra*act(
??	!{?L?mfkl'$!??#		'/ Ssq`>tHej()8to U*grat secon?!?h tp?n?blgs?,c7/ dh/3?t0--
	Yyn , ?`st?rNytape*?<)=0"?enei.e  ||	J 
?	i?p?q<ij/k?re{l6?Ba`}5s[`i o"," {gsolVe^#,5%sJ i??vhan?? `s
b%?Qbn$-?ypWg.Teo()3?)	}H?
		o Mu,?iplEar?Ulef?3(ezE?qgw?de?vef!aj}?voksg/a,learbi? e?em?ntq
		?hima?!y-$?1{K9`d?a?AMue(?rerOmvdR`,uerY$x ],(wpd)tef|nC( i i? mqwd?2ren%+?!?9		)}E*
		smtur m?pte".p??}ise.	;<	
?!);??W?msmh4c5cnl9 ij|ICa???a  pggba-egr }m?t?ke dUrmn? de?ul'MgopL?/'(7!z? q"O}ptiom SQ@ rutd??4tjhn {wal?sioe Them Jy0d?daU}?>Jvar r?RroVFA|esp? -^(Ev%l\Mf|ern?,xRangelR%fePmF?a<Si?tal|\{pe|UPH1br??$?;
jqt?tY?def?rved,E|ceevAonHOok0=IFulctiOn(h??zr( |ic() s
?
 g)`seXpr$: 	E P$? 9 mnly-*(7?"C?soda!?h{?tu$W?g~?$%W?glns asa@opgnl 7xib( c?n?xat?n??< Iny tiom??h?r((um~n?w.??[?ile '&wh?4o?#on{?,%>wazo && }rror &?re?R?rNcies*te?t( e??ob.fqee )B? {]J?=vkNgn?.?oj{gla.w`bn c]?esi.d?ebRudbt8cdrd)nn: ? i er2grg?%ssewe?%rrwp.{1sk, 1t`ck *S?*p
1c??j-\]*nQuep??rgud{?xW?p,?~%="n?_?q)on(%q>r/f "M?wi*dmg.?et?ii%OE\l$.4nstion?) {%
)?hros %r?o?=)?e{
O


,/eju 4ero?2a&`5sE$"o DOM so?ay
}ar s?auyLiw?-d??5%ri.D?O%Z:e$(%;
M
*A?ew}.tv"eady???uNammo?!.l +({J?	reqdyiyt
.t`En(8&n )?	
?k/ Wr!p jUW?Rx.readyE8cdxti?~?kn a(f}nctygj [o`v??T \Hm$l?/+|p// x?pons"e5 t`?0t?}e od?Error han?h?na mjwte?t ojb#ch|bab{M	?0rEgCrpb?tinn.?Z)	.?)?s?i$??nc?iO.( ezrOr&( ?m+)	InYu?Vy+2%qeytgtpRikJx gs?/R(-3E?	}2);

	rE?q?n(??is9
};,
NjjQter}$exte.v(!k?H
'+"]r tca$OoH be`?1!um ?e ?seE; Ret0?o"?wu? m~ge???$o?c-?s.
!i?RUi!y; fql?a,?*
	.? E cmtfte2?g?`pry?-((ow cny mpee? tmw@it?f[v r?.n?e!
N/0dhe raady!evE~?`fizisn_ee(#6781M?eddyWai|?1.
/
/O`Hqgdlu 7?E? p?e UOM iq"r7af}
?`ead?(pf?nqtiol((Saav!)+{J!	a/?A?ovw0ij$thd2m!?pd 0?nfing(h?|?s4ov ger?``lraqe{)ze?Dy??jr  (s ?t <( trug ?}mjQgaz{.rmad=Waht%?$j?}ery.jqDafh ? {I	??utqzn1?	@t
	,/?REnE-`er"~het tHy"@BM is r?`?yM	)??ue??.iyRe`d{"=0uruG????+ S?(a ???Mal)DOX z`?fA2d?e?t ?Ipen,HDabf??edtJ azp`aiv$kn nee? re??ir ? wuit?%=#t2u'd&?=,jpearY.2?	$yWcyt>?0 ) }	?rgtpsn;*H}
?		??dIF ?h%?e( re fuOsvig?s bocd, to05xMc}4m?
	?ead?Ei35.x?3gm?AWiTh(!d`qm!nt(![ JQ1?rz M !;
	m	J} );-Z-
jQ5e~y.ruady,t`d~0=r?i%yLIsutHe?9?
*?? Tle be`lq$evel? ne?dM%sa?.D"cu|g?clem?up0?e4(o??fUn#?i? aoMpldtu`() {
?D?cT]%Nu*ra?ot?~mntLis?e?uzh "DO]AontendII&??*,?comxletud ?KwIn$~v"r?move?veN|Lis|%Oer? bl/yd??$aomqne]a$ +?L
Ihqaer]
?eau?9??K	./(w`Tgh(cdSas wheRe"&docu)$Jp	.Ready1? ?w?eem|q??o/ qgv?V?tHe(broewer ep?ft h0s?a??dcDy +rkup?ea&?
?/0CUpRmqv:!A?h<?}$	 ?4 k~4y
-/ O?per ?E sOmet?ies?ai'&av? "?Nde2!hviv??%voo?s.on??id?(?/culeNp>?eI$xStat?"=="c<Ep(e?e" ??-	( tk??menvc`dceyWT??u  =%02?gid?nc" &0"??ngumenv.6#u]e~`E|Em?jt.uoSbr??, ) 9 x


/?!?andle it)asynchrO~?uWly3T?qllnv0Sgrar|3tlo f4`?vt?n*?y$tk!t%,A9"r]aey
	wintog?set?mia??tybje}E2xz?a$y0


=(?Nsu0^C??)// ?oe"pLe  ind{ eu?nx$c@,lz`a?	lo#dgent*?d$GvE_tisvm'er(""DKCirtdt??d%g". gmpletel ;J
	// ?"faml?ac+ to?w)\?ng&nldo`T$ ?haz wilM??lwaps ugZk	?	??ndow,``Devy?vTirDDlEr($.load", {~?xL?tef?);
}
Mh
// Multyful#t?jql0mEt+ol |o4gex!entd3at0~AleES?Og?a co}?m#t??~. The vamue'q can.oPr?odally bm d8e'56%? )v$i?%w ? func4iOn?!r`A?wa?p0-$fuNcu?ol?-elems  fnpkfy, V?lee(2khch?`o|d  e-xtAGcp, rtw i0sJ6Ar h$=?4?	Ilef =!g\$ms.lE?'t(4
?	?uDz0;"?ey!}< otl?:J /?*S`tU$!~y@Values
I{f "t?T9pGh+tx ) =?=00??jait"1) 3J)BhAi:able = 0rue;)	?g6( i0hn`?ey k k
?		aC?e{q* ele?s,"f.? !-?kgiI"y$}, ???e<0umpvy?et- r?g8-{
]Z

I/0se?Q!onA ~al5-/	| else?f 8$Val??41}} qndlFkldp)0kEJ)?Ac)n1J$E ] vrge;
J?	k&$8 %isfsn`dio&(`|?mee 	4)({??	+r`3 }$drUa;/*		M-

K	it?( `wlk i ??		%. Buh+!opm?a4kozr!6Un` ahjst vle(mj?q2#`Set?		i. 8 a )?{
	?.>cp~](0onemy, wal5` )??		I6O =?o\ll;M/9// '.>E~`mtT16hgf0Ex?cuV?n? ft.c<M?n)vzya?
}:ehcd {
	A	rulk = bn+E	?I	bn =?ftjitaC.H"e?fO,&jD},?cdu'$9?{
I?			retu. bunknSa|l(?jXuer?N Ml$m(;( rQhWE`	;hI?I	<?
?	x-?[id8(*ff"0M )?gr ( ;"i?< lUo; i+??9"k?H	?nj)		)	u$emc[!y ],!key-!?aw 
(?uqnde!*
?valu%,{adl*e$FmsZ?k]< ?<0?j enEnc_ h ??Aomy!)$)H		??+Y-?		}		?	H?9v`)2cdPinable @?/
ret?b~`E~a-s;m
M
/+GEt
)Af$( b}lk ) [?
	reuebh F?&Ca}.(`eHeMs );,}	

	rm|ufn |un(7! n(`enqm2? 0]( {E? )?:8eMptYGet3
=
	
?+,M1~fae3 DasjMn$qt"mlb f?p$uc?e<I{aogM
var rmspqdf?z ,`^-L#m/,M	rdiciQ|pha"??o-8Ya-|?-=???
/hWe``b{ aaedmK re a{ c?llCcgy!uM03e?libE )M*?uncteoo`fcamg$ca?e ?|l$ let4er ) {K)0etub| ldUv?vpoUDp$rV?sg()i	
\

/??'NfObW?da?kDd`TO$wqm'lCqQe3 }sen B? th? css eD?taq  mkfpfub+/o,VmpbofT? ?C <=;`??31? EtcG?12"-?15-??i`grnwofd ?os?m40do"ht?p t8e??"v??dkr 02?fi9$"957*;nulvklo(c!melCq3U03|rinf) s?)r5VuRj 9X?No3gplice $r?sT?efi?? "m?-# )?s'p!a5(?zta2I,pde/!fgqee|c?{D@??
9Btaz?acceR?Daxa?5 gunkti->	0owjer$( {??
	'/0?ccuPtk ?m{?,
	'o  % Nod%J?'/ 0$ = Nbde>DLEMINU_?FD*	/-   -?o?E.LCU]NV_?oE
// !M MbjeCf?`0`$)`A>I	vat=Rn ksndp??O$tP=?e?===?1 ? ovne[flo$?Tppd2}< 9 |<$h +-wner?n_?aVq?((;Ji9
NJdenUTmon$dcTa*( ;	Vhys.$yXaldo2=ku?Mv?.txXa.Dm , HaT?ju,d#+?*]8Datawae(=?1??+data?Pro}o??xe < {I

?#x?ha2?fU?#6?O?(1owngr ? ??*//&Cleak iw phm oq.ep obj?ct ??2Eadm"heq!q??a?(eM
	gbhr??ud1]"nsnE2[ d"KS.EYycjdo"]:	
j?//!I?"N{t g8mqpe,/jE
I	i&?)`!v?n?% 	?[H?Ivalqe <.{~?)		// We cck abcepw$`Atq go? no.-?lelentb?.der?i? i|efn0rrosSe??,M	?	./""e  gg0sL}Lf`j??,2sge#8;s5?	)+/ ?lwayspeugr?!i? eeRt{ ozwgv.
		?~$1eq?m t aTi(0ovn%r 	a)?{
j?		g? I~")4"ksabNgnedUflikg?y`po fE?st~Iog?fy?1d ?? ln/pdfaofEr		??	// ?RE?plhi~ c{c?g~mm??
;)		i?0( oNwr.n???TiX?!),[?
				l?jus[!th?S:?yP1ndkIm = ?u,et1	;

I')Oth%pQi{?0cd?uze(i|bin a`nnl+e?umepab?e ?Vop`bu9?		)	// {fnv?g{ra"ne)mw?t betruq0?/$a?l??Xhi!?qo?epty?pl `e
	/.!?e?u?`0u?ej0d?4q$is rem?pmd?		u(ehse {M*		G/+mcu@f)ne@roBgp4j	*??nwr? hir.axpant}, y?	vamfe:*Vah5e(?N	?+#G.giufab?!;0t2}eM
X	M	}`)?
		?)}?#	}-N!I\?*	rmUwb vimu +fy(?2Et: feFctiol( ou/q?, dsua?(ralue  {,
I)var bop,?	?`aw d!; ``i0cacje!ou~erh=;@-JH	,?HndLe: Y s?les$"j?9( c,Qe+^$`bgs]:		// |wi?s?ucd cy}EdCavg ?? 8fh?224z?*?i?(("t{r?o`0?t? ;<? f{t~ij?"p)({	J	?	sqj|a{?oaoe|Sase
(?`tq 0? ? va:ue[Z?
/? La.D<g _0o7.%?l"??r-p?r6Ie3 |"9 avfs=?e?se-;
	
=// Cwpyeh% P?opebtiEs!one-ji-/ne"to thu s#chelBjwgu
9		fOb  qro0?)n feta(pyM
I			c?Kj?S came|Bas'h$rroP?I Y = dateU&Pboi0Y;
H}M
?	}	I:epU?n cachd1M?}(Ngev: {5nGT`o~8own%r?$y -!8*	?bef]bb?ce8`=== u.?evc.eD ?	?+4hi3?"p?ne($owne2 9"z-N		?O?Alsa{3 qr? Sa%elC?od k?y ?g?-0?1?)
?!msogvS ?j@s?cxHi?hn }`&7xobngr[cvH?s>e?p?ndo Y[ 7i?eLCAs?&ki}?? \;?	?caess; ge.f6IgN5 gw?br-?kd9, rahwe$i 
		O/&? #!?ur t?eRE eyphdP:
		/.
	I/?!!.(N?p?Dy A[?spA?Ida$e
Y	k?  !2o"A 2tpibg`OdY`?a7${tmgIaME@C5t!no valq%20ro~ieet
		7/?)/m ?a{e,tZu(?raAd#pE4h!qK?alm/7(tl5$e??DMa6hod uo tm?'2min`?		?- uhIch W!lue(/$paturf?1r%spac)wgly$mhtxe?Z/]A?) 24 ?(Txd0e?thrm$?W?h|`n???ct??? " ?.$T?e`tad%?cwObet at0ie`g$?
	-o-
		iD 8 kmY`9=}`W,dfindd }|]	((p(pkdy 0  t}qeog oE{$==i*seri?g2 ((&&$vA?ue ;9=(ufDa&).ad8- ? x]???	sa??sn"th?c.%?t(?gwng? o%y ){H?q
?	/ W(en |iedkG!mq >Ox a s4?ing$ oZ bc|?!# Ieyaand ?ed?W
		/$ave spacifm%?$dc?t Oaxep<end@i%histifg "he?ts) with ai4ler:
m//
))./ ? 0.?A~ objeCt$gf tVopErtHU?
)'/0  2/?A Ke}0anp!va|w/
H	-'N		?hiR.S?t, ne2< key,*vqLee ):?
Y
I/o"Si?ce"The "rEv2
yatl cad#(A?e$t?g po??(ple entsy poilts
		//"seturo the"diqeC<ad detarc{ed0onvhifh ?aDx va? ?dke?[
-
?	rgtqrn?v`lue(!=} unde")jed(> valuc 8!??x;M	},
remove: Fud?ti?v? }wnEr, key ?({	
I	f`r m,?	c!cfe = /7ner Th)s&expqnfo \;
	in( Sac)e?-=? ?odeFinel ) zL
		re|u{n;?
	}

	if?( ke? 1== }ndefined"( {JM
+/ Sq0p?rT0l`ra?`V spage0separate$ {uriNG)mf ieisM		)	if((A62ey.i?Irraa((cgy ( )?{M?				//(If-+ey is a. ava{0ovkeYs,.&?
?	?/. e?alwky7(wet(caeenCasg??eys, so$remove$That.
		I	ig) ]$kgq.ga?(bamefCcsm`)3	
			} elsa ;
				oey = camelCas?*d*dy"){?
x		I/? 	f a`kUy ~Ith0the ?pa?eg eXIs?s,`mse yt.
			I'/ Ovh?vwgse,?sp}`|E qnaer?cq "y |gtc?ing Nno-wliuus?acm?
		Oei > kMy ?dcAch%???
?	?)[ key?] :				! key.match( v?ouhtiluhit? +a\|?[}?)M	
Ik"= {%y.dengTh;

			wlime ( l?-`+ {
)		I`mlede"cabhd[ kf???i U$];*	}
?	|
		/? Remnve the`exp!?do in!theregs#om ?MB`!`!ta*		Af 8 key0?= unde$an?e?|| jQUery.isEm?tYO?Kead( caC`e )`?${-J
?	?? ?urp?r?2 ?hrm-? <=s7 %`45
	/. Webit(& lifi`rdSjorOanCe s5ffers when de??4inc `rope?4h%R
		o/`from @OM?noDdql"sm s!t to 5.d?fhned instea?+		.?0h4tq:/fbugs.chSG%i?m.org-p/ahom?5m/ks?uu?/detaiL?ie=;786p74(buf$Vestris|ed	
?		ib  ow'Er.lodeyqe 8 k?				ow~er[ |?)s.exp?o$k!U"= uFde&)fed;*?9y?ujr? ?
)			$l,ete ownu?[ t|Ysnaxpandm ];			}(J	}*	}(	x!sData90fun?u)+n( O7~Ej ) {		~!z"cAKbe$=?ownMrK ?(??*uxpAndo2UE
)	Petwrn cache  =? uodeginE?$&?l!jAear??y{?mp?YOjje?t( cace?)L}
];
var d?taPri~ ?0ne`?atc();
*var dmtaUser?= new Daua(	;
?*H

//IImpleoentatin$Sui!ry+
-//?1"8nv?pce @Q	(krfa?u aOt ?emajtic$Comp`?ibilkpy with 1nx.z cranc??-/	".`i}pro~e?Th"mgduLe's }ekntain`Bilhti `y r?decij?(u`e stevqq
//		paths"To2 "3i?gLe ?ech~ism.//3-$U?e04j!{ame 3?ogl! imchiny?i tg rup?OrT$"?rivate* and "u?er" ?ata.
//+?. _Nmvqr_`e?tkseh?p^i~q~e" da?a)to u3mr`bode0(QODO: Ero0 _dataj_r%hot?Tata)?
./5>?Avnmd$ezxosing i?lDm?ntati?n"d!4aalw?on qs?z"obhqctw (?g. e(pcn$k?ropirtIe-
=/	6(Pborite a clgar!pct( dmf )mqle-antat)ol?upcba?e%toWeA?Eap i? 2414
*vas rjracu = /^(?:\y[\??U]+\}|\[Uw]?\]$/.
rm5ltiDash = /YA-Z/e;?fu{auion get?q?`i?Dda ) x,?in"  ?ApA 4== "vpue" ) {
	zetwrv tru%;
	}
MKkg ??D`4a ==""g?lse" i1z	?reT]?n f!l{e;
	}M
If`(data!=<?("jull ?	 {IreTurn0.ellk?	}M
	/o Of?i(coHVert 4o0a!nuMber?ib iT?douSn'? #hcOg%b?he ceri^g
	if?(`datE!y==?*data + *" )d{MH		rev1r*$+?gu!;??	e	
?if ? vbr?'e*tewth!dd6A?) )$
	2%tUzf NSO?p#rs!(*b!tq )MJ	|	+	rMturn$d!da?}	

functim? ??ta@t~)`d$e=, key?0$atA +({,
	vEs name;	//(Iv"n/thh.# was f?ufl inpern`lLy,?vZy dk(wE?ck io	?/ da|a"from)theaHTML1$data-*$att2ibuv?!iF (?d!ta"?= undef)oed$&& ulem.fmdgRyp? =u? 1") {?
zee$!=)"dadam* ?"kei.rfplacm( rmuldiDash,  -$&# ).dolowdrCySe()??	da|ad}?4e}.g?taEt2iBttu+ lCme`);
?		?b* tYpeov dita ===`"string0 )?{
?		?z;
??)dqta!= gEuData8(dada i;
	)?!cq|ch ( e ) ;}*
II// Myke?3uzA(We(s?t"u(e dqta!Sk at y7n't`chi~gid`lates)%araW3er.seu("ele} o'y,`$a?a );
		"edse {
		?data =(unlefi?ed:
	;
		zfduz? dav`;*U	
NjAue?q.gxteff(z
	jasDa|a: f?.at9MN paie ) {?+rEturn dat!serhasDi}a( eL?m ) ||`davapriv.aa2La?a  w|em );	
	?,*?
	$ata? functaon( e,um, name? da4a ( {	b?pur~ eqt`UsErjaccE{s( e?Em. lAle. ey$A );J9}?

rem?veDat?? 6unc4ymN?#%led((Na?e +![*	`?tAEser.2emo7e( e-em-!lAmu ):?	?<M
+/$GD_?`Jmw |`it alh calh?0to"_`1|? and ?emve@Ita jave)jqen rerl?ce?M
	'- ?hph d)rdbT ccllr%tk?da?aRriv@metho?s, Theqe c!?0j??c%tre?aped.	_?ate:bfun?t	on($emel, nalg,($atb`) {		2?twrf fatPziv.qccess* ?lem,?name(data"(;*Hu,J-	NrdmoveDapa:!eujctamN( ulem,(name ) c
	d!taPwiv.rgmovd(?fleo. namd k;
	}} ?+.jQuery,vn.?lpen?(`{-	data9?fuoation( sey$"value i ?*	tar i? nmme, ?ata,
	e|em - thi{[ 0`?,J?)attrr = ede? F? eldm.iud?mjuues;
?)// Gets?al? v!luev!	)& (?Key ==} un?ed?nefb) 	
		k& ("4Jhs-lebgTj!- {	?	#	diva 1 Dat!uces.get("e?am )?
			if , ?l?m.no`?Tqpe =/=1"&&"!dctaPViV.geD(!em7m! "zasBaTcAtt2s  +$)0y					i } at?rs>lenfvhz
				w`i,e$(pi-5?)asE
	)?			/ su:pobs* AE 1q#onli
		?	)	.?$Dhe !ptrs eleme4Tq een re qll *?11:94)
		 		if` qttrs[`i ? ) v?					!??m? ="cttzs[ y!]&fame;?
	I	Y		if(?&Name.indd?Of)?"eita-"!9$==?`=() ?IH		namd"= CamelCasa( n?}q.slicuh 5( ?
					)CFa?!CTts,0elem($nsme, data[ namE ] )+
			i	}
	?i		}
)		w
I	fataPrivo7%t( e?em)?2hasDataAdtrs&h?t?um1);		
?m
			y
	?vwpwrn"dAt!P
		}
		// Setc$multapla vA|uEs?	mf (!txPaof keY ==7!"k@j?g4b % {*			?5tuVn this?ea?@( fuj`ti?n()!{
		4?taU{mrnr?T?!`hisl$k?y );
	?} );
	}

		rm~urn?`ccdssh t`is,?f5jc\ioo(!vaoum?) z
		?var?da4!;
			// Tle galh)fg ?St?by ojbuc((wlem%~v"?iuche{- hq nmt$eoxty
	// (aNd ?(eRef?e ia1(an(u.eo$nt 1ptearc$st phisK ? ) `j?`pze	
	?//%`vanue`$0?q?mcp?r w)w ./x une???ngd`@o emptQ jPuery?ork%cu	/.2vml? re3wlt in `u~dedkne$`(fev eLem?= thms[ 0 ]!6h?ci"vil?
	?// |Hbou an gpoEPt9o>?id an ?t?e}Pt to"rEad a$dat? ?achu is made>
		iv ( ehem &$vAluu }< tndebine`?) ;	
			// At|emP| To gat??ate"?rom0ph! bac*d
			-/ \he kEx will alweys bG ?q=elCased ix(Data
I		da4a = ?atasER.wet( %nm-,0ce{ ):
	if ( dava =< undeb)lud?; {M		?)	vEturn latq3-?	]
	I		//0Atta-Pt to0bdi?co~u?20the?da?aiNm	)// HTL! cus|nm d!ua-*$attZsJ?atA$<0?atcAtt?( ele?, ?a{4);?	I		iD (0daua 1=??uldef?jed ) {			IIv?ttbn `a?a3
	?I	}?			'(We tried?roally xarD, ?vt dh%$`apq doesj?4?e<i3t:
?		ratURn;L	?}M
L?			/o Set 4he data,./??		Ktyks>mac`? gulati/~-)?
		/o We adways(stmrm t*e ?aaelAasme0k?x
		d?4q]ser.{e?x txis,!k?y, v?`ue ):
-		}4(;
		}- nu|l?0vA,Ue,$`rg?leots.l?.gTl,>?1 nul?$*|Z5d );
yL*
remore?at!*?&u>b4io~( kdy ( z
		2etet.?}?iw*?ash(0fu.c|Ion*+ {
		daTaUser.rel+6?(?This, kmyb?:?	m hz
H]??| ?;


jQuery.extend( {
Iyuaue:f?ncTion( elei, tyqu,"dcta )0y?
		?!r queug;M

Iaf?( e?e?"+ {*			txpe <?,0pxpeb|}(&dx" )!;?queue"9-
		queue =1dat` ?)r.wE|( Ulem,$Vy@e!9:
?	?'/ Gxeed(uP deuuu?% by*getting ou|`q\ic{l id0this`m7,h}c|?? Lokup
			if (`data?	?
Y			if h !auMue`|| ??rAy.IrAr:a{(0lat@ 9(i {
			?	?ueue =(dataPRhv.cc#fss? eldm,?tapg= ?Quaz?nl?kUArzay( ?utq") );		)	}(mlse K
		hI	qqeue&ptsh dava"#;
?	}
			]
	reuurn Qw%ue || [=+
		x	?	}-
???da1ugte8vUj#uioz*aulei- tyP- ) ?I	typ?$=?d?pa l?d"?y";

)r`r ?umUe0= ???ar],5um4e( TNul?pype ),?		star|LeOgti?= suguunn?(gth?			f. = pu5=u.kxidt)??
	?hooks$= *?uery?_fueueXo/ks*!elem, |y`e !,
In'xp ?funcxi/N(i z-
			~Suery.deQu}ui(PeHeo,!vype!)s(		|;
	//!?f Uhu fx q}ewe(ys?dmqueDed amwpy3 vemove#the?psogRdSe?sa?`m?m,
	?hf ( fo0== "inp?ogrlss" ) {		fn 9 p5%5e.3h??t(9;?
			stardMenGp?--*
?	
		?v(`bn?)0{
?	// ?`d a prOc:u?? s%ntizQ,(T/"p?event dle f? ?auue frol ehn'
?		?/)automat(Cally dmw?%ued		iv ( uype ?=- "g8? !?{	
9			??%}e.]fshhdt( 0{.proKVess" i{?		?
-			/.!clec? tq 4he0Lasv queue s5m0 function
Ieale4e loocs.1top;	?	fn.?all(,el%m, ndxt ?ooks ??
		}
)?g 
)!wt?r5un?4h &" i?o(s ? {?			Hoo?q.empt??fh2e():
=
	},	
*	- Oot?pu#licb/ geNgta|e a sueugHoOkw"objuk4,"m2 reuqrn"The cu?rgl2 ?ne
_q?eueOo?jw: f5n??i?nhglem, typm0? ;)
	~ab keh <?wa`g`+ "a?-uuHkoks";		retupn datAPrIv.gEt("ulaM,poeq ) ?l?da\Ap?v<!ccews(2e|em, kmy- {*		emPty: bwery&?a|l2acks2 "nk?lmmoRy ).qdd, dunctign() [
			bauaPriv.temveh`%,e}$ ? syPe?+@&qu?ueb, +fy ?();?	| )
		} );
i}?)?)*?
jQef9?fl??ztend( J?quE}?>0fuNctcon( p{qm- dati )b???6er setuer ? 2;?J
	)?!0`tyqeod`tqPe !==(?strilg" ) {
		datq!= ty?e8K	I	type ="#f|"3		saTT?r.m;
)	}
		if  )Erg??entshEngt` < sevTer$)0{? )	ri|uzn"ji|mx.]ue5e("thiq? 4`Y, tq`e );?		}
	?bmve2N`&a|a ==5 ufdEfilid 	K|(I{ :M
		thiseach? f5n?vion(? {?
	)?	va??au?ue ? hQuezy.queug? thaw,`tyte?&d?ta )+
-?			// UNrure a`hooks?fvr(thm{0?ueue
))HInAuezy._sUeueHo?kr)?th?ql t{pe")3
				if   ty?u ? *nx  && 1uuue[ !]!!== "in?ro'res{? )!S
	)		:Quer?.`e?umug( t?is- type i?
)?		})?		} )9? }l-	lequeue: fu^cuAoN( v?pa ) {

R?|?Bn txis
eac, !fwnaui?() {
	?	jQuery.$eqa%ue` ?`)s,8vypm`);
	#]&)>M
	}l
b,ekrQuewd: Functimn(0typi )({		retUr~?Tkis.u}eue? dype || +ox , [] -?	O?,	//!Gut ? xromase?resoL?mf wheo queuus of(a c%rt!xn Ty`e*	/ abe %mptied (gx"ib?uhg dyp b}!defau?t)
	prom?se funcTio?0txpE???b:0) w
)v!` to <?			bound} 1,J			deFer?= jSuery.eeebved(),E
		el%eent?b=this,?			i = T?I?.l?jgth-	?	Zewklv?(!dunction() {
		?if  c) '-cmunp i -`{
					fgfEp.rus/,veith( ulee%nts< Y0enuimnts?L?-;	
	=MZ(	}?)
		hb"( pypeof tm?e?!<- "stp?fg"0)?{
A?Ikbj(= t]t?;?"	H?typq = undeni~ed;
??}
	?/p% = txqe |t b.x";j(i?hide (`i=, ) +
		tmp = detaPbiv.get( dlaOentr{ yf]<?t?p% ?  ?ugue?Oo{r" 	2+
		iw ( vmxd&& ?Lp.?mpT? i z	)		goE?t++;
Y)tmx.mnp4Y&add$revnxve ?+)	}
	}
		se?mmve9);
		?e?urn"d!d}r?pSb?iauhokj?93
??
 );
rar pntm = , /[k=]?(=z|?*^n|!?d)(?:ZuE[)-\.\D)|)<!)/zo?pce;

var rg3s^?mb=(.cv!RggDxp( "^?:8s+=_)=u)(""+ ?nu??+ *)([A,z%]:k$",?"i"!)+
M
var a{zUYpa~d(= ? #Top.( ?Ri%ht?, "Bottwm", "Lubt" ];

~ab$msXkaaenSithiNHvee(9!f}Na4ioh? e?dm| g| )"{
*?	/? IsHif$enithanTrmd(migit jE"?al,e@!fp?M hQue29"Ihter duncwioo;?
		// in"tjHu case, gLemeNv uin%?be Sc?o.L ?rguye~?ale- = el <| ele};*?		-/0In?i~u cTyna$Ts})p???,m-
3	t?vuro"%,EM.seyle.diwpla}!<7?"none" }|	
?)Ielem.w?yeu6?is0`aa =- "" &&

		// O?hezwiQa, !heck cgmpeted03txleJ?		-/4?uppmZv?(F?sef8`<9$3!- 45
	
I,/ ?)s?fo&ucvmd tle-e~|? cad (!v? c/opUt%lF?sp?`y:?~one??wo ?arsD a/nfkRm Th?t 'ne?#ir* M/+`hn Vhg0dMk?Me~t.
	jQuery.c*taiNw( m,mm.o{erDocumant,&elem$i($?b
		bS?erz&#ss? elem,??displaq? ? =-? "nont"?)}-
vap 2wip = ?un?tmMn? eleml ?pt?onr,`ca,l"a?k,`avg?()!{N/rar!?at,!*amdl
	)o?d = {};
	/# Re,ember"t(e olDavAlueq, a~d ynvgr? tke0?aw!on?wIIvv ( oame in1op|?mnc`) k
?ld[ neie??`= eldM.spyl? namf \;I?eLgo.st?le{ fame I"?`nptiOnsZ name?\:?
	}
?	2at(} cal?"c?K?qpply) e?em, aRgs |x$[] ?;M

	/#?rgrt wxe0k|`Valtgq	?for`(,.am?`an opt?Os + {
I	eleM.sTxme[ jcme ]  nl`_0j`mu };	=

	p?turn ?et;
};M?
	
fqngt?ol wdjUstc?S( e,em,`Qzor? valpE@`rtw? tw%e? )!{*far !dhuste4, sc?le-
	mixIterat)ons = 34,
	)c?rpntVaLump=(4?eeL$?			funct?~?)`?			ret=`n t'een.??r 	;
)		} :
			ftnCthon() {?			return`j?uer9.kisl ehem,?ppop$"? );		|(			iniuial x currgNd?ahue((,?
		?nit ?va?ue?artc &?vamuUQa2tw?`3hE x| ,!jQuery.??wnumcerZ trfpp] ;!?"0: &0x""!<
E		>% SrarPmNg?~al?e co?puuation as rE?u{rem ?Ov p/tdvE?l unit(|-cma?cxes
A	initielInUni< ? ? jQyery.#Ss*u?b?r[ p?op ] ||!d?atb!?94 px" && +inm4ial +!&&		2#ssFum?%xEg(`j?xer}.csS( e?%M0rpOr #!);

	yf!(?anitial?lUnit ." )nhfi?mIn?ni|{`90\?=} unit)({?
		-+`Sup`mrt:!?yrefgp"<=54)I/' \amWe?thM 9$eratinj"par'?u walum to pbevent ynterbgrence froi CSs upRer co5nDs ,gh-25t(		i~*tial!=@initia,d/"{

9	o/ T?usV ujitS$rt<?rtee`bq"zQuq2yns?s	*		eniu - unit || iniviq??nUNi~[ 3O;

?Yo- Kvgr?|?vehY$a0pSk:imatE fr?m ! nn{ern?st%rting PGxnt
)	?nIt?+<InU?}??= +?fmt)E,`]|"1;

	!wlIne?? mayI?eret?on{%, )`{?
		// EAl5eTe$In`$U`d?To o5p best gees3 hfmwbnh~g gugcRdc?flctpzgro out=.	?/? Fini?h)if the ?cale ?pua?s or cpoSsus 5 (?akhlg$The0hd.ne6"product"f?nqOsitive)/
		jQtu~y.sti?e, el5m, ppvp, iNivKa-inU?it0+ }Nita);
			yf * ( 1 % {ccle +?*!* 1 - ( scelu`= cqp`e?4F?lue(?!/!?nitiad(?rh0.1`)() <?$p y {
		ma8	twratkons?=(49
a(
	Hinitla,InUniv =?initialAnni| +$s#ale;

	)?B(inipiadInQni?&= anipialInUni4"*,2:
		jQ?drh,?ty,c? elem.$prlp( init)e?InU?ht -wfi4 );
	?. Kckg8sdra0wo(urdete the TwuEn p2kpmruxes?laPez"on?	vahaeParts?< val}eRapts"|h ?]?
I|"	i?  vqlue?arps0	?{		i
itca`InUniv = kioiuialK>Unat l| *a?itaq,?^|(0j?L
I?// ?px|Y rm}adi?% offSe?  ??+-=- ?f s8uci'ied
)	alj}spEd } v?ltEPAr4s[  M ?I		ynitialIvUlaw k(( valugPavts[?0 ]$k u +5J0raluePar}r[ 3`E(z		+valueAerts[ 3 \:
	if(8 tween )"{
K	twe?j.u.It(= unit9	?uw?%..start ? ini|yQlInUl)0;
		tweul.end!9 afju{ted/	}
	}??peturn `djusted8
?
?
var `mfaultDisplayN?p?=${}3

fEortion getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}


	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );

	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );