(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ja="159",Ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yh=0,bl=1,jh=2,Gu=1,$h=2,In=3,pn=0,Ot=1,un=2,Kn=0,nr=1,yl=2,Sl=3,Ml=4,Kh=5,mi=100,Zh=101,Jh=102,El=103,wl=104,Qh=200,ed=201,td=202,nd=203,Sa=204,Ma=205,id=206,rd=207,sd=208,od=209,ad=210,ld=211,cd=212,ud=213,hd=214,dd=0,fd=1,pd=2,Qs=3,md=4,_d=5,gd=6,vd=7,Wu=0,xd=1,bd=2,Zn=0,yd=1,Sd=2,Md=3,Ed=4,wd=5,Tl="attached",Td="detached",Xu=300,sr=301,or=302,Ea=303,wa=304,co=306,ar=1e3,en=1001,eo=1002,it=1003,Ta=1004,Ks=1005,kt=1006,qu=1007,yi=1008,yn=1009,Aa=1010,Yu=1011,uo=1012,kr=1013,Yt=1014,Ut=1015,Yr=1016,ju=1017,$u=1018,vi=1020,Ad=1021,Mt=1023,Rd=1024,Ld=1025,xi=1026,lr=1027,Ku=1028,$a=1029,Zu=1030,ho=1031,jr=1033,Mo=33776,Eo=33777,wo=33778,To=33779,Al=35840,Rl=35841,Ll=35842,Cl=35843,Ju=36196,Pl=37492,Dl=37496,Il=37808,Nl=37809,Fl=37810,Ul=37811,Ol=37812,Bl=37813,zl=37814,kl=37815,Hl=37816,Vl=37817,Gl=37818,Wl=37819,Xl=37820,ql=37821,Ao=36492,Yl=36494,jl=36495,Cd=36283,$l=36284,Kl=36285,Zl=36286,$r=2300,cr=2301,Ro=2302,Jl=2400,Ql=2401,ec=2402,Pd=2500,Dd=0,Qu=1,Ra=2,eh=3e3,Jn=3001,Id=3200,Nd=3201,th=0,Fd=1,tn="",lt="srgb",wt="srgb-linear",Ka="display-p3",fo="display-p3-linear",to="linear",tt="srgb",no="rec709",io="p3",Ti=7680,tc=519,Ud=512,Od=513,Bd=514,nh=515,zd=516,kd=517,Hd=518,Vd=519,La=35044,nc="300 es",Ca=1035,Fn=2e3,ro=2001;class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ic=1234567;const Hr=Math.PI/180,ur=180/Math.PI;function dn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[r&255]+At[r>>8&255]+At[r>>16&255]+At[r>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function St(r,e,t){return Math.max(e,Math.min(t,r))}function Za(r,e){return(r%e+e)%e}function Gd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Wd(r,e,t){return r!==e?(t-r)/(e-r):0}function Vr(r,e,t){return(1-t)*r+t*e}function Xd(r,e,t,n){return Vr(r,e,1-Math.exp(-t*n))}function qd(r,e=1){return e-Math.abs(Za(r,e*2)-e)}function Yd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function jd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function $d(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Kd(r,e){return r+Math.random()*(e-r)}function Zd(r){return r*(.5-Math.random())}function Jd(r){r!==void 0&&(ic=r);let e=ic+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qd(r){return r*Hr}function ef(r){return r*ur}function Pa(r){return(r&r-1)===0&&r!==0}function tf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function so(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function nf(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),p=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*p,a*c);break;case"YXY":r.set(l*p,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Je(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ih={DEG2RAD:Hr,RAD2DEG:ur,generateUUID:dn,clamp:St,euclideanModulo:Za,mapLinear:Gd,inverseLerp:Wd,lerp:Vr,damp:Xd,pingpong:qd,smoothstep:Yd,smootherstep:jd,randInt:$d,randFloat:Kd,randFloatSpread:Zd,seededRandom:Jd,degToRad:Qd,radToDeg:ef,isPowerOfTwo:Pa,ceilPowerOfTwo:tf,floorPowerOfTwo:so,setQuaternionFromProperEuler:nf,normalize:Je,denormalize:bn};class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,i,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],_=n[8],g=i[0],m=i[3],f=i[6],x=i[1],v=i[4],b=i[7],y=i[2],M=i[5],w=i[8];return s[0]=o*g+a*x+l*y,s[3]=o*m+a*v+l*M,s[6]=o*f+a*b+l*w,s[1]=c*g+u*x+h*y,s[4]=c*m+u*v+h*M,s[7]=c*f+u*b+h*w,s[2]=d*g+p*x+_*y,s[5]=d*m+p*v+_*M,s[8]=d*f+p*b+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,_=t*h+n*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new Ge;function rh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Kr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rf(){const r=Kr("canvas");return r.style.display="block",r}const rc={};function Gr(r){r in rc||(rc[r]=!0,console.warn(r))}const sc=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),oc=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),is={[wt]:{transfer:to,primaries:no,toReference:r=>r,fromReference:r=>r},[lt]:{transfer:tt,primaries:no,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[fo]:{transfer:to,primaries:io,toReference:r=>r.applyMatrix3(oc),fromReference:r=>r.applyMatrix3(sc)},[Ka]:{transfer:tt,primaries:io,toReference:r=>r.convertSRGBToLinear().applyMatrix3(oc),fromReference:r=>r.applyMatrix3(sc).convertLinearToSRGB()}},sf=new Set([wt,fo]),$e={enabled:!0,_workingColorSpace:wt,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!sf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=is[e].toReference,i=is[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return is[r].primaries},getTransfer:function(r){return r===tn?to:is[r].transfer}};function ir(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Co(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ai;class sh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=Kr("canvas")),Ai.width=e.width,Ai.height=e.height;const n=Ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ir(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ir(t[n]/255)*255):t[n]=ir(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let of=0;class oh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Po(i[o].image)):s.push(Po(i[o]))}else s=Po(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Po(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let af=0;class Et extends Mi{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=en,i=en,s=kt,o=yi,a=Mt,l=yn,c=Et.DEFAULT_ANISOTROPY,u=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=dn(),this.name="",this.source=new oh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Jn?lt:tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ar:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ar:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===lt?Jn:eh}set encoding(e){Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Jn?lt:tn}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Xu;Et.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,n=0,i=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,b=(p+1)/2,y=(f+1)/2,M=(u+d)/4,w=(h+g)/4,P=(_+m)/4;return v>b&&v>y?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=M/n,s=w/n):b>y?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=M/i,s=P/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=w/s,i=P/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(h-g)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lf extends Mi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Gr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Jn?lt:tn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Et(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new oh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends lf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ah extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=it,this.minFilter=it,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cf extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=it,this.minFilter=it,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==p||u!==_){let m=1-a;const f=l*d+c*p+u*_+h*g,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const y=Math.sqrt(v),M=Math.atan2(y,f*x);m=Math.sin(m*M)/y,a=Math.sin(a*M)/y}const b=a*x;if(l=l*m+d*b,c=c*m+p*b,u=u*m+_*b,h=h*m+g*b,m===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*p-c*d,e[t+1]=l*_+u*d+c*h-a*p,e[t+2]=c*_+u*p+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),p=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new L,ac=new En;class ut{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(s,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rs.copy(n.boundingBox)),rs.applyMatrix4(e.matrixWorld),this.union(rs)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),ss.subVectors(this.max,yr),Ri.subVectors(e.a,yr),Li.subVectors(e.b,yr),Ci.subVectors(e.c,yr),zn.subVectors(Li,Ri),kn.subVectors(Ci,Li),ri.subVectors(Ri,Ci);let t=[0,-zn.z,zn.y,0,-kn.z,kn.y,0,-ri.z,ri.y,zn.z,0,-zn.x,kn.z,0,-kn.x,ri.z,0,-ri.x,-zn.y,zn.x,0,-kn.y,kn.x,0,-ri.y,ri.x,0];return!Io(t,Ri,Li,Ci,ss)||(t=[1,0,0,0,1,0,0,0,1],!Io(t,Ri,Li,Ci,ss))?!1:(os.crossVectors(zn,kn),t=[os.x,os.y,os.z],Io(t,Ri,Li,Ci,ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const An=[new L,new L,new L,new L,new L,new L,new L,new L],sn=new L,rs=new ut,Ri=new L,Li=new L,Ci=new L,zn=new L,kn=new L,ri=new L,yr=new L,ss=new L,os=new L,si=new L;function Io(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){si.fromArray(r,s);const a=i.x*Math.abs(si.x)+i.y*Math.abs(si.y)+i.z*Math.abs(si.z),l=e.dot(si),c=t.dot(si),u=n.dot(si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const uf=new ut,Sr=new L,No=new L;class _n{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Sr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(No.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(No)),this.expandByPoint(Sr.copy(e.center).sub(No))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new L,Fo=new L,as=new L,Hn=new L,Uo=new L,ls=new L,Oo=new L;class Jr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fo.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(Fo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(as),a=Hn.dot(this.direction),l=-Hn.dot(as),c=Hn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,_;if(u>0)if(h=o*l-a,d=o*a-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Fo).addScaledVector(as,d),p}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,i,s){Uo.subVectors(t,e),ls.subVectors(n,e),Oo.crossVectors(Uo,ls);let o=this.direction.dot(Oo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hn.subVectors(this.origin,e);const l=a*this.direction.dot(ls.crossVectors(Hn,ls));if(l<0)return null;const c=a*this.direction.dot(Uo.cross(Hn));if(c<0||l+c>o)return null;const u=-a*Hn.dot(Oo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(e,t,n,i,s,o,a,l,c,u,h,d,p,_,g,m){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,p,_,g,m)}set(e,t,n,i,s,o,a,l,c,u,h,d,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pi.setFromMatrixColumn(e,0).length(),s=1/Pi.setFromMatrixColumn(e,1).length(),o=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,_=c*u,g=c*h;t[0]=d+g*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,_=c*u,g=c*h;t[0]=d-g*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hf,e,df)}lookAt(e,t,n){const i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Vn.crossVectors(n,Xt),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Vn.crossVectors(n,Xt)),Vn.normalize(),cs.crossVectors(Xt,Vn),i[0]=Vn.x,i[4]=cs.x,i[8]=Xt.x,i[1]=Vn.y,i[5]=cs.y,i[9]=Xt.y,i[2]=Vn.z,i[6]=cs.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],x=n[3],v=n[7],b=n[11],y=n[15],M=i[0],w=i[4],P=i[8],S=i[12],T=i[1],F=i[5],N=i[9],B=i[13],C=i[2],O=i[6],G=i[10],q=i[14],te=i[3],K=i[7],Z=i[11],ae=i[15];return s[0]=o*M+a*T+l*C+c*te,s[4]=o*w+a*F+l*O+c*K,s[8]=o*P+a*N+l*G+c*Z,s[12]=o*S+a*B+l*q+c*ae,s[1]=u*M+h*T+d*C+p*te,s[5]=u*w+h*F+d*O+p*K,s[9]=u*P+h*N+d*G+p*Z,s[13]=u*S+h*B+d*q+p*ae,s[2]=_*M+g*T+m*C+f*te,s[6]=_*w+g*F+m*O+f*K,s[10]=_*P+g*N+m*G+f*Z,s[14]=_*S+g*B+m*q+f*ae,s[3]=x*M+v*T+b*C+y*te,s[7]=x*w+v*F+b*O+y*K,s[11]=x*P+v*N+b*G+y*Z,s[15]=x*S+v*B+b*q+y*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*p-n*l*p)+g*(+t*l*p-t*c*d+s*o*d-i*o*p+i*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+f*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],x=h*m*c-g*d*c+g*l*p-a*m*p-h*l*f+a*d*f,v=_*d*c-u*m*c-_*l*p+o*m*p+u*l*f-o*d*f,b=u*g*c-_*h*c+_*a*p-o*g*p-u*a*f+o*h*f,y=_*h*l-u*g*l-_*a*d+o*g*d+u*a*m-o*h*m,M=t*x+n*v+i*b+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=x*w,e[1]=(g*d*s-h*m*s-g*i*p+n*m*p+h*i*f-n*d*f)*w,e[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*f+n*l*f)*w,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*p-n*l*p)*w,e[4]=v*w,e[5]=(u*m*s-_*d*s+_*i*p-t*m*p-u*i*f+t*d*f)*w,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*f-t*l*f)*w,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*p+t*l*p)*w,e[8]=b*w,e[9]=(_*h*s-u*g*s-_*n*p+t*g*p+u*n*f-t*h*f)*w,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*f+t*a*f)*w,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*w,e[12]=y*w,e[13]=(u*g*i-_*h*i+_*n*d-t*g*d-u*n*m+t*h*m)*w,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*w,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,_=s*h,g=o*u,m=o*h,f=a*h,x=l*c,v=l*u,b=l*h,y=n.x,M=n.y,w=n.z;return i[0]=(1-(g+f))*y,i[1]=(p+b)*y,i[2]=(_-v)*y,i[3]=0,i[4]=(p-b)*M,i[5]=(1-(d+f))*M,i[6]=(m+x)*M,i[7]=0,i[8]=(_+v)*w,i[9]=(m-x)*w,i[10]=(1-(d+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Pi.set(i[0],i[1],i[2]).length();const o=Pi.set(i[4],i[5],i[6]).length(),a=Pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],on.copy(this);const c=1/s,u=1/o,h=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,t.setFromRotationMatrix(on),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Fn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let p,_;if(a===Fn)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ro)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Fn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*c,p=(n+i)*u;let _,g;if(a===Fn)_=(o+s)*h,g=-2*h;else if(a===ro)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pi=new L,on=new we,hf=new L(0,0,0),df=new L(1,1,1),Vn=new L,cs=new L,Xt=new L,lc=new we,cc=new En;class po{constructor(e=0,t=0,n=0,i=po.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cc.setFromEuler(this),this.setFromQuaternion(cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}po.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ff=0;const uc=new L,Di=new En,Ln=new we,us=new L,Mr=new L,pf=new L,mf=new En,hc=new L(1,0,0),dc=new L(0,1,0),fc=new L(0,0,1),_f={type:"added"},gf={type:"removed"};class ot extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new L,t=new po,n=new En,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new we},normalMatrix:{value:new Ge}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(hc,e)}rotateY(e){return this.rotateOnAxis(dc,e)}rotateZ(e){return this.rotateOnAxis(fc,e)}translateOnAxis(e,t){return uc.copy(e).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hc,e)}translateY(e){return this.translateOnAxis(dc,e)}translateZ(e){return this.translateOnAxis(fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?us.copy(e):us.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Mr,us,this.up):Ln.lookAt(us,Mr,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(Ln),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_f)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,mf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ot.DEFAULT_UP=new L(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new L,Cn=new L,Bo=new L,Pn=new L,Ii=new L,Ni=new L,pc=new L,zo=new L,ko=new L,Ho=new L;let hs=!1;class Ct{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),an.subVectors(e,t),i.cross(an);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){an.subVectors(i,t),Cn.subVectors(n,t),Bo.subVectors(e,t);const o=an.dot(an),a=an.dot(Cn),l=an.dot(Bo),c=Cn.dot(Cn),u=Cn.dot(Bo),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pn),Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getUV(e,t,n,i,s,o,a,l){return hs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hs=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Pn),l.setScalar(0),l.addScaledVector(s,Pn.x),l.addScaledVector(o,Pn.y),l.addScaledVector(a,Pn.z),l}static isFrontFacing(e,t,n,i){return an.subVectors(n,t),Cn.subVectors(e,t),an.cross(Cn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),an.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ct.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ct.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return hs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hs=!0),Ct.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Ct.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ct.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ct.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ii.subVectors(i,n),Ni.subVectors(s,n),zo.subVectors(e,n);const l=Ii.dot(zo),c=Ni.dot(zo);if(l<=0&&c<=0)return t.copy(n);ko.subVectors(e,i);const u=Ii.dot(ko),h=Ni.dot(ko);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ii,o);Ho.subVectors(e,s);const p=Ii.dot(Ho),_=Ni.dot(Ho);if(_>=0&&p<=_)return t.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Ni,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return pc.subVectors(s,i),a=(h-u)/(h-u+(p-_)),t.copy(i).addScaledVector(pc,a);const f=1/(m+g+d);return o=g*f,a=d*f,t.copy(n).addScaledVector(Ii,o).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},ds={h:0,s:0,l:0};function Vo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=Za(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Vo(o,s,e+1/3),this.g=Vo(o,s,e),this.b=Vo(o,s,e-1/3)}return $e.toWorkingColorSpace(this,i),this}setStyle(e,t=lt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){const n=ch[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return $e.fromWorkingColorSpace(Rt.copy(this),e),Math.round(St(Rt.r*255,0,255))*65536+Math.round(St(Rt.g*255,0,255))*256+Math.round(St(Rt.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Rt.copy(this),t);const n=Rt.r,i=Rt.g,s=Rt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=lt){$e.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,i=Rt.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(ds);const n=Vr(Gn.h,ds.h,t),i=Vr(Gn.s,ds.s,t),s=Vr(Gn.l,ds.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Fe;Fe.NAMES=ch;let vf=0;class Sn extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=nr,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sa,this.blendDst=Ma,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ma&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jn extends Sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new L,fs=new Se;class ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=La,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ut,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fs.fromBufferAttribute(this,t),fs.applyMatrix3(e),this.setXY(t,fs.x,fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==La&&(e.usage=this.usage),e}}class uh extends ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hh extends ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class fn extends ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xf=0;const Zt=new we,Go=new ot,Fi=new L,qt=new ut,Er=new ut,yt=new L;class Bt extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rh(e)?hh:uh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Go.lookAt(e),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ut);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(qt.min,Er.min),qt.expandByPoint(yt),yt.addVectors(qt.max,Er.max),qt.expandByPoint(yt)):(qt.expandByPoint(Er.min),qt.expandByPoint(Er.max))}qt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(Fi.fromBufferAttribute(e,c),yt.add(Fi)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new L,u[T]=new L;const h=new L,d=new L,p=new L,_=new Se,g=new Se,m=new Se,f=new L,x=new L;function v(T,F,N){h.fromArray(i,T*3),d.fromArray(i,F*3),p.fromArray(i,N*3),_.fromArray(o,T*2),g.fromArray(o,F*2),m.fromArray(o,N*2),d.sub(h),p.sub(h),g.sub(_),m.sub(_);const B=1/(g.x*m.y-m.x*g.y);isFinite(B)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(B),x.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(B),c[T].add(f),c[F].add(f),c[N].add(f),u[T].add(x),u[F].add(x),u[N].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let T=0,F=b.length;T<F;++T){const N=b[T],B=N.start,C=N.count;for(let O=B,G=B+C;O<G;O+=3)v(n[O+0],n[O+1],n[O+2])}const y=new L,M=new L,w=new L,P=new L;function S(T){w.fromArray(s,T*3),P.copy(w);const F=c[T];y.copy(F),y.sub(w.multiplyScalar(w.dot(F))).normalize(),M.crossVectors(P,F);const B=M.dot(u[T])<0?-1:1;l[T*4]=y.x,l[T*4+1]=y.y,l[T*4+2]=y.z,l[T*4+3]=B}for(let T=0,F=b.length;T<F;++T){const N=b[T],B=N.start,C=N.count;for(let O=B,G=B+C;O<G;O+=3)S(n[O+0]),S(n[O+1]),S(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new ft(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new we,oi=new Jr,ps=new _n,_c=new L,Ui=new L,Oi=new L,Bi=new L,Wo=new L,ms=new L,_s=new Se,gs=new Se,vs=new Se,gc=new L,vc=new L,xc=new L,xs=new L,bs=new L;class Vt extends ot{constructor(e=new Bt,t=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){ms.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Wo.fromBufferAttribute(h,e),o?ms.addScaledVector(Wo,u):ms.addScaledVector(Wo.sub(t),u))}t.add(ms)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(s),oi.copy(e.ray).recast(e.near),!(ps.containsPoint(oi.origin)===!1&&(oi.intersectSphere(ps,_c)===null||oi.origin.distanceToSquared(_c)>(e.far-e.near)**2))&&(mc.copy(s).invert(),oi.copy(e.ray).applyMatrix4(mc),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=x,y=v;b<y;b+=3){const M=a.getX(b),w=a.getX(b+1),P=a.getX(b+2);i=ys(this,f,e,n,c,u,h,M,w,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const x=a.getX(m),v=a.getX(m+1),b=a.getX(m+2);i=ys(this,o,e,n,c,u,h,x,v,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=x,y=v;b<y;b+=3){const M=b,w=b+1,P=b+2;i=ys(this,f,e,n,c,u,h,M,w,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const x=m,v=m+1,b=m+2;i=ys(this,o,e,n,c,u,h,x,v,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function bf(r,e,t,n,i,s,o,a){let l;if(e.side===Ot?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===pn,a),l===null)return null;bs.copy(a),bs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(bs);return c<t.near||c>t.far?null:{distance:c,point:bs.clone(),object:r}}function ys(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ui),r.getVertexPosition(l,Oi),r.getVertexPosition(c,Bi);const u=bf(r,e,t,n,Ui,Oi,Bi,xs);if(u){i&&(_s.fromBufferAttribute(i,a),gs.fromBufferAttribute(i,l),vs.fromBufferAttribute(i,c),u.uv=Ct.getInterpolation(xs,Ui,Oi,Bi,_s,gs,vs,new Se)),s&&(_s.fromBufferAttribute(s,a),gs.fromBufferAttribute(s,l),vs.fromBufferAttribute(s,c),u.uv1=Ct.getInterpolation(xs,Ui,Oi,Bi,_s,gs,vs,new Se),u.uv2=u.uv1),o&&(gc.fromBufferAttribute(o,a),vc.fromBufferAttribute(o,l),xc.fromBufferAttribute(o,c),u.normal=Ct.getInterpolation(xs,Ui,Oi,Bi,gc,vc,xc,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new L,materialIndex:0};Ct.getNormal(Ui,Oi,Bi,h.normal),u.face=h}return u}class Qr extends Bt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(u,3)),this.setAttribute("uv",new fn(h,2));function _(g,m,f,x,v,b,y,M,w,P,S){const T=b/w,F=y/P,N=b/2,B=y/2,C=M/2,O=w+1,G=P+1;let q=0,te=0;const K=new L;for(let Z=0;Z<G;Z++){const ae=Z*F-B;for(let le=0;le<O;le++){const Y=le*T-N;K[g]=Y*x,K[m]=ae*v,K[f]=C,c.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[f]=M>0?1:-1,u.push(K.x,K.y,K.z),h.push(le/w),h.push(1-Z/P),q+=1}}for(let Z=0;Z<P;Z++)for(let ae=0;ae<w;ae++){const le=d+ae+O*Z,Y=d+ae+O*(Z+1),J=d+(ae+1)+O*(Z+1),de=d+(ae+1)+O*Z;l.push(le,Y,de),l.push(Y,J,de),te+=6}a.addGroup(p,te,S),p+=te,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Nt(r){const e={};for(let t=0;t<r.length;t++){const n=hr(r[t]);for(const i in n)e[i]=n[i]}return e}function yf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function dh(r){return r.getRenderTarget()===null?r.outputColorSpace:$e.workingColorSpace}const Sf={clone:hr,merge:Nt};var Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=Ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=yf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fh extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ft extends fh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zi=-90,ki=1;class wf extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ft(zi,ki,e,t);i.layers=this.layers,this.add(i);const s=new Ft(zi,ki,e,t);s.layers=this.layers,this.add(s);const o=new Ft(zi,ki,e,t);o.layers=this.layers,this.add(o);const a=new Ft(zi,ki,e,t);a.layers=this.layers,this.add(a);const l=new Ft(zi,ki,e,t);l.layers=this.layers,this.add(l);const c=new Ft(zi,ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ph extends Et{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tf extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Gr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Jn?lt:tn),this.texture=new ph(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qr(5,5,5),s=new ei({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Kn});s.uniforms.tEquirect.value=t;const o=new Vt(i,s),a=t.minFilter;return t.minFilter===yi&&(t.minFilter=kt),new wf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Xo=new L,Af=new L,Rf=new Ge;class vn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Xo.subVectors(n,t).cross(Af.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rf.getNormalMatrix(e),i=this.coplanarPoint(Xo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new _n,Ss=new L;class Ja{constructor(e=new vn,t=new vn,n=new vn,i=new vn,s=new vn,o=new vn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],p=i[8],_=i[9],g=i[10],m=i[11],f=i[12],x=i[13],v=i[14],b=i[15];if(n[0].setComponents(l-s,d-c,m-p,b-f).normalize(),n[1].setComponents(l+s,d+c,m+p,b+f).normalize(),n[2].setComponents(l+o,d+u,m+_,b+x).normalize(),n[3].setComponents(l-o,d-u,m-_,b-x).normalize(),n[4].setComponents(l-a,d-h,m-g,b-v).normalize(),t===Fn)n[5].setComponents(l+a,d+h,m+g,b+v).normalize();else if(t===ro)n[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ss.x=i.normal.x>0?e.max.x:e.min.x,Ss.y=i.normal.y>0?e.max.y:e.min.y,Ss.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Lf(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,p=h.byteLength,_=r.createBuffer();r.bindBuffer(u,_),r.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,h){const d=u.array,p=u._updateRange,_=u.updateRanges;if(r.bindBuffer(h,c),p.count===-1&&_.length===0&&r.bufferSubData(h,0,d),_.length!==0){for(let g=0,m=_.length;g<m;g++){const f=_[g];t?r.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):r.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(t?r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Qa extends Bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,p=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const x=f*d-o;for(let v=0;v<c;v++){const b=v*h-s;_.push(b,-x,0),g.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const v=x+c*f,b=x+c*(f+1),y=x+1+c*(f+1),M=x+1+c*f;p.push(v,b,M),p.push(b,y,M)}this.setIndex(p),this.setAttribute("position",new fn(_,3)),this.setAttribute("normal",new fn(g,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pf=`#ifdef USE_ALPHAHASH
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
#endif`,Df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,If=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uf=`#ifdef USE_AOMAP
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
#endif`,Of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bf=`#ifdef USE_BATCHING
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
#endif`,zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gf=`#ifdef USE_IRIDESCENCE
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
#endif`,Wf=`#ifdef USE_BUMPMAP
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qf=`#define PI 3.141592653589793
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
} // validated`,ep=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tp=`vec3 transformedNormal = objectNormal;
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
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,op="gl_FragColor = linearToOutputTexel( gl_FragColor );",ap=`
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
}`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gp=`#ifdef USE_GRADIENTMAP
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
}`,vp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sp=`uniform bool receiveShadow;
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
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rp=`PhysicalMaterial material;
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
#endif`,Lp=`struct PhysicalMaterial {
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
}`,Cp=`
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
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Np=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kp=`#if defined( USE_POINTS_UV )
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
#endif`,Hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wp=`#ifdef USE_MORPHNORMALS
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
#endif`,Xp=`#ifdef USE_MORPHTARGETS
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
#endif`,qp=`#ifdef USE_MORPHTARGETS
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
#endif`,Yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jp=`#ifdef USE_NORMALMAP
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
#endif`,Qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pm=`float getShadowMask() {
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
}`,mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cm=`uniform sampler2D t2D;
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`#include <common>
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
}`,Um=`#if DEPTH_PACKING == 3200
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
}`,Om=`#define DISTANCE
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
}`,Bm=`#define DISTANCE
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`uniform float scale;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Gm=`#include <common>
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xm=`#define LAMBERT
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
}`,qm=`#define LAMBERT
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
}`,Ym=`#define MATCAP
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
}`,jm=`#define MATCAP
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
}`,$m=`#define NORMAL
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
}`,Km=`#define NORMAL
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
}`,Zm=`#define PHONG
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
}`,Jm=`#define PHONG
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
}`,Qm=`#define STANDARD
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
}`,e_=`#define STANDARD
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
}`,t_=`#define TOON
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
}`,n_=`#define TOON
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
}`,i_=`uniform float size;
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
}`,r_=`uniform vec3 diffuse;
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
}`,s_=`#include <common>
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
}`,o_=`uniform vec3 color;
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
}`,a_=`uniform float rotation;
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
}`,l_=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Cf,alphahash_pars_fragment:Pf,alphamap_fragment:Df,alphamap_pars_fragment:If,alphatest_fragment:Nf,alphatest_pars_fragment:Ff,aomap_fragment:Uf,aomap_pars_fragment:Of,batching_pars_vertex:Bf,batching_vertex:zf,begin_vertex:kf,beginnormal_vertex:Hf,bsdfs:Vf,iridescence_fragment:Gf,bumpmap_pars_fragment:Wf,clipping_planes_fragment:Xf,clipping_planes_pars_fragment:qf,clipping_planes_pars_vertex:Yf,clipping_planes_vertex:jf,color_fragment:$f,color_pars_fragment:Kf,color_pars_vertex:Zf,color_vertex:Jf,common:Qf,cube_uv_reflection_fragment:ep,defaultnormal_vertex:tp,displacementmap_pars_vertex:np,displacementmap_vertex:ip,emissivemap_fragment:rp,emissivemap_pars_fragment:sp,colorspace_fragment:op,colorspace_pars_fragment:ap,envmap_fragment:lp,envmap_common_pars_fragment:cp,envmap_pars_fragment:up,envmap_pars_vertex:hp,envmap_physical_pars_fragment:Mp,envmap_vertex:dp,fog_vertex:fp,fog_pars_vertex:pp,fog_fragment:mp,fog_pars_fragment:_p,gradientmap_pars_fragment:gp,lightmap_fragment:vp,lightmap_pars_fragment:xp,lights_lambert_fragment:bp,lights_lambert_pars_fragment:yp,lights_pars_begin:Sp,lights_toon_fragment:Ep,lights_toon_pars_fragment:wp,lights_phong_fragment:Tp,lights_phong_pars_fragment:Ap,lights_physical_fragment:Rp,lights_physical_pars_fragment:Lp,lights_fragment_begin:Cp,lights_fragment_maps:Pp,lights_fragment_end:Dp,logdepthbuf_fragment:Ip,logdepthbuf_pars_fragment:Np,logdepthbuf_pars_vertex:Fp,logdepthbuf_vertex:Up,map_fragment:Op,map_pars_fragment:Bp,map_particle_fragment:zp,map_particle_pars_fragment:kp,metalnessmap_fragment:Hp,metalnessmap_pars_fragment:Vp,morphcolor_vertex:Gp,morphnormal_vertex:Wp,morphtarget_pars_vertex:Xp,morphtarget_vertex:qp,normal_fragment_begin:Yp,normal_fragment_maps:jp,normal_pars_fragment:$p,normal_pars_vertex:Kp,normal_vertex:Zp,normalmap_pars_fragment:Jp,clearcoat_normal_fragment_begin:Qp,clearcoat_normal_fragment_maps:em,clearcoat_pars_fragment:tm,iridescence_pars_fragment:nm,opaque_fragment:im,packing:rm,premultiplied_alpha_fragment:sm,project_vertex:om,dithering_fragment:am,dithering_pars_fragment:lm,roughnessmap_fragment:cm,roughnessmap_pars_fragment:um,shadowmap_pars_fragment:hm,shadowmap_pars_vertex:dm,shadowmap_vertex:fm,shadowmask_pars_fragment:pm,skinbase_vertex:mm,skinning_pars_vertex:_m,skinning_vertex:gm,skinnormal_vertex:vm,specularmap_fragment:xm,specularmap_pars_fragment:bm,tonemapping_fragment:ym,tonemapping_pars_fragment:Sm,transmission_fragment:Mm,transmission_pars_fragment:Em,uv_pars_fragment:wm,uv_pars_vertex:Tm,uv_vertex:Am,worldpos_vertex:Rm,background_vert:Lm,background_frag:Cm,backgroundCube_vert:Pm,backgroundCube_frag:Dm,cube_vert:Im,cube_frag:Nm,depth_vert:Fm,depth_frag:Um,distanceRGBA_vert:Om,distanceRGBA_frag:Bm,equirect_vert:zm,equirect_frag:km,linedashed_vert:Hm,linedashed_frag:Vm,meshbasic_vert:Gm,meshbasic_frag:Wm,meshlambert_vert:Xm,meshlambert_frag:qm,meshmatcap_vert:Ym,meshmatcap_frag:jm,meshnormal_vert:$m,meshnormal_frag:Km,meshphong_vert:Zm,meshphong_frag:Jm,meshphysical_vert:Qm,meshphysical_frag:e_,meshtoon_vert:t_,meshtoon_frag:n_,points_vert:i_,points_frag:r_,shadow_vert:s_,shadow_frag:o_,sprite_vert:a_,sprite_frag:l_},ue={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},xn={basic:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Nt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Nt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Nt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Nt([ue.points,ue.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Nt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Nt([ue.common,ue.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Nt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Nt([ue.sprite,ue.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Nt([ue.common,ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Nt([ue.lights,ue.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};xn.physical={uniforms:Nt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ms={r:0,b:0,g:0};function c_(r,e,t,n,i,s,o){const a=new Fe(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function _(m,f){let x=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),x=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===co)?(u===void 0&&(u=new Vt(new Qr(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:hr(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=$e.getTransfer(v.colorSpace)!==tt,(h!==v||d!==v.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,p=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Vt(new Qa(2,2),new ei({name:"BackgroundMaterial",uniforms:hr(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=$e.getTransfer(v.colorSpace)!==tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(Ms,dh(r)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function u_(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(C,O,G,q,te){let K=!1;if(o){const Z=g(q,G,O);c!==Z&&(c=Z,p(c.object)),K=f(C,q,G,te),K&&x(C,q,G,te)}else{const Z=O.wireframe===!0;(c.geometry!==q.id||c.program!==G.id||c.wireframe!==Z)&&(c.geometry=q.id,c.program=G.id,c.wireframe=Z,K=!0)}te!==null&&t.update(te,r.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,P(C,O,G,q),te!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(C){return n.isWebGL2?r.bindVertexArray(C):s.bindVertexArrayOES(C)}function _(C){return n.isWebGL2?r.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function g(C,O,G){const q=G.wireframe===!0;let te=a[C.id];te===void 0&&(te={},a[C.id]=te);let K=te[O.id];K===void 0&&(K={},te[O.id]=K);let Z=K[q];return Z===void 0&&(Z=m(d()),K[q]=Z),Z}function m(C){const O=[],G=[],q=[];for(let te=0;te<i;te++)O[te]=0,G[te]=0,q[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:q,object:C,attributes:{},index:null}}function f(C,O,G,q){const te=c.attributes,K=O.attributes;let Z=0;const ae=G.getAttributes();for(const le in ae)if(ae[le].location>=0){const J=te[le];let de=K[le];if(de===void 0&&(le==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),le==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),J===void 0||J.attribute!==de||de&&J.data!==de.data)return!0;Z++}return c.attributesNum!==Z||c.index!==q}function x(C,O,G,q){const te={},K=O.attributes;let Z=0;const ae=G.getAttributes();for(const le in ae)if(ae[le].location>=0){let J=K[le];J===void 0&&(le==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),le==="instanceColor"&&C.instanceColor&&(J=C.instanceColor));const de={};de.attribute=J,J&&J.data&&(de.data=J.data),te[le]=de,Z++}c.attributes=te,c.attributesNum=Z,c.index=q}function v(){const C=c.newAttributes;for(let O=0,G=C.length;O<G;O++)C[O]=0}function b(C){y(C,0)}function y(C,O){const G=c.newAttributes,q=c.enabledAttributes,te=c.attributeDivisors;G[C]=1,q[C]===0&&(r.enableVertexAttribArray(C),q[C]=1),te[C]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,O),te[C]=O)}function M(){const C=c.newAttributes,O=c.enabledAttributes;for(let G=0,q=O.length;G<q;G++)O[G]!==C[G]&&(r.disableVertexAttribArray(G),O[G]=0)}function w(C,O,G,q,te,K,Z){Z===!0?r.vertexAttribIPointer(C,O,G,te,K):r.vertexAttribPointer(C,O,G,q,te,K)}function P(C,O,G,q){if(n.isWebGL2===!1&&(C.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const te=q.attributes,K=G.getAttributes(),Z=O.defaultAttributeValues;for(const ae in K){const le=K[ae];if(le.location>=0){let Y=te[ae];if(Y===void 0&&(ae==="instanceMatrix"&&C.instanceMatrix&&(Y=C.instanceMatrix),ae==="instanceColor"&&C.instanceColor&&(Y=C.instanceColor)),Y!==void 0){const J=Y.normalized,de=Y.itemSize,ve=t.get(Y);if(ve===void 0)continue;const be=ve.buffer,Ne=ve.type,Pe=ve.bytesPerElement,Re=n.isWebGL2===!0&&(Ne===r.INT||Ne===r.UNSIGNED_INT||Y.gpuType===kr);if(Y.isInterleavedBufferAttribute){const Oe=Y.data,z=Oe.stride,vt=Y.offset;if(Oe.isInstancedInterleavedBuffer){for(let ye=0;ye<le.locationSize;ye++)y(le.location+ye,Oe.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let ye=0;ye<le.locationSize;ye++)b(le.location+ye);r.bindBuffer(r.ARRAY_BUFFER,be);for(let ye=0;ye<le.locationSize;ye++)w(le.location+ye,de/le.locationSize,Ne,J,z*Pe,(vt+de/le.locationSize*ye)*Pe,Re)}else{if(Y.isInstancedBufferAttribute){for(let Oe=0;Oe<le.locationSize;Oe++)y(le.location+Oe,Y.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Oe=0;Oe<le.locationSize;Oe++)b(le.location+Oe);r.bindBuffer(r.ARRAY_BUFFER,be);for(let Oe=0;Oe<le.locationSize;Oe++)w(le.location+Oe,de/le.locationSize,Ne,J,de*Pe,de/le.locationSize*Oe*Pe,Re)}}else if(Z!==void 0){const J=Z[ae];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(le.location,J);break;case 3:r.vertexAttrib3fv(le.location,J);break;case 4:r.vertexAttrib4fv(le.location,J);break;default:r.vertexAttrib1fv(le.location,J)}}}}M()}function S(){N();for(const C in a){const O=a[C];for(const G in O){const q=O[G];for(const te in q)_(q[te].object),delete q[te];delete O[G]}delete a[C]}}function T(C){if(a[C.id]===void 0)return;const O=a[C.id];for(const G in O){const q=O[G];for(const te in q)_(q[te].object),delete q[te];delete O[G]}delete a[C.id]}function F(C){for(const O in a){const G=a[O];if(G[C.id]===void 0)continue;const q=G[C.id];for(const te in q)_(q[te].object),delete q[te];delete G[C.id]}}function N(){B(),u=!0,c!==l&&(c=l,p(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:B,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:b,disableUnusedAttributes:M}}function h_(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let p,_;if(i)p=r,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(u[_],h[_]);else{p.multiDrawArraysWEBGL(s,u,0,h,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function d_(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,b=o||e.has("OES_texture_float"),y=v&&b,M=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:y,maxSamples:M}}function f_(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new vn,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const x=s?0:n,v=x*4;let b=f.clippingState||null;l.value=b,b=u(_,d,v,p);for(let y=0;y!==v;++y)b[y]=t[y];f.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,b=p;v!==g;++v,b+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function p_(r){let e=new WeakMap;function t(o,a){return a===Ea?o.mapping=sr:a===wa&&(o.mapping=or),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ea||a===wa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Tf(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class mo extends fh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const er=4,bc=[.125,.215,.35,.446,.526,.582],_i=20,qo=new mo,yc=new Fe;let Yo=null,jo=0,$o=0;const di=(1+Math.sqrt(5))/2,Hi=1/di,Sc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,di,Hi),new L(0,di,-Hi),new L(Hi,0,di),new L(-Hi,0,di),new L(di,Hi,0),new L(-di,Hi,0)];class Mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Yo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yo,jo,$o),e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Yr,format:Mt,colorSpace:wt,depthBuffer:!1},i=Ec(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m_(s)),this._blurMaterial=__(s,e,t)}return i}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,qo)}_sceneToCubeUV(e,t,n,i){const a=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(yc),u.toneMapping=Zn,u.autoClear=!1;const p=new jn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),_=new Vt(new Qr,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(yc),g=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;Es(i,x*v,f>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===sr||e.mapping===or;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Es(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,qo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Sc[(i-1)%Sc.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Vt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*_i-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):_i;m>_i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const f=[];let x=0;for(let w=0;w<_i;++w){const P=w/g,S=Math.exp(-P*P/2);f.push(S),w===0?x+=S:w<m&&(x+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;const b=this._sizeLods[i],y=3*b*(i>v-er?i-v+er:0),M=4*(this._cubeSize-b);Es(t,y,M,3*b,2*b),l.setRenderTarget(t),l.render(h,qo)}}function m_(r){const e=[],t=[],n=[];let i=r;const s=r-er+1+bc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-er?l=bc[o-r+er-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,g=3,m=2,f=1,x=new Float32Array(g*_*p),v=new Float32Array(m*_*p),b=new Float32Array(f*_*p);for(let M=0;M<p;M++){const w=M%3*2/3-1,P=M>2?0:-1,S=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];x.set(S,g*_*M),v.set(d,m*_*M);const T=[M,M,M,M,M,M];b.set(T,f*_*M)}const y=new Bt;y.setAttribute("position",new ft(x,g)),y.setAttribute("uv",new ft(v,m)),y.setAttribute("faceIndex",new ft(b,f)),e.push(y),i>er&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ec(r,e,t){const n=new Qn(r,e,t);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function __(r,e,t){const n=new Float32Array(_i),i=new L(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:el(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function wc(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Tc(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function el(){return`

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
	`}function g_(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ea||l===wa,u=l===sr||l===or;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Mc(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Mc(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function v_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function x_(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],r.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],r.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let v=0,b=x.length;v<b;v+=3){const y=x[v+0],M=x[v+1],w=x[v+2];d.push(y,M,M,w,w,y)}}else if(_!==void 0){const x=_.array;g=_.version;for(let v=0,b=x.length/3-1;v<b;v+=3){const y=v+0,M=v+1,w=v+2;d.push(y,M,M,w,w,y)}}else return;const m=new(rh(d)?hh:uh)(d,1);m.version=g;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function b_(r,e,t,n){const i=n.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,_){r.drawElements(s,_,a,p*l),t.update(_,s,1)}function h(p,_,g){if(g===0)return;let m,f;if(i)m=r,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,_,a,p*l,g),t.update(_,s,g)}function d(p,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/l,_[f]);else{m.multiDrawElementsWEBGL(s,_,0,a,p,0,g);let f=0;for(let x=0;x<g;x++)f+=_[x];t.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function y_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function S_(r,e){return r[0]-e[0]}function M_(r,e){return Math.abs(e[1])-Math.abs(r[1])}function E_(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ke,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let O=function(){B.dispose(),s.delete(u),u.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let S=0;v===!0&&(S=1),b===!0&&(S=2),y===!0&&(S=3);let T=u.attributes.position.count*S,F=1;T>e.maxTextureSize&&(F=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const N=new Float32Array(T*F*4*g),B=new ah(N,T,F,g);B.type=Ut,B.needsUpdate=!0;const C=S*4;for(let G=0;G<g;G++){const q=M[G],te=w[G],K=P[G],Z=T*F*4*G;for(let ae=0;ae<q.count;ae++){const le=ae*C;v===!0&&(o.fromBufferAttribute(q,ae),N[Z+le+0]=o.x,N[Z+le+1]=o.y,N[Z+le+2]=o.z,N[Z+le+3]=0),b===!0&&(o.fromBufferAttribute(te,ae),N[Z+le+4]=o.x,N[Z+le+5]=o.y,N[Z+le+6]=o.z,N[Z+le+7]=0),y===!0&&(o.fromBufferAttribute(K,ae),N[Z+le+8]=o.x,N[Z+le+9]=o.y,N[Z+le+10]=o.z,N[Z+le+11]=K.itemSize===4?o.w:1)}}m={count:g,texture:B,size:new Se(T,F)},s.set(u,m),u.addEventListener("dispose",O)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const x=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let b=0;b<_;b++)g[b]=[b,0];n[u.id]=g}for(let b=0;b<_;b++){const y=g[b];y[0]=b,y[1]=d[b]}g.sort(M_);for(let b=0;b<8;b++)b<_&&g[b][1]?(a[b][0]=g[b][0],a[b][1]=g[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(S_);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let x=0;for(let b=0;b<8;b++){const y=a[b],M=y[0],w=y[1];M!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+b)!==m[M]&&u.setAttribute("morphTarget"+b,m[M]),f&&u.getAttribute("morphNormal"+b)!==f[M]&&u.setAttribute("morphNormal"+b,f[M]),i[b]=w,x+=w):(m&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),f&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),i[b]=0)}const v=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function w_(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class _h extends Et{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:xi,u!==xi&&u!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===xi&&(n=Yt),n===void 0&&u===lr&&(n=vi),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:it,this.minFilter=l!==void 0?l:it,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const gh=new Et,vh=new _h(1,1);vh.compareFunction=nh;const xh=new ah,bh=new cf,yh=new ph,Ac=[],Rc=[],Lc=new Float32Array(16),Cc=new Float32Array(9),Pc=new Float32Array(4);function mr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ac[i];if(s===void 0&&(s=new Float32Array(i),Ac[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function _t(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function gt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function _o(r,e){let t=Rc[e];t===void 0&&(t=new Int32Array(e),Rc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function T_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function A_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;r.uniform2fv(this.addr,e),gt(t,e)}}function R_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;r.uniform3fv(this.addr,e),gt(t,e)}}function L_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;r.uniform4fv(this.addr,e),gt(t,e)}}function C_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;Pc.set(n),r.uniformMatrix2fv(this.addr,!1,Pc),gt(t,n)}}function P_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;Cc.set(n),r.uniformMatrix3fv(this.addr,!1,Cc),gt(t,n)}}function D_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;Lc.set(n),r.uniformMatrix4fv(this.addr,!1,Lc),gt(t,n)}}function I_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function N_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;r.uniform2iv(this.addr,e),gt(t,e)}}function F_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;r.uniform3iv(this.addr,e),gt(t,e)}}function U_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;r.uniform4iv(this.addr,e),gt(t,e)}}function O_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function B_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;r.uniform2uiv(this.addr,e),gt(t,e)}}function z_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;r.uniform3uiv(this.addr,e),gt(t,e)}}function k_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;r.uniform4uiv(this.addr,e),gt(t,e)}}function H_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?vh:gh;t.setTexture2D(e||s,i)}function V_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bh,i)}function G_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yh,i)}function W_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xh,i)}function X_(r){switch(r){case 5126:return T_;case 35664:return A_;case 35665:return R_;case 35666:return L_;case 35674:return C_;case 35675:return P_;case 35676:return D_;case 5124:case 35670:return I_;case 35667:case 35671:return N_;case 35668:case 35672:return F_;case 35669:case 35673:return U_;case 5125:return O_;case 36294:return B_;case 36295:return z_;case 36296:return k_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return W_}}function q_(r,e){r.uniform1fv(this.addr,e)}function Y_(r,e){const t=mr(e,this.size,2);r.uniform2fv(this.addr,t)}function j_(r,e){const t=mr(e,this.size,3);r.uniform3fv(this.addr,t)}function $_(r,e){const t=mr(e,this.size,4);r.uniform4fv(this.addr,t)}function K_(r,e){const t=mr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Z_(r,e){const t=mr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function J_(r,e){const t=mr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Q_(r,e){r.uniform1iv(this.addr,e)}function eg(r,e){r.uniform2iv(this.addr,e)}function tg(r,e){r.uniform3iv(this.addr,e)}function ng(r,e){r.uniform4iv(this.addr,e)}function ig(r,e){r.uniform1uiv(this.addr,e)}function rg(r,e){r.uniform2uiv(this.addr,e)}function sg(r,e){r.uniform3uiv(this.addr,e)}function og(r,e){r.uniform4uiv(this.addr,e)}function ag(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);_t(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||gh,s[o])}function lg(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);_t(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||bh,s[o])}function cg(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);_t(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||yh,s[o])}function ug(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);_t(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||xh,s[o])}function hg(r){switch(r){case 5126:return q_;case 35664:return Y_;case 35665:return j_;case 35666:return $_;case 35674:return K_;case 35675:return Z_;case 35676:return J_;case 5124:case 35670:return Q_;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return rg;case 36295:return sg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return ug}}class dg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=X_(t.type)}}class fg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hg(t.type)}}class pg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function Dc(r,e){r.seq.push(e),r.map[e.id]=e}function mg(r,e,t){const n=r.name,i=n.length;for(Ko.lastIndex=0;;){const s=Ko.exec(n),o=Ko.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Dc(t,c===void 0?new dg(a,r,e):new fg(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new pg(a),Dc(t,h)),t=h}}}class Zs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);mg(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ic(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const _g=37297;let gg=0;function vg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function xg(r){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(r);let n;switch(e===t?n="":e===io&&t===no?n="LinearDisplayP3ToLinearSRGB":e===no&&t===io&&(n="LinearSRGBToLinearDisplayP3"),r){case wt:case fo:return[n,"LinearTransferOETF"];case lt:case Ka:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Nc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+vg(r.getShaderSource(e),o)}else return i}function bg(r,e){const t=xg(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function yg(r,e){let t;switch(e){case yd:t="Linear";break;case Sd:t="Reinhard";break;case Md:t="OptimizedCineon";break;case Ed:t="ACESFilmic";break;case wd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Sg(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Or).join(`
`)}function Mg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Eg(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Or(r){return r!==""}function Fc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(r){return r.replace(wg,Ag)}const Tg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ag(r,e){let t=He[e];if(t===void 0){const n=Tg.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Da(t)}const Rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(r){return r.replace(Rg,Lg)}function Lg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Gu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===$h?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function Pg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case sr:case or:e="ENVMAP_TYPE_CUBE";break;case co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case or:e="ENVMAP_MODE_REFRACTION";break}return e}function Ig(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Wu:e="ENVMAP_BLENDING_MULTIPLY";break;case xd:e="ENVMAP_BLENDING_MIX";break;case bd:e="ENVMAP_BLENDING_ADD";break}return e}function Ng(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Fg(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Cg(t),c=Pg(t),u=Dg(t),h=Ig(t),d=Ng(t),p=t.isWebGL2?"":Sg(t),_=Mg(s),g=i.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Or).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Or).join(`
`),f.length>0&&(f+=`
`)):(m=[Bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),f=[p,Bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?He.tonemapping_pars_fragment:"",t.toneMapping!==Zn?yg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,bg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),o=Da(o),o=Fc(o,t),o=Uc(o,t),a=Da(a),a=Fc(a,t),a=Uc(a,t),o=Oc(o),a=Oc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+m+o,b=x+f+a,y=Ic(i,i.VERTEX_SHADER,v),M=Ic(i,i.FRAGMENT_SHADER,b);i.attachShader(g,y),i.attachShader(g,M),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(F){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g).trim(),B=i.getShaderInfoLog(y).trim(),C=i.getShaderInfoLog(M).trim();let O=!0,G=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,y,M);else{const q=Nc(i,y,"vertex"),te=Nc(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+q+`
`+te)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||C==="")&&(G=!1);G&&(F.diagnostics={runnable:O,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:C,prefix:f}})}i.deleteShader(y),i.deleteShader(M),P=new Zs(i,g),S=Eg(i,g)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(g,_g)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=M,this}let Ug=0;class Og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Bg(e),t.set(e,n)),n}}class Bg{constructor(e){this.id=Ug++,this.code=e,this.usedTimes=0}}function zg(r,e,t,n,i,s,o){const a=new lh,l=new Og,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,T,F,N,B){const C=N.fog,O=B.geometry,G=S.isMeshStandardMaterial?N.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),te=q&&q.mapping===co?q.image.height:null,K=_[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ae=Z!==void 0?Z.length:0;let le=0;O.morphAttributes.position!==void 0&&(le=1),O.morphAttributes.normal!==void 0&&(le=2),O.morphAttributes.color!==void 0&&(le=3);let Y,J,de,ve;if(K){const Pt=xn[K];Y=Pt.vertexShader,J=Pt.fragmentShader}else Y=S.vertexShader,J=S.fragmentShader,l.update(S),de=l.getVertexShaderID(S),ve=l.getFragmentShaderID(S);const be=r.getRenderTarget(),Ne=B.isInstancedMesh===!0,Pe=B.isBatchedMesh===!0,Re=!!S.map,Oe=!!S.matcap,z=!!q,vt=!!S.aoMap,ye=!!S.lightMap,ke=!!S.bumpMap,Le=!!S.normalMap,et=!!S.displacementMap,Be=!!S.emissiveMap,De=!!S.metalnessMap,je=!!S.roughnessMap,pt=S.anisotropy>0,mt=S.clearcoat>0,R=S.iridescence>0,E=S.sheen>0,k=S.transmission>0,ne=pt&&!!S.anisotropyMap,ee=mt&&!!S.clearcoatMap,ie=mt&&!!S.clearcoatNormalMap,_e=mt&&!!S.clearcoatRoughnessMap,oe=R&&!!S.iridescenceMap,he=R&&!!S.iridescenceThicknessMap,D=E&&!!S.sheenColorMap,se=E&&!!S.sheenRoughnessMap,$=!!S.specularMap,Te=!!S.specularColorMap,ge=!!S.specularIntensityMap,Ee=k&&!!S.transmissionMap,me=k&&!!S.thicknessMap,pe=!!S.gradientMap,We=!!S.alphaMap,I=S.alphaTest>0,ce=!!S.alphaHash,Q=!!S.extensions,j=!!O.attributes.uv1,re=!!O.attributes.uv2,Me=!!O.attributes.uv3;let Xe=Zn;return S.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Xe=r.toneMapping),{isWebGL2:u,shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:Y,fragmentShader:J,defines:S.defines,customVertexShaderID:de,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Pe,instancing:Ne,instancingColor:Ne&&B.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:wt,map:Re,matcap:Oe,envMap:z,envMapMode:z&&q.mapping,envMapCubeUVHeight:te,aoMap:vt,lightMap:ye,bumpMap:ke,normalMap:Le,displacementMap:d&&et,emissiveMap:Be,normalMapObjectSpace:Le&&S.normalMapType===Fd,normalMapTangentSpace:Le&&S.normalMapType===th,metalnessMap:De,roughnessMap:je,anisotropy:pt,anisotropyMap:ne,clearcoat:mt,clearcoatMap:ee,clearcoatNormalMap:ie,clearcoatRoughnessMap:_e,iridescence:R,iridescenceMap:oe,iridescenceThicknessMap:he,sheen:E,sheenColorMap:D,sheenRoughnessMap:se,specularMap:$,specularColorMap:Te,specularIntensityMap:ge,transmission:k,transmissionMap:Ee,thicknessMap:me,gradientMap:pe,opaque:S.transparent===!1&&S.blending===nr,alphaMap:We,alphaTest:I,alphaHash:ce,combine:S.combine,mapUv:Re&&g(S.map.channel),aoMapUv:vt&&g(S.aoMap.channel),lightMapUv:ye&&g(S.lightMap.channel),bumpMapUv:ke&&g(S.bumpMap.channel),normalMapUv:Le&&g(S.normalMap.channel),displacementMapUv:et&&g(S.displacementMap.channel),emissiveMapUv:Be&&g(S.emissiveMap.channel),metalnessMapUv:De&&g(S.metalnessMap.channel),roughnessMapUv:je&&g(S.roughnessMap.channel),anisotropyMapUv:ne&&g(S.anisotropyMap.channel),clearcoatMapUv:ee&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:D&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:se&&g(S.sheenRoughnessMap.channel),specularMapUv:$&&g(S.specularMap.channel),specularColorMapUv:Te&&g(S.specularColorMap.channel),specularIntensityMapUv:ge&&g(S.specularIntensityMap.channel),transmissionMapUv:Ee&&g(S.transmissionMap.channel),thicknessMapUv:me&&g(S.thicknessMap.channel),alphaMapUv:We&&g(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Le||pt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:j,vertexUv2s:re,vertexUv3s:Me,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(Re||We),fog:!!C,useFog:S.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:le,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Re&&S.map.isVideoTexture===!0&&$e.getTransfer(S.map.colorSpace)===tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===un,flipSided:S.side===Ot,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Q&&S.extensions.derivatives===!0,extensionFragDepth:Q&&S.extensions.fragDepth===!0,extensionDrawBuffers:Q&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Q&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)T.push(F),T.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(x(T,S),v(T,S),T.push(r.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function x(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function v(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function b(S){const T=_[S.type];let F;if(T){const N=xn[T];F=Sf.clone(N.uniforms)}else F=S.uniforms;return F}function y(S,T){let F;for(let N=0,B=c.length;N<B;N++){const C=c[N];if(C.cacheKey===T){F=C,++F.usedTimes;break}}return F===void 0&&(F=new Fg(r,T,S,s),c.push(F)),F}function M(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:y,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:P}}function kg(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Hg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function zc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function kc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,p,_,g,m){let f=r[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function a(h,d,p,_,g,m){const f=o(h,d,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,d,p,_,g,m){const f=o(h,d,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Hg),n.length>1&&n.sort(d||zc),i.length>1&&i.sort(d||zc)}function u(){for(let h=e,d=r.length;h<d;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Vg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new kc,r.set(n,[o])):i>=s.length?(o=new kc,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Gg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Fe};break;case"SpotLight":t={position:new L,direction:new L,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function Wg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Xg=0;function qg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Yg(r,e){const t=new Gg,n=Wg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new L);const s=new L,o=new we,a=new we;function l(u,h){let d=0,p=0,_=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let g=0,m=0,f=0,x=0,v=0,b=0,y=0,M=0,w=0,P=0,S=0;u.sort(qg);const T=h===!0?Math.PI:1;for(let N=0,B=u.length;N<B;N++){const C=u[N],O=C.color,G=C.intensity,q=C.distance,te=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=O.r*G*T,p+=O.g*G*T,_+=O.b*G*T;else if(C.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(C.sh.coefficients[K],G);S++}else if(C.isDirectionalLight){const K=t.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity*T),C.castShadow){const Z=C.shadow,ae=n.get(C);ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,i.directionalShadow[g]=ae,i.directionalShadowMap[g]=te,i.directionalShadowMatrix[g]=C.shadow.matrix,b++}i.directional[g]=K,g++}else if(C.isSpotLight){const K=t.get(C);K.position.setFromMatrixPosition(C.matrixWorld),K.color.copy(O).multiplyScalar(G*T),K.distance=q,K.coneCos=Math.cos(C.angle),K.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),K.decay=C.decay,i.spot[f]=K;const Z=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,Z.updateMatrices(C),C.castShadow&&P++),i.spotLightMatrix[f]=Z.matrix,C.castShadow){const ae=n.get(C);ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,i.spotShadow[f]=ae,i.spotShadowMap[f]=te,M++}f++}else if(C.isRectAreaLight){const K=t.get(C);K.color.copy(O).multiplyScalar(G),K.halfWidth.set(C.width*.5,0,0),K.halfHeight.set(0,C.height*.5,0),i.rectArea[x]=K,x++}else if(C.isPointLight){const K=t.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity*T),K.distance=C.distance,K.decay=C.decay,C.castShadow){const Z=C.shadow,ae=n.get(C);ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,ae.shadowCameraNear=Z.camera.near,ae.shadowCameraFar=Z.camera.far,i.pointShadow[m]=ae,i.pointShadowMap[m]=te,i.pointShadowMatrix[m]=C.shadow.matrix,y++}i.point[m]=K,m++}else if(C.isHemisphereLight){const K=t.get(C);K.skyColor.copy(C.color).multiplyScalar(G*T),K.groundColor.copy(C.groundColor).multiplyScalar(G*T),i.hemi[v]=K,v++}}x>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=_;const F=i.hash;(F.directionalLength!==g||F.pointLength!==m||F.spotLength!==f||F.rectAreaLength!==x||F.hemiLength!==v||F.numDirectionalShadows!==b||F.numPointShadows!==y||F.numSpotShadows!==M||F.numSpotMaps!==w||F.numLightProbes!==S)&&(i.directional.length=g,i.spot.length=f,i.rectArea.length=x,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+w-P,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=S,F.directionalLength=g,F.pointLength=m,F.spotLength=f,F.rectAreaLength=x,F.hemiLength=v,F.numDirectionalShadows=b,F.numPointShadows=y,F.numSpotShadows=M,F.numSpotMaps=w,F.numLightProbes=S,i.version=Xg++)}function c(u,h){let d=0,p=0,_=0,g=0,m=0;const f=h.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const b=u[x];if(b.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),d++}else if(b.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),_++}else if(b.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),a.identity(),o.copy(b.matrixWorld),o.premultiply(f),a.extractRotation(o),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function Hc(r,e){const t=new Yg(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function jg(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Hc(r,e),t.set(s,[l])):o>=a.length?(l=new Hc(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class $g extends Sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kg extends Sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
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
}`;function Qg(r,e,t){let n=new Ja;const i=new Se,s=new Se,o=new Ke,a=new $g({depthPacking:Nd}),l=new Kg,c={},u=t.maxTextureSize,h={[pn]:Ot,[Ot]:pn,[un]:un},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Zg,fragmentShader:Jg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Bt;_.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Vt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gu;let f=this.type;this.render=function(y,M,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const P=r.getRenderTarget(),S=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Kn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=f!==In&&this.type===In,B=f===In&&this.type!==In;for(let C=0,O=y.length;C<O;C++){const G=y[C],q=G.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const te=q.getFrameExtents();if(i.multiply(te),s.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/te.x),i.x=s.x*te.x,q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/te.y),i.y=s.y*te.y,q.mapSize.y=s.y)),q.map===null||N===!0||B===!0){const Z=this.type!==In?{minFilter:it,magFilter:it}:{};q.map!==null&&q.map.dispose(),q.map=new Qn(i.x,i.y,Z),q.map.texture.name=G.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const K=q.getViewportCount();for(let Z=0;Z<K;Z++){const ae=q.getViewport(Z);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),F.viewport(o),q.updateMatrices(G,Z),n=q.getFrustum(),b(M,w,q.camera,G,this.type)}q.isPointLightShadow!==!0&&this.type===In&&x(q,w),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(P,S,T)};function x(y,M){const w=e.update(g);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Qn(i.x,i.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(M,null,w,d,g,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(M,null,w,p,g,null)}function v(y,M,w,P){let S=null;const T=w.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(T!==void 0)S=T;else if(S=w.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const F=S.uuid,N=M.uuid;let B=c[F];B===void 0&&(B={},c[F]=B);let C=B[N];C===void 0&&(C=S.clone(),B[N]=C),S=C}if(S.visible=M.visible,S.wireframe=M.wireframe,P===In?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:h[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=r.properties.get(S);F.light=w}return S}function b(y,M,w,P,S){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===In)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,y.matrixWorld);const N=e.update(y),B=y.material;if(Array.isArray(B)){const C=N.groups;for(let O=0,G=C.length;O<G;O++){const q=C[O],te=B[q.materialIndex];if(te&&te.visible){const K=v(y,te,P,S);y.onBeforeShadow(r,y,M,w,N,K,q),r.renderBufferDirect(w,null,N,K,y,q),y.onAfterShadow(r,y,M,w,N,K,q)}}}else if(B.visible){const C=v(y,B,P,S);y.onBeforeShadow(r,y,M,w,N,C,null),r.renderBufferDirect(w,null,N,C,y,null),y.onAfterShadow(r,y,M,w,N,C,null)}}const F=y.children;for(let N=0,B=F.length;N<B;N++)b(F[N],M,w,P,S)}}function ev(r,e,t){const n=t.isWebGL2;function i(){let I=!1;const ce=new Ke;let Q=null;const j=new Ke(0,0,0,0);return{setMask:function(re){Q!==re&&!I&&(r.colorMask(re,re,re,re),Q=re)},setLocked:function(re){I=re},setClear:function(re,Me,Xe,xt,Pt){Pt===!0&&(re*=xt,Me*=xt,Xe*=xt),ce.set(re,Me,Xe,xt),j.equals(ce)===!1&&(r.clearColor(re,Me,Xe,xt),j.copy(ce))},reset:function(){I=!1,Q=null,j.set(-1,0,0,0)}}}function s(){let I=!1,ce=null,Q=null,j=null;return{setTest:function(re){re?Pe(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(re){ce!==re&&!I&&(r.depthMask(re),ce=re)},setFunc:function(re){if(Q!==re){switch(re){case dd:r.depthFunc(r.NEVER);break;case fd:r.depthFunc(r.ALWAYS);break;case pd:r.depthFunc(r.LESS);break;case Qs:r.depthFunc(r.LEQUAL);break;case md:r.depthFunc(r.EQUAL);break;case _d:r.depthFunc(r.GEQUAL);break;case gd:r.depthFunc(r.GREATER);break;case vd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=re}},setLocked:function(re){I=re},setClear:function(re){j!==re&&(r.clearDepth(re),j=re)},reset:function(){I=!1,ce=null,Q=null,j=null}}}function o(){let I=!1,ce=null,Q=null,j=null,re=null,Me=null,Xe=null,xt=null,Pt=null;return{setTest:function(Qe){I||(Qe?Pe(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(Qe){ce!==Qe&&!I&&(r.stencilMask(Qe),ce=Qe)},setFunc:function(Qe,Dt,gn){(Q!==Qe||j!==Dt||re!==gn)&&(r.stencilFunc(Qe,Dt,gn),Q=Qe,j=Dt,re=gn)},setOp:function(Qe,Dt,gn){(Me!==Qe||Xe!==Dt||xt!==gn)&&(r.stencilOp(Qe,Dt,gn),Me=Qe,Xe=Dt,xt=gn)},setLocked:function(Qe){I=Qe},setClear:function(Qe){Pt!==Qe&&(r.clearStencil(Qe),Pt=Qe)},reset:function(){I=!1,ce=null,Q=null,j=null,re=null,Me=null,Xe=null,xt=null,Pt=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},p={},_=new WeakMap,g=[],m=null,f=!1,x=null,v=null,b=null,y=null,M=null,w=null,P=null,S=new Fe(0,0,0),T=0,F=!1,N=null,B=null,C=null,O=null,G=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,K=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),te=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),te=K>=2);let ae=null,le={};const Y=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),de=new Ke().fromArray(Y),ve=new Ke().fromArray(J);function be(I,ce,Q,j){const re=new Uint8Array(4),Me=r.createTexture();r.bindTexture(I,Me),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xe=0;Xe<Q;Xe++)n&&(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)?r.texImage3D(ce,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(ce+Xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return Me}const Ne={};Ne[r.TEXTURE_2D]=be(r.TEXTURE_2D,r.TEXTURE_2D,1),Ne[r.TEXTURE_CUBE_MAP]=be(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ne[r.TEXTURE_2D_ARRAY]=be(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ne[r.TEXTURE_3D]=be(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(r.DEPTH_TEST),l.setFunc(Qs),Be(!1),De(bl),Pe(r.CULL_FACE),Le(Kn);function Pe(I){d[I]!==!0&&(r.enable(I),d[I]=!0)}function Re(I){d[I]!==!1&&(r.disable(I),d[I]=!1)}function Oe(I,ce){return p[I]!==ce?(r.bindFramebuffer(I,ce),p[I]=ce,n&&(I===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=ce),I===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=ce)),!0):!1}function z(I,ce){let Q=g,j=!1;if(I)if(Q=_.get(ce),Q===void 0&&(Q=[],_.set(ce,Q)),I.isWebGLMultipleRenderTargets){const re=I.texture;if(Q.length!==re.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,Xe=re.length;Me<Xe;Me++)Q[Me]=r.COLOR_ATTACHMENT0+Me;Q.length=re.length,j=!0}}else Q[0]!==r.COLOR_ATTACHMENT0&&(Q[0]=r.COLOR_ATTACHMENT0,j=!0);else Q[0]!==r.BACK&&(Q[0]=r.BACK,j=!0);j&&(t.isWebGL2?r.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function vt(I){return m!==I?(r.useProgram(I),m=I,!0):!1}const ye={[mi]:r.FUNC_ADD,[Zh]:r.FUNC_SUBTRACT,[Jh]:r.FUNC_REVERSE_SUBTRACT};if(n)ye[El]=r.MIN,ye[wl]=r.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(ye[El]=I.MIN_EXT,ye[wl]=I.MAX_EXT)}const ke={[Qh]:r.ZERO,[ed]:r.ONE,[td]:r.SRC_COLOR,[Sa]:r.SRC_ALPHA,[ad]:r.SRC_ALPHA_SATURATE,[sd]:r.DST_COLOR,[id]:r.DST_ALPHA,[nd]:r.ONE_MINUS_SRC_COLOR,[Ma]:r.ONE_MINUS_SRC_ALPHA,[od]:r.ONE_MINUS_DST_COLOR,[rd]:r.ONE_MINUS_DST_ALPHA,[ld]:r.CONSTANT_COLOR,[cd]:r.ONE_MINUS_CONSTANT_COLOR,[ud]:r.CONSTANT_ALPHA,[hd]:r.ONE_MINUS_CONSTANT_ALPHA};function Le(I,ce,Q,j,re,Me,Xe,xt,Pt,Qe){if(I===Kn){f===!0&&(Re(r.BLEND),f=!1);return}if(f===!1&&(Pe(r.BLEND),f=!0),I!==Kh){if(I!==x||Qe!==F){if((v!==mi||M!==mi)&&(r.blendEquation(r.FUNC_ADD),v=mi,M=mi),Qe)switch(I){case nr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yl:r.blendFunc(r.ONE,r.ONE);break;case Sl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ml:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case nr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Sl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ml:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,y=null,w=null,P=null,S.set(0,0,0),T=0,x=I,F=Qe}return}re=re||ce,Me=Me||Q,Xe=Xe||j,(ce!==v||re!==M)&&(r.blendEquationSeparate(ye[ce],ye[re]),v=ce,M=re),(Q!==b||j!==y||Me!==w||Xe!==P)&&(r.blendFuncSeparate(ke[Q],ke[j],ke[Me],ke[Xe]),b=Q,y=j,w=Me,P=Xe),(xt.equals(S)===!1||Pt!==T)&&(r.blendColor(xt.r,xt.g,xt.b,Pt),S.copy(xt),T=Pt),x=I,F=!1}function et(I,ce){I.side===un?Re(r.CULL_FACE):Pe(r.CULL_FACE);let Q=I.side===Ot;ce&&(Q=!Q),Be(Q),I.blending===nr&&I.transparent===!1?Le(Kn):Le(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const j=I.stencilWrite;c.setTest(j),j&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),pt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Pe(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){N!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),N=I)}function De(I){I!==Yh?(Pe(r.CULL_FACE),I!==B&&(I===bl?r.cullFace(r.BACK):I===jh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),B=I}function je(I){I!==C&&(te&&r.lineWidth(I),C=I)}function pt(I,ce,Q){I?(Pe(r.POLYGON_OFFSET_FILL),(O!==ce||G!==Q)&&(r.polygonOffset(ce,Q),O=ce,G=Q)):Re(r.POLYGON_OFFSET_FILL)}function mt(I){I?Pe(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function R(I){I===void 0&&(I=r.TEXTURE0+q-1),ae!==I&&(r.activeTexture(I),ae=I)}function E(I,ce,Q){Q===void 0&&(ae===null?Q=r.TEXTURE0+q-1:Q=ae);let j=le[Q];j===void 0&&(j={type:void 0,texture:void 0},le[Q]=j),(j.type!==I||j.texture!==ce)&&(ae!==Q&&(r.activeTexture(Q),ae=Q),r.bindTexture(I,ce||Ne[I]),j.type=I,j.texture=ce)}function k(){const I=le[ae];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ne(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function D(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(I){de.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),de.copy(I))}function Ee(I){ve.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),ve.copy(I))}function me(I,ce){let Q=h.get(ce);Q===void 0&&(Q=new WeakMap,h.set(ce,Q));let j=Q.get(I);j===void 0&&(j=r.getUniformBlockIndex(ce,I.name),Q.set(I,j))}function pe(I,ce){const j=h.get(ce).get(I);u.get(ce)!==j&&(r.uniformBlockBinding(ce,j,I.__bindingPointIndex),u.set(ce,j))}function We(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},ae=null,le={},p={},_=new WeakMap,g=[],m=null,f=!1,x=null,v=null,b=null,y=null,M=null,w=null,P=null,S=new Fe(0,0,0),T=0,F=!1,N=null,B=null,C=null,O=null,G=null,de.set(0,0,r.canvas.width,r.canvas.height),ve.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:Re,bindFramebuffer:Oe,drawBuffers:z,useProgram:vt,setBlending:Le,setMaterial:et,setFlipSided:Be,setCullFace:De,setLineWidth:je,setPolygonOffset:pt,setScissorTest:mt,activeTexture:R,bindTexture:E,unbindTexture:k,compressedTexImage2D:ne,compressedTexImage3D:ee,texImage2D:$,texImage3D:Te,updateUBOMapping:me,uniformBlockBinding:pe,texStorage2D:D,texStorage3D:se,texSubImage2D:ie,texSubImage3D:_e,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:ge,viewport:Ee,reset:We}}function tv(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,E){return f?new OffscreenCanvas(R,E):Kr("canvas")}function v(R,E,k,ne){let ee=1;if((R.width>ne||R.height>ne)&&(ee=ne/Math.max(R.width,R.height)),ee<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ie=E?so:Math.floor,_e=ie(ee*R.width),oe=ie(ee*R.height);g===void 0&&(g=x(_e,oe));const he=k?x(_e,oe):g;return he.width=_e,he.height=oe,he.getContext("2d").drawImage(R,0,0,_e,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+_e+"x"+oe+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function b(R){return Pa(R.width)&&Pa(R.height)}function y(R){return a?!1:R.wrapS!==en||R.wrapT!==en||R.minFilter!==it&&R.minFilter!==kt}function M(R,E){return R.generateMipmaps&&E&&R.minFilter!==it&&R.minFilter!==kt}function w(R){r.generateMipmap(R)}function P(R,E,k,ne,ee=!1){if(a===!1)return E;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=E;if(E===r.RED&&(k===r.FLOAT&&(ie=r.R32F),k===r.HALF_FLOAT&&(ie=r.R16F),k===r.UNSIGNED_BYTE&&(ie=r.R8)),E===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(ie=r.R8UI),k===r.UNSIGNED_SHORT&&(ie=r.R16UI),k===r.UNSIGNED_INT&&(ie=r.R32UI),k===r.BYTE&&(ie=r.R8I),k===r.SHORT&&(ie=r.R16I),k===r.INT&&(ie=r.R32I)),E===r.RG&&(k===r.FLOAT&&(ie=r.RG32F),k===r.HALF_FLOAT&&(ie=r.RG16F),k===r.UNSIGNED_BYTE&&(ie=r.RG8)),E===r.RGBA){const _e=ee?to:$e.getTransfer(ne);k===r.FLOAT&&(ie=r.RGBA32F),k===r.HALF_FLOAT&&(ie=r.RGBA16F),k===r.UNSIGNED_BYTE&&(ie=_e===tt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function S(R,E,k){return M(R,k)===!0||R.isFramebufferTexture&&R.minFilter!==it&&R.minFilter!==kt?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function T(R){return R===it||R===Ta||R===Ks?r.NEAREST:r.LINEAR}function F(R){const E=R.target;E.removeEventListener("dispose",F),B(E),E.isVideoTexture&&_.delete(E)}function N(R){const E=R.target;E.removeEventListener("dispose",N),O(E)}function B(R){const E=n.get(R);if(E.__webglInit===void 0)return;const k=R.source,ne=m.get(k);if(ne){const ee=ne[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&C(R),Object.keys(ne).length===0&&m.delete(k)}n.remove(R)}function C(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const k=R.source,ne=m.get(k);delete ne[E.__cacheKey],o.memory.textures--}function O(R){const E=R.texture,k=n.get(R),ne=n.get(E);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(k.__webglFramebuffer[ee]))for(let ie=0;ie<k.__webglFramebuffer[ee].length;ie++)r.deleteFramebuffer(k.__webglFramebuffer[ee][ie]);else r.deleteFramebuffer(k.__webglFramebuffer[ee]);k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[ee])}else{if(Array.isArray(k.__webglFramebuffer))for(let ee=0;ee<k.__webglFramebuffer.length;ee++)r.deleteFramebuffer(k.__webglFramebuffer[ee]);else r.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ee=0;ee<k.__webglColorRenderbuffer.length;ee++)k.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[ee]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,ie=E.length;ee<ie;ee++){const _e=n.get(E[ee]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(E[ee])}n.remove(E),n.remove(R)}let G=0;function q(){G=0}function te(){const R=G;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),G+=1,R}function K(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function Z(R,E){const k=n.get(R);if(R.isVideoTexture&&pt(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(k,R,E);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+E)}function ae(R,E){const k=n.get(R);if(R.version>0&&k.__version!==R.version){Pe(k,R,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+E)}function le(R,E){const k=n.get(R);if(R.version>0&&k.__version!==R.version){Pe(k,R,E);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+E)}function Y(R,E){const k=n.get(R);if(R.version>0&&k.__version!==R.version){Re(k,R,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+E)}const J={[ar]:r.REPEAT,[en]:r.CLAMP_TO_EDGE,[eo]:r.MIRRORED_REPEAT},de={[it]:r.NEAREST,[Ta]:r.NEAREST_MIPMAP_NEAREST,[Ks]:r.NEAREST_MIPMAP_LINEAR,[kt]:r.LINEAR,[qu]:r.LINEAR_MIPMAP_NEAREST,[yi]:r.LINEAR_MIPMAP_LINEAR},ve={[Ud]:r.NEVER,[Vd]:r.ALWAYS,[Od]:r.LESS,[nh]:r.LEQUAL,[Bd]:r.EQUAL,[Hd]:r.GEQUAL,[zd]:r.GREATER,[kd]:r.NOTEQUAL};function be(R,E,k){if(k?(r.texParameteri(R,r.TEXTURE_WRAP_S,J[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,J[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,J[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,de[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,de[E.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==en||E.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,T(E.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==it&&E.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ve[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===it||E.minFilter!==Ks&&E.minFilter!==yi||E.type===Ut&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Yr&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(R,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Ne(R,E){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",F));const ne=E.source;let ee=m.get(ne);ee===void 0&&(ee={},m.set(ne,ee));const ie=K(E);if(ie!==R.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[ie].usedTimes++;const _e=ee[R.__cacheKey];_e!==void 0&&(ee[R.__cacheKey].usedTimes--,_e.usedTimes===0&&C(E)),R.__cacheKey=ie,R.__webglTexture=ee[ie].texture}return k}function Pe(R,E,k){let ne=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=r.TEXTURE_3D);const ee=Ne(R,E),ie=E.source;t.bindTexture(ne,R.__webglTexture,r.TEXTURE0+k);const _e=n.get(ie);if(ie.version!==_e.__version||ee===!0){t.activeTexture(r.TEXTURE0+k);const oe=$e.getPrimaries($e.workingColorSpace),he=E.colorSpace===tn?null:$e.getPrimaries(E.colorSpace),D=E.colorSpace===tn||oe===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);const se=y(E)&&b(E.image)===!1;let $=v(E.image,se,!1,u);$=mt(E,$);const Te=b($)||a,ge=s.convert(E.format,E.colorSpace);let Ee=s.convert(E.type),me=P(E.internalFormat,ge,Ee,E.colorSpace,E.isVideoTexture);be(ne,E,Te);let pe;const We=E.mipmaps,I=a&&E.isVideoTexture!==!0&&me!==Ju,ce=_e.__version===void 0||ee===!0,Q=S(E,$,Te);if(E.isDepthTexture)me=r.DEPTH_COMPONENT,a?E.type===Ut?me=r.DEPTH_COMPONENT32F:E.type===Yt?me=r.DEPTH_COMPONENT24:E.type===vi?me=r.DEPTH24_STENCIL8:me=r.DEPTH_COMPONENT16:E.type===Ut&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===xi&&me===r.DEPTH_COMPONENT&&E.type!==uo&&E.type!==Yt&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Yt,Ee=s.convert(E.type)),E.format===lr&&me===r.DEPTH_COMPONENT&&(me=r.DEPTH_STENCIL,E.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=vi,Ee=s.convert(E.type))),ce&&(I?t.texStorage2D(r.TEXTURE_2D,1,me,$.width,$.height):t.texImage2D(r.TEXTURE_2D,0,me,$.width,$.height,0,ge,Ee,null));else if(E.isDataTexture)if(We.length>0&&Te){I&&ce&&t.texStorage2D(r.TEXTURE_2D,Q,me,We[0].width,We[0].height);for(let j=0,re=We.length;j<re;j++)pe=We[j],I?t.texSubImage2D(r.TEXTURE_2D,j,0,0,pe.width,pe.height,ge,Ee,pe.data):t.texImage2D(r.TEXTURE_2D,j,me,pe.width,pe.height,0,ge,Ee,pe.data);E.generateMipmaps=!1}else I?(ce&&t.texStorage2D(r.TEXTURE_2D,Q,me,$.width,$.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,$.width,$.height,ge,Ee,$.data)):t.texImage2D(r.TEXTURE_2D,0,me,$.width,$.height,0,ge,Ee,$.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){I&&ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Q,me,We[0].width,We[0].height,$.depth);for(let j=0,re=We.length;j<re;j++)pe=We[j],E.format!==Mt?ge!==null?I?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,pe.width,pe.height,$.depth,ge,pe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,me,pe.width,pe.height,$.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,pe.width,pe.height,$.depth,ge,Ee,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,me,pe.width,pe.height,$.depth,0,ge,Ee,pe.data)}else{I&&ce&&t.texStorage2D(r.TEXTURE_2D,Q,me,We[0].width,We[0].height);for(let j=0,re=We.length;j<re;j++)pe=We[j],E.format!==Mt?ge!==null?I?t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,pe.width,pe.height,ge,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,j,me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage2D(r.TEXTURE_2D,j,0,0,pe.width,pe.height,ge,Ee,pe.data):t.texImage2D(r.TEXTURE_2D,j,me,pe.width,pe.height,0,ge,Ee,pe.data)}else if(E.isDataArrayTexture)I?(ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Q,me,$.width,$.height,$.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ge,Ee,$.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,me,$.width,$.height,$.depth,0,ge,Ee,$.data);else if(E.isData3DTexture)I?(ce&&t.texStorage3D(r.TEXTURE_3D,Q,me,$.width,$.height,$.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ge,Ee,$.data)):t.texImage3D(r.TEXTURE_3D,0,me,$.width,$.height,$.depth,0,ge,Ee,$.data);else if(E.isFramebufferTexture){if(ce)if(I)t.texStorage2D(r.TEXTURE_2D,Q,me,$.width,$.height);else{let j=$.width,re=$.height;for(let Me=0;Me<Q;Me++)t.texImage2D(r.TEXTURE_2D,Me,me,j,re,0,ge,Ee,null),j>>=1,re>>=1}}else if(We.length>0&&Te){I&&ce&&t.texStorage2D(r.TEXTURE_2D,Q,me,We[0].width,We[0].height);for(let j=0,re=We.length;j<re;j++)pe=We[j],I?t.texSubImage2D(r.TEXTURE_2D,j,0,0,ge,Ee,pe):t.texImage2D(r.TEXTURE_2D,j,me,ge,Ee,pe);E.generateMipmaps=!1}else I?(ce&&t.texStorage2D(r.TEXTURE_2D,Q,me,$.width,$.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ge,Ee,$)):t.texImage2D(r.TEXTURE_2D,0,me,ge,Ee,$);M(E,Te)&&w(ne),_e.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Re(R,E,k){if(E.image.length!==6)return;const ne=Ne(R,E),ee=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+k);const ie=n.get(ee);if(ee.version!==ie.__version||ne===!0){t.activeTexture(r.TEXTURE0+k);const _e=$e.getPrimaries($e.workingColorSpace),oe=E.colorSpace===tn?null:$e.getPrimaries(E.colorSpace),he=E.colorSpace===tn||_e===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const D=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,$=[];for(let j=0;j<6;j++)!D&&!se?$[j]=v(E.image[j],!1,!0,c):$[j]=se?E.image[j].image:E.image[j],$[j]=mt(E,$[j]);const Te=$[0],ge=b(Te)||a,Ee=s.convert(E.format,E.colorSpace),me=s.convert(E.type),pe=P(E.internalFormat,Ee,me,E.colorSpace),We=a&&E.isVideoTexture!==!0,I=ie.__version===void 0||ne===!0;let ce=S(E,Te,ge);be(r.TEXTURE_CUBE_MAP,E,ge);let Q;if(D){We&&I&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,pe,Te.width,Te.height);for(let j=0;j<6;j++){Q=$[j].mipmaps;for(let re=0;re<Q.length;re++){const Me=Q[re];E.format!==Mt?Ee!==null?We?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,0,0,Me.width,Me.height,Ee,Me.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,pe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,0,0,Me.width,Me.height,Ee,me,Me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,pe,Me.width,Me.height,0,Ee,me,Me.data)}}}else{Q=E.mipmaps,We&&I&&(Q.length>0&&ce++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,pe,$[0].width,$[0].height));for(let j=0;j<6;j++)if(se){We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,$[j].width,$[j].height,Ee,me,$[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,pe,$[j].width,$[j].height,0,Ee,me,$[j].data);for(let re=0;re<Q.length;re++){const Xe=Q[re].image[j].image;We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,0,0,Xe.width,Xe.height,Ee,me,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,pe,Xe.width,Xe.height,0,Ee,me,Xe.data)}}else{We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ee,me,$[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,pe,Ee,me,$[j]);for(let re=0;re<Q.length;re++){const Me=Q[re];We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,0,0,Ee,me,Me.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,pe,Ee,me,Me.image[j])}}}M(E,ge)&&w(r.TEXTURE_CUBE_MAP),ie.__version=ee.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Oe(R,E,k,ne,ee,ie){const _e=s.convert(k.format,k.colorSpace),oe=s.convert(k.type),he=P(k.internalFormat,_e,oe,k.colorSpace);if(!n.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>ie),$=Math.max(1,E.height>>ie);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,ie,he,se,$,E.depth,0,_e,oe,null):t.texImage2D(ee,ie,he,se,$,0,_e,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),je(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,ee,n.get(k).__webglTexture,0,De(E)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,ee,n.get(k).__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function z(R,E,k){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let ne=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(k||je(E)){const ee=E.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Ut?ne=r.DEPTH_COMPONENT32F:ee.type===Yt&&(ne=r.DEPTH_COMPONENT24));const ie=De(E);je(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,ne,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,ne,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,ne,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const ne=De(E);k&&je(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,E.width,E.height):je(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const ne=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0;ee<ne.length;ee++){const ie=ne[ee],_e=s.convert(ie.format,ie.colorSpace),oe=s.convert(ie.type),he=P(ie.internalFormat,_e,oe,ie.colorSpace),D=De(E);k&&je(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,D,he,E.width,E.height):je(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D,he,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,he,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function vt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);const ne=n.get(E.depthTexture).__webglTexture,ee=De(E);if(E.depthTexture.format===xi)je(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(E.depthTexture.format===lr)je(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ye(R){const E=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");vt(E.__webglFramebuffer,R)}else if(k){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]=r.createRenderbuffer(),z(E.__webglDepthbuffer[ne],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),z(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(R,E,k){const ne=n.get(R);E!==void 0&&Oe(ne.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&ye(R)}function Le(R){const E=R.texture,k=n.get(R),ne=n.get(E);R.addEventListener("dispose",N),R.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=E.version,o.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,ie=R.isWebGLMultipleRenderTargets===!0,_e=b(R)||a;if(ee){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let he=0;he<E.mipmaps.length;he++)k.__webglFramebuffer[oe][he]=r.createFramebuffer()}else k.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)k.__webglFramebuffer[oe]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ie)if(i.drawBuffers){const oe=R.texture;for(let he=0,D=oe.length;he<D;he++){const se=n.get(oe[he]);se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&je(R)===!1){const oe=ie?E:[E];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let he=0;he<oe.length;he++){const D=oe[he];k.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[he]);const se=s.convert(D.format,D.colorSpace),$=s.convert(D.type),Te=P(D.internalFormat,se,$,D.colorSpace,R.isXRRenderTarget===!0),ge=De(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,Te,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,k.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),z(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),be(r.TEXTURE_CUBE_MAP,E,_e);for(let oe=0;oe<6;oe++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)Oe(k.__webglFramebuffer[oe][he],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else Oe(k.__webglFramebuffer[oe],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);M(E,_e)&&w(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const oe=R.texture;for(let he=0,D=oe.length;he<D;he++){const se=oe[he],$=n.get(se);t.bindTexture(r.TEXTURE_2D,$.__webglTexture),be(r.TEXTURE_2D,se,_e),Oe(k.__webglFramebuffer,R,se,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,0),M(se,_e)&&w(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?oe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,ne.__webglTexture),be(oe,E,_e),a&&E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)Oe(k.__webglFramebuffer[he],R,E,r.COLOR_ATTACHMENT0,oe,he);else Oe(k.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,oe,0);M(E,_e)&&w(oe),t.unbindTexture()}R.depthBuffer&&ye(R)}function et(R){const E=b(R)||a,k=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ne=0,ee=k.length;ne<ee;ne++){const ie=k[ne];if(M(ie,E)){const _e=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,oe=n.get(ie).__webglTexture;t.bindTexture(_e,oe),w(_e),t.unbindTexture()}}}function Be(R){if(a&&R.samples>0&&je(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],k=R.width,ne=R.height;let ee=r.COLOR_BUFFER_BIT;const ie=[],_e=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=n.get(R),he=R.isWebGLMultipleRenderTargets===!0;if(he)for(let D=0;D<E.length;D++)t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let D=0;D<E.length;D++){ie.push(r.COLOR_ATTACHMENT0+D),R.depthBuffer&&ie.push(_e);const se=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(se===!1&&(R.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),he&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,oe.__webglColorRenderbuffer[D]),se===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[_e]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_e])),he){const $=n.get(E[D]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$,0)}r.blitFramebuffer(0,0,k,ne,0,0,k,ne,ee,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let D=0;D<E.length;D++){t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,oe.__webglColorRenderbuffer[D]);const se=n.get(E[D]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.TEXTURE_2D,se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function De(R){return Math.min(h,R.samples)}function je(R){const E=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pt(R){const E=o.render.frame;_.get(R)!==E&&(_.set(R,E),R.update())}function mt(R,E){const k=R.colorSpace,ne=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Ca||k!==wt&&k!==tn&&($e.getTransfer(k)===tt?a===!1?e.has("EXT_sRGB")===!0&&ne===Mt?(R.format=Ca,R.minFilter=kt,R.generateMipmaps=!1):E=sh.sRGBToLinear(E):(ne!==Mt||ee!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}this.allocateTextureUnit=te,this.resetTextureUnits=q,this.setTexture2D=Z,this.setTexture2DArray=ae,this.setTexture3D=le,this.setTextureCube=Y,this.rebindTextures=ke,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=je}function nv(r,e,t){const n=t.isWebGL2;function i(s,o=tn){let a;const l=$e.getTransfer(o);if(s===yn)return r.UNSIGNED_BYTE;if(s===ju)return r.UNSIGNED_SHORT_4_4_4_4;if(s===$u)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Aa)return r.BYTE;if(s===Yu)return r.SHORT;if(s===uo)return r.UNSIGNED_SHORT;if(s===kr)return r.INT;if(s===Yt)return r.UNSIGNED_INT;if(s===Ut)return r.FLOAT;if(s===Yr)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ad)return r.ALPHA;if(s===Mt)return r.RGBA;if(s===Rd)return r.LUMINANCE;if(s===Ld)return r.LUMINANCE_ALPHA;if(s===xi)return r.DEPTH_COMPONENT;if(s===lr)return r.DEPTH_STENCIL;if(s===Ca)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ku)return r.RED;if(s===$a)return r.RED_INTEGER;if(s===Zu)return r.RG;if(s===ho)return r.RG_INTEGER;if(s===jr)return r.RGBA_INTEGER;if(s===Mo||s===Eo||s===wo||s===To)if(l===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Mo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Eo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===To)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Mo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Eo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===To)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Al||s===Rl||s===Ll||s===Cl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Al)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ll)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Cl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ju)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Pl||s===Dl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Pl)return l===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Dl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Il||s===Nl||s===Fl||s===Ul||s===Ol||s===Bl||s===zl||s===kl||s===Hl||s===Vl||s===Gl||s===Wl||s===Xl||s===ql)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Il)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ul)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ol)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===kl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ql)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ao||s===Yl||s===jl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ao)return l===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cd||s===$l||s===Kl||s===Zl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ao)return a.COMPRESSED_RED_RGTC1_EXT;if(s===$l)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vi?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class iv extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gi extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rv={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sv extends Mi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const g=t.getContextAttributes();let m=null,f=null;const x=[],v=[],b=new Se;let y=null;const M=new Ft;M.layers.enable(1),M.viewport=new Ke;const w=new Ft;w.layers.enable(2),w.viewport=new Ke;const P=[M,w],S=new iv;S.layers.enable(1),S.layers.enable(2);let T=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=x[Y];return J===void 0&&(J=new Zo,x[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=x[Y];return J===void 0&&(J=new Zo,x[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=x[Y];return J===void 0&&(J=new Zo,x[Y]=J),J.getHandSpace()};function N(Y){const J=v.indexOf(Y.inputSource);if(J===-1)return;const de=x[J];de!==void 0&&(de.update(Y.inputSource,Y.frame,c||o),de.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",C);for(let Y=0;Y<x.length;Y++){const J=v[Y];J!==null&&(v[Y]=null,x[Y].disconnect(J))}T=null,F=null,e.setRenderTarget(m),p=null,d=null,h=null,i=null,f=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",B),i.addEventListener("inputsourceschange",C),g.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Qn(p.framebufferWidth,p.framebufferHeight,{format:Mt,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,de=null,ve=null;g.depth&&(ve=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=g.stencil?lr:xi,de=g.stencil?vi:Yt);const be={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Qn(d.textureWidth,d.textureHeight,{format:Mt,type:yn,depthTexture:new _h(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ne=e.properties.get(f);Ne.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function C(Y){for(let J=0;J<Y.removed.length;J++){const de=Y.removed[J],ve=v.indexOf(de);ve>=0&&(v[ve]=null,x[ve].disconnect(de))}for(let J=0;J<Y.added.length;J++){const de=Y.added[J];let ve=v.indexOf(de);if(ve===-1){for(let Ne=0;Ne<x.length;Ne++)if(Ne>=v.length){v.push(de),ve=Ne;break}else if(v[Ne]===null){v[Ne]=de,ve=Ne;break}if(ve===-1)break}const be=x[ve];be&&be.connect(de)}}const O=new L,G=new L;function q(Y,J,de){O.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(de.matrixWorld);const ve=O.distanceTo(G),be=J.projectionMatrix.elements,Ne=de.projectionMatrix.elements,Pe=be[14]/(be[10]-1),Re=be[14]/(be[10]+1),Oe=(be[9]+1)/be[5],z=(be[9]-1)/be[5],vt=(be[8]-1)/be[0],ye=(Ne[8]+1)/Ne[0],ke=Pe*vt,Le=Pe*ye,et=ve/(-vt+ye),Be=et*-vt;J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Be),Y.translateZ(et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const De=Pe+et,je=Re+et,pt=ke-Be,mt=Le+(ve-Be),R=Oe*Re/je*De,E=z*Re/je*De;Y.projectionMatrix.makePerspective(pt,mt,R,E,De,je),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function te(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;S.near=w.near=M.near=Y.near,S.far=w.far=M.far=Y.far,(T!==S.near||F!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,F=S.far);const J=Y.parent,de=S.cameras;te(S,J);for(let ve=0;ve<de.length;ve++)te(de[ve],J);de.length===2?q(S,M,w):S.projectionMatrix.copy(M.projectionMatrix),K(Y,S,J)};function K(Y,J,de){de===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(de.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ur*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)};let Z=null;function ae(Y,J){if(u=J.getViewerPose(c||o),_=J,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ve=!1;de.length!==S.cameras.length&&(S.cameras.length=0,ve=!0);for(let be=0;be<de.length;be++){const Ne=de[be];let Pe=null;if(p!==null)Pe=p.getViewport(Ne);else{const Oe=h.getViewSubImage(d,Ne);Pe=Oe.viewport,be===0&&(e.setRenderTargetTextures(f,Oe.colorTexture,d.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(f))}let Re=P[be];Re===void 0&&(Re=new Ft,Re.layers.enable(be),Re.viewport=new Ke,P[be]=Re),Re.matrix.fromArray(Ne.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ne.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),be===0&&(S.matrix.copy(Re.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ve===!0&&S.cameras.push(Re)}}for(let de=0;de<x.length;de++){const ve=v[de],be=x[de];ve!==null&&be!==void 0&&be.update(ve,J,c||o)}Z&&Z(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const le=new mh;le.setAnimationLoop(ae),this.setAnimationLoop=function(Y){Z=Y},this.dispose=function(){}}}function ov(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,dh(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,v,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,x,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ot&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ot&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ot&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function av(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const b=v.program;n.uniformBlockBinding(x,b)}function c(x,v){let b=i[x.id];b===void 0&&(_(x),b=u(x),i[x.id]=b,x.addEventListener("dispose",m));const y=v.program;n.updateUBOMapping(x,y);const M=e.render.frame;s[x.id]!==M&&(d(x),s[x.id]=M)}function u(x){const v=h();x.__bindingPointIndex=v;const b=r.createBuffer(),y=x.__size,M=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,y,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,b),b}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],b=x.uniforms,y=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let M=0,w=b.length;M<w;M++){const P=b[M];if(p(P,M,y)===!0){const S=P.__offset,T=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let N=0;N<T.length;N++){const B=T[N],C=g(B);typeof B=="number"?(P.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,S+F,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=B.elements[0],P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=B.elements[0],P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=B.elements[0]):(B.toArray(P.__data,F),F+=C.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,S,P.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(x,v,b){const y=x.value;if(b[v]===void 0){if(typeof y=="number")b[v]=y;else{const M=Array.isArray(y)?y:[y],w=[];for(let P=0;P<M.length;P++)w.push(M[P].clone());b[v]=w}return!0}else if(typeof y=="number"){if(b[v]!==y)return b[v]=y,!0}else{const M=Array.isArray(b[v])?b[v]:[b[v]],w=Array.isArray(y)?y:[y];for(let P=0;P<M.length;P++){const S=M[P];if(S.equals(w[P])===!1)return S.copy(w[P]),!0}}return!1}function _(x){const v=x.uniforms;let b=0;const y=16;let M=0;for(let w=0,P=v.length;w<P;w++){const S=v[w],T={boundary:0,storage:0},F=Array.isArray(S.value)?S.value:[S.value];for(let N=0,B=F.length;N<B;N++){const C=F[N],O=g(C);T.boundary+=O.boundary,T.storage+=O.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=b,w>0){M=b%y;const N=y-M;M!==0&&N-T.boundary<0&&(b+=y-M,S.__offset=b)}b+=T.storage}return M=b%y,M>0&&(b+=y-M),x.__size=b,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function f(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:f}}class Sh{constructor(e={}){const{canvas:t=rf(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lt,this._useLegacyLights=!1,this.toneMapping=Zn,this.toneMappingExposure=1;const v=this;let b=!1,y=0,M=0,w=null,P=-1,S=null;const T=new Ke,F=new Ke;let N=null;const B=new Fe(0);let C=0,O=t.width,G=t.height,q=1,te=null,K=null;const Z=new Ke(0,0,O,G),ae=new Ke(0,0,O,G);let le=!1;const Y=new Ja;let J=!1,de=!1,ve=null;const be=new we,Ne=new Se,Pe=new L,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return w===null?q:1}let z=n;function vt(A,U){for(let V=0;V<A.length;V++){const W=A[V],H=t.getContext(W,U);if(H!==null)return H}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ja}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ce,!1),z===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),z=vt(U,A),z===null)throw vt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ye,ke,Le,et,Be,De,je,pt,mt,R,E,k,ne,ee,ie,_e,oe,he,D,se,$,Te,ge,Ee;function me(){ye=new v_(z),ke=new d_(z,ye,e),ye.init(ke),Te=new nv(z,ye,ke),Le=new ev(z,ye,ke),et=new y_(z),Be=new kg,De=new tv(z,ye,Le,Be,ke,Te,et),je=new p_(v),pt=new g_(v),mt=new Lf(z,ke),ge=new u_(z,ye,mt,ke),R=new x_(z,mt,et,ge),E=new w_(z,R,mt,et),D=new E_(z,ke,De),_e=new f_(Be),k=new zg(v,je,pt,ye,ke,ge,_e),ne=new ov(v,Be),ee=new Vg,ie=new jg(ye,ke),he=new c_(v,je,pt,Le,E,d,l),oe=new Qg(v,E,ke),Ee=new av(z,et,ke,Le),se=new h_(z,ye,et,ke),$=new b_(z,ye,et,ke),et.programs=k.programs,v.capabilities=ke,v.extensions=ye,v.properties=Be,v.renderLists=ee,v.shadowMap=oe,v.state=Le,v.info=et}me();const pe=new sv(v,z);this.xr=pe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(O,G,!1))},this.getSize=function(A){return A.set(O,G)},this.setSize=function(A,U,V=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,G=U,t.width=Math.floor(A*q),t.height=Math.floor(U*q),V===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(O*q,G*q).floor()},this.setDrawingBufferSize=function(A,U,V){O=A,G=U,q=V,t.width=Math.floor(A*V),t.height=Math.floor(U*V),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,U,V,W){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,U,V,W),Le.viewport(T.copy(Z).multiplyScalar(q).floor())},this.getScissor=function(A){return A.copy(ae)},this.setScissor=function(A,U,V,W){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,U,V,W),Le.scissor(F.copy(ae).multiplyScalar(q).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(A){Le.setScissorTest(le=A)},this.setOpaqueSort=function(A){te=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(A=!0,U=!0,V=!0){let W=0;if(A){let H=!1;if(w!==null){const fe=w.texture.format;H=fe===jr||fe===ho||fe===$a}if(H){const fe=w.texture.type,xe=fe===yn||fe===Yt||fe===uo||fe===vi||fe===ju||fe===$u,Ae=he.getClearColor(),Ie=he.getClearAlpha(),Ve=Ae.r,Ue=Ae.g,ze=Ae.b;xe?(p[0]=Ve,p[1]=Ue,p[2]=ze,p[3]=Ie,z.clearBufferuiv(z.COLOR,0,p)):(_[0]=Ve,_[1]=Ue,_[2]=ze,_[3]=Ie,z.clearBufferiv(z.COLOR,0,_))}else W|=z.COLOR_BUFFER_BIT}U&&(W|=z.DEPTH_BUFFER_BIT),V&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ee.dispose(),ie.dispose(),Be.dispose(),je.dispose(),pt.dispose(),E.dispose(),ge.dispose(),Ee.dispose(),k.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Pt),pe.removeEventListener("sessionend",Qe),ve&&(ve.dispose(),ve=null),Dt.stop()};function We(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=et.autoReset,U=oe.enabled,V=oe.autoUpdate,W=oe.needsUpdate,H=oe.type;me(),et.autoReset=A,oe.enabled=U,oe.autoUpdate=V,oe.needsUpdate=W,oe.type=H}function ce(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Q(A){const U=A.target;U.removeEventListener("dispose",Q),j(U)}function j(A){re(A),Be.remove(A)}function re(A){const U=Be.get(A).programs;U!==void 0&&(U.forEach(function(V){k.releaseProgram(V)}),A.isShaderMaterial&&k.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,V,W,H,fe){U===null&&(U=Re);const xe=H.isMesh&&H.matrixWorld.determinant()<0,Ae=Gh(A,U,V,W,H);Le.setMaterial(W,xe);let Ie=V.index,Ve=1;if(W.wireframe===!0){if(Ie=R.getWireframeAttribute(V),Ie===void 0)return;Ve=2}const Ue=V.drawRange,ze=V.attributes.position;let ct=Ue.start*Ve,Wt=(Ue.start+Ue.count)*Ve;fe!==null&&(ct=Math.max(ct,fe.start*Ve),Wt=Math.min(Wt,(fe.start+fe.count)*Ve)),Ie!==null?(ct=Math.max(ct,0),Wt=Math.min(Wt,Ie.count)):ze!=null&&(ct=Math.max(ct,0),Wt=Math.min(Wt,ze.count));const bt=Wt-ct;if(bt<0||bt===1/0)return;ge.setup(H,W,Ae,V,Ie);let Tn,rt=se;if(Ie!==null&&(Tn=mt.get(Ie),rt=$,rt.setIndex(Tn)),H.isMesh)W.wireframe===!0?(Le.setLineWidth(W.wireframeLinewidth*Oe()),rt.setMode(z.LINES)):rt.setMode(z.TRIANGLES);else if(H.isLine){let qe=W.linewidth;qe===void 0&&(qe=1),Le.setLineWidth(qe*Oe()),H.isLineSegments?rt.setMode(z.LINES):H.isLineLoop?rt.setMode(z.LINE_LOOP):rt.setMode(z.LINE_STRIP)}else H.isPoints?rt.setMode(z.POINTS):H.isSprite&&rt.setMode(z.TRIANGLES);if(H.isBatchedMesh)rt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)rt.renderInstances(ct,bt,H.count);else if(V.isInstancedBufferGeometry){const qe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,xo=Math.min(V.instanceCount,qe);rt.renderInstances(ct,bt,xo)}else rt.render(ct,bt)};function Me(A,U,V){A.transparent===!0&&A.side===un&&A.forceSinglePass===!1?(A.side=Ot,A.needsUpdate=!0,ns(A,U,V),A.side=pn,A.needsUpdate=!0,ns(A,U,V),A.side=un):ns(A,U,V)}this.compile=function(A,U,V=null){V===null&&(V=A),m=ie.get(V),m.init(),x.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),A!==V&&A.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(v._useLegacyLights);const W=new Set;return A.traverse(function(H){const fe=H.material;if(fe)if(Array.isArray(fe))for(let xe=0;xe<fe.length;xe++){const Ae=fe[xe];Me(Ae,V,H),W.add(Ae)}else Me(fe,V,H),W.add(fe)}),x.pop(),m=null,W},this.compileAsync=function(A,U,V=null){const W=this.compile(A,U,V);return new Promise(H=>{function fe(){if(W.forEach(function(xe){Be.get(xe).currentProgram.isReady()&&W.delete(xe)}),W.size===0){H(A);return}setTimeout(fe,10)}ye.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Xe=null;function xt(A){Xe&&Xe(A)}function Pt(){Dt.stop()}function Qe(){Dt.start()}const Dt=new mh;Dt.setAnimationLoop(xt),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(A){Xe=A,pe.setAnimationLoop(A),A===null?Dt.stop():Dt.start()},pe.addEventListener("sessionstart",Pt),pe.addEventListener("sessionend",Qe),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(U),U=pe.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,U,w),m=ie.get(A,x.length),m.init(),x.push(m),be.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(be),de=this.localClippingEnabled,J=_e.init(this.clippingPlanes,de),g=ee.get(A,f.length),g.init(),f.push(g),gn(A,U,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(te,K),this.info.render.frame++,J===!0&&_e.beginShadows();const V=m.state.shadowsArray;if(oe.render(V,A,U),J===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(g,A),m.setupLights(v._useLegacyLights),U.isArrayCamera){const W=U.cameras;for(let H=0,fe=W.length;H<fe;H++){const xe=W[H];pl(g,A,xe,xe.viewport)}}else pl(g,A,U);w!==null&&(De.updateMultisampleRenderTarget(w),De.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(v,A,U),ge.resetDefaultState(),P=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function gn(A,U,V,W){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){W&&Pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(be);const xe=E.update(A),Ae=A.material;Ae.visible&&g.push(A,xe,Ae,V,Pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const xe=E.update(A),Ae=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pe.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Pe.copy(xe.boundingSphere.center)),Pe.applyMatrix4(A.matrixWorld).applyMatrix4(be)),Array.isArray(Ae)){const Ie=xe.groups;for(let Ve=0,Ue=Ie.length;Ve<Ue;Ve++){const ze=Ie[Ve],ct=Ae[ze.materialIndex];ct&&ct.visible&&g.push(A,xe,ct,V,Pe.z,ze)}}else Ae.visible&&g.push(A,xe,Ae,V,Pe.z,null)}}const fe=A.children;for(let xe=0,Ae=fe.length;xe<Ae;xe++)gn(fe[xe],U,V,W)}function pl(A,U,V,W){const H=A.opaque,fe=A.transmissive,xe=A.transparent;m.setupLightsView(V),J===!0&&_e.setGlobalState(v.clippingPlanes,V),fe.length>0&&Vh(H,fe,U,V),W&&Le.viewport(T.copy(W)),H.length>0&&ts(H,U,V),fe.length>0&&ts(fe,U,V),xe.length>0&&ts(xe,U,V),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Vh(A,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const fe=ke.isWebGL2;ve===null&&(ve=new Qn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Yr:yn,minFilter:yi,samples:fe?4:0})),v.getDrawingBufferSize(Ne),fe?ve.setSize(Ne.x,Ne.y):ve.setSize(so(Ne.x),so(Ne.y));const xe=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(B),C=v.getClearAlpha(),C<1&&v.setClearColor(16777215,.5),v.clear();const Ae=v.toneMapping;v.toneMapping=Zn,ts(A,V,W),De.updateMultisampleRenderTarget(ve),De.updateRenderTargetMipmap(ve);let Ie=!1;for(let Ve=0,Ue=U.length;Ve<Ue;Ve++){const ze=U[Ve],ct=ze.object,Wt=ze.geometry,bt=ze.material,Tn=ze.group;if(bt.side===un&&ct.layers.test(W.layers)){const rt=bt.side;bt.side=Ot,bt.needsUpdate=!0,ml(ct,V,W,Wt,bt,Tn),bt.side=rt,bt.needsUpdate=!0,Ie=!0}}Ie===!0&&(De.updateMultisampleRenderTarget(ve),De.updateRenderTargetMipmap(ve)),v.setRenderTarget(xe),v.setClearColor(B,C),v.toneMapping=Ae}function ts(A,U,V){const W=U.isScene===!0?U.overrideMaterial:null;for(let H=0,fe=A.length;H<fe;H++){const xe=A[H],Ae=xe.object,Ie=xe.geometry,Ve=W===null?xe.material:W,Ue=xe.group;Ae.layers.test(V.layers)&&ml(Ae,U,V,Ie,Ve,Ue)}}function ml(A,U,V,W,H,fe){A.onBeforeRender(v,U,V,W,H,fe),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(v,U,V,W,A,fe),H.transparent===!0&&H.side===un&&H.forceSinglePass===!1?(H.side=Ot,H.needsUpdate=!0,v.renderBufferDirect(V,U,W,H,A,fe),H.side=pn,H.needsUpdate=!0,v.renderBufferDirect(V,U,W,H,A,fe),H.side=un):v.renderBufferDirect(V,U,W,H,A,fe),A.onAfterRender(v,U,V,W,H,fe)}function ns(A,U,V){U.isScene!==!0&&(U=Re);const W=Be.get(A),H=m.state.lights,fe=m.state.shadowsArray,xe=H.state.version,Ae=k.getParameters(A,H.state,fe,U,V),Ie=k.getProgramCacheKey(Ae);let Ve=W.programs;W.environment=A.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(A.isMeshStandardMaterial?pt:je).get(A.envMap||W.environment),Ve===void 0&&(A.addEventListener("dispose",Q),Ve=new Map,W.programs=Ve);let Ue=Ve.get(Ie);if(Ue!==void 0){if(W.currentProgram===Ue&&W.lightsStateVersion===xe)return gl(A,Ae),Ue}else Ae.uniforms=k.getUniforms(A),A.onBuild(V,Ae,v),A.onBeforeCompile(Ae,v),Ue=k.acquireProgram(Ae,Ie),Ve.set(Ie,Ue),W.uniforms=Ae.uniforms;const ze=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=_e.uniform),gl(A,Ae),W.needsLights=Xh(A),W.lightsStateVersion=xe,W.needsLights&&(ze.ambientLightColor.value=H.state.ambient,ze.lightProbe.value=H.state.probe,ze.directionalLights.value=H.state.directional,ze.directionalLightShadows.value=H.state.directionalShadow,ze.spotLights.value=H.state.spot,ze.spotLightShadows.value=H.state.spotShadow,ze.rectAreaLights.value=H.state.rectArea,ze.ltc_1.value=H.state.rectAreaLTC1,ze.ltc_2.value=H.state.rectAreaLTC2,ze.pointLights.value=H.state.point,ze.pointLightShadows.value=H.state.pointShadow,ze.hemisphereLights.value=H.state.hemi,ze.directionalShadowMap.value=H.state.directionalShadowMap,ze.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ze.spotShadowMap.value=H.state.spotShadowMap,ze.spotLightMatrix.value=H.state.spotLightMatrix,ze.spotLightMap.value=H.state.spotLightMap,ze.pointShadowMap.value=H.state.pointShadowMap,ze.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Ue,W.uniformsList=null,Ue}function _l(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=Zs.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function gl(A,U){const V=Be.get(A);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Gh(A,U,V,W,H){U.isScene!==!0&&(U=Re),De.resetTextureUnits();const fe=U.fog,xe=W.isMeshStandardMaterial?U.environment:null,Ae=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:wt,Ie=(W.isMeshStandardMaterial?pt:je).get(W.envMap||xe),Ve=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ue=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ze=!!V.morphAttributes.position,ct=!!V.morphAttributes.normal,Wt=!!V.morphAttributes.color;let bt=Zn;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(bt=v.toneMapping);const Tn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,rt=Tn!==void 0?Tn.length:0,qe=Be.get(W),xo=m.state.lights;if(J===!0&&(de===!0||A!==S)){const Kt=A===S&&W.id===P;_e.setState(W,A,Kt)}let at=!1;W.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==xo.state.version||qe.outputColorSpace!==Ae||H.isBatchedMesh&&qe.batching===!1||!H.isBatchedMesh&&qe.batching===!0||H.isInstancedMesh&&qe.instancing===!1||!H.isInstancedMesh&&qe.instancing===!0||H.isSkinnedMesh&&qe.skinning===!1||!H.isSkinnedMesh&&qe.skinning===!0||H.isInstancedMesh&&qe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&qe.instancingColor===!1&&H.instanceColor!==null||qe.envMap!==Ie||W.fog===!0&&qe.fog!==fe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==_e.numPlanes||qe.numIntersection!==_e.numIntersection)||qe.vertexAlphas!==Ve||qe.vertexTangents!==Ue||qe.morphTargets!==ze||qe.morphNormals!==ct||qe.morphColors!==Wt||qe.toneMapping!==bt||ke.isWebGL2===!0&&qe.morphTargetsCount!==rt)&&(at=!0):(at=!0,qe.__version=W.version);let ni=qe.currentProgram;at===!0&&(ni=ns(W,U,H));let vl=!1,br=!1,bo=!1;const Tt=ni.getUniforms(),ii=qe.uniforms;if(Le.useProgram(ni.program)&&(vl=!0,br=!0,bo=!0),W.id!==P&&(P=W.id,br=!0),vl||S!==A){Tt.setValue(z,"projectionMatrix",A.projectionMatrix),Tt.setValue(z,"viewMatrix",A.matrixWorldInverse);const Kt=Tt.map.cameraPosition;Kt!==void 0&&Kt.setValue(z,Pe.setFromMatrixPosition(A.matrixWorld)),ke.logarithmicDepthBuffer&&Tt.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Tt.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,br=!0,bo=!0)}if(H.isSkinnedMesh){Tt.setOptional(z,H,"bindMatrix"),Tt.setOptional(z,H,"bindMatrixInverse");const Kt=H.skeleton;Kt&&(ke.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Tt.setValue(z,"boneTexture",Kt.boneTexture,De)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Tt.setOptional(z,H,"batchingTexture"),Tt.setValue(z,"batchingTexture",H._matricesTexture,De));const yo=V.morphAttributes;if((yo.position!==void 0||yo.normal!==void 0||yo.color!==void 0&&ke.isWebGL2===!0)&&D.update(H,V,ni),(br||qe.receiveShadow!==H.receiveShadow)&&(qe.receiveShadow=H.receiveShadow,Tt.setValue(z,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ii.envMap.value=Ie,ii.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),br&&(Tt.setValue(z,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&Wh(ii,bo),fe&&W.fog===!0&&ne.refreshFogUniforms(ii,fe),ne.refreshMaterialUniforms(ii,W,q,G,ve),Zs.upload(z,_l(qe),ii,De)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Zs.upload(z,_l(qe),ii,De),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Tt.setValue(z,"center",H.center),Tt.setValue(z,"modelViewMatrix",H.modelViewMatrix),Tt.setValue(z,"normalMatrix",H.normalMatrix),Tt.setValue(z,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Kt=W.uniformsGroups;for(let So=0,qh=Kt.length;So<qh;So++)if(ke.isWebGL2){const xl=Kt[So];Ee.update(xl,ni),Ee.bind(xl,ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ni}function Wh(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Xh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,U,V){Be.get(A.texture).__webglTexture=U,Be.get(A.depthTexture).__webglTexture=V;const W=Be.get(A);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,U){const V=Be.get(A);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,V=0){w=A,y=U,M=V;let W=!0,H=null,fe=!1,xe=!1;if(A){const Ie=Be.get(A);Ie.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(z.FRAMEBUFFER,null),W=!1):Ie.__webglFramebuffer===void 0?De.setupRenderTarget(A):Ie.__hasExternalTextures&&De.rebindTextures(A,Be.get(A.texture).__webglTexture,Be.get(A.depthTexture).__webglTexture);const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(xe=!0);const Ue=Be.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?H=Ue[U][V]:H=Ue[U],fe=!0):ke.isWebGL2&&A.samples>0&&De.useMultisampledRTT(A)===!1?H=Be.get(A).__webglMultisampledFramebuffer:Array.isArray(Ue)?H=Ue[V]:H=Ue,T.copy(A.viewport),F.copy(A.scissor),N=A.scissorTest}else T.copy(Z).multiplyScalar(q).floor(),F.copy(ae).multiplyScalar(q).floor(),N=le;if(Le.bindFramebuffer(z.FRAMEBUFFER,H)&&ke.drawBuffers&&W&&Le.drawBuffers(A,H),Le.viewport(T),Le.scissor(F),Le.setScissorTest(N),fe){const Ie=Be.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ie.__webglTexture,V)}else if(xe){const Ie=Be.get(A.texture),Ve=U||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.__webglTexture,V||0,Ve)}P=-1},this.readRenderTargetPixels=function(A,U,V,W,H,fe,xe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Ae=Ae[xe]),Ae){Le.bindFramebuffer(z.FRAMEBUFFER,Ae);try{const Ie=A.texture,Ve=Ie.format,Ue=Ie.type;if(Ve!==Mt&&Te.convert(Ve)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Ue===Yr&&(ye.has("EXT_color_buffer_half_float")||ke.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ue!==yn&&Te.convert(Ue)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Ut&&(ke.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-W&&V>=0&&V<=A.height-H&&z.readPixels(U,V,W,H,Te.convert(Ve),Te.convert(Ue),fe)}finally{const Ie=w!==null?Be.get(w).__webglFramebuffer:null;Le.bindFramebuffer(z.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(A,U,V=0){const W=Math.pow(2,-V),H=Math.floor(U.image.width*W),fe=Math.floor(U.image.height*W);De.setTexture2D(U,0),z.copyTexSubImage2D(z.TEXTURE_2D,V,0,0,A.x,A.y,H,fe),Le.unbindTexture()},this.copyTextureToTexture=function(A,U,V,W=0){const H=U.image.width,fe=U.image.height,xe=Te.convert(V.format),Ae=Te.convert(V.type);De.setTexture2D(V,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment),U.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,A.x,A.y,H,fe,xe,Ae,U.image.data):U.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,xe,U.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,W,A.x,A.y,xe,Ae,U.image),W===0&&V.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(A,U,V,W,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=A.max.x-A.min.x+1,xe=A.max.y-A.min.y+1,Ae=A.max.z-A.min.z+1,Ie=Te.convert(W.format),Ve=Te.convert(W.type);let Ue;if(W.isData3DTexture)De.setTexture3D(W,0),Ue=z.TEXTURE_3D;else if(W.isDataArrayTexture)De.setTexture2DArray(W,0),Ue=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const ze=z.getParameter(z.UNPACK_ROW_LENGTH),ct=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Wt=z.getParameter(z.UNPACK_SKIP_PIXELS),bt=z.getParameter(z.UNPACK_SKIP_ROWS),Tn=z.getParameter(z.UNPACK_SKIP_IMAGES),rt=V.isCompressedTexture?V.mipmaps[0]:V.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,rt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,rt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,A.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,A.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,A.min.z),V.isDataTexture||V.isData3DTexture?z.texSubImage3D(Ue,H,U.x,U.y,U.z,fe,xe,Ae,Ie,Ve,rt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ue,H,U.x,U.y,U.z,fe,xe,Ae,Ie,rt.data)):z.texSubImage3D(Ue,H,U.x,U.y,U.z,fe,xe,Ae,Ie,Ve,rt),z.pixelStorei(z.UNPACK_ROW_LENGTH,ze),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ct),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Wt),z.pixelStorei(z.UNPACK_SKIP_ROWS,bt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Tn),H===0&&W.generateMipmaps&&z.generateMipmap(Ue),Le.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?De.setTextureCube(A,0):A.isData3DTexture?De.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?De.setTexture2DArray(A,0):De.setTexture2D(A,0),Le.unbindTexture()},this.resetState=function(){y=0,M=0,w=null,Le.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ka?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===fo?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===lt?Jn:eh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Jn?lt:wt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class lv extends Sh{}lv.prototype.isWebGL1Renderer=!0;class cv extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class uv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=La,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.InterleavedBuffer: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new L;class tl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vc=new L,Gc=new Ke,Wc=new Ke,hv=new L,Xc=new we,ws=new L,Jo=new _n,qc=new we,Qo=new Jr;class dv extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tl,this.bindMatrix=new we,this.bindMatrixInverse=new we,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ut),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ws),this.boundingBox.expandByPoint(ws)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ws),this.boundingSphere.expandByPoint(ws)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jo.copy(this.boundingSphere),Jo.applyMatrix4(i),e.ray.intersectsSphere(Jo)!==!1&&(qc.copy(i).invert(),Qo.copy(e.ray).applyMatrix4(qc),!(this.boundingBox!==null&&Qo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Td?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Gc.fromBufferAttribute(i.attributes.skinIndex,e),Wc.fromBufferAttribute(i.attributes.skinWeight,e),Vc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Wc.getComponent(s);if(o!==0){const a=Gc.getComponent(s);Xc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(hv.copy(Vc).applyMatrix4(Xc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Mh extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class oo extends Et{constructor(e=null,t=1,n=1,i,s,o,a,l,c=it,u=it,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yc=new we,fv=new we;class nl{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new we)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new we;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:fv;Yc.multiplyMatrices(a,t[s]),Yc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new nl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new oo(t,e,e,Mt,Ut);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Mh),this.bones.push(o),this.boneInverses.push(new we().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ia extends ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vi=new we,jc=new we,Ts=[],$c=new ut,pv=new we,wr=new Vt,Tr=new _n;class mv extends Vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ia(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,pv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ut),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),$c.copy(e.boundingBox).applyMatrix4(Vi),this.boundingBox.union($c)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),Tr.copy(e.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(Tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(n),e.ray.intersectsSphere(Tr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Vi),jc.multiplyMatrices(n,Vi),wr.matrixWorld=jc,wr.raycast(e,Ts);for(let o=0,a=Ts.length;o<a;o++){const l=Ts[o];l.instanceId=s,l.object=this,t.push(l)}Ts.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ia(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Eh extends Sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kc=new L,Zc=new L,Jc=new we,ea=new Jr,As=new _n;class il extends ot{constructor(e=new Bt,t=new Eh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Kc.fromBufferAttribute(t,i-1),Zc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Kc.distanceTo(Zc);e.setAttribute("lineDistance",new fn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(i),As.radius+=s,e.ray.intersectsSphere(As)===!1)return;Jc.copy(i).invert(),ea.copy(e.ray).applyMatrix4(Jc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,h=new L,d=new L,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const f=Math.max(0,o.start),x=Math.min(_.count,o.start+o.count);for(let v=f,b=x-1;v<b;v+=p){const y=_.getX(v),M=_.getX(v+1);if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,M),ea.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=f,b=x-1;v<b;v+=p){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),ea.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Qc=new L,eu=new L;class _v extends il{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Qc.fromBufferAttribute(t,i),eu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qc.distanceTo(eu);e.setAttribute("lineDistance",new fn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gv extends il{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class wh extends Sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tu=new we,Na=new Jr,Rs=new _n,Ls=new L;class vv extends ot{constructor(e=new Bt,t=new wh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(i),Rs.radius+=s,e.ray.intersectsSphere(Rs)===!1)return;tu.copy(i).invert(),Na.copy(e.ray).applyMatrix4(tu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=d,g=p;_<g;_++){const m=c.getX(_);Ls.fromBufferAttribute(h,m),nu(Ls,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,g=p;_<g;_++)Ls.fromBufferAttribute(h,_),nu(Ls,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nu(r,e,t,n,i,s,o){const a=Na.distanceSqToPoint(r);if(a<t){const l=new L;Na.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class rl extends Sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bn extends rl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Cs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function xv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function bv(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function iu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Th(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class es{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yv extends es{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jl,endingEnd:Jl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ql:s=e,a=2*t-n;break;case ec:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ql:o=e,l=2*n-t;break;case ec:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,f=-d*m+2*d*g-d*_,x=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,v=(-1-p)*m+(1.5+p)*g+.5*_,b=p*m-p*g;for(let y=0;y!==a;++y)s[y]=f*o[u+y]+x*o[c+y]+v*o[l+y]+b*o[h+y];return s}}class Sv extends es{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class Mv extends es{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cs(t,this.TimeBufferType),this.values=Cs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cs(e.times,Array),values:Cs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $r:t=this.InterpolantFactoryMethodDiscrete;break;case cr:t=this.InterpolantFactoryMethodLinear;break;case Ro:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return cr;case this.InterpolantFactoryMethodSmooth:return Ro}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&xv(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ro,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,p=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[d+_]||g!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=cr;class _r extends wn{}_r.prototype.ValueTypeName="bool";_r.prototype.ValueBufferType=Array;_r.prototype.DefaultInterpolation=$r;_r.prototype.InterpolantFactoryMethodLinear=void 0;_r.prototype.InterpolantFactoryMethodSmooth=void 0;class Ah extends wn{}Ah.prototype.ValueTypeName="color";class dr extends wn{}dr.prototype.ValueTypeName="number";class Ev extends es{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)En.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Si extends wn{InterpolantFactoryMethodLinear(e){return new Ev(this.times,this.values,this.getValueSize(),e)}}Si.prototype.ValueTypeName="quaternion";Si.prototype.DefaultInterpolation=cr;Si.prototype.InterpolantFactoryMethodSmooth=void 0;class gr extends wn{}gr.prototype.ValueTypeName="string";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=$r;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class fr extends wn{}fr.prototype.ValueTypeName="vector";class wv{constructor(e,t=-1,n,i=Pd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Av(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(wn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=bv(l);l=iu(l,1,u),c=iu(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new dr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,_,g){if(p.length!==0){const m=[],f=[];Th(p,m,f,_),m.length!==0&&g.push(new h(d,m,f))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)p[d[_].morphTargets[g]]=-1;for(const g in p){const m=[],f=[];for(let x=0;x!==d[_].morphTargets.length;++x){const v=d[_];m.push(v.time),f.push(v.morphTarget===g?1:0)}i.push(new dr(".morphTargetInfluence["+g+"]",m,f))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(fr,p+".position",d,"pos",i),n(Si,p+".quaternion",d,"rot",i),n(fr,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Tv(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return dr;case"vector":case"vector2":case"vector3":case"vector4":return fr;case"color":return Ah;case"quaternion":return Si;case"bool":case"boolean":return _r;case"string":return gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Av(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Tv(r.type);if(r.times===void 0){const t=[],n=[];Th(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const pr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Rv{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const Lv=new Rv;class vr{constructor(e){this.manager=e!==void 0?e:Lv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}vr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Dn={};class Cv extends Error{constructor(e,t){super(e),this.response=t}}class Rh extends vr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=pr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Dn[e]!==void 0){Dn[e].push({onLoad:t,onProgress:n,onError:i});return}Dn[e]=[],Dn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Dn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,_=p!==0;let g=0;const m=new ReadableStream({start(f){x();function x(){h.read().then(({done:v,value:b})=>{if(v)f.close();else{g+=b.byteLength;const y=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let M=0,w=u.length;M<w;M++){const P=u[M];P.onProgress&&P.onProgress(y)}f.enqueue(b),x()}})}}});return new Response(m)}else throw new Cv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{pr.add(e,c);const u=Dn[e];delete Dn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Dn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Dn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Pv extends vr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=pr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Kr("img");function l(){u(),pr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Dv extends vr{constructor(e){super(e)}load(e,t,n,i){const s=new Et,o=new Pv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class sl extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ta=new we,ru=new L,su=new L;class ol{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ja,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(ru),su.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(su),t.updateMatrixWorld(),ta.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Iv extends ol{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ur*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Nv extends sl{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Iv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ou=new we,Ar=new L,na=new L;class Fv extends ol{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ar.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ar),na.copy(n.position),na.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(na),n.updateMatrixWorld(),i.makeTranslation(-Ar.x,-Ar.y,-Ar.z),ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ou)}}class Uv extends sl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ov extends ol{constructor(){super(new mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bv extends sl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new Ov}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class zv extends vr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=pr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){pr.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const al="\\[\\]\\.:\\/",kv=new RegExp("["+al+"]","g"),ll="[^"+al+"]",Hv="[^"+al.replace("\\.","")+"]",Vv=/((?:WC+[\/:])*)/.source.replace("WC",ll),Gv=/(WCOD+)?/.source.replace("WCOD",Hv),Wv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ll),Xv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ll),qv=new RegExp("^"+Vv+Gv+Wv+Xv+"$"),Yv=["material","materials","bones","map"];class jv{constructor(e,t,n){const i=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kv,"")}static parseTrackName(e){const t=qv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Yv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=jv;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class au{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const lu=new L,Ps=new L;class Un{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){lu.subVectors(e,this.start),Ps.subVectors(this.end,this.start);const n=Ps.dot(Ps);let s=Ps.dot(lu)/n;return t&&(s=St(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ja);const cu={type:"change"},ia={type:"start"},uu={type:"end"},Ds=new Jr,hu=new vn,$v=Math.cos(70*ih.DEG2RAD);class Kv extends Mi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},this.touches={ONE:wi.ROTATE,TWO:wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",E),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(cu),n.update(),s=i.NONE},this.update=function(){const D=new L,se=new En().setFromUnitVectors(e.up,new L(0,1,0)),$=se.clone().invert(),Te=new L,ge=new En,Ee=new L,me=2*Math.PI;return function(We=null){const I=n.object.position;D.copy(I).sub(n.target),D.applyQuaternion(se),a.setFromVector3(D),n.autoRotate&&s===i.NONE&&F(S(We)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ce=n.minAzimuthAngle,Q=n.maxAzimuthAngle;isFinite(ce)&&isFinite(Q)&&(ce<-Math.PI?ce+=me:ce>Math.PI&&(ce-=me),Q<-Math.PI?Q+=me:Q>Math.PI&&(Q-=me),ce<=Q?a.theta=Math.max(ce,Math.min(Q,a.theta)):a.theta=a.theta>(ce+Q)/2?Math.max(ce,a.theta):Math.min(Q,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&M||n.object.isOrthographicCamera?a.radius=K(a.radius):a.radius=K(a.radius*c),D.setFromSpherical(a),D.applyQuaternion($),I.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let j=!1;if(n.zoomToCursor&&M){let re=null;if(n.object.isPerspectiveCamera){const Me=D.length();re=K(Me*c);const Xe=Me-re;n.object.position.addScaledVector(b,Xe),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Me=new L(y.x,y.y,0);Me.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),j=!0;const Xe=new L(y.x,y.y,0);Xe.unproject(n.object),n.object.position.sub(Xe).add(Me),n.object.updateMatrixWorld(),re=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;re!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(re).add(n.object.position):(Ds.origin.copy(n.object.position),Ds.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ds.direction))<$v?e.lookAt(n.target):(hu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ds.intersectPlane(hu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),j=!0);return c=1,M=!1,j||Te.distanceToSquared(n.object.position)>o||8*(1-ge.dot(n.object.quaternion))>o||Ee.distanceToSquared(n.target)>0?(n.dispatchEvent(cu),Te.copy(n.object.position),ge.copy(n.object.quaternion),Ee.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ee),n.domElement.removeEventListener("pointerdown",Be),n.domElement.removeEventListener("pointercancel",je),n.domElement.removeEventListener("wheel",R),n.domElement.removeEventListener("pointermove",De),n.domElement.removeEventListener("pointerup",je),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",E),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new au,l=new au;let c=1;const u=new L,h=new Se,d=new Se,p=new Se,_=new Se,g=new Se,m=new Se,f=new Se,x=new Se,v=new Se,b=new L,y=new Se;let M=!1;const w=[],P={};function S(D){return D!==null?2*Math.PI/60*n.autoRotateSpeed*D:2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function F(D){l.theta-=D}function N(D){l.phi-=D}const B=function(){const D=new L;return function($,Te){D.setFromMatrixColumn(Te,0),D.multiplyScalar(-$),u.add(D)}}(),C=function(){const D=new L;return function($,Te){n.screenSpacePanning===!0?D.setFromMatrixColumn(Te,1):(D.setFromMatrixColumn(Te,0),D.crossVectors(n.object.up,D)),D.multiplyScalar($),u.add(D)}}(),O=function(){const D=new L;return function($,Te){const ge=n.domElement;if(n.object.isPerspectiveCamera){const Ee=n.object.position;D.copy(Ee).sub(n.target);let me=D.length();me*=Math.tan(n.object.fov/2*Math.PI/180),B(2*$*me/ge.clientHeight,n.object.matrix),C(2*Te*me/ge.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B($*(n.object.right-n.object.left)/n.object.zoom/ge.clientWidth,n.object.matrix),C(Te*(n.object.top-n.object.bottom)/n.object.zoom/ge.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function te(D){if(!n.zoomToCursor)return;M=!0;const se=n.domElement.getBoundingClientRect(),$=D.clientX-se.left,Te=D.clientY-se.top,ge=se.width,Ee=se.height;y.x=$/ge*2-1,y.y=-(Te/Ee)*2+1,b.set(y.x,y.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function Z(D){h.set(D.clientX,D.clientY)}function ae(D){te(D),f.set(D.clientX,D.clientY)}function le(D){_.set(D.clientX,D.clientY)}function Y(D){d.set(D.clientX,D.clientY),p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const se=n.domElement;F(2*Math.PI*p.x/se.clientHeight),N(2*Math.PI*p.y/se.clientHeight),h.copy(d),n.update()}function J(D){x.set(D.clientX,D.clientY),v.subVectors(x,f),v.y>0?G(T()):v.y<0&&q(T()),f.copy(x),n.update()}function de(D){g.set(D.clientX,D.clientY),m.subVectors(g,_).multiplyScalar(n.panSpeed),O(m.x,m.y),_.copy(g),n.update()}function ve(D){te(D),D.deltaY<0?q(T()):D.deltaY>0&&G(T()),n.update()}function be(D){let se=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),se=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),se=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),se=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),se=!0;break}se&&(D.preventDefault(),n.update())}function Ne(){if(w.length===1)h.set(w[0].pageX,w[0].pageY);else{const D=.5*(w[0].pageX+w[1].pageX),se=.5*(w[0].pageY+w[1].pageY);h.set(D,se)}}function Pe(){if(w.length===1)_.set(w[0].pageX,w[0].pageY);else{const D=.5*(w[0].pageX+w[1].pageX),se=.5*(w[0].pageY+w[1].pageY);_.set(D,se)}}function Re(){const D=w[0].pageX-w[1].pageX,se=w[0].pageY-w[1].pageY,$=Math.sqrt(D*D+se*se);f.set(0,$)}function Oe(){n.enableZoom&&Re(),n.enablePan&&Pe()}function z(){n.enableZoom&&Re(),n.enableRotate&&Ne()}function vt(D){if(w.length==1)d.set(D.pageX,D.pageY);else{const $=he(D),Te=.5*(D.pageX+$.x),ge=.5*(D.pageY+$.y);d.set(Te,ge)}p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const se=n.domElement;F(2*Math.PI*p.x/se.clientHeight),N(2*Math.PI*p.y/se.clientHeight),h.copy(d)}function ye(D){if(w.length===1)g.set(D.pageX,D.pageY);else{const se=he(D),$=.5*(D.pageX+se.x),Te=.5*(D.pageY+se.y);g.set($,Te)}m.subVectors(g,_).multiplyScalar(n.panSpeed),O(m.x,m.y),_.copy(g)}function ke(D){const se=he(D),$=D.pageX-se.x,Te=D.pageY-se.y,ge=Math.sqrt($*$+Te*Te);x.set(0,ge),v.set(0,Math.pow(x.y/f.y,n.zoomSpeed)),G(v.y),f.copy(x)}function Le(D){n.enableZoom&&ke(D),n.enablePan&&ye(D)}function et(D){n.enableZoom&&ke(D),n.enableRotate&&vt(D)}function Be(D){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",De),n.domElement.addEventListener("pointerup",je)),ie(D),D.pointerType==="touch"?k(D):pt(D))}function De(D){n.enabled!==!1&&(D.pointerType==="touch"?ne(D):mt(D))}function je(D){_e(D),w.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",De),n.domElement.removeEventListener("pointerup",je)),n.dispatchEvent(uu),s=i.NONE}function pt(D){let se;switch(D.button){case 0:se=n.mouseButtons.LEFT;break;case 1:se=n.mouseButtons.MIDDLE;break;case 2:se=n.mouseButtons.RIGHT;break;default:se=-1}switch(se){case Ei.DOLLY:if(n.enableZoom===!1)return;ae(D),s=i.DOLLY;break;case Ei.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;le(D),s=i.PAN}else{if(n.enableRotate===!1)return;Z(D),s=i.ROTATE}break;case Ei.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;Z(D),s=i.ROTATE}else{if(n.enablePan===!1)return;le(D),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ia)}function mt(D){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Y(D);break;case i.DOLLY:if(n.enableZoom===!1)return;J(D);break;case i.PAN:if(n.enablePan===!1)return;de(D);break}}function R(D){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(D.preventDefault(),n.dispatchEvent(ia),ve(D),n.dispatchEvent(uu))}function E(D){n.enabled===!1||n.enablePan===!1||be(D)}function k(D){switch(oe(D),w.length){case 1:switch(n.touches.ONE){case wi.ROTATE:if(n.enableRotate===!1)return;Ne(),s=i.TOUCH_ROTATE;break;case wi.PAN:if(n.enablePan===!1)return;Pe(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case wi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Oe(),s=i.TOUCH_DOLLY_PAN;break;case wi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;z(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ia)}function ne(D){switch(oe(D),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;vt(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ye(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Le(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;et(D),n.update();break;default:s=i.NONE}}function ee(D){n.enabled!==!1&&D.preventDefault()}function ie(D){w.push(D)}function _e(D){delete P[D.pointerId];for(let se=0;se<w.length;se++)if(w[se].pointerId==D.pointerId){w.splice(se,1);return}}function oe(D){let se=P[D.pointerId];se===void 0&&(se=new Se,P[D.pointerId]=se),se.set(D.pageX,D.pageY)}function he(D){const se=D.pointerId===w[0].pointerId?w[1]:w[0];return P[se.pointerId]}n.domElement.addEventListener("contextmenu",ee),n.domElement.addEventListener("pointerdown",Be),n.domElement.addEventListener("pointercancel",je),n.domElement.addEventListener("wheel",R,{passive:!1}),this.update()}}const Zv=new mo(-1,1,1,-1,0,1);class Jv extends Bt{constructor(){super(),this.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new fn([0,2,0,0,2,0],2))}}const Qv=new Jv;class du{constructor(e){this._mesh=new Vt(Qv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Zv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}function fu(r,e){if(e===Dd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ra||e===Qu){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ra)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class e0 extends vr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new s0(t)}),this.register(function(t){return new p0(t)}),this.register(function(t){return new m0(t)}),this.register(function(t){return new _0(t)}),this.register(function(t){return new a0(t)}),this.register(function(t){return new l0(t)}),this.register(function(t){return new c0(t)}),this.register(function(t){return new u0(t)}),this.register(function(t){return new r0(t)}),this.register(function(t){return new h0(t)}),this.register(function(t){return new o0(t)}),this.register(function(t){return new f0(t)}),this.register(function(t){return new d0(t)}),this.register(function(t){return new n0(t)}),this.register(function(t){return new g0(t)}),this.register(function(t){return new v0(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Wr.extractUrlBase(e);o=Wr.resolveURL(c,this.path)}else o=Wr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Rh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Lh){try{o[Ye.KHR_BINARY_GLTF]=new x0(e)}catch(h){i&&i(h);return}s=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new D0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Ye.KHR_MATERIALS_UNLIT:o[h]=new i0;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[h]=new b0(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[h]=new y0;break;case Ye.KHR_MESH_QUANTIZATION:o[h]=new S0;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function t0(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class n0{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Fe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],wt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Bv(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Uv(u),c.distance=h;break;case"spot":c=new Nv(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,qn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class i0{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return jn}extendParams(e,t,n){const i=[];e.color=new Fe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],wt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,lt))}return Promise.all(i)}}class r0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class s0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(a,a)}return Promise.all(s)}}class o0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class a0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,lt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class l0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class c0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(a[0],a[1],a[2],wt),Promise.all(s)}}class u0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class h0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(a[0],a[1],a[2],wt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,lt)),Promise.all(s)}}class d0{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class f0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class p0{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class m0{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _0{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class g0{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}}class v0{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Qt.TRIANGLES&&c.mode!==Qt.TRIANGLE_STRIP&&c.mode!==Qt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const _ of h){const g=new we,m=new L,f=new En,x=new L(1,1,1),v=new mv(_.geometry,_.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,b),l.SCALE&&x.fromBufferAttribute(l.SCALE,b),v.setMatrixAt(b,g.compose(m,f,x));for(const b in l)if(b==="_COLOR_0"){const y=l[b];v.instanceColor=new Ia(y.array,y.itemSize,y.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&_.geometry.setAttribute(b,l[b]);ot.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Lh="glTF",Rr=12,pu={JSON:1313821514,BIN:5130562};class x0{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Rr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Lh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Rr,s=new DataView(e,Rr);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===pu.JSON){const c=new Uint8Array(e,Rr+o,a);this.content=n.decode(c)}else if(l===pu.BIN){const c=Rr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class b0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Fa[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Fa[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],p=rr[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const p in d.attributes){const _=d.attributes[p],g=l[p];g!==void 0&&(_.normalized=g)}h(d)},a,c)})})}}class y0{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class S0{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class Ch extends es{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,_=e*c,g=_-c,m=-2*p+3*d,f=p-d,x=1-m,v=f-d+h;for(let b=0;b!==a;b++){const y=o[g+b+a],M=o[g+b+l]*u,w=o[_+b+a],P=o[_+b]*u;s[b]=x*y+v*M+m*w+f*P}return s}}const M0=new En;class E0 extends Ch{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return M0.fromArray(s).normalize().toArray(s),s}}const Qt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},rr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mu={9728:it,9729:kt,9984:Ta,9985:qu,9986:Ks,9987:yi},_u={33071:en,33648:eo,10497:ar},ra={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},w0={CUBICSPLINE:void 0,LINEAR:cr,STEP:$r},sa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function T0(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new rl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pn})),r.DefaultMaterial}function li(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function A0(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function R0(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function L0(r){let e;const t=r.extensions&&r.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+oa(t.attributes):e=r.indices+":"+oa(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+oa(r.targets[n]);return e}function oa(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ua(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function C0(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const P0=new we;class D0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new t0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Dv(this.options.manager):this.textureLoader=new zv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Rh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return li(s,a,i),qn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Wr.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ra[i.type],a=rr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new ft(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=ra[i.type],c=rr[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(p&&p!==h){const f=Math.floor(d/p),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let v=t.cache.get(x);v||(g=new c(a,f*p,i.count*p/u),v=new uv(g,p/u),t.cache.add(x,v)),m=new tl(v,l,d%p/u,_)}else a===null?g=new c(i.count*l):g=new c(a,d,i.count*l),m=new ft(g,l,_);if(i.sparse!==void 0){const f=ra.SCALAR,x=rr[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,y=new x(o[1],v,i.sparse.count*f),M=new c(o[2],b,i.sparse.count*l);a!==null&&(m=new ft(m.array.slice(),m.itemSize,m.normalized));for(let w=0,P=y.length;w<P;w++){const S=y[w];if(m.setX(S,M[w*l]),l>=2&&m.setY(S,M[w*l+1]),l>=3&&m.setZ(S,M[w*l+2]),l>=4&&m.setW(S,M[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=mu[d.magFilter]||kt,u.minFilter=mu[d.minFilter]||yi,u.wrapS=_u[d.wrapS]||ar,u.wrapT=_u[d.wrapT]||ar,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Et(g);m.needsUpdate=!0,d(m)}),t.load(Wr.resolveURL(h,s.path),_,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||C0(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new wh,Sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Eh,Sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return rl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){const h=i[Ye.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],wt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,lt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=un);const u=s.alphaMode||sa.OPAQUE;if(u===sa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===sa.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==jn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Se(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==jn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==jn){const h=s.emissiveFactor;a.emissive=new Fe().setRGB(h[0],h[1],h[2],wt)}return s.emissiveTexture!==void 0&&o!==jn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,lt)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),qn(h,s),t.associations.set(h,{materials:e}),s.extensions&&li(i,h,s),h})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return gu(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=L0(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=gu(new Bt,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?T0(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,_=u.length;p<_;p++){const g=u[p],m=o[p];let f;const x=c[p];if(m.mode===Qt.TRIANGLES||m.mode===Qt.TRIANGLE_STRIP||m.mode===Qt.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new dv(g,x):new Vt(g,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Qt.TRIANGLE_STRIP?f.geometry=fu(f.geometry,Qu):m.mode===Qt.TRIANGLE_FAN&&(f.geometry=fu(f.geometry,Ra));else if(m.mode===Qt.LINES)f=new _v(g,x);else if(m.mode===Qt.LINE_STRIP)f=new il(g,x);else if(m.mode===Qt.LINE_LOOP)f=new gv(g,x);else if(m.mode===Qt.POINTS)f=new vv(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&R0(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),qn(f,s),m.extensions&&li(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,_=h.length;p<_;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&li(i,h[0],s),h[0];const d=new gi;s.extensions&&li(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,_=h.length;p<_;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ft(ih.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new mo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new we;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new nl(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const p=i.channels[h],_=i.samplers[p.sampler],g=p.target,m=g.node,f=i.parameters!==void 0?i.parameters[_.input]:_.input,x=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",x)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],_=h[2],g=h[3],m=h[4],f=[];for(let x=0,v=d.length;x<v;x++){const b=d[x],y=p[x],M=_[x],w=g[x],P=m[x];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const S=n._createAnimationTracks(b,y,M,w,P);if(S)for(let T=0;T<S.length;T++)f.push(S[T])}return new wv(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,P0)});for(let p=0,_=h.length;p<_;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Mh:c.length>1?u=new gi:c.length===1?u=c[0]:u=new ot,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),qn(u,s),s.extensions&&li(n,u,s),s.matrix!==void 0){const h=new we;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new gi;n.name&&(s.name=i.createUniqueName(n.name)),qn(s,n),n.extensions&&li(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,p]of i.associations)(d instanceof Sn||d instanceof Et)&&h.set(d,p);return u.traverse(d=>{const p=i.associations.get(d);p!=null&&h.set(d,p)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Wn[s.path]===Wn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Wn[s.path]){case Wn.weights:c=dr;break;case Wn.rotation:c=Si;break;case Wn.position:case Wn.scale:c=fr;break;default:switch(n.itemSize){case 1:c=dr;break;case 2:case 3:default:c=fr;break}break}const u=i.interpolation!==void 0?w0[i.interpolation]:cr,h=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const _=new c(l[d]+"."+Wn[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ua(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Si?E0:Ch;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function I0(r,e,t){const n=e.attributes,i=new ut;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const u=Ua(rr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new L,l=new L;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const g=Ua(rr[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new _n;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function gu(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Fa[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return $e.workingColorSpace!==wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),qn(r,e),I0(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?A0(r,e.targets,t):r})}var N0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function F0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ph={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(N0,function(){var t=function(){function n(p){return o.appendChild(p.dom),p}function i(p){for(var _=0;_<o.children.length;_++)o.children[_].style.display=_===p?"block":"none";s=p}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(p){p.preventDefault(),i(++s%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,u=n(new t.Panel("FPS","#0ff","#002")),h=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(h.update(p-a,200),p>l+1e3&&(u.update(1e3*c/(p-l),100),l=p,c=0,d)){var _=performance.memory;d.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:o,setMode:i}};return t.Panel=function(n,i,s){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,h=48*c,d=3*c,p=2*c,_=3*c,g=15*c,m=74*c,f=30*c,x=document.createElement("canvas");x.width=u,x.height=h,x.style.cssText="width:80px;height:48px";var v=x.getContext("2d");return v.font="bold "+9*c+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=s,v.fillRect(0,0,u,h),v.fillStyle=i,v.fillText(n,d,p),v.fillRect(_,g,m,f),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(_,g,m,f),{dom:x,update:function(b,y){o=Math.min(o,b),a=Math.max(a,b),v.fillStyle=s,v.globalAlpha=1,v.fillRect(0,0,u,g),v.fillStyle=i,v.fillText(l(b)+" "+n+" ("+l(o)+"-"+l(a)+")",d,p),v.drawImage(x,_+c,g,m-c,f,_,g,m-c,f),v.fillRect(_+m-c,g,c,f),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(_+m-c,g,c,l((1-b/y)*f))}}},t})})(Ph);var U0=Ph.exports;const O0=F0(U0),Dh=0,B0=1,Ih=2,vu=2,aa=1.25,xu=1,bi=6*4+4+4,go=65535,z0=Math.pow(2,-24),la=Symbol("SKIP_GENERATION");function Nh(r){return r.index?r.index.count:r.attributes.position.count}function xr(r){return Nh(r)/3}function Fh(r,e=ArrayBuffer){return r>65535?new Uint32Array(new e(4*r)):new Uint16Array(new e(2*r))}function k0(r,e){if(!r.index){const t=r.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Fh(t,n);r.setIndex(new ft(i,1));for(let s=0;s<t;s++)i[s]=s}}function Uh(r){const e=xr(r),t=r.drawRange,n=t.start/3,i=(t.start+t.count)/3,s=Math.max(0,n),o=Math.min(e,i)-s;return[{offset:Math.floor(s),count:Math.floor(o)}]}function Oh(r){if(!r.groups||!r.groups.length)return Uh(r);const e=[],t=new Set,n=r.drawRange,i=n.start/3,s=(n.start+n.count)/3;for(const a of r.groups){const l=a.start/3,c=(a.start+a.count)/3;t.add(Math.max(i,l)),t.add(Math.min(s,c))}const o=Array.from(t.values()).sort((a,l)=>a-l);for(let a=0;a<o.length-1;a++){const l=o[a],c=o[a+1];e.push({offset:Math.floor(l),count:Math.floor(c-l)})}return e}function H0(r){if(r.groups.length===0)return!1;const e=xr(r),t=Oh(r).sort((s,o)=>s.offset-o.offset),n=t[t.length-1];n.count=Math.min(e-n.offset,n.count);let i=0;return t.forEach(({count:s})=>i+=s),e!==i}function st(r,e,t){return t.min.x=e[r],t.min.y=e[r+1],t.min.z=e[r+2],t.max.x=e[r+3],t.max.y=e[r+4],t.max.z=e[r+5],t}function V0(r){r[0]=r[1]=r[2]=1/0,r[3]=r[4]=r[5]=-1/0}function bu(r){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=r[n+3]-r[n];i>t&&(t=i,e=n)}return e}function yu(r,e){e.set(r)}function Su(r,e,t){let n,i;for(let s=0;s<3;s++){const o=s+3;n=r[s],i=e[s],t[s]=n<i?n:i,n=r[o],i=e[o],t[o]=n>i?n:i}}function Is(r,e,t){for(let n=0;n<3;n++){const i=e[r+2*n],s=e[r+2*n+1],o=i-s,a=i+s;o<t[n]&&(t[n]=o),a>t[n+3]&&(t[n+3]=a)}}function Lr(r){const e=r[3]-r[0],t=r[4]-r[1],n=r[5]-r[2];return 2*(e*t+t*n+n*e)}function ca(r,e,t,n,i=null){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,h=1/0,d=1/0,p=1/0,_=-1/0,g=-1/0,m=-1/0;const f=i!==null;for(let x=e*6,v=(e+t)*6;x<v;x+=6){const b=r[x+0],y=r[x+1],M=b-y,w=b+y;M<s&&(s=M),w>l&&(l=w),f&&b<h&&(h=b),f&&b>_&&(_=b);const P=r[x+2],S=r[x+3],T=P-S,F=P+S;T<o&&(o=T),F>c&&(c=F),f&&P<d&&(d=P),f&&P>g&&(g=P);const N=r[x+4],B=r[x+5],C=N-B,O=N+B;C<a&&(a=C),O>u&&(u=O),f&&N<p&&(p=N),f&&N>m&&(m=N)}n[0]=s,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=u,f&&(i[0]=h,i[1]=d,i[2]=p,i[3]=_,i[4]=g,i[5]=m)}function G0(r,e,t,n){let i=1/0,s=1/0,o=1/0,a=-1/0,l=-1/0,c=-1/0;for(let u=e*6,h=(e+t)*6;u<h;u+=6){const d=r[u+0];d<i&&(i=d),d>a&&(a=d);const p=r[u+2];p<s&&(s=p),p>l&&(l=p);const _=r[u+4];_<o&&(o=_),_>c&&(c=_)}n[0]=i,n[1]=s,n[2]=o,n[3]=a,n[4]=l,n[5]=c}function W0(r,e){V0(e);const t=r.attributes.position,n=r.index?r.index.array:null,i=xr(r),s=new Float32Array(i*6),o=t.normalized,a=t.array,l=t.offset||0;let c=3;t.isInterleavedBufferAttribute&&(c=t.data.stride);const u=["getX","getY","getZ"];for(let h=0;h<i;h++){const d=h*3,p=h*6;let _=d+0,g=d+1,m=d+2;n&&(_=n[_],g=n[g],m=n[m]),o||(_=_*c+l,g=g*c+l,m=m*c+l);for(let f=0;f<3;f++){let x,v,b;o?(x=t[u[f]](_),v=t[u[f]](g),b=t[u[f]](m)):(x=a[_+f],v=a[g+f],b=a[m+f]);let y=x;v<y&&(y=v),b<y&&(y=b);let M=x;v>M&&(M=v),b>M&&(M=b);const w=(M-y)/2,P=f*2;s[p+P+0]=y+w,s[p+P+1]=w+(Math.abs(y)+w)*z0,y<e[f]&&(e[f]=y),M>e[f+3]&&(e[f+3]=M)}}return s}const Nn=32,X0=(r,e)=>r.candidate-e.candidate,Xn=new Array(Nn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Ns=new Float32Array(6);function q0(r,e,t,n,i,s){let o=-1,a=0;if(s===Dh)o=bu(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(s===B0)o=bu(r),o!==-1&&(a=Y0(t,n,i,o));else if(s===Ih){const l=Lr(r);let c=aa*i;const u=n*6,h=(n+i)*6;for(let d=0;d<3;d++){const p=e[d],m=(e[d+3]-p)/Nn;if(i<Nn/4){const f=[...Xn];f.length=i;let x=0;for(let b=u;b<h;b+=6,x++){const y=f[x];y.candidate=t[b+2*d],y.count=0;const{bounds:M,leftCacheBounds:w,rightCacheBounds:P}=y;for(let S=0;S<3;S++)P[S]=1/0,P[S+3]=-1/0,w[S]=1/0,w[S+3]=-1/0,M[S]=1/0,M[S+3]=-1/0;Is(b,t,M)}f.sort(X0);let v=i;for(let b=0;b<v;b++){const y=f[b];for(;b+1<v&&f[b+1].candidate===y.candidate;)f.splice(b+1,1),v--}for(let b=u;b<h;b+=6){const y=t[b+2*d];for(let M=0;M<v;M++){const w=f[M];y>=w.candidate?Is(b,t,w.rightCacheBounds):(Is(b,t,w.leftCacheBounds),w.count++)}}for(let b=0;b<v;b++){const y=f[b],M=y.count,w=i-y.count,P=y.leftCacheBounds,S=y.rightCacheBounds;let T=0;M!==0&&(T=Lr(P)/l);let F=0;w!==0&&(F=Lr(S)/l);const N=xu+aa*(T*M+F*w);N<c&&(o=d,c=N,a=y.candidate)}}else{for(let v=0;v<Nn;v++){const b=Xn[v];b.count=0,b.candidate=p+m+v*m;const y=b.bounds;for(let M=0;M<3;M++)y[M]=1/0,y[M+3]=-1/0}for(let v=u;v<h;v+=6){let M=~~((t[v+2*d]-p)/m);M>=Nn&&(M=Nn-1);const w=Xn[M];w.count++,Is(v,t,w.bounds)}const f=Xn[Nn-1];yu(f.bounds,f.rightCacheBounds);for(let v=Nn-2;v>=0;v--){const b=Xn[v],y=Xn[v+1];Su(b.bounds,y.rightCacheBounds,b.rightCacheBounds)}let x=0;for(let v=0;v<Nn-1;v++){const b=Xn[v],y=b.count,M=b.bounds,P=Xn[v+1].rightCacheBounds;y!==0&&(x===0?yu(M,Ns):Su(M,Ns,Ns)),x+=y;let S=0,T=0;x!==0&&(S=Lr(Ns)/l);const F=i-x;F!==0&&(T=Lr(P)/l);const N=xu+aa*(S*x+T*F);N<c&&(o=d,c=N,a=b.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function Y0(r,e,t,n){let i=0;for(let s=e,o=e+t;s<o;s++)i+=r[s*6+n*2];return i/t}class Fs{constructor(){}}function j0(r,e,t,n,i,s){let o=n,a=n+i-1;const l=s.pos,c=s.axis*2;for(;;){for(;o<=a&&t[o*6+c]<l;)o++;for(;o<=a&&t[a*6+c]>=l;)a--;if(o<a){for(let u=0;u<3;u++){let h=e[o*3+u];e[o*3+u]=e[a*3+u],e[a*3+u]=h}for(let u=0;u<6;u++){let h=t[o*6+u];t[o*6+u]=t[a*6+u],t[a*6+u]=h}o++,a--}else return o}}function $0(r,e,t,n,i,s){let o=n,a=n+i-1;const l=s.pos,c=s.axis*2;for(;;){for(;o<=a&&t[o*6+c]<l;)o++;for(;o<=a&&t[a*6+c]>=l;)a--;if(o<a){let u=r[o];r[o]=r[a],r[a]=u;for(let h=0;h<6;h++){let d=t[o*6+h];t[o*6+h]=t[a*6+h],t[a*6+h]=d}o++,a--}else return o}}function K0(r,e){const t=(r.index?r.index.count:r.attributes.position.count)/3,n=t>2**16,i=n?4:2,s=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),o=n?new Uint32Array(s):new Uint16Array(s);for(let a=0,l=o.length;a<l;a++)o[a]=a;return o}function Z0(r,e){const t=r.geometry,n=t.index?t.index.array:null,i=e.maxDepth,s=e.verbose,o=e.maxLeafTris,a=e.strategy,l=e.onProgress,c=xr(t),u=r._indirectBuffer;let h=!1;const d=new Float32Array(6),p=new Float32Array(6),_=W0(t,d),g=e.indirect?$0:j0,m=[],f=e.indirect?Uh(t):Oh(t);if(f.length===1){const b=f[0],y=new Fs;y.boundingData=d,G0(_,b.offset,b.count,p),v(y,b.offset,b.count,p),m.push(y)}else for(let b of f){const y=new Fs;y.boundingData=new Float32Array(6),ca(_,b.offset,b.count,y.boundingData,p),v(y,b.offset,b.count,p),m.push(y)}return m;function x(b){l&&l(b/c)}function v(b,y,M,w=null,P=0){if(!h&&P>=i&&(h=!0,s&&(console.warn(`MeshBVH: Max depth of ${i} reached when generating BVH. Consider increasing maxDepth.`),console.warn(t))),M<=o||P>=i)return x(y+M),b.offset=y,b.count=M,b;const S=q0(b.boundingData,w,_,y,M,a);if(S.axis===-1)return x(y+M),b.offset=y,b.count=M,b;const T=g(u,n,_,y,M,S);if(T===y||T===y+M)x(y+M),b.offset=y,b.count=M;else{b.splitAxis=S.axis;const F=new Fs,N=y,B=T-y;b.left=F,F.boundingData=new Float32Array(6),ca(_,N,B,F.boundingData,p),v(F,N,B,p,P+1);const C=new Fs,O=T,G=M-B;b.right=C,C.boundingData=new Float32Array(6),ca(_,O,G,C.boundingData,p),v(C,O,G,p,P+1)}return b}}function J0(r,e){const t=r.geometry;e.indirect&&(r._indirectBuffer=K0(t,e.useSharedArrayBuffer),H0(t)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),r._indirectBuffer||k0(t,e);const n=Z0(r,e);let i,s,o;const a=[],l=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let h=0;h<n.length;h++){const d=n[h];let p=c(d);const _=new l(bi*p);i=new Float32Array(_),s=new Uint32Array(_),o=new Uint16Array(_),u(0,d),a.push(_)}r._roots=a;return;function c(h){return h.count?1:1+c(h.left)+c(h.right)}function u(h,d){const p=h/4,_=h/2,g=!!d.count,m=d.boundingData;for(let f=0;f<6;f++)i[p+f]=m[f];if(g){const f=d.offset,x=d.count;return s[p+6]=f,o[_+14]=x,o[_+15]=go,h+bi}else{const f=d.left,x=d.right,v=d.splitAxis;let b;if(b=u(h+bi,f),b/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return s[p+6]=b/4,b=u(b,x),s[p+7]=v,b}}}class On{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let s=0,o=e.length;s<o;s++){const l=e[s][t];n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let s=0,o=t.length;s<o;s++){const a=t[s],l=e.dot(a);n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}On.prototype.setFromBox=function(){const r=new L;return function(t,n){const i=n.min,s=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let u=0;u<=1;u++){r.x=i.x*l+s.x*(1-l),r.y=i.y*c+s.y*(1-c),r.z=i.z*u+s.z*(1-u);const h=t.dot(r);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}}();const Q0=function(){const r=new L,e=new L,t=new L;return function(i,s,o){const a=i.start,l=r,c=s.start,u=e;t.subVectors(a,c),r.subVectors(i.end,i.start),e.subVectors(s.end,s.start);const h=t.dot(u),d=u.dot(l),p=u.dot(u),_=t.dot(l),m=l.dot(l)*p-d*d;let f,x;m!==0?f=(h*d-_*p)/m:f=0,x=(h+f*d)/p,o.x=f,o.y=x}}(),cl=function(){const r=new Se,e=new L,t=new L;return function(i,s,o,a){Q0(i,s,r);let l=r.x,c=r.y;if(l>=0&&l<=1&&c>=0&&c<=1){i.at(l,o),s.at(c,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?i.at(0,o):i.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let u;l<0?u=i.start:u=i.end;let h;c<0?h=s.start:h=s.end;const d=e,p=t;if(i.closestPointToPoint(h,!0,e),s.closestPointToPoint(u,!0,t),d.distanceToSquared(h)<=p.distanceToSquared(u)){o.copy(d),a.copy(h);return}else{o.copy(u),a.copy(p);return}}}}(),ex=function(){const r=new L,e=new L,t=new vn,n=new Un;return function(s,o){const{radius:a,center:l}=s,{a:c,b:u,c:h}=o;if(n.start=c,n.end=u,n.closestPointToPoint(l,!0,r).distanceTo(l)<=a||(n.start=c,n.end=h,n.closestPointToPoint(l,!0,r).distanceTo(l)<=a)||(n.start=u,n.end=h,n.closestPointToPoint(l,!0,r).distanceTo(l)<=a))return!0;const g=o.getPlane(t);if(Math.abs(g.distanceToPoint(l))<=a){const f=g.projectPoint(l,e);if(o.containsPoint(f))return!0}return!1}}(),tx=1e-15;function ua(r){return Math.abs(r)<tx}class mn extends Ct{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new L),this.satBounds=new Array(4).fill().map(()=>new On),this.points=[this.a,this.b,this.c],this.sphere=new _n,this.plane=new vn,this.needsUpdate=!0}intersectsSphere(e){return ex(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,i);const c=s[1],u=o[1];c.subVectors(e,t),u.setFromPoints(c,i);const h=s[2],d=o[2];h.subVectors(t,n),d.setFromPoints(h,i);const p=s[3],_=o[3];p.subVectors(n,e),_.setFromPoints(p,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}mn.prototype.closestPointToSegment=function(){const r=new L,e=new L,t=new Un;return function(i,s=null,o=null){const{start:a,end:l}=i,c=this.points;let u,h=1/0;for(let d=0;d<3;d++){const p=(d+1)%3;t.start.copy(c[d]),t.end.copy(c[p]),cl(t,i,r,e),u=r.distanceToSquared(e),u<h&&(h=u,s&&s.copy(r),o&&o.copy(e))}return this.closestPointToPoint(a,r),u=a.distanceToSquared(r),u<h&&(h=u,s&&s.copy(r),o&&o.copy(a)),this.closestPointToPoint(l,r),u=l.distanceToSquared(r),u<h&&(h=u,s&&s.copy(r),o&&o.copy(l)),Math.sqrt(h)}}();mn.prototype.intersectsTriangle=function(){const r=new mn,e=new Array(3),t=new Array(3),n=new On,i=new On,s=new L,o=new L,a=new L,l=new L,c=new L,u=new Un,h=new Un,d=new Un,p=new L;function _(g,m,f){const x=g.points;let v=0,b=-1;for(let y=0;y<3;y++){const{start:M,end:w}=u;M.copy(x[y]),w.copy(x[(y+1)%3]),u.delta(o);const P=ua(m.distanceToPoint(M));if(ua(m.normal.dot(o))&&P){f.copy(u),v=2;break}const S=m.intersectLine(u,p);if(!S&&P&&p.copy(M),(S||P)&&!ua(p.distanceTo(w))){if(v<=1)(v===1?f.start:f.end).copy(p),P&&(b=v);else if(v>=2){(b===1?f.start:f.end).copy(p),v=2;break}if(v++,v===2&&b===-1)break}}return v}return function(m,f=null,x=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(r.copy(m),r.update(),m=r);const v=this.plane,b=m.plane;if(Math.abs(v.normal.dot(b.normal))>1-1e-10){const y=this.satBounds,M=this.satAxes;t[0]=m.a,t[1]=m.b,t[2]=m.c;for(let S=0;S<4;S++){const T=y[S],F=M[S];if(n.setFromPoints(F,t),T.isSeparated(n))return!1}const w=m.satBounds,P=m.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let S=0;S<4;S++){const T=w[S],F=P[S];if(n.setFromPoints(F,e),T.isSeparated(n))return!1}for(let S=0;S<4;S++){const T=M[S];for(let F=0;F<4;F++){const N=P[F];if(s.crossVectors(T,N),n.setFromPoints(s,e),i.setFromPoints(s,t),n.isSeparated(i))return!1}}return f&&(x||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),f.start.set(0,0,0),f.end.set(0,0,0)),!0}else{const y=_(this,b,h);if(y===1&&m.containsPoint(h.end))return f&&(f.start.copy(h.end),f.end.copy(h.end)),!0;if(y!==2)return!1;const M=_(m,v,d);if(M===1&&this.containsPoint(d.end))return f&&(f.start.copy(d.end),f.end.copy(d.end)),!0;if(M!==2)return!1;if(h.delta(a),d.delta(l),a.dot(l)<0){let B=d.start;d.start=d.end,d.end=B}const w=h.start.dot(a),P=h.end.dot(a),S=d.start.dot(a),T=d.end.dot(a),F=P<S,N=w<T;return w!==T&&S!==P&&F===N?!1:(f&&(c.subVectors(h.start,d.start),c.dot(a)>0?f.start.copy(h.start):f.start.copy(d.start),c.subVectors(h.end,d.end),c.dot(a)<0?f.end.copy(h.end):f.end.copy(d.end)),!0)}}}();mn.prototype.distanceToPoint=function(){const r=new L;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}}();mn.prototype.distanceToTriangle=function(){const r=new L,e=new L,t=["a","b","c"],n=new Un,i=new Un;return function(o,a=null,l=null){const c=a||l?n:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let u=1/0;for(let h=0;h<3;h++){let d;const p=t[h],_=o[p];this.closestPointToPoint(_,r),d=_.distanceToSquared(r),d<u&&(u=d,a&&a.copy(r),l&&l.copy(_));const g=this[p];o.closestPointToPoint(g,r),d=g.distanceToSquared(r),d<u&&(u=d,a&&a.copy(g),l&&l.copy(r))}for(let h=0;h<3;h++){const d=t[h],p=t[(h+1)%3];n.set(this[d],this[p]);for(let _=0;_<3;_++){const g=t[_],m=t[(_+1)%3];i.set(o[g],o[m]),cl(n,i,r,e);const f=r.distanceToSquared(e);f<u&&(u=f,a&&a.copy(r),l&&l.copy(e))}}return Math.sqrt(u)}}();class zt{constructor(e,t,n){this.isOrientedBox=!0,this.min=new L,this.max=new L,this.matrix=new we,this.invMatrix=new we,this.points=new Array(8).fill().map(()=>new L),this.satAxes=new Array(3).fill().map(()=>new L),this.satBounds=new Array(3).fill().map(()=>new On),this.alignedSatBounds=new Array(3).fill().map(()=>new On),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}zt.prototype.update=function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const d=1*c|2*u|4*h,p=i[d];p.x=c?n.x:t.x,p.y=u?n.y:t.y,p.z=h?n.z:t.z,p.applyMatrix4(e)}const s=this.satBounds,o=this.satAxes,a=i[0];for(let c=0;c<3;c++){const u=o[c],h=s[c],d=1<<c,p=i[d];u.subVectors(a,p),h.setFromPoints(u,i)}const l=this.alignedSatBounds;l[0].setFromPointsField(i,"x"),l[1].setFromPointsField(i,"y"),l[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();zt.prototype.intersectsBox=function(){const r=new On;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(r.min=n.x,r.max=i.x,a[0].isSeparated(r)||(r.min=n.y,r.max=i.y,a[1].isSeparated(r))||(r.min=n.z,r.max=i.z,a[2].isSeparated(r)))return!1;for(let l=0;l<3;l++){const c=o[l],u=s[l];if(r.setFromBox(c,t),u.isSeparated(r))return!1}return!0}}();zt.prototype.intersectsTriangle=function(){const r=new mn,e=new Array(3),t=new On,n=new On,i=new L;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(r.copy(o),r.update(),o=r);const a=this.satBounds,l=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let d=0;d<3;d++){const p=a[d],_=l[d];if(t.setFromPoints(_,e),p.isSeparated(t))return!1}const c=o.satBounds,u=o.satAxes,h=this.points;for(let d=0;d<3;d++){const p=c[d],_=u[d];if(t.setFromPoints(_,h),p.isSeparated(t))return!1}for(let d=0;d<3;d++){const p=l[d];for(let _=0;_<4;_++){const g=u[_];if(i.crossVectors(p,g),t.setFromPoints(i,e),n.setFromPoints(i,h),t.isSeparated(n))return!1}}return!0}}();zt.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();zt.prototype.distanceToPoint=function(){const r=new L;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}}();zt.prototype.distanceToBox=function(){const r=["x","y","z"],e=new Array(12).fill().map(()=>new Un),t=new Array(12).fill().map(()=>new Un),n=new L,i=new L;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),l&&l.copy(n),c&&c.copy(i)),0;const u=a*a,h=o.min,d=o.max,p=this.points;let _=1/0;for(let m=0;m<8;m++){const f=p[m];i.copy(f).clamp(h,d);const x=f.distanceToSquared(i);if(x<_&&(_=x,l&&l.copy(f),c&&c.copy(i),x<u))return Math.sqrt(x)}let g=0;for(let m=0;m<3;m++)for(let f=0;f<=1;f++)for(let x=0;x<=1;x++){const v=(m+1)%3,b=(m+2)%3,y=f<<v|x<<b,M=1<<m|f<<v|x<<b,w=p[y],P=p[M];e[g].set(w,P);const T=r[m],F=r[v],N=r[b],B=t[g],C=B.start,O=B.end;C[T]=h[T],C[F]=f?h[F]:d[F],C[N]=x?h[N]:d[F],O[T]=d[T],O[F]=f?h[F]:d[F],O[N]=x?h[N]:d[F],g++}for(let m=0;m<=1;m++)for(let f=0;f<=1;f++)for(let x=0;x<=1;x++){i.x=m?d.x:h.x,i.y=f?d.y:h.y,i.z=x?d.z:h.z,this.closestPointToPoint(i,n);const v=i.distanceToSquared(n);if(v<_&&(_=v,l&&l.copy(n),c&&c.copy(i),v<u))return Math.sqrt(v)}for(let m=0;m<12;m++){const f=e[m];for(let x=0;x<12;x++){const v=t[x];cl(f,v,n,i);const b=n.distanceToSquared(i);if(b<_&&(_=b,l&&l.copy(n),c&&c.copy(i),b<u))return Math.sqrt(b)}}return Math.sqrt(_)}}();class ul{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class nx extends ul{constructor(){super(()=>new mn)}}const nn=new nx;function Ht(r,e){return e[r+15]===65535}function Gt(r,e){return e[r+6]}function jt(r,e){return e[r+14]}function rn(r){return r+8}function $t(r,e){return e[r+6]}function hl(r,e){return e[r+7]}class ix{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const nt=new ix;let $n,tr;const Gi=[],Us=new ul(()=>new ut);function rx(r,e,t,n,i,s){$n=Us.getPrimitive(),tr=Us.getPrimitive(),Gi.push($n,tr),nt.setBuffer(r._roots[e]);const o=Oa(0,r.geometry,t,n,i,s);nt.clearBuffer(),Us.releasePrimitive($n),Us.releasePrimitive(tr),Gi.pop(),Gi.pop();const a=Gi.length;return a>0&&(tr=Gi[a-1],$n=Gi[a-2]),o}function Oa(r,e,t,n,i=null,s=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=nt;let u=r*2;if(Ht(u,l)){const _=Gt(r,c),g=jt(u,l);return st(r,a,$n),n(_,g,!1,o,s+r,$n)}else{let N=function(C){const{uint16Array:O,uint32Array:G}=nt;let q=C*2;for(;!Ht(q,O);)C=rn(C),q=C*2;return Gt(C,G)},B=function(C){const{uint16Array:O,uint32Array:G}=nt;let q=C*2;for(;!Ht(q,O);)C=$t(C,G),q=C*2;return Gt(C,G)+jt(q,O)};var d=N,p=B;const _=rn(r),g=$t(r,c);let m=_,f=g,x,v,b,y;if(i&&(b=$n,y=tr,st(m,a,b),st(f,a,y),x=i(b),v=i(y),v<x)){m=g,f=_;const C=x;x=v,v=C,b=y}b||(b=$n,st(m,a,b));const M=Ht(m*2,l),w=t(b,M,x,o+1,s+m);let P;if(w===vu){const C=N(m),G=B(m)-C;P=n(C,G,!0,o+1,s+m,b)}else P=w&&Oa(m,e,t,n,i,s,o+1);if(P)return!0;y=tr,st(f,a,y);const S=Ht(f*2,l),T=t(y,S,v,o+1,s+f);let F;if(T===vu){const C=N(f),G=B(f)-C;F=n(C,G,!0,o+1,s+f,y)}else F=T&&Oa(f,e,t,n,i,s,o+1);return!!F}}const Cr=new L,ha=new L;function sx(r,e,t={},n=0,i=1/0){const s=n*n,o=i*i;let a=1/0,l=null;if(r.shapecast({boundsTraverseOrder:u=>(Cr.copy(e).clamp(u.min,u.max),Cr.distanceToSquared(e)),intersectsBounds:(u,h,d)=>d<a&&d<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(e,Cr);const d=e.distanceToSquared(Cr);return d<a&&(ha.copy(Cr),a=d,l=h),d<s}}),a===1/0)return null;const c=Math.sqrt(a);return t.point?t.point.copy(ha):t.point=ha.clone(),t.distance=c,t.faceIndex=l,t}const Wi=new L,Xi=new L,qi=new L,Os=new Se,Bs=new Se,zs=new Se,Mu=new L,Eu=new L,wu=new L,ks=new L;function ox(r,e,t,n,i,s){let o;return s===Ot?o=r.intersectTriangle(n,t,e,!0,i):o=r.intersectTriangle(e,t,n,s!==un,i),o===null?null:{distance:r.origin.distanceTo(i),point:i.clone()}}function ax(r,e,t,n,i,s,o,a,l){Wi.fromBufferAttribute(e,s),Xi.fromBufferAttribute(e,o),qi.fromBufferAttribute(e,a);const c=ox(r,Wi,Xi,qi,ks,l);if(c){n&&(Os.fromBufferAttribute(n,s),Bs.fromBufferAttribute(n,o),zs.fromBufferAttribute(n,a),c.uv=Ct.getInterpolation(ks,Wi,Xi,qi,Os,Bs,zs,new Se)),i&&(Os.fromBufferAttribute(i,s),Bs.fromBufferAttribute(i,o),zs.fromBufferAttribute(i,a),c.uv1=Ct.getInterpolation(ks,Wi,Xi,qi,Os,Bs,zs,new Se)),t&&(Mu.fromBufferAttribute(t,s),Eu.fromBufferAttribute(t,o),wu.fromBufferAttribute(t,a),c.normal=Ct.getInterpolation(ks,Wi,Xi,qi,Mu,Eu,wu,new L),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));const u={a:s,b:o,c:a,normal:new L,materialIndex:0};Ct.getNormal(Wi,Xi,qi,u.normal),c.face=u,c.faceIndex=s}return c}function vo(r,e,t,n,i){const s=n*3;let o=s+0,a=s+1,l=s+2;const c=r.index;r.index&&(o=c.getX(o),a=c.getX(a),l=c.getX(l));const{position:u,normal:h,uv:d,uv1:p}=r.attributes,_=ax(t,u,h,d,p,o,a,l,e);return _?(_.faceIndex=n,i&&i.push(_),_):null}function dt(r,e,t,n){const i=r.a,s=r.b,o=r.c;let a=e,l=e+1,c=e+2;t&&(a=t.getX(a),l=t.getX(l),c=t.getX(c)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function lx(r,e,t,n,i,s){const{geometry:o,_indirectBuffer:a}=r;for(let l=n,c=n+i;l<c;l++)vo(o,e,t,l,s)}function cx(r,e,t,n,i){const{geometry:s,_indirectBuffer:o}=r;let a=1/0,l=null;for(let c=n,u=n+i;c<u;c++){let h;h=vo(s,e,t,c),h&&h.distance<a&&(l=h,a=h.distance)}return l}function ux(r,e,t,n,i,s,o){const{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let u=r,h=e+r;u<h;u++){let d;if(d=u,dt(o,d*3,l,c),o.needsUpdate=!0,n(o,d,i,s))return!0}return!1}function hx(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=r.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let s,o,a,l,c=0;const u=r._roots;for(let d=0,p=u.length;d<p;d++)s=u[d],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),h(0,c),c+=s.byteLength;function h(d,p,_=!1){const g=d*2;if(a[g+15]===go){const f=o[d+6],x=a[g+14];let v=1/0,b=1/0,y=1/0,M=-1/0,w=-1/0,P=-1/0;for(let S=3*f,T=3*(f+x);S<T;S++){let F=n[S];const N=i.getX(F),B=i.getY(F),C=i.getZ(F);N<v&&(v=N),N>M&&(M=N),B<b&&(b=B),B>w&&(w=B),C<y&&(y=C),C>P&&(P=C)}return l[d+0]!==v||l[d+1]!==b||l[d+2]!==y||l[d+3]!==M||l[d+4]!==w||l[d+5]!==P?(l[d+0]=v,l[d+1]=b,l[d+2]=y,l[d+3]=M,l[d+4]=w,l[d+5]=P,!0):!1}else{const f=d+8,x=o[d+6],v=f+p,b=x+p;let y=_,M=!1,w=!1;e?y||(M=e.has(v),w=e.has(b),y=!M&&!w):(M=!0,w=!0);const P=y||M,S=y||w;let T=!1;P&&(T=h(f,p,y));let F=!1;S&&(F=h(x,p,y));const N=T||F;if(N)for(let B=0;B<3;B++){const C=f+B,O=x+B,G=l[C],q=l[C+3],te=l[O],K=l[O+3];l[d+B]=G<te?G:te,l[d+B+3]=q>K?q:K}return N}}}const Tu=new ut;function ti(r,e,t,n){return st(r,e,Tu),t.intersectBox(Tu,n)}function dx(r,e,t,n,i,s){const{geometry:o,_indirectBuffer:a}=r;for(let l=n,c=n+i;l<c;l++){let u=a?a[l]:l;vo(o,e,t,u,s)}}function fx(r,e,t,n,i){const{geometry:s,_indirectBuffer:o}=r;let a=1/0,l=null;for(let c=n,u=n+i;c<u;c++){let h;h=vo(s,e,t,o?o[c]:c),h&&h.distance<a&&(l=h,a=h.distance)}return l}function px(r,e,t,n,i,s,o){const{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let u=r,h=e+r;u<h;u++){let d;if(d=t.resolveTriangleIndex(u),dt(o,d*3,l,c),o.needsUpdate=!0,n(o,d,i,s))return!0}return!1}const Au=new L;function mx(r,e,t,n,i){nt.setBuffer(r._roots[e]),Ba(0,r,t,n,i),nt.clearBuffer()}function Ba(r,e,t,n,i){const{float32Array:s,uint16Array:o,uint32Array:a}=nt,l=r*2;if(Ht(l,o)){const u=Gt(r,a),h=jt(l,o);lx(e,t,n,u,h,i)}else{const u=rn(r);ti(u,s,n,Au)&&Ba(u,e,t,n,i);const h=$t(r,a);ti(h,s,n,Au)&&Ba(h,e,t,n,i)}}const Ru=new L,_x=["x","y","z"];function gx(r,e,t,n){nt.setBuffer(r._roots[e]);const i=za(0,r,t,n);return nt.clearBuffer(),i}function za(r,e,t,n){const{float32Array:i,uint16Array:s,uint32Array:o}=nt;let a=r*2;if(Ht(a,s)){const c=Gt(r,o),u=jt(a,s);return cx(e,t,n,c,u)}else{const c=hl(r,o),u=_x[c],d=n.direction[u]>=0;let p,_;d?(p=rn(r),_=$t(r,o)):(p=$t(r,o),_=rn(r));const m=ti(p,i,n,Ru)?za(p,e,t,n):null;if(m){const v=m.point[u];if(d?v<=i[_+c]:v>=i[_+c+3])return m}const x=ti(_,i,n,Ru)?za(_,e,t,n):null;return m&&x?m.distance<=x.distance?m:x:m||x||null}}const Hs=new ut,Yi=new mn,ji=new mn,Pr=new we,Lu=new zt,Vs=new zt;function vx(r,e,t,n){nt.setBuffer(r._roots[e]);const i=ka(0,r,t,n);return nt.clearBuffer(),i}function ka(r,e,t,n,i=null){const{float32Array:s,uint16Array:o,uint32Array:a}=nt;let l=r*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Lu.set(t.boundingBox.min,t.boundingBox.max,n),i=Lu),Ht(l,o)){const u=e.geometry,h=u.index,d=u.attributes.position,p=t.index,_=t.attributes.position,g=Gt(r,a),m=jt(l,o);if(Pr.copy(n).invert(),t.boundsTree)return st(r,s,Vs),Vs.matrix.copy(Pr),Vs.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:x=>Vs.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let v=g*3,b=(m+g)*3;v<b;v+=3)if(dt(ji,v,h,d),ji.needsUpdate=!0,x.intersectsTriangle(ji))return!0;return!1}});for(let f=g*3,x=(m+g)*3;f<x;f+=3){dt(Yi,f,h,d),Yi.a.applyMatrix4(Pr),Yi.b.applyMatrix4(Pr),Yi.c.applyMatrix4(Pr),Yi.needsUpdate=!0;for(let v=0,b=p.count;v<b;v+=3)if(dt(ji,v,p,_),ji.needsUpdate=!0,Yi.intersectsTriangle(ji))return!0}}else{const u=r+8,h=a[r+6];return st(u,s,Hs),!!(i.intersectsBox(Hs)&&ka(u,e,t,n,i)||(st(h,s,Hs),i.intersectsBox(Hs)&&ka(h,e,t,n,i)))}}const Gs=new we,da=new zt,Dr=new zt,xx=new L,bx=new L,yx=new L,Sx=new L;function Mx(r,e,t,n={},i={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),da.set(e.boundingBox.min,e.boundingBox.max,t),da.needsUpdate=!0;const a=r.geometry,l=a.attributes.position,c=a.index,u=e.attributes.position,h=e.index,d=nn.getPrimitive(),p=nn.getPrimitive();let _=xx,g=bx,m=null,f=null;i&&(m=yx,f=Sx);let x=1/0,v=null,b=null;return Gs.copy(t).invert(),Dr.matrix.copy(Gs),r.shapecast({boundsTraverseOrder:y=>da.distanceToBox(y),intersectsBounds:(y,M,w)=>w<x&&w<o?(M&&(Dr.min.copy(y.min),Dr.max.copy(y.max),Dr.needsUpdate=!0),!0):!1,intersectsRange:(y,M)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:P=>Dr.distanceToBox(P),intersectsBounds:(P,S,T)=>T<x&&T<o,intersectsRange:(P,S)=>{for(let T=P,F=P+S;T<F;T++){dt(p,3*T,h,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let N=y,B=y+M;N<B;N++){dt(d,3*N,c,l),d.needsUpdate=!0;const C=d.distanceToTriangle(p,_,m);if(C<x&&(g.copy(_),f&&f.copy(m),x=C,v=N,b=T),C<s)return!0}}}});{const w=xr(e);for(let P=0,S=w;P<S;P++){dt(p,3*P,h,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let T=y,F=y+M;T<F;T++){dt(d,3*T,c,l),d.needsUpdate=!0;const N=d.distanceToTriangle(p,_,m);if(N<x&&(g.copy(_),f&&f.copy(m),x=N,v=T,b=P),N<s)return!0}}}}}),nn.releasePrimitive(d),nn.releasePrimitive(p),x===1/0?null:(n.point?n.point.copy(g):n.point=g.clone(),n.distance=x,n.faceIndex=v,i&&(i.point?i.point.copy(f):i.point=f.clone(),i.point.applyMatrix4(Gs),g.applyMatrix4(Gs),i.distance=g.sub(i.point).length(),i.faceIndex=b),n)}function Ex(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=r.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let s,o,a,l,c=0;const u=r._roots;for(let d=0,p=u.length;d<p;d++)s=u[d],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),h(0,c),c+=s.byteLength;function h(d,p,_=!1){const g=d*2;if(a[g+15]===go){const f=o[d+6],x=a[g+14];let v=1/0,b=1/0,y=1/0,M=-1/0,w=-1/0,P=-1/0;for(let S=f,T=f+x;S<T;S++){const F=3*r.resolveTriangleIndex(S);for(let N=0;N<3;N++){let B=F+N;B=n?n[B]:B;const C=i.getX(B),O=i.getY(B),G=i.getZ(B);C<v&&(v=C),C>M&&(M=C),O<b&&(b=O),O>w&&(w=O),G<y&&(y=G),G>P&&(P=G)}}return l[d+0]!==v||l[d+1]!==b||l[d+2]!==y||l[d+3]!==M||l[d+4]!==w||l[d+5]!==P?(l[d+0]=v,l[d+1]=b,l[d+2]=y,l[d+3]=M,l[d+4]=w,l[d+5]=P,!0):!1}else{const f=d+8,x=o[d+6],v=f+p,b=x+p;let y=_,M=!1,w=!1;e?y||(M=e.has(v),w=e.has(b),y=!M&&!w):(M=!0,w=!0);const P=y||M,S=y||w;let T=!1;P&&(T=h(f,p,y));let F=!1;S&&(F=h(x,p,y));const N=T||F;if(N)for(let B=0;B<3;B++){const C=f+B,O=x+B,G=l[C],q=l[C+3],te=l[O],K=l[O+3];l[d+B]=G<te?G:te,l[d+B+3]=q>K?q:K}return N}}}const Cu=new L;function wx(r,e,t,n,i){nt.setBuffer(r._roots[e]),Ha(0,r,t,n,i),nt.clearBuffer()}function Ha(r,e,t,n,i){const{float32Array:s,uint16Array:o,uint32Array:a}=nt,l=r*2;if(Ht(l,o)){const u=Gt(r,a),h=jt(l,o);dx(e,t,n,u,h,i)}else{const u=rn(r);ti(u,s,n,Cu)&&Ha(u,e,t,n,i);const h=$t(r,a);ti(h,s,n,Cu)&&Ha(h,e,t,n,i)}}const Pu=new L,Tx=["x","y","z"];function Ax(r,e,t,n){nt.setBuffer(r._roots[e]);const i=Va(0,r,t,n);return nt.clearBuffer(),i}function Va(r,e,t,n){const{float32Array:i,uint16Array:s,uint32Array:o}=nt;let a=r*2;if(Ht(a,s)){const c=Gt(r,o),u=jt(a,s);return fx(e,t,n,c,u)}else{const c=hl(r,o),u=Tx[c],d=n.direction[u]>=0;let p,_;d?(p=rn(r),_=$t(r,o)):(p=$t(r,o),_=rn(r));const m=ti(p,i,n,Pu)?Va(p,e,t,n):null;if(m){const v=m.point[u];if(d?v<=i[_+c]:v>=i[_+c+3])return m}const x=ti(_,i,n,Pu)?Va(_,e,t,n):null;return m&&x?m.distance<=x.distance?m:x:m||x||null}}const Ws=new ut,$i=new mn,Ki=new mn,Ir=new we,Du=new zt,Xs=new zt;function Rx(r,e,t,n){nt.setBuffer(r._roots[e]);const i=Ga(0,r,t,n);return nt.clearBuffer(),i}function Ga(r,e,t,n,i=null){const{float32Array:s,uint16Array:o,uint32Array:a}=nt;let l=r*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Du.set(t.boundingBox.min,t.boundingBox.max,n),i=Du),Ht(l,o)){const u=e.geometry,h=u.index,d=u.attributes.position,p=t.index,_=t.attributes.position,g=Gt(r,a),m=jt(l,o);if(Ir.copy(n).invert(),t.boundsTree)return st(r,s,Xs),Xs.matrix.copy(Ir),Xs.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:x=>Xs.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let v=g,b=m+g;v<b;v++)if(dt(Ki,3*e.resolveTriangleIndex(v),h,d),Ki.needsUpdate=!0,x.intersectsTriangle(Ki))return!0;return!1}});for(let f=g,x=m+g;f<x;f++){const v=e.resolveTriangleIndex(f);dt($i,3*v,h,d),$i.a.applyMatrix4(Ir),$i.b.applyMatrix4(Ir),$i.c.applyMatrix4(Ir),$i.needsUpdate=!0;for(let b=0,y=p.count;b<y;b+=3)if(dt(Ki,b,p,_),Ki.needsUpdate=!0,$i.intersectsTriangle(Ki))return!0}}else{const u=r+8,h=a[r+6];return st(u,s,Ws),!!(i.intersectsBox(Ws)&&Ga(u,e,t,n,i)||(st(h,s,Ws),i.intersectsBox(Ws)&&Ga(h,e,t,n,i)))}}const qs=new we,fa=new zt,Nr=new zt,Lx=new L,Cx=new L,Px=new L,Dx=new L;function Ix(r,e,t,n={},i={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),fa.set(e.boundingBox.min,e.boundingBox.max,t),fa.needsUpdate=!0;const a=r.geometry,l=a.attributes.position,c=a.index,u=e.attributes.position,h=e.index,d=nn.getPrimitive(),p=nn.getPrimitive();let _=Lx,g=Cx,m=null,f=null;i&&(m=Px,f=Dx);let x=1/0,v=null,b=null;return qs.copy(t).invert(),Nr.matrix.copy(qs),r.shapecast({boundsTraverseOrder:y=>fa.distanceToBox(y),intersectsBounds:(y,M,w)=>w<x&&w<o?(M&&(Nr.min.copy(y.min),Nr.max.copy(y.max),Nr.needsUpdate=!0),!0):!1,intersectsRange:(y,M)=>{if(e.boundsTree){const w=e.boundsTree;return w.shapecast({boundsTraverseOrder:P=>Nr.distanceToBox(P),intersectsBounds:(P,S,T)=>T<x&&T<o,intersectsRange:(P,S)=>{for(let T=P,F=P+S;T<F;T++){const N=w.resolveTriangleIndex(T);dt(p,3*N,h,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let B=y,C=y+M;B<C;B++){const O=r.resolveTriangleIndex(B);dt(d,3*O,c,l),d.needsUpdate=!0;const G=d.distanceToTriangle(p,_,m);if(G<x&&(g.copy(_),f&&f.copy(m),x=G,v=B,b=T),G<s)return!0}}}})}else{const w=xr(e);for(let P=0,S=w;P<S;P++){dt(p,3*P,h,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let T=y,F=y+M;T<F;T++){const N=r.resolveTriangleIndex(T);dt(d,3*N,c,l),d.needsUpdate=!0;const B=d.distanceToTriangle(p,_,m);if(B<x&&(g.copy(_),f&&f.copy(m),x=B,v=T,b=P),B<s)return!0}}}}}),nn.releasePrimitive(d),nn.releasePrimitive(p),x===1/0?null:(n.point?n.point.copy(g):n.point=g.clone(),n.distance=x,n.faceIndex=v,i&&(i.point?i.point.copy(f):i.point=f.clone(),i.point.applyMatrix4(qs),g.applyMatrix4(qs),i.distance=g.sub(i.point).length(),i.faceIndex=b),n)}function Nx(){return typeof SharedArrayBuffer<"u"}const Xr=new nt.constructor,ao=new nt.constructor,Yn=new ul(()=>new ut),Zi=new ut,Ji=new ut,pa=new ut,ma=new ut;let _a=!1;function Fx(r,e,t,n){if(_a)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");_a=!0;const i=r._roots,s=e._roots;let o,a=0,l=0;const c=new we().copy(t).invert();for(let u=0,h=i.length;u<h;u++){Xr.setBuffer(i[u]),l=0;const d=Yn.getPrimitive();st(0,Xr.float32Array,d),d.applyMatrix4(c);for(let p=0,_=s.length;p<_&&(ao.setBuffer(s[u]),o=cn(0,0,t,c,n,a,l,0,0,d),ao.clearBuffer(),l+=s[p].length,!o);p++);if(Yn.releasePrimitive(d),Xr.clearBuffer(),a+=i[u].length,o)break}return _a=!1,o}function cn(r,e,t,n,i,s=0,o=0,a=0,l=0,c=null,u=!1){let h,d;u?(h=ao,d=Xr):(h=Xr,d=ao);const p=h.float32Array,_=h.uint32Array,g=h.uint16Array,m=d.float32Array,f=d.uint32Array,x=d.uint16Array,v=r*2,b=e*2,y=Ht(v,g),M=Ht(b,x);let w=!1;if(M&&y)u?w=i(Gt(e,f),jt(e*2,x),Gt(r,_),jt(r*2,g),l,o+e,a,s+r):w=i(Gt(r,_),jt(r*2,g),Gt(e,f),jt(e*2,x),a,s+r,l,o+e);else if(M){const P=Yn.getPrimitive();st(e,m,P),P.applyMatrix4(t);const S=rn(r),T=$t(r,_);st(S,p,Zi),st(T,p,Ji);const F=P.intersectsBox(Zi),N=P.intersectsBox(Ji);w=F&&cn(e,S,n,t,i,o,s,l,a+1,P,!u)||N&&cn(e,T,n,t,i,o,s,l,a+1,P,!u),Yn.releasePrimitive(P)}else{const P=rn(e),S=$t(e,f);st(P,m,pa),st(S,m,ma);const T=c.intersectsBox(pa),F=c.intersectsBox(ma);if(T&&F)w=cn(r,P,t,n,i,s,o,a,l+1,c,u)||cn(r,S,t,n,i,s,o,a,l+1,c,u);else if(T)if(y)w=cn(r,P,t,n,i,s,o,a,l+1,c,u);else{const N=Yn.getPrimitive();N.copy(pa).applyMatrix4(t);const B=rn(r),C=$t(r,_);st(B,p,Zi),st(C,p,Ji);const O=N.intersectsBox(Zi),G=N.intersectsBox(Ji);w=O&&cn(P,B,n,t,i,o,s,l,a+1,N,!u)||G&&cn(P,C,n,t,i,o,s,l,a+1,N,!u),Yn.releasePrimitive(N)}else if(F)if(y)w=cn(r,S,t,n,i,s,o,a,l+1,c,u);else{const N=Yn.getPrimitive();N.copy(ma).applyMatrix4(t);const B=rn(r),C=$t(r,_);st(B,p,Zi),st(C,p,Ji);const O=N.intersectsBox(Zi),G=N.intersectsBox(Ji);w=O&&cn(S,B,n,t,i,o,s,l,a+1,N,!u)||G&&cn(S,C,n,t,i,o,s,l,a+1,N,!u),Yn.releasePrimitive(N)}}return w}const Ys=new zt,Iu=new ut;class dl{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,s=e._indirectBuffer,o=n.getIndex();let a;return t.cloneBuffers?a={roots:i.map(l=>l.slice()),index:o.array.slice(),indirectBuffer:s?s.slice():null}:a={roots:i,index:o.array,indirectBuffer:s},a}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:i,roots:s,indirectBuffer:o}=e,a=new dl(t,{...n,[la]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){const l=t.getIndex();if(l===null){const c=new ft(e.index,1,!1);t.setIndex(c)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({strategy:Dh,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,[la]:!1},t),t.useSharedArrayBuffer&&!Nx())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[la]||(J0(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ut)));const{_indirectBuffer:n}=this;this.resolveTriangleIndex=t.indirect?i=>n[i]:i=>i}refit(e=null){return(this.indirect?Ex:hx)(this,e)}traverse(e,t=0){const n=this._roots[t],i=new Uint32Array(n),s=new Uint16Array(n);o(0);function o(a,l=0){const c=a*2,u=s[c+15]===go;if(u){const h=i[a+6],d=s[c+14];e(l,u,new Float32Array(n,a*4,6),h,d)}else{const h=a+bi/4,d=i[a+6],p=i[a+7];e(l,u,new Float32Array(n,a*4,6),p)||(o(h,l+1),o(d,l+1))}}}raycast(e,t=pn){const n=this._roots,i=this.geometry,s=[],o=t.isMaterial,a=Array.isArray(t),l=i.groups,c=o?t.side:t,u=this.indirect?wx:mx;for(let h=0,d=n.length;h<d;h++){const p=a?t[l[h].materialIndex].side:c,_=s.length;if(u(this,h,p,e,s),a){const g=l[h].materialIndex;for(let m=_,f=s.length;m<f;m++)s[m].face.materialIndex=g}}return s}raycastFirst(e,t=pn){const n=this._roots,i=this.geometry,s=t.isMaterial,o=Array.isArray(t);let a=null;const l=i.groups,c=s?t.side:t,u=this.indirect?Ax:gx;for(let h=0,d=n.length;h<d;h++){const p=o?t[l[h].materialIndex].side:c,_=u(this,h,p,e);_!=null&&(a==null||_.distance<a.distance)&&(a=_,o&&(_.face.materialIndex=l[h].materialIndex))}return a}intersectsGeometry(e,t){let n=!1;const i=this._roots,s=this.indirect?Rx:vx;for(let o=0,a=i.length;o<a&&(n=s(this,o,e,t),!n);o++);return n}shapecast(e){const t=nn.getPrimitive(),n=this.indirect?px:ux;let{boundsTraverseOrder:i,intersectsBounds:s,intersectsRange:o,intersectsTriangle:a}=e;if(o&&a){const h=o;o=(d,p,_,g,m)=>h(d,p,_,g,m)?!0:n(d,p,this,a,_,g,t)}else o||(a?o=(h,d,p,_)=>n(h,d,this,a,p,_,t):o=(h,d,p)=>p);let l=!1,c=0;const u=this._roots;for(let h=0,d=u.length;h<d;h++){const p=u[h];if(l=rx(this,h,s,o,i,c),l)break;c+=p.byteLength}return nn.releasePrimitive(t),l}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:s}=n;const o=nn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?_=>{const g=this.resolveTriangleIndex(_);dt(o,g*3,a,l)}:_=>{dt(o,_*3,a,l)},u=nn.getPrimitive(),h=e.geometry.index,d=e.geometry.attributes.position,p=e.indirect?_=>{const g=e.resolveTriangleIndex(_);dt(u,g*3,h,d)}:_=>{dt(u,_*3,h,d)};if(s){const _=(g,m,f,x,v,b,y,M)=>{for(let w=f,P=f+x;w<P;w++){p(w),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let S=g,T=g+m;S<T;S++)if(c(S),o.needsUpdate=!0,s(o,u,S,w,v,b,y,M))return!0}return!1};if(i){const g=i;i=function(m,f,x,v,b,y,M,w){return g(m,f,x,v,b,y,M,w)?!0:_(m,f,x,v,b,y,M,w)}}else i=_}return Fx(this,e,t,i)}intersectsBox(e,t){return Ys.set(e.min,e.max,t),Ys.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Ys.intersectsBox(n),intersectsTriangle:n=>Ys.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},s=0,o=1/0){return(this.indirect?Ix:Mx)(this,e,t,n,i,s,o)}closestPointToPoint(e,t={},n=0,i=1/0){return sx(this,e,t,n,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{st(0,new Float32Array(n),Iu),e.union(Iu)}),e}}function Ux(r){switch(r){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function Ox(r){switch(r){case 1:return Ku;case 2:return Zu;case 3:return Mt;case 4:return Mt}}function Nu(r){switch(r){case 1:return $a;case 2:return ho;case 3:return jr;case 4:return jr}}class Bh extends oo{constructor(){super(),this.minFilter=it,this.magFilter=it,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,n=e.itemSize,i=e.count;if(t!==null){if(n*i%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=i*n/t}const s=e.itemSize,o=e.count,a=e.normalized,l=e.array.constructor,c=l.BYTES_PER_ELEMENT;let u=this._forcedType,h=s;if(u===null)switch(l){case Float32Array:u=Ut;break;case Uint8Array:case Uint16Array:case Uint32Array:u=Yt;break;case Int8Array:case Int16Array:case Int32Array:u=kr;break}let d,p,_,g,m=Ux(s);switch(u){case Ut:_=1,p=Ox(s),a&&c===1?(g=l,m+="8",l===Uint8Array?d=yn:(d=Aa,m+="_SNORM")):(g=Float32Array,m+="32F",d=Ut);break;case kr:m+=c*8+"I",_=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,p=Nu(s),c===1?(g=Int8Array,d=Aa):c===2?(g=Int16Array,d=Yu):(g=Int32Array,d=kr);break;case Yt:m+=c*8+"UI",_=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,p=Nu(s),c===1?(g=Uint8Array,d=yn):c===2?(g=Uint16Array,d=uo):(g=Uint32Array,d=Yt);break}h===3&&(p===Mt||p===jr)&&(h=4);const f=Math.ceil(Math.sqrt(o)),x=h*f*f,v=new g(x),b=e.normalized;e.normalized=!1;for(let y=0;y<o;y++){const M=h*y;v[M]=e.getX(y)/_,s>=2&&(v[M+1]=e.getY(y)/_),s>=3&&(v[M+2]=e.getZ(y)/_,h===4&&(v[M+3]=1)),s>=4&&(v[M+3]=e.getW(y)/_)}e.normalized=b,this.internalFormat=m,this.format=p,this.type=d,this.image.width=f,this.image.height=f,this.image.data=v,this.needsUpdate=!0,this.dispose(),e.itemSize=n,e.count=i}}class Bx extends Bh{constructor(){super(),this._forcedType=Yt}}class Br extends Bh{constructor(){super(),this._forcedType=Ut}}class Fu{constructor(){this.index=new Bx,this.position=new Br,this.bvhBounds=new oo,this.bvhContents=new oo,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(kx(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const n=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const i=Fh(Nh(t));this._cachedIndexAttr=new ft(i,1,!1)}zx(t,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:n,bvhContents:i}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),i&&i.dispose()}}function zx(r,e,t){const n=t.array,i=r.index?r.index.array:null;for(let s=0,o=e.length;s<o;s++){const a=3*s,l=3*e[s];for(let c=0;c<3;c++)n[a+c]=i?i[l+c]:l+c}}function kx(r,e,t){const n=r._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const i=n[0],s=new Uint16Array(i),o=new Uint32Array(i),a=new Float32Array(i),l=i.byteLength/bi,c=2*Math.ceil(Math.sqrt(l/2)),u=new Float32Array(4*c*c),h=Math.ceil(Math.sqrt(l)),d=new Uint32Array(2*h*h);for(let p=0;p<l;p++){const _=p*bi/4,g=_*2,m=_;for(let f=0;f<3;f++)u[8*p+0+f]=a[m+0+f],u[8*p+4+f]=a[m+3+f];if(Ht(g,s)){const f=jt(g,s),x=Gt(_,o),v=4294901760|f;d[p*2+0]=v,d[p*2+1]=x}else{const f=4*$t(_,o)/bi,x=hl(_,o);d[p*2+0]=x,d[p*2+1]=f}}e.image.data=u,e.image.width=c,e.image.height=c,e.format=Mt,e.type=Ut,e.internalFormat="RGBA32F",e.minFilter=it,e.magFilter=it,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=d,t.image.width=h,t.image.height=h,t.format=ho,t.type=Yt,t.internalFormat="RG32UI",t.minFilter=it,t.magFilter=it,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const Hx=`
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
`,Vx=`

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
`,ci=new L,ui=new L,hi=new L,Uu=new Ke,js=new L,ga=new L,Ou=new Ke,Bu=new Ke,$s=new we,zu=new we;function Fr(r,e){if(!r&&!e)return;const t=r.count===e.count,n=r.normalized===e.normalized,i=r.array.constructor===e.array.constructor,s=r.itemSize===e.itemSize;if(!t||!n||!i||!s)throw new Error}function zr(r,e=null){const t=r.array.constructor,n=r.normalized,i=r.itemSize,s=e===null?r.count:e;return new ft(new t(i*s),i,n)}function zh(r,e,t=0){if(r.isInterleavedBufferAttribute){const n=r.itemSize;for(let i=0,s=r.count;i<s;i++){const o=i+t;e.setX(o,r.getX(i)),n>=2&&e.setY(o,r.getY(i)),n>=3&&e.setZ(o,r.getZ(i)),n>=4&&e.setW(o,r.getW(i))}}else{const n=e.array,i=n.constructor,s=n.BYTES_PER_ELEMENT*r.itemSize*t;new i(n.buffer,s,r.array.length).set(r.array)}}function Gx(r,e,t){const n=r.elements,i=e.elements;for(let s=0,o=i.length;s<o;s++)n[s]+=i[s]*t}function ku(r,e,t){const n=r.skeleton,i=r.geometry,s=n.bones,o=n.boneInverses;Ou.fromBufferAttribute(i.attributes.skinIndex,e),Bu.fromBufferAttribute(i.attributes.skinWeight,e),$s.elements.fill(0);for(let a=0;a<4;a++){const l=Bu.getComponent(a);if(l!==0){const c=Ou.getComponent(a);zu.multiplyMatrices(s[c].matrixWorld,o[c]),Gx($s,zu,l)}}return $s.multiply(r.bindMatrix).premultiply(r.bindMatrixInverse),t.transformDirection($s),t}function va(r,e,t,n,i){js.set(0,0,0);for(let s=0,o=r.length;s<o;s++){const a=e[s],l=r[s];a!==0&&(ga.fromBufferAttribute(l,n),t?js.addScaledVector(ga,a):js.addScaledVector(ga.sub(i),a))}i.add(js)}function Wx(r,e={useGroups:!1,updateIndex:!1,skipAttributes:[]},t=new Bt){const n=r[0].index!==null,{useGroups:i=!1,updateIndex:s=!1,skipAttributes:o=[]}=e,a=new Set(Object.keys(r[0].attributes)),l={};let c=0;t.clearGroups();for(let u=0;u<r.length;++u){const h=r[u];let d=0;if(n!==(h.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const p in h.attributes){if(!a.has(p))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.');l[p]===void 0&&(l[p]=[]),l[p].push(h.attributes[p]),d++}if(d!==a.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(i){let p;if(n)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");t.addGroup(c,p,u),c+=p}}if(n){let u=!1;if(!t.index){let h=0;for(let d=0;d<r.length;++d)h+=r[d].index.count;t.setIndex(new ft(new Uint32Array(h),1,!1)),u=!0}if(s||u){const h=t.index;let d=0,p=0;for(let _=0;_<r.length;++_){const g=r[_],m=g.index;if(o[_]!==!0)for(let f=0;f<m.count;++f)h.setX(d,m.getX(f)+p),d++;p+=g.attributes.position.count}}}for(const u in l){const h=l[u];if(!(u in t.attributes)){let _=0;for(const g in h)_+=h[g].count;t.setAttribute(u,zr(l[u][0],_))}const d=t.attributes[u];let p=0;for(let _=0,g=h.length;_<g;_++){const m=h[_];o[_]!==!0&&zh(m,d,p),p+=m.count}}return t}function Xx(r,e){if(r===null||e===null)return r===e;if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}class qx{constructor(e){this.matrixWorld=new we,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=e,this.update()}update(){const e=this.mesh,t=e.geometry,n=e.skeleton,i=(t.index?t.index.count:t.attributes.position.count)/3;if(this.matrixWorld.copy(e.matrixWorld),this.geometryHash=t.attributes.position.version,this.primitiveCount=i,n){n.boneTexture||n.computeBoneTexture(),n.update();const s=n.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==s.length?this.boneMatrices=s.slice():this.boneMatrices.set(s)}else this.boneMatrices=null}didChange(){const e=this.mesh,t=e.geometry,n=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===t.attributes.position.version&&Xx(e.skeleton&&e.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===n)}}class Yx{constructor(e){Array.isArray(e)||(e=[e]);const t=[];e.forEach(n=>{n.traverseVisible(i=>{i.isMesh&&t.push(i)})}),this.meshes=t,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(t.length).fill().map(()=>new Bt),this._diffMap=new WeakMap}getMaterials(){const e=[];return this.meshes.forEach(t=>{Array.isArray(t.material)?e.push(...t.material):e.push(t.material)}),e}generate(e=new Bt){let t=[];const{meshes:n,useGroups:i,_intermediateGeometry:s,_diffMap:o}=this;for(let a=0,l=n.length;a<l;a++){const c=n[a],u=s[a],h=o.get(c);!h||h.didChange(c)?(this._convertToStaticGeometry(c,u),t.push(!1),h?h.update():o.set(c,new qx(c))):t.push(!0)}Wx(s,{useGroups:i,skipAttributes:t},e);for(const a in e.attributes)e.attributes[a].needsUpdate=!0;return e}_convertToStaticGeometry(e,t=new Bt){const n=e.geometry,i=this.applyWorldTransforms,s=this.attributes.includes("normal"),o=this.attributes.includes("tangent"),a=n.attributes,l=t.attributes;t.index||(t.index=n.index),l.position||t.setAttribute("position",zr(a.position)),s&&!l.normal&&a.normal&&t.setAttribute("normal",zr(a.normal)),o&&!l.tangent&&a.tangent&&t.setAttribute("tangent",zr(a.tangent)),Fr(n.index,t.index),Fr(a.position,l.position),s&&Fr(a.normal,l.normal),o&&Fr(a.tangent,l.tangent);const c=a.position,u=s?a.normal:null,h=o?a.tangent:null,d=n.morphAttributes.position,p=n.morphAttributes.normal,_=n.morphAttributes.tangent,g=n.morphTargetsRelative,m=e.morphTargetInfluences,f=new Ge;f.getNormalMatrix(e.matrixWorld);for(let x=0,v=a.position.count;x<v;x++)ci.fromBufferAttribute(c,x),u&&ui.fromBufferAttribute(u,x),h&&(Uu.fromBufferAttribute(h,x),hi.fromBufferAttribute(h,x)),m&&(d&&va(d,m,g,x,ci),p&&va(p,m,g,x,ui),_&&va(_,m,g,x,hi)),e.isSkinnedMesh&&(e.applyBoneTransform(x,ci),u&&ku(e,x,ui),h&&ku(e,x,hi)),i&&ci.applyMatrix4(e.matrixWorld),l.position.setXYZ(x,ci.x,ci.y,ci.z),u&&(i&&ui.applyNormalMatrix(f),l.normal.setXYZ(x,ui.x,ui.y,ui.z)),h&&(i&&hi.transformDirection(e.matrixWorld),l.tangent.setXYZW(x,hi.x,hi.y,hi.z,Uu.w));for(const x in this.attributes){const v=this.attributes[x];v==="position"||v==="tangent"||v==="normal"||!(v in a)||(l[v]||t.setAttribute(v,zr(a[v])),Fr(a[v],l[v]),zh(a[v],l[v]))}return t}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Mn{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Mn.nextNameID=Mn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Mn.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class jx extends Mn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Wa(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const $x={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Wa,toHexString:Wa},Zr={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},Kx={isPrimitive:!1,match:Array.isArray,fromHexString(r,e,t=1){const n=Zr.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(255&n)/255*t},toHexString:([r,e,t],n=1)=>Zr.toHexString(r*(n=255/n)<<16^e*n<<8^t*n<<0)},Zx={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=Zr.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(255&n)/255*t},toHexString:({r,g:e,b:t},n=1)=>Zr.toHexString(r*(n=255/n)<<16^e*n<<8^t*n<<0)},Jx=[$x,Zr,Kx,Zx];class Qx extends Mn{constructor(e,t,n,i){var s;super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,Jx.find(o=>o.match(s))),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=Wa(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class xa extends Mn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class eb extends Mn{constructor(e,t,n,i,s,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=u=>{const h=parseFloat(this.$input.value);isNaN(h)||(this._snapClampSetValue(h+u),this.$input.value=this.getValue())};let t,n,i,s,o,a=!1;const l=u=>{if(a){const h=u.clientX-t,d=u.clientY-n;Math.abs(d)>5?(u.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(h)>5&&c()}if(!a){const h=u.clientY-i;o-=h*this._step*this._arrowKeyMultiplier(u),s+o>this._max?o=this._max-s:s+o<this._min&&(o=this._min-s),this._snapClampSetValue(s+o)}i=u.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{let u=parseFloat(this.$input.value);isNaN(u)||(this._stepExplicit&&(u=this._snap(u)),this.setValue(this._clamp(u)))}),this.$input.addEventListener("keydown",u=>{u.code==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u)*-1))}),this.$input.addEventListener("wheel",u=>{this._inputFocused&&(u.preventDefault(),e(this._step*this._normalizeMouseWheel(u)))},{passive:!1}),this.$input.addEventListener("mousedown",u=>{t=u.clientX,n=i=u.clientY,a=!0,s=this.getValue(),o=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=d=>{const p=this.$slider.getBoundingClientRect();let _=(g=d,m=p.left,f=p.right,x=this._min,v=this._max,(g-m)/(f-m)*(v-x)+x);var g,m,f,x,v;this._snapClampSetValue(_)},t=d=>{e(d.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",n)};let i,s,o=!1;const a=d=>{d.preventDefault(),this._setDraggingStyle(!0),e(d.touches[0].clientX),o=!1},l=d=>{if(o){const p=d.touches[0].clientX-i,_=d.touches[0].clientY-s;Math.abs(p)>Math.abs(_)?a(d):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}else d.preventDefault(),e(d.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)},u=this._callOnFinishChange.bind(this);let h;this.$slider.addEventListener("mousedown",d=>{this._setDraggingStyle(!0),e(d.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",d=>{d.touches.length>1||(this._hasScrollBar?(i=d.touches[0].clientX,s=d.touches[0].clientY,o=!0):a(d),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",c))},{passive:!1}),this.$slider.addEventListener("wheel",d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const p=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(h),h=setTimeout(u,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class tb extends Mn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class nb extends Mn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Hu=!1;class fl{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Hu&&o&&(function(l){const c=document.createElement("style");c.innerHTML=l;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(c,u):document.head.appendChild(c)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Hu=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,i,s){if(Object(n)===n)return new tb(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new eb(this,e,t,n,i,s);case"boolean":return new jx(this,e,t);case"string":return new nb(this,e,t);case"function":return new xa(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new Qx(this,e,t,n)}addFolder(e){return new fl({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof xa||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof xa)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const ib=`\r
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
uniform vec3 base_color;\r
uniform float base_roughness;\r
uniform float base_metalness;\r
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
\r
uniform float coat_weight;\r
uniform vec3  coat_color;\r
uniform float coat_roughness;\r
uniform float coat_anisotropy;\r
uniform float coat_rotation;\r
uniform float coat_ior;\r
\r
uniform float fuzz_weight;\r
uniform vec3  fuzz_color;\r
uniform float fuzz_roughness;\r
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
const float DENOM_TOLERANCE       = 1.0e-12;\r
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
void setFrame(in vec3 nW, inout Basis basis)\r
{\r
    basis.nW = safe_normalize(nW);\r
    if (abs(nW.z) < abs(nW.x))\r
    {\r
        basis.tW.x =  nW.z;\r
        basis.tW.y =  0.0;\r
        basis.tW.z = -nW.x;\r
    }\r
    else\r
    {\r
        basis.tW.x =  0.0;\r
        basis.tW.y =  nW.z;\r
        basis.tW.z = -nW.y;\r
    }\r
    basis.tW = safe_normalize(basis.tW);\r
    basis.bW = cross(basis.nW, basis.tW);\r
}\r
\r
Basis makeBasis(in vec3 nW)\r
{\r
    Basis basis;\r
    setFrame(nW, basis);\r
    return basis;\r
}\r
\r
Basis makeBasis(in vec3 nW, in vec3 baryCoord)\r
{\r
    Basis basis;\r
    setFrame(nW, basis);\r
    basis.baryCoord = baryCoord;\r
    return basis;\r
}\r
\r
/*\r
Basis makeBasis(in vec3 nW, in vec3 tW, in vec3 baryCoord)\r
{\r
    Basis basis;\r
    basis.nW = safe_normalize(nW);\r
    basis.tW = safe_normalize(tW);\r
    basis.bW = cross(basis.nW, basis.tW);\r
    basis.baryCoord = baryCoord;\r
    return basis;\r
}\r
*/\r
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
// cosi    = magnitude of the cosine of the incident ray angle to the micronormal\r
// eta_ti  = ratio et/ei of the transmitted IOR (et) and incident IOR (ei)\r
float FresnelDielectricReflectance(in float cosi, in float eta_ti)\r
{\r
    float c = cosi;\r
    float g = eta_ti*eta_ti - 1.0 + c*c;\r
    if (g > 0.0)\r
    {\r
        g = sqrt(g);\r
        float A = (g-c) / (g+c);\r
        float B = (c*(g+c) - 1.0) / (c*(g-c) + 1.0);\r
        return 0.5*A*A*(1.0 + B*B);\r
    }\r
    return 1.0; // total internal reflection\r
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
// Sample Henyey-Greenstein phase function\r
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
\r
float wavelength_nm;\r
\r
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
\r
\r
/////////////////////////////////////////////////////////////////////////\r
// Color utils\r
/////////////////////////////////////////////////////////////////////////\r
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
`,rb=`\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// "Coat" dielectric microfacet BSDF\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
\r
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
\r
\r
vec3 coat_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
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
}\r
\r
\r
vec3 coat_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                      out vec3 woutputL, out float pdf_woutputL)\r
{\r
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
}\r
\r
\r
vec3 coat_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)\r
{\r
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
}\r
`,sb=`\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// "Metal" conductor microfacet BSDF\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
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
    vec3 F = FresnelF82Tint(abs(dot(winputR, mR)), base_weight * base_color, specular_weight * specular_color);\r
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
    vec3 F = FresnelF82Tint(abs(dot(winputR, mR)), base_weight * base_color, specular_weight * specular_color);\r
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
`,ob=`\r
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
    float n_exterior = 1.0;\r
    float n_interior = specular_ior;\r
    float eta_ti_refl = external_reflection ? n_interior/n_exterior : n_exterior/n_interior;\r
    if (abs(eta_ti_refl - 1.0) < IOR_EPSILON) // degenerate case of index-matched interface, BRDF goes to zero\r
        return vec3(0.0);\r
\r
    // Non-physical Fresnel tint to apply\r
    vec3 tint = specular_weight * specular_color;\r
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
    float F = FresnelDielectricReflectance(abs(dot(winputR, mR)), eta_ti_refl);\r
\r
    // Thus evaluate BRDF.\r
    float f = F * D * G2 / max(4.0 * abs(woutputL.z) * abs(winputL.z), DENOM_TOLERANCE);\r
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
    float n_exterior = 1.0;\r
    float n_interior = specular_ior;\r
    float eta_ti_refl = external_reflection ? n_interior/n_exterior : n_exterior/n_interior;\r
    if (abs(eta_ti_refl - 1.0) < IOR_EPSILON) // degenerate case of index-matched interface, BRDF goes to zero\r
        return vec3(0.0);\r
\r
    // Non-physical Fresnel tint to apply\r
    vec3 tint = specular_weight * specular_color;\r
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
    float F = FresnelDielectricReflectance(abs(dot(winputR, mR)), eta_ti_refl);\r
\r
     // Thus evaluate BRDF.\r
    float f = F * D * G2 / max(4.0 * abs(woutputL.z) * abs(winputL.z), DENOM_TOLERANCE);\r
    return f * tint;\r
}\r
\r
\r
vec3 specular_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)\r
{\r
    // Estimate of the BRDF albedo, used to compute the discrete probability of selecting this lobe\r
    float n_exterior = 1.0;\r
    float n_interior = specular_ior;\r
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
        vec3 f = specular_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL);\r
        if (length(f) > RADIANCE_EPSILON)\r
            albedo += f * abs(woutputL.z) / max(DENOM_TOLERANCE, pdf_woutputL);\r
    }\r
    albedo /= float(num_samples);\r
    return albedo;\r
}\r
`,ab=`\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// "Specular" dielectric microfacet BTDF\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
\r
vec3 specular_btdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
                            inout float pdf_woutputL)\r
{\r
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
    float n_exterior = 1.0;\r
    float n_interior = specular_ior_dispersive();\r
    float eta_ti_photon = external_transmission ? n_exterior/n_interior : n_interior/n_exterior;\r
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
}\r
\r
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
\r
vec3 specular_btdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                          out vec3 woutputL, out float pdf_woutputL)\r
{\r
    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.\r
    // Thus we can determine if the photon transmission is to the exterior (from the interior), or the opposite:\r
    vec3 beamOutgoingL = winputL;\r
    bool external_transmission = (beamOutgoingL.z > 0.0);\r
\r
    // Compute IOR ratio at interface:\r
    //  eta_ti_photon = (IOR in hemi. of transmitted photon) / (IOR in hemi. of incident photon)\r
    float n_exterior = 1.0;\r
    float n_interior = specular_ior_dispersive();\r
    float eta_ti_photon = external_transmission ? n_exterior/n_interior : n_interior/n_exterior;\r
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
}\r
\r
\r
vec3 specular_btdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)\r
{\r
    // Estimate of the BTDF albedo, used to compute the discrete probability of selecting this lobe\r
    float n_exterior = 1.0;\r
    float n_interior = specular_ior_dispersive();\r
    float eta = n_interior/n_exterior;\r
    if (abs(eta - 1.0) < IOR_EPSILON)\r
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
}\r
`,lb=`\r
\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// "diffuse" - Oren-Nayar BRDF\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
\r
vec3 oren_nayar_eval(in vec3 woutputL, in vec3 winputL)\r
{\r
    float sigma = base_roughness * PI;\r
    float sigma2 = sqr(sigma);\r
    float A = 1.0 - (sigma2 / (2.0 * (sigma2 + 0.33)));\r
    float B = 0.45 * sigma2 / (sigma2 + 0.09);\r
    float sinThetaI = sinTheta(winputL);\r
    float sinThetaO = sinTheta(woutputL);\r
    float maxCos = 0.0;\r
    if (sinThetaI > 1e-4 && sinThetaO > 1e-4)\r
    {\r
        float sinPhiI = sinPhi(winputL);  float cosPhiI = cosPhi(winputL);\r
        float sinPhiO = sinPhi(woutputL); float cosPhiO = cosPhi(woutputL);\r
        float dCos = cosPhiI * cosPhiO + sinPhiI * sinPhiO;\r
        maxCos = max(0.0, dCos);\r
    }\r
    float sinAlpha, tanBeta;\r
    if (abs(cosTheta(winputL)) > abs(cosTheta(woutputL)))\r
    {\r
        sinAlpha = sinThetaO;\r
        tanBeta = sinThetaI / abs(cosTheta(winputL));\r
    }\r
    else\r
    {\r
        sinAlpha = sinThetaI;\r
        tanBeta = sinThetaO / abs(cosTheta(woutputL));\r
    }\r
    return base_weight * base_color / PI * (A + B * maxCos * sinAlpha * tanBeta);\r
}\r
\r
\r
vec3 diffuse_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
                           inout float pdf_woutputL)\r
{\r
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE) return vec3(0.0);\r
    pdf_woutputL = pdfHemisphereCosineWeighted(woutputL);\r
    return oren_nayar_eval(winputL, woutputL);\r
}\r
\r
\r
vec3 diffuse_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                         out vec3 woutputL, out float pdf_woutputL)\r
{\r
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);\r
    woutputL = sampleHemisphereCosineWeighted(rndSeed, pdf_woutputL);\r
    return oren_nayar_eval(winputL, woutputL);\r
}\r
\r
\r
vec3 diffuse_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)\r
{\r
    // Estimate of the BRDF albedo, used to compute the discrete probability of selecting this lobe\r
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);\r
    return base_weight * base_color;\r
}\r
`,cb=`\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// OpenPBR BSDF\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
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
    // Surface //////////////////////\r
\r
    // Fuzz BRDF\r
    weights.m[ID_FUZZ_BRDF] = vec3(0.0); // fuzz_weight;\r
    if (maxComponent(weights.m[ID_FUZZ_BRDF]) > 0.0) albedos.m[ID_FUZZ_BRDF] = vec3(0.0); //fuzz_brdf_albedo(pW, basis, winputL, rndSeed);\r
    else                                             albedos.m[ID_FUZZ_BRDF] = vec3(0.0);\r
\r
    // Coated base //////////////////////\r
    vec3 w_coated_base = vec3(1.0); //mix(vec3(1.0), vec3(1.0) - albedos.m[ID_FUZZ_BRDF], fuzz_weight);\r
\r
    // Coat BRDF\r
    weights.m[ID_COAT_BRDF] = w_coated_base * coat_weight;\r
    albedos.m[ID_COAT_BRDF] = (maxComponent(weights.m[ID_COAT_BRDF]) > 0.0) ? coat_brdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);\r
\r
    // Base substrate //////////////////////\r
    vec3 w_base_substrate = w_coated_base * mix(vec3(1.0), coat_color*(vec3(1.0) - albedos.m[ID_COAT_BRDF]), coat_weight);\r
\r
    // Metal BRDF\r
    weights.m[ID_META_BRDF] = w_base_substrate * base_metalness;\r
    albedos.m[ID_META_BRDF] = (maxComponent(weights.m[ID_META_BRDF]) > 0.0) ? metal_brdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);\r
\r
    // Dielectric base //////////////////////\r
    vec3 w_dielectric_base = w_base_substrate * vec3(max(0.0, 1.0 - base_metalness));\r
\r
    // Specular BRDF\r
    weights.m[ID_SPEC_BRDF] = w_dielectric_base;\r
    albedos.m[ID_SPEC_BRDF] = (maxComponent(weights.m[ID_SPEC_BRDF]) > 0.0) ? specular_brdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);\r
\r
    // Specular BTDF\r
    weights.m[ID_SPEC_BTDF] = w_dielectric_base * transmission_weight;\r
    albedos.m[ID_SPEC_BTDF] = (maxComponent(weights.m[ID_SPEC_BTDF]) > 0.0) ? specular_btdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);\r
