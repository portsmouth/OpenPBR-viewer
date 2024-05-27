(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ql="159",Mr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sd=0,Mc=1,od=2,Zh=1,ad=2,Mi=3,ei=0,xn=1,Zn=2,ji=0,rs=1,Tc=2,Ac=3,Rc=4,ld=5,hr=100,cd=101,ud=102,Lc=103,Cc=104,hd=200,fd=201,dd=202,pd=203,Tl=204,Al=205,md=206,_d=207,gd=208,vd=209,xd=210,yd=211,bd=212,Sd=213,Ed=214,wd=0,Md=1,Td=2,aa=3,Ad=4,Rd=5,Ld=6,Cd=7,Qh=0,Pd=1,Dd=2,Yi=0,Id=1,Nd=2,Fd=3,Od=4,Ud=5,Pc="attached",Bd="detached",Jh=300,ls=301,cs=302,Rl=303,Ll=304,ga=306,us=1e3,Hn=1001,la=1002,Nt=1003,Cl=1004,sa=1005,En=1006,ef=1007,gr=1008,fi=1009,Pl=1010,tf=1011,va=1012,Ws=1013,Dn=1014,vn=1015,Qs=1016,nf=1017,rf=1018,pr=1020,zd=1021,sn=1023,kd=1024,Hd=1025,mr=1026,hs=1027,sf=1028,Jl=1029,of=1030,xa=1031,Js=1033,La=33776,Ca=33777,Pa=33778,Da=33779,Dc=35840,Ic=35841,Nc=35842,Fc=35843,af=36196,Oc=37492,Uc=37496,Bc=37808,zc=37809,kc=37810,Hc=37811,Vc=37812,Gc=37813,Wc=37814,Xc=37815,qc=37816,jc=37817,Yc=37818,$c=37819,Kc=37820,Zc=37821,Ia=36492,Qc=36494,Jc=36495,Vd=36283,eu=36284,tu=36285,nu=36286,eo=2300,fs=2301,Na=2302,iu=2400,ru=2401,su=2402,Gd=2500,Wd=0,lf=1,Dl=2,cf=3e3,$i=3001,Xd=3200,qd=3201,uf=0,jd=1,Vn="",Ht="srgb",an="srgb-linear",ec="display-p3",ya="display-p3-linear",ca="linear",At="srgb",ua="rec709",ha="p3",Ar=7680,ou=519,Yd=512,$d=513,Kd=514,hf=515,Zd=516,Qd=517,Jd=518,ep=519,Il=35044,au="300 es",Nl=1035,Ai=2e3,fa=2001;class xr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lu=1234567;const Xs=Math.PI/180,ds=180/Math.PI;function Qn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[r&255]+un[r>>8&255]+un[r>>16&255]+un[r>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function tn(r,e,t){return Math.max(e,Math.min(t,r))}function tc(r,e){return(r%e+e)%e}function tp(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function np(r,e,t){return r!==e?(t-r)/(e-r):0}function qs(r,e,t){return(1-t)*r+t*e}function ip(r,e,t,n){return qs(r,e,1-Math.exp(-t*n))}function rp(r,e=1){return e-Math.abs(tc(r,e*2)-e)}function sp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function op(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ap(r,e){return r+Math.floor(Math.random()*(e-r+1))}function lp(r,e){return r+Math.random()*(e-r)}function cp(r){return r*(.5-Math.random())}function up(r){r!==void 0&&(lu=r);let e=lu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hp(r){return r*Xs}function fp(r){return r*ds}function Fl(r){return(r&r-1)===0&&r!==0}function dp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function da(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function pp(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),p=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*f,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*f,a*c);break;case"ZXZ":r.set(l*f,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*p,a*c);break;case"YXY":r.set(l*p,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function bt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ff={DEG2RAD:Xs,RAD2DEG:ds,generateUUID:Qn,clamp:tn,euclideanModulo:tc,mapLinear:tp,inverseLerp:np,lerp:qs,damp:ip,pingpong:rp,smoothstep:sp,smootherstep:op,randInt:ap,randFloat:lp,randFloatSpread:cp,seededRandom:up,degToRad:hp,radToDeg:fp,isPowerOfTwo:Fl,ceilPowerOfTwo:dp,floorPowerOfTwo:da,setQuaternionFromProperEuler:pp,normalize:bt,denormalize:hi};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,i,s,o,a,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],_=n[8],g=i[0],m=i[3],d=i[6],x=i[1],v=i[4],y=i[7],b=i[2],M=i[5],T=i[8];return s[0]=o*g+a*x+l*b,s[3]=o*m+a*v+l*M,s[6]=o*d+a*y+l*T,s[1]=c*g+u*x+f*b,s[4]=c*m+u*v+f*M,s[7]=c*d+u*y+f*T,s[2]=h*g+p*x+_*b,s[5]=h*m+p*v+_*M,s[8]=h*d+p*y+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=t*f+n*h+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=h*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new st;function df(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function to(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mp(){const r=to("canvas");return r.style.display="block",r}const cu={};function js(r){r in cu||(cu[r]=!0,console.warn(r))}const uu=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hu=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),co={[an]:{transfer:ca,primaries:ua,toReference:r=>r,fromReference:r=>r},[Ht]:{transfer:At,primaries:ua,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ya]:{transfer:ca,primaries:ha,toReference:r=>r.applyMatrix3(hu),fromReference:r=>r.applyMatrix3(uu)},[ec]:{transfer:At,primaries:ha,toReference:r=>r.convertSRGBToLinear().applyMatrix3(hu),fromReference:r=>r.applyMatrix3(uu).convertLinearToSRGB()}},_p=new Set([an,ya]),pt={enabled:!0,_workingColorSpace:an,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!_p.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=co[e].toReference,i=co[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return co[r].primaries},getTransfer:function(r){return r===Vn?ca:co[r].transfer}};function ss(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Oa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Rr;class pf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rr===void 0&&(Rr=to("canvas")),Rr.width=e.width,Rr.height=e.height;const n=Rr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=to("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ss(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ss(t[n]/255)*255):t[n]=ss(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gp=0;class mf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Qn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ua(i[o].image)):s.push(Ua(i[o]))}else s=Ua(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ua(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vp=0;class on extends xr{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,n=Hn,i=Hn,s=En,o=gr,a=sn,l=fi,c=on.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Qn(),this.name="",this.source=new mf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===$i?Ht:Vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case us:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case la:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case us:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case la:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ht?$i:cf}set encoding(e){js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$i?Ht:Vn}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Jh;on.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,i=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(p+1)/2,b=(d+1)/2,M=(u+h)/4,T=(f+g)/4,I=(_+m)/4;return v>y&&v>b?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=M/n,s=T/n):y>b?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=M/i,s=I/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=T/s,i=I/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(f-g)/x,this.z=(h-u)/x,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xp extends xr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(js("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$i?Ht:Vn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new on(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends xp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _f extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yp extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==h||c!==p||u!==_){let m=1-a;const d=l*h+c*p+u*_+f*g,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const b=Math.sqrt(v),M=Math.atan2(b,d*x);m=Math.sin(m*M)/b,a=Math.sin(a*M)/b}const y=a*x;if(l=l*m+h*y,c=c*m+p*y,u=u*m+_*y,f=f*m+g*y,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-a*p,e[t+2]=c*_+u*p+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),p=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ba.copy(this).projectOnVector(e),this.sub(Ba)}reflect(e){return this.sub(Ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ba=new C,fu=new mi;class $t{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),uo.copy(n.boundingBox)),uo.applyMatrix4(e.matrixWorld),this.union(uo)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),ho.subVectors(this.max,Ts),Lr.subVectors(e.a,Ts),Cr.subVectors(e.b,Ts),Pr.subVectors(e.c,Ts),Fi.subVectors(Cr,Lr),Oi.subVectors(Pr,Cr),tr.subVectors(Lr,Pr);let t=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-tr.z,tr.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,tr.z,0,-tr.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-tr.y,tr.x,0];return!za(t,Lr,Cr,Pr,ho)||(t=[1,0,0,0,1,0,0,0,1],!za(t,Lr,Cr,Pr,ho))?!1:(fo.crossVectors(Fi,Oi),t=[fo.x,fo.y,fo.z],za(t,Lr,Cr,Pr,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new C,new C,new C,new C,new C,new C,new C,new C],jn=new C,uo=new $t,Lr=new C,Cr=new C,Pr=new C,Fi=new C,Oi=new C,tr=new C,Ts=new C,ho=new C,fo=new C,nr=new C;function za(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){nr.fromArray(r,s);const a=i.x*Math.abs(nr.x)+i.y*Math.abs(nr.y)+i.z*Math.abs(nr.z),l=e.dot(nr),c=t.dot(nr),u=n.dot(nr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const bp=new $t,As=new C,ka=new C;class ni{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(As,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(ka)),this.expandByPoint(As.copy(e.center).sub(ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new C,Ha=new C,po=new C,Ui=new C,Va=new C,mo=new C,Ga=new C;class so{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ha.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Ha);const s=e.distanceTo(t)*.5,o=-this.direction.dot(po),a=Ui.dot(this.direction),l=-Ui.dot(po),c=Ui.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Ha).addScaledVector(po,h),p}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const n=yi.dot(this.direction),i=yi.dot(yi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,i,s){Va.subVectors(t,e),mo.subVectors(n,e),Ga.crossVectors(Va,mo);let o=this.direction.dot(Ga),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const l=a*this.direction.dot(mo.crossVectors(Ui,mo));if(l<0)return null;const c=a*this.direction.dot(Va.cross(Ui));if(c<0||l+c>o)return null;const u=-a*Ui.dot(Ga);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,n,i,s,o,a,l,c,u,f,h,p,_,g,m){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,h,p,_,g,m)}set(e,t,n,i,s,o,a,l,c,u,f,h,p,_,g,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Dr.setFromMatrixColumn(e,0).length(),s=1/Dr.setFromMatrixColumn(e,1).length(),o=1/Dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,g=c*f;t[0]=h+g*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,g=c*f;t[0]=h-g*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sp,e,Ep)}lookAt(e,t,n){const i=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Bi.crossVectors(n,Ln),Bi.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Bi.crossVectors(n,Ln)),Bi.normalize(),_o.crossVectors(Ln,Bi),i[0]=Bi.x,i[4]=_o.x,i[8]=Ln.x,i[1]=Bi.y,i[5]=_o.y,i[9]=Ln.y,i[2]=Bi.z,i[6]=_o.z,i[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],_=n[2],g=n[6],m=n[10],d=n[14],x=n[3],v=n[7],y=n[11],b=n[15],M=i[0],T=i[4],I=i[8],S=i[12],A=i[1],z=i[5],O=i[9],W=i[13],D=i[2],V=i[6],Z=i[10],Q=i[14],ce=i[3],ie=i[7],se=i[11],me=i[15];return s[0]=o*M+a*A+l*D+c*ce,s[4]=o*T+a*z+l*V+c*ie,s[8]=o*I+a*O+l*Z+c*se,s[12]=o*S+a*W+l*Q+c*me,s[1]=u*M+f*A+h*D+p*ce,s[5]=u*T+f*z+h*V+p*ie,s[9]=u*I+f*O+h*Z+p*se,s[13]=u*S+f*W+h*Q+p*me,s[2]=_*M+g*A+m*D+d*ce,s[6]=_*T+g*z+m*V+d*ie,s[10]=_*I+g*O+m*Z+d*se,s[14]=_*S+g*W+m*Q+d*me,s[3]=x*M+v*A+y*D+b*ce,s[7]=x*T+v*z+y*V+b*ie,s[11]=x*I+v*O+y*Z+b*se,s[15]=x*S+v*W+y*Q+b*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],g=e[7],m=e[11],d=e[15];return _*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*p-n*l*p)+g*(+t*l*p-t*c*h+s*o*h-i*o*p+i*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+n*o*p+s*a*u-n*c*u)+d*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],g=e[13],m=e[14],d=e[15],x=f*m*c-g*h*c+g*l*p-a*m*p-f*l*d+a*h*d,v=_*h*c-u*m*c-_*l*p+o*m*p+u*l*d-o*h*d,y=u*g*c-_*f*c+_*a*p-o*g*p-u*a*d+o*f*d,b=_*f*l-u*g*l-_*a*h+o*g*h+u*a*m-o*f*m,M=t*x+n*v+i*y+s*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=x*T,e[1]=(g*h*s-f*m*s-g*i*p+n*m*p+f*i*d-n*h*d)*T,e[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*d+n*l*d)*T,e[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*p-n*l*p)*T,e[4]=v*T,e[5]=(u*m*s-_*h*s+_*i*p-t*m*p-u*i*d+t*h*d)*T,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*d-t*l*d)*T,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*p+t*l*p)*T,e[8]=y*T,e[9]=(_*f*s-u*g*s-_*n*p+t*g*p+u*n*d-t*f*d)*T,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*d+t*a*d)*T,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*p-t*a*p)*T,e[12]=b*T,e[13]=(u*g*i-_*f*i+_*n*h-t*g*h-u*n*m+t*f*m)*T,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*T,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,_=s*f,g=o*u,m=o*f,d=a*f,x=l*c,v=l*u,y=l*f,b=n.x,M=n.y,T=n.z;return i[0]=(1-(g+d))*b,i[1]=(p+y)*b,i[2]=(_-v)*b,i[3]=0,i[4]=(p-y)*M,i[5]=(1-(h+d))*M,i[6]=(m+x)*M,i[7]=0,i[8]=(_+v)*T,i[9]=(m-x)*T,i[10]=(1-(h+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Dr.set(i[0],i[1],i[2]).length();const o=Dr.set(i[4],i[5],i[6]).length(),a=Dr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Yn.copy(this);const c=1/s,u=1/o,f=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,t.setFromRotationMatrix(Yn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Ai){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let p,_;if(a===Ai)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===fa)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Ai){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(o-s),h=(t+e)*c,p=(n+i)*u;let _,g;if(a===Ai)_=(o+s)*f,g=-2*f;else if(a===fa)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Dr=new C,Yn=new Ve,Sp=new C(0,0,0),Ep=new C(1,1,1),Bi=new C,_o=new C,Ln=new C,du=new Ve,pu=new mi;class ba{constructor(e=0,t=0,n=0,i=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(du,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pu.setFromEuler(this),this.setFromQuaternion(pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class gf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wp=0;const mu=new C,Ir=new mi,bi=new Ve,go=new C,Rs=new C,Mp=new C,Tp=new mi,_u=new C(1,0,0),gu=new C(0,1,0),vu=new C(0,0,1),Ap={type:"added"},Rp={type:"removed"};class Bt extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new C,t=new ba,n=new mi,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new st}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(_u,e)}rotateY(e){return this.rotateOnAxis(gu,e)}rotateZ(e){return this.rotateOnAxis(vu,e)}translateOnAxis(e,t){return mu.copy(e).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_u,e)}translateY(e){return this.translateOnAxis(gu,e)}translateZ(e){return this.translateOnAxis(vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?go.copy(e):go.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Rs,go,this.up):bi.lookAt(go,Rs,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),Ir.setFromRotationMatrix(bi),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ap)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,Mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Tp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Bt.DEFAULT_UP=new C(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new C,Si=new C,Wa=new C,Ei=new C,Nr=new C,Fr=new C,xu=new C,Xa=new C,qa=new C,ja=new C;let vo=!1;class fn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$n.subVectors(e,t),i.cross($n);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){$n.subVectors(i,t),Si.subVectors(n,t),Wa.subVectors(e,t);const o=$n.dot($n),a=$n.dot(Si),l=$n.dot(Wa),c=Si.dot(Si),u=Si.dot(Wa),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ei),Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(e,t,n,i,s,o,a,l){return vo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vo=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ei),l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l}static isFrontFacing(e,t,n,i){return $n.subVectors(n,t),Si.subVectors(e,t),$n.cross(Si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),$n.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return vo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vo=!0),fn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Nr.subVectors(i,n),Fr.subVectors(s,n),Xa.subVectors(e,n);const l=Nr.dot(Xa),c=Fr.dot(Xa);if(l<=0&&c<=0)return t.copy(n);qa.subVectors(e,i);const u=Nr.dot(qa),f=Fr.dot(qa);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Nr,o);ja.subVectors(e,s);const p=Nr.dot(ja),_=Fr.dot(ja);if(_>=0&&p<=_)return t.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Fr,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return xu.subVectors(s,i),a=(f-u)/(f-u+(p-_)),t.copy(i).addScaledVector(xu,a);const d=1/(m+g+h);return o=g*d,a=h*d,t.copy(n).addScaledVector(Nr,o).addScaledVector(Fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function Ya(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=tc(e,1),t=tn(t,0,1),n=tn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ya(o,s,e+1/3),this.g=Ya(o,s,e),this.b=Ya(o,s,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ht){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=vf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return pt.fromWorkingColorSpace(hn.copy(this),e),Math.round(tn(hn.r*255,0,255))*65536+Math.round(tn(hn.g*255,0,255))*256+Math.round(tn(hn.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(hn.copy(this),t);const n=hn.r,i=hn.g,s=hn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Ht){pt.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,i=hn.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(xo);const n=qs(zi.h,xo.h,t),i=qs(zi.s,xo.s,t),s=qs(zi.l,xo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new tt;tt.NAMES=vf;let Lp=0;class di extends xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=rs,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tl,this.blendDst=Al,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tl&&(n.blendSrc=this.blendSrc),this.blendDst!==Al&&(n.blendDst=this.blendDst),this.blendEquation!==hr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==aa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ou&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ri extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new C,yo=new Ue;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Il,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yo.fromBufferAttribute(this,t),yo.applyMatrix3(e),this.setXY(t,yo.x,yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Il&&(e.usage=this.usage),e}}class xf extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yf extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Jn extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cp=0;const Un=new Ve,$a=new Bt,Or=new C,Cn=new $t,Ls=new $t,en=new C;class yn extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(df(e)?yf:xf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return $a.lookAt(e),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Cn.min,Ls.min),Cn.expandByPoint(en),en.addVectors(Cn.max,Ls.max),Cn.expandByPoint(en)):(Cn.expandByPoint(Ls.min),Cn.expandByPoint(Ls.max))}Cn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)en.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(en));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)en.fromBufferAttribute(a,c),l&&(Or.fromBufferAttribute(e,c),en.add(Or)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new C,u[A]=new C;const f=new C,h=new C,p=new C,_=new Ue,g=new Ue,m=new Ue,d=new C,x=new C;function v(A,z,O){f.fromArray(i,A*3),h.fromArray(i,z*3),p.fromArray(i,O*3),_.fromArray(o,A*2),g.fromArray(o,z*2),m.fromArray(o,O*2),h.sub(f),p.sub(f),g.sub(_),m.sub(_);const W=1/(g.x*m.y-m.x*g.y);isFinite(W)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(W),x.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(W),c[A].add(d),c[z].add(d),c[O].add(d),u[A].add(x),u[z].add(x),u[O].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let A=0,z=y.length;A<z;++A){const O=y[A],W=O.start,D=O.count;for(let V=W,Z=W+D;V<Z;V+=3)v(n[V+0],n[V+1],n[V+2])}const b=new C,M=new C,T=new C,I=new C;function S(A){T.fromArray(s,A*3),I.copy(T);const z=c[A];b.copy(z),b.sub(T.multiplyScalar(T.dot(z))).normalize(),M.crossVectors(I,z);const W=M.dot(u[A])<0?-1:1;l[A*4]=b.x,l[A*4+1]=b.y,l[A*4+2]=b.z,l[A*4+3]=W}for(let A=0,z=y.length;A<z;++A){const O=y[A],W=O.start,D=O.count;for(let V=W,Z=W+D;V<Z;V+=3)S(n[V+0]),S(n[V+1]),S(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new C,s=new C,o=new C,a=new C,l=new C,c=new C,u=new C,f=new C;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Yt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yu=new Ve,ir=new so,bo=new ni,bu=new C,Ur=new C,Br=new C,zr=new C,Ka=new C,So=new C,Eo=new Ue,wo=new Ue,Mo=new Ue,Su=new C,Eu=new C,wu=new C,To=new C,Ao=new C;class Mn extends Bt{constructor(e=new yn,t=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){So.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ka.fromBufferAttribute(f,e),o?So.addScaledVector(Ka,u):So.addScaledVector(Ka.sub(t),u))}t.add(So)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(bo.containsPoint(ir.origin)===!1&&(ir.intersectSphere(bo,bu)===null||ir.origin.distanceToSquared(bu)>(e.far-e.near)**2))&&(yu.copy(s).invert(),ir.copy(e.ray).applyMatrix4(yu),!(n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],d=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,b=v;y<b;y+=3){const M=a.getX(y),T=a.getX(y+1),I=a.getX(y+2);i=Ro(this,d,e,n,c,u,f,M,T,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const x=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);i=Ro(this,o,e,n,c,u,f,x,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],d=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,b=v;y<b;y+=3){const M=y,T=y+1,I=y+2;i=Ro(this,d,e,n,c,u,f,M,T,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const x=m,v=m+1,y=m+2;i=Ro(this,o,e,n,c,u,f,x,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Pp(r,e,t,n,i,s,o,a){let l;if(e.side===xn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ei,a),l===null)return null;Ao.copy(a),Ao.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ao);return c<t.near||c>t.far?null:{distance:c,point:Ao.clone(),object:r}}function Ro(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ur),r.getVertexPosition(l,Br),r.getVertexPosition(c,zr);const u=Pp(r,e,t,n,Ur,Br,zr,To);if(u){i&&(Eo.fromBufferAttribute(i,a),wo.fromBufferAttribute(i,l),Mo.fromBufferAttribute(i,c),u.uv=fn.getInterpolation(To,Ur,Br,zr,Eo,wo,Mo,new Ue)),s&&(Eo.fromBufferAttribute(s,a),wo.fromBufferAttribute(s,l),Mo.fromBufferAttribute(s,c),u.uv1=fn.getInterpolation(To,Ur,Br,zr,Eo,wo,Mo,new Ue),u.uv2=u.uv1),o&&(Su.fromBufferAttribute(o,a),Eu.fromBufferAttribute(o,l),wu.fromBufferAttribute(o,c),u.normal=fn.getInterpolation(To,Ur,Br,zr,Su,Eu,wu,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new C,materialIndex:0};fn.getNormal(Ur,Br,zr,f.normal),u.face=f}return u}class oo extends yn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Jn(c,3)),this.setAttribute("normal",new Jn(u,3)),this.setAttribute("uv",new Jn(f,2));function _(g,m,d,x,v,y,b,M,T,I,S){const A=y/T,z=b/I,O=y/2,W=b/2,D=M/2,V=T+1,Z=I+1;let Q=0,ce=0;const ie=new C;for(let se=0;se<Z;se++){const me=se*z-W;for(let ve=0;ve<V;ve++){const J=ve*A-O;ie[g]=J*x,ie[m]=me*v,ie[d]=D,c.push(ie.x,ie.y,ie.z),ie[g]=0,ie[m]=0,ie[d]=M>0?1:-1,u.push(ie.x,ie.y,ie.z),f.push(ve/T),f.push(1-se/I),Q+=1}}for(let se=0;se<I;se++)for(let me=0;me<T;me++){const ve=h+me+V*se,J=h+me+V*(se+1),oe=h+(me+1)+V*(se+1),Se=h+(me+1)+V*se;l.push(ve,J,Se),l.push(J,oe,Se),ce+=6}a.addGroup(p,ce,S),p+=ce,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mn(r){const e={};for(let t=0;t<r.length;t++){const n=ps(r[t]);for(const i in n)e[i]=n[i]}return e}function Dp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function bf(r){return r.getRenderTarget()===null?r.outputColorSpace:pt.workingColorSpace}const Ip={clone:ps,merge:mn};var Np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Np,this.fragmentShader=Fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=Dp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Sf extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends Sf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const kr=-90,Hr=1;class Op extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new _n(kr,Hr,e,t);i.layers=this.layers,this.add(i);const s=new _n(kr,Hr,e,t);s.layers=this.layers,this.add(s);const o=new _n(kr,Hr,e,t);o.layers=this.layers,this.add(o);const a=new _n(kr,Hr,e,t);a.layers=this.layers,this.add(a);const l=new _n(kr,Hr,e,t);l.layers=this.layers,this.add(l);const c=new _n(kr,Hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ef extends on{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ls,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Up extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(js("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===$i?Ht:Vn),this.texture=new Ef(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:En}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new oo(5,5,5),s=new Zi({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:ji});s.uniforms.tEquirect.value=t;const o=new Mn(i,s),a=t.minFilter;return t.minFilter===gr&&(t.minFilter=En),new Op(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Za=new C,Bp=new C,zp=new st;class ci{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Za.subVectors(n,t).cross(Bp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Za),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zp.getNormalMatrix(e),i=this.coplanarPoint(Za).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new ni,Lo=new C;class nc{constructor(e=new ci,t=new ci,n=new ci,i=new ci,s=new ci,o=new ci){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ai){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],p=i[8],_=i[9],g=i[10],m=i[11],d=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-s,h-c,m-p,y-d).normalize(),n[1].setComponents(l+s,h+c,m+p,y+d).normalize(),n[2].setComponents(l+o,h+u,m+_,y+x).normalize(),n[3].setComponents(l-o,h-u,m-_,y-x).normalize(),n[4].setComponents(l-a,h-f,m-g,y-v).normalize(),t===Ai)n[5].setComponents(l+a,h+f,m+g,y+v).normalize();else if(t===fa)n[5].setComponents(a,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Lo.x=i.normal.x>0?e.max.x:e.min.x,Lo.y=i.normal.y>0?e.max.y:e.min.y,Lo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function kp(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,p=f.byteLength,_=r.createBuffer();r.bindBuffer(u,_),r.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=r.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=r.SHORT;else if(f instanceof Uint32Array)g=r.UNSIGNED_INT;else if(f instanceof Int32Array)g=r.INT;else if(f instanceof Int8Array)g=r.BYTE;else if(f instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,f){const h=u.array,p=u._updateRange,_=u.updateRanges;if(r.bindBuffer(f,c),p.count===-1&&_.length===0&&r.bufferSubData(f,0,h),_.length!==0){for(let g=0,m=_.length;g<m;g++){const d=_[g];t?r.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):r.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(t?r.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):r.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,i(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class ic extends yn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,p=[],_=[],g=[],m=[];for(let d=0;d<u;d++){const x=d*h-o;for(let v=0;v<c;v++){const y=v*f-s;_.push(y,-x,0),g.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const v=x+c*d,y=x+c*(d+1),b=x+1+c*(d+1),M=x+1+c*d;p.push(v,y,M),p.push(y,b,M)}this.setIndex(p),this.setAttribute("position",new Jn(_,3)),this.setAttribute("normal",new Jn(g,3)),this.setAttribute("uv",new Jn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$p=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,em=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,um=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Om=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,km=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,n_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,i_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,r_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,u_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,__=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,E_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,w_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,M_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,T_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,R_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,z_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,j_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Y_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ag=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:Hp,alphahash_pars_fragment:Vp,alphamap_fragment:Gp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:qp,aomap_fragment:jp,aomap_pars_fragment:Yp,batching_pars_vertex:$p,batching_vertex:Kp,begin_vertex:Zp,beginnormal_vertex:Qp,bsdfs:Jp,iridescence_fragment:em,bumpmap_pars_fragment:tm,clipping_planes_fragment:nm,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:rm,clipping_planes_vertex:sm,color_fragment:om,color_pars_fragment:am,color_pars_vertex:lm,color_vertex:cm,common:um,cube_uv_reflection_fragment:hm,defaultnormal_vertex:fm,displacementmap_pars_vertex:dm,displacementmap_vertex:pm,emissivemap_fragment:mm,emissivemap_pars_fragment:_m,colorspace_fragment:gm,colorspace_pars_fragment:vm,envmap_fragment:xm,envmap_common_pars_fragment:ym,envmap_pars_fragment:bm,envmap_pars_vertex:Sm,envmap_physical_pars_fragment:Nm,envmap_vertex:Em,fog_vertex:wm,fog_pars_vertex:Mm,fog_fragment:Tm,fog_pars_fragment:Am,gradientmap_pars_fragment:Rm,lightmap_fragment:Lm,lightmap_pars_fragment:Cm,lights_lambert_fragment:Pm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Im,lights_toon_fragment:Fm,lights_toon_pars_fragment:Om,lights_phong_fragment:Um,lights_phong_pars_fragment:Bm,lights_physical_fragment:zm,lights_physical_pars_fragment:km,lights_fragment_begin:Hm,lights_fragment_maps:Vm,lights_fragment_end:Gm,logdepthbuf_fragment:Wm,logdepthbuf_pars_fragment:Xm,logdepthbuf_pars_vertex:qm,logdepthbuf_vertex:jm,map_fragment:Ym,map_pars_fragment:$m,map_particle_fragment:Km,map_particle_pars_fragment:Zm,metalnessmap_fragment:Qm,metalnessmap_pars_fragment:Jm,morphcolor_vertex:e_,morphnormal_vertex:t_,morphtarget_pars_vertex:n_,morphtarget_vertex:i_,normal_fragment_begin:r_,normal_fragment_maps:s_,normal_pars_fragment:o_,normal_pars_vertex:a_,normal_vertex:l_,normalmap_pars_fragment:c_,clearcoat_normal_fragment_begin:u_,clearcoat_normal_fragment_maps:h_,clearcoat_pars_fragment:f_,iridescence_pars_fragment:d_,opaque_fragment:p_,packing:m_,premultiplied_alpha_fragment:__,project_vertex:g_,dithering_fragment:v_,dithering_pars_fragment:x_,roughnessmap_fragment:y_,roughnessmap_pars_fragment:b_,shadowmap_pars_fragment:S_,shadowmap_pars_vertex:E_,shadowmap_vertex:w_,shadowmask_pars_fragment:M_,skinbase_vertex:T_,skinning_pars_vertex:A_,skinning_vertex:R_,skinnormal_vertex:L_,specularmap_fragment:C_,specularmap_pars_fragment:P_,tonemapping_fragment:D_,tonemapping_pars_fragment:I_,transmission_fragment:N_,transmission_pars_fragment:F_,uv_pars_fragment:O_,uv_pars_vertex:U_,uv_vertex:B_,worldpos_vertex:z_,background_vert:k_,background_frag:H_,backgroundCube_vert:V_,backgroundCube_frag:G_,cube_vert:W_,cube_frag:X_,depth_vert:q_,depth_frag:j_,distanceRGBA_vert:Y_,distanceRGBA_frag:$_,equirect_vert:K_,equirect_frag:Z_,linedashed_vert:Q_,linedashed_frag:J_,meshbasic_vert:eg,meshbasic_frag:tg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:rg,meshmatcap_frag:sg,meshnormal_vert:og,meshnormal_frag:ag,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:ug,meshphysical_frag:hg,meshtoon_vert:fg,meshtoon_frag:dg,points_vert:pg,points_frag:mg,shadow_vert:_g,shadow_frag:gg,sprite_vert:vg,sprite_frag:xg},xe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ui={basic:{uniforms:mn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:mn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new tt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:mn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:mn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:mn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new tt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:mn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:mn([xe.points,xe.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:mn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:mn([xe.common,xe.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:mn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:mn([xe.sprite,xe.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:mn([xe.common,xe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:mn([xe.lights,xe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};ui.physical={uniforms:mn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Co={r:0,b:0,g:0};function yg(r,e,t,n,i,s,o){const a=new tt(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function _(m,d){let x=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),x=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ga)?(u===void 0&&(u=new Mn(new oo(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:ps(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=pt.getTransfer(v.colorSpace)!==At,(f!==v||h!==v.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,p=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Mn(new ic(2,2),new Zi({name:"BackgroundMaterial",uniforms:ps(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=pt.getTransfer(v.colorSpace)!==At,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,d){m.getRGB(Co,bf(r)),n.buffers.color.setClear(Co.r,Co.g,Co.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function bg(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(D,V,Z,Q,ce){let ie=!1;if(o){const se=g(Q,Z,V);c!==se&&(c=se,p(c.object)),ie=d(D,Q,Z,ce),ie&&x(D,Q,Z,ce)}else{const se=V.wireframe===!0;(c.geometry!==Q.id||c.program!==Z.id||c.wireframe!==se)&&(c.geometry=Q.id,c.program=Z.id,c.wireframe=se,ie=!0)}ce!==null&&t.update(ce,r.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,I(D,V,Z,Q),ce!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ce).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function g(D,V,Z){const Q=Z.wireframe===!0;let ce=a[D.id];ce===void 0&&(ce={},a[D.id]=ce);let ie=ce[V.id];ie===void 0&&(ie={},ce[V.id]=ie);let se=ie[Q];return se===void 0&&(se=m(h()),ie[Q]=se),se}function m(D){const V=[],Z=[],Q=[];for(let ce=0;ce<i;ce++)V[ce]=0,Z[ce]=0,Q[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Z,attributeDivisors:Q,object:D,attributes:{},index:null}}function d(D,V,Z,Q){const ce=c.attributes,ie=V.attributes;let se=0;const me=Z.getAttributes();for(const ve in me)if(me[ve].location>=0){const oe=ce[ve];let Se=ie[ve];if(Se===void 0&&(ve==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),ve==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),oe===void 0||oe.attribute!==Se||Se&&oe.data!==Se.data)return!0;se++}return c.attributesNum!==se||c.index!==Q}function x(D,V,Z,Q){const ce={},ie=V.attributes;let se=0;const me=Z.getAttributes();for(const ve in me)if(me[ve].location>=0){let oe=ie[ve];oe===void 0&&(ve==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),ve==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor));const Se={};Se.attribute=oe,oe&&oe.data&&(Se.data=oe.data),ce[ve]=Se,se++}c.attributes=ce,c.attributesNum=se,c.index=Q}function v(){const D=c.newAttributes;for(let V=0,Z=D.length;V<Z;V++)D[V]=0}function y(D){b(D,0)}function b(D,V){const Z=c.newAttributes,Q=c.enabledAttributes,ce=c.attributeDivisors;Z[D]=1,Q[D]===0&&(r.enableVertexAttribArray(D),Q[D]=1),ce[D]!==V&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,V),ce[D]=V)}function M(){const D=c.newAttributes,V=c.enabledAttributes;for(let Z=0,Q=V.length;Z<Q;Z++)V[Z]!==D[Z]&&(r.disableVertexAttribArray(Z),V[Z]=0)}function T(D,V,Z,Q,ce,ie,se){se===!0?r.vertexAttribIPointer(D,V,Z,ce,ie):r.vertexAttribPointer(D,V,Z,Q,ce,ie)}function I(D,V,Z,Q){if(n.isWebGL2===!1&&(D.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const ce=Q.attributes,ie=Z.getAttributes(),se=V.defaultAttributeValues;for(const me in ie){const ve=ie[me];if(ve.location>=0){let J=ce[me];if(J===void 0&&(me==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),me==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){const oe=J.normalized,Se=J.itemSize,De=t.get(J);if(De===void 0)continue;const _e=De.buffer,qe=De.type,We=De.bytesPerElement,Fe=n.isWebGL2===!0&&(qe===r.INT||qe===r.UNSIGNED_INT||J.gpuType===Ws);if(J.isInterleavedBufferAttribute){const Ye=J.data,X=Ye.stride,Lt=J.offset;if(Ye.isInstancedInterleavedBuffer){for(let Ce=0;Ce<ve.locationSize;Ce++)b(ve.location+Ce,Ye.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let Ce=0;Ce<ve.locationSize;Ce++)y(ve.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Ce=0;Ce<ve.locationSize;Ce++)T(ve.location+Ce,Se/ve.locationSize,qe,oe,X*We,(Lt+Se/ve.locationSize*Ce)*We,Fe)}else{if(J.isInstancedBufferAttribute){for(let Ye=0;Ye<ve.locationSize;Ye++)b(ve.location+Ye,J.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ye=0;Ye<ve.locationSize;Ye++)y(ve.location+Ye);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Ye=0;Ye<ve.locationSize;Ye++)T(ve.location+Ye,Se/ve.locationSize,qe,oe,Se*We,Se/ve.locationSize*Ye*We,Fe)}}else if(se!==void 0){const oe=se[me];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(ve.location,oe);break;case 3:r.vertexAttrib3fv(ve.location,oe);break;case 4:r.vertexAttrib4fv(ve.location,oe);break;default:r.vertexAttrib1fv(ve.location,oe)}}}}M()}function S(){O();for(const D in a){const V=a[D];for(const Z in V){const Q=V[Z];for(const ce in Q)_(Q[ce].object),delete Q[ce];delete V[Z]}delete a[D]}}function A(D){if(a[D.id]===void 0)return;const V=a[D.id];for(const Z in V){const Q=V[Z];for(const ce in Q)_(Q[ce].object),delete Q[ce];delete V[Z]}delete a[D.id]}function z(D){for(const V in a){const Z=a[V];if(Z[D.id]===void 0)continue;const Q=Z[D.id];for(const ce in Q)_(Q[ce].object),delete Q[ce];delete Z[D.id]}}function O(){W(),u=!0,c!==l&&(c=l,p(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:O,resetDefaultState:W,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:y,disableUnusedAttributes:M}}function Sg(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,f){r.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,h){if(h===0)return;let p,_;if(i)p=r,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,u,f,h),t.update(f,s,h)}function c(u,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(u[_],f[_]);else{p.multiDrawArraysWEBGL(s,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=f[g];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Eg(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=o||e.has("OES_texture_float"),b=v&&y,M=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:M}}function wg(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ci,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||i;return i=h,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,d=r.get(f);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const x=s?0:n,v=x*4;let y=d.clippingState||null;l.value=y,y=u(_,h,v,p);for(let b=0;b!==v;++b)y[b]=t[b];d.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const d=p+g*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,y=p;v!==g;++v,y+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Mg(r){let e=new WeakMap;function t(o,a){return a===Rl?o.mapping=ls:a===Ll&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rl||a===Ll)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Up(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ao extends Sf{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ns=4,Mu=[.125,.215,.35,.446,.526,.582],fr=20,Qa=new ao,Tu=new tt;let Ja=null,el=0,tl=0;const cr=(1+Math.sqrt(5))/2,Vr=1/cr,Au=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,cr,Vr),new C(0,cr,-Vr),new C(Vr,0,cr),new C(-Vr,0,cr),new C(cr,Vr,0),new C(-cr,Vr,0)];class Ru{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ja=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ja,el,tl),e.scissorTest=!1,Po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ja=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:Qs,format:sn,colorSpace:an,depthBuffer:!1},i=Lu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tg(s)),this._blurMaterial=Ag(s,e,t)}return i}_compileMaterial(e){const t=new Mn(this._lodPlanes[0],e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,n,i){const a=new _n(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Tu),u.toneMapping=Yi,u.autoClear=!1;const p=new Ri({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),_=new Mn(new oo,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Tu),g=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):x===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;Po(i,x*v,d>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ls||e.mapping===cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Po(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Qa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Au[(i-1)%Au.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Mn(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*fr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):fr;m>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);const d=[];let x=0;for(let T=0;T<fr;++T){const I=T/g,S=Math.exp(-I*I/2);d.push(S),T===0?x+=S:T<m&&(x+=2*S)}for(let T=0;T<d.length;T++)d[T]=d[T]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-n;const y=this._sizeLods[i],b=3*y*(i>v-ns?i-v+ns:0),M=4*(this._cubeSize-y);Po(t,b,M,3*y,2*y),l.setRenderTarget(t),l.render(f,Qa)}}function Tg(r){const e=[],t=[],n=[];let i=r;const s=r-ns+1+Mu.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ns?l=Mu[o-r+ns-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,g=3,m=2,d=1,x=new Float32Array(g*_*p),v=new Float32Array(m*_*p),y=new Float32Array(d*_*p);for(let M=0;M<p;M++){const T=M%3*2/3-1,I=M>2?0:-1,S=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];x.set(S,g*_*M),v.set(h,m*_*M);const A=[M,M,M,M,M,M];y.set(A,d*_*M)}const b=new yn;b.setAttribute("position",new Yt(x,g)),b.setAttribute("uv",new Yt(v,m)),b.setAttribute("faceIndex",new Yt(y,d)),e.push(b),i>ns&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lu(r,e,t){const n=new Ki(r,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Po(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ag(r,e,t){const n=new Float32Array(fr),i=new C(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Cu(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Pu(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rg(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Rl||l===Ll,u=l===ls||l===cs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ru(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Ru(r));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Lg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Cg(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let m=0,d=g.length;m<d;m++)e.remove(g[m])}h.removeEventListener("dispose",o),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],r.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,d=g.length;m<d;m++)e.update(g[m],r.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,_=f.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let v=0,y=x.length;v<y;v+=3){const b=x[v+0],M=x[v+1],T=x[v+2];h.push(b,M,M,T,T,b)}}else if(_!==void 0){const x=_.array;g=_.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const b=v+0,M=v+1,T=v+2;h.push(b,M,M,T,T,b)}}else return;const m=new(df(h)?yf:xf)(h,1);m.version=g;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Pg(r,e,t,n){const i=n.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,_){r.drawElements(s,_,a,p*l),t.update(_,s,1)}function f(p,_,g){if(g===0)return;let m,d;if(i)m=r,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,_,a,p*l,g),t.update(_,s,g)}function h(p,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<g;d++)this.render(p[d]/l,_[d]);else{m.multiDrawElementsWEBGL(s,_,0,a,p,0,g);let d=0;for(let x=0;x<g;x++)d+=_[x];t.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function Dg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ig(r,e){return r[0]-e[0]}function Ng(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Fg(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new mt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let V=function(){W.dispose(),s.delete(u),u.removeEventListener("dispose",V)};var p=V;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),b===!0&&(S=3);let A=u.attributes.position.count*S,z=1;A>e.maxTextureSize&&(z=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const O=new Float32Array(A*z*4*g),W=new _f(O,A,z,g);W.type=vn,W.needsUpdate=!0;const D=S*4;for(let Z=0;Z<g;Z++){const Q=M[Z],ce=T[Z],ie=I[Z],se=A*z*4*Z;for(let me=0;me<Q.count;me++){const ve=me*D;v===!0&&(o.fromBufferAttribute(Q,me),O[se+ve+0]=o.x,O[se+ve+1]=o.y,O[se+ve+2]=o.z,O[se+ve+3]=0),y===!0&&(o.fromBufferAttribute(ce,me),O[se+ve+4]=o.x,O[se+ve+5]=o.y,O[se+ve+6]=o.z,O[se+ve+7]=0),b===!0&&(o.fromBufferAttribute(ie,me),O[se+ve+8]=o.x,O[se+ve+9]=o.y,O[se+ve+10]=o.z,O[se+ve+11]=ie.itemSize===4?o.w:1)}}m={count:g,texture:W,size:new Ue(A,z)},s.set(u,m),u.addEventListener("dispose",V)}let d=0;for(let v=0;v<h.length;v++)d+=h[v];const x=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(r,"morphTargetBaseInfluence",x),f.getUniforms().setValue(r,"morphTargetInfluences",h),f.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];n[u.id]=g}for(let y=0;y<_;y++){const b=g[y];b[0]=y,b[1]=h[y]}g.sort(Ng);for(let y=0;y<8;y++)y<_&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Ig);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const b=a[y],M=b[0],T=b[1];M!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+y)!==m[M]&&u.setAttribute("morphTarget"+y,m[M]),d&&u.getAttribute("morphNormal"+y)!==d[M]&&u.setAttribute("morphNormal"+y,d[M]),i[y]=T,x+=T):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),d&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const v=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(r,"morphTargetBaseInfluence",v),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Og(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Mf extends on{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:mr,u!==mr&&u!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mr&&(n=Dn),n===void 0&&u===hs&&(n=pr),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Tf=new on,Af=new Mf(1,1);Af.compareFunction=hf;const Rf=new _f,Lf=new yp,Cf=new Ef,Du=[],Iu=[],Nu=new Float32Array(16),Fu=new Float32Array(9),Ou=new Float32Array(4);function vs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Du[i];if(s===void 0&&(s=new Float32Array(i),Du[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Zt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Sa(r,e){let t=Iu[e];t===void 0&&(t=new Int32Array(e),Iu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ug(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Bg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2fv(this.addr,e),Zt(t,e)}}function zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;r.uniform3fv(this.addr,e),Zt(t,e)}}function kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4fv(this.addr,e),Zt(t,e)}}function Hg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,n))return;Ou.set(n),r.uniformMatrix2fv(this.addr,!1,Ou),Zt(t,n)}}function Vg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,n))return;Fu.set(n),r.uniformMatrix3fv(this.addr,!1,Fu),Zt(t,n)}}function Gg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,n))return;Nu.set(n),r.uniformMatrix4fv(this.addr,!1,Nu),Zt(t,n)}}function Wg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Xg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2iv(this.addr,e),Zt(t,e)}}function qg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3iv(this.addr,e),Zt(t,e)}}function jg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4iv(this.addr,e),Zt(t,e)}}function Yg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function $g(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2uiv(this.addr,e),Zt(t,e)}}function Kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3uiv(this.addr,e),Zt(t,e)}}function Zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4uiv(this.addr,e),Zt(t,e)}}function Qg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Af:Tf;t.setTexture2D(e||s,i)}function Jg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Lf,i)}function e0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cf,i)}function t0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Rf,i)}function n0(r){switch(r){case 5126:return Ug;case 35664:return Bg;case 35665:return zg;case 35666:return kg;case 35674:return Hg;case 35675:return Vg;case 35676:return Gg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return jg;case 5125:return Yg;case 36294:return $g;case 36295:return Kg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return t0}}function i0(r,e){r.uniform1fv(this.addr,e)}function r0(r,e){const t=vs(e,this.size,2);r.uniform2fv(this.addr,t)}function s0(r,e){const t=vs(e,this.size,3);r.uniform3fv(this.addr,t)}function o0(r,e){const t=vs(e,this.size,4);r.uniform4fv(this.addr,t)}function a0(r,e){const t=vs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function l0(r,e){const t=vs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function c0(r,e){const t=vs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function u0(r,e){r.uniform1iv(this.addr,e)}function h0(r,e){r.uniform2iv(this.addr,e)}function f0(r,e){r.uniform3iv(this.addr,e)}function d0(r,e){r.uniform4iv(this.addr,e)}function p0(r,e){r.uniform1uiv(this.addr,e)}function m0(r,e){r.uniform2uiv(this.addr,e)}function _0(r,e){r.uniform3uiv(this.addr,e)}function g0(r,e){r.uniform4uiv(this.addr,e)}function v0(r,e,t){const n=this.cache,i=e.length,s=Sa(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Tf,s[o])}function x0(r,e,t){const n=this.cache,i=e.length,s=Sa(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Lf,s[o])}function y0(r,e,t){const n=this.cache,i=e.length,s=Sa(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Cf,s[o])}function b0(r,e,t){const n=this.cache,i=e.length,s=Sa(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Rf,s[o])}function S0(r){switch(r){case 5126:return i0;case 35664:return r0;case 35665:return s0;case 35666:return o0;case 35674:return a0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return u0;case 35667:case 35671:return h0;case 35668:case 35672:return f0;case 35669:case 35673:return d0;case 5125:return p0;case 36294:return m0;case 36295:return _0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return b0}}class E0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=n0(t.type)}}class w0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S0(t.type)}}class M0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const nl=/(\w+)(\])?(\[|\.)?/g;function Uu(r,e){r.seq.push(e),r.map[e.id]=e}function T0(r,e,t){const n=r.name,i=n.length;for(nl.lastIndex=0;;){const s=nl.exec(n),o=nl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Uu(t,c===void 0?new E0(a,r,e):new w0(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new M0(a),Uu(t,f)),t=f}}}class oa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);T0(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Bu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const A0=37297;let R0=0;function L0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function C0(r){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(r);let n;switch(e===t?n="":e===ha&&t===ua?n="LinearDisplayP3ToLinearSRGB":e===ua&&t===ha&&(n="LinearSRGBToLinearDisplayP3"),r){case an:case ya:return[n,"LinearTransferOETF"];case Ht:case ec:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function zu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+L0(r.getShaderSource(e),o)}else return i}function P0(r,e){const t=C0(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function D0(r,e){let t;switch(e){case Id:t="Linear";break;case Nd:t="Reinhard";break;case Fd:t="OptimizedCineon";break;case Od:t="ACESFilmic";break;case Ud:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function I0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hs).join(`
`)}function N0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function F0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Hs(r){return r!==""}function ku(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(r){return r.replace(O0,B0)}const U0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function B0(r,e){let t=it[e];if(t===void 0){const n=U0.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}const z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(r){return r.replace(z0,k0)}function k0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Gu(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function H0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ad?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function V0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function G0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function W0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qh:e="ENVMAP_BLENDING_MULTIPLY";break;case Pd:e="ENVMAP_BLENDING_MIX";break;case Dd:e="ENVMAP_BLENDING_ADD";break}return e}function X0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function q0(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=H0(t),c=V0(t),u=G0(t),f=W0(t),h=X0(t),p=t.isWebGL2?"":I0(t),_=N0(s),g=i.createProgram();let m,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Hs).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Hs).join(`
`),d.length>0&&(d+=`
`)):(m=[Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),d=[p,Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?it.tonemapping_pars_fragment:"",t.toneMapping!==Yi?D0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,P0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),o=Ol(o),o=ku(o,t),o=Hu(o,t),a=Ol(a),a=ku(a,t),a=Hu(a,t),o=Vu(o),a=Vu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=x+m+o,y=x+d+a,b=Bu(i,i.VERTEX_SHADER,v),M=Bu(i,i.FRAGMENT_SHADER,y);i.attachShader(g,b),i.attachShader(g,M),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(z){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(g).trim(),W=i.getShaderInfoLog(b).trim(),D=i.getShaderInfoLog(M).trim();let V=!0,Z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,b,M);else{const Q=zu(i,b,"vertex"),ce=zu(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+O+`
`+Q+`
`+ce)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(W===""||D==="")&&(Z=!1);Z&&(z.diagnostics={runnable:V,programLog:O,vertexShader:{log:W,prefix:m},fragmentShader:{log:D,prefix:d}})}i.deleteShader(b),i.deleteShader(M),I=new oa(i,g),S=F0(i,g)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(g,A0)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=M,this}let j0=0;class Y0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $0(e),t.set(e,n)),n}}class $0{constructor(e){this.id=j0++,this.code=e,this.usedTimes=0}}function K0(r,e,t,n,i,s,o){const a=new gf,l=new Y0,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,A,z,O,W){const D=O.fog,V=W.geometry,Z=S.isMeshStandardMaterial?O.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),ce=Q&&Q.mapping===ga?Q.image.height:null,ie=_[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const se=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,me=se!==void 0?se.length:0;let ve=0;V.morphAttributes.position!==void 0&&(ve=1),V.morphAttributes.normal!==void 0&&(ve=2),V.morphAttributes.color!==void 0&&(ve=3);let J,oe,Se,De;if(ie){const Vt=ui[ie];J=Vt.vertexShader,oe=Vt.fragmentShader}else J=S.vertexShader,oe=S.fragmentShader,l.update(S),Se=l.getVertexShaderID(S),De=l.getFragmentShaderID(S);const _e=r.getRenderTarget(),qe=W.isInstancedMesh===!0,We=W.isBatchedMesh===!0,Fe=!!S.map,Ye=!!S.matcap,X=!!Q,Lt=!!S.aoMap,Ce=!!S.lightMap,$e=!!S.bumpMap,ze=!!S.normalMap,_t=!!S.displacementMap,Ke=!!S.emissiveMap,ke=!!S.metalnessMap,ot=!!S.roughnessMap,Tt=S.anisotropy>0,Ct=S.clearcoat>0,P=S.iridescence>0,E=S.sheen>0,q=S.transmission>0,le=Tt&&!!S.anisotropyMap,re=Ct&&!!S.clearcoatMap,fe=Ct&&!!S.clearcoatNormalMap,Me=Ct&&!!S.clearcoatRoughnessMap,pe=P&&!!S.iridescenceMap,ye=P&&!!S.iridescenceThicknessMap,N=E&&!!S.sheenColorMap,de=E&&!!S.sheenRoughnessMap,ne=!!S.specularMap,Oe=!!S.specularColorMap,Re=!!S.specularIntensityMap,Pe=q&&!!S.transmissionMap,we=q&&!!S.thicknessMap,be=!!S.gradientMap,Ge=!!S.alphaMap,F=S.alphaTest>0,ge=!!S.alphaHash,ae=!!S.extensions,ee=!!V.attributes.uv1,he=!!V.attributes.uv2,Le=!!V.attributes.uv3;let nt=Yi;return S.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(nt=r.toneMapping),{isWebGL2:u,shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:J,fragmentShader:oe,defines:S.defines,customVertexShaderID:Se,customFragmentShaderID:De,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:We,instancing:qe,instancingColor:qe&&W.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:an,map:Fe,matcap:Ye,envMap:X,envMapMode:X&&Q.mapping,envMapCubeUVHeight:ce,aoMap:Lt,lightMap:Ce,bumpMap:$e,normalMap:ze,displacementMap:h&&_t,emissiveMap:Ke,normalMapObjectSpace:ze&&S.normalMapType===jd,normalMapTangentSpace:ze&&S.normalMapType===uf,metalnessMap:ke,roughnessMap:ot,anisotropy:Tt,anisotropyMap:le,clearcoat:Ct,clearcoatMap:re,clearcoatNormalMap:fe,clearcoatRoughnessMap:Me,iridescence:P,iridescenceMap:pe,iridescenceThicknessMap:ye,sheen:E,sheenColorMap:N,sheenRoughnessMap:de,specularMap:ne,specularColorMap:Oe,specularIntensityMap:Re,transmission:q,transmissionMap:Pe,thicknessMap:we,gradientMap:be,opaque:S.transparent===!1&&S.blending===rs,alphaMap:Ge,alphaTest:F,alphaHash:ge,combine:S.combine,mapUv:Fe&&g(S.map.channel),aoMapUv:Lt&&g(S.aoMap.channel),lightMapUv:Ce&&g(S.lightMap.channel),bumpMapUv:$e&&g(S.bumpMap.channel),normalMapUv:ze&&g(S.normalMap.channel),displacementMapUv:_t&&g(S.displacementMap.channel),emissiveMapUv:Ke&&g(S.emissiveMap.channel),metalnessMapUv:ke&&g(S.metalnessMap.channel),roughnessMapUv:ot&&g(S.roughnessMap.channel),anisotropyMapUv:le&&g(S.anisotropyMap.channel),clearcoatMapUv:re&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:N&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(S.sheenRoughnessMap.channel),specularMapUv:ne&&g(S.specularMap.channel),specularColorMapUv:Oe&&g(S.specularColorMap.channel),specularIntensityMapUv:Re&&g(S.specularIntensityMap.channel),transmissionMapUv:Pe&&g(S.transmissionMap.channel),thicknessMapUv:we&&g(S.thicknessMap.channel),alphaMapUv:Ge&&g(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ze||Tt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:ee,vertexUv2s:he,vertexUv3s:Le,pointsUvs:W.isPoints===!0&&!!V.attributes.uv&&(Fe||Ge),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:ve,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:nt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Fe&&S.map.isVideoTexture===!0&&pt.getTransfer(S.map.colorSpace)===At,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Zn,flipSided:S.side===xn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ae&&S.extensions.derivatives===!0,extensionFragDepth:ae&&S.extensions.fragDepth===!0,extensionDrawBuffers:ae&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)A.push(z),A.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(x(A,S),v(A,S),A.push(r.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function x(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function v(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const A=_[S.type];let z;if(A){const O=ui[A];z=Ip.clone(O.uniforms)}else z=S.uniforms;return z}function b(S,A){let z;for(let O=0,W=c.length;O<W;O++){const D=c[O];if(D.cacheKey===A){z=D,++z.usedTimes;break}}return z===void 0&&(z=new q0(r,A,S,s),c.push(z)),z}function M(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:b,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:I}}function Z0(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Q0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Wu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Xu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,p,_,g,m){let d=r[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},r[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=g,d.group=m),e++,d}function a(f,h,p,_,g,m){const d=o(f,h,p,_,g,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(f,h,p,_,g,m){const d=o(f,h,p,_,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||Q0),n.length>1&&n.sort(h||Wu),i.length>1&&i.sort(h||Wu)}function u(){for(let f=e,h=r.length;f<h;f++){const p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function J0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Xu,r.set(n,[o])):i>=s.length?(o=new Xu,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ev(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new tt};break;case"SpotLight":t={position:new C,direction:new C,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function tv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let nv=0;function iv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function rv(r,e){const t=new ev,n=tv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new C);const s=new C,o=new Ve,a=new Ve;function l(u,f){let h=0,p=0,_=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let g=0,m=0,d=0,x=0,v=0,y=0,b=0,M=0,T=0,I=0,S=0;u.sort(iv);const A=f===!0?Math.PI:1;for(let O=0,W=u.length;O<W;O++){const D=u[O],V=D.color,Z=D.intensity,Q=D.distance,ce=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=V.r*Z*A,p+=V.g*Z*A,_+=V.b*Z*A;else if(D.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(D.sh.coefficients[ie],Z);S++}else if(D.isDirectionalLight){const ie=t.get(D);if(ie.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const se=D.shadow,me=n.get(D);me.shadowBias=se.bias,me.shadowNormalBias=se.normalBias,me.shadowRadius=se.radius,me.shadowMapSize=se.mapSize,i.directionalShadow[g]=me,i.directionalShadowMap[g]=ce,i.directionalShadowMatrix[g]=D.shadow.matrix,y++}i.directional[g]=ie,g++}else if(D.isSpotLight){const ie=t.get(D);ie.position.setFromMatrixPosition(D.matrixWorld),ie.color.copy(V).multiplyScalar(Z*A),ie.distance=Q,ie.coneCos=Math.cos(D.angle),ie.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ie.decay=D.decay,i.spot[d]=ie;const se=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,se.updateMatrices(D),D.castShadow&&I++),i.spotLightMatrix[d]=se.matrix,D.castShadow){const me=n.get(D);me.shadowBias=se.bias,me.shadowNormalBias=se.normalBias,me.shadowRadius=se.radius,me.shadowMapSize=se.mapSize,i.spotShadow[d]=me,i.spotShadowMap[d]=ce,M++}d++}else if(D.isRectAreaLight){const ie=t.get(D);ie.color.copy(V).multiplyScalar(Z),ie.halfWidth.set(D.width*.5,0,0),ie.halfHeight.set(0,D.height*.5,0),i.rectArea[x]=ie,x++}else if(D.isPointLight){const ie=t.get(D);if(ie.color.copy(D.color).multiplyScalar(D.intensity*A),ie.distance=D.distance,ie.decay=D.decay,D.castShadow){const se=D.shadow,me=n.get(D);me.shadowBias=se.bias,me.shadowNormalBias=se.normalBias,me.shadowRadius=se.radius,me.shadowMapSize=se.mapSize,me.shadowCameraNear=se.camera.near,me.shadowCameraFar=se.camera.far,i.pointShadow[m]=me,i.pointShadowMap[m]=ce,i.pointShadowMatrix[m]=D.shadow.matrix,b++}i.point[m]=ie,m++}else if(D.isHemisphereLight){const ie=t.get(D);ie.skyColor.copy(D.color).multiplyScalar(Z*A),ie.groundColor.copy(D.groundColor).multiplyScalar(Z*A),i.hemi[v]=ie,v++}}x>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=_;const z=i.hash;(z.directionalLength!==g||z.pointLength!==m||z.spotLength!==d||z.rectAreaLength!==x||z.hemiLength!==v||z.numDirectionalShadows!==y||z.numPointShadows!==b||z.numSpotShadows!==M||z.numSpotMaps!==T||z.numLightProbes!==S)&&(i.directional.length=g,i.spot.length=d,i.rectArea.length=x,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+T-I,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=S,z.directionalLength=g,z.pointLength=m,z.spotLength=d,z.rectAreaLength=x,z.hemiLength=v,z.numDirectionalShadows=y,z.numPointShadows=b,z.numSpotShadows=M,z.numSpotMaps=T,z.numLightProbes=S,i.version=nv++)}function c(u,f){let h=0,p=0,_=0,g=0,m=0;const d=f.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),h++}else if(y.isSpotLight){const b=i.spot[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),_++}else if(y.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function qu(r,e){const t=new rv(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function sv(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new qu(r,e),t.set(s,[l])):o>=a.length?(l=new qu(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ov extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class av extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uv(r,e,t){let n=new nc;const i=new Ue,s=new Ue,o=new mt,a=new ov({depthPacking:qd}),l=new av,c={},u=t.maxTextureSize,f={[ei]:xn,[xn]:ei,[Zn]:Zn},h=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:lv,fragmentShader:cv}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new yn;_.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Mn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh;let d=this.type;this.render=function(b,M,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const I=r.getRenderTarget(),S=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),z=r.state;z.setBlending(ji),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=d!==Mi&&this.type===Mi,W=d===Mi&&this.type!==Mi;for(let D=0,V=b.length;D<V;D++){const Z=b[D],Q=Z.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);const ce=Q.getFrameExtents();if(i.multiply(ce),s.copy(Q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ce.x),i.x=s.x*ce.x,Q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ce.y),i.y=s.y*ce.y,Q.mapSize.y=s.y)),Q.map===null||O===!0||W===!0){const se=this.type!==Mi?{minFilter:Nt,magFilter:Nt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Ki(i.x,i.y,se),Q.map.texture.name=Z.name+".shadowMap",Q.camera.updateProjectionMatrix()}r.setRenderTarget(Q.map),r.clear();const ie=Q.getViewportCount();for(let se=0;se<ie;se++){const me=Q.getViewport(se);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),z.viewport(o),Q.updateMatrices(Z,se),n=Q.getFrustum(),y(M,T,Q.camera,Z,this.type)}Q.isPointLightShadow!==!0&&this.type===Mi&&x(Q,T),Q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(I,S,A)};function x(b,M){const T=e.update(g);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ki(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(M,null,T,h,g,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(M,null,T,p,g,null)}function v(b,M,T,I){let S=null;const A=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)S=A;else if(S=T.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const z=S.uuid,O=M.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let D=W[O];D===void 0&&(D=S.clone(),W[O]=D),S=D}if(S.visible=M.visible,S.wireframe=M.wireframe,I===Mi?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:f[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=r.properties.get(S);z.light=T}return S}function y(b,M,T,I,S){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Mi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const O=e.update(b),W=b.material;if(Array.isArray(W)){const D=O.groups;for(let V=0,Z=D.length;V<Z;V++){const Q=D[V],ce=W[Q.materialIndex];if(ce&&ce.visible){const ie=v(b,ce,I,S);b.onBeforeShadow(r,b,M,T,O,ie,Q),r.renderBufferDirect(T,null,O,ie,b,Q),b.onAfterShadow(r,b,M,T,O,ie,Q)}}}else if(W.visible){const D=v(b,W,I,S);b.onBeforeShadow(r,b,M,T,O,D,null),r.renderBufferDirect(T,null,O,D,b,null),b.onAfterShadow(r,b,M,T,O,D,null)}}const z=b.children;for(let O=0,W=z.length;O<W;O++)y(z[O],M,T,I,S)}}function hv(r,e,t){const n=t.isWebGL2;function i(){let F=!1;const ge=new mt;let ae=null;const ee=new mt(0,0,0,0);return{setMask:function(he){ae!==he&&!F&&(r.colorMask(he,he,he,he),ae=he)},setLocked:function(he){F=he},setClear:function(he,Le,nt,gt,Vt){Vt===!0&&(he*=gt,Le*=gt,nt*=gt),ge.set(he,Le,nt,gt),ee.equals(ge)===!1&&(r.clearColor(he,Le,nt,gt),ee.copy(ge))},reset:function(){F=!1,ae=null,ee.set(-1,0,0,0)}}}function s(){let F=!1,ge=null,ae=null,ee=null;return{setTest:function(he){he?We(r.DEPTH_TEST):Fe(r.DEPTH_TEST)},setMask:function(he){ge!==he&&!F&&(r.depthMask(he),ge=he)},setFunc:function(he){if(ae!==he){switch(he){case wd:r.depthFunc(r.NEVER);break;case Md:r.depthFunc(r.ALWAYS);break;case Td:r.depthFunc(r.LESS);break;case aa:r.depthFunc(r.LEQUAL);break;case Ad:r.depthFunc(r.EQUAL);break;case Rd:r.depthFunc(r.GEQUAL);break;case Ld:r.depthFunc(r.GREATER);break;case Cd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ae=he}},setLocked:function(he){F=he},setClear:function(he){ee!==he&&(r.clearDepth(he),ee=he)},reset:function(){F=!1,ge=null,ae=null,ee=null}}}function o(){let F=!1,ge=null,ae=null,ee=null,he=null,Le=null,nt=null,gt=null,Vt=null;return{setTest:function(ht){F||(ht?We(r.STENCIL_TEST):Fe(r.STENCIL_TEST))},setMask:function(ht){ge!==ht&&!F&&(r.stencilMask(ht),ge=ht)},setFunc:function(ht,ft,Sn){(ae!==ht||ee!==ft||he!==Sn)&&(r.stencilFunc(ht,ft,Sn),ae=ht,ee=ft,he=Sn)},setOp:function(ht,ft,Sn){(Le!==ht||nt!==ft||gt!==Sn)&&(r.stencilOp(ht,ft,Sn),Le=ht,nt=ft,gt=Sn)},setLocked:function(ht){F=ht},setClear:function(ht){Vt!==ht&&(r.clearStencil(ht),Vt=ht)},reset:function(){F=!1,ge=null,ae=null,ee=null,he=null,Le=null,nt=null,gt=null,Vt=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},_=new WeakMap,g=[],m=null,d=!1,x=null,v=null,y=null,b=null,M=null,T=null,I=null,S=new tt(0,0,0),A=0,z=!1,O=null,W=null,D=null,V=null,Z=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,ie=0;const se=r.getParameter(r.VERSION);se.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(se)[1]),ce=ie>=1):se.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ce=ie>=2);let me=null,ve={};const J=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),Se=new mt().fromArray(J),De=new mt().fromArray(oe);function _e(F,ge,ae,ee){const he=new Uint8Array(4),Le=r.createTexture();r.bindTexture(F,Le),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let nt=0;nt<ae;nt++)n&&(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)?r.texImage3D(ge,0,r.RGBA,1,1,ee,0,r.RGBA,r.UNSIGNED_BYTE,he):r.texImage2D(ge+nt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,he);return Le}const qe={};qe[r.TEXTURE_2D]=_e(r.TEXTURE_2D,r.TEXTURE_2D,1),qe[r.TEXTURE_CUBE_MAP]=_e(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(qe[r.TEXTURE_2D_ARRAY]=_e(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),qe[r.TEXTURE_3D]=_e(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),We(r.DEPTH_TEST),l.setFunc(aa),Ke(!1),ke(Mc),We(r.CULL_FACE),ze(ji);function We(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function Fe(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function Ye(F,ge){return p[F]!==ge?(r.bindFramebuffer(F,ge),p[F]=ge,n&&(F===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=ge),F===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=ge)),!0):!1}function X(F,ge){let ae=g,ee=!1;if(F)if(ae=_.get(ge),ae===void 0&&(ae=[],_.set(ge,ae)),F.isWebGLMultipleRenderTargets){const he=F.texture;if(ae.length!==he.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let Le=0,nt=he.length;Le<nt;Le++)ae[Le]=r.COLOR_ATTACHMENT0+Le;ae.length=he.length,ee=!0}}else ae[0]!==r.COLOR_ATTACHMENT0&&(ae[0]=r.COLOR_ATTACHMENT0,ee=!0);else ae[0]!==r.BACK&&(ae[0]=r.BACK,ee=!0);ee&&(t.isWebGL2?r.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Lt(F){return m!==F?(r.useProgram(F),m=F,!0):!1}const Ce={[hr]:r.FUNC_ADD,[cd]:r.FUNC_SUBTRACT,[ud]:r.FUNC_REVERSE_SUBTRACT};if(n)Ce[Lc]=r.MIN,Ce[Cc]=r.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Ce[Lc]=F.MIN_EXT,Ce[Cc]=F.MAX_EXT)}const $e={[hd]:r.ZERO,[fd]:r.ONE,[dd]:r.SRC_COLOR,[Tl]:r.SRC_ALPHA,[xd]:r.SRC_ALPHA_SATURATE,[gd]:r.DST_COLOR,[md]:r.DST_ALPHA,[pd]:r.ONE_MINUS_SRC_COLOR,[Al]:r.ONE_MINUS_SRC_ALPHA,[vd]:r.ONE_MINUS_DST_COLOR,[_d]:r.ONE_MINUS_DST_ALPHA,[yd]:r.CONSTANT_COLOR,[bd]:r.ONE_MINUS_CONSTANT_COLOR,[Sd]:r.CONSTANT_ALPHA,[Ed]:r.ONE_MINUS_CONSTANT_ALPHA};function ze(F,ge,ae,ee,he,Le,nt,gt,Vt,ht){if(F===ji){d===!0&&(Fe(r.BLEND),d=!1);return}if(d===!1&&(We(r.BLEND),d=!0),F!==ld){if(F!==x||ht!==z){if((v!==hr||M!==hr)&&(r.blendEquation(r.FUNC_ADD),v=hr,M=hr),ht)switch(F){case rs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Tc:r.blendFunc(r.ONE,r.ONE);break;case Ac:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case rs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Tc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ac:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,b=null,T=null,I=null,S.set(0,0,0),A=0,x=F,z=ht}return}he=he||ge,Le=Le||ae,nt=nt||ee,(ge!==v||he!==M)&&(r.blendEquationSeparate(Ce[ge],Ce[he]),v=ge,M=he),(ae!==y||ee!==b||Le!==T||nt!==I)&&(r.blendFuncSeparate($e[ae],$e[ee],$e[Le],$e[nt]),y=ae,b=ee,T=Le,I=nt),(gt.equals(S)===!1||Vt!==A)&&(r.blendColor(gt.r,gt.g,gt.b,Vt),S.copy(gt),A=Vt),x=F,z=!1}function _t(F,ge){F.side===Zn?Fe(r.CULL_FACE):We(r.CULL_FACE);let ae=F.side===xn;ge&&(ae=!ae),Ke(ae),F.blending===rs&&F.transparent===!1?ze(ji):ze(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const ee=F.stencilWrite;c.setTest(ee),ee&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Tt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?We(r.SAMPLE_ALPHA_TO_COVERAGE):Fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(F){O!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),O=F)}function ke(F){F!==sd?(We(r.CULL_FACE),F!==W&&(F===Mc?r.cullFace(r.BACK):F===od?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Fe(r.CULL_FACE),W=F}function ot(F){F!==D&&(ce&&r.lineWidth(F),D=F)}function Tt(F,ge,ae){F?(We(r.POLYGON_OFFSET_FILL),(V!==ge||Z!==ae)&&(r.polygonOffset(ge,ae),V=ge,Z=ae)):Fe(r.POLYGON_OFFSET_FILL)}function Ct(F){F?We(r.SCISSOR_TEST):Fe(r.SCISSOR_TEST)}function P(F){F===void 0&&(F=r.TEXTURE0+Q-1),me!==F&&(r.activeTexture(F),me=F)}function E(F,ge,ae){ae===void 0&&(me===null?ae=r.TEXTURE0+Q-1:ae=me);let ee=ve[ae];ee===void 0&&(ee={type:void 0,texture:void 0},ve[ae]=ee),(ee.type!==F||ee.texture!==ge)&&(me!==ae&&(r.activeTexture(ae),me=ae),r.bindTexture(F,ge||qe[F]),ee.type=F,ee.texture=ge)}function q(){const F=ve[me];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function le(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(F){Se.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Se.copy(F))}function Pe(F){De.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),De.copy(F))}function we(F,ge){let ae=f.get(ge);ae===void 0&&(ae=new WeakMap,f.set(ge,ae));let ee=ae.get(F);ee===void 0&&(ee=r.getUniformBlockIndex(ge,F.name),ae.set(F,ee))}function be(F,ge){const ee=f.get(ge).get(F);u.get(ge)!==ee&&(r.uniformBlockBinding(ge,ee,F.__bindingPointIndex),u.set(ge,ee))}function Ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},me=null,ve={},p={},_=new WeakMap,g=[],m=null,d=!1,x=null,v=null,y=null,b=null,M=null,T=null,I=null,S=new tt(0,0,0),A=0,z=!1,O=null,W=null,D=null,V=null,Z=null,Se.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:We,disable:Fe,bindFramebuffer:Ye,drawBuffers:X,useProgram:Lt,setBlending:ze,setMaterial:_t,setFlipSided:Ke,setCullFace:ke,setLineWidth:ot,setPolygonOffset:Tt,setScissorTest:Ct,activeTexture:P,bindTexture:E,unbindTexture:q,compressedTexImage2D:le,compressedTexImage3D:re,texImage2D:ne,texImage3D:Oe,updateUBOMapping:we,uniformBlockBinding:be,texStorage2D:N,texStorage3D:de,texSubImage2D:fe,texSubImage3D:Me,compressedTexSubImage2D:pe,compressedTexSubImage3D:ye,scissor:Re,viewport:Pe,reset:Ge}}function fv(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,E){return d?new OffscreenCanvas(P,E):to("canvas")}function v(P,E,q,le){let re=1;if((P.width>le||P.height>le)&&(re=le/Math.max(P.width,P.height)),re<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const fe=E?da:Math.floor,Me=fe(re*P.width),pe=fe(re*P.height);g===void 0&&(g=x(Me,pe));const ye=q?x(Me,pe):g;return ye.width=Me,ye.height=pe,ye.getContext("2d").drawImage(P,0,0,Me,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Me+"x"+pe+")."),ye}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function y(P){return Fl(P.width)&&Fl(P.height)}function b(P){return a?!1:P.wrapS!==Hn||P.wrapT!==Hn||P.minFilter!==Nt&&P.minFilter!==En}function M(P,E){return P.generateMipmaps&&E&&P.minFilter!==Nt&&P.minFilter!==En}function T(P){r.generateMipmap(P)}function I(P,E,q,le,re=!1){if(a===!1)return E;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=E;if(E===r.RED&&(q===r.FLOAT&&(fe=r.R32F),q===r.HALF_FLOAT&&(fe=r.R16F),q===r.UNSIGNED_BYTE&&(fe=r.R8)),E===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(fe=r.R8UI),q===r.UNSIGNED_SHORT&&(fe=r.R16UI),q===r.UNSIGNED_INT&&(fe=r.R32UI),q===r.BYTE&&(fe=r.R8I),q===r.SHORT&&(fe=r.R16I),q===r.INT&&(fe=r.R32I)),E===r.RG&&(q===r.FLOAT&&(fe=r.RG32F),q===r.HALF_FLOAT&&(fe=r.RG16F),q===r.UNSIGNED_BYTE&&(fe=r.RG8)),E===r.RGBA){const Me=re?ca:pt.getTransfer(le);q===r.FLOAT&&(fe=r.RGBA32F),q===r.HALF_FLOAT&&(fe=r.RGBA16F),q===r.UNSIGNED_BYTE&&(fe=Me===At?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function S(P,E,q){return M(P,q)===!0||P.isFramebufferTexture&&P.minFilter!==Nt&&P.minFilter!==En?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function A(P){return P===Nt||P===Cl||P===sa?r.NEAREST:r.LINEAR}function z(P){const E=P.target;E.removeEventListener("dispose",z),W(E),E.isVideoTexture&&_.delete(E)}function O(P){const E=P.target;E.removeEventListener("dispose",O),V(E)}function W(P){const E=n.get(P);if(E.__webglInit===void 0)return;const q=P.source,le=m.get(q);if(le){const re=le[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&D(P),Object.keys(le).length===0&&m.delete(q)}n.remove(P)}function D(P){const E=n.get(P);r.deleteTexture(E.__webglTexture);const q=P.source,le=m.get(q);delete le[E.__cacheKey],o.memory.textures--}function V(P){const E=P.texture,q=n.get(P),le=n.get(E);if(le.__webglTexture!==void 0&&(r.deleteTexture(le.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(q.__webglFramebuffer[re]))for(let fe=0;fe<q.__webglFramebuffer[re].length;fe++)r.deleteFramebuffer(q.__webglFramebuffer[re][fe]);else r.deleteFramebuffer(q.__webglFramebuffer[re]);q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer[re])}else{if(Array.isArray(q.__webglFramebuffer))for(let re=0;re<q.__webglFramebuffer.length;re++)r.deleteFramebuffer(q.__webglFramebuffer[re]);else r.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let re=0;re<q.__webglColorRenderbuffer.length;re++)q.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(q.__webglColorRenderbuffer[re]);q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let re=0,fe=E.length;re<fe;re++){const Me=n.get(E[re]);Me.__webglTexture&&(r.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(E[re])}n.remove(E),n.remove(P)}let Z=0;function Q(){Z=0}function ce(){const P=Z;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),Z+=1,P}function ie(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function se(P,E){const q=n.get(P);if(P.isVideoTexture&&Tt(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const le=P.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(q,P,E);return}}t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+E)}function me(P,E){const q=n.get(P);if(P.version>0&&q.__version!==P.version){We(q,P,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+E)}function ve(P,E){const q=n.get(P);if(P.version>0&&q.__version!==P.version){We(q,P,E);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+E)}function J(P,E){const q=n.get(P);if(P.version>0&&q.__version!==P.version){Fe(q,P,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+E)}const oe={[us]:r.REPEAT,[Hn]:r.CLAMP_TO_EDGE,[la]:r.MIRRORED_REPEAT},Se={[Nt]:r.NEAREST,[Cl]:r.NEAREST_MIPMAP_NEAREST,[sa]:r.NEAREST_MIPMAP_LINEAR,[En]:r.LINEAR,[ef]:r.LINEAR_MIPMAP_NEAREST,[gr]:r.LINEAR_MIPMAP_LINEAR},De={[Yd]:r.NEVER,[ep]:r.ALWAYS,[$d]:r.LESS,[hf]:r.LEQUAL,[Kd]:r.EQUAL,[Jd]:r.GEQUAL,[Zd]:r.GREATER,[Qd]:r.NOTEQUAL};function _e(P,E,q){if(q?(r.texParameteri(P,r.TEXTURE_WRAP_S,oe[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,oe[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,oe[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Se[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Se[E.minFilter])):(r.texParameteri(P,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(P,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==Hn||E.wrapT!==Hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,r.TEXTURE_MAG_FILTER,A(E.magFilter)),r.texParameteri(P,r.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==Nt&&E.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,De[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Nt||E.minFilter!==sa&&E.minFilter!==gr||E.type===vn&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Qs&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(P,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function qe(P,E){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",z));const le=E.source;let re=m.get(le);re===void 0&&(re={},m.set(le,re));const fe=ie(E);if(fe!==P.__cacheKey){re[fe]===void 0&&(re[fe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),re[fe].usedTimes++;const Me=re[P.__cacheKey];Me!==void 0&&(re[P.__cacheKey].usedTimes--,Me.usedTimes===0&&D(E)),P.__cacheKey=fe,P.__webglTexture=re[fe].texture}return q}function We(P,E,q){let le=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=r.TEXTURE_3D);const re=qe(P,E),fe=E.source;t.bindTexture(le,P.__webglTexture,r.TEXTURE0+q);const Me=n.get(fe);if(fe.version!==Me.__version||re===!0){t.activeTexture(r.TEXTURE0+q);const pe=pt.getPrimaries(pt.workingColorSpace),ye=E.colorSpace===Vn?null:pt.getPrimaries(E.colorSpace),N=E.colorSpace===Vn||pe===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);const de=b(E)&&y(E.image)===!1;let ne=v(E.image,de,!1,u);ne=Ct(E,ne);const Oe=y(ne)||a,Re=s.convert(E.format,E.colorSpace);let Pe=s.convert(E.type),we=I(E.internalFormat,Re,Pe,E.colorSpace,E.isVideoTexture);_e(le,E,Oe);let be;const Ge=E.mipmaps,F=a&&E.isVideoTexture!==!0&&we!==af,ge=Me.__version===void 0||re===!0,ae=S(E,ne,Oe);if(E.isDepthTexture)we=r.DEPTH_COMPONENT,a?E.type===vn?we=r.DEPTH_COMPONENT32F:E.type===Dn?we=r.DEPTH_COMPONENT24:E.type===pr?we=r.DEPTH24_STENCIL8:we=r.DEPTH_COMPONENT16:E.type===vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===mr&&we===r.DEPTH_COMPONENT&&E.type!==va&&E.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Dn,Pe=s.convert(E.type)),E.format===hs&&we===r.DEPTH_COMPONENT&&(we=r.DEPTH_STENCIL,E.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=pr,Pe=s.convert(E.type))),ge&&(F?t.texStorage2D(r.TEXTURE_2D,1,we,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,we,ne.width,ne.height,0,Re,Pe,null));else if(E.isDataTexture)if(Ge.length>0&&Oe){F&&ge&&t.texStorage2D(r.TEXTURE_2D,ae,we,Ge[0].width,Ge[0].height);for(let ee=0,he=Ge.length;ee<he;ee++)be=Ge[ee],F?t.texSubImage2D(r.TEXTURE_2D,ee,0,0,be.width,be.height,Re,Pe,be.data):t.texImage2D(r.TEXTURE_2D,ee,we,be.width,be.height,0,Re,Pe,be.data);E.generateMipmaps=!1}else F?(ge&&t.texStorage2D(r.TEXTURE_2D,ae,we,ne.width,ne.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,Re,Pe,ne.data)):t.texImage2D(r.TEXTURE_2D,0,we,ne.width,ne.height,0,Re,Pe,ne.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){F&&ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,we,Ge[0].width,Ge[0].height,ne.depth);for(let ee=0,he=Ge.length;ee<he;ee++)be=Ge[ee],E.format!==sn?Re!==null?F?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,be.width,be.height,ne.depth,Re,be.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,we,be.width,be.height,ne.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,be.width,be.height,ne.depth,Re,Pe,be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,we,be.width,be.height,ne.depth,0,Re,Pe,be.data)}else{F&&ge&&t.texStorage2D(r.TEXTURE_2D,ae,we,Ge[0].width,Ge[0].height);for(let ee=0,he=Ge.length;ee<he;ee++)be=Ge[ee],E.format!==sn?Re!==null?F?t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,be.width,be.height,Re,be.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,we,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage2D(r.TEXTURE_2D,ee,0,0,be.width,be.height,Re,Pe,be.data):t.texImage2D(r.TEXTURE_2D,ee,we,be.width,be.height,0,Re,Pe,be.data)}else if(E.isDataArrayTexture)F?(ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,we,ne.width,ne.height,ne.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Re,Pe,ne.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,ne.width,ne.height,ne.depth,0,Re,Pe,ne.data);else if(E.isData3DTexture)F?(ge&&t.texStorage3D(r.TEXTURE_3D,ae,we,ne.width,ne.height,ne.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Re,Pe,ne.data)):t.texImage3D(r.TEXTURE_3D,0,we,ne.width,ne.height,ne.depth,0,Re,Pe,ne.data);else if(E.isFramebufferTexture){if(ge)if(F)t.texStorage2D(r.TEXTURE_2D,ae,we,ne.width,ne.height);else{let ee=ne.width,he=ne.height;for(let Le=0;Le<ae;Le++)t.texImage2D(r.TEXTURE_2D,Le,we,ee,he,0,Re,Pe,null),ee>>=1,he>>=1}}else if(Ge.length>0&&Oe){F&&ge&&t.texStorage2D(r.TEXTURE_2D,ae,we,Ge[0].width,Ge[0].height);for(let ee=0,he=Ge.length;ee<he;ee++)be=Ge[ee],F?t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Re,Pe,be):t.texImage2D(r.TEXTURE_2D,ee,we,Re,Pe,be);E.generateMipmaps=!1}else F?(ge&&t.texStorage2D(r.TEXTURE_2D,ae,we,ne.width,ne.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,Pe,ne)):t.texImage2D(r.TEXTURE_2D,0,we,Re,Pe,ne);M(E,Oe)&&T(le),Me.__version=fe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Fe(P,E,q){if(E.image.length!==6)return;const le=qe(P,E),re=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+q);const fe=n.get(re);if(re.version!==fe.__version||le===!0){t.activeTexture(r.TEXTURE0+q);const Me=pt.getPrimaries(pt.workingColorSpace),pe=E.colorSpace===Vn?null:pt.getPrimaries(E.colorSpace),ye=E.colorSpace===Vn||Me===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const N=E.isCompressedTexture||E.image[0].isCompressedTexture,de=E.image[0]&&E.image[0].isDataTexture,ne=[];for(let ee=0;ee<6;ee++)!N&&!de?ne[ee]=v(E.image[ee],!1,!0,c):ne[ee]=de?E.image[ee].image:E.image[ee],ne[ee]=Ct(E,ne[ee]);const Oe=ne[0],Re=y(Oe)||a,Pe=s.convert(E.format,E.colorSpace),we=s.convert(E.type),be=I(E.internalFormat,Pe,we,E.colorSpace),Ge=a&&E.isVideoTexture!==!0,F=fe.__version===void 0||le===!0;let ge=S(E,Oe,Re);_e(r.TEXTURE_CUBE_MAP,E,Re);let ae;if(N){Ge&&F&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,be,Oe.width,Oe.height);for(let ee=0;ee<6;ee++){ae=ne[ee].mipmaps;for(let he=0;he<ae.length;he++){const Le=ae[he];E.format!==sn?Pe!==null?Ge?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,0,0,Le.width,Le.height,Pe,Le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,be,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,0,0,Le.width,Le.height,Pe,we,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,be,Le.width,Le.height,0,Pe,we,Le.data)}}}else{ae=E.mipmaps,Ge&&F&&(ae.length>0&&ge++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,be,ne[0].width,ne[0].height));for(let ee=0;ee<6;ee++)if(de){Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ne[ee].width,ne[ee].height,Pe,we,ne[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,be,ne[ee].width,ne[ee].height,0,Pe,we,ne[ee].data);for(let he=0;he<ae.length;he++){const nt=ae[he].image[ee].image;Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,0,0,nt.width,nt.height,Pe,we,nt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,be,nt.width,nt.height,0,Pe,we,nt.data)}}else{Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,we,ne[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,be,Pe,we,ne[ee]);for(let he=0;he<ae.length;he++){const Le=ae[he];Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,0,0,Pe,we,Le.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,be,Pe,we,Le.image[ee])}}}M(E,Re)&&T(r.TEXTURE_CUBE_MAP),fe.__version=re.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ye(P,E,q,le,re,fe){const Me=s.convert(q.format,q.colorSpace),pe=s.convert(q.type),ye=I(q.internalFormat,Me,pe,q.colorSpace);if(!n.get(E).__hasExternalTextures){const de=Math.max(1,E.width>>fe),ne=Math.max(1,E.height>>fe);re===r.TEXTURE_3D||re===r.TEXTURE_2D_ARRAY?t.texImage3D(re,fe,ye,de,ne,E.depth,0,Me,pe,null):t.texImage2D(re,fe,ye,de,ne,0,Me,pe,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),ot(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,re,n.get(q).__webglTexture,0,ke(E)):(re===r.TEXTURE_2D||re>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,re,n.get(q).__webglTexture,fe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function X(P,E,q){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer&&!E.stencilBuffer){let le=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(q||ot(E)){const re=E.depthTexture;re&&re.isDepthTexture&&(re.type===vn?le=r.DEPTH_COMPONENT32F:re.type===Dn&&(le=r.DEPTH_COMPONENT24));const fe=ke(E);ot(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,le,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,le,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,le,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(E.depthBuffer&&E.stencilBuffer){const le=ke(E);q&&ot(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,r.DEPTH24_STENCIL8,E.width,E.height):ot(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{const le=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let re=0;re<le.length;re++){const fe=le[re],Me=s.convert(fe.format,fe.colorSpace),pe=s.convert(fe.type),ye=I(fe.internalFormat,Me,pe,fe.colorSpace),N=ke(E);q&&ot(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,N,ye,E.width,E.height):ot(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N,ye,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ye,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Lt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se(E.depthTexture,0);const le=n.get(E.depthTexture).__webglTexture,re=ke(E);if(E.depthTexture.format===mr)ot(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0);else if(E.depthTexture.format===hs)ot(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ce(P){const E=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Lt(E.__webglFramebuffer,P)}else if(q){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]=r.createRenderbuffer(),X(E.__webglDepthbuffer[le],P,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),X(E.__webglDepthbuffer,P,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(P,E,q){const le=n.get(P);E!==void 0&&Ye(le.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&Ce(P)}function ze(P){const E=P.texture,q=n.get(P),le=n.get(E);P.addEventListener("dispose",O),P.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=E.version,o.memory.textures++);const re=P.isWebGLCubeRenderTarget===!0,fe=P.isWebGLMultipleRenderTargets===!0,Me=y(P)||a;if(re){q.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[pe]=[];for(let ye=0;ye<E.mipmaps.length;ye++)q.__webglFramebuffer[pe][ye]=r.createFramebuffer()}else q.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)q.__webglFramebuffer[pe]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(fe)if(i.drawBuffers){const pe=P.texture;for(let ye=0,N=pe.length;ye<N;ye++){const de=n.get(pe[ye]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&ot(P)===!1){const pe=fe?E:[E];q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ye=0;ye<pe.length;ye++){const N=pe[ye];q.__webglColorRenderbuffer[ye]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[ye]);const de=s.convert(N.format,N.colorSpace),ne=s.convert(N.type),Oe=I(N.internalFormat,de,ne,N.colorSpace,P.isXRRenderTarget===!0),Re=ke(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,Oe,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,q.__webglColorRenderbuffer[ye])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),X(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(re){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),_e(r.TEXTURE_CUBE_MAP,E,Me);for(let pe=0;pe<6;pe++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)Ye(q.__webglFramebuffer[pe][ye],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye);else Ye(q.__webglFramebuffer[pe],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);M(E,Me)&&T(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){const pe=P.texture;for(let ye=0,N=pe.length;ye<N;ye++){const de=pe[ye],ne=n.get(de);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),_e(r.TEXTURE_2D,de,Me),Ye(q.__webglFramebuffer,P,de,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,0),M(de,Me)&&T(r.TEXTURE_2D)}t.unbindTexture()}else{let pe=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?pe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,le.__webglTexture),_e(pe,E,Me),a&&E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)Ye(q.__webglFramebuffer[ye],P,E,r.COLOR_ATTACHMENT0,pe,ye);else Ye(q.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,pe,0);M(E,Me)&&T(pe),t.unbindTexture()}P.depthBuffer&&Ce(P)}function _t(P){const E=y(P)||a,q=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let le=0,re=q.length;le<re;le++){const fe=q[le];if(M(fe,E)){const Me=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,pe=n.get(fe).__webglTexture;t.bindTexture(Me,pe),T(Me),t.unbindTexture()}}}function Ke(P){if(a&&P.samples>0&&ot(P)===!1){const E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],q=P.width,le=P.height;let re=r.COLOR_BUFFER_BIT;const fe=[],Me=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=n.get(P),ye=P.isWebGLMultipleRenderTargets===!0;if(ye)for(let N=0;N<E.length;N++)t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+N,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+N,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let N=0;N<E.length;N++){fe.push(r.COLOR_ATTACHMENT0+N),P.depthBuffer&&fe.push(Me);const de=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(de===!1&&(P.depthBuffer&&(re|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&(re|=r.STENCIL_BUFFER_BIT)),ye&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,pe.__webglColorRenderbuffer[N]),de===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Me]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Me])),ye){const ne=n.get(E[N]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,q,le,0,0,q,le,re,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ye)for(let N=0;N<E.length;N++){t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+N,r.RENDERBUFFER,pe.__webglColorRenderbuffer[N]);const de=n.get(E[N]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+N,r.TEXTURE_2D,de,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function ke(P){return Math.min(f,P.samples)}function ot(P){const E=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Tt(P){const E=o.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function Ct(P,E){const q=P.colorSpace,le=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Nl||q!==an&&q!==Vn&&(pt.getTransfer(q)===At?a===!1?e.has("EXT_sRGB")===!0&&le===sn?(P.format=Nl,P.minFilter=En,P.generateMipmaps=!1):E=pf.sRGBToLinear(E):(le!==sn||re!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}this.allocateTextureUnit=ce,this.resetTextureUnits=Q,this.setTexture2D=se,this.setTexture2DArray=me,this.setTexture3D=ve,this.setTextureCube=J,this.rebindTextures=$e,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=ot}function dv(r,e,t){const n=t.isWebGL2;function i(s,o=Vn){let a;const l=pt.getTransfer(o);if(s===fi)return r.UNSIGNED_BYTE;if(s===nf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===rf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Pl)return r.BYTE;if(s===tf)return r.SHORT;if(s===va)return r.UNSIGNED_SHORT;if(s===Ws)return r.INT;if(s===Dn)return r.UNSIGNED_INT;if(s===vn)return r.FLOAT;if(s===Qs)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===zd)return r.ALPHA;if(s===sn)return r.RGBA;if(s===kd)return r.LUMINANCE;if(s===Hd)return r.LUMINANCE_ALPHA;if(s===mr)return r.DEPTH_COMPONENT;if(s===hs)return r.DEPTH_STENCIL;if(s===Nl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===sf)return r.RED;if(s===Jl)return r.RED_INTEGER;if(s===of)return r.RG;if(s===xa)return r.RG_INTEGER;if(s===Js)return r.RGBA_INTEGER;if(s===La||s===Ca||s===Pa||s===Da)if(l===At)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===La)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===La)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ca)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Da)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Dc||s===Ic||s===Nc||s===Fc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Dc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ic)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Nc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===af)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Oc||s===Uc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Oc)return l===At?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Uc)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Bc||s===zc||s===kc||s===Hc||s===Vc||s===Gc||s===Wc||s===Xc||s===qc||s===jc||s===Yc||s===$c||s===Kc||s===Zc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Bc)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===zc)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kc)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Hc)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Vc)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Gc)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wc)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xc)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qc)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jc)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Yc)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$c)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Kc)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zc)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ia||s===Qc||s===Jc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ia)return l===At?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Qc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Vd||s===eu||s===tu||s===nu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ia)return a.COMPRESSED_RED_RGTC1_EXT;if(s===eu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===tu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===nu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===pr?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class pv extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dr extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mv={type:"move"};class il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _v extends xr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const g=t.getContextAttributes();let m=null,d=null;const x=[],v=[],y=new Ue;let b=null;const M=new _n;M.layers.enable(1),M.viewport=new mt;const T=new _n;T.layers.enable(2),T.viewport=new mt;const I=[M,T],S=new pv;S.layers.enable(1),S.layers.enable(2);let A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=x[J];return oe===void 0&&(oe=new il,x[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=x[J];return oe===void 0&&(oe=new il,x[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=x[J];return oe===void 0&&(oe=new il,x[J]=oe),oe.getHandSpace()};function O(J){const oe=v.indexOf(J.inputSource);if(oe===-1)return;const Se=x[oe];Se!==void 0&&(Se.update(J.inputSource,J.frame,c||o),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",D);for(let J=0;J<x.length;J++){const oe=v[J];oe!==null&&(v[J]=null,x[J].disconnect(oe))}A=null,z=null,e.setRenderTarget(m),p=null,h=null,f=null,i=null,d=null,ve.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",W),i.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Ki(p.framebufferWidth,p.framebufferHeight,{format:sn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let oe=null,Se=null,De=null;g.depth&&(De=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=g.stencil?hs:mr,Se=g.stencil?pr:Dn);const _e={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(_e),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new Ki(h.textureWidth,h.textureHeight,{format:sn,type:fi,depthTexture:new Mf(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const qe=e.properties.get(d);qe.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ve.setContext(i),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(J){for(let oe=0;oe<J.removed.length;oe++){const Se=J.removed[oe],De=v.indexOf(Se);De>=0&&(v[De]=null,x[De].disconnect(Se))}for(let oe=0;oe<J.added.length;oe++){const Se=J.added[oe];let De=v.indexOf(Se);if(De===-1){for(let qe=0;qe<x.length;qe++)if(qe>=v.length){v.push(Se),De=qe;break}else if(v[qe]===null){v[qe]=Se,De=qe;break}if(De===-1)break}const _e=x[De];_e&&_e.connect(Se)}}const V=new C,Z=new C;function Q(J,oe,Se){V.setFromMatrixPosition(oe.matrixWorld),Z.setFromMatrixPosition(Se.matrixWorld);const De=V.distanceTo(Z),_e=oe.projectionMatrix.elements,qe=Se.projectionMatrix.elements,We=_e[14]/(_e[10]-1),Fe=_e[14]/(_e[10]+1),Ye=(_e[9]+1)/_e[5],X=(_e[9]-1)/_e[5],Lt=(_e[8]-1)/_e[0],Ce=(qe[8]+1)/qe[0],$e=We*Lt,ze=We*Ce,_t=De/(-Lt+Ce),Ke=_t*-Lt;oe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ke),J.translateZ(_t),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const ke=We+_t,ot=Fe+_t,Tt=$e-Ke,Ct=ze+(De-Ke),P=Ye*Fe/ot*ke,E=X*Fe/ot*ke;J.projectionMatrix.makePerspective(Tt,Ct,P,E,ke,ot),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function ce(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;S.near=T.near=M.near=J.near,S.far=T.far=M.far=J.far,(A!==S.near||z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,z=S.far);const oe=J.parent,Se=S.cameras;ce(S,oe);for(let De=0;De<Se.length;De++)ce(Se[De],oe);Se.length===2?Q(S,M,T):S.projectionMatrix.copy(M.projectionMatrix),ie(J,S,oe)};function ie(J,oe,Se){Se===null?J.matrix.copy(oe.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(oe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ds*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)};let se=null;function me(J,oe){if(u=oe.getViewerPose(c||o),_=oe,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let De=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,De=!0);for(let _e=0;_e<Se.length;_e++){const qe=Se[_e];let We=null;if(p!==null)We=p.getViewport(qe);else{const Ye=f.getViewSubImage(h,qe);We=Ye.viewport,_e===0&&(e.setRenderTargetTextures(d,Ye.colorTexture,h.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(d))}let Fe=I[_e];Fe===void 0&&(Fe=new _n,Fe.layers.enable(_e),Fe.viewport=new mt,I[_e]=Fe),Fe.matrix.fromArray(qe.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(qe.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(We.x,We.y,We.width,We.height),_e===0&&(S.matrix.copy(Fe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),De===!0&&S.cameras.push(Fe)}}for(let Se=0;Se<x.length;Se++){const De=v[Se],_e=x[Se];De!==null&&_e!==void 0&&_e.update(De,oe,c||o)}se&&se(J,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),_=null}const ve=new wf;ve.setAnimationLoop(me),this.setAnimationLoop=function(J){se=J},this.dispose=function(){}}}function gv(r,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,bf(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,x,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,x,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===xn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===xn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vv(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=i[x.id];y===void 0&&(_(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",m));const b=v.program;n.updateUBOMapping(x,b);const M=e.render.frame;s[x.id]!==M&&(h(x),s[x.id]=M)}function u(x){const v=f();x.__bindingPointIndex=v;const y=r.createBuffer(),b=x.__size,M=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,b,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=i[x.id],y=x.uniforms,b=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let M=0,T=y.length;M<T;M++){const I=y[M];if(p(I,M,b)===!0){const S=I.__offset,A=Array.isArray(I.value)?I.value:[I.value];let z=0;for(let O=0;O<A.length;O++){const W=A[O],D=g(W);typeof W=="number"?(I.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,S+z,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=W.elements[0],I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=W.elements[0],I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=W.elements[0]):(W.toArray(I.__data,z),z+=D.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,S,I.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(x,v,y){const b=x.value;if(y[v]===void 0){if(typeof b=="number")y[v]=b;else{const M=Array.isArray(b)?b:[b],T=[];for(let I=0;I<M.length;I++)T.push(M[I].clone());y[v]=T}return!0}else if(typeof b=="number"){if(y[v]!==b)return y[v]=b,!0}else{const M=Array.isArray(y[v])?y[v]:[y[v]],T=Array.isArray(b)?b:[b];for(let I=0;I<M.length;I++){const S=M[I];if(S.equals(T[I])===!1)return S.copy(T[I]),!0}}return!1}function _(x){const v=x.uniforms;let y=0;const b=16;let M=0;for(let T=0,I=v.length;T<I;T++){const S=v[T],A={boundary:0,storage:0},z=Array.isArray(S.value)?S.value:[S.value];for(let O=0,W=z.length;O<W;O++){const D=z[O],V=g(D);A.boundary+=V.boundary,A.storage+=V.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,T>0){M=y%b;const O=b-M;M!==0&&O-A.boundary<0&&(y+=b-M,S.__offset=y)}y+=A.storage}return M=y%b,M>0&&(y+=b-M),x.__size=y,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function d(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:d}}class Pf{constructor(e={}){const{canvas:t=mp(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const d=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;const v=this;let y=!1,b=0,M=0,T=null,I=-1,S=null;const A=new mt,z=new mt;let O=null;const W=new tt(0);let D=0,V=t.width,Z=t.height,Q=1,ce=null,ie=null;const se=new mt(0,0,V,Z),me=new mt(0,0,V,Z);let ve=!1;const J=new nc;let oe=!1,Se=!1,De=null;const _e=new Ve,qe=new Ue,We=new C,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return T===null?Q:1}let X=n;function Lt(R,H){for(let j=0;j<R.length;j++){const K=R[j],Y=t.getContext(K,H);if(Y!==null)return Y}return null}try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ql}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",ge,!1),X===null){const H=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&H.shift(),X=Lt(H,R),X===null)throw Lt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ce,$e,ze,_t,Ke,ke,ot,Tt,Ct,P,E,q,le,re,fe,Me,pe,ye,N,de,ne,Oe,Re,Pe;function we(){Ce=new Lg(X),$e=new Eg(X,Ce,e),Ce.init($e),Oe=new dv(X,Ce,$e),ze=new hv(X,Ce,$e),_t=new Dg(X),Ke=new Z0,ke=new fv(X,Ce,ze,Ke,$e,Oe,_t),ot=new Mg(v),Tt=new Rg(v),Ct=new kp(X,$e),Re=new bg(X,Ce,Ct,$e),P=new Cg(X,Ct,_t,Re),E=new Og(X,P,Ct,_t),N=new Fg(X,$e,ke),Me=new wg(Ke),q=new K0(v,ot,Tt,Ce,$e,Re,Me),le=new gv(v,Ke),re=new J0,fe=new sv(Ce,$e),ye=new yg(v,ot,Tt,ze,E,h,l),pe=new uv(v,E,$e),Pe=new vv(X,_t,$e,ze),de=new Sg(X,Ce,_t,$e),ne=new Pg(X,Ce,_t,$e),_t.programs=q.programs,v.capabilities=$e,v.extensions=Ce,v.properties=Ke,v.renderLists=re,v.shadowMap=pe,v.state=ze,v.info=_t}we();const be=new _v(v,X);this.xr=be,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=Ce.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ce.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize(V,Z,!1))},this.getSize=function(R){return R.set(V,Z)},this.setSize=function(R,H,j=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,Z=H,t.width=Math.floor(R*Q),t.height=Math.floor(H*Q),j===!0&&(t.style.width=R+"px",t.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(V*Q,Z*Q).floor()},this.setDrawingBufferSize=function(R,H,j){V=R,Z=H,Q=j,t.width=Math.floor(R*j),t.height=Math.floor(H*j),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(se)},this.setViewport=function(R,H,j,K){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,H,j,K),ze.viewport(A.copy(se).multiplyScalar(Q).floor())},this.getScissor=function(R){return R.copy(me)},this.setScissor=function(R,H,j,K){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,H,j,K),ze.scissor(z.copy(me).multiplyScalar(Q).floor())},this.getScissorTest=function(){return ve},this.setScissorTest=function(R){ze.setScissorTest(ve=R)},this.setOpaqueSort=function(R){ce=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(R=!0,H=!0,j=!0){let K=0;if(R){let Y=!1;if(T!==null){const Ee=T.texture.format;Y=Ee===Js||Ee===xa||Ee===Jl}if(Y){const Ee=T.texture.type,Ie=Ee===fi||Ee===Dn||Ee===va||Ee===pr||Ee===nf||Ee===rf,He=ye.getClearColor(),Xe=ye.getClearAlpha(),et=He.r,je=He.g,Ze=He.b;Ie?(p[0]=et,p[1]=je,p[2]=Ze,p[3]=Xe,X.clearBufferuiv(X.COLOR,0,p)):(_[0]=et,_[1]=je,_[2]=Ze,_[3]=Xe,X.clearBufferiv(X.COLOR,0,_))}else K|=X.COLOR_BUFFER_BIT}H&&(K|=X.DEPTH_BUFFER_BIT),j&&(K|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),re.dispose(),fe.dispose(),Ke.dispose(),ot.dispose(),Tt.dispose(),E.dispose(),Re.dispose(),Pe.dispose(),q.dispose(),be.dispose(),be.removeEventListener("sessionstart",Vt),be.removeEventListener("sessionend",ht),De&&(De.dispose(),De=null),ft.stop()};function Ge(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=_t.autoReset,H=pe.enabled,j=pe.autoUpdate,K=pe.needsUpdate,Y=pe.type;we(),_t.autoReset=R,pe.enabled=H,pe.autoUpdate=j,pe.needsUpdate=K,pe.type=Y}function ge(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){const H=R.target;H.removeEventListener("dispose",ae),ee(H)}function ee(R){he(R),Ke.remove(R)}function he(R){const H=Ke.get(R).programs;H!==void 0&&(H.forEach(function(j){q.releaseProgram(j)}),R.isShaderMaterial&&q.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,j,K,Y,Ee){H===null&&(H=Fe);const Ie=Y.isMesh&&Y.matrixWorld.determinant()<0,He=Xn(R,H,j,K,Y);ze.setMaterial(K,Ie);let Xe=j.index,et=1;if(K.wireframe===!0){if(Xe=P.getWireframeAttribute(j),Xe===void 0)return;et=2}const je=j.drawRange,Ze=j.attributes.position;let xt=je.start*et,Gt=(je.start+je.count)*et;Ee!==null&&(xt=Math.max(xt,Ee.start*et),Gt=Math.min(Gt,(Ee.start+Ee.count)*et)),Xe!==null?(xt=Math.max(xt,0),Gt=Math.min(Gt,Xe.count)):Ze!=null&&(xt=Math.max(xt,0),Gt=Math.min(Gt,Ze.count));const zt=Gt-xt;if(zt<0||zt===1/0)return;Re.setup(Y,K,He,j,Xe);let cn,at=de;if(Xe!==null&&(cn=Ct.get(Xe),at=ne,at.setIndex(cn)),Y.isMesh)K.wireframe===!0?(ze.setLineWidth(K.wireframeLinewidth*Ye()),at.setMode(X.LINES)):at.setMode(X.TRIANGLES);else if(Y.isLine){let Qe=K.linewidth;Qe===void 0&&(Qe=1),ze.setLineWidth(Qe*Ye()),Y.isLineSegments?at.setMode(X.LINES):Y.isLineLoop?at.setMode(X.LINE_LOOP):at.setMode(X.LINE_STRIP)}else Y.isPoints?at.setMode(X.POINTS):Y.isSprite&&at.setMode(X.TRIANGLES);if(Y.isBatchedMesh)at.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)at.renderInstances(xt,zt,Y.count);else if(j.isInstancedBufferGeometry){const Qe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ji=Math.min(j.instanceCount,Qe);at.renderInstances(xt,zt,Ji)}else at.render(xt,zt)};function Le(R,H,j){R.transparent===!0&&R.side===Zn&&R.forceSinglePass===!1?(R.side=xn,R.needsUpdate=!0,ri(R,H,j),R.side=ei,R.needsUpdate=!0,ri(R,H,j),R.side=Zn):ri(R,H,j)}this.compile=function(R,H,j=null){j===null&&(j=R),m=fe.get(j),m.init(),x.push(m),j.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),R!==j&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(v._useLegacyLights);const K=new Set;return R.traverse(function(Y){const Ee=Y.material;if(Ee)if(Array.isArray(Ee))for(let Ie=0;Ie<Ee.length;Ie++){const He=Ee[Ie];Le(He,j,Y),K.add(He)}else Le(Ee,j,Y),K.add(Ee)}),x.pop(),m=null,K},this.compileAsync=function(R,H,j=null){const K=this.compile(R,H,j);return new Promise(Y=>{function Ee(){if(K.forEach(function(Ie){Ke.get(Ie).currentProgram.isReady()&&K.delete(Ie)}),K.size===0){Y(R);return}setTimeout(Ee,10)}Ce.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let nt=null;function gt(R){nt&&nt(R)}function Vt(){ft.stop()}function ht(){ft.start()}const ft=new wf;ft.setAnimationLoop(gt),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(R){nt=R,be.setAnimationLoop(R),R===null?ft.stop():ft.start()},be.addEventListener("sessionstart",Vt),be.addEventListener("sessionend",ht),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(H),H=be.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,H,T),m=fe.get(R,x.length),m.init(),x.push(m),_e.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),J.setFromProjectionMatrix(_e),Se=this.localClippingEnabled,oe=Me.init(this.clippingPlanes,Se),g=re.get(R,d.length),g.init(),d.push(g),Sn(R,H,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ce,ie),this.info.render.frame++,oe===!0&&Me.beginShadows();const j=m.state.shadowsArray;if(pe.render(j,R,H),oe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),ye.render(g,R),m.setupLights(v._useLegacyLights),H.isArrayCamera){const K=H.cameras;for(let Y=0,Ee=K.length;Y<Ee;Y++){const Ie=K[Y];ii(g,R,Ie,Ie.viewport)}}else ii(g,R,H);T!==null&&(ke.updateMultisampleRenderTarget(T),ke.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(v,R,H),Re.resetDefaultState(),I=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Sn(R,H,j,K){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){K&&We.setFromMatrixPosition(R.matrixWorld).applyMatrix4(_e);const Ie=E.update(R),He=R.material;He.visible&&g.push(R,Ie,He,j,We.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Ie=E.update(R),He=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),We.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),We.copy(Ie.boundingSphere.center)),We.applyMatrix4(R.matrixWorld).applyMatrix4(_e)),Array.isArray(He)){const Xe=Ie.groups;for(let et=0,je=Xe.length;et<je;et++){const Ze=Xe[et],xt=He[Ze.materialIndex];xt&&xt.visible&&g.push(R,Ie,xt,j,We.z,Ze)}}else He.visible&&g.push(R,Ie,He,j,We.z,null)}}const Ee=R.children;for(let Ie=0,He=Ee.length;Ie<He;Ie++)Sn(Ee[Ie],H,j,K)}function ii(R,H,j,K){const Y=R.opaque,Ee=R.transmissive,Ie=R.transparent;m.setupLightsView(j),oe===!0&&Me.setGlobalState(v.clippingPlanes,j),Ee.length>0&&ln(Y,Ee,H,j),K&&ze.viewport(A.copy(K)),Y.length>0&&Ii(Y,H,j),Ee.length>0&&Ii(Ee,H,j),Ie.length>0&&Ii(Ie,H,j),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function ln(R,H,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const Ee=$e.isWebGL2;De===null&&(De=new Ki(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?Qs:fi,minFilter:gr,samples:Ee?4:0})),v.getDrawingBufferSize(qe),Ee?De.setSize(qe.x,qe.y):De.setSize(da(qe.x),da(qe.y));const Ie=v.getRenderTarget();v.setRenderTarget(De),v.getClearColor(W),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const He=v.toneMapping;v.toneMapping=Yi,Ii(R,j,K),ke.updateMultisampleRenderTarget(De),ke.updateRenderTargetMipmap(De);let Xe=!1;for(let et=0,je=H.length;et<je;et++){const Ze=H[et],xt=Ze.object,Gt=Ze.geometry,zt=Ze.material,cn=Ze.group;if(zt.side===Zn&&xt.layers.test(K.layers)){const at=zt.side;zt.side=xn,zt.needsUpdate=!0,yr(xt,j,K,Gt,zt,cn),zt.side=at,zt.needsUpdate=!0,Xe=!0}}Xe===!0&&(ke.updateMultisampleRenderTarget(De),ke.updateRenderTargetMipmap(De)),v.setRenderTarget(Ie),v.setClearColor(W,D),v.toneMapping=He}function Ii(R,H,j){const K=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,Ee=R.length;Y<Ee;Y++){const Ie=R[Y],He=Ie.object,Xe=Ie.geometry,et=K===null?Ie.material:K,je=Ie.group;He.layers.test(j.layers)&&yr(He,H,j,Xe,et,je)}}function yr(R,H,j,K,Y,Ee){R.onBeforeRender(v,H,j,K,Y,Ee),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(v,H,j,K,R,Ee),Y.transparent===!0&&Y.side===Zn&&Y.forceSinglePass===!1?(Y.side=xn,Y.needsUpdate=!0,v.renderBufferDirect(j,H,K,Y,R,Ee),Y.side=ei,Y.needsUpdate=!0,v.renderBufferDirect(j,H,K,Y,R,Ee),Y.side=Zn):v.renderBufferDirect(j,H,K,Y,R,Ee),R.onAfterRender(v,H,j,K,Y,Ee)}function ri(R,H,j){H.isScene!==!0&&(H=Fe);const K=Ke.get(R),Y=m.state.lights,Ee=m.state.shadowsArray,Ie=Y.state.version,He=q.getParameters(R,Y.state,Ee,H,j),Xe=q.getProgramCacheKey(He);let et=K.programs;K.environment=R.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(R.isMeshStandardMaterial?Tt:ot).get(R.envMap||K.environment),et===void 0&&(R.addEventListener("dispose",ae),et=new Map,K.programs=et);let je=et.get(Xe);if(je!==void 0){if(K.currentProgram===je&&K.lightsStateVersion===Ie)return Sr(R,He),je}else He.uniforms=q.getUniforms(R),R.onBuild(j,He,v),R.onBeforeCompile(He,v),je=q.acquireProgram(He,Xe),et.set(Xe,je),K.uniforms=He.uniforms;const Ze=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=Me.uniform),Sr(R,He),K.needsLights=Es(R),K.lightsStateVersion=Ie,K.needsLights&&(Ze.ambientLightColor.value=Y.state.ambient,Ze.lightProbe.value=Y.state.probe,Ze.directionalLights.value=Y.state.directional,Ze.directionalLightShadows.value=Y.state.directionalShadow,Ze.spotLights.value=Y.state.spot,Ze.spotLightShadows.value=Y.state.spotShadow,Ze.rectAreaLights.value=Y.state.rectArea,Ze.ltc_1.value=Y.state.rectAreaLTC1,Ze.ltc_2.value=Y.state.rectAreaLTC2,Ze.pointLights.value=Y.state.point,Ze.pointLightShadows.value=Y.state.pointShadow,Ze.hemisphereLights.value=Y.state.hemi,Ze.directionalShadowMap.value=Y.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ze.spotShadowMap.value=Y.state.spotShadowMap,Ze.spotLightMatrix.value=Y.state.spotLightMatrix,Ze.spotLightMap.value=Y.state.spotLightMap,Ze.pointShadowMap.value=Y.state.pointShadowMap,Ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=je,K.uniformsList=null,je}function br(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=oa.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function Sr(R,H){const j=Ke.get(R);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function Xn(R,H,j,K,Y){H.isScene!==!0&&(H=Fe),ke.resetTextureUnits();const Ee=H.fog,Ie=K.isMeshStandardMaterial?H.environment:null,He=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:an,Xe=(K.isMeshStandardMaterial?Tt:ot).get(K.envMap||Ie),et=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,je=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ze=!!j.morphAttributes.position,xt=!!j.morphAttributes.normal,Gt=!!j.morphAttributes.color;let zt=Yi;K.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(zt=v.toneMapping);const cn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,at=cn!==void 0?cn.length:0,Qe=Ke.get(K),Ji=m.state.lights;if(oe===!0&&(Se===!0||R!==S)){const te=R===S&&K.id===I;Me.setState(K,R,te)}let yt=!1;K.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Ji.state.version||Qe.outputColorSpace!==He||Y.isBatchedMesh&&Qe.batching===!1||!Y.isBatchedMesh&&Qe.batching===!0||Y.isInstancedMesh&&Qe.instancing===!1||!Y.isInstancedMesh&&Qe.instancing===!0||Y.isSkinnedMesh&&Qe.skinning===!1||!Y.isSkinnedMesh&&Qe.skinning===!0||Y.isInstancedMesh&&Qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Qe.instancingColor===!1&&Y.instanceColor!==null||Qe.envMap!==Xe||K.fog===!0&&Qe.fog!==Ee||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Me.numPlanes||Qe.numIntersection!==Me.numIntersection)||Qe.vertexAlphas!==et||Qe.vertexTangents!==je||Qe.morphTargets!==Ze||Qe.morphNormals!==xt||Qe.morphColors!==Gt||Qe.toneMapping!==zt||$e.isWebGL2===!0&&Qe.morphTargetsCount!==at)&&(yt=!0):(yt=!0,Qe.__version=K.version);let Fn=Qe.currentProgram;yt===!0&&(Fn=ri(K,H,Y));let Er=!1,Qt=!1,nn=!1;const Wt=Fn.getUniforms(),w=Qe.uniforms;if(ze.useProgram(Fn.program)&&(Er=!0,Qt=!0,nn=!0),K.id!==I&&(I=K.id,Qt=!0),Er||S!==R){Wt.setValue(X,"projectionMatrix",R.projectionMatrix),Wt.setValue(X,"viewMatrix",R.matrixWorldInverse);const te=Wt.map.cameraPosition;te!==void 0&&te.setValue(X,We.setFromMatrixPosition(R.matrixWorld)),$e.logarithmicDepthBuffer&&Wt.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Wt.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Qt=!0,nn=!0)}if(Y.isSkinnedMesh){Wt.setOptional(X,Y,"bindMatrix"),Wt.setOptional(X,Y,"bindMatrixInverse");const te=Y.skeleton;te&&($e.floatVertexTextures?(te.boneTexture===null&&te.computeBoneTexture(),Wt.setValue(X,"boneTexture",te.boneTexture,ke)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Wt.setOptional(X,Y,"batchingTexture"),Wt.setValue(X,"batchingTexture",Y._matricesTexture,ke));const B=j.morphAttributes;if((B.position!==void 0||B.normal!==void 0||B.color!==void 0&&$e.isWebGL2===!0)&&N.update(Y,j,Fn),(Qt||Qe.receiveShadow!==Y.receiveShadow)&&(Qe.receiveShadow=Y.receiveShadow,Wt.setValue(X,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(w.envMap.value=Xe,w.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Qt&&(Wt.setValue(X,"toneMappingExposure",v.toneMappingExposure),Qe.needsLights&&Ni(w,nn),Ee&&K.fog===!0&&le.refreshFogUniforms(w,Ee),le.refreshMaterialUniforms(w,K,Q,Z,De),oa.upload(X,br(Qe),w,ke)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(oa.upload(X,br(Qe),w,ke),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Wt.setValue(X,"center",Y.center),Wt.setValue(X,"modelViewMatrix",Y.modelViewMatrix),Wt.setValue(X,"normalMatrix",Y.normalMatrix),Wt.setValue(X,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const te=K.uniformsGroups;for(let G=0,ue=te.length;G<ue;G++)if($e.isWebGL2){const Ne=te[G];Pe.update(Ne,Fn),Pe.bind(Ne,Fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fn}function Ni(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function Es(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,H,j){Ke.get(R.texture).__webglTexture=H,Ke.get(R.depthTexture).__webglTexture=j;const K=Ke.get(R);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,H){const j=Ke.get(R);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,j=0){T=R,b=H,M=j;let K=!0,Y=null,Ee=!1,Ie=!1;if(R){const Xe=Ke.get(R);Xe.__useDefaultFramebuffer!==void 0?(ze.bindFramebuffer(X.FRAMEBUFFER,null),K=!1):Xe.__webglFramebuffer===void 0?ke.setupRenderTarget(R):Xe.__hasExternalTextures&&ke.rebindTextures(R,Ke.get(R.texture).__webglTexture,Ke.get(R.depthTexture).__webglTexture);const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ie=!0);const je=Ke.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[H])?Y=je[H][j]:Y=je[H],Ee=!0):$e.isWebGL2&&R.samples>0&&ke.useMultisampledRTT(R)===!1?Y=Ke.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?Y=je[j]:Y=je,A.copy(R.viewport),z.copy(R.scissor),O=R.scissorTest}else A.copy(se).multiplyScalar(Q).floor(),z.copy(me).multiplyScalar(Q).floor(),O=ve;if(ze.bindFramebuffer(X.FRAMEBUFFER,Y)&&$e.drawBuffers&&K&&ze.drawBuffers(R,Y),ze.viewport(A),ze.scissor(z),ze.setScissorTest(O),Ee){const Xe=Ke.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+H,Xe.__webglTexture,j)}else if(Ie){const Xe=Ke.get(R.texture),et=H||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xe.__webglTexture,j||0,et)}I=-1},this.readRenderTargetPixels=function(R,H,j,K,Y,Ee,Ie){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(He=He[Ie]),He){ze.bindFramebuffer(X.FRAMEBUFFER,He);try{const Xe=R.texture,et=Xe.format,je=Xe.type;if(et!==sn&&Oe.convert(et)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=je===Qs&&(Ce.has("EXT_color_buffer_half_float")||$e.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(je!==fi&&Oe.convert(je)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===vn&&($e.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-K&&j>=0&&j<=R.height-Y&&X.readPixels(H,j,K,Y,Oe.convert(et),Oe.convert(je),Ee)}finally{const Xe=T!==null?Ke.get(T).__webglFramebuffer:null;ze.bindFramebuffer(X.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(R,H,j=0){const K=Math.pow(2,-j),Y=Math.floor(H.image.width*K),Ee=Math.floor(H.image.height*K);ke.setTexture2D(H,0),X.copyTexSubImage2D(X.TEXTURE_2D,j,0,0,R.x,R.y,Y,Ee),ze.unbindTexture()},this.copyTextureToTexture=function(R,H,j,K=0){const Y=H.image.width,Ee=H.image.height,Ie=Oe.convert(j.format),He=Oe.convert(j.type);ke.setTexture2D(j,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,j.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,j.unpackAlignment),H.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,K,R.x,R.y,Y,Ee,Ie,He,H.image.data):H.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,K,R.x,R.y,H.mipmaps[0].width,H.mipmaps[0].height,Ie,H.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,K,R.x,R.y,Ie,He,H.image),K===0&&j.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(R,H,j,K,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=R.max.x-R.min.x+1,Ie=R.max.y-R.min.y+1,He=R.max.z-R.min.z+1,Xe=Oe.convert(K.format),et=Oe.convert(K.type);let je;if(K.isData3DTexture)ke.setTexture3D(K,0),je=X.TEXTURE_3D;else if(K.isDataArrayTexture)ke.setTexture2DArray(K,0),je=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);const Ze=X.getParameter(X.UNPACK_ROW_LENGTH),xt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Gt=X.getParameter(X.UNPACK_SKIP_PIXELS),zt=X.getParameter(X.UNPACK_SKIP_ROWS),cn=X.getParameter(X.UNPACK_SKIP_IMAGES),at=j.isCompressedTexture?j.mipmaps[0]:j.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,at.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,at.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,R.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,R.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,R.min.z),j.isDataTexture||j.isData3DTexture?X.texSubImage3D(je,Y,H.x,H.y,H.z,Ee,Ie,He,Xe,et,at.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(je,Y,H.x,H.y,H.z,Ee,Ie,He,Xe,at.data)):X.texSubImage3D(je,Y,H.x,H.y,H.z,Ee,Ie,He,Xe,et,at),X.pixelStorei(X.UNPACK_ROW_LENGTH,Ze),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,xt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Gt),X.pixelStorei(X.UNPACK_SKIP_ROWS,zt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,cn),Y===0&&K.generateMipmaps&&X.generateMipmap(je),ze.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?ke.setTextureCube(R,0):R.isData3DTexture?ke.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ke.setTexture2DArray(R,0):ke.setTexture2D(R,0),ze.unbindTexture()},this.resetState=function(){b=0,M=0,T=null,ze.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ec?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===ya?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ht?$i:cf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$i?Ht:an}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xv extends Pf{}xv.prototype.isWebGL1Renderer=!0;class yv extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class bv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Il,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.InterleavedBuffer: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new C;class sc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new sc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ju=new C,Yu=new mt,$u=new mt,Sv=new C,Ku=new Ve,Do=new C,rl=new ni,Zu=new Ve,sl=new so;class Ev extends Mn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Pc,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Do),this.boundingBox.expandByPoint(Do)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Do),this.boundingSphere.expandByPoint(Do)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rl.copy(this.boundingSphere),rl.applyMatrix4(i),e.ray.intersectsSphere(rl)!==!1&&(Zu.copy(i).invert(),sl.copy(e.ray).applyMatrix4(Zu),!(this.boundingBox!==null&&sl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Pc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Yu.fromBufferAttribute(i.attributes.skinIndex,e),$u.fromBufferAttribute(i.attributes.skinWeight,e),ju.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=$u.getComponent(s);if(o!==0){const a=Yu.getComponent(s);Ku.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Sv.copy(ju).applyMatrix4(Ku),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Df extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pa extends on{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Nt,u=Nt,f,h){super(null,o,a,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qu=new Ve,wv=new Ve;class oc{constructor(e=[],t=[]){this.uuid=Qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:wv;Qu.multiplyMatrices(a,t[s]),Qu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new oc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new pa(t,e,e,sn,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Df),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ul extends Yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gr=new Ve,Ju=new Ve,Io=[],eh=new $t,Mv=new Ve,Cs=new Mn,Ps=new ni;class Tv extends Mn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ul(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Mv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gr),eh.copy(e.boundingBox).applyMatrix4(Gr),this.boundingBox.union(eh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gr),Ps.copy(e.boundingSphere).applyMatrix4(Gr),this.boundingSphere.union(Ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),e.ray.intersectsSphere(Ps)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Gr),Ju.multiplyMatrices(n,Gr),Cs.matrixWorld=Ju,Cs.raycast(e,Io);for(let o=0,a=Io.length;o<a;o++){const l=Io[o];l.instanceId=s,l.object=this,t.push(l)}Io.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ul(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class If extends di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const th=new C,nh=new C,ih=new Ve,ol=new so,No=new ni;class ac extends Bt{constructor(e=new yn,t=new If){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)th.fromBufferAttribute(t,i-1),nh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=th.distanceTo(nh);e.setAttribute("lineDistance",new Jn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(i),No.radius+=s,e.ray.intersectsSphere(No)===!1)return;ih.copy(i).invert(),ol.copy(e.ray).applyMatrix4(ih);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,u=new C,f=new C,h=new C,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const d=Math.max(0,o.start),x=Math.min(_.count,o.start+o.count);for(let v=d,y=x-1;v<y;v+=p){const b=_.getX(v),M=_.getX(v+1);if(c.fromBufferAttribute(m,b),u.fromBufferAttribute(m,M),ol.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(h);I<e.near||I>e.far||t.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=d,y=x-1;v<y;v+=p){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),ol.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(h);M<e.near||M>e.far||t.push({distance:M,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const rh=new C,sh=new C;class Av extends ac{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)rh.fromBufferAttribute(t,i),sh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rh.distanceTo(sh);e.setAttribute("lineDistance",new Jn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rv extends ac{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Nf extends di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const oh=new Ve,Bl=new so,Fo=new ni,Oo=new C;class Lv extends Bt{constructor(e=new yn,t=new Nf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(i),Fo.radius+=s,e.ray.intersectsSphere(Fo)===!1)return;oh.copy(i).invert(),Bl.copy(e.ray).applyMatrix4(oh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=h,g=p;_<g;_++){const m=c.getX(_);Oo.fromBufferAttribute(f,m),ah(Oo,m,l,i,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=h,g=p;_<g;_++)Oo.fromBufferAttribute(f,_),ah(Oo,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ah(r,e,t,n,i,s,o){const a=Bl.distanceSqToPoint(r);if(a<t){const l=new C;Bl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class lc extends di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uf,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Di extends lc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Uo(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Cv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Pv(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function lh(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Ff(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class lo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Dv extends lo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:iu,endingEnd:iu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ru:s=e,a=2*t-n;break;case su:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ru:o=e,l=2*n-t;break;case su:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,d=-h*m+2*h*g-h*_,x=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*_+1,v=(-1-p)*m+(1.5+p)*g+.5*_,y=p*m-p*g;for(let b=0;b!==a;++b)s[b]=d*o[u+b]+x*o[c+b]+v*o[l+b]+y*o[f+b];return s}}class Iv extends lo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class Nv extends lo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class _i{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Uo(t,this.TimeBufferType),this.values=Uo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Uo(e.times,Array),values:Uo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Nv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Iv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case eo:t=this.InterpolantFactoryMethodDiscrete;break;case fs:t=this.InterpolantFactoryMethodLinear;break;case Na:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return eo;case this.InterpolantFactoryMethodLinear:return fs;case this.InterpolantFactoryMethodSmooth:return Na}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Cv(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Na,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const f=a*n,h=f-n,p=f+n;for(let _=0;_!==n;++_){const g=t[f+_];if(g!==t[h+_]||g!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=fs;class xs extends _i{}xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=eo;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class Of extends _i{}Of.prototype.ValueTypeName="color";class ms extends _i{}ms.prototype.ValueTypeName="number";class Fv extends lo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)mi.slerpFlat(s,0,o,c-a,o,c,l);return s}}class vr extends _i{InterpolantFactoryMethodLinear(e){return new Fv(this.times,this.values,this.getValueSize(),e)}}vr.prototype.ValueTypeName="quaternion";vr.prototype.DefaultInterpolation=fs;vr.prototype.InterpolantFactoryMethodSmooth=void 0;class ys extends _i{}ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=eo;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;class _s extends _i{}_s.prototype.ValueTypeName="vector";class Ov{constructor(e,t=-1,n,i=Gd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Qn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Bv(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(_i.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Pv(l);l=lh(l,1,u),c=lh(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ms(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=i[f];h||(i[f]=h=[]),h.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,p,_,g){if(p.length!==0){const m=[],d=[];Ff(p,m,d,_),m.length!==0&&g.push(new f(h,m,d))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let _;for(_=0;_<h.length;_++)if(h[_].morphTargets)for(let g=0;g<h[_].morphTargets.length;g++)p[h[_].morphTargets[g]]=-1;for(const g in p){const m=[],d=[];for(let x=0;x!==h[_].morphTargets.length;++x){const v=h[_];m.push(v.time),d.push(v.morphTarget===g?1:0)}i.push(new ms(".morphTargetInfluence["+g+"]",m,d))}l=p.length*o}else{const p=".bones["+t[f].name+"]";n(_s,p+".position",h,"pos",i),n(vr,p+".quaternion",h,"rot",i),n(_s,p+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Uv(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ms;case"vector":case"vector2":case"vector3":case"vector4":return _s;case"color":return Of;case"quaternion":return vr;case"bool":case"boolean":return xs;case"string":return ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Bv(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Uv(r.type);if(r.times===void 0){const t=[],n=[];Ff(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const gs={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class zv{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const kv=new zv;class bs{constructor(e){this.manager=e!==void 0?e:kv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bs.DEFAULT_MATERIAL_NAME="__DEFAULT";const wi={};class Hv extends Error{constructor(e,t){super(e),this.response=t}}class Uf extends bs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=gs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:n,onError:i});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=wi[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,_=p!==0;let g=0;const m=new ReadableStream({start(d){x();function x(){f.read().then(({done:v,value:y})=>{if(v)d.close();else{g+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let M=0,T=u.length;M<T;M++){const I=u[M];I.onProgress&&I.onProgress(b)}d.enqueue(y),x()}})}}});return new Response(m)}else throw new Hv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{gs.add(e,c);const u=wi[e];delete wi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=wi[e];if(u===void 0)throw this.manager.itemError(e),c;delete wi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Vv extends bs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=gs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=to("img");function l(){u(),gs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Gv extends bs{constructor(e){super(e)}load(e,t,n,i){const s=new on,o=new Vv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ea extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const al=new Ve,ch=new C,uh=new C;class cc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nc,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ch.setFromMatrixPosition(e.matrixWorld),t.position.copy(ch),uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uh),t.updateMatrixWorld(),al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wv extends cc{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ds*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Xv extends Ea{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Wv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hh=new Ve,Ds=new C,ll=new C;class qv extends cc{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ds.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ds),ll.copy(n.position),ll.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ll),n.updateMatrixWorld(),i.makeTranslation(-Ds.x,-Ds.y,-Ds.z),hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh)}}class jv extends Ea{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yv extends cc{constructor(){super(new ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bf extends Ea{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Yv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $v extends Ea{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ys{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Kv extends bs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=gs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){gs.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const uc="\\[\\]\\.:\\/",Zv=new RegExp("["+uc+"]","g"),hc="[^"+uc+"]",Qv="[^"+uc.replace("\\.","")+"]",Jv=/((?:WC+[\/:])*)/.source.replace("WC",hc),ex=/(WCOD+)?/.source.replace("WCOD",Qv),tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hc),nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hc),ix=new RegExp("^"+Jv+ex+tx+nx+"$"),rx=["material","materials","bones","map"];class sx{constructor(e,t,n){const i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class vt{constructor(e,t,n){this.path=t,this.parsedPath=n||vt.parseTrackName(t),this.node=vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new vt.Composite(e,t,n):new vt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zv,"")}static parseTrackName(e){const t=ix.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);rx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}vt.Composite=sx;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class fh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const dh=new C,Bo=new C;class Ci{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){dh.subVectors(e,this.start),Bo.subVectors(this.end,this.start);const n=Bo.dot(Bo);let s=Bo.dot(dh)/n;return t&&(s=tn(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ql);const ph={type:"change"},cl={type:"start"},mh={type:"end"},zo=new so,_h=new ci,ox=Math.cos(70*ff.DEG2RAD);class ax extends xr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mr.ROTATE,MIDDLE:Mr.DOLLY,RIGHT:Mr.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",E),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ph),n.update(),s=i.NONE},this.update=function(){const N=new C,de=new mi().setFromUnitVectors(e.up,new C(0,1,0)),ne=de.clone().invert(),Oe=new C,Re=new mi,Pe=new C,we=2*Math.PI;return function(Ge=null){const F=n.object.position;N.copy(F).sub(n.target),N.applyQuaternion(de),a.setFromVector3(N),n.autoRotate&&s===i.NONE&&z(S(Ge)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ge=n.minAzimuthAngle,ae=n.maxAzimuthAngle;isFinite(ge)&&isFinite(ae)&&(ge<-Math.PI?ge+=we:ge>Math.PI&&(ge-=we),ae<-Math.PI?ae+=we:ae>Math.PI&&(ae-=we),ge<=ae?a.theta=Math.max(ge,Math.min(ae,a.theta)):a.theta=a.theta>(ge+ae)/2?Math.max(ge,a.theta):Math.min(ae,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&M||n.object.isOrthographicCamera?a.radius=ie(a.radius):a.radius=ie(a.radius*c),N.setFromSpherical(a),N.applyQuaternion(ne),F.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ee=!1;if(n.zoomToCursor&&M){let he=null;if(n.object.isPerspectiveCamera){const Le=N.length();he=ie(Le*c);const nt=Le-he;n.object.position.addScaledVector(y,nt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Le=new C(b.x,b.y,0);Le.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ee=!0;const nt=new C(b.x,b.y,0);nt.unproject(n.object),n.object.position.sub(nt).add(Le),n.object.updateMatrixWorld(),he=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;he!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(he).add(n.object.position):(zo.origin.copy(n.object.position),zo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(zo.direction))<ox?e.lookAt(n.target):(_h.setFromNormalAndCoplanarPoint(n.object.up,n.target),zo.intersectPlane(_h,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ee=!0);return c=1,M=!1,ee||Oe.distanceToSquared(n.object.position)>o||8*(1-Re.dot(n.object.quaternion))>o||Pe.distanceToSquared(n.target)>0?(n.dispatchEvent(ph),Oe.copy(n.object.position),Re.copy(n.object.quaternion),Pe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",re),n.domElement.removeEventListener("pointerdown",Ke),n.domElement.removeEventListener("pointercancel",ot),n.domElement.removeEventListener("wheel",P),n.domElement.removeEventListener("pointermove",ke),n.domElement.removeEventListener("pointerup",ot),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",E),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new fh,l=new fh;let c=1;const u=new C,f=new Ue,h=new Ue,p=new Ue,_=new Ue,g=new Ue,m=new Ue,d=new Ue,x=new Ue,v=new Ue,y=new C,b=new Ue;let M=!1;const T=[],I={};function S(N){return N!==null?2*Math.PI/60*n.autoRotateSpeed*N:2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function z(N){l.theta-=N}function O(N){l.phi-=N}const W=function(){const N=new C;return function(ne,Oe){N.setFromMatrixColumn(Oe,0),N.multiplyScalar(-ne),u.add(N)}}(),D=function(){const N=new C;return function(ne,Oe){n.screenSpacePanning===!0?N.setFromMatrixColumn(Oe,1):(N.setFromMatrixColumn(Oe,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(ne),u.add(N)}}(),V=function(){const N=new C;return function(ne,Oe){const Re=n.domElement;if(n.object.isPerspectiveCamera){const Pe=n.object.position;N.copy(Pe).sub(n.target);let we=N.length();we*=Math.tan(n.object.fov/2*Math.PI/180),W(2*ne*we/Re.clientHeight,n.object.matrix),D(2*Oe*we/Re.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(ne*(n.object.right-n.object.left)/n.object.zoom/Re.clientWidth,n.object.matrix),D(Oe*(n.object.top-n.object.bottom)/n.object.zoom/Re.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ce(N){if(!n.zoomToCursor)return;M=!0;const de=n.domElement.getBoundingClientRect(),ne=N.clientX-de.left,Oe=N.clientY-de.top,Re=de.width,Pe=de.height;b.x=ne/Re*2-1,b.y=-(Oe/Pe)*2+1,y.set(b.x,b.y,1).unproject(n.object).sub(n.object.position).normalize()}function ie(N){return Math.max(n.minDistance,Math.min(n.maxDistance,N))}function se(N){f.set(N.clientX,N.clientY)}function me(N){ce(N),d.set(N.clientX,N.clientY)}function ve(N){_.set(N.clientX,N.clientY)}function J(N){h.set(N.clientX,N.clientY),p.subVectors(h,f).multiplyScalar(n.rotateSpeed);const de=n.domElement;z(2*Math.PI*p.x/de.clientHeight),O(2*Math.PI*p.y/de.clientHeight),f.copy(h),n.update()}function oe(N){x.set(N.clientX,N.clientY),v.subVectors(x,d),v.y>0?Z(A()):v.y<0&&Q(A()),d.copy(x),n.update()}function Se(N){g.set(N.clientX,N.clientY),m.subVectors(g,_).multiplyScalar(n.panSpeed),V(m.x,m.y),_.copy(g),n.update()}function De(N){ce(N),N.deltaY<0?Q(A()):N.deltaY>0&&Z(A()),n.update()}function _e(N){let de=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),de=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),de=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),de=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),de=!0;break}de&&(N.preventDefault(),n.update())}function qe(){if(T.length===1)f.set(T[0].pageX,T[0].pageY);else{const N=.5*(T[0].pageX+T[1].pageX),de=.5*(T[0].pageY+T[1].pageY);f.set(N,de)}}function We(){if(T.length===1)_.set(T[0].pageX,T[0].pageY);else{const N=.5*(T[0].pageX+T[1].pageX),de=.5*(T[0].pageY+T[1].pageY);_.set(N,de)}}function Fe(){const N=T[0].pageX-T[1].pageX,de=T[0].pageY-T[1].pageY,ne=Math.sqrt(N*N+de*de);d.set(0,ne)}function Ye(){n.enableZoom&&Fe(),n.enablePan&&We()}function X(){n.enableZoom&&Fe(),n.enableRotate&&qe()}function Lt(N){if(T.length==1)h.set(N.pageX,N.pageY);else{const ne=ye(N),Oe=.5*(N.pageX+ne.x),Re=.5*(N.pageY+ne.y);h.set(Oe,Re)}p.subVectors(h,f).multiplyScalar(n.rotateSpeed);const de=n.domElement;z(2*Math.PI*p.x/de.clientHeight),O(2*Math.PI*p.y/de.clientHeight),f.copy(h)}function Ce(N){if(T.length===1)g.set(N.pageX,N.pageY);else{const de=ye(N),ne=.5*(N.pageX+de.x),Oe=.5*(N.pageY+de.y);g.set(ne,Oe)}m.subVectors(g,_).multiplyScalar(n.panSpeed),V(m.x,m.y),_.copy(g)}function $e(N){const de=ye(N),ne=N.pageX-de.x,Oe=N.pageY-de.y,Re=Math.sqrt(ne*ne+Oe*Oe);x.set(0,Re),v.set(0,Math.pow(x.y/d.y,n.zoomSpeed)),Z(v.y),d.copy(x)}function ze(N){n.enableZoom&&$e(N),n.enablePan&&Ce(N)}function _t(N){n.enableZoom&&$e(N),n.enableRotate&&Lt(N)}function Ke(N){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",ke),n.domElement.addEventListener("pointerup",ot)),fe(N),N.pointerType==="touch"?q(N):Tt(N))}function ke(N){n.enabled!==!1&&(N.pointerType==="touch"?le(N):Ct(N))}function ot(N){Me(N),T.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",ke),n.domElement.removeEventListener("pointerup",ot)),n.dispatchEvent(mh),s=i.NONE}function Tt(N){let de;switch(N.button){case 0:de=n.mouseButtons.LEFT;break;case 1:de=n.mouseButtons.MIDDLE;break;case 2:de=n.mouseButtons.RIGHT;break;default:de=-1}switch(de){case Mr.DOLLY:if(n.enableZoom===!1)return;me(N),s=i.DOLLY;break;case Mr.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;ve(N),s=i.PAN}else{if(n.enableRotate===!1)return;se(N),s=i.ROTATE}break;case Mr.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;se(N),s=i.ROTATE}else{if(n.enablePan===!1)return;ve(N),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(cl)}function Ct(N){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;J(N);break;case i.DOLLY:if(n.enableZoom===!1)return;oe(N);break;case i.PAN:if(n.enablePan===!1)return;Se(N);break}}function P(N){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(N.preventDefault(),n.dispatchEvent(cl),De(N),n.dispatchEvent(mh))}function E(N){n.enabled===!1||n.enablePan===!1||_e(N)}function q(N){switch(pe(N),T.length){case 1:switch(n.touches.ONE){case Tr.ROTATE:if(n.enableRotate===!1)return;qe(),s=i.TOUCH_ROTATE;break;case Tr.PAN:if(n.enablePan===!1)return;We(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Tr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ye(),s=i.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;X(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(cl)}function le(N){switch(pe(N),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Lt(N),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ce(N),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ze(N),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_t(N),n.update();break;default:s=i.NONE}}function re(N){n.enabled!==!1&&N.preventDefault()}function fe(N){T.push(N)}function Me(N){delete I[N.pointerId];for(let de=0;de<T.length;de++)if(T[de].pointerId==N.pointerId){T.splice(de,1);return}}function pe(N){let de=I[N.pointerId];de===void 0&&(de=new Ue,I[N.pointerId]=de),de.set(N.pageX,N.pageY)}function ye(N){const de=N.pointerId===T[0].pointerId?T[1]:T[0];return I[de.pointerId]}n.domElement.addEventListener("contextmenu",re),n.domElement.addEventListener("pointerdown",Ke),n.domElement.addEventListener("pointercancel",ot),n.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}const lx=new ao(-1,1,1,-1,0,1);class cx extends yn{constructor(){super(),this.setAttribute("position",new Jn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jn([0,2,0,0,2,0],2))}}const ux=new cx;class gh{constructor(e){this._mesh=new Mn(ux,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}function vh(r,e){if(e===Wd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Dl||e===lf){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Dl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class hx extends bs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _x(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new Tx(t)}),this.register(function(t){return new Ax(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new bx(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new wx(t)}),this.register(function(t){return new Ex(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new Rx(t)}),this.register(function(t){return new Lx(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ys.extractUrlBase(e);o=Ys.resolveURL(c,this.path)}else o=Ys.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Uf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===zf){try{o[lt.KHR_BINARY_GLTF]=new Cx(e)}catch(f){i&&i(f);return}s=JSON.parse(o[lt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Gx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case lt.KHR_MATERIALS_UNLIT:o[f]=new px;break;case lt.KHR_DRACO_MESH_COMPRESSION:o[f]=new Px(s,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:o[f]=new Dx;break;case lt.KHR_MESH_QUANTIZATION:o[f]=new Ix;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function fx(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class dx{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new tt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],an);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Bf(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new jv(u),c.distance=f;break;case"spot":c=new Xv(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Gi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class px{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ri}extendParams(e,t,n){const i=[];e.color=new tt(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],an),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ht))}return Promise.all(i)}}class mx{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class _x{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(a,a)}return Promise.all(s)}}class gx{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class vx{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new tt(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],an)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ht)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class xx{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class yx{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new tt().setRGB(a[0],a[1],a[2],an),Promise.all(s)}}class bx{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Di}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Sx{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new tt().setRGB(a[0],a[1],a[2],an),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ht)),Promise.all(s)}}class Ex{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class wx{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Di}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Mx{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Tx{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ax{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Rx{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,f=i.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,h,i.mode,i.filter),p})})}else return null}}class Lx{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==kn.TRIANGLES&&c.mode!==kn.TRIANGLE_STRIP&&c.mode!==kn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,p=[];for(const _ of f){const g=new Ve,m=new C,d=new mi,x=new C(1,1,1),v=new Tv(_.geometry,_.material,h);for(let y=0;y<h;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,y),l.SCALE&&x.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,g.compose(m,d,x));for(const y in l)if(y==="_COLOR_0"){const b=l[y];v.instanceColor=new Ul(b.array,b.itemSize,b.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,l[y]);Bt.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const zf="glTF",Is=12,xh={JSON:1313821514,BIN:5130562};class Cx{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Is),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Is,s=new DataView(e,Is);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===xh.JSON){const c=new Uint8Array(e,Is+o,a);this.content=n.decode(c)}else if(l===xh.BIN){const c=Is+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Px{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=zl[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=zl[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],p=os[h.componentType];c[f]=p.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f){i.decodeDracoFile(u,function(h){for(const p in h.attributes){const _=h.attributes[p],g=l[p];g!==void 0&&(_.normalized=g)}f(h)},a,c)})})}}class Dx{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ix{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}}class kf extends lo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,f=(n-t)/u,h=f*f,p=h*f,_=e*c,g=_-c,m=-2*p+3*h,d=p-h,x=1-m,v=d-h+f;for(let y=0;y!==a;y++){const b=o[g+y+a],M=o[g+y+l]*u,T=o[_+y+a],I=o[_+y]*u;s[y]=x*b+v*M+m*T+d*I}return s}}const Nx=new mi;class Fx extends kf{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Nx.fromArray(s).normalize().toArray(s),s}}const kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yh={9728:Nt,9729:En,9984:Cl,9985:ef,9986:sa,9987:gr},bh={33071:Hn,33648:la,10497:us},ul={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ox={CUBICSPLINE:void 0,LINEAR:fs,STEP:eo},hl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ux(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new lc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ei})),r.DefaultMaterial}function sr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Bx(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;o.push(h)}if(i){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function zx(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kx(r){let e;const t=r.extensions&&r.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fl(t.attributes):e=r.indices+":"+fl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+fl(r.targets[n]);return e}function fl(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function kl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Hx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Vx=new Ve;class Gx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Gv(this.options.manager):this.textureLoader=new Kv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Uf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return sr(s,a,i),Gi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Ys.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ul[i.type],a=os[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Yt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=ul[i.type],c=os[i.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(p&&p!==f){const d=Math.floor(h/p),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+d+":"+i.count;let v=t.cache.get(x);v||(g=new c(a,d*p,i.count*p/u),v=new bv(g,p/u),t.cache.add(x,v)),m=new sc(v,l,h%p/u,_)}else a===null?g=new c(i.count*l):g=new c(a,h,i.count*l),m=new Yt(g,l,_);if(i.sparse!==void 0){const d=ul.SCALAR,x=os[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,b=new x(o[1],v,i.sparse.count*d),M=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new Yt(m.array.slice(),m.itemSize,m.normalized));for(let T=0,I=b.length;T<I;T++){const S=b[T];if(m.setX(S,M[T*l]),l>=2&&m.setY(S,M[T*l+1]),l>=3&&m.setZ(S,M[T*l+2]),l>=4&&m.setW(S,M[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=yh[h.magFilter]||En,u.minFilter=yh[h.minFilter]||gr,u.wrapS=bh[h.wrapS]||us,u.wrapT=bh[h.wrapT]||us,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,p){let _=h;t.isImageBitmapLoader===!0&&(_=function(g){const m=new on(g);m.needsUpdate=!0,h(m)}),t.load(Ys.resolveURL(f,s.path),_,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||Hx(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[lt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Nf,di.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new If,di.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return lc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[lt.KHR_MATERIALS_UNLIT]){const f=i[lt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new tt(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],an),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Ht)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Zn);const u=s.alphaMode||hl.OPAQUE;if(u===hl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===hl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ri&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ue(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Ri&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ri){const f=s.emissiveFactor;a.emissive=new tt().setRGB(f[0],f[1],f[2],an)}return s.emissiveTexture!==void 0&&o!==Ri&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ht)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),Gi(f,s),t.associations.set(f,{materials:e}),s.extensions&&sr(i,f,s),f})}createUniqueName(e){const t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Sh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=kx(c),f=i[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Sh(new yn,c,t),i[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Ux(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,_=u.length;p<_;p++){const g=u[p],m=o[p];let d;const x=c[p];if(m.mode===kn.TRIANGLES||m.mode===kn.TRIANGLE_STRIP||m.mode===kn.TRIANGLE_FAN||m.mode===void 0)d=s.isSkinnedMesh===!0?new Ev(g,x):new Mn(g,x),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===kn.TRIANGLE_STRIP?d.geometry=vh(d.geometry,lf):m.mode===kn.TRIANGLE_FAN&&(d.geometry=vh(d.geometry,Dl));else if(m.mode===kn.LINES)d=new Av(g,x);else if(m.mode===kn.LINE_STRIP)d=new ac(g,x);else if(m.mode===kn.LINE_LOOP)d=new Rv(g,x);else if(m.mode===kn.POINTS)d=new Lv(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&zx(d,s),d.name=t.createUniqueName(s.name||"mesh_"+e),Gi(d,s),m.extensions&&sr(i,d,m),t.assignFinalMaterial(d),f.push(d)}for(let p=0,_=f.length;p<_;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&sr(i,f[0],s),f[0];const h=new dr;s.extensions&&sr(i,h,s),t.associations.set(h,{meshes:e});for(let p=0,_=f.length;p<_;p++)h.add(f[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new _n(ff.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ao(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new Ve;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new oc(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=i.channels.length;f<h;f++){const p=i.channels[f],_=i.samplers[p.sampler],g=p.target,m=g.node,d=i.parameters!==void 0?i.parameters[_.input]:_.input,x=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",x)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],p=f[1],_=f[2],g=f[3],m=f[4],d=[];for(let x=0,v=h.length;x<v;x++){const y=h[x],b=p[x],M=_[x],T=g[x],I=m[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const S=n._createAnimationTracks(y,b,M,T,I);if(S)for(let A=0;A<S.length;A++)d.push(S[A])}return new Ov(s,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,Vx)});for(let p=0,_=f.length;p<_;p++)u.add(f[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Df:c.length>1?u=new dr:c.length===1?u=c[0]:u=new Bt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),Gi(u,s),s.extensions&&sr(n,u,s),s.matrix!==void 0){const f=new Ve;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new dr;n.name&&(s.name=i.createUniqueName(n.name)),Gi(s,n),n.extensions&&sr(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[h,p]of i.associations)(h instanceof di||h instanceof on)&&f.set(h,p);return u.traverse(h=>{const p=i.associations.get(h);p!=null&&f.set(h,p)}),f};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];ki[s.path]===ki.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(ki[s.path]){case ki.weights:c=ms;break;case ki.rotation:c=vr;break;case ki.position:case ki.scale:c=_s;break;default:switch(n.itemSize){case 1:c=ms;break;case 2:case 3:default:c=_s;break}break}const u=i.interpolation!==void 0?Ox[i.interpolation]:fs,f=this._getArrayFromAccessor(n);for(let h=0,p=l.length;h<p;h++){const _=new c(l[h]+"."+ki[s.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=kl(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof vr?Fx:kf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Wx(r,e,t){const n=e.attributes,i=new $t;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const u=kl(os[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new C,l=new C;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],p=h.min,_=h.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),h.normalized){const g=kl(os[h.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new ni;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Sh(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=zl[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return pt.workingColorSpace!==an&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Gi(r,e),Wx(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Bx(r,e.targets,t):r})}var Hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Hf={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(Hl,function(){var t=function(){function n(p){return o.appendChild(p.dom),p}function i(p){for(var _=0;_<o.children.length;_++)o.children[_].style.display=_===p?"block":"none";s=p}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(p){p.preventDefault(),i(++s%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,u=n(new t.Panel("FPS","#0ff","#002")),f=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(f.update(p-a,200),p>l+1e3&&(u.update(1e3*c/(p-l),100),l=p,c=0,h)){var _=performance.memory;h.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:o,setMode:i}};return t.Panel=function(n,i,s){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,f=48*c,h=3*c,p=2*c,_=3*c,g=15*c,m=74*c,d=30*c,x=document.createElement("canvas");x.width=u,x.height=f,x.style.cssText="width:80px;height:48px";var v=x.getContext("2d");return v.font="bold "+9*c+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=s,v.fillRect(0,0,u,f),v.fillStyle=i,v.fillText(n,h,p),v.fillRect(_,g,m,d),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(_,g,m,d),{dom:x,update:function(y,b){o=Math.min(o,y),a=Math.max(a,y),v.fillStyle=s,v.globalAlpha=1,v.fillRect(0,0,u,g),v.fillStyle=i,v.fillText(l(y)+" "+n+" ("+l(o)+"-"+l(a)+")",h,p),v.drawImage(x,_+c,g,m-c,d,_,g,m-c,d),v.fillRect(_+m-c,g,c,d),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(_+m-c,g,c,l((1-y/b)*d))}}},t})})(Hf);var qx=Hf.exports;const jx=Xx(qx),Vf=0,Yx=1,Gf=2,Eh=2,dl=1.25,wh=1,_r=6*4+4+4,wa=65535,$x=Math.pow(2,-24),pl=Symbol("SKIP_GENERATION");function Wf(r){return r.index?r.index.count:r.attributes.position.count}function Ss(r){return Wf(r)/3}function Xf(r,e=ArrayBuffer){return r>65535?new Uint32Array(new e(4*r)):new Uint16Array(new e(2*r))}function Kx(r,e){if(!r.index){const t=r.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Xf(t,n);r.setIndex(new Yt(i,1));for(let s=0;s<t;s++)i[s]=s}}function qf(r){const e=Ss(r),t=r.drawRange,n=t.start/3,i=(t.start+t.count)/3,s=Math.max(0,n),o=Math.min(e,i)-s;return[{offset:Math.floor(s),count:Math.floor(o)}]}function jf(r){if(!r.groups||!r.groups.length)return qf(r);const e=[],t=new Set,n=r.drawRange,i=n.start/3,s=(n.start+n.count)/3;for(const a of r.groups){const l=a.start/3,c=(a.start+a.count)/3;t.add(Math.max(i,l)),t.add(Math.min(s,c))}const o=Array.from(t.values()).sort((a,l)=>a-l);for(let a=0;a<o.length-1;a++){const l=o[a],c=o[a+1];e.push({offset:Math.floor(l),count:Math.floor(c-l)})}return e}function Zx(r){if(r.groups.length===0)return!1;const e=Ss(r),t=jf(r).sort((s,o)=>s.offset-o.offset),n=t[t.length-1];n.count=Math.min(e-n.offset,n.count);let i=0;return t.forEach(({count:s})=>i+=s),e!==i}function Ut(r,e,t){return t.min.x=e[r],t.min.y=e[r+1],t.min.z=e[r+2],t.max.x=e[r+3],t.max.y=e[r+4],t.max.z=e[r+5],t}function Qx(r){r[0]=r[1]=r[2]=1/0,r[3]=r[4]=r[5]=-1/0}function Mh(r){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=r[n+3]-r[n];i>t&&(t=i,e=n)}return e}function Th(r,e){e.set(r)}function Ah(r,e,t){let n,i;for(let s=0;s<3;s++){const o=s+3;n=r[s],i=e[s],t[s]=n<i?n:i,n=r[o],i=e[o],t[o]=n>i?n:i}}function ko(r,e,t){for(let n=0;n<3;n++){const i=e[r+2*n],s=e[r+2*n+1],o=i-s,a=i+s;o<t[n]&&(t[n]=o),a>t[n+3]&&(t[n+3]=a)}}function Ns(r){const e=r[3]-r[0],t=r[4]-r[1],n=r[5]-r[2];return 2*(e*t+t*n+n*e)}function ml(r,e,t,n,i=null){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,f=1/0,h=1/0,p=1/0,_=-1/0,g=-1/0,m=-1/0;const d=i!==null;for(let x=e*6,v=(e+t)*6;x<v;x+=6){const y=r[x+0],b=r[x+1],M=y-b,T=y+b;M<s&&(s=M),T>l&&(l=T),d&&y<f&&(f=y),d&&y>_&&(_=y);const I=r[x+2],S=r[x+3],A=I-S,z=I+S;A<o&&(o=A),z>c&&(c=z),d&&I<h&&(h=I),d&&I>g&&(g=I);const O=r[x+4],W=r[x+5],D=O-W,V=O+W;D<a&&(a=D),V>u&&(u=V),d&&O<p&&(p=O),d&&O>m&&(m=O)}n[0]=s,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=u,d&&(i[0]=f,i[1]=h,i[2]=p,i[3]=_,i[4]=g,i[5]=m)}function Jx(r,e,t,n){let i=1/0,s=1/0,o=1/0,a=-1/0,l=-1/0,c=-1/0;for(let u=e*6,f=(e+t)*6;u<f;u+=6){const h=r[u+0];h<i&&(i=h),h>a&&(a=h);const p=r[u+2];p<s&&(s=p),p>l&&(l=p);const _=r[u+4];_<o&&(o=_),_>c&&(c=_)}n[0]=i,n[1]=s,n[2]=o,n[3]=a,n[4]=l,n[5]=c}function ey(r,e){Qx(e);const t=r.attributes.position,n=r.index?r.index.array:null,i=Ss(r),s=new Float32Array(i*6),o=t.normalized,a=t.array,l=t.offset||0;let c=3;t.isInterleavedBufferAttribute&&(c=t.data.stride);const u=["getX","getY","getZ"];for(let f=0;f<i;f++){const h=f*3,p=f*6;let _=h+0,g=h+1,m=h+2;n&&(_=n[_],g=n[g],m=n[m]),o||(_=_*c+l,g=g*c+l,m=m*c+l);for(let d=0;d<3;d++){let x,v,y;o?(x=t[u[d]](_),v=t[u[d]](g),y=t[u[d]](m)):(x=a[_+d],v=a[g+d],y=a[m+d]);let b=x;v<b&&(b=v),y<b&&(b=y);let M=x;v>M&&(M=v),y>M&&(M=y);const T=(M-b)/2,I=d*2;s[p+I+0]=b+T,s[p+I+1]=T+(Math.abs(b)+T)*$x,b<e[d]&&(e[d]=b),M>e[d+3]&&(e[d+3]=M)}}return s}const Ti=32,ty=(r,e)=>r.candidate-e.candidate,Hi=new Array(Ti).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Ho=new Float32Array(6);function ny(r,e,t,n,i,s){let o=-1,a=0;if(s===Vf)o=Mh(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(s===Yx)o=Mh(r),o!==-1&&(a=iy(t,n,i,o));else if(s===Gf){const l=Ns(r);let c=dl*i;const u=n*6,f=(n+i)*6;for(let h=0;h<3;h++){const p=e[h],m=(e[h+3]-p)/Ti;if(i<Ti/4){const d=[...Hi];d.length=i;let x=0;for(let y=u;y<f;y+=6,x++){const b=d[x];b.candidate=t[y+2*h],b.count=0;const{bounds:M,leftCacheBounds:T,rightCacheBounds:I}=b;for(let S=0;S<3;S++)I[S]=1/0,I[S+3]=-1/0,T[S]=1/0,T[S+3]=-1/0,M[S]=1/0,M[S+3]=-1/0;ko(y,t,M)}d.sort(ty);let v=i;for(let y=0;y<v;y++){const b=d[y];for(;y+1<v&&d[y+1].candidate===b.candidate;)d.splice(y+1,1),v--}for(let y=u;y<f;y+=6){const b=t[y+2*h];for(let M=0;M<v;M++){const T=d[M];b>=T.candidate?ko(y,t,T.rightCacheBounds):(ko(y,t,T.leftCacheBounds),T.count++)}}for(let y=0;y<v;y++){const b=d[y],M=b.count,T=i-b.count,I=b.leftCacheBounds,S=b.rightCacheBounds;let A=0;M!==0&&(A=Ns(I)/l);let z=0;T!==0&&(z=Ns(S)/l);const O=wh+dl*(A*M+z*T);O<c&&(o=h,c=O,a=b.candidate)}}else{for(let v=0;v<Ti;v++){const y=Hi[v];y.count=0,y.candidate=p+m+v*m;const b=y.bounds;for(let M=0;M<3;M++)b[M]=1/0,b[M+3]=-1/0}for(let v=u;v<f;v+=6){let M=~~((t[v+2*h]-p)/m);M>=Ti&&(M=Ti-1);const T=Hi[M];T.count++,ko(v,t,T.bounds)}const d=Hi[Ti-1];Th(d.bounds,d.rightCacheBounds);for(let v=Ti-2;v>=0;v--){const y=Hi[v],b=Hi[v+1];Ah(y.bounds,b.rightCacheBounds,y.rightCacheBounds)}let x=0;for(let v=0;v<Ti-1;v++){const y=Hi[v],b=y.count,M=y.bounds,I=Hi[v+1].rightCacheBounds;b!==0&&(x===0?Th(M,Ho):Ah(M,Ho,Ho)),x+=b;let S=0,A=0;x!==0&&(S=Ns(Ho)/l);const z=i-x;z!==0&&(A=Ns(I)/l);const O=wh+dl*(S*x+A*z);O<c&&(o=h,c=O,a=y.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function iy(r,e,t,n){let i=0;for(let s=e,o=e+t;s<o;s++)i+=r[s*6+n*2];return i/t}class Vo{constructor(){}}function ry(r,e,t,n,i,s){let o=n,a=n+i-1;const l=s.pos,c=s.axis*2;for(;;){for(;o<=a&&t[o*6+c]<l;)o++;for(;o<=a&&t[a*6+c]>=l;)a--;if(o<a){for(let u=0;u<3;u++){let f=e[o*3+u];e[o*3+u]=e[a*3+u],e[a*3+u]=f}for(let u=0;u<6;u++){let f=t[o*6+u];t[o*6+u]=t[a*6+u],t[a*6+u]=f}o++,a--}else return o}}function sy(r,e,t,n,i,s){let o=n,a=n+i-1;const l=s.pos,c=s.axis*2;for(;;){for(;o<=a&&t[o*6+c]<l;)o++;for(;o<=a&&t[a*6+c]>=l;)a--;if(o<a){let u=r[o];r[o]=r[a],r[a]=u;for(let f=0;f<6;f++){let h=t[o*6+f];t[o*6+f]=t[a*6+f],t[a*6+f]=h}o++,a--}else return o}}function oy(r,e){const t=(r.index?r.index.count:r.attributes.position.count)/3,n=t>2**16,i=n?4:2,s=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),o=n?new Uint32Array(s):new Uint16Array(s);for(let a=0,l=o.length;a<l;a++)o[a]=a;return o}function ay(r,e){const t=r.geometry,n=t.index?t.index.array:null,i=e.maxDepth,s=e.verbose,o=e.maxLeafTris,a=e.strategy,l=e.onProgress,c=Ss(t),u=r._indirectBuffer;let f=!1;const h=new Float32Array(6),p=new Float32Array(6),_=ey(t,h),g=e.indirect?sy:ry,m=[],d=e.indirect?qf(t):jf(t);if(d.length===1){const y=d[0],b=new Vo;b.boundingData=h,Jx(_,y.offset,y.count,p),v(b,y.offset,y.count,p),m.push(b)}else for(let y of d){const b=new Vo;b.boundingData=new Float32Array(6),ml(_,y.offset,y.count,b.boundingData,p),v(b,y.offset,y.count,p),m.push(b)}return m;function x(y){l&&l(y/c)}function v(y,b,M,T=null,I=0){if(!f&&I>=i&&(f=!0,s&&(console.warn(`MeshBVH: Max depth of ${i} reached when generating BVH. Consider increasing maxDepth.`),console.warn(t))),M<=o||I>=i)return x(b+M),y.offset=b,y.count=M,y;const S=ny(y.boundingData,T,_,b,M,a);if(S.axis===-1)return x(b+M),y.offset=b,y.count=M,y;const A=g(u,n,_,b,M,S);if(A===b||A===b+M)x(b+M),y.offset=b,y.count=M;else{y.splitAxis=S.axis;const z=new Vo,O=b,W=A-b;y.left=z,z.boundingData=new Float32Array(6),ml(_,O,W,z.boundingData,p),v(z,O,W,p,I+1);const D=new Vo,V=A,Z=M-W;y.right=D,D.boundingData=new Float32Array(6),ml(_,V,Z,D.boundingData,p),v(D,V,Z,p,I+1)}return y}}function ly(r,e){const t=r.geometry;e.indirect&&(r._indirectBuffer=oy(t,e.useSharedArrayBuffer),Zx(t)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),r._indirectBuffer||Kx(t,e);const n=ay(r,e);let i,s,o;const a=[],l=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let f=0;f<n.length;f++){const h=n[f];let p=c(h);const _=new l(_r*p);i=new Float32Array(_),s=new Uint32Array(_),o=new Uint16Array(_),u(0,h),a.push(_)}r._roots=a;return;function c(f){return f.count?1:1+c(f.left)+c(f.right)}function u(f,h){const p=f/4,_=f/2,g=!!h.count,m=h.boundingData;for(let d=0;d<6;d++)i[p+d]=m[d];if(g){const d=h.offset,x=h.count;return s[p+6]=d,o[_+14]=x,o[_+15]=wa,f+_r}else{const d=h.left,x=h.right,v=h.splitAxis;let y;if(y=u(f+_r,d),y/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return s[p+6]=y/4,y=u(y,x),s[p+7]=v,y}}}class Pi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let s=0,o=e.length;s<o;s++){const l=e[s][t];n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let s=0,o=t.length;s<o;s++){const a=t[s],l=e.dot(a);n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}Pi.prototype.setFromBox=function(){const r=new C;return function(t,n){const i=n.min,s=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let u=0;u<=1;u++){r.x=i.x*l+s.x*(1-l),r.y=i.y*c+s.y*(1-c),r.z=i.z*u+s.z*(1-u);const f=t.dot(r);o=Math.min(f,o),a=Math.max(f,a)}this.min=o,this.max=a}}();const cy=function(){const r=new C,e=new C,t=new C;return function(i,s,o){const a=i.start,l=r,c=s.start,u=e;t.subVectors(a,c),r.subVectors(i.end,i.start),e.subVectors(s.end,s.start);const f=t.dot(u),h=u.dot(l),p=u.dot(u),_=t.dot(l),m=l.dot(l)*p-h*h;let d,x;m!==0?d=(f*h-_*p)/m:d=0,x=(f+d*h)/p,o.x=d,o.y=x}}(),fc=function(){const r=new Ue,e=new C,t=new C;return function(i,s,o,a){cy(i,s,r);let l=r.x,c=r.y;if(l>=0&&l<=1&&c>=0&&c<=1){i.at(l,o),s.at(c,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?i.at(0,o):i.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let u;l<0?u=i.start:u=i.end;let f;c<0?f=s.start:f=s.end;const h=e,p=t;if(i.closestPointToPoint(f,!0,e),s.closestPointToPoint(u,!0,t),h.distanceToSquared(f)<=p.distanceToSquared(u)){o.copy(h),a.copy(f);return}else{o.copy(u),a.copy(p);return}}}}(),uy=function(){const r=new C,e=new C,t=new ci,n=new Ci;return function(s,o){const{radius:a,center:l}=s,{a:c,b:u,c:f}=o;if(n.start=c,n.end=u,n.closestPointToPoint(l,!0,r).distanceTo(l)<=a||(n.start=c,n.end=f,n.closestPointToPoint(l,!0,r).distanceTo(l)<=a)||(n.start=u,n.end=f,n.closestPointToPoint(l,!0,r).distanceTo(l)<=a))return!0;const g=o.getPlane(t);if(Math.abs(g.distanceToPoint(l))<=a){const d=g.projectPoint(l,e);if(o.containsPoint(d))return!0}return!1}}(),hy=1e-15;function _l(r){return Math.abs(r)<hy}class ti extends fn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new C),this.satBounds=new Array(4).fill().map(()=>new Pi),this.points=[this.a,this.b,this.c],this.sphere=new ni,this.plane=new ci,this.needsUpdate=!0}intersectsSphere(e){return uy(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,i);const c=s[1],u=o[1];c.subVectors(e,t),u.setFromPoints(c,i);const f=s[2],h=o[2];f.subVectors(t,n),h.setFromPoints(f,i);const p=s[3],_=o[3];p.subVectors(n,e),_.setFromPoints(p,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}ti.prototype.closestPointToSegment=function(){const r=new C,e=new C,t=new Ci;return function(i,s=null,o=null){const{start:a,end:l}=i,c=this.points;let u,f=1/0;for(let h=0;h<3;h++){const p=(h+1)%3;t.start.copy(c[h]),t.end.copy(c[p]),fc(t,i,r,e),u=r.distanceToSquared(e),u<f&&(f=u,s&&s.copy(r),o&&o.copy(e))}return this.closestPointToPoint(a,r),u=a.distanceToSquared(r),u<f&&(f=u,s&&s.copy(r),o&&o.copy(a)),this.closestPointToPoint(l,r),u=l.distanceToSquared(r),u<f&&(f=u,s&&s.copy(r),o&&o.copy(l)),Math.sqrt(f)}}();ti.prototype.intersectsTriangle=function(){const r=new ti,e=new Array(3),t=new Array(3),n=new Pi,i=new Pi,s=new C,o=new C,a=new C,l=new C,c=new C,u=new Ci,f=new Ci,h=new Ci,p=new C;function _(g,m,d){const x=g.points;let v=0,y=-1;for(let b=0;b<3;b++){const{start:M,end:T}=u;M.copy(x[b]),T.copy(x[(b+1)%3]),u.delta(o);const I=_l(m.distanceToPoint(M));if(_l(m.normal.dot(o))&&I){d.copy(u),v=2;break}const S=m.intersectLine(u,p);if(!S&&I&&p.copy(M),(S||I)&&!_l(p.distanceTo(T))){if(v<=1)(v===1?d.start:d.end).copy(p),I&&(y=v);else if(v>=2){(y===1?d.start:d.end).copy(p),v=2;break}if(v++,v===2&&y===-1)break}}return v}return function(m,d=null,x=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(r.copy(m),r.update(),m=r);const v=this.plane,y=m.plane;if(Math.abs(v.normal.dot(y.normal))>1-1e-10){const b=this.satBounds,M=this.satAxes;t[0]=m.a,t[1]=m.b,t[2]=m.c;for(let S=0;S<4;S++){const A=b[S],z=M[S];if(n.setFromPoints(z,t),A.isSeparated(n))return!1}const T=m.satBounds,I=m.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let S=0;S<4;S++){const A=T[S],z=I[S];if(n.setFromPoints(z,e),A.isSeparated(n))return!1}for(let S=0;S<4;S++){const A=M[S];for(let z=0;z<4;z++){const O=I[z];if(s.crossVectors(A,O),n.setFromPoints(s,e),i.setFromPoints(s,t),n.isSeparated(i))return!1}}return d&&(x||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),d.start.set(0,0,0),d.end.set(0,0,0)),!0}else{const b=_(this,y,f);if(b===1&&m.containsPoint(f.end))return d&&(d.start.copy(f.end),d.end.copy(f.end)),!0;if(b!==2)return!1;const M=_(m,v,h);if(M===1&&this.containsPoint(h.end))return d&&(d.start.copy(h.end),d.end.copy(h.end)),!0;if(M!==2)return!1;if(f.delta(a),h.delta(l),a.dot(l)<0){let W=h.start;h.start=h.end,h.end=W}const T=f.start.dot(a),I=f.end.dot(a),S=h.start.dot(a),A=h.end.dot(a),z=I<S,O=T<A;return T!==A&&S!==I&&z===O?!1:(d&&(c.subVectors(f.start,h.start),c.dot(a)>0?d.start.copy(f.start):d.start.copy(h.start),c.subVectors(f.end,h.end),c.dot(a)<0?d.end.copy(f.end):d.end.copy(h.end)),!0)}}}();ti.prototype.distanceToPoint=function(){const r=new C;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}}();ti.prototype.distanceToTriangle=function(){const r=new C,e=new C,t=["a","b","c"],n=new Ci,i=new Ci;return function(o,a=null,l=null){const c=a||l?n:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let u=1/0;for(let f=0;f<3;f++){let h;const p=t[f],_=o[p];this.closestPointToPoint(_,r),h=_.distanceToSquared(r),h<u&&(u=h,a&&a.copy(r),l&&l.copy(_));const g=this[p];o.closestPointToPoint(g,r),h=g.distanceToSquared(r),h<u&&(u=h,a&&a.copy(g),l&&l.copy(r))}for(let f=0;f<3;f++){const h=t[f],p=t[(f+1)%3];n.set(this[h],this[p]);for(let _=0;_<3;_++){const g=t[_],m=t[(_+1)%3];i.set(o[g],o[m]),fc(n,i,r,e);const d=r.distanceToSquared(e);d<u&&(u=d,a&&a.copy(r),l&&l.copy(e))}}return Math.sqrt(u)}}();class bn{constructor(e,t,n){this.isOrientedBox=!0,this.min=new C,this.max=new C,this.matrix=new Ve,this.invMatrix=new Ve,this.points=new Array(8).fill().map(()=>new C),this.satAxes=new Array(3).fill().map(()=>new C),this.satBounds=new Array(3).fill().map(()=>new Pi),this.alignedSatBounds=new Array(3).fill().map(()=>new Pi),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}bn.prototype.update=function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){const h=1*c|2*u|4*f,p=i[h];p.x=c?n.x:t.x,p.y=u?n.y:t.y,p.z=f?n.z:t.z,p.applyMatrix4(e)}const s=this.satBounds,o=this.satAxes,a=i[0];for(let c=0;c<3;c++){const u=o[c],f=s[c],h=1<<c,p=i[h];u.subVectors(a,p),f.setFromPoints(u,i)}const l=this.alignedSatBounds;l[0].setFromPointsField(i,"x"),l[1].setFromPointsField(i,"y"),l[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();bn.prototype.intersectsBox=function(){const r=new Pi;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(r.min=n.x,r.max=i.x,a[0].isSeparated(r)||(r.min=n.y,r.max=i.y,a[1].isSeparated(r))||(r.min=n.z,r.max=i.z,a[2].isSeparated(r)))return!1;for(let l=0;l<3;l++){const c=o[l],u=s[l];if(r.setFromBox(c,t),u.isSeparated(r))return!1}return!0}}();bn.prototype.intersectsTriangle=function(){const r=new ti,e=new Array(3),t=new Pi,n=new Pi,i=new C;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(r.copy(o),r.update(),o=r);const a=this.satBounds,l=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let h=0;h<3;h++){const p=a[h],_=l[h];if(t.setFromPoints(_,e),p.isSeparated(t))return!1}const c=o.satBounds,u=o.satAxes,f=this.points;for(let h=0;h<3;h++){const p=c[h],_=u[h];if(t.setFromPoints(_,f),p.isSeparated(t))return!1}for(let h=0;h<3;h++){const p=l[h];for(let _=0;_<4;_++){const g=u[_];if(i.crossVectors(p,g),t.setFromPoints(i,e),n.setFromPoints(i,f),t.isSeparated(n))return!1}}return!0}}();bn.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();bn.prototype.distanceToPoint=function(){const r=new C;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}}();bn.prototype.distanceToBox=function(){const r=["x","y","z"],e=new Array(12).fill().map(()=>new Ci),t=new Array(12).fill().map(()=>new Ci),n=new C,i=new C;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),l&&l.copy(n),c&&c.copy(i)),0;const u=a*a,f=o.min,h=o.max,p=this.points;let _=1/0;for(let m=0;m<8;m++){const d=p[m];i.copy(d).clamp(f,h);const x=d.distanceToSquared(i);if(x<_&&(_=x,l&&l.copy(d),c&&c.copy(i),x<u))return Math.sqrt(x)}let g=0;for(let m=0;m<3;m++)for(let d=0;d<=1;d++)for(let x=0;x<=1;x++){const v=(m+1)%3,y=(m+2)%3,b=d<<v|x<<y,M=1<<m|d<<v|x<<y,T=p[b],I=p[M];e[g].set(T,I);const A=r[m],z=r[v],O=r[y],W=t[g],D=W.start,V=W.end;D[A]=f[A],D[z]=d?f[z]:h[z],D[O]=x?f[O]:h[z],V[A]=h[A],V[z]=d?f[z]:h[z],V[O]=x?f[O]:h[z],g++}for(let m=0;m<=1;m++)for(let d=0;d<=1;d++)for(let x=0;x<=1;x++){i.x=m?h.x:f.x,i.y=d?h.y:f.y,i.z=x?h.z:f.z,this.closestPointToPoint(i,n);const v=i.distanceToSquared(n);if(v<_&&(_=v,l&&l.copy(n),c&&c.copy(i),v<u))return Math.sqrt(v)}for(let m=0;m<12;m++){const d=e[m];for(let x=0;x<12;x++){const v=t[x];fc(d,v,n,i);const y=n.distanceToSquared(i);if(y<_&&(_=y,l&&l.copy(n),c&&c.copy(i),y<u))return Math.sqrt(y)}}return Math.sqrt(_)}}();class dc{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class fy extends dc{constructor(){super(()=>new ti)}}const Gn=new fy;function wn(r,e){return e[r+15]===65535}function Tn(r,e){return e[r+6]}function In(r,e){return e[r+14]}function Wn(r){return r+8}function Nn(r,e){return e[r+6]}function pc(r,e){return e[r+7]}class dy{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const Rt=new dy;let qi,is;const Wr=[],Go=new dc(()=>new $t);function py(r,e,t,n,i,s){qi=Go.getPrimitive(),is=Go.getPrimitive(),Wr.push(qi,is),Rt.setBuffer(r._roots[e]);const o=Vl(0,r.geometry,t,n,i,s);Rt.clearBuffer(),Go.releasePrimitive(qi),Go.releasePrimitive(is),Wr.pop(),Wr.pop();const a=Wr.length;return a>0&&(is=Wr[a-1],qi=Wr[a-2]),o}function Vl(r,e,t,n,i=null,s=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=Rt;let u=r*2;if(wn(u,l)){const _=Tn(r,c),g=In(u,l);return Ut(r,a,qi),n(_,g,!1,o,s+r,qi)}else{let O=function(D){const{uint16Array:V,uint32Array:Z}=Rt;let Q=D*2;for(;!wn(Q,V);)D=Wn(D),Q=D*2;return Tn(D,Z)},W=function(D){const{uint16Array:V,uint32Array:Z}=Rt;let Q=D*2;for(;!wn(Q,V);)D=Nn(D,Z),Q=D*2;return Tn(D,Z)+In(Q,V)};var h=O,p=W;const _=Wn(r),g=Nn(r,c);let m=_,d=g,x,v,y,b;if(i&&(y=qi,b=is,Ut(m,a,y),Ut(d,a,b),x=i(y),v=i(b),v<x)){m=g,d=_;const D=x;x=v,v=D,y=b}y||(y=qi,Ut(m,a,y));const M=wn(m*2,l),T=t(y,M,x,o+1,s+m);let I;if(T===Eh){const D=O(m),Z=W(m)-D;I=n(D,Z,!0,o+1,s+m,y)}else I=T&&Vl(m,e,t,n,i,s,o+1);if(I)return!0;b=is,Ut(d,a,b);const S=wn(d*2,l),A=t(b,S,v,o+1,s+d);let z;if(A===Eh){const D=O(d),Z=W(d)-D;z=n(D,Z,!0,o+1,s+d,b)}else z=A&&Vl(d,e,t,n,i,s,o+1);return!!z}}const Fs=new C,gl=new C;function my(r,e,t={},n=0,i=1/0){const s=n*n,o=i*i;let a=1/0,l=null;if(r.shapecast({boundsTraverseOrder:u=>(Fs.copy(e).clamp(u.min,u.max),Fs.distanceToSquared(e)),intersectsBounds:(u,f,h)=>h<a&&h<o,intersectsTriangle:(u,f)=>{u.closestPointToPoint(e,Fs);const h=e.distanceToSquared(Fs);return h<a&&(gl.copy(Fs),a=h,l=f),h<s}}),a===1/0)return null;const c=Math.sqrt(a);return t.point?t.point.copy(gl):t.point=gl.clone(),t.distance=c,t.faceIndex=l,t}const Xr=new C,qr=new C,jr=new C,Wo=new Ue,Xo=new Ue,qo=new Ue,Rh=new C,Lh=new C,Ch=new C,jo=new C;function _y(r,e,t,n,i,s){let o;return s===xn?o=r.intersectTriangle(n,t,e,!0,i):o=r.intersectTriangle(e,t,n,s!==Zn,i),o===null?null:{distance:r.origin.distanceTo(i),point:i.clone()}}function gy(r,e,t,n,i,s,o,a,l){Xr.fromBufferAttribute(e,s),qr.fromBufferAttribute(e,o),jr.fromBufferAttribute(e,a);const c=_y(r,Xr,qr,jr,jo,l);if(c){n&&(Wo.fromBufferAttribute(n,s),Xo.fromBufferAttribute(n,o),qo.fromBufferAttribute(n,a),c.uv=fn.getInterpolation(jo,Xr,qr,jr,Wo,Xo,qo,new Ue)),i&&(Wo.fromBufferAttribute(i,s),Xo.fromBufferAttribute(i,o),qo.fromBufferAttribute(i,a),c.uv1=fn.getInterpolation(jo,Xr,qr,jr,Wo,Xo,qo,new Ue)),t&&(Rh.fromBufferAttribute(t,s),Lh.fromBufferAttribute(t,o),Ch.fromBufferAttribute(t,a),c.normal=fn.getInterpolation(jo,Xr,qr,jr,Rh,Lh,Ch,new C),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));const u={a:s,b:o,c:a,normal:new C,materialIndex:0};fn.getNormal(Xr,qr,jr,u.normal),c.face=u,c.faceIndex=s}return c}function Ma(r,e,t,n,i){const s=n*3;let o=s+0,a=s+1,l=s+2;const c=r.index;r.index&&(o=c.getX(o),a=c.getX(a),l=c.getX(l));const{position:u,normal:f,uv:h,uv1:p}=r.attributes,_=gy(t,u,f,h,p,o,a,l,e);return _?(_.faceIndex=n,i&&i.push(_),_):null}function jt(r,e,t,n){const i=r.a,s=r.b,o=r.c;let a=e,l=e+1,c=e+2;t&&(a=t.getX(a),l=t.getX(l),c=t.getX(c)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function vy(r,e,t,n,i,s){const{geometry:o,_indirectBuffer:a}=r;for(let l=n,c=n+i;l<c;l++)Ma(o,e,t,l,s)}function xy(r,e,t,n,i){const{geometry:s,_indirectBuffer:o}=r;let a=1/0,l=null;for(let c=n,u=n+i;c<u;c++){let f;f=Ma(s,e,t,c),f&&f.distance<a&&(l=f,a=f.distance)}return l}function yy(r,e,t,n,i,s,o){const{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let u=r,f=e+r;u<f;u++){let h;if(h=u,jt(o,h*3,l,c),o.needsUpdate=!0,n(o,h,i,s))return!0}return!1}function by(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=r.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let s,o,a,l,c=0;const u=r._roots;for(let h=0,p=u.length;h<p;h++)s=u[h],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),f(0,c),c+=s.byteLength;function f(h,p,_=!1){const g=h*2;if(a[g+15]===wa){const d=o[h+6],x=a[g+14];let v=1/0,y=1/0,b=1/0,M=-1/0,T=-1/0,I=-1/0;for(let S=3*d,A=3*(d+x);S<A;S++){let z=n[S];const O=i.getX(z),W=i.getY(z),D=i.getZ(z);O<v&&(v=O),O>M&&(M=O),W<y&&(y=W),W>T&&(T=W),D<b&&(b=D),D>I&&(I=D)}return l[h+0]!==v||l[h+1]!==y||l[h+2]!==b||l[h+3]!==M||l[h+4]!==T||l[h+5]!==I?(l[h+0]=v,l[h+1]=y,l[h+2]=b,l[h+3]=M,l[h+4]=T,l[h+5]=I,!0):!1}else{const d=h+8,x=o[h+6],v=d+p,y=x+p;let b=_,M=!1,T=!1;e?b||(M=e.has(v),T=e.has(y),b=!M&&!T):(M=!0,T=!0);const I=b||M,S=b||T;let A=!1;I&&(A=f(d,p,b));let z=!1;S&&(z=f(x,p,b));const O=A||z;if(O)for(let W=0;W<3;W++){const D=d+W,V=x+W,Z=l[D],Q=l[D+3],ce=l[V],ie=l[V+3];l[h+W]=Z<ce?Z:ce,l[h+W+3]=Q>ie?Q:ie}return O}}}const Ph=new $t;function Qi(r,e,t,n){return Ut(r,e,Ph),t.intersectBox(Ph,n)}function Sy(r,e,t,n,i,s){const{geometry:o,_indirectBuffer:a}=r;for(let l=n,c=n+i;l<c;l++){let u=a?a[l]:l;Ma(o,e,t,u,s)}}function Ey(r,e,t,n,i){const{geometry:s,_indirectBuffer:o}=r;let a=1/0,l=null;for(let c=n,u=n+i;c<u;c++){let f;f=Ma(s,e,t,o?o[c]:c),f&&f.distance<a&&(l=f,a=f.distance)}return l}function wy(r,e,t,n,i,s,o){const{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let u=r,f=e+r;u<f;u++){let h;if(h=t.resolveTriangleIndex(u),jt(o,h*3,l,c),o.needsUpdate=!0,n(o,h,i,s))return!0}return!1}const Dh=new C;function My(r,e,t,n,i){Rt.setBuffer(r._roots[e]),Gl(0,r,t,n,i),Rt.clearBuffer()}function Gl(r,e,t,n,i){const{float32Array:s,uint16Array:o,uint32Array:a}=Rt,l=r*2;if(wn(l,o)){const u=Tn(r,a),f=In(l,o);vy(e,t,n,u,f,i)}else{const u=Wn(r);Qi(u,s,n,Dh)&&Gl(u,e,t,n,i);const f=Nn(r,a);Qi(f,s,n,Dh)&&Gl(f,e,t,n,i)}}const Ih=new C,Ty=["x","y","z"];function Ay(r,e,t,n){Rt.setBuffer(r._roots[e]);const i=Wl(0,r,t,n);return Rt.clearBuffer(),i}function Wl(r,e,t,n){const{float32Array:i,uint16Array:s,uint32Array:o}=Rt;let a=r*2;if(wn(a,s)){const c=Tn(r,o),u=In(a,s);return xy(e,t,n,c,u)}else{const c=pc(r,o),u=Ty[c],h=n.direction[u]>=0;let p,_;h?(p=Wn(r),_=Nn(r,o)):(p=Nn(r,o),_=Wn(r));const m=Qi(p,i,n,Ih)?Wl(p,e,t,n):null;if(m){const v=m.point[u];if(h?v<=i[_+c]:v>=i[_+c+3])return m}const x=Qi(_,i,n,Ih)?Wl(_,e,t,n):null;return m&&x?m.distance<=x.distance?m:x:m||x||null}}const Yo=new $t,Yr=new ti,$r=new ti,Os=new Ve,Nh=new bn,$o=new bn;function Ry(r,e,t,n){Rt.setBuffer(r._roots[e]);const i=Xl(0,r,t,n);return Rt.clearBuffer(),i}function Xl(r,e,t,n,i=null){const{float32Array:s,uint16Array:o,uint32Array:a}=Rt;let l=r*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Nh.set(t.boundingBox.min,t.boundingBox.max,n),i=Nh),wn(l,o)){const u=e.geometry,f=u.index,h=u.attributes.position,p=t.index,_=t.attributes.position,g=Tn(r,a),m=In(l,o);if(Os.copy(n).invert(),t.boundsTree)return Ut(r,s,$o),$o.matrix.copy(Os),$o.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:x=>$o.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let v=g*3,y=(m+g)*3;v<y;v+=3)if(jt($r,v,f,h),$r.needsUpdate=!0,x.intersectsTriangle($r))return!0;return!1}});for(let d=g*3,x=(m+g)*3;d<x;d+=3){jt(Yr,d,f,h),Yr.a.applyMatrix4(Os),Yr.b.applyMatrix4(Os),Yr.c.applyMatrix4(Os),Yr.needsUpdate=!0;for(let v=0,y=p.count;v<y;v+=3)if(jt($r,v,p,_),$r.needsUpdate=!0,Yr.intersectsTriangle($r))return!0}}else{const u=r+8,f=a[r+6];return Ut(u,s,Yo),!!(i.intersectsBox(Yo)&&Xl(u,e,t,n,i)||(Ut(f,s,Yo),i.intersectsBox(Yo)&&Xl(f,e,t,n,i)))}}const Ko=new Ve,vl=new bn,Us=new bn,Ly=new C,Cy=new C,Py=new C,Dy=new C;function Iy(r,e,t,n={},i={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),vl.set(e.boundingBox.min,e.boundingBox.max,t),vl.needsUpdate=!0;const a=r.geometry,l=a.attributes.position,c=a.index,u=e.attributes.position,f=e.index,h=Gn.getPrimitive(),p=Gn.getPrimitive();let _=Ly,g=Cy,m=null,d=null;i&&(m=Py,d=Dy);let x=1/0,v=null,y=null;return Ko.copy(t).invert(),Us.matrix.copy(Ko),r.shapecast({boundsTraverseOrder:b=>vl.distanceToBox(b),intersectsBounds:(b,M,T)=>T<x&&T<o?(M&&(Us.min.copy(b.min),Us.max.copy(b.max),Us.needsUpdate=!0),!0):!1,intersectsRange:(b,M)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:I=>Us.distanceToBox(I),intersectsBounds:(I,S,A)=>A<x&&A<o,intersectsRange:(I,S)=>{for(let A=I,z=I+S;A<z;A++){jt(p,3*A,f,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let O=b,W=b+M;O<W;O++){jt(h,3*O,c,l),h.needsUpdate=!0;const D=h.distanceToTriangle(p,_,m);if(D<x&&(g.copy(_),d&&d.copy(m),x=D,v=O,y=A),D<s)return!0}}}});{const T=Ss(e);for(let I=0,S=T;I<S;I++){jt(p,3*I,f,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let A=b,z=b+M;A<z;A++){jt(h,3*A,c,l),h.needsUpdate=!0;const O=h.distanceToTriangle(p,_,m);if(O<x&&(g.copy(_),d&&d.copy(m),x=O,v=A,y=I),O<s)return!0}}}}}),Gn.releasePrimitive(h),Gn.releasePrimitive(p),x===1/0?null:(n.point?n.point.copy(g):n.point=g.clone(),n.distance=x,n.faceIndex=v,i&&(i.point?i.point.copy(d):i.point=d.clone(),i.point.applyMatrix4(Ko),g.applyMatrix4(Ko),i.distance=g.sub(i.point).length(),i.faceIndex=y),n)}function Ny(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=r.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let s,o,a,l,c=0;const u=r._roots;for(let h=0,p=u.length;h<p;h++)s=u[h],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),f(0,c),c+=s.byteLength;function f(h,p,_=!1){const g=h*2;if(a[g+15]===wa){const d=o[h+6],x=a[g+14];let v=1/0,y=1/0,b=1/0,M=-1/0,T=-1/0,I=-1/0;for(let S=d,A=d+x;S<A;S++){const z=3*r.resolveTriangleIndex(S);for(let O=0;O<3;O++){let W=z+O;W=n?n[W]:W;const D=i.getX(W),V=i.getY(W),Z=i.getZ(W);D<v&&(v=D),D>M&&(M=D),V<y&&(y=V),V>T&&(T=V),Z<b&&(b=Z),Z>I&&(I=Z)}}return l[h+0]!==v||l[h+1]!==y||l[h+2]!==b||l[h+3]!==M||l[h+4]!==T||l[h+5]!==I?(l[h+0]=v,l[h+1]=y,l[h+2]=b,l[h+3]=M,l[h+4]=T,l[h+5]=I,!0):!1}else{const d=h+8,x=o[h+6],v=d+p,y=x+p;let b=_,M=!1,T=!1;e?b||(M=e.has(v),T=e.has(y),b=!M&&!T):(M=!0,T=!0);const I=b||M,S=b||T;let A=!1;I&&(A=f(d,p,b));let z=!1;S&&(z=f(x,p,b));const O=A||z;if(O)for(let W=0;W<3;W++){const D=d+W,V=x+W,Z=l[D],Q=l[D+3],ce=l[V],ie=l[V+3];l[h+W]=Z<ce?Z:ce,l[h+W+3]=Q>ie?Q:ie}return O}}}const Fh=new C;function Fy(r,e,t,n,i){Rt.setBuffer(r._roots[e]),ql(0,r,t,n,i),Rt.clearBuffer()}function ql(r,e,t,n,i){const{float32Array:s,uint16Array:o,uint32Array:a}=Rt,l=r*2;if(wn(l,o)){const u=Tn(r,a),f=In(l,o);Sy(e,t,n,u,f,i)}else{const u=Wn(r);Qi(u,s,n,Fh)&&ql(u,e,t,n,i);const f=Nn(r,a);Qi(f,s,n,Fh)&&ql(f,e,t,n,i)}}const Oh=new C,Oy=["x","y","z"];function Uy(r,e,t,n){Rt.setBuffer(r._roots[e]);const i=jl(0,r,t,n);return Rt.clearBuffer(),i}function jl(r,e,t,n){const{float32Array:i,uint16Array:s,uint32Array:o}=Rt;let a=r*2;if(wn(a,s)){const c=Tn(r,o),u=In(a,s);return Ey(e,t,n,c,u)}else{const c=pc(r,o),u=Oy[c],h=n.direction[u]>=0;let p,_;h?(p=Wn(r),_=Nn(r,o)):(p=Nn(r,o),_=Wn(r));const m=Qi(p,i,n,Oh)?jl(p,e,t,n):null;if(m){const v=m.point[u];if(h?v<=i[_+c]:v>=i[_+c+3])return m}const x=Qi(_,i,n,Oh)?jl(_,e,t,n):null;return m&&x?m.distance<=x.distance?m:x:m||x||null}}const Zo=new $t,Kr=new ti,Zr=new ti,Bs=new Ve,Uh=new bn,Qo=new bn;function By(r,e,t,n){Rt.setBuffer(r._roots[e]);const i=Yl(0,r,t,n);return Rt.clearBuffer(),i}function Yl(r,e,t,n,i=null){const{float32Array:s,uint16Array:o,uint32Array:a}=Rt;let l=r*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Uh.set(t.boundingBox.min,t.boundingBox.max,n),i=Uh),wn(l,o)){const u=e.geometry,f=u.index,h=u.attributes.position,p=t.index,_=t.attributes.position,g=Tn(r,a),m=In(l,o);if(Bs.copy(n).invert(),t.boundsTree)return Ut(r,s,Qo),Qo.matrix.copy(Bs),Qo.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:x=>Qo.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let v=g,y=m+g;v<y;v++)if(jt(Zr,3*e.resolveTriangleIndex(v),f,h),Zr.needsUpdate=!0,x.intersectsTriangle(Zr))return!0;return!1}});for(let d=g,x=m+g;d<x;d++){const v=e.resolveTriangleIndex(d);jt(Kr,3*v,f,h),Kr.a.applyMatrix4(Bs),Kr.b.applyMatrix4(Bs),Kr.c.applyMatrix4(Bs),Kr.needsUpdate=!0;for(let y=0,b=p.count;y<b;y+=3)if(jt(Zr,y,p,_),Zr.needsUpdate=!0,Kr.intersectsTriangle(Zr))return!0}}else{const u=r+8,f=a[r+6];return Ut(u,s,Zo),!!(i.intersectsBox(Zo)&&Yl(u,e,t,n,i)||(Ut(f,s,Zo),i.intersectsBox(Zo)&&Yl(f,e,t,n,i)))}}const Jo=new Ve,xl=new bn,zs=new bn,zy=new C,ky=new C,Hy=new C,Vy=new C;function Gy(r,e,t,n={},i={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),xl.set(e.boundingBox.min,e.boundingBox.max,t),xl.needsUpdate=!0;const a=r.geometry,l=a.attributes.position,c=a.index,u=e.attributes.position,f=e.index,h=Gn.getPrimitive(),p=Gn.getPrimitive();let _=zy,g=ky,m=null,d=null;i&&(m=Hy,d=Vy);let x=1/0,v=null,y=null;return Jo.copy(t).invert(),zs.matrix.copy(Jo),r.shapecast({boundsTraverseOrder:b=>xl.distanceToBox(b),intersectsBounds:(b,M,T)=>T<x&&T<o?(M&&(zs.min.copy(b.min),zs.max.copy(b.max),zs.needsUpdate=!0),!0):!1,intersectsRange:(b,M)=>{if(e.boundsTree){const T=e.boundsTree;return T.shapecast({boundsTraverseOrder:I=>zs.distanceToBox(I),intersectsBounds:(I,S,A)=>A<x&&A<o,intersectsRange:(I,S)=>{for(let A=I,z=I+S;A<z;A++){const O=T.resolveTriangleIndex(A);jt(p,3*O,f,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let W=b,D=b+M;W<D;W++){const V=r.resolveTriangleIndex(W);jt(h,3*V,c,l),h.needsUpdate=!0;const Z=h.distanceToTriangle(p,_,m);if(Z<x&&(g.copy(_),d&&d.copy(m),x=Z,v=W,y=A),Z<s)return!0}}}})}else{const T=Ss(e);for(let I=0,S=T;I<S;I++){jt(p,3*I,f,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let A=b,z=b+M;A<z;A++){const O=r.resolveTriangleIndex(A);jt(h,3*O,c,l),h.needsUpdate=!0;const W=h.distanceToTriangle(p,_,m);if(W<x&&(g.copy(_),d&&d.copy(m),x=W,v=A,y=I),W<s)return!0}}}}}),Gn.releasePrimitive(h),Gn.releasePrimitive(p),x===1/0?null:(n.point?n.point.copy(g):n.point=g.clone(),n.distance=x,n.faceIndex=v,i&&(i.point?i.point.copy(d):i.point=d.clone(),i.point.applyMatrix4(Jo),g.applyMatrix4(Jo),i.distance=g.sub(i.point).length(),i.faceIndex=y),n)}function Wy(){return typeof SharedArrayBuffer<"u"}const $s=new Rt.constructor,ma=new Rt.constructor,Wi=new dc(()=>new $t),Qr=new $t,Jr=new $t,yl=new $t,bl=new $t;let Sl=!1;function Xy(r,e,t,n){if(Sl)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Sl=!0;const i=r._roots,s=e._roots;let o,a=0,l=0;const c=new Ve().copy(t).invert();for(let u=0,f=i.length;u<f;u++){$s.setBuffer(i[u]),l=0;const h=Wi.getPrimitive();Ut(0,$s.float32Array,h),h.applyMatrix4(c);for(let p=0,_=s.length;p<_&&(ma.setBuffer(s[u]),o=Kn(0,0,t,c,n,a,l,0,0,h),ma.clearBuffer(),l+=s[p].length,!o);p++);if(Wi.releasePrimitive(h),$s.clearBuffer(),a+=i[u].length,o)break}return Sl=!1,o}function Kn(r,e,t,n,i,s=0,o=0,a=0,l=0,c=null,u=!1){let f,h;u?(f=ma,h=$s):(f=$s,h=ma);const p=f.float32Array,_=f.uint32Array,g=f.uint16Array,m=h.float32Array,d=h.uint32Array,x=h.uint16Array,v=r*2,y=e*2,b=wn(v,g),M=wn(y,x);let T=!1;if(M&&b)u?T=i(Tn(e,d),In(e*2,x),Tn(r,_),In(r*2,g),l,o+e,a,s+r):T=i(Tn(r,_),In(r*2,g),Tn(e,d),In(e*2,x),a,s+r,l,o+e);else if(M){const I=Wi.getPrimitive();Ut(e,m,I),I.applyMatrix4(t);const S=Wn(r),A=Nn(r,_);Ut(S,p,Qr),Ut(A,p,Jr);const z=I.intersectsBox(Qr),O=I.intersectsBox(Jr);T=z&&Kn(e,S,n,t,i,o,s,l,a+1,I,!u)||O&&Kn(e,A,n,t,i,o,s,l,a+1,I,!u),Wi.releasePrimitive(I)}else{const I=Wn(e),S=Nn(e,d);Ut(I,m,yl),Ut(S,m,bl);const A=c.intersectsBox(yl),z=c.intersectsBox(bl);if(A&&z)T=Kn(r,I,t,n,i,s,o,a,l+1,c,u)||Kn(r,S,t,n,i,s,o,a,l+1,c,u);else if(A)if(b)T=Kn(r,I,t,n,i,s,o,a,l+1,c,u);else{const O=Wi.getPrimitive();O.copy(yl).applyMatrix4(t);const W=Wn(r),D=Nn(r,_);Ut(W,p,Qr),Ut(D,p,Jr);const V=O.intersectsBox(Qr),Z=O.intersectsBox(Jr);T=V&&Kn(I,W,n,t,i,o,s,l,a+1,O,!u)||Z&&Kn(I,D,n,t,i,o,s,l,a+1,O,!u),Wi.releasePrimitive(O)}else if(z)if(b)T=Kn(r,S,t,n,i,s,o,a,l+1,c,u);else{const O=Wi.getPrimitive();O.copy(bl).applyMatrix4(t);const W=Wn(r),D=Nn(r,_);Ut(W,p,Qr),Ut(D,p,Jr);const V=O.intersectsBox(Qr),Z=O.intersectsBox(Jr);T=V&&Kn(S,W,n,t,i,o,s,l,a+1,O,!u)||Z&&Kn(S,D,n,t,i,o,s,l,a+1,O,!u),Wi.releasePrimitive(O)}}return T}const ea=new bn,Bh=new $t;class mc{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,s=e._indirectBuffer,o=n.getIndex();let a;return t.cloneBuffers?a={roots:i.map(l=>l.slice()),index:o.array.slice(),indirectBuffer:s?s.slice():null}:a={roots:i,index:o.array,indirectBuffer:s},a}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:i,roots:s,indirectBuffer:o}=e,a=new mc(t,{...n,[pl]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){const l=t.getIndex();if(l===null){const c=new Yt(e.index,1,!1);t.setIndex(c)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({strategy:Vf,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,[pl]:!1},t),t.useSharedArrayBuffer&&!Wy())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[pl]||(ly(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new $t)));const{_indirectBuffer:n}=this;this.resolveTriangleIndex=t.indirect?i=>n[i]:i=>i}refit(e=null){return(this.indirect?Ny:by)(this,e)}traverse(e,t=0){const n=this._roots[t],i=new Uint32Array(n),s=new Uint16Array(n);o(0);function o(a,l=0){const c=a*2,u=s[c+15]===wa;if(u){const f=i[a+6],h=s[c+14];e(l,u,new Float32Array(n,a*4,6),f,h)}else{const f=a+_r/4,h=i[a+6],p=i[a+7];e(l,u,new Float32Array(n,a*4,6),p)||(o(f,l+1),o(h,l+1))}}}raycast(e,t=ei){const n=this._roots,i=this.geometry,s=[],o=t.isMaterial,a=Array.isArray(t),l=i.groups,c=o?t.side:t,u=this.indirect?Fy:My;for(let f=0,h=n.length;f<h;f++){const p=a?t[l[f].materialIndex].side:c,_=s.length;if(u(this,f,p,e,s),a){const g=l[f].materialIndex;for(let m=_,d=s.length;m<d;m++)s[m].face.materialIndex=g}}return s}raycastFirst(e,t=ei){const n=this._roots,i=this.geometry,s=t.isMaterial,o=Array.isArray(t);let a=null;const l=i.groups,c=s?t.side:t,u=this.indirect?Uy:Ay;for(let f=0,h=n.length;f<h;f++){const p=o?t[l[f].materialIndex].side:c,_=u(this,f,p,e);_!=null&&(a==null||_.distance<a.distance)&&(a=_,o&&(_.face.materialIndex=l[f].materialIndex))}return a}intersectsGeometry(e,t){let n=!1;const i=this._roots,s=this.indirect?By:Ry;for(let o=0,a=i.length;o<a&&(n=s(this,o,e,t),!n);o++);return n}shapecast(e){const t=Gn.getPrimitive(),n=this.indirect?wy:yy;let{boundsTraverseOrder:i,intersectsBounds:s,intersectsRange:o,intersectsTriangle:a}=e;if(o&&a){const f=o;o=(h,p,_,g,m)=>f(h,p,_,g,m)?!0:n(h,p,this,a,_,g,t)}else o||(a?o=(f,h,p,_)=>n(f,h,this,a,p,_,t):o=(f,h,p)=>p);let l=!1,c=0;const u=this._roots;for(let f=0,h=u.length;f<h;f++){const p=u[f];if(l=py(this,f,s,o,i,c),l)break;c+=p.byteLength}return Gn.releasePrimitive(t),l}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:s}=n;const o=Gn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?_=>{const g=this.resolveTriangleIndex(_);jt(o,g*3,a,l)}:_=>{jt(o,_*3,a,l)},u=Gn.getPrimitive(),f=e.geometry.index,h=e.geometry.attributes.position,p=e.indirect?_=>{const g=e.resolveTriangleIndex(_);jt(u,g*3,f,h)}:_=>{jt(u,_*3,f,h)};if(s){const _=(g,m,d,x,v,y,b,M)=>{for(let T=d,I=d+x;T<I;T++){p(T),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let S=g,A=g+m;S<A;S++)if(c(S),o.needsUpdate=!0,s(o,u,S,T,v,y,b,M))return!0}return!1};if(i){const g=i;i=function(m,d,x,v,y,b,M,T){return g(m,d,x,v,y,b,M,T)?!0:_(m,d,x,v,y,b,M,T)}}else i=_}return Xy(this,e,t,i)}intersectsBox(e,t){return ea.set(e.min,e.max,t),ea.needsUpdate=!0,this.shapecast({intersectsBounds:n=>ea.intersectsBox(n),intersectsTriangle:n=>ea.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},s=0,o=1/0){return(this.indirect?Gy:Iy)(this,e,t,n,i,s,o)}closestPointToPoint(e,t={},n=0,i=1/0){return my(this,e,t,n,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{Ut(0,new Float32Array(n),Bh),e.union(Bh)}),e}}function qy(r){switch(r){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function jy(r){switch(r){case 1:return sf;case 2:return of;case 3:return sn;case 4:return sn}}function zh(r){switch(r){case 1:return Jl;case 2:return xa;case 3:return Js;case 4:return Js}}class Yf extends pa{constructor(){super(),this.minFilter=Nt,this.magFilter=Nt,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,n=e.itemSize,i=e.count;if(t!==null){if(n*i%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=i*n/t}const s=e.itemSize,o=e.count,a=e.normalized,l=e.array.constructor,c=l.BYTES_PER_ELEMENT;let u=this._forcedType,f=s;if(u===null)switch(l){case Float32Array:u=vn;break;case Uint8Array:case Uint16Array:case Uint32Array:u=Dn;break;case Int8Array:case Int16Array:case Int32Array:u=Ws;break}let h,p,_,g,m=qy(s);switch(u){case vn:_=1,p=jy(s),a&&c===1?(g=l,m+="8",l===Uint8Array?h=fi:(h=Pl,m+="_SNORM")):(g=Float32Array,m+="32F",h=vn);break;case Ws:m+=c*8+"I",_=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,p=zh(s),c===1?(g=Int8Array,h=Pl):c===2?(g=Int16Array,h=tf):(g=Int32Array,h=Ws);break;case Dn:m+=c*8+"UI",_=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,p=zh(s),c===1?(g=Uint8Array,h=fi):c===2?(g=Uint16Array,h=va):(g=Uint32Array,h=Dn);break}f===3&&(p===sn||p===Js)&&(f=4);const d=Math.ceil(Math.sqrt(o)),x=f*d*d,v=new g(x),y=e.normalized;e.normalized=!1;for(let b=0;b<o;b++){const M=f*b;v[M]=e.getX(b)/_,s>=2&&(v[M+1]=e.getY(b)/_),s>=3&&(v[M+2]=e.getZ(b)/_,f===4&&(v[M+3]=1)),s>=4&&(v[M+3]=e.getW(b)/_)}e.normalized=y,this.internalFormat=m,this.format=p,this.type=h,this.image.width=d,this.image.height=d,this.image.data=v,this.needsUpdate=!0,this.dispose(),e.itemSize=n,e.count=i}}class Yy extends Yf{constructor(){super(),this._forcedType=Dn}}class Vs extends Yf{constructor(){super(),this._forcedType=vn}}class kh{constructor(){this.index=new Yy,this.position=new Vs,this.bvhBounds=new pa,this.bvhContents=new pa,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(Ky(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const n=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const i=Xf(Wf(t));this._cachedIndexAttr=new Yt(i,1,!1)}$y(t,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:n,bvhContents:i}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),i&&i.dispose()}}function $y(r,e,t){const n=t.array,i=r.index?r.index.array:null;for(let s=0,o=e.length;s<o;s++){const a=3*s,l=3*e[s];for(let c=0;c<3;c++)n[a+c]=i?i[l+c]:l+c}}function Ky(r,e,t){const n=r._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const i=n[0],s=new Uint16Array(i),o=new Uint32Array(i),a=new Float32Array(i),l=i.byteLength/_r,c=2*Math.ceil(Math.sqrt(l/2)),u=new Float32Array(4*c*c),f=Math.ceil(Math.sqrt(l)),h=new Uint32Array(2*f*f);for(let p=0;p<l;p++){const _=p*_r/4,g=_*2,m=_;for(let d=0;d<3;d++)u[8*p+0+d]=a[m+0+d],u[8*p+4+d]=a[m+3+d];if(wn(g,s)){const d=In(g,s),x=Tn(_,o),v=4294901760|d;h[p*2+0]=v,h[p*2+1]=x}else{const d=4*Nn(_,o)/_r,x=pc(_,o);h[p*2+0]=x,h[p*2+1]=d}}e.image.data=u,e.image.width=c,e.image.height=c,e.format=sn,e.type=vn,e.internalFormat="RGBA32F",e.minFilter=Nt,e.magFilter=Nt,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=h,t.image.width=f,t.image.height=f,t.format=xa,t.type=Dn,t.internalFormat="RG32UI",t.minFilter=Nt,t.magFilter=Nt,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const Zy=`
#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,Qy=`

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}

// Raycasting
float intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	float dist = max( t0, 0.0 );

	return t1 >= dist ? dist : INFINITY;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	BVH bvh, vec3 rayOrigin, vec3 rayDirection, uint offset, uint count,
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( bvh.index, i ).xyz;
		vec3 a = texelFetch1D( bvh.position, indices.x ).rgb;
		vec3 b = texelFetch1D( bvh.position, indices.y ).rgb;
		vec3 c = texelFetch1D( bvh.position, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

float intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, BVH bvh, uint currNodeIndex ) {

	vec3 boundsMin = texelFetch1D( bvh.bvhBounds, currNodeIndex * 2u + 0u ).xyz;
	vec3 boundsMax = texelFetch1D( bvh.bvhBounds, currNodeIndex * 2u + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax );

}

bool bvhIntersectFirstHit(
	BVH bvh, vec3 rayOrigin, vec3 rayDirection,

	// output variables
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ 60 ];
	stack[ 0 ] = 0u;

	float triangleDistance = 1e20;
	bool found = false;
	while ( ptr > - 1 && ptr < 60 ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance = intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh, currNodeIndex );
		if ( boundsHitDistance == INFINITY || boundsHitDistance > triangleDistance ) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh.bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh, rayOrigin, rayDirection, offset, count, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,or=new C,ar=new C,lr=new C,Hh=new mt,ta=new C,El=new C,Vh=new mt,Gh=new mt,na=new Ve,Wh=new Ve;function ks(r,e){if(!r&&!e)return;const t=r.count===e.count,n=r.normalized===e.normalized,i=r.array.constructor===e.array.constructor,s=r.itemSize===e.itemSize;if(!t||!n||!i||!s)throw new Error}function Gs(r,e=null){const t=r.array.constructor,n=r.normalized,i=r.itemSize,s=e===null?r.count:e;return new Yt(new t(i*s),i,n)}function $f(r,e,t=0){if(r.isInterleavedBufferAttribute){const n=r.itemSize;for(let i=0,s=r.count;i<s;i++){const o=i+t;e.setX(o,r.getX(i)),n>=2&&e.setY(o,r.getY(i)),n>=3&&e.setZ(o,r.getZ(i)),n>=4&&e.setW(o,r.getW(i))}}else{const n=e.array,i=n.constructor,s=n.BYTES_PER_ELEMENT*r.itemSize*t;new i(n.buffer,s,r.array.length).set(r.array)}}function Jy(r,e,t){const n=r.elements,i=e.elements;for(let s=0,o=i.length;s<o;s++)n[s]+=i[s]*t}function Xh(r,e,t){const n=r.skeleton,i=r.geometry,s=n.bones,o=n.boneInverses;Vh.fromBufferAttribute(i.attributes.skinIndex,e),Gh.fromBufferAttribute(i.attributes.skinWeight,e),na.elements.fill(0);for(let a=0;a<4;a++){const l=Gh.getComponent(a);if(l!==0){const c=Vh.getComponent(a);Wh.multiplyMatrices(s[c].matrixWorld,o[c]),Jy(na,Wh,l)}}return na.multiply(r.bindMatrix).premultiply(r.bindMatrixInverse),t.transformDirection(na),t}function wl(r,e,t,n,i){ta.set(0,0,0);for(let s=0,o=r.length;s<o;s++){const a=e[s],l=r[s];a!==0&&(El.fromBufferAttribute(l,n),t?ta.addScaledVector(El,a):ta.addScaledVector(El.sub(i),a))}i.add(ta)}function eb(r,e={useGroups:!1,updateIndex:!1,skipAttributes:[]},t=new yn){const n=r[0].index!==null,{useGroups:i=!1,updateIndex:s=!1,skipAttributes:o=[]}=e,a=new Set(Object.keys(r[0].attributes)),l={};let c=0;t.clearGroups();for(let u=0;u<r.length;++u){const f=r[u];let h=0;if(n!==(f.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const p in f.attributes){if(!a.has(p))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.');l[p]===void 0&&(l[p]=[]),l[p].push(f.attributes[p]),h++}if(h!==a.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(i){let p;if(n)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");t.addGroup(c,p,u),c+=p}}if(n){let u=!1;if(!t.index){let f=0;for(let h=0;h<r.length;++h)f+=r[h].index.count;t.setIndex(new Yt(new Uint32Array(f),1,!1)),u=!0}if(s||u){const f=t.index;let h=0,p=0;for(let _=0;_<r.length;++_){const g=r[_],m=g.index;if(o[_]!==!0)for(let d=0;d<m.count;++d)f.setX(h,m.getX(d)+p),h++;p+=g.attributes.position.count}}}for(const u in l){const f=l[u];if(!(u in t.attributes)){let _=0;for(const g in f)_+=f[g].count;t.setAttribute(u,Gs(l[u][0],_))}const h=t.attributes[u];let p=0;for(let _=0,g=f.length;_<g;_++){const m=f[_];o[_]!==!0&&$f(m,h,p),p+=m.count}}return t}function tb(r,e){if(r===null||e===null)return r===e;if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}class nb{constructor(e){this.matrixWorld=new Ve,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=e,this.update()}update(){const e=this.mesh,t=e.geometry,n=e.skeleton,i=(t.index?t.index.count:t.attributes.position.count)/3;if(this.matrixWorld.copy(e.matrixWorld),this.geometryHash=t.attributes.position.version,this.primitiveCount=i,n){n.boneTexture||n.computeBoneTexture(),n.update();const s=n.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==s.length?this.boneMatrices=s.slice():this.boneMatrices.set(s)}else this.boneMatrices=null}didChange(){const e=this.mesh,t=e.geometry,n=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===t.attributes.position.version&&tb(e.skeleton&&e.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===n)}}class ib{constructor(e){Array.isArray(e)||(e=[e]);const t=[];e.forEach(n=>{n.traverseVisible(i=>{i.isMesh&&t.push(i)})}),this.meshes=t,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(t.length).fill().map(()=>new yn),this._diffMap=new WeakMap}getMaterials(){const e=[];return this.meshes.forEach(t=>{Array.isArray(t.material)?e.push(...t.material):e.push(t.material)}),e}generate(e=new yn){let t=[];const{meshes:n,useGroups:i,_intermediateGeometry:s,_diffMap:o}=this;for(let a=0,l=n.length;a<l;a++){const c=n[a],u=s[a],f=o.get(c);!f||f.didChange(c)?(this._convertToStaticGeometry(c,u),t.push(!1),f?f.update():o.set(c,new nb(c))):t.push(!0)}eb(s,{useGroups:i,skipAttributes:t},e);for(const a in e.attributes)e.attributes[a].needsUpdate=!0;return e}_convertToStaticGeometry(e,t=new yn){const n=e.geometry,i=this.applyWorldTransforms,s=this.attributes.includes("normal"),o=this.attributes.includes("tangent"),a=n.attributes,l=t.attributes;t.index||(t.index=n.index),l.position||t.setAttribute("position",Gs(a.position)),s&&!l.normal&&a.normal&&t.setAttribute("normal",Gs(a.normal)),o&&!l.tangent&&a.tangent&&t.setAttribute("tangent",Gs(a.tangent)),ks(n.index,t.index),ks(a.position,l.position),s&&ks(a.normal,l.normal),o&&ks(a.tangent,l.tangent);const c=a.position,u=s?a.normal:null,f=o?a.tangent:null,h=n.morphAttributes.position,p=n.morphAttributes.normal,_=n.morphAttributes.tangent,g=n.morphTargetsRelative,m=e.morphTargetInfluences,d=new st;d.getNormalMatrix(e.matrixWorld);for(let x=0,v=a.position.count;x<v;x++)or.fromBufferAttribute(c,x),u&&ar.fromBufferAttribute(u,x),f&&(Hh.fromBufferAttribute(f,x),lr.fromBufferAttribute(f,x)),m&&(h&&wl(h,m,g,x,or),p&&wl(p,m,g,x,ar),_&&wl(_,m,g,x,lr)),e.isSkinnedMesh&&(e.applyBoneTransform(x,or),u&&Xh(e,x,ar),f&&Xh(e,x,lr)),i&&or.applyMatrix4(e.matrixWorld),l.position.setXYZ(x,or.x,or.y,or.z),u&&(i&&ar.applyNormalMatrix(d),l.normal.setXYZ(x,ar.x,ar.y,ar.z)),f&&(i&&lr.transformDirection(e.matrixWorld),l.tangent.setXYZW(x,lr.x,lr.y,lr.z,Hh.w));for(const x in this.attributes){const v=this.attributes[x];v==="position"||v==="tangent"||v==="normal"||!(v in a)||(l[v]||t.setAttribute(v,Gs(a[v])),ks(a[v],l[v]),$f(a[v],l[v]))}return t}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.1
 * @author George Michael Brower
 * @license MIT
 */class pi{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),pi.nextNameID=pi.nextNameID||0,this.$name.id=`lil-gui-name-${++pi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class rb extends pi{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function $l(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const sb={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:$l,toHexString:$l},no={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},ob={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){const n=no.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return no.toHexString(i)}},ab={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=no.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return no.toHexString(i)}},lb=[sb,no,ob,ab];function cb(r){return lb.find(e=>e.match(r))}class ub extends pi{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=cb(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=$l(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ml extends pi{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class hb extends pi{constructor(e,t,n,i,s,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+x),this.$input.value=this.getValue())},i=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},s=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let o=!1,a,l,c,u,f;const h=5,p=x=>{a=x.clientX,l=c=x.clientY,o=!0,u=this.getValue(),f=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",g)},_=x=>{if(o){const v=x.clientX-a,y=x.clientY-l;Math.abs(y)>h?(x.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>h&&g()}if(!o){const v=x.clientY-c;f-=v*this._step*this._arrowKeyMultiplier(x),u+f>this._max?f=this._max-u:u+f<this._min&&(f=this._min-u),this._snapClampSetValue(u+f)}c=x.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},d=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",d)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(d,x,v,y,b)=>(d-x)/(v-x)*(b-y)+y,t=d=>{const x=this.$slider.getBoundingClientRect();let v=e(d,x.left,x.right,this._min,this._max);this._snapClampSetValue(v)},n=d=>{this._setDraggingStyle(!0),t(d.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=d=>{t(d.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=d=>{d.preventDefault(),this._setDraggingStyle(!0),t(d.touches[0].clientX),o=!1},u=d=>{d.touches.length>1||(this._hasScrollBar?(a=d.touches[0].clientX,l=d.touches[0].clientY,o=!0):c(d),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",h))},f=d=>{if(o){const x=d.touches[0].clientX-a,v=d.touches[0].clientY-l;Math.abs(x)>Math.abs(v)?c(d):(window.removeEventListener("touchmove",f),window.removeEventListener("touchend",h))}else d.preventDefault(),t(d.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",h)},p=this._callOnFinishChange.bind(this),_=400;let g;const m=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const v=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(p,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class fb extends pi{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.innerHTML=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class db extends pi{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const pb=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function mb(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let qh=!1;class _c{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!qh&&a&&(mb(pb),qh=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new fb(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new hb(this,e,t,n,i,s);case"boolean":return new rb(this,e,t);case"string":return new db(this,e,t);case"function":return new Ml(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new ub(this,e,t,n)}addFolder(e){const t=new _c({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Ml||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Ml)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const _b=`\r
//////////////////////////////////////////////////////\r
// camera uniforms\r
//////////////////////////////////////////////////////\r
\r
uniform mat4 cameraWorldMatrix;\r
uniform mat4 invProjectionMatrix;\r
uniform mat4 invModelMatrix;\r
uniform vec2 resolution;\r
\r
//////////////////////////////////////////////////////\r
// geometry uniforms\r
//////////////////////////////////////////////////////\r
\r
uniform BVH bvh_surface;\r
uniform BVH bvh_props;\r
\r
uniform sampler2D normalAttribute_surface;\r
uniform sampler2D normalAttribute_props;\r
uniform sampler2D tangentAttribute_surface;\r
uniform sampler2D tangentAttribute_props;\r
uniform bool has_normals_surface;\r
uniform bool has_tangents_surface;\r
uniform bool has_normals_props;\r
uniform bool has_tangents_props;\r
\r
//////////////////////////////////////////////////////\r
// renderer uniforms\r
//////////////////////////////////////////////////////\r
\r
uniform float accumulation_weight;\r
uniform float samples;\r
uniform bool wireframe;\r
uniform vec3 neutral_color;\r
uniform bool smooth_normals;\r
\r
//////////////////////////////////////////////////////\r
// material uniforms\r
//////////////////////////////////////////////////////\r
\r
uniform float base_weight;\r
uniform vec3  base_color;\r
uniform float base_roughness;\r
uniform float base_metalness;\r
uniform int   diffuse_mode; // FOR TESTING\r
\r
uniform float specular_weight;\r
uniform vec3  specular_color;\r
uniform float specular_roughness;\r
uniform float specular_anisotropy;\r
uniform float specular_rotation;\r
uniform float specular_ior;\r
\r
uniform float transmission_weight;\r
uniform vec3  transmission_color;\r
uniform float transmission_depth;\r
uniform vec3  transmission_scatter;\r
uniform float transmission_scatter_anisotropy;\r
uniform float transmission_dispersion_abbe_number;\r
uniform float transmission_dispersion_scale;\r
\r
uniform float subsurface_weight;\r
uniform vec3  subsurface_color;\r
uniform float subsurface_radius;\r
uniform vec3  subsurface_radius_scale;\r
uniform float subsurface_anisotropy;\r
uniform int   subsurface_mode; // FOR TESTING\r
\r
uniform float coat_weight;\r
uniform vec3  coat_color;\r
uniform float coat_roughness;\r
uniform float coat_anisotropy;\r
uniform float coat_rotation;\r
uniform float coat_ior;\r
uniform float coat_darkening;\r
\r
uniform float fuzz_weight;\r
uniform vec3  fuzz_color;\r
uniform float fuzz_roughness;\r
\r
uniform float thin_film_weight;\r
uniform float thin_film_thickness;\r
uniform float thin_film_ior;\r
\r
uniform float emission_luminance;\r
uniform vec3  emission_color;\r
\r
uniform float geometry_opacity;\r
uniform bool geometry_thin_walled;\r
\r
//////////////////////////////////////////////////////\r
// lighting uniforms\r
//////////////////////////////////////////////////////\r
\r
uniform float skyPower;\r
uniform vec3 skyColor;\r
\r
uniform float sunPower;\r
uniform float sunAngularSize;\r
uniform vec3 sunColor;\r
uniform vec3 sunDir;\r
\r
//////////////////////////////////////////////////////\r
// UVs\r
//////////////////////////////////////////////////////\r
varying vec2 vUv;\r
\r
//////////////////////////////////////////////////////\r
// useful constants\r
//////////////////////////////////////////////////////\r
\r
const float PI                    = 3.141592653589793;\r
const float PI2                   = 6.283185307179586;\r
const float PI_HALF               = 1.5707963267948966;\r
const float RECIPROCAL_PI         = 0.3183098861837907;\r
const float RECIPROCAL_PI2        = 0.15915494309189535;\r
\r
// tolerances\r
const float HUGE_DIST             = 1.0e20;\r
const float RAY_OFFSET            = 1.0e-4;\r
const float DENOM_TOLERANCE       = 1.0e-10;\r
const float RADIANCE_EPSILON      = 1.0e-12;\r
const float TRANSMITTANCE_EPSILON = 1.0e-4;\r
const float THROUGHPUT_EPSILON    = 1.0e-6;\r
const float PDF_EPSILON           = 1.0e-6;\r
const float IOR_EPSILON           = 1.0e-5;\r
const float FLT_EPSILON           = 1.1920929e-7;\r
\r
// material indices\r
const int MATERIAL_PROPS   = 0;\r
const int MATERIAL_OPENPBR = 1;\r
\r
//////////////////////////////////////////////////////\r
// utils\r
//////////////////////////////////////////////////////\r
\r
vec3 safe_normalize(in vec3 N)\r
{\r
    float l = length(N);\r
    return N/max(l, DENOM_TOLERANCE);\r
}\r
\r
float maxComponent(in vec3 v)\r
{\r
    return max(v.x, max(v.y, v.z));\r
}\r
\r
float minComponent(in vec3 v)\r
{\r
    return min(v.x, min(v.y, v.z));\r
}\r
\r
float avgComponent(in vec3 v)\r
{\r
    return (v.x + v.y + v.z)/3.0;\r
}\r
\r
\r
#define sqr(x) ((x)*(x))\r
\r
float cosTheta2( in vec3 w)  { return w.z*w.z; }\r
float cosTheta(  in vec3 w)  { return w.z; }\r
float sinTheta2( in vec3 w)  { return 1.0 - cosTheta2(w); }\r
float sinTheta(  in vec3 w)  { return sqrt(max(0.0, sinTheta2(w))); }\r
float tanTheta2(in vec3 nLocal) { float ct2 = cosTheta2(nLocal); return max(0.0, 1.0 - ct2) / max(ct2, DENOM_TOLERANCE); }\r
float tanTheta(in vec3 nLocal)  { return sqrt(max(0.0, tanTheta2(nLocal))); }\r
float cosPhi(in vec3 w) { float S = sinTheta(w); return (S == 0.0) ? 1.0 : clamp(w.x / S, -1.0, 1.0); }\r
float sinPhi(in vec3 w) { float S = sinTheta(w); return (S == 0.0) ? 1.0 : clamp(w.y / S, -1.0, 1.0); }\r
\r
/////////////////////////////////////////////////////////////////////////\r
// Transform to/from local space basis (i.e. tangent space frame)\r
/////////////////////////////////////////////////////////////////////////\r
\r
struct Basis\r
{\r
    // right-handed coordinate system\r
    vec3 nW; // aligned with the z-axis in local space\r
    vec3 tW; // aligned with the x-axis in local space\r
    vec3 bW; // aligned with the y-axis in local space\r
    vec3 baryCoord;\r
};\r
\r
vec3 normalToTangent(in vec3 N)\r
{\r
    vec3 T;\r
    if (abs(N.z) < abs(N.x))\r
        T = vec3(N.z, 0.0, -N.x);\r
    else\r
        T = vec3(0.0, N.z, -N.y);\r
    T = safe_normalize(T);\r
    return T;\r
}\r
\r
Basis makeBasis(in vec3 nW)\r
{\r
    Basis basis;\r
    basis.nW = safe_normalize(nW);\r
    basis.tW = normalToTangent(nW);\r
    basis.bW = cross(basis.nW, basis.tW);\r
    return basis;\r
}\r
\r
Basis makeBasis(in vec3 nW, in vec3 tW, in vec3 baryCoord)\r
{\r
    Basis basis;\r
    basis.nW = safe_normalize(nW);\r
    basis.tW = safe_normalize(tW);\r
    basis.bW = cross(basis.nW, basis.tW);\r
    basis.baryCoord = baryCoord;\r
    return basis;\r
}\r
\r
vec3 worldToLocal(in vec3 vWorld, in Basis basis)\r
{\r
    return vec3( dot(vWorld, basis.tW),\r
                 dot(vWorld, basis.bW),\r
                 dot(vWorld, basis.nW) );\r
}\r
\r
vec3 localToWorld(in vec3 vLocal, in Basis basis)\r
{\r
    return basis.tW*vLocal.x + basis.bW*vLocal.y + basis.nW*vLocal.z;\r
}\r
\r
\r
/////////////////////////////////////////////////////////////////////////\r
// Transform to/from rotated basis, for anisotropy calculations\r
/////////////////////////////////////////////////////////////////////////\r
\r
struct LocalFrameRotation\r
{\r
    mat2 M;\r
    mat2 Minv;\r
};\r
\r
LocalFrameRotation getLocalFrameRotation(in float angle)\r
{\r
    LocalFrameRotation rotation;\r
    if (angle==0.0 || angle==PI2)\r
    {\r
        mat2 identity = mat2(1.0, 0.0, 0.0, 1.0);\r
        rotation.M    = identity;\r
        rotation.Minv = identity;\r
    }\r
    else\r
    {\r
        float cos_rot = cos(angle);\r
        float sin_rot = sin(angle);\r
        rotation.M    = mat2(cos_rot,  sin_rot, -sin_rot, cos_rot);\r
        rotation.Minv = mat2(cos_rot, -sin_rot,  sin_rot, cos_rot);\r
    }\r
    return rotation;\r
}\r
\r
vec3 localToRotated(in vec3 vLocal, in LocalFrameRotation rotation)\r
{\r
    vec2 xy_rot = rotation.M * vLocal.xy;\r
    return vec3(xy_rot.x, xy_rot.y, vLocal.z);\r
}\r
\r
vec3 rotatedToLocal(in vec3 vRotated, in LocalFrameRotation rotation)\r
{\r
    vec2 xy_local = rotation.Minv * vRotated.xy;\r
    return vec3(xy_local.x, xy_local.y, vRotated.z);\r
}\r
\r
\r
/////////////////////////////////////////////////////////////////////////\r
// Sampling formulae\r
/////////////////////////////////////////////////////////////////////////\r
\r
// https://www.pcg-random.org/\r
uint pcg(uint v)\r
{\r
	uint state = v * 747796405u + 2891336453u;\r
	uint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\r
	return (word >> 22u) ^ word;\r
}\r
\r
void xorshift(inout uint seed)\r
{\r
    // https://en.wikipedia.org/wiki/Xorshift\r
    seed ^= seed << 13u;\r
    seed ^= seed >> 17u;\r
    seed ^= seed << 5u;\r
}\r
\r
float rand(inout uint seed)\r
{\r
    seed = pcg(seed);\r
    const float uint_range = 1.0 / float(0xFFFFFFFFU);\r
    return float(seed - 1U) * uint_range;\r
}\r
\r
// PDF for cosine-weighted sampling of hemisphere\r
float pdfHemisphereCosineWeighted(in vec3 wiL)\r
{\r
    if (wiL.z <= PDF_EPSILON) return PDF_EPSILON / PI;\r
    return wiL.z / PI;\r
}\r
\r
// Do cosine-weighted sampling of hemisphere\r
vec3 sampleHemisphereCosineWeighted(inout uint rndSeed, inout float pdf)\r
{\r
    float r = sqrt(rand(rndSeed));\r
    float theta = 2.0 * PI * rand(rndSeed);\r
    float x = r * cos(theta);\r
    float y = r * sin(theta);\r
    float z = sqrt(max(0.0, 1.0 - x*x - y*y));\r
    pdf = max(PDF_EPSILON, abs(z) / PI);\r
    return vec3(x, y, z);\r
}\r
\r
float powerHeuristic(const float a, const float b)\r
{\r
    return sqr(a) / max(DENOM_TOLERANCE, sqr(a) + sqr(b));\r
}\r
\r
float sample_triangle_filter(float xi)\r
{\r
    // sample from triangle filter, returning result in [-1, 1]\r
    return xi < 0.5 ? sqrt(2.0*xi) - 1.0 : 1.0 - sqrt(2.0 - 2.0*xi);\r
}\r
\r
\r
/////////////////////////////////////////////////////////////////////////\r
// material calculations\r
/////////////////////////////////////////////////////////////////////////\r
\r
const float ambient_ior = 1.0;\r
\r
bool cutout(in int material, inout uint rndSeed)\r
{\r
    if (material != MATERIAL_OPENPBR)\r
        return false;\r
    if (!geometry_thin_walled || geometry_opacity==1.0)\r
        return false;\r
    float X = rand(rndSeed);\r
    if (X < 1.0 - geometry_opacity) return true;\r
    return false;\r
}\r
\r
// mui     = magnitude of the cosine of the incident ray angle to the micronormal\r
// eta_ti  = ratio et/ei of the transmitted IOR (et) and incident IOR (ei)\r
// Outputs vec2(rs, rp), the amplitudes of the S, P polarized reflection (where squared amplitudes give reflectance).\r
vec2 FresnelDielectricPolarizations(float mui, float eta_ti)\r
{\r
    float mut2 = sqr(eta_ti) - (1.0 - sqr(mui));\r
    if (mut2 <= 0.0) return vec2(1.0, 1.0); // (total internal reflection)\r
    float mut = sqrt(mut2) / eta_ti;\r
    float rs = (mui - eta_ti*mut) / (mui + eta_ti*mut);\r
    float rp = (mut - eta_ti*mui) / (mut + eta_ti*mui);\r
    return vec2(rs, rp);\r
}\r
\r
// mui     = magnitude of the cosine of the incident ray angle to the micronormal\r
// eta_ti  = ratio et/ei of the transmitted IOR (et) and incident IOR (ei)\r
float FresnelDielectricReflectance(in float mui, in float eta_ti)\r
{\r
    // assuming unpolarized incident light\r
    vec2 r = FresnelDielectricPolarizations(mui, eta_ti);\r
    return 0.5*dot(r, r);\r
}\r
\r
vec3 FresnelSchlick(vec3 F0, float mu)\r
{\r
    return F0 + pow(1.0 - mu, 5.0)*(vec3(1.0) - F0);\r
}\r
\r
vec3 FresnelF82Tint(float mu, in vec3 F0, in vec3 F82tint)\r
{\r
    const float mu_bar = 1.0/7.0;\r
    const float denom = mu_bar * pow(1.0 - mu_bar, 6.0);\r
    vec3 Fschlick_bar = FresnelSchlick(F0, mu_bar);\r
    vec3 Fschlick     = FresnelSchlick(F0, mu);\r
    return Fschlick - mu * pow(1.0 - mu, 6.0) * (vec3(1.0) - F82tint) * Fschlick_bar / denom;\r
}\r
\r
// Hemispherical (average) albedo of dielectric Fresnel factor\r
float E_F(float eta)\r
{\r
    return log((10893.0*eta - 1438.2)/(-774.4*sqr(eta) + 10212.0*eta + 1.0));\r
}\r
\r
float average_dielectric_fresnel(float eta)\r
{\r
    if      (eta > 1.0) return E_F(eta);\r
    else if (eta < 1.0) return 1.0 - sqr(eta)*(1.0 - E_F(1.0/eta));\r
    else return 0.0;\r
}\r
\r
\r
/////////////////////////////////////////////////////////////////////////\r
// GGX Microfacet formulae\r
/////////////////////////////////////////////////////////////////////////\r
\r
// m = the microfacet normal (in the local space where z = the macrosurface normal)\r
float ggx_ndf_eval(in vec3 m, in float alpha_x, in float alpha_y)\r
{\r
    // Evaluate the anisotropic GGX NDF\r
    float ax = max(alpha_x, DENOM_TOLERANCE);\r
    float ay = max(alpha_y, DENOM_TOLERANCE);\r
    float Ddenom = PI * ax * ay * sqr(sqr(m.x/ax) + sqr(m.y/ay) + sqr(m.z));\r
    return 1.0 / max(Ddenom, DENOM_TOLERANCE);\r
}\r
\r
// GGX NDF sampling routine, as described in\r
//  "Sampling Visible GGX Normals with Spherical Caps", Dupuy et al., HPG 2023.\r
// NB, this assumes wiL is in the +z hemisphere, and returns a sampled micronormal in that hemisphere.\r
vec3 ggx_ndf_sample(in vec3 wiL, float alpha_x, float alpha_y, inout uint rndSeed)\r
{\r
    vec2 Xi = vec2(rand(rndSeed), rand(rndSeed));\r
    vec3 V = wiL;\r
    vec2 alpha = vec2(alpha_x, alpha_y);\r
\r
    // Transform the view direction to the hemisphere configuration.\r
    V = normalize(vec3(V.xy * alpha, V.z));\r
\r
    // Sample a spherical cap in (-V.z, 1].\r
    float phi = 2.0 * PI * Xi.x;\r
    float z = (1.0 - Xi.y) * (1.0 + V.z) - V.z;\r
    float sinTheta = sqrt(clamp(1.0 - z * z, 0.0, 1.0));\r
    float x = sinTheta * cos(phi);\r
    float y = sinTheta * sin(phi);\r
    vec3 c = vec3(x, y, z);\r
\r
    // Compute the microfacet normal.\r
    vec3 H = c + V;\r
\r
    // Transform the microfacet normal back to the ellipsoid configuration.\r
    H = normalize(vec3(H.xy * alpha, H.z));\r
\r
    return H;\r
}\r
\r
float ggx_lambda(in vec3 w, float alpha_x, float alpha_y)\r
{\r
    if (abs(w.z) < FLT_EPSILON) return 0.0;\r
    return (-1.0 + sqrt(1.0 + (sqr(alpha_x*w.x) + sqr(alpha_y*w.y))/sqr(w.z))) / 2.0;\r
}\r
\r
float ggx_G1(in vec3 w, float alpha_x, float alpha_y)\r
{\r
    return 1.0 / (1.0 + ggx_lambda(w, alpha_x, alpha_y));\r
}\r
\r
// Height-correlated form of GGX shadowing-masking function\r
float ggx_G2(in vec3 woL, in vec3 wiL, float alpha_x, float alpha_y)\r
{\r
    return 1.0 / (1.0 + ggx_lambda(woL, alpha_x, alpha_y) + ggx_lambda(wiL,  alpha_x, alpha_y));\r
}\r
\r
\r
/////////////////////////////////////////////////////////////////////////\r
// Volumetrics\r
/////////////////////////////////////////////////////////////////////////\r
\r
// Describes the internal volume of bulk transmissive media\r
struct Volume\r
{\r
    vec3 extinction;    // units of inverse length\r
    vec3 albedo;        // dimensional, single-scattering albedo\r
    float anisotropy;   // phase function anisotropy in [-1, 1]\r
};\r
\r
#ifdef VOLUME_ENABLED\r
vec3 samplePhaseFunction(in vec3 dW, float anisotropy, inout uint rndSeed)\r
{\r
    float U = rand(rndSeed);\r
    float V = rand(rndSeed);\r
    float g = anisotropy;\r
    float costheta;\r
    if (abs(g) < 1.0e-3)\r
        costheta = 1.0 - 2.0*U;\r
    else\r
        costheta = 1.0/(2.0*g) * (1.0 + g*g - ((1.0-g*g)*(1.0-g+2.0*g*U)));\r
    float sintheta = sqrt(max(0.0, 1.0-costheta*costheta));\r
    float phi = 2.0*PI*V;\r
    Basis basis = makeBasis(dW);\r
    return costheta*dW + sintheta*(cos(phi)*basis.tW + sin(phi)*basis.bW);\r
}\r
#endif\r
\r
float wavelength_nm;\r
\r
#ifdef DISPERSION_ENABLED\r
// Wavelength-dependent IOR according to Cauchy formula\r
float specular_ior_dispersive()\r
{\r
    const float lambda_C = 656.3;\r
    const float lambda_d = 587.6;\r
    const float lambda_F = 486.1;\r
    const float lambda_FC2 = 1.0 / (1.0/(lambda_F*lambda_F) - 1.0/(lambda_C*lambda_C));\r
    float Vd = transmission_dispersion_abbe_number / max(DENOM_TOLERANCE, transmission_dispersion_scale);\r
    float nd = specular_ior;\r
    float B = (nd - 1.0) * lambda_FC2 / max(DENOM_TOLERANCE, Vd);\r
    float A = nd - B/sqr(lambda_d);\r
    return A + B/sqr(wavelength_nm);\r
}\r
#endif // DISPERSION_ENABLED\r
\r
\r
/////////////////////////////////////////////////////////////////////////\r
// Color utils\r
/////////////////////////////////////////////////////////////////////////\r
\r
float luminance_srgb(in vec3 C)\r
{\r
    return 0.2126*C.r + 0.7152*C.g + 0.0722*C.b;\r
}\r
\r
#ifdef DISPERSION_ENABLED\r
\r
// Spectrum to XYZ approx function from Sloan: http://jcgt.org/published/0002/02/01/paper.pdf\r
// Inputs:  Wavelength in nanometers\r
float xFit_1931(float w)\r
{\r
    float t1 = (w-442.0)*((w<442.0)?0.0624:0.0374),\r
          t2 = (w-599.8)*((w<599.8)?0.0264:0.0323),\r
          t3 = (w-501.1)*((w<501.1)?0.0490:0.0382);\r
    return 0.362*exp(-0.5*t1*t1) + 1.056*exp(-0.5*t2*t2)- 0.065*exp(-0.5*t3*t3);\r
}\r
float yFit_1931(float w)\r
{\r
    float t1 = (w-568.8)*((w<568.8)?0.0213:0.0247),\r
          t2 = (w-530.9)*((w<530.9)?0.0613:0.0322);\r
    return 0.821*exp(-0.5*t1*t1) + 0.286*exp(-0.5*t2*t2);\r
}\r
float zFit_1931(float w)\r
{\r
    float t1 = (w-437.0)*((w<437.0)?0.0845:0.0278),\r
          t2 = (w-459.0)*((w<459.0)?0.0385:0.0725);\r
    return 1.217*exp(-0.5*t1*t1) + 0.681*exp(-0.5*t2*t2);\r
}\r
\r
#define xyzFit_1931(w) vec3(xFit_1931(w), yFit_1931(w), zFit_1931(w))\r
\r
vec3 xyzToRgb(vec3 XYZ)\r
{\r
	return XYZ * mat3( 3.240479, -1.537150, -0.498535,\r
	                  -0.969256 , 1.875991,  0.041556,\r
	                   0.055648, -0.204043,  1.057311);\r
}\r
\r
#endif // DISPERSION_ENABLED\r
`,gb=`\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// "Coat" dielectric microfacet BSDF\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
#ifdef COAT_ENABLED\r
void coat_ndf_roughnesses(out float alpha_x, out float alpha_y)\r
{\r
    float rsqr = sqr(coat_roughness);\r
    alpha_x = rsqr * sqrt(2.0/(1.0 + sqr(1.0 - coat_anisotropy)));\r
    alpha_y = (1.0 - coat_anisotropy) * alpha_x;\r
    // (Here opt to clamp to a mininum roughness, rather than deal with a special degenerate case for zero roughness)\r
    const float min_alpha = 1.0e-4;\r
    alpha_x = max(min_alpha, alpha_x);\r
    alpha_y = max(min_alpha, alpha_y);\r
}\r
#endif // COAT_ENABLED\r
\r
vec3 coat_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
                        inout float pdf_woutputL)\r
{\r
#ifdef COAT_ENABLED\r
    bool transmitted = woutputL.z * winputL.z < 0.0;\r
    if (transmitted)\r
        return vec3(0.0);\r
\r
    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.\r
    // Thus we can determine if the reflection is internal or external to the dielectric:\r
    vec3 beamOutgoingL = winputL;\r
    bool external_reflection = (beamOutgoingL.z > 0.0);\r
\r
    // Compute IOR ratio at interface:\r
    //  eta_ti_refl = (IOR in hemi. opposite to reflection) / (IOR in hemi. of reflection)\r
    float n_exterior = 1.0;\r
    float n_interior = coat_ior;\r
    float eta_ti_refl = external_reflection ? n_interior/n_exterior : n_exterior/n_interior;\r
    if (abs(eta_ti_refl - 1.0) < IOR_EPSILON)\r
        return vec3(0.0); // degenerate case of index-matched interface, BRDF goes to zero\r
\r
    // Compute the NDF roughnesses in the rotated frame\r
    float alpha_x, alpha_y;\r
    coat_ndf_roughnesses(alpha_x, alpha_y);\r
\r
    // Construct basis such that x, y are aligned with the T, B in the local, rotated frame\r
    LocalFrameRotation rotation = getLocalFrameRotation(PI2*coat_rotation);\r
    vec3 winputR  = localToRotated(winputL,  rotation);\r
    vec3 woutputR = localToRotated(woutputL, rotation);\r
\r
    // Compute the micronormal mR in the local (rotated) frame, from the reflection half-vector\r
    vec3 mR = normalize(woutputR + winputR);\r
\r
    // Compute NDF, and "distribution of visible normals" DV\r
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);\r
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * max(0.0, dot(winputR, mR)) / winputR.z;\r
\r
    // Compute Fresnel factor for the dielectric reflection\r
    float F = FresnelDielectricReflectance(abs(dot(winputR, mR)), eta_ti_refl);\r
\r
    // Thus compute PDF of woutputL sample\r
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputR, mR)), DENOM_TOLERANCE); // Jacobian of the half-direction mapping\r
    pdf_woutputL = DV * dwh_dwo;\r
\r
    // Thus evaluate BRDF\r
    return vec3(F) * D * ggx_G2(winputR, woutputR, alpha_x, alpha_y) / max(4.0*abs(woutputL.z)*abs(winputL.z), DENOM_TOLERANCE);\r
#else\r
    return vec3(0.0);\r
#endif // COAT_ENABLED\r
}\r
\r
\r
vec3 coat_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                      out vec3 woutputL, out float pdf_woutputL)\r
{\r
#ifdef COAT_ENABLED\r
    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.\r
    // Thus we can determine if the reflection is internal or external to the dielectric:\r
    vec3 beamOutgoingL = winputL;\r
    bool external_reflection = (beamOutgoingL.z > 0.0);\r
\r
    // Compute IOR ratio at interface:\r
    //  eta_ti_refl = (IOR in hemi. opposite to reflection) / (IOR in hemi. of reflection)\r
    float n_exterior = 1.0;\r
    float n_interior = coat_ior;\r
    float eta_ti_refl = external_reflection ? n_interior/n_exterior : n_exterior/n_interior;\r
    if (abs(eta_ti_refl - 1.0) < IOR_EPSILON)\r
        return vec3(0.0); // degenerate limit case of index-matched interface, BRDF goes to zero\r
\r
    // Compute the NDF roughnesses in the rotated frame\r
    float alpha_x, alpha_y;\r
    coat_ndf_roughnesses(alpha_x, alpha_y);\r
\r
    // Construct basis such that x, y are aligned with the T, B in the rotated frame\r
    LocalFrameRotation rotation = getLocalFrameRotation(PI2*coat_rotation);\r
    vec3 winputR = localToRotated(winputL, rotation);\r
\r
    // Sample local microfacet normal mR, according to Heitz "Sampling the GGX Distribution of Visible Normals"\r
    vec3 mR = ggx_ndf_sample(winputR, alpha_x, alpha_y, rndSeed);\r
    if (winputR.z > 0.0)\r
        mR = ggx_ndf_sample(winputR, alpha_x, alpha_y, rndSeed);\r
    else\r
        return vec3(0.0); // coat internal reflection ignored (not strictly physical)\r
\r
    // Compute woutputR (and thus woutputL) by reflecting winputR about mR\r
    vec3 woutputR = -winputR + 2.0*dot(winputR, mR)*mR;\r
    if (winputR.z * woutputR.z < FLT_EPSILON)\r
        return vec3(0.0); // no reflection if ray direction in wrong hemisphere (in absence of a multi-scatter approx. currently)\r
\r
    // Rotate woutputR back to local space\r
    woutputL = rotatedToLocal(woutputR, rotation);\r
\r
    // Compute NDF, and "distribution of visible normals" DV\r
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);\r
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * abs(dot(winputR, mR)) / max(DENOM_TOLERANCE, abs(winputR.z));\r
\r
    // Compute shadowing-masking term\r
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);\r
\r
    // Thus compute PDF of woutputL sample\r
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputR, mR)), DENOM_TOLERANCE); // Jacobian of the half-direction mapping\r
    pdf_woutputL = DV * dwh_dwo;\r
\r
    // Compute Fresnel factor for the dielectric reflection\r
    float F = FresnelDielectricReflectance(abs(dot(winputR, mR)), eta_ti_refl);\r
\r
    // Thus evaluate BRDF\r
    vec3 f = vec3(F) * D * G2 / max(4.0 * abs(woutputL.z) * abs(winputL.z), DENOM_TOLERANCE);\r
    return f;\r
#else\r
    return vec3(0.0);\r
#endif // // COAT_ENABLED\r
}\r
\r
\r
vec3 coat_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)\r
{\r
#ifdef COAT_ENABLED\r
    // Estimate of the BRDF albedo, used to compute the discrete probability of selecting this lobe\r
    float n_exterior = 1.0;\r
    float n_interior = coat_ior;\r
    float eta = n_interior/n_exterior;\r
    if (abs(eta - 1.0) < IOR_EPSILON)\r
    {\r
        // degenerate case of index-matched interface, BRDF goes to zero\r
        return vec3(0.0);\r
    }\r
\r
    // Approximate albedo via Monte-Carlo sampling:\r
    const int num_samples = 1;\r
    vec3 albedo = vec3(0.0);\r
    for (int n=0; n<num_samples; ++n)\r
    {\r
        vec3 woutputL;\r
        float pdf_woutputL;\r
        vec3 f = coat_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL);\r
        if (length(f) > RADIANCE_EPSILON)\r
            albedo += f * abs(woutputL.z) / max(PDF_EPSILON, pdf_woutputL);\r
    }\r
    albedo /= float(num_samples);\r
    return albedo;\r
#else\r
    return vec3(0.0);\r
#endif // COAT_ENABLED\r
}\r
`,vb=`#ifdef THIN_FILM_ENABLED\r
\r
/*\r
    Simplified implementation of thin-film Fresnel, based on:\r
\r
        "A Practical Extension to Microfacet Theory for the Modeling of Varying Iridescence", Belcour & Barla, SIGGRAPH 2017\r
\r
    Here we ignore the true spectral dependence of the RGB channels,\r
    and just do a monochromatic computation for each channel assuming a fixed wavelength.\r
    This doesn't match the ground truth, but is a plausible, fast approximation.\r
*/\r
\r
vec2 complex(float a, float b)           { return vec2(a, b); }\r
vec2 complex_mul(in vec2 z1, in vec2 z2) { return vec2(z1.x*z2.x - z1.y*z2.y, z1.x*z2.y + z1.y*z2.x); }\r
vec2 complex_conj(in vec2 z)             { return complex(z.x, -z.y); }\r
float complex_mag2(vec2 z)               { return sqr(z.x) + sqr(z.y); }\r
vec2 complex_inv(in vec2 z)              { return complex_conj(z) / complex_mag2(z); }\r
vec2 complex_add(float a, in vec2 z)     { return vec2(a + z.x,  z.y); }\r
vec2 complex_sub(float a, in vec2 z)     { return vec2(a - z.x, -z.y); }\r
\r
// - mui is incident angle cosine to film from exterior\r
// - eta_fe is ratio of the film IOR to the external IOR\r
// - dielectric or metallic base\r
vec3 FresnelThinFilm(float mui, float eta_fe, bool dielectric)\r
{\r
    // Compute Fresnel factors at top of thin-film, where it meets coat or ambient exterior\r
    float sin2_t = (1.0 - sqr(mui))/sqr(eta_fe);\r
    if (sin2_t > 1.0)\r
        return vec3(1.0);\r
    float mut = sqrt(1.0 - sin2_t);\r
\r
    // reflection coefficient of external reflection at top of film for both S and P polarizations\r
    // (NB, real coefficients suffice as phase shift is either 0 or 180)\r
    vec2 r1 = FresnelDielectricPolarizations(mui, eta_fe);\r
    vec2 t1 = vec2(1.0) - r1;\r
\r
    // reflection coefficient of internal reflection at top of film for both S and P polarizations\r
    // (NB, real coefficients suffice as phase shift is either 0 or 180)\r
    vec2 ri = FresnelDielectricPolarizations(mut, 1.0/eta_fe);\r
    vec2 ti = vec2(1.0) - ri;\r
\r
    // compute phase shift dphi due to optical path difference in film, assuming a fixed wavelength per channel\r
    vec3 lambda_p = vec3(700.0, 546.1, 435.8);\r
    float OPD = 2.0 * thin_film_ior * thin_film_thickness * mut;\r
    vec3 dphi = 2.0 * PI * OPD / lambda_p;\r
\r
    // reflection coefficient at base of film (either dielectric or metal), for both S and P polarizations, for each color channel\r
    // (NB, real coefficients suffice as phase shift is either 0 or 180)\r
    vec2 rb[3];\r
    if (dielectric)\r
    {\r
        // here we ignore any wavelength dependence of dielectric IOR\r
        float eta_bf = specular_ior / thin_film_ior;\r
        rb[0] = FresnelDielectricPolarizations(mut, eta_bf);\r
        rb[1] = rb[0];\r
        rb[2] = rb[0];\r
    }\r
    else\r
    {\r
        // we assume metal has high absorption, thus both S/P phase shifts amount to a sign flip\r
        vec3 Fb = FresnelF82Tint(mut, base_weight * base_color, specular_weight * specular_color);\r
        vec3 Rb = sqrt(Fb);\r
        rb[0] = vec2(-Rb[0]);\r
        rb[1] = vec2(-Rb[1]);\r
        rb[2] = vec2(-Rb[2]);\r
    }\r
\r
    // Thus compute final Fresnel reflection, accounting for all bounces in the thin-film\r
    vec3 F = vec3(0.0);\r
    for (int c=0; c<=2; ++c)\r
    {\r
        // complex phase shift due to optical path difference:\r
        vec2 expidphi = complex(cos(dphi[c]), sin(dphi[c]));\r
        for (int p=0; p<=1; ++p)\r
        {\r
            // Implements formula (3) of Belcour & Barla, using complex arithmetic\r
            F[c] += complex_mag2(complex_add(r1[p],\r
                                             t1[p] * rb[c][p] * ti[p] * complex_mul(expidphi,\r
                                                                                    complex_inv(complex_sub(1.0, ri[p] * rb[c][p] * expidphi)))));\r
        }\r
    }\r
    F *= 0.5; // average the two polarizations (i.e. assume the incident radiation was unpolarized)\r
    return F;\r
}\r
\r
vec3 FresnelThinFilmOverDielectric(float mui, float eta_fe) { return FresnelThinFilm(mui, eta_fe, true); }\r
vec3 FresnelThinFilmOverConductor( float mui, float eta_fe) { return FresnelThinFilm(mui, eta_fe, false); }\r
\r
#endif // THIN_FILM_ENABLED`,xb=`\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// "Metal" conductor microfacet BSDF\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
\r
vec3 metal_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
                         inout float pdf_woutputL)\r
{\r
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE)\r
    {\r
        pdf_woutputL = PDF_EPSILON;\r
        return vec3(0.0);\r
    }\r
\r
    // Construct basis such that x, y are aligned with the T, B in the local, rotated frame\r
    LocalFrameRotation rotation = getLocalFrameRotation(PI2*specular_rotation);\r
    vec3 winputR  = localToRotated(winputL,  rotation);\r
    vec3 woutputR = localToRotated(woutputL, rotation);\r
\r
    // Compute the NDF roughnesses in the rotated frame\r
    // (Note that the metal shares the same NDF as the dielectric/specular base)\r
    float alpha_x, alpha_y;\r
    specular_ndf_roughnesses(alpha_x, alpha_y);\r
\r
    // Compute the micronormal mR in the local (rotated) frame, from the reflection half-vector\r
    vec3 mR = normalize(woutputR + winputR);\r
\r
    // Compute NDF, and "distribution of visible normals" DV\r
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);\r
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * max(0.0, dot(winputR, mR)) / max(DENOM_TOLERANCE, winputR.z);\r
\r
    // Thus compute PDF of woutputL sample\r
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputR, mR)), DENOM_TOLERANCE); // Jacobian of the half-direction mapping\r
    pdf_woutputL = max(PDF_EPSILON, DV * dwh_dwo);\r
\r
    // Compute Fresnel factor for the conductor reflection\r
    vec3 F;\r
    vec3 F_nofilm = FresnelF82Tint(abs(dot(winputR, mR)), base_weight * base_color, specular_weight * specular_color);\r
#ifdef THIN_FILM_ENABLED\r
    if (thin_film_weight > 0.0)\r
    {\r
        float eta_fe = mix(thin_film_ior/ambient_ior, thin_film_ior/coat_ior, coat_weight);\r
        vec3 F_film = FresnelThinFilmOverConductor(abs(dot(winputR, mR)), eta_fe);\r
        F = mix(F_nofilm, F_film, thin_film_weight);\r
    }\r
    else\r
#endif // THIN_FILM_ENABLED\r
        F = F_nofilm;\r
\r
    // Compute shadowing-masking term\r
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);\r
\r
    // Thus evaluate BRDF\r
    return F * D * G2 / max(4.0*abs(woutputL.z)*abs(winputL.z), DENOM_TOLERANCE);\r
}\r
\r
\r
vec3 metal_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                       out vec3 woutputL, out float pdf_woutputL)\r
{\r
    if (winputL.z < DENOM_TOLERANCE)\r
    {\r
        pdf_woutputL = PDF_EPSILON;\r
        return vec3(0.0);\r
    }\r
\r
    // Compute the NDF roughnesses in the rotated frame\r
    // (Note that the metal shares the same NDF as the dielectric/specular base)\r
    float alpha_x, alpha_y;\r
    specular_ndf_roughnesses(alpha_x, alpha_y);\r
\r
    // Construct basis such that x, y are aligned with the T, B in the rotated frame\r
    LocalFrameRotation rotation = getLocalFrameRotation(PI2*specular_rotation);\r
    vec3 winputR = localToRotated(winputL, rotation);\r
\r
    // Sample local microfacet normal mR, according to Heitz "Sampling the GGX Distribution of Visible Normals"\r
    vec3 mR = ggx_ndf_sample(winputR, alpha_x, alpha_y, rndSeed);\r
\r
    // Compute woutputR (and thus woutputL) by reflecting winputR about mR\r
    vec3 woutputR = -winputR + 2.0*dot(winputR, mR)*mR;\r
    if (winputR.z * woutputR.z < FLT_EPSILON)\r
        return vec3(0.0); // no reflection if ray direction in wrong hemisphere (in absence of a multi-scatter approx. currently)\r
    woutputL = rotatedToLocal(woutputR, rotation);\r
\r
    // Compute NDF, and "distribution of visible normals" DV\r
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);\r
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * max(0.0, dot(winputR, mR)) / max(DENOM_TOLERANCE, winputR.z);\r
\r
    // Thus compute PDF of woutputL sample\r
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputR, mR)), DENOM_TOLERANCE); // Jacobian of the half-direction mapping\r
    pdf_woutputL = max(PDF_EPSILON, DV * dwh_dwo);\r
\r
    // Compute Fresnel factor for the conductor reflection\r
    vec3 F;\r
    vec3 F_nofilm = FresnelF82Tint(abs(dot(winputR, mR)), base_weight * base_color, specular_weight * specular_color);\r
#ifdef THIN_FILM_ENABLED\r
    float eta_fe = mix(thin_film_ior/ambient_ior, thin_film_ior/coat_ior, coat_weight);\r
    vec3 F_film = FresnelThinFilmOverConductor(abs(dot(winputR, mR)), eta_fe);\r
    F = mix(F_nofilm, F_film, thin_film_weight);\r
#else\r
    F = F_nofilm;\r
#endif // THIN_FILM_ENABLED\r
\r
    // Compute shadowing-masking term\r
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);\r
\r
    // Thus evaluate BRDF\r
    return F * D * G2 / max(4.0*abs(woutputL.z)*abs(winputL.z), DENOM_TOLERANCE);\r
}\r
\r
\r
vec3 metal_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)\r
{\r
    // Estimate of the BRDF albedo, used to compute the discrete probability of selecting this lobe\r
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);\r
\r
    // Approximate albedo via Monte-Carlo sampling:\r
    const int num_samples = 1;\r
    vec3 albedo = vec3(0.0);\r
    for (int n=0; n<num_samples; ++n)\r
    {\r
        vec3 woutputL;\r
        float pdf_woutputL;\r
        vec3 f = metal_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL);\r
        if (length(f) > RADIANCE_EPSILON)\r
            albedo += f * abs(woutputL.z) / max(PDF_EPSILON, pdf_woutputL);\r
    }\r
    albedo /= float(num_samples);\r
    return albedo;\r
}\r
\r
\r
\r
\r
`,yb=`\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// "Specular" dielectric microfacet BRDF\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
\r
void specular_ndf_roughnesses(out float alpha_x, out float alpha_y)\r
{\r
    float rsqr = sqr(specular_roughness);\r
    alpha_x = rsqr * sqrt(2.0/(1.0 + sqr(1.0 - specular_anisotropy)));\r
    alpha_y = (1.0 - specular_anisotropy) * alpha_x;\r
    // (Here opt to clamp to a mininum roughness, rather than deal with a special degenerate case for zero roughness)\r
    const float min_alpha = 1.0e-4;\r
    alpha_x = max(min_alpha, alpha_x);\r
    alpha_y = max(min_alpha, alpha_y);\r
}\r
\r
float eta_s()\r
{\r
    float coat_ior_average = mix(ambient_ior, coat_ior, coat_weight);\r
    float eta_s = specular_ior / coat_ior_average;\r
    return eta_s;\r
}\r
\r
float fresnel_refl_normal_incidence()\r
{\r
    // Compute Fresnel reflection factor at specular boundary, given presence of coat\r
    // (before modulation by specular_weight)\r
    float eta_s = eta_s();\r
    float F_s = sqr((eta_s - 1.0)/(eta_s + 1.0));\r
    return F_s;\r
}\r
\r
float specular_ior_ratio()\r
{\r
    float F_s = fresnel_refl_normal_incidence();\r
    float xi_s = clamp(specular_weight, 0.0, 1.0/max(F_s, DENOM_TOLERANCE));\r
    float eta_s = eta_s();\r
    float tmp = min(1.0, sign(eta_s - 1.0) * sqrt(xi_s * F_s));\r
    float eta_s_prime = (1.0 + tmp) / max(1.0 - tmp, DENOM_TOLERANCE);\r
    return eta_s_prime;\r
}\r
\r
vec3 fresnel_refl_accounting_for_coat(float mui, float eta_bc)\r
{\r
    // Compute correct Fresnel reflection factor at specular boundary, taking into account coat refraction,\r
    // to avoid TIR artifact:\r
    //  - mu_i is angle cosine of ray incident from exterior of surface\r
    //  - eta_bc is the ratio of base specular IOR to coat IOR\r
    float eta_ca = coat_ior / ambient_ior;\r
    float eta_ba = specular_ior / ambient_ior;\r
    // muc is the resulting angle cosine of the ray refracted into the coat, assuming smooth boundaries\r
    float muc = sqrt(1.0 - (1.0 - sqr(mui))/sqr(eta_ca));\r
    float eta_ti = mix(eta_ba, eta_bc, coat_weight);\r
    vec3 F;\r
    vec3 F_nofilm = vec3(FresnelDielectricReflectance(muc, eta_ti));\r
#ifdef THIN_FILM_ENABLED\r
    vec3 F_film = FresnelThinFilmOverDielectric(muc, eta_ti);\r
    return mix(F_nofilm, F_film, thin_film_weight);\r
#else\r
    return F_nofilm;\r
#endif // THIN_FILM_ENABLED;\r
}\r
\r
vec3 specular_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
                            inout float pdf_woutputL)\r
{\r
    bool transmitted = woutputL.z * winputL.z < 0.0;\r
    if (transmitted)\r
        return vec3(0.0);\r
\r
    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.\r
    // Thus we can determine if the reflection is internal or external to the dielectric:\r
    vec3 beamOutgoingL = winputL;\r
    bool external_reflection = (beamOutgoingL.z > 0.0);\r
\r
    // Compute IOR ratio at interface:\r
    //  eta_ti_refl = (IOR in hemi. opposite to reflection) / (IOR in hemi. of reflection)\r
    float eta_ie = specular_ior_ratio(); // n_interior / n_exterior\r
    float eta_ti_refl = external_reflection ? eta_ie : 1.0/eta_ie;\r
    if (abs(eta_ti_refl - 1.0) < IOR_EPSILON) // degenerate case of index-matched interface, BRDF goes to zero\r
        return vec3(0.0);\r
\r
    // Non-physical Fresnel tint to apply\r
    vec3 tint = specular_color;\r
\r
   // Compute the NDF roughnesses in the rotated frame\r
    float alpha_x, alpha_y;\r
    specular_ndf_roughnesses(alpha_x, alpha_y);\r
\r
    // Construct basis such that x, y are aligned with the T, B in the local, rotated frame\r
    LocalFrameRotation rotation = getLocalFrameRotation(PI2 * specular_rotation);\r
    vec3 winputR  = localToRotated(winputL,  rotation);\r
    vec3 woutputR = localToRotated(woutputL, rotation);\r
\r
    // Compute the micronormal mR in the local (rotated) frame, from the reflection half-vector\r
    vec3 mR = normalize(woutputR + winputR);\r
\r
    // Discard backfacing microfacets\r
    if (dot(mR, winputR) * winputR.z < 0.0 || dot(mR, woutputR) * woutputR.z < 0.0)\r
        return vec3(0.0);\r
\r
    // Compute NDF\r
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);\r
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * max(0.0, dot(winputR, mR)) / max(DENOM_TOLERANCE, winputR.z);\r
\r
    // Thus compute PDF of woutputL sample\r
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputR, mR)), DENOM_TOLERANCE); // Jacobian of the half-direction mapping\r
    pdf_woutputL = DV * dwh_dwo;\r
\r
    // Compute shadowing-masking term\r
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);\r
\r
    // Compute Fresnel factor for the dielectric reflection\r
    vec3 F;\r
#ifdef COAT_ENABLED\r
    if (external_reflection)\r
        F = fresnel_refl_accounting_for_coat(abs(dot(winputR, mR)), eta_ti_refl);\r
    else\r
#endif // COAT_ENABLED\r
        F = vec3(FresnelDielectricReflectance(abs(dot(winputR, mR)), eta_ti_refl));\r
\r
    // Thus evaluate BRDF.\r
    vec3 f = F * D * G2 / max(4.0 * abs(woutputL.z) * abs(winputL.z), DENOM_TOLERANCE);\r
    return f * tint;\r
}\r
\r
\r
vec3 specular_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                          out vec3 woutputL, out float pdf_woutputL)\r
{\r
    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.\r
    // Thus we can determine if the reflection is internal or external to the dielectric:\r
    vec3 beamOutgoingL = winputL;\r
    bool external_reflection = (beamOutgoingL.z > 0.0);\r
\r
    // Compute IOR ratio at interface:\r
    //  eta_ti_refl = (IOR in hemi. opposite to reflection) / (IOR in hemi. of reflection)\r
    float eta_ie = specular_ior_ratio(); // n_interior / n_exterior\r
    float eta_ti_refl = external_reflection ? eta_ie : 1.0/eta_ie;\r
    if (abs(eta_ti_refl - 1.0) < IOR_EPSILON) // degenerate case of index-matched interface, BRDF goes to zero\r
        return vec3(0.0);\r
\r
    // Non-physical Fresnel tint to apply\r
    vec3 tint = specular_color;\r
\r
    // Compute the NDF roughnesses in the rotated frame\r
    float alpha_x, alpha_y;\r
    specular_ndf_roughnesses(alpha_x, alpha_y);\r
\r
    // Construct basis such that x, y are aligned with the T, B in the rotated frame\r
    LocalFrameRotation rotation = getLocalFrameRotation(PI2 * specular_rotation);\r
    vec3 winputR = localToRotated(winputL, rotation);\r
\r
    // Sample local microfacet normal mR, according to Heitz "Sampling the GGX Distribution of Visible Normals"\r
    vec3 mR;\r
    if (winputR.z > 0.0)\r
        mR = ggx_ndf_sample(winputR, alpha_x, alpha_y, rndSeed);\r
    else\r
    {\r
        // GGX sampling in negative hemisphere\r
        vec3 winputR_reflected = winputR;\r
        winputR_reflected.z *= -1.0;\r
        mR = ggx_ndf_sample(winputR_reflected, alpha_x, alpha_y, rndSeed);\r
        mR.z *= -1.0;\r
    }\r
\r
    // Compute woutputR (and thus woutputL) by reflecting winputR about mR\r
    vec3 woutputR = -winputR + 2.0*dot(winputR, mR)*mR;\r
    if (winputR.z * woutputR.z < 0.0)\r
    {\r
        pdf_woutputL = 1.0;\r
        return vec3(0.0);\r
    }\r
\r
    // Rotate woutputR back to local space\r
    woutputL = rotatedToLocal(woutputR, rotation);\r
\r
    // Compute NDF, and "distribution of visible normals" DV\r
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);\r
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * abs(dot(winputR, mR)) / max(DENOM_TOLERANCE, abs(winputR.z));\r
\r
    // Thus compute PDF of woutputL sample\r
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputR, mR)), DENOM_TOLERANCE); // Jacobian of the half-direction mapping\r
    pdf_woutputL = DV * dwh_dwo;\r
\r
    // Compute shadowing-masking term\r
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);\r
\r
    // Compute Fresnel factor for the dielectric reflection\r
    vec3 F;\r
#ifdef COAT_ENABLED\r
    if (external_reflection)\r
        F = fresnel_refl_accounting_for_coat(abs(dot(winputR, mR)), eta_ti_refl);\r
    else\r
#endif // COAT_ENABLED\r
        F = vec3(FresnelDielectricReflectance(abs(dot(winputR, mR)), eta_ti_refl));\r
\r
     // Thus evaluate BRDF.\r
    vec3 f = F * D * G2 / max(4.0 * abs(woutputL.z) * abs(winputL.z), DENOM_TOLERANCE);\r
    return f * tint;\r
}\r
\r
\r
vec3 specular_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)\r
{\r
    // Estimate of the BRDF albedo, used to compute the discrete probability of selecting this lobe\r
    float eta_ie = specular_ior_ratio(); // n_interior / n_exterior\r
    if (abs(eta_ie - 1.0) < IOR_EPSILON)\r
    {\r
        // degenerate case of index-matched interface, BRDF goes to zero\r
        return vec3(0.0);\r
    }\r
\r
    // Approximate albedo via Monte-Carlo sampling:\r
    const int num_samples = 1;\r
    vec3 albedo = vec3(0.0);\r
    for (int n=0; n<num_samples; ++n)\r
    {\r
        vec3 woutputL;\r
        float pdf_woutputL;\r
        vec3 f = specular_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL);\r
        if (length(f) > RADIANCE_EPSILON)\r
            albedo += f * abs(woutputL.z) / max(DENOM_TOLERANCE, pdf_woutputL);\r
    }\r
    albedo /= float(num_samples);\r
    return albedo;\r
}\r
`,bb=`\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// "Specular" dielectric microfacet BTDF\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
\r
vec3 specular_btdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
                            inout float pdf_woutputL)\r
{\r
#ifdef TRANSMISSION_ENABLED\r
    bool reflected = woutputL.z * winputL.z > 0.0;\r
    if (reflected)\r
    {\r
        pdf_woutputL = 1.0;\r
        return vec3(0.0);\r
    }\r
\r
    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.\r
    // Thus we can determine if the photon transmission is to the exterior (from the interior), or the opposite:\r
    vec3 beamOutgoingL = winputL;\r
    bool external_transmission = (beamOutgoingL.z > 0.0);\r
\r
    // Compute IOR ratio at interface:\r
    //  eta_ti_photon = (IOR in hemi. of transmitted photon) / (IOR in hemi. of incident photon)\r
    // (NB, ignores coat IOR! To take that into account, need to properly account for refraction through coat)\r
#ifdef DISPERSION_ENABLED\r
    float eta_ie = specular_ior_dispersive(); // n_interior / n_exterior\r
#else\r
    float eta_ie = specular_ior;\r
#endif // DISPERSION_ENABLED\r
    float eta_ti_photon = external_transmission ? 1.0/eta_ie : eta_ie;\r
    if (abs(eta_ti_photon - 1.0) < IOR_EPSILON)\r
    {\r
        // degenerate case of index-matched interface, BTDF is a delta-function\r
        vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);\r
        pdf_woutputL = 1.0/PDF_EPSILON;\r
        return tint * pdf_woutputL / max(DENOM_TOLERANCE, abs(woutputL.z));\r
    }\r
\r
    // Construct basis such that x, y are aligned with the T, B in the local, rotated frame\r
    LocalFrameRotation rotation = getLocalFrameRotation(PI2 * specular_rotation);\r
    vec3 winputR  = localToRotated(winputL,  rotation);\r
    vec3 woutputR = localToRotated(woutputL, rotation);\r
\r
    // Compute the micronormal mR in the local (rotated) frame, such that -woutputR is refracted to winputR\r
    vec3 beamIncidentR = -woutputR;\r
    vec3 beamOutgoingR = winputR;\r
    vec3 mR = beamIncidentR - eta_ti_photon*beamOutgoingR;\r
    if (dot(mR, mR) == 0.0)\r
        return vec3(0.0);\r
    mR = safe_normalize(mR);\r
    if (mR.z <= 0.0) mR *= -1.0; // orient the micronormal into the positive hemisphere\r
\r
    // Compute Jacobian of the half-direction mapping\r
    float im = dot(-beamIncidentR, mR);\r
    float dwh_dwo;\r
    {\r
        float om = dot(beamOutgoingR, mR);\r
        dwh_dwo = sqr(eta_ti_photon) * abs(om) / max(sqr(im + eta_ti_photon*om), DENOM_TOLERANCE);\r
    }\r
\r
    // Compute the NDF roughnesses in the rotated frame\r
    float alpha_x, alpha_y;\r
    specular_ndf_roughnesses(alpha_x, alpha_y);\r
    float roughness = specular_roughness;\r
\r
    // Compute NDF, and "distribution of visible normals" DV\r
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);\r
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * max(0.0, dot(winputR, mR)) / max(DENOM_TOLERANCE, abs(winputR.z));\r
\r
    // Thus compute PDF of woutputL sample\r
    pdf_woutputL = DV * dwh_dwo;\r
\r
    // Compute shadowing-masking term\r
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);\r
\r
    // Compute Fresnel factor for the dielectric transmission (from that of the corresponding time-reversed reflection)\r
    float eta_ti_refl = 1.0 / eta_ti_photon;\r
    float T = max(0.0, 1.0 - FresnelDielectricReflectance(abs(dot(winputR, mR)), eta_ti_refl));\r
\r
    // Thus evaluate BTDF.\r
    float f = T * abs(dot(winputR, mR)) * dwh_dwo * G2 * D / max(abs(woutputL.z) * abs(winputL.z), DENOM_TOLERANCE);\r
\r
    // Apply non-physical tint in zero transmission_depth case\r
    vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);\r
    return f * tint;\r
#else\r
    return vec3(0.0);\r
#endif // TRANSMISSION_ENABLED\r
}\r
\r
#ifdef TRANSMISSION_ENABLED\r
\r
// Given the direction (wt) of a light beam transmitted through a plane dielectric interface\r
// with the given normal (n) in any orientation, and the ratio eta_ti_photon = nt/ni of the transmitted IOR (nt) and incident IOR (ni),\r
// compute the direction of the incident light beam (wi). Returns false if no such beam exists, due to total internal reflection.\r
bool refraction_given_transmitted_beam(in vec3 n, in float eta_ti_photon, in vec3 wt, inout vec3 wi)\r
{\r
    float wtn = dot(wt, n);\r
    float disciminant = 1.0 - sqr(eta_ti_photon)*(1.0 - sqr(wtn));\r
    if (disciminant < 0.0) return false;\r
    wi = eta_ti_photon*wt - n*sign(wtn)*(eta_ti_photon*abs(wtn) - sqrt(disciminant));\r
    return true;\r
}\r
\r
#endif // TRANSMISSION_ENABLED\r
\r
vec3 specular_btdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                          out vec3 woutputL, out float pdf_woutputL)\r
{\r
#ifdef TRANSMISSION_ENABLED\r
    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.\r
    // Thus we can determine if the photon transmission is to the exterior (from the interior), or the opposite:\r
    vec3 beamOutgoingL = winputL;\r
    bool external_transmission = (beamOutgoingL.z > 0.0);\r
\r
    // Compute IOR ratio at interface:\r
    //  eta_ti_photon = (IOR in hemi. of transmitted photon) / (IOR in hemi. of incident photon)\r
    // (NB, ignores coat IOR! To take that into account, need to properly account for refraction through coat)\r
#ifdef DISPERSION_ENABLED\r
    float eta_ie = specular_ior_dispersive(); // n_interior / n_exterior\r
#else\r
    float eta_ie = specular_ior;\r
#endif // DISPERSION_ENABLED\r
    float eta_ti_photon = external_transmission ? 1.0/eta_ie : eta_ie;\r
    if (abs(eta_ti_photon - 1.0) < IOR_EPSILON)\r
    {\r
        // degenerate case of index-matched interface, BTDF is a delta-function\r
        woutputL = -winputL;\r
        pdf_woutputL = 1.0 / PDF_EPSILON;\r
        vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);\r
        return tint * pdf_woutputL / max(DENOM_TOLERANCE, abs(woutputL.z));\r
    }\r
\r
    // Construct basis such that x, y are aligned with the T, B in the rotated frame\r
    LocalFrameRotation rotation = getLocalFrameRotation(PI2 * specular_rotation);\r
    vec3 winputR = localToRotated(winputL, rotation);\r
\r
    // Compute the NDF roughnesses in the rotated frame\r
    float alpha_x, alpha_y;\r
    specular_ndf_roughnesses(alpha_x, alpha_y);\r
\r
    // Sample local microfacet normal mR, according to Heitz "Sampling the GGX Distribution of Visible Normals"\r
    vec3 mR;\r
    if (winputR.z > 0.0)\r
        mR = ggx_ndf_sample(winputR, alpha_x, alpha_y, rndSeed);\r
    else\r
    {\r
        vec3 winputR_reflected = winputR;\r
        winputR_reflected.z *= -1.0;\r
        mR = ggx_ndf_sample(winputR_reflected, alpha_x, alpha_y, rndSeed);\r
        mR.z *= -1.0;\r
    }\r
\r
    // Compute the direction of the ray refracted through the microfacet, woutputL\r
    vec3 beamOutgoingR = winputR;\r
    vec3 beamIncidentR; // the incident photon direction, to be determined (where woutputR = -beamIncidentR)\r
    if (!refraction_given_transmitted_beam(mR, eta_ti_photon, beamOutgoingR, beamIncidentR))\r
    {\r
        // The case of a TIR configuration, in which case no transmission occurs\r
        pdf_woutputL = PDF_EPSILON;\r
        return vec3(0.0);\r
    }\r
    vec3 woutputR = -safe_normalize(beamIncidentR);\r
    woutputL = rotatedToLocal(woutputR, rotation); // refracted ray direction\r
\r
    // Compute NDF, and "distribution of visible normals" DV\r
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);\r
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * abs(dot(winputR, mR)) / max(DENOM_TOLERANCE, abs(winputR.z));\r
\r
    // Compute Jacobian of the half-direction mapping\r
    float im = dot(-beamIncidentR, mR);\r
    float dwh_dwo;\r
    {\r
        float om = dot(beamOutgoingR, mR);\r
        dwh_dwo = sqr(eta_ti_photon) * abs(om) / max(sqr(im + eta_ti_photon*om), DENOM_TOLERANCE);\r
    }\r
\r
    // Thus compute PDF of woutputL sample\r
    pdf_woutputL = DV * dwh_dwo;\r
\r
    // Compute shadowing-masking term\r
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);\r
\r
    // Compute Fresnel factor for the dielectric transmission (from that of the corresponding time-reversed reflection)\r
    float eta_ti_refl = 1.0 / eta_ti_photon;\r
    float T = max(0.0, 1.0 - FresnelDielectricReflectance(abs(dot(winputR, mR)), eta_ti_refl));\r
\r
    // Thus evaluate BTDF.\r
    float f = T * abs(dot(winputR, mR)) * dwh_dwo * G2 * D / max(abs(woutputL.z) * abs(winputL.z), DENOM_TOLERANCE);\r
\r
    // Apply non-physical tint in zero transmission_depth case\r
    vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);\r
    return f * tint;\r
#else\r
    return vec3(0.0);\r
#endif // TRANSMISSION_ENABLED\r
}\r
\r
\r
vec3 specular_btdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)\r
{\r
#ifdef TRANSMISSION_ENABLED\r
    // Estimate of the BTDF albedo, used to compute the discrete probability of selecting this lobe\r
#ifdef DISPERSION_ENABLED\r
    float eta_ie = specular_ior_dispersive(); // n_interior / n_exterior\r
#else\r
    float eta_ie = specular_ior;\r
#endif // DISPERSION_ENABLED\r
    if (abs(eta_ie - 1.0) < IOR_EPSILON)\r
    {\r
        // degenerate case of index-matched interface, BTDF is a delta-function\r
        vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);\r
        return tint;\r
    }\r
\r
    // Approximate albedo via Monte-Carlo sampling:\r
    const int num_samples = 1;\r
    vec3 albedo = vec3(0.0);\r
    for (int n=0; n<num_samples; ++n)\r
    {\r
        vec3 woutputL;\r
        float pdf_woutputL;\r
        vec3 f = specular_btdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL);\r
        if (length(f) > RADIANCE_EPSILON)\r
            albedo += f * abs(woutputL.z) / max(DENOM_TOLERANCE, pdf_woutputL);\r
    }\r
    albedo /= float(num_samples);\r
    return albedo;\r
#else\r
    return vec3(0.0);\r
#endif // TRANSMISSION_ENABLED\r
}\r
`,Sb=`\r
////////////////////////////////////////////////////////////////////////////////////\r
// The original Oren-Nayar model, full and "qualitative" version\r
////////////////////////////////////////////////////////////////////////////////////\r
\r
float safeacos(const float x)\r
{\r
    return acos(clamp(x, -1.0, 1.0));\r
}\r
\r
vec3 ON_full(in vec3 Albedo, float sigma,\r
             in vec3 V, in vec3 L)\r
{\r
    // Full model\r
    float cosThetaI = V.z, sinThetaI = sqrt(1.0 - cosThetaI * cosThetaI);\r
    float cosThetaO = L.z, sinThetaO = sqrt(1.0 - cosThetaO * cosThetaO);\r
    float cosPhiDiff = 0.0;\r
    if (sinThetaI > 0.0 && sinThetaO > 0.0)\r
    {\r
        /* Compute cos(phiO-phiI) using the half-angle formulae */\r
        vec3 wi = V;\r
        vec3 wo = L;\r
        float sinPhiI = clamp(wi.y / sinThetaI, -1.0, 1.0),\r
              cosPhiI = clamp(wi.x / sinThetaI, -1.0, 1.0),\r
              sinPhiO = clamp(wo.y / sinThetaO, -1.0, 1.0),\r
              cosPhiO = clamp(wo.x / sinThetaO, -1.0, 1.0);\r
        cosPhiDiff = cosPhiI * cosPhiO + sinPhiI * sinPhiO;\r
    }\r
\r
    float thetaI = safeacos(V.z),\r
          thetaO = safeacos(L.z),\r
          alpha = max(thetaI, thetaO),\r
          beta  = min(thetaI, thetaO);\r
\r
    float sinAlpha, sinBeta, tanBeta;\r
    if (V.z > L.z)\r
    {\r
        sinAlpha = sinThetaO;\r
        sinBeta = sinThetaI;\r
        tanBeta = sinThetaI / max(1.0e-7, cosThetaI);\r
    }\r
    else\r
    {\r
        sinAlpha = sinThetaI;\r
        sinBeta = sinThetaO;\r
        tanBeta = sinThetaO / max(1.0e-7, cosThetaO);\r
    }\r
\r
    float sigma2 = sqr(sigma);\r
    float tmp = sigma2 / (sigma2 + 0.09f),\r
          tmp2 = (4.0 / (PI * PI)) * alpha * beta,\r
          tmp3 = 2.0 * beta / PI;\r
\r
    float C1 = 1.0f - 0.5f * sigma2 / (sigma2 + 0.33f),\r
          C2 = 0.45f * tmp,\r
          C3 = 0.125f * tmp * tmp2 * tmp2,\r
          C4 = 0.17f * sigma2 / (sigma2 + 0.13f);\r
\r
    if (cosPhiDiff > 0.0)\r
        C2 *= sinAlpha;\r
    else\r
        C2 *= sinAlpha - tmp3*tmp3*tmp3;\r
\r
    /* Compute tan(0.5 * (alpha+beta)) using the half-angle formulae */\r
    float tanHalf = (sinAlpha + sinBeta) / (sqrt(1.0f - sinAlpha * sinAlpha) + sqrt(1.0f - sinBeta  * sinBeta));\r
    vec3 rho = Albedo;\r
    vec3 snglScat = rho * (C1 + cosPhiDiff * C2 * tanBeta + (1.0f - abs(cosPhiDiff)) * C3 * tanHalf);\r
    vec3 dblScat  = rho * rho * (C4 * (1.0f - cosPhiDiff*tmp3*tmp3));\r
    return (snglScat + dblScat) * (cosThetaO / PI);\r
}\r
\r
// QON BRDF\r
vec3 f_QON(in vec3 rho, float sigma, in vec3 wi, in vec3 wo)\r
{\r
    float muI = wi.z;                                    // input angle cos\r
    float muO = wo.z;                                    // output angle cos\r
    float s = dot(wi, wo) - muI * muO;                   // QON s term\r
    float stinv = s > 0.0 ? s / max(muI, muO) : 0.0;     // OON model stinv\r
    float sigma2 = sqr(sigma);\r
    float AQ = 1.0 - 0.5 * (sigma2 / (sigma2 + 0.33));   // QON model A coefficient\r
    float BQ = 0.45 * sigma2 / (sigma2 + 0.09);          // QON model B coefficient\r
    vec3 f_ss = (rho / PI) * (AQ + BQ*stinv);            // single-scatt. BRDF\r
    return f_ss;\r
}\r
\r
// Energy-compensated QON BRDF (EQON)\r
float E_QON_approx(float mu, float sigma)\r
{\r
    #define c0_QON ( 0.509943)\r
    #define c1_QON (-0.468933)\r
    #define c2_QON (-0.221914)\r
    #define c3_QON (-0.23749 )\r
    #define Gcoeffs_QON mat2(c0_QON, c2_QON, c1_QON, c3_QON)\r
    #define GoverPI_QON dot((Gcoeffs_QON*vec2(1,mu))*vec2(1,mu*mu), vec2(1,1))\r
    float sigma2 = sqr(sigma);\r
    float AQ = 1.0f - 0.5f  * sigma2/(sigma2 + 0.33f);\r
    float BQ =        0.45f * sigma2/(sigma2 + 0.09f);\r
    return AQ + BQ*GoverPI_QON;\r
}\r
float E_QON_analyt(float mu, float sigma)\r
{\r
    #define safe_acos(x) (acos(clamp(x, -1.0, 1.0)))\r
    float sigma2 = sqr(sigma);\r
    float AQ = 1.0 - 0.5 * (sigma2 / (sigma2 + 0.33));\r
    float BQ = 0.45 * sigma2 / (sigma2 + 0.09);\r
    float Si = max(0.0, sqrt(1.0 - mu * mu));\r
    float G = Si * (safe_acos(mu) - Si*mu) + (Si/max(1e-7,mu))*(1.0 - pow(Si, 3.0))*2.0/3.0;\r
    float E = AQ + (BQ/PI)*G;\r
    return E;\r
}\r
#define constant2_QON (2.0/3.0 - 64.0/(45.0*PI))\r
vec3 f_EQON(in vec3 rho, float sigma, in vec3 wi, in vec3 wo, bool exact)\r
{\r
    float muI = wi.z;                                    // input angle cos\r
    float muO = wo.z;                                    // output angle cos\r
    float s = dot(wi, wo) - muI * muO;                   // QON s term\r
    float stinv = s > 0.0 ? s / max(muI, muO) : 0.0;     // OON model stinv\r
    float sigma2 = sqr(sigma);\r
    float AQ = 1.0 - 0.5 * (sigma2 / (sigma2 + 0.33));   // QON model A coefficient\r
    float BQ = 0.45 * sigma2 / (sigma2 + 0.09);          // QON model B coefficient\r
    vec3 f_ss = (rho / PI) * (AQ + BQ*stinv);            // single-scatt. BRDF\r
    float EFo = exact ? E_QON_analyt(muO, sigma) :       // EFo at rho=1 (analytic)\r
                        E_QON_approx(muO, sigma);        // EFo at rho=1 (approx)\r
    float EFi = exact ? E_QON_analyt(muI, sigma) :       // EFi at rho=1 (analytic)\r
                        E_QON_approx(muI, sigma);        // EFi at rho=1 (approx)\r
    float avgEF = AQ + constant2_QON*BQ;                 // avg. albedo\r
    vec3 rho_ms = sqr(rho) * avgEF / (vec3(1.0) - rho*max(0.0, 1.0-avgEF));\r
    vec3 f_ms = (rho_ms / PI) * max(1e-7, 1.0 - EFo) *   // multi-scatter lobe\r
                                max(1e-7, 1.0 - EFi) /\r
                                max(1e-7, 1.0 - avgEF);\r
    return f_ss + f_ms;\r
}\r
\r
\r
////////////////////////////////////////////////////////////////////////////////////\r
// Fujii models\r
////////////////////////////////////////////////////////////////////////////////////\r
\r
// FON BRDF\r
#define constant1_FON (0.5 - 2.0/(3.0*PI))\r
#define constant2_FON (2.0/3.0 - 28.0/(15.0*PI))\r
\r
vec3 f_FON(in vec3 rho, float sigma, in vec3 wi, in vec3 wo)\r
{\r
    float muI = wi.z;                                    // input angle cos\r
    float muO = wo.z;                                    // output angle cos\r
    float s = dot(wi, wo) - muI * muO;                   // QON s term\r
    float stinv = s > 0.0 ? s / max(muI, muO) : s;       // Fujii model stinv\r
    float AF = 1.0 / (1.0 + constant1_FON*sigma);        // Fujii model A coefficient\r
    vec3 f_ss = (rho / PI) * AF * (1.0 + sigma*stinv);   // single-scatt. BRDF\r
    return f_ss;\r
}\r
\r
vec3 fujii_materialx(in vec3 Albedo, float roughness, in vec3 V, in vec3 L)\r
{\r
    // https://github.com/AcademySoftwareFoundation/MaterialX/blob/main/libraries/pbrlib/genglsl/lib/mx_microfacet_diffuse.glsl#endif\r
    // similar to Fujii qualitative but using different A/B and using sigma=r*PI\r
    // Has the dark ring artifact and loses energy as roughness->1.0\r
    float NdotV = V.z;\r
    float NdotL = L.z;\r
    float s = dot(L, V) - NdotV * NdotL;\r
    float stinv = (s > 0.0f) ? s / max(NdotL, NdotV) : 0.0;\r
    float sigma = roughness;\r
    float sigma2 = sqr(sigma);\r
    float A = 1.0 - 0.5 * (sigma2 / (sigma2 + 0.33));\r
    float B = 0.45 * sigma2 / (sigma2 + 0.09);\r
    return Albedo * NdotL / PI * (A + B * stinv);\r
}\r
\r
void ltc_coeffs(in vec3 wo, float r, inout float a, inout float b)\r
{\r
    float sinO = sqrt(max(0.0, 1.0 - wo.z*wo.z));  // for LTC elements\r
    a = r*pow(sinO, 50.0)*0.5 + 1.0;               // LTC M element a\r
    b = r*pow(sinO, 4.0)*sqrt(max(0.0, wo.z));     // LTC M element b\r
}\r
\r
vec3 ltc_space(in vec3 wo, in vec3 w, bool to)\r
{\r
    // transform w to/from space where wo is in x-z plane\r
    float s = to ? -1.0: 1.0;\r
    const float eps = 1e-6;\r
    float phi = (abs(wo.x) > eps) ? s*atan(wo.y, wo.x) : s*sign(wo.y)*0.5*PI;\r
    float C = cos(phi); float S = sin(phi);\r
    return vec3(mat2(C, S, -S, C)*w.xy, w.z);\r
}\r
\r
// Inputs:\r
//     wo = fixed direction of input ray (i.e. output photon direction)\r
//     wi = sampled output ray direction (i.e. input photon direction reversed)\r
//      r = roughness\r
float pdf_EON(in vec3 wo, in vec3 wi, float r)\r
{\r
    vec3 wl = ltc_space(wo, wi, true);              // transform wi -> wl\r
    float a, b; ltc_coeffs(wo, r, a, b);            // coeffs of LTC M\r
    float aI = 1.0/a; float bI = -b*aI;             // coeffs of LTC M^-1\r
    vec3 wh = vec3(aI*wl.x+bI*wl.z, aI*wl.y, wl.z); // wh = M^-1 wl\r
    float l_MIwl = length(wh);                      // |M^-1 wl|\r
    wh /= l_MIwl;                                   // normalize wh\r
    float J = aI*aI / (l_MIwl*l_MIwl*l_MIwl);       // |M^-1| / |M^-1 wl|^3\r
    float pdf_h = wh.z / PI;                        // wh sample PDF\r
    return pdf_h * J;                               // wi sample PDF\r
}\r
\r
vec4 sample_cosine_lobe(inout uint rndSeed)\r
{\r
    float rh = sqrt(rand(rndSeed));\r
    float phi_h = 2.0 * PI * rand(rndSeed);\r
    float x = rh * cos(phi_h); float y = rh * sin(phi_h);\r
    float z = sqrt(max(0.0, 1.0 - x*x - y*y));\r
    return vec4(x, y, z, z/PI);\r
}\r
\r
// wo = fixed direction of input ray (i.e. output photon direction)\r
// Returns vec4(wi, pdf_i) where:\r
//  - wi is sampled output ray direction (i.e. input photon direction reversed),\r
//  - pdf_i is the PDF of the wi sample\r
vec4 sample_EON(in vec3 wo, float r, inout uint rndSeed)\r
{\r
    vec4 whP = sample_cosine_lobe(rndSeed);      // wh sample\r
    vec3 wh = whP.xyz; float pdf_h = whP.w;      // wh sample\r
    float a, b; ltc_coeffs(wo, r, a, b);         // coeffs of LTC M\r
    vec3 wl = vec3(a*wh.x+b*wh.z, a*wh.y, wh.z); // M wh\r
    float l_Mwh = length(wl);                    // |M wh| = 1/|M^-1 wl|\r
    wl /= l_Mwh;                                 // normalize wl\r
    float J = (l_Mwh*l_Mwh*l_Mwh) / (a*a);       // |M^-1| / |M^-1 wl|^3\r
    float pdf_i = pdf_h * J;                     // wi sample PDF\r
    vec3 wi = ltc_space(wo, wl, false);          // transform wi -> wl\r
    return vec4(wi, pdf_i);\r
}\r
\r
\r
// FON directional albedo (analytic)\r
\r
float E_FON_analyt(float mu, float sigma)\r
{\r
    #define safe_acos(x) (acos(clamp(x, -1.0, 1.0)))\r
    float AF = 1.0 / (1.0 + constant1_FON*sigma); // FON model A coefficient\r
    float BF = sigma * AF;                        // FON model B coefficient\r
    float Si = max(0.0, sqrt(1.0 - mu * mu));\r
    float G = Si * (safe_acos(mu) - Si*mu) + 2.0*((Si/mu)*(1.0 - pow(Si, 3.0)) - Si)/3.0;\r
    float E = AF + (BF/PI)*G;\r
    return E;\r
}\r
\r
// FON directional albedo (approx.)\r
float E_FON_approx(float mu, float sigma)\r
{\r
    #define Gcoeffs_FON mat2(0.287021, -0.17486, -0.306961, 0.193945)\r
    #define GoverPI_FON dot((Gcoeffs_FON * vec2(1,mu)) * vec2(1,mu*mu), vec2(1,1))\r
    return (1.0 + GoverPI_FON) / (1.0 + constant1_FON*sigma);\r
}\r
\r
// EON directional albedo (approx)\r
vec3 E_EFON(in vec3 rho, float sigma, in vec3 wi, bool exact)\r
{\r
    float muI = wi.z;                                    // input angle cos\r
    float AF = 1.0 / (1.0 + constant1_FON*sigma);        // FON model A coefficient\r
    float EF = exact ? E_FON_analyt(muI, sigma) :        // EFi at rho=1 (analytic)\r
                       E_FON_approx(muI, sigma);         // EFi at rho=1 (approx)\r
    float avgEF = AF * (1.0 + constant2_FON*sigma);      // average albedo\r
    vec3 rho_ms = sqr(rho) * avgEF / (vec3(1.0) - rho*max(0.0, 1.0-avgEF));\r
    return rho*EF + rho_ms*(1.0 - EF);\r
}\r
\r
// EFON BRDF\r
vec3 f_EFON(in vec3 rho, float sigma, in vec3 wi, in vec3 wo, bool exact)\r
{\r
    float muI = wi.z;                                    // input angle cos\r
    float muO = wo.z;                                    // output angle cos\r
    float s = dot(wi, wo) - muI * muO;                   // QON s term\r
    float stinv = s > 0.0 ? s / max(muI, muO) : s;       // Fujii model stinv\r
    float AF = 1.0 / (1.0 + constant1_FON*sigma);        // Fujii model A coefficient\r
    vec3 f_ss = (rho / PI) * AF * (1.0 + sigma*stinv);   // single-scatt. BRDF\r
    float EFo = exact ? E_FON_analyt(muO, sigma) :       // EFo at rho=1 (analytic)\r
                        E_FON_approx(muO, sigma);        // EFo at rho=1 (approx)\r
    float EFi = exact ? E_FON_analyt(muI, sigma) :       // EFi at rho=1 (analytic)\r
                        E_FON_approx(muI, sigma);        // EFi at rho=1 (approx)\r
    float avgEF = AF * (1.0 + constant2_FON*sigma);      // avg. albedo\r
    vec3 rho_ms = sqr(rho) * avgEF / (vec3(1.0) - rho*max(0.0, 1.0-avgEF));\r
    vec3 f_ms = (rho_ms / PI) * max(1e-7, 1.0 - EFo) *   // multi-scatter lobe\r
                                max(1e-7, 1.0 - EFi) /\r
                                max(1e-7, 1.0 - avgEF);\r
    return f_ss + f_ms;\r
}\r
\r
////////////////////////////////////////////////////////////////////////////////////\r
// d'Eon Lambertian Microsphere BRDF\r
////////////////////////////////////////////////////////////////////////////////////\r
\r
// Copied from: https://www.shadertoy.com/view/ftlXWl\r
float phase(float u) {\r
    return (2.0*(sqrt(1.0 - u*u) - u*acos(u)))/(3.0*PI*PI);\r
}\r
\r
vec3 deon_lambertian_sphere(vec3 kd, vec3 wi, vec3 wo)\r
{\r
    vec3 N = vec3(0.0, 0.0, 1.0);\r
    float ui = dot(wi, N);\r
    float uo = dot(wo, N);\r
    if (ui <= 0.0 || uo <= 0.0) return vec3(0.0);\r
\r
    float ui2 = ui*ui;\r
    float uo2 = uo*uo;\r
    float S = sqrt((1.0-ui2)*(1.0-uo2));\r
    float cp = -((-dot(wi, wo) + ui*uo)/S);\r
    float phi = safeacos(cp);\r
    float iodot = dot(wi, wo);\r
\r
    vec3 c = (1.0 - pow(1.0 - kd, vec3(2.73556))) / (1.0 - 0.184096*pow(1.0 - kd, vec3(2.48423)));\r
\r
    // Single-Scattering component, corresponds to "f_1" in the paper.\r
    vec3 SS = c*(phase(-iodot) / (ui + uo));\r
\r
    // These next two blocks are identical. The first block is a copy of the implementation from\r
    // https://github.com/eugenedeon/mitsuba/blob/master/src/bsdfs/lambert_sphere_fast.cpp\r
    // The second block is a literal coding of Equation 48 from the paper.\r
#if 1\r
    float p = ui * uo;\r
    return uo * max(\r
        vec3(0.0),\r
        0.995917*SS+(0.0684744*(((phi+sqrt(p))*(-0.249978+c)/(4.50996*((safeacos(S)/S)+0.113706)))+pow(max(1.94208*kd,0.0),vec3(1.85432))))\r
    );\r
#else\r
    vec3 fr = max(\r
        vec3(0.0),\r
        SS + 0.234459*pow(kd, vec3(1.85432)) \\\r
           + (0.0151829*(c-0.24998)*(abs(phi)+sqrt(ui*uo))) / (0.113706 + (safeacos(S)/S))\r
    );\r
    return uo * fr;\r
#endif\r
}\r
\r
////////////////////////////////////////////////////////////////////////////////////\r
// Chan Diffuse (Unreal)\r
////////////////////////////////////////////////////////////////////////////////////\r
\r
vec3 chan_unreal_diffuse(in vec3 Albedo, float Roughness, in vec3 V, in vec3 L)\r
{\r
    // https://advances.realtimerendering.com/s2018/MaterialAdvancesInWWII-course_notes.pdf\r
    float NdotV = V.z;\r
    float NdotL = L.z;\r
    vec3 H = normalize(L + V);\r
    float NoV = clamp(NdotV, 0.0, 1.0);\r
    float NoL = clamp(NdotL, 0.0, 1.0);\r
    float VoH = clamp(dot(V, H), 0.0, 1.0);\r
    float NoH = clamp(H.z, 0.0, 1.0);\r
    float a2 = pow(Roughness, 4.0);\r
    float g = clamp((1.0 / 18.0) * log2( 2.0 / a2 - 1.0 ), 0.0, 1.0);\r
    float F0 = VoH + pow(1.0 - VoH, 5.0);\r
    float FdV = 1.0 - 0.75 * pow(1.0 - NoV, 5.0);\r
    float FdL = 1.0 - 0.75 * pow(1.0 - NoL, 5.0);\r
    float Fd = mix( F0, FdV * FdL, clamp(2.2 * g - 0.5, 0.0, 1.0) );\r
    float Fb = ( (34.5 * g - 59.0 ) * g + 24.5 ) * VoH * exp2( -max( 73.2 * g - 21.2, 8.9 ) * sqrt(NoH));\r
    return Albedo * ((NdotL / PI) * ( Fd + Fb ));\r
\r
}\r
\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// diffuse BRDF\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
/* A selection of possible diffuse models,\r
   based on https://www.shadertoy.com/view/X3BSDD\r
   by Chris Kulla\r
*/\r
\r
vec3 diffuse_brdf_eval_implementations(in vec3 woutputL, in vec3 winputL)\r
{\r
    vec3 Albedo = base_weight * base_color;\r
    vec3 V = winputL;\r
    vec3 L = woutputL;\r
    float NdotL = max(FLT_EPSILON, abs(L.z));\r
    switch (diffuse_mode)\r
    {\r
        case 0: return Albedo / PI; // Lambert\r
        case 1: // ON Full (Mitsuba)\r
        case 2: // QON (Mitsuba)\r
        case 3: // ON Qualitative - Energy Conserving (EQON exact)\r
        case 4: // ON Qualitative - Energy Conserving (EQON approx)\r
        {\r
            float sigma = PI/2.0 * base_roughness;\r
            if      (diffuse_mode == 1) return ON_full(Albedo, sigma, V, L) / NdotL;\r
            else if (diffuse_mode == 2) return f_QON(Albedo, sigma, V, L);\r
            else if (diffuse_mode == 3) return f_EQON(Albedo, sigma, V, L, true);\r
            else                        return f_EQON(Albedo, sigma, V, L, false);\r
        }\r
        case 5: // FON\r
        case 6: // EFON exact\r
        case 7: // EFON approx\r
        case 8: // EFON exact (LTC sampling)\r
        case 9: // EFON approx (LTC sampling)\r
        {\r
            float sigma = base_roughness;\r
            if      (diffuse_mode == 5) return f_FON(Albedo, sigma, V, L);\r
            else if (diffuse_mode == 6) return f_EFON(Albedo, sigma, V, L, true);\r
            else if (diffuse_mode == 8) return f_EFON(Albedo, sigma, V, L, true);\r
            else                        return f_EFON(Albedo, sigma, V, L, false);\r
        }\r
        case 10: return fujii_materialx        (Albedo, base_roughness, V, L) / NdotL;\r
        case 11: return chan_unreal_diffuse    (Albedo, base_roughness, V, L) / NdotL;\r
        case 12: return deon_lambertian_sphere(Albedo,                 V, L) / NdotL;\r
    }\r
}\r
\r
vec3 diffuse_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
                           inout float pdf_woutputL)\r
{\r
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE) return vec3(0.0);\r
\r
    switch (diffuse_mode)\r
    {\r
        case 8:\r
        case 9:\r
        {\r
            pdf_woutputL = pdf_EON(winputL, woutputL, base_roughness);\r
            break;\r
        };\r
        default:\r
            pdf_woutputL = pdfHemisphereCosineWeighted(woutputL);\r
    }\r
    return diffuse_brdf_eval_implementations(winputL, woutputL);\r
}\r
\r
vec3 diffuse_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                         out vec3 woutputL, out float pdf_woutputL)\r
{\r
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);\r
    switch (diffuse_mode)\r
    {\r
        case 8:\r
        case 9:\r
        {\r
            vec4 woP = sample_EON(winputL, base_roughness, rndSeed);\r
            woutputL     = woP.xyz;\r
            pdf_woutputL = woP.w;\r
            break;\r
        };\r
        default:\r
            woutputL = sampleHemisphereCosineWeighted(rndSeed, pdf_woutputL);\r
    }\r
\r
    return diffuse_brdf_eval_implementations(winputL, woutputL);\r
}\r
\r
vec3 diffuse_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)\r
{\r
    // Estimate of the BRDF albedo, used to compute the discrete probability of selecting this lobe\r
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);\r
    return base_weight * base_color;\r
}\r
`,Eb=`\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// OpenPBR BSDF\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
const int ID_FUZZ_BRDF = 0;\r
const int ID_COAT_BRDF = 1;\r
const int ID_META_BRDF = 2;\r
const int ID_SPEC_BRDF = 3;\r
const int ID_SPEC_BTDF = 4;\r
const int ID_DIFF_BRDF = 5;\r
const int ID_SSSC_BTDF = 6;\r
const int NUM_LOBES    = 7;\r
\r
// Weight multipliers of individual BSDF lobes\r
struct LobeWeights\r
{\r
    vec3 m[7];\r
};\r
\r
// Albedos of individual BDSF lobes\r
struct LobeAlbedos\r
{\r
    vec3 m[7];\r
};\r
\r
// Probabilities of individual BDSF lobes\r
struct LobeProbs\r
{\r
    float m[7];\r
};\r
\r
struct LobePDFs\r
{\r
    float m[7];\r
};\r
\r
// Precomputed lobe weights, albedos, and discrete probabilities, per vertex\r
LobeWeights lobe_weights;\r
LobeAlbedos lobe_albedos;\r
LobeProbs   lobe_probs;\r
\r
\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// OpenPBR BSDF: preparation\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
// Construct weights of individual BSDF lobes, according to OpenPBR surface model (in the non-reciprocal albedo-scaling approximation).\r
// Also compute the albedos of the (non-zero weight) lobes.\r
void openpbr_lobe_weights(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                          inout LobeWeights weights, inout LobeAlbedos albedos)\r
{\r
    float F = fuzz_weight;\r
    float C = coat_weight;\r
    float M = base_metalness;\r
    float T = transmission_weight;\r
    float S = subsurface_weight;\r
\r
    ///////////////////////////// Compute albedos /////////////////////////////\r
\r
    //bool fuzzed             = (fuzz_weight > 0.0);\r
    bool coated             = (C > 0.0);\r
    bool metallic           = (M > 0.0);\r
    bool fully_metallic     = (M == 1.0);\r
    bool transmissive       = (T > 0.0);\r
    bool fully_transmissive = (T == 1.0);\r
    bool subsurfaced        = (S > 0.0);\r
    bool fully_subsurfaced  = (S == 1.0);\r
\r
    //albedos.m[ID_FUZZ_BRDF] = fuzzed                                                     ? fuzz_brdf_albedo(pW, basis, winputL, rndSeed)     : vec3(0.0);\r
    albedos.m[ID_COAT_BRDF] = coated                                                       ? coat_brdf_albedo(pW, basis, winputL, rndSeed)     : vec3(0.0);\r
    albedos.m[ID_META_BRDF] = metallic                                                     ? metal_brdf_albedo(pW, basis, winputL, rndSeed)    : vec3(0.0);\r
    albedos.m[ID_SPEC_BRDF] = !fully_metallic                                              ? specular_brdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);\r
    albedos.m[ID_SPEC_BTDF] = !fully_metallic && transmissive                              ? specular_btdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);\r
    albedos.m[ID_SSSC_BTDF] = !fully_metallic && !fully_transmissive && subsurfaced        ? specular_btdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);\r
    albedos.m[ID_DIFF_BRDF] = !fully_metallic && !fully_transmissive && !fully_subsurfaced ? diffuse_brdf_albedo(pW, basis, winputL, rndSeed)  : vec3(0.0);\r
\r
    ///////////////////////////// Construct lobe weights /////////////////////////////\r
\r
    // Fuzz BRDF\r
    weights.m[ID_FUZZ_BRDF] = vec3(0.0); // F;\r
\r
    // Coated base //////////////////////\r
    vec3 w_coated_base = vec3(1.0); //mix(vec3(1.0), vec3(1.0) - albedos.m[ID_FUZZ_BRDF], F);\r
\r
    // Coat BRDF\r
    weights.m[ID_COAT_BRDF] = w_coated_base * C;\r
\r
    // Base substrate //////////////////////\r
\r
    // Compute base darkening factor due to presence of coat:\r
    vec3 base_darkening = vec3(1.0);\r
#ifdef COAT_ENABLED\r
    if (coated && coat_darkening > 0.0)\r
    {\r
        float Kr = 1.0 - (1.0 - average_dielectric_fresnel(coat_ior))/sqr(coat_ior);\r
        float Ks = FresnelDielectricReflectance(abs(winputL.z), coat_ior);\r
        float Fr = clamp(specular_weight * fresnel_refl_normal_incidence(), 0.0, 1.0);\r
        float rd = mix(1.0, specular_roughness, Fr); // estimate of roughness of dielectric base\r
        float rm = specular_roughness;               // estimate of roughness of metallic base\r
        float rb = mix(rd, rm, M);  // thus estimated roughness of entire base\r
        float K = mix(Ks, Kr, rb);  // thus estimated internal diffuse reflection coeff.\r
        vec3 E_dielectric_base = mix(mix(albedos.m[ID_DIFF_BRDF], albedos.m[ID_SSSC_BTDF], S),\r
                                         albedos.m[ID_SPEC_BTDF], T);     // dielectric base albedo\r
        vec3 E_base = mix(E_dielectric_base, albedos.m[ID_META_BRDF], M); // entire base albedo\r
        vec3 Delta = (1.0 - K) / vec3(1.0 - E_base*K);                    // full darkening factor\r
        base_darkening = mix(vec3(1.0), Delta, C * coat_darkening);       // modulated darkening factor\r
    }\r
#endif // COAT_ENABLED\r
    vec3 w_base_substrate = w_coated_base * mix(vec3(1.0), base_darkening * coat_color * (vec3(1.0) - albedos.m[ID_COAT_BRDF]), C);\r
\r
    // Metal BRDF\r
    weights.m[ID_META_BRDF] = w_base_substrate * M;\r
\r
    // Dielectric base //////////////////////\r
    vec3 w_dielectric_base = w_base_substrate * vec3(max(0.0, 1.0 - M));\r
\r
    // Specular BRDF\r
    weights.m[ID_SPEC_BRDF] = w_dielectric_base;\r
\r
    // Specular BTDF\r
    weights.m[ID_SPEC_BTDF] = w_dielectric_base * T;\r
\r
    // Opaque dielectric base //////////////////////\r
    vec3 w_opaque_dielectric_base = w_dielectric_base * (1.0 - T);\r
\r
    // Subsurface BSSRDF\r
    //  - the subsurface lobe is identical to the specular BTDF, apart from the associated internal volumetric medium\r
    weights.m[ID_SSSC_BTDF] = w_opaque_dielectric_base * S;\r
\r
    // Diffuse BRDF\r
    weights.m[ID_DIFF_BRDF] = w_opaque_dielectric_base * (1.0 - S) * (vec3(1.0) - albedos.m[ID_SPEC_BRDF]);\r
\r
}\r
\r
void openpbr_lobe_probabilities(in LobeWeights weights, in LobeAlbedos albedos,\r
                                inout LobeProbs probs)\r
{\r
    // Compute probability of sampling each lobe, according to its albedo\r
    float W_total = 0.0;\r
    for (int lobe_id=0; lobe_id<NUM_LOBES; ++lobe_id)\r
    {\r
        probs.m[lobe_id] = length(weights.m[lobe_id] * albedos.m[lobe_id]);\r
        W_total += probs.m[lobe_id];\r
    }\r
    W_total = max(DENOM_TOLERANCE, W_total);\r
    for (int lobe_id=0; lobe_id<NUM_LOBES; ++lobe_id)\r
        probs.m[lobe_id] /= W_total;\r
}\r
\r
void openpbr_prepare(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)\r
{\r
    // Compute the mixture weights and albedos for each lobe\r
    openpbr_lobe_weights(pW, basis, winputL, rndSeed, lobe_weights, lobe_albedos);\r
\r
    // Thus compute the discrete sampling probability for each lobe\r
    openpbr_lobe_probabilities(lobe_weights, lobe_albedos, lobe_probs);\r
}\r
\r
bool openpbr_is_opaque()\r
{\r
    if (transmission_weight > 0.0) return false;\r
    if (subsurface_weight > 0.0) return false;\r
    if (geometry_opacity < 1.0) return false;\r
    return true;\r
}\r
\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// OpenPBR BSDF: evaluation\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
vec3 openpbr_bsdf_evaluate_lobes(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
                                 in int skip_lobe_id, inout LobePDFs pdfs)\r
{\r
    vec3 f = vec3(0.0);\r
    if (skip_lobe_id != ID_FUZZ_BRDF && lobe_probs.m[ID_FUZZ_BRDF] > 0.0) f += vec3(0.0);\r
    if (skip_lobe_id != ID_COAT_BRDF && lobe_probs.m[ID_COAT_BRDF] > 0.0) f += lobe_weights.m[ID_COAT_BRDF] *     coat_brdf_evaluate(pW, basis, winputL, woutputL, pdfs.m[ID_COAT_BRDF]);\r
    if (skip_lobe_id != ID_META_BRDF && lobe_probs.m[ID_META_BRDF] > 0.0) f += lobe_weights.m[ID_META_BRDF] *    metal_brdf_evaluate(pW, basis, winputL, woutputL, pdfs.m[ID_META_BRDF]);\r
    if (skip_lobe_id != ID_SPEC_BRDF && lobe_probs.m[ID_SPEC_BRDF] > 0.0) f += lobe_weights.m[ID_SPEC_BRDF] * specular_brdf_evaluate(pW, basis, winputL, woutputL, pdfs.m[ID_SPEC_BRDF]);\r
    if (skip_lobe_id != ID_DIFF_BRDF && lobe_probs.m[ID_DIFF_BRDF] > 0.0) f += lobe_weights.m[ID_DIFF_BRDF] *  diffuse_brdf_evaluate(pW, basis, winputL, woutputL, pdfs.m[ID_DIFF_BRDF]);\r
\r
    bool eval_spec_btdf = (skip_lobe_id != ID_SPEC_BTDF && lobe_probs.m[ID_SPEC_BTDF] > 0.0);\r
    bool eval_sssc_btdf = (skip_lobe_id != ID_SSSC_BTDF && lobe_probs.m[ID_SSSC_BTDF] > 0.0);\r
    bool eval_transmission = eval_spec_btdf || eval_sssc_btdf;\r
    if (eval_transmission)\r
    {\r
        vec3 f_spec_btdf = specular_btdf_evaluate(pW, basis, winputL, woutputL, pdfs.m[ID_SPEC_BTDF]);\r
        if (eval_spec_btdf) f += lobe_weights.m[ID_SPEC_BTDF] * f_spec_btdf;\r
        if (eval_sssc_btdf) f += lobe_weights.m[ID_SSSC_BTDF] * f_spec_btdf;\r
    }\r
    return f;\r
 }\r
\r
float openpbr_bsdf_total_pdf(in LobePDFs pdfs)\r
{\r
    // Compute total PDF of sampled output direction (according to 1-sample MIS)\r
    float pdf_woutputL = 0.0;\r
    for (int lobe_id=0; lobe_id<NUM_LOBES; ++lobe_id)\r
        pdf_woutputL += lobe_probs.m[lobe_id] * pdfs.m[lobe_id];\r
    return pdf_woutputL;\r
}\r
\r
vec3 openpbr_bsdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
                           inout float pdf_woutputL)\r
{\r
    LobePDFs pdfs;\r
    vec3 f = openpbr_bsdf_evaluate_lobes(pW, basis, winputL, woutputL, -1, pdfs);\r
    pdf_woutputL = openpbr_bsdf_total_pdf(pdfs);\r
    return f;\r
}\r
\r
\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// OpenPBR BSDF: sampling\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
#ifdef VOLUME_ENABLED\r
\r
void fill_transmission_medium(inout Volume internal_medium)\r
{\r
    // Set up the volumetric medium according to the "Translucent Base" section of the OpenPBR spec\r
    if (transmission_depth > 0.0)\r
    {\r
        vec3 mu_t = -log(transmission_color) / transmission_depth;\r
        vec3 mu_s = transmission_scatter / transmission_depth;\r
        vec3 mu_a = mu_t - mu_s;\r
        if (minComponent(mu_a) < 0.0)\r
            mu_a = mu_a - vec3(minComponent(mu_a));\r
        internal_medium.extinction = mu_a + mu_s;\r
        internal_medium.albedo = mu_s / (mu_a + mu_s);\r
        internal_medium.anisotropy = transmission_scatter_anisotropy;\r
    }\r
    else\r
        internal_medium.extinction = vec3(0.0);\r
}\r
\r
void fill_subsurface_medium(inout Volume internal_medium)\r
{\r
    float g = clamp(subsurface_anisotropy, -0.95, 0.95);                                              // scattering anisotropy\r
    vec3 A = subsurface_color; vec3 A2 = A*A; vec3 A3 = A*A2; vec3 A4 = A2*A2;                        // multi-scatter albedo and powers\r
    vec3 r = subsurface_radius * subsurface_radius_scale;                                             // diffusion radius\r
    vec3 S_hyperion  = 4.012 - 15.21*A + 32.34*A2 - 34.68*A3 + 13.91*A4;                              // Hyperion fit for scale factor S = L / diffusion_lengths\r
    vec3 s2_hyperion = exp(-11.43*A + 15.38*A2 - 13.91*A3);                                           // Hyperion fit for one minus single scatter albedo\r
    vec3 s2_vandehulst = sqr(4.09712 + A*4.20863 - sqrt(max(vec3(0.0), 9.59217 + A*41.6808 + A2*17.7126))); // Van de Hulst fit for one minus single scatter albedo\r
\r
    // Selection of remappings (temporary investigation)\r
    vec3 mfp_epsilon = vec3(3.0*RAY_OFFSET);\r
    vec3 s2; // fit for one minus single scatter albedo\r
    switch (subsurface_mode)\r
    {\r
        case 0: // 'OpenPBR (orig, 3-float)'\r
        {\r
            s2 = s2_hyperion;\r
            vec3 mu_t = 1.0 / max(mfp_epsilon, S_hyperion * r);\r
            internal_medium.extinction = mu_t * (1.0 - g*s2) / (1.0 - g);\r
            break;\r
        }\r
        case 1: // 'OpenPBR (luminance)'\r
        {\r
            s2 = s2_hyperion;\r
            float S = luminance_srgb(S_hyperion);\r
            vec3 mu_t = 1.0 / max(mfp_epsilon, S * r);\r
            internal_medium.extinction = mu_t * (1.0 - g*s2) / (1.0 - g);\r
            break;\r
        }\r
        case 2: // 'OpenPBR (average)'\r
        {\r
            s2 = s2_hyperion;\r
            float S = avgComponent(S_hyperion);\r
            vec3 mu_t = 1.0 / max(mfp_epsilon, S * r);\r
            internal_medium.extinction = mu_t * (1.0 - g*s2) / (1.0 - g);\r
            break;\r
        }\r
        case 3: // 'OpenPBR (max value)'\r
        {\r
            s2 = s2_hyperion;\r
            float S = maxComponent(S_hyperion);\r
            vec3 mu_t = 1.0 / max(mfp_epsilon, S * r);\r
            internal_medium.extinction = mu_t * (1.0 - g*s2) / (1.0 - g);\r
            break;\r
        }\r
        case 4: // 'OpenPBR (weighted average)'\r
        {\r
            s2 = s2_hyperion;\r
            float S = avgComponent(S_hyperion * A) / avgComponent(A);\r
            vec3 mu_t = 1.0 / max(mfp_epsilon, S * r);\r
            internal_medium.extinction = mu_t * (1.0 - g*s2) / (1.0 - g);\r
            break;\r
        }\r
        case 5: // 'SPI / Arnold v1'\r
        {\r
            s2 = s2_vandehulst;\r
            vec3 mu_t = 1.0 / max(mfp_epsilon, r);\r
            internal_medium.extinction = mu_t;\r
            break;\r
        }\r
        case 6: // 'Arnold_v2'\r
        {\r
            s2 = s2_hyperion;\r
            internal_medium.extinction = 1.0 / max(vec3(3.0*RAY_OFFSET), r);\r
            break;\r
        }\r
        case 7: // 'Uniform scattering'\r
        {\r
            s2 = s2_vandehulst;                                // use van de Hulst remapping\r
            vec3 ss_albedo = (1.0 - s2) / (1.0 - g*s2);        // gives single-scattering albedo accounting for anisotropy\r
            vec3 mu_t = 1.0 / max(mfp_epsilon, ss_albedo * r); // with mu_s = 1/r, we have mu_t = mu_s / ss_albedo\r
            internal_medium.extinction = mu_t;\r
            break;\r
        }\r
    }\r
    internal_medium.albedo     = (1.0 - s2) / (1.0 - g*s2); // single-scattering albedo accounting for anisotropy\r
    internal_medium.anisotropy = g;\r
}\r
\r
#endif // VOLUME_ENABLED\r
\r
vec3 openpbr_bsdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                         out vec3 woutputL, out float pdf_woutputL, out Volume internal_medium)\r
{\r
    // Sample a lobe according to the precomputed lobe_probs.\r
    // Also compute PDF of all other lobes in the sampled direction.\r
    float X = rand(rndSeed);\r
    float CDF = 0.0;\r
    for (int lobe_id=0; lobe_id<NUM_LOBES; ++lobe_id)\r
    {\r
        CDF += lobe_probs.m[lobe_id];\r
        if (X < CDF)\r
        {\r
            // Sample this lobe for the output direction woutputL, and corresponding (f_lobe, pdf_lobe)\r
            float pdf_lobe;\r
            vec3 f_lobe;\r
            if      (lobe_id==ID_FUZZ_BRDF) {}\r
            else if (lobe_id==ID_COAT_BRDF) { f_lobe =     coat_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_lobe); }\r
            else if (lobe_id==ID_META_BRDF) { f_lobe =    metal_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_lobe); }\r
            else if (lobe_id==ID_SPEC_BRDF) { f_lobe = specular_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_lobe); }\r
            else if (lobe_id==ID_SPEC_BTDF ||\r
                     lobe_id==ID_SSSC_BTDF) { f_lobe = specular_btdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_lobe); }\r
            else if (lobe_id==ID_DIFF_BRDF) { f_lobe =  diffuse_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_lobe); }\r
            else { break; }\r
\r
            // Evaluate the value and PDF of all other lobes at the sampled woutputL\r
            LobePDFs pdfs;\r
            int skip_lobe_id = lobe_id;\r
            vec3 f = openpbr_bsdf_evaluate_lobes(pW, basis, winputL, woutputL, skip_lobe_id, pdfs);\r
            f += lobe_weights.m[lobe_id] * f_lobe;\r
            pdfs.m[lobe_id] = pdf_lobe;\r
\r
            // Thus compute the value and PDF of the total BRDF, according to 1-sample MIS:\r
            pdf_woutputL = openpbr_bsdf_total_pdf(pdfs);\r
\r
            // If the specular BTDF or SSS lobe were sampled, producing a transmission into the object interior,\r
            // we also populate the associated volumetric bulk medium\r
            bool transmitted = woutputL.z * winputL.z < 0.0;\r
            bool transmitted_inside = transmitted && woutputL.z < 0.0;\r
            if (!transmitted_inside)\r
                return f;\r
\r
#ifdef VOLUME_ENABLED\r
            // But if the specular BTDF or SSS lobe were sampled, producing a transmission into the object interior,\r
            // we also populate the associated volumetric bulk medium\r
            if (lobe_id==ID_SPEC_BTDF)\r
                fill_transmission_medium(internal_medium);\r
            else if (lobe_id==ID_SSSC_BTDF)\r
                fill_subsurface_medium(internal_medium);\r
#endif\r
\r
            return f;\r
        }\r
    }\r
    pdf_woutputL = 1.0;\r
    return vec3(0.0);\r
}\r
\r
\r
`,wb=`\r
/////////////////////////////////////////////////////////////////////////\r
// Raytracing routines\r
/////////////////////////////////////////////////////////////////////////\r
\r
bool bvhIntersectFirstHitWithinDistance(\r
	BVH bvh, vec3 rayOrigin, vec3 rayDirection, in float maxDistance,\r
	// output variables\r
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,\r
	inout float side, inout float dist)\r
{\r
	// stack needs to be twice as long as the deepest tree we expect because\r
	// we push both the left and right child onto the stack every traversal\r
	int ptr = 0;\r
	uint stack[ 60 ];\r
	stack[ 0 ] = 0u;\r
	float triangleDistance = 1e20;\r
	bool found = false;\r
	while (ptr > - 1 && ptr < 60)\r
    {\r
		uint currNodeIndex = stack[ ptr ];\r
		ptr --;\r
		// check if we intersect the current bounds\r
		float boundsHitDistance = intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh, currNodeIndex );\r
		if (boundsHitDistance == INFINITY ||\r
            boundsHitDistance > triangleDistance ||\r
            boundsHitDistance > maxDistance)\r
		        continue;\r
		uvec2 boundsInfo = uTexelFetch1D( bvh.bvhContents, currNodeIndex ).xy;\r
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );\r
		if (isLeaf)\r
        {\r
			uint count = boundsInfo.x & 0x0000ffffu;\r
			uint offset = boundsInfo.y;\r
            float minDistance = min(maxDistance, triangleDistance);\r
            bool found_intersection = intersectTriangles(bvh, rayOrigin, rayDirection, offset, count, minDistance,\r
				                                         faceIndices, faceNormal, barycoord, side, dist);\r
            if (found_intersection)\r
            {\r
                triangleDistance = minDistance;\r
                found = true;\r
            }\r
		}\r
        else\r
        {\r
			uint leftIndex = currNodeIndex + 1u;\r
			uint splitAxis = boundsInfo.x & 0x0000ffffu;\r
			uint rightIndex = boundsInfo.y;\r
			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;\r
			uint c1 = leftToRight ? leftIndex : rightIndex;\r
			uint c2 = leftToRight ? rightIndex : leftIndex;\r
			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in\r
			// the stack while we traverse. The second pointer added is the one that will be\r
			// traversed first\r
			ptr ++;\r
			stack[ ptr ] = c2;\r
			ptr ++;\r
			stack[ ptr ] = c1;\r
		}\r
	}\r
	return found;\r
}\r
\r
bool trace(in vec3 rayOrigin, in vec3 rayDir, in float maxDistance,\r
            out vec3 P, out vec3 Ns, out vec3 Ng, out vec3 Ts, out vec3 baryCoord, out int material)\r
{\r
    // hit results\r
    uvec4 faceIndices_surface = uvec4(0u);\r
    vec3   faceNormal_surface = vec3(0.0, 0.0, 1.0);\r
    vec3    barycoord_surface = vec3(0.0);\r
    float        side_surface = 1.0;\r
    float        dist_surface = HUGE_DIST;\r
    bool hit_surface = bvhIntersectFirstHitWithinDistance( bvh_surface, rayOrigin, rayDir, maxDistance,\r
                                                           faceIndices_surface, faceNormal_surface, barycoord_surface, side_surface, dist_surface );\r
    uvec4 faceIndices_props = uvec4(0u);\r
    vec3   faceNormal_props = vec3(0.0, 0.0, 1.0);\r
    vec3    barycoord_props = vec3(0.0);\r
    float        side_props = 1.0;\r
    float        dist_props = HUGE_DIST;\r
    bool hit_props = bvhIntersectFirstHitWithinDistance( bvh_props, rayOrigin, rayDir, min(dist_surface, maxDistance),\r
                                                         faceIndices_props, faceNormal_props, barycoord_props, side_props, dist_props );\r
\r
    bool hit = hit_surface || hit_props;\r
    if (!hit)\r
        return false;\r
\r
    if (hit_surface && (!hit_props || (dist_surface <= dist_props)))\r
    {\r
        P = rayOrigin + dist_surface*rayDir;\r
        material = MATERIAL_OPENPBR;\r
        baryCoord = barycoord_surface;\r
        Ng = safe_normalize(faceNormal_surface);\r
        if (has_normals_surface)\r
        {\r
            Ns = textureSampleBarycoord(normalAttribute_surface, barycoord_surface, faceIndices_surface.xyz).xyz;\r
            const bool flip_normals = false;\r
            if (flip_normals)\r
                Ns *= -1.0;\r
        }\r
        else\r
            Ns = Ng;\r
        if (has_tangents_surface)\r
            Ts = textureSampleBarycoord(tangentAttribute_surface, barycoord_surface, faceIndices_surface.xyz).xyz;\r
        else\r
            Ts = normalToTangent(Ns);\r
    }\r
\r
    else if (hit_props)\r
    {\r
        P = rayOrigin + dist_props*rayDir;\r
        material = MATERIAL_PROPS;\r
        baryCoord = barycoord_props;\r
        Ng = safe_normalize(faceNormal_props);\r
        if (has_normals_props)\r
        {\r
            Ns = textureSampleBarycoord(normalAttribute_props, barycoord_props, faceIndices_props.xyz).xyz;\r
            const bool flip_normals = false;\r
            if (flip_normals)\r
                Ns *= -1.0;\r
        }\r
        else\r
            Ns = Ng;\r
        if (has_tangents_props)\r
            Ts = textureSampleBarycoord(tangentAttribute_props, barycoord_props, faceIndices_props.xyz).xyz;\r
        else\r
            Ts = normalToTangent(Ns);\r
    }\r
    return true;\r
}\r
\r
\r
float TraceShadow(in vec3 rayOrigin, in vec3 rayDir, in float maxDistance)\r
{\r
    int material;\r
    vec3 pW, nsW, ngW, TsW, baryCoord;\r
    bool hit = trace(rayOrigin, rayDir, maxDistance,\r
                     pW, nsW, ngW, TsW, baryCoord, material);\r
    return hit ? 0.0 : 1.0;\r
}\r
\r
\r
////////////////////////////////////////////////\r
// "Neutral" color Lambertian BRDF for props\r
////////////////////////////////////////////////\r
\r
vec3 neutral_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
                        inout float pdf_woutputL)\r
{\r
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE) return vec3(0.0);\r
    pdf_woutputL = pdfHemisphereCosineWeighted(woutputL);\r
    if (wireframe && minComponent(basis.baryCoord) < 0.003) return vec3(0.0);\r
    return neutral_color / PI;\r
}\r
\r
vec3 neutral_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                         out vec3 woutputL, out float pdf_woutputL)\r
{\r
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);\r
    woutputL = sampleHemisphereCosineWeighted(rndSeed, pdf_woutputL);\r
    if (wireframe && minComponent(basis.baryCoord) < 0.003) return vec3(0.0);\r
    return neutral_color / PI;\r
}\r
\r
//////////////////////////////////////\r
// BSDF dispatch\r
//////////////////////////////////////\r
\r
vec3 evaluateBsdf(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL, in int material,\r
                  inout float pdf_woutputL)\r
{\r
    if (material == MATERIAL_OPENPBR) return openpbr_bsdf_evaluate(pW, basis, winputL, woutputL, pdf_woutputL);\r
    else                              return neutral_brdf_evaluate(pW, basis, winputL, woutputL, pdf_woutputL);\r
}\r
\r
\r
vec3 sampleBsdf(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed, in int material,\r
                out vec3 woutputL, out float pdf_woutputL, out Volume internal_medium)\r
{\r
    if (material == MATERIAL_OPENPBR) return openpbr_bsdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL, internal_medium);\r
    else                              return neutral_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL);\r
}\r
\r
\r
/////////////////////////////////////////////////////////////////////////\r
// lighting\r
/////////////////////////////////////////////////////////////////////////\r
\r
Basis sunBasis;\r
\r
vec3 sunRadiance(in vec3 woutputW)\r
{\r
    float theta_max = sunAngularSize * PI/180.0;\r
    if (dot(woutputW, sunDir) < cos(theta_max)) return vec3(0.0);\r
    return sunPower * sunColor;\r
}\r
\r
float sunTotalPower()\r
{\r
    float theta_max = sunAngularSize * PI/180.0;\r
    float solid_angle = PI2 *(1.0 - cos(theta_max));\r
    return length(sunPower * sunColor) * solid_angle;\r
}\r
\r
vec3 sunSample(Basis basis,\r
               inout vec3 woutputL, inout vec3 woutputW, inout float pdfDir,\r
               inout uint rndSeed)\r
{\r
    float theta_max = sunAngularSize * PI/180.0;\r
    float theta = theta_max * sqrt(rand(rndSeed));\r
    float costheta = cos(theta);\r
    float sintheta = sqrt(max(0.0, 1.0-costheta*costheta));\r
    float phi = 2.0 * PI * rand(rndSeed);\r
    float cosphi = cos(phi);\r
    float sinphi = sin(phi);\r
    float x = sintheta * cosphi;\r
    float y = sintheta * sinphi;\r
    float z = costheta;\r
    float solid_angle = PI2 *(1.0 - cos(theta_max));\r
    pdfDir = 1.0/solid_angle;\r
    woutputW = localToWorld(vec3(x, y, z), sunBasis);\r
    woutputL = worldToLocal(woutputW, basis);\r
    return sunPower * sunColor;\r
}\r
\r
float sunPdf(in vec3 woutputL, in vec3 woutputW)\r
{\r
    float theta_max = sunAngularSize * PI/180.0;\r
    if (dot(woutputW, sunDir) < cos(theta_max)) return 0.0;\r
    float solid_angle = 2.0*PI*(1.0 - cos(theta_max));\r
    return 1.0/solid_angle;\r
}\r
\r
vec3 skyRadiance(in vec3 woutputW)\r
{\r
    return skyPower * skyColor;\r
}\r
\r
float skyTotalPower()\r
{\r
    return length(skyPower * skyColor) * PI2;\r
}\r
\r
vec3 skySample(in Basis basis,\r
                out vec3 woutputL, out vec3 woutputW, out float pdfDir,\r
                inout uint rndSeed)\r
{\r
    woutputL = sampleHemisphereCosineWeighted(rndSeed, pdfDir);\r
    woutputW = localToWorld(woutputL, basis);\r
    return skyRadiance(woutputW);\r
}\r
\r
float skyPdf(in vec3 woutputL, in vec3 woutputWs)\r
{\r
    return pdfHemisphereCosineWeighted(woutputL);\r
}\r
\r
// Sample direct radiance at the given surface vertex\r
vec3 LiDirect(in vec3 pW, in Basis basis,\r
              out vec3 shadowL, out vec3 shadowW,\r
              out float lightPdf,\r
              inout uint rndSeed)\r
{\r
    // Do 1-sample MIS between uniform sky and sun sampling\r
    vec3 Li;\r
    {\r
        float w_sun = sunTotalPower();\r
        float w_sky = skyTotalPower();\r
        float P_sun = w_sun / (w_sun + w_sky);\r
        float P_sky = max(0.0, 1.0 - P_sun);\r
        float pdf_sun, pdf_sky;\r
        float r = rand(rndSeed);\r
        if (r < P_sun)\r
        {\r
            Li = sunSample(basis, shadowL, shadowW, pdf_sun, rndSeed);\r
            Li += skyRadiance(shadowW);\r
            pdf_sky = skyPdf(shadowL, shadowW);\r
        }\r
        else\r
        {\r
            Li = skySample(basis, shadowL, shadowW, pdf_sky, rndSeed);\r
            Li += sunRadiance(shadowW);\r
            pdf_sun = sunPdf(shadowL, shadowW);\r
        }\r
        lightPdf = P_sun*pdf_sun + P_sky*pdf_sky; // Light PDF according to 1-sample MIS\r
    }\r
    if (shadowL.z < 0.0) return vec3(0.0);\r
    if (maxComponent(Li) < RADIANCE_EPSILON) return vec3(0.0);\r
    float visibility = TraceShadow(pW, shadowW, HUGE_DIST);\r
    return visibility * Li;\r
}\r
\r
// Corresponding PDF of direct radiance in the given shadow ray direction (for MIS)\r
float LiPDF(in vec3 shadowW, in Basis basis)\r
{\r
    vec3 shadowL = worldToLocal(shadowW, basis);\r
    float pdf_sky = skyPdf(shadowL, shadowW);\r
    float pdf_sun = sunPdf(shadowL, shadowW);\r
    float w_sun = sunTotalPower();\r
    float w_sky = skyTotalPower();\r
    float P_sun = w_sun / (w_sun + w_sky);\r
    float P_sky = max(0.0, 1.0 - P_sun);\r
    float lightPdf = P_sun*pdf_sun + P_sky*pdf_sky; // Light PDF according to 1-sample MIS\r
    return lightPdf;\r
}\r
\r
vec3 evaluateEdf(in vec3 pW, in Basis basis, in vec3 winputL)\r
{\r
    return emission_color * emission_luminance;\r
}\r
\r
\r
/////////////////////////////////////////////////////////////////////////\r
// pathtracer\r
/////////////////////////////////////////////////////////////////////////\r
\r
#define MIN_VOLUME_STEPS_BEFORE_RR 3\r
\r
int sample_channel(in vec3 albedo, in vec3 throughput, inout uint rndSeed, inout vec3 channel_probs)\r
{\r
    // Sample color channel in proportion to throughput\r
    vec3 w = abs(throughput);\r
    float sum = w.r + w.g + w.b;\r
    channel_probs = w / max(DENOM_TOLERANCE, sum);\r
    float cdf = 0.0;\r
    float r = rand(rndSeed);\r
    for (int channel=0; channel<3; ++channel)\r
    {\r
        cdf += channel_probs[channel];\r
        if (r < cdf)\r
            return channel;\r
    }\r
    return 0;\r
}\r
\r
#ifdef VOLUME_ENABLED\r
bool trace_volumetric(in vec3 pW, in vec3 dW, inout uint rndSeed,\r
                      in Volume volume,\r
                      out vec3 volume_throughput,\r
                      out vec3 pW_hit,\r
                      out vec3 dW_hit,\r
                      out vec3 NsW_hit,\r
                      out vec3 NgW_hit,\r
                      out vec3 TsW_hit,\r
                      out vec3 baryCoord_hit,\r
                      out int material_hit)\r
{\r
    // Do an "analogue random-walk" in the scattering medium, i.e. following the physical path of a photon.\r
    // Returns whether a surface hit occurred (and the hit data), and the volumetric path throughput.\r
    vec3 pWalk = pW;\r
    vec3 dWalk = dW;\r
    vec3 mfp = 1.0 / max(vec3(DENOM_TOLERANCE), volume.extinction);\r
    volume_throughput = vec3(1.0);\r
    for (int n=0; n < MAX_VOLUME_STEPS; ++n)\r
    {\r
        vec3 channel_probs;\r
        int channel = sample_channel(volume.albedo, volume_throughput, rndSeed, channel_probs);\r
        float walk_step = -log(rand(rndSeed)) * mfp[channel];\r
        bool surface_hit = trace(pWalk, dWalk, walk_step,\r
                                 pW_hit, NsW_hit, NgW_hit, TsW_hit, baryCoord_hit, material_hit);\r
        if (surface_hit)\r
        {\r
            // ray hits surface within walk_step, walk terminates.\r
            // update walk throughput on exit (via MIS)\r
            float dist_to_surface = length(pW_hit - pWalk);\r
            vec3 transmittance = exp(-dist_to_surface * volume.extinction);\r
            volume_throughput *= transmittance / max(DENOM_TOLERANCE, dot(channel_probs, transmittance));\r
            dW_hit = dWalk;\r
            return true;\r
        }\r
        // Scatter within the medium, and continue walking.\r
        // First, make a Russian-roulette termination decision (after a minimum number of steps has been taken)\r
        float termination_prob = 0.0;\r
        if (n > MIN_VOLUME_STEPS_BEFORE_RR)\r
        {\r
            float continuation_prob = clamp(maxComponent(volume_throughput), 0.0, 1.0);\r
            float termination_prob = 1.0 - continuation_prob;\r
            if (rand(rndSeed) < termination_prob)\r
                break;\r
            volume_throughput /= continuation_prob; // update walk throughput due to RR continuation\r
        }\r
\r
        // update walk throughput on scattering in medium (via MIS)\r
        vec3 transmittance = exp(-walk_step * volume.extinction);\r
        volume_throughput *= volume.albedo * volume.extinction * transmittance;\r
        volume_throughput /= max(DENOM_TOLERANCE, dot(channel_probs, volume.extinction * transmittance));\r
\r
        // walk in the sampled direction, staying inside the medium\r
        pWalk += walk_step * dWalk;\r
\r
        // scatter into a new direction sampled from Henyey-Greenstein phase function\r
        dWalk = samplePhaseFunction(dWalk, volume.anisotropy, rndSeed);\r
        dWalk = normalize(dWalk);\r
    }\r
    volume_throughput = vec3(0.0); // path terminated in the medium\r
    return false;\r
}\r
#endif // VOLUME_ENABLED\r
\r
void main()\r
{\r
    vec2 frag = gl_FragCoord.xy;\r
\r
    // Initialize RNG\r
    uint rndSeed = uint(frag.x + frag.y*resolution.x);\r
    xorshift(rndSeed);\r
    rndSeed ^= uint(samples);\r
\r
    // Apply FIS to obtain pixel jitter about center in pixel units\r
    const float filterRadius = 1.0;\r
    float jx = 0.5 * filterRadius * sample_triangle_filter(rand(rndSeed));\r
    float jy = 0.5 * filterRadius * sample_triangle_filter(rand(rndSeed));\r
    vec2 pixel = frag + vec2(jx, jy);\r
\r
    // Get [-1, 1] normalized device coordinates,\r
    vec2 ndc = -1.0 + 2.0*(pixel/resolution.xy);\r
\r
    // Compute primary camera ray in world-space\r
    vec3 pW, dW;\r
    ndcToCameraRay(ndc, invModelMatrix * cameraWorldMatrix, invProjectionMatrix,\r
                    pW, dW);\r
    dW = normalize(dW);\r
\r
    // Setup sun basis\r
    sunBasis = makeBasis(sunDir);\r
\r
    // Perform uni-directional pathtrace starting from the (pinhole) camera lens to estimate the primary ray radiance, L\r
    vec3 L = vec3(0.0);\r
    vec3 throughput = vec3(1.0);\r
    Basis basis;                      // kept for MIS book-keeping\r
    float bsdfPdf_continuation = 1.0; // ditto\r
\r
#ifdef VOLUME_ENABLED\r
    // Initialize volumetric medium of camera ray\r
    // (NB, camera inside the volume is not handled properly in this implementation, for simplicity)\r
    Volume exterior_medium;\r
    exterior_medium.extinction = vec3(0.0);\r
    exterior_medium.albedo     = vec3(0.0);\r
    Volume current_medium = exterior_medium;\r
#endif\r
    bool in_dielectric = false;\r
\r
#ifdef DISPERSION_ENABLED\r
    // Stochastically choose wavelength for potential dispersion effect\r
    // (here just a crude uniform sample of the visible range)\r
    bool dispersive = false;\r
    wavelength_nm = 360.0 + (700.0 - 360.0)*rand(rndSeed);\r
#endif // DISPERSION_ENABLED\r
\r
    for (int vertex=0; vertex <= BOUNCES; vertex++)\r
    {\r
        // Generate next surface hit, given current vertex pW and current propagation direction dW\r
        // (where vertex 0 corresponds to the camera position)\r
        bool surface_hit;\r
        vec3 pW_next;\r
        vec3 NsW_next;\r
        vec3 NgW_next;\r
        vec3 TsW_next;\r
        vec3 baryCoord_next;\r
        int material_next;\r
\r
        // Check for presence of volume\r
#ifdef VOLUME_ENABLED\r
        bool inside_volume            = in_dielectric && maxComponent(current_medium.extinction) > FLT_EPSILON;\r
        bool inside_scattering_volume = inside_volume && maxComponent(current_medium.albedo) > FLT_EPSILON;\r
#else\r
        bool inside_volume = false;\r
        bool inside_scattering_volume = false;\r
#endif\r
\r
        // If not inside a scattering volume, ray proceeds in a straight line to the next surface hit\r
        if (!inside_scattering_volume)\r
        {\r
            // Raycast along current propagation direction dW, from current vertex pW\r
            surface_hit = trace(pW, dW, HUGE_DIST,\r
                                pW_next, NsW_next, NgW_next, TsW_next, baryCoord_next, material_next);\r
\r
#ifdef VOLUME_ENABLED\r
            // Apply Beer-Lambert law for absorption\r
            if (surface_hit && inside_volume)\r
            {\r
                float ray_length = length(pW_next - pW);\r
                throughput *= exp(-ray_length * current_medium.extinction);\r
            }\r
#endif // VOLUME_ENABLED\r
        }\r
\r
#ifdef VOLUME_ENABLED\r
        // Otherwise volumetric scattering may occur before the next surface hit\r
        else\r
        {\r
            vec3 volume_throughput;\r
            vec3 dW_next;\r
            surface_hit = trace_volumetric(pW, dW, rndSeed, current_medium, volume_throughput,\r
                                           pW_next, dW_next, NsW_next, NgW_next, TsW_next, baryCoord_next, material_next);\r
            dW = dW_next;\r
            throughput *= volume_throughput;\r
        }\r
#endif // VOLUME_ENABLED\r
\r
        if (!surface_hit)\r
        {\r
            // Ray missed all geometry; add contribution from distant lights\r
            float misWeightLight = 1.0;\r
            if (vertex > 0)\r
            {\r
                float lightPdf = LiPDF(dW, basis); // surface basis of previous hit\r
                misWeightLight = powerHeuristic(bsdfPdf_continuation, lightPdf);\r
            }\r
            L += throughput * misWeightLight * (sunRadiance(dW) + skyRadiance(dW));\r
            break; // Ray escapes to infinity, terminate path\r
        }\r
\r
        // Terminate at max bounce count (biased)\r
        if (vertex == BOUNCES)\r
            break;\r
\r
        // Update to the next surface vertex.\r
        // First, compute the normal and thus the local vertex basis:\r
        pW             = pW_next;\r
        vec3 NsW       = NsW_next;\r
        vec3 NgW       = NgW_next;\r
        vec3 TsW       = TsW_next;\r
        vec3 baryCoord = baryCoord_next;\r
        int material   = material_next;\r
\r
        if (material == MATERIAL_OPENPBR)\r
        {\r
            // Orient local shading normal so that it points from the surface interior to the exterior\r
            if ( (in_dielectric && dot(NsW, dW) < 0.0) ||\r
                (!in_dielectric && dot(NsW, dW) > 0.0))\r
                NsW *= -1.0;\r
        }\r
        else\r
        {\r
            // Otherwise surface is opaque, must be approaching from the exterior\r
            if (dot(NsW, dW) > 0.0)\r
                NsW *= -1.0;\r
        }\r
\r
        // Align geometric normal into same hemisphere as shading normal\r
        if (dot(NgW, NsW) < 0.0) NgW *= -1.0;\r
\r
        // Construct local shading frame\r
        if (smooth_normals)\r
        {\r
            // If the surface is opaque, but the incident ray lies below the hemisphere of the normal,\r
            // which can occur due to shading normals, apply the "Flipping hack" to prevent artifacts\r
            // (see Schüßler, "Microfacet-based Normal Mapping for Robust Monte Carlo Path Tracing")\r
            if (material == MATERIAL_OPENPBR && openpbr_is_opaque() && dot(NsW, dW) > 0.0)\r
                NsW = 2.0*NgW*dot(NgW, NsW) - NsW;\r
            basis = makeBasis(NsW, TsW_next, baryCoord);\r
        }\r
        else\r
            basis = makeBasis(NgW, TsW_next, baryCoord);\r
\r
        vec3 winputW = -dW; // winputW, points *towards* the incident direction (parallel to photon)\r
        vec3 winputL = worldToLocal(winputW, basis);\r
\r
        // Prepare OpenPBR if that material is used at the current vertex\r
        if (material == MATERIAL_OPENPBR)\r
            openpbr_prepare(pW, basis, winputL, rndSeed);\r
\r
        // Sample BSDF for the continuation ray direction\r
        Volume internal_medium;\r
        vec3 surface_throughput;\r
        {\r
            vec3 woutputL; // points *towards* the outgoing ray direction (opposite to photon)\r
            vec3 f = sampleBsdf(pW, basis, winputL, rndSeed, material, woutputL, bsdfPdf_continuation, internal_medium);\r
            vec3 woutputW = localToWorld(woutputL, basis);\r
            surface_throughput = f / max(PDF_EPSILON, bsdfPdf_continuation) * abs(dot(woutputW, basis.nW));\r
            dW = woutputW; // Update continuation ray direction to the BSDF-sampled direction\r
        }\r
\r
        // Add emission from the surface point, if present\r
        if (material == MATERIAL_OPENPBR)\r
            L += throughput * evaluateEdf(pW, basis, winputL);\r
\r
        // Prepare for tracing the direct lighting and continuation rays\r
        pW += NgW * sign(dot(dW, NgW)) * RAY_OFFSET; // perturb vertex into geometric half-space of scattered ray\r
\r
        // Check if a transmission has occurred, and update the current_medium and dispersion state accordingly.\r
        bool transmitted = (material == MATERIAL_OPENPBR) && (dot(winputW, NgW) * dot(dW, NgW) < 0.0);\r
        if (transmitted)\r
        {\r
#ifdef DISPERSION_ENABLED\r
            if (!in_dielectric && !dispersive)\r
            {\r
                // On first transmission into dielectric, apply associated color of stochastically chosen wavelength\r
                // (where the color channel normalization here is just an approximation)\r
                if (transmission_dispersion_scale > 0.0)\r
                    surface_throughput *= xyzToRgb(xyzFit_1931(wavelength_nm)) * vec3(2.7, 3.3, 3.45);\r
                dispersive = true;\r
            }\r
#endif // DISPERSION_ENABLED\r
\r
            // Update in_dielectric state\r
            in_dielectric = !in_dielectric;\r
\r
#ifdef VOLUME_ENABLED\r
            // Thus update current medium\r
            if (in_dielectric)\r
                current_medium = internal_medium;\r
            else\r
                current_medium = exterior_medium;\r
#endif // VOLUME_ENABLED\r
        } // transmitted\r
\r
        // Add direct lighting term at the current surface vertex\r
        if (!in_dielectric && !transmitted)\r
        {\r
            vec3 shadowL, shadowW; // sampled shadow ray direction\r
            float lightPdf;\r
            vec3 Li = LiDirect(pW, basis, shadowL, shadowW, lightPdf, rndSeed);\r
            if (maxComponent(Li) > RADIANCE_EPSILON)\r
            {\r
                float bsdfPdf_shadow = PDF_EPSILON;\r
                vec3 fshadow = evaluateBsdf(pW, basis, winputL, shadowL, material, bsdfPdf_shadow);\r
                float misWeightLight = powerHeuristic(lightPdf, bsdfPdf_shadow);\r
                L += throughput * misWeightLight * fshadow * abs(dot(shadowW, basis.nW)) * Li / max(PDF_EPSILON, lightPdf);\r
\r
            }\r
        } // direct lighting\r
\r
        // Update path continuation throughput\r
        throughput *= surface_throughput;\r
\r
        // Russian roulette termination (unbiased)\r
        if (maxComponent(throughput) < 1.0 && vertex > 1)\r
        {\r
            float q = max(0.0, 1.0 - maxComponent(throughput));\r
            if (rand(rndSeed) < q)\r
                break;\r
            throughput /= 1.0 - q;\r
        }\r
\r
    } // bounce loop\r
\r
    gl_FragColor.rgb = L;\r
    gl_FragColor.a = accumulation_weight; // Implements Monte-Carlo accumulation via alpha blending\r
}\r
`;function ia(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Kf={exports:{}};(function(r,e){(function(t){r.exports=t()})(function(){return function(){function t(n,i,s){function o(c,u){if(!i[c]){if(!n[c]){var f=typeof ia=="function"&&ia;if(!u&&f)return f(c,!0);if(a)return a(c,!0);var h=new Error("Cannot find module '"+c+"'");throw h.code="MODULE_NOT_FOUND",h}var p=i[c]={exports:{}};n[c][0].call(p.exports,function(_){var g=n[c][1][_];return o(g||_)},p,p.exports,t,n,i,s)}return i[c].exports}for(var a=typeof ia=="function"&&ia,l=0;l<s.length;l++)o(s[l]);return o}return t}()({1:[function(t,n,i){(function(s){(function(){var o=200,a="__lodash_hash_undefined__",l=800,c=16,u=9007199254740991,f="[object Arguments]",h="[object Array]",p="[object AsyncFunction]",_="[object Boolean]",g="[object Date]",m="[object Error]",d="[object Function]",x="[object GeneratorFunction]",v="[object Map]",y="[object Number]",b="[object Null]",M="[object Object]",T="[object Proxy]",I="[object RegExp]",S="[object Set]",A="[object String]",z="[object Undefined]",O="[object WeakMap]",W="[object ArrayBuffer]",D="[object DataView]",V="[object Float32Array]",Z="[object Float64Array]",Q="[object Int8Array]",ce="[object Int16Array]",ie="[object Int32Array]",se="[object Uint8Array]",me="[object Uint8ClampedArray]",ve="[object Uint16Array]",J="[object Uint32Array]",oe=/[\\^$.*+?()[\]{}|]/g,Se=/^\[object .+?Constructor\]$/,De=/^(?:0|[1-9]\d*)$/,_e={};_e[V]=_e[Z]=_e[Q]=_e[ce]=_e[ie]=_e[se]=_e[me]=_e[ve]=_e[J]=!0,_e[f]=_e[h]=_e[W]=_e[_]=_e[D]=_e[g]=_e[m]=_e[d]=_e[v]=_e[y]=_e[M]=_e[I]=_e[S]=_e[A]=_e[O]=!1;var qe=typeof s=="object"&&s&&s.Object===Object&&s,We=typeof self=="object"&&self&&self.Object===Object&&self,Fe=qe||We||Function("return this")(),Ye=typeof i=="object"&&i&&!i.nodeType&&i,X=Ye&&typeof n=="object"&&n&&!n.nodeType&&n,Lt=X&&X.exports===Ye,Ce=Lt&&qe.process,$e=function(){try{var L=X&&X.require&&X.require("util").types;return L||Ce&&Ce.binding&&Ce.binding("util")}catch{}}(),ze=$e&&$e.isTypedArray;function _t(L,U,$){switch($.length){case 0:return L.call(U);case 1:return L.call(U,$[0]);case 2:return L.call(U,$[0],$[1]);case 3:return L.call(U,$[0],$[1],$[2])}return L.apply(U,$)}function Ke(L,U){for(var $=-1,Te=Array(L);++$<L;)Te[$]=U($);return Te}function ke(L){return function(U){return L(U)}}function ot(L,U){return L==null?void 0:L[U]}function Tt(L,U){return function($){return L(U($))}}var Ct=Array.prototype,P=Function.prototype,E=Object.prototype,q=Fe["__core-js_shared__"],le=P.toString,re=E.hasOwnProperty,fe=function(){var L=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||"");return L?"Symbol(src)_1."+L:""}(),Me=E.toString,pe=le.call(Object),ye=RegExp("^"+le.call(re).replace(oe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),N=Lt?Fe.Buffer:void 0,de=Fe.Symbol,ne=Fe.Uint8Array,Oe=N?N.allocUnsafe:void 0,Re=Tt(Object.getPrototypeOf,Object),Pe=Object.create,we=E.propertyIsEnumerable,be=Ct.splice,Ge=de?de.toStringTag:void 0,F=function(){try{var L=rt(Object,"defineProperty");return L({},"",{}),L}catch{}}(),ge=N?N.isBuffer:void 0,ae=Math.max,ee=Date.now,he=rt(Fe,"Map"),Le=rt(Object,"create"),nt=function(){function L(){}return function(U){if(!er(U))return{};if(Pe)return Pe(U);L.prototype=U;var $=new L;return L.prototype=void 0,$}}();function gt(L){var U=-1,$=L==null?0:L.length;for(this.clear();++U<$;){var Te=L[U];this.set(Te[0],Te[1])}}function Vt(){this.__data__=Le?Le(null):{},this.size=0}function ht(L){var U=this.has(L)&&delete this.__data__[L];return this.size-=U?1:0,U}function ft(L){var U=this.__data__;if(Le){var $=U[L];return $===a?void 0:$}return re.call(U,L)?U[L]:void 0}function Sn(L){var U=this.__data__;return Le?U[L]!==void 0:re.call(U,L)}function ii(L,U){var $=this.__data__;return this.size+=this.has(L)?0:1,$[L]=Le&&U===void 0?a:U,this}gt.prototype.clear=Vt,gt.prototype.delete=ht,gt.prototype.get=ft,gt.prototype.has=Sn,gt.prototype.set=ii;function ln(L){var U=-1,$=L==null?0:L.length;for(this.clear();++U<$;){var Te=L[U];this.set(Te[0],Te[1])}}function Ii(){this.__data__=[],this.size=0}function yr(L){var U=this.__data__,$=xt(U,L);if($<0)return!1;var Te=U.length-1;return $==Te?U.pop():be.call(U,$,1),--this.size,!0}function ri(L){var U=this.__data__,$=xt(U,L);return $<0?void 0:U[$][1]}function br(L){return xt(this.__data__,L)>-1}function Sr(L,U){var $=this.__data__,Te=xt($,L);return Te<0?(++this.size,$.push([L,U])):$[Te][1]=U,this}ln.prototype.clear=Ii,ln.prototype.delete=yr,ln.prototype.get=ri,ln.prototype.has=br,ln.prototype.set=Sr;function Xn(L){var U=-1,$=L==null?0:L.length;for(this.clear();++U<$;){var Te=L[U];this.set(Te[0],Te[1])}}function Ni(){this.size=0,this.__data__={hash:new gt,map:new(he||ln),string:new gt}}function Es(L){var U=Be(this,L).delete(L);return this.size-=U?1:0,U}function R(L){return Be(this,L).get(L)}function H(L){return Be(this,L).has(L)}function j(L,U){var $=Be(this,L),Te=$.size;return $.set(L,U),this.size+=$.size==Te?0:1,this}Xn.prototype.clear=Ni,Xn.prototype.delete=Es,Xn.prototype.get=R,Xn.prototype.has=H,Xn.prototype.set=j;function K(L){var U=this.__data__=new ln(L);this.size=U.size}function Y(){this.__data__=new ln,this.size=0}function Ee(L){var U=this.__data__,$=U.delete(L);return this.size=U.size,$}function Ie(L){return this.__data__.get(L)}function He(L){return this.__data__.has(L)}function Xe(L,U){var $=this.__data__;if($ instanceof ln){var Te=$.__data__;if(!he||Te.length<o-1)return Te.push([L,U]),this.size=++$.size,this;$=this.__data__=new Xn(Te)}return $.set(L,U),this.size=$.size,this}K.prototype.clear=Y,K.prototype.delete=Ee,K.prototype.get=Ie,K.prototype.has=He,K.prototype.set=Xe;function et(L,U){var $=qn(L),Te=!$&&An(L),ut=!$&&!Te&&xc(L),wt=!$&&!Te&&!ut&&bc(L),Dt=$||Te||ut||wt,ct=Dt?Ke(L.length,String):[],It=ct.length;for(var On in L)(U||re.call(L,On))&&!(Dt&&(On=="length"||ut&&(On=="offset"||On=="parent")||wt&&(On=="buffer"||On=="byteLength"||On=="byteOffset")||St(On,It)))&&ct.push(On);return ct}function je(L,U,$){($!==void 0&&!dn(L[U],$)||$===void 0&&!(U in L))&&Gt(L,U,$)}function Ze(L,U,$){var Te=L[U];(!(re.call(L,U)&&dn(Te,$))||$===void 0&&!(U in L))&&Gt(L,U,$)}function xt(L,U){for(var $=L.length;$--;)if(dn(L[$][0],U))return $;return-1}function Gt(L,U,$){U=="__proto__"&&F?F(L,U,{configurable:!0,enumerable:!0,value:$,writable:!0}):L[U]=$}var zt=Ne();function cn(L){return L==null?L===void 0?z:b:Ge&&Ge in Object(L)?dt(L):oi(L)}function at(L){return ws(L)&&cn(L)==f}function Qe(L){if(!er(L)||rn(L))return!1;var U=Ta(L)?ye:Se;return U.test(Jt(L))}function Ji(L){return ws(L)&&yc(L.length)&&!!_e[cn(L)]}function yt(L){if(!er(L))return si(L);var U=gi(L),$=[];for(var Te in L)Te=="constructor"&&(U||!re.call(L,Te))||$.push(Te);return $}function Fn(L,U,$,Te,ut){L!==U&&zt(U,function(wt,Dt){if(ut||(ut=new K),er(wt))Er(L,U,Dt,$,Fn,Te,ut);else{var ct=Te?Te(ai(L,Dt),wt,Dt+"",L,U,ut):void 0;ct===void 0&&(ct=wt),je(L,Dt,ct)}},Sc)}function Er(L,U,$,Te,ut,wt,Dt){var ct=ai(L,$),It=ai(U,$),On=Dt.get(It);if(On){je(L,$,On);return}var Rn=wt?wt(ct,It,$+"",L,U,Dt):void 0,Ms=Rn===void 0;if(Ms){var Aa=qn(It),Ra=!Aa&&xc(It),wc=!Aa&&!Ra&&bc(It);Rn=It,Aa||Ra||wc?qn(ct)?Rn=ct:Jf(ct)?Rn=te(ct):Ra?(Ms=!1,Rn=Wt(It,!0)):wc?(Ms=!1,Rn=B(It,!0)):Rn=[]:ed(It)||An(It)?(Rn=ct,An(ct)?Rn=td(ct):(!er(ct)||Ta(ct))&&(Rn=Ft(It))):Ms=!1}Ms&&(Dt.set(It,Rn),ut(Rn,It,Te,wt,Dt),Dt.delete(It)),je(L,$,Rn)}function Qt(L,U){return li(Et(L,U,Ec),L+"")}var nn=F?function(L,U){return F(L,"toString",{configurable:!0,enumerable:!1,value:id(U),writable:!0})}:Ec;function Wt(L,U){if(U)return L.slice();var $=L.length,Te=Oe?Oe($):new L.constructor($);return L.copy(Te),Te}function w(L){var U=new L.constructor(L.byteLength);return new ne(U).set(new ne(L)),U}function B(L,U){var $=U?w(L.buffer):L.buffer;return new L.constructor($,L.byteOffset,L.length)}function te(L,U){var $=-1,Te=L.length;for(U||(U=Array(Te));++$<Te;)U[$]=L[$];return U}function G(L,U,$,Te){var ut=!$;$||($={});for(var wt=-1,Dt=U.length;++wt<Dt;){var ct=U[wt],It=Te?Te($[ct],L[ct],ct,$,L):void 0;It===void 0&&(It=L[ct]),ut?Gt($,ct,It):Ze($,ct,It)}return $}function ue(L){return Qt(function(U,$){var Te=-1,ut=$.length,wt=ut>1?$[ut-1]:void 0,Dt=ut>2?$[2]:void 0;for(wt=L.length>3&&typeof wt=="function"?(ut--,wt):void 0,Dt&&Pt($[0],$[1],Dt)&&(wt=ut<3?void 0:wt,ut=1),U=Object(U);++Te<ut;){var ct=$[Te];ct&&L(U,ct,Te,wt)}return U})}function Ne(L){return function(U,$,Te){for(var ut=-1,wt=Object(U),Dt=Te(U),ct=Dt.length;ct--;){var It=Dt[L?ct:++ut];if($(wt[It],It,wt)===!1)break}return U}}function Be(L,U){var $=L.__data__;return kt(U)?$[typeof U=="string"?"string":"hash"]:$.map}function rt(L,U){var $=ot(L,U);return Qe($)?$:void 0}function dt(L){var U=re.call(L,Ge),$=L[Ge];try{L[Ge]=void 0;var Te=!0}catch{}var ut=Me.call(L);return Te&&(U?L[Ge]=$:delete L[Ge]),ut}function Ft(L){return typeof L.constructor=="function"&&!gi(L)?nt(Re(L)):{}}function St(L,U){var $=typeof L;return U=U??u,!!U&&($=="number"||$!="symbol"&&De.test(L))&&L>-1&&L%1==0&&L<U}function Pt(L,U,$){if(!er($))return!1;var Te=typeof U;return(Te=="number"?wr($)&&St(U,$.length):Te=="string"&&U in $)?dn($[U],L):!1}function kt(L){var U=typeof L;return U=="string"||U=="number"||U=="symbol"||U=="boolean"?L!=="__proto__":L===null}function rn(L){return!!fe&&fe in L}function gi(L){var U=L&&L.constructor,$=typeof U=="function"&&U.prototype||E;return L===$}function si(L){var U=[];if(L!=null)for(var $ in Object(L))U.push($);return U}function oi(L){return Me.call(L)}function Et(L,U,$){return U=ae(U===void 0?L.length-1:U,0),function(){for(var Te=arguments,ut=-1,wt=ae(Te.length-U,0),Dt=Array(wt);++ut<wt;)Dt[ut]=Te[U+ut];ut=-1;for(var ct=Array(U+1);++ut<U;)ct[ut]=Te[ut];return ct[U]=$(Dt),_t(L,this,ct)}}function ai(L,U){if(!(U==="constructor"&&typeof L[U]=="function")&&U!="__proto__")return L[U]}var li=vi(nn);function vi(L){var U=0,$=0;return function(){var Te=ee(),ut=c-(Te-$);if($=Te,ut>0){if(++U>=l)return arguments[0]}else U=0;return L.apply(void 0,arguments)}}function Jt(L){if(L!=null){try{return le.call(L)}catch{}try{return L+""}catch{}}return""}function dn(L,U){return L===U||L!==L&&U!==U}var An=at(function(){return arguments}())?at:function(L){return ws(L)&&re.call(L,"callee")&&!we.call(L,"callee")},qn=Array.isArray;function wr(L){return L!=null&&yc(L.length)&&!Ta(L)}function Jf(L){return ws(L)&&wr(L)}var xc=ge||rd;function Ta(L){if(!er(L))return!1;var U=cn(L);return U==d||U==x||U==p||U==T}function yc(L){return typeof L=="number"&&L>-1&&L%1==0&&L<=u}function er(L){var U=typeof L;return L!=null&&(U=="object"||U=="function")}function ws(L){return L!=null&&typeof L=="object"}function ed(L){if(!ws(L)||cn(L)!=M)return!1;var U=Re(L);if(U===null)return!0;var $=re.call(U,"constructor")&&U.constructor;return typeof $=="function"&&$ instanceof $&&le.call($)==pe}var bc=ze?ke(ze):Ji;function td(L){return G(L,Sc(L))}function Sc(L){return wr(L)?et(L,!0):yt(L)}var nd=ue(function(L,U,$){Fn(L,U,$)});function id(L){return function(){return L}}function Ec(L){return L}function rd(){return!1}n.exports=nd}).call(this)}).call(this,typeof Hl<"u"?Hl:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(t,n,i){/*! For license information please see shifty.js.LICENSE.txt */(function(s,o){typeof i=="object"&&typeof n=="object"?n.exports=o():typeof i=="object"?i.shifty=o():s.shifty=o()})(self,function(){return function(){var s={720:function(l,c,u){u.r(c),u.d(c,{Scene:function(){return Wt},Tweenable:function(){return ft},interpolate:function(){return Ji},processTweens:function(){return ae},setBezierFunction:function(){return $e},shouldScheduleUpdate:function(){return Le},tween:function(){return Sn},unsetBezierFunction:function(){return ze}});var f={};u.r(f),u.d(f,{bounce:function(){return _e},bouncePast:function(){return qe},easeFrom:function(){return Fe},easeFromTo:function(){return We},easeInBack:function(){return se},easeInCirc:function(){return Z},easeInCubic:function(){return d},easeInExpo:function(){return W},easeInOutBack:function(){return ve},easeInOutCirc:function(){return ce},easeInOutCubic:function(){return v},easeInOutExpo:function(){return V},easeInOutQuad:function(){return m},easeInOutQuart:function(){return M},easeInOutQuint:function(){return S},easeInOutSine:function(){return O},easeInQuad:function(){return _},easeInQuart:function(){return y},easeInQuint:function(){return T},easeInSine:function(){return A},easeOutBack:function(){return me},easeOutBounce:function(){return ie},easeOutCirc:function(){return Q},easeOutCubic:function(){return x},easeOutExpo:function(){return D},easeOutQuad:function(){return g},easeOutQuart:function(){return b},easeOutQuint:function(){return I},easeOutSine:function(){return z},easeTo:function(){return Ye},elastic:function(){return J},linear:function(){return p},swingFrom:function(){return Se},swingFromTo:function(){return oe},swingTo:function(){return De}});var h={};u.r(h),u.d(h,{afterTween:function(){return xt},beforeTween:function(){return Ze},doesApply:function(){return et},tweenCreated:function(){return je}});var p=function(w){return w},_=function(w){return Math.pow(w,2)},g=function(w){return-(Math.pow(w-1,2)-1)},m=function(w){return(w/=.5)<1?.5*Math.pow(w,2):-.5*((w-=2)*w-2)},d=function(w){return Math.pow(w,3)},x=function(w){return Math.pow(w-1,3)+1},v=function(w){return(w/=.5)<1?.5*Math.pow(w,3):.5*(Math.pow(w-2,3)+2)},y=function(w){return Math.pow(w,4)},b=function(w){return-(Math.pow(w-1,4)-1)},M=function(w){return(w/=.5)<1?.5*Math.pow(w,4):-.5*((w-=2)*Math.pow(w,3)-2)},T=function(w){return Math.pow(w,5)},I=function(w){return Math.pow(w-1,5)+1},S=function(w){return(w/=.5)<1?.5*Math.pow(w,5):.5*(Math.pow(w-2,5)+2)},A=function(w){return 1-Math.cos(w*(Math.PI/2))},z=function(w){return Math.sin(w*(Math.PI/2))},O=function(w){return-.5*(Math.cos(Math.PI*w)-1)},W=function(w){return w===0?0:Math.pow(2,10*(w-1))},D=function(w){return w===1?1:1-Math.pow(2,-10*w)},V=function(w){return w===0?0:w===1?1:(w/=.5)<1?.5*Math.pow(2,10*(w-1)):.5*(2-Math.pow(2,-10*--w))},Z=function(w){return-(Math.sqrt(1-w*w)-1)},Q=function(w){return Math.sqrt(1-Math.pow(w-1,2))},ce=function(w){return(w/=.5)<1?-.5*(Math.sqrt(1-w*w)-1):.5*(Math.sqrt(1-(w-=2)*w)+1)},ie=function(w){return w<1/2.75?7.5625*w*w:w<2/2.75?7.5625*(w-=1.5/2.75)*w+.75:w<2.5/2.75?7.5625*(w-=2.25/2.75)*w+.9375:7.5625*(w-=2.625/2.75)*w+.984375},se=function(w){var B=1.70158;return w*w*((B+1)*w-B)},me=function(w){var B=1.70158;return(w-=1)*w*((B+1)*w+B)+1},ve=function(w){var B=1.70158;return(w/=.5)<1?w*w*((1+(B*=1.525))*w-B)*.5:.5*((w-=2)*w*((1+(B*=1.525))*w+B)+2)},J=function(w){return-1*Math.pow(4,-8*w)*Math.sin((6*w-1)*(2*Math.PI)/2)+1},oe=function(w){var B=1.70158;return(w/=.5)<1?w*w*((1+(B*=1.525))*w-B)*.5:.5*((w-=2)*w*((1+(B*=1.525))*w+B)+2)},Se=function(w){var B=1.70158;return w*w*((B+1)*w-B)},De=function(w){var B=1.70158;return(w-=1)*w*((B+1)*w+B)+1},_e=function(w){return w<1/2.75?7.5625*w*w:w<2/2.75?7.5625*(w-=1.5/2.75)*w+.75:w<2.5/2.75?7.5625*(w-=2.25/2.75)*w+.9375:7.5625*(w-=2.625/2.75)*w+.984375},qe=function(w){return w<1/2.75?7.5625*w*w:w<2/2.75?2-(7.5625*(w-=1.5/2.75)*w+.75):w<2.5/2.75?2-(7.5625*(w-=2.25/2.75)*w+.9375):2-(7.5625*(w-=2.625/2.75)*w+.984375)},We=function(w){return(w/=.5)<1?.5*Math.pow(w,4):-.5*((w-=2)*Math.pow(w,3)-2)},Fe=function(w){return Math.pow(w,4)},Ye=function(w){return Math.pow(w,.25)};function X(w,B,te,G,ue,Ne){var Be,rt,dt,Ft,St,Pt=0,kt=0,rn=0,gi=function(Et){return((Pt*Et+kt)*Et+rn)*Et},si=function(Et){return(3*Pt*Et+2*kt)*Et+rn},oi=function(Et){return Et>=0?Et:0-Et};return Pt=1-(rn=3*B)-(kt=3*(G-B)-rn),dt=1-(St=3*te)-(Ft=3*(ue-te)-St),Be=w,rt=function(Et){return 1/(200*Et)}(Ne),function(Et){return((dt*Et+Ft)*Et+St)*Et}(function(Et,ai){var li,vi,Jt,dn,An,qn;for(Jt=Et,qn=0;qn<8;qn++){if(dn=gi(Jt)-Et,oi(dn)<ai)return Jt;if(An=si(Jt),oi(An)<1e-6)break;Jt-=dn/An}if((Jt=Et)<(li=0))return li;if(Jt>(vi=1))return vi;for(;li<vi;){if(dn=gi(Jt),oi(dn-Et)<ai)return Jt;Et>dn?li=Jt:vi=Jt,Jt=.5*(vi-li)+li}return Jt}(Be,rt))}var Lt,Ce=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:.25,B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.25,te=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.75,G=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.75;return function(ue){return X(ue,w,B,te,G,1)}},$e=function(w,B,te,G,ue){var Ne=Ce(B,te,G,ue);return Ne.displayName=w,Ne.x1=B,Ne.y1=te,Ne.x2=G,Ne.y2=ue,ft.formulas[w]=Ne},ze=function(w){return delete ft.formulas[w]};function _t(w,B){if(!(w instanceof B))throw new TypeError("Cannot call a class as a function")}function Ke(w,B){for(var te=0;te<B.length;te++){var G=B[te];G.enumerable=G.enumerable||!1,G.configurable=!0,"value"in G&&(G.writable=!0),Object.defineProperty(w,G.key,G)}}function ke(w){return ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},ke(w)}function ot(w){return function(B){if(Array.isArray(B))return Tt(B)}(w)||function(B){if(typeof Symbol<"u"&&Symbol.iterator in Object(B))return Array.from(B)}(w)||function(B,te){if(B){if(typeof B=="string")return Tt(B,te);var G=Object.prototype.toString.call(B).slice(8,-1);return G==="Object"&&B.constructor&&(G=B.constructor.name),G==="Map"||G==="Set"?Array.from(B):G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G)?Tt(B,te):void 0}}(w)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Tt(w,B){(B==null||B>w.length)&&(B=w.length);for(var te=0,G=new Array(B);te<B;te++)G[te]=w[te];return G}function Ct(w,B){var te=Object.keys(w);if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(w);B&&(G=G.filter(function(ue){return Object.getOwnPropertyDescriptor(w,ue).enumerable})),te.push.apply(te,G)}return te}function P(w){for(var B=1;B<arguments.length;B++){var te=arguments[B]!=null?arguments[B]:{};B%2?Ct(Object(te),!0).forEach(function(G){E(w,G,te[G])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(te)):Ct(Object(te)).forEach(function(G){Object.defineProperty(w,G,Object.getOwnPropertyDescriptor(te,G))})}return w}function E(w,B,te){return B in w?Object.defineProperty(w,B,{value:te,enumerable:!0,configurable:!0,writable:!0}):w[B]=te,w}var q,le,re,fe="linear",Me=typeof window<"u"?window:u.g,pe="afterTween",ye="afterTweenEnd",N="beforeTween",de="tweenCreated",ne="function",Oe="string",Re=Me.requestAnimationFrame||Me.webkitRequestAnimationFrame||Me.oRequestAnimationFrame||Me.msRequestAnimationFrame||Me.mozCancelRequestAnimationFrame&&Me.mozRequestAnimationFrame||setTimeout,Pe=function(){},we=null,be=null,Ge=P({},f),F=function(w,B,te,G,ue,Ne,Be){var rt,dt,Ft,St=w<Ne?0:(w-Ne)/ue,Pt=!1;for(var kt in Be&&Be.call&&(Pt=!0,rt=Be(St)),B)Pt||(rt=((dt=Be[kt]).call?dt:Ge[dt])(St)),Ft=te[kt],B[kt]=Ft+(G[kt]-Ft)*rt;return B},ge=function(w,B){var te=w._timestamp,G=w._currentState,ue=w._delay;if(!(B<te+ue)){var Ne=w._duration,Be=w._targetState,rt=te+ue+Ne,dt=B>rt?rt:B;w._hasEnded=dt>=rt;var Ft=Ne-(rt-dt),St=w._filters.length>0;if(w._hasEnded)return w._render(Be,w._data,Ft),w.stop(!0);St&&w._applyFilter(N),dt<te+ue?te=Ne=dt=1:te+=ue,F(dt,G,w._originalState,Be,Ne,te,w._easing),St&&w._applyFilter(pe),w._render(G,w._data,Ft)}},ae=function(){for(var w,B=ft.now(),te=we;te;)w=te._next,ge(te,B),te=w},ee=Date.now||function(){return+new Date},he=!1,Le=function(w){w&&he||(he=w,w&&nt())},nt=function w(){q=ee(),he&&Re.call(Me,w,16.666666666666668),ae()},gt=function(w){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fe,te=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(B)){var G=Ce.apply(void 0,ot(B));return G}var ue=ke(B);if(Ge[B])return Ge[B];if(ue===Oe||ue===ne)for(var Ne in w)te[Ne]=B;else for(var Be in w)te[Be]=B[Be]||fe;return te},Vt=function(w){w===we?(we=w._next)?we._previous=null:be=null:w===be?(be=w._previous)?be._next=null:we=null:(le=w._previous,re=w._next,le._next=re,re._previous=le),w._previous=w._next=null},ht=typeof Promise=="function"?Promise:null;Lt=Symbol.toStringTag;var ft=function(){function w(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;_t(this,w),E(this,Lt,"Promise"),this._config={},this._data={},this._delay=0,this._filters=[],this._next=null,this._previous=null,this._timestamp=null,this._hasEnded=!1,this._resolve=null,this._reject=null,this._currentState=G||{},this._originalState={},this._targetState={},this._start=Pe,this._render=Pe,this._promiseCtor=ht,ue&&this.setConfig(ue)}var B,te;return B=w,te=[{key:"_applyFilter",value:function(G){for(var ue=this._filters.length;ue>0;ue--){var Ne=this._filters[ue-ue][G];Ne&&Ne(this)}}},{key:"tween",value:function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;return this._isPlaying&&this.stop(),!G&&this._config||this.setConfig(G),this._pausedAtTime=null,this._timestamp=w.now(),this._start(this.get(),this._data),this._delay&&this._render(this._currentState,this._data,0),this._resume(this._timestamp)}},{key:"setConfig",value:function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},ue=this._config;for(var Ne in G)ue[Ne]=G[Ne];var Be=ue.promise,rt=Be===void 0?this._promiseCtor:Be,dt=ue.start,Ft=dt===void 0?Pe:dt,St=ue.finish,Pt=ue.render,kt=Pt===void 0?this._config.step||Pe:Pt,rn=ue.step,gi=rn===void 0?Pe:rn;this._data=ue.data||ue.attachment||this._data,this._isPlaying=!1,this._pausedAtTime=null,this._scheduleId=null,this._delay=G.delay||0,this._start=Ft,this._render=kt||gi,this._duration=ue.duration||500,this._promiseCtor=rt,St&&(this._resolve=St);var si=G.from,oi=G.to,Et=oi===void 0?{}:oi,ai=this._currentState,li=this._originalState,vi=this._targetState;for(var Jt in si)ai[Jt]=si[Jt];var dn=!1;for(var An in ai){var qn=ai[An];dn||ke(qn)!==Oe||(dn=!0),li[An]=qn,vi[An]=Et.hasOwnProperty(An)?Et[An]:qn}if(this._easing=gt(this._currentState,ue.easing,this._easing),this._filters.length=0,dn){for(var wr in w.filters)w.filters[wr].doesApply(this)&&this._filters.push(w.filters[wr]);this._applyFilter(de)}return this}},{key:"then",value:function(G,ue){var Ne=this;return this._promise=new this._promiseCtor(function(Be,rt){Ne._resolve=Be,Ne._reject=rt}),this._promise.then(G,ue)}},{key:"catch",value:function(G){return this.then().catch(G)}},{key:"finally",value:function(G){return this.then().finally(G)}},{key:"get",value:function(){return P({},this._currentState)}},{key:"set",value:function(G){this._currentState=G}},{key:"pause",value:function(){if(this._isPlaying)return this._pausedAtTime=w.now(),this._isPlaying=!1,Vt(this),this}},{key:"resume",value:function(){return this._resume()}},{key:"_resume",value:function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:w.now();return this._timestamp===null?this.tween():this._isPlaying?this._promise:(this._pausedAtTime&&(this._timestamp+=G-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,we===null?(we=this,be=this):(this._previous=be,be._next=this,be=this),this)}},{key:"seek",value:function(G){G=Math.max(G,0);var ue=w.now();return this._timestamp+G===0||(this._timestamp=ue-G,ge(this,ue)),this}},{key:"stop",value:function(){var G=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(!this._isPlaying)return this;this._isPlaying=!1,Vt(this);var ue=this._filters.length>0;return G&&(ue&&this._applyFilter(N),F(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),ue&&(this._applyFilter(pe),this._applyFilter(ye))),this._resolve&&this._resolve({data:this._data,state:this._currentState,tweenable:this}),this._resolve=null,this._reject=null,this}},{key:"cancel",value:function(){var G=arguments.length>0&&arguments[0]!==void 0&&arguments[0],ue=this._currentState,Ne=this._data,Be=this._isPlaying;return Be?(this._reject&&this._reject({data:Ne,state:ue,tweenable:this}),this._resolve=null,this._reject=null,this.stop(G)):this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"hasEnded",value:function(){return this._hasEnded}},{key:"setScheduleFunction",value:function(G){w.setScheduleFunction(G)}},{key:"data",value:function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return G&&(this._data=P({},G)),this._data}},{key:"dispose",value:function(){for(var G in this)delete this[G]}}],te&&Ke(B.prototype,te),w}();function Sn(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},B=new ft;return B.tween(w),B.tweenable=B,B}E(ft,"now",function(){return q}),E(ft,"setScheduleFunction",function(w){return Re=w}),E(ft,"filters",{}),E(ft,"formulas",Ge),Le(!0);var ii,ln,Ii=/(\d|-|\.)/,yr=/([^\-0-9.]+)/g,ri=/[0-9.-]+/g,br=(ii=ri.source,ln=/,\s*/.source,new RegExp("rgba?\\(".concat(ii).concat(ln).concat(ii).concat(ln).concat(ii,"(").concat(ln).concat(ii,")?\\)"),"g")),Sr=/^.*\(/,Xn=/#([0-9]|[a-f]){3,6}/gi,Ni="VAL",Es=function(w,B){return w.map(function(te,G){return"_".concat(B,"_").concat(G)})};function R(w){return parseInt(w,16)}var H=function(w){return"rgb(".concat((B=w,(B=B.replace(/#/,"")).length===3&&(B=(B=B.split(""))[0]+B[0]+B[1]+B[1]+B[2]+B[2]),[R(B.substr(0,2)),R(B.substr(2,2)),R(B.substr(4,2))]).join(","),")");var B},j=function(w,B,te){var G=B.match(w),ue=B.replace(w,Ni);return G&&G.forEach(function(Ne){return ue=ue.replace(Ni,te(Ne))}),ue},K=function(w){for(var B in w){var te=w[B];typeof te=="string"&&te.match(Xn)&&(w[B]=j(Xn,te,H))}},Y=function(w){var B=w.match(ri),te=B.slice(0,3).map(Math.floor),G=w.match(Sr)[0];if(B.length===3)return"".concat(G).concat(te.join(","),")");if(B.length===4)return"".concat(G).concat(te.join(","),",").concat(B[3],")");throw new Error("Invalid rgbChunk: ".concat(w))},Ee=function(w){return w.match(ri)},Ie=function(w,B){var te={};return B.forEach(function(G){te[G]=w[G],delete w[G]}),te},He=function(w,B){return B.map(function(te){return w[te]})},Xe=function(w,B){return B.forEach(function(te){return w=w.replace(Ni,+te.toFixed(4))}),w},et=function(w){for(var B in w._currentState)if(typeof w._currentState[B]=="string")return!0;return!1};function je(w){var B=w._currentState;[B,w._originalState,w._targetState].forEach(K),w._tokenData=function(te){var G,ue,Ne={};for(var Be in te){var rt=te[Be];typeof rt=="string"&&(Ne[Be]={formatString:(G=rt,ue=void 0,ue=G.match(yr),ue?(ue.length===1||G.charAt(0).match(Ii))&&ue.unshift(""):ue=["",""],ue.join(Ni)),chunkNames:Es(Ee(rt),Be)})}return Ne}(B)}function Ze(w){var B=w._currentState,te=w._originalState,G=w._targetState,ue=w._easing,Ne=w._tokenData;(function(Be,rt){var dt=function(St){var Pt=rt[St].chunkNames,kt=Be[St];if(typeof kt=="string"){var rn=kt.split(" "),gi=rn[rn.length-1];Pt.forEach(function(si,oi){return Be[si]=rn[oi]||gi})}else Pt.forEach(function(si){return Be[si]=kt});delete Be[St]};for(var Ft in rt)dt(Ft)})(ue,Ne),[B,te,G].forEach(function(Be){return function(rt,dt){var Ft=function(Pt){Ee(rt[Pt]).forEach(function(kt,rn){return rt[dt[Pt].chunkNames[rn]]=+kt}),delete rt[Pt]};for(var St in dt)Ft(St)}(Be,Ne)})}function xt(w){var B=w._currentState,te=w._originalState,G=w._targetState,ue=w._easing,Ne=w._tokenData;[B,te,G].forEach(function(Be){return function(rt,dt){for(var Ft in dt){var St=dt[Ft],Pt=St.chunkNames,kt=St.formatString,rn=Xe(kt,He(Ie(rt,Pt),Pt));rt[Ft]=j(br,rn,Y)}}(Be,Ne)}),function(Be,rt){for(var dt in rt){var Ft=rt[dt].chunkNames,St=Be[Ft[0]];Be[dt]=typeof St=="string"?Ft.map(function(Pt){var kt=Be[Pt];return delete Be[Pt],kt}).join(" "):St}}(ue,Ne)}function Gt(w,B){var te=Object.keys(w);if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(w);B&&(G=G.filter(function(ue){return Object.getOwnPropertyDescriptor(w,ue).enumerable})),te.push.apply(te,G)}return te}function zt(w){for(var B=1;B<arguments.length;B++){var te=arguments[B]!=null?arguments[B]:{};B%2?Gt(Object(te),!0).forEach(function(G){cn(w,G,te[G])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(te)):Gt(Object(te)).forEach(function(G){Object.defineProperty(w,G,Object.getOwnPropertyDescriptor(te,G))})}return w}function cn(w,B,te){return B in w?Object.defineProperty(w,B,{value:te,enumerable:!0,configurable:!0,writable:!0}):w[B]=te,w}var at=new ft,Qe=ft.filters,Ji=function(w,B,te,G){var ue=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,Ne=zt({},w),Be=gt(w,G);for(var rt in at._filters.length=0,at.set({}),at._currentState=Ne,at._originalState=w,at._targetState=B,at._easing=Be,Qe)Qe[rt].doesApply(at)&&at._filters.push(Qe[rt]);at._applyFilter("tweenCreated"),at._applyFilter("beforeTween");var dt=F(te,Ne,w,B,1,ue,Be);return at._applyFilter("afterTween"),dt};function yt(w,B){(B==null||B>w.length)&&(B=w.length);for(var te=0,G=new Array(B);te<B;te++)G[te]=w[te];return G}function Fn(w,B){if(!(w instanceof B))throw new TypeError("Cannot call a class as a function")}function Er(w,B){for(var te=0;te<B.length;te++){var G=B[te];G.enumerable=G.enumerable||!1,G.configurable=!0,"value"in G&&(G.writable=!0),Object.defineProperty(w,G.key,G)}}function Qt(w,B){var te=B.get(w);if(!te)throw new TypeError("attempted to get private field on non-instance");return te.get?te.get.call(w):te.value}var nn=new WeakMap,Wt=function(){function w(){Fn(this,w),nn.set(this,{writable:!0,value:[]});for(var G=arguments.length,ue=new Array(G),Ne=0;Ne<G;Ne++)ue[Ne]=arguments[Ne];ue.forEach(this.add.bind(this))}var B,te;return B=w,(te=[{key:"add",value:function(G){return Qt(this,nn).push(G),G}},{key:"remove",value:function(G){var ue=Qt(this,nn).indexOf(G);return~ue&&Qt(this,nn).splice(ue,1),G}},{key:"empty",value:function(){return this.tweenables.map(this.remove.bind(this))}},{key:"isPlaying",value:function(){return Qt(this,nn).some(function(G){return G.isPlaying()})}},{key:"play",value:function(){return Qt(this,nn).forEach(function(G){return G.tween()}),this}},{key:"pause",value:function(){return Qt(this,nn).forEach(function(G){return G.pause()}),this}},{key:"resume",value:function(){return this.playingTweenables.forEach(function(G){return G.resume()}),this}},{key:"stop",value:function(G){return Qt(this,nn).forEach(function(ue){return ue.stop(G)}),this}},{key:"tweenables",get:function(){return function(ue){if(Array.isArray(ue))return yt(ue)}(G=Qt(this,nn))||function(ue){if(typeof Symbol<"u"&&Symbol.iterator in Object(ue))return Array.from(ue)}(G)||function(ue,Ne){if(ue){if(typeof ue=="string")return yt(ue,Ne);var Be=Object.prototype.toString.call(ue).slice(8,-1);return Be==="Object"&&ue.constructor&&(Be=ue.constructor.name),Be==="Map"||Be==="Set"?Array.from(ue):Be==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Be)?yt(ue,Ne):void 0}}(G)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}();var G}},{key:"playingTweenables",get:function(){return Qt(this,nn).filter(function(G){return!G.hasEnded()})}},{key:"promises",get:function(){return Qt(this,nn).map(function(G){return G.then()})}}])&&Er(B.prototype,te),w}();ft.filters.token=h}},o={};function a(l){if(o[l])return o[l].exports;var c=o[l]={exports:{}};return s[l](c,c.exports,a),c.exports}return a.d=function(l,c){for(var u in c)a.o(c,u)&&!a.o(l,u)&&Object.defineProperty(l,u,{enumerable:!0,get:c[u]})},a.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),a.o=function(l,c){return Object.prototype.hasOwnProperty.call(l,c)},a.r=function(l){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},a(720)}()})},{}],3:[function(t,n,i){var s=t("./shape"),o=t("./utils"),a=function(c,u){this._pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",this.containerAspectRatio=1,s.apply(this,arguments)};a.prototype=new s,a.prototype.constructor=a,a.prototype._pathString=function(c){var u=c.strokeWidth;c.trailWidth&&c.trailWidth>c.strokeWidth&&(u=c.trailWidth);var f=50-u/2;return o.render(this._pathTemplate,{radius:f,"2radius":f*2})},a.prototype._trailString=function(c){return this._pathString(c)},n.exports=a},{"./shape":8,"./utils":10}],4:[function(t,n,i){var s=t("./shape"),o=t("./utils"),a=function(c,u){this._pathTemplate=u.vertical?"M {center},100 L {center},0":"M 0,{center} L 100,{center}",s.apply(this,arguments)};a.prototype=new s,a.prototype.constructor=a,a.prototype._initializeSvg=function(c,u){var f=u.vertical?"0 0 "+u.strokeWidth+" 100":"0 0 100 "+u.strokeWidth;c.setAttribute("viewBox",f),c.setAttribute("preserveAspectRatio","none")},a.prototype._pathString=function(c){return o.render(this._pathTemplate,{center:c.strokeWidth/2})},a.prototype._trailString=function(c){return this._pathString(c)},n.exports=a},{"./shape":8,"./utils":10}],5:[function(t,n,i){n.exports={Line:t("./line"),Circle:t("./circle"),SemiCircle:t("./semicircle"),Square:t("./square"),Path:t("./path"),Shape:t("./shape"),utils:t("./utils")}},{"./circle":3,"./line":4,"./path":6,"./semicircle":7,"./shape":8,"./square":9,"./utils":10}],6:[function(t,n,i){var s=t("shifty"),o=t("./utils"),a=s.Tweenable,l={easeIn:"easeInCubic",easeOut:"easeOutCubic",easeInOut:"easeInOutCubic"},c=function u(f,h){if(!(this instanceof u))throw new Error("Constructor was called without new keyword");h=o.extend({delay:0,duration:800,easing:"linear",from:{},to:{},step:function(){}},h);var p;o.isString(f)?p=document.querySelector(f):p=f,this.path=p,this._opts=h,this._tweenable=null;var _=this.path.getTotalLength();this.path.style.strokeDasharray=_+" "+_,this.set(0)};c.prototype.value=function(){var f=this._getComputedDashOffset(),h=this.path.getTotalLength(),p=1-f/h;return parseFloat(p.toFixed(6),10)},c.prototype.set=function(f){this.stop(),this.path.style.strokeDashoffset=this._progressToOffset(f);var h=this._opts.step;if(o.isFunction(h)){var p=this._easing(this._opts.easing),_=this._calculateTo(f,p),g=this._opts.shape||this;h(_,g,this._opts.attachment)}},c.prototype.stop=function(){this._stopTween(),this.path.style.strokeDashoffset=this._getComputedDashOffset()},c.prototype.animate=function(f,h,p){h=h||{},o.isFunction(h)&&(p=h,h={});var _=o.extend({},h),g=o.extend({},this._opts);h=o.extend(g,h);var m=this._easing(h.easing),d=this._resolveFromAndTo(f,m,_);this.stop(),this.path.getBoundingClientRect();var x=this._getComputedDashOffset(),v=this._progressToOffset(f),y=this;this._tweenable=new a,this._tweenable.tween({from:o.extend({offset:x},d.from),to:o.extend({offset:v},d.to),duration:h.duration,delay:h.delay,easing:m,step:function(b){y.path.style.strokeDashoffset=b.offset;var M=h.shape||y;h.step(b,M,h.attachment)}}).then(function(b){o.isFunction(p)&&p()}).catch(function(b){throw console.error("Error in tweening:",b),b})},c.prototype._getComputedDashOffset=function(){var f=window.getComputedStyle(this.path,null);return parseFloat(f.getPropertyValue("stroke-dashoffset"),10)},c.prototype._progressToOffset=function(f){var h=this.path.getTotalLength();return h-f*h},c.prototype._resolveFromAndTo=function(f,h,p){return p.from&&p.to?{from:p.from,to:p.to}:{from:this._calculateFrom(h),to:this._calculateTo(f,h)}},c.prototype._calculateFrom=function(f){return s.interpolate(this._opts.from,this._opts.to,this.value(),f)},c.prototype._calculateTo=function(f,h){return s.interpolate(this._opts.from,this._opts.to,f,h)},c.prototype._stopTween=function(){this._tweenable!==null&&(this._tweenable.stop(!0),this._tweenable=null)},c.prototype._easing=function(f){return l.hasOwnProperty(f)?l[f]:f},n.exports=c},{"./utils":10,shifty:2}],7:[function(t,n,i){var s=t("./shape"),o=t("./circle"),a=t("./utils"),l=function(u,f){this._pathTemplate="M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",this.containerAspectRatio=2,s.apply(this,arguments)};l.prototype=new s,l.prototype.constructor=l,l.prototype._initializeSvg=function(u,f){u.setAttribute("viewBox","0 0 100 50")},l.prototype._initializeTextContainer=function(u,f,h){u.text.style&&(h.style.top="auto",h.style.bottom="0",u.text.alignToBottom?a.setStyle(h,"transform","translate(-50%, 0)"):a.setStyle(h,"transform","translate(-50%, 50%)"))},l.prototype._pathString=o.prototype._pathString,l.prototype._trailString=o.prototype._trailString,n.exports=l},{"./circle":3,"./shape":8,"./utils":10}],8:[function(t,n,i){var s=t("./path"),o=t("./utils"),a="Object is destroyed",l=function c(u,f){if(!(this instanceof c))throw new Error("Constructor was called without new keyword");if(arguments.length!==0){this._opts=o.extend({color:"#555",strokeWidth:1,trailColor:null,trailWidth:null,fill:null,text:{style:{color:null,position:"absolute",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},autoStyleContainer:!0,alignToBottom:!0,value:null,className:"progressbar-text"},svgStyle:{display:"block",width:"100%"},warnings:!1},f,!0),o.isObject(f)&&f.svgStyle!==void 0&&(this._opts.svgStyle=f.svgStyle),o.isObject(f)&&o.isObject(f.text)&&f.text.style!==void 0&&(this._opts.text.style=f.text.style);var h=this._createSvgView(this._opts),p;if(o.isString(u)?p=document.querySelector(u):p=u,!p)throw new Error("Container does not exist: "+u);this._container=p,this._container.appendChild(h.svg),this._opts.warnings&&this._warnContainerAspectRatio(this._container),this._opts.svgStyle&&o.setStyles(h.svg,this._opts.svgStyle),this.svg=h.svg,this.path=h.path,this.trail=h.trail,this.text=null;var _=o.extend({attachment:void 0,shape:this},this._opts);this._progressPath=new s(h.path,_),o.isObject(this._opts.text)&&this._opts.text.value!==null&&this.setText(this._opts.text.value)}};l.prototype.animate=function(u,f,h){if(this._progressPath===null)throw new Error(a);this._progressPath.animate(u,f,h)},l.prototype.stop=function(){if(this._progressPath===null)throw new Error(a);this._progressPath!==void 0&&this._progressPath.stop()},l.prototype.pause=function(){if(this._progressPath===null)throw new Error(a);this._progressPath!==void 0&&this._progressPath._tweenable&&this._progressPath._tweenable.pause()},l.prototype.resume=function(){if(this._progressPath===null)throw new Error(a);this._progressPath!==void 0&&this._progressPath._tweenable&&this._progressPath._tweenable.resume()},l.prototype.destroy=function(){if(this._progressPath===null)throw new Error(a);this.stop(),this.svg.parentNode.removeChild(this.svg),this.svg=null,this.path=null,this.trail=null,this._progressPath=null,this.text!==null&&(this.text.parentNode.removeChild(this.text),this.text=null)},l.prototype.set=function(u){if(this._progressPath===null)throw new Error(a);this._progressPath.set(u)},l.prototype.value=function(){if(this._progressPath===null)throw new Error(a);return this._progressPath===void 0?0:this._progressPath.value()},l.prototype.setText=function(u){if(this._progressPath===null)throw new Error(a);this.text===null&&(this.text=this._createTextContainer(this._opts,this._container),this._container.appendChild(this.text)),o.isObject(u)?(o.removeChildren(this.text),this.text.appendChild(u)):this.text.innerHTML=u},l.prototype._createSvgView=function(u){var f=document.createElementNS("http://www.w3.org/2000/svg","svg");this._initializeSvg(f,u);var h=null;(u.trailColor||u.trailWidth)&&(h=this._createTrail(u),f.appendChild(h));var p=this._createPath(u);return f.appendChild(p),{svg:f,path:p,trail:h}},l.prototype._initializeSvg=function(u,f){u.setAttribute("viewBox","0 0 100 100")},l.prototype._createPath=function(u){var f=this._pathString(u);return this._createPathElement(f,u)},l.prototype._createTrail=function(u){var f=this._trailString(u),h=o.extend({},u);return h.trailColor||(h.trailColor="#eee"),h.trailWidth||(h.trailWidth=h.strokeWidth),h.color=h.trailColor,h.strokeWidth=h.trailWidth,h.fill=null,this._createPathElement(f,h)},l.prototype._createPathElement=function(u,f){var h=document.createElementNS("http://www.w3.org/2000/svg","path");return h.setAttribute("d",u),h.setAttribute("stroke",f.color),h.setAttribute("stroke-width",f.strokeWidth),f.fill?h.setAttribute("fill",f.fill):h.setAttribute("fill-opacity","0"),h},l.prototype._createTextContainer=function(u,f){var h=document.createElement("div");h.className=u.text.className;var p=u.text.style;return p&&(u.text.autoStyleContainer&&(f.style.position="relative"),o.setStyles(h,p),p.color||(h.style.color=u.color)),this._initializeTextContainer(u,f,h),h},l.prototype._initializeTextContainer=function(c,u,f){},l.prototype._pathString=function(u){throw new Error("Override this function for each progress bar")},l.prototype._trailString=function(u){throw new Error("Override this function for each progress bar")},l.prototype._warnContainerAspectRatio=function(u){if(this.containerAspectRatio){var f=window.getComputedStyle(u,null),h=parseFloat(f.getPropertyValue("width"),10),p=parseFloat(f.getPropertyValue("height"),10);o.floatEquals(this.containerAspectRatio,h/p)||(console.warn("Incorrect aspect ratio of container","#"+u.id,"detected:",f.getPropertyValue("width")+"(width)","/",f.getPropertyValue("height")+"(height)","=",h/p),console.warn("Aspect ratio of should be",this.containerAspectRatio))}},n.exports=l},{"./path":6,"./utils":10}],9:[function(t,n,i){var s=t("./shape"),o=t("./utils"),a=function(c,u){this._pathTemplate="M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}",this._trailTemplate="M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}",s.apply(this,arguments)};a.prototype=new s,a.prototype.constructor=a,a.prototype._pathString=function(c){var u=100-c.strokeWidth/2;return o.render(this._pathTemplate,{width:u,strokeWidth:c.strokeWidth,halfOfStrokeWidth:c.strokeWidth/2})},a.prototype._trailString=function(c){var u=100-c.strokeWidth/2;return o.render(this._trailTemplate,{width:u,strokeWidth:c.strokeWidth,halfOfStrokeWidth:c.strokeWidth/2,startMargin:c.strokeWidth/2-c.trailWidth/2})},n.exports=a},{"./shape":8,"./utils":10}],10:[function(t,n,i){var s=t("lodash.merge"),o="Webkit Moz O ms".split(" "),a=.001;function l(v,y){var b=v;for(var M in y)if(y.hasOwnProperty(M)){var T=y[M],I="\\{"+M+"\\}",S=new RegExp(I,"g");b=b.replace(S,T)}return b}function c(v,y,b){for(var M=v.style,T=0;T<o.length;++T){var I=o[T];M[I+f(y)]=b}M[y]=b}function u(v,y){m(y,function(b,M){b!=null&&(g(b)&&b.prefix===!0?c(v,M,b.value):v.style[M]=b)})}function f(v){return v.charAt(0).toUpperCase()+v.slice(1)}function h(v){return typeof v=="string"||v instanceof String}function p(v){return typeof v=="function"}function _(v){return Object.prototype.toString.call(v)==="[object Array]"}function g(v){if(_(v))return!1;var y=typeof v;return y==="object"&&!!v}function m(v,y){for(var b in v)if(v.hasOwnProperty(b)){var M=v[b];y(M,b)}}function d(v,y){return Math.abs(v-y)<a}function x(v){for(;v.firstChild;)v.removeChild(v.firstChild)}n.exports={extend:s,render:l,setStyle:c,setStyles:u,capitalize:f,isString:h,isFunction:p,isObject:g,forEachObject:m,floatEquals:d,removeChildren:x}},{"lodash.merge":1}]},{},[5])(5)})})(Kf);var Mb=Kf.exports;class Tb{constructor(){this.result=null,this.loader=new hx}reset(){this.result=null}async load(e){this.result&&Promise.resolve(this.result);let t=await this.loader.loadAsync(e),n=Array.isArray(t.scene)?t.scene:[t.scene];const i=[];for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(a=>{a.isMesh&&i.push(a)});if(i.length>0){const s=new ib(i);s.attributes=["position","color","normal","tangent","uv","uv2"],s.applyWorldTransforms=!1;let o=new Mn(s.generate(),new Ri),a=new mc(o.geometry,{strategy:Gf,maxLeafTris:1});this.result={scene:t.scene,bvh:a,mesh:o},console.log("==> loaded mesh ",e)}return this.result}}function Bn(r){return new C(r[0],r[1],r[2])}const k={scene_name:"standard-shader-ball",smooth_normals:!0,bounces:6,max_samples:1024,max_volume_steps:8,wireframe:!1,neutral_color:[.5,.5,.5],skyPower:.5,skyColor:[.8,.8,1],sunPower:.35,sunAngularSize:40,sunLatitude:40,sunLongitude:180,sunColor:[1,1,.8],base_weight:1,base_color:[.8,.8,.8],base_roughness:0,base_metalness:0,diffuse_mode:8,specular_weight:1,specular_color:[1,1,1],specular_roughness:.1,specular_anisotropy:0,specular_rotation:0,specular_ior:1.6,transmission_weight:0,transmission_color:[1,1,1],transmission_depth:0,transmission_scatter:[0,0,0],transmission_scatter_anisotropy:0,transmission_dispersion_abbe_number:20,transmission_dispersion_scale:0,subsurface_weight:0,subsurface_color:[.8,.8,.8],subsurface_radius:.2,subsurface_radius_scale:[1,.5,.25],subsurface_anisotropy:0,subsurface_mode:0,coat_weight:0,coat_color:[1,1,1],coat_roughness:0,coat_anisotropy:0,coat_rotation:0,coat_ior:1.3,coat_darkening:1,fuzz_weight:0,fuzz_color:[1,1,1],fuzz_roughness:.5,emission_luminance:0,emission_color:[1,1,1],thin_film_weight:0,thin_film_thickness:1e3,thin_film_ior:1.4,geometry_opacity:1,geometry_thin_walled:!1,reset_camera:function(){vc(k.scene_name)}};let qt,Mt,Ot,Li,Xi,as,_a,Je,Zf,io,ur=0,es,ts,Kl,Zl;var gn,gc,ro,Ks,Ab={"Standard Shader Ball":"standard-shader-ball",Glavenus:"glavenus",Terrain:"terrain","Bearded Man":"bearded-man"},Rb={"OpenPBR (orig, 3-float)":0,"OpenPBR (luminace)":1,"OpenPBR (average)":2,"OpenPBR (max value)":3,"OpenPBR (weighted average)":4,"SPI / Arnold v1":5,"Arnold v2":6,"Uniform scattering":7},Lb={Lambert:0,"ON Full (Mitsuba)":1,"ON Qualitative (QON)":2,"ON Qualitative - Energy Conserving (EQON exact)":3,"ON Qualitative - Energy Conserving (EQON approx)":4,"Fujii - Qualitative (FON)":5,"Fujii - Energy Conserving (EFON exact)":6,"Fujii - Energy Conserving (EFON approx)":7,"Fujii - Energy Conserving (EFON exact, LTC sampling)":8,"Fujii - Energy Conserving (EFON approx, LTC sampling)":9,"Fujii - MaterialX":10,"Chan Diffuse (Unreal)":11,"d'Eon sphere model":12};Db();Zs();function Cb(){let r=(90-k.sunLatitude)*Math.PI/180,e=k.sunLongitude*Math.PI/180,t=Math.cos(r),n=Math.sin(r),i=Math.cos(e),s=Math.sin(e),o=n*i,a=n*s,l=t;k.sunDir=[o,l,a]}function Pb(){Li=new yv;const r=new Bf(16777215,1);return r.position.set(1,1,1),Li.add(r),Li.add(new $v(11583173,.5)),Li}function Db(){gn=new Mb.Circle("#progress_overlay",{color:"rgba(255, 128, 64, 0.75)",strokeWidth:5,trailColor:"rgba(255, 128, 64, 0.333)",trailWidth:3,svgStyle:{display:"block",width:"100%"},text:{value:"",className:"progressbar__label",style:{color:"rgba(169, 85, 42, 1.0)",position:"absolute",fontWeight:"bold",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},autoStyleContainer:!0,alignToBottom:!0},fill:null,duration:2e3,easing:"linear",from:{color:"rgba( 0,   0,  0, 0.0)"},to:{color:"rgba(32, 255, 32, 1.0)"},warnings:!0}),gn.set(0),gn.setText(""),ro=!1,es=null,ts=null,Kl=null,Zl=null,qt=new Pf({antialias:!0,preserveDrawingBuffer:!0}),qt.setPixelRatio(window.devicePixelRatio),qt.setClearColor(594970),qt.setSize(window.innerWidth,window.innerHeight),qt.outputEncoding=$i,document.body.appendChild(qt.domElement),Li=Pb(),as=new jx,document.body.appendChild(as.dom);let r=document.getElementById("samples");r.style.visibility="visible";let e=document.getElementById("info");e.style.visibility="visible",Je=new Zi({defines:{BOUNCES:k.bounces,MAX_VOLUME_STEPS:k.max_volume_steps,COAT_ENABLED:!1,TRANSMISSION_ENABLED:!1,VOLUME_ENABLED:!1,DISPERSION_ENABLED:!1,THIN_FILM_ENABLED:!1},uniforms:{bvh_surface:{value:new kh},normalAttribute_surface:{value:new Vs},tangentAttribute_surface:{value:new Vs},has_normals_surface:{value:1},has_tangents_surface:{value:0},bvh_props:{value:new kh},normalAttribute_props:{value:new Vs},tangentAttribute_props:{value:new Vs},has_normals_props:{value:1},has_tangents_props:{value:0},cameraWorldMatrix:{value:new Ve},invProjectionMatrix:{value:new Ve},invModelMatrix:{value:new Ve},resolution:{value:new Ue},samples:{value:0},accumulation_weight:{value:1},wireframe:{value:k.wireframe},neutral_color:{value:new C().fromArray(k.neutral_color)},smooth_normals:{value:k.smooth_normals},skyPower:{value:k.skyPower},skyColor:{value:Bn(k.skyColor)},sunPower:{value:Math.pow(10,k.sunPower)},sunAngularSize:{value:k.sunAngularSize},sunColor:{value:Bn(k.sunColor)},sunDir:{value:Bn([0,0,0])},diffuse_mode:{value:k.diffuse_mode},base_weight:{value:k.base_weight},base_color:{value:Bn(k.base_color)},base_roughness:{value:k.base_roughness},base_metalness:{value:k.base_metalness},specular_weight:{value:k.specular_weight},specular_color:{value:Bn(k.specular_color)},specular_roughness:{value:k.specular_roughness},specular_anisotropy:{value:k.specular_anisotropy},specular_rotation:{value:k.specular_rotation},specular_ior:{value:k.specular_ior},transmission_weight:{value:k.transmission_weight},transmission_color:{value:Bn(k.transmission_color)},transmission_depth:{value:k.transmission_depth},transmission_scatter:{value:Bn(k.transmission_scatter)},transmission_scatter_anisotropy:{value:k.transmission_scatter_anisotropy},transmission_dispersion_abbe_number:{value:k.transmission_dispersion_abbe_number},transmission_dispersion_scale:{value:k.transmission_dispersion_scale},subsurface_weight:{value:k.subsurface_weight},subsurface_color:{value:Bn(k.subsurface_color)},subsurface_radius:{value:k.subsurface_radius},subsurface_radius_scale:{value:Bn(k.subsurface_radius_scale)},subsurface_anisotropy:{value:k.subsurface_anisotropy},subsurface_mode:{value:k.subsurface_mode},coat_weight:{value:k.coat_weight},coat_color:{value:Bn(k.coat_color)},coat_roughness:{value:k.coat_roughness},coat_anisotropy:{value:k.coat_anisotropy},coat_rotation:{value:k.coat_rotation},coat_ior:{value:k.coat_ior},coat_darkening:{value:k.coat_darkening},fuzz_weight:{value:k.fuzz_weight},fuzz_color:{value:Bn(k.fuzz_color)},fuzz_roughness:{value:k.fuzz_roughness},emission_luminance:{value:k.emission_luminance},emission_color:{value:Bn(k.emission_color)},thin_film_weight:{value:k.thin_film_weight},thin_film_thickness:{value:k.thin_film_thickness},thin_film_ior:{value:k.thin_film_ior},geometry_opacity:{value:k.geometry_opacity},geometry_thin_walled:{value:k.geometry_thin_walled}},vertexShader:`
            varying vec2 vUv;
            void main()
            {
                vec4 mvPosition = vec4( position, 1.0 );
                mvPosition = modelViewMatrix * mvPosition;
                gl_Position = projectionMatrix * mvPosition;
                vUv = uv;
            }
        `,fragmentShader:`precision highp isampler2D;
                         precision highp usampler2D;
                         precision highp int;
                         ${Zy}
                         ${Qy}
                        `+_b+gb+vb+yb+bb+xb+Sb+Eb+wb}),Qf(k.scene_name)}function Qf(r){const e=new Tb;ro=!1,gn.setText("loading meshes..."),gn.animate(0),e.load(r+"/neutral_objects.glb").then(()=>{Li.add(e.result.scene),ts=e.result.mesh,Zl=e.result.bvh,Je.uniforms.bvh_props.value.updateFrom(Zl),Je.uniforms.has_normals_props.value=!1,Je.uniforms.has_tangents_props.value=!1,ts.geometry.attributes.normal&&(Je.uniforms.normalAttribute_props.value.updateFrom(ts.geometry.attributes.normal),Je.uniforms.has_normals_props.value=!0),ts.geometry.attributes.tangent&&(Je.uniforms.tangentAttribute_props.value.updateFrom(ts.geometry.attributes.tangent),Je.uniforms.has_tangents_props.value=!0),console.log("  has_normals_scene:  ",Je.uniforms.has_normals_props),console.log("  has_tangents_scene: ",Je.uniforms.has_tangents_props),gn.animate(.5),e.reset(),e.load(r+"/openpbr_objects.glb").then(()=>{Li.add(e.result.scene),es=e.result.mesh,Kl=e.result.bvh,Je.uniforms.bvh_surface.value.updateFrom(Kl),Je.uniforms.has_normals_surface.value=!1,Je.uniforms.has_tangents_surface.value=!1,es.geometry.attributes.normal&&(Je.uniforms.normalAttribute_surface.value.updateFrom(es.geometry.attributes.normal),Je.uniforms.has_normals_surface.value=!0),es.geometry.attributes.tangent&&(Je.uniforms.tangentAttribute_surface.value.updateFrom(es.geometry.attributes.tangent),Je.uniforms.has_tangents_surface.value=!0),console.log("  has_normals_surface:  ",Je.uniforms.has_normals_surface),console.log("  has_tangents_surface: ",Je.uniforms.has_tangents_surface),console.log("===> LOADED"),ro=!0,Ib(),gn.animate(1),document.getElementById("progress_overlay"),gc=performance.now()})})}function vc(r){let e=23.6701655,t=.01,n=1e3;Mt=new _n(e,window.innerWidth/window.innerHeight,t,n),Ot=new ax(Mt,qt.domElement),Ot.addEventListener("change",()=>{Ae()});let i=new Ve;r=="standard-shader-ball"?i.set(.9396926207859084,0,-.3420201433256687,0,-.2203032561704394,.7649214009184319,-.6052782217606094,0,.26161852717499334,.6441236297613865,.7187909959242699,0,6.531538924716362,19.5,17.948521838355774,1):r=="glavenus"?i.set(.4848291963218869,-6938893903907228e-33,-.8746088556571293,0,-.07533009256065425,.9962839037303908,-.041758356319859954,0,.8713587249512548,.08613003638530015,.4830275243540376,0,23.076273094000275,6.7653774216248,14.822630983786677,1):r=="terrain"?i.set(.7242953632536803,-11102230246251565e-32,-.6894898307946385,0,-.4511571209928634,.7562050657737049,-.4739315886028461,0,.5213957028463604,.6543346991396579,.5477158228088388,0,8.561709328489492,11.460860759783042,8.95672568146927,1):r=="bearded-man"&&i.set(.6586894440882616,-13877787807814457e-33,.752414922929295,0,.13367205033823076,.9840924050751759,-.11702102901499911,0,-.7404458111199431,.17765736200156684,.648211279230448,0,-20.089277049402824,9.131027464916848,18.02162149148976,1),i.transpose(),Mt.matrixAutoUpdate=!1,Mt.applyMatrix4(i),Mt.matrixAutoUpdate=!0,Mt.updateMatrixWorld();let s=new C;Mt.getWorldDirection(s);let o=Mt.position.clone();o.addScaledVector(s,23.39613),Ot.target.copy(o),Ot.zoomSpeed=1.5,Ot.flySpeed=.01,Ot.update()}function jh(){return k.coat_weight!=0}function Vi(){return k.base_metalness==1?!1:k.transmission_weight>0&&k.transmission_depth>0||k.subsurface_weight>0}function ra(){return k.transmission_weight>0||k.subsurface_weight>0}function Yh(){return k.transmission_dispersion_scale>0}function $h(){return k.thin_film_weight>0}function Ib(){_a=new gh(Je),Je.transparent=!0,Je.depthWrite=!1,io=new Ki(1,1,{format:sn,type:vn}),Zf=new gh(new Ri({map:io.texture})),zn(),vc(k.scene_name),Xi=new _c({width:300});const r=Xi.addFolder("Material"),e=r.addFolder("Base");e.add(k,"base_weight",0,1).onChange(h=>{Ae()}),e.addColor(k,"base_color").onChange(h=>{Ae()}),e.add(k,"base_roughness",0,1).onChange(h=>{Ae()}),e.add(k,"base_metalness",0,1).onChange(h=>{Ae(),Vi()!=Je.defines.VOLUME_ENABLED&&(Je.defines.VOLUME_ENABLED=Vi(),zn())}),e.add(k,"diffuse_mode",Lb).onChange(h=>{Ae()});const t=r.addFolder("Specular");t.add(k,"specular_weight",0,1).onChange(h=>{Ae()}),t.addColor(k,"specular_color").onChange(h=>{Ae()}),t.add(k,"specular_roughness",0,1).onChange(h=>{Ae()}),t.add(k,"specular_ior",1,5).onChange(h=>{Ae()}),t.add(k,"specular_anisotropy",0,1).onChange(h=>{Ae()}),t.add(k,"specular_rotation",0,1).onChange(h=>{Ae()});const n=r.addFolder("Transmission");n.add(k,"transmission_weight",0,1).onChange(h=>{Ae(),Vi()!=Je.defines.VOLUME_ENABLED&&(Je.defines.VOLUME_ENABLED=Vi(),zn()),ra()!=Je.defines.TRANSMISSION_ENABLED&&(Je.defines.TRANSMISSION_ENABLED=ra(),zn())}),n.addColor(k,"transmission_color").onChange(h=>{Ae()}),n.add(k,"transmission_depth",0,1).onChange(h=>{Ae(),Vi()!=Je.defines.VOLUME_ENABLED&&(Je.defines.VOLUME_ENABLED=Vi(),zn())}),n.addColor(k,"transmission_scatter").onChange(h=>{Ae()}),n.add(k,"transmission_scatter_anisotropy",-1,1).onChange(h=>{Ae()}),n.add(k,"transmission_dispersion_abbe_number",9,91).onChange(h=>{Ae()}),n.add(k,"transmission_dispersion_scale",0,1).onChange(h=>{Ae(),Yh()!=Je.defines.DISPERSION_ENABLED&&(Je.defines.DISPERSION_ENABLED=Yh(),zn())}),n.close();const i=r.addFolder("Subsurface");i.add(k,"subsurface_weight",0,1).onChange(h=>{Ae(),Vi()!=Je.defines.VOLUME_ENABLED&&(Je.defines.VOLUME_ENABLED=Vi(),zn()),ra()!=Je.defines.TRANSMISSION_ENABLED&&(Je.defines.TRANSMISSION_ENABLED=ra(),zn())}),i.addColor(k,"subsurface_color").onChange(h=>{Ae()}),i.add(k,"subsurface_radius",0,1).onChange(h=>{Ae()}),i.addColor(k,"subsurface_radius_scale").onChange(h=>{Ae()}),i.add(k,"subsurface_anisotropy",-1,1).onChange(h=>{Ae()}),i.add(k,"subsurface_mode",Rb).onChange(h=>{Ae()}),i.close();const s=r.addFolder("Coat");s.add(k,"coat_weight",0,1).onChange(h=>{Ae(),jh()!=Je.defines.COAT_ENABLED&&(Je.defines.COAT_ENABLED=jh(),zn())}),s.addColor(k,"coat_color").onChange(h=>{Ae()}),s.add(k,"coat_roughness",0,1).onChange(h=>{Ae()}),s.add(k,"coat_ior",1,3).onChange(h=>{Ae()}),s.add(k,"coat_anisotropy",0,1).onChange(h=>{Ae()}),s.add(k,"coat_rotation",0,1).onChange(h=>{Ae()}),s.add(k,"coat_darkening",0,1).onChange(h=>{Ae()}),s.close();const o=r.addFolder("Fuzz");o.add(k,"fuzz_weight",0,1).onChange(h=>{Ae()}),o.addColor(k,"fuzz_color").onChange(h=>{Ae()}),o.add(k,"fuzz_roughness",0,1).onChange(h=>{Ae()}),o.close();const a=r.addFolder("Emission");a.add(k,"emission_luminance",0,10).onChange(h=>{Ae()}),a.addColor(k,"emission_color").onChange(h=>{Ae()}),a.close();const l=r.addFolder("Thin Film");l.add(k,"thin_film_weight",0,1).onChange(h=>{Ae(),$h()!=Je.defines.THIN_FILM_ENABLED&&(Je.defines.THIN_FILM_ENABLED=$h(),zn())}),l.add(k,"thin_film_thickness",0,2e3).onChange(h=>{Ae()}),l.add(k,"thin_film_ior",1,3).onChange(h=>{Ae()}),l.close();const c=r.addFolder("Geometry");c.add(k,"geometry_opacity",0,1).onChange(h=>{Ae()}),c.add(k,"geometry_thin_walled").onChange(h=>{Ae()}),c.close();const u=Xi.addFolder("Lighting");u.add(k,"skyPower",0,2).onChange(h=>{Ae()}),u.addColor(k,"skyColor").onChange(h=>{Ae()}),u.add(k,"sunPower",-4,4).onChange(h=>{Ae()}),u.add(k,"sunAngularSize",0,40).onChange(h=>{Ae()}),u.add(k,"sunLatitude",0,90).onChange(h=>{Ae()}),u.add(k,"sunLongitude",0,360).onChange(h=>{Ae()}),u.addColor(k,"sunColor").onChange(h=>{Ae()}),u.close();const f=Xi.addFolder("Renderer");f.add(k,"scene_name",Ab).onChange(h=>{console.log(h),Qf(h),Ae()}),f.add(k,"smooth_normals").onChange(h=>{Ae()}),f.add(k,"wireframe").onChange(h=>{Ae()}),f.addColor(k,"neutral_color").onChange(h=>{Ae()}),f.add(k,"bounces",0,100,1).onChange(h=>{Je.defines.BOUNCES=parseInt(h),Ae(),zn()}),f.add(k,"max_samples").onChange(h=>{Ae()}),f.add(k,"max_volume_steps",1,100,1).onChange(h=>{Je.defines.MAX_VOLUME_STEPS=parseInt(h),Ae(),zn()}),f.close(),Xi.add(k,"reset_camera"),Xi.open(),window.addEventListener("resize",Kh,!1),Kh()}function zn(){qt.setRenderTarget(io);let r=new ao(-1,1,1,-1,0,1);Nb(),qt.compileAsync(_a._mesh,r).then(t=>{console.log("shaders successfully compiled."),Fb()}).catch(t=>{console.log("shader compilation error: "+t)}).finally(()=>{})}function Nb(){let r=document.getElementById("progress_overlay");r.style.display="block",r.style.opacity=1,gn.set(0),gn.setText("shaders compiling..."),Ks=!0}function Fb(){gn.set(1),gc=performance.now(),Ks=!1}function Kh(){Mt.aspect=window.innerWidth/window.innerHeight,Mt.updateProjectionMatrix();const r=window.innerWidth,e=window.innerHeight;qt.setSize(r,e),qt.setPixelRatio(1),io.setSize(r,e),Ae()}function Pn(r){return new C(r[0],r[1],r[2])}function Ae(){Je&&(Je.needsUpdate=!0),ur=0}function Ob(r){let e=document.getElementById("progress_overlay");var t=setInterval(function(){e.style.opacity||(e.style.opacity=1),e.style.opacity>0?e.style.opacity-=.025:(e.style.display="none",e.style.opacity=0,clearInterval(t))},r)}function Zs(){if(!ro){console.log("not LOADED"),requestAnimationFrame(Zs);return}if(qt.domElement.style.imageRendering="auto",ur>=k.max_samples){requestAnimationFrame(Zs);return}if(!Ks&&ro){Mt.updateMatrixWorld();const r=_a.material.uniforms,e=window.innerWidth,t=window.innerHeight;r.cameraWorldMatrix.value.copy(Mt.matrixWorld),r.invProjectionMatrix.value.copy(Mt.projectionMatrixInverse),r.invModelMatrix.value.copy(Li.matrixWorld).invert();let n=new Ue(e,t);r.resolution.value.copy(n),r.accumulation_weight.value=1/(ur+1),r.samples.value=ur,r.wireframe.value=k.wireframe,r.neutral_color.value.copy(Pn(k.neutral_color)),r.smooth_normals.value=k.smooth_normals,r.base_weight.value=k.base_weight,r.base_color.value.copy(Pn(k.base_color)),r.base_roughness.value=k.base_roughness,r.base_metalness.value=k.base_metalness,r.diffuse_mode.value=k.diffuse_mode,r.specular_weight.value=k.specular_weight,r.specular_color.value.copy(Pn(k.specular_color)),r.specular_roughness.value=k.specular_roughness,r.specular_anisotropy.value=k.specular_anisotropy,r.specular_rotation.value=k.specular_rotation,r.specular_ior.value=k.specular_ior,r.transmission_weight.value=k.transmission_weight,r.transmission_color.value.copy(Pn(k.transmission_color)),r.transmission_depth.value=k.transmission_depth,r.transmission_scatter.value.copy(Pn(k.transmission_scatter)),r.transmission_scatter_anisotropy.value=k.transmission_scatter_anisotropy,r.transmission_dispersion_abbe_number.value=k.transmission_dispersion_abbe_number,r.transmission_dispersion_scale.value=k.transmission_dispersion_scale,r.subsurface_weight.value=k.subsurface_weight,r.subsurface_color.value.copy(Pn(k.subsurface_color)),r.subsurface_radius.value=k.subsurface_radius,r.subsurface_radius_scale.value.copy(Pn(k.subsurface_radius_scale)),r.subsurface_anisotropy.value=k.subsurface_anisotropy,r.subsurface_mode.value=k.subsurface_mode,r.coat_weight.value=k.coat_weight,r.coat_color.value.copy(Pn(k.coat_color)),r.coat_roughness.value=k.coat_roughness,r.coat_anisotropy.value=k.coat_anisotropy,r.coat_rotation.value=k.coat_rotation,r.coat_ior.value=k.coat_ior,r.coat_darkening.value=k.coat_darkening,r.fuzz_weight.value=k.fuzz_weight,r.fuzz_color.value.copy(Pn(k.fuzz_color)),r.fuzz_roughness.value=k.fuzz_roughness,r.emission_luminance.value=k.emission_luminance,r.emission_color.value.copy(Pn(k.emission_color)),r.thin_film_weight.value=k.thin_film_weight,r.thin_film_thickness.value=k.thin_film_thickness,r.thin_film_ior.value=k.thin_film_ior,r.geometry_opacity.value=k.geometry_opacity,r.geometry_thin_walled.value=k.geometry_thin_walled,r.skyPower.value=k.skyPower,r.skyColor.value.copy(Pn(k.skyColor)),r.sunPower.value=Math.pow(10,k.sunPower),r.sunAngularSize.value=k.sunAngularSize,r.sunColor.value.copy(Pn(k.sunColor)),Cb(),r.sunDir.value.copy(Pn(k.sunDir)),qt.autoClear=ur===0,qt.setRenderTarget(io),_a.render(qt),qt.setRenderTarget(null),Zf.render(qt),qt.autoClear=!0,ur++}else Ae(),Mt.updateProjectionMatrix(),Mt.clearViewOffset(),qt.render(Li,Mt);document.getElementById("samples").innerText=`samples: ${ur}`,Ks||document.getElementById("progress_overlay").style.display!="none"&&performance.now()-gc>300&&Ob(300),Ks&&(gn.value()<.01?gn.animate(1):gn.value()>.99&&(gn.set(0),gn.animate(1))),as.update(),requestAnimationFrame(Zs)}document.onkeydown=function(r){r=r||window.event;var e=r.which?r.which:r.keyCode;switch(e){case 122:{var t=document.body;"webkitCancelFullScreen"in document?t.webkitRequestFullScreen():"mozCancelFullScreen"in document?t.mozRequestFullScreen():console.assert(!1),Ot.update(),Ae();break}case 70:{vc(k.scene_name);break}case 72:{Xi.show(Xi._hidden),document.body.contains(as.dom)?document.body.removeChild(as.dom):document.body.appendChild(as.dom);let a=document.getElementById("info");a.style.visibility=="visible"?a.style.visibility="hidden":a.style.visibility="visible";let l=document.getElementById("samples");l.style.visibility=="visible"?l.style.visibility="hidden":l.style.visibility="visible";break}case 87:{let a=new C;a.copy(Ot.target),a.sub(Mt.position);let l=a.length();a.normalize();var n=new C;n.copy(a),n.multiplyScalar(Ot.flySpeed*l),Mt.position.add(n),Ot.target.add(n),Ot.update(),Ae();break}case 65:{let a=new C;a.copy(Ot.target),a.sub(Mt.position);let l=a.length();var i=new C(1,0,0),s=i.transformDirection(Mt.matrix),n=new C;n.copy(s),n.multiplyScalar(-Ot.flySpeed*l),Mt.position.add(n),Ot.target.add(n),Ot.update(),Ae();break}case 83:{let a=new C;a.copy(Ot.target),a.sub(Mt.position);let l=a.length();a.normalize();var n=new C;n.copy(a),n.multiplyScalar(-Ot.flySpeed*l),Mt.position.add(n),Ot.target.add(n),Ot.update(),Ae();break}case 68:{let a=new C;a.copy(Ot.target),a.sub(Mt.position);let l=a.length();var i=new C(1,0,0),s=i.transformDirection(Mt.matrix),n=new C;n.copy(s),n.multiplyScalar(Ot.flySpeed*l),Mt.position.add(n),Ot.target.add(n),Ot.update(),Ae();break}case 80:{var o=document.createElement("a");let a="openpbr-viewer-screenshot.png";o.download=a,qt.domElement.toBlob(function(l){o.href=URL.createObjectURL(l);var c=new MouseEvent("click");o.dispatchEvent(c),requestAnimationFrame(Zs)},"image/png",1);break}}};