\r
    // Opaque dielectric base //////////////////////\r
    vec3 w_opaque_dielectric_base = w_dielectric_base * (1.0 - transmission_weight);\r
\r
    // Subsurface BSSRDF\r
    //  - the subsurface lobe is identical to the specular BTDF, apart from the associated internal volumetric medium\r
    weights.m[ID_SSSC_BTDF] = w_opaque_dielectric_base * subsurface_weight;\r
    albedos.m[ID_SSSC_BTDF] = (maxComponent(weights.m[ID_SSSC_BTDF]) > 0.0) ? specular_btdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);\r
\r
    // Diffuse BRDF\r
    weights.m[ID_DIFF_BRDF] = w_opaque_dielectric_base * (1.0 - subsurface_weight) * (vec3(1.0) - albedos.m[ID_SPEC_BRDF]);\r
    albedos.m[ID_DIFF_BRDF] = (maxComponent(weights.m[ID_DIFF_BRDF]) > 0.0) ? diffuse_brdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);\r
}\r
\r
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
\r
vec3 openpbr_bsdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                         out vec3 woutputL, out float pdf_woutputL, out Volume internal_medium)\r
{\r
    // Sample a lobe according to these probabilities.\r
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
            // But if the specular BTDF or SSS lobe were sampled, producing a transmission into the object interior,\r
            // we also populate the associated volumetric bulk medium\r
            if (lobe_id==ID_SPEC_BTDF)\r
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
            // Set up the volumetric medium according to the "Subsurface" section of the OpenPBR spec\r
            else if (lobe_id==ID_SSSC_BTDF)\r
            {\r
                float g = clamp(subsurface_anisotropy, -0.95, 0.95);           // scattering anisotropy\r
                vec3 A = subsurface_color;                                     // multi-scatter albedo\r
                vec3 r = subsurface_radius * subsurface_radius_scale;          // diffusion radius\r
                vec3 A2 = A*A;\r
                vec3 A3 = A*A2;\r
                vec3 A4 = A2*A2;\r
                vec3 S = 4.012 - 15.21*A + 32.34*A2 - 34.68*A3 + 13.91*A4;     // Hyperion fit for scale factor S = L / diffusion_lengths\r
                vec3 s2 = exp(-11.43*A + 15.38*A2 - 13.91*A3);                 // Hyperion fit for one minus single scatter albedo\r
                vec3 L = S * r;                                                // MFPs according to Hyperion paper\r
                vec3 alpha = (1.0 - s2);                                       // Hyperion fit for single scatter albedo\r
                //vec3 mu_t = 1.0 / max(vec3(3.0*RAY_OFFSET), L);              // OpenPBR extinction remapping\r
                vec3 mu_t = 1.0 / max(vec3(3.0*RAY_OFFSET), r);                // (v2)\r
                internal_medium.albedo     = alpha / (1.0 - g*s2);             // remapped single-scattering albedo\r
                internal_medium.extinction = mu_t * (1.0 - g*s2) / (1.0 - g);  // remapped extinction\r
                internal_medium.anisotropy = g;\r
            }\r
\r
            return f;\r
        }\r
    }\r
    pdf_woutputL = 1.0;\r
    return vec3(0.0);\r
}\r
\r
\r
`,ub=`\r
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
    pdf_woutputL = pdfHemisphereCosineWeighted(winputL);\r
    if (winputL.z < 0.0 || woutputL.z < 0.0) return vec3(0.0);\r
    if (wireframe && minComponent(basis.baryCoord) < 0.003) return vec3(0.0);\r
    return neutral_color/PI;\r
}\r
\r
vec3 neutral_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                         out vec3 woutputL, out float pdf_woutputL)\r
{\r
    woutputL = sampleHemisphereCosineWeighted(rndSeed, pdf_woutputL);\r
    if (winputL.z < 0.0) return vec3(0.0);\r
    if (wireframe && minComponent(basis.baryCoord) < 0.003) return vec3(0.0);\r
    return neutral_color/PI;\r
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
// Estimate direct radiance at the given surface vertex\r
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
\r
/////////////////////////////////////////////////////////////////////////\r
// pathtracer\r
/////////////////////////////////////////////////////////////////////////\r
\r
#define MAX_VOLUME_STEPS 8\r
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
\r
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
    float misWeightBSDF = 1.0; // For MIS book-keeping\r
\r
    // Initialize volumetric medium of camera ray\r
    // (NB, camera inside the volume is not handled properly in this implementation, for simplicity)\r
    Volume exterior_medium;\r
    exterior_medium.extinction = vec3(0.0);\r
    exterior_medium.albedo     = vec3(0.0);\r
    Volume current_medium = exterior_medium;\r
    bool in_dielectric = false;\r
\r
    // Stochastically choose wavelength for potential dispersion effect\r
    // (here just a crude uniform sample of the visible range)\r
    bool dispersive = false;\r
    wavelength_nm = 360.0 + (700.0 - 360.0)*rand(rndSeed);\r
\r
    for (int vertex=0; vertex <= BOUNCES; vertex++)\r
    {\r
        if (maxComponent(throughput) < THROUGHPUT_EPSILON)\r
            break;\r
\r
        // Generate next surface hit, given current vertex pW and current propagation direction dW\r
        bool surface_hit;\r
        vec3 pW_next;\r
        vec3 NsW_next;\r
        vec3 NgW_next;\r
        vec3 TsW_next;\r
        vec3 baryCoord_next;\r
        int material_next;\r
\r
        // If not inside a scattering volume, ray proceeds in a straight line to the next surface hit\r
        bool inside_volume            = in_dielectric && maxComponent(current_medium.extinction) > FLT_EPSILON;\r
        bool inside_scattering_volume = inside_volume && maxComponent(current_medium.albedo) > FLT_EPSILON;\r
        if (!inside_scattering_volume)\r
        {\r
            // Raycast along current propagation direction dW, from current vertex pW\r
            surface_hit = trace(pW, dW, HUGE_DIST,\r
                                pW_next, NsW_next, NgW_next, TsW_next, baryCoord_next, material_next);\r
\r
            // Apply Beer-Lambert law for absorption\r
            if (surface_hit && inside_volume)\r
            {\r
                float ray_length = length(pW_next - pW);\r
                throughput *= exp(-ray_length * current_medium.extinction);\r
            }\r
        }\r
\r
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
\r
        if (maxComponent(throughput) < THROUGHPUT_EPSILON)\r
            break;\r
\r
        if (!surface_hit)\r
        {\r
            // Camera ray missed all geometry; add contribution from distant lights\r
            L += throughput * misWeightBSDF * (sunRadiance(dW) + skyRadiance(dW));\r
\r
            // Ray escapes to infinity, terminate path\r
            break;\r
        }\r
\r
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
        Basis basis;\r
\r
        if (smooth_normals)\r
        {\r
            // If the surface is opaque, but the incident ray lies below the hemisphere of the normal,\r
            // which can occur due to shading normals, apply the "Flipping hack" to prevent artifacts\r
            // (see Schüßler, "Microfacet-based Normal Mapping for Robust Monte Carlo Path Tracing")\r
            if (openpbr_is_opaque() && dot(NsW, dW) > 0.0)\r
                NsW = 2.0*NgW*dot(NgW, NsW) - NsW;\r
            basis = makeBasis(NsW, baryCoord);\r
        }\r
        else\r
            basis = makeBasis(NgW, baryCoord);\r
\r
        vec3 winputW = -dW; // winputW, points *towards* the incident direction (parallel to photon)\r
        vec3 winputL = worldToLocal(winputW, basis);\r
\r
        // Prepare OpenPBR if that material is used at the current vertex\r
        if (material == MATERIAL_OPENPBR)\r
            openpbr_prepare(pW, basis, winputL, rndSeed);\r
\r
        // Sample BSDF for the continuation ray direction\r
        float bsdfPdf_continuation;\r
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
        //L += throughput * evaluateEdf(pW, basis, winputL);\r
\r
        // Prepare for tracing the direct lighting and continuation rays\r
        pW += NgW * sign(dot(dW, NgW)) * RAY_OFFSET; // perturb vertex into geometric half-space of scattered ray\r
\r
        // Check if a transmission has occurred, and update the current_medium accordingly.\r
        bool transmitted = (material == MATERIAL_OPENPBR) && (dot(winputW, NgW) * dot(dW, NgW) < 0.0);\r
        if (transmitted)\r
        {\r
            if (!in_dielectric && !dispersive)\r
            {\r
                // On first transmission into dielectric, apply associated color of stochastically chosen wavelength\r
                // (where the color channel normalization here is just an approximation)\r
                if (transmission_dispersion_scale > 0.0)\r
                    surface_throughput *= xyzToRgb(xyzFit_1931(wavelength_nm)) * vec3(2.7, 3.3, 3.45);\r
                dispersive = true;\r
            }\r
\r
            // Update in_dielectric state\r
            in_dielectric = !in_dielectric;\r
\r
            // Thus update current medium\r
            if (in_dielectric)\r
                current_medium = internal_medium;\r
            else\r
                current_medium = exterior_medium;\r
        }\r
\r
        // Add direct lighting term at the current surface vertex\r
        misWeightBSDF = 1.0;\r
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
                misWeightBSDF = powerHeuristic(bsdfPdf_continuation, lightPdf);\r
            }\r
        }\r
\r
        // Update path continuation throughput\r
        throughput *= surface_throughput;\r
\r
        // TODO: Russian roulette\r
\r
    }\r
\r
    gl_FragColor.rgb = L;\r
    gl_FragColor.a = accumulation_weight; // Implements Monte-Carlo accumulation via alpha blending\r
}\r
`;class hb{constructor(){this.result=null,this.loader=new e0}reset(){this.result=null}async load(e){this.result&&Promise.resolve(this.result);let t=await this.loader.loadAsync(e),n=Array.isArray(t.scene)?t.scene:[t.scene];for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(o=>{if(o.isMesh){const a=new Yx(o);a.attributes=["position","color","normal","tangent","uv","uv2"],a.applyWorldTransforms=!1;const l={strategy:Ih,maxLeafTris:1};let c=new dl(a.generate(),l);return new Vt(a.generate(),o.material),this.result={scene:t.scene,bvh:c,mesh:o},console.log("==> loaded mesh ",e),this.result}});return this.result}}function ln(r){return new L(r[0],r[1],r[2])}const X={smooth_normals:!0,bounces:6,wireframe:!0,neutral_color:[.5,.5,.5],skyPower:.5,skyColor:[.8,.8,1],sunPower:.35,sunAngularSize:40,sunLatitude:40,sunLongitude:180,sunColor:[1,1,.8],base_weight:1,base_color:[.8,.8,.8],base_roughness:0,base_metalness:0,specular_weight:1,specular_color:[1,1,1],specular_roughness:.1,specular_anisotropy:0,specular_rotation:0,specular_ior:1.5,transmission_weight:0,transmission_color:[1,1,1],transmission_depth:0,transmission_scatter:[0,0,0],transmission_scatter_anisotropy:0,transmission_dispersion_abbe_number:20,transmission_dispersion_scale:0,subsurface_weight:0,subsurface_color:[.8,.8,.8],subsurface_radius:.2,subsurface_radius_scale:[1,.5,.25],subsurface_anisotropy:0,coat_weight:0,coat_color:[1,1,1],coat_roughness:0,coat_anisotropy:0,coat_rotation:0,coat_ior:1.6,fuzz_weight:0,fuzz_color:[1,1,1],fuzz_roughness:.5,geometry_opacity:1,geometry_thin_walled:!1};let Lt,hn,Js,Ur,Xa,qr,kh,lo,fi=0,Hh,pi,Qi,ba,ya,qa;fb();Ya();function db(){let r=(90-X.sunLatitude)*Math.PI/180,e=X.sunLongitude*Math.PI/180,t=Math.cos(r),n=Math.sin(r),i=Math.cos(e),s=Math.sin(e),o=n*i,a=n*s,l=t;X.sunDir=[o,l,a]}function fb(){console.log("init"),qa=!1,pi=null,Qi=null,ba=null,ya=null,Lt=new Sh({antialias:!1}),Lt.setPixelRatio(window.devicePixelRatio),Lt.setClearColor(594970),Lt.setSize(window.innerWidth,window.innerHeight),Lt.outputEncoding=Jn,document.body.appendChild(Lt.domElement),Hh=document.getElementById("output"),Js=new cv,hn=new Ft(75,window.innerWidth/window.innerHeight,.1,50),hn.position.set(4,4,4),hn.far=100,hn.updateProjectionMatrix(),Xa=new O0,document.body.appendChild(Xa.dom);const r=new ei({defines:{BOUNCES:X.bounces},uniforms:{bvh_surface:{value:new Fu},normalAttribute_surface:{value:new Br},tangentAttribute_surface:{value:new Br},has_normals_surface:{value:1},has_tangents_surface:{value:0},bvh_props:{value:new Fu},normalAttribute_props:{value:new Br},tangentAttribute_props:{value:new Br},has_normals_props:{value:1},has_tangents_props:{value:0},cameraWorldMatrix:{value:new we},invProjectionMatrix:{value:new we},invModelMatrix:{value:new we},resolution:{value:new Se},samples:{value:0},accumulation_weight:{value:1},wireframe:{value:X.wireframe},neutral_color:{value:new L().fromArray(X.neutral_color)},smooth_normals:{value:X.smooth_normals},skyPower:{value:X.skyPower},skyColor:{value:ln(X.skyColor)},sunPower:{value:Math.pow(10,X.sunPower)},sunAngularSize:{value:X.sunAngularSize},sunColor:{value:ln(X.sunColor)},sunDir:{value:ln([0,0,0])},base_weight:{value:X.base_weight},base_color:{value:ln(X.base_color)},base_roughness:{value:X.base_roughness},base_metalness:{value:X.base_metalness},specular_weight:{value:X.specular_weight},specular_color:{value:ln(X.specular_color)},specular_roughness:{value:X.specular_roughness},specular_anisotropy:{value:X.specular_anisotropy},specular_rotation:{value:X.specular_rotation},specular_ior:{value:X.specular_ior},transmission_weight:{value:X.transmission_weight},transmission_color:{value:ln(X.transmission_color)},transmission_depth:{value:X.transmission_depth},transmission_scatter:{value:ln(X.transmission_scatter)},transmission_scatter_anisotropy:{value:X.transmission_scatter_anisotropy},transmission_dispersion_abbe_number:{value:X.transmission_dispersion_abbe_number},transmission_dispersion_scale:{value:X.transmission_dispersion_scale},subsurface_weight:{value:X.subsurface_weight},subsurface_color:{value:ln(X.subsurface_color)},subsurface_radius:{value:X.subsurface_radius},subsurface_radius_scale:{value:ln(X.subsurface_radius_scale)},subsurface_anisotropy:{value:X.subsurface_anisotropy},coat_weight:{value:X.coat_weight},coat_color:{value:ln(X.coat_color)},coat_roughness:{value:X.coat_roughness},coat_anisotropy:{value:X.coat_anisotropy},coat_rotation:{value:X.coat_rotation},coat_ior:{value:X.coat_ior},fuzz_weight:{value:X.fuzz_weight},fuzz_color:{value:ln(X.fuzz_color)},fuzz_roughness:{value:X.fuzz_roughness},geometry_opacity:{value:X.geometry_opacity},geometry_thin_walled:{value:X.geometry_thin_walled}},vertexShader:`
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
                         ${Hx}
                         ${Vx}
                        `+ib+rb+ob+ab+sb+lb+cb+ub}),e=new hb;e.load("standard-shader-ball/neutral_objects.gltf").then(()=>{Js.add(e.result.scene),Qi=e.result.mesh,ya=e.result.bvh,r.uniforms.bvh_props.value.updateFrom(ya),r.uniforms.has_normals_props.value=!1,r.uniforms.has_tangents_props.value=!1,Qi.geometry.attributes.normal&&(r.uniforms.normalAttribute_props.value.updateFrom(Qi.geometry.attributes.normal),r.uniforms.has_normals_props.value=!0),Qi.geometry.attributes.tangent&&(r.uniforms.tangentAttribute_props.value.updateFrom(Qi.geometry.attributes.tangent),r.uniforms.has_tangents_props.value=!0),console.log("  has_normals_scene:  ",r.uniforms.has_normals_props),console.log("  has_tangents_scene: ",r.uniforms.has_tangents_props),e.reset(),e.load("standard-shader-ball/shaderball.gltf").then(()=>{Js.add(e.result.scene),pi=e.result.mesh,ba=e.result.bvh,r.uniforms.bvh_surface.value.updateFrom(ba),r.uniforms.has_normals_surface.value=!1,r.uniforms.has_tangents_surface.value=!1,pi.geometry.attributes.normal&&(r.uniforms.normalAttribute_surface.value.updateFrom(pi.geometry.attributes.normal),r.uniforms.has_normals_surface.value=!0),pi.geometry.attributes.tangent&&(r.uniforms.tangentAttribute_surface.value.updateFrom(pi.geometry.attributes.tangent),r.uniforms.has_tangents_surface.value=!0),console.log("  has_normals_surface:  ",r.uniforms.has_normals_surface),console.log("  has_tangents_surface: ",r.uniforms.has_tangents_surface),pb(r),console.log("===> LOADED"),qa=!0})})}function pb(r){let e=new Kv(hn,Lt.domElement);e.addEventListener("change",()=>{Ce()});let t=new ut;t.setFromObject(pi);let n=t.min,i=t.max,s=Math.max(i.x-n.x,i.y-n.y,i.z-n.z),o=[n.x,n.y,n.z],a=[i.x-n.x,i.y-n.y,i.z-n.z],l=new L(o[0]+.5*a[0],o[1]+.5*a[1],o[2]+.5*a[2]),c=new L(o[0]+a[0],o[1]+a[1],o[2]+a[2]),u=l.clone();u.sub(c),u.normalize();let h=l.clone();h.addScaledVector(u,-2*s),hn.position.copy(h),e.target.copy(l),e.zoomSpeed=1.5,e.update(),qr=new du(r),r.transparent=!0,r.depthWrite=!1,lo=new Qn(1,1,{format:Mt,type:Ut}),kh=new du(new jn({map:lo.texture})),Ur=new fl({width:300});const d=Ur.addFolder("Material"),p=d.addFolder("Base");p.add(X,"base_weight",0,1).onChange(M=>{r.needsUpdate=!0,Ce()}),p.addColor(X,"base_color").onChange(M=>{r.needsUpdate=!0,Ce()}),p.add(X,"base_roughness",0,1).onChange(M=>{r.needsUpdate=!0,Ce()}),p.add(X,"base_metalness",0,1).onChange(M=>{r.needsUpdate=!0,Ce()});const _=d.addFolder("Specular");_.add(X,"specular_weight",0,1).onChange(M=>{r.needsUpdate=!0,Ce()}),_.addColor(X,"specular_color").onChange(M=>{r.needsUpdate=!0,Ce()}),_.add(X,"specular_roughness",0,1).onChange(M=>{r.needsUpdate=!0,Ce()}),_.add(X,"specular_ior",1,5).onChange(M=>{r.needsUpdate=!0,Ce()}),_.add(X,"specular_anisotropy",0,1).onChange(M=>{r.needsUpdate=!0,Ce()}),_.add(X,"specular_rotation",0,1).onChange(M=>{r.needsUpdate=!0,Ce()});const g=d.addFolder("Transmission");g.add(X,"transmission_weight",0,1).onChange(M=>{r.needsUpdate=!0,Ce()}),g.addColor(X,"transmission_color").onChange(M=>{r.needsUpdate=!0,Ce()}),g.add(X,"transmission_depth",0,1).onChange(M=>{r.needsUpdate=!0,Ce()}),g.addColor(X,"transmission_scatter").onChange(M=>{r.needsUpdate=!0,Ce()}),g.add(X,"transmission_scatter_anisotropy",-1,1).onChange(M=>{r.needsUpdate=!0,Ce()}),g.add(X,"transmission_dispersion_abbe_number",9,91).onChange(M=>{r.needsUpdate=!0,Ce()}),g.add(X,"transmission_dispersion_scale",0,1).onChange(M=>{r.needsUpdate=!0,Ce()}),g.close();const m=d.addFolder("Subsurface");m.add(X,"subsurface_weight",0,1).onChange(M=>{r.needsUpdate=!0,Ce()}),m.addColor(X,"subsurface_color").onChange(M=>{r.needsUpdate=!0,Ce()}),m.add(X,"subsurface_radius",0,1).onChange(M=>{r.needsUpdate=!0,Ce()}),m.addColor(X,"subsurface_radius_scale").onChange(M=>{r.needsUpdate=!0,Ce()}),m.add(X,"subsurface_anisotropy",-1,1).onChange(M=>{r.needsUpdate=!0,Ce()}),m.close();const f=d.addFolder("Coat");f.add(X,"coat_weight",0,1).onChange(M=>{r.needsUpdate=!0,Ce()}),f.addColor(X,"coat_color").onChange(M=>{r.needsUpdate=!0,Ce()}),f.add(X,"coat_roughness",0,1).onChange(M=>{r.needsUpdate=!0,Ce()}),f.add(X,"coat_ior",1,3).onChange(M=>{r.needsUpdate=!0,Ce()}),f.add(X,"coat_anisotropy",0,1).onChange(M=>{r.needsUpdate=!0,Ce()}),f.add(X,"coat_rotation",0,1).onChange(M=>{r.needsUpdate=!0,Ce()});const x=d.addFolder("Fuzz");x.add(X,"fuzz_weight",0,1).onChange(M=>{r.needsUpdate=!0,Ce()}),x.addColor(X,"fuzz_color").onChange(M=>{r.needsUpdate=!0,Ce()}),x.add(X,"fuzz_roughness",0,1).onChange(M=>{r.needsUpdate=!0,Ce()}),x.close();const v=d.addFolder("Geometry");v.add(X,"geometry_opacity",0,1).onChange(M=>{r.needsUpdate=!0,Ce()}),v.add(X,"geometry_thin_walled").onChange(M=>{r.needsUpdate=!0,Ce()}),v.close();const b=Ur.addFolder("Lighting");b.add(X,"skyPower",0,2).onChange(M=>{r.needsUpdate=!0,Ce()}),b.addColor(X,"skyColor").onChange(M=>{r.needsUpdate=!0,Ce()}),b.add(X,"sunPower",-4,4).onChange(M=>{r.needsUpdate=!0,Ce()}),b.add(X,"sunAngularSize",0,40).onChange(M=>{r.needsUpdate=!0,Ce()}),b.add(X,"sunLatitude",0,90).onChange(M=>{r.needsUpdate=!0,Ce()}),b.add(X,"sunLongitude",0,360).onChange(M=>{r.needsUpdate=!0,Ce()}),b.addColor(X,"sunColor").onChange(M=>{r.needsUpdate=!0,Ce()}),b.close();const y=Ur.addFolder("Renderer");y.add(X,"smooth_normals").onChange(M=>{qr.material.needsUpdate=!0,Ce()}),y.add(X,"bounces",1,16,1).onChange(M=>{r.defines.BOUNCES=parseInt(M),r.needsUpdate=!0,Ce()}),y.add(X,"wireframe").onChange(M=>{qr.material.needsUpdate=!0,Ce()}),y.addColor(X,"neutral_color").onChange(M=>{r.needsUpdate=!0,Ce()}),y.close(),Ur.open(),window.addEventListener("resize",Vu,!1),Vu()}function Ce(){fi=0}function Vu(){hn.aspect=window.innerWidth/window.innerHeight,hn.updateProjectionMatrix();const r=window.innerWidth,e=window.innerHeight;Lt.setSize(r,e),Lt.setPixelRatio(1),lo.setSize(r,e),Ce()}function Jt(r){return new L(r[0],r[1],r[2])}function Ya(){if(!qa){console.log("not LOADED"),requestAnimationFrame(Ya);return}if(console.log("render"),Xa.update(),requestAnimationFrame(Ya),Lt.domElement.style.imageRendering="auto",!(fi>=8192)){{hn.updateMatrixWorld();const e=qr.material.uniforms,t=window.innerWidth,n=window.innerHeight;e.cameraWorldMatrix.value.copy(hn.matrixWorld),e.invProjectionMatrix.value.copy(hn.projectionMatrixInverse),e.invModelMatrix.value.copy(Js.matrixWorld).invert();let i=new Se(t,n);e.resolution.value.copy(i),e.accumulation_weight.value=1/(fi+1),e.samples.value=fi,e.wireframe.value=X.wireframe,e.neutral_color.value.copy(Jt(X.neutral_color)),e.smooth_normals.value=X.smooth_normals,e.base_weight.value=X.base_weight,e.base_color.value.copy(Jt(X.base_color)),e.base_roughness.value=X.base_roughness,e.base_metalness.value=X.base_metalness,e.specular_weight.value=X.specular_weight,e.specular_color.value.copy(Jt(X.specular_color)),e.specular_roughness.value=X.specular_roughness,e.specular_anisotropy.value=X.specular_anisotropy,e.specular_rotation.value=X.specular_rotation,e.specular_ior.value=X.specular_ior,e.transmission_weight.value=X.transmission_weight,e.transmission_color.value.copy(Jt(X.transmission_color)),e.transmission_depth.value=X.transmission_depth,e.transmission_scatter.value.copy(Jt(X.transmission_scatter)),e.transmission_scatter_anisotropy.value=X.transmission_scatter_anisotropy,e.transmission_dispersion_abbe_number.value=X.transmission_dispersion_abbe_number,e.transmission_dispersion_scale.value=X.transmission_dispersion_scale,e.subsurface_weight.value=X.subsurface_weight,e.subsurface_color.value.copy(Jt(X.subsurface_color)),e.subsurface_radius.value=X.subsurface_radius,e.subsurface_radius_scale.value.copy(Jt(X.subsurface_radius_scale)),e.subsurface_anisotropy.value=X.subsurface_anisotropy,e.coat_weight.value=X.coat_weight,e.coat_color.value.copy(Jt(X.coat_color)),e.coat_roughness.value=X.coat_roughness,e.coat_anisotropy.value=X.coat_anisotropy,e.coat_rotation.value=X.coat_rotation,e.coat_ior.value=X.coat_ior,e.fuzz_weight.value=X.fuzz_weight,e.fuzz_color.value.copy(Jt(X.fuzz_color)),e.fuzz_roughness.value=X.fuzz_roughness,e.geometry_opacity.value=X.geometry_opacity,e.geometry_thin_walled.value=X.geometry_thin_walled,e.skyPower.value=X.skyPower,e.skyColor.value.copy(Jt(X.skyColor)),e.sunPower.value=Math.pow(10,X.sunPower),e.sunAngularSize.value=X.sunAngularSize,e.sunColor.value.copy(Jt(X.sunColor)),db(),e.sunDir.value.copy(Jt(X.sunDir)),Lt.autoClear=fi===0,Lt.setRenderTarget(lo),qr.render(Lt),Lt.setRenderTarget(null),kh.render(Lt),Lt.autoClear=!0,fi++}Hh.innerText=`samples: ${fi}`}}
