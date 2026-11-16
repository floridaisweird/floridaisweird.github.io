(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();const vl="181",ks={ROTATE:0,DOLLY:1,PAN:2},Ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Id=0,Jl=1,Nd=2,Eh=1,Ah=2,bi=3,zi=0,pn=1,Un=2,li=0,Is=1,Us=2,Ql=3,tc=4,Ud=5,Ki=100,Fd=101,Od=102,zd=103,Bd=104,Vd=200,Hd=201,Gd=202,Wd=203,Mr=204,Sr=205,$d=206,Xd=207,qd=208,Yd=209,jd=210,Zd=211,Kd=212,Jd=213,Qd=214,Tr=0,Er=1,Ar=2,Fs=3,Cr=4,Rr=5,Pr=6,Lr=7,Ch=0,tu=1,eu=2,Fi=0,Rh=1,Ph=2,Lh=3,_l=4,Dh=5,kh=6,Ih=7,Nh=300,Os=301,zs=302,Dr=303,kr=304,To=306,bo=1e3,wi=1001,Ir=1002,Pn=1003,nu=1004,Ca=1005,On=1006,ko=1007,ts=1008,hi=1009,Uh=1010,Fh=1011,pa=1012,yl=1013,is=1014,oi=1015,ci=1016,wl=1017,Ml=1018,ma=1020,Oh=35902,zh=35899,Bh=1021,Vh=1022,Yn=1023,xa=1026,ga=1027,Sl=1028,Tl=1029,El=1030,Al=1031,Cl=1033,ro=33776,lo=33777,co=33778,ho=33779,Nr=35840,Ur=35841,Fr=35842,Or=35843,zr=36196,Br=37492,Vr=37496,Hr=37808,Gr=37809,Wr=37810,$r=37811,Xr=37812,qr=37813,Yr=37814,jr=37815,Zr=37816,Kr=37817,Jr=37818,Qr=37819,tl=37820,el=37821,nl=36492,il=36494,sl=36495,al=36283,ol=36284,rl=36285,ll=36286,iu=3200,su=3201,Hh=0,au=1,Ni="",nn="srgb",Bs="srgb-linear",vo="linear",fe="srgb",hs=7680,ec=519,ou=512,ru=513,lu=514,Gh=515,cu=516,hu=517,du=518,uu=519,nc=35044,ic="300 es",ri=2e3,_o=2001;function Wh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function yo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function fu(){const s=yo("canvas");return s.style.display="block",s}const sc={};function ac(...s){const t="THREE."+s.shift();console.log(t,...s)}function $t(...s){const t="THREE."+s.shift();console.warn(t,...s)}function ze(...s){const t="THREE."+s.shift();console.error(t,...s)}function ba(...s){const t=s.join(" ");t in sc||(sc[t]=!0,$t(...s))}function pu(s,t,e){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}class as{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const a=i.indexOf(e);a!==-1&&i.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let a=0,o=i.length;a<o;a++)i[a].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let oc=1234567;const ra=Math.PI/180,va=180/Math.PI;function os(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[s&255]+sn[s>>8&255]+sn[s>>16&255]+sn[s>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Jt(s,t,e){return Math.max(t,Math.min(e,s))}function Rl(s,t){return(s%t+t)%t}function mu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function xu(s,t,e){return s!==t?(e-s)/(t-s):0}function la(s,t,e){return(1-e)*s+e*t}function gu(s,t,e,n){return la(s,t,1-Math.exp(-e*n))}function bu(s,t=1){return t-Math.abs(Rl(s,t*2)-t)}function vu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function _u(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function yu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function wu(s,t){return s+Math.random()*(t-s)}function Mu(s){return s*(.5-Math.random())}function Su(s){s!==void 0&&(oc=s);let t=oc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tu(s){return s*ra}function Eu(s){return s*va}function Au(s){return(s&s-1)===0&&s!==0}function Cu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ru(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Pu(s,t,e,n,i){const a=Math.cos,o=Math.sin,r=a(e/2),l=o(e/2),c=a((t+n)/2),h=o((t+n)/2),d=a((t-n)/2),u=o((t-n)/2),f=a((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(r*h,l*d,l*u,r*c);break;case"YZY":s.set(l*u,r*h,l*d,r*c);break;case"ZXZ":s.set(l*d,l*u,r*h,r*c);break;case"XZX":s.set(r*h,l*m,l*f,r*c);break;case"YXY":s.set(l*f,r*h,l*m,r*c);break;case"ZYZ":s.set(l*m,l*f,r*h,r*c);break;default:$t("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Rs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function un(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const uo={DEG2RAD:ra,RAD2DEG:va,generateUUID:os,clamp:Jt,euclideanModulo:Rl,mapLinear:mu,inverseLerp:xu,lerp:la,damp:gu,pingpong:bu,smoothstep:vu,smootherstep:_u,randInt:yu,randFloat:wu,randFloatSpread:Mu,seededRandom:Su,degToRad:Tu,radToDeg:Eu,isPowerOfTwo:Au,ceilPowerOfTwo:Cu,floorPowerOfTwo:Ru,setQuaternionFromProperEuler:Pu,normalize:un,denormalize:Rs};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*n-o*i+t.x,this.y=a*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,a,o,r){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=a[o+0],f=a[o+1],m=a[o+2],g=a[o+3];if(r<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(r>=1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=g;return}if(d!==g||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*g;p<0&&(u=-u,f=-f,m=-m,g=-g,p=-p);let x=1-r;if(p<.9995){const v=Math.acos(p),b=Math.sin(v);x=Math.sin(x*v)/b,r=Math.sin(r*v)/b,l=l*x+u*r,c=c*x+f*r,h=h*x+m*r,d=d*x+g*r}else{l=l*x+u*r,c=c*x+f*r,h=h*x+m*r,d=d*x+g*r;const v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,a,o){const r=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=a[o],u=a[o+1],f=a[o+2],m=a[o+3];return t[e]=r*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-r*f,t[e+2]=c*m+h*f+r*u-l*d,t[e+3]=h*m-r*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,a=t._z,o=t._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(i/2),d=r(a/2),u=l(n/2),f=l(i/2),m=l(a/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],a=e[8],o=e[1],r=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+r+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(a-c)*f,this._z=(o-i)*f}else if(n>r&&n>d){const f=2*Math.sqrt(1+n-r-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(a+c)/f}else if(r>d){const f=2*Math.sqrt(1+r-n-d);this._w=(a-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-r);this._w=(o-i)/f,this._x=(a+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,a=t._z,o=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*r+i*c-a*l,this._y=i*h+o*l+a*r-n*c,this._z=a*h+o*c+n*l-i*r,this._w=o*h-n*r-i*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,a=t._z,o=t._w,r=this.dot(t);r<0&&(n=-n,i=-i,a=-a,o=-o,r=-r);let l=1-e;if(r<.9995){const c=Math.acos(r),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+a*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+a*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*i,this.y=a[1]*e+a[4]*n+a[7]*i,this.z=a[2]*e+a[5]*n+a[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=t.elements,o=1/(a[3]*e+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*i+a[12])*o,this.y=(a[1]*e+a[5]*n+a[9]*i+a[13])*o,this.z=(a[2]*e+a[6]*n+a[10]*i+a[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,a=t.x,o=t.y,r=t.z,l=t.w,c=2*(o*i-r*n),h=2*(r*e-a*i),d=2*(a*n-o*e);return this.x=e+l*c+o*d-r*h,this.y=n+l*h+r*c-a*d,this.z=i+l*d+a*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i,this.y=a[1]*e+a[5]*n+a[9]*i,this.z=a[2]*e+a[6]*n+a[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,a=t.z,o=e.x,r=e.y,l=e.z;return this.x=i*l-a*r,this.y=a*o-n*l,this.z=n*r-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Io.copy(this).projectOnVector(t),this.sub(Io)}reflect(t){return this.sub(Io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Io=new D,rc=new Dn;class Zt{constructor(t,e,n,i,a,o,r,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,o,r,l,c)}set(t,e,n,i,a,o,r,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=r,h[3]=e,h[4]=a,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,o=n[0],r=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],g=i[0],p=i[3],x=i[6],v=i[1],b=i[4],w=i[7],T=i[2],S=i[5],C=i[8];return a[0]=o*g+r*v+l*T,a[3]=o*p+r*b+l*S,a[6]=o*x+r*w+l*C,a[1]=c*g+h*v+d*T,a[4]=c*p+h*b+d*S,a[7]=c*x+h*w+d*C,a[2]=u*g+f*v+m*T,a[5]=u*p+f*b+m*S,a[8]=u*x+f*w+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],o=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*r*c-n*a*h+n*r*l+i*a*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],o=t[4],r=t[5],l=t[6],c=t[7],h=t[8],d=h*o-r*c,u=r*l-h*a,f=c*a-o*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=d*g,t[1]=(i*c-h*n)*g,t[2]=(r*n-i*o)*g,t[3]=u*g,t[4]=(h*e-i*l)*g,t[5]=(i*a-r*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*a)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,a,o,r){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*o+c*r)+o+t,-i*c,i*l,-i*(-c*o+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(No.makeScale(t,e)),this}rotate(t){return this.premultiply(No.makeRotation(-t)),this}translate(t,e){return this.premultiply(No.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const No=new Zt,lc=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cc=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lu(){const s={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(i,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===fe&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(i.r=Ns(i.r),i.g=Ns(i.g),i.b=Ns(i.b))),i},workingToColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},colorSpaceToWorking:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ni?vo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,o){return i.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,a){return ba("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,a)},toWorkingColorSpace:function(i,a){return ba("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Bs]:{primaries:t,whitePoint:n,transfer:vo,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),s}const se=Lu();function Mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ds;class Du{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ds===void 0&&(ds=yo("canvas")),ds.width=t.width,ds.height=t.height;const i=ds.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=yo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),a=i.data;for(let o=0;o<a.length;o++)a[o]=Mi(a[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ku=0;class Pl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?a.push(Uo(i[o].image)):a.push(Uo(i[o]))}else a=Uo(i);n.url=a}return e||(t.images[this.uuid]=n),n}}function Uo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Du.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}let Iu=0;const Fo=new D;class rn extends as{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=wi,i=wi,a=On,o=ts,r=Yn,l=hi,c=rn.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=os(),this.name="",this.source=new Pl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fo).x}get height(){return this.source.getSize(Fo).y}get depth(){return this.source.getSize(Fo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bo:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case Ir:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bo:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case Ir:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Nh;rn.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*a,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*a,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*a,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,a;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],g=l[2],p=l[6],x=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,w=(f+1)/2,T=(x+1)/2,S=(h+u)/4,C=(d+g)/4,M=(m+p)/4;return b>w&&b>T?b<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(b),i=S/n,a=C/n):w>T?w<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(w),n=S/i,a=M/i):T<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(T),n=C/a,i=M/a),this.set(n,i,a,e),this}let v=Math.sqrt((p-m)*(p-m)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-g)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+x-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nu extends as{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:n.depth},a=new rn(i);this.textures=[];const o=n.count;for(let r=0;r<o;r++)this.textures[r]=a.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Pl(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Nu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class $h extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uu extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(a,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ra.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ra.copy(n.boundingBox)),Ra.applyMatrix4(t.matrixWorld),this.union(Ra)}const i=t.children;for(let a=0,o=i.length;a<o;a++)this.expandByObject(i[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),Pa.subVectors(this.max,js),us.subVectors(t.a,js),fs.subVectors(t.b,js),ps.subVectors(t.c,js),Si.subVectors(fs,us),Ti.subVectors(ps,fs),Hi.subVectors(us,ps);let e=[0,-Si.z,Si.y,0,-Ti.z,Ti.y,0,-Hi.z,Hi.y,Si.z,0,-Si.x,Ti.z,0,-Ti.x,Hi.z,0,-Hi.x,-Si.y,Si.x,0,-Ti.y,Ti.x,0,-Hi.y,Hi.x,0];return!Oo(e,us,fs,ps,Pa)||(e=[1,0,0,0,1,0,0,0,1],!Oo(e,us,fs,ps,Pa))?!1:(La.crossVectors(Si,Ti),e=[La.x,La.y,La.z],Oo(e,us,fs,ps,Pa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ui=[new D,new D,new D,new D,new D,new D,new D,new D],Vn=new D,Ra=new rs,us=new D,fs=new D,ps=new D,Si=new D,Ti=new D,Hi=new D,js=new D,Pa=new D,La=new D,Gi=new D;function Oo(s,t,e,n,i){for(let a=0,o=s.length-3;a<=o;a+=3){Gi.fromArray(s,a);const r=i.x*Math.abs(Gi.x)+i.y*Math.abs(Gi.y)+i.z*Math.abs(Gi.z),l=t.dot(Gi),c=e.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const Fu=new rs,Zs=new D,zo=new D;class Ws{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Fu.setFromPoints(t).getCenter(n);let i=0;for(let a=0,o=t.length;a<o;a++)i=Math.max(i,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);const e=Zs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Zs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(zo)),this.expandByPoint(Zs.copy(t.center).sub(zo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const fi=new D,Bo=new D,Da=new D,Ei=new D,Vo=new D,ka=new D,Ho=new D;class Ll{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Bo.copy(t).add(e).multiplyScalar(.5),Da.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(Bo);const a=t.distanceTo(e)*.5,o=-this.direction.dot(Da),r=Ei.dot(this.direction),l=-Ei.dot(Da),c=Ei.lengthSq(),h=Math.abs(1-o*o);let d,u,f,m;if(h>0)if(d=o*l-r,u=o*r-l,m=a*h,d>=0)if(u>=-m)if(u<=m){const g=1/h;d*=g,u*=g,f=d*(d+o*u+2*r)+u*(o*d+u+2*l)+c}else u=a,d=Math.max(0,-(o*u+r)),f=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(o*u+r)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*a+r)),u=d>0?-a:Math.min(Math.max(-a,-l),a),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-a,-l),a),f=u*(u+2*l)+c):(d=Math.max(0,-(o*a+r)),u=d>0?a:Math.min(Math.max(-a,-l),a),f=-d*d+u*(u+2*l)+c);else u=o>0?-a:a,d=Math.max(0,-(o*u+r)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Bo).addScaledVector(Da,u),f}intersectSphere(t,e){fi.subVectors(t.center,this.origin);const n=fi.dot(this.direction),i=fi.dot(fi)-n*n,a=t.radius*t.radius;if(i>a)return null;const o=Math.sqrt(a-i),r=n-o,l=n+o;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,a,o,r,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||a>i||((a>n||isNaN(n))&&(n=a),(o<i||isNaN(i))&&(i=o),d>=0?(r=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(r=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||r>i)||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,n,i,a){Vo.subVectors(e,t),ka.subVectors(n,t),Ho.crossVectors(Vo,ka);let o=this.direction.dot(Ho),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;Ei.subVectors(this.origin,t);const l=r*this.direction.dot(ka.crossVectors(Ei,ka));if(l<0)return null;const c=r*this.direction.dot(Vo.cross(Ei));if(c<0||l+c>o)return null;const h=-r*Ei.dot(Ho);return h<0?null:this.at(h/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,a,o,r,l,c,h,d,u,f,m,g,p){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,o,r,l,c,h,d,u,f,m,g,p)}set(t,e,n,i,a,o,r,l,c,h,d,u,f,m,g,p){const x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=a,x[5]=o,x[9]=r,x[13]=l,x[2]=c,x[6]=h,x[10]=d,x[14]=u,x[3]=f,x[7]=m,x[11]=g,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ms.setFromMatrixColumn(t,0).length(),a=1/ms.setFromMatrixColumn(t,1).length(),o=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,a=t.z,o=Math.cos(n),r=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){const u=o*h,f=o*d,m=r*h,g=r*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-g*c,e[9]=-r*l,e[2]=g-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,m=c*h,g=c*d;e[0]=u+g*r,e[4]=m*r-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-r,e[2]=f*r-m,e[6]=g+u*r,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,m=c*h,g=c*d;e[0]=u-g*r,e[4]=-o*d,e[8]=m+f*r,e[1]=f+m*r,e[5]=o*h,e[9]=g-u*r,e[2]=-o*c,e[6]=r,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,m=r*h,g=r*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+g,e[1]=l*d,e[5]=g*c+u,e[9]=f*c-m,e[2]=-c,e[6]=r*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,m=r*l,g=r*c;e[0]=l*h,e[4]=g-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-r*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-g*d}else if(t.order==="XZY"){const u=o*l,f=o*c,m=r*l,g=r*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+g,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=r*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ou,t,zu)}lookAt(t,e,n){const i=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ai.crossVectors(n,Sn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ai.crossVectors(n,Sn)),Ai.normalize(),Ia.crossVectors(Sn,Ai),i[0]=Ai.x,i[4]=Ia.x,i[8]=Sn.x,i[1]=Ai.y,i[5]=Ia.y,i[9]=Sn.y,i[2]=Ai.z,i[6]=Ia.z,i[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,o=n[0],r=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],g=n[6],p=n[10],x=n[14],v=n[3],b=n[7],w=n[11],T=n[15],S=i[0],C=i[4],M=i[8],_=i[12],y=i[1],P=i[5],k=i[9],U=i[13],W=i[2],H=i[6],Z=i[10],z=i[14],N=i[3],j=i[7],Q=i[11],mt=i[15];return a[0]=o*S+r*y+l*W+c*N,a[4]=o*C+r*P+l*H+c*j,a[8]=o*M+r*k+l*Z+c*Q,a[12]=o*_+r*U+l*z+c*mt,a[1]=h*S+d*y+u*W+f*N,a[5]=h*C+d*P+u*H+f*j,a[9]=h*M+d*k+u*Z+f*Q,a[13]=h*_+d*U+u*z+f*mt,a[2]=m*S+g*y+p*W+x*N,a[6]=m*C+g*P+p*H+x*j,a[10]=m*M+g*k+p*Z+x*Q,a[14]=m*_+g*U+p*z+x*mt,a[3]=v*S+b*y+w*W+T*N,a[7]=v*C+b*P+w*H+T*j,a[11]=v*M+b*k+w*Z+T*Q,a[15]=v*_+b*U+w*z+T*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],a=t[12],o=t[1],r=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],g=t[7],p=t[11],x=t[15];return m*(+a*l*d-i*c*d-a*r*u+n*c*u+i*r*f-n*l*f)+g*(+e*l*f-e*c*u+a*o*u-i*o*f+i*c*h-a*l*h)+p*(+e*c*d-e*r*f-a*o*d+n*o*f+a*r*h-n*c*h)+x*(-i*r*h-e*l*d+e*r*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],o=t[4],r=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],g=t[13],p=t[14],x=t[15],v=d*p*c-g*u*c+g*l*f-r*p*f-d*l*x+r*u*x,b=m*u*c-h*p*c-m*l*f+o*p*f+h*l*x-o*u*x,w=h*g*c-m*d*c+m*r*f-o*g*f-h*r*x+o*d*x,T=m*d*l-h*g*l-m*r*u+o*g*u+h*r*p-o*d*p,S=e*v+n*b+i*w+a*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/S;return t[0]=v*C,t[1]=(g*u*a-d*p*a-g*i*f+n*p*f+d*i*x-n*u*x)*C,t[2]=(r*p*a-g*l*a+g*i*c-n*p*c-r*i*x+n*l*x)*C,t[3]=(d*l*a-r*u*a-d*i*c+n*u*c+r*i*f-n*l*f)*C,t[4]=b*C,t[5]=(h*p*a-m*u*a+m*i*f-e*p*f-h*i*x+e*u*x)*C,t[6]=(m*l*a-o*p*a-m*i*c+e*p*c+o*i*x-e*l*x)*C,t[7]=(o*u*a-h*l*a+h*i*c-e*u*c-o*i*f+e*l*f)*C,t[8]=w*C,t[9]=(m*d*a-h*g*a-m*n*f+e*g*f+h*n*x-e*d*x)*C,t[10]=(o*g*a-m*r*a+m*n*c-e*g*c-o*n*x+e*r*x)*C,t[11]=(h*r*a-o*d*a-h*n*c+e*d*c+o*n*f-e*r*f)*C,t[12]=T*C,t[13]=(h*g*i-m*d*i+m*n*u-e*g*u-h*n*p+e*d*p)*C,t[14]=(m*r*i-o*g*i-m*n*l+e*g*l+o*n*p-e*r*p)*C,t[15]=(o*d*i-h*r*i+h*n*l-e*d*l-o*n*u+e*r*u)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,a=t.z;return e[0]*=n,e[4]*=i,e[8]*=a,e[1]*=n,e[5]*=i,e[9]*=a,e[2]*=n,e[6]*=i,e[10]*=a,e[3]*=n,e[7]*=i,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),a=1-n,o=t.x,r=t.y,l=t.z,c=a*o,h=a*r;return this.set(c*o+n,c*r-i*l,c*l+i*r,0,c*r+i*l,h*r+n,h*l-i*o,0,c*l-i*r,h*l+i*o,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,a,o){return this.set(1,n,a,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,a=e._x,o=e._y,r=e._z,l=e._w,c=a+a,h=o+o,d=r+r,u=a*c,f=a*h,m=a*d,g=o*h,p=o*d,x=r*d,v=l*c,b=l*h,w=l*d,T=n.x,S=n.y,C=n.z;return i[0]=(1-(g+x))*T,i[1]=(f+w)*T,i[2]=(m-b)*T,i[3]=0,i[4]=(f-w)*S,i[5]=(1-(u+x))*S,i[6]=(p+v)*S,i[7]=0,i[8]=(m+b)*C,i[9]=(p-v)*C,i[10]=(1-(u+g))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let a=ms.set(i[0],i[1],i[2]).length();const o=ms.set(i[4],i[5],i[6]).length(),r=ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),t.x=i[12],t.y=i[13],t.z=i[14],Hn.copy(this);const c=1/a,h=1/o,d=1/r;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,e.setFromRotationMatrix(Hn),n.x=a,n.y=o,n.z=r,this}makePerspective(t,e,n,i,a,o,r=ri,l=!1){const c=this.elements,h=2*a/(e-t),d=2*a/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let m,g;if(l)m=a/(o-a),g=o*a/(o-a);else if(r===ri)m=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(r===_o)m=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,a,o,r=ri,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i);let m,g;if(l)m=1/(o-a),g=o/(o-a);else if(r===ri)m=-2/(o-a),g=-(o+a)/(o-a);else if(r===_o)m=-1/(o-a),g=-a/(o-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ms=new D,Hn=new ie,Ou=new D(0,0,0),zu=new D(1,1,1),Ai=new D,Ia=new D,Sn=new D,hc=new ie,dc=new Dn;class _n{constructor(t=0,e=0,n=0,i=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,a=i[0],o=i[4],r=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dc.setFromEuler(this),this.setFromQuaternion(dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Xh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bu=0;const uc=new D,xs=new Dn,pi=new ie,Na=new D,Ks=new D,Vu=new D,Hu=new Dn,fc=new D(1,0,0),pc=new D(0,1,0),mc=new D(0,0,1),xc={type:"added"},Gu={type:"removed"},gs={type:"childadded",child:null},Go={type:"childremoved",child:null};class $e extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new D,e=new _n,n=new Dn,i=new D(1,1,1);function a(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Zt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(fc,t)}rotateY(t){return this.rotateOnAxis(pc,t)}rotateZ(t){return this.rotateOnAxis(mc,t)}translateOnAxis(t,e){return uc.copy(t).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fc,t)}translateY(t){return this.translateOnAxis(pc,t)}translateZ(t){return this.translateOnAxis(mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Na.copy(t):Na.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Ks,Na,this.up):pi.lookAt(Na,Ks,this.up),this.quaternion.setFromRotationMatrix(pi),i&&(pi.extractRotation(i.matrixWorld),xs.setFromRotationMatrix(pi),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ze("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xc),gs.child=t,this.dispatchEvent(gs),gs.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gu),Go.child=t,this.dispatchEvent(Go),Go.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xc),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,Vu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Hu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(r=>({...r,boundingBox:r.boundingBox?r.boundingBox.toJSON():void 0,boundingSphere:r.boundingSphere?r.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(r=>({...r})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function a(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(a(t.materials,this.material[l]));i.material=r}else i.material=a(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];i.animations.push(a(t.animations,l))}}if(e){const r=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}$e.DEFAULT_UP=new D(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new D,mi=new D,Wo=new D,xi=new D,bs=new D,vs=new D,gc=new D,$o=new D,Xo=new D,qo=new D,Yo=new ve,jo=new ve,Zo=new ve;class qn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Gn.subVectors(t,e),i.cross(Gn);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(t,e,n,i,a){Gn.subVectors(i,e),mi.subVectors(n,e),Wo.subVectors(t,e);const o=Gn.dot(Gn),r=Gn.dot(mi),l=Gn.dot(Wo),c=mi.dot(mi),h=mi.dot(Wo),d=o*c-r*r;if(d===0)return a.set(0,0,0),null;const u=1/d,f=(c*l-r*h)*u,m=(o*h-r*l)*u;return a.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,i,a,o,r,l){return this.getBarycoord(t,e,n,i,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(r,xi.z),l)}static getInterpolatedAttribute(t,e,n,i,a,o){return Yo.setScalar(0),jo.setScalar(0),Zo.setScalar(0),Yo.fromBufferAttribute(t,e),jo.fromBufferAttribute(t,n),Zo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Yo,a.x),o.addScaledVector(jo,a.y),o.addScaledVector(Zo,a.z),o}static isFrontFacing(t,e,n,i){return Gn.subVectors(n,e),mi.subVectors(t,e),Gn.cross(mi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Gn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,a){return qn.getInterpolation(t,this.a,this.b,this.c,e,n,i,a)}containsPoint(t){return qn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,a=this.c;let o,r;bs.subVectors(i,n),vs.subVectors(a,n),$o.subVectors(t,n);const l=bs.dot($o),c=vs.dot($o);if(l<=0&&c<=0)return e.copy(n);Xo.subVectors(t,i);const h=bs.dot(Xo),d=vs.dot(Xo);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(bs,o);qo.subVectors(t,a);const f=bs.dot(qo),m=vs.dot(qo);if(m>=0&&f<=m)return e.copy(a);const g=f*c-l*m;if(g<=0&&c>=0&&m<=0)return r=c/(c-m),e.copy(n).addScaledVector(vs,r);const p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return gc.subVectors(a,i),r=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(gc,r);const x=1/(p+g+u);return o=g*x,r=u*x,e.copy(n).addScaledVector(bs,o).addScaledVector(vs,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function Ko(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=Rl(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,o=2*n-a;this.r=Ko(o,a,t+1/3),this.g=Ko(o,a,t),this.b=Ko(o,a,t-1/3)}return se.colorSpaceToWorking(this,i),this}setStyle(t,e=nn){function n(a){a!==void 0&&parseFloat(a)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=i[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=qh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return se.workingToColorSpace(an.copy(this),t),Math.round(Jt(an.r*255,0,255))*65536+Math.round(Jt(an.g*255,0,255))*256+Math.round(Jt(an.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(an.copy(this),e);const n=an.r,i=an.g,a=an.b,o=Math.max(n,i,a),r=Math.min(n,i,a);let l,c;const h=(r+o)/2;if(r===o)l=0,c=0;else{const d=o-r;switch(c=h<=.5?d/(o+r):d/(2-o-r),o){case n:l=(i-a)/d+(i<a?6:0);break;case i:l=(a-n)/d+2;break;case a:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=nn){se.workingToColorSpace(an.copy(this),t);const e=an.r,n=an.g,i=an.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(Ua);const n=la(Ci.h,Ua.h,e),i=la(Ci.s,Ua.s,e),a=la(Ci.l,Ua.l,e);return this.setHSL(n,i,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*i,this.g=a[1]*e+a[4]*n+a[7]*i,this.b=a[2]*e+a[5]*n+a[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Lt;Lt.NAMES=qh;let Wu=0;class $s extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=os(),this.name="",this.type="Material",this.blending=Is,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mr,this.blendDst=Sr,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mr&&(n.blendSrc=this.blendSrc),this.blendDst!==Sr&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const o=[];for(const r in a){const l=a[r];delete l.metadata,o.push(l)}return o}if(e){const a=i(t.textures),o=i(t.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ln extends $s{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const He=new D,Fa=new st;let $u=0;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$u++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nc,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fa.fromBufferAttribute(this,e),Fa.applyMatrix3(t),this.setXY(e,Fa.x,Fa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),i=un(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),i=un(i,this.array),a=un(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nc&&(t.usage=this.usage),t}}class Yh extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jh extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xu=0;const In=new ie,Jo=new $e,_s=new D,Tn=new rs,Js=new rs,Ze=new D;class Re extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wh(t)?jh:Yh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Zt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,n){return In.makeTranslation(t,e,n),this.applyMatrix4(In),this}scale(t,e,n){return In.makeScale(t,e,n),this.applyMatrix4(In),this}lookAt(t){return Jo.lookAt(t),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,a=t.length;i<a;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const a=t[i];e.setXYZ(i,a.x,a.y,a.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const a=e[n];Tn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const r=e[a];Js.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(Tn.min,Js.min),Tn.expandByPoint(Ze),Ze.addVectors(Tn.max,Js.max),Tn.expandByPoint(Ze)):(Tn.expandByPoint(Js.min),Tn.expandByPoint(Js.max))}Tn.getCenter(n);let i=0;for(let a=0,o=t.count;a<o;a++)Ze.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(Ze));if(e)for(let a=0,o=e.length;a<o;a++){const r=e[a],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)Ze.fromBufferAttribute(r,c),l&&(_s.fromBufferAttribute(t,c),Ze.add(_s)),i=Math.max(i,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),r=[],l=[];for(let M=0;M<n.count;M++)r[M]=new D,l[M]=new D;const c=new D,h=new D,d=new D,u=new st,f=new st,m=new st,g=new D,p=new D;function x(M,_,y){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,_),d.fromBufferAttribute(n,y),u.fromBufferAttribute(a,M),f.fromBufferAttribute(a,_),m.fromBufferAttribute(a,y),h.sub(c),d.sub(c),f.sub(u),m.sub(u);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(P),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),r[M].add(g),r[_].add(g),r[y].add(g),l[M].add(p),l[_].add(p),l[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let M=0,_=v.length;M<_;++M){const y=v[M],P=y.start,k=y.count;for(let U=P,W=P+k;U<W;U+=3)x(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const b=new D,w=new D,T=new D,S=new D;function C(M){T.fromBufferAttribute(i,M),S.copy(T);const _=r[M];b.copy(_),b.sub(T.multiplyScalar(T.dot(_))).normalize(),w.crossVectors(S,_);const P=w.dot(l[M])<0?-1:1;o.setXYZW(M,b.x,b.y,b.z,P)}for(let M=0,_=v.length;M<_;++M){const y=v[M],P=y.start,k=y.count;for(let U=P,W=P+k;U<W;U+=3)C(t.getX(U+0)),C(t.getX(U+1)),C(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new D,a=new D,o=new D,r=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),g=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,m),a.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),h.subVectors(o,a),d.subVectors(i,a),h.cross(d),r.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),r.add(h),l.add(h),c.add(h),n.setXYZ(m,r.x,r.y,r.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),a.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,a),d.subVectors(i,a),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(r,l){const c=r.array,h=r.itemSize,d=r.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let g=0,p=l.length;g<p;g++){r.isInterleavedBufferAttribute?f=l[g]*r.data.stride+r.offset:f=l[g]*h;for(let x=0;x<h;x++)u[m++]=c[f++]}return new tn(u,h,d)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,i=this.attributes;for(const r in i){const l=i[r],c=t(l,n);e.setAttribute(r,c)}const a=this.morphAttributes;for(const r in a){const l=[],c=a[r];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const c=o[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,a=!0)}a&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere=r.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],d=a[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bc=new ie,Wi=new Ll,Oa=new Ws,vc=new D,za=new D,Ba=new D,Va=new D,Qo=new D,Ha=new D,_c=new D,Ga=new D;class Mt extends $e{constructor(t=new Re,e=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=i.length;a<o;a++){const r=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const r=this.morphTargetInfluences;if(a&&r){Ha.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=r[l],d=a[l];h!==0&&(Qo.fromBufferAttribute(d,t),o?Ha.addScaledVector(Qo,h):Ha.addScaledVector(Qo.sub(e),h))}e.add(Ha)}return e}raycast(t,e){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(a),Wi.copy(t.ray).recast(t.near),!(Oa.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Oa,vc)===null||Wi.origin.distanceToSquared(vc)>(t.far-t.near)**2))&&(bc.copy(a).invert(),Wi.copy(t.ray).applyMatrix4(bc),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let i;const a=this.geometry,o=this.material,r=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,f=a.drawRange;if(r!==null)if(Array.isArray(o))for(let m=0,g=u.length;m<g;m++){const p=u[m],x=o[p.materialIndex],v=Math.max(p.start,f.start),b=Math.min(r.count,Math.min(p.start+p.count,f.start+f.count));for(let w=v,T=b;w<T;w+=3){const S=r.getX(w),C=r.getX(w+1),M=r.getX(w+2);i=Wa(this,x,t,n,c,h,d,S,C,M),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(r.count,f.start+f.count);for(let p=m,x=g;p<x;p+=3){const v=r.getX(p),b=r.getX(p+1),w=r.getX(p+2);i=Wa(this,o,t,n,c,h,d,v,b,w),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=u.length;m<g;m++){const p=u[m],x=o[p.materialIndex],v=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let w=v,T=b;w<T;w+=3){const S=w,C=w+1,M=w+2;i=Wa(this,x,t,n,c,h,d,S,C,M),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=m,x=g;p<x;p+=3){const v=p,b=p+1,w=p+2;i=Wa(this,o,t,n,c,h,d,v,b,w),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function qu(s,t,e,n,i,a,o,r){let l;if(t.side===pn?l=n.intersectTriangle(o,a,i,!0,r):l=n.intersectTriangle(i,a,o,t.side===zi,r),l===null)return null;Ga.copy(r),Ga.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ga);return c<e.near||c>e.far?null:{distance:c,point:Ga.clone(),object:s}}function Wa(s,t,e,n,i,a,o,r,l,c){s.getVertexPosition(r,za),s.getVertexPosition(l,Ba),s.getVertexPosition(c,Va);const h=qu(s,t,e,n,za,Ba,Va,_c);if(h){const d=new D;qn.getBarycoord(_c,za,Ba,Va,d),i&&(h.uv=qn.getInterpolatedAttribute(i,r,l,c,d,new st)),a&&(h.uv1=qn.getInterpolatedAttribute(a,r,l,c,d,new st)),o&&(h.normal=qn.getInterpolatedAttribute(o,r,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:r,b:l,c,normal:new D,materialIndex:0};qn.getNormal(za,Ba,Va,u.normal),h.face=u,h.barycoord=d}return h}class Oe extends Re{constructor(t=1,e=1,n=1,i=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:a,depthSegments:o};const r=this;i=Math.floor(i),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,a,0),m("z","y","x",1,-1,n,e,-t,o,a,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,a,4),m("x","y","z",-1,-1,t,e,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function m(g,p,x,v,b,w,T,S,C,M,_){const y=w/C,P=T/M,k=w/2,U=T/2,W=S/2,H=C+1,Z=M+1;let z=0,N=0;const j=new D;for(let Q=0;Q<Z;Q++){const mt=Q*P-U;for(let Bt=0;Bt<H;Bt++){const Vt=Bt*y-k;j[g]=Vt*v,j[p]=mt*b,j[x]=W,c.push(j.x,j.y,j.z),j[g]=0,j[p]=0,j[x]=S>0?1:-1,h.push(j.x,j.y,j.z),d.push(Bt/C),d.push(1-Q/M),z+=1}}for(let Q=0;Q<M;Q++)for(let mt=0;mt<C;mt++){const Bt=u+mt+H*Q,Vt=u+mt+H*(Q+1),ee=u+(mt+1)+H*(Q+1),te=u+(mt+1)+H*Q;l.push(Bt,Vt,te),l.push(Vt,ee,te),N+=6}r.addGroup(f,N,_),f+=N,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function fn(s){const t={};for(let e=0;e<s.length;e++){const n=Vs(s[e]);for(const i in n)t[i]=n[i]}return t}function Yu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const _a={clone:Vs,merge:fn};var ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends $s{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ju,this.fragmentShader=Zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=Yu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Kh extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new D,yc=new st,wc=new st;class An extends Kh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=va*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return va*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,yc,wc),e.subVectors(wc,yc)}setViewOffset(t,e,n,i,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ra*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,a=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const r=this.filmOffset;r!==0&&(a+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ys=-90,ws=1;class Ku extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new An(ys,ws,t,e);i.layers=this.layers,this.add(i);const a=new An(ys,ws,t,e);a.layers=this.layers,this.add(a);const o=new An(ys,ws,t,e);o.layers=this.layers,this.add(o);const r=new An(ys,ws,t,e);r.layers=this.layers,this.add(r);const l=new An(ys,ws,t,e);l.layers=this.layers,this.add(l);const c=new An(ys,ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,a,o,r,l]=e;for(const c of e)this.remove(c);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_o)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,a),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,r),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Jh extends rn{constructor(t=[],e=Os,n,i,a,o,r,l,c,h){super(t,e,n,i,a,o,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ju extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Jh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Oe(5,5,5),a=new Ve({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:li});a.uniforms.tEquirect.value=e;const o=new Mt(i,a),r=e.minFilter;return e.minFilter===ts&&(e.minFilter=On),new Ku(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(a)}}class ke extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qu={type:"move"};class tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,a=null,o=null;const r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),x=this._getHandJoint(c,g);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=p.radius),x.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Qu)))}return r!==null&&(r.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Dl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new Dl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Qh extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class td extends rn{constructor(t=null,e=1,n=1,i,a,o,r,l,c=Pn,h=Pn,d,u){super(null,o,r,l,c,h,i,a,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ca extends tn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ms=new ie,Mc=new ie,$a=[],Sc=new rs,tf=new ie,Qs=new Mt,ta=new Ws;class Oi extends Mt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ca(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,tf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new rs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),Sc.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Sc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ws),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),ta.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(ta)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,a=n.length+1,o=t*a+1;for(let r=0;r<n.length;r++)n[r]=i[o+r]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(n),t.ray.intersectsSphere(ta)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,Ms),Mc.multiplyMatrices(n,Ms),Qs.matrixWorld=Mc,Qs.raycast(t,$a);for(let o=0,r=$a.length;o<r;o++){const l=$a[o];l.instanceId=a,l.object=this,e.push(l)}$a.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ca(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new td(new Float32Array(i*this.count),i,this.count,Sl,oi));const a=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const r=this.geometry.morphTargetsRelative?1:1-o,l=i*t;a[l]=r,a.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const er=new D,ef=new D,nf=new Zt;class ki{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=er.subVectors(n,e).cross(ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||nf.getNormalMatrix(t),i=this.coplanarPoint(er).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new Ws,sf=new st(.5,.5),Xa=new D;class kl{constructor(t=new ki,e=new ki,n=new ki,i=new ki,a=new ki,o=new ki){this.planes=[t,e,n,i,a,o]}set(t,e,n,i,a,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(a),r[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri,n=!1){const i=this.planes,a=t.elements,o=a[0],r=a[1],l=a[2],c=a[3],h=a[4],d=a[5],u=a[6],f=a[7],m=a[8],g=a[9],p=a[10],x=a[11],v=a[12],b=a[13],w=a[14],T=a[15];if(i[0].setComponents(c-o,f-h,x-m,T-v).normalize(),i[1].setComponents(c+o,f+h,x+m,T+v).normalize(),i[2].setComponents(c+r,f+d,x+g,T+b).normalize(),i[3].setComponents(c-r,f-d,x-g,T-b).normalize(),n)i[4].setComponents(l,u,p,w).normalize(),i[5].setComponents(c-l,f-u,x-p,T-w).normalize();else if(i[4].setComponents(c-l,f-u,x-p,T-w).normalize(),e===ri)i[5].setComponents(c+l,f+u,x+p,T+w).normalize();else if(e===_o)i[5].setComponents(l,u,p,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){$i.center.set(0,0,0);const e=sf.distanceTo(t.center);return $i.radius=.7071067811865476+e,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Xa.x=i.normal.x>0?t.max.x:t.min.x,Xa.y=i.normal.y>0?t.max.y:t.min.y,Xa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class af extends $s{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Tc=new ie,cl=new Ll,qa=new Ws,Ya=new D;class Il extends $e{constructor(t=new Re,e=new af){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,a=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(i),qa.radius+=a,t.ray.intersectsSphere(qa)===!1)return;Tc.copy(i).invert(),cl.copy(t.ray).applyMatrix4(Tc);const r=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,g=f;m<g;m++){const p=c.getX(m);Ya.fromBufferAttribute(d,p),Ec(Ya,p,l,i,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,g=f;m<g;m++)Ya.fromBufferAttribute(d,m),Ec(Ya,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=i.length;a<o;a++){const r=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}}function Ec(s,t,e,n,i,a,o){const r=cl.distanceSqToPoint(s);if(r<e){const l=new D;cl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ls extends rn{constructor(t,e,n,i,a,o,r,l,c){super(t,e,n,i,a,o,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ed extends rn{constructor(t,e,n=is,i,a,o,r=Pn,l=Pn,c,h=xa,d=1){if(h!==xa&&h!==ga)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,i,a,o,r,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class nd extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Eo extends Re{constructor(t=1,e=1,n=4,i=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:a},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),a=Math.max(1,Math.floor(a));const o=[],r=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,m=n*2+a,g=i+1,p=new D,x=new D;for(let v=0;v<=m;v++){let b=0,w=0,T=0,S=0;if(v<=n){const _=v/n,y=_*Math.PI/2;w=-h-t*Math.cos(y),T=t*Math.sin(y),S=-t*Math.cos(y),b=_*d}else if(v<=n+a){const _=(v-n)/a;w=-h+_*e,T=t,S=0,b=d+_*u}else{const _=(v-n-a)/n,y=_*Math.PI/2;w=h+t*Math.sin(y),T=t*Math.cos(y),S=t*Math.sin(y),b=d+u+_*d}const C=Math.max(0,Math.min(1,b/f));let M=0;v===0?M=.5/i:v===m&&(M=-.5/i);for(let _=0;_<=i;_++){const y=_/i,P=y*Math.PI*2,k=Math.sin(P),U=Math.cos(P);x.x=-T*U,x.y=w,x.z=T*k,r.push(x.x,x.y,x.z),p.set(-T*U,S,T*k),p.normalize(),l.push(p.x,p.y,p.z),c.push(y+M,C)}if(v>0){const _=(v-1)*g;for(let y=0;y<i;y++){const P=_+y,k=_+y+1,U=v*g+y,W=v*g+y+1;o.push(P,k,U),o.push(k,W,U)}}}this.setIndex(o),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Ao extends Re{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const a=[],o=[],r=[],l=[],c=new D,h=new st;o.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class en extends Re{constructor(t=1,e=1,n=1,i=32,a=1,o=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:l};const c=this;i=Math.floor(i),a=Math.floor(a);const h=[],d=[],u=[],f=[];let m=0;const g=[],p=n/2;let x=0;v(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function v(){const w=new D,T=new D;let S=0;const C=(e-t)/n;for(let M=0;M<=a;M++){const _=[],y=M/a,P=y*(e-t)+t;for(let k=0;k<=i;k++){const U=k/i,W=U*l+r,H=Math.sin(W),Z=Math.cos(W);T.x=P*H,T.y=-y*n+p,T.z=P*Z,d.push(T.x,T.y,T.z),w.set(H,C,Z).normalize(),u.push(w.x,w.y,w.z),f.push(U,1-y),_.push(m++)}g.push(_)}for(let M=0;M<i;M++)for(let _=0;_<a;_++){const y=g[_][M],P=g[_+1][M],k=g[_+1][M+1],U=g[_][M+1];(t>0||_!==0)&&(h.push(y,P,U),S+=3),(e>0||_!==a-1)&&(h.push(P,k,U),S+=3)}c.addGroup(x,S,0),x+=S}function b(w){const T=m,S=new st,C=new D;let M=0;const _=w===!0?t:e,y=w===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,p*y,0),u.push(0,y,0),f.push(.5,.5),m++;const P=m;for(let k=0;k<=i;k++){const W=k/i*l+r,H=Math.cos(W),Z=Math.sin(W);C.x=_*Z,C.y=p*y,C.z=_*H,d.push(C.x,C.y,C.z),u.push(0,y,0),S.x=H*.5+.5,S.y=Z*.5*y+.5,f.push(S.x,S.y),m++}for(let k=0;k<i;k++){const U=T+k,W=P+k;w===!0?h.push(W,W+1,U):h.push(W+1,W,U),M+=3}c.addGroup(x,M,w===!0?1:2),x+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class es extends en{constructor(t=1,e=1,n=32,i=1,a=!1,o=0,r=Math.PI*2){super(0,t,e,n,i,a,o,r),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:r}}static fromJSON(t){return new es(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Co extends Re{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const a=[],o=[];r(i),c(n),h(),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(a.slice(),3)),this.setAttribute("uv",new Qt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function r(v){const b=new D,w=new D,T=new D;for(let S=0;S<e.length;S+=3)f(e[S+0],b),f(e[S+1],w),f(e[S+2],T),l(b,w,T,v)}function l(v,b,w,T){const S=T+1,C=[];for(let M=0;M<=S;M++){C[M]=[];const _=v.clone().lerp(w,M/S),y=b.clone().lerp(w,M/S),P=S-M;for(let k=0;k<=P;k++)k===0&&M===S?C[M][k]=_:C[M][k]=_.clone().lerp(y,k/P)}for(let M=0;M<S;M++)for(let _=0;_<2*(S-M)-1;_++){const y=Math.floor(_/2);_%2===0?(u(C[M][y+1]),u(C[M+1][y]),u(C[M][y])):(u(C[M][y+1]),u(C[M+1][y+1]),u(C[M+1][y]))}}function c(v){const b=new D;for(let w=0;w<a.length;w+=3)b.x=a[w+0],b.y=a[w+1],b.z=a[w+2],b.normalize().multiplyScalar(v),a[w+0]=b.x,a[w+1]=b.y,a[w+2]=b.z}function h(){const v=new D;for(let b=0;b<a.length;b+=3){v.x=a[b+0],v.y=a[b+1],v.z=a[b+2];const w=p(v)/2/Math.PI+.5,T=x(v)/Math.PI+.5;o.push(w,1-T)}m(),d()}function d(){for(let v=0;v<o.length;v+=6){const b=o[v+0],w=o[v+2],T=o[v+4],S=Math.max(b,w,T),C=Math.min(b,w,T);S>.9&&C<.1&&(b<.2&&(o[v+0]+=1),w<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function u(v){a.push(v.x,v.y,v.z)}function f(v,b){const w=v*3;b.x=t[w+0],b.y=t[w+1],b.z=t[w+2]}function m(){const v=new D,b=new D,w=new D,T=new D,S=new st,C=new st,M=new st;for(let _=0,y=0;_<a.length;_+=9,y+=6){v.set(a[_+0],a[_+1],a[_+2]),b.set(a[_+3],a[_+4],a[_+5]),w.set(a[_+6],a[_+7],a[_+8]),S.set(o[y+0],o[y+1]),C.set(o[y+2],o[y+3]),M.set(o[y+4],o[y+5]),T.copy(v).add(b).add(w).divideScalar(3);const P=p(T);g(S,y+0,v,P),g(C,y+2,b,P),g(M,y+4,w,P)}}function g(v,b,w,T){T<0&&v.x===1&&(o[b]=v.x-1),w.x===0&&w.z===0&&(o[b]=T/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function x(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.vertices,t.indices,t.radius,t.details)}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$t("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),a=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),a+=n.distanceTo(i),e.push(a),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const a=n.length;let o;e?o=e:o=t*n[a-1];let r=0,l=a-1,c;for(;r<=l;)if(i=Math.floor(r+(l-r)/2),c=n[i]-o,c<0)r=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(a-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(a-1)}getTangent(t,e){let i=t-1e-4,a=t+1e-4;i<0&&(i=0),a>1&&(a=1);const o=this.getPoint(i),r=this.getPoint(a),l=e||(o.isVector2?new st:new D);return l.copy(r).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new D,i=[],a=[],o=[],r=new D,l=new ie;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new D)}a[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),r.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],r),o[0].crossVectors(i[0],a[0]);for(let f=1;f<=t;f++){if(a[f]=a[f-1].clone(),o[f]=o[f-1].clone(),r.crossVectors(i[f-1],i[f]),r.length()>Number.EPSILON){r.normalize();const m=Math.acos(Jt(i[f-1].dot(i[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(r,m))}o[f].crossVectors(i[f],a[f])}if(e===!0){let f=Math.acos(Jt(a[0].dot(a[t]),-1,1));f/=t,i[0].dot(r.crossVectors(a[0],a[t]))>0&&(f=-f);for(let m=1;m<=t;m++)a[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],a[m])}return{tangents:i,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nl extends di{constructor(t=0,e=0,n=1,i=1,a=0,o=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=r,this.aRotation=l}getPoint(t,e=new st){const n=e,i=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(o?a=0:a=i),this.aClockwise===!0&&!o&&(a===i?a=-i:a=a-i);const r=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(r),c=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class of extends Nl{constructor(t,e,n,i,a,o){super(t,e,n,n,i,a,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ul(){let s=0,t=0,e=0,n=0;function i(a,o,r,l){s=a,t=r,e=-3*a+3*o-2*r-l,n=2*a-2*o+r+l}return{initCatmullRom:function(a,o,r,l,c){i(o,r,c*(r-a),c*(l-o))},initNonuniformCatmullRom:function(a,o,r,l,c,h,d){let u=(o-a)/c-(r-a)/(c+h)+(r-o)/h,f=(r-o)/h-(l-o)/(h+d)+(l-r)/d;u*=h,f*=h,i(o,r,u,f)},calc:function(a){const o=a*a,r=o*a;return s+t*a+e*o+n*r}}}const ja=new D,nr=new Ul,ir=new Ul,sr=new Ul;class rf extends di{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,a=i.length,o=(a-(this.closed?0:1))*t;let r=Math.floor(o),l=o-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/a)+1)*a:l===0&&r===a-1&&(r=a-2,l=1);let c,h;this.closed||r>0?c=i[(r-1)%a]:(ja.subVectors(i[0],i[1]).add(i[0]),c=ja);const d=i[r%a],u=i[(r+1)%a];if(this.closed||r+2<a?h=i[(r+2)%a]:(ja.subVectors(i[a-1],i[a-2]).add(i[a-1]),h=ja),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);g<1e-4&&(g=1),m<1e-4&&(m=g),p<1e-4&&(p=g),nr.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,g,p),ir.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,g,p),sr.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,g,p)}else this.curveType==="catmullrom"&&(nr.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),ir.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),sr.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(nr.calc(l),ir.calc(l),sr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ac(s,t,e,n,i){const a=(n-t)*.5,o=(i-e)*.5,r=s*s,l=s*r;return(2*e-2*n+a+o)*l+(-3*e+3*n-2*a-o)*r+a*s+e}function lf(s,t){const e=1-s;return e*e*t}function cf(s,t){return 2*(1-s)*s*t}function hf(s,t){return s*s*t}function ha(s,t,e,n){return lf(s,t)+cf(s,e)+hf(s,n)}function df(s,t){const e=1-s;return e*e*e*t}function uf(s,t){const e=1-s;return 3*e*e*s*t}function ff(s,t){return 3*(1-s)*s*s*t}function pf(s,t){return s*s*s*t}function da(s,t,e,n,i){return df(s,t)+uf(s,e)+ff(s,n)+pf(s,i)}class id extends di{constructor(t=new st,e=new st,n=new st,i=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new st){const n=e,i=this.v0,a=this.v1,o=this.v2,r=this.v3;return n.set(da(t,i.x,a.x,o.x,r.x),da(t,i.y,a.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mf extends di{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){const n=e,i=this.v0,a=this.v1,o=this.v2,r=this.v3;return n.set(da(t,i.x,a.x,o.x,r.x),da(t,i.y,a.y,o.y,r.y),da(t,i.z,a.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sd extends di{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xf extends di{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ad extends di{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,i=this.v0,a=this.v1,o=this.v2;return n.set(ha(t,i.x,a.x,o.x),ha(t,i.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gf extends di{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,i=this.v0,a=this.v1,o=this.v2;return n.set(ha(t,i.x,a.x,o.x),ha(t,i.y,a.y,o.y),ha(t,i.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class od extends di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,i=this.points,a=(i.length-1)*t,o=Math.floor(a),r=a-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Ac(r,l.x,c.x,h.x,d.x),Ac(r,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new st().fromArray(i))}return this}}var hl=Object.freeze({__proto__:null,ArcCurve:of,CatmullRomCurve3:rf,CubicBezierCurve:id,CubicBezierCurve3:mf,EllipseCurve:Nl,LineCurve:sd,LineCurve3:xf,QuadraticBezierCurve:ad,QuadraticBezierCurve3:gf,SplineCurve:od});class bf extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let a=0;for(;a<i.length;){if(i[a]>=n){const o=i[a]-n,r=this.curves[a],l=r.getLength(),c=l===0?0:1-o/l;return r.getPointAt(c,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,a=this.curves;i<a.length;i++){const o=a[i],r=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(r);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new hl[i.type]().fromJSON(i))}return this}}class Cc extends bf{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new sd(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const a=new ad(this.currentPoint.clone(),new st(t,e),new st(n,i));return this.curves.push(a),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,a,o){const r=new id(this.currentPoint.clone(),new st(t,e),new st(n,i),new st(a,o));return this.curves.push(r),this.currentPoint.set(a,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new od(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,a,o){const r=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+r,e+l,n,i,a,o),this}absarc(t,e,n,i,a,o){return this.absellipse(t,e,n,n,i,a,o),this}ellipse(t,e,n,i,a,o,r,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,a,o,r,l),this}absellipse(t,e,n,i,a,o,r,l){const c=new Nl(t,e,n,i,a,o,r,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class dl extends Cc{constructor(t){super(t),this.uuid=os(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Cc().fromJSON(i))}return this}}function vf(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let a=rd(s,0,i,e,!0);const o=[];if(!a||a.next===a.prev)return o;let r,l,c;if(n&&(a=Sf(s,t,a,e)),s.length>80*e){r=s[0],l=s[1];let h=r,d=l;for(let u=e;u<i;u+=e){const f=s[u],m=s[u+1];f<r&&(r=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-r,d-l),c=c!==0?32767/c:0}return ya(a,o,e,r,l,c,0),o}function rd(s,t,e,n,i){let a;if(i===Nf(s,t,e,n)>0)for(let o=t;o<e;o+=n)a=Rc(o/n|0,s[o],s[o+1],a);else for(let o=e-n;o>=t;o-=n)a=Rc(o/n|0,s[o],s[o+1],a);return a&&Hs(a,a.next)&&(Ma(a),a=a.next),a}function ss(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Hs(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Ma(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ya(s,t,e,n,i,a,o){if(!s)return;!o&&a&&Rf(s,n,i,a);let r=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(a?yf(s,n,i,a):_f(s)){t.push(l.i,s.i,c.i),Ma(s),s=c.next,r=c.next;continue}if(s=c,s===r){o?o===1?(s=wf(ss(s),t),ya(s,t,e,n,i,a,2)):o===2&&Mf(s,t,e,n,i,a):ya(ss(s),t,e,n,i,a,1);break}}}function _f(s){const t=s.prev,e=s,n=s.next;if(Ie(t,e,n)>=0)return!1;const i=t.x,a=e.x,o=n.x,r=t.y,l=e.y,c=n.y,h=Math.min(i,a,o),d=Math.min(r,l,c),u=Math.max(i,a,o),f=Math.max(r,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&aa(i,r,a,l,o,c,m.x,m.y)&&Ie(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function yf(s,t,e,n){const i=s.prev,a=s,o=s.next;if(Ie(i,a,o)>=0)return!1;const r=i.x,l=a.x,c=o.x,h=i.y,d=a.y,u=o.y,f=Math.min(r,l,c),m=Math.min(h,d,u),g=Math.max(r,l,c),p=Math.max(h,d,u),x=ul(f,m,t,e,n),v=ul(g,p,t,e,n);let b=s.prevZ,w=s.nextZ;for(;b&&b.z>=x&&w&&w.z<=v;){if(b.x>=f&&b.x<=g&&b.y>=m&&b.y<=p&&b!==i&&b!==o&&aa(r,h,l,d,c,u,b.x,b.y)&&Ie(b.prev,b,b.next)>=0||(b=b.prevZ,w.x>=f&&w.x<=g&&w.y>=m&&w.y<=p&&w!==i&&w!==o&&aa(r,h,l,d,c,u,w.x,w.y)&&Ie(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;b&&b.z>=x;){if(b.x>=f&&b.x<=g&&b.y>=m&&b.y<=p&&b!==i&&b!==o&&aa(r,h,l,d,c,u,b.x,b.y)&&Ie(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;w&&w.z<=v;){if(w.x>=f&&w.x<=g&&w.y>=m&&w.y<=p&&w!==i&&w!==o&&aa(r,h,l,d,c,u,w.x,w.y)&&Ie(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function wf(s,t){let e=s;do{const n=e.prev,i=e.next.next;!Hs(n,i)&&cd(n,e,e.next,i)&&wa(n,i)&&wa(i,n)&&(t.push(n.i,e.i,i.i),Ma(e),Ma(e.next),e=s=i),e=e.next}while(e!==s);return ss(e)}function Mf(s,t,e,n,i,a){let o=s;do{let r=o.next.next;for(;r!==o.prev;){if(o.i!==r.i&&Df(o,r)){let l=hd(o,r);o=ss(o,o.next),l=ss(l,l.next),ya(o,t,e,n,i,a,0),ya(l,t,e,n,i,a,0);return}r=r.next}o=o.next}while(o!==s)}function Sf(s,t,e,n){const i=[];for(let a=0,o=t.length;a<o;a++){const r=t[a]*n,l=a<o-1?t[a+1]*n:s.length,c=rd(s,r,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Lf(c))}i.sort(Tf);for(let a=0;a<i.length;a++)e=Ef(i[a],e);return e}function Tf(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Ef(s,t){const e=Af(s,t);if(!e)return t;const n=hd(e,s);return ss(n,n.next),ss(e,e.next)}function Af(s,t){let e=t;const n=s.x,i=s.y;let a=-1/0,o;if(Hs(s,e))return e;do{if(Hs(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>a&&(a=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const r=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ld(i<c?n:a,i,l,c,i<c?a:n,i,e.x,e.y)){const d=Math.abs(i-e.y)/(n-e.x);wa(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Cf(o,e)))&&(o=e,h=d)}e=e.next}while(e!==r);return o}function Cf(s,t){return Ie(s.prev,s,t.prev)<0&&Ie(t.next,s,s.next)<0}function Rf(s,t,e,n){let i=s;do i.z===0&&(i.z=ul(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Pf(i)}function Pf(s){let t,e=1;do{let n=s,i;s=null;let a=null;for(t=0;n;){t++;let o=n,r=0;for(let c=0;c<e&&(r++,o=o.nextZ,!!o);c++);let l=e;for(;r>0||l>0&&o;)r!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,r--):(i=o,o=o.nextZ,l--),a?a.nextZ=i:s=i,i.prevZ=a,a=i;n=o}a.nextZ=null,e*=2}while(t>1);return s}function ul(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Lf(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ld(s,t,e,n,i,a,o,r){return(i-o)*(t-r)>=(s-o)*(a-r)&&(s-o)*(n-r)>=(e-o)*(t-r)&&(e-o)*(a-r)>=(i-o)*(n-r)}function aa(s,t,e,n,i,a,o,r){return!(s===o&&t===r)&&ld(s,t,e,n,i,a,o,r)}function Df(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!kf(s,t)&&(wa(s,t)&&wa(t,s)&&If(s,t)&&(Ie(s.prev,s,t.prev)||Ie(s,t.prev,t))||Hs(s,t)&&Ie(s.prev,s,s.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Hs(s,t){return s.x===t.x&&s.y===t.y}function cd(s,t,e,n){const i=Ka(Ie(s,t,e)),a=Ka(Ie(s,t,n)),o=Ka(Ie(e,n,s)),r=Ka(Ie(e,n,t));return!!(i!==a&&o!==r||i===0&&Za(s,e,t)||a===0&&Za(s,n,t)||o===0&&Za(e,s,n)||r===0&&Za(e,t,n))}function Za(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ka(s){return s>0?1:s<0?-1:0}function kf(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&cd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function wa(s,t){return Ie(s.prev,s,s.next)<0?Ie(s,t,s.next)>=0&&Ie(s,s.prev,t)>=0:Ie(s,t,s.prev)<0||Ie(s,s.next,t)<0}function If(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,a=(s.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&i<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function hd(s,t){const e=fl(s.i,s.x,s.y),n=fl(t.i,t.x,t.y),i=s.next,a=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,a.next=n,n.prev=a,n}function Rc(s,t,e,n){const i=fl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ma(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function fl(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Nf(s,t,e,n){let i=0;for(let a=t,o=e-n;a<e;a+=n)i+=(s[o]-s[a])*(s[a+1]+s[o+1]),o=a;return i}class Uf{static triangulate(t,e,n=2){return vf(t,e,n)}}class Ls{static area(t){const e=t.length;let n=0;for(let i=e-1,a=0;a<e;i=a++)n+=t[i].x*t[a].y-t[a].x*t[i].y;return n*.5}static isClockWise(t){return Ls.area(t)<0}static triangulateShape(t,e){const n=[],i=[],a=[];Pc(t),Lc(n,t);let o=t.length;e.forEach(Pc);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Lc(n,e[l]);const r=Uf.triangulate(n,i);for(let l=0;l<r.length;l+=3)a.push(r.slice(l,l+3));return a}}function Pc(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Lc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class wo extends Re{constructor(t=new dl([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],a=[];for(let r=0,l=t.length;r<l;r++){const c=t[r];o(c)}this.setAttribute("position",new Qt(i,3)),this.setAttribute("uv",new Qt(a,2)),this.computeVertexNormals();function o(r){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const x=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Ff;let b,w=!1,T,S,C,M;x&&(b=x.getSpacedPoints(h),w=!0,u=!1,T=x.computeFrenetFrames(h,!1),S=new D,C=new D,M=new D),u||(p=0,f=0,m=0,g=0);const _=r.extractPoints(c);let y=_.shape;const P=_.holes;if(!Ls.isClockWise(y)){y=y.reverse();for(let at=0,E=P.length;at<E;at++){const B=P[at];Ls.isClockWise(B)&&(P[at]=B.reverse())}}function U(at){const B=10000000000000001e-36;let Y=at[0];for(let K=1;K<=at.length;K++){const J=K%at.length,ct=at[J],rt=ct.x-Y.x,xt=ct.y-Y.y,L=rt*rt+xt*xt,A=Math.max(Math.abs(ct.x),Math.abs(ct.y),Math.abs(Y.x),Math.abs(Y.y)),V=B*A*A;if(L<=V){at.splice(J,1),K--;continue}Y=ct}}U(y),P.forEach(U);const W=P.length,H=y;for(let at=0;at<W;at++){const E=P[at];y=y.concat(E)}function Z(at,E,B){return E||ze("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(E,B)}const z=y.length;function N(at,E,B){let Y,K,J;const ct=at.x-E.x,rt=at.y-E.y,xt=B.x-at.x,L=B.y-at.y,A=ct*ct+rt*rt,V=ct*L-rt*xt;if(Math.abs(V)>Number.EPSILON){const $=Math.sqrt(A),it=Math.sqrt(xt*xt+L*L),q=E.x-rt/$,Et=E.y+ct/$,ut=B.x-L/it,Dt=B.y+xt/it,Rt=((ut-q)*L-(Dt-Et)*xt)/(ct*L-rt*xt);Y=q+ct*Rt-at.x,K=Et+rt*Rt-at.y;const ot=Y*Y+K*K;if(ot<=2)return new st(Y,K);J=Math.sqrt(ot/2)}else{let $=!1;ct>Number.EPSILON?xt>Number.EPSILON&&($=!0):ct<-Number.EPSILON?xt<-Number.EPSILON&&($=!0):Math.sign(rt)===Math.sign(L)&&($=!0),$?(Y=-rt,K=ct,J=Math.sqrt(A)):(Y=ct,K=rt,J=Math.sqrt(A/2))}return new st(Y/J,K/J)}const j=[];for(let at=0,E=H.length,B=E-1,Y=at+1;at<E;at++,B++,Y++)B===E&&(B=0),Y===E&&(Y=0),j[at]=N(H[at],H[B],H[Y]);const Q=[];let mt,Bt=j.concat();for(let at=0,E=W;at<E;at++){const B=P[at];mt=[];for(let Y=0,K=B.length,J=K-1,ct=Y+1;Y<K;Y++,J++,ct++)J===K&&(J=0),ct===K&&(ct=0),mt[Y]=N(B[Y],B[J],B[ct]);Q.push(mt),Bt=Bt.concat(mt)}let Vt;if(p===0)Vt=Ls.triangulateShape(H,P);else{const at=[],E=[];for(let B=0;B<p;B++){const Y=B/p,K=f*Math.cos(Y*Math.PI/2),J=m*Math.sin(Y*Math.PI/2)+g;for(let ct=0,rt=H.length;ct<rt;ct++){const xt=Z(H[ct],j[ct],J);Pt(xt.x,xt.y,-K),Y===0&&at.push(xt)}for(let ct=0,rt=W;ct<rt;ct++){const xt=P[ct];mt=Q[ct];const L=[];for(let A=0,V=xt.length;A<V;A++){const $=Z(xt[A],mt[A],J);Pt($.x,$.y,-K),Y===0&&L.push($)}Y===0&&E.push(L)}}Vt=Ls.triangulateShape(at,E)}const ee=Vt.length,te=m+g;for(let at=0;at<z;at++){const E=u?Z(y[at],Bt[at],te):y[at];w?(C.copy(T.normals[0]).multiplyScalar(E.x),S.copy(T.binormals[0]).multiplyScalar(E.y),M.copy(b[0]).add(C).add(S),Pt(M.x,M.y,M.z)):Pt(E.x,E.y,0)}for(let at=1;at<=h;at++)for(let E=0;E<z;E++){const B=u?Z(y[E],Bt[E],te):y[E];w?(C.copy(T.normals[at]).multiplyScalar(B.x),S.copy(T.binormals[at]).multiplyScalar(B.y),M.copy(b[at]).add(C).add(S),Pt(M.x,M.y,M.z)):Pt(B.x,B.y,d/h*at)}for(let at=p-1;at>=0;at--){const E=at/p,B=f*Math.cos(E*Math.PI/2),Y=m*Math.sin(E*Math.PI/2)+g;for(let K=0,J=H.length;K<J;K++){const ct=Z(H[K],j[K],Y);Pt(ct.x,ct.y,d+B)}for(let K=0,J=P.length;K<J;K++){const ct=P[K];mt=Q[K];for(let rt=0,xt=ct.length;rt<xt;rt++){const L=Z(ct[rt],mt[rt],Y);w?Pt(L.x,L.y+b[h-1].y,b[h-1].x+B):Pt(L.x,L.y,d+B)}}}tt(),nt();function tt(){const at=i.length/3;if(u){let E=0,B=z*E;for(let Y=0;Y<ee;Y++){const K=Vt[Y];Tt(K[2]+B,K[1]+B,K[0]+B)}E=h+p*2,B=z*E;for(let Y=0;Y<ee;Y++){const K=Vt[Y];Tt(K[0]+B,K[1]+B,K[2]+B)}}else{for(let E=0;E<ee;E++){const B=Vt[E];Tt(B[2],B[1],B[0])}for(let E=0;E<ee;E++){const B=Vt[E];Tt(B[0]+z*h,B[1]+z*h,B[2]+z*h)}}n.addGroup(at,i.length/3-at,0)}function nt(){const at=i.length/3;let E=0;vt(H,E),E+=H.length;for(let B=0,Y=P.length;B<Y;B++){const K=P[B];vt(K,E),E+=K.length}n.addGroup(at,i.length/3-at,1)}function vt(at,E){let B=at.length;for(;--B>=0;){const Y=B;let K=B-1;K<0&&(K=at.length-1);for(let J=0,ct=h+p*2;J<ct;J++){const rt=z*J,xt=z*(J+1),L=E+Y+rt,A=E+K+rt,V=E+K+xt,$=E+Y+xt;jt(L,A,V,$)}}}function Pt(at,E,B){l.push(at),l.push(E),l.push(B)}function Tt(at,E,B){he(at),he(E),he(B);const Y=i.length/3,K=v.generateTopUV(n,i,Y-3,Y-2,Y-1);Ft(K[0]),Ft(K[1]),Ft(K[2])}function jt(at,E,B,Y){he(at),he(E),he(Y),he(E),he(B),he(Y);const K=i.length/3,J=v.generateSideWallUV(n,i,K-6,K-3,K-2,K-1);Ft(J[0]),Ft(J[1]),Ft(J[3]),Ft(J[1]),Ft(J[2]),Ft(J[3])}function he(at){i.push(l[at*3+0]),i.push(l[at*3+1]),i.push(l[at*3+2])}function Ft(at){a.push(at.x),a.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Of(e,n,t)}static fromJSON(t,e){const n=[];for(let a=0,o=t.shapes.length;a<o;a++){const r=e[t.shapes[a]];n.push(r)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new hl[i.type]().fromJSON(i)),new wo(n,t.options)}}const Ff={generateTopUV:function(s,t,e,n,i){const a=t[e*3],o=t[e*3+1],r=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new st(a,o),new st(r,l),new st(c,h)]},generateSideWallUV:function(s,t,e,n,i,a){const o=t[e*3],r=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],m=t[i*3+2],g=t[a*3],p=t[a*3+1],x=t[a*3+2];return Math.abs(r-h)<Math.abs(o-c)?[new st(o,1-l),new st(c,1-d),new st(u,1-m),new st(g,1-x)]:[new st(r,1-l),new st(h,1-d),new st(f,1-m),new st(p,1-x)]}};function Of(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const a=s[n];e.shapes.push(a.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Fl extends Co{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fl(t.radius,t.detail)}}class Ol extends Co{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ol(t.radius,t.detail)}}class Qe extends Re{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const a=t/2,o=e/2,r=Math.floor(n),l=Math.floor(i),c=r+1,h=l+1,d=t/r,u=e/l,f=[],m=[],g=[],p=[];for(let x=0;x<h;x++){const v=x*u-o;for(let b=0;b<c;b++){const w=b*d-a;m.push(w,-v,0),g.push(0,0,1),p.push(b/r),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let v=0;v<r;v++){const b=v+c*x,w=v+c*(x+1),T=v+1+c*(x+1),S=v+1+c*x;f.push(b,w,S),f.push(w,T,S)}this.setIndex(f),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(g,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.width,t.height,t.widthSegments,t.heightSegments)}}class vn extends Re{constructor(t=1,e=32,n=16,i=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:a,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+r,Math.PI);let c=0;const h=[],d=new D,u=new D,f=[],m=[],g=[],p=[];for(let x=0;x<=n;x++){const v=[],b=x/n;let w=0;x===0&&o===0?w=.5/e:x===n&&l===Math.PI&&(w=-.5/e);for(let T=0;T<=e;T++){const S=T/e;d.x=-t*Math.cos(i+S*a)*Math.sin(o+b*r),d.y=t*Math.cos(o+b*r),d.z=t*Math.sin(i+S*a)*Math.sin(o+b*r),m.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),p.push(S+w,1-b),v.push(c++)}h.push(v)}for(let x=0;x<n;x++)for(let v=0;v<e;v++){const b=h[x][v+1],w=h[x][v],T=h[x+1][v],S=h[x+1][v+1];(x!==0||o>0)&&f.push(b,w,S),(x!==n-1||l<Math.PI)&&f.push(w,T,S)}this.setIndex(f),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(g,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ai extends Re{constructor(t=1,e=.4,n=12,i=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:a},n=Math.floor(n),i=Math.floor(i);const o=[],r=[],l=[],c=[],h=new D,d=new D,u=new D;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const g=m/i*a,p=f/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(g),d.y=(t+e*Math.cos(p))*Math.sin(g),d.z=e*Math.sin(p),r.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const g=(i+1)*f+m-1,p=(i+1)*(f-1)+m-1,x=(i+1)*(f-1)+m,v=(i+1)*f+m;o.push(g,p,v),o.push(p,x,v)}this.setIndex(o),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ai(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class zf extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Me extends $s{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hh,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bf extends $s{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vf extends $s{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class zl extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class dd extends zl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ar=new ie,Dc=new D,kc=new D;class ud{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kl,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Dc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dc),kc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kc),e.updateMatrixWorld(),ar.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ar,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ar)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ic=new ie,ea=new D,or=new D;class Hf extends ud{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),ea.setFromMatrixPosition(t.matrixWorld),n.position.copy(ea),or.copy(n.position),or.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(or),n.updateMatrixWorld(),i.makeTranslation(-ea.x,-ea.y,-ea.z),Ic.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ic,n.coordinateSystem,n.reversedDepth)}}class fd extends zl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Bl extends Kh{constructor(t=-1,e=1,n=1,i=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-t,o=n+t,r=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Gf extends ud{constructor(){super(new Bl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wf extends zl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new Gf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $f extends An{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class pd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Nc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Xf extends as{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){$t("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Uc(s,t,e,n){const i=qf(n);switch(e){case Bh:return s*t;case Sl:return s*t/i.components*i.byteLength;case Tl:return s*t/i.components*i.byteLength;case El:return s*t*2/i.components*i.byteLength;case Al:return s*t*2/i.components*i.byteLength;case Vh:return s*t*3/i.components*i.byteLength;case Yn:return s*t*4/i.components*i.byteLength;case Cl:return s*t*4/i.components*i.byteLength;case ro:case lo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case co:case ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ur:case Or:return Math.max(s,16)*Math.max(t,8)/4;case Nr:case Fr:return Math.max(s,8)*Math.max(t,8)/2;case zr:case Br:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Gr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Wr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case $r:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Xr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case qr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Yr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case jr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Zr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Kr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Jr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Qr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case tl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case el:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case nl:case il:case sl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case al:case ol:return Math.ceil(s/4)*Math.ceil(t/4)*8;case rl:case ll:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qf(s){switch(s){case hi:case Uh:return{byteLength:1,components:1};case pa:case Fh:case ci:return{byteLength:2,components:1};case wl:case Ml:return{byteLength:2,components:4};case is:case yl:case oi:return{byteLength:4,components:1};case Oh:case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);function md(){let s=null,t=!1,e=null,n=null;function i(a,o){e(a,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function Yf(s){const t=new WeakMap;function e(r,l){const c=r.array,h=r.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),r.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:d}}function n(r,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,r),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],g=d[f];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const g=d[f];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function a(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=t.get(r);l&&(s.deleteBuffer(l.buffer),t.delete(r))}function o(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=t.get(r);(!h||h.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=t.get(r);if(c===void 0)t.set(r,e(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:i,remove:a,update:o}}var jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zf=`#ifdef USE_ALPHAHASH
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
#endif`,Kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e0=`#ifdef USE_AOMAP
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
#endif`,n0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,s0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,l0=`#ifdef USE_IRIDESCENCE
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
#endif`,c0=`#ifdef USE_BUMPMAP
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
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,b0=`#define PI 3.141592653589793
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
} // validated`,v0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,_0=`vec3 transformedNormal = objectNormal;
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
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T0="gl_FragColor = linearToOutputTexel( gl_FragColor );",E0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,C0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U0=`#ifdef USE_GRADIENTMAP
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
}`,F0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B0=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,V0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,H0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X0=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,q0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,Y0=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,j0=`#if defined( RE_IndirectDiffuse )
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
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ip=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sp=`#if defined( USE_POINTS_UV )
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
#endif`,ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
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
#endif`,bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vp=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jp=`uniform sampler2D t2D;
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,em=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nm=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,im=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lm=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,cm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,hm=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,dm=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,um=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,fm=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,pm=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,mm=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xm=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,gm=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,bm=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,vm=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,_m=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,ym=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,wm=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Mm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Sm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Tm=`uniform vec3 color;
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
}`,Em=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Am=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Kt={alphahash_fragment:jf,alphahash_pars_fragment:Zf,alphamap_fragment:Kf,alphamap_pars_fragment:Jf,alphatest_fragment:Qf,alphatest_pars_fragment:t0,aomap_fragment:e0,aomap_pars_fragment:n0,batching_pars_vertex:i0,batching_vertex:s0,begin_vertex:a0,beginnormal_vertex:o0,bsdfs:r0,iridescence_fragment:l0,bumpmap_pars_fragment:c0,clipping_planes_fragment:h0,clipping_planes_pars_fragment:d0,clipping_planes_pars_vertex:u0,clipping_planes_vertex:f0,color_fragment:p0,color_pars_fragment:m0,color_pars_vertex:x0,color_vertex:g0,common:b0,cube_uv_reflection_fragment:v0,defaultnormal_vertex:_0,displacementmap_pars_vertex:y0,displacementmap_vertex:w0,emissivemap_fragment:M0,emissivemap_pars_fragment:S0,colorspace_fragment:T0,colorspace_pars_fragment:E0,envmap_fragment:A0,envmap_common_pars_fragment:C0,envmap_pars_fragment:R0,envmap_pars_vertex:P0,envmap_physical_pars_fragment:V0,envmap_vertex:L0,fog_vertex:D0,fog_pars_vertex:k0,fog_fragment:I0,fog_pars_fragment:N0,gradientmap_pars_fragment:U0,lightmap_pars_fragment:F0,lights_lambert_fragment:O0,lights_lambert_pars_fragment:z0,lights_pars_begin:B0,lights_toon_fragment:H0,lights_toon_pars_fragment:G0,lights_phong_fragment:W0,lights_phong_pars_fragment:$0,lights_physical_fragment:X0,lights_physical_pars_fragment:q0,lights_fragment_begin:Y0,lights_fragment_maps:j0,lights_fragment_end:Z0,logdepthbuf_fragment:K0,logdepthbuf_pars_fragment:J0,logdepthbuf_pars_vertex:Q0,logdepthbuf_vertex:tp,map_fragment:ep,map_pars_fragment:np,map_particle_fragment:ip,map_particle_pars_fragment:sp,metalnessmap_fragment:ap,metalnessmap_pars_fragment:op,morphinstance_vertex:rp,morphcolor_vertex:lp,morphnormal_vertex:cp,morphtarget_pars_vertex:hp,morphtarget_vertex:dp,normal_fragment_begin:up,normal_fragment_maps:fp,normal_pars_fragment:pp,normal_pars_vertex:mp,normal_vertex:xp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:bp,clearcoat_normal_fragment_maps:vp,clearcoat_pars_fragment:_p,iridescence_pars_fragment:yp,opaque_fragment:wp,packing:Mp,premultiplied_alpha_fragment:Sp,project_vertex:Tp,dithering_fragment:Ep,dithering_pars_fragment:Ap,roughnessmap_fragment:Cp,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Pp,shadowmap_pars_vertex:Lp,shadowmap_vertex:Dp,shadowmask_pars_fragment:kp,skinbase_vertex:Ip,skinning_pars_vertex:Np,skinning_vertex:Up,skinnormal_vertex:Fp,specularmap_fragment:Op,specularmap_pars_fragment:zp,tonemapping_fragment:Bp,tonemapping_pars_fragment:Vp,transmission_fragment:Hp,transmission_pars_fragment:Gp,uv_pars_fragment:Wp,uv_pars_vertex:$p,uv_vertex:Xp,worldpos_vertex:qp,background_vert:Yp,background_frag:jp,backgroundCube_vert:Zp,backgroundCube_frag:Kp,cube_vert:Jp,cube_frag:Qp,depth_vert:tm,depth_frag:em,distanceRGBA_vert:nm,distanceRGBA_frag:im,equirect_vert:sm,equirect_frag:am,linedashed_vert:om,linedashed_frag:rm,meshbasic_vert:lm,meshbasic_frag:cm,meshlambert_vert:hm,meshlambert_frag:dm,meshmatcap_vert:um,meshmatcap_frag:fm,meshnormal_vert:pm,meshnormal_frag:mm,meshphong_vert:xm,meshphong_frag:gm,meshphysical_vert:bm,meshphysical_frag:vm,meshtoon_vert:_m,meshtoon_frag:ym,points_vert:wm,points_frag:Mm,shadow_vert:Sm,shadow_frag:Tm,sprite_vert:Em,sprite_frag:Am},gt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},si={basic:{uniforms:fn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:fn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:fn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:fn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:fn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:fn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:fn([gt.points,gt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:fn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:fn([gt.common,gt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:fn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:fn([gt.sprite,gt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:fn([gt.common,gt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:fn([gt.lights,gt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};si.physical={uniforms:fn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Ja={r:0,b:0,g:0},Xi=new _n,Cm=new ie;function Rm(s,t,e,n,i,a,o){const r=new Lt(0);let l=a===!0?0:1,c,h,d=null,u=0,f=null;function m(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?e:t).get(w)),w}function g(b){let w=!1;const T=m(b);T===null?x(r,l):T&&T.isColor&&(x(T,1),w=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(b,w){const T=m(w);T&&(T.isCubeTexture||T.mapping===To)?(h===void 0&&(h=new Mt(new Oe(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:Vs(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,C,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Xi.copy(w.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(Xi)),h.material.toneMapped=se.getTransfer(T.colorSpace)!==fe,(d!==T||u!==T.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=T,u=T.version,f=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Mt(new Qe(2,2),new Ve({name:"BackgroundMaterial",uniforms:Vs(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=se.getTransfer(T.colorSpace)!==fe,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||u!==T.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=T,u=T.version,f=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function x(b,w){b.getRGB(Ja,Zh(s)),n.buffers.color.setClear(Ja.r,Ja.g,Ja.b,w,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(b,w=1){r.set(b),l=w,x(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,x(r,l)},render:g,addToRenderList:p,dispose:v}}function Pm(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let a=i,o=!1;function r(y,P,k,U,W){let H=!1;const Z=d(U,k,P);a!==Z&&(a=Z,c(a.object)),H=f(y,U,k,W),H&&m(y,U,k,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,w(y,P,k,U),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function d(y,P,k){const U=k.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let H=W[P.id];H===void 0&&(H={},W[P.id]=H);let Z=H[U];return Z===void 0&&(Z=u(l()),H[U]=Z),Z}function u(y){const P=[],k=[],U=[];for(let W=0;W<e;W++)P[W]=0,k[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,P,k,U){const W=a.attributes,H=P.attributes;let Z=0;const z=k.getAttributes();for(const N in z)if(z[N].location>=0){const Q=W[N];let mt=H[N];if(mt===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),Q===void 0||Q.attribute!==mt||mt&&Q.data!==mt.data)return!0;Z++}return a.attributesNum!==Z||a.index!==U}function m(y,P,k,U){const W={},H=P.attributes;let Z=0;const z=k.getAttributes();for(const N in z)if(z[N].location>=0){let Q=H[N];Q===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));const mt={};mt.attribute=Q,Q&&Q.data&&(mt.data=Q.data),W[N]=mt,Z++}a.attributes=W,a.attributesNum=Z,a.index=U}function g(){const y=a.newAttributes;for(let P=0,k=y.length;P<k;P++)y[P]=0}function p(y){x(y,0)}function x(y,P){const k=a.newAttributes,U=a.enabledAttributes,W=a.attributeDivisors;k[y]=1,U[y]===0&&(s.enableVertexAttribArray(y),U[y]=1),W[y]!==P&&(s.vertexAttribDivisor(y,P),W[y]=P)}function v(){const y=a.newAttributes,P=a.enabledAttributes;for(let k=0,U=P.length;k<U;k++)P[k]!==y[k]&&(s.disableVertexAttribArray(k),P[k]=0)}function b(y,P,k,U,W,H,Z){Z===!0?s.vertexAttribIPointer(y,P,k,W,H):s.vertexAttribPointer(y,P,k,U,W,H)}function w(y,P,k,U){g();const W=U.attributes,H=k.getAttributes(),Z=P.defaultAttributeValues;for(const z in H){const N=H[z];if(N.location>=0){let j=W[z];if(j===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),j!==void 0){const Q=j.normalized,mt=j.itemSize,Bt=t.get(j);if(Bt===void 0)continue;const Vt=Bt.buffer,ee=Bt.type,te=Bt.bytesPerElement,tt=ee===s.INT||ee===s.UNSIGNED_INT||j.gpuType===yl;if(j.isInterleavedBufferAttribute){const nt=j.data,vt=nt.stride,Pt=j.offset;if(nt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<N.locationSize;Tt++)x(N.location+Tt,nt.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Tt=0;Tt<N.locationSize;Tt++)p(N.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,Vt);for(let Tt=0;Tt<N.locationSize;Tt++)b(N.location+Tt,mt/N.locationSize,ee,Q,vt*te,(Pt+mt/N.locationSize*Tt)*te,tt)}else{if(j.isInstancedBufferAttribute){for(let nt=0;nt<N.locationSize;nt++)x(N.location+nt,j.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let nt=0;nt<N.locationSize;nt++)p(N.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Vt);for(let nt=0;nt<N.locationSize;nt++)b(N.location+nt,mt/N.locationSize,ee,Q,mt*te,mt/N.locationSize*nt*te,tt)}}else if(Z!==void 0){const Q=Z[z];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(N.location,Q);break;case 3:s.vertexAttrib3fv(N.location,Q);break;case 4:s.vertexAttrib4fv(N.location,Q);break;default:s.vertexAttrib1fv(N.location,Q)}}}}v()}function T(){M();for(const y in n){const P=n[y];for(const k in P){const U=P[k];for(const W in U)h(U[W].object),delete U[W];delete P[k]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const k in P){const U=P[k];for(const W in U)h(U[W].object),delete U[W];delete P[k]}delete n[y.id]}function C(y){for(const P in n){const k=n[P];if(k[y.id]===void 0)continue;const U=k[y.id];for(const W in U)h(U[W].object),delete U[W];delete k[y.id]}}function M(){_(),o=!0,a!==i&&(a=i,c(a.object))}function _(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:r,reset:M,resetDefaultState:_,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:p,disableUnusedAttributes:v}}function Lm(s,t,e){let n;function i(c){n=c}function a(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function r(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g]*u[g];e.update(m,n,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function Dm(s,t,e,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==Yn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(C){const M=C===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==hi&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==oi&&!M)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&($t("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:p,maxAttributes:x,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:w,vertexTextures:T,maxSamples:S}}function km(s){const t=this;let e=null,n=0,i=!1,a=!1;const o=new ki,r=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,x=s.get(d);if(!i||m===null||m.length===0||a&&!p)a?h(null):c();else{const v=a?0:n,b=v*4;let w=x.clippingState||null;l.value=w,w=h(m,u,b,f);for(let T=0;T!==b;++T)w[T]=e[T];x.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,m!==!0||p===null){const x=f+g*4,v=u.matrixWorldInverse;r.getNormalMatrix(v),(p===null||p.length<x)&&(p=new Float32Array(x));for(let b=0,w=f;b!==g;++b,w+=4)o.copy(d[b]).applyMatrix4(v,r),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Im(s){let t=new WeakMap;function e(o,r){return r===Dr?o.mapping=Os:r===kr&&(o.mapping=zs),o}function n(o){if(o&&o.isTexture){const r=o.mapping;if(r===Dr||r===kr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ju(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const r=o.target;r.removeEventListener("dispose",i);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}const Ui=4,Fc=[.125,.215,.35,.446,.526,.582],Ji=20,Nm=512,na=new Bl,Oc=new Lt;let rr=null,lr=0,cr=0,hr=!1;const Um=new D;class pl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,a={}){const{size:o=256,position:r=Um}=a;rr=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),cr=this._renderer.getActiveMipmapLevel(),hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,r),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(rr,lr,cr),this._renderer.xr.enabled=hr,t.scissorTest=!1,Ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Os||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rr=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),cr=this._renderer.getActiveMipmapLevel(),hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:ci,format:Yn,colorSpace:Bs,depthBuffer:!1},i=zc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zc(t,e,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Fm(a)),this._blurMaterial=zm(a,t,e)}return i}_compileMaterial(t){const e=new Mt(new Re,t);this._renderer.compile(e,na)}_sceneToCubeUV(t,e,n,i,a){const l=new An(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Oc),d.toneMapping=Fi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mt(new Oe,new Ln({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let x=!1;const v=t.background;v?v.isColor&&(p.color.copy(v),t.background=null,x=!0):(p.color.copy(Oc),x=!0);for(let b=0;b<6;b++){const w=b%3;w===0?(l.up.set(0,c[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[b],a.y,a.z)):w===1?(l.up.set(0,0,c[b]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[b],a.z)):(l.up.set(0,c[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[b]));const T=this._cubeSize;Ss(i,w*T,b>2?T:0,T,T),d.setRenderTarget(i),x&&d.render(g,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Os||t.mapping===zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());const a=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=a;const r=a.uniforms;r.envMap.value=t;const l=this._cubeSize;Ss(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,na)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let a=1;a<i;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,a=this._pingPongRenderTarget;if(this._ggxMaterial===null){const v=3*Math.max(this._cubeSize,16),b=4*this._cubeSize;this._ggxMaterial=Om(this._lodMax,v,b)}const o=this._ggxMaterial,r=this._lodMeshes[n];r.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=.05+c*.95,f=d*u,{_lodMax:m}=this,g=this._sizeLods[n],p=3*g*(n>m-Ui?n-m+Ui:0),x=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Ss(a,p,x,3*g,2*g),i.setRenderTarget(a),i.render(r,na),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=m-n,Ss(t,p,x,3*g,2*g),i.setRenderTarget(t),i.render(r,na)}_blur(t,e,n,i,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",a),this._halfBlur(o,t,n,n,i,"longitudinal",a)}_halfBlur(t,e,n,i,a,o,r){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[i];d.material=c;const u=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Ji-1),g=a/m,p=isFinite(a)?1+Math.floor(h*g):Ji;p>Ji&&$t(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ji}`);const x=[];let v=0;for(let C=0;C<Ji;++C){const M=C/g,_=Math.exp(-M*M/2);x.push(_),C===0?v+=_:C<p&&(v+=2*_)}for(let C=0;C<x.length;C++)x[C]=x[C]/v;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=x,u.latitudinal.value=o==="latitudinal",r&&(u.poleAxis.value=r);const{_lodMax:b}=this;u.dTheta.value=m,u.mipInt.value=b-n;const w=this._sizeLods[i],T=3*w*(i>b-Ui?i-b+Ui:0),S=4*(this._cubeSize-w);Ss(e,T,S,3*w,2*w),l.setRenderTarget(e),l.render(d,na)}}function Fm(s){const t=[],e=[],n=[];let i=s;const a=s-Ui+1+Fc.length;for(let o=0;o<a;o++){const r=Math.pow(2,i);t.push(r);let l=1/r;o>s-Ui?l=Fc[o-s+Ui-1]:o===0&&(l=0),e.push(l);const c=1/(r-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,g=3,p=2,x=1,v=new Float32Array(g*m*f),b=new Float32Array(p*m*f),w=new Float32Array(x*m*f);for(let S=0;S<f;S++){const C=S%3*2/3-1,M=S>2?0:-1,_=[C,M,0,C+2/3,M,0,C+2/3,M+1,0,C,M,0,C+2/3,M+1,0,C,M+1,0];v.set(_,g*m*S),b.set(u,p*m*S);const y=[S,S,S,S,S,S];w.set(y,x*m*S)}const T=new Re;T.setAttribute("position",new tn(v,g)),T.setAttribute("uv",new tn(b,p)),T.setAttribute("faceIndex",new tn(w,x)),n.push(new Mt(T,null)),i>Ui&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function zc(s,t,e){const n=new jn(s,t,e);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Om(s,t,e){return new Ve({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function zm(s,t,e){const n=new Float32Array(Ji),i=new D(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Bc(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Vc(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}function Bm(s){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===Dr||l===kr,h=l===Os||l===zs;if(c||h){let d=t.get(r);const u=d!==void 0?d.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==u)return e===null&&(e=new pl(s)),d=c?e.fromEquirectangular(r,d):e.fromCubemap(r,d),d.texture.pmremVersion=r.pmremVersion,t.set(r,d),d.texture;if(d!==void 0)return d.texture;{const f=r.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new pl(s)),d=c?e.fromEquirectangular(r):e.fromCubemap(r),d.texture.pmremVersion=r.pmremVersion,t.set(r,d),r.addEventListener("dispose",a),d.texture):null}}}return r}function i(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function a(r){const l=r.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Vm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ba("WebGLRenderer: "+n+" extension not supported."),i}}}function Hm(s,t,e,n){const i={},a=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete i[u.id];const f=a.get(u);f&&(t.remove(f),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function r(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,m=d.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let b=0,w=v.length;b<w;b+=3){const T=v[b+0],S=v[b+1],C=v[b+2];u.push(T,S,S,C,C,T)}}else if(m!==void 0){const v=m.array;g=m.version;for(let b=0,w=v.length/3-1;b<w;b+=3){const T=b+0,S=b+1,C=b+2;u.push(T,S,S,C,C,T)}}else return;const p=new(Wh(u)?jh:Yh)(u,1);p.version=g;const x=a.get(d);x&&t.remove(x),a.set(d,p)}function h(d){const u=a.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return a.get(d)}return{get:r,update:l,getWireframeAttribute:h}}function Gm(s,t,e){let n;function i(u){n=u}let a,o;function r(u){a=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(n,f,a,u*o),e.update(f,n,1)}function c(u,f,m){m!==0&&(s.drawElementsInstanced(n,f,a,u*o,m),e.update(f,n,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,u,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x];e.update(p,n,1)}function d(u,f,m,g){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<u.length;x++)c(u[x]/o,f[x],g[x]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,a,u,0,g,0,m);let x=0;for(let v=0;v<m;v++)x+=f[v]*g[v];e.update(x,n,1)}}this.setMode=i,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Wm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,r){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=r*(a/3);break;case s.LINES:e.lines+=r*(a/2);break;case s.LINE_STRIP:e.lines+=r*(a-1);break;case s.LINE_LOOP:e.lines+=r*a;break;case s.POINTS:e.points+=r*a;break;default:ze("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function $m(s,t,e){const n=new WeakMap,i=new ve;function a(o,r,l){const c=o.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(r);if(u===void 0||u.count!==d){let y=function(){M.dispose(),n.delete(r),r.removeEventListener("dispose",y)};var f=y;u!==void 0&&u.texture.dispose();const m=r.morphAttributes.position!==void 0,g=r.morphAttributes.normal!==void 0,p=r.morphAttributes.color!==void 0,x=r.morphAttributes.position||[],v=r.morphAttributes.normal||[],b=r.morphAttributes.color||[];let w=0;m===!0&&(w=1),g===!0&&(w=2),p===!0&&(w=3);let T=r.attributes.position.count*w,S=1;T>t.maxTextureSize&&(S=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const C=new Float32Array(T*S*4*d),M=new $h(C,T,S,d);M.type=oi,M.needsUpdate=!0;const _=w*4;for(let P=0;P<d;P++){const k=x[P],U=v[P],W=b[P],H=T*S*4*P;for(let Z=0;Z<k.count;Z++){const z=Z*_;m===!0&&(i.fromBufferAttribute(k,Z),C[H+z+0]=i.x,C[H+z+1]=i.y,C[H+z+2]=i.z,C[H+z+3]=0),g===!0&&(i.fromBufferAttribute(U,Z),C[H+z+4]=i.x,C[H+z+5]=i.y,C[H+z+6]=i.z,C[H+z+7]=0),p===!0&&(i.fromBufferAttribute(W,Z),C[H+z+8]=i.x,C[H+z+9]=i.y,C[H+z+10]=i.z,C[H+z+11]=W.itemSize===4?i.w:1)}}u={count:d,texture:M,size:new st(T,S)},n.set(r,u),r.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const g=r.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:a}}function Xm(s,t,e,n){let i=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:o}}const xd=new rn,Hc=new ed(1,1),gd=new $h,bd=new Uu,vd=new Jh,Gc=[],Wc=[],$c=new Float32Array(16),Xc=new Float32Array(9),qc=new Float32Array(4);function Xs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let a=Gc[i];if(a===void 0&&(a=new Float32Array(i),Gc[i]=a),t!==0){n.toArray(a,0);for(let o=1,r=0;o!==t;++o)r+=e,s[o].toArray(a,r)}return a}function Ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function je(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Po(s,t){let e=Wc[t];e===void 0&&(e=new Int32Array(t),Wc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function qm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ym(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2fv(this.addr,t),je(e,t)}}function jm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;s.uniform3fv(this.addr,t),je(e,t)}}function Zm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4fv(this.addr,t),je(e,t)}}function Km(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Ye(e,n))return;qc.set(n),s.uniformMatrix2fv(this.addr,!1,qc),je(e,n)}}function Jm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Ye(e,n))return;Xc.set(n),s.uniformMatrix3fv(this.addr,!1,Xc),je(e,n)}}function Qm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Ye(e,n))return;$c.set(n),s.uniformMatrix4fv(this.addr,!1,$c),je(e,n)}}function tx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ex(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2iv(this.addr,t),je(e,t)}}function nx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;s.uniform3iv(this.addr,t),je(e,t)}}function ix(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4iv(this.addr,t),je(e,t)}}function sx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ax(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2uiv(this.addr,t),je(e,t)}}function ox(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;s.uniform3uiv(this.addr,t),je(e,t)}}function rx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4uiv(this.addr,t),je(e,t)}}function lx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(Hc.compareFunction=Gh,a=Hc):a=xd,e.setTexture2D(t||a,i)}function cx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||bd,i)}function hx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||vd,i)}function dx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||gd,i)}function ux(s){switch(s){case 5126:return qm;case 35664:return Ym;case 35665:return jm;case 35666:return Zm;case 35674:return Km;case 35675:return Jm;case 35676:return Qm;case 5124:case 35670:return tx;case 35667:case 35671:return ex;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return sx;case 36294:return ax;case 36295:return ox;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return dx}}function fx(s,t){s.uniform1fv(this.addr,t)}function px(s,t){const e=Xs(t,this.size,2);s.uniform2fv(this.addr,e)}function mx(s,t){const e=Xs(t,this.size,3);s.uniform3fv(this.addr,e)}function xx(s,t){const e=Xs(t,this.size,4);s.uniform4fv(this.addr,e)}function gx(s,t){const e=Xs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function bx(s,t){const e=Xs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function vx(s,t){const e=Xs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function _x(s,t){s.uniform1iv(this.addr,t)}function yx(s,t){s.uniform2iv(this.addr,t)}function wx(s,t){s.uniform3iv(this.addr,t)}function Mx(s,t){s.uniform4iv(this.addr,t)}function Sx(s,t){s.uniform1uiv(this.addr,t)}function Tx(s,t){s.uniform2uiv(this.addr,t)}function Ex(s,t){s.uniform3uiv(this.addr,t)}function Ax(s,t){s.uniform4uiv(this.addr,t)}function Cx(s,t,e){const n=this.cache,i=t.length,a=Po(e,i);Ye(n,a)||(s.uniform1iv(this.addr,a),je(n,a));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||xd,a[o])}function Rx(s,t,e){const n=this.cache,i=t.length,a=Po(e,i);Ye(n,a)||(s.uniform1iv(this.addr,a),je(n,a));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||bd,a[o])}function Px(s,t,e){const n=this.cache,i=t.length,a=Po(e,i);Ye(n,a)||(s.uniform1iv(this.addr,a),je(n,a));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||vd,a[o])}function Lx(s,t,e){const n=this.cache,i=t.length,a=Po(e,i);Ye(n,a)||(s.uniform1iv(this.addr,a),je(n,a));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||gd,a[o])}function Dx(s){switch(s){case 5126:return fx;case 35664:return px;case 35665:return mx;case 35666:return xx;case 35674:return gx;case 35675:return bx;case 35676:return vx;case 5124:case 35670:return _x;case 35667:case 35671:return yx;case 35668:case 35672:return wx;case 35669:case 35673:return Mx;case 5125:return Sx;case 36294:return Tx;case 36295:return Ex;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Cx;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Lx}}class kx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ux(e.type)}}class Ix{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dx(e.type)}}class Nx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let a=0,o=i.length;a!==o;++a){const r=i[a];r.setValue(t,e[r.id],n)}}}const dr=/(\w+)(\])?(\[|\.)?/g;function Yc(s,t){s.seq.push(t),s.map[t.id]=t}function Ux(s,t,e){const n=s.name,i=n.length;for(dr.lastIndex=0;;){const a=dr.exec(n),o=dr.lastIndex;let r=a[1];const l=a[2]==="]",c=a[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===i){Yc(e,c===void 0?new kx(r,s,t):new Ix(r,s,t));break}else{let d=e.map[r];d===void 0&&(d=new Nx(r),Yc(e,d)),e=d}}}class fo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=t.getActiveUniform(e,i),o=t.getUniformLocation(e,a.name);Ux(a,o,this)}}setValue(t,e,n,i){const a=this.map[e];a!==void 0&&a.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let a=0,o=e.length;a!==o;++a){const r=e[a],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,a=t.length;i!==a;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function jc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Fx=37297;let Ox=0;function zx(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=i;o<a;o++){const r=o+1;n.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return n.join(`
`)}const Zc=new Zt;function Bx(s){se._getMatrix(Zc,se.workingColorSpace,s);const t=`mat3( ${Zc.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(s)){case vo:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Kc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),a=(s.getShaderInfoLog(t)||"").trim();if(n&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+a+`

`+zx(s.getShaderSource(t),r)}else return a}function Vx(s,t){const e=Bx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Hx(s,t){let e;switch(t){case Rh:e="Linear";break;case Ph:e="Reinhard";break;case Lh:e="Cineon";break;case _l:e="ACESFilmic";break;case kh:e="AgX";break;case Ih:e="Neutral";break;case Dh:e="Custom";break;default:$t("WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Qa=new D;function Gx(){se.getLuminanceCoefficients(Qa);const s=Qa.x.toFixed(4),t=Qa.y.toFixed(4),e=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function $x(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xx(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(t,i),o=a.name;let r=1;a.type===s.FLOAT_MAT2&&(r=2),a.type===s.FLOAT_MAT3&&(r=3),a.type===s.FLOAT_MAT4&&(r=4),e[o]={type:a.type,location:s.getAttribLocation(t,o),locationSize:r}}return e}function oa(s){return s!==""}function Jc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ml(s){return s.replace(qx,jx)}const Yx=new Map;function jx(s,t){let e=Kt[t];if(e===void 0){const n=Yx.get(t);if(n!==void 0)e=Kt[n],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ml(e)}const Zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(s){return s.replace(Zx,Kx)}function Kx(s,t,e,n){let i="";for(let a=parseInt(t);a<parseInt(e);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function eh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ah?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bi&&(t="SHADOWMAP_TYPE_VSM"),t}function Qx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Os:case zs:t="ENVMAP_TYPE_CUBE";break;case To:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tg(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===zs&&(t="ENVMAP_MODE_REFRACTION"),t}function eg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ch:t="ENVMAP_BLENDING_MULTIPLY";break;case tu:t="ENVMAP_BLENDING_MIX";break;case eu:t="ENVMAP_BLENDING_ADD";break}return t}function ng(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ig(s,t,e,n){const i=s.getContext(),a=e.defines;let o=e.vertexShader,r=e.fragmentShader;const l=Jx(e),c=Qx(e),h=tg(e),d=eg(e),u=ng(e),f=Wx(e),m=$x(a),g=i.createProgram();let p,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(oa).join(`
`),p.length>0&&(p+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(oa).join(`
`),x.length>0&&(x+=`
`)):(p=[eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),x=[eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fi?"#define TONE_MAPPING":"",e.toneMapping!==Fi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Fi?Hx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Vx("linearToOutputTexel",e.outputColorSpace),Gx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oa).join(`
`)),o=ml(o),o=Jc(o,e),o=Qc(o,e),r=ml(r),r=Jc(r,e),r=Qc(r,e),o=th(o),r=th(r),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",e.glslVersion===ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=v+p+o,w=v+x+r,T=jc(i,i.VERTEX_SHADER,b),S=jc(i,i.FRAGMENT_SHADER,w);i.attachShader(g,T),i.attachShader(g,S),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function C(P){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(g)||"",U=i.getShaderInfoLog(T)||"",W=i.getShaderInfoLog(S)||"",H=k.trim(),Z=U.trim(),z=W.trim();let N=!0,j=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(N=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,T,S);else{const Q=Kc(i,T,"vertex"),mt=Kc(i,S,"fragment");ze("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+Q+`
`+mt)}else H!==""?$t("WebGLProgram: Program Info Log:",H):(Z===""||z==="")&&(j=!1);j&&(P.diagnostics={runnable:N,programLog:H,vertexShader:{log:Z,prefix:p},fragmentShader:{log:z,prefix:x}})}i.deleteShader(T),i.deleteShader(S),M=new fo(i,g),_=Xx(i,g)}let M;this.getUniforms=function(){return M===void 0&&C(this),M};let _;this.getAttributes=function(){return _===void 0&&C(this),_};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,Fx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ox++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=S,this}let sg=0;class ag{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new og(t),e.set(t,n)),n}}class og{constructor(t){this.id=sg++,this.code=t,this.usedTimes=0}}function rg(s,t,e,n,i,a,o){const r=new Xh,l=new ag,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,y,P,k,U){const W=k.fog,H=U.geometry,Z=_.isMeshStandardMaterial?k.environment:null,z=(_.isMeshStandardMaterial?e:t).get(_.envMap||Z),N=z&&z.mapping===To?z.image.height:null,j=m[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&$t("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const Q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,mt=Q!==void 0?Q.length:0;let Bt=0;H.morphAttributes.position!==void 0&&(Bt=1),H.morphAttributes.normal!==void 0&&(Bt=2),H.morphAttributes.color!==void 0&&(Bt=3);let Vt,ee,te,tt;if(j){const me=si[j];Vt=me.vertexShader,ee=me.fragmentShader}else Vt=_.vertexShader,ee=_.fragmentShader,l.update(_),te=l.getVertexShaderID(_),tt=l.getFragmentShaderID(_);const nt=s.getRenderTarget(),vt=s.state.buffers.depth.getReversed(),Pt=U.isInstancedMesh===!0,Tt=U.isBatchedMesh===!0,jt=!!_.map,he=!!_.matcap,Ft=!!z,at=!!_.aoMap,E=!!_.lightMap,B=!!_.bumpMap,Y=!!_.normalMap,K=!!_.displacementMap,J=!!_.emissiveMap,ct=!!_.metalnessMap,rt=!!_.roughnessMap,xt=_.anisotropy>0,L=_.clearcoat>0,A=_.dispersion>0,V=_.iridescence>0,$=_.sheen>0,it=_.transmission>0,q=xt&&!!_.anisotropyMap,Et=L&&!!_.clearcoatMap,ut=L&&!!_.clearcoatNormalMap,Dt=L&&!!_.clearcoatRoughnessMap,Rt=V&&!!_.iridescenceMap,ot=V&&!!_.iridescenceThicknessMap,dt=$&&!!_.sheenColorMap,Ht=$&&!!_.sheenRoughnessMap,Nt=!!_.specularMap,wt=!!_.specularColorMap,Wt=!!_.specularIntensityMap,I=it&&!!_.transmissionMap,bt=it&&!!_.thicknessMap,ft=!!_.gradientMap,pt=!!_.alphaMap,lt=_.alphaTest>0,et=!!_.alphaHash,At=!!_.extensions;let Xt=Fi;_.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Xt=s.toneMapping);const Se={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:Vt,fragmentShader:ee,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:tt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Tt,batchingColor:Tt&&U._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&U.instanceColor!==null,instancingMorph:Pt&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Bs,alphaToCoverage:!!_.alphaToCoverage,map:jt,matcap:he,envMap:Ft,envMapMode:Ft&&z.mapping,envMapCubeUVHeight:N,aoMap:at,lightMap:E,bumpMap:B,normalMap:Y,displacementMap:u&&K,emissiveMap:J,normalMapObjectSpace:Y&&_.normalMapType===au,normalMapTangentSpace:Y&&_.normalMapType===Hh,metalnessMap:ct,roughnessMap:rt,anisotropy:xt,anisotropyMap:q,clearcoat:L,clearcoatMap:Et,clearcoatNormalMap:ut,clearcoatRoughnessMap:Dt,dispersion:A,iridescence:V,iridescenceMap:Rt,iridescenceThicknessMap:ot,sheen:$,sheenColorMap:dt,sheenRoughnessMap:Ht,specularMap:Nt,specularColorMap:wt,specularIntensityMap:Wt,transmission:it,transmissionMap:I,thicknessMap:bt,gradientMap:ft,opaque:_.transparent===!1&&_.blending===Is&&_.alphaToCoverage===!1,alphaMap:pt,alphaTest:lt,alphaHash:et,combine:_.combine,mapUv:jt&&g(_.map.channel),aoMapUv:at&&g(_.aoMap.channel),lightMapUv:E&&g(_.lightMap.channel),bumpMapUv:B&&g(_.bumpMap.channel),normalMapUv:Y&&g(_.normalMap.channel),displacementMapUv:K&&g(_.displacementMap.channel),emissiveMapUv:J&&g(_.emissiveMap.channel),metalnessMapUv:ct&&g(_.metalnessMap.channel),roughnessMapUv:rt&&g(_.roughnessMap.channel),anisotropyMapUv:q&&g(_.anisotropyMap.channel),clearcoatMapUv:Et&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ut&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&g(_.sheenRoughnessMap.channel),specularMapUv:Nt&&g(_.specularMap.channel),specularColorMapUv:wt&&g(_.specularColorMap.channel),specularIntensityMapUv:Wt&&g(_.specularIntensityMap.channel),transmissionMapUv:I&&g(_.transmissionMap.channel),thicknessMapUv:bt&&g(_.thicknessMap.channel),alphaMapUv:pt&&g(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Y||xt),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(jt||pt),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Bt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xt,decodeVideoTexture:jt&&_.map.isVideoTexture===!0&&se.getTransfer(_.map.colorSpace)===fe,decodeVideoTextureEmissive:J&&_.emissiveMap.isVideoTexture===!0&&se.getTransfer(_.emissiveMap.colorSpace)===fe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Un,flipSided:_.side===pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:At&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&_.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function x(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)y.push(P),y.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(v(y,_),b(y,_),y.push(s.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function v(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function b(_,y){r.disableAll(),y.supportsVertexTextures&&r.enable(0),y.instancing&&r.enable(1),y.instancingColor&&r.enable(2),y.instancingMorph&&r.enable(3),y.matcap&&r.enable(4),y.envMap&&r.enable(5),y.normalMapObjectSpace&&r.enable(6),y.normalMapTangentSpace&&r.enable(7),y.clearcoat&&r.enable(8),y.iridescence&&r.enable(9),y.alphaTest&&r.enable(10),y.vertexColors&&r.enable(11),y.vertexAlphas&&r.enable(12),y.vertexUv1s&&r.enable(13),y.vertexUv2s&&r.enable(14),y.vertexUv3s&&r.enable(15),y.vertexTangents&&r.enable(16),y.anisotropy&&r.enable(17),y.alphaHash&&r.enable(18),y.batching&&r.enable(19),y.dispersion&&r.enable(20),y.batchingColor&&r.enable(21),y.gradientMap&&r.enable(22),_.push(r.mask),r.disableAll(),y.fog&&r.enable(0),y.useFog&&r.enable(1),y.flatShading&&r.enable(2),y.logarithmicDepthBuffer&&r.enable(3),y.reversedDepthBuffer&&r.enable(4),y.skinning&&r.enable(5),y.morphTargets&&r.enable(6),y.morphNormals&&r.enable(7),y.morphColors&&r.enable(8),y.premultipliedAlpha&&r.enable(9),y.shadowMapEnabled&&r.enable(10),y.doubleSided&&r.enable(11),y.flipSided&&r.enable(12),y.useDepthPacking&&r.enable(13),y.dithering&&r.enable(14),y.transmission&&r.enable(15),y.sheen&&r.enable(16),y.opaque&&r.enable(17),y.pointsUvs&&r.enable(18),y.decodeVideoTexture&&r.enable(19),y.decodeVideoTextureEmissive&&r.enable(20),y.alphaToCoverage&&r.enable(21),_.push(r.mask)}function w(_){const y=m[_.type];let P;if(y){const k=si[y];P=_a.clone(k.uniforms)}else P=_.uniforms;return P}function T(_,y){let P;for(let k=0,U=h.length;k<U;k++){const W=h[k];if(W.cacheKey===y){P=W,++P.usedTimes;break}}return P===void 0&&(P=new ig(s,y,_,a),h.push(P)),P}function S(_){if(--_.usedTimes===0){const y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function C(_){l.remove(_)}function M(){l.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:w,acquireProgram:T,releaseProgram:S,releaseShaderCache:C,programs:h,dispose:M}}function lg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let r=s.get(o);return r===void 0&&(r={},s.set(o,r)),r}function n(o){s.delete(o)}function i(o,r,l){s.get(o)[r]=l}function a(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:a}}function cg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function nh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ih(){const s=[];let t=0;const e=[],n=[],i=[];function a(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,m,g,p){let x=s[t];return x===void 0?(x={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:g,group:p},s[t]=x):(x.id=d.id,x.object=d,x.geometry=u,x.material=f,x.groupOrder=m,x.renderOrder=d.renderOrder,x.z=g,x.group=p),t++,x}function r(d,u,f,m,g,p){const x=o(d,u,f,m,g,p);f.transmission>0?n.push(x):f.transparent===!0?i.push(x):e.push(x)}function l(d,u,f,m,g,p){const x=o(d,u,f,m,g,p);f.transmission>0?n.unshift(x):f.transparent===!0?i.unshift(x):e.unshift(x)}function c(d,u){e.length>1&&e.sort(d||cg),n.length>1&&n.sort(u||nh),i.length>1&&i.sort(u||nh)}function h(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:a,push:r,unshift:l,finish:h,sort:c}}function hg(){let s=new WeakMap;function t(n,i){const a=s.get(n);let o;return a===void 0?(o=new ih,s.set(n,[o])):i>=a.length?(o=new ih,a.push(o)):o=a[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function dg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Lt};break;case"SpotLight":e={position:new D,direction:new D,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function ug(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let fg=0;function pg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function mg(s){const t=new dg,e=ug(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,a=new ie,o=new ie;function r(c){let h=0,d=0,u=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let f=0,m=0,g=0,p=0,x=0,v=0,b=0,w=0,T=0,S=0,C=0;c.sort(pg);for(let _=0,y=c.length;_<y;_++){const P=c[_],k=P.color,U=P.intensity,W=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*U,d+=k.g*U,u+=k.b*U;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(P.sh.coefficients[Z],U);C++}else if(P.isDirectionalLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,N=e.get(P);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=Z,f++}else if(P.isSpotLight){const Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(k).multiplyScalar(U),Z.distance=W,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,n.spot[g]=Z;const z=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,z.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[g]=z.matrix,P.castShadow){const N=e.get(P);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,n.spotShadow[g]=N,n.spotShadowMap[g]=H,w++}g++}else if(P.isRectAreaLight){const Z=t.get(P);Z.color.copy(k).multiplyScalar(U),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=Z,p++}else if(P.isPointLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const z=P.shadow,N=e.get(P);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,N.shadowCameraNear=z.camera.near,N.shadowCameraFar=z.camera.far,n.pointShadow[m]=N,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=P.shadow.matrix,b++}n.point[m]=Z,m++}else if(P.isHemisphereLight){const Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(U),Z.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[x]=Z,x++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const M=n.hash;(M.directionalLength!==f||M.pointLength!==m||M.spotLength!==g||M.rectAreaLength!==p||M.hemiLength!==x||M.numDirectionalShadows!==v||M.numPointShadows!==b||M.numSpotShadows!==w||M.numSpotMaps!==T||M.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=p,n.point.length=m,n.hemi.length=x,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=w+T-S,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=C,M.directionalLength=f,M.pointLength=m,M.spotLength=g,M.rectAreaLength=p,M.hemiLength=x,M.numDirectionalShadows=v,M.numPointShadows=b,M.numSpotShadows=w,M.numSpotMaps=T,M.numLightProbes=C,n.version=fg++)}function l(c,h){let d=0,u=0,f=0,m=0,g=0;const p=h.matrixWorldInverse;for(let x=0,v=c.length;x<v;x++){const b=c[x];if(b.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),d++}else if(b.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),f++}else if(b.isRectAreaLight){const w=n.rectArea[m];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),o.identity(),a.copy(b.matrixWorld),a.premultiply(p),o.extractRotation(a),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){const w=n.point[u];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),u++}else if(b.isHemisphereLight){const w=n.hemi[g];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:r,setupView:l,state:n}}function sh(s){const t=new mg(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function r(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:r,setupLightsView:l,pushLight:a,pushShadow:o}}function xg(s){let t=new WeakMap;function e(i,a=0){const o=t.get(i);let r;return o===void 0?(r=new sh(s),t.set(i,[r])):a>=o.length?(r=new sh(s),o.push(r)):r=o[a],r}function n(){t=new WeakMap}return{get:e,dispose:n}}const gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bg=`uniform sampler2D shadow_pass;
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
}`;function vg(s,t,e){let n=new kl;const i=new st,a=new st,o=new ve,r=new Bf({depthPacking:su}),l=new Vf,c={},h=e.maxTextureSize,d={[zi]:pn,[pn]:zi,[Un]:Un},u=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:gg,fragmentShader:bg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new Re;m.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Mt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let x=this.type;this.render=function(S,C,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const _=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),k=s.state;k.setBlending(li),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const U=x!==bi&&this.type===bi,W=x===bi&&this.type!==bi;for(let H=0,Z=S.length;H<Z;H++){const z=S[H],N=z.shadow;if(N===void 0){$t("WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const j=N.getFrameExtents();if(i.multiply(j),a.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/j.x),i.x=a.x*j.x,N.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/j.y),i.y=a.y*j.y,N.mapSize.y=a.y)),N.map===null||U===!0||W===!0){const mt=this.type!==bi?{minFilter:Pn,magFilter:Pn}:{};N.map!==null&&N.map.dispose(),N.map=new jn(i.x,i.y,mt),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();const Q=N.getViewportCount();for(let mt=0;mt<Q;mt++){const Bt=N.getViewport(mt);o.set(a.x*Bt.x,a.y*Bt.y,a.x*Bt.z,a.y*Bt.w),k.viewport(o),N.updateMatrices(z,mt),n=N.getFrustum(),w(C,M,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===bi&&v(N,M),N.needsUpdate=!1}x=this.type,p.needsUpdate=!1,s.setRenderTarget(_,y,P)};function v(S,C){const M=t.update(g);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new jn(i.x,i.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(C,null,M,u,g,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(C,null,M,f,g,null)}function b(S,C,M,_){let y=null;const P=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)y=P;else if(y=M.isPointLight===!0?l:r,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=y.uuid,U=C.uuid;let W=c[k];W===void 0&&(W={},c[k]=W);let H=W[U];H===void 0&&(H=y.clone(),W[U]=H,C.addEventListener("dispose",T)),y=H}if(y.visible=C.visible,y.wireframe=C.wireframe,_===bi?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,M.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=s.properties.get(y);k.light=M}return y}function w(S,C,M,_,y){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===bi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);const U=t.update(S),W=S.material;if(Array.isArray(W)){const H=U.groups;for(let Z=0,z=H.length;Z<z;Z++){const N=H[Z],j=W[N.materialIndex];if(j&&j.visible){const Q=b(S,j,_,y);S.onBeforeShadow(s,S,C,M,U,Q,N),s.renderBufferDirect(M,null,U,Q,S,N),S.onAfterShadow(s,S,C,M,U,Q,N)}}}else if(W.visible){const H=b(S,W,_,y);S.onBeforeShadow(s,S,C,M,U,H,null),s.renderBufferDirect(M,null,U,H,S,null),S.onAfterShadow(s,S,C,M,U,H,null)}}const k=S.children;for(let U=0,W=k.length;U<W;U++)w(k[U],C,M,_,y)}function T(S){S.target.removeEventListener("dispose",T);for(const M in c){const _=c[M],y=S.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}const _g={[Tr]:Er,[Ar]:Pr,[Cr]:Lr,[Fs]:Rr,[Er]:Tr,[Pr]:Ar,[Lr]:Cr,[Rr]:Fs};function yg(s,t){function e(){let I=!1;const bt=new ve;let ft=null;const pt=new ve(0,0,0,0);return{setMask:function(lt){ft!==lt&&!I&&(s.colorMask(lt,lt,lt,lt),ft=lt)},setLocked:function(lt){I=lt},setClear:function(lt,et,At,Xt,Se){Se===!0&&(lt*=Xt,et*=Xt,At*=Xt),bt.set(lt,et,At,Xt),pt.equals(bt)===!1&&(s.clearColor(lt,et,At,Xt),pt.copy(bt))},reset:function(){I=!1,ft=null,pt.set(-1,0,0,0)}}}function n(){let I=!1,bt=!1,ft=null,pt=null,lt=null;return{setReversed:function(et){if(bt!==et){const At=t.get("EXT_clip_control");et?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),bt=et;const Xt=lt;lt=null,this.setClear(Xt)}},getReversed:function(){return bt},setTest:function(et){et?nt(s.DEPTH_TEST):vt(s.DEPTH_TEST)},setMask:function(et){ft!==et&&!I&&(s.depthMask(et),ft=et)},setFunc:function(et){if(bt&&(et=_g[et]),pt!==et){switch(et){case Tr:s.depthFunc(s.NEVER);break;case Er:s.depthFunc(s.ALWAYS);break;case Ar:s.depthFunc(s.LESS);break;case Fs:s.depthFunc(s.LEQUAL);break;case Cr:s.depthFunc(s.EQUAL);break;case Rr:s.depthFunc(s.GEQUAL);break;case Pr:s.depthFunc(s.GREATER);break;case Lr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=et}},setLocked:function(et){I=et},setClear:function(et){lt!==et&&(bt&&(et=1-et),s.clearDepth(et),lt=et)},reset:function(){I=!1,ft=null,pt=null,lt=null,bt=!1}}}function i(){let I=!1,bt=null,ft=null,pt=null,lt=null,et=null,At=null,Xt=null,Se=null;return{setTest:function(me){I||(me?nt(s.STENCIL_TEST):vt(s.STENCIL_TEST))},setMask:function(me){bt!==me&&!I&&(s.stencilMask(me),bt=me)},setFunc:function(me,Zn,Bn){(ft!==me||pt!==Zn||lt!==Bn)&&(s.stencilFunc(me,Zn,Bn),ft=me,pt=Zn,lt=Bn)},setOp:function(me,Zn,Bn){(et!==me||At!==Zn||Xt!==Bn)&&(s.stencilOp(me,Zn,Bn),et=me,At=Zn,Xt=Bn)},setLocked:function(me){I=me},setClear:function(me){Se!==me&&(s.clearStencil(me),Se=me)},reset:function(){I=!1,bt=null,ft=null,pt=null,lt=null,et=null,At=null,Xt=null,Se=null}}}const a=new e,o=new n,r=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],m=null,g=!1,p=null,x=null,v=null,b=null,w=null,T=null,S=null,C=new Lt(0,0,0),M=0,_=!1,y=null,P=null,k=null,U=null,W=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,z=0;const N=s.getParameter(s.VERSION);N.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(N)[1]),Z=z>=1):N.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),Z=z>=2);let j=null,Q={};const mt=s.getParameter(s.SCISSOR_BOX),Bt=s.getParameter(s.VIEWPORT),Vt=new ve().fromArray(mt),ee=new ve().fromArray(Bt);function te(I,bt,ft,pt){const lt=new Uint8Array(4),et=s.createTexture();s.bindTexture(I,et),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let At=0;At<ft;At++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(bt,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(bt+At,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return et}const tt={};tt[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),tt[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),tt[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),r.setClear(0),nt(s.DEPTH_TEST),o.setFunc(Fs),B(!1),Y(Jl),nt(s.CULL_FACE),at(li);function nt(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function vt(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Pt(I,bt){return d[I]!==bt?(s.bindFramebuffer(I,bt),d[I]=bt,I===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=bt),I===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=bt),!0):!1}function Tt(I,bt){let ft=f,pt=!1;if(I){ft=u.get(bt),ft===void 0&&(ft=[],u.set(bt,ft));const lt=I.textures;if(ft.length!==lt.length||ft[0]!==s.COLOR_ATTACHMENT0){for(let et=0,At=lt.length;et<At;et++)ft[et]=s.COLOR_ATTACHMENT0+et;ft.length=lt.length,pt=!0}}else ft[0]!==s.BACK&&(ft[0]=s.BACK,pt=!0);pt&&s.drawBuffers(ft)}function jt(I){return m!==I?(s.useProgram(I),m=I,!0):!1}const he={[Ki]:s.FUNC_ADD,[Fd]:s.FUNC_SUBTRACT,[Od]:s.FUNC_REVERSE_SUBTRACT};he[zd]=s.MIN,he[Bd]=s.MAX;const Ft={[Vd]:s.ZERO,[Hd]:s.ONE,[Gd]:s.SRC_COLOR,[Mr]:s.SRC_ALPHA,[jd]:s.SRC_ALPHA_SATURATE,[qd]:s.DST_COLOR,[$d]:s.DST_ALPHA,[Wd]:s.ONE_MINUS_SRC_COLOR,[Sr]:s.ONE_MINUS_SRC_ALPHA,[Yd]:s.ONE_MINUS_DST_COLOR,[Xd]:s.ONE_MINUS_DST_ALPHA,[Zd]:s.CONSTANT_COLOR,[Kd]:s.ONE_MINUS_CONSTANT_COLOR,[Jd]:s.CONSTANT_ALPHA,[Qd]:s.ONE_MINUS_CONSTANT_ALPHA};function at(I,bt,ft,pt,lt,et,At,Xt,Se,me){if(I===li){g===!0&&(vt(s.BLEND),g=!1);return}if(g===!1&&(nt(s.BLEND),g=!0),I!==Ud){if(I!==p||me!==_){if((x!==Ki||w!==Ki)&&(s.blendEquation(s.FUNC_ADD),x=Ki,w=Ki),me)switch(I){case Is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Us:s.blendFunc(s.ONE,s.ONE);break;case Ql:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ze("WebGLState: Invalid blending: ",I);break}else switch(I){case Is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ql:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tc:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",I);break}v=null,b=null,T=null,S=null,C.set(0,0,0),M=0,p=I,_=me}return}lt=lt||bt,et=et||ft,At=At||pt,(bt!==x||lt!==w)&&(s.blendEquationSeparate(he[bt],he[lt]),x=bt,w=lt),(ft!==v||pt!==b||et!==T||At!==S)&&(s.blendFuncSeparate(Ft[ft],Ft[pt],Ft[et],Ft[At]),v=ft,b=pt,T=et,S=At),(Xt.equals(C)===!1||Se!==M)&&(s.blendColor(Xt.r,Xt.g,Xt.b,Se),C.copy(Xt),M=Se),p=I,_=!1}function E(I,bt){I.side===Un?vt(s.CULL_FACE):nt(s.CULL_FACE);let ft=I.side===pn;bt&&(ft=!ft),B(ft),I.blending===Is&&I.transparent===!1?at(li):at(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),a.setMask(I.colorWrite);const pt=I.stencilWrite;r.setTest(pt),pt&&(r.setMask(I.stencilWriteMask),r.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),r.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),J(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function B(I){y!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),y=I)}function Y(I){I!==Id?(nt(s.CULL_FACE),I!==P&&(I===Jl?s.cullFace(s.BACK):I===Nd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):vt(s.CULL_FACE),P=I}function K(I){I!==k&&(Z&&s.lineWidth(I),k=I)}function J(I,bt,ft){I?(nt(s.POLYGON_OFFSET_FILL),(U!==bt||W!==ft)&&(s.polygonOffset(bt,ft),U=bt,W=ft)):vt(s.POLYGON_OFFSET_FILL)}function ct(I){I?nt(s.SCISSOR_TEST):vt(s.SCISSOR_TEST)}function rt(I){I===void 0&&(I=s.TEXTURE0+H-1),j!==I&&(s.activeTexture(I),j=I)}function xt(I,bt,ft){ft===void 0&&(j===null?ft=s.TEXTURE0+H-1:ft=j);let pt=Q[ft];pt===void 0&&(pt={type:void 0,texture:void 0},Q[ft]=pt),(pt.type!==I||pt.texture!==bt)&&(j!==ft&&(s.activeTexture(ft),j=ft),s.bindTexture(I,bt||tt[I]),pt.type=I,pt.texture=bt)}function L(){const I=Q[j];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function V(){try{s.compressedTexImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function $(){try{s.texSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function it(){try{s.texSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Et(){try{s.compressedTexSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function ut(){try{s.texStorage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Dt(){try{s.texStorage3D(...arguments)}catch(I){I("WebGLState:",I)}}function Rt(){try{s.texImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function ot(){try{s.texImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function dt(I){Vt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Vt.copy(I))}function Ht(I){ee.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),ee.copy(I))}function Nt(I,bt){let ft=c.get(bt);ft===void 0&&(ft=new WeakMap,c.set(bt,ft));let pt=ft.get(I);pt===void 0&&(pt=s.getUniformBlockIndex(bt,I.name),ft.set(I,pt))}function wt(I,bt){const pt=c.get(bt).get(I);l.get(bt)!==pt&&(s.uniformBlockBinding(bt,pt,I.__bindingPointIndex),l.set(bt,pt))}function Wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},j=null,Q={},d={},u=new WeakMap,f=[],m=null,g=!1,p=null,x=null,v=null,b=null,w=null,T=null,S=null,C=new Lt(0,0,0),M=0,_=!1,y=null,P=null,k=null,U=null,W=null,Vt.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),a.reset(),o.reset(),r.reset()}return{buffers:{color:a,depth:o,stencil:r},enable:nt,disable:vt,bindFramebuffer:Pt,drawBuffers:Tt,useProgram:jt,setBlending:at,setMaterial:E,setFlipSided:B,setCullFace:Y,setLineWidth:K,setPolygonOffset:J,setScissorTest:ct,activeTexture:rt,bindTexture:xt,unbindTexture:L,compressedTexImage2D:A,compressedTexImage3D:V,texImage2D:Rt,texImage3D:ot,updateUBOMapping:Nt,uniformBlockBinding:wt,texStorage2D:ut,texStorage3D:Dt,texSubImage2D:$,texSubImage3D:it,compressedTexSubImage2D:q,compressedTexSubImage3D:Et,scissor:dt,viewport:Ht,reset:Wt}}function wg(s,t,e,n,i,a,o){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,A){return f?new OffscreenCanvas(L,A):yo("canvas")}function g(L,A,V){let $=1;const it=xt(L);if((it.width>V||it.height>V)&&($=V/Math.max(it.width,it.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const q=Math.floor($*it.width),Et=Math.floor($*it.height);d===void 0&&(d=m(q,Et));const ut=A?m(q,Et):d;return ut.width=q,ut.height=Et,ut.getContext("2d").drawImage(L,0,0,q,Et),$t("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+q+"x"+Et+")."),ut}else return"data"in L&&$t("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),L;return L}function p(L){return L.generateMipmaps}function x(L){s.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(L,A,V,$,it=!1){if(L!==null){if(s[L]!==void 0)return s[L];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let q=A;if(A===s.RED&&(V===s.FLOAT&&(q=s.R32F),V===s.HALF_FLOAT&&(q=s.R16F),V===s.UNSIGNED_BYTE&&(q=s.R8)),A===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(q=s.R8UI),V===s.UNSIGNED_SHORT&&(q=s.R16UI),V===s.UNSIGNED_INT&&(q=s.R32UI),V===s.BYTE&&(q=s.R8I),V===s.SHORT&&(q=s.R16I),V===s.INT&&(q=s.R32I)),A===s.RG&&(V===s.FLOAT&&(q=s.RG32F),V===s.HALF_FLOAT&&(q=s.RG16F),V===s.UNSIGNED_BYTE&&(q=s.RG8)),A===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(q=s.RG8UI),V===s.UNSIGNED_SHORT&&(q=s.RG16UI),V===s.UNSIGNED_INT&&(q=s.RG32UI),V===s.BYTE&&(q=s.RG8I),V===s.SHORT&&(q=s.RG16I),V===s.INT&&(q=s.RG32I)),A===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(q=s.RGB8UI),V===s.UNSIGNED_SHORT&&(q=s.RGB16UI),V===s.UNSIGNED_INT&&(q=s.RGB32UI),V===s.BYTE&&(q=s.RGB8I),V===s.SHORT&&(q=s.RGB16I),V===s.INT&&(q=s.RGB32I)),A===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),V===s.UNSIGNED_INT&&(q=s.RGBA32UI),V===s.BYTE&&(q=s.RGBA8I),V===s.SHORT&&(q=s.RGBA16I),V===s.INT&&(q=s.RGBA32I)),A===s.RGB&&(V===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),A===s.RGBA){const Et=it?vo:se.getTransfer($);V===s.FLOAT&&(q=s.RGBA32F),V===s.HALF_FLOAT&&(q=s.RGBA16F),V===s.UNSIGNED_BYTE&&(q=Et===fe?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function w(L,A){let V;return L?A===null||A===is||A===ma?V=s.DEPTH24_STENCIL8:A===oi?V=s.DEPTH32F_STENCIL8:A===pa&&(V=s.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===is||A===ma?V=s.DEPTH_COMPONENT24:A===oi?V=s.DEPTH_COMPONENT32F:A===pa&&(V=s.DEPTH_COMPONENT16),V}function T(L,A){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==Pn&&L.minFilter!==On?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function S(L){const A=L.target;A.removeEventListener("dispose",S),M(A),A.isVideoTexture&&h.delete(A)}function C(L){const A=L.target;A.removeEventListener("dispose",C),y(A)}function M(L){const A=n.get(L);if(A.__webglInit===void 0)return;const V=L.source,$=u.get(V);if($){const it=$[A.__cacheKey];it.usedTimes--,it.usedTimes===0&&_(L),Object.keys($).length===0&&u.delete(V)}n.remove(L)}function _(L){const A=n.get(L);s.deleteTexture(A.__webglTexture);const V=L.source,$=u.get(V);delete $[A.__cacheKey],o.memory.textures--}function y(L){const A=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(A.__webglFramebuffer[$]))for(let it=0;it<A.__webglFramebuffer[$].length;it++)s.deleteFramebuffer(A.__webglFramebuffer[$][it]);else s.deleteFramebuffer(A.__webglFramebuffer[$]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[$])}else{if(Array.isArray(A.__webglFramebuffer))for(let $=0;$<A.__webglFramebuffer.length;$++)s.deleteFramebuffer(A.__webglFramebuffer[$]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let $=0;$<A.__webglColorRenderbuffer.length;$++)A.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[$]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const V=L.textures;for(let $=0,it=V.length;$<it;$++){const q=n.get(V[$]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(V[$])}n.remove(L)}let P=0;function k(){P=0}function U(){const L=P;return L>=i.maxTextures&&$t("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),P+=1,L}function W(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function H(L,A){const V=n.get(L);if(L.isVideoTexture&&ct(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&V.__version!==L.version){const $=L.image;if($===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(V,L,A);return}}else L.isExternalTexture&&(V.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+A)}function Z(L,A){const V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){tt(V,L,A);return}else L.isExternalTexture&&(V.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+A)}function z(L,A){const V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){tt(V,L,A);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+A)}function N(L,A){const V=n.get(L);if(L.version>0&&V.__version!==L.version){nt(V,L,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+A)}const j={[bo]:s.REPEAT,[wi]:s.CLAMP_TO_EDGE,[Ir]:s.MIRRORED_REPEAT},Q={[Pn]:s.NEAREST,[nu]:s.NEAREST_MIPMAP_NEAREST,[Ca]:s.NEAREST_MIPMAP_LINEAR,[On]:s.LINEAR,[ko]:s.LINEAR_MIPMAP_NEAREST,[ts]:s.LINEAR_MIPMAP_LINEAR},mt={[ou]:s.NEVER,[uu]:s.ALWAYS,[ru]:s.LESS,[Gh]:s.LEQUAL,[lu]:s.EQUAL,[du]:s.GEQUAL,[cu]:s.GREATER,[hu]:s.NOTEQUAL};function Bt(L,A){if(A.type===oi&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===On||A.magFilter===ko||A.magFilter===Ca||A.magFilter===ts||A.minFilter===On||A.minFilter===ko||A.minFilter===Ca||A.minFilter===ts)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,j[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,j[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,j[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Q[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Q[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,mt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Pn||A.minFilter!==Ca&&A.minFilter!==ts||A.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Vt(L,A){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",S));const $=A.source;let it=u.get($);it===void 0&&(it={},u.set($,it));const q=W(A);if(q!==L.__cacheKey){it[q]===void 0&&(it[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),it[q].usedTimes++;const Et=it[L.__cacheKey];Et!==void 0&&(it[L.__cacheKey].usedTimes--,Et.usedTimes===0&&_(A)),L.__cacheKey=q,L.__webglTexture=it[q].texture}return V}function ee(L,A,V){return Math.floor(Math.floor(L/V)/A)}function te(L,A,V,$){const q=L.updateRanges;if(q.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,V,$,A.data);else{q.sort((ot,dt)=>ot.start-dt.start);let Et=0;for(let ot=1;ot<q.length;ot++){const dt=q[Et],Ht=q[ot],Nt=dt.start+dt.count,wt=ee(Ht.start,A.width,4),Wt=ee(dt.start,A.width,4);Ht.start<=Nt+1&&wt===Wt&&ee(Ht.start+Ht.count-1,A.width,4)===wt?dt.count=Math.max(dt.count,Ht.start+Ht.count-dt.start):(++Et,q[Et]=Ht)}q.length=Et+1;const ut=s.getParameter(s.UNPACK_ROW_LENGTH),Dt=s.getParameter(s.UNPACK_SKIP_PIXELS),Rt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let ot=0,dt=q.length;ot<dt;ot++){const Ht=q[ot],Nt=Math.floor(Ht.start/4),wt=Math.ceil(Ht.count/4),Wt=Nt%A.width,I=Math.floor(Nt/A.width),bt=wt,ft=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),e.texSubImage2D(s.TEXTURE_2D,0,Wt,I,bt,ft,V,$,A.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ut),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Dt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Rt)}}function tt(L,A,V){let $=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&($=s.TEXTURE_3D);const it=Vt(L,A),q=A.source;e.bindTexture($,L.__webglTexture,s.TEXTURE0+V);const Et=n.get(q);if(q.version!==Et.__version||it===!0){e.activeTexture(s.TEXTURE0+V);const ut=se.getPrimaries(se.workingColorSpace),Dt=A.colorSpace===Ni?null:se.getPrimaries(A.colorSpace),Rt=A.colorSpace===Ni||ut===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let ot=g(A.image,!1,i.maxTextureSize);ot=rt(A,ot);const dt=a.convert(A.format,A.colorSpace),Ht=a.convert(A.type);let Nt=b(A.internalFormat,dt,Ht,A.colorSpace,A.isVideoTexture);Bt($,A);let wt;const Wt=A.mipmaps,I=A.isVideoTexture!==!0,bt=Et.__version===void 0||it===!0,ft=q.dataReady,pt=T(A,ot);if(A.isDepthTexture)Nt=w(A.format===ga,A.type),bt&&(I?e.texStorage2D(s.TEXTURE_2D,1,Nt,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,Nt,ot.width,ot.height,0,dt,Ht,null));else if(A.isDataTexture)if(Wt.length>0){I&&bt&&e.texStorage2D(s.TEXTURE_2D,pt,Nt,Wt[0].width,Wt[0].height);for(let lt=0,et=Wt.length;lt<et;lt++)wt=Wt[lt],I?ft&&e.texSubImage2D(s.TEXTURE_2D,lt,0,0,wt.width,wt.height,dt,Ht,wt.data):e.texImage2D(s.TEXTURE_2D,lt,Nt,wt.width,wt.height,0,dt,Ht,wt.data);A.generateMipmaps=!1}else I?(bt&&e.texStorage2D(s.TEXTURE_2D,pt,Nt,ot.width,ot.height),ft&&te(A,ot,dt,Ht)):e.texImage2D(s.TEXTURE_2D,0,Nt,ot.width,ot.height,0,dt,Ht,ot.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){I&&bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,Nt,Wt[0].width,Wt[0].height,ot.depth);for(let lt=0,et=Wt.length;lt<et;lt++)if(wt=Wt[lt],A.format!==Yn)if(dt!==null)if(I){if(ft)if(A.layerUpdates.size>0){const At=Uc(wt.width,wt.height,A.format,A.type);for(const Xt of A.layerUpdates){const Se=wt.data.subarray(Xt*At/wt.data.BYTES_PER_ELEMENT,(Xt+1)*At/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,Xt,wt.width,wt.height,1,dt,Se)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,wt.width,wt.height,ot.depth,dt,wt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,lt,Nt,wt.width,wt.height,ot.depth,0,wt.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ft&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,wt.width,wt.height,ot.depth,dt,Ht,wt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,lt,Nt,wt.width,wt.height,ot.depth,0,dt,Ht,wt.data)}else{I&&bt&&e.texStorage2D(s.TEXTURE_2D,pt,Nt,Wt[0].width,Wt[0].height);for(let lt=0,et=Wt.length;lt<et;lt++)wt=Wt[lt],A.format!==Yn?dt!==null?I?ft&&e.compressedTexSubImage2D(s.TEXTURE_2D,lt,0,0,wt.width,wt.height,dt,wt.data):e.compressedTexImage2D(s.TEXTURE_2D,lt,Nt,wt.width,wt.height,0,wt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ft&&e.texSubImage2D(s.TEXTURE_2D,lt,0,0,wt.width,wt.height,dt,Ht,wt.data):e.texImage2D(s.TEXTURE_2D,lt,Nt,wt.width,wt.height,0,dt,Ht,wt.data)}else if(A.isDataArrayTexture)if(I){if(bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,Nt,ot.width,ot.height,ot.depth),ft)if(A.layerUpdates.size>0){const lt=Uc(ot.width,ot.height,A.format,A.type);for(const et of A.layerUpdates){const At=ot.data.subarray(et*lt/ot.data.BYTES_PER_ELEMENT,(et+1)*lt/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,ot.width,ot.height,1,dt,Ht,At)}A.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,dt,Ht,ot.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,ot.width,ot.height,ot.depth,0,dt,Ht,ot.data);else if(A.isData3DTexture)I?(bt&&e.texStorage3D(s.TEXTURE_3D,pt,Nt,ot.width,ot.height,ot.depth),ft&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,dt,Ht,ot.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,ot.width,ot.height,ot.depth,0,dt,Ht,ot.data);else if(A.isFramebufferTexture){if(bt)if(I)e.texStorage2D(s.TEXTURE_2D,pt,Nt,ot.width,ot.height);else{let lt=ot.width,et=ot.height;for(let At=0;At<pt;At++)e.texImage2D(s.TEXTURE_2D,At,Nt,lt,et,0,dt,Ht,null),lt>>=1,et>>=1}}else if(Wt.length>0){if(I&&bt){const lt=xt(Wt[0]);e.texStorage2D(s.TEXTURE_2D,pt,Nt,lt.width,lt.height)}for(let lt=0,et=Wt.length;lt<et;lt++)wt=Wt[lt],I?ft&&e.texSubImage2D(s.TEXTURE_2D,lt,0,0,dt,Ht,wt):e.texImage2D(s.TEXTURE_2D,lt,Nt,dt,Ht,wt);A.generateMipmaps=!1}else if(I){if(bt){const lt=xt(ot);e.texStorage2D(s.TEXTURE_2D,pt,Nt,lt.width,lt.height)}ft&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,Ht,ot)}else e.texImage2D(s.TEXTURE_2D,0,Nt,dt,Ht,ot);p(A)&&x($),Et.__version=q.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function nt(L,A,V){if(A.image.length!==6)return;const $=Vt(L,A),it=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+V);const q=n.get(it);if(it.version!==q.__version||$===!0){e.activeTexture(s.TEXTURE0+V);const Et=se.getPrimaries(se.workingColorSpace),ut=A.colorSpace===Ni?null:se.getPrimaries(A.colorSpace),Dt=A.colorSpace===Ni||Et===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const Rt=A.isCompressedTexture||A.image[0].isCompressedTexture,ot=A.image[0]&&A.image[0].isDataTexture,dt=[];for(let et=0;et<6;et++)!Rt&&!ot?dt[et]=g(A.image[et],!0,i.maxCubemapSize):dt[et]=ot?A.image[et].image:A.image[et],dt[et]=rt(A,dt[et]);const Ht=dt[0],Nt=a.convert(A.format,A.colorSpace),wt=a.convert(A.type),Wt=b(A.internalFormat,Nt,wt,A.colorSpace),I=A.isVideoTexture!==!0,bt=q.__version===void 0||$===!0,ft=it.dataReady;let pt=T(A,Ht);Bt(s.TEXTURE_CUBE_MAP,A);let lt;if(Rt){I&&bt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Wt,Ht.width,Ht.height);for(let et=0;et<6;et++){lt=dt[et].mipmaps;for(let At=0;At<lt.length;At++){const Xt=lt[At];A.format!==Yn?Nt!==null?I?ft&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,0,0,Xt.width,Xt.height,Nt,Xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,Wt,Xt.width,Xt.height,0,Xt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,0,0,Xt.width,Xt.height,Nt,wt,Xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,Wt,Xt.width,Xt.height,0,Nt,wt,Xt.data)}}}else{if(lt=A.mipmaps,I&&bt){lt.length>0&&pt++;const et=xt(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Wt,et.width,et.height)}for(let et=0;et<6;et++)if(ot){I?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,dt[et].width,dt[et].height,Nt,wt,dt[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Wt,dt[et].width,dt[et].height,0,Nt,wt,dt[et].data);for(let At=0;At<lt.length;At++){const Se=lt[At].image[et].image;I?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,0,0,Se.width,Se.height,Nt,wt,Se.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,Wt,Se.width,Se.height,0,Nt,wt,Se.data)}}else{I?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Nt,wt,dt[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Wt,Nt,wt,dt[et]);for(let At=0;At<lt.length;At++){const Xt=lt[At];I?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,0,0,Nt,wt,Xt.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,Wt,Nt,wt,Xt.image[et])}}}p(A)&&x(s.TEXTURE_CUBE_MAP),q.__version=it.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function vt(L,A,V,$,it,q){const Et=a.convert(V.format,V.colorSpace),ut=a.convert(V.type),Dt=b(V.internalFormat,Et,ut,V.colorSpace),Rt=n.get(A),ot=n.get(V);if(ot.__renderTarget=A,!Rt.__hasExternalTextures){const dt=Math.max(1,A.width>>q),Ht=Math.max(1,A.height>>q);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,q,Dt,dt,Ht,A.depth,0,Et,ut,null):e.texImage2D(it,q,Dt,dt,Ht,0,Et,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),J(A)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,it,ot.__webglTexture,0,K(A)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,it,ot.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(L,A,V){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){const $=A.depthTexture,it=$&&$.isDepthTexture?$.type:null,q=w(A.stencilBuffer,it),Et=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=K(A);J(A)?r.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,q,A.width,A.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,q,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,q,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,L)}else{const $=A.textures;for(let it=0;it<$.length;it++){const q=$[it],Et=a.convert(q.format,q.colorSpace),ut=a.convert(q.type),Dt=b(q.internalFormat,Et,ut,q.colorSpace),Rt=K(A);V&&J(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,Dt,A.width,A.height):J(A)?r.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,Dt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Dt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(A.depthTexture);$.__renderTarget=A,(!$.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),H(A.depthTexture,0);const it=$.__webglTexture,q=K(A);if(A.depthTexture.format===xa)J(A)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0);else if(A.depthTexture.format===ga)J(A)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function jt(L){const A=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const $=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),$){const it=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,$.removeEventListener("dispose",it)};$.addEventListener("dispose",it),A.__depthDisposeCallback=it}A.__boundDepthTexture=$}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const $=L.texture.mipmaps;$&&$.length>0?Tt(A.__webglFramebuffer[0],L):Tt(A.__webglFramebuffer,L)}else if(V){A.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[$]),A.__webglDepthbuffer[$]===void 0)A.__webglDepthbuffer[$]=s.createRenderbuffer(),Pt(A.__webglDepthbuffer[$],L,!1);else{const it=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=A.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,q)}}else{const $=L.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Pt(A.__webglDepthbuffer,L,!1);else{const it=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,q)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function he(L,A,V){const $=n.get(L);A!==void 0&&vt($.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&jt(L)}function Ft(L){const A=L.texture,V=n.get(L),$=n.get(A);L.addEventListener("dispose",C);const it=L.textures,q=L.isWebGLCubeRenderTarget===!0,Et=it.length>1;if(Et||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=A.version,o.memory.textures++),q){V.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(A.mipmaps&&A.mipmaps.length>0){V.__webglFramebuffer[ut]=[];for(let Dt=0;Dt<A.mipmaps.length;Dt++)V.__webglFramebuffer[ut][Dt]=s.createFramebuffer()}else V.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){V.__webglFramebuffer=[];for(let ut=0;ut<A.mipmaps.length;ut++)V.__webglFramebuffer[ut]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Et)for(let ut=0,Dt=it.length;ut<Dt;ut++){const Rt=n.get(it[ut]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&J(L)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ut=0;ut<it.length;ut++){const Dt=it[ut];V.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[ut]);const Rt=a.convert(Dt.format,Dt.colorSpace),ot=a.convert(Dt.type),dt=b(Dt.internalFormat,Rt,ot,Dt.colorSpace,L.isXRRenderTarget===!0),Ht=K(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,dt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,V.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Pt(V.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Bt(s.TEXTURE_CUBE_MAP,A);for(let ut=0;ut<6;ut++)if(A.mipmaps&&A.mipmaps.length>0)for(let Dt=0;Dt<A.mipmaps.length;Dt++)vt(V.__webglFramebuffer[ut][Dt],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt);else vt(V.__webglFramebuffer[ut],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);p(A)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ut=0,Dt=it.length;ut<Dt;ut++){const Rt=it[ut],ot=n.get(Rt);let dt=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(dt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,ot.__webglTexture),Bt(dt,Rt),vt(V.__webglFramebuffer,L,Rt,s.COLOR_ATTACHMENT0+ut,dt,0),p(Rt)&&x(dt)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ut=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,$.__webglTexture),Bt(ut,A),A.mipmaps&&A.mipmaps.length>0)for(let Dt=0;Dt<A.mipmaps.length;Dt++)vt(V.__webglFramebuffer[Dt],L,A,s.COLOR_ATTACHMENT0,ut,Dt);else vt(V.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,ut,0);p(A)&&x(ut),e.unbindTexture()}L.depthBuffer&&jt(L)}function at(L){const A=L.textures;for(let V=0,$=A.length;V<$;V++){const it=A[V];if(p(it)){const q=v(L),Et=n.get(it).__webglTexture;e.bindTexture(q,Et),x(q),e.unbindTexture()}}}const E=[],B=[];function Y(L){if(L.samples>0){if(J(L)===!1){const A=L.textures,V=L.width,$=L.height;let it=s.COLOR_BUFFER_BIT;const q=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(L),ut=A.length>1;if(ut)for(let Rt=0;Rt<A.length;Rt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const Dt=L.texture.mipmaps;Dt&&Dt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Rt=0;Rt<A.length;Rt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[Rt]);const ot=n.get(A[Rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ot,0)}s.blitFramebuffer(0,0,V,$,0,0,V,$,it,s.NEAREST),l===!0&&(E.length=0,B.length=0,E.push(s.COLOR_ATTACHMENT0+Rt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(E.push(q),B.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,E))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let Rt=0;Rt<A.length;Rt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[Rt]);const ot=n.get(A[Rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function K(L){return Math.min(i.maxSamples,L.samples)}function J(L){const A=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ct(L){const A=o.render.frame;h.get(L)!==A&&(h.set(L,A),L.update())}function rt(L,A){const V=L.colorSpace,$=L.format,it=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==Bs&&V!==Ni&&(se.getTransfer(V)===fe?($!==Yn||it!==hi)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",V)),A}function xt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=k,this.setTexture2D=H,this.setTexture2DArray=Z,this.setTexture3D=z,this.setTextureCube=N,this.rebindTextures=he,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=J}function Mg(s,t){function e(n,i=Ni){let a;const o=se.getTransfer(i);if(n===hi)return s.UNSIGNED_BYTE;if(n===wl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ml)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Oh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uh)return s.BYTE;if(n===Fh)return s.SHORT;if(n===pa)return s.UNSIGNED_SHORT;if(n===yl)return s.INT;if(n===is)return s.UNSIGNED_INT;if(n===oi)return s.FLOAT;if(n===ci)return s.HALF_FLOAT;if(n===Bh)return s.ALPHA;if(n===Vh)return s.RGB;if(n===Yn)return s.RGBA;if(n===xa)return s.DEPTH_COMPONENT;if(n===ga)return s.DEPTH_STENCIL;if(n===Sl)return s.RED;if(n===Tl)return s.RED_INTEGER;if(n===El)return s.RG;if(n===Al)return s.RG_INTEGER;if(n===Cl)return s.RGBA_INTEGER;if(n===ro||n===lo||n===co||n===ho)if(o===fe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ro)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ro)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nr||n===Ur||n===Fr||n===Or)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Nr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ur)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Or)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zr||n===Br||n===Vr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===zr||n===Br)return o===fe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Vr)return o===fe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hr||n===Gr||n===Wr||n===$r||n===Xr||n===qr||n===Yr||n===jr||n===Zr||n===Kr||n===Jr||n===Qr||n===tl||n===el)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Hr)return o===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gr)return o===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wr)return o===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$r)return o===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xr)return o===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qr)return o===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yr)return o===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jr)return o===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zr)return o===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kr)return o===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jr)return o===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qr)return o===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return o===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return o===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nl||n===il||n===sl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===nl)return o===fe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===al||n===ol||n===rl||n===ll)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===al)return a.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ma?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Eg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new nd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ve({vertexShader:Sg,fragmentShader:Tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mt(new Qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ag extends as{constructor(t,e){super();const n=this;let i=null,a=1,o=null,r="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null;const g=typeof XRWebGLBinding<"u",p=new Eg,x={},v=e.getContextAttributes();let b=null,w=null;const T=[],S=[],C=new st;let M=null;const _=new An;_.viewport=new ve;const y=new An;y.viewport=new ve;const P=[_,y],k=new $f;let U=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let nt=T[tt];return nt===void 0&&(nt=new tr,T[tt]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(tt){let nt=T[tt];return nt===void 0&&(nt=new tr,T[tt]=nt),nt.getGripSpace()},this.getHand=function(tt){let nt=T[tt];return nt===void 0&&(nt=new tr,T[tt]=nt),nt.getHandSpace()};function H(tt){const nt=S.indexOf(tt.inputSource);if(nt===-1)return;const vt=T[nt];vt!==void 0&&(vt.update(tt.inputSource,tt.frame,c||o),vt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function Z(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",z);for(let tt=0;tt<T.length;tt++){const nt=S[tt];nt!==null&&(S[tt]=null,T[tt].disconnect(nt))}U=null,W=null,p.reset();for(const tt in x)delete x[tt];t.setRenderTarget(b),f=null,u=null,d=null,i=null,w=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){a=tt,n.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){r=tt,n.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(tt){if(i=tt,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(C),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Pt=null,Tt=null;v.depth&&(Tt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=v.stencil?ga:xa,Pt=v.stencil?ma:is);const jt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:a};d=this.getBinding(),u=d.createProjectionLayer(jt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new jn(u.textureWidth,u.textureHeight,{format:Yn,type:hi,depthTexture:new ed(u.textureWidth,u.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const vt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(i,e,vt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new jn(f.framebufferWidth,f.framebufferHeight,{format:Yn,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(r),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function z(tt){for(let nt=0;nt<tt.removed.length;nt++){const vt=tt.removed[nt],Pt=S.indexOf(vt);Pt>=0&&(S[Pt]=null,T[Pt].disconnect(vt))}for(let nt=0;nt<tt.added.length;nt++){const vt=tt.added[nt];let Pt=S.indexOf(vt);if(Pt===-1){for(let jt=0;jt<T.length;jt++)if(jt>=S.length){S.push(vt),Pt=jt;break}else if(S[jt]===null){S[jt]=vt,Pt=jt;break}if(Pt===-1)break}const Tt=T[Pt];Tt&&Tt.connect(vt)}}const N=new D,j=new D;function Q(tt,nt,vt){N.setFromMatrixPosition(nt.matrixWorld),j.setFromMatrixPosition(vt.matrixWorld);const Pt=N.distanceTo(j),Tt=nt.projectionMatrix.elements,jt=vt.projectionMatrix.elements,he=Tt[14]/(Tt[10]-1),Ft=Tt[14]/(Tt[10]+1),at=(Tt[9]+1)/Tt[5],E=(Tt[9]-1)/Tt[5],B=(Tt[8]-1)/Tt[0],Y=(jt[8]+1)/jt[0],K=he*B,J=he*Y,ct=Pt/(-B+Y),rt=ct*-B;if(nt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(rt),tt.translateZ(ct),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Tt[10]===-1)tt.projectionMatrix.copy(nt.projectionMatrix),tt.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const xt=he+ct,L=Ft+ct,A=K-rt,V=J+(Pt-rt),$=at*Ft/L*xt,it=E*Ft/L*xt;tt.projectionMatrix.makePerspective(A,V,$,it,xt,L),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function mt(tt,nt){nt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(nt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(i===null)return;let nt=tt.near,vt=tt.far;p.texture!==null&&(p.depthNear>0&&(nt=p.depthNear),p.depthFar>0&&(vt=p.depthFar)),k.near=y.near=_.near=nt,k.far=y.far=_.far=vt,(U!==k.near||W!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),U=k.near,W=k.far),k.layers.mask=tt.layers.mask|6,_.layers.mask=k.layers.mask&3,y.layers.mask=k.layers.mask&5;const Pt=tt.parent,Tt=k.cameras;mt(k,Pt);for(let jt=0;jt<Tt.length;jt++)mt(Tt[jt],Pt);Tt.length===2?Q(k,_,y):k.projectionMatrix.copy(_.projectionMatrix),Bt(tt,k,Pt)};function Bt(tt,nt,vt){vt===null?tt.matrix.copy(nt.matrixWorld):(tt.matrix.copy(vt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(nt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(nt.projectionMatrix),tt.projectionMatrixInverse.copy(nt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=va*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(tt){l=tt,u!==null&&(u.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(tt){return x[tt]};let Vt=null;function ee(tt,nt){if(h=nt.getViewerPose(c||o),m=nt,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let Pt=!1;vt.length!==k.cameras.length&&(k.cameras.length=0,Pt=!0);for(let Ft=0;Ft<vt.length;Ft++){const at=vt[Ft];let E=null;if(f!==null)E=f.getViewport(at);else{const Y=d.getViewSubImage(u,at);E=Y.viewport,Ft===0&&(t.setRenderTargetTextures(w,Y.colorTexture,Y.depthStencilTexture),t.setRenderTarget(w))}let B=P[Ft];B===void 0&&(B=new An,B.layers.enable(Ft),B.viewport=new ve,P[Ft]=B),B.matrix.fromArray(at.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(at.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(E.x,E.y,E.width,E.height),Ft===0&&(k.matrix.copy(B.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Pt===!0&&k.cameras.push(B)}const Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const Ft=d.getDepthInformation(vt[0]);Ft&&Ft.isValid&&Ft.texture&&p.init(Ft,i.renderState)}if(Tt&&Tt.includes("camera-access")&&g){t.state.unbindTexture(),d=n.getBinding();for(let Ft=0;Ft<vt.length;Ft++){const at=vt[Ft].camera;if(at){let E=x[at];E||(E=new nd,x[at]=E);const B=d.getCameraImage(at);E.sourceTexture=B}}}}for(let vt=0;vt<T.length;vt++){const Pt=S[vt],Tt=T[vt];Pt!==null&&Tt!==void 0&&Tt.update(Pt,nt,c||o)}Vt&&Vt(tt,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}const te=new md;te.setAnimationLoop(ee),this.setAnimationLoop=function(tt){Vt=tt},this.dispose=function(){}}}const qi=new _n,Cg=new ie;function Rg(s,t){function e(p,x){p.matrixAutoUpdate===!0&&p.updateMatrix(),x.value.copy(p.matrix)}function n(p,x){x.color.getRGB(p.fogColor.value,Zh(s)),x.isFog?(p.fogNear.value=x.near,p.fogFar.value=x.far):x.isFogExp2&&(p.fogDensity.value=x.density)}function i(p,x,v,b,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(p,x):x.isMeshToonMaterial?(a(p,x),d(p,x)):x.isMeshPhongMaterial?(a(p,x),h(p,x)):x.isMeshStandardMaterial?(a(p,x),u(p,x),x.isMeshPhysicalMaterial&&f(p,x,w)):x.isMeshMatcapMaterial?(a(p,x),m(p,x)):x.isMeshDepthMaterial?a(p,x):x.isMeshDistanceMaterial?(a(p,x),g(p,x)):x.isMeshNormalMaterial?a(p,x):x.isLineBasicMaterial?(o(p,x),x.isLineDashedMaterial&&r(p,x)):x.isPointsMaterial?l(p,x,v,b):x.isSpriteMaterial?c(p,x):x.isShadowMaterial?(p.color.value.copy(x.color),p.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(p,x){p.opacity.value=x.opacity,x.color&&p.diffuse.value.copy(x.color),x.emissive&&p.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(p.map.value=x.map,e(x.map,p.mapTransform)),x.alphaMap&&(p.alphaMap.value=x.alphaMap,e(x.alphaMap,p.alphaMapTransform)),x.bumpMap&&(p.bumpMap.value=x.bumpMap,e(x.bumpMap,p.bumpMapTransform),p.bumpScale.value=x.bumpScale,x.side===pn&&(p.bumpScale.value*=-1)),x.normalMap&&(p.normalMap.value=x.normalMap,e(x.normalMap,p.normalMapTransform),p.normalScale.value.copy(x.normalScale),x.side===pn&&p.normalScale.value.negate()),x.displacementMap&&(p.displacementMap.value=x.displacementMap,e(x.displacementMap,p.displacementMapTransform),p.displacementScale.value=x.displacementScale,p.displacementBias.value=x.displacementBias),x.emissiveMap&&(p.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,p.emissiveMapTransform)),x.specularMap&&(p.specularMap.value=x.specularMap,e(x.specularMap,p.specularMapTransform)),x.alphaTest>0&&(p.alphaTest.value=x.alphaTest);const v=t.get(x),b=v.envMap,w=v.envMapRotation;b&&(p.envMap.value=b,qi.copy(w),qi.x*=-1,qi.y*=-1,qi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),p.envMapRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(qi)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=x.reflectivity,p.ior.value=x.ior,p.refractionRatio.value=x.refractionRatio),x.lightMap&&(p.lightMap.value=x.lightMap,p.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,p.lightMapTransform)),x.aoMap&&(p.aoMap.value=x.aoMap,p.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,p.aoMapTransform))}function o(p,x){p.diffuse.value.copy(x.color),p.opacity.value=x.opacity,x.map&&(p.map.value=x.map,e(x.map,p.mapTransform))}function r(p,x){p.dashSize.value=x.dashSize,p.totalSize.value=x.dashSize+x.gapSize,p.scale.value=x.scale}function l(p,x,v,b){p.diffuse.value.copy(x.color),p.opacity.value=x.opacity,p.size.value=x.size*v,p.scale.value=b*.5,x.map&&(p.map.value=x.map,e(x.map,p.uvTransform)),x.alphaMap&&(p.alphaMap.value=x.alphaMap,e(x.alphaMap,p.alphaMapTransform)),x.alphaTest>0&&(p.alphaTest.value=x.alphaTest)}function c(p,x){p.diffuse.value.copy(x.color),p.opacity.value=x.opacity,p.rotation.value=x.rotation,x.map&&(p.map.value=x.map,e(x.map,p.mapTransform)),x.alphaMap&&(p.alphaMap.value=x.alphaMap,e(x.alphaMap,p.alphaMapTransform)),x.alphaTest>0&&(p.alphaTest.value=x.alphaTest)}function h(p,x){p.specular.value.copy(x.specular),p.shininess.value=Math.max(x.shininess,1e-4)}function d(p,x){x.gradientMap&&(p.gradientMap.value=x.gradientMap)}function u(p,x){p.metalness.value=x.metalness,x.metalnessMap&&(p.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,p.metalnessMapTransform)),p.roughness.value=x.roughness,x.roughnessMap&&(p.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,p.roughnessMapTransform)),x.envMap&&(p.envMapIntensity.value=x.envMapIntensity)}function f(p,x,v){p.ior.value=x.ior,x.sheen>0&&(p.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),p.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(p.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,p.sheenColorMapTransform)),x.sheenRoughnessMap&&(p.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,p.sheenRoughnessMapTransform))),x.clearcoat>0&&(p.clearcoat.value=x.clearcoat,p.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(p.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,p.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(p.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===pn&&p.clearcoatNormalScale.value.negate())),x.dispersion>0&&(p.dispersion.value=x.dispersion),x.iridescence>0&&(p.iridescence.value=x.iridescence,p.iridescenceIOR.value=x.iridescenceIOR,p.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(p.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,p.iridescenceMapTransform)),x.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),x.transmission>0&&(p.transmission.value=x.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),x.transmissionMap&&(p.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,p.transmissionMapTransform)),p.thickness.value=x.thickness,x.thicknessMap&&(p.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=x.attenuationDistance,p.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(p.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(p.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=x.specularIntensity,p.specularColor.value.copy(x.specularColor),x.specularColorMap&&(p.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,p.specularColorMapTransform)),x.specularIntensityMap&&(p.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,x){x.matcap&&(p.matcap.value=x.matcap)}function g(p,x){const v=t.get(x).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Pg(s,t,e,n){let i={},a={},o=[];const r=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const w=b.program;n.uniformBlockBinding(v,w)}function c(v,b){let w=i[v.id];w===void 0&&(m(v),w=h(v),i[v.id]=w,v.addEventListener("dispose",p));const T=b.program;n.updateUBOMapping(v,T);const S=t.render.frame;a[v.id]!==S&&(u(v),a[v.id]=S)}function h(v){const b=d();v.__bindingPointIndex=b;const w=s.createBuffer(),T=v.__size,S=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,T,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,w),w}function d(){for(let v=0;v<r;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const b=i[v.id],w=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let S=0,C=w.length;S<C;S++){const M=Array.isArray(w[S])?w[S]:[w[S]];for(let _=0,y=M.length;_<y;_++){const P=M[_];if(f(P,S,_,T)===!0){const k=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let H=0;H<U.length;H++){const Z=U[H],z=g(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,k+W,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,W),W+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,b,w,T){const S=v.value,C=b+"_"+w;if(T[C]===void 0)return typeof S=="number"||typeof S=="boolean"?T[C]=S:T[C]=S.clone(),!0;{const M=T[C];if(typeof S=="number"||typeof S=="boolean"){if(M!==S)return T[C]=S,!0}else if(M.equals(S)===!1)return M.copy(S),!0}return!1}function m(v){const b=v.uniforms;let w=0;const T=16;for(let C=0,M=b.length;C<M;C++){const _=Array.isArray(b[C])?b[C]:[b[C]];for(let y=0,P=_.length;y<P;y++){const k=_[y],U=Array.isArray(k.value)?k.value:[k.value];for(let W=0,H=U.length;W<H;W++){const Z=U[W],z=g(Z),N=w%T,j=N%z.boundary,Q=N+j;w+=j,Q!==0&&T-Q<z.storage&&(w+=T-Q),k.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=z.storage}}}const S=w%T;return S>0&&(w+=T-S),v.__size=w,v.__cache={},this}function g(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$t("WebGLRenderer: Unsupported uniform value type.",v),b}function p(v){const b=v.target;b.removeEventListener("dispose",p);const w=o.indexOf(b.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete a[b.id]}function x(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},a={}}return{bind:l,update:c,dispose:x}}const Lg=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let gi=null;function Dg(){return gi===null&&(gi=new td(Lg,32,32,El,ci),gi.minFilter=On,gi.magFilter=On,gi.wrapS=wi,gi.wrapT=wi,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}class kg{constructor(t={}){const{canvas:e=fu(),context:n=null,depth:i=!0,stencil:a=!1,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Set([Cl,Al,Tl]),g=new Set([hi,is,pa,ma,wl,Ml]),p=new Uint32Array(4),x=new Int32Array(4);let v=null,b=null;const w=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let C=!1;this._outputColorSpace=nn;let M=0,_=0,y=null,P=-1,k=null;const U=new ve,W=new ve;let H=null;const Z=new Lt(0);let z=0,N=e.width,j=e.height,Q=1,mt=null,Bt=null;const Vt=new ve(0,0,N,j),ee=new ve(0,0,N,j);let te=!1;const tt=new kl;let nt=!1,vt=!1;const Pt=new ie,Tt=new D,jt=new ve,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function at(){return y===null?Q:1}let E=n;function B(R,F){return e.getContext(R,F)}try{const R={alpha:!0,depth:i,stencil:a,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vl}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",et,!1),e.addEventListener("webglcontextcreationerror",At,!1),E===null){const F="webgl2";if(E=B(F,R),E===null)throw B(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let Y,K,J,ct,rt,xt,L,A,V,$,it,q,Et,ut,Dt,Rt,ot,dt,Ht,Nt,wt,Wt,I,bt;function ft(){Y=new Vm(E),Y.init(),Wt=new Mg(E,Y),K=new Dm(E,Y,t,Wt),J=new yg(E,Y),K.reversedDepthBuffer&&u&&J.buffers.depth.setReversed(!0),ct=new Wm(E),rt=new lg,xt=new wg(E,Y,J,rt,K,Wt,ct),L=new Im(S),A=new Bm(S),V=new Yf(E),I=new Pm(E,V),$=new Hm(E,V,ct,I),it=new Xm(E,$,V,ct),Ht=new $m(E,K,xt),Rt=new km(rt),q=new rg(S,L,A,Y,K,I,Rt),Et=new Rg(S,rt),ut=new hg,Dt=new xg(Y),dt=new Rm(S,L,A,J,it,f,l),ot=new vg(S,it,K),bt=new Pg(E,ct,K,J),Nt=new Lm(E,Y,ct),wt=new Gm(E,Y,ct),ct.programs=q.programs,S.capabilities=K,S.extensions=Y,S.properties=rt,S.renderLists=ut,S.shadowMap=ot,S.state=J,S.info=ct}ft();const pt=new Ag(S,E);this.xr=pt,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const R=Y.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Y.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize(N,j,!1))},this.getSize=function(R){return R.set(N,j)},this.setSize=function(R,F,G=!0){if(pt.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,j=F,e.width=Math.floor(R*Q),e.height=Math.floor(F*Q),G===!0&&(e.style.width=R+"px",e.style.height=F+"px"),this.setViewport(0,0,R,F)},this.getDrawingBufferSize=function(R){return R.set(N*Q,j*Q).floor()},this.setDrawingBufferSize=function(R,F,G){N=R,j=F,Q=G,e.width=Math.floor(R*G),e.height=Math.floor(F*G),this.setViewport(0,0,R,F)},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(Vt)},this.setViewport=function(R,F,G,X){R.isVector4?Vt.set(R.x,R.y,R.z,R.w):Vt.set(R,F,G,X),J.viewport(U.copy(Vt).multiplyScalar(Q).round())},this.getScissor=function(R){return R.copy(ee)},this.setScissor=function(R,F,G,X){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,F,G,X),J.scissor(W.copy(ee).multiplyScalar(Q).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(R){J.setScissorTest(te=R)},this.setOpaqueSort=function(R){mt=R},this.setTransparentSort=function(R){Bt=R},this.getClearColor=function(R){return R.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(R=!0,F=!0,G=!0){let X=0;if(R){let O=!1;if(y!==null){const ht=y.texture.format;O=m.has(ht)}if(O){const ht=y.texture.type,_t=g.has(ht),Ct=dt.getClearColor(),St=dt.getClearAlpha(),Ot=Ct.r,Gt=Ct.g,kt=Ct.b;_t?(p[0]=Ot,p[1]=Gt,p[2]=kt,p[3]=St,E.clearBufferuiv(E.COLOR,0,p)):(x[0]=Ot,x[1]=Gt,x[2]=kt,x[3]=St,E.clearBufferiv(E.COLOR,0,x))}else X|=E.COLOR_BUFFER_BIT}F&&(X|=E.DEPTH_BUFFER_BIT),G&&(X|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",et,!1),e.removeEventListener("webglcontextcreationerror",At,!1),dt.dispose(),ut.dispose(),Dt.dispose(),rt.dispose(),L.dispose(),A.dispose(),it.dispose(),I.dispose(),bt.dispose(),q.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",$l),pt.removeEventListener("sessionend",Xl),Bi.stop()};function lt(R){R.preventDefault(),ac("WebGLRenderer: Context Lost."),C=!0}function et(){ac("WebGLRenderer: Context Restored."),C=!1;const R=ct.autoReset,F=ot.enabled,G=ot.autoUpdate,X=ot.needsUpdate,O=ot.type;ft(),ct.autoReset=R,ot.enabled=F,ot.autoUpdate=G,ot.needsUpdate=X,ot.type=O}function At(R){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Xt(R){const F=R.target;F.removeEventListener("dispose",Xt),Se(F)}function Se(R){me(R),rt.remove(R)}function me(R){const F=rt.get(R).programs;F!==void 0&&(F.forEach(function(G){q.releaseProgram(G)}),R.isShaderMaterial&&q.releaseShaderCache(R))}this.renderBufferDirect=function(R,F,G,X,O,ht){F===null&&(F=he);const _t=O.isMesh&&O.matrixWorld.determinant()<0,Ct=Cd(R,F,G,X,O);J.setMaterial(X,_t);let St=G.index,Ot=1;if(X.wireframe===!0){if(St=$.getWireframeAttribute(G),St===void 0)return;Ot=2}const Gt=G.drawRange,kt=G.attributes.position;let ne=Gt.start*Ot,xe=(Gt.start+Gt.count)*Ot;ht!==null&&(ne=Math.max(ne,ht.start*Ot),xe=Math.min(xe,(ht.start+ht.count)*Ot)),St!==null?(ne=Math.max(ne,0),xe=Math.min(xe,St.count)):kt!=null&&(ne=Math.max(ne,0),xe=Math.min(xe,kt.count));const Ne=xe-ne;if(Ne<0||Ne===1/0)return;I.setup(O,X,Ct,G,St);let Ue,_e=Nt;if(St!==null&&(Ue=V.get(St),_e=wt,_e.setIndex(Ue)),O.isMesh)X.wireframe===!0?(J.setLineWidth(X.wireframeLinewidth*at()),_e.setMode(E.LINES)):_e.setMode(E.TRIANGLES);else if(O.isLine){let It=X.linewidth;It===void 0&&(It=1),J.setLineWidth(It*at()),O.isLineSegments?_e.setMode(E.LINES):O.isLineLoop?_e.setMode(E.LINE_LOOP):_e.setMode(E.LINE_STRIP)}else O.isPoints?_e.setMode(E.POINTS):O.isSprite&&_e.setMode(E.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ba("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))_e.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const It=O._multiDrawStarts,Pe=O._multiDrawCounts,ae=O._multiDrawCount,wn=St?V.get(St).bytesPerElement:1,cs=rt.get(X).currentProgram.getUniforms();for(let Mn=0;Mn<ae;Mn++)cs.setValue(E,"_gl_DrawID",Mn),_e.render(It[Mn]/wn,Pe[Mn])}else if(O.isInstancedMesh)_e.renderInstances(ne,Ne,O.count);else if(G.isInstancedBufferGeometry){const It=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Pe=Math.min(G.instanceCount,It);_e.renderInstances(ne,Ne,Pe)}else _e.render(ne,Ne)};function Zn(R,F,G){R.transparent===!0&&R.side===Un&&R.forceSinglePass===!1?(R.side=pn,R.needsUpdate=!0,Aa(R,F,G),R.side=zi,R.needsUpdate=!0,Aa(R,F,G),R.side=Un):Aa(R,F,G)}this.compile=function(R,F,G=null){G===null&&(G=R),b=Dt.get(G),b.init(F),T.push(b),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(b.pushLight(O),O.castShadow&&b.pushShadow(O))}),R!==G&&R.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(b.pushLight(O),O.castShadow&&b.pushShadow(O))}),b.setupLights();const X=new Set;return R.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ht=O.material;if(ht)if(Array.isArray(ht))for(let _t=0;_t<ht.length;_t++){const Ct=ht[_t];Zn(Ct,G,O),X.add(Ct)}else Zn(ht,G,O),X.add(ht)}),b=T.pop(),X},this.compileAsync=function(R,F,G=null){const X=this.compile(R,F,G);return new Promise(O=>{function ht(){if(X.forEach(function(_t){rt.get(_t).currentProgram.isReady()&&X.delete(_t)}),X.size===0){O(R);return}setTimeout(ht,10)}Y.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Bn=null;function Ad(R){Bn&&Bn(R)}function $l(){Bi.stop()}function Xl(){Bi.start()}const Bi=new md;Bi.setAnimationLoop(Ad),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(R){Bn=R,pt.setAnimationLoop(R),R===null?Bi.stop():Bi.start()},pt.addEventListener("sessionstart",$l),pt.addEventListener("sessionend",Xl),this.render=function(R,F){if(F!==void 0&&F.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(F),F=pt.getCamera()),R.isScene===!0&&R.onBeforeRender(S,R,F,y),b=Dt.get(R,T.length),b.init(F),T.push(b),Pt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),tt.setFromProjectionMatrix(Pt,ri,F.reversedDepth),vt=this.localClippingEnabled,nt=Rt.init(this.clippingPlanes,vt),v=ut.get(R,w.length),v.init(),w.push(v),pt.enabled===!0&&pt.isPresenting===!0){const ht=S.xr.getDepthSensingMesh();ht!==null&&Lo(ht,F,-1/0,S.sortObjects)}Lo(R,F,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(mt,Bt),Ft=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,Ft&&dt.addToRenderList(v,R),this.info.render.frame++,nt===!0&&Rt.beginShadows();const G=b.state.shadowsArray;ot.render(G,R,F),nt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=v.opaque,O=v.transmissive;if(b.setupLights(),F.isArrayCamera){const ht=F.cameras;if(O.length>0)for(let _t=0,Ct=ht.length;_t<Ct;_t++){const St=ht[_t];Yl(X,O,R,St)}Ft&&dt.render(R);for(let _t=0,Ct=ht.length;_t<Ct;_t++){const St=ht[_t];ql(v,R,St,St.viewport)}}else O.length>0&&Yl(X,O,R,F),Ft&&dt.render(R),ql(v,R,F);y!==null&&_===0&&(xt.updateMultisampleRenderTarget(y),xt.updateRenderTargetMipmap(y)),R.isScene===!0&&R.onAfterRender(S,R,F),I.resetDefaultState(),P=-1,k=null,T.pop(),T.length>0?(b=T[T.length-1],nt===!0&&Rt.setGlobalState(S.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?v=w[w.length-1]:v=null};function Lo(R,F,G,X){if(R.visible===!1)return;if(R.layers.test(F.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(F);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||tt.intersectsSprite(R)){X&&jt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Pt);const _t=it.update(R),Ct=R.material;Ct.visible&&v.push(R,_t,Ct,G,jt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||tt.intersectsObject(R))){const _t=it.update(R),Ct=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),jt.copy(R.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),jt.copy(_t.boundingSphere.center)),jt.applyMatrix4(R.matrixWorld).applyMatrix4(Pt)),Array.isArray(Ct)){const St=_t.groups;for(let Ot=0,Gt=St.length;Ot<Gt;Ot++){const kt=St[Ot],ne=Ct[kt.materialIndex];ne&&ne.visible&&v.push(R,_t,ne,G,jt.z,kt)}}else Ct.visible&&v.push(R,_t,Ct,G,jt.z,null)}}const ht=R.children;for(let _t=0,Ct=ht.length;_t<Ct;_t++)Lo(ht[_t],F,G,X)}function ql(R,F,G,X){const{opaque:O,transmissive:ht,transparent:_t}=R;b.setupLightsView(G),nt===!0&&Rt.setGlobalState(S.clippingPlanes,G),X&&J.viewport(U.copy(X)),O.length>0&&Ea(O,F,G),ht.length>0&&Ea(ht,F,G),_t.length>0&&Ea(_t,F,G),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Yl(R,F,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[X.id]===void 0&&(b.state.transmissionRenderTarget[X.id]=new jn(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?ci:hi,minFilter:ts,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const ht=b.state.transmissionRenderTarget[X.id],_t=X.viewport||U;ht.setSize(_t.z*S.transmissionResolutionScale,_t.w*S.transmissionResolutionScale);const Ct=S.getRenderTarget(),St=S.getActiveCubeFace(),Ot=S.getActiveMipmapLevel();S.setRenderTarget(ht),S.getClearColor(Z),z=S.getClearAlpha(),z<1&&S.setClearColor(16777215,.5),S.clear(),Ft&&dt.render(G);const Gt=S.toneMapping;S.toneMapping=Fi;const kt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),b.setupLightsView(X),nt===!0&&Rt.setGlobalState(S.clippingPlanes,X),Ea(R,G,X),xt.updateMultisampleRenderTarget(ht),xt.updateRenderTargetMipmap(ht),Y.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let xe=0,Ne=F.length;xe<Ne;xe++){const Ue=F[xe],{object:_e,geometry:It,material:Pe,group:ae}=Ue;if(Pe.side===Un&&_e.layers.test(X.layers)){const wn=Pe.side;Pe.side=pn,Pe.needsUpdate=!0,jl(_e,G,X,It,Pe,ae),Pe.side=wn,Pe.needsUpdate=!0,ne=!0}}ne===!0&&(xt.updateMultisampleRenderTarget(ht),xt.updateRenderTargetMipmap(ht))}S.setRenderTarget(Ct,St,Ot),S.setClearColor(Z,z),kt!==void 0&&(X.viewport=kt),S.toneMapping=Gt}function Ea(R,F,G){const X=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ht=R.length;O<ht;O++){const _t=R[O],{object:Ct,geometry:St,group:Ot}=_t;let Gt=_t.material;Gt.allowOverride===!0&&X!==null&&(Gt=X),Ct.layers.test(G.layers)&&jl(Ct,F,G,St,Gt,Ot)}}function jl(R,F,G,X,O,ht){R.onBeforeRender(S,F,G,X,O,ht),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),O.onBeforeRender(S,F,G,X,R,ht),O.transparent===!0&&O.side===Un&&O.forceSinglePass===!1?(O.side=pn,O.needsUpdate=!0,S.renderBufferDirect(G,F,X,O,R,ht),O.side=zi,O.needsUpdate=!0,S.renderBufferDirect(G,F,X,O,R,ht),O.side=Un):S.renderBufferDirect(G,F,X,O,R,ht),R.onAfterRender(S,F,G,X,O,ht)}function Aa(R,F,G){F.isScene!==!0&&(F=he);const X=rt.get(R),O=b.state.lights,ht=b.state.shadowsArray,_t=O.state.version,Ct=q.getParameters(R,O.state,ht,F,G),St=q.getProgramCacheKey(Ct);let Ot=X.programs;X.environment=R.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(R.isMeshStandardMaterial?A:L).get(R.envMap||X.environment),X.envMapRotation=X.environment!==null&&R.envMap===null?F.environmentRotation:R.envMapRotation,Ot===void 0&&(R.addEventListener("dispose",Xt),Ot=new Map,X.programs=Ot);let Gt=Ot.get(St);if(Gt!==void 0){if(X.currentProgram===Gt&&X.lightsStateVersion===_t)return Kl(R,Ct),Gt}else Ct.uniforms=q.getUniforms(R),R.onBeforeCompile(Ct,S),Gt=q.acquireProgram(Ct,St),Ot.set(St,Gt),X.uniforms=Ct.uniforms;const kt=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(kt.clippingPlanes=Rt.uniform),Kl(R,Ct),X.needsLights=Pd(R),X.lightsStateVersion=_t,X.needsLights&&(kt.ambientLightColor.value=O.state.ambient,kt.lightProbe.value=O.state.probe,kt.directionalLights.value=O.state.directional,kt.directionalLightShadows.value=O.state.directionalShadow,kt.spotLights.value=O.state.spot,kt.spotLightShadows.value=O.state.spotShadow,kt.rectAreaLights.value=O.state.rectArea,kt.ltc_1.value=O.state.rectAreaLTC1,kt.ltc_2.value=O.state.rectAreaLTC2,kt.pointLights.value=O.state.point,kt.pointLightShadows.value=O.state.pointShadow,kt.hemisphereLights.value=O.state.hemi,kt.directionalShadowMap.value=O.state.directionalShadowMap,kt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,kt.spotShadowMap.value=O.state.spotShadowMap,kt.spotLightMatrix.value=O.state.spotLightMatrix,kt.spotLightMap.value=O.state.spotLightMap,kt.pointShadowMap.value=O.state.pointShadowMap,kt.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Gt,X.uniformsList=null,Gt}function Zl(R){if(R.uniformsList===null){const F=R.currentProgram.getUniforms();R.uniformsList=fo.seqWithValue(F.seq,R.uniforms)}return R.uniformsList}function Kl(R,F){const G=rt.get(R);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Cd(R,F,G,X,O){F.isScene!==!0&&(F=he),xt.resetTextureUnits();const ht=F.fog,_t=X.isMeshStandardMaterial?F.environment:null,Ct=y===null?S.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Bs,St=(X.isMeshStandardMaterial?A:L).get(X.envMap||_t),Ot=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Gt=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),kt=!!G.morphAttributes.position,ne=!!G.morphAttributes.normal,xe=!!G.morphAttributes.color;let Ne=Fi;X.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Ne=S.toneMapping);const Ue=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,_e=Ue!==void 0?Ue.length:0,It=rt.get(X),Pe=b.state.lights;if(nt===!0&&(vt===!0||R!==k)){const ln=R===k&&X.id===P;Rt.setState(X,R,ln)}let ae=!1;X.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Pe.state.version||It.outputColorSpace!==Ct||O.isBatchedMesh&&It.batching===!1||!O.isBatchedMesh&&It.batching===!0||O.isBatchedMesh&&It.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&It.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&It.instancing===!1||!O.isInstancedMesh&&It.instancing===!0||O.isSkinnedMesh&&It.skinning===!1||!O.isSkinnedMesh&&It.skinning===!0||O.isInstancedMesh&&It.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&It.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&It.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&It.instancingMorph===!1&&O.morphTexture!==null||It.envMap!==St||X.fog===!0&&It.fog!==ht||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Rt.numPlanes||It.numIntersection!==Rt.numIntersection)||It.vertexAlphas!==Ot||It.vertexTangents!==Gt||It.morphTargets!==kt||It.morphNormals!==ne||It.morphColors!==xe||It.toneMapping!==Ne||It.morphTargetsCount!==_e)&&(ae=!0):(ae=!0,It.__version=X.version);let wn=It.currentProgram;ae===!0&&(wn=Aa(X,F,O));let cs=!1,Mn=!1,Ys=!1;const Le=wn.getUniforms(),mn=It.uniforms;if(J.useProgram(wn.program)&&(cs=!0,Mn=!0,Ys=!0),X.id!==P&&(P=X.id,Mn=!0),cs||k!==R){J.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Le.setValue(E,"projectionMatrix",R.projectionMatrix),Le.setValue(E,"viewMatrix",R.matrixWorldInverse);const xn=Le.map.cameraPosition;xn!==void 0&&xn.setValue(E,Tt.setFromMatrixPosition(R.matrixWorld)),K.logarithmicDepthBuffer&&Le.setValue(E,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Le.setValue(E,"isOrthographic",R.isOrthographicCamera===!0),k!==R&&(k=R,Mn=!0,Ys=!0)}if(O.isSkinnedMesh){Le.setOptional(E,O,"bindMatrix"),Le.setOptional(E,O,"bindMatrixInverse");const ln=O.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Le.setValue(E,"boneTexture",ln.boneTexture,xt))}O.isBatchedMesh&&(Le.setOptional(E,O,"batchingTexture"),Le.setValue(E,"batchingTexture",O._matricesTexture,xt),Le.setOptional(E,O,"batchingIdTexture"),Le.setValue(E,"batchingIdTexture",O._indirectTexture,xt),Le.setOptional(E,O,"batchingColorTexture"),O._colorsTexture!==null&&Le.setValue(E,"batchingColorTexture",O._colorsTexture,xt));const kn=G.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Ht.update(O,G,wn),(Mn||It.receiveShadow!==O.receiveShadow)&&(It.receiveShadow=O.receiveShadow,Le.setValue(E,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(mn.envMap.value=St,mn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(mn.envMapIntensity.value=F.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=Dg()),Mn&&(Le.setValue(E,"toneMappingExposure",S.toneMappingExposure),It.needsLights&&Rd(mn,Ys),ht&&X.fog===!0&&Et.refreshFogUniforms(mn,ht),Et.refreshMaterialUniforms(mn,X,Q,j,b.state.transmissionRenderTarget[R.id]),fo.upload(E,Zl(It),mn,xt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(fo.upload(E,Zl(It),mn,xt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Le.setValue(E,"center",O.center),Le.setValue(E,"modelViewMatrix",O.modelViewMatrix),Le.setValue(E,"normalMatrix",O.normalMatrix),Le.setValue(E,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const ln=X.uniformsGroups;for(let xn=0,Do=ln.length;xn<Do;xn++){const Vi=ln[xn];bt.update(Vi,wn),bt.bind(Vi,wn)}}return wn}function Rd(R,F){R.ambientLightColor.needsUpdate=F,R.lightProbe.needsUpdate=F,R.directionalLights.needsUpdate=F,R.directionalLightShadows.needsUpdate=F,R.pointLights.needsUpdate=F,R.pointLightShadows.needsUpdate=F,R.spotLights.needsUpdate=F,R.spotLightShadows.needsUpdate=F,R.rectAreaLights.needsUpdate=F,R.hemisphereLights.needsUpdate=F}function Pd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(R,F,G){const X=rt.get(R);X.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),rt.get(R.texture).__webglTexture=F,rt.get(R.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:G,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,F){const G=rt.get(R);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};const Ld=E.createFramebuffer();this.setRenderTarget=function(R,F=0,G=0){y=R,M=F,_=G;let X=!0,O=null,ht=!1,_t=!1;if(R){const St=rt.get(R);if(St.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(E.FRAMEBUFFER,null),X=!1;else if(St.__webglFramebuffer===void 0)xt.setupRenderTarget(R);else if(St.__hasExternalTextures)xt.rebindTextures(R,rt.get(R.texture).__webglTexture,rt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const kt=R.depthTexture;if(St.__boundDepthTexture!==kt){if(kt!==null&&rt.has(kt)&&(R.width!==kt.image.width||R.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");xt.setupDepthRenderbuffer(R)}}const Ot=R.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(_t=!0);const Gt=rt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Gt[F])?O=Gt[F][G]:O=Gt[F],ht=!0):R.samples>0&&xt.useMultisampledRTT(R)===!1?O=rt.get(R).__webglMultisampledFramebuffer:Array.isArray(Gt)?O=Gt[G]:O=Gt,U.copy(R.viewport),W.copy(R.scissor),H=R.scissorTest}else U.copy(Vt).multiplyScalar(Q).floor(),W.copy(ee).multiplyScalar(Q).floor(),H=te;if(G!==0&&(O=Ld),J.bindFramebuffer(E.FRAMEBUFFER,O)&&X&&J.drawBuffers(R,O),J.viewport(U),J.scissor(W),J.setScissorTest(H),ht){const St=rt.get(R.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+F,St.__webglTexture,G)}else if(_t){const St=F;for(let Ot=0;Ot<R.textures.length;Ot++){const Gt=rt.get(R.textures[Ot]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Ot,Gt.__webglTexture,G,St)}}else if(R!==null&&G!==0){const St=rt.get(R.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,St.__webglTexture,G)}P=-1},this.readRenderTargetPixels=function(R,F,G,X,O,ht,_t,Ct=0){if(!(R&&R.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St){J.bindFramebuffer(E.FRAMEBUFFER,St);try{const Ot=R.textures[Ct],Gt=Ot.format,kt=Ot.type;if(!K.textureFormatReadable(Gt)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(kt)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=R.width-X&&G>=0&&G<=R.height-O&&(R.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ct),E.readPixels(F,G,X,O,Wt.convert(Gt),Wt.convert(kt),ht))}finally{const Ot=y!==null?rt.get(y).__webglFramebuffer:null;J.bindFramebuffer(E.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(R,F,G,X,O,ht,_t,Ct=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St)if(F>=0&&F<=R.width-X&&G>=0&&G<=R.height-O){J.bindFramebuffer(E.FRAMEBUFFER,St);const Ot=R.textures[Ct],Gt=Ot.format,kt=Ot.type;if(!K.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,ne),E.bufferData(E.PIXEL_PACK_BUFFER,ht.byteLength,E.STREAM_READ),R.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ct),E.readPixels(F,G,X,O,Wt.convert(Gt),Wt.convert(kt),0);const xe=y!==null?rt.get(y).__webglFramebuffer:null;J.bindFramebuffer(E.FRAMEBUFFER,xe);const Ne=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await pu(E,Ne,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,ne),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,ht),E.deleteBuffer(ne),E.deleteSync(Ne),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,F=null,G=0){const X=Math.pow(2,-G),O=Math.floor(R.image.width*X),ht=Math.floor(R.image.height*X),_t=F!==null?F.x:0,Ct=F!==null?F.y:0;xt.setTexture2D(R,0),E.copyTexSubImage2D(E.TEXTURE_2D,G,0,0,_t,Ct,O,ht),J.unbindTexture()};const Dd=E.createFramebuffer(),kd=E.createFramebuffer();this.copyTextureToTexture=function(R,F,G=null,X=null,O=0,ht=null){ht===null&&(O!==0?(ba("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=O,O=0):ht=0);let _t,Ct,St,Ot,Gt,kt,ne,xe,Ne;const Ue=R.isCompressedTexture?R.mipmaps[ht]:R.image;if(G!==null)_t=G.max.x-G.min.x,Ct=G.max.y-G.min.y,St=G.isBox3?G.max.z-G.min.z:1,Ot=G.min.x,Gt=G.min.y,kt=G.isBox3?G.min.z:0;else{const kn=Math.pow(2,-O);_t=Math.floor(Ue.width*kn),Ct=Math.floor(Ue.height*kn),R.isDataArrayTexture?St=Ue.depth:R.isData3DTexture?St=Math.floor(Ue.depth*kn):St=1,Ot=0,Gt=0,kt=0}X!==null?(ne=X.x,xe=X.y,Ne=X.z):(ne=0,xe=0,Ne=0);const _e=Wt.convert(F.format),It=Wt.convert(F.type);let Pe;F.isData3DTexture?(xt.setTexture3D(F,0),Pe=E.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(xt.setTexture2DArray(F,0),Pe=E.TEXTURE_2D_ARRAY):(xt.setTexture2D(F,0),Pe=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,F.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,F.unpackAlignment);const ae=E.getParameter(E.UNPACK_ROW_LENGTH),wn=E.getParameter(E.UNPACK_IMAGE_HEIGHT),cs=E.getParameter(E.UNPACK_SKIP_PIXELS),Mn=E.getParameter(E.UNPACK_SKIP_ROWS),Ys=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Ue.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ue.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ot),E.pixelStorei(E.UNPACK_SKIP_ROWS,Gt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,kt);const Le=R.isDataArrayTexture||R.isData3DTexture,mn=F.isDataArrayTexture||F.isData3DTexture;if(R.isDepthTexture){const kn=rt.get(R),ln=rt.get(F),xn=rt.get(kn.__renderTarget),Do=rt.get(ln.__renderTarget);J.bindFramebuffer(E.READ_FRAMEBUFFER,xn.__webglFramebuffer),J.bindFramebuffer(E.DRAW_FRAMEBUFFER,Do.__webglFramebuffer);for(let Vi=0;Vi<St;Vi++)Le&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,rt.get(R).__webglTexture,O,kt+Vi),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,rt.get(F).__webglTexture,ht,Ne+Vi)),E.blitFramebuffer(Ot,Gt,_t,Ct,ne,xe,_t,Ct,E.DEPTH_BUFFER_BIT,E.NEAREST);J.bindFramebuffer(E.READ_FRAMEBUFFER,null),J.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(O!==0||R.isRenderTargetTexture||rt.has(R)){const kn=rt.get(R),ln=rt.get(F);J.bindFramebuffer(E.READ_FRAMEBUFFER,Dd),J.bindFramebuffer(E.DRAW_FRAMEBUFFER,kd);for(let xn=0;xn<St;xn++)Le?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,kn.__webglTexture,O,kt+xn):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,kn.__webglTexture,O),mn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ln.__webglTexture,ht,Ne+xn):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,ln.__webglTexture,ht),O!==0?E.blitFramebuffer(Ot,Gt,_t,Ct,ne,xe,_t,Ct,E.COLOR_BUFFER_BIT,E.NEAREST):mn?E.copyTexSubImage3D(Pe,ht,ne,xe,Ne+xn,Ot,Gt,_t,Ct):E.copyTexSubImage2D(Pe,ht,ne,xe,Ot,Gt,_t,Ct);J.bindFramebuffer(E.READ_FRAMEBUFFER,null),J.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else mn?R.isDataTexture||R.isData3DTexture?E.texSubImage3D(Pe,ht,ne,xe,Ne,_t,Ct,St,_e,It,Ue.data):F.isCompressedArrayTexture?E.compressedTexSubImage3D(Pe,ht,ne,xe,Ne,_t,Ct,St,_e,Ue.data):E.texSubImage3D(Pe,ht,ne,xe,Ne,_t,Ct,St,_e,It,Ue):R.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,ht,ne,xe,_t,Ct,_e,It,Ue.data):R.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,ht,ne,xe,Ue.width,Ue.height,_e,Ue.data):E.texSubImage2D(E.TEXTURE_2D,ht,ne,xe,_t,Ct,_e,It,Ue);E.pixelStorei(E.UNPACK_ROW_LENGTH,ae),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,wn),E.pixelStorei(E.UNPACK_SKIP_PIXELS,cs),E.pixelStorei(E.UNPACK_SKIP_ROWS,Mn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ys),ht===0&&F.generateMipmaps&&E.generateMipmap(Pe),J.unbindTexture()},this.initRenderTarget=function(R){rt.get(R).__webglFramebuffer===void 0&&xt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?xt.setTextureCube(R,0):R.isData3DTexture?xt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?xt.setTexture2DArray(R,0):xt.setTexture2D(R,0),J.unbindTexture()},this.resetState=function(){M=0,_=0,y=null,J.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}const po={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class qs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ig=new Bl(-1,1,1,-1,0,1);class Ng extends Re{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}}const Ug=new Ng;class Vl{constructor(t){this._mesh=new Mt(Ug,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ig)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Fg extends qs{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=_a.clone(t.uniforms),this.material=new Ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Vl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ah extends qs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),a=t.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,r;this.inverse?(o=0,r=1):(o=1,r=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),a.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),a.buffers.stencil.setClear(r),a.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(i.EQUAL,1,4294967295),a.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),a.buffers.stencil.setLocked(!0)}}class Og extends qs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class zg{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new st);this._width=n.width,this._height=n.height,e=new jn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ci}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fg(po),this.copyPass.material.blending=li,this.clock=new pd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,a=this.passes.length;i<a;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}ah!==void 0&&(o instanceof ah?n=!0:o instanceof Og&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Bg extends qs{constructor(t,e,n=null,i=null,a=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Lt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(a=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const Vg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Lt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Gs extends qs{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new Lt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new jn(a,o,{type:ci}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new jn(a,o,{type:ci});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new jn(a,o,{type:ci});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),a=Math.round(a/2),o=Math.round(o/2)}const r=Vg;this.highPassUniforms=_a.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ve({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new st(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=_a.clone(po.uniforms),this.blendMaterial=new Ve({uniforms:this.copyUniforms,vertexShader:po.vertexShader,fragmentShader:po.fragmentShader,blending:Us,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Lt,this._oldClearAlpha=1,this._basic=new Ln,this._fsQuad=new Vl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,i),this.renderTargetsVertical[a].setSize(n,i),this.separableBlurMaterials[a].uniforms.invSize.value=new st(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=Gs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Gs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),r=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new Ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;
					}
					gl_FragColor = vec4( diffuseSum, 1.0 );
				}`})}_getCompositeMaterial(t){return new Ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Gs.BlurDirectionX=new st(1,0);Gs.BlurDirectionY=new st(0,1);const to={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Hg extends qs{constructor(){super(),this.uniforms=_a.clone(to.uniforms),this.material=new zf({name:to.name,uniforms:this.uniforms,vertexShader:to.vertexShader,fragmentShader:to.fragmentShader}),this._fsQuad=new Vl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},se.getTransfer(this._outputColorSpace)===fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Rh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ph?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Lh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_l?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ih?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Dh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function yn(s){let t=s>>>0;const e=()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return e.range=(n,i)=>n+e()*(i-n),e.int=(n,i)=>Math.floor(n+e()*(i-n+1)),e.pick=n=>n[Math.floor(e()*n.length)],e.chance=n=>e()<n,e}const Ce=(s,t,e)=>Math.max(t,Math.min(e,s)),we=(s,t,e)=>s+(t-s)*e,xl=s=>s*s*(3-2*s),ye=(s,t,e,n)=>we(s,t,1-Math.exp(-e*n));function Mo(s,t,e,n){let i=(t-s+Math.PI)%(Math.PI*2)-Math.PI;return i<-Math.PI&&(i+=Math.PI*2),s+i*(1-Math.exp(-e*n))}const eo=new ie,oh=new Dn,rh=new _n,Gg=new D,Wg=new D,Yi=new Lt,Pi=new D,no=new D,lh=new Zt,ur={};function $g(s){if(ur[s])return ur[s];let t;switch(s){case"box":t=new Oe(1,1,1);break;case"cyl":t=new en(.5,.5,1,12);break;case"cyl6":t=new en(.5,.5,1,6);break;case"cone":t=new es(.5,1,12);break;case"cone4":t=new es(.7071,1,4,1,!1,Math.PI/4);break;case"sphere":t=new vn(.5,14,10);break;case"blob":t=new Fl(.5,1);break;case"dome":t=new vn(.5,20,10,0,Math.PI*2,0,Math.PI/2);break;case"prism":{const e=new dl;e.moveTo(-.5,0),e.lineTo(.5,0),e.lineTo(0,1),e.lineTo(-.5,0),t=new wo(e,{depth:1,bevelEnabled:!1}),t.translate(0,0,-.5);break}case"wedge":{const e=new dl;e.moveTo(0,0),e.lineTo(1,-.45),e.lineTo(1,-.6),e.lineTo(0,-.12),e.lineTo(0,0),t=new wo(e,{depth:1,bevelEnabled:!1}),t.rotateY(-Math.PI/2),t.translate(.5,0,0);break}case"torus":t=new ai(.5,.08,6,20);break}return t=t.toNonIndexed(),t.computeVertexNormals(),(s==="sphere"||s==="dome"||s==="cyl"||s==="cone"||s==="torus")&&(t=(s==="sphere"?new vn(.5,14,10):s==="dome"?new vn(.5,20,10,0,Math.PI*2,0,Math.PI/2):s==="cyl"?new en(.5,.5,1,12):s==="cone"?new es(.5,1,12):new ai(.5,.08,6,20)).toNonIndexed()),ur[s]=t,t}class Rn{constructor(){this.pos=[],this.nor=[],this.col=[],this.fx=[],this.wall=[]}add(t,e,n,i,a,o,r,l,c={}){const h=typeof t=="string"?$g(t):t;rh.set(c.rx||0,c.ry||0,c.rz||0,"YXZ"),oh.setFromEuler(rh),eo.compose(Gg.set(e,n,i),oh,Wg.set(a,o,r)),c.parent&&eo.premultiply(c.parent),lh.getNormalMatrix(eo),Yi.set(l);const d=c.color2!==void 0?new Lt(c.color2):null,u=h.attributes.position,f=h.attributes.normal,m=c.win||0,g=c.seed||0,p=c.glow||0,x=m&&t==="box";for(let v=0;v<u.count;v++){Pi.fromBufferAttribute(u,v);const b=Pi.y;if(x){const w=f.getX(v),T=f.getZ(v);Math.abs(w)>.5?this.wall.push((Pi.z*Math.sign(w)+.5)*r,r):Math.abs(T)>.5?this.wall.push((-Pi.x*Math.sign(T)+.5)*a,a):this.wall.push(0,0)}else this.wall.push(0,0);if(Pi.applyMatrix4(eo),no.fromBufferAttribute(f,v).applyMatrix3(lh).normalize(),this.pos.push(Pi.x,Pi.y,Pi.z),this.nor.push(no.x,no.y,no.z),d){const w=Ce(b+.5,0,1);this.col.push(we(d.r,Yi.r,w),we(d.g,Yi.g,w),we(d.b,Yi.b,w))}else this.col.push(Yi.r,Yi.g,Yi.b);this.fx.push(m,g,p)}return this}box(t,e,n,i,a,o,r,l){return this.add("box",t,e+a/2,n,i,a,o,r,l)}get empty(){return this.pos.length===0}geometry(){const t=new Re;return t.setAttribute("position",new Qt(this.pos,3)),t.setAttribute("normal",new Qt(this.nor,3)),t.setAttribute("color",new Qt(this.col,3)),t.setAttribute("aFx",new Qt(this.fx,3)),t.setAttribute("aWall",new Qt(this.wall,2)),t.computeBoundingSphere(),t.computeBoundingBox(),t}}function Xg(s,t,e,n){return new ie().compose(new D(s,t,e),new Dn().setFromEuler(new _n(0,n,0)),new D(1,1,1))}const le=12,oe=11,pe=48,Ee=36,qe=-le*pe/2,Fn=-oe*pe/2,Sa=5,_d=6,zt=Fn+oe*pe+14,De=s=>qe+s*pe,Be=s=>Fn+s*pe,We=(s,t)=>[qe+s*pe+pe/2,Fn+t*pe+pe/2],ns={downtown:{name:"Downtown",color:"#e8a35a"},oldtown:{name:"Old Town",color:"#d9776b"},market:{name:"Market District",color:"#e6c25a"},harbor:{name:"Harbor",color:"#5aa6c9"},park:{name:"Park District",color:"#7cbf6a"},arts:{name:"Arts Quarter",color:"#b77fd1"},residential:{name:"Residential Streets",color:"#d39a7a"},tech:{name:"Science & Tech",color:"#7fb5d6"},river:{name:"The Wend (river)",color:"#4f8fb5"}};function zn(s,t){return t===Sa?"river":t<Sa?s<4?"tech":s<8?"downtown":"arts":t>=10&&s>=6?"harbor":s<3?"residential":t>=9?"market":s>=8?"park":"oldtown"}const ii=(s,t)=>s>=0&&t>=0&&s<le&&t<oe&&zn(s,t)==="park",qg={"5,7":"square","1,7":"home","0,8":"garden","2,2":"museum","1,1":"observatory","0,3":"planetarium","9,2":"alley","6,9":"stalls","5,9":"stalls","4,10":"stalls","3,9":"flea","7,10":"fishmarket","10,10":"docks","11,10":"docks","6,2":"plaza"};function Yg(s,t){const e=zn(s,t);return e==="park"||e==="river"?e:qg[`${s},${t}`]||"normal"}function jg(s,t,e,n){const[i,a]=We(s,t),o=Ee/2-1.4,r=(n-.5)*(Ee-6);return e==="n"?[i+r,a-o]:e==="s"?[i+r,a+o]:e==="w"?[i-o,a+r]:[i+o,a+r]}const Zg={n:Math.PI,s:0,e:Math.PI/2,w:-Math.PI/2},Kg=[["home","Pebble's flat","home",1,7,"n",.5,{hours:[0,24],interior:"home"}],["corner_store","Mo's Corner Store","shop",1,7,"e",.3,{hours:[7,23],interior:"shop",sells:["sandwich","apple","soda","instant noodles","notebook","flower seeds","umbrella"]}],["laundromat","Suds & Spin Laundromat","service",2,8,"n",.4,{hours:[6,22],interior:"shop"}],["community_garden","Hollyhock Community Garden","garden",0,8,"e",.5,{hours:[6,21],outdoor:!0,activities:["garden"]}],["apartments","Wren Street Apartments","residence",2,6,"s",.5,{hours:[0,24],interior:"home"}],["clock_tower","Kettle Square Clock Tower","landmark",5,7,"n",.5,{hours:[9,19],climb:!0,outdoor:!0}],["cafe","Kettle Square Cafe","cafe",4,7,"e",.5,{hours:[7,20],interior:"cafe",sells:["flat white","cocoa","cinnamon bun","grilled cheese","tea"],job:{title:"barista",pay:14}}],["bakery","Crumb & Co Bakery","bakery",5,6,"s",.3,{hours:[6,16],interior:"bakery",sells:["sourdough loaf","croissant","pretzel","fruit tart"]}],["bookstore","Dog-Eared Books","bookstore",6,7,"w",.5,{hours:[10,20],interior:"bookstore",sells:["used paperback","field guide to clouds","poetry chapbook","old map"],job:{title:"bookshop clerk",pay:12}}],["antiques","Brass & Dust Antiques","shop",6,8,"n",.5,{hours:[11,18],interior:"shop",sells:["brass compass","music box","old postcard","pocket watch"]}],["library","Lindqvist Public Library","library",4,8,"n",.5,{hours:[9,20],interior:"library",activities:["read"]}],["speakeasy","The Lantern Room","speakeasy",7,8,"w",.15,{hours:[20,2],interior:"speakeasy",hidden:!0,sells:["ginger fizz","hot toddy"]}],["cinema","Starlight Cinema","cinema",5,3,"s",.5,{hours:[12,24],interior:"cinema",sells:["movie ticket","popcorn"]}],["arcade","Pixel Burrow Arcade","arcade",6,3,"s",.5,{hours:[11,24],interior:"arcade",sells:["token cup"],activities:["play"]}],["dept_store","Halvorsen's Department Store","shop",5,2,"e",.5,{hours:[10,21],interior:"shop",sells:["yellow raincoat","striped scarf","bucket hat","round glasses","backpack","skateboard","sketchbook","paint set","ukulele","fishing rod","lamp","rug","houseplant"]}],["noodle_bar","Ramen Ronin","restaurant",7,4,"n",.4,{hours:[11,23],interior:"restaurant",sells:["shoyu ramen","gyoza","iced tea"]}],["rooftop_garden","Skyline Rooftop Garden","rooftop",4,3,"e",.5,{hours:[8,22],climb:!0,outdoor:!0}],["courier","Zip Courier Depot","work",7,2,"w",.5,{hours:[8,19],interior:"shop",job:{title:"delivery runner",pay:15}}],["gallery","Pale Moth Gallery","gallery",8,3,"w",.5,{hours:[10,19],interior:"gallery"}],["theater","Orpheum Theater","theater",10,3,"n",.5,{hours:[17,23],interior:"cinema",sells:["show ticket"]}],["music_hall","Brassworks Music Hall","music",9,1,"s",.5,{hours:[16,24],interior:"cinema",sells:["concert ticket"]}],["studio","Open Studio Co-op","studio",10,2,"w",.5,{hours:[9,22],interior:"studio",activities:["paint","craft"]}],["art_alley","Paintcan Alley","alley",9,2,"s",.5,{hours:[0,24],outdoor:!0,activities:["paint"]}],["museum","Museum of Curious Things","museum",2,2,"e",.5,{hours:[9,18],interior:"gallery",sells:["museum ticket"]}],["observatory","Hilltop Observatory","observatory",1,1,"s",.5,{hours:[18,2],interior:"observatory",activities:["stargaze"],climb:!0}],["planetarium","Planetarium","planetarium",0,3,"e",.5,{hours:[11,22],interior:"cinema",sells:["star show ticket"]}],["workshop","Sprocket Workshop","workshop",3,1,"s",.5,{hours:[9,20],interior:"studio",activities:["craft"]}],["robot_cafe","Bolt & Biscuit Robot Cafe","cafe",3,3,"w",.5,{hours:[8,21],interior:"cafe",sells:["robot latte","gear cookie","oil-free donut"]}],["street_food","Street Food Row","stalls",5,9,"n",.5,{hours:[10,23],outdoor:!0,sells:["dumplings","skewer","mango sticky rice","fish taco"]}],["night_market","Lantern Night Market","stalls",6,9,"n",.5,{hours:[18,2],outdoor:!0,sells:["paper lantern","candied hawthorn","mystery trinket"]}],["flea_market","Sunday Flea Market","stalls",3,9,"n",.5,{hours:[8,17],outdoor:!0,sells:["chipped mug","vinyl record","old camera","board game"]}],["grocer","Greengage Grocer","shop",4,9,"e",.5,{hours:[7,21],interior:"shop",sells:["tomatoes","rice","eggs","fresh herbs","clams"]}],["fish_market","Morning Fish Market","stalls",7,10,"n",.5,{hours:[5,13],outdoor:!0,sells:["clams","mackerel","oysters"]}],["fish_stand","Old Nan's Fish Stand","stalls",9,10,"s",.3,{hours:[10,20],outdoor:!0,sells:["fish and chips","smoked trout"]}],["boat_rental","Bluewater Boat Hire","boats",10,10,"s",.6,{hours:[9,19],outdoor:!0,sells:["boat ride"],activities:["ride","fish"]}],["lighthouse","Gull Point Lighthouse","landmark",11,10,"s",.8,{hours:[9,18],climb:!0,outdoor:!0}],["promenade","Seaside Promenade","promenade",8,10,"s",.5,{hours:[0,24],outdoor:!0,activities:["busk","fish"]}],["park_pond","Mirror Pond","park",9,7,"n",.5,{hours:[0,24],outdoor:!0,activities:["sit","feed ducks"]}],["playground","Acorn Playground","park",8,6,"w",.5,{hours:[7,21],outdoor:!0}],["skatepark","Bowl & Rail Skate Area","park",10,8,"e",.5,{hours:[8,22],outdoor:!0,activities:["skate"]}],["stage","Bandshell Open-Air Stage","park",10,6,"n",.5,{hours:[10,23],outdoor:!0,activities:["busk","watch show"]}],["picnic_lawn","Clover Picnic Lawn","park",8,8,"s",.5,{hours:[6,22],outdoor:!0,activities:["picnic","nap"]}],["tram_stop_n","Tram Stop: Uptown","tram",6,0,"w",0,{hours:[5,24],outdoor:!0,tram:!0}],["tram_stop_c","Tram Stop: Kettle Square","tram",6,7,"w",0,{hours:[5,24],outdoor:!0,tram:!0}],["tram_stop_s","Tram Stop: Harbor","tram",6,10,"w",0,{hours:[5,24],outdoor:!0,tram:!0}],["bike_share","Bike & Scooter Share","rides",3,6,"e",.2,{hours:[0,24],outdoor:!0,sells:["bike rental","scooter rental"]}],["secret_rooftop","The Pigeon Ledge (hidden rooftop)","rooftop",2,9,"e",.7,{hours:[0,24],hidden:!0,climb:!0,outdoor:!0}]],Fe=Kg.map(([s,t,e,n,i,a,o,r])=>{const[l,c]=jg(n,i,a,o);return{id:s,name:t,type:e,i:n,j:i,side:a,t:o,door:[l,c],yaw:Zg[a],district:zn(n,i),hours:[8,20],sells:[],...r}}),Ut=Object.fromEntries(Fe.map(s=>[s.id,s])),yi={sandwich:6,apple:1,soda:2,"instant noodles":2,notebook:4,"flower seeds":3,umbrella:9,"flat white":4,cocoa:4,"cinnamon bun":4,"grilled cheese":7,tea:3,"sourdough loaf":6,croissant:3,pretzel:3,"fruit tart":5,"used paperback":5,"field guide to clouds":12,"poetry chapbook":8,"old map":15,"brass compass":22,"music box":30,"old postcard":2,"pocket watch":40,"ginger fizz":7,"hot toddy":8,"movie ticket":10,popcorn:4,"token cup":5,"yellow raincoat":35,"striped scarf":18,"bucket hat":15,"round glasses":20,backpack:28,skateboard:45,sketchbook:9,"paint set":16,ukulele:50,"fishing rod":30,lamp:25,rug:40,houseplant:14,"shoyu ramen":11,gyoza:6,"iced tea":3,"show ticket":18,"concert ticket":20,"museum ticket":6,"star show ticket":8,"robot latte":5,"gear cookie":3,"oil-free donut":3,dumplings:6,skewer:4,"mango sticky rice":6,"fish taco":5,"paper lantern":8,"candied hawthorn":3,"mystery trinket":6,"chipped mug":2,"vinyl record":12,"old camera":35,"board game":15,tomatoes:3,rice:4,eggs:4,"fresh herbs":2,clams:8,mackerel:7,oysters:12,"fish and chips":9,"smoked trout":10,"boat ride":12,"bike rental":4,"scooter rental":5},ch=new Set(["sandwich","apple","soda","instant noodles","flat white","cocoa","cinnamon bun","grilled cheese","tea","sourdough loaf","croissant","pretzel","fruit tart","ginger fizz","hot toddy","popcorn","shoyu ramen","gyoza","iced tea","robot latte","gear cookie","oil-free donut","dumplings","skewer","mango sticky rice","fish taco","candied hawthorn","fish and chips","smoked trout","oysters"]),mo={"yellow raincoat":"coat","striped scarf":"scarf","bucket hat":"hat","round glasses":"glasses",backpack:"backpack"},hh=new Set(["tomatoes","rice","eggs","fresh herbs","clams","mackerel","instant noodles","sourdough loaf"]);function En(s,t){const[e,n]=s.hours;return e===0&&n===24?!0:n>e?t>=e&&t<n:t>=e||t<n}const Jg=(s,t,e=0)=>yn(s*7919+t*104729+e*31337+17),Ge={oldtown:["#e9c99a","#e7b48f","#d98c76","#f0dcb4","#c9d3a8","#e8a46c","#d7b8d0","#b8cfd8","#f2d27e"],roofOld:["#b5523b","#a4472f","#c0663f","#6c5a68","#8a4b3a"],residential:["#b5654a","#a65a44","#c47f5a","#d9b48c","#8f5b48","#c9a27e","#e0c9a6","#9b6a52"],downtown:["#c7d2d6","#a9b8bf","#d6c7ad","#8ea1ad","#e1d6c2","#b4a089","#7f9aa8","#cfb79a"],tech:["#e9eef0","#d8e2e6","#f2f2ee","#c9d9de","#bfd7d2"],arts:["#e86f5a","#f2b23e","#5fb3a1","#7b6fd0","#e46aa0","#4e8fd1","#f0e2c0","#3f9c6d"],market:["#f0c98e","#e7a77c","#d8d0a8","#f2e2c4","#c9876a"],harbor:["#7d9aa8","#b56a4c","#8f8b7e","#5f7f8c","#c4a072","#9a5b4a"],awning:["#c0392b","#2e86ab","#27ae60","#f39c12","#8e44ad","#16a085","#d35400","#e84393"],neon:["#ff4f9a","#4ff0ff","#ffd23f","#7cff6b","#ff7a3d","#b38cff"]},yd=[];function ia(s,t,e,n,i,a,o,r,l={}){const c=Xg(t,0,e,n),h=r(),d=(g,p,x,v,b,w,T,S,C={})=>s.add(g,p,x,v,b,w,T,S,{...C,parent:c,seed:C.seed??h}),u=(g,p,x,v,b,w,T,S={})=>d("box",g,p+b/2,x,v,b,w,T,S),f=a/2;let m=0;switch(o){case"oldtown":{const g=l.floors||r.int(2,4);m=g*3.3+.6;const p=r.pick(Ge.oldtown);u(0,0,0,i,m,a,p,{win:2}),u(0,0,0,i+.12,.7,a+.12,"#8f8274");for(let v=1;v<=g;v++)u(0,v*3.3+.2,0,i+.18,.18,a+.18,"#f4ecdc");u(0,m-.1,0,i+.5,.35,a+.5,"#efe3cf");const x=r.pick(Ge.roofOld);if(r()<.75){const v=r.range(2.2,3.6);d("prism",0,m+.25,0,i+.6,v,a+.6,x,{ry:Math.PI/2*(r()<.5,0),rz:0}),i>6&&r()<.6&&(u(0,m+.3,f*.35,1.6,1.5,1.8,p),d("prism",0,m+1.8,f*.35,2,.9,2,x,{ry:Math.PI/2}),u(0,m+.7,f*.35+.92,.8,.8,.05,"#2b3a4a"))}else d("cone4",0,m+.25+1.4,0,i+.5,2.8,a+.5,x);if(r()<.7&&u(r.range(-i/3,i/3),m,-a/4,.7,r.range(3,4.5),.7,"#8b5a44"),r()<.5){u(0,3.55,f+.45,Math.min(i-1,3.4),.12,.9,"#d8cfc0");for(let v=-6;v<=6;v++)Math.abs(v*.26)<Math.min(i-1,3.4)/2&&u(v*.26,3.67,f+.86,.04,.9,.04,"#2a2a2a");u(0,4.55,f+.86,Math.min(i-1,3.4),.05,.06,"#2a2a2a")}io(d,i,f,r,l),l.sign!==!1&&r()<.55&&Qg(d,u,i,f,r);break}case"residential":{const g=l.floors||r.int(2,5);m=g*3.3+.5;const p=r.pick(Ge.residential);u(0,0,0,i,m,a,p,{win:1}),u(0,0,0,i+.1,.9,a+.1,"#7a6a5e"),u(0,m-.3,0,i+.35,.4,a+.35,"#e2d6c4"),g<=3&&r()<.5?d("prism",0,m+.1,0,i+.6,r.range(2,3.2),a+.5,r.pick(["#5b4f58","#6d4436","#455a64","#7b3f2f"])):(u(0,m,0,i,.6,a,p),u(0,m+.6,0,i+.2,.12,a+.2,"#d8ccb8"),fr(u,d,i,a,m,r));const x=Math.min(2.6,i*.4);for(let v=1;v<g;v++)if(r()<.55){const b=r.pick([-i/4,i/4,0]);u(b,v*3.3+.3,f+.55,x,.14,1.1,"#cfc4b4"),u(b,v*3.3+.44,f+1.07,x,.9,.05,r()<.5?"#2e2e2e":"#e8e0d0"),r()<.6&&d("blob",b-x/3,v*3.3+.9,f+.75,.6,.6,.6,"#5a9a45"),r()<.3&&u(b+x/3,v*3.3+.44,f+.7,.5,.7,.4,r.pick(Ge.awning))}u(0,0,f+.6,1.8,.35,1.2,"#a59a8c"),u(0,0,f+.3,1.8,.7,.6,"#a59a8c"),l.shop&&io(d,i,f,r,l);break}case"downtown":{const g=r.range(5,8.5),p=r.pick(Ge.downtown),x=r.pick(Ge.downtown);u(0,0,0,i,g,a,x,{win:1}),u(0,g,0,i+.3,.4,a+.3,"#e8e2d6"),m=l.height||r.range(20,58);const v=i-r.range(1,3),b=a-r.range(1,3),w=r()<.5,T=r.pick(["#6f8fa3","#5f8f8a","#8a7a62","#4f6f8f","#7a8fa8","#6a7f96","#94806a"]);let S=g+.4;const C=r.int(1,3);let M=v,_=b;for(let P=0;P<C;P++){const k=(m-S)/(C-P)*(P===C-1?1:r.range(.6,.9));if(u(0,S,0,M,k,_,w?T:p,{win:w?3:1}),!w&&r()<.5)for(const U of[-1,1])u(U*M/2,S,_/2,.4,k,.4,"#e9e4da");S+=k,u(0,S,0,M+.4,.5,_+.4,w?"#cfd8dc":"#e9e4da"),S+=.5,M*=r.range(.7,.88),_*=r.range(.7,.88)}m=S;const y=r();if(y<.22?(d("cone4",0,m+M*.3,0,M*.95,M*.6,_*.95,r.pick(["#5f9e8a","#3f5566","#b5523b","#c9a24a"])),m+=M*.6):y<.4?(u(0,m,0,M*.6,3,_*.6,w?T:p,{win:1}),u(0,m+3,0,M*.35,2.5,_*.35,"#e9e4da"),d("cone",0,m+9.5,0,.6,8,.6,"#d9d9d9"),m+=5.5):y<.55?(d("cyl",0,m+1.5,0,Math.min(M,_)*.8,3,Math.min(M,_)*.8,"#e9e4da",{}),u(0,m+3,0,M*.9,.2,_*.9,"#cfd8dc")):fr(u,d,M/.8,_/.8,m,r,!0),r()<.4&&(u(0,m,0,.15,r.range(4,10),.15,"#8a8f95"),d("sphere",0,m+10.2,0,.35,.35,.35,"#ff3b3b",{glow:1.6})),r()<.55){const P=r.range(6,14);u(i/2-.6,P,f+.7,.25,r.range(4,7),1,r.pick(Ge.neon),{glow:1.4+r()*.3})}u(0,3.75,f+.12,i*.8,.7,.2,r.pick(Ge.neon),{glow:1.2}),io(d,i,f,r,{...l,flat:!0});break}case"tech":{const g=l.floors||r.int(3,9),p=r.pick(Ge.tech);let x=0;for(let v=0;v<g;v++){const b=v%2===0||v===0;u(0,x,0,i,3.3,a,b?p:"#86b4c6",{win:b?1:3}),x+=3.3}if(m=x,u(0,m,0,i+.6,.35,a+.6,"#f4f6f6"),r()<.5)for(const v of[-1,1])d("cyl",v*i/2,m/2,f,1.2,m,1.2,"#dfe8ea",{win:0});for(let v=0;v<Math.floor(i/2.2);v++)u(-i/2+1.2+v*2.2,m+.4,0,1.8,.08,a*.6,"#27466b",{rx:.3});r()<.4&&d("dome",i/4,m+.35,-a/4,1.6,.8,1.6,"#f0f0f0"),u(0,3.6,f+.1,i*.6,.45,.12,"#4ff0ff",{glow:1.1});break}case"arts":{const g=l.floors||r.int(2,5);m=g*3.6+.4;const p=r.pick(Ge.arts);u(0,0,0,i,m,a,p,{win:1}),u(0,m-.2,0,i+.3,.3,a+.3,"#2b2b2b");const x=[r.pick(Ge.arts),r.pick(Ge.arts),r.pick(Ge.neon)];for(const v of[-1,1])for(let b=0;b<4;b++){const w=r.range(1.2,3.5),T=r.range(.8,m-w-.5);u(v*(i/2+.02),T,r.range(-a/3,a/3),.04,w,r.range(1.5,a*.6),x[b%3])}if(r()<.5)for(let v=0;v<Math.floor(a/3);v++)d("wedge",0,m+1.4,-a/2+1.5+v*3,i,3,3,"#5e6a70",{ry:Math.PI});else fr(u,d,i,a,m,r);if(u(0,3.7,f+.15,i*.7,.5,.15,r.pick(Ge.neon),{glow:1.6}),g>=3)for(let v=1;v<g;v++)u(-i/4,v*3.6,f+.6,2.4,.08,1.2,"#2a2a2a"),u(-i/4,v*3.6+.08,f+1.18,2.4,.9,.04,"#2a2a2a");break}case"market":{m=(l.floors||r.int(1,2))*3.6+.4;const p=r.pick(Ge.market);u(0,0,0,i,m,a,p,{win:1}),u(0,m,0,i+.4,.5,a+.4,"#8a5a3a"),d("prism",0,m+.5,0,i+.6,1.8,a+.6,r.pick(Ge.roofOld)),io(d,i,f,r,{...l,deep:!0});for(let x=0;x<Math.floor(i/.8);x++)d("sphere",-i/2+.4+x*.8,3-Math.sin(x/Math.floor(i/.8)*Math.PI)*.3,f+2.2,.14,.14,.14,r.pick(["#ffcf6a","#ff8a5a","#fff2b0"]),{glow:1});break}case"harbor":{m=r.range(6,10);const g=r.pick(Ge.harbor);u(0,0,0,i,m,a,g,{win:0});for(let p=0;p<Math.floor(i/.7);p++)u(-i/2+.35+p*.7,0,f+.03,.18,m,.06,g,{seed:0});d("prism",0,m,0,i+.4,2.2,a+.4,"#6f6a62"),u(0,0,f+.06,i*.45,m*.6,.1,"#4b4038"),u(0,m*.75,f+.12,i*.6,.8,.12,"#f0e2c0",{glow:0});for(const p of[-1,1])u(p*i*.32,m*.55,f+.12,1.4,1,.08,"#ffd27a",{glow:.8});break}case"house":{m=6.8;const g=l.color||r.pick(["#e7d3a9","#bfd6c8","#e9b9a0","#c8d4e8"]);u(0,0,0,i,m,a,g,{win:1}),u(0,0,0,i+.1,.6,a+.1,"#857565"),d("prism",0,m,0,i+.8,3,a+.8,l.roof||"#3f6e75"),u(0,0,f+.06,1.2,2.4,.12,l.door||"#2e8b8b"),d("sphere",0,m+1,f+.4,.9,.9,.1,"#ffe2a8",{glow:.7}),u(-i/3,0,f+1.4,.06,1,.06,"#e8e0d0"),u(0,.95,f+1.4,i,.08,.06,"#f4efe6"),u(i/3,0,a/2-1.5,.7,m+2.6,.7,"#8b5a44");break}}return yd.push({cx:t,cz:e,yaw:n,w:i,d:a,h:m+2.5,r:Math.hypot(i,a)/2}),{H:m}}function io(s,t,e,n,i){if(i.noAwning||n()>(i.deep?1:.7))return;const a=i.awning||n.pick(Ge.awning),o=Math.min(t-.6,n.range(3,7)),r=i.deep?2.2:1.4;if(i.flat){s("box",0,3.1,e+r/2,o,.12,r,a);return}const l=Math.max(3,Math.round(o/.5));for(let c=0;c<l;c++)s("wedge",-o/2+(c+.5)*o/l,3.5,e+r/2-.1,o/l,r*1.4,r,c%2?a:"#f5efe2")}function Qg(s,t,e,n,i){const a=i()<.5?-e/2+.9:e/2-.9;t(a,4.3,n+.5,.06,.06,1,"#2a2a2a"),t(a,3.5,n+.75,.08,.8,.8,i.pick(["#c8a24a","#7a3b2e","#2f5a4a","#22384d"]),{glow:i()<.3?.5:0})}function fr(s,t,e,n,i,a,o){if(a()<.6){const r=a.range(-e/4,e/4),l=a.range(-n/4,n/4);for(const[c,h]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])s(r+c,i,l+h,.12,1.4,.12,"#4a3a2c");t("cyl",r,i+2.4,l,2,2,2,"#9b7653"),t("cone",r,i+3.75,l,2.2,.7,2.2,"#5a4a3a")}for(let r=0;r<(o?4:2);r++)a()<.7&&s(a.range(-e/3,e/3),i,a.range(-n/3,n/3),1.2,.9,1,"#9aa0a6");if(a()<.3)for(let r=0;r<4;r++)t("blob",a.range(-e/3,e/3),i+.5,a.range(-n/3,n/3),1.2,.9,1.2,"#5c9645")}const t1=new Qe(1,1);function e1(s,t="#f5e6c8",e="#2b2420",n=4.4){const i=document.createElement("canvas");i.width=512,i.height=112;const a=i.getContext("2d");a.fillStyle=e,a.fillRect(0,0,512,112),a.strokeStyle=t,a.globalAlpha=.6,a.lineWidth=4,a.strokeRect(8,8,496,96),a.globalAlpha=1,a.fillStyle=t,a.textAlign="center",a.textBaseline="middle";let o=54;for(a.font=`600 ${o}px Georgia, 'Times New Roman', serif`;a.measureText(s).width>470&&o>18;)o-=2,a.font=`600 ${o}px Georgia, serif`;a.fillText(s,256,58);const r=new ls(i);r.colorSpace=nn,r.anisotropy=4;const l=new Me({map:r,emissiveMap:r,emissive:new Lt("#ffffff"),emissiveIntensity:.25,roughness:.7});l.userData.sign=!0;const c=new Mt(t1,l);return c.scale.set(n,n*112/512,1),c}const ce={uTime:{value:0},uNight:{value:0},uLit:{value:.3},uWet:{value:0},uSnow:{value:0}},wd=`
float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
`;function n1(){const s=new Me({vertexColors:!0,roughness:.82,metalness:0});return s.onBeforeCompile=t=>{Object.assign(t.uniforms,ce),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aFx; attribute vec2 aWall; varying vec3 vFx; varying vec2 vWall; varying vec3 vWPos; varying vec3 vWNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFx = aFx; vWall = aWall;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vec4 wp4 = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
wp4 = instanceMatrix * wp4;
#endif
vWPos = (modelMatrix * wp4).xyz; vWNormal = normalize(mat3(modelMatrix) * objectNormal);`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform float uNight; uniform float uLit; uniform float uWet; uniform float uSnow;
varying vec3 vFx; varying vec2 vWall; varying vec3 vWPos; varying vec3 vWNormal;
${wd}`).replace("#include <color_fragment>",`#include <color_fragment>
float fxRough = -1.0; vec3 fxEmit = vec3(0.0);
{
  float mode = floor(vFx.x + 0.5); float seed = floor(vFx.y * 997.0 + 0.5) / 997.0;
  // subtle grime / AO toward the ground and per-building tint variation
  float ao = mix(0.72, 1.0, smoothstep(0.0, 2.2, vWPos.y));
  diffuseColor.rgb *= ao;
  if (mode > 0.5 && vWall.y > 0.8) {
    float cw = mode > 2.5 ? 1.6 : (mode > 1.5 ? 2.3 : 2.7);
    float n = max(1.0, floor(vWall.y / cw));
    float cx = vWall.x / vWall.y * n;
    float fh = 3.3;
    float cy = (vWPos.y - 0.25) / fh;
    vec2 cell = vec2(floor(cx), floor(cy));
    vec2 f = vec2(fract(cx), fract(cy));
    bool ground = vWPos.y < 3.55 && mode < 2.5;
    vec2 lo = vec2(0.24, 0.27), hi = vec2(0.76, 0.84);
    if (mode > 2.5) { lo = vec2(0.05, 0.1); hi = vec2(0.95, 0.96); }
    else if (mode > 1.5) { lo = vec2(0.32, 0.2); hi = vec2(0.68, 0.84); }
    float hs = h21(cell + floor(seed * 97.0));
    bool door = false;
    if (ground) {
      if (hs < 0.72) { lo = vec2(0.08, 0.14); hi = vec2(0.92, 0.86); }
      else { lo = vec2(0.33, 0.0); hi = vec2(0.67, 0.76); door = true; }
    }
    vec2 inR = step(lo, f) * step(f, hi);
    float inside = inR.x * inR.y;
    vec2 lo2 = lo - 0.045, hi2 = hi + 0.045;
    vec2 inF = step(lo2, f) * step(f, hi2);
    float frameM = inF.x * inF.y * (1.0 - inside);
    // window ledges
    float sill = step(lo.y - 0.09, f.y) * step(f.y, lo.y - 0.03) * step(lo.x - 0.07, f.x) * step(f.x, hi.x + 0.07);
    if (mode > 1.5 && mode < 2.5 && !ground) {
      // painted shutters on Old Town buildings
      float sh = (step(lo.x - 0.17, f.x) * step(f.x, lo.x - 0.02) + step(hi.x + 0.02, f.x) * step(f.x, hi.x + 0.17)) * step(lo.y, f.y) * step(f.y, hi.y);
      vec3 shc = mix(vec3(0.27,0.45,0.38), vec3(0.55,0.25,0.22), step(0.5, fract(seed*7.31)));
      shc = mix(shc, vec3(0.25,0.36,0.55), step(0.75, fract(seed*3.17)));
      // (seed is quantised so interpolation noise can't flip the hashes)
      shc *= 0.85 + 0.15 * step(0.5, fract(f.y * 9.0));
      diffuseColor.rgb = mix(diffuseColor.rgb, shc, sh);
      // flower boxes under some windows
      if (h21(cell + floor(seed * 41.0)) > 0.6) {
        float fb = step(lo.y - 0.14, f.y) * step(f.y, lo.y - 0.02) * step(lo.x, f.x) * step(f.x, hi.x);
        vec3 flw = mix(vec3(0.85,0.2,0.3), vec3(0.95,0.75,0.2), step(0.5, h21(floor(f*vec2(14.0, 3.0)) + cell)));
        diffuseColor.rgb = mix(diffuseColor.rgb, mix(vec3(0.25,0.45,0.2), flw, step(0.55, h21(floor(f*vec2(22.0, 6.0)) + cell*3.1))), fb);
      }
    }
    diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.55, frameM);
    diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.18 + 0.04, sill * (1.0 - inside));
    if (inside > 0.5) {
      if (door) {
        diffuseColor.rgb = mix(vec3(0.32,0.2,0.12), vec3(0.18,0.24,0.3), step(0.5, fract(seed*5.3)));
        fxRough = 0.6;
        fxEmit = vec3(1.0, 0.75, 0.45) * 0.25 * uNight * step(f.y, 0.7) * step(0.6, f.y);
      } else {
        vec3 sky = mix(vec3(0.16, 0.2, 0.27), vec3(0.55, 0.64, 0.72), smoothstep(lo.y, hi.y, f.y));
        sky = mix(sky, vec3(0.04,0.05,0.09), uNight * 0.85);
        // mullions
        float mul = 0.0;
        if (mode < 2.5) mul = step(abs(f.x - 0.5), 0.012) + step(abs(f.y - mix(lo.y, hi.y, 0.62)), 0.012);
        diffuseColor.rgb = mix(sky * (0.8 + 0.4 * hs), diffuseColor.rgb * 0.5, clamp(mul, 0.0, 1.0));
        fxRough = 0.12;
        float h2 = h21(cell * 1.7 + floor(seed * 53.0));
        float lit = step(h2, ground ? uLit * 1.4 + 0.15 : uLit);
        vec3 warm = mix(vec3(1.0, 0.62, 0.3), vec3(1.0, 0.85, 0.55), h21(cell + 9.0 + floor(seed * 31.0)));
        warm = mix(warm, vec3(0.45, 0.65, 1.0), step(0.93, h21(cell + 2.3)));
        float grad = mix(0.75, 1.1, smoothstep(lo.y, hi.y, f.y));
        float curtain = mode > 2.5 ? 0.75 : 1.0;
        fxEmit = warm * lit * grad * curtain * (1.0 - clamp(mul,0.0,1.0)) * mix(0.0, 1.05, uNight);
        // daytime: lit shop interiors still visible a bit
        if (ground) fxEmit += warm * 0.08 * (1.0 - uNight);
      }
    }
  }
  float glow = vFx.z;
  if (glow > 0.0) {
    float flick = 1.0;
    if (glow > 1.5) flick = 0.55 + 0.45 * step(0.12, fract(sin(floor(uTime * 9.0) + seed * 91.7) * 43758.5)) * (0.85 + 0.15 * sin(uTime * 40.0 + seed));
    float dayLvl = glow > 1.0 ? 0.45 : 0.03;
    fxEmit += diffuseColor.rgb * mix(dayLvl, glow > 1.0 ? 1.0 : 1.4, uNight) * flick * (glow > 1.0 ? 1.0 : glow);
  }
  // snow settling on upward faces
  float up = smoothstep(0.6, 0.95, vWNormal.y);
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.93, 0.95, 1.0), up * uSnow * 0.9);
}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
if (fxRough >= 0.0) roughnessFactor = fxRough;
roughnessFactor = mix(roughnessFactor, roughnessFactor * 0.55, uWet * step(0.5, vWNormal.y));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += fxEmit;`)},s.customProgramCacheKey=()=>"facade1",s}function Kn(s,t={}){const e=new Me({map:s,roughness:t.roughness??.9,metalness:0,...t.extra});return e.onBeforeCompile=n=>{Object.assign(n.uniforms,ce),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWP = (modelMatrix * vec4(transformed,1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uWet; uniform float uSnow; uniform float uTime; varying vec3 vWP;
${wd}
float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }`).replace("#include <map_fragment>",`#include <map_fragment>
float puddle = smoothstep(0.55, 0.7, vnoise(vWP.xz * 0.22) * 0.7 + vnoise(vWP.xz * 0.9) * 0.3);
float wetAmt = uWet * (0.55 + 0.45 * puddle);
diffuseColor.rgb *= 1.0 - 0.38 * wetAmt;
float snowN = vnoise(vWP.xz * 0.5);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.93, 0.98), clamp(uSnow * (0.75 + 0.35 * snowN), 0.0, 1.0) * ${t.road?"0.75":"0.95"});`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.06, wetAmt * puddle + wetAmt * 0.3);
roughnessFactor = mix(roughnessFactor, 0.85, uSnow);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
if (uWet > 0.01) { float rip = sin(length(fract(vWP.xz*0.7)-0.5)*40.0 - uTime*8.0) * 0.02 * puddle * uWet; normal = normalize(normal + vec3(rip, 0.0, rip)); }`)},e.customProgramCacheKey=()=>"ground"+(t.road?"r":""),e}const i1={lamp(s){s.add("cyl",0,.15,0,.32,.3,.32,"#2d3a3a"),s.add("cyl",0,2.2,0,.12,4.2,.12,"#2f3d3c"),s.add("box",.45,4.25,0,1,.08,.08,"#2f3d3c"),s.add("cone4",.9,4.1,0,.42,.35,.42,"#2f3d3c",{rx:Math.PI}),s.add("sphere",.9,3.98,0,.26,.2,.26,"#ffd9a0",{glow:1})},tree(s){s.add("box",0,.25,0,1.4,.5,1.4,"#8d7f70"),s.add("box",0,.48,0,1.2,.06,1.2,"#4b3a2a"),s.add("cyl",0,1.6,0,.22,2.4,.22,"#6b4f36"),s.add("blob",0,3.6,0,2.6,2.2,2.6,"#5f9a48",{color2:"#3f7334"}),s.add("blob",.6,4.4,.3,1.8,1.6,1.8,"#79b257",{color2:"#4f8a3c"}),s.add("blob",-.5,4.2,-.4,1.6,1.5,1.6,"#6aa64f")},treeRound(s){s.add("cyl",0,1.3,0,.35,2.6,.35,"#6b4f36"),s.add("blob",0,4,0,4.2,3.6,4.2,"#5c9645",{color2:"#3a6d30"}),s.add("blob",1,5,.6,2.8,2.4,2.8,"#76b055"),s.add("blob",-1,4.6,-.7,2.6,2.3,2.6,"#69a54d"),s.add("blob",.2,5.6,-.5,2,1.8,2,"#86bd5f")},pine(s){s.add("cyl",0,.8,0,.3,1.6,.3,"#5b412d"),s.add("cone",0,2.6,0,3,2.6,3,"#3f6e45"),s.add("cone",0,3.9,0,2.3,2.2,2.3,"#4a7d4e"),s.add("cone",0,5,0,1.5,1.8,1.5,"#57905a")},blossom(s){s.add("cyl",0,1.2,0,.28,2.4,.28,"#5a3f33"),s.add("blob",0,3.4,0,3.4,2.6,3.4,"#f2b6c6",{color2:"#d98aa3"}),s.add("blob",.8,4,.4,2.2,1.8,2.2,"#f7c9d5"),s.add("blob",-.7,3.8,-.5,2,1.6,2,"#efa9bd")},bush(s){s.add("blob",0,.5,0,1.6,1.1,1.6,"#5a8f43",{color2:"#3d6c31"}),s.add("blob",.5,.7,.2,1,.8,1,"#6da350")},bench(s){for(const t of[-.75,.75])s.add("box",t,.22,0,.08,.44,.55,"#33363a"),s.add("box",t,.6,-.24,.08,.7,.06,"#33363a");for(let t=0;t<3;t++)s.add("box",0,.46,-.18+t*.17,1.8,.05,.13,"#a8693c");for(let t=0;t<2;t++)s.add("box",0,.68+t*.18,-.27,1.8,.12,.04,"#a8693c",{rx:-.15})},hydrant(s){s.add("cyl",0,.3,0,.32,.6,.32,"#c8352c"),s.add("dome",0,.6,0,.34,.25,.34,"#c8352c"),s.add("cyl",0,.4,0,.5,.12,.12,"#b02a22",{rz:Math.PI/2}),s.add("cyl",0,.03,0,.42,.06,.42,"#9a241d")},mailbox(s){s.add("box",0,.35,0,.12,.7,.12,"#2f4f8a"),s.add("box",0,.95,0,.6,.6,.5,"#3563b0"),s.add("cyl",0,1.25,0,.6,.5,.25,"#3563b0",{rx:Math.PI/2,rz:0}),s.add("box",0,1.05,.26,.4,.06,.02,"#1c2c4c")},bin(s){s.add("cyl",0,.45,0,.55,.9,.55,"#3e5a46"),s.add("cyl",0,.93,0,.6,.08,.6,"#2d4334")},bollard(s){s.add("cyl",0,.45,0,.22,.9,.22,"#3b3f44"),s.add("sphere",0,.92,0,.24,.16,.24,"#3b3f44")},planter(s){s.add("box",0,.3,0,1.6,.6,.6,"#9b6b4a"),s.add("blob",-.4,.75,0,.7,.5,.5,"#5d9547"),s.add("blob",.35,.72,0,.7,.45,.5,"#4f8a3c");for(let t=0;t<7;t++)s.add("sphere",-.65+t*.22,.88+t%2*.08,(t%3-1)*.12,.14,.14,.14,["#e8505b","#f6c344","#f39ac0","#ffffff"][t%4])},busstop(s){for(const t of[-1.6,1.6])s.add("box",t,1.25,-.5,.08,2.5,.08,"#30363c");s.add("box",0,2.55,-.1,3.6,.1,1.5,"#2c3a4a"),s.add("box",0,1.3,-.62,3.4,2.1,.04,"#9fc4d6",{glow:0}),s.add("box",-1.15,1.4,-.58,1,1.6,.06,"#e9a23b",{glow:1.2}),s.add("box",.4,.45,-.35,2.2,.06,.4,"#8a5b3a"),s.add("cyl",1.95,1.4,.3,.06,2.8,.06,"#30363c"),s.add("cyl",1.95,2.85,.3,.5,.06,.5,"#2f7a4a",{rx:Math.PI/2})},stall(s){for(const[t,e]of[[-1.3,-.9],[1.3,-.9],[-1.3,.9],[1.3,.9]])s.add("box",t,1.2,e,.08,2.4,.08,"#5c4433");s.add("box",0,.5,.7,2.7,1,.5,"#8a6142"),s.add("box",0,1.02,.7,2.8,.05,.6,"#b38558");for(let t=0;t<6;t++)s.add("sphere",-1.1+t*.45,1.13,.7,.3,.2,.3,["#e85a3a","#f2b33d","#7fbf4a","#d9435f","#f3e3a0","#9b59b6"][t]);for(let t=0;t<5;t++)s.add("sphere",-1.2+t*.6,2.25,1.02,.12,.12,.12,"#ffcf7a",{glow:1})},canopy(s){for(let t=0;t<6;t++)s.add("box",-1.25+t*.5,2.45-Math.abs(t-2.5)*0,0,.5,.06,2.3,t%2?"#ffffff":"#f2e8d8",{rx:0});s.add("prism",0,2.45,0,2.95,.5,2.3,"#ffffff",{ry:Math.PI/2*0})},table(s){s.add("cyl",0,.37,0,.08,.74,.08,"#2d2d30"),s.add("cyl",0,.75,0,.8,.04,.8,"#ece5d8");for(const t of[0,Math.PI])s.add("box",Math.sin(t)*.7,.24,Math.cos(t)*.7,.42,.04,.42,"#3b3b3f"),s.add("box",Math.sin(t)*.9,.5,Math.cos(t)*.9,.42,.5,.04,"#3b3b3f",{ry:t});for(const t of[0,Math.PI])for(const e of[-.18,.18])s.add("box",Math.sin(t)*.7+e,.12,Math.cos(t)*.7,.04,.24,.04,"#3b3b3f")},umbrella(s){s.add("cyl",0,1.3,0,.05,2.6,.05,"#d8d0c0"),s.add("cone",0,2.55,0,2.4,.55,2.4,"#ffffff")},bikerack(s){for(let t=0;t<4;t++)s.add("torus",-.9+t*.6,.5,0,.9,1,.9,"#9aa2a8",{ry:Math.PI/2})},newsbox(s){s.add("box",0,.55,0,.5,1.1,.45,"#d2453a"),s.add("box",0,.85,.23,.38,.3,.02,"#e8e8e8")},crate(s){s.add("box",0,.35,0,.7,.7,.7,"#a07850"),s.add("box",0,.35,0,.72,.1,.72,"#7d5c3c")},barrel(s){s.add("cyl",0,.45,0,.6,.9,.6,"#7a5a3a"),s.add("cyl",0,.2,0,.62,.06,.62,"#444"),s.add("cyl",0,.7,0,.62,.06,.62,"#444")},container(s){s.add("box",0,1.3,0,6,2.6,2.4,"#ffffff");for(let t=0;t<14;t++)s.add("box",-2.8+t*.43,1.3,1.21,.14,2.4,.04,"#d8d8d8")},boat(s){s.add("box",0,.35,0,1.8,.7,4.6,"#ffffff"),s.add("cone4",0,.35,2.75,1.27,.9,.7,"#ffffff",{rx:Math.PI/2}),s.add("box",0,.72,-.2,1.6,.08,4,"#c79a63"),s.add("box",0,1.1,-1,1.2,.8,1.4,"#f4efe6"),s.add("box",0,1.55,-1,1.4,.1,1.6,"#c0392b")},lifebuoy(s){s.add("box",0,.7,0,.1,1.4,.1,"#5b4a3a"),s.add("torus",0,1.1,.08,.9,.9,1.4,"#e8552e")},rock(s){s.add("blob",0,.3,0,1.4,.8,1.1,"#8d8a82",{color2:"#6e6b64"})},flowerbed(s){s.add("box",0,.12,0,3,.24,1.2,"#6a4c33");for(let t=0;t<18;t++)s.add("sphere",-1.3+t%9*.32,.32,-.3+Math.floor(t/9)*.6,.2,.2,.2,["#e8505b","#f6c344","#f39ac0","#ffffff","#9b7fd4"][t%5])},vent(s){s.add("box",0,.4,0,1,.8,1,"#8d9298"),s.add("cyl",0,.85,0,.6,.12,.6,"#5f646a")},lightpool:null},s1=new Set(["canopy","umbrella","container","boat","treeRound","tree","bush"]);let sa=null;function a1(){if(sa)return sa;sa={};for(const[s,t]of Object.entries(i1)){if(!t)continue;const e=new Rn;t(e),sa[s]=e.geometry()}return sa}class o1{constructor(){this.items=new Map}add(t,e,n,i,a=0,o=1,r){this.items.has(t)||this.items.set(t,[]),this.items.get(t).push({x:e,y:n,z:i,ry:a,s:o,tint:r})}build(t){const e=new ke,n=a1(),i=new ie,a=new Dn,o=new _n,r=new Lt;for(const[l,c]of this.items){if(l==="lightpool"){const u=new Qe(1,1).rotateX(-Math.PI/2),f=r1(),m=new Oi(u,f,c.length);c.forEach((g,p)=>{i.compose(new D(g.x,g.y,g.z),a.identity(),new D(g.s,1,g.s)),m.setMatrixAt(p,i)}),m.renderOrder=2,m.frustumCulled=!0,m.computeBoundingSphere(),m.userData.lightpool=!0,e.add(m);continue}const h=n[l],d=new Oi(h,t,c.length);c.forEach((u,f)=>{o.set(0,u.ry,0),a.setFromEuler(o);const m=typeof u.s=="number"?new D(u.s,u.s,u.s):new D(...u.s);i.compose(new D(u.x,u.y,u.z),a,m),d.setMatrixAt(f,i),s1.has(l)&&d.setColorAt(f,r.set(u.tint||"#ffffff"))}),d.castShadow=!["lightpool"].includes(l),d.receiveShadow=!0,d.computeBoundingSphere(),d.userData.propType=l,e.add(d)}return e}}let Qi=null;function r1(){if(Qi)return Qi;const s=document.createElement("canvas");s.width=s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,200,130,0.85)"),e.addColorStop(.5,"rgba(255,170,90,0.3)"),e.addColorStop(1,"rgba(255,160,80,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Qi=new Ln({map:new ls(s),transparent:!0,depthWrite:!1,blending:Us,opacity:0,polygonOffset:!0,polygonOffsetFactor:-4}),Qi.userData.nightOpacity=.9,Qi}function l1(){Qi&&(Qi.opacity=ce.uNight.value*.42)}function Wn(s,t=s){const e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}function Li(s,t,e,n,i,a,o=[1,3]){for(let r=0;r<n;r++){s.fillStyle=a.pick(i);const l=a.range(o[0],o[1]);s.fillRect(a()*t,a()*e,l,l)}}function Jn(s,t=!0){const e=new ls(s);return e.colorSpace=nn,t&&(e.wrapS=e.wrapT=bo),e.anisotropy=8,e}const cn={};function c1(){if(cn.done)return cn;const s=yn(42);{const[t,e]=Wn(512);e.fillStyle="#4a4c55",e.fillRect(0,0,512,512),Li(e,512,512,9e3,["#43454e","#53555e","#3e4048","#5a5b62"],s,[1,3]);for(let n=0;n<18;n++){e.strokeStyle="rgba(30,30,36,0.35)",e.lineWidth=s.range(1,3),e.beginPath();let i=s()*512,a=s()*512;e.moveTo(i,a);for(let o=0;o<5;o++)i+=s.range(-30,30),a+=s.range(-30,30),e.lineTo(i,a);e.stroke()}e.fillStyle="rgba(25,25,30,0.18)";for(const n of[130,170,340,380])e.fillRect(n-12,0,24,512);e.fillStyle="#e8e2cf",e.fillRect(20,0,6,512),e.fillRect(486,0,6,512),e.fillStyle="#f0c24a";for(let n=0;n<512;n+=128)e.fillRect(250,n+16,5,72),e.fillRect(258,n+16,5,72);e.fillStyle="#6a6a70",e.fillRect(0,0,10,512),e.fillRect(502,0,10,512),cn.road=Jn(t)}{const[t,e]=Wn(512);e.fillStyle="#4a4c55",e.fillRect(0,0,512,512),Li(e,512,512,9e3,["#43454e","#53555e","#3e4048","#5a5b62"],s,[1,3]),e.globalAlpha=.15,Li(e,512,512,3e3,["#3b3d44"],s,[2,5]),e.globalAlpha=1,e.fillStyle="#3a3a40",e.beginPath(),e.arc(330,190,22,0,7),e.fill(),e.strokeStyle="#55555c",e.lineWidth=3,e.stroke(),cn.cross=Jn(t,!1)}{const[t,e]=Wn(512,128);e.clearRect(0,0,512,128);for(let n=0;n<10;n++)e.fillStyle="rgba(240,234,215,0.92)",e.fillRect(28+n*47,8,26,112);e.globalCompositeOperation="destination-out",Li(e,512,128,1800,["rgba(0,0,0,0.5)"],s,[1,3]),cn.zebra=Jn(t,!1)}{const[t,e]=Wn(512);e.fillStyle="#5e5550",e.fillRect(0,0,512,512);const n=32;for(let i=0;i<512;i+=n*.8)for(let a=-n;a<512+n;a+=n){const o=Math.round(i/(n*.8))%2*n/2,r=s.range(.85,1.12),l=[138,122,108].map(c=>Math.min(255,c*r));e.fillStyle=`rgb(${l[0]},${l[1]},${l[2]})`,e.beginPath(),e.ellipse(a+o+n/2,i+n*.4,n*.44,n*.34,s.range(-.2,.2),0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,240,220,0.12)",e.beginPath(),e.ellipse(a+o+n/2-3,i+n*.33,n*.25,n*.15,0,0,Math.PI*2),e.fill()}cn.cobble=Jn(t)}{const[t,e]=Wn(256);e.fillStyle="#b7aea2",e.fillRect(0,0,256,256);for(let n=0;n<256;n+=64)for(let i=0;i<256;i+=64){const a=s.range(.94,1.05);e.fillStyle=`rgb(${190*a|0},${182*a|0},${170*a|0})`,e.fillRect(i+2,n+2,60,60)}Li(e,256,256,2500,["rgba(120,110,100,0.25)","rgba(230,225,215,0.3)"],s,[1,2]),cn.sidewalk=Jn(t)}{const[t,e]=Wn(256);e.fillStyle="#8a5a44",e.fillRect(0,0,256,256);for(let n=0;n<256;n+=16)for(let i=0;i<256;i+=32){const a=s.range(.85,1.12);e.fillStyle=`rgb(${176*a|0},${106*a|0},${78*a|0})`;const o=n/16%2?16:0;e.fillRect(i+o+1,n+1,30,14)}cn.brick=Jn(t)}{const[t,e]=Wn(256);e.fillStyle="#6f9a4c",e.fillRect(0,0,256,256),Li(e,256,256,9e3,["#5f8a3f","#7aa856","#88b25e","#668f45","#93b866"],s,[1,3]);for(let n=0;n<40;n++)e.fillStyle=s.pick(["#f5f0d8","#f2d24a","#e98fb0"]),e.fillRect(s()*256,s()*256,2,2);cn.grass=Jn(t)}{const[t,e]=Wn(256);for(let n=0;n<256;n+=32){const i=s.range(.85,1.1);e.fillStyle=`rgb(${150*i|0},${112*i|0},${78*i|0})`,e.fillRect(0,n,256,30),e.fillStyle="#4a3424",e.fillRect(0,n+30,256,2);for(let a=0;a<6;a++)e.fillStyle="rgba(70,45,25,0.3)",e.fillRect(s()*256,n+s()*28,s.range(20,90),1)}cn.planks=Jn(t)}{const[t,e]=Wn(256);e.fillStyle="#7a5a3e",e.fillRect(0,0,256,256),Li(e,256,256,6e3,["#6a4c33","#8a6a4a","#5f432c"],s,[1,3]),cn.dirt=Jn(t)}{const[t,e]=Wn(256);e.fillStyle="#e2cf9f",e.fillRect(0,0,256,256),Li(e,256,256,6e3,["#d6c290","#ecdcb0","#cdb684"],s,[1,2]),cn.sand=Jn(t)}{const[t,e]=Wn(128),n=e.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),cn.glow=new ls(t)}return cn.done=!0,cn}const h1=(s,t,e=16)=>new en(t,s,1,e).toNonIndexed();function d1({city:s,B:t,prop:e,G:n,facade:i,rnd:a}){const o=s.animated,r=s.scene;{const[l,c]=We(5,7),h=t(l,c),d="#cdbb9c";h.add("box",l,.5,c,8,1,8,"#8b7b66"),h.add("box",l,7,c,6,12,6,d,{win:2,seed:.37}),h.add("box",l,13.2,c,6.6,.5,6.6,"#e9dcc4"),h.add("box",l,16.5,c,5.6,6,5.6,"#d8c7a6");for(let g=0;g<4;g++){const p=g*Math.PI/2,x=Math.sin(p)*2.85,v=Math.cos(p)*2.85;h.add("cyl",l+x,17,c+v,3.6,.15,3.6,"#fff4d8",{rx:Math.PI/2,ry:p,glow:.8}),h.add("torus",l+x*1.02,17,c+v*1.02,3.9,3.9,3,"#5a4630",{ry:p})}h.add("box",l,19.6,c,7.2,.4,7.2,"#e9dcc4");for(const[g,p]of[[-3.3,-3.3],[3.3,-3.3],[-3.3,3.3],[3.3,3.3]])h.add("box",l+g,20.9,c+p,.5,2.4,.5,"#e9dcc4");for(let g=-6;g<=6;g++)for(const p of[-1,1])h.add("box",l+g*.55,20.3,c+p*3.5,.08,1,.08,"#3a3a3a"),h.add("box",l+p*3.5,20.3,c+g*.55,.08,1,.08,"#3a3a3a");h.add("box",l,22.3,c,7.4,.4,7.4,"#e9dcc4"),h.add("cone4",l,26,c,7.6,7.2,7.6,"#5f9e8a"),h.add("sphere",l,29.9,c,.5,.5,.5,"#e8c15a"),h.add("box",l,22,c,1.4,1.6,1.4,"#b9893a"),s.climbs.clock_tower={base:[l,c+4.5],top:[l,20,c+2.6],face:Math.PI};const f=new ke,m=new Me({color:"#2b2118",roughness:.6});for(let g=0;g<4;g++){const p=g*Math.PI/2,x=new ke;x.position.set(l+Math.sin(p)*2.98,17,c+Math.cos(p)*2.98),x.rotation.y=p;const v=new Mt(new Oe(.16,1,.05),m);v.geometry.translate(0,.45,0);const b=new Mt(new Oe(.1,1.5,.05),m);b.geometry.translate(0,.7,.03),x.add(v,b),x.userData={hr:v,mn:b},f.add(x)}r.add(f),o.push({update:(g,p,x)=>{const v=x.hour;f.children.forEach(b=>{b.userData.hr.rotation.z=-(v%12)/12*Math.PI*2,b.userData.mn.rotation.z=-(v%1)*Math.PI*2})}}),pr(h,l-9,c+9,s),pr(h,l+9,c-9,s,.8);for(let g=0;g<6;g++){const p=l-12+g%3*2.8,x=c-11+Math.floor(g/3)*3;e("table",p,.17,x,a()*6),e("umbrella",p,.17,x,0,1,["#c0392b","#f2e8d8","#2e86ab"][g%3]),s.spots.push({type:"cafe_table",x:p+.7,z:x,yaw:-Math.PI/2,district:"oldtown"})}for(const[g,p]of[[l+11,c+4],[l-4,c+12],[l+12,c+12],[l-12,c-1]])e("blossom",g,.17,p,a()*6,.9),s.trees.push([g,p]);for(let g=0;g<4;g++){const p=g*Math.PI/2+.3,x=l+Math.sin(p)*7.5,v=c+Math.cos(p)*7.5;e("bench",x,.17,v,p+Math.PI),s.spots.push({type:"bench",x,z:v,yaw:p,district:"oldtown",view:"clock tower"})}dh(s,l-18,c-18,l+18,c+18,6.5),dh(s,l+18,c-18,l-18,c+18,6)}{const[l,c]=We(6,2),h=t(l,c);pr(h,l,c,s,1.4),h.add("torus",l+9,4,c-8,5,5,5,"#d8643a",{rx:.3,ry:.8}),h.add("box",l+9,.8,c-8,2,1.6,2,"#e9e4da");for(let d=0;d<8;d++){const u=d/8*Math.PI*2,f=l+Math.cos(u)*11,m=c+Math.sin(u)*11;e(d%2?"planter":"tree",f,.17,m,-u,1,"#cfe8b0")}for(let d=0;d<4;d++){const u=d/4*Math.PI*2+.4,f=l+Math.cos(u)*6.5,m=c+Math.sin(u)*6.5;e("bench",f,.17,m,-u-Math.PI/2),s.spots.push({type:"bench",x:f,z:m,yaw:-u+Math.PI/2,district:"downtown",view:"fountain"})}}{const l=Ut.cinema,[c,h]=l.door,d=t(c,h);d.add("box",c,4,h-1,9,1.4,2.6,"#2a1d2e");for(let m=0;m<22;m++)d.add("sphere",c-4.4+m*.42,3.25,h+.32,.18,.18,.18,"#ffe08a",{glow:1.8,seed:m*.13});d.add("box",c,4,h+.33,8.4,.9,.06,"#ffefc0",{glow:1.2}),d.add("box",c+5.5,8,h-1.4,1,8,.3,"#ff4f9a",{glow:1.6});const u=Ut.arcade,f=t(u.door[0],u.door[1]);for(let m=0;m<5;m++)f.add("box",u.door[0]-3+m*1.5,5.4+m%2*.4,u.door[1]-1.4,1.2,1.2,.2,["#4ff0ff","#ff4f9a","#ffd23f","#7cff6b","#b38cff"][m],{glow:1.7,seed:m*.21})}{const l=s.placeBuildings.rooftop_garden;if(l){const c=t(l.x,l.z),h=l.H+.5;for(let d=0;d<6;d++)c.add("blob",l.x-4+d%3*4,h+.6,l.z-3+Math.floor(d/3)*6,2.2,1.6,2.2,["#5c9645","#79b257","#f2b6c6"][d%3]);c.add("box",l.x,h-.4,l.z,10,.3,10,"#7a5a3e");for(let d=0;d<8;d++)c.add("sphere",l.x-5+d*1.4,h+2.8,l.z+5.2,.18,.18,.18,"#ffd27a",{glow:1});c.add("box",l.x+7.4,l.H/2,l.z+2,.6,l.H,1.2,"#3a3a3a"),s.climbs.rooftop_garden={base:[l.x+8.4,l.z+2],top:[l.x+3,h-.25,l.z+2],face:-Math.PI/2}}}{const[l,c]=We(2,2),h=t(l,c);h.add("box",l,.6,c+9,22,1.2,6,"#e8e1d2"),h.add("box",l,1.4,c+7.5,20,.6,4,"#ece5d6"),h.add("box",l,7,c-2,26,12,18,"#efe7d6",{win:1,seed:.8});for(let d=0;d<8;d++)h.add("cyl",l-9.6+d*2.75,6.2,c+7.6,1,9,1,"#f4eee2");h.add("box",l,11.1,c+6.6,24,.9,4,"#f4eee2"),h.add("prism",l,11.5,c+6.6,24,3.6,4.2,"#e9e1d0",{ry:0}),h.add("dome",l,13,c-2,10,7,10,"#7fb5a6");for(const d of[-1,1])h.add("box",l+d*5,7,c+8.35,1.4,5,.08,d<0?"#b33a3a":"#2e5e8a")}{const[l,c]=We(1,1),h=t(l,c);h.add("dome",l,0,c,30,9,30,"#6f9a4c",{color2:"#5d8a40"}),h.add("cyl",l,7,c,9,6,9,"#f1ede4",{win:0}),h.add("dome",l,10,c,9.6,8.4,9.6,"#c9d0d6"),h.add("box",l,12.5,c+2.6,1.6,5,.3,"#2c3440",{rx:-.5,glow:0}),h.add("cyl",l+1.5,13.5,c+3.4,.9,4,.9,"#3a4656",{rx:-.7});for(let d=0;d<10;d++)h.add("box",l,.15+d*.62,c+15-d*1.05,2.4,.3,1.1,"#b5a991");s.climbs.observatory={base:[l,c+16.4],top:[l,6.2,c+5],face:0,stairs:!0},o.push({update:()=>{}})}{const[l,c]=We(0,3),h=t(l,c);h.add("cyl",l,2.5,c,22,5,22,"#e6eef2",{win:1,seed:.2}),h.add("dome",l,5,c,21,15,21,"#3a5a7a"),h.add("torus",l,5.2,c,21.4,21.4,4,"#9fe8ff",{rx:Math.PI/2,glow:1.3});for(let d=0;d<30;d++){const u=a()*Math.PI*2,f=a()*1.2;h.add("sphere",l+Math.cos(u)*Math.cos(f)*10.6,5+Math.sin(f)*7.6,c+Math.sin(u)*Math.cos(f)*10.6,.25,.25,.25,"#fff6d0",{glow:1.2})}}{const[l,c]=We(0,8),h=t(l,c);for(let d=0;d<3;d++)for(let u=0;u<4;u++){const f=l-10+u*6,m=c-8+d*7;h.add("box",f,.4,m,4,.5,2.4,"#7d5a3c"),h.add("box",f,.62,m,3.7,.08,2.1,"#4e3826");for(let g=0;g<6;g++)h.add("blob",f-1.5+g*.6,.85,m+(g%2?.5:-.5),.6,.55,.6,["#5c9645","#7cb354","#e8505b","#f2c44a","#6aa64f","#b5d36b"][(g+d+u)%6])}h.add("box",l+11,1.4,c+11,4,2.8,3,"#8a5a3a"),h.add("prism",l+11,2.8,c+11,4.4,1.4,3.4,"#4a6e4a");for(let d=-7;d<=7;d++)for(const u of[-1,1])h.add("box",l+d*2,.6,c+u*14.6,.12,1,.12,"#d8c8a8");h.add("box",l+3,1.2,c+13,.1,2.4,.1,"#6b4f36"),h.add("box",l+3,2,c+13,1.4,.1,.1,"#6b4f36"),h.add("sphere",l+3,2.5,c+13,.5,.5,.5,"#e8c45a"),s.spots.push({type:"garden_bed",x:l-4,z:c-6.5,yaw:0,district:"residential"})}for(const[l,c,h]of[[6,9,!0],[5,9,!1],[4,10,!1]]){const[d,u]=We(l,c);for(let f=0;f<3;f++)for(let m=0;m<4;m++){const g=d-10.5+m*7,p=u-9+f*9,x=f===1?Math.PI:0;e("stall",g,.17,p,x),e("canopy",g,.17,p,x,1,["#c0392b","#2e86ab","#27ae60","#f39c12","#8e44ad","#16a085","#d35400","#e84393"][(f*4+m+l)%8]),s.spots.push({type:"stall",x:g,z:p+(x?-1.8:1.8),yaw:x?0:Math.PI,district:"market"})}uh(s,d-15,u-4.5,d+15,u-4.5,4.2),uh(s,d-15,u+4.5,d+15,u+4.5,4.2),s.vents.push([d-3.5,1.5,u-8.5],[d+7,1.5,u+.5])}{const[l,c]=We(3,9);for(let h=0;h<9;h++){const d=l-10+h%3*10,u=c-9+Math.floor(h/3)*9;e("table",d,.17,u,a()),e("umbrella",d,.17,u,0,1.2,["#e84393","#16a085","#f39c12"][h%3]),e("crate",d+1.6,.17,u+.4)}}{const[l,c]=We(7,10),h=t(l,c);for(const[d,u]of[[-12,-8],[12,-8],[-12,8],[12,8],[0,-8],[0,8]])h.add("box",l+d,3,c+u,.5,6,.5,"#4a5a64");h.add("box",l,6.2,c,27,.4,19,"#5a7584"),h.add("prism",l,6.4,c,27,2.4,19,"#6b8796",{ry:Math.PI/2*0});for(let d=0;d<6;d++)h.add("box",l-9+d%3*9,.9,c-3+Math.floor(d/3)*6,6,.9,2,"#dfe8ec"),h.add("box",l-9+d%3*9,1.4,c-3+Math.floor(d/3)*6,5.6,.12,1.6,"#a8c8d8");s.vents.push([l,1.4,c])}{const l=De(11)+14,c=zt+78,h=t(l,zt-1);for(let g=zt+2;g<c;g+=2.6)for(const p of[-1,0,1])h.add("blob",l+p*2.2+Math.sin(g)*.4,-1,g,3,2.8,3,"#8d8a82",{color2:"#6e6b64"});n.quad("sand",l-1.4,zt,l+1.4,c-4,.4,4),h.add("cyl",l,0,c,9,2.2,9,"#9a958a");for(let g=0;g<6;g++)h.add(h1(1-g*.07,1-(g+1)*.07),l,1.1+g*2.6+1.3,c,5,2.6,5,g%2?"#f4f0e8":"#c8352c");h.add("cyl",l,17,c,4.6,.4,4.6,"#2f3436");for(let g=0;g<16;g++){const p=g/16*Math.PI*2;h.add("box",l+Math.cos(p)*2.2,17.6,c+Math.sin(p)*2.2,.06,.9,.06,"#2f3436")}h.add("cyl",l,18.4,c,2.4,2.4,2.4,"#fff3c4",{glow:1.5}),h.add("cone",l,20.3,c,3,1.6,3,"#c8352c"),s.climbs.lighthouse={base:[l,c-4.6],top:[l,17.2,c-2],face:Math.PI},s.lighthouse=[l,c];const d=new Ln({color:"#fff2c0",transparent:!0,opacity:0,blending:Us,depthWrite:!1,side:Un}),u=new Mt(new es(3.2,60,16,1,!0).translate(0,-30,0).rotateZ(Math.PI/2),d),f=new ke;f.position.set(l,18.4,c),f.add(u);const m=u.clone();m.rotation.y=Math.PI,f.add(m),r.add(f),o.push({update:(g,p)=>{f.rotation.y=g*.6,d.opacity=ce.uNight.value*.16}}),Ut.lighthouse.door=[l,c-6.2]}{const l=De(6)+22,c=zt+22,h=t(l,zt);n.quad("planks",l-12,zt,l+12,zt+30,.12,4,"x");for(let v=-10;v<=10;v+=5)for(let b=4;b<=28;b+=6)h.add("cyl",l+v,-1.3,zt+b,.5,3,.5,"#5a4632");for(const v of[-1,1])h.add("box",l+v*2,9,c,.6,18.5,.6,"#e9e4da",{rz:v*.22}),h.add("box",l-v*2,9,c,.6,18.5,.6,"#e9e4da",{rz:v*.22});const d=new ke;d.position.set(l,17.5,c);const u=new Rn;u.add("torus",0,0,0,30,30,6,"#f4efe6"),u.add("torus",0,0,0,28,28,6,"#f4efe6");for(let v=0;v<16;v++){const b=v/16*Math.PI*2;u.add("box",Math.cos(b)*7.5,Math.sin(b)*7.5,0,15,.18,.18,"#e9e4da",{rz:b})}for(let v=0;v<32;v++){const b=v/32*Math.PI*2;u.add("sphere",Math.cos(b)*15,Math.sin(b)*15,.5,.35,.35,.35,["#ff4f9a","#4ff0ff","#ffd23f"][v%3],{glow:1.8,seed:v/32})}u.add("cyl",0,0,0,1.4,1.6,1.4,"#aaa",{rx:Math.PI/2});const f=new Mt(u.geometry(),i);f.castShadow=!0,d.add(f);const m=[],g=new Rn;g.add("box",0,-1.3,0,1.6,1.4,1.6,"#ffffff"),g.add("cone4",0,-.4,0,1.4,.6,1.4,"#ffffff"),g.add("box",0,-.2,0,.08,.6,.08,"#666");const p=g.geometry(),x=["#e85a3a","#2e86ab","#f2b33d","#27ae60","#8e44ad","#e84393"];for(let v=0;v<12;v++){const b=new Mt(p,i.clone());b.material.color=new Lt(x[v%6]),b.material.vertexColors=!0,m.push(b),r.add(b)}r.add(d),o.push({update:v=>{const b=v*.08;d.rotation.z=b,m.forEach((w,T)=>{const S=b+T/12*Math.PI*2;w.position.set(l+Math.cos(S)*15,17.5+Math.sin(S)*15,c+.9)})}}),s.ferris=[l,c]}{const[l,c]=We(9,7),h=new Mt(new Ao(13,48).rotateX(-Math.PI/2),null);h.position.set(l+4,.12,c+4),h.userData.pond=!0,s.pond=h;const d=t(l,c);for(let g=0;g<40;g++){const p=g/40*Math.PI*2;d.add("blob",l+4+Math.cos(p)*13.3,.1,c+4+Math.sin(p)*13.3,1.6,.7,1.4,"#9a958a")}for(let g=0;g<7;g++)d.add("cyl",l+4+a.range(-8,8),.16,c+4+a.range(-8,8),1.4,.04,1.4,"#4f8a3c");d.add("box",l-6,.25,c+4,5,.2,2,"#9b7653"),s.spots.push({type:"pond_edge",x:l-7.5,z:c+4,yaw:Math.PI/2,district:"park",view:"pond"});const u=new Rn;u.add("sphere",0,.15,0,.4,.3,.6,"#f4efe6"),u.add("sphere",0,.38,.25,.22,.22,.22,"#3f7a4a"),u.add("cone",0,.36,.42,.1,.15,.1,"#f2a33d",{rx:Math.PI/2});const f=u.geometry(),m=[];for(let g=0;g<6;g++){const p=new Mt(f,i);p.castShadow=!0,r.add(p),m.push({m:p,r:a.range(3,10),s:a.range(.05,.15)*(g%2?1:-1),a:a()*6})}o.push({update:g=>m.forEach(p=>{const x=p.a+g*p.s;p.m.position.set(l+4+Math.cos(x)*p.r,.1+Math.sin(g*2+p.a)*.03,c+4+Math.sin(x)*p.r),p.m.rotation.y=-x+(p.s>0?Math.PI:0)})})}{const[l,c]=We(8,6),h=t(l,c);n.quad("sand",l-12,c-14,l-2,c-4,.06,4),h.add("box",l-7,2.6,c-9,5,.2,.2,"#e85a3a");for(const d of[-1,1])h.add("box",l-7+d*2.4,1.3,c-9,.2,2.8,1.6,"#e85a3a",{rx:0});for(const d of[-1,1])h.add("box",l-7+d*1,.6,c-9,.7,.06,.4,"#3a3a3a");h.add("box",l-4,1,c-6,1.6,2,1.6,"#2e86ab"),h.add("box",l-4,.9,c-4,.9,.12,3.4,"#f2c13d",{rx:.5}),h.add("dome",l-10,.06,c-6,4,3,4,"#27ae60"),s.spots.push({type:"swing",x:l-7,z:c-9,yaw:0,district:"park"})}{const[l,c]=We(10,8),h=t(l,c);n.quad("sidewalk",l-14,c-14,l-1,c-3,.05,4),h.add("wedge",l-12,1.2,c-8,4,2.6,2.6,"#bdb8ae",{ry:Math.PI/2}),h.add("wedge",l-3,1.2,c-8,4,2.6,2.6,"#bdb8ae",{ry:-Math.PI/2}),h.add("box",l-7.5,.5,c-6,4,.06,.08,"#888");for(const d of[-1,1])h.add("box",l-7.5+d*1.8,.25,c-6,.08,.5,.08,"#888");h.add("box",l-7.5,.3,c-11,3,.6,1.2,"#a8a39b");for(let d=0;d<4;d++)h.add("box",l-13+d*3.5,1.5,c-13.9,3.2,3,.1,["#e86f5a","#4ff0ff","#f2b23e","#7b6fd0"][d]);s.spots.push({type:"skate",x:l-7.5,z:c-8.5,yaw:0,district:"park"})}{const[l,c]=We(10,6),h=t(l,c);h.add("box",l,.5,c-8,12,1,6,"#d8cfc0"),h.add("dome",l,1,c-10,13,12,9,"#f2ece0",{rx:-0});for(let d=0;d<9;d++)h.add("sphere",l-5+d*1.25,1.2,c-5.2,.2,.2,.2,"#ffd27a",{glow:1});for(let d=0;d<3;d++)for(let u=0;u<4;u++)e("bench",l-6+u*4,.02,c+1+d*3,Math.PI);s.spots.push({type:"stage",x:l,z:c-7.5,yaw:0,district:"park"})}{const[l,c]=We(8,8),h=t(l,c);for(let d=0;d<4;d++)h.add("box",l-8+d*5,.04,c+8-d%2*3,2.4,.03,2,["#d9435f","#2e86ab","#f2b33d","#27ae60"][d],{ry:a()});s.spots.push({type:"picnic",x:l-3,z:c+8,yaw:0,district:"park"})}{const l=Ut.secret_rooftop,[c,h]=l.door,d=t(c,h);d.add("box",c-1.2,6.5,h,.5,13,.9,"#2d2d2d");for(let u=0;u<26;u++)d.add("box",c-1,.4+u*.5,h,.2,.05,.9,"#444");s.climbs.secret_rooftop={base:[c,h],top:[c-5,11.5,h],face:-Math.PI/2}}for(const l of["tram_stop_n","tram_stop_c","tram_stop_s"]){const c=Ut[l];e("busstop",c.door[0]-1.5,.16,c.door[1]+5,-Math.PI/2)}{const l=Ut.bike_share;e("bikerack",l.door[0],.16,l.door[1]+2,0)}{const l=Ut.speakeasy;t(l.door[0],l.door[1]).add("sphere",l.door[0]-1.2,2.8,l.door[1]+1.2,.3,.4,.3,"#7cff9b",{glow:1.2})}{const l=new Rn,c=yn(5);for(let d=0;d<46;d++){const u=d/46*Math.PI*2+c()*.1,f=c.range(700,900),m=Math.cos(u)*f,g=Math.sin(u)*f*.95-40;g>zt+60||l.add("dome",m,-2,g,c.range(160,320),c.range(40,110),c.range(120,220),c()<.5?"#6f8f6a":"#7d9a72",{ry:u})}const h=new Mt(l.geometry(),new Me({vertexColors:!0,roughness:1,flatShading:!0}));r.add(h)}}function pr(s,t,e,n,i=1){s.add("cyl",t,.45,e,7*i,.6,7*i,"#cbbfa8"),s.add("cyl",t,.5,e,6.2*i,.6,6.2*i,"#4f8fb5",{glow:0}),s.add("cyl",t,1.5,e,.8,2.4,.8,"#d8ccb4"),s.add("cyl",t,2.6,e,2.6*i,.4,2.6*i,"#d8ccb4"),s.add("cyl",t,3.2,e,.4,1,.4,"#d8ccb4"),s.add("sphere",t,3.8,e,.6,.6,.6,"#e8c15a"),n.fountains.push({x:t,z:e,s:i,top:3.9}),n.spots.push({type:"fountain",x:t+4.2*i,z:e,yaw:-Math.PI/2,district:"",view:"fountain"})}function dh(s,t,e,n,i,a){s.flags.push({x0:t,z0:e,x1:n,z1:i,y:a,kind:"bunting"})}function uh(s,t,e,n,i,a){s.flags.push({x0:t,z0:e,x1:n,z1:i,y:a,kind:"lanterns"})}const Ts=3,hn=1100,vi=Be(Sa)+9,_i=Be(Sa+1)-9,Md=-2.2,ua=-1.4;class u1{constructor(){this.parts={}}quad(t,e,n,i,a,o,r=4,l="z",c=0){const h=this.parts[t]||={pos:[],uv:[],idx:[]},d=h.pos.length/3;if(h.pos.push(e,o,n,i,o,n,i,o,a,e,o,a),l==="z"){const u=i-e;h.uv.push(c,n/r,c+u/r,n/r,c+u/r,a/r,c,a/r)}else{const u=a-n;h.uv.push(e/r,c+u/r,i/r,c+u/r,i/r,c,e/r,c)}h.idx.push(d,d+2,d+1,d,d+3,d+2)}meshes(t){const e=[];for(const[n,i]of Object.entries(this.parts)){const a=new Re;a.setAttribute("position",new Qt(i.pos,3)),a.setAttribute("uv",new Qt(i.uv,2)),a.setIndex(i.idx),a.computeVertexNormals(),a.computeBoundingSphere();const o=new Mt(a,t[n]);o.receiveShadow=!0,o.name="ground-"+n,e.push(o)}return e}}function f1(s,t=()=>{}){const e=c1(),n=n1(),i={road:Kn(e.road,{road:!0}),cross:Kn(e.cross,{road:!0}),cobble:Kn(e.cobble,{road:!0}),sidewalk:Kn(e.sidewalk),brick:Kn(e.brick),grass:Kn(e.grass,{roughness:1}),planks:Kn(e.planks),dirt:Kn(e.dirt,{roughness:1}),sand:Kn(e.sand,{roughness:1}),zebra:Kn(e.zebra,{road:!0,extra:{transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}})},a=new u1,o=Math.ceil(le/Ts),r=Math.ceil((oe+1)/Ts),l=[];for(let w=0;w<r;w++)for(let T=0;T<o;T++)l.push({cx:T,cz:w,B:new Rn,props:new o1});const c=(w,T)=>{const S=Math.max(0,Math.min(o-1,Math.floor((w-qe)/(pe*Ts)))),C=Math.max(0,Math.min(r-1,Math.floor((T-Fn)/(pe*Ts))));return l[C*o+S]},h={scene:s,spots:[],signs:[],flags:[],vents:[],fountains:[],climbs:{},lamps:[],animated:[],placeBuildings:{},trees:[]},d=(w,T,S,C,M=0,_=1,y)=>c(T,C).props.add(w,T,S,C,M,_,y),u=(w,T)=>c(w,T).B;yn(7),a.quad("grass",-hn,-hn,hn,Fn-6,-.04,6,"z"),a.quad("grass",-hn,Fn-6,qe-6,vi-3,-.04,6,"z"),a.quad("grass",qe+le*pe+6,Fn-6,hn,vi-3,-.04,6,"z"),a.quad("grass",-hn,_i+3,qe-6,zt,-.04,6,"z"),a.quad("grass",qe+le*pe+6,_i+3,hn,zt,-.04,6,"z"),a.quad("dirt",-hn,vi-3,qe-6,vi,-.04,4,"z"),a.quad("dirt",qe+le*pe+6,vi-3,hn,vi,-.04,4,"z"),a.quad("dirt",-hn,_i,qe-6,_i+3,-.04,4,"z"),a.quad("dirt",qe+le*pe+6,_i,hn,_i+3,-.04,4,"z"),a.quad("dirt",-hn,vi,hn,_i,-4,6,"z");{const w=new Rn;for(const[S,C]of[[vi,1],[_i,-1]])w.add("box",0,-1.6,S-C*.5,hn*2,3.6,1,"#8c8173"),w.add("box",0,.12,S-C*.35,hn*2,.24,.7,"#b9ad9b");const T=new Mt(w.geometry(),n);T.receiveShadow=!0,s.add(T)}const f=(w,T,S,C)=>{const M=w>=0&&T>=0&&w<le&&T<oe?zn(w,T):null,_=S>=0&&C>=0&&S<le&&C<oe?zn(S,C):null;return M==="oldtown"||_==="oldtown"?"cobble":"road"};h.roadOpen={v:{},h:{}};for(let w=0;w<=le;w++)for(let T=0;T<oe;T++){const S=De(w),C=Be(T)+6,M=Be(T+1)-6;if(ii(w-1,T)&&ii(w,T)){a.quad("grass",S-6,C,S+6,M,0,6),h.roadOpen.v[`${w},${T}`]=!1;continue}h.roadOpen.v[`${w},${T}`]=!0;const _=f(w-1,T,w,T);a.quad(_,S-6,C,S+6,M,0,_==="road"?12:4,"z"),a.quad("zebra",S-6,C,S+6,C+2.6,.01,12,"x"),a.quad("zebra",S-6,M-2.6,S+6,M,.01,12,"x"),T===Sa&&p1(u(S,C),S,C,M,d)}for(let w=0;w<=oe;w++)for(let T=0;T<le;T++){const S=Be(w),C=De(T)+6,M=De(T+1)-6;if(ii(T,w-1)&&ii(T,w)){a.quad("grass",C,S-6,M,S+6,0,6),h.roadOpen.h[`${T},${w}`]=!1;continue}h.roadOpen.h[`${T},${w}`]=!0;const _=f(T,w-1,T,w);a.quad(_,C,S-6,M,S+6,0,_==="road"?12:4,"x"),a.quad("zebra",C,S-6,C+2.6,S+6,.01,12,"z"),a.quad("zebra",M-2.6,S-6,M,S+6,.01,12,"z")}for(let w=0;w<=le;w++)for(let T=0;T<=oe;T++){const S=De(w),C=Be(T);if(ii(w-1,T-1)&&ii(w,T-1)&&ii(w-1,T)&&ii(w,T)){a.quad("grass",S-6,C-6,S+6,C+6,0,6);continue}const _=[[w-1,T-1],[w,T-1],[w-1,T],[w,T]].some(([y,P])=>y>=0&&P>=0&&y<le&&P<oe&&zn(y,P)==="oldtown");a.quad(_?"cobble":"cross",S-6,C-6,S+6,C+6,0,_?4:12,"z")}{const w=De(_d),T=u(w,0);for(const S of[-.72,.72])T.add("box",w+S,.02,(Be(0)+Be(oe))/2,.12,.05,Be(oe)-Be(0)+8,"#8f9499");h.tramX=w;for(let S=Be(0);S<=Be(oe);S+=24){const C=u(w,S);for(const M of[-1,1])C.add("cyl",w+M*5.6,3.3,S+3,.18,6.6,.18,"#3a4046");C.add("box",w,6.4,S+3,11.2,.08,.08,"#3a4046")}T.add("box",w,6.1,(Be(0)+Be(oe))/2,.03,.03,Be(oe)-Be(0),"#222")}let m=0;for(let w=0;w<oe;w++)for(let T=0;T<le;T++)x(T,w),m++,m%12===0&&t(m/(le*oe));function g(w,T,S="nsew",C="sidewalk"){const[M,_]=We(w,T),y=Ee/2,P=u(M,_);a.quad(C,M-y,_-y,M+y,_-y+3,.16,4,"z"),a.quad(C,M-y,_+y-3,M+y,_+y,.16,4,"z"),a.quad(C,M-y,_-y+3,M-y+3,_+y-3,.16,4,"z"),a.quad(C,M+y-3,_-y+3,M+y,_+y-3,.16,4,"z");const k="#a8a39b";P.add("box",M,.08,_-y+.1,Ee,.16,.2,k),P.add("box",M,.08,_+y-.1,Ee,.16,.2,k),P.add("box",M-y+.1,.08,_,.2,.16,Ee,k),P.add("box",M+y-.1,.08,_,.2,.16,Ee,k)}function p(w,T,S,C){const[M,_]=We(w,T),y=Ee/2-.7;for(const P of["n","s","e","w"]){for(let z=0;z<4;z++){const N=-13.5+z*9,[j,Q,mt]=P==="n"?[M+N,_-y,Math.PI/2]:P==="s"?[M+N,_+y,-Math.PI/2]:P==="e"?[M+y,_+N,0]:[M-y,_+N,Math.PI];z%2===0?(d("lamp",j,.16,Q,mt),d("lightpool",j,.2,Q,0,7),h.lamps.push([j,Q])):(S!=="downtown"||C()<.5)&&S!=="harbor"&&(d("tree",j,.16,Q,C()*6,C.range(.8,1.05),new Lt().setHSL(.25+C()*.08,.35,.55+C()*.15).getStyle()),h.trees.push([j,Q]))}const k=C.range(-12,12),[U,W,H]=P==="n"?[M+k,_-y+.2,Math.PI]:P==="s"?[M+k,_+y-.2,0]:P==="e"?[M+y-.2,_+k,Math.PI/2]:[M-y+.2,_+k,-Math.PI/2],Z=C.pick(["bench","bin","hydrant","mailbox","newsbox","bikerack","planter","bench","bollard"]);d(Z,U,.16,W,H),Z==="bench"&&h.spots.push({type:"bench",x:U,z:W,yaw:H,district:S})}}function x(w,T){const S=zn(w,T),C=Yg(w,T),[M,_]=We(w,T),y=Jg(w,T),P=u(M,_);if(S==="river"){const z=Ee/2;a.quad("sidewalk",M-z+3,_-z,M+z-3,_-z+3,.16,4,"z"),a.quad("sidewalk",M-z+3,_+z-3,M+z-3,_+z,.16,4,"z");for(const N of[-1,1]){const j=_+N*(z-3);P.add("box",M,.6,j,Ee-6,.08,.1,"#2f3436");for(let Q=-6;Q<=6;Q++)P.add("box",M+Q*2.4,.16,j,.1,.9,.1,"#2f3436");d("lamp",M-8,.16,j-N*.4,N>0?-Math.PI/2:Math.PI/2),d("lamp",M+8,.16,j-N*.4,N>0?-Math.PI/2:Math.PI/2),d("lightpool",M-8,.2,j-N*1.4,0,8),d("lightpool",M+8,.2,j-N*1.4,0,8),d("bench",M,.16,j-N*2.3,N>0?0:Math.PI),h.spots.push({type:"bench",x:M,z:j-N*2.3,yaw:N>0?Math.PI:0,district:"river",view:"river"})}y()<.5&&d("boat",M+y.range(-8,8),Md+.05,_+(y()<.5?-1:1)*11,Math.PI/2,1.1,y.pick(["#2e6f5e","#8c2f2f","#2f4f8c","#d9a441"]));return}if(S==="park"){a.quad("grass",M-Ee/2-6,_-Ee/2-6,M+Ee/2+6,_+Ee/2+6,.02,6),a.quad("sand",M-1.6,_-Ee/2-6,M+1.6,_+Ee/2+6,.05,4),a.quad("sand",M-Ee/2-6,_-1.6,M+Ee/2+6,_+1.6,.05,4);const z=14;for(let N=0;N<z;N++){const j=M+y.range(-20,20),Q=_+y.range(-20,20);if(Math.abs(j-M)<3.5||Math.abs(Q-_)<3.5||C==="park"&&w===9&&T===7&&Math.hypot(j-M,Q-_)<16)continue;const mt=y.pick(["treeRound","treeRound","pine","blossom","bush","bush"]);d(mt,j,0,Q,y()*6,y.range(.8,1.25),new Lt().setHSL(.24+y()*.1,.3,.6+y()*.2).getStyle()),h.trees.push([j,Q])}for(let N=0;N<4;N++){const j=N*Math.PI/2+Math.PI/4,Q=M+Math.cos(j)*6,mt=_+Math.sin(j)*6;d("bench",Q,.02,mt,-j+Math.PI/2),h.spots.push({type:"bench",x:Q,z:mt,yaw:-j-Math.PI/2,district:"park"})}for(let N=0;N<4;N++){const j=M+(N<2?-2.6:2.6),Q=_+(N%2?-12:12);d("lamp",j,.02,Q,N<2?0:Math.PI),d("lightpool",j,.08,Q,0,8)}d("flowerbed",M+6,.02,_+6,.8),d("flowerbed",M-6,.02,_-6,.8);return}g(w,T,"nsew",S==="oldtown"?"cobble":"sidewalk"),p(w,T,S,y);const k=15;if(C==="square"||C==="plaza"){a.quad("brick",M-k,_-k,M+k,_+k,.17,4);return}if(["museum","observatory","planetarium","garden","stalls","flea","fishmarket"].includes(C)){a.quad(C==="garden"||C==="observatory"?"grass":"brick",M-k,_-k,M+k,_+k,.17,4);return}a.quad(S==="residential"?"grass":"brick",M-k,_-k,M+k,_+k,.12,4);const U={oldtown:"oldtown",residential:"residential",downtown:"downtown",tech:"tech",arts:"arts",market:"market",harbor:"harbor"}[S];if(S==="downtown"){for(const[z,N]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const j=Math.abs(z)>0&&y()<.5?z>0?Math.PI/2:-Math.PI/2:N>0?0:Math.PI,Q=M+z*7.6,mt=_+N*7.6,Bt=w===4&&T===3&&z>0&&N>0,Vt=ia(P,Q,mt,j,14.4,14.4,"downtown",y,{height:Bt?15:y.range(16,62)*(w===5||w===6?1.25:1)});Bt&&(h.placeBuildings.rooftop_garden={x:Q,z:mt,yaw:Math.PI/2,H:Vt.H,w:14.4,d:14.4,roofGarden:!0})}return}if(C==="docks"){ia(P,M-7,_-8,Math.PI,14,12,"harbor",y),ia(P,M+8,_-8,Math.PI,12,12,"harbor",y);for(let z=0;z<5;z++)d("container",M+y.range(-12,12),.17+(z>2?2.6:0),_+6+z%3*2.6,0,1,y.pick(["#c0392b","#2e86ab","#e67e22","#27ae60","#7f8c8d"]));for(let z=0;z<6;z++)d(y()<.5?"crate":"barrel",M+y.range(-14,14),.17,_+y.range(0,4));return}const W={oldtown:10,residential:11,tech:12,arts:11,market:9,harbor:12}[S]||10,H={oldtown:[5.5,8.5],residential:[7,11],tech:[10,15],arts:[8,12],market:[6,9],harbor:[10,15]}[S],Z=[];for(const z of["n","s"]){let N=-k;for(;N<k-3;){let j=Math.min(y.range(H[0],H[1]),k-N);k-N-j<H[0]*.8&&(j=k-N),Z.push({side:z,u:N+j/2,w:j,d:W}),N+=j}}for(const z of["e","w"]){const N=2*k-2*W;N<4||Z.push({side:z,u:0,w:N,d:Math.min(W,9)})}for(const z of Z){let N,j,Q;z.side==="n"?(N=M+z.u,j=_-k+z.d/2,Q=Math.PI):z.side==="s"?(N=M+z.u,j=_+k-z.d/2,Q=0):z.side==="e"?(N=M+k-z.d/2,j=_+z.u,Q=Math.PI/2):(N=M-k+z.d/2,j=_+z.u,Q=-Math.PI/2);const mt=Fe.find(te=>te.i===w&&te.j===T&&te.side===z.side&&!te.outdoor&&Math.abs(v(te)-z.u)<=z.w/2+.01);if(C==="home"&&z.side==="n"&&Math.abs(z.u)<z.w/2+.01){ia(P,N,j,Q,z.w,z.d,"house",y,{color:"#f0d9a8",roof:"#3d7a7f",door:"#2b8a8f"}),h.placeBuildings.home={x:N,z:j,yaw:Q};continue}let Bt=U;const Vt={};if(mt&&(Vt.shop=!0,Vt.sign=!1,Vt.floors=Bt==="oldtown"?3:void 0),C==="alley"&&z.side!=="n"&&z.side!=="s")continue;const ee=ia(P,N,j,Q,z.w-.05,z.d,Bt,y,Vt);mt&&(h.placeBuildings[mt.id]={x:N,z:j,yaw:Q,H:ee.H,w:z.w,d:z.d})}if(C==="alley"){a.quad("cobble",M-3,_-k,M+3,_+k,.18,4);for(const z of[-1,1])for(let N=0;N<6;N++)P.add("box",M+z*3.2,.5+y()*3,_+y.range(-6,6),.08,y.range(1.5,3.5),y.range(2,6),y.pick(Ge.neon),{glow:y()<.3?1.2:0});d("bin",M-2,.18,_+3),d("crate",M+2,.18,_-4),h.vents.push([M+2.3,1.2,_-2])}}function v(w){return(w.t-.5)*(Ee-6)}{const w=Be(oe)+6,T=De(0)-6,S=De(le)+6;a.quad("brick",T,w,S,zt,.16,4,"z");const C=u(0,zt);C.add("box",0,-.7,zt+.4,S-T,1.8,.8,"#9a8f80");for(let M=T+1;M<S;M+=2.2)C.add("box",M,.16,zt,.1,1,.1,"#e8e2d6");C.add("box",0,1.15,zt,S-T,.08,.14,"#e8e2d6");for(let M=T+6;M<S;M+=18)d("lamp",M,.16,zt-.8,-Math.PI/2),d("lightpool",M,.2,zt-1.8,0,9),(M|0)%3===0&&d("lifebuoy",M+3,.16,zt-.3,0);for(let M=T+14;M<S;M+=22)d("bench",M,.16,zt-2.2,0),h.spots.push({type:"bench",x:M,z:zt-2.2,yaw:0,district:"harbor",view:"sea"});for(const M of[De(8)+12,De(10)+8,De(11)-6]){a.quad("planks",M-2.5,zt,M+2.5,zt+40,.1,4,"x");for(let _=zt+4;_<zt+40;_+=6)for(const y of[-1,1])C.add("cyl",M+y*2.3,-1.2,_,.4,2.8,.4,"#5a4632");for(let _=0;_<3;_++)d("boat",M+(_%2?6:-6),ua+.1,zt+12+_*10,0,1.2+_%2*.4,Ge.awning[(_+(M|0))%8]);h.spots.push({type:"pier",x:M,z:zt+36,yaw:0,district:"harbor",view:"sea"})}h.pierX=De(10)+8}d1({city:h,B:u,prop:d,G:a,facade:n,rnd:yn(99)});for(const w of Fe){if(h.placeBuildings[w.id],w.type==="tram"||w.type==="residence")continue;const T=e1(w.name,w.hidden?"#c9b98a":"#f8ecd2",w.hidden?"#1d1a17":["#3a2a22","#22384d","#2f4a3a","#4a2a3a"][w.name.length%4],w.hidden?2.2:4.6),[S,C]=w.door,M=Math.sin(w.yaw),_=Math.cos(w.yaw);if(w.outdoor){const y=new Mt(new en(.06,.06,2.6),new Me({color:"#2f3d3c"}));y.position.set(S-M*.6+_*2.6,1.3,C-_*.6-M*2.6),s.add(y),T.position.set(y.position.x,2.9,y.position.z),T.rotation.y=w.yaw,T.scale.multiplyScalar(.6)}else{T.position.set(S-M*1.5,4.6,C-_*1.5),T.rotation.y=w.yaw;const y=u(S,C);y.add("box",S-M*1.56,1.3,C-_*1.56,Math.abs(_)>.5?1.6:.12,2.6,Math.abs(M)>.5?1.6:.12,"#3b2a20"),y.add("box",S-M*1.55,2.75,C-_*1.55,Math.abs(_)>.5?1.7:.13,.3,Math.abs(M)>.5?1.7:.13,"#ffd79a",{glow:.9})}s.add(T),h.signs.push(T)}const b=[];for(const w of l){const T=new ke;if(T.name=`chunk-${w.cx}-${w.cz}`,!w.B.empty){const C=new Mt(w.B.geometry(),n);C.castShadow=!0,C.receiveShadow=!0,T.add(C)}const S=w.props.build(n);S.userData.props=!0,T.add(S),T.userData.center=new D(qe+(w.cx+.5)*pe*Ts,0,Fn+(w.cz+.5)*pe*Ts),s.add(T),b.push(T)}for(const w of a.meshes(i))s.add(w);return h.chunks=b,h.facade=n,h.groundMats=i,t(1),h}function p1(s,t,e,n,i){const a=n-e,o=(e+n)/2;s.add("box",t,-.5,o,18,1,a+.2,"#a39684");for(const r of[-1,1])s.add("box",t+r*7.5,0,o,3,.32,a,"#bfb3a1"),s.add("box",t+r*9.05,.6,o,.35,1,a,"#c9bca8"),s.add("box",t+r*9.05,1.15,o,.5,.12,a,"#ddd2c0");for(const r of[e+3,n-3])s.add("box",t,-2.6,r,17,4.2,4,"#958877");for(let r=0;r<=10;r++){const l=r/10,c=e+5+l*(a-10),h=-1-Math.sin(l*Math.PI)*.3-(1-Math.sin(l*Math.PI))*1.6;s.add("box",t,h,c,17.4,.6,(a-10)/10+.2,"#9d907e")}for(const r of[-1,1])for(const l of[e+4,o,n-4])i("lamp",t+r*8.7,.16,l,r>0?Math.PI:0,.85)}const yt=s=>new Lt(s),ji=[[0,yt("#0b1230"),yt("#1d2850"),yt("#8fa6ff"),.25,yt("#3a4a80"),yt("#24222c"),yt("#1a2242")],[4.8,yt("#141d44"),yt("#3a3c6a"),yt("#8fa6ff"),.2,yt("#33406e"),yt("#1a1a22"),yt("#2c3156")],[5.8,yt("#3f4f8a"),yt("#f2a27a"),yt("#ffb27a"),1,yt("#8a8fb8"),yt("#5a4a48"),yt("#d9a08a")],[7,yt("#5b8fd0"),yt("#f7d2a8"),yt("#ffd7a8"),2.2,yt("#b8cbe8"),yt("#7a6a58"),yt("#e8d2b8")],[10,yt("#4f8fe0"),yt("#cfe2f2"),yt("#fff4e2"),3,yt("#c6dcf2"),yt("#8a7a62"),yt("#d6e2ea")],[15,yt("#4c8ade"),yt("#d6e4f0"),yt("#fff1dc"),3,yt("#c6dcf2"),yt("#8a7a62"),yt("#d8e2e8")],[17.6,yt("#5579c4"),yt("#ffc98e"),yt("#ffbe7a"),2.4,yt("#d0c0c8"),yt("#8a6a52"),yt("#f0c8a0")],[18.8,yt("#4a4f96"),yt("#ff8e5e"),yt("#ff8a4a"),1.3,yt("#a88aa8"),yt("#5a4440"),yt("#e89a7a")],[19.8,yt("#22265a"),yt("#9a5a78"),yt("#ff7a5a"),.4,yt("#5a5888"),yt("#2a2228"),yt("#6a4a68")],[21,yt("#0d1434"),yt("#2a2f5c"),yt("#8fa6ff"),.25,yt("#3e4a80"),yt("#24222c"),yt("#1e2648")],[24,yt("#0b1230"),yt("#1d2850"),yt("#8fa6ff"),.25,yt("#3a4a80"),yt("#24222c"),yt("#1a2242")]];function m1(s){let t=ji[0],e=ji[1];for(let i=0;i<ji.length-1;i++)if(s>=ji[i][0]&&s<=ji[i+1][0]){t=ji[i],e=ji[i+1];break}const n=xl(Ce((s-t[0])/(e[0]-t[0]||1),0,1));return t.map((i,a)=>a===0?s:typeof i=="number"?we(i,e[a],n):i.clone().lerp(e[a],n))}function xo(s){return s<5?1:s<7?1-xl((s-5)/2):s<17.8?0:s<20.3?xl((s-17.8)/2.5):1}class x1{constructor(t,e){this.scene=t,this.uniforms={uZenith:{value:yt("#4f8fe0")},uHorizon:{value:yt("#cfe2f2")},uSunDir:{value:new D(0,1,0)},uSunCol:{value:yt("#fff")},uNight:ce.uNight,uTime:ce.uTime,uCloud:{value:.3},uStorm:{value:0}};const n=new vn(1800,32,16),i=new Ve({uniforms:this.uniforms,side:pn,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 uZenith, uHorizon, uSunDir, uSunCol; uniform float uNight, uTime, uCloud, uStorm; varying vec3 vDir;
        float h(vec3 p){ p = fract(p*0.3183099+.1); p *= 17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
        float n2(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); float a=fract(sin(dot(i,vec2(127.1,311.7)))*43758.5), b=fract(sin(dot(i+vec2(1,0),vec2(127.1,311.7)))*43758.5), c=fract(sin(dot(i+vec2(0,1),vec2(127.1,311.7)))*43758.5), d=fract(sin(dot(i+vec2(1,1),vec2(127.1,311.7)))*43758.5); return mix(mix(a,b,f.x),mix(c,d,f.x),f.y); }
        float fbm(vec2 p){ float s=0., a=.5; for(int i=0;i<5;i++){ s+=a*n2(p); p*=2.03; a*=.5; } return s; }
        void main(){
          vec3 d = normalize(vDir);
          float y = max(d.y, 0.0);
          vec3 col = mix(uHorizon, uZenith, pow(y, 0.55));
          if (d.y < 0.0) col = uHorizon * 0.9;
          float sd = max(dot(d, uSunDir), 0.0);
          col += uSunCol * (pow(sd, 6.0) * 0.25 + pow(sd, 64.0) * 0.6) * (1.0 - uStorm);
          col += uSunCol * smoothstep(0.9993, 0.9997, sd) * 4.0 * step(0.0, uSunDir.y) * (1.0 - uStorm);
          // moon opposite the sun
          vec3 md = normalize(-uSunDir + vec3(0.2, 0.25, 0.1));
          float m = dot(d, md);
          col += vec3(0.95, 0.95, 1.0) * smoothstep(0.9990, 0.9994, m) * uNight * 1.6;
          col += vec3(0.4, 0.5, 0.8) * pow(max(m, 0.0), 80.0) * uNight * 0.3;
          // stars
          vec3 sp = floor(d * 420.0);
          float st = step(0.9965, h(sp)) * smoothstep(0.02, 0.25, d.y);
          float tw = 0.6 + 0.4 * sin(uTime * 3.0 + h(sp + 3.1) * 40.0);
          col += vec3(1.0, 0.95, 0.85) * st * tw * uNight * (1.0 - uCloud) * 1.4;
          // milky band
          col += vec3(0.25, 0.25, 0.4) * smoothstep(0.25, 0.0, abs(d.x * 0.6 + d.z * 0.3 - d.y * 0.4)) * fbm(d.xz * 9.0) * uNight * 0.35 * (1.0 - uCloud);
          // clouds
          if (d.y > 0.0) {
            vec2 cp = d.xz / (d.y + 0.12) * 1.4 + vec2(uTime * 0.012, uTime * 0.004);
            float c = fbm(cp);
            float cov = smoothstep(1.0 - uCloud * 0.95 - 0.15, 1.05 - uCloud * 0.6, c + 0.2);
            vec3 cc = mix(uHorizon * 1.05 + 0.05, vec3(1.0), 0.45) * (1.0 - uNight * 0.75);
            cc = mix(cc, cc * 0.45, uStorm);
            cc += uSunCol * pow(sd, 8.0) * 0.5 * (1.0 - uNight);
            col = mix(col, cc, cov * smoothstep(0.0, 0.15, d.y) * 0.9);
          }
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.dome=new Mt(n,i),this.dome.frustumCulled=!1,this.dome.renderOrder=-1,t.add(this.dome),this.sun=new Wf("#fff",3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);const a=this.sun.shadow.camera;a.left=-90,a.right=90,a.top=90,a.bottom=-90,a.near=1,a.far=600,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.6,t.add(this.sun,this.sun.target),this.hemi=new dd("#c6dcf2","#8a7a62",1.2),t.add(this.hemi),t.fog=new Dl("#d6e2ea",120,900),this.flash=0,this.envTimer=0,this.pmrem=new pl(e),this.envScene=new Qh,this.envSky=new Mt(new vn(10,16,8),i),this.envScene.add(this.envSky),this.renderer=e,this.weather={kind:"clear",target:"clear",rain:0,snow:0,fog:0,cloud:.3,storm:0}}update(t,e,n,i){const[,a,o,r,l,c,h,d]=m1(t),u=this.weather,f=yt("#8c96a0"),m=Ce(u.cloud-.35,0,1)*.9+u.storm*.4;a.lerp(f.clone().multiplyScalar(we(1,.25,xo(t))),m*.8),o.lerp(f.clone().multiplyScalar(we(1.05,.3,xo(t))),m*.8),d.lerp(o,.5+m*.3),this.uniforms.uZenith.value.copy(a),this.uniforms.uHorizon.value.copy(o),this.uniforms.uSunCol.value.copy(r),this.uniforms.uCloud.value=u.cloud,this.uniforms.uStorm.value=u.storm;const g=(t-6.2)/12.8*Math.PI,p=new D(Math.cos(g),Math.sin(g)*.85,-.35).normalize(),x=xo(t);ce.uNight.value=x;const v=t<5?.12:t<8?.25:t<17?.08:t<23?.55:.3;ce.uLit.value=we(ce.uLit.value,v,Math.min(1,e*.5)),this.uniforms.uSunDir.value.copy(p.y>-.1?p:p.clone().negate().add(new D(.2,0,0)).normalize());const b=p.y>.05?p:new D(-p.x,Math.max(.35,-p.y),.4).normalize();this.sun.position.copy(n).addScaledVector(b,300),this.sun.target.position.copy(n);const w=1-m*.6;this.sun.color.copy(r),this.sun.intensity=(p.y>.05?l:.45*x)*w+this.flash*6,this.sun.shadow.normalBias=p.y>.05?.6:1.4,this.sun.shadow.bias=p.y>.05?-4e-4:-.0015,this.hemi.color.copy(c),this.hemi.groundColor.copy(h),this.hemi.intensity=we(1.25,1.25,x)*we(1,1.15,m)+this.flash*2;const T=this.scene.fog;T.color.copy(d);const S=(i==="low"?520:i==="medium"?760:980)*we(1,.22,u.fog)*we(1,.6,u.rain*.6+u.snow*.5);T.near=we(S*.18,10,u.fog),T.far=S,this.flash=Math.max(0,this.flash-e*4),this.envTimer-=e,this.envTimer<=0&&(this.envTimer=2.5,this.envRT&&this.envRT.dispose(),this.envRT=this.pmrem.fromScene(this.envScene,.04),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=we(.55,.12,x))}}class g1{constructor(t,e){this.sky=e,this.scene=t;const n=9e3,i=yn(3),a=new Float32Array(n*3),o=new Float32Array(n);for(let c=0;c<n;c++)a[c*3]=i.range(-60,60),a[c*3+1]=i.range(0,50),a[c*3+2]=i.range(-60,60),o[c]=i();const r=new Re;r.setAttribute("position",new tn(a,3)),r.setAttribute("aSeed",new tn(o,1)),this.u={uTime:ce.uTime,uCenter:{value:new D},uRain:{value:0},uSnow:{value:0},uNight:ce.uNight};const l=new Ve({uniforms:this.u,transparent:!0,depthWrite:!1,vertexShader:`uniform float uTime, uRain, uSnow; uniform vec3 uCenter; attribute float aSeed; varying float vA; varying float vSnow;
        void main(){
          vec3 p = position;
          float fall = mix(26.0, 2.2, uSnow);
          p.y = mod(p.y - uTime * fall * (0.8 + aSeed*0.4), 50.0);
          p.x += sin(uTime * 0.7 + aSeed * 30.0) * uSnow * 1.2;
          p.z += cos(uTime * 0.5 + aSeed * 20.0) * uSnow * 1.2;
          p.xz = mod(p.xz - uCenter.xz + 60.0, 120.0) - 60.0 + uCenter.xz;
          p.y += uCenter.y - 10.0;
          float on = step(aSeed, max(uRain, uSnow));
          vA = on; vSnow = uSnow;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = on * mix(1.6, 4.5, uSnow) * (60.0 / -mv.z) * mix(1.0, 1.0, uSnow);
        }`,fragmentShader:`uniform float uNight; varying float vA; varying float vSnow;
        void main(){ vec2 c = gl_PointCoord - 0.5; float a;
          if (vSnow > 0.5) a = smoothstep(0.5, 0.15, length(c));
          else a = smoothstep(0.12, 0.0, abs(c.x)) * 0.55;
          if (a * vA < 0.02) discard;
          vec3 col = mix(vec3(0.75,0.8,0.9), vec3(0.4,0.45,0.6), uNight);
          if (vSnow > 0.5) col = mix(vec3(1.0), vec3(0.7,0.75,0.9), uNight);
          gl_FragColor = vec4(col, a * vA); }`});this.points=new Il(r,l),this.points.frustumCulled=!1,t.add(this.points),this.nextFlash=5}update(t,e){const n=this.sky.weather,i={clear:[0,0,0,.25,0],cloudy:[0,0,.05,.75,0],rain:[.65,0,.15,.85,.1],storm:[1,0,.25,1,1],fog:[0,0,1,.6,0],snow:[0,.7,.25,.8,0]}[n.kind]||[0,0,0,.3,0],a=Math.min(1,t*.15);n.rain=we(n.rain,i[0],a),n.snow=we(n.snow,i[1],a),n.fog=we(n.fog,i[2],a),n.cloud=we(n.cloud,i[3],a),n.storm=we(n.storm,i[4],a),this.u.uRain.value=n.rain,this.u.uSnow.value=n.snow>.05?Math.max(n.snow,.51)*(n.snow>.05?1:0):0,n.snow>.05&&(this.u.uRain.value=0),this.u.uCenter.value.copy(e),ce.uWet.value=we(ce.uWet.value,n.rain>.2?1:0,t*(n.rain>.2?.08:.02)),ce.uSnow.value=we(ce.uSnow.value,n.snow>.3?.85:0,t*(n.snow>.3?.03:.05)),n.storm>.5&&(this.nextFlash-=t,this.nextFlash<0&&(this.sky.flash=1,this.nextFlash=4+Math.random()*10,this.onThunder?.()))}}function mr(s,t={}){const e=new Me({color:t.color||"#2f6f8f",roughness:.08,metalness:.1,transparent:!0,opacity:.92});return e.onBeforeCompile=n=>{Object.assign(n.uniforms,ce,{uHorizon:s.uniforms.uHorizon,uZenith:s.uniforms.uZenith,uSunDir:s.uniforms.uSunDir,uSunCol:s.uniforms.uSunCol,uFlow:{value:t.flow||new st(.4,0)},uDeep:{value:new Lt(t.deep||"#123a52")}}),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWP = (modelMatrix * vec4(transformed,1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime, uNight, uWet; uniform vec3 uHorizon, uZenith, uSunDir, uSunCol, uDeep; uniform vec2 uFlow; varying vec3 vWP;
vec3 wav(vec2 p){ float t = uTime; vec2 q = p + uFlow * t;
  float a = sin(q.x*0.35 + t*1.1) + sin(q.y*0.42 - t*0.9) * 0.8 + sin((q.x+q.y)*0.9 + t*1.7) * 0.4 + sin((q.x-q.y)*1.7 - t*2.3)*0.2;
  float dx = 0.35*cos(q.x*0.35 + t*1.1) + 0.9*0.4*cos((q.x+q.y)*0.9 + t*1.7) + 1.7*0.2*cos((q.x-q.y)*1.7 - t*2.3);
  float dz = -0.42*0.8*sin(q.y*0.42 - t*0.9) + 0.9*0.4*cos((q.x+q.y)*0.9 + t*1.7) - 1.7*0.2*cos((q.x-q.y)*1.7 - t*2.3);
  return normalize(vec3(-dx*0.12, 1.0, -dz*0.12)); }`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
vec3 wn = wav(vWP.xz);
normal = normalize((viewMatrix * vec4(wn, 0.0)).xyz);`).replace("#include <color_fragment>",`#include <color_fragment>
{ vec3 V = normalize(cameraPosition - vWP); vec3 wn2 = wav(vWP.xz);
  float fres = pow(1.0 - max(dot(V, wn2), 0.0), 3.0);
  vec3 R = reflect(-V, wn2);
  vec3 skyc = mix(uHorizon, uZenith, clamp(R.y, 0.0, 1.0));
  diffuseColor.rgb = mix(uDeep * mix(1.0, 0.3, uNight), skyc, 0.25 + fres * 0.65);
  float sp = pow(max(dot(R, uSunDir), 0.0), 220.0);
  diffuseColor.rgb += uSunCol * sp * 3.0 * (1.0 - uNight);
  // shimmering city light reflections at night
  float streak = pow(max(0.0, sin(vWP.x * 0.9 + sin(vWP.z * 2.3 + uTime) * 1.5)), 18.0) * pow(max(0.0, sin(vWP.z * 0.15)), 2.0);
  diffuseColor.rgb += vec3(1.0, 0.7, 0.4) * streak * uNight * 0.6;
}`)},e}function b1(s,t,{riverZ0:e,riverZ1:n,waterY:i,seaZ:a,seaY:o,pond:r}){const l=new Mt(new Qe(2400,n-e+2,1,1).rotateX(-Math.PI/2),mr(t,{flow:new st(.9,0)}));l.position.set(0,i,(e+n)/2),l.receiveShadow=!0,s.add(l);const c=new Mt(new Qe(4e3,2e3,1,1).rotateX(-Math.PI/2),mr(t,{color:"#2d6d8c",deep:"#0f3550",flow:new st(.1,.25)}));c.position.set(0,o,a+1e3),c.receiveShadow=!0,s.add(c);const h=new Mt(new Qe(4e3,2e3).rotateX(-Math.PI/2),new Me({color:"#1d3f4f"}));return h.position.set(0,o-6,a+1e3),s.add(h),r&&(r.material=mr(t,{color:"#3f7f7a",deep:"#1f4a40",flow:new st(.05,.05)}),s.add(r)),{river:l,sea:c}}class v1{constructor(t,e){this.scene=t,this.city=e;const n=yn(11),i=[];for(const v of e.fountains)i.push({type:0,x:v.x,y:v.top,z:v.z,s:v.s});for(const v of e.vents)i.push({type:1,x:v[0],y:v[1],z:v[2],s:1});const a=140,o=i.length*a,r=new Float32Array(o*3),l=new Float32Array(o*4);i.forEach((v,b)=>{for(let w=0;w<a;w++){const T=b*a+w;r.set([v.x,v.y,v.z],T*3),l.set([v.type,n(),n()*Math.PI*2,v.s],T*4)}});const c=new Re;c.setAttribute("position",new tn(r,3)),c.setAttribute("aP",new tn(l,4)),this.particles=new Il(c,new Ve({uniforms:{uTime:ce.uTime,uNight:ce.uNight},transparent:!0,depthWrite:!1,vertexShader:`uniform float uTime; attribute vec4 aP; varying float vT; varying float vType; varying float vLife;
        void main(){ float type = aP.x; float life = fract(uTime * (type < 0.5 ? 0.55 : 0.18) + aP.y); vType = type; vLife = life;
          vec3 p = position;
          if (type < 0.5) { float sp = (1.0 + aP.y * 0.8) * aP.w; p.x += cos(aP.z) * life * 2.4 * sp; p.z += sin(aP.z) * life * 2.4 * sp; p.y += life * 4.2 - life * life * 6.4 + 0.2; }
          else { p.x += sin(aP.z + life * 3.0) * life * 1.2; p.z += cos(aP.z) * life * 0.8; p.y += life * 6.0; }
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
          gl_PointSize = (type < 0.5 ? 6.0 : mix(30.0, 110.0, life)) * (10.0 / -mv.z); }`,fragmentShader:`uniform float uNight; varying float vType; varying float vLife;
        void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d);
          vec3 c = mix(vec3(0.85, 0.93, 1.0), vec3(0.5, 0.6, 0.8), uNight);
          if (vType > 0.5) { a *= 0.22 * sin(vLife * 3.14159); c = mix(vec3(0.95), vec3(0.55,0.55,0.65), uNight); } else a *= 0.8;
          if (a < 0.01) discard; gl_FragColor = vec4(c, a); }`})),this.particles.frustumCulled=!1,t.add(this.particles);const h=[],d=[],u=[],f=["#e85a3a","#f2b33d","#2e86ab","#27ae60","#e84393","#f4efe6"];for(const v of e.flags){const b=Math.hypot(v.x1-v.x0,v.z1-v.z0),w=Math.floor(b/(v.kind==="lanterns"?1.6:.9));for(let T=1;T<w;T++){const S=T/w,C=v.x0+(v.x1-v.x0)*S,M=v.z0+(v.z1-v.z0)*S,_=v.y-Math.sin(S*Math.PI)*1.2,y=new st(v.x1-v.x0,v.z1-v.z0).normalize(),P=new Lt(v.kind==="lanterns"?n.pick(["#ff7a3d","#ffcf6a","#ff4f6a"]):f[T%f.length]);if(v.kind==="lanterns"){const U=[[0,.35,0],[.35,0,0],[0,-.35,0],[-.35,0,0],[0,0,.35],[0,0,-.35]],W=[[0,1,4],[0,4,3],[0,3,5],[0,5,1],[2,4,1],[2,3,4],[2,5,3],[2,1,5]];for(const H of W)for(const Z of H)h.push(C+U[Z][0],_-.4+U[Z][1],M+U[Z][2]),d.push(P.r,P.g,P.b),u.push(0,1,n())}else{h.push(C-y.x*.32,_,M-y.y*.32,C+y.x*.32,_,M+y.y*.32,C,_-.6,M);for(let U=0;U<3;U++)d.push(P.r,P.g,P.b),u.push(U===2?1:0,0,n())}}}const m=new Re;m.setAttribute("position",new Qt(h,3)),m.setAttribute("color",new Qt(d,3)),m.setAttribute("aW",new Qt(u,3)),m.computeVertexNormals();const g=new Me({vertexColors:!0,side:Un,roughness:.8});g.onBeforeCompile=v=>{v.uniforms.uTime=ce.uTime,v.uniforms.uNight=ce.uNight,v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; attribute vec3 aW; varying float vLantern;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLantern = aW.y;
float sway = sin(uTime * 2.2 + aW.z * 6.28 + position.x * 0.3) * 0.25;
transformed.x += sway * aW.x * 0.6 + sway * aW.y * 0.15; transformed.z += cos(uTime * 1.7 + aW.z * 5.0) * 0.18 * (aW.x + aW.y * 0.4);`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight; varying float vLantern;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * vLantern * mix(0.3, 2.2, uNight);`)},this.flags=new Mt(m,g),this.flags.castShadow=!0,t.add(this.flags);const p=new Re;p.setAttribute("position",new Qt([0,0,.25,-.6,0,-.1,0,0,-.2,0,0,.25,0,0,-.2,.6,0,-.1],3)),p.computeVertexNormals();const x=new Ln({color:"#3a3a44",side:Un});x.onBeforeCompile=v=>{v.uniforms.uTime=ce.uTime,v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float ph = float(gl_InstanceID) * 1.37;
transformed.y += abs(position.x) * sin(uTime * 9.0 + ph) * 0.9;`)},this.birdCount=60,this.birds=new Oi(p,x,this.birdCount),this.birds.frustumCulled=!1,this.birdData=Array.from({length:this.birdCount},(v,b)=>{const w=b>=36,T=w?3:b%3,C=[[-60,-120],[80,60],[20,-40],[40,300]][T];return{cx:C[0]+n.range(-20,20),cz:C[1]+n.range(-20,20),y:n.range(w?12:26,w?30:60),rad:n.range(20,60),sp:n.range(.15,.35)*(n()<.5?1:-1),ph:n()*6.28,s:w?1.6:.9}}),t.add(this.birds),this.m4=new ie,this.q=new Dn,this.v=new D,this.e=new _n,this.lamps=e.lamps,this.pl=[];for(let v=0;v<4;v++){const b=new fd("#ffc27a",0,22,1.6);t.add(b),this.pl.push(b)}}update(t,e,n,i){for(let o=0;o<this.birdCount;o++){const r=this.birdData[o],l=r.ph+t*r.sp,c=r.cx+Math.cos(l)*r.rad,h=r.cz+Math.sin(l)*r.rad,d=r.y+Math.sin(t*.5+r.ph)*3;this.e.set(0,-l+(r.sp>0?0:Math.PI),Math.sin(t+r.ph)*.2),this.q.setFromEuler(this.e),this.m4.compose(this.v.set(c,d,h),this.q,new D(r.s,r.s,r.s)),this.birds.setMatrixAt(o,this.m4)}this.birds.instanceMatrix.needsUpdate=!0,this.birds.visible=ce.uNight.value<.8;const a=ce.uNight.value;if(a>.05&&i!=="low"){const o=this.lamps.map(r=>[r,(r[0]-n.x)**2+(r[1]-n.z)**2]).sort((r,l)=>r[1]-l[1]).slice(0,this.pl.length);this.pl.forEach((r,l)=>{const c=o[l];c&&(r.position.set(c[0][0],3.6,c[0][1]),r.intensity=a*30)})}else this.pl.forEach(o=>o.intensity=0)}}const Es=2400;class _1{constructor(t){const e=new Re;this.pos=new Float32Array(Es*3),this.vel=new Float32Array(Es*3),this.col=new Float32Array(Es*3),this.life=new Float32Array(Es),e.setAttribute("position",new tn(this.pos,3)),e.setAttribute("color",new tn(this.col,3)),e.setAttribute("life",new tn(this.life,1));const n=new Ve({transparent:!0,depthWrite:!1,blending:Us,vertexColors:!0,vertexShader:"attribute float life; varying vec3 vC; varying float vL; void main(){ vC = color; vL = life; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = (life > 0.0 ? 2.0 + life * 5.0 : 0.0) * (300.0 / -mv.z); gl_Position = projectionMatrix * mv; }",fragmentShader:"varying vec3 vC; varying float vL; void main(){ float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; gl_FragColor = vec4(vC * (1.6 - d * 2.0), smoothstep(0.0, 0.3, vL) * (1.0 - d * 2.0)); }"});this.points=new Il(e,n),this.points.frustumCulled=!1,t.add(this.points),this.next=0,this.cursor=0,this.active=!1,this.onBoom=null}burst(t,e,n){const i=Math.random(),a=new Lt().setHSL(i,.85,.62),o=new Lt().setHSL((i+.12)%1,.9,.7),r=140+Math.random()*80|0,l=9+Math.random()*6;for(let c=0;c<r;c++){const h=this.cursor;this.cursor=(this.cursor+1)%Es;const d=Math.random()*2-1,u=Math.random()*Math.PI*2,f=Math.sqrt(1-d*d),m=l*(.85+Math.random()*.15);this.pos.set([t,e,n],h*3),this.vel.set([f*Math.cos(u)*m,d*m,f*Math.sin(u)*m],h*3);const g=c%3?a:o;this.col.set([g.r,g.g,g.b],h*3),this.life[h]=1.4+Math.random()*.6}this.onBoom?.(t,n)}update(t,e,n){e&&(this.next-=t,this.next<0&&(this.next=.7+Math.random()*1.6,this.burst(n.x+(Math.random()-.5)*140,55+Math.random()*35,n.z+60+Math.random()*60)));let i=!1;for(let a=0;a<Es;a++){if(this.life[a]<=0)continue;i=!0,this.life[a]-=t*.75;const o=a*3;this.vel[o+1]-=6*t,this.vel[o]*=1-t*1.2,this.vel[o+1]*=1-t*1.2,this.vel[o+2]*=1-t*1.2,this.pos[o]+=this.vel[o]*t,this.pos[o+1]+=this.vel[o+1]*t,this.pos[o+2]+=this.vel[o+2]*t}if(this.points.visible=i,i){const a=this.points.geometry.attributes;a.position.needsUpdate=!0,a.color.needsUpdate=!0,a.life.needsUpdate=!0}}}const fh=Ee/2-1.4;class y1{constructor(t){this.nodes=[],this.edges=[],this.adj=[],this.byKey={};const e=(h,d,u,f={})=>{if(this.byKey[h]!==void 0)return this.byKey[h];const m=this.nodes.length;return this.nodes.push({id:m,key:h,x:d,z:u,...f}),this.adj.push([]),this.byKey[h]=m,m},n=(h,d,u="walk",f={})=>{if(h===d)return;const m=this.nodes[h],g=this.nodes[d],p=Math.hypot(m.x-g.x,m.z-g.z),x={a:h,b:d,len:p,type:u,...f},v=this.edges.length;this.edges.push(x),this.adj[h].push({to:d,e:v}),this.adj[d].push({to:h,e:v})};this.node=e,this.edge=n;const i=(h,d,u)=>{const[f,m]=We(h,d),g=u.includes("e")?1:-1,p=u.includes("s")?1:-1;return e(`c:${h}:${d}:${u}`,f+g*fh,m+p*fh,{district:zn(h,d)})};for(let h=0;h<oe;h++)for(let d=0;d<le;d++){const u=i(d,h,"nw"),f=i(d,h,"ne"),m=i(d,h,"sw"),g=i(d,h,"se");this.sideEdges||={},this.sideEdges[`${d}:${h}:n`]=[u,f],this.sideEdges[`${d}:${h}:s`]=[m,g],this.sideEdges[`${d}:${h}:w`]=[u,m],this.sideEdges[`${d}:${h}:e`]=[f,g]}const a={};for(const h of Fe){const d=e("p:"+h.id,h.door[0],h.door[1],{place:h.id,district:h.district});if(h.node=d,h.id==="lighthouse")continue;const u=`${h.i}:${h.j}:${h.side}`;(a[u]||=[]).push(d)}for(const[h,[d,u]]of Object.entries(this.sideEdges)){const[f,m]=h.split(":").map(Number),g=(a[h]||[]).slice().sort((v,b)=>xr(this.nodes[d],this.nodes[v])-xr(this.nodes[d],this.nodes[b])),p=[d,...g,u],x=ii(f,m)?"grass":"walk";for(let v=0;v<p.length-1;v++)n(p[v],p[v+1],x)}for(let h=0;h<oe;h++)for(let d=0;d<le;d++)if(ii(d,h)){const[u,f]=We(d,h),m=e(`pc:${d}:${h}`,u,f,{district:"park"});for(const g of["nw","ne","sw","se"])n(m,this.byKey[`c:${d}:${h}:${g}`],"grass");for(const g of Fe)g.i===d&&g.j===h&&n(m,g.node,"grass")}for(let h=0;h<oe;h++)for(let d=0;d<le;d++){if(d+1<le){const u=t.roadOpen.v[`${d+1},${h}`];n(this.byKey[`c:${d}:${h}:ne`],this.byKey[`c:${d+1}:${h}:nw`],u?"cross":"grass",{axis:"v",ix:d+1,iz:h}),n(this.byKey[`c:${d}:${h}:se`],this.byKey[`c:${d+1}:${h}:sw`],u?"cross":"grass",{axis:"v",ix:d+1,iz:h+1})}if(h+1<oe){const u=t.roadOpen.h[`${d},${h+1}`];n(this.byKey[`c:${d}:${h}:sw`],this.byKey[`c:${d}:${h+1}:nw`],u?"cross":"grass",{axis:"h",ix:d,iz:h+1}),n(this.byKey[`c:${d}:${h}:se`],this.byKey[`c:${d}:${h+1}:ne`],u?"cross":"grass",{axis:"h",ix:d+1,iz:h+1})}}const o=zt-4;let r=null;const l=[];for(let h=0;h<le;h++)for(const d of[De(h)+7.4,De(h+1)-7.4]){const u=e(`prom:${h}:${d.toFixed(1)}`,d,o,{district:"harbor"});l.push(u),r!==null&&n(r,u,"walk"),r=u;const f=d<De(h)+20?"sw":"se";n(this.byKey[`c:${h}:${oe-1}:${f}`],u,"cross",{axis:"h",ix:f==="sw"?h:h+1,iz:oe})}const c=h=>{let d=null,u=1e9;for(const f of l){const m=xr(this.nodes[f],this.nodes[h]);m<u&&(u=m,d=f)}n(d,h,"walk")};for(const h of[De(8)+12,De(10)+8,De(11)-6]){const d=e(`pier:${h}:a`,h,o,{district:"harbor"});c(d);const u=e(`pier:${h}:b`,h,zt+36,{district:"harbor",pier:!0});n(d,u,"wood")}if(t.ferris){const h=e("ferris:a",t.ferris[0],o);c(h);const d=e("ferris:b",t.ferris[0],t.ferris[1]-4,{spot:"ferris"});n(h,d,"wood")}if(t.lighthouse){const h=Fe.find(f=>f.id==="lighthouse"),d=e("lh:a",t.lighthouse[0],o);c(d);const u=e("lh:m",t.lighthouse[0],(zt+t.lighthouse[1])/2);n(d,u,"stone"),n(u,h.node,"stone"),this.nodes[h.node].x=h.door[0],this.nodes[h.node].z=h.door[1]}this.city=t}nearest(t,e,n){let i=null,a=1e18;for(let o=0;o<this.edges.length;o++){const r=this.edges[o];if(n&&!n(r))continue;const l=this.nodes[r.a],c=this.nodes[r.b],h=c.x-l.x,d=c.z-l.z,u=h*h+d*d||1,f=Math.max(0,Math.min(1,((t-l.x)*h+(e-l.z)*d)/u)),m=l.x+h*f,g=l.z+d*f,p=(m-t)**2+(g-e)**2;p<a&&(a=p,i={e:o,t:f,x:m,z:g,d:Math.sqrt(p)})}return i}nearestNode(t,e){let n=0,i=1e18;for(const a of this.nodes){const o=(a.x-t)**2+(a.z-e)**2;o<i&&(i=o,n=a.id)}return n}path(t,e,n){const i=this.nearest(t,e,f=>f.type!=="cross");if(!i)return null;const a=this.edges[i.e],o=this.nodes[n],r=new Map,l=new Map,c=new Map,h=f=>Math.hypot(this.nodes[f].x-o.x,this.nodes[f].z-o.z);for(const[f,m]of[[a.a,i.t],[a.b,1-i.t]]){const g=a.len*m;l.set(f,g),r.set(f,g+h(f)),c.set(f,null)}for(;r.size;){let f=null,m=1e18;for(const[g,p]of r)p<m&&(m=p,f=g);if(r.delete(f),f===n)break;for(const{to:g,e:p}of this.adj[f]){const x=this.edges[p],v=l.get(f)+x.len+(x.type==="cross"?4:0)+(x.type==="grass"?x.len*.15:0);(!l.has(g)||v<l.get(g))&&(l.set(g,v),c.set(g,{from:f,e:p}),r.set(g,v+h(g)))}}if(!c.has(n))return null;const d=[];let u=n;for(;u!==null&&c.get(u);){const f=c.get(u);d.unshift({x:this.nodes[u].x,z:this.nodes[u].z,edge:this.edges[f.e],node:u}),u=f.from}for(d.unshift({x:this.nodes[u].x,z:this.nodes[u].z,edge:null,node:u}),d.unshift({x:i.x,z:i.z,edge:null});d.length>2&&Math.hypot(d[1].x-t,d[1].z-e)<.3;)d.shift();return d}randomNeighbor(t,e){const n=this.adj[t].filter(a=>a.to!==e),i=n.length?n:this.adj[t];return i[Math.floor(Math.random()*i.length)]}}const xr=(s,t)=>Math.hypot(s.x-t.x,s.z-t.z),ph=26;class w1{constructor(t,e,n,i="high"){this.scene=t,this.city=e;const a=this.r=yn(21);this.offsets={};for(let g=0;g<=le;g++)for(let p=0;p<=oe;p++)this.offsets[`${g},${p}`]=a()*ph;this.time=0,this.segs=[];for(let g=0;g<=le;g++)for(let p=0;p<oe;p++)e.roadOpen.v[`${g},${p}`]&&this.segs.push({a:[g,p],b:[g,p+1]});for(let g=0;g<=oe;g++)for(let p=0;p<le;p++)e.roadOpen.h[`${p},${g}`]&&this.segs.push({a:[p,g],b:[p+1,g]});this.out={};for(const g of this.segs)(this.out[g.a.join()]||=[]).push(g.b),(this.out[g.b.join()]||=[]).push(g.a);const o=[so("sedan"),so("van"),so("hatch"),so("taxi")],r=i==="low"?50:i==="medium"?90:140;this.cars=[],this.meshes=o.map(g=>{const p=new Oi(g,n,r);return p.castShadow=!0,p.receiveShadow=!0,p.count=0,p.frustumCulled=!1,t.add(p),p});const l=["#c0392b","#2e86ab","#f4efe6","#2c3e50","#27ae60","#e67e22","#8e44ad","#95a5a6","#d4ac0d","#5d6d7e","#a04000","#f2d7d5"];for(let g=0;g<r;g++){const p=this.segs[Math.floor(a()*this.segs.length)],x=a()<.5,v=a()<.08?3:a()<.18?1:a()<.5?2:0;this.cars.push({from:x?p.a:p.b,to:x?p.b:p.a,s:a()*30,v:6,type:v,color:new Lt(v===3?"#f1c40f":l[g%l.length]),turn:null,slot:0})}this.cars.forEach(g=>{g.slot=this.meshes[g.type].count++,this.meshes[g.type].setColorAt(g.slot,g.color)}),this.meshes.forEach(g=>{g.count=0}),this.lights=[];const c=new Rn;c.add("cyl",0,2.2,0,.14,4.4,.14,"#2a3238"),c.add("box",0,4.1,0,.36,1,.3,"#22282c");const h=new vn(.13,8,6),d=[];for(let g=0;g<=le;g++)for(let p=0;p<=oe;p++)(this.out[`${g},${p}`]||[]).length>=3&&d.push([g,p]);this.poles=new Oi(c.geometry(),n,d.length*2),this.bulbs=new Oi(h,new Ln({toneMapped:!1}),d.length*4);const u=new ie;let f=0,m=0;for(const[g,p]of d){const x=De(g),v=Be(p);for(const[b,w]of[[-1,-1],[1,1]]){const T=x+b*6.6,S=v+w*6.6;u.makeTranslation(T,.16,S),this.poles.setMatrixAt(f++,u),u.makeTranslation(T,4.3,S+w*.17),this.bulbs.setMatrixAt(m,u),this.lights.push({k:g,l:p,axis:"v",i:m++}),u.makeTranslation(T+b*.2,3.9,S),this.bulbs.setMatrixAt(m,u),this.lights.push({k:g,l:p,axis:"h",i:m++})}}this.poles.castShadow=!0,t.add(this.poles,this.bulbs),this.lightTimer=0,this.tram=M1(n),t.add(this.tram.group),this.tram.x=De(_d),this.tram.z=Be(0)+8,this.tram.dir=1,this.tram.v=0,this.tram.wait=0,this.tram.stops=["tram_stop_n","tram_stop_c","tram_stop_s"].map(g=>({id:g,z:Ut[g].door[1]+5})),this.tram.stopIdx=0,this.tram.riders=new Set,this.m4=new ie,this.q=new Dn,this.v3=new D,this.one=new D(1,1,1),this.walkers=[]}phase(t,e){return(this.time+this.offsets[`${t},${e}`])%ph}green(t,e,n){const i=this.phase(t,e);return n==="v"?i<11:i>=13&&i<24}amber(t,e,n){const i=this.phase(t,e);return n==="v"?i>=11&&i<12.5:i>=24&&i<25.5}canCross(t,e,n){if(!(this.out[`${t},${e}`]||[]).length||(this.out[`${t},${e}`]||[]).length<3)return!0;const i=this.phase(t,e);return n==="v"?i>=13&&i<22:i<9}lanePoint(t,e,n,i=1){const a=De(t[0]),o=Be(t[1]),r=De(e[0]),l=Be(e[1]),c=Math.hypot(r-a,l-o),h=(r-a)/c,d=(l-o)/c,u=3*i;return{x:a+h*n-d*u,z:o+d*n+h*u,dx:h,dz:d,len:c}}update(t,e,n){this.time+=t;const i=new Map;for(const r of this.cars){const l=r.from.join()+">"+r.to.join();(i.get(l)||i.set(l,[]).get(l)).push(r)}for(const r of i.values())r.sort((l,c)=>l.s-c.s);const a=[0,0,0,0];for(const r of this.cars){const l=this.lanePoint(r.from,r.to,0),c=l.len,h=r.from[0]===r.to[0]?"v":"h";let u=zn(Ce(Math.min(r.from[0],r.to[0]),0,le-1),Ce(Math.min(r.from[1],r.to[1]),0,oe-1))==="oldtown"?6:10;if(r.turn)r.v=we(r.v,Math.min(u,6),1-Math.exp(-t*2)),r.turn.t+=r.v*t/r.turn.len,r.turn.t>=1&&(r.from=r.to,r.to=r.turn.next,r.s=6,r.turn=null);else{const v=c-9.8,b=this.green(r.to[0],r.to[1],h)||this.amber(r.to[0],r.to[1],h)&&r.s>v-4;(this.out[r.to.join()]||[]).length>=3&&!b&&r.s<v+.5&&(u=Math.min(u,Math.max(0,(v-r.s)*1.2)));const T=i.get(r.from.join()+">"+r.to.join()),S=T.indexOf(r);if(S>=0&&S<T.length-1){const C=T[S+1].s-r.s-5;u=Math.min(u,Math.max(0,C*1.1))}for(const C of n){const M=C.x-(l.x+l.dx*(c-7.4)),_=C.z-(l.z+l.dz*(c-7.4)),y=M*l.dx+_*l.dz,P=Math.abs(-M*l.dz+_*l.dx);Math.abs(y)<1.6&&P<7&&r.s<c-8&&(u=Math.min(u,Math.max(0,(c-9.5-r.s)*1)));const k=C.x-(l.x+l.dx*7.4),U=C.z-(l.z+l.dz*7.4);Math.abs(k*l.dx+U*l.dz)<1.6&&Math.abs(-k*l.dz+U*l.dx)<7&&r.s<5&&(u=0)}if(r.v=we(r.v,u,1-Math.exp(-t*(u<r.v?3.5:1.2))),r.s+=r.v*t,r.s>=c-6){const C=(this.out[r.to.join()]||[]).filter(U=>!(U[0]===r.from[0]&&U[1]===r.from[1])),M=C.length?C[Math.floor(this.r()*C.length)]:r.from,_=this.lanePoint(r.from,r.to,c-6),y=this.lanePoint(r.to,M,6),P={x:(_.x+y.x)/2,z:(_.z+y.z)/2},k=_.dx*y.dz-_.dz*y.dx;if(Math.abs(k)>.1){const U=((y.x-_.x)*y.dz-(y.z-_.z)*y.dx)/k;P.x=_.x+_.dx*U,P.z=_.z+_.dz*U}r.turn={p0:_,p1:P,p2:y,t:0,next:M,len:Math.hypot(y.x-_.x,y.z-_.z)*(Math.abs(k)>.1?1.2:1)}}}let f,m,g;if(r.turn){const{p0:v,p1:b,p2:w}=r.turn,T=Math.min(1,r.turn.t),S=1-T;f=S*S*v.x+2*S*T*b.x+T*T*w.x,m=S*S*v.z+2*S*T*b.z+T*T*w.z;const C=2*S*(b.x-v.x)+2*T*(w.x-b.x),M=2*S*(b.z-v.z)+2*T*(w.z-b.z);g=Math.atan2(C,M)}else{const v=this.lanePoint(r.from,r.to,r.s);f=v.x,m=v.z,g=Math.atan2(v.dx,v.dz)}r.x=f,r.z=m,r.yaw=g;const p=this.meshes[r.type];this.q.setFromAxisAngle($e.DEFAULT_UP,g),this.m4.compose(this.v3.set(f,.02,m),this.q,this.one);const x=a[r.type]++;p.setMatrixAt(x,this.m4),p.setColorAt(x,r.color)}if(this.meshes.forEach((r,l)=>{r.count=a[l],r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0)}),this.lightTimer-=t,this.lightTimer<0){this.lightTimer=.25;const r=new Lt;for(const l of this.lights){const c=this.green(l.k,l.l,l.axis),h=this.amber(l.k,l.l,l.axis);r.set(c?"#4dff88":h?"#ffc23a":"#ff3b30"),this.bulbs.setColorAt(l.i,r)}this.bulbs.instanceColor.needsUpdate=!0}const o=this.tram;if(o.wait>0)o.wait-=t,o.v=0,o.doors=Math.min(1,o.doors+t*2);else{o.doors=Math.max(0,(o.doors||0)-t*2);const r=o.stops[o.stopIdx],l=(r.z-o.z)*o.dir;let c=9;l<30&&(c=Math.max(1.2,l*.35));for(const h of n)Math.abs(h.x-o.x)<2.2&&(h.z-o.z)*o.dir>0&&(h.z-o.z)*o.dir<14&&(c=0);o.v=we(o.v,c,1-Math.exp(-t*1.2)),o.z+=o.v*t*o.dir,l<=.3&&(o.z=r.z,o.wait=9,this.onTramStop?.(r.id),o.stopIdx===o.stops.length-1&&o.dir>0?o.dir=-1:o.stopIdx===0&&o.dir<0&&(o.dir=1),o.stopIdx+=o.dir)}o.group.position.set(o.x,.06,o.z),o.group.rotation.y=o.dir>0?0:Math.PI,o.doorL.position.x=1.33+(o.doors||0)*.02,o.doorL.scale.z=1-(o.doors||0)*.85}obstacles(){return this.cars.map(t=>({x:t.x,z:t.z,r:2.4})).concat([{x:this.tram.x,z:this.tram.z,r:6}])}}function so(s){const t=new Rn,e=s==="van"?2:1.8,n=s==="van"?4.8:s==="hatch"?3.6:4.3,i="#ffffff";t.add("box",0,.55,0,e,.6,n,i),s==="van"?t.add("box",0,1.35,-.3,e-.05,1.1,n-1.2,i):t.add("box",0,1.1,s==="hatch"?-.2:-.15,e-.2,.6,n*.55,i);const a=s==="van"?1.45:1.12,o=s==="van"?n-1.3:n*.5;t.add("box",0,a,s==="van"?-.3:-.15,e-.12,.42,o,"#1c2630"),t.add("box",0,a,(s==="van"?-.3:-.15)+o/2+.02,e-.3,.42,.06,"#26323e");for(const r of[-1,1])for(const l of[-1,1])t.add("cyl",r*(e/2-.05),.33,l*(n/2-.75),.66,.28,.66,"#1a1a1a",{rz:Math.PI/2});for(const r of[-1,1])t.add("box",r*(e/2-.3),.7,n/2+.01,.35,.16,.04,"#fff3c8",{glow:1}),t.add("box",r*(e/2-.3),.7,-n/2-.01,.35,.14,.04,"#ff2a2a",{glow:1});return t.add("box",0,.42,n/2,e,.18,.08,"#d0d0d0"),s==="taxi"&&t.add("box",0,1.5,-.1,.6,.18,.3,"#fff6c0",{glow:1.2}),t.geometry()}function M1(s){const t=new Rn,e=14;t.add("box",0,1.6,0,2.5,2.6,e,"#e8e2d0"),t.add("box",0,.55,0,2.55,.5,e+.1,"#1f6f5c"),t.add("box",0,2.95,0,2.3,.2,e-.4,"#1f6f5c");for(const o of[-1,1])for(let r=0;r<7;r++)t.add("box",o*1.26,1.95,-e/2+1.2+r*1.95,.04,1,1.5,"#2a3a44",{glow:0});for(const o of[-1,1])t.add("box",0,1.9,o*(e/2+.01),2.2,1,.04,"#2a3a44");for(const o of[-1,1])t.add("box",0,.95,o*(e/2+.02),1.6,.18,.04,"#fff3c8",{glow:1});t.add("box",0,3.25,0,.1,.5,1.2,"#333"),t.add("box",0,3.5,0,1.6,.05,.1,"#333"),t.add("box",0,2.75,e/2+.03,1.4,.3,.04,"#ffd23f",{glow:1.3});const n=new ke,i=new Mt(t.geometry(),s);i.castShadow=!0,n.add(i);const a=new Mt(new Oe(.06,2,1.3),new Me({color:"#1f6f5c"}));return a.position.set(1.33,1.3,0),n.add(a),{group:n,doorL:a}}const Sd=[{id:"mira",name:"Mira Okonkwo",species:"cat",job:"barista",work:"cafe",traits:["quick-witted","teasing","secretly sentimental"],quirk:"names every regular after a weather pattern",fur:"#d9a066",cloth:"#7a3b2e"},{id:"ruth",name:"Old Ruth",species:"bear",job:"baker",work:"bakery",traits:["gruff","generous","early riser"],quirk:"hums sea shanties while kneading",fur:"#8a6a52",cloth:"#f4efe6"},{id:"teodor",name:"Teodor Vass",species:"dog",job:"bookshop owner",work:"bookstore",traits:["dreamy","pedantic about first editions","kind"],quirk:"never finishes a sentence about his own poetry",fur:"#c9b28a",cloth:"#3f5566"},{id:"mo",name:"Mo Haddad",species:"bear",job:"corner store owner",work:"corner_store",traits:["chatty","nosy","loyal"],quirk:"knows everyone's business by noon",fur:"#5a4030",cloth:"#2e86ab"},{id:"juniper",name:"Juniper Lake",species:"rabbit",job:"librarian",work:"library",traits:["quiet","precise","dry humour"],quirk:"shushes even when nobody is talking",fur:"#e8e0d8",cloth:"#5f7f5a"},{id:"dex",name:"Dex",species:"cat",job:"arcade attendant",work:"arcade",traits:["competitive","sarcastic","soft on newcomers"],quirk:"holds the high score on every machine but one",fur:"#3a3a3a",cloth:"#7b6fd0"},{id:"paloma",name:"Paloma Reyes",species:"dog",job:"cinema usher",work:"cinema",traits:["dramatic","warm","movie trivia machine"],quirk:"quotes films at the wrong moment",fur:"#b5651d",cloth:"#a8323e"},{id:"kenji",name:"Kenji Mori",species:"cat",job:"ramen chef",work:"noodle_bar",traits:["perfectionist","quiet","proud"],quirk:"has restarted his broth recipe 41 times",fur:"#f0e6d8",cloth:"#22384d"},{id:"agnes",name:"Agnes Pell",species:"rabbit",job:"department store clerk",work:"dept_store",traits:["stylish","blunt","honest"],quirk:"judges everyone by their shoes",fur:"#9a8a7a",cloth:"#e84393"},{id:"luz",name:"Luz Marín",species:"cat",job:"gallery curator",work:"gallery",traits:["intense","encouraging","chaotic"],quirk:'calls everything "a statement"',fur:"#e8a46c",cloth:"#2b2b2b"},{id:"otis",name:"Otis Grumbleton",species:"bear",job:"theater director",work:"theater",traits:["theatrical","grumpy","secretly shy"],quirk:"sighs before every compliment",fur:"#6d5040",cloth:"#5b2a5e"},{id:"bee",name:"Bee Adeyemi",species:"rabbit",job:"drummer at the music hall",work:"music_hall",traits:["loud","joyful","restless"],quirk:"taps rhythms on every surface",fur:"#4a3a30",cloth:"#f2b23e"},{id:"sol",name:"Sol Duarte",species:"dog",job:"painter at the studio co-op",work:"studio",traits:["gentle","messy","patient teacher"],quirk:"always has paint on one ear",fur:"#d9c2a0",cloth:"#5fb3a1"},{id:"iris",name:"Dr. Iris Thorne",species:"cat",job:"museum guide",work:"museum",traits:["nerdy","enthusiastic","forgetful"],quirk:"carries a fossil in her pocket for luck",fur:"#a0a0a8",cloth:"#7a5a3a"},{id:"wendell",name:"Wendell Brisk",species:"bear",job:"astronomer",work:"observatory",traits:["nocturnal","philosophical","awkward"],quirk:"names stars after his ex-girlfriends",fur:"#3d2e28",cloth:"#2c3e50"},{id:"pip",name:"Pip Sprocket",species:"rabbit",job:"workshop tinkerer",work:"workshop",traits:["inventive","scatterbrained","generous"],quirk:"pockets full of screws",fur:"#c88a5a",cloth:"#6a7f96"},{id:"ada",name:"Ada Bolt",species:"cat",job:"robot cafe owner",work:"robot_cafe",traits:["techy","deadpan","protective of her robots"],quirk:"talks to the espresso robot like a coworker",fur:"#f2f2f2",cloth:"#16a085"},{id:"lin",name:"Auntie Lin",species:"bear",job:"dumpling stall vendor",work:"street_food",traits:["bossy","motherly","shrewd"],quirk:"insists you are too thin",fur:"#7a5a4a",cloth:"#c0392b"},{id:"fen",name:"Fen",species:"dog",job:"lantern seller at the night market",work:"night_market",traits:["mysterious","storyteller","superstitious"],quirk:"tells a different origin story for every lantern",fur:"#2f2f35",cloth:"#d35400"},{id:"gus",name:"Gus Rummage",species:"bear",job:"flea market dealer",work:"flea_market",traits:["haggler","sentimental","tall-tale teller"],quirk:"claims every item belonged to someone famous",fur:"#8b6b4a",cloth:"#7f8c8d"},{id:"hana",name:"Hana Greenleaf",species:"rabbit",job:"grocer",work:"grocer",traits:["cheerful","practical","gossip"],quirk:"ranks vegetables by personality",fur:"#d8c8b8",cloth:"#27ae60"},{id:"marlowe",name:"Marlowe Finch",species:"cat",job:"fishmonger",work:"fish_market",traits:["loud","superstitious","big-hearted"],quirk:"reads fortunes in fish scales",fur:"#6a6a72",cloth:"#5a7584"},{id:"nan",name:"Old Nan",species:"dog",job:"fish stand owner",work:"fish_stand",traits:["salty","wise","mischievous"],quirk:'has been "retiring next year" for 20 years',fur:"#e0d8d0",cloth:"#2e5e8a"},{id:"skip",name:"Skipper Bram",species:"bear",job:"boat hire skipper",work:"boat_rental",traits:["jolly","reckless","loyal"],quirk:"ranks waves out of ten",fur:"#5a4535",cloth:"#f4efe6"},{id:"elsie",name:"Elsie Marsh",species:"rabbit",job:"lighthouse keeper",work:"lighthouse",traits:["solitary","observant","funny once you know her"],quirk:"keeps a logbook of every gull",fur:"#b8a898",cloth:"#c8352c"},{id:"rowan",name:"Rowan Thistle",species:"dog",job:"park gardener",work:"park_pond",traits:["slow-talking","patient","stubborn"],quirk:"apologises to plants before pruning",fur:"#9a7a5a",cloth:"#4a6e4a"},{id:"zuzu",name:"Zuzu",species:"cat",job:"student and skater",work:"skatepark",traits:["bold","impatient","loyal"],quirk:"falls a lot, says it is on purpose",fur:"#e8b0c0",cloth:"#e86f5a"},{id:"arlo",name:"Arlo Vance",species:"dog",job:"street musician",work:"stage",traits:["romantic","broke","optimistic"],quirk:"only knows four chords and is at peace with it",fur:"#c9a27e",cloth:"#8e44ad"},{id:"vera",name:"Vera Noir",species:"cat",job:"speakeasy bartender",work:"speakeasy",traits:["cool","secretive","perceptive"],quirk:"remembers everyone's drink but not their name",fur:"#1f1f24",cloth:"#3a2a22"},{id:"boris",name:"Boris Kettle",species:"bear",job:"courier dispatcher",work:"courier",traits:["impatient","fair","nicknames everyone"],quirk:"times everything with a stopwatch",fur:"#4a3a30",cloth:"#e67e22"},{id:"nell",name:"Nell Suds",species:"rabbit",job:"laundromat owner",work:"laundromat",traits:["cozy","nosy","patient listener"],quirk:"finds lost socks spiritually significant",fur:"#f0e8e0",cloth:"#9fc4d6"},{id:"mr_abernathy",name:"Mr. Abernathy",species:"dog",job:"retired postman, Pebble's downstairs neighbour",work:null,home:"apartments",traits:["grumpy","lonely","secretly delighted by visitors"],quirk:"complains about noise that does not exist",fur:"#d8d0c8",cloth:"#5d6d7e"},{id:"tamsin",name:"Tamsin Reed",species:"cat",job:"nurse on night shifts",work:null,home:"apartments",traits:["tired","funny","kind"],quirk:"falls asleep mid-conversation",fur:"#c48a5a",cloth:"#9fd8c8"},{id:"oskar",name:"Oskar",species:"rabbit",job:"kid who lives on Wren Street",work:null,home:"apartments",traits:["curious","loud","brave"],quirk:'asks "why" until you give up',fur:"#e8d8c0",cloth:"#f1c40f"},{id:"greta",name:"Greta Holm",species:"bear",job:"community garden organiser",work:"community_garden",traits:["earnest","bossy","warm"],quirk:"carries seed packets everywhere",fur:"#7a6050",cloth:"#7d5a3c"},{id:"clem",name:"Clem the Mail Carrier",species:"dog",job:"mail carrier",work:null,traits:["speedy","cheerful","nosy"],quirk:"has opinions about everyone's handwriting",fur:"#b08a60",cloth:"#3563b0",roams:!0}],go=Object.fromEntries(Sd.map(s=>[s.id,s])),gr=["cat","rabbit","bear","dog"];function S1(s){const t=new Rn;for(const e of[-1,1])t.add("box",e*.12,.42,0,.17,.78,.2,"#7a7a80",{win:e,seed:0}),t.add("box",e*.12,.05,.05,.19,.1,.3,"#3a3030",{win:e,seed:0});t.add("box",0,1.08,0,.5,.62,.3,"#ffffff",{win:0,seed:0}),t.add("sphere",0,.86,0,.5,.25,.32,"#e6e6e6",{win:0,seed:0});for(const e of[-1,1])t.add("box",e*.31,1.06,0,.13,.55,.14,"#ffffff",{win:e*2,seed:0}),t.add("sphere",e*.31,.76,0,.13,.13,.13,"#ffffff",{win:e*2,seed:1});t.add("sphere",0,1.6,.02,.42,.4,.4,"#ffffff",{seed:1}),t.add("sphere",0,1.53,.18,.22,.16,.16,"#f4ead8",{seed:2}),t.add("sphere",0,1.57,.27,.06,.05,.05,"#2a1a14",{seed:2});for(const e of[-1,1])t.add("sphere",e*.09,1.66,.19,.06,.07,.04,"#141010",{seed:2});if(s==="cat")for(const e of[-1,1])t.add("cone4",e*.13,1.85,0,.14,.18,.08,"#ffffff",{seed:1,rz:-e*.25});if(s==="rabbit")for(const e of[-1,1])t.add("sphere",e*.09,1.98,-.02,.1,.42,.06,"#ffffff",{seed:1,rz:-e*.15});if(s==="bear")for(const e of[-1,1])t.add("sphere",e*.17,1.8,0,.13,.13,.07,"#ffffff",{seed:1});if(s==="dog")for(const e of[-1,1])t.add("sphere",e*.21,1.58,-.02,.09,.26,.14,"#ffffff",{seed:1,rz:e*.25});return t.geometry()}function T1(){const s=new Me({vertexColors:!0,roughness:.85});return s.onBeforeCompile=t=>{t.uniforms.uTime=ce.uTime,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aFx; attribute vec3 aCloth; attribute vec3 aFurC; attribute vec3 aAnim; uniform float uTime; varying vec3 vTint;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float limb = aFx.x; float ch = aFx.y;
vTint = ch < 0.5 ? aCloth : (ch < 1.5 ? aFurC : vec3(1.0));
float ph = aAnim.x, sw = aAnim.y, sit = aAnim.z;
if (abs(limb) > 0.5) {
  bool leg = abs(limb) < 1.5; float side = sign(limb);
  float piv = leg ? 0.82 : 1.32;
  float ang = sin(ph) * sw * (leg ? 0.55 : 0.4) * side * (leg ? 1.0 : -1.0);
  if (leg) ang -= sit * 1.45;
  float y = transformed.y - piv, z = transformed.z;
  transformed.y = piv + y * cos(ang) - z * sin(ang);
  transformed.z = y * sin(ang) + z * cos(ang);
}
transformed.y -= sit * 0.38;
transformed.y += abs(sin(ph)) * sw * 0.03;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTint;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vTint;`)},s}class E1{constructor(t,e,n="high",i={}){this.nav=e,this.scene=t;const a=this.r=yn(77);this.people=[];for(const h of Sd)this.people.push({...h,named:!0,x:0,z:0,yaw:0,path:null,state:"idle",timer:a()*5,phase:a()*6,speed:1.2+a()*.3,lane:.4+a()*.9,visible:!0,sit:0});const o=n==="low"?70:n==="medium"?130:200,r=["#c9a27e","#8a6a52","#e8e0d8","#5a4030","#d9a066","#3a3a3a","#b5651d","#f0e6d8","#9a8a7a","#6d5040"],l=["#c0392b","#2e86ab","#27ae60","#f39c12","#8e44ad","#16a085","#d35400","#e84393","#2c3e50","#7f8c8d","#f4efe6","#5f7f5a","#a8323e"];for(let h=0;h<o;h++)this.people.push({id:"anon"+h,named:!1,species:gr[h%4],fur:a.pick(r),cloth:a.pick(l),x:0,z:0,yaw:0,path:null,state:"wander",timer:0,phase:a()*6,speed:1.1+a()*.5,lane:.3+a()*1.1,visible:!0,sit:0});for(const h of this.people){const d=e.nodes[Math.floor(a()*e.nodes.length)];h.x=d.x+a.range(-.5,.5),h.z=d.z+a.range(-.5,.5),h.node=d.id}const c=T1();this.meshes={};for(const h of gr){const d=this.people.filter(p=>p.species===h),u=S1(h),f=d.length;u.setAttribute("aCloth",new ca(new Float32Array(f*3),3)),u.setAttribute("aFurC",new ca(new Float32Array(f*3),3)),u.setAttribute("aAnim",new ca(new Float32Array(f*3),3));const m=new Oi(u,c,f);m.castShadow=!0,m.receiveShadow=!0,m.frustumCulled=!1;const g=new Lt;d.forEach((p,x)=>{p.slot=x,g.set(p.cloth),u.attributes.aCloth.setXYZ(x,g.r,g.g,g.b),g.set(p.fur),u.attributes.aFurC.setXYZ(x,g.r,g.g,g.b)}),t.add(m),this.meshes[h]={im:m,list:d}}this.bubbles=[],this.m4=new ie,this.q=new Dn,this.v=new D,this.one=new D(1,1,1),this.chatPairs=[],this.memories=i,this.interiorView=null}settle(t){const e=this.r;for(const n of this.people){if(!n.named)continue;const i=this.goalFor(n,t);i.inside?(n.state="inside",n.insideOf=i.place.id,n.timer=10+e()*20,n.x=i.place.door[0],n.z=i.place.door[1]):(n.x=i.place.door[0]+e.range(-4,4),n.z=i.place.door[1]+e.range(-4,4),n.state="idle",n.timer=e()*10)}}byId(t){return this.people.find(e=>e.id===t)}named(){return this.people.filter(t=>t.named)}goalFor(t,e){const n=t.work&&Ut[t.work];if(n&&En(n,e)&&!(n.hours[0]===0&&n.hours[1]===24&&(e<8||e>20)))return{place:n,inside:!n.outdoor};if(e>=23||e<6.5)return{place:Ut[t.home||"apartments"],inside:!0};const i=["cafe","park_pond","clock_tower","promenade","street_food","picnic_lawn","library","bookstore","arcade","stage","night_market","grocer","corner_store"],a=Ut[i[(Math.floor(e/2)*7+t.id.length*3)%i.length]];return{place:En(a,e)?a:Ut.clock_tower,inside:!1}}update(t,e,n,i,a,o=1){const r=this.r;for(const l of this.people){if(l.state==="inside"){l.visible=!1,l.timer-=t,l.timer<0&&(l.timer=20,this.goalFor(l,e).place.id!==l.insideOf&&(l.state="idle",l.visible=!0));continue}if(l.named&&l.state!=="walk"&&l.state!=="chat"&&l.state!=="talking"){if(l.timer-=t,l.timer<0){const c=this.goalFor(l,e);Math.hypot(c.place.door[0]-l.x,c.place.door[1]-l.z)>2.5?(l.path=this.nav.path(l.x,l.z,c.place.node),l.pi=1,l.goal=c,l.state=l.path?"walk":"idle",l.timer=3+r()*4):c.inside?(l.state="inside",l.insideOf=c.place.id,l.timer=15):(l.state="idle",l.timer=8+r()*20)}}else if(!l.named&&l.state!=="walk"&&l.state!=="chat"&&(l.timer-=t,l.timer<0)){if((e<6||e>22.5)&&r()<.7){l.visible=!1,l.timer=30;continue}l.visible=!0;const h=this.nav.nodes[Math.floor(r()*this.nav.nodes.length)];Math.hypot(h.x-l.x,h.z-l.z)<220&&(l.path=this.nav.path(l.x,l.z,h.id),l.pi=1,l.state=l.path?"walk":"wander"),l.timer=2+r()*6}l.state==="walk"?this.walk(l,t,i,a):(l.state==="chat"||l.state==="talking")&&(l.timer-=t,l.faceX!==void 0&&(l.yaw=Mo(l.yaw,Math.atan2(l.faceX-l.x,l.faceZ-l.z),5,t)),l.timer<0&&l.state==="chat"&&(l.state="idle",l.timer=2,l.emote=null)),l.sit=ye(l.sit,0,4,t)}this.socialize(t,e),this.draw(n)}walk(t,e,n,i){const a=t.path[t.pi];if(!a){t.state=t.named?"idle":"wander",t.timer=t.named?2+this.r()*4:1+this.r()*3,t.walking=0,t.goal?.inside&&(t.state="inside",t.insideOf=t.goal.place.id,t.timer=15);return}if(a.edge&&a.edge.type==="cross"&&this.traffic&&!t.crossing){const v=a.edge;if(!this.traffic.canCross(v.ix,v.iz,v.axis)){t.walking=ye(t.walking||0,0,6,e);return}t.crossing=!0}const o=t.path[t.pi-1]||{x:t.x,z:t.z};let r=a.x-o.x,l=a.z-o.z;const c=Math.hypot(r,l)||1;r/=c,l/=c;const h=a.edge&&a.edge.type!=="cross"?t.lane:.4,d=a.x-l*h,u=a.z+r*h;let f=d-t.x,m=u-t.z;const g=Math.hypot(f,m);if(g<.5){t.pi++,t.crossing=!1;return}if(f/=g,m/=g,n){const v=t.x-n.x,b=t.z-n.z,w=Math.hypot(v,b);w<1.4&&w>.01&&(f+=v/w*.9,m+=b/w*.9)}const p=t.speed;t.walking=ye(t.walking||0,1,4,e);const x=Math.hypot(f,m)||1;t.x+=f/x*p*e*t.walking,t.z+=m/x*p*e*t.walking,t.yaw=Mo(t.yaw,Math.atan2(f,m),8,e),t.phase+=p*e/.36*Math.PI*t.walking}socialize(t,e){if(this.socialT=(this.socialT||0)-t,this.socialT>0)return;this.socialT=1.5;const n=this.people.filter(i=>i.named&&i.state==="idle"&&i.visible);for(let i=0;i<n.length;i++)for(let a=i+1;a<n.length;a++){const o=n[i],r=n[a];if(Math.hypot(o.x-r.x,o.z-r.z)<6&&this.r()<.25){const l=10+this.r()*20,c=this.r()<.18?"argue":this.r()<.5?"laugh":"chat";for(const[h,d]of[[o,r],[r,o]])h.state="chat",h.timer=l,h.faceX=d.x,h.faceZ=d.z,h.emote=c,h.with=d.id;this.onSocial?.(o,r,c);return}}}draw(t){for(const e of gr){const{im:n,list:i}=this.meshes[e],a=n.geometry.attributes.aAnim;for(const o of i){let r=o.visible&&o.state!=="inside"&&Math.abs(o.x-t.x)<260&&Math.abs(o.z-t.z)<260,l=o.x,c=o.z,h=o.yaw;if(o.state==="inside"&&this.interiorView&&o.insideOf===this.interiorView.id){const d=this.interiorView.slot(o);d&&(r=!0,l=d.x,c=d.z,h=d.yaw)}this.q.setFromAxisAngle($e.DEFAULT_UP,h),this.m4.compose(this.v.set(l,r?.16:-50,c),this.q,this.one),n.setMatrixAt(o.slot,this.m4),a.setXYZ(o.slot,o.phase,o.state==="walk"&&o.walking||0,o.sit)}n.instanceMatrix.needsUpdate=!0,a.needsUpdate=!0}}near(t,e,n){return this.people.filter(i=>i.visible&&i.state!=="inside"&&Math.hypot(i.x-t,i.z-e)<n)}}const Ae=new D(5e3,0,0),Ke=16,ge=12,Je=4.2;function A1(s,{w:t=512,h:e=512,bg:n="#2b2420",fg:i="#f5e6c8",title:a,font:o="Georgia"}={}){const r=document.createElement("canvas");r.width=t,r.height=e;const l=r.getContext("2d");l.fillStyle=n,l.fillRect(0,0,t,e),l.strokeStyle=i,l.globalAlpha=.5,l.lineWidth=6,l.strokeRect(12,12,t-24,e-24),l.globalAlpha=1,l.fillStyle=i,l.textAlign="center";let c=70;a&&(l.font=`bold 44px ${o}`,l.fillText(a,t/2,c),c+=60),l.font=`30px ${o}`;for(const d of s)l.textAlign="left",l.fillText(d[0],40,c),d[1]!==void 0&&(l.textAlign="right",l.fillText(d[1],t-40,c)),c+=42;const h=new ls(r);return h.colorSpace=nn,h}function Ta(s,t=256){const e=yn(s>>>0),n=document.createElement("canvas");n.width=n.height=t;const i=n.getContext("2d"),a=[["#f2b33d","#e85a3a","#2e86ab","#f4efe6","#1f3a4a"],["#7cbf6a","#f2d24a","#5aa6c9","#e98fb0","#2b2b2b"],["#b77fd1","#ff7a3d","#ffd23f","#22384d","#f5efe2"],["#d9776b","#e8c45a","#6aa64f","#3a5a7a","#efe3cf"]],o=e.pick(a);i.fillStyle=o[3],i.fillRect(0,0,t,t);const r=Math.floor(e()*3);for(let c=0;c<26;c++)i.fillStyle=e.pick(o),i.globalAlpha=e.range(.5,.95),r===0?(i.beginPath(),i.arc(e()*t,e()*t,e.range(10,70),0,7),i.fill()):r===1?i.fillRect(e()*t,e()*t,e.range(20,120),e.range(8,40)):(i.lineWidth=e.range(4,18),i.strokeStyle=e.pick(o),i.beginPath(),i.moveTo(e()*t,e()*t),i.bezierCurveTo(e()*t,e()*t,e()*t,e()*t,e()*t,e()*t),i.stroke());i.globalAlpha=1;const l=new ls(n);return l.colorSpace=nn,l}function mh(s,t,e={}){const n=new ke;n.position.copy(Ae);const i=new Rn,a=yn(s.id.length*977+13),o=s.interior||"shop",r={door:new D(0,0,ge/2-1.2),seats:[],counter:null,machines:[],shelves:[],screen:null,easel:null,stove:null,bed:null,sofa:null,telescope:null,piano:null,bench:null,table:null,view:null},l={cafe:["#e9d3b4","#7a4a2e","#c98a5a"],bakery:["#f2e2c4","#a0663a","#e8b06a"],bookstore:["#d8c4a0","#5a3a28","#7a4a32"],library:["#d6cdb8","#4a3a2a","#6a4a32"],shop:["#e6e0d4","#6b6f75","#b8a58a"],restaurant:["#2e2a2a","#8a2f2f","#c9a24a"],arcade:["#1d1a2e","#2b2840","#4a3f7a"],cinema:["#3a1d2a","#6b1f2e","#b8932f"],gallery:["#f2f0ea","#d8d2c6","#9a958a"],studio:["#ece6d8","#8a8070","#c46a3a"],speakeasy:["#2a1f1a","#5a3a28","#b88a3a"],observatory:["#202838","#3a4656","#8a9aaa"],home:["#f0e2c8","#9b7653","#d9a36a"]},[c,h,d]=l[o]||l.shop,u=new Rn,f=new ke;n.userData.front=f;const m="#"+new Lt(h).multiplyScalar(.8).getHexString();i.add("box",0,-.1,0,Ke,.2,ge,h);for(let M=0;M<16;M++)i.add("box",-Ke/2+.5+M,.005,0,.025,.01,ge,m);i.add("box",0,Je/2,-ge/2,Ke,Je,.2,c),i.add("box",-Ke/2,Je/2,0,.2,Je,ge,c),i.add("box",Ke/2,Je/2,0,.2,Je,ge,c),u.add("box",-Ke/4-1,Je/2,ge/2,Ke/2-2,Je,.2,c),u.add("box",Ke/4+1,Je/2,ge/2,Ke/2-2,Je,.2,c),u.add("box",0,Je-.6,ge/2,4,1.2,.2,c),i.add("box",0,Je+.1,0,Ke,.2,ge,o==="observatory"?"#151b28":"#f4efe6"),i.add("box",0,.15,-ge/2+.12,Ke,.3,.06,d),i.add("box",-Ke/2+.12,.15,0,.06,.3,ge,d),i.add("box",Ke/2-.12,.15,0,.06,.3,ge,d);const g=new Ln({color:"#bcd8f0"});n.userData.winMat=g;for(const M of[-5,5]){const _=new Mt(new Qe(3,2),g);_.position.set(M,2,ge/2-.12),_.rotation.y=Math.PI,f.add(_),u.add("box",M,.95,ge/2-.2,3.2,.1,.3,"#f4efe6")}u.add("box",0,1.4,ge/2-.05,2,.1,.25,d),u.add("box",-1,1.4,ge/2-.05,.12,2.8,.25,d),u.add("box",1,1.4,ge/2-.05,.12,2.8,.25,d);for(let M=-1;M<=1;M++)i.add("cyl",M*4.5,Je-.6,-1,.02,1.2,.02,"#333"),i.add("cone",M*4.5,Je-1.25,-1,.7,.4,.7,d),i.add("sphere",M*4.5,Je-1.42,-1,.22,.22,.22,"#ffe6b0",{glow:1.2});const p=(M,_,y=5,P=d)=>{i.add("box",M,.55,_,y,1.1,.9,P),i.add("box",M,1.12,_,y+.2,.06,1,"#e8e0d0"),r.counter=new D(M,0,_+1.1),r.staff=new D(M,0,_-1)},x=(M,_,y=!0)=>{i.add("cyl",M,.37,_,.12,.74,.12,"#333"),i.add(y?"cyl":"box",M,.76,_,1.1,.05,1.1,"#e8dcc8");for(const P of[-1,1]){i.add("box",M+P*.85,.24,_,.45,.05,.45,h),i.add("box",M+P*1.06,.55,_,.05,.6,.45,h);for(const k of[-.18,.18])for(const U of[-.18,.18])i.add("box",M+P*.85+k,.12,_+U,.04,.24,.04,"#333");r.seats.push({p:new D(M+P*.85,.24,_),yaw:P>0?-Math.PI/2:Math.PI/2,table:new D(M,.8,_)})}r.table=new D(M,.8,_)},v=(M,_,y=0,P=!0,k=3)=>{i.add("box",M,1.3,_,k,2.6,.5,"#6b4a32",{ry:y});for(let U=0;U<4;U++)for(let W=0;W<(P?14:6);W++){const H=P?.16:.4,Z=-k/2+.2+W*(P?.19:.45),z=.35+U*.62,N=new ie().makeRotationY(y).setPosition(M,0,_);i.add(P?"box":W%2?"cyl":"box",Z,z+(P?.22:.15),.05,H,P?.44+a()*.1:.3,P?.32:.3,a.pick(P?["#8e3b46","#2e5e8a","#3f6e45","#c9a24a","#5b2a5e","#d8cfc0","#a85a2e"]:["#e85a3a","#f2b33d","#7fbf4a","#2e86ab","#f4efe6","#e84393"]),{parent:N})}r.shelves.push({p:new D(M+Math.sin(y)*1,0,_+Math.cos(y)*1),yaw:y+Math.PI})},b=M=>{for(let y=0;y<4;y++)for(let P=-4;P<=4;P++){const k=P*1.2,U=-.5+y*1.5;i.add("box",k,.25,U,1,.5,.8,"#8a2f3a"),i.add("box",k,.75,U+.38,1,.9,.15,"#8a2f3a"),y===1&&Math.abs(P)<=1&&r.seats.push({p:new D(k,.45,U),yaw:Math.PI,view:!0})}const _=new Mt(new Qe(10,3.4),R1());_.position.set(0,2.2,-ge/2+.2),n.add(_),r.screen=_.position.clone()};switch(o){case"cafe":case"bakery":case"restaurant":{p(-3,-4,6),i.add("box",-4.6,1.5,-4.2,.6,.7,.5,"#9aa0a6"),i.add("box",-2,1.35,-4,1.6,.4,.6,"#f4efe6");for(let y=0;y<6;y++)i.add("sphere",-2.6+y*.25,1.32,-3.9,.18,.12,.18,["#c98a4a","#e8b06a","#a0663a"][y%3]);[[2,-1],[5,-1],[2,2.5],[5,2.5],[-4,2]].forEach(([y,P])=>x(y,P));const M=(s.sells||[]).slice(0,7).map(y=>[y,"$"+yi[y]]),_=new Mt(new Qe(3.2,2.6),new Ln({map:A1(M,{title:"Menu",bg:"#1f2a24",fg:"#f4efd8"})}));_.position.set(-3,2.9,-ge/2+.12),n.add(_);for(const[y,P]of[[-7,-5],[7,-5],[7,5]])i.add("blob",y,.6,P,1,1.2,1,"#5c9645");if(o==="bakery"&&(i.add("box",4,1,-5.2,3,2,1.2,"#7a4a32"),i.add("cyl",4,1.1,-4.6,1.2,.05,1.2,"#ff8a3a",{rx:Math.PI/2,glow:1.2}),r.stove=new D(4,0,-3.8)),o==="restaurant")for(let y=0;y<5;y++)i.add("sphere",-6+y*3,Je-.7,3,.5,.6,.5,"#d9435f",{glow:1});break}case"bookstore":case"library":{for(let M=0;M<4;M++)v(-6+M*4,-ge/2+.5,0,!0,3.4);if(o==="library"){for(const M of[.5,3]){i.add("box",0,.75,M,6,.08,1.4,"#6b4a32");for(const _ of[-2,0,2])i.add("cyl",_,.95,M,.06,.4,.06,"#c9a24a"),i.add("dome",_,1.12,M,.4,.2,.3,"#2f6a4a",{glow:.6}),r.seats.push({p:new D(_,.45,M+1),yaw:Math.PI,table:new D(_,.8,M)}),i.add("box",_,.45,M+1,.5,.06,.5,"#5a3a28")}v(-Ke/2+.5,1,Math.PI/2,!0,4),v(Ke/2-.5,1,-Math.PI/2,!0,4)}else p(4.5,1.5,3),i.add("box",-4,.45,2,1.4,.9,1.2,"#8a3a3a"),i.add("box",-4,.95,2.6,1.4,.9,.3,"#8a3a3a"),r.seats.push({p:new D(-4,.5,2),yaw:Math.PI}),v(-Ke/2+.5,1.5,Math.PI/2,!0,4);break}case"shop":{p(4,-4,4);for(let M=0;M<3;M++)v(-5+M*3.5,-1+M%2,0,!1,3);if(/Halvorsen/.test(s.name))for(let M=0;M<3;M++){i.add("box",-4+M*3,1.5,3,2.2,.05,.05,"#aaa");for(let _=0;_<6;_++)i.add("box",-5+M*3+_*.35,1,3,.25,.9,.5,["#f2c230","#c0392b","#5a7d5a","#2e86ab","#e8e0d0","#c46a3a"][_])}break}case"arcade":{for(let M=0;M<6;M++)for(const _ of[-4.6,.5]){const y=-6+M*2.4;i.add("box",y,1,_,1.2,2,1,a.pick(["#2a2a44","#3a1d2a","#1d2a3a"])),i.add("box",y,1.55,_+.52,.9,.7,.04,a.pick(["#4ff0ff","#ff4f9a","#7cff6b","#ffd23f"]),{glow:1.6,seed:M*.1+_}),i.add("box",y,2.05,_+.3,1.2,.3,.5,a.pick(["#ff4f9a","#4ff0ff","#b38cff"]),{glow:1.4}),r.machines.push({p:new D(y,0,_+1.2),yaw:Math.PI})}p(5,4,3,"#4a3f7a");break}case"cinema":b();break;case"gallery":{for(let M=0;M<5;M++){const _=new Mt(new Qe(2,1.5),new Me({map:Ta(M*31+s.id.length)}));_.position.set(-6+M*3,2.1,-ge/2+.13),n.add(_),i.add("box",-6+M*3,2.1,-ge/2+.11,2.2,1.7,.04,"#c9a24a"),r.shelves.push({p:new D(-6+M*3,0,-3),yaw:Math.PI})}for(const M of[-3,3])i.add("box",M,.5,1,1,1,1,"#f4efe6"),i.add(M<0?"torus":"blob",M,1.5,1,.9,.9,.9,M<0?"#d8643a":"#5f9e8a");i.add("box",0,.25,3,3,.5,.8,"#6b4a32"),r.bench={p:new D(0,.5,3),yaw:Math.PI};break}case"studio":{for(let M=0;M<3;M++){const _=-4+M*4;i.add("box",_,1,-2,.08,2,.08,"#8a6040",{rx:-.15});const y=new Mt(new Qe(1.2,1),new Me({map:Ta(M*7+3)}));y.position.set(_,1.4,-1.92),y.rotation.x=-.15,n.add(y),M===1&&(r.easel={p:new D(_,0,-.7),yaw:Math.PI,canvas:y})}i.add("box",5,.45,3,3,.9,1.2,"#8a7a62");for(let M=0;M<8;M++)i.add("cyl",4+M*.25,1,3,.15,.2,.15,a.pick(["#e85a3a","#2e86ab","#f2b33d","#27ae60"]));i.add("box",-5,.45,3.5,3,.9,1.4,"#6b5a4a"),r.machines.push({p:new D(-5,0,4.6),yaw:Math.PI,kind:"bench"});break}case"speakeasy":{p(0,-4,8,"#3a2418");for(let M=0;M<18;M++)i.add("cyl",-4+M*.48,1.9+M%3*.5,-5.6,.15,.4,.15,a.pick(["#3a7a4a","#a85a2e","#c9a24a","#5a2a5a"]),{glow:.6});[[-4,2],[4,2]].forEach(([M,_])=>x(M,_)),i.add("box",6,.6,4,1.6,1.2,.8,"#1a1210"),r.piano={p:new D(6,0,5),yaw:Math.PI};break}case"observatory":{i.add("cyl",0,.6,-1,1.4,1.2,1.4,"#3a4656"),i.add("cyl",0,2.4,-2.2,.9,4.2,.9,"#c9d0d6",{rx:-.7}),r.telescope={p:new D(0,0,.6),yaw:Math.PI};const M=new Mt(new Qe(Ke,ge),new Ln({map:P1()}));M.rotation.x=Math.PI/2,M.position.y=Je-.05,n.add(M);break}case"home":{i.add("box",-5.5,.3,-3.5,2.4,.6,3.2,"#8a6a4a"),i.add("box",-5.5,.65,-3.5,2.2,.2,3,"#f4efe6"),i.add("box",-5.5,.8,-4.6,1.8,.25,.6,"#e8e0d0"),i.add("box",-5.5,.78,-2.8,2.2,.12,1.6,"#3f8f8a"),i.add("box",-5.5,1.1,-5.1,2.4,1.6,.15,"#6b4a32"),r.bed={p:new D(-5.5,.82,-3),yaw:0},i.add("box",4,.5,-5.2,5,1,1,"#e8e0d0"),i.add("box",4,1.02,-5.2,5.1,.06,1.1,"#9a8a7a"),i.add("box",2.5,1.06,-5.2,.8,.05,.6,"#2a2a2a"),i.add("box",6,1,-5.3,.9,2,.8,"#f4efe6"),i.add("box",4,2.5,-5.5,4,.8,.5,"#d9a36a"),r.stove={p:new D(2.5,0,-4),yaw:Math.PI},i.add("box",3.5,.35,2.5,3,.5,1.1,"#5f7f8c"),i.add("box",3.5,.8,3,3,.8,.25,"#5f7f8c");for(const y of[-1,1])i.add("box",3.5+y*1.55,.55,2.5,.2,.7,1.1,"#5f7f8c");r.sofa={p:new D(3.5,.6,2.4),yaw:Math.PI},x(-1.5,1.5,!1),v(-Ke/2+.5,2.5,Math.PI/2,!0,3),i.add("box",3.2,.012,.6,4.4,.02,3.2,"#c7684e"),i.add("box",3.2,.016,.6,3.8,.02,2.6,"#e3a868");const M=new Mt(new Qe(2.6,1.8),g);M.position.set(-1.2,2.2,-ge/2+.12),n.add(M),i.add("box",-1.2,2.2,-ge/2+.14,.08,1.8,.04,"#f4efe6"),i.add("box",-1.2,1.25,-ge/2+.25,2.9,.1,.3,"#f4efe6");for(const y of[-1,1])i.add("box",-1.2+y*1.65,2.25,-ge/2+.2,.5,2.2,.06,"#d97a5a");i.add("cyl",6.6,.3,2.9,.35,.6,.35,"#b8643a"),i.add("blob",6.6,1.05,2.9,.75,1,.75,"#5f9a52"),i.add("blob",6.4,1.5,2.8,.45,.6,.45,"#6fae5c"),i.add("box",-3.7,.35,-4.6,.6,.7,.6,"#8a6a4a"),i.add("cyl",-3.7,.95,-4.6,.05,.5,.05,"#333"),i.add("cone",-3.7,1.25,-4.6,.35,.3,.35,"#f2d39a",{glow:.6}),(t.pebble.home.furniture||[]).forEach((y,P)=>C1(i,n,y,P,a));break}default:p(0,-4,5)}const w=new Mt(i.geometry(),e.facade);w.receiveShadow=!0,w.castShadow=!0,n.add(w);const T=new Mt(u.geometry(),e.facade);T.receiveShadow=!0,f.add(T),n.add(f);const S=new dd("#fff1dc","#5a4a3a",o==="speakeasy"||o==="cinema"||o==="observatory"?.5:1.3);n.add(S);const C=new fd("#ffd9a8",o==="cinema"||o==="observatory"?8:26,20,1.5);return C.position.set(0,Je-.5,0),n.add(C),r.kind=o,{group:n,spots:r,kind:o,place:s}}function C1(s,t,e,n,i){const a=[[-1,-5.4],[.5,4.8],[-6.8,.5],[6.8,.5],[-3,4.8],[1.5,-5.5],[6.8,3],[-6.8,4]],[o,r]=a[n%a.length],l=(e.item||e).toLowerCase();if(e.type==="painting"){const c=new Mt(new Qe(1.4,1.1),new Me({map:Ta(e.seed)}));c.position.set(-2+n%4*1.8,2.3,-5.88),t.add(c),s.add("box",c.position.x,2.3,-5.9,1.55,1.25,.04,"#c9a24a");return}/lamp/.test(l)?(s.add("cyl",o,.8,r,.08,1.6,.08,"#333"),s.add("cone",o,1.7,r,.6,.4,.6,"#f2d27e",{glow:1})):/rug/.test(l)?s.add("cyl",-1.5,.01,1.5,4.5,.02,3.2,"#b5523b"):/plant/.test(l)?(s.add("cyl",o,.25,r,.5,.5,.5,"#c46a3a"),s.add("blob",o,.9,r,.9,1,.9,"#5c9645")):/record|vinyl/.test(l)?(s.add("box",o,.4,r,.8,.8,.6,"#6b4a32"),s.add("cyl",o,.84,r,.5,.03,.5,"#111")):/lantern/.test(l)?s.add("sphere",o,2.6,r,.4,.5,.4,"#ff7a3d",{glow:1.4}):s.add("box",o,.3,r,.6,.6,.6,i.pick(["#c46a3a","#2e86ab","#f2b33d"]))}let ao=null;function R1(){return ao||(ao=new Ve({uniforms:{uTime:ce.uTime},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform float uTime; varying vec2 vUv;
      void main(){ float t = uTime * 0.3; vec2 p = vUv * vec2(3.0, 1.0);
        float scene = floor(t * 0.5);
        vec3 a = 0.5 + 0.5 * cos(6.28 * (vec3(0.1, 0.4, 0.7) + scene * 0.37));
        vec3 b = 0.5 + 0.5 * cos(6.28 * (vec3(0.6, 0.2, 0.9) + scene * 0.53));
        float m = smoothstep(0.3, 0.32, abs(sin(p.x * 1.3 + t + sin(p.y * 3.0 + t * 1.7))) * vUv.y + 0.2);
        vec3 c = mix(a, b, m) * (0.7 + 0.3 * sin(t * 3.0));
        gl_FragColor = vec4(c * 0.9, 1.0); }`}),ao)}function P1(){const s=document.createElement("canvas");s.width=s.height=512;const t=s.getContext("2d");t.fillStyle="#0b1230",t.fillRect(0,0,512,512);const e=yn(9);for(let i=0;i<400;i++){t.fillStyle=`rgba(255,250,230,${e.range(.3,1)})`;const a=e.range(.5,2.2);t.fillRect(e()*512,e()*512,a,a)}t.strokeStyle="rgba(160,190,255,0.35)",t.lineWidth=1;for(let i=0;i<6;i++){t.beginPath();let a=e()*512,o=e()*512;t.moveTo(a,o);for(let r=0;r<4;r++)a+=e.range(-60,60),o+=e.range(-60,60),t.lineTo(a,o);t.stroke()}const n=new ls(s);return n.colorSpace=nn,n}const L1="#7b5233",D1="#5d3c24",k1="#ecd3ad",I1="#4a2f1e",N1="#2a1a14",gl={uLayers:{value:10},uLen:{value:.016}};function br(s,t){const e=new Me({color:s,roughness:.92});return e.userData.furLayers=0,e.onBeforeCompile=n=>{n.uniforms.uLayers=gl.uLayers,n.uniforms.uLen=gl.uLen,n.uniforms.uTip={value:new Lt(t)},n.uniforms.uTime=ce.uTime,e.userData.shader=n,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uLayers; uniform float uLen; uniform float uTime; varying float vLayer; varying vec3 vObj;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float layer = 0.0;
#ifdef USE_INSTANCING
layer = float(gl_InstanceID + 1) / uLayers;
#endif
vLayer = layer; vObj = position;
transformed += normal * uLen * layer;
transformed.y -= uLen * 0.35 * layer * layer; // a little droop
transformed.x += sin(uTime * 2.0 + position.y * 20.0) * 0.0015 * layer;`).replace("#include <project_vertex>",`vec4 mvPosition = vec4( transformed, 1.0 );
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uTip; varying float vLayer; varying vec3 vObj;
float fh(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }`).replace("#include <color_fragment>",`#include <color_fragment>
if (vLayer > 0.0) {
  vec3 q = floor(vObj * 340.0);
  float n = fh(q);
  if (n < vLayer * 0.95 + 0.05) discard;
}
diffuseColor.rgb *= mix(0.7, 1.05, vLayer);
diffuseColor.rgb = mix(diffuseColor.rgb, uTip, vLayer * vLayer * 0.25);`)},e.customProgramCacheKey=()=>"fur"+s,e}const de={fur:br(L1,"#94683f"),furD:br(D1,"#7a5236"),cream:br(k1,"#f6e6c8"),paw:new Me({color:I1,roughness:.8}),nose:new Me({color:N1,roughness:.25}),eye:new Me({color:"#120c0a",roughness:.05}),shine:new Ln({color:"#ffffff"}),mouth:new Me({color:"#3a1a18",roughness:.6}),tongue:new Me({color:"#d9707a",roughness:.6}),blush:new Ln({color:"#e88a7a",transparent:!0,opacity:.35,depthWrite:!1}),whisker:new Ln({color:"#f5efe0"})},Zi=(s,t,e=10)=>new Eo(s,t,4,e),Te=(s,t=20,e=14)=>new vn(s,t,e);function dn(s,t,e,n,i){const a=new ke;return a.name=s,a.position.set(e,n,i),t.add(a),a}function qt(s,t,e,n=0,i=0,a=0,o=1,r=1,l=1,c=!0){const h=new Mt(s,t);return h.position.set(n,i,a),h.scale.set(o,r,l),h.castShadow=!0,h.receiveShadow=!0,e.add(h),c&&t.userData.furLayers!==void 0&&(h.userData.furry=!0),h}class U1{constructor(){const t=this.root=new ke;t.name="Pebble";const e=this.j={};this.poser=dn("poser",t,0,0,0),e.hips=dn("hips",this.poser,0,.56,0),e.spine=dn("spine",e.hips,0,.1,0),e.chest=dn("chest",e.spine,0,.2,0),e.neck=dn("neck",e.chest,0,.2,.01),e.head=dn("head",e.neck,0,.1,.01),qt(Te(.25),de.fur,e.hips,0,.08,0,.95,.9,.85),qt(Te(.2),de.cream,e.hips,0,.09,.06,.95,.95,.8),qt(Te(.22),de.fur,e.spine,0,.12,0,.95,1,.82),qt(Te(.2),de.fur,e.chest,0,.04,0,1,.85,.8),qt(Te(.17),de.cream,e.spine,0,.12,.07,.9,1.1,.7),qt(Zi(.1,.08),de.fur,e.neck,0,0,0),this.headMesh=qt(Te(.2,24,18),de.fur,e.head,0,.12,0,1.16,.9,1),qt(Te(.15),de.cream,e.head,0,.04,.07,1.05,.72,.85);for(const a of[-1,1])qt(Te(.075),de.cream,e.head,a*.05,.075,.17,1,.85,.9);this.muzzle=qt(Te(.07),de.cream,e.head,0,.035,.15,1.2,.7,.9),qt(Te(.042),de.nose,e.head,0,.115,.235,1.4,.82,.9,!1);for(const a of[-1,1])qt(Te(.042),de.furD,e.head,a*.19,.19,-.03,1,.85,.6),qt(Te(.024),de.paw,e.head,a*.195,.19,-.01,1,.8,.4,!1);this.eyes=[],this.brows=[];for(const a of[-1,1]){const o=new ke;o.position.set(a*.088,.165,.165),e.head.add(o),qt(Te(.04),de.eye,o,0,0,0,1,1.12,.8,!1),qt(Te(.013),de.shine,o,.012,.016,.028,1,1,1,!1),qt(Te(.006),de.shine,o,-.012,-.012,.03,1,1,1,!1),this.eyes.push(o);const r=new ke;r.position.set(a*.09,.225,.17),e.head.add(r),qt(new Eo(.011,.045,3,6).rotateZ(Math.PI/2),de.paw,r,0,0,0,1,1,1,!1),r.userData.side=a,this.brows.push(r);const l=new Mt(new Ao(.035,16),de.blush);l.position.set(a*.13,.08,.17),l.rotation.y=a*.6,e.head.add(l)}for(const a of[-1,1])for(let o=0;o<3;o++){const r=new Mt(new en(.0025,.0015,.16,3).rotateZ(Math.PI/2),de.whisker);r.position.set(a*.16,.06+o*.016,.2),r.rotation.set(0,a*.35,a*(o-1)*.18),e.head.add(r)}this.mouth=new ke,this.mouth.position.set(0,.045,.225),e.head.add(this.mouth),this.smile=new Mt(new ai(.03,.006,4,12,Math.PI),de.mouth),this.smile.rotation.set(.25,0,Math.PI),this.mouth.add(this.smile),this.mouthOpen=new Mt(Te(.028,12,8),de.mouth),this.mouthOpen.scale.set(1,.05,.4),this.mouth.add(this.mouthOpen);for(const a of[-1,1]){const o=a<0?"R":"L",r=dn("shoulder"+o,e.chest,a*.2,.08,0);qt(Zi(.058,.16),de.fur,r,0,-.1,0);const l=dn("elbow"+o,r,0,-.21,0);qt(Zi(.05,.14),de.fur,l,0,-.08,0);const c=dn("hand"+o,l,0,-.18,0);qt(Te(.058),de.paw,c,0,-.02,.005,.9,1,.75,!1),qt(Te(.025),de.paw,c,a*-.045,-0,.03,1,1.4,1,!1);const h=dn("grip"+o,c,0,-.04,.03);e["shoulder"+o]=r,e["elbow"+o]=l,e["hand"+o]=c,e["grip"+o]=h}for(const a of[-1,1]){const o=a<0?"R":"L",r=dn("hip"+o,e.hips,a*.11,0,0);qt(Zi(.08,.14),de.fur,r,0,-.12,0);const l=dn("knee"+o,r,0,-.25,0);qt(Zi(.066,.13),de.fur,l,0,-.1,0);const c=dn("ankle"+o,l,0,-.23,0);qt(Te(.07),de.paw,c,0,-.035,.04,.85,.5,1.3,!1),e["hip"+o]=r,e["knee"+o]=l,e["ankle"+o]=c}let n=dn("tail0",e.hips,0,0,-.17);e.tail=[n];const i=[.075,.065,.055,.042,.03];for(let a=0;a<5;a++){qt(Te(i[a]),de.fur,n,0,0,-.06,1,1,1.6);const o=dn("tail"+(a+1),n,0,0,-.11);e.tail.push(o),n=o}this.outfit={},this.clothes=new ke,this.held=null,this.heldName=null,this.buildFur(10)}buildFur(t){const e=[];this.root.traverse(i=>{i.userData.furShell&&e.push(i)});for(const i of e)i.parent.remove(i);if(!t)return;const n=[];this.root.traverse(i=>{i.isMesh&&i.userData.furry&&n.push(i)});for(const i of n){const a=new Oi(i.geometry,i.material,t);for(let o=0;o<t;o++)a.setMatrixAt(o,new ie);a.position.copy(i.position),a.scale.copy(i.scale),a.rotation.copy(i.rotation),a.castShadow=!1,a.receiveShadow=!0,a.userData.furShell=!0,a.frustumCulled=!1,i.parent.add(a),i.material.onBeforeCompile&&(i.material.needsUpdate=!0)}gl.uLayers.value=t,this._layers=t}setFurQuality(t){const e=t==="high"?12:t==="medium"?6:0;e!==this._layers&&this.buildFur(e)}setOutfit(t){for(const i of Object.values(this.outfit))i.parent&&i.parent.remove(i);this.outfit={};const e=this.j,n=(i,a=.85)=>new Me({color:i,roughness:a});if(t.shirt){new ke;const i=qt(Te(.25),n(t.shirt),e.spine,0,.12,.012,.99,1.04,.92,!1),a=qt(Te(.228),n(t.shirt),e.chest,0,.04,0,1.03,.88,.88,!1),o=qt(Te(.27),n(t.shirt),e.hips,0,.12,.01,.96,.62,.9,!1);for(const r of["L","R"]){const l=qt(Zi(.078,.07),n(t.shirt),e["shoulder"+r],0,-.06,0,1,1,1,!1);this.outfit["sleeve"+r]=l}for(let r=0;r<3;r++){const l=qt(new ai(.236,.012,6,28).rotateX(Math.PI/2),n("#f4efe6"),e.spine,0,.04+r*.08,.012,1,1,.9,!1);this.outfit["stripe"+r]=l}Object.assign(this.outfit,{s1:i,s2:a,s3:o})}if(t.coat){const i=qt(new en(.2,.29,.62,18),n("#f2c230",.5),e.spine,0,.02,0,1,1,.86,!1),a=qt(Te(.215),n("#f2c230",.5),e.chest,0,.05,0,1.05,.9,.86,!1);for(const r of["L","R"])this.outfit["csl"+r]=qt(Zi(.07,.15),n("#f2c230",.5),e["shoulder"+r],0,-.1,0,1,1,1,!1);const o=qt(Te(.12),n("#f2c230",.5),e.chest,0,.18,-.13,1.4,.7,.8,!1);Object.assign(this.outfit,{c:i,h:a,hood:o})}if(t.scarf){const i=qt(new ai(.1,.04,8,20).rotateX(Math.PI/2),n("#c0392b"),e.neck,0,-.02,0,1,1,1,!1),a=qt(new Oe(.07,.22,.03),n("#c0392b"),e.chest,.06,.08,.17,1,1,1,!1);a.rotation.set(.15,0,.1);for(let o=0;o<3;o++)this.outfit["ss"+o]=qt(new ai(.1,.012,4,20).rotateX(Math.PI/2),n("#f4efe6"),e.neck,0,-.05+o*.03,0,1.03,1,1.03,!1);Object.assign(this.outfit,{s:i,tail:a})}if(t.hat){const i=qt(new en(.15,.19,.13,20),n("#5a7d5a"),e.head,0,.3,-.01,1,1,1,!1),a=qt(new en(.27,.27,.02,24),n("#4e6e4e"),e.head,0,.245,0,1,1,1,!1);a.rotation.x=.12,Object.assign(this.outfit,{crown:i,brim:a})}if(t.glasses){const i=n("#2a2a2a",.3);for(const a of[-1,1])this.outfit["lens"+a]=qt(new ai(.045,.007,6,18),i,e.head,a*.08,.16,.2,1,1,1,!1);this.outfit.bridge=qt(new Oe(.05,.008,.008),i,e.head,0,.17,.21,1,1,1,!1)}if(t.backpack){this.outfit.bp=qt(new Oe(.3,.32,.14),n("#c46a3a"),e.spine,0,.14,-.22,1,1,1,!1),this.outfit.bpf=qt(new Oe(.22,.12,.06),n("#a8552c"),e.spine,0,.06,-.31,1,1,1,!1);for(const i of[-1,1])this.outfit["strap"+i]=qt(new Oe(.03,.3,.02),n("#6b3a20"),e.chest,i*.12,0,.17,1,1,1,!1)}}setHeld(t){if(this.heldName===t||(this.held&&this.held.parent.remove(this.held),this.held=null,this.heldName=t,!t))return;const e=new ke,n=a=>new Me({color:a,roughness:.6}),i=t.toLowerCase();if(/cup|latte|coffee|cocoa|tea|white|fizz|toddy|soda/.test(i)){e.add(new Mt(new en(.035,.028,.09,12),n("#f4efe6")));const a=new Mt(new en(.037,.037,.015,12),n("#6b4a3a"));a.position.y=.05,e.add(a)}else if(/book|paperback|guide|chapbook|notebook|sketchbook|map/.test(i)){const a=new Mt(new Oe(.13,.17,.03),n("#8e3b46"));e.add(a)}else if(/brush|paint/.test(i)){const a=new Mt(new en(.007,.007,.22),n("#c79a63"));a.rotation.x=Math.PI/2,a.position.z=.08,e.add(a);const o=new Mt(new vn(.015),n("#3a7fd0"));o.position.z=.19,e.add(o)}else if(/rod/.test(i)){const a=new Mt(new en(.008,.004,1.6),n("#3a2a1a"));a.rotation.x=-1,a.position.set(0,.35,.6),e.add(a)}else if(/ukulele|guitar/.test(i)){const a=new Mt(new vn(.1,12,10),n("#c98a4a"));a.scale.set(1,1.3,.35),e.add(a);const o=new Mt(new Oe(.03,.28,.02),n("#5a3a20"));o.position.y=.24,e.add(o),e.rotation.z=1.1}else if(/umbrella/.test(i)){const a=new Mt(new en(.008,.008,.8),n("#333"));a.position.y=.35,e.add(a);const o=new Mt(new es(.55,.22,10),n("#2e86ab"));o.position.y=.78,e.add(o)}else if(/skateboard/.test(i)){const a=new Mt(new Oe(.2,.02,.7),n("#e86f5a"));e.add(a)}else if(/lantern/.test(i)){const a=new Mt(new vn(.08,10,8),new Me({color:"#ff7a3d",emissive:"#ff7a3d",emissiveIntensity:1.5}));a.position.y=-.1,e.add(a)}else{const a=new Mt(new vn(.05,10,8),n("#d9a441"));e.add(a)}e.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),this.j.gripL.add(e),this.held=e}}const Ds=["hips","spine","chest","neck","head","shoulderL","elbowL","handL","shoulderR","elbowR","handR","hipL","kneeL","ankleL","hipR","kneeR","ankleR"],$n=()=>{const s={y:.56,z:0,root:[0,0,0]};for(const t of Ds)s[t]=[0,0,0];return s},Xn=(s,t,e)=>{s.y+=t.y*e,s.z+=t.z*e;for(let n=0;n<3;n++)s.root[n]+=t.root[n]*e;for(const n of Ds)for(let i=0;i<3;i++)s[n][i]+=t[n][i]*e},Qn=["shoulderL","elbowL","handL","shoulderR","elbowR","handR"];class F1{constructor(t){this.b=t,this.J=t.j,this.phase=0,this.t=0,this.w={idle:1,walk:0,run:0,sit:0,sleep:0,climb:0,swim:0,ride:0,kneel:0,sitground:0,skate:0},this.act=null,this.actW=0,this.actT=0,this.prevAct=null,this.look=new D,this.lookW=0,this.headYaw=0,this.headPitch=0,this.blinkT=2,this.blink=0,this.cur=$n(),this.fidget=null,this.fidgetT=6,this.onStep=null,this.lastSin=0,this.mood=0,this.energy=.8,this.talking=0,this.surprise=0,this.climbPhase=0}update(t,e){this.t+=t;const n=this.t,i=this.J,a=e.speed>2.4,o={idle:0,walk:0,run:0,sit:0,sleep:0,climb:0,swim:0,ride:0,kneel:0,sitground:0,skate:0};if(e.mode==="walk")if(e.speed<.05)o.idle=1;else if(a){const b=Ce((e.speed-2.4)/1.2,0,1);o.run=b,o.walk=1-b}else o.walk=1;else o[e.mode in o?e.mode:"idle"]=1;for(const b in this.w)this.w[b]=ye(this.w[b],o[b],b==="walk"||b==="run"||b==="idle"?9:4.5,t);const r=we(.42,.85,Ce((e.speed-1)/2.5,0,1));(e.mode==="walk"||e.mode==="skate")&&(this.phase+=(e.dist||0)/r*Math.PI),e.mode==="swim"&&(this.phase+=t*3.2),e.mode==="climb"&&(this.climbPhase+=(e.climbDist||0)/.3*Math.PI);const l=Math.sin(this.phase);this.onStep&&this.w.walk+this.w.run>.4&&Math.sign(l)!==Math.sign(this.lastSin)&&e.speed>.2&&this.onStep(l>0?"L":"R"),this.lastSin=l;const c=this.mood=ye(this.mood,e.mood??0,1.5,t),h=this.energy=ye(this.energy,e.energy??.8,1,t),d=Ce(-c*.5+(1-h)*.4,-.2,.6),u={y:0,z:0,root:[0,0,0]};for(const b of Ds)u[b]=[0,0,0];let f=0;for(const b in this.w)f+=this.w[b];const m=b=>this.w[b]/(f||1);m("idle")>.001&&Xn(u,this.poseIdle(n,d),m("idle")),m("walk")>.001&&Xn(u,this.poseGait(this.phase,0,d,c),m("walk")),m("run")>.001&&Xn(u,this.poseGait(this.phase,1,d,c),m("run")),m("sit")>.001&&Xn(u,this.poseSit(n,d),m("sit")),m("sitground")>.001&&Xn(u,this.poseSitGround(n),m("sitground")),m("sleep")>.001&&Xn(u,this.poseSleep(n),m("sleep")),m("climb")>.001&&Xn(u,this.poseClimb(this.climbPhase),m("climb")),m("swim")>.001&&Xn(u,this.poseSwim(this.phase),m("swim")),m("ride")>.001&&Xn(u,this.poseRide(n,e.ride),m("ride")),m("kneel")>.001&&Xn(u,this.poseKneel(n),m("kneel")),m("skate")>.001&&Xn(u,this.poseSkate(n,this.phase),m("skate"));const g=e.activity||(this.fidget&&e.mode==="walk"&&e.speed<.05?this.fidget:null);if(g!==this.act&&(this.actW<.05||!this.act)&&(this.act=g,this.actT=0),this.actW=ye(this.actW,this.act&&this.act===g?1:0,6,t),this.actT+=t,this.act&&this.actW>.001){const b=this.poseActivity(this.act,this.actT,u);if(b){const w=b.__keys||Qn;for(const T of w)for(let S=0;S<3;S++)u[T][S]=we(u[T][S],b[T][S],this.actW);if(b.__add)for(const[T,S]of Object.entries(b.__add))for(let C=0;C<3;C++)u[T][C]+=S[C]*this.actW;b.__y&&(u.y+=b.__y*this.actW)}}if(this.fidgetT-=t,this.fidgetT<0&&(this.fidget?(this.fidget=null,this.fidgetT=4+Math.random()*8):(this.fidget=["scratch","stretch","look_around","shift","check_paws","tail_flick"][Math.floor(Math.random()*6)],this.fidgetT=2.2+Math.random()*1.5)),u.spine[0]+=d*.18,u.neck[0]+=d*.22,e.lookAt){const b=this.b.root.worldToLocal(e.lookAt.clone()),w=new D(0,1.2,0),T=b.sub(w),S=Ce(Math.atan2(T.x,T.z),-1.1,1.1),C=Ce(-Math.atan2(T.y,Math.hypot(T.x,T.z)),-.6,.5);this.headYaw=ye(this.headYaw,Math.abs(Math.atan2(T.x,T.z))>2.2?0:S,4,t),this.headPitch=ye(this.headPitch,C,4,t)}else this.headYaw=ye(this.headYaw,0,3,t),this.headPitch=ye(this.headPitch,0,3,t);u.neck[1]+=this.headYaw*.4,u.head[1]+=this.headYaw*.6,u.neck[0]+=this.headPitch*.4,u.head[0]+=this.headPitch*.6;const p=this.cur,x=16;p.y=ye(p.y,u.y,x,t),p.z=ye(p.z,u.z,x,t);for(let b=0;b<3;b++)p.root[b]=ye(p.root[b],u.root[b],8,t);for(const b of Ds)for(let w=0;w<3;w++)p[b][w]=ye(p[b][w],u[b][w],x,t);i.hips.position.y=p.y,i.hips.position.z=p.z,this.b.poser.rotation.set(p.root[0],p.root[1],p.root[2]);for(const b of Ds)i[b].rotation.set(p[b][0],p[b][1],p[b][2]);const v=.55-c*.25+this.w.sit*.6+this.w.sitground*.9;i.tail.forEach((b,w)=>{b.rotation.x=ye(b.rotation.x,w===0?v:-.08*w+(this.w.sit+this.w.sitground)*.1,6,t),b.rotation.y=Math.sin(this.phase-w*.7)*.12*(this.w.walk+this.w.run)+Math.sin(n*1.3-w*.5)*.08*(1+(this.act==="tail_flick"?3:0))}),this.face(t,e)}face(t,e){const n=this.b;this.blinkT-=t,this.blinkT<0&&(this.blink=.13,this.blinkT=1.8+Math.random()*4.5,Math.random()<.15&&(this.blinkT=.25)),this.blink-=t;const a=this.w.sleep>.5?.08:this.blink>0?.1:1+this.surprise*.25;for(const c of n.eyes)c.scale.y=ye(c.scale.y,a,30,t),c.scale.x=ye(c.scale.x,1+this.surprise*.15,10,t);this.surprise=Math.max(0,this.surprise-t*.6);const o=this.mood;for(const c of n.brows){const h=c.userData.side;c.rotation.z=ye(c.rotation.z,(o<-.2?-.35*-o:o<.6?0:.05)*h+(e.angry?.4*h:0),5,t),c.position.y=ye(c.position.y,.215+this.surprise*.025+(o<-.3?.006:0),6,t)}const r=e.talking?.35+.55*Math.abs(Math.sin(this.t*13)*Math.sin(this.t*7.3)):0;this.talking=ye(this.talking,r,20,t),n.mouthOpen.scale.y=Math.max(.05,this.talking*.9+this.surprise*.7+(this.act==="laugh"?.6:0));const l=o>.05;n.smile.rotation.z=l?Math.PI:0,n.smile.scale.y=ye(n.smile.scale.y,l?.4+o*.8:.15+-o*.5,6,t),n.smile.position.y=l?.012:-.012}poseIdle(t,e){const n=$n(),i=Math.sin(t*1.7);return n.y=.56+i*.004,n.chest[0]=i*.025,n.spine[0]=.02,n.hips[2]=Math.sin(t*.45)*.03,n.spine[2]=-Math.sin(t*.45)*.03,n.shoulderL=[.05,0,.12+i*.01],n.shoulderR=[.05,0,-.12-i*.01],n.elbowL=[-.2,0,0],n.elbowR=[-.2,0,0],n.hipL=[0,0,.03],n.hipR=[0,0,-.03],n.kneeL=[.06,0,0],n.kneeR=[.06,0,0],n.ankleL=[-.06,0,0],n.ankleR=[-.06,0,0],n}poseGait(t,e,n,i){const a=$n(),o=Math.sin(t),r=Math.cos(t),l=e?.72:.42,c=e?1.25:.7;a.hipL=[-o*l-.05,0,.02],a.hipR=[o*l-.05,0,-.02],a.kneeL=[Math.max(0,r)*c+.08,0,0],a.kneeR=[Math.max(0,-r)*c+.08,0,0],a.ankleL=[o*l*.4-a.kneeL[0]*.3,0,0],a.ankleR=[-o*l*.4-a.kneeR[0]*.3,0,0],a.y=e?.54+Math.abs(r)*.045:.555-Math.abs(o)*.022+(i>.5?Math.abs(r)*.012:0),a.hips[1]=o*.12,a.chest[1]=-o*.16,a.hips[2]=r*.04,a.spine[0]=e?.22:.05,a.neck[0]=e?-.12:-.02;const h=e?.9:.45;return a.shoulderL=[o*h,0,.14],a.shoulderR=[-o*h,0,-.14],a.elbowL=[e?-1.3:-.3-Math.max(0,o)*.3,0,0],a.elbowR=[e?-1.3:-.3-Math.max(0,-o)*.3,0,0],a}poseSit(t,e){const n=$n();return n.y=.5,n.z=-.06,n.spine[0]=-.08+Math.sin(t*1.6)*.01,n.chest[0]=Math.sin(t*1.6)*.02,n.hipL=[-1.5,0,.08],n.hipR=[-1.5,0,-.08],n.kneeL=[1.45,0,0],n.kneeR=[1.45,0,0],n.ankleL=[.05,0,0],n.ankleR=[.05,0,0],n.shoulderL=[-.55,0,.18],n.shoulderR=[-.55,0,-.18],n.elbowL=[-.55,0,0],n.elbowR=[-.55,0,0],n}poseSitGround(t){const e=$n();return e.y=.16,e.z=-.05,e.spine[0]=-.12,e.hipL=[-1.45,.2,.3],e.hipR=[-1.45,-.2,-.3],e.kneeL=[.9,0,0],e.kneeR=[.9,0,0],e.ankleL=[-.2,0,0],e.ankleR=[-.2,0,0],e.shoulderL=[.5,0,.35],e.shoulderR=[.5,0,-.35],e.elbowL=[-.2,0,0],e.elbowR=[-.2,0,0],e.chest[0]=Math.sin(t*1.4)*.02,e}poseSleep(t){const e=$n();return e.y=.62,e.root=[-Math.PI/2,0,0],e.chest[0]=Math.sin(t*.9)*.03,e.head[1]=.5,e.head[2]=.2,e.shoulderL=[.1,0,.35],e.shoulderR=[-1.6,0,-.4],e.elbowR=[-1.6,0,0],e.hipL=[-.15,0,.05],e.kneeL=[.3,0,0],e.hipR=[-.4,0,-.05],e.kneeR=[.6,0,0],e}poseClimb(t){const e=$n(),n=Math.sin(t);return e.y=.56,e.spine[0]=-.05,e.shoulderL=[-2.7+n*.35,0,.15],e.shoulderR=[-2.7-n*.35,0,-.15],e.elbowL=[-.6-Math.max(0,n)*.8,0,0],e.elbowR=[-.6-Math.max(0,-n)*.8,0,0],e.hipL=[-.7-n*.5,0,.1],e.hipR=[-.7+n*.5,0,-.1],e.kneeL=[1.2+n*.4,0,0],e.kneeR=[1.2-n*.4,0,0],e.head[0]=-.4,e}poseSwim(t){const e=$n();return e.y=.2,e.root=[1.35,0,0],e.shoulderL=[-(t%(Math.PI*2)),0,.2],e.shoulderR=[-((t+Math.PI)%(Math.PI*2)),0,-.2],e.hipL=[Math.sin(t*2)*.3,0,0],e.hipR=[-Math.sin(t*2)*.3,0,0],e.head[0]=-.9,e.neck[0]=-.3,e.head[1]=Math.sin(t)*.3,e}poseRide(t,e){const n=this.poseSit(t,0);if(e==="tram"||e==="boat_stand"){const i=this.poseIdle(t,0);return i.shoulderL=[-2.8,0,.1],i.elbowL=[-.3,0,0],i.hips[2]=Math.sin(t*1.2)*.04,i}return n.shoulderL=[-1.15,0,.12],n.shoulderR=[-1.15,0,-.12],n.elbowL=[-.35,0,0],n.elbowR=[-.35,0,0],n.spine[0]=.2,e==="bike"&&(n.hipL[0]=-1.3+Math.sin(t*6)*.45,n.hipR[0]=-1.3-Math.sin(t*6)*.45,n.kneeL[0]=1.5+Math.cos(t*6)*.4,n.kneeR[0]=1.5-Math.cos(t*6)*.4,n.y=.82),n}poseKneel(t){const e=$n();return e.y=.33,e.spine[0]=.35,e.neck[0]=.2,e.hipL=[-1.5,0,.1],e.kneeL=[1.55,0,0],e.ankleL=[0,0,0],e.hipR=[.2,0,-.1],e.kneeR=[1.65,0,0],e.ankleR=[.9,0,0],e.shoulderL=[-.9,0,.1],e.shoulderR=[-.6,0,-.1],e.elbowL=[-.5,0,0],e.elbowR=[-.5,0,0],e}poseSkate(t,e){const n=$n();return n.y=.68,n.root=[0,1.2,0],n.hipL=[0,0,.25],n.hipR=[0,0,-.25],n.kneeL=[.35,0,0],n.kneeR=[.35,0,0],n.spine[0]=.1,n.head[1]=-1.1,n.shoulderL=[0,0,1+Math.sin(t*2)*.15],n.shoulderR=[0,0,-1-Math.sin(t*2.3)*.15],n}poseActivity(t,e,n){const i=$n();for(const o of Ds)i[o]=[...n[o]];const a=o=>(Math.sin(e*o)+1)/2;switch(t){case"eat":case"drink":{const o=a(2.4);return i.shoulderL=[-.9-o*.5,0,0],i.elbowL=[-1.6-o*.6,0,0],i.__keys=[...Qn,"head"],i.head=[n.head[0]-o*.15,n.head[1],0],i}case"read":return i.shoulderL=[-.9,0,-.25],i.shoulderR=[-.9,0,.25],i.elbowL=[-1.25,0,0],i.elbowR=[-1.25,0,0],i.__keys=[...Qn,"head"],i.head=[.4,Math.sin(e*.4)*.1,0],i;case"paint":case"craft":{const o=Math.sin(e*3.1);return i.shoulderL=[-1.35+o*.12,0,.15+Math.cos(e*3.1)*.15],i.elbowL=[-.5,0,0],i.__keys=[...Qn,"head"],i.head=[.1,.1,Math.sin(e*.7)*.08],i}case"play":case"busk":case"music":{const o=Math.sin(e*9);return i.shoulderL=[-.7,0,-.35],i.elbowL=[-1.3+o*.18,0,0],i.shoulderR=[-1,.4,-.5],i.elbowR=[-1.2,0,0],i.__keys=[...Qn,"head"],i.head=[.25,-.2+Math.sin(e*2)*.1,Math.sin(e*2.4)*.12],i.__add={hips:[0,0,Math.sin(e*2.4)*.05]},i}case"wave":return i.shoulderR=[0,0,-2.6],i.elbowR=[0,0,-.4+Math.sin(e*9)*.45],i;case"cheer":return i.shoulderL=[-.3,0,2.6],i.shoulderR=[-.3,0,-2.6],i.elbowL=[0,0,.3],i.elbowR=[0,0,-.3],i.__y=Math.abs(Math.sin(e*7))*.05,i;case"shrug":return i.shoulderL=[-.3,0,.55],i.shoulderR=[-.3,0,-.55],i.elbowL=[-1.3,.6,0],i.elbowR=[-1.3,-.6,0],i.__keys=[...Qn,"head"],i.head=[0,0,.25],i;case"dance":{const o=Math.sin(e*6);return i.shoulderL=[-.4,0,1.4+o*.9],i.shoulderR=[-.4,0,-1.4+o*.9],i.elbowL=[-.8,0,0],i.elbowR=[-.8,0,0],i.__add={hips:[0,o*.25,o*.1],spine:[0,0,-o*.1],head:[0,-o*.2,o*.15]},i.__y=-Math.abs(o)*.04,i}case"think":return i.shoulderR=[-1.15,0,.2],i.elbowR=[-2.3,0,0],i.__keys=[...Qn,"head"],i.head=[-.25,.2,.15],i;case"laugh":{const o=Math.sin(e*14);return i.shoulderL=[-.6,0,-.1],i.elbowL=[-1,0,0],i.__add={chest:[o*.06,0,0],head:[-.25+o*.05,0,0]},i}case"sad":return i.__add={spine:[.25,0,0],neck:[.3,0,0],head:[.2,0,0]},i.shoulderL=[.15,0,.05],i.shoulderR=[.15,0,-.05],i;case"facepalm":return i.shoulderR=[-1.3,0,.35],i.elbowR=[-2.2,0,0],i.__add={head:[.35,0,0]},i;case"stretch":return i.shoulderL=[-2.9,0,.3],i.shoulderR=[-2.9,0,-.3],i.elbowL=[-.2,0,0],i.elbowR=[-.2,0,0],i.__add={spine:[-.2,0,0],head:[-.3,0,0]},i;case"scratch":return i.shoulderR=[-2,0,-.9],i.elbowR=[-1.8+Math.sin(e*16)*.2,0,0],i.__add={head:[.1,0,-.2]},i;case"look_around":return i.__keys=["head","neck"],i.head=[0,Math.sin(e*1.6)*.9,0],i.neck=[0,Math.sin(e*1.6)*.3,0],i;case"shift":return i.__keys=["hips"],i.hips=[0,0,.07],i;case"check_paws":return i.shoulderL=[-1.1,0,-.2],i.elbowL=[-1.5,0,0],i.handL=[0,1.2*Math.sin(e*2),0],i.__keys=[...Qn,"head"],i.head=[.45,.2,0],i;case"tail_flick":return null;case"work":case"cook":case"order":case"buy":case"sell":{const o=Math.sin(e*5);return i.shoulderL=[-.95+o*.1,0,-.1],i.shoulderR=[-.95-o*.1,0,.1],i.elbowL=[-.9,0,0],i.elbowR=[-.9,0,0],i.__keys=[...Qn,"head"],i.head=[.35,0,0],i}case"carry":return i.shoulderL=[-1,0,-.15],i.shoulderR=[-1,0,.15],i.elbowL=[-.7,0,0],i.elbowR=[-.7,0,0],i;case"reach":case"pick_up":case"give_item":case"interact":case"open_door":{const o=Math.min(1,e*2);return i.shoulderL=[-1.45*o,0,.05],i.elbowL=[-.15,0,0],t==="pick_up"&&(i.__add={spine:[.6*o,0,0]},i.__keys=Qn),i}case"fish":return i.shoulderL=[-.9,0,-.15],i.shoulderR=[-.9,0,.2],i.elbowL=[-.6,0,0],i.elbowR=[-.6,0,0],i;case"talk":{const o=Math.sin(e*3.3);return i.shoulderL=[-.5-Math.max(0,o)*.4,0,.2],i.elbowL=[-1,0,0],i.shoulderR=[-.2+Math.min(0,o)*.3,0,-.2],i.elbowR=[-.7,0,0],i}case"stargaze":return i.__keys=["head","neck"],i.head=[-.75,Math.sin(e*.3)*.3,0],i.neck=[-.3,0,0],i;case"garden":{const o=Math.sin(e*4);return i.shoulderL=[-1.3+o*.25,0,0],i.elbowL=[-.3,0,0],i.shoulderR=[-1,0,0],i}case"feed":{const o=Math.min(1,e%2.2*2);return i.shoulderL=[-.3-o*1.6,0,.1],i.elbowL=[-.4*(1-o),0,0],i}case"stumble":{const o=Math.max(0,1-e*1.4);return i.shoulderL=[-1.2*o,0,1.2*o],i.shoulderR=[-1.2*o,0,-1.2*o],i.__add={spine:[.5*o,0,.2*o]},i}case"jump":{const o=Math.sin(Math.min(1,e*1.6)*Math.PI);return i.shoulderL=[-1.6*o,0,.4],i.shoulderR=[-1.6*o,0,-.4],i.__y=o*.35,i.__add={hipL:[-.6*o,0,0],hipR:[-.6*o,0,0],kneeL:[1*o,0,0],kneeR:[1*o,0,0]},i}case"sleep":case"rest":return null;default:return null}}}const Hl="pebble-city-save-v1",O1={real:1/60,slow:.25,lively:1,fast:4};function z1(){return{version:1,created:Date.now(),world:{day:1,minute:510,weather:"clear",weatherUntil:0,news:[],festival:null,timeSpeed:"lively",extraPlaces:[],extraCitizens:[]},pebble:{x:null,z:null,yaw:0,inside:"home",place:"home",needs:{hunger:.35,energy:.8,social:.4,fun:.4},money:40,inventory:[],outfit:{shirt:"#3f8f8a"},wearing:[],held:null,home:{furniture:[]},interests:[],currentInterest:null,mood:{word:"just woken up",valence:.2},lastThought:"",lastSay:"",activity:"waking up at home",memory:{recent:[],summaries:[],facts:[]},relationships:{},diary:[],requests:[],discovered:["home","corner_store","apartments"],stats:{shifts:0,earned:0,spent:0}},npcMemory:{},log:[]}}function B1(){try{const s=JSON.parse(localStorage.getItem(Hl));if(s&&s.version===1)return s}catch{}return null}function V1(s){try{return localStorage.setItem(Hl,JSON.stringify(s)),!0}catch{return!1}}function H1(){try{localStorage.removeItem(Hl)}catch{}}const on=s=>s.world.minute/60%24;function Cn(s){const t=Math.floor(s.world.minute)%1440,e=Math.floor(t/60),n=t%60;return`${(e+11)%12+1}:${String(n).padStart(2,"0")} ${e<12?"am":"pm"}`}const G1=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],So=s=>G1[(s.world.day-1)%7];function vr(s){return`Day ${s.world.day}, ${So(s)}`}function W1(s,t,e="idle"){const n=s.world;n.minute+=t;let i=!1;n.minute>=1440&&(n.minute-=1440,n.day+=1,i=!0);const a=t/60,o=s.pebble.needs,r={walk:1.4,run:2.2,work:1.8,sleep:-9,sit:.4,idle:.6,inside:.6,ride:.3}[e]??.8;return o.hunger=Ce(o.hunger+.055*a*(e==="sleep"?.4:1),0,1),o.energy=Ce(o.energy-.035*a*r,0,1),o.social=Ce(o.social+.025*a*(e==="sleep"?.2:1),0,1),o.fun=Ce(o.fun+.03*a*(e==="sleep"?.1:1),0,1),i}function xh(s){const t=[];return s.hunger>.8?t.push("starving"):s.hunger>.6?t.push("pretty hungry"):s.hunger>.4?t.push("a bit peckish"):s.hunger<.15&&t.push("full"),s.energy<.15?t.push("exhausted"):s.energy<.35?t.push("tired"):s.energy>.8&&t.push("full of beans"),s.social>.75?t.push("lonely"):s.social>.55?t.push("wants some company"):s.social<.15&&t.push("socially full"),s.fun>.75?t.push("really bored"):s.fun>.55&&t.push("a little restless"),t.length?t.join(", "):"comfortable"}function gh(s,t=Math.random){const e=s.world;if(e.minute<e.weatherUntil&&!(e.weatherUntil>1440&&e.minute<60))return null;const i=Math.floor((e.day-1)/14)%4===3?[["clear",3],["cloudy",3],["snow",4],["fog",1.5],["storm",.3]]:[["clear",6],["cloudy",3],["rain",2],["fog",1],["storm",.6]],a=i.reduce((c,h)=>c+h[1],0);let o=t()*a,r="clear";for(const[c,h]of i)if((o-=h)<0){r=c;break}const l=e.weather;return e.weather=r,e.weatherUntil=(e.minute+120+t()*240)%1440,r!==l?r:null}const $1=[s=>`Crumb & Co Bakery is doing half-price ${s(["fruit tarts","croissants","pretzels"])} today.`,s=>`The Bandshell has a free ${s(["jazz trio","brass band","open-mic night","puppet show"])} tonight at 7.`,s=>`Fishing boats came back with a huge ${s(["mackerel","oyster","clam"])} haul this morning.`,s=>"Someone painted a new mural in Paintcan Alley overnight. Nobody knows who.",s=>`The Planetarium's star show this week is about ${s(["comets","the moons of Jupiter","how stars die"])}.`,s=>`A lost cat poster has gone up on Wren Street: "answers to ${s(["Biscuit","Admiral","Mrs. Whiskers"])}".`,s=>`Pixel Burrow Arcade is running a high-score contest on ${s(["Comet Chase","Mole Mayhem","Turbo Teacup"])}.`,s=>`The museum has a new exhibit: ${s(["a meteorite the size of a melon","ancient board games","clocks that run backwards"])}.`,s=>`Kettle Square Cafe is trying a new ${s(["lavender latte","pumpkin bun","salted honey cocoa"])}.`,s=>"Tram line closed for ten minutes after a goose refused to move.",s=>`The community garden needs volunteers to plant ${s(["tulip bulbs","tomatoes","sunflowers"])}.`,s=>`Halvorsen's Department Store has a sale on ${s(["raincoats","scarves","hats","ukuleles"])}.`];function bh(s,t=Math.random){const e=o=>o[Math.floor(t()*o.length)],n=[],i=$1.slice();for(let o=0;o<3;o++)n.push(i.splice(Math.floor(t()*i.length),1)[0](e));const a=s.world.day;return s.world.festival=a%7===6?{name:"Lantern Festival",where:"night_market",from:18,to:24,fireworks:!0}:a%7===3?{name:"Harbor Parade",where:"promenade",from:15,to:18}:null,s.world.festival&&n.unshift(`Today: the ${s.world.festival.name}${s.world.festival.fireworks?", with fireworks over the harbor after dark":""}.`),s.world.news=n,n}function X1(s,t,e,n=80){return Fe.filter(i=>Math.hypot(i.door[0]-s,i.door[1]-t)<n).map(i=>({p:i,d:Math.hypot(i.door[0]-s,i.door[1]-t),open:En(i,e)})).sort((i,a)=>i.d-a.d)}function fa(s,t,e="event"){const n=s.pebble.memory;n.recent.push({day:s.world.day,time:Cn(s),kind:e,text:t}),n.recent.length>80&&n.recent.splice(0,n.recent.length-80)}const q1=["walk_to","enter_building","interact","pick_up","drop","use_item","buy","sell","order","work_shift","say","emote","sit","sleep","climb","ride","craft","cook","paint","play","give_item","talk_to","look_at","wait","write_diary","make_request"],Y1=["wave","cheer","shrug","dance","laugh","sad","facepalm","think","stretch","jump","scratch"],Yt=s=>String(s||"").toLowerCase().replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();class j1{constructor(t){this.world=t,this.st=t.state,this.body=new U1,this.anim=new F1(this.body),t.scene.add(this.body.root),this.pos=new D,this.yaw=this.st.pebble.yaw||0,this.speed=0,this.mode="walk",this.activity=null,this.lookAt=null,this.talking=0,this.path=null,this.pi=0,this.waitingCross=!1,this.interior=null,this.ride=null,this.climbing=null,this.onTop=null,this.timers=[],this.busy=!1,this.current=null,this.cancelFlag=!1,this.body.setOutfit(this.st.pebble.outfit),this.applyWearing(),this.anim.onStep=e=>t.audio?.footstep(this.surface()),this.rnd=yn(Date.now()&65535),this.sayText="",this.sayUntil=0}spawn(){const t=this.st.pebble;if(t.inside&&Ut[t.inside]){this.enterInstant(Ut[t.inside]);return}if(t.x!=null)this.pos.set(t.x,.17,t.z);else{const e=Ut.home;this.pos.set(e.door[0],.17,e.door[1])}this.body.root.position.copy(this.pos)}persist(){const t=this.st.pebble;t.yaw=this.yaw,this.interior||(t.x=this.pos.x,t.z=this.pos.z)}get worldPos(){return this.interior?this.pos.clone():this.pos}surface(){if(this.interior)return"wood";const t=Math.floor((this.pos.x-qe)/pe),e=Math.floor((this.pos.z-Fn)/pe);if(this.pos.z>zt)return"wood";const n=t>=0&&e>=0&&t<le&&e<oe?zn(t,e):"park";return n==="oldtown"?"cobble":n==="park"?"grass":"stone"}district(){if(this.interior)return this.interior.place.district;const t=Math.floor((this.pos.x-qe)/pe),e=Math.floor((this.pos.z-Fn)/pe);return this.pos.z>zt-10?"harbor":t>=0&&e>=0&&t<le&&e<oe?zn(t,e):"outskirts"}applyWearing(){const t=this.st.pebble,e={...t.outfit};for(const n of t.wearing||[]){const i=mo[n];i&&(e[i]=n)}this.body.setOutfit(e),this.body.setHeld(t.held)}update(t,e){const n=this.world,i=n.state.world.day*1440+n.state.world.minute;this.timers=this.timers.filter(c=>i>=c.at||this.cancelFlag?(c.res(),!1):!0);let a=0;if(this.ride&&this.ride.kind==="tram"&&this.ride.onboard){const c=n.traffic.tram;this.pos.set(c.x+.4,.95,c.z+(c.dir>0?-2:2)),this.yaw=c.dir>0?0:Math.PI}else if(this.ride&&this.ride.kind==="boat"){const c=this.ride;c.t+=t*.05;const h=c.t*Math.PI*2,d=c.cx,u=c.cz;this.pos.set(d+Math.sin(h)*40,ua+.6,u+30-Math.cos(h)*30),this.yaw=h+Math.PI/2,c.mesh.position.set(this.pos.x,ua+.05,this.pos.z),c.mesh.rotation.y=this.yaw}else if(this.climbing){const c=this.climbing,h=c.t;c.t=Math.min(1,c.t+t/c.dur);const d=c.from.y,u=c.to.y,f=c.t;if(this.pos.set(c.from.x+(c.to.x-c.from.x)*Ce((f-.85)/.15,0,1),d+(u-d)*Ce(f/.88,0,1),c.from.z+(c.to.z-c.from.z)*Ce((f-.85)/.15,0,1)),this.climbDist=Math.abs(u-d)*(c.t-h),c.t>=1){const m=c.done;this.climbing=null,m()}}else this.path?a=this.followPath(t):this.speed=ye(this.speed,0,8,t);this.swimming&&(this.pos.y=ye(this.pos.y,ua-.25,3,t)),this.body.root.position.copy(this.pos),this.body.root.rotation.y=this.yaw,(this.ride?.kind==="bike"||this.ride?.kind==="scooter")&&(this.ride.mesh.position.copy(this.pos),this.ride.mesh.rotation.y=this.yaw);const o=n.state.pebble;let r=this.forcedMode||(this.climbing?"climb":this.swimming?"swim":this.ride?"ride":"walk");const l=this.path?this.speed:0;this.anim.update(t,{mode:r,speed:l,dist:a,climbDist:this.climbDist||0,ride:this.ride?.kind,activity:this.activity,lookAt:this.lookAt,mood:o.mood.valence??0,energy:o.needs.energy,talking:performance.now()<this.sayUntil}),this.climbDist=0}followPath(t){const e=this.world,n=this.path[this.pi];if(!n){this.path=null,this.speed=0;const f=this.pathDone;return this.pathDone=null,f&&f(!0),0}if(n.edge&&n.edge.type==="cross"&&!this.crossing&&!this.interior){const f=n.edge;if(!e.traffic.canCross(f.ix,f.iz,f.axis))return this.waitingCross=!0,this.speed=ye(this.speed,0,7,t),this.lookAt=new D(n.x,1.2,n.z),this.speed*t;this.waitingCross=!1,this.crossing=!0}let i=n.x-this.pos.x,a=n.z-this.pos.z;const o=Math.hypot(i,a),r=this.pi===this.path.length-1;if(o<(r?.12:.45))return this.pi++,this.crossing=!1,0;if(i/=o,a/=o,!this.interior)for(const f of e.crowd.near(this.pos.x,this.pos.z,1.6)){const m=this.pos.x-f.x,g=this.pos.z-f.z,p=Math.hypot(m,g)||1;i+=m/p*.5*(1.6-p),a+=g/p*.5*(1.6-p)}const l=Math.atan2(i,a);this.yaw=Mo(this.yaw,l,7,t);const c=Math.cos(this.yaw-l),h=(this.pathRun?3.4:this.ride?this.ride.kind==="bike"?5.5:4.5:1.35)*(e.state.pebble.needs.energy<.2?.75:1),d=r?Ce(o/1.2,.15,1):1;this.speed=ye(this.speed,h*Math.max(.2,c)*d,3.2,t);const u=this.speed*t;if(this.pos.x+=Math.sin(this.yaw)*u,this.pos.z+=Math.cos(this.yaw)*u,this.pos.y=this.interior?Ae.y:(this.onBridgeOrRaised(),.17),!this.lookTimer||(this.lookTimer-=t)<0){this.lookTimer=2+Math.random()*4;const f=this.interior?[]:e.crowd.near(this.pos.x,this.pos.z,8);this.lookAt=f.length&&Math.random()<.6?new D(f[0].x,1.4,f[0].z):null}return!this.interior&&this.surface()==="cobble"&&Math.random()<t*.004&&!this.activity&&this.flash("stumble",1.2),u}onBridgeOrRaised(){return!0}waitGame(t){const e=this.world.state.world;return new Promise(n=>this.timers.push({at:e.day*1440+e.minute+t,res:n}))}waitReal(t){return new Promise(e=>setTimeout(e,t*1e3))}async flash(t,e){this.activity=t,await this.waitReal(e),this.activity===t&&(this.activity=null)}say(t,e){t&&(this.sayText=t,this.sayUntil=performance.now()+(e||Ce(t.length*70,2500,9e3)),this.st.pebble.lastSay=t,this.world.ui?.speech(t),this.world.voice?.speak(t))}goTo(t,e,n={}){if(this.interior)this.path=[{x:t,z:e,edge:null}],this.pi=0;else{const i=n.node??this.world.nav.nearestNode(t,e),a=this.world.nav.path(this.pos.x,this.pos.z,i);if(!a)return Promise.resolve(!1);(n.node==null||Math.hypot(a[a.length-1].x-t,a[a.length-1].z-e)>.3)&&a.push({x:t,z:e,edge:null}),this.path=a,this.pi=1}return this.pathRun=!!n.run,this.forcedMode=null,this.activity=null,new Promise(i=>this.pathDone=i)}async faceTo(t,e){const n=Math.atan2(t-this.pos.x,e-this.pos.z);for(let i=0;i<30;i++)this.yaw=Mo(this.yaw,n,8,.033),await this.waitReal(.033)}async exitBuilding(){if(!this.interior)return;const t=this.interior.place;await this.goTo(this.interior.spots.door.x+Ae.x,this.interior.spots.door.z+Ae.z+.8),await this.world.fade(async()=>{this.world.leaveInterior(),this.interior=null,this.forcedMode=null,this.pos.set(t.door[0],.17,t.door[1]),this.yaw=t.yaw,this.st.pebble.inside=null}),fa(this.st,`left ${t.name}`)}enterInstant(t){const e=this.world.enterInterior(t);this.interior=e,this.st.pebble.inside=t.id,this.st.pebble.place=t.id,this.pos.set(Ae.x+e.spots.door.x,Ae.y,Ae.z+e.spots.door.z-.6),this.yaw=Math.PI}async enter(t){if(this.interior?.place.id===t.id)return{ok:!0,text:`You're already inside ${t.name}.`};if(this.interior&&await this.exitBuilding(),this.onTop&&await this.climbDown(),t.outdoor)return await this.goTo(t.door[0],t.door[1],{node:t.node}),{ok:!0,text:`${t.name} is an open-air spot; you're there now.`+this.describeHere()};if(!await this.goTo(t.door[0],t.door[1],{node:t.node}))return{ok:!1,text:`You couldn't find a way to ${t.name}.`};const n=on(this.st);return!En(t,n)&&t.id!=="home"&&t.id!=="apartments"?(await this.faceTo(t.door[0]-Math.sin(t.yaw)*3,t.door[1]-Math.cos(t.yaw)*3),this.flash("reach",1.2),await this.waitReal(1.2),{ok:!1,text:`${t.name} is closed right now (open ${As(t.hours)}). The door's locked.`}):(await this.faceTo(t.door[0]-Math.sin(t.yaw)*3,t.door[1]-Math.cos(t.yaw)*3),this.activity="open_door",await this.waitReal(.7),await this.world.fade(async()=>{this.enterInstant(t),this.activity=null}),this.st.pebble.discovered.includes(t.id)||(this.st.pebble.discovered.push(t.id),this.world.ui?.toast(`Discovered ${t.name}`)),await this.goTo(Ae.x+this.interior.spots.door.x,Ae.z+this.interior.spots.door.z-2.2),fa(this.st,`went into ${t.name}`),{ok:!0,text:`You went inside ${t.name}. ${this.describeInterior()}`})}async goToSpot(t){if(!t)return!1;const e=t.p||t;return await this.goTo(Ae.x+e.x,Ae.z+e.z),t.yaw!==void 0&&await this.faceTo(this.pos.x+Math.sin(t.yaw),this.pos.z+Math.cos(t.yaw)),!0}describeInterior(){if(!this.interior)return"";const{place:t,spots:e}=this.interior,n=[],i=this.world.crowd.people.filter(a=>a.state==="inside"&&a.insideOf===t.id);return i.length&&n.push(`${i.map(a=>`${a.name} (${a.job})`).join(", ")} ${i.length>1?"are":"is"} here`),t.sells?.length&&n.push(`for sale: ${t.sells.map(a=>`${a} $${yi[a]}`).join(", ")}`),t.job&&n.push(`they sometimes need a ${t.job.title} ($${t.job.pay}/hour)`),e.machines.length&&n.push(`${e.machines.length} ${e.kind==="arcade"?"arcade cabinets glowing":"workbenches"}`),e.screen&&n.push("a big screen and rows of seats"),e.easel&&n.push("easels and paints"),e.piano&&n.push("an old piano in the corner"),e.telescope&&n.push("a huge telescope under the dome"),e.bed&&n.push(`your bed, the little kitchen, the sofa${this.st.pebble.home.furniture.length?", and the things you have added: "+this.st.pebble.home.furniture.map(a=>a.title||a.item).join(", "):""}`),n.length?"Inside: "+n.join("; ")+".":""}describeHere(){const t=this.world.crowd.near(this.pos.x,this.pos.z,12).filter(e=>e.named);return t.length?` ${t.map(e=>e.name).join(", ")} ${t.length>1?"are":"is"} nearby.`:""}async climbDown(){const t=this.onTop;t&&(await new Promise(e=>{this.climbing={from:this.pos.clone(),to:new D(t.base[0],.17,t.base[1]),t:0,dur:Math.max(2.5,t.top[1]/1.6),done:e}}),this.onTop=null,this.forcedMode=null)}findPlace(t){const e=Yt(t);if(!e)return null;let n=Ut[t]||Ut[e.replace(/ /g,"_")];if(n)return n;let i=null,a=0;for(const o of Fe.concat(this.world.extraPlaces||[])){const r=Yt(o.name),l=e.split(" ").filter(h=>h.length>2);let c=r===e?100:r.includes(e)||e.includes(r)?50:0;for(const h of l)(r.includes(h)||o.type.includes(h)||o.id.includes(h))&&(c+=8);c>a&&(a=c,i=o)}if(i&&a>=8)return i;for(const[o,r]of Object.entries(ns))if(e.includes(Yt(r.name))||e.includes(o)){const l=Fe.filter(c=>c.district===o);return l[Math.floor(Math.random()*l.length)]}return null}findPerson(t){const e=Yt(t);return e&&this.world.crowd.named().find(n=>n.id===e||Yt(n.name)===e||Yt(n.name).includes(e)||e.includes(Yt(n.name).split(" ")[0]))||null}findSpot(t){const e=Yt(t),i=this.world.city.spots.filter(o=>e.includes(o.type.replace("_"," "))||o.view&&e.includes(o.view)||e.includes("bench")&&o.type==="bench"),a=i.length?i:null;return a?a.map(o=>[o,Math.hypot(o.x-this.pos.x,o.z-this.pos.z)]).sort((o,r)=>o[1]-r[1])[0][0]:null}hasItem(t){const e=Yt(t);return this.st.pebble.inventory.find(n=>Yt(typeof n=="string"?n:n.title||n.item)===e)||this.st.pebble.inventory.find(n=>Yt(typeof n=="string"?n:n.title||n.item).includes(e)||e.includes(Yt(typeof n=="string"?n:n.title||n.item)))}removeItem(t){const e=this.st.pebble.inventory,n=e.indexOf(t);n>=0&&e.splice(n,1)}itemName(t){return typeof t=="string"?t:t.title||t.item}async perform(t){const e=(t.type||t.name||"wait").toLowerCase();this.current=t,this.busy=!0,this.cancelFlag=!1;let n;try{const i=this["act_"+e];n=i?await i.call(this,t):{ok:!1,text:`"${e}" isn't something you can do here. Possible actions: ${q1.join(", ")}.`}}catch(i){console.error(i),n={ok:!1,text:"Something went wrong and you lost your train of thought."}}return this.busy=!1,this.current=null,this.activity=this.activity==="sleep"?null:this.activity,n?.text&&fa(this.st,n.text,n.ok?"did":"failed"),n}cancel(){if(this.cancelFlag=!0,this.pathDone){const t=this.pathDone;this.pathDone=null,this.path=null,t(!1)}}async act_walk_to(t){const e=t.target||t.place||"";if(/^(home|my flat|my place|my home)$/i.test(e.trim()))return this.walkPlace(Ut.home,t);if(this.interior&&(Yt(e).includes("outside")||Yt(e).includes("out")))return await this.exitBuilding(),{ok:!0,text:`You stepped back outside onto the street.${this.describeHere()}`};if(this.interior){const r=this.interiorSpot(e);if(r)return await this.goToSpot(r),{ok:!0,text:`You walked over to the ${Yt(e)||"spot"}.`}}const n=this.findPerson(e);if(n&&!/\b(cafe|shop|store|park|bar|market|square|tower|museum)\b/i.test(e)){if(this.interior&&await this.exitBuilding(),this.onTop&&await this.climbDown(),n.state==="inside"){const r=Ut[n.insideOf];return{ok:!1,text:`${n.name} seems to be inside ${r?.name||"somewhere"} right now.`}}return await this.goTo(n.x+1,n.z+.6,{run:t.style==="run"}),{ok:!0,text:`You caught up with ${n.name}.`}}const i=this.findPlace(e);if(i)return this.walkPlace(i,t);const a=this.findSpot(e);if(a)return this.interior&&await this.exitBuilding(),this.onTop&&await this.climbDown(),await this.goTo(a.x,a.z,{run:t.style==="run"}),{ok:!0,text:`You walked to a ${a.type.replace("_"," ")}${a.view?" with a view of the "+a.view:""}.${this.describeHere()}`};this.interior&&await this.exitBuilding(),this.onTop&&await this.climbDown();const o=this.world.nav.nodes[Math.floor(Math.random()*this.world.nav.nodes.length)];return await this.goTo(o.x,o.z),{ok:!0,text:`You wandered for a while and ended up in ${ns[this.district()]?.name||"the edge of town"}.${this.describeHere()}`}}async walkPlace(t,e){if(this.interior?.place.id===t.id)return{ok:!0,text:`You're already in ${t.name}.`};if(this.interior&&await this.exitBuilding(),this.onTop&&await this.climbDown(),!await this.goTo(t.door[0],t.door[1],{node:t.node,run:e.style==="run"}))return{ok:!1,text:`You couldn't work out how to get to ${t.name}.`};this.st.pebble.discovered.includes(t.id)||(this.st.pebble.discovered.push(t.id),this.world.ui?.toast(`Discovered ${t.name}`)),await this.faceTo(t.door[0]-Math.sin(t.yaw)*3,t.door[1]-Math.cos(t.yaw)*3);const i=En(t,on(this.st));return{ok:!0,text:`You arrived at ${t.name}${t.outdoor?"":i?" (open)":" (closed right now)"}.${this.describeHere()}`}}async act_enter_building(t){const e=this.findPlace(t.target||t.place);return e?e.hidden&&!this.st.pebble.discovered.includes(e.id)&&Math.hypot(e.door[0]-this.pos.x,e.door[1]-this.pos.z)>25?{ok:!1,text:"You don't know where that is."}:this.enter(e):{ok:!1,text:`You couldn't tell which building "${t.target}" is.`}}interiorSpot(t){if(!this.interior)return null;const e=this.interior.spots,n=Yt(t);return/counter|till|register|barista|staff/.test(n)?e.counter&&{p:e.counter,yaw:Math.PI}:/seat|table|chair|sit/.test(n)?e.seats[Math.floor(Math.random()*e.seats.length)]:/shelf|shelves|book|rack/.test(n)?e.shelves[Math.floor(Math.random()*e.shelves.length)]:/machine|cabinet|game|arcade|bench/.test(n)?e.machines[Math.floor(Math.random()*e.machines.length)]:/easel|canvas/.test(n)?e.easel:/piano/.test(n)?e.piano:/telescope/.test(n)?e.telescope:/bed/.test(n)?e.bed:/stove|kitchen|oven/.test(n)?e.stove&&(e.stove.p?e.stove:{p:e.stove,yaw:Math.PI}):/sofa|couch/.test(n)?e.sofa:/window/.test(n)?{p:new D(5,0,4.4),yaw:0}:null}async act_interact(t){const e=Yt(t.target||t.item||"");if(this.interior){const a=this.interiorSpot(e)||this.interior.spots.counter&&{p:this.interior.spots.counter,yaw:Math.PI};return a&&await this.goToSpot(a),/shelf|book|browse/.test(e)||this.interior.kind==="bookstore"||this.interior.kind==="library"?(this.activity="read",this.body.setHeld("book"),await this.waitGame(25),this.body.setHeld(this.st.pebble.held),this.activity=null,this.need("fun",-.15),{ok:!0,text:"You browsed for a while. Spines, smells, a few pages here and there."}):this.interior.kind==="cinema"?this.act_sit({target:"seat"}).then(async()=>(this.activity=null,await this.waitGame(90),this.need("fun",-.4),{ok:!0,text:"You watched the whole show from row two."})):(this.activity="interact",await this.waitReal(2),this.activity=null,{ok:!0,text:`You poked around ${this.interior.place.name}.`})}const n=this.findSpot(e)||this.findSpot(t.target);if(/fountain|coin|wish/.test(e)){const a=this.world.city.fountains.map(o=>[o,Math.hypot(o.x-this.pos.x,o.z-this.pos.z)]).sort((o,r)=>o[1]-r[1])[0][0];return await this.goTo(a.x+4.6*a.s,a.z),await this.faceTo(a.x,a.z),this.st.pebble.money>=1?(this.st.pebble.money-=1,this.flash("feed",2.2),await this.waitReal(2.2),{ok:!0,text:"You tossed a coin into the fountain. Plink."}):{ok:!1,text:"You patted your pockets. Not even a coin for the fountain."}}if(/duck|pond/.test(e)){const a=this.world.city.spots.find(o=>o.type==="pond_edge");return await this.goTo(a.x,a.z),await this.faceTo(a.x+5,a.z),this.activity="feed",await this.waitGame(15),this.activity=null,this.need("fun",-.15),{ok:!0,text:"You watched the ducks and made a few duck noises at them. One duck seemed to answer."}}if(/garden|plant|weed|seed/.test(e)){const a=Ut.community_garden;await this.goTo(a.door[0]-6,a.door[1]),this.forcedMode="kneel",this.activity="garden",await this.waitGame(40),this.forcedMode=null,this.activity=null,this.need("fun",-.2),this.need("energy",-.05);const o=this.hasItem("flower seeds");return o&&this.removeItem(o),{ok:!0,text:`You knelt in the community garden and ${o?"planted your flower seeds":"pulled weeds"} until your paws were properly muddy.`}}if(/swim|water|sea|jump in/.test(e))return this.swim();if(n)return await this.goTo(n.x,n.z),this.activity="interact",await this.waitReal(2),this.activity=null,{ok:!0,text:`You spent a minute with the ${n.type.replace("_"," ")}.`};const i=this.findPlace(t.target);return i?this.walkPlace(i,t):(this.flash("look_around",2),await this.waitReal(2),{ok:!1,text:`There's no "${t.target}" around to interact with.`})}async swim(){const t=this.world.city.pierX;await this.walkPlace({...Ut.promenade,door:[t,zt-4],node:this.world.nav.nearestNode(t,zt-4)},{}),await this.goTo(t,zt+35),this.activity="jump",await this.waitReal(.8),this.activity=null,this.swimming=!0;for(let e=0;e<6;e++)this.path=[{x:t+8*Math.sin(e),z:zt+40+6*Math.cos(e),edge:null}],this.pi=0,this.interior=null,await new Promise(n=>this.pathDone=n);return this.path=[{x:t+2.6,z:zt+36,edge:null}],this.pi=0,await new Promise(e=>this.pathDone=e),this.swimming=!1,this.pos.set(t,.17,zt+36),this.need("fun",-.3),this.need("energy",-.12),{ok:!0,text:"You jumped off the pier and swam a few laps. Cold! Then you hauled yourself back up the ladder, dripping."}}async act_sit(t){const e=Yt(t.target||"");if(this.interior){const i=this.interiorSpot(e||"seat")||this.interior.spots.seats[0]||this.interior.spots.sofa||this.interior.spots.bench;return i?(await this.goToSpot(i),this.pos.y=Ae.y,this.forcedMode="sit",{ok:!0,text:"You sat down."}):{ok:!1,text:"There's nowhere to sit in here."}}if(/ground|grass|lawn|floor|edge|pier/.test(e))return this.forcedMode="sitground",await this.waitReal(1),{ok:!0,text:"You plopped down right where you were."};const n=this.findSpot(e.includes("bench")||!e?"bench":e)||this.world.city.spots.filter(i=>i.type==="bench").map(i=>[i,Math.hypot(i.x-this.pos.x,i.z-this.pos.z)]).sort((i,a)=>i[1]-a[1])[0][0];return this.onTop?(this.forcedMode="sitground",{ok:!0,text:"You sat down up here and let your legs dangle."}):(await this.goTo(n.x+Math.sin(n.yaw)*.5,n.z+Math.cos(n.yaw)*.5),await this.faceTo(n.x+Math.sin(n.yaw)*3,n.z+Math.cos(n.yaw)*3),this.pos.set(n.x+Math.sin(n.yaw)*.05,.17,n.z+Math.cos(n.yaw)*.05),this.forcedMode="sit",this.need("energy",.03),{ok:!0,text:`You sat on a bench${n.view?" looking at the "+n.view:""}.${this.describeHere()}`})}async act_sleep(t){const e=on(this.st);if(this.interior?.place.id!=="home"){if(/nap|bench|grass|here/.test(Yt(t.target||""))||this.forcedMode==="sit"||this.forcedMode==="sitground")return this.forcedMode||await this.act_sit({target:"bench"}),this.activity=null,this.anim.w.sleep=0,this.forcedMode="sitground",await this.waitGame(30),this.forcedMode=null,this.need("energy",.12),{ok:!0,text:"You dozed off for half an hour out here. Nobody stole anything. Probably."};await this.walkPlace(Ut.home,{}),await this.enter(Ut.home)}const n=this.interior.spots.bed;await this.goTo(Ae.x+n.p.x+1.4,Ae.z+n.p.z);const i=e>=20||e<4;i&&!this.st.pebble.diary.some(l=>l.day===this.st.world.day&&l.kind==="night")&&await this.world.mind?.nightDiary(),this.pos.set(Ae.x+n.p.x,Ae.y+.7,Ae.z+n.p.z+1.3),this.yaw=0,this.forcedMode="sleep";const a=i||e<6?420+Math.floor(Math.random()*60):null;this.world.sleeping=!0;const o=this.st.world,r=a!=null?(a-o.minute+1440)%1440||1440:90;return await this.waitGame(Math.min(r,660)),this.world.sleeping=!1,this.forcedMode=null,this.pos.y=Ae.y,this.pos.x+=1.4,this.st.pebble.needs.energy=Ce(this.st.pebble.needs.energy+(a!=null?1:.3),0,1),this.flash("stretch",2.5),{ok:!0,text:a!=null?`You slept through the night and woke up at ${Cn(this.st)}.`:"You napped for an hour and a half."}}async act_climb(t){const e=this.findPlace(t.target)||Fe.filter(a=>a.climb).map(a=>[a,Math.hypot(a.door[0]-this.pos.x,a.door[1]-this.pos.z)]).sort((a,o)=>a[1]-o[1])[0][0],n=this.world.city.climbs[e?.id];if(!e||!n)return{ok:!1,text:`You can't climb "${t.target}". Climbable: ${Fe.filter(a=>this.world.city.climbs[a.id]&&(!a.hidden||this.st.pebble.discovered.includes(a.id))).map(a=>a.name).join(", ")}.`};if(!En(e,on(this.st))&&!e.hidden)return{ok:!1,text:`${e.name} is shut for climbing right now (open ${As(e.hours)}).`};this.interior&&await this.exitBuilding(),this.onTop&&await this.climbDown(),await this.goTo(n.base[0],n.base[1]),await this.faceTo(n.top[0],n.top[2]),n.stairs?(this.path=[{x:n.top[0],z:n.top[2],edge:null}],this.pi=0,await new Promise(a=>this.pathDone=a),this.pos.y=n.top[1]):await new Promise(a=>{this.climbing={from:this.pos.clone(),to:new D(n.top[0],n.top[1],n.top[2]),t:0,dur:Math.max(3,n.top[1]/1.4),done:a}}),this.onTop={...n,place:e},this.yaw=n.face??this.yaw,this.st.pebble.discovered.includes(e.id)||this.st.pebble.discovered.push(e.id),this.need("energy",-.05),this.need("fun",-.15);const i=this.pos.y>15?"You can see most of the city from up here: the river, the harbor, the downtown towers.":"The view is decent from up here.";return{ok:!0,text:`You climbed up ${e.name}. ${i}`}}async act_ride(t){const e=Yt(t.target||t.item||"tram");if(/tram/.test(e))return this.rideTram(t);if(/bike|scooter/.test(e)){const n=/scooter/.test(e)?"scooter":"bike",i=yi[n+" rental"];if(this.st.pebble.money<i)return{ok:!1,text:`A ${n} costs $${i} and you have $${this.st.pebble.money}.`};await this.walkPlace(Ut.bike_share,{}),this.spend(i,`${n} rental`);const a=_r(n);this.world.scene.add(a),this.ride={kind:n,mesh:a};const o=this.findPlace(t.destination||t.text||t.detail)||Fe[Math.floor(Math.random()*Fe.length)];return await this.goTo(o.door[0],o.door[1],{node:o.node}),this.world.scene.remove(a),this.ride=null,this.need("fun",-.2),{ok:!0,text:`You rode a ${n} over to ${o.name}. The wind in your whiskers was excellent.`}}if(/boat/.test(e)){const n=yi["boat ride"];if(this.st.pebble.money<n)return{ok:!1,text:`A boat ride costs $${n}; you have $${this.st.pebble.money}.`};if(!En(Ut.boat_rental,on(this.st)))return{ok:!1,text:"The boat hire is closed right now."};await this.walkPlace(Ut.boat_rental,{}),this.spend(n,"boat ride");const i=_r("boat");return this.world.scene.add(i),this.ride={kind:"boat",mesh:i,t:0,cx:this.world.city.pierX,cz:zt+30},this.forcedMode="sit",await this.waitGame(40),this.world.scene.remove(i),this.ride=null,this.forcedMode=null,this.pos.set(Ut.boat_rental.door[0],.17,Ut.boat_rental.door[1]),this.need("fun",-.35),{ok:!0,text:"You took a little boat out past the piers and around the bay, gulls and all, then brought it back."}}return{ok:!1,text:"You can ride: the tram, a bike, a scooter, or a boat."}}async rideTram(t){const e=this.world.traffic.tram,n=this.findPlace(t.destination||t.text||t.detail||""),i=e.stops.map(d=>Ut[d.id]),a=(d,u)=>i.map(f=>[f,Math.hypot(f.door[0]-d,f.door[1]-u)]).sort((f,m)=>f[1]-m[1])[0][0],o=a(this.pos.x,this.pos.z),r=n?a(n.door[0],n.door[1]):i.find(d=>d!==o);if(o===r)return{ok:!1,text:"The tram stop nearest to there is the one you're nearest to already. Walking is quicker."};await this.walkPlace(o,{}),this.say;const l=e.stops.findIndex(d=>d.id===o.id),c=e.stops.findIndex(d=>d.id===r.id);let h=0;for(;!(e.wait>0&&Math.abs(e.z-e.stops[l].z)<1);)if(await this.waitReal(.5),h+=.5,h>200)return{ok:!1,text:"The tram never came. Typical."};for(this.ride={kind:"tram",onboard:!0},this.world.audio?.tramBell();!(e.wait>0&&Math.abs(e.z-e.stops[c].z)<1);)await this.waitReal(.5);return this.ride=null,this.pos.set(r.door[0],.17,r.door[1]),this.need("fun",-.08),{ok:!0,text:`You rode the tram from ${o.name.replace("Tram Stop: ","")} to ${r.name.replace("Tram Stop: ","")}.${n?` ${n.name} is a short walk from here.`:""}`}}spend(t,e){this.st.pebble.money-=t,this.st.pebble.stats.spent+=t,this.world.ui?.money(-t,e),this.world.audio?.coin()}earn(t,e){this.st.pebble.money+=t,this.st.pebble.stats.earned+=t,this.world.ui?.money(t,e),this.world.audio?.coin()}need(t,e){const n=this.st.pebble.needs;n[t]=Ce(n[t]+e,0,1)}async shopFor(t,e){const n=Yt(t),i=this.interior?.place||this.nearestOutdoorPlace(8),a=i&&i.sells?.find(l=>Yt(l)===n||Yt(l).includes(n)||n.includes(Yt(l)));if(a)return{place:i,item:a};const o=Fe.find(l=>l.sells?.some(c=>Yt(c)===n))||Fe.find(l=>l.sells?.some(c=>Yt(c).includes(n)||n.includes(Yt(c))));if(!o)return{err:`Nobody in town seems to sell "${t}".`};const r=o.sells.find(l=>Yt(l)===n)||o.sells.find(l=>Yt(l).includes(n)||n.includes(Yt(l)));if(!En(o,on(this.st)))return{err:`${o.name} sells ${r}, but it's closed right now (open ${As(o.hours)}).`};if(o.outdoor)await this.walkPlace(o,{});else{const l=await this.enter(o);if(!l.ok)return{err:l.text}}return{place:o,item:r}}nearestOutdoorPlace(t){return Fe.filter(e=>e.outdoor&&e.sells?.length).map(e=>[e,Math.hypot(e.door[0]-this.pos.x,e.door[1]-this.pos.z)]).filter(e=>e[1]<t).sort((e,n)=>e[1]-n[1])[0]?.[0]}async act_buy(t){const e=t.item||t.target;if(!e)return{ok:!1,text:"Buy what, though?"};const n=await this.shopFor(e);if(n.err)return{ok:!1,text:n.err};const i=yi[n.item];if(this.st.pebble.money<i)return{ok:!1,text:`The ${n.item} costs $${i}. You've got $${this.st.pebble.money}. Awkward.`};this.interior?.spots.counter&&await this.goToSpot({p:this.interior.spots.counter,yaw:Math.PI}),this.activity="buy",await this.waitReal(1.6),this.activity=null,this.spend(i,n.item);const a=/lamp|rug|houseplant|lantern|vinyl|record|music box/.test(n.item);this.st.pebble.inventory.push(n.item);const o=this.world.crowd.people.find(r=>r.state==="inside"&&r.insideOf===n.place.id&&r.named);return o&&this.world.relate(o.id,.02,`Pebble bought a ${n.item}`),{ok:!0,text:`You bought a ${n.item} for $${i} at ${n.place.name}${o?` from ${o.name}`:""}. You have $${this.st.pebble.money} left.${mo[n.item]?" (You could wear it with use_item.)":a?" (You could put it in your flat with use_item at home.)":""}`}}async act_order(t){const e=t.item||t.target;if(!e)return{ok:!1,text:"Order what?"};const n=await this.shopFor(e);if(n.err)return{ok:!1,text:n.err};const i=yi[n.item];if(this.st.pebble.money<i)return{ok:!1,text:`The ${n.item} is $${i}; you have $${this.st.pebble.money}.`};this.interior?.spots.counter&&await this.goToSpot({p:this.interior.spots.counter,yaw:Math.PI}),this.activity="order",await this.waitReal(1.8),this.activity=null,this.spend(i,n.item);const a=this.world.crowd.people.find(o=>o.state==="inside"&&o.insideOf===n.place.id&&o.named);return ch.has(n.item)?(this.interior?.spots.seats.length&&await this.act_sit({target:"table"}),this.body.setHeld(n.item),this.activity=/latte|coffee|tea|cocoa|white|fizz|toddy|soda/.test(n.item)?"drink":"eat",await this.waitGame(20),this.activity=null,this.body.setHeld(this.st.pebble.held),this.need("hunger",-(/latte|coffee|tea|cocoa|white|soda|fizz|cookie|donut/.test(n.item)?.12:.45)),this.need("fun",-.05),/coffee|latte|white/.test(n.item)&&this.need("energy",.12),{ok:!0,text:`You ordered ${n.item} ($${i})${a?` from ${a.name}`:""} and had it right there. $${this.st.pebble.money} left.`}):(this.st.pebble.inventory.push(n.item),{ok:!0,text:`You got a ${n.item} for $${i}. $${this.st.pebble.money} left.`})}async act_sell(t){const e=this.hasItem(t.item||t.target||"");if(!e)return{ok:!1,text:`You don't have "${t.item}".`};const n=["flea_market","antiques"].map(r=>Ut[r]).filter(r=>En(r,on(this.st)));if(!n.length)return{ok:!1,text:"The flea market and the antique shop are both closed, so nobody is buying right now."};const i=n.map(r=>[r,Math.hypot(r.door[0]-this.pos.x,r.door[1]-this.pos.z)]).sort((r,l)=>r[1]-l[1])[0][0];i.outdoor?await this.walkPlace(i,{}):await this.enter(i),this.activity="sell",await this.waitReal(2),this.activity=null;const a=this.itemName(e),o=Math.max(1,Math.round((yi[a]||(e.type==="painting"?10+Math.random()*25:4))*(e.type==="painting"?1:.4)));return this.removeItem(e),this.earn(o,`sold ${a}`),{ok:!0,text:`You sold your ${a} at ${i.name} for $${o}.`}}async act_use_item(t){const e=this.hasItem(t.item||t.target||""),n=this.st.pebble;if(!e)return n.wearing.find(a=>Yt(a).includes(Yt(t.item)))?(n.wearing=n.wearing.filter(a=>!Yt(a).includes(Yt(t.item))),this.applyWearing(),{ok:!0,text:`You took off your ${t.item}.`}):{ok:!1,text:`You don't have "${t.item}". You have: ${n.inventory.map(a=>this.itemName(a)).join(", ")||"nothing much"}.`};const i=this.itemName(e);return mo[i]?(n.wearing.includes(i)?n.wearing=n.wearing.filter(a=>a!==i):n.wearing.push(i),this.applyWearing(),{ok:!0,text:n.wearing.includes(i)?`You put on your ${i}.`:`You took off your ${i}.`}):ch.has(i)||hh.has(i)&&/apple|eggs|tomatoes/.test(i)?(this.body.setHeld(i),this.activity=/tea|soda|latte|cocoa|white|fizz|toddy/.test(i)?"drink":"eat",await this.waitGame(12),this.activity=null,this.body.setHeld(n.held),this.removeItem(e),this.need("hunger",-.35),{ok:!0,text:`You ate your ${i}.`}):this.interior?.place.id==="home"&&(/lamp|rug|houseplant|lantern|record|vinyl|music box|postcard|map|compass|clock|mug/.test(i)||e.type==="painting"||e.type==="craft")?(this.removeItem(e),n.home.furniture.push(typeof e=="string"?{item:e}:e),this.activity="carry",await this.waitReal(2.5),this.activity=null,this.world.rebuildInterior(),{ok:!0,text:`You found a spot for the ${i} in your flat. It looks like it belongs there.`}):/umbrella|lantern|book|paperback|guide|chapbook|notebook|sketchbook|map/.test(i)?/book|paperback|guide|chapbook/.test(i)?(this.forcedMode||await this.act_sit({}),this.body.setHeld(i),this.activity="read",await this.waitGame(40),this.activity=null,this.body.setHeld(n.held),this.need("fun",-.25),{ok:!0,text:`You read your ${i} for a while.`}):(n.held=n.held===i?null:i,this.applyWearing(),{ok:!0,text:n.held?`You're holding your ${i} now.`:`You put the ${i} away.`}):/ukulele/.test(i)?this.act_play({target:"ukulele"}):/fishing rod/.test(i)?this.fish():/skateboard/.test(i)?this.skate():/paint set|sketchbook/.test(i)?this.act_paint({target:t.text||t.detail||"whatever is in front of you"}):/board game/.test(i)?this.act_play({target:"board game"}):(this.flash("check_paws",2),await this.waitReal(2),{ok:!0,text:`You turned the ${i} over in your paws for a bit.`})}async fish(){const t=this.world.city.pierX;this.interior&&await this.exitBuilding(),await this.goTo(t,zt+35,{node:this.world.nav.byKey[`pier:${t}:b`]}),await this.faceTo(t,zt+60),this.body.setHeld("fishing rod"),this.forcedMode="sitground",this.activity="fish",await this.waitGame(45);const e=Math.random()<.45?["mackerel","a tiny crab","an old boot","mackerel","a sardine"][Math.floor(Math.random()*5)]:null;return this.activity=null,this.forcedMode=null,this.body.setHeld(this.st.pebble.held),e&&!/boot|crab/.test(e)&&this.st.pebble.inventory.push(e==="a sardine"?"sardine":e),this.need("fun",-.25),{ok:!0,text:e?`You fished off the pier for a while and caught ${e}${/boot|crab/.test(e)?", which you threw back":""}.`:"You fished off the pier for ages and caught absolutely nothing. The gulls watched."}}async skate(){const t=this.world.city.spots.find(n=>n.type==="skate");this.interior&&await this.exitBuilding(),await this.goTo(t.x,t.z),this.body.setHeld(null),this.forcedMode="skate";const e=_r("skateboard");this.world.scene.add(e);for(let n=0;n<6;n++)this.path=[{x:t.x+(n%2?5:-5),z:t.z+n%3-1,edge:null}],this.pi=0,this.ride={kind:"skate",mesh:e},await new Promise(i=>this.pathDone=i),Math.random()<.2&&(this.forcedMode=null,await this.flash("stumble",1.2),this.forcedMode="skate");return this.world.scene.remove(e),this.ride=null,this.forcedMode=null,this.body.setHeld(this.st.pebble.held),this.need("fun",-.3),this.need("energy",-.08),{ok:!0,text:"You skated the bowl area for a while. Mostly upright."}}async act_pick_up(t){const e=Yt(t.item||t.target||""),n=this.world.findables.filter(i=>!i.taken).map(i=>[i,Math.hypot(i.x-this.pos.x,i.z-this.pos.z)]).filter(i=>i[1]<30&&(!e||Yt(i[0].name).includes(e)||e.includes(Yt(i[0].name).split(" ").pop()))).sort((i,a)=>i[1]-a[1])[0]?.[0];return n?(await this.goTo(n.x,n.z),this.activity="pick_up",await this.waitReal(1.4),this.activity=null,this.world.takeFindable(n),this.st.pebble.inventory.push(n.name),{ok:!0,text:`You picked up ${n.name}. ${n.note||""}`}):{ok:!1,text:`There's no ${t.item||"thing"} here to pick up.`}}async act_drop(t){const e=this.hasItem(t.item||t.target||"");return e?(this.removeItem(e),this.activity="pick_up",await this.waitReal(1.2),this.activity=null,this.world.dropItem(this.itemName(e),this.pos.x,this.pos.z),{ok:!0,text:`You put down your ${this.itemName(e)}.`}):{ok:!1,text:`You don't have "${t.item}".`}}async act_work_shift(t){const e=this.findPlace(t.target||t.place)||Fe.filter(r=>r.job).map(r=>[r,Math.hypot(r.door[0]-this.pos.x,r.door[1]-this.pos.z)]).sort((r,l)=>r[1]-l[1])[0][0];if(!e.job&&!/promenade|stage|busk/.test(Yt(t.target)))return{ok:!1,text:`${e.name} isn't hiring. Places with shifts: ${Fe.filter(r=>r.job).map(r=>`${r.name} (${r.job.title}, $${r.job.pay}/h)`).join("; ")}. You could also busk at the promenade or the bandshell.`};if(!e.job)return this.act_play({target:"busk",place:e.id});if(!En(e,on(this.st)))return{ok:!1,text:`${e.name} is closed now; shifts happen during opening hours (${As(e.hours)}).`};if(this.st.pebble.needs.energy<.12)return{ok:!1,text:"You are way too tired to work a shift right now."};const n=await this.enter(e);if(!n.ok)return n;const i=this.world.crowd.people.find(r=>r.work===e.id),a=2;if(e.id==="courier"){const r=Fe.filter(c=>!c.hidden&&c.type!=="tram").sort(()=>Math.random()-.5).slice(0,3);await this.exitBuilding(),this.body.setHeld("parcel"),this.activity="carry";for(const c of r)await this.goTo(c.door[0],c.door[1],{node:c.node,run:!0}),this.activity="give_item",await this.waitReal(1.2),this.activity="carry";this.activity=null,this.body.setHeld(this.st.pebble.held);const l=e.job.pay*a;return this.earn(l,"delivery shift"),this.st.pebble.stats.shifts++,this.need("energy",-.2),i&&this.world.relate(i.id,.04,"Pebble ran deliveries"),{ok:!0,text:`You ran parcels to ${r.map(c=>c.name).join(", ")} and got $${l}.`}}await this.goToSpot(this.interior.spots.staff?{p:this.interior.spots.staff,yaw:0}:this.interior.spots.counter),this.activity="work";for(let r=0;r<4&&(await this.waitGame(30),!this.cancelFlag);r++)r===1&&i&&this.world.npcSay(i,null);this.activity=null;const o=e.job.pay*a;return this.earn(o,`${e.job.title} shift`),this.st.pebble.stats.shifts++,this.need("energy",-.18),this.need("social",-.2),this.need("fun",.05),i&&this.world.relate(i.id,.05,`Pebble worked a shift as ${e.job.title}`),{ok:!0,text:`You worked two hours as a ${e.job.title} at ${e.name}${i?` alongside ${i.name}`:""} and earned $${o}. Now you have $${this.st.pebble.money}.`}}async act_say(t){const e=t.text||t.say||"";if(!e)return{ok:!1,text:"You opened your mouth and nothing came out."};this.activity="talk",this.say(e),await this.waitReal(Ce(e.length*.06,2,7)),this.activity=null;const n=this.world.crowd.near(this.pos.x,this.pos.z,6).filter(i=>i.named);return{ok:!0,text:`You said "${e}" out loud.${n.length?` ${n[0].name} glanced over.`:""}`}}async act_emote(t){let e=Yt(t.target||t.text||t.style||t.item||"wave").split(" ")[0];return Y1.includes(e)||(e={smile:"cheer",happy:"cheer",cry:"sad",sigh:"sad",ponder:"think",yawn:"stretch",hop:"jump",giggle:"laugh",celebrate:"cheer",groan:"facepalm"}[e]||"shrug"),e==="jump"?await this.flash("jump",1.1):(this.activity=e,await this.waitReal(e==="dance"?6:2.6),this.activity=null),{ok:!0,text:`You ${e==="think"?"stood there thinking":e==="sad"?"let your shoulders droop":e+(e.endsWith("e")?"d":"ed")}.`}}async act_look_at(t){const e=t.target||"",n=this.findPerson(e),i=this.findPlace(e);let a,o,r;if(n)a=n.x,o=n.z,r=`${n.name}, ${n.job}, ${n.state==="chat"?"chatting with someone":n.state==="walk"?"walking somewhere":"standing around"}. They seem ${n.traits[0]}.`;else if(i)a=i.door[0],o=i.door[1],r=`${i.name}: ${i.outdoor?"open-air":En(i,on(this.st))?"open":"closed"}${i.sells?.length?", sells "+i.sells.slice(0,4).join(", "):""}.`;else if(/sky|stars|moon|clouds/.test(Yt(e))){a=this.pos.x+Math.sin(this.yaw)*10,o=this.pos.z+Math.cos(this.yaw)*10,this.activity="stargaze",await this.waitGame(10),this.activity=null;const l=on(this.st);return{ok:!0,text:l>20||l<5?this.world.state.world.weather==="clear"?"You looked up. Lots of stars tonight, and the moon.":"You looked up but the clouds are hiding everything.":`You looked at the sky: ${this.world.state.world.weather}.`}}else return this.flash("look_around",3),await this.waitReal(3),{ok:!0,text:`You looked around. ${this.world.mindContext?.().surroundings||""}`};return this.interior||await this.faceTo(a,o),this.lookAt=new D(a,1.4,o),await this.waitReal(2.5),{ok:!0,text:`You looked at ${r}`}}async act_wait(t){const e=Ce(Number(t.minutes||t.duration||(String(t.text||"").match(/\d+/)||[15])[0])||15,1,180);return this.activity=/stars|stargaz/.test(Yt(t.text||t.target))?"stargaze":null,await this.waitGame(e),this.activity=null,this.need("energy",.02*e/15),{ok:!0,text:`You let ${e} minutes go by.`}}async act_talk_to(t){const e=this.findPerson(t.target||t.person);if(!e){const a=this.world.crowd.near(this.pos.x,this.pos.z,12).filter(o=>o.named);return{ok:!1,text:`There's nobody called "${t.target}" here.${a.length?" Nearby: "+a.map(o=>o.name).join(", "):""}`}}if(e.state==="inside"){const a=Ut[e.insideOf];if(this.interior?.place.id!==e.insideOf){const o=await this.enter(a);if(!o.ok)return{ok:!1,text:`${e.name} is inside ${a.name}, and ${o.text}`}}this.interior.spots.counter&&await this.goToSpot({p:this.interior.spots.counter,yaw:Math.PI})}else this.interior&&await this.exitBuilding(),this.onTop&&await this.climbDown(),Math.hypot(e.x-this.pos.x,e.z-this.pos.z)>2&&await this.goTo(e.x+1.2,e.z+.8),e.state="talking",e.timer=20,e.faceX=this.pos.x,e.faceZ=this.pos.z,await this.faceTo(e.x,e.z);const n=t.text||t.say||"Hey!";this.activity="talk",this.say(n),await this.waitReal(Ce(n.length*.05,1.5,5)),this.activity=null;const i=await this.world.npcReply(e,n);return e.state==="talking"&&(e.state="idle",e.timer=6),this.need("social",-.18),{ok:!0,text:`You said to ${e.name}: "${n}". ${e.name} replied: "${i}"`}}async act_give_item(t){const e=this.hasItem(t.item||"");if(!e)return{ok:!1,text:`You don't have "${t.item}".`};const n=this.findPerson(t.target||t.person);if(!n)return{ok:!1,text:`Give it to who? "${t.target}" isn't around.`};const i=await this.act_talk_to({target:n.id,text:t.text||`I got you something. It's a ${this.itemName(e)}.`});return this.removeItem(e),this.activity="give_item",await this.waitReal(1.5),this.activity=null,this.world.relate(n.id,.12,`Pebble gave them a ${this.itemName(e)}`),{ok:!0,text:`You gave your ${this.itemName(e)} to ${n.name}. ${i.text.split("replied:")[1]?n.name+" replied:"+i.text.split("replied:")[1]:""}`}}async act_play(t){const e=Yt(t.target||t.item||"");if(/arcade|game|machine|cabinet/.test(e)&&!/board/.test(e)){if(this.interior?.place.id!=="arcade"){const h=await this.enter(Ut.arcade);if(!h.ok)return h}if(this.st.pebble.money<1)return{ok:!1,text:"Games are $1 each and your pockets are empty."};await this.goToSpot(this.interior.spots.machines[Math.floor(Math.random()*this.interior.spots.machines.length)]);const a=Math.min(3,this.st.pebble.money);this.spend(a,"arcade games"),this.activity="work",await this.waitGame(25),this.activity=null;const o=Math.floor(Math.random()*9e4+2e3),r=this.st.pebble.memory.facts.find(h=>h.startsWith("arcade best:")),l=r?Number(r.split(":")[1]):0,c=o>l;return c&&(this.st.pebble.memory.facts=this.st.pebble.memory.facts.filter(h=>!h.startsWith("arcade best:")),this.st.pebble.memory.facts.push("arcade best:"+o)),this.need("fun",-.35),{ok:!0,text:`You played ${a} game${a>1?"s":""} of Comet Chase. Best score: ${o}${c?" (a new personal best!)":` (your record is still ${l})`}.`}}if(/board/.test(e)){const a=this.world.crowd.near(this.pos.x,this.pos.z,25).find(r=>r.named)||this.world.crowd.named()[0];if(!this.hasItem("board game")&&this.interior?.place.id!=="cafe")return{ok:!1,text:"You need a board game (the flea market has them) or a cafe table to play."};this.forcedMode="sit",this.activity="work",await this.waitGame(40),this.forcedMode=null,this.activity=null;const o=Math.random()<.5;return this.world.relate(a.id,.05,"played a board game with Pebble"),this.need("fun",-.3),this.need("social",-.2),{ok:!0,text:`You played a board game with ${a.name}. ${o?"You won, narrowly.":`${a.name} won and was a bit smug about it.`}`}}const n=/busk|street|tips|perform/.test(e)||t.place,i=this.hasItem("ukulele")?"ukulele":this.interior?.spots.piano?"piano":null;if(!i)return{ok:!1,text:"You have nothing to play. A ukulele from Halvorsen's would do it, or the piano in The Lantern Room."};if(i==="piano")await this.goToSpot(this.interior.spots.piano),this.forcedMode="sit";else if(n){const a=Ut[t.place]||(Math.hypot(Ut.promenade.door[0]-this.pos.x,Ut.promenade.door[1]-this.pos.z)<Math.hypot(Ut.stage.door[0]-this.pos.x,Ut.stage.door[1]-this.pos.z)?Ut.promenade:Ut.stage);this.interior&&await this.exitBuilding(),await this.walkPlace(a,{})}if(this.body.setHeld(i==="ukulele"?"ukulele":null),this.activity="music",this.world.audio?.playMusic(!0),await this.waitGame(30),this.world.audio?.playMusic(!1),this.activity=null,this.forcedMode=null,this.body.setHeld(this.st.pebble.held),this.need("fun",-.3),n||i==="piano"){const a=this.world.crowd.near(this.pos.x,this.pos.z,20).length,o=Math.round(Math.random()*3+a*(.5+Math.random()));return o&&this.earn(o,"tips"),{ok:!0,text:`You played ${i} for half an hour${n?" for passers-by":""}. ${a} people drifted past${o?` and you made $${o} in tips`:" and nobody tipped"}.`}}return{ok:!0,text:`You played your ${i} for a while, just for you.`}}async act_paint(t){const e=t.text||t.target||t.detail||"something";let n="here";if(/alley|wall|mural|street art|graffiti/.test(Yt(e+" "+(t.target||""))))this.interior&&await this.exitBuilding(),await this.walkPlace(Ut.art_alley,{}),n="alley";else if(this.interior?.spots.easel)await this.goToSpot(this.interior.spots.easel),n="studio";else if(!this.hasItem("paint set")&&!this.hasItem("sketchbook")){if(!En(Ut.studio,on(this.st)))return{ok:!1,text:`You'd need a paint set or sketchbook, or the Open Studio Co-op (open ${As(Ut.studio.hours)}).`};const r=await this.enter(Ut.studio);if(!r.ok)return r;await this.goToSpot(this.interior.spots.easel),n="studio"}this.body.setHeld("paintbrush"),this.activity="paint",await this.waitGame(45),this.activity=null,this.body.setHeld(this.st.pebble.held);const a=Math.floor(Math.random()*1e9),o=(t.title||e).slice(0,60);return n==="alley"?(this.world.addMural({seed:a,title:o,day:this.st.world.day}),this.need("fun",-.4),{ok:!0,text:`You painted a mural in Paintcan Alley: "${o}". It's on the wall for anyone to see now.`}):(this.st.pebble.inventory.push({type:"painting",title:o,seed:a}),n==="studio"&&this.interior?.spots.easel?.canvas&&(this.interior.spots.easel.canvas.material.map=Ta(a)),this.need("fun",-.35),{ok:!0,text:`You painted "${o}". It's yours now (in your inventory); you could hang it at home, sell it, or give it away.`})}async act_craft(t){const e=(t.text||t.target||t.item||"a small thing").slice(0,60);if(!(this.interior&&["workshop","studio"].includes(this.interior.place.id))){const o=Ut.workshop;if(!En(o,on(this.st)))return{ok:!1,text:`Crafting needs tools: Sprocket Workshop (${As(o.hours)}) or the Studio Co-op.`};const r=await this.enter(o);if(!r.ok)return r}const i=this.interior.spots.machines[0];i&&await this.goToSpot(i),this.activity="craft",await this.waitGame(50),this.activity=null;const a=Math.random()<.35;return this.st.pebble.inventory.push({type:"craft",title:e,item:e}),this.need("fun",-.3),{ok:!0,text:`You made ${e}.${a?" It came out a bit wonky, honestly.":" It turned out better than expected."}`}}async act_cook(t){if(this.interior?.place.id!=="home"){await this.walkPlace(Ut.home,{});const o=await this.enter(Ut.home);if(!o.ok)return o}const e=this.st.pebble.inventory.filter(o=>typeof o=="string"&&(hh.has(o)||/mackerel|sardine|clams/.test(o)));if(!e.length)return{ok:!1,text:"Your cupboards are basically empty: no ingredients. The grocer, fish market or corner store sell some."};const n=e.slice(0,2);n.forEach(o=>this.removeItem(o));const i=this.interior.spots.stove;await this.goToSpot(i),this.activity="cook",await this.waitGame(35);const a=(t.text||t.item||t.target||`something with ${n.join(" and ")}`).slice(0,60);return await this.act_sit({target:"table"}),this.activity="eat",await this.waitGame(15),this.activity=null,this.forcedMode=null,this.need("hunger",-.6),this.need("fun",-.15),{ok:!0,text:`You cooked ${a} using ${n.join(" and ")}, and ate it at your little table.${Math.random()<.25?" Slightly burnt on one side.":""}`}}async act_write_diary(t){const e=t.text||t.entry;return e?(this.forcedMode||(this.activity="read"),this.body.setHeld("notebook"),await this.waitGame(10),this.body.setHeld(this.st.pebble.held),this.activity=null,this.world.addDiary(e,"moment"),{ok:!0,text:"You wrote in your diary."}):{ok:!1,text:"You opened your diary and stared at the page."}}async act_make_request(t){return this.world.addRequest(t.text||t.item||t.target,t.reason||t.detail||"")}}function As([s,t]){const e=n=>`${(n+11)%12+1}${n<12||n===24?"am":"pm"}`;return s===0&&t===24?"all day":`${e(s)}–${e(t%24)}`}function _r(s){const t=new ke,e=n=>new Me({color:n,roughness:.5});if(s==="boat"){const n=new Mt(new Oe(1.6,.6,3.6),e("#f4efe6"));n.position.y=.3,t.add(n);const i=new Mt(new Oe(1.7,.12,3.7),e("#2e86ab"));i.position.y=.6,t.add(i)}else if(s==="skateboard"){const n=new Mt(new Oe(.24,.03,.8),e("#e86f5a"));n.position.y=.1,t.add(n)}else{for(const a of[-.5,.5]){const o=new Mt(new ai(.3,.04,6,16),e("#222"));o.rotation.y=Math.PI/2,o.position.set(0,.32,a),t.add(o)}const n=new Mt(new Oe(.06,.06,1),e(s==="bike"?"#2e86ab":"#e86f5a"));n.position.y=.55,t.add(n);const i=new Mt(new Oe(.5,.04,.04),e("#333"));i.position.set(0,1,.45),t.add(i)}return t.traverse(n=>n.isMesh&&(n.castShadow=!0)),t}const Z1="You are Pebble, a young otter living freely in a city. You are not an assistant, chatbot or NPC. You are a person who happens to look like an otter, and you think, choose and feel for yourself. Nobody gives you tasks. You live your life. You walk upright, use your hands, get tired and hungry, and have moods that come from what happens to you. You talk like a real person: casual, a bit messy, funny, with contractions, trailing off, changing your mind mid-sentence. You never sound like an AI: no 'As an AI,' no 'Certainly!', no tidy summaries of your feelings, no pros-and-cons lists. Every thought is a specific reaction to this exact moment, colored by your mood, memories and history. If a thought could be pasted into any other moment, rewrite it. You have opinions, favorites, fears, grudges, running jokes and silly beliefs. You can be wrong, embarrassed, bored or delighted.",K1=["walk_to","enter_building","interact","pick_up","drop","use_item","buy","sell","order","work_shift","say","emote","sit","sleep","climb","ride","craft","cook","paint","play","give_item","talk_to","look_at","wait","write_diary","make_request"],J1={tick:`Decide what you do next. Reply with JSON only:
{"thought": your private inner thought right now (1-3 sentences, specific to this moment),
 "action": {"type": one of the actions, "target": place/person/thing or "", "text": words/subject/minutes or "", "item": item name or ""},
 "say": something you say out loud right now, or "" (most of the time you don't talk to yourself),
 "mood": {"word": a short phrase for how you feel, "valence": -1 (awful) to 1 (great)},
 "remember": a new lasting fact about yourself worth keeping (an opinion, a favorite, a grudge, a running joke, a plan), or "" (usually "")}
Pick things you actually want to do. Needs nudge you but never force you. Don't repeat the same action over and over unless you really mean it. Use exact names from what you can see when you can.`,boot:'You just woke up in your flat on your first morning in this story. Before anything else, decide who you are: pick 4 to 6 interests that are odd, specific and yours (not generic hobbies), and 3 or 4 favorite or least-favorite things with a little opinion attached. Then give your first waking thought and mood. JSON only: {"interests": [...], "favorites": [...], "first_thought": "...", "mood": {"word": "...", "valence": n}}',diary:`It's the end of the day and you're writing in your diary before bed, in your own voice, like a real private diary: messy, specific, funny or sad about the actual things that happened today. A few short paragraphs at most. No headings, no lists, no summary of feelings. JSON only: {"entry": "...", "mood": {"word": "...", "valence": n}}`,summarize:`Squash these memories into what you'd actually remember: one short paragraph in your own voice ("summary"), plus a few lasting facts about your life worth keeping (people, places, opinions, plans, grudges, running jokes) as short first-person lines ("facts", up to 6). JSON only: {"summary": "...", "facts": [...]}`};function Q1(s){const t=(e,n)=>String(e??"").slice(0,n);return`You are ${t(s.name,80)}, a ${t(s.species,20)} who works as ${t(s.job,120)} in a small painterly harbor city. Personality: ${t((s.traits||[]).join(", "),200)}. Quirk: ${t(s.quirk,200)}. You are a real person in this city, not an assistant. Talk like yourself: short, casual, specific, one to three sentences, no stage directions. You are talking with Pebble, a young otter who lives in the city.`}const tb=`Reply with JSON only: {"reply": what you say back, "feeling": how this exchange made you feel about Pebble from -1 to 1, "remember": one short line you'd remember about this, or ""}`,vh=(typeof window<"u"&&window.PEBBLE_API?String(window.PEBBLE_API):"").replace(/\/$/,"");function eb(s){try{return JSON.parse(s)}catch{}const t=s.indexOf("{"),e=s.lastIndexOf("}");if(t>=0&&e>t)try{return JSON.parse(s.slice(t,e+1))}catch{}return null}const nb=`Actions (pick exactly one; fill only the fields that matter, "" for the rest):
- walk_to {target: a place name, a person's name, "outside", "bench", "fountain", "pier", or "" to wander}
- enter_building {target: place name}
- interact {target: e.g. fountain, ducks, telescope, piano, arcade cabinet, swing, books, garden bed, menu, shelf}
- pick_up {target: something lying nearby}   - drop {item}
- use_item {item: wear/take off clothes, eat/drink food, read a book, hold an umbrella, put decor in your flat (at home)}
- buy {item}   - sell {item}   - order {item: food/drink at a cafe, bar or stall}
- work_shift {target: a workplace that hires} (2 hours, pays)
- say {text: said out loud to nobody in particular}   - talk_to {target: person, text: what you say to them}
- emote {target: wave, cheer, shrug, dance, laugh, sad, facepalm, think, stretch, jump, scratch}
- sit {target: bench, grass, table, sofa, or ""}   - sleep {target: "" for bed at home, or "nap here"}
- climb {target: something climbable}   - ride {target: tram, bike, scooter, boat}
- craft {text: what you make}   - cook {text: dish name, needs ingredients}   - paint {text: subject, target: "alley" for a mural}
- play {target: arcade, board game, piano, ukulele, busk, cards, swing, skate, fishing, frisbee}
- give_item {item, target: person, text: what you say}
- look_at {target: person, place, sky, stars, view}
- wait {text: minutes, e.g. "20"}
- write_diary {text: a diary entry in your own words, for a moment worth writing down}
- make_request {item: something you want from the person who watches over your city, text: why, in your words}. Rare; only when you truly want something. They may say yes or no.`;class ib{constructor(t){this.w=t,this.st=t.state,this.paused=!1,this.cheap=!1,this.online=null,this.thinking=!1,this.events=[],this.lastResult="",this.nextAt=0,this.backoff=0,this.errorShown=!1,this.convo={}}async call(t,e,n={}){const i=await fetch(vh+"/api/mind",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({mode:t,perception:e,cheap:this.cheap,...n})});let a=null;try{a=await i.json()}catch{}if(!i.ok){const o=new Error(a?.message||`HTTP ${i.status}`);throw o.code=a?.error||(i.status===404?"no_server":"error"),o}return a.out}async callInChat(t,e,n){if(this.denied){const l=new Error("not allowed");throw l.code="not_granted",l}const i=this.sample||(this.sample=await window.claude?.use?.("sample"));if(!i){const l=new Error("Claude is not available on this page");throw l.code="no_sample",l}const a=t==="npc"?`${Q1(n.persona||{})}

---

${e}

${tb}`:`${Z1}

---

${e}

${J1[t]}
Answer with the JSON object only, no other text.`;let o;try{({text:o}=await i(a,{modelTier:t==="npc"||this.cheap&&t!=="boot"?"quick":"default",cache:!1}))}catch(l){const c=new Error(l?.message||"Claude did not answer");throw c.code=l?.code||"error",c.code==="not_granted"&&(this.denied=!0),c}const r=eb(o||"");if(!r){const l=new Error("reply was not JSON");throw l.code="bad_reply",l}return t==="tick"&&r.action&&!K1.includes(r.action.type)&&(r.action.type="wait"),r}async checkHealth(){try{const e=await(await fetch(vh+"/api/health")).json();this.setOnline(!!e.mind,e.mind?null:"no_key")}catch{this.setOnline(!1,"no_server")}return this.online}setOnline(t,e){this.online=t,this.offlineWhy=e,this.w.ui?.mindStatus(this.status())}status(){return{online:this.online,why:this.offlineWhy,paused:this.paused,cheap:this.cheap,thinking:this.thinking}}setPaused(t){this.paused=t,t&&this.w.pebble.cancel(),this.w.ui?.mindStatus(this.status())}setCheap(t){this.cheap=t,this.w.ui?.mindStatus(this.status())}failed(t){if(t.code==="not_granted"||t.code==="no_sample"){this.setOnline(!1,t.code),this.nextAt=1/0;return}if(t.code==="rate_limited"){this.nextAt=performance.now()+9e4,this.w.ui?.toast("Pebble is thinking too fast for your account. He will take a breather for a minute.");return}if(t.code==="no_key"||t.code==="no_server"||t.code==="bad_key"){this.setOnline(!1,t.code),this.nextAt=performance.now()+3e4;return}this.backoff=Math.min(60,(this.backoff||4)*2),this.nextAt=performance.now()+this.backoff*1e3,this.errorShown||(this.w.ui?.toast(`Pebble lost his train of thought (${t.message}). Trying again shortly.`),this.errorShown=!0)}notice(t){this.events.push(`[${Cn(this.st)}] ${t}`),this.events.length>12&&this.events.shift()}update(){const t=this.w.pebble;if(this.paused||this.thinking||t.busy||this.w.sleeping)return;const e=performance.now();if(!(e<this.nextAt)){if(this.online===!1){this.nextAt=e+3e4,this.checkHealth();return}if(this.online===null){this.nextAt=e+2e3,this.checkHealth();return}if(!this.st.pebble.interests.length){this.boot();return}this.tick()}}async boot(){this.thinking=!0,this.w.ui?.mindStatus(this.status());try{const t=await this.call("boot",this.perception(!0)),e=this.st.pebble;e.interests=(t.interests||[]).slice(0,6).map(String);for(const n of t.favorites||[])e.memory.facts.push(String(n));e.lastThought=t.first_thought||"",this.setMood(t.mood),this.w.ui?.thought(e.lastThought),fa(this.st,"woke up on the first morning of the story","event"),this.w.save(),this.backoff=0,this.errorShown=!1,this.nextAt=performance.now()+2500}catch(t){this.failed(t)}this.thinking=!1,this.w.ui?.mindStatus(this.status())}async tick(){this.thinking=!0,this.w.ui?.mindStatus(this.status());let t;try{t=await this.call("tick",this.perception()),this.backoff=0,this.errorShown=!1}catch(r){this.failed(r),this.thinking=!1,this.w.ui?.mindStatus(this.status());return}this.thinking=!1,this.w.ui?.mindStatus(this.status());for(const r of this.reactingTo||[])r.reaction=String(t.say||t.thought||"");if(this.reactingTo?.length&&this.w.ui?.refresh("requests"),this.reactingTo=[],this.paused)return;const e=this.st.pebble;if(e.lastThought=String(t.thought||""),this.w.ui?.thought(e.lastThought),this.setMood(t.mood),t.remember&&String(t.remember).trim()){const r=String(t.remember).trim();e.memory.facts.includes(r)||(e.memory.facts.push(r),e.memory.facts.length>40&&e.memory.facts.shift())}this.events=[];const n={...t.action||{type:"wait"}},i=n.type||"wait";t.say&&!["say","talk_to","give_item"].includes(i)&&this.w.pebble.say(String(t.say)),i==="say"&&!n.text&&(n.text=t.say),i==="talk_to"&&!n.text&&(n.text=t.say),e.activity=ob(n),this.w.ui?.activity(e.activity),this.st.log.push({day:this.st.world.day,time:Cn(this.st),thought:e.lastThought,action:e.activity}),this.st.log.length>60&&this.st.log.shift();const a=await this.w.pebble.perform(n);this.lastResult=a?.text||"",this.w.ui?.activity(null),this.st.pebble.memory.recent.length>55&&this.summarize(),this.w.save();const o=(this.cheap?14:4)*1e3;this.nextAt=performance.now()+o}setMood(t){if(!t)return;const e=this.st.pebble;e.mood={word:String(t.word||e.mood.word).slice(0,60),valence:Math.max(-1,Math.min(1,Number(t.valence)||0))},this.w.ui?.mood(e.mood)}async summarize(){const t=this.st.pebble.memory,e=t.recent.splice(0,35);try{const n=await this.call("summarize",`Your interests: ${this.st.pebble.interests.join("; ")}
What you already know about yourself:
${t.facts.map(i=>"- "+i).join(`
`)}

Memories to squash (Day ${e[0]?.day} ${e[0]?.time} to Day ${e.at(-1)?.day} ${e.at(-1)?.time}):
${e.map(i=>`- [Day ${i.day} ${i.time}] ${i.text}`).join(`
`)}`);t.summaries.push({day:e[0]?.day,text:String(n.summary||"")}),t.summaries.length>14&&t.summaries.splice(0,t.summaries.length-14);for(const i of n.facts||[])t.facts.includes(i)||t.facts.push(String(i));t.facts.length>40&&t.facts.splice(0,t.facts.length-40)}catch{t.recent.unshift(...e)}}async nightDiary(){if(this.online===!1)return;const t=this.st,e=t.world.day,n=t.pebble.memory.recent.filter(i=>i.day===e||i.day===e-1&&t.world.minute<240);try{const i=await this.call("diary",`${vr(t)}, ${Cn(t)}. You're in bed with your diary.
How you feel: ${t.pebble.mood.word}. Body: ${xh(t.pebble.needs)}.
Your interests: ${t.pebble.interests.join("; ")}
Things you know about yourself:
${t.pebble.memory.facts.slice(-15).map(a=>"- "+a).join(`
`)}

What happened today:
${n.map(a=>`- ${a.time}: ${a.text}`).join(`
`)||"- not much, honestly"}
${t.log.filter(a=>a.day===e).slice(-12).map(a=>`(you thought at ${a.time}: "${a.thought}")`).join(`
`)}`);this.w.addDiary(String(i.entry||""),"night"),this.setMood(i.mood)}catch(i){console.warn("diary failed",i)}}async npcReply(t,e){const n=this.st,i=n.pebble.relationships[t.id],a=n.npcMemory[t.id]||[],o=this.convo[t.id]||=[];o.push(`Pebble: ${e}`);const r=go[t.id]||t,l=this.w.pebble.interior?`inside ${this.w.pebble.interior.place.name}`:`outside in ${ns[this.w.pebble.district()]?.name||"town"}`,c=`It's ${Cn(n)} on ${vr(n)}, weather ${n.world.weather}. You're ${l}${t.state==="inside"&&r.work===t.insideOf?", at work":""}.
How well you know Pebble: ${i?`you've talked ${i.talks||0} times; you feel ${bl(i.score)} about them`:"you have never met before"}.
${a.length?`What you remember about Pebble:
`+a.slice(-8).map(h=>"- "+h).join(`
`):""}
Conversation just now:
${o.slice(-6).join(`
`)}`;try{const h=await this.call("npc",c,{persona:{name:r.name,species:r.species,job:r.job,traits:r.traits,quirk:r.quirk}}),d=String(h.reply||"").trim();return o.push(`${r.name}: ${d}`),o.length>10&&o.splice(0,o.length-10),this.w.relate(t.id,(Number(h.feeling)||0)*.08,h.remember||null,!0),this.w.npcSpeech(t,d),d}catch{return this.w.npcSpeech(t,"…"),`(${r.name.split(" ")[0]} just nods; you can't quite hear them)`}}async npcLine(t,e){const n=go[t.id]||t;try{const i=await this.call("npc",`It's ${Cn(this.st)}. ${e}
Say one short casual line out loud to Pebble.`,{persona:{name:n.name,species:n.species,job:n.job,traits:n.traits,quirk:n.quirk}}),a=String(i.reply||"").trim();a&&(this.w.npcSpeech(t,a),this.notice(`${n.name} said to you: "${a}"`))}catch{}}perception(t=!1){const e=this.w,n=this.st,i=n.pebble,a=e.pebble,o=on(n),r=[];r.push(`It's ${Cn(n)}, ${vr(n)}. Weather: ${ab(n.world.weather)}${o>=20||o<6?", dark out":o<8?", early morning":o>17?", evening":""}.`);const l=ns[a.district()]?.name||"the edge of town";a.interior?r.push(`Where you are: inside ${a.interior.place.name} (${l}). ${a.describeInterior()}`):a.onTop?r.push(`Where you are: up on top of ${a.onTop.place?.name||"something tall"}, high above ${l}.`):r.push(`Where you are: outside in ${l}${yh(a)}.`),i.held&&r.push(`In your paws: ${i.held}.`),r.push(`Your body: ${xh(i.needs)}. Money: $${i.money}.`),r.push(`Wearing: ${i.wearing.length?i.wearing.join(", "):"just your teal shirt"}. Carrying: ${i.inventory.length?i.inventory.map(_h).join(", "):"nothing"}.`),i.home.furniture.length&&r.push(`Your flat has: ${i.home.furniture.map(_h).join(", ")}.`),t||r.push(`Your mood just now: ${i.mood.word}.`),i.interests.length&&r.push(`Your interests: ${i.interests.join("; ")}.`),i.memory.facts.length&&r.push(`Things you know about yourself and your life:
${i.memory.facts.slice(-20).map(b=>"- "+b).join(`
`)}`),i.memory.summaries.length&&r.push(`Earlier days, as you remember them:
${i.memory.summaries.slice(-5).map(b=>`- (Day ${b.day}) ${b.text}`).join(`
`)}`);const c=i.memory.recent.slice(-16);c.length&&r.push(`Recently:
${c.map(b=>`- [${b.day===n.world.day?"":"Day "+b.day+" "}${b.time}] ${b.text}`).join(`
`)}`);const h=a.interior?e.crowd.people.filter(b=>b.named&&b.state==="inside"&&b.insideOf===a.interior.place.id):e.crowd.near(a.pos.x,a.pos.z,22).filter(b=>b.named),d=a.interior?0:e.crowd.near(a.pos.x,a.pos.z,22).length-h.length;h.length&&r.push(`People right here:
${h.slice(0,6).map(b=>`- ${b.name} (${b.species}, ${b.job})${sb(i.relationships[b.id])}${b.state==="chat"?`, chatting with ${e.crowd.byId(b.with)?.name||"someone"}`:b.state==="walk"?", walking past":""}`).join(`
`)}`),d>0&&r.push(`${d>8?"Lots of":"A few"} strangers around.`);const u=Object.entries(i.relationships).filter(([,b])=>b.talks>0).sort((b,w)=>w[1].score-b[1].score).slice(0,8);u.length&&r.push(`People you know: ${u.map(([b,w])=>`${go[b]?.name||b} (${bl(w.score)})`).join(", ")}.`);const f=X1(a.interior?a.interior.place.door[0]:a.pos.x,a.interior?a.interior.place.door[1]:a.pos.z,o,120).filter(b=>!b.p.hidden||i.discovered.includes(b.p.id)).slice(0,12);r.push(`Places within a short walk:
${f.map(({p:b,d:w,open:T})=>`- ${b.name} (${b.type}, ${Math.round(w)}m, ${b.outdoor?"outdoors":T?"open":"closed"})${b.sells?.length&&T?": "+b.sells.slice(0,5).map(S=>`${S} $${yi[S]}`).join(", "):""}${b.job&&T?`; hiring ${b.job.title} $${b.job.pay}/h`:""}`).join(`
`)}`);const m=Fe.filter(b=>!b.hidden&&!f.some(w=>w.p.id===b.id)).map(b=>b.name);r.push(`Elsewhere in the city: ${m.join(", ")}.`);const g=e.findables.filter(b=>!b.taken&&Math.hypot(b.x-a.pos.x,b.z-a.pos.z)<25&&!a.interior);g.length&&r.push(`Lying nearby: ${g.map(b=>b.name).join(", ")}.`),n.world.news.length&&r.push(`Talk of the town today: ${n.world.news.join(" ")}`),n.world.festival&&o>=n.world.festival.from-2&&o<n.world.festival.to&&r.push(`The ${n.world.festival.name} is ${o>=n.world.festival.from?"happening now":"starting soon"} at ${Ut[n.world.festival.where]?.name}.`);const p=i.requests.find(b=>b.status==="pending");p?r.push(`You asked for "${p.text}" and haven't heard back yet. (There is someone who watches over your city and sometimes answers requests.)`):r.push("(There is someone who watches over your city. Once in a while you can make_request for something you really want; they might say yes or no.)");const x=i.requests.filter(b=>b.status!=="pending"&&!b.reacted);for(const b of x)r.push(`NEWS FOR YOU: your request for "${b.text}" was ${b.status==="granted"?"GRANTED":"DECLINED"}${b.note?` with a note: "${b.note}"`:""}.${b.status==="granted"&&b.effect?" "+b.effect:""}`),b.reacted=!0,(this.reactingTo||=[]).push(b);this.lastResult&&r.push(`What just happened: ${this.lastResult}`),this.events.length&&r.push(`Meanwhile:
${this.events.map(b=>"- "+b).join(`
`)}`),i.lastThought&&!t&&r.push(`Your last thought was: "${i.lastThought}"`);const v=n.log.slice(-5).map(b=>b.action);return v.length&&r.push(`Your last few actions: ${v.join(" / ")}.`),t||r.push(nb),r.join(`

`)}surroundings(){const t=this.w.pebble,e=t.interior?[]:this.w.crowd.near(t.pos.x,t.pos.z,15).filter(n=>n.named).map(n=>n.name);return`${t.interior?"You are inside "+t.interior.place.name+".":"You are outside"+yh(t)+"."}${e.length?" Nearby: "+e.join(", ")+".":""}`}}function _h(s){return typeof s=="string"?s:s.type==="painting"?`your painting "${s.title}"`:s.title||s.item}function bl(s=0){return s>.6?"very close":s>.35?"friends":s>.15?"friendly":s>-.1?"neutral":s>-.35?"a bit sour":"bad blood"}function sb(s){return s&&s.talks?` — you've talked ${s.talks} time${s.talks>1?"s":""}, ${bl(s.score)}${s.notes?.length?"; last time: "+s.notes.at(-1):""}`:" — you haven't met"}function ab(s){return{clear:"clear",cloudy:"grey and cloudy",rain:"raining",fog:"foggy",snow:"snowing",storm:"a thunderstorm"}[s]||s}function yh(s){let t=null,e=1e9;for(const n of Fe){if(n.hidden)continue;const i=Math.hypot(n.door[0]-s.pos.x,n.door[1]-s.pos.z);i<e&&(e=i,t=n)}return t&&e<60?`, ${e<8?"right outside":"near"} ${t.name}`:""}function ob(s){const t=s.type,e=s.target||s.item||"";return{walk_to:`walking to ${e||"wherever"}`,enter_building:`going into ${e}`,buy:`buying ${s.item||e}`,order:`ordering ${s.item||e}`,sell:`selling ${s.item||e}`,work_shift:`working a shift at ${e}`,sleep:"sleeping",sit:`sitting${e?" at "+e:""}`,talk_to:`talking to ${e}`,say:"talking out loud",emote:e||"fidgeting",paint:"painting",cook:"cooking",craft:"making something",play:`playing ${e}`,ride:`riding the ${e}`,climb:`climbing ${e}`,wait:"taking a moment",write_diary:"writing in the diary",make_request:"asking for something",look_at:`looking at ${e}`,interact:`messing with ${e}`,use_item:`using ${s.item||e}`,give_item:`giving ${s.item} to ${e}`,pick_up:`picking up ${e}`,drop:`dropping ${s.item||e}`}[t]||t}const re=s=>String(s??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),gn=s=>{const t=document.createElement("template");return t.innerHTML=s.trim(),t.content.firstChild},ti=s=>`<svg viewBox="0 0 24 24">${s}</svg>`,Nn={follow:ti('<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>'),orbit:ti('<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/>'),cinematic:ti('<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3"/>'),first:ti('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),book:ti('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>'),gear:ti('<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>'),pause:ti('<rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/>'),play:ti('<path d="M7 4.5v15l12-7.5z"/>'),sound:ti('<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>'),mute:ti('<path d="M11 5 6 9H2v6h4l5 4z"/><path d="m23 9-6 6M17 9l6 6"/>')},wh={clear:["☀️","Clear"],cloudy:["☁️","Cloudy"],rain:["🌧️","Rain"],fog:["🌫️","Fog"],snow:["❄️","Snow"],storm:["⛈️","Storm"]},rb=s=>s>.6?"😄":s>.25?"🙂":s>-.1?"😐":s>-.45?"😕":"😢";class lb{constructor(t,e){this.w=t,this.on=e,this.root=document.getElementById("ui"),this.tab="status",this.panelOpen=innerWidth>760,this.camMode="follow",this.bubble=null,this.npcBubbles=[],this.v=new D,this.settings=t.settings,this.build()}build(){const t=this.root;t.innerHTML="",this.top=gn(`<div class="topbar">
      <div class="pill brand"><span class="ico">🦦</span>Pebble's City</div>
      <div class="pill clock"><span class="ico" data-k="wico">☀️</span><span data-k="time">--</span><span class="sub" data-k="day"></span></div>
      <div class="pill district"><span class="ico">📍</span><span data-k="where"></span></div>
      <div class="pill money"><span class="ico">🪙</span><span data-k="money"></span></div>
      <div class="pill festival hidden" data-k="fest"></div>
    </div>`),t.append(this.top),this.tb=gn(`<div class="toolbar">
      <button class="tb" data-cam="follow" data-tip="Follow camera (1)">${Nn.follow}</button>
      <button class="tb" data-cam="orbit" data-tip="Free orbit (2)">${Nn.orbit}</button>
      <button class="tb" data-cam="cinematic" data-tip="Cinematic (3)">${Nn.cinematic}</button>
      <button class="tb" data-cam="first" data-tip="Pebble's eyes (4)">${Nn.first}</button>
      <div class="sep"></div>
      <button class="tb" data-act="mind" data-tip="Pause Pebble's mind">${Nn.pause}</button>
      <button class="tb" data-act="sound" data-tip="Sound">${Nn.mute}</button>
      <button class="tb" data-act="settings" data-tip="Settings">${Nn.gear}</button>
      <button class="tb" data-act="panel" data-tip="Diary, requests and more">${Nn.book}</button>
    </div>`),t.append(this.tb),this.tb.addEventListener("click",e=>{const n=e.target.closest("button");if(!n)return;n.dataset.cam&&this.on.camera(n.dataset.cam);const i=n.dataset.act;i==="panel"&&this.togglePanel(),i==="settings"&&this.toggleSettings(),i==="mind"&&this.on.pauseMind(!this.w.mind.paused),i==="sound"&&this.on.sound(!this.settings.sound)}),this.panel=gn(`<div class="panel ${this.panelOpen?"":"closed"}">
      <div class="tabs">
        <button class="tab" data-tab="status">Status</button>
        <button class="tab" data-tab="diary">Diary</button>
        <button class="tab" data-tab="requests">Requests<span class="badge hidden" data-k="reqbadge">1</span></button>
        <button class="tab" data-tab="city">City</button>
      </div>
      <div class="pane"></div>
    </div>`),t.append(this.panel),this.pane=this.panel.querySelector(".pane"),this.panel.querySelector(".tabs").addEventListener("click",e=>{const n=e.target.closest(".tab");n&&this.showTab(n.dataset.tab)}),this.pane.addEventListener("click",e=>this.paneClick(e)),this.th=gn(`<div class="thought">
      <div class="who"><span class="dot" data-k="dot"></span><span data-k="who">Pebble is thinking</span></div>
      <div class="txt" data-k="txt"></div>
      <div class="act" data-k="act"></div>
    </div>`),t.append(this.th),this.toasts=gn('<div class="toasts"></div>'),t.append(this.toasts),this.fadeEl=gn('<div class="fade-screen"></div>'),document.body.append(this.fadeEl),this.fpsEl=gn('<div class="fps hidden"></div>'),t.append(this.fpsEl),this.k={},t.querySelectorAll("[data-k]").forEach(e=>this.k[e.dataset.k]=e),this.showTab(this.tab),this.syncToolbar(),addEventListener("keydown",e=>{if(e.target.closest?.("textarea,input"))return;const n={1:"follow",2:"orbit",3:"cinematic",4:"first"}[e.key];n&&this.on.camera(n)})}showStart(t){const e=!this.w.state.pebble.interests.length,n=gn(`<div class="veil"><div class="veil-card">
      <h2>${e?"Meet Pebble":"Pebble is home"}</h2>
      <p>${e?"Pebble is an otter who lives on his own in this little city. Nobody tells him what to do. You can watch, read his diary, and answer when he asks you for something.":`Welcome back. It's ${re(Cn(this.w.state))} on Day ${this.w.state.world.day} in the city.`}</p>
      <button class="btn">${e?"Step into the city":"Look in on him"}</button>
    </div></div>`);this.root.append(n),n.querySelector("button").addEventListener("click",()=>{n.remove(),t()},{once:!0})}fade(t){this.fadeEl.classList.toggle("on",t)}syncToolbar(){this.tb.querySelectorAll("[data-cam]").forEach(i=>i.classList.toggle("on",i.dataset.cam===this.camMode));const t=this.tb.querySelector("[data-act=mind]"),e=this.w.mind?.paused;t.innerHTML=e?Nn.play:Nn.pause,t.dataset.tip=e?"Resume Pebble's mind":"Pause Pebble's mind",t.classList.toggle("on",!!e);const n=this.tb.querySelector("[data-act=sound]");n.innerHTML=this.settings.sound?Nn.sound:Nn.mute,this.tb.querySelector("[data-act=panel]").classList.toggle("on",this.panelOpen)}setCamera(t){this.camMode=t,this.syncToolbar()}togglePanel(t){this.panelOpen=t??!this.panelOpen,this.panel.classList.toggle("closed",!this.panelOpen),this.panelOpen&&this.render(),this.syncToolbar(),this.pop?.remove(),this.pop=null}toggleSettings(){if(this.pop){this.pop.remove(),this.pop=null;return}innerWidth<=760&&this.togglePanel(!1);const t=this.settings,e=this.w.mind,n=(a,o)=>`<div class="seg" data-seg="${a}">${o.map(([r,l])=>`<button data-v="${r}" class="${t[a]===r?"on":""}">${l}</button>`).join("")}</div>`,i=(a,o,r,l)=>`<div class="toggle"><div>${o}${r?`<small>${r}</small>`:""}</div><button class="sw ${l?"on":""}" data-tog="${a}" aria-label="${o}"></button></div>`;this.pop=gn(`<div class="pop">
      <h4>Graphics</h4>${n("quality",[["low","Low"],["medium","Medium"],["high","High"]])}
      <h4>Time in the city</h4>${n("timeSpeed",[["real","Real time"],["slow","Slow"],["lively","Lively"],["fast","Fast"]])}
      <h4>Pebble's mind</h4>
      ${i("mind","Thinking for himself",e.paused?"Paused: he stays put":"He decides what to do",!e.paused)}
      ${i("cheap","Cost saver","Fewer, cheaper thoughts",e.cheap)}
      <h4 style="margin-top:12px">Sound</h4>
      ${i("sound","City sounds","",t.sound)}
      ${i("tts","Read his words aloud","Uses your browser voice",t.tts)}
      ${i("fps","Show frame rate","",t.fps)}
      <div class="danger"><button class="btn ghost small" data-act="reset">Start Pebble's story over</button></div>
    </div>`),this.root.append(this.pop),this.pop.addEventListener("click",a=>{const o=a.target.closest("button");if(!o)return;const r=o.closest("[data-seg]");if(r){this.on[r.dataset.seg](o.dataset.v),r.querySelectorAll("button").forEach(c=>c.classList.toggle("on",c===o));return}const l=o.dataset.tog;if(l){const c=!o.classList.contains("on");o.classList.toggle("on",c),l==="mind"&&this.on.pauseMind(!c),l==="cheap"&&this.on.cheap(c),l==="sound"&&this.on.sound(c),l==="tts"&&this.on.tts(c),l==="fps"&&(t.fps=c,this.fpsEl.classList.toggle("hidden",!c),this.on.saveSettings());return}o.dataset.act==="reset"&&(o.dataset.armed?this.on.reset():(o.dataset.armed="1",o.textContent="Really? This wipes his memory. Tap again.",o.classList.add("coral"),o.classList.remove("ghost")))})}showTab(t){this.tab=t,this.panel.querySelectorAll(".tab").forEach(e=>e.classList.toggle("on",e.dataset.tab===t)),this.render(),this.pane.scrollTop=0}refresh(t){(!t||t===this.tab)&&this.render(),this.updateBadge()}updateBadge(){const t=this.w.state.pebble.requests.filter(e=>e.status==="pending").length;this.k.reqbadge.classList.toggle("hidden",!t),this.k.reqbadge.textContent=t}render(){if(!this.panelOpen)return;const t={status:()=>this.renderStatus(),diary:()=>this.renderDiary(),requests:()=>this.renderRequests(),city:()=>this.renderCity()}[this.tab],e=this.pane.querySelector("textarea")?.value;if(this.pane.innerHTML=t(),e){const n=this.pane.querySelector("textarea");n&&(n.value=e)}this.tab==="city"&&this.drawMap()}renderStatus(){const t=this.w.state.pebble,e=t.needs,n=(o,r,l,c)=>`<div class="need"><span>${o}</span><div class="bar"><i style="width:${Math.round(r*100)}%;background:${l}"></i></div><span class="word">${c}</span></div>`,i=(o,r)=>r[Math.min(r.length-1,Math.floor(o*r.length))],a=this.w.state.log.slice(-14).reverse();return`
      <div class="moodcard"><div class="moodface">${rb(t.mood.valence)}</div><div><div class="muted">Feeling</div><div class="moodword">${re(t.mood.word)}</div></div></div>
      <h3>Body</h3>
      ${n("Fed",1-e.hunger,"#e7a83e",i(1-e.hunger,["starving","hungry","peckish","fine","full"]))}
      ${n("Energy",e.energy,"#3f8f8a",i(e.energy,["exhausted","tired","okay","good","buzzing"]))}
      ${n("Company",1-e.social,"#8a5aa8",i(1-e.social,["lonely","wants company","fine","social","peopled out"]))}
      ${n("Fun",1-e.fun,"#e2674f",i(1-e.fun,["so bored","restless","fine","having fun","delighted"]))}
      <h3>Interests</h3>
      ${t.interests.length?`<div class="chips">${t.interests.map(o=>`<span class="chip interest">${re(o)}</span>`).join("")}</div>`:`<div class="muted">He hasn't decided yet. He picks his own on his first morning.</div>`}
      ${t.memory.facts.length?`<h3>Things he's decided about himself</h3><ul class="facts">${t.memory.facts.slice(-12).reverse().map(o=>`<li>${re(o)}</li>`).join("")}</ul>`:""}
      <h3>So far</h3>
      <div class="stats"><div class="stat"><b>${this.w.state.world.day}</b><span>Days</span></div><div class="stat"><b>${t.stats.shifts}</b><span>Shifts</span></div><div class="stat"><b>$${t.stats.earned}</b><span>Earned</span></div></div>
      <h3>Recent thoughts</h3>
      ${a.length?`<ul class="log">${a.map(o=>`<li><span class="t">${re(o.time)}</span><span class="th">${re(o.thought)}</span><span class="ac">→ ${re(o.action)}</span></li>`).join("")}</ul>`:'<div class="muted">Nothing yet.</div>'}`}renderDiary(){const t=this.w.state.pebble.diary.slice().reverse();return t.length?`<div class="readonly-note">Pebble's private diary. You can read it, but only he writes in it.</div>`+t.map(e=>`<div class="diary"><div class="dh"><span>Day ${e.day} · ${re(e.weekday||"")} ${re(e.time||"")}</span><em>${e.kind==="night"?"bedtime":"a moment"}</em></div><div class="dt">${re(e.text)}</div></div>`).join(""):'<div class="empty">📔<br>His diary is empty so far.<br>He writes in it at bedtime, and whenever something feels worth writing down.</div>'}renderRequests(){const t=this.w.state.pebble.requests.slice().reverse();return t.length?t.map(e=>e.status==="pending"?`
      <div class="req pending" data-id="${e.id}">
        <div class="meta">Day ${e.day}, ${re(e.time)} · waiting for you</div>
        <div class="what">${re(e.text)}</div>
        ${e.reason?`<div class="why">"${re(e.reason)}"</div>`:""}
        <textarea placeholder="Add a note for Pebble (optional)" maxlength="300"></textarea>
        <div class="row"><button class="btn" data-ans="grant">Grant</button><button class="btn ghost" data-ans="decline">Decline</button></div>
      </div>`:`
      <div class="req">
        <div class="meta">Day ${e.day}, ${re(e.time)} · <span class="status ${e.status}">${e.status}</span></div>
        <div class="what">${re(e.text)}</div>
        ${e.reason?`<div class="why">"${re(e.reason)}"</div>`:""}
        ${e.note?`<div class="note">Your note: ${re(e.note)}</div>`:""}
        ${e.reaction?`<div class="reaction">Pebble: ${re(e.reaction)}</div>`:""}
      </div>`).join(""):`<div class="empty">🙏<br>Pebble hasn't asked you for anything yet.<br>When he really wants something, his request shows up here, and you can say yes or no.</div>`}renderCity(){const t=this.w.state.pebble,e=Object.entries(t.relationships).filter(([,i])=>i.talks||Math.abs(i.score)>.01).sort((i,a)=>a[1].score-i[1].score),n=t.inventory.map(i=>typeof i=="string"?i:i.type==="painting"?`🖼 "${i.title}"`:i.title||i.item);return`
      <div class="map-wrap"><canvas width="672" height="700"></canvas><div class="map-tip hidden"></div></div>
      <div class="legend">${Object.entries(ns).filter(([i])=>i!=="river").map(([,i])=>`<span><i style="background:${i.color}"></i>${i.name}</span>`).join("")}</div>
      <h3>Carrying</h3>
      ${n.length?`<div class="chips">${n.map(i=>`<span class="chip">${re(i)}</span>`).join("")}</div>`:'<div class="muted">Empty paws.</div>'}
      ${t.wearing.length?`<div class="muted" style="margin-top:6px">Wearing: ${t.wearing.map(re).join(", ")}</div>`:""}
      <h3>Home</h3>
      <div class="muted">${re(Ut.home.name)}, Residential Streets${t.home.furniture.length?"":". Pretty bare so far."}</div>
      ${t.home.furniture.length?`<div class="chips" style="margin-top:6px">${t.home.furniture.map(i=>`<span class="chip">${re(i.title||i.item)}</span>`).join("")}</div>`:""}
      <h3>People he knows</h3>
      ${e.length?e.map(([i,a])=>{const o=go[i],r=a.score;return`<div class="rel"><b>${re(o?.name||i)}</b><div class="meter"><i style="${r>=0?`left:50%;width:${r*50}%;background:#4f9a5a`:`right:50%;width:${-r*50}%;background:#c2523f`}"></i></div><span class="job">${re(o?.job||"")} · ${a.talks||0} chats</span>${a.notes?.length?`<span class="last">${re(a.notes.at(-1))}</span>`:""}</div>`}).join(""):'<div class="muted">Nobody yet.</div>'}
      <h3>Places he's found</h3>
      <div class="chips">${t.discovered.map(i=>Ut[i]||(this.w.state.world.extraPlaces||[]).find(a=>a.id===i)).filter(Boolean).map(i=>`<span class="chip">${re(i.name)}</span>`).join("")}</div>`}drawMap(){const t=this.pane.querySelector("canvas");if(!t)return;const e=t.getContext("2d"),n=t.width,i=t.height,a=qe-20,o=qe+le*pe+20,r=Fn-20,l=zt+70,c=Math.min(n/(o-a),i/(l-r)),h=(n-(o-a)*c)/2,d=(i-(l-r)*c)/2,u=x=>h+(x-a)*c,f=x=>d+(x-r)*c;this.mapT={tx:u,tz:f},e.fillStyle="#d8cfbf",e.fillRect(0,0,n,i),e.fillStyle="#7fb3cf",e.fillRect(0,f(zt),n,i),e.fillStyle="#e8dfcf",e.fillRect(u(qe-6),f(zt-14),(le*pe+12)*c,14*c);for(let x=0;x<le;x++)for(let v=0;v<oe;v++){const b=zn(x,v),w=qe+x*pe+(pe-Ee)/2,T=Fn+v*pe+(pe-Ee)/2;e.fillStyle=b==="river"?"#7fb3cf":ns[b]?.color||"#ccc",e.globalAlpha=b==="river"?1:.55,b==="river"?e.fillRect(u(qe+x*pe),f(T-2),pe*c+1,(Ee+4)*c):(e.beginPath(),e.roundRect(u(w),f(T),Ee*c,Ee*c,4),e.fill())}e.globalAlpha=1,e.fillStyle="#b89a74";const m=this.w.city.pierX;m!=null&&e.fillRect(u(m-2),f(zt),4*c,40*c);const g=this.w.state.pebble;this.mapPlaces=[];for(const x of Fe){const v=g.discovered.includes(x.id);if(x.hidden&&!v)continue;const b=u(x.door[0]),w=f(x.door[1]);e.beginPath(),e.arc(b,w,v?5.5:3.5,0,Math.PI*2),e.fillStyle=v?"#3b2f2a":"rgba(59,47,42,0.35)",e.fill(),v&&(e.lineWidth=2,e.strokeStyle="#fff",e.stroke()),this.mapPlaces.push({x:b,y:w,pl:x,known:v})}for(const[x,v]of Object.entries(g.relationships)){const b=this.w.crowd.byId(x);!b||!v.talks||b.state==="inside"||(e.beginPath(),e.arc(u(b.x),f(b.z),3.5,0,Math.PI*2),e.fillStyle="#8a5aa8",e.fill())}const p=this.w.pebble.interior?{x:this.w.pebble.interior.place.door[0],z:this.w.pebble.interior.place.door[1]}:this.w.pebble.pos;if(e.beginPath(),e.arc(u(p.x),f(p.z),11,0,Math.PI*2),e.fillStyle="rgba(226,103,79,0.25)",e.fill(),e.beginPath(),e.arc(u(p.x),f(p.z),6.5,0,Math.PI*2),e.fillStyle="#e2674f",e.fill(),e.lineWidth=2.5,e.strokeStyle="#fff",e.stroke(),e.font="700 20px Nunito, sans-serif",e.fillStyle="#3b2f2a",e.textAlign="center",e.fillText("Pebble",u(p.x),f(p.z)-16),!t.dataset.bound){t.dataset.bound=1;const x=this.pane.querySelector(".map-tip");t.addEventListener("mousemove",v=>{const b=t.getBoundingClientRect(),w=t.width/b.width,T=(v.clientX-b.left)*w,S=(v.clientY-b.top)*w,C=this.mapPlaces.find(M=>Math.hypot(M.x-T,M.y-S)<10);x.classList.toggle("hidden",!C),C&&(x.textContent=C.known?C.pl.name:`${C.pl.name} (not visited yet)`,x.style.left=C.x/w+"px",x.style.top=C.y/w+"px")}),t.addEventListener("mouseleave",()=>x.classList.add("hidden"))}}paneClick(t){const e=t.target.closest("[data-ans]");if(!e)return;const n=e.closest(".req"),i=n.querySelector("textarea")?.value.trim()||"";this.on.answer(n.dataset.id,e.dataset.ans==="grant",i)}thought(t){this.k.txt.textContent=t||"",this.k.txt.style.opacity=0,requestAnimationFrame(()=>{this.k.txt.style.transition="opacity .5s",this.k.txt.style.opacity=1}),this.tab==="status"&&this.render()}activity(t){this.k.act.innerHTML=t?`<span>→</span> ${re(t)}`:""}mood(){this.tab==="status"&&this.render()}mindStatus(t){const e=this.k.dot;e.className="dot"+(t.online===!1||t.paused?" off":t.thinking?" busy":""),this.k.who.textContent=t.online===!1?"Pebble's mind is offline":t.paused?"Paused":t.thinking?"Pebble is thinking":this.w.sleeping?"Pebble is asleep":"Pebble",t.thinking&&!this.k.txt.textContent&&(this.k.txt.innerHTML='<span class="thinking-dots"><span></span><span></span><span></span></span>'),t.online===!1?(this.k.txt.innerHTML="",this.k.act.innerHTML="",this.th.querySelector(".offline")||this.th.append(gn(`<div class="offline">${t.why==="not_granted"?"Pebble needs your OK to think with your Claude account. Reload the page and choose Allow when it asks.":t.why==="no_sample"?"This copy of the page can't reach Claude. Open it inside Claude to let Pebble think.":t.why==="no_server"?"Can't reach Pebble's server. Run <code>npm run dev</code> (it starts the web page and the API together).":t.why==="bad_key"?"The server has an API key, but Anthropic rejected it. Check <code>ANTHROPIC_API_KEY</code>.":"Set <code>ANTHROPIC_API_KEY</code> on the server (in <code>.env</code> locally, or in your Vercel/Netlify settings) and Pebble will start thinking for himself."} Until then he just stands around.</div>`))):this.th.querySelector(".offline")?.remove(),this.syncToolbar()}toast(t){const e=gn(`<div class="toast">${re(t)}</div>`);for(this.toasts.append(e),setTimeout(()=>e.remove(),4800);this.toasts.children.length>3;)this.toasts.firstChild.remove()}speech(t){this.bubble?.el.remove();const e=gn(`<div class="bubble">${re(t)}</div>`);this.root.append(e),this.bubble={el:e,until:performance.now()+Math.min(9e3,Math.max(3e3,t.length*75))}}npcSpeech(t,e){if(!e)return;const n=this.npcBubbles.find(a=>a.p===t);n&&(n.el.remove(),this.npcBubbles.splice(this.npcBubbles.indexOf(n),1));const i=gn(`<div class="bubble npc"><span class="name">${re(t.name)}</span>${re(e)}</div>`);this.root.append(i),this.npcBubbles.push({p:t,el:i,until:performance.now()+Math.min(9e3,Math.max(3500,e.length*75))}),this.npcBubbles.length>3&&this.npcBubbles.shift().el.remove()}money(t,e){const n=gn(`<div class="coin ${t>0?"plus":"minus"}">${t>0?"+":"−"}$${Math.abs(t)}</div>`);this.root.append(n),this.coinEls=(this.coinEls||[]).concat({el:n,born:performance.now()}),setTimeout(()=>n.remove(),2300)}project(t,e,n){return this.v.copy(t).project(e),n.x=(this.v.x*.5+.5)*innerWidth,n.y=(-this.v.y*.5+.5)*innerHeight,n.vis=this.v.z<1&&this.v.z>-1,n}update(t,e,n,i){const a=performance.now(),o={};if(this.bubble)if(a>this.bubble.until)this.bubble.el.remove(),this.bubble=null;else{this.project(e,t,o);const r=this.bubble.el;r.style.opacity=o.vis?1:0,r.style.transform=`translate(${o.x-r.offsetWidth/2}px, ${o.y-r.offsetHeight-14}px)`}for(const r of this.npcBubbles.slice()){if(a>r.until){r.el.remove(),this.npcBubbles.splice(this.npcBubbles.indexOf(r),1);continue}this.project(n(r.p),t,o),r.el.style.opacity=o.vis?1:0,r.el.style.transform=`translate(${o.x-r.el.offsetWidth/2}px, ${o.y-r.el.offsetHeight-10}px)`}if(this.coinEls?.length){this.project(e,t,o);for(const r of this.coinEls)r.el.style.left=o.x+"px",r.el.style.top=o.y-40+"px";this.coinEls=this.coinEls.filter(r=>a-r.born<2300)}if(a-(this.lastTop||0)>500){this.lastTop=a;const r=this.w.state,l=on(r),c=l<6||l>=20,[h,d]=wh[r.world.weather]||wh.clear;this.k.wico.textContent=r.world.weather==="clear"&&c?"🌙":h,this.k.wico.title=d,this.k.time.textContent=Cn(r),this.k.day.textContent=`Day ${r.world.day} · ${So(r).slice(0,3)}`;const u=this.w.pebble;this.k.where.textContent=u.interior?u.interior.place.name:ns[u.district()]?.name||"Outskirts",this.k.money.textContent="$"+r.pebble.money;const f=r.world.festival,m=f&&l>=f.from-1&&l<f.to;this.k.fest.classList.toggle("hidden",!m),m&&(this.k.fest.textContent=`🏮 ${f.name}`),this.settings.fps&&(this.fpsEl.textContent=`${i|0} fps`),this.panelOpen&&this.tab==="city"&&a-(this.lastMap||0)>2e3&&(this.lastMap=a,this.drawMap())}}}const Mh={type:"change"},Gl={type:"start"},Td={type:"end"},oo=new Ll,Sh=new ki,cb=Math.cos(70*uo.DEG2RAD),Xe=new D,bn=2*Math.PI,be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yr=1e-6;class hb extends Xf{constructor(t,e=null){super(t,e),this.state=be.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ks.ROTATE,MIDDLE:ks.DOLLY,RIGHT:ks.PAN},this.touches={ONE:Ps.ROTATE,TWO:Ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Dn,this._lastTargetPosition=new D,this._quat=new Dn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Nc,this._sphericalDelta=new Nc,this._scale=1,this._panOffset=new D,this._rotateStart=new st,this._rotateEnd=new st,this._rotateDelta=new st,this._panStart=new st,this._panEnd=new st,this._panDelta=new st,this._dollyStart=new st,this._dollyEnd=new st,this._dollyDelta=new st,this._dollyDirection=new D,this._mouse=new st,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ub.bind(this),this._onPointerDown=db.bind(this),this._onPointerUp=fb.bind(this),this._onContextMenu=_b.bind(this),this._onMouseWheel=xb.bind(this),this._onKeyDown=gb.bind(this),this._onTouchStart=bb.bind(this),this._onTouchMove=vb.bind(this),this._onMouseDown=pb.bind(this),this._onMouseMove=mb.bind(this),this._interceptControlDown=yb.bind(this),this._interceptControlUp=wb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mh),this.update(),this.state=be.NONE}update(t=null){const e=this.object.position;Xe.copy(e).sub(this.target),Xe.applyQuaternion(this._quat),this._spherical.setFromVector3(Xe),this.autoRotate&&this.state===be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=bn:n>Math.PI&&(n-=bn),i<-Math.PI?i+=bn:i>Math.PI&&(i-=bn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=o!=this._spherical.radius}if(Xe.setFromSpherical(this._spherical),Xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const r=Xe.length();o=this._clampDistance(r*this._scale);const l=r-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const r=new D(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(r),this.object.updateMatrixWorld(),o=Xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(oo.origin.copy(this.object.position),oo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oo.direction))<cb?this.object.lookAt(this.target):(Sh.setFromNormalAndCoplanarPoint(this.object.up,this.target),oo.intersectPlane(Sh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>yr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yr||this._lastTargetPosition.distanceToSquared(this.target)>yr?(this.dispatchEvent(Mh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?bn/60*this.autoRotateSpeed*t:bn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Xe.setFromMatrixColumn(e,0),Xe.multiplyScalar(-t),this._panOffset.add(Xe)}_panUp(t,e){this.screenSpacePanning===!0?Xe.setFromMatrixColumn(e,1):(Xe.setFromMatrixColumn(e,0),Xe.crossVectors(this.object.up,Xe)),Xe.multiplyScalar(t),this._panOffset.add(Xe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Xe.copy(i).sub(this.target);let a=Xe.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/n.clientHeight,this.object.matrix),this._panUp(2*e*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,a=e-n.top,o=n.width,r=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(a/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/e.clientHeight),this._rotateUp(bn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,a=Math.sqrt(n*n+i*i);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._rotateEnd.set(i,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/e.clientHeight),this._rotateUp(bn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,a=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,r=(t.pageY+e.y)*.5;this._updateZoomParameters(o,r)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new st,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function db(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function ub(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function fb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Td),this.state=be.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function pb(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=be.DOLLY;break;case ks.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=be.ROTATE}break;case ks.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=be.PAN}break;default:this.state=be.NONE}this.state!==be.NONE&&this.dispatchEvent(Gl)}function mb(s){switch(this.state){case be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function xb(s){this.enabled===!1||this.enableZoom===!1||this.state!==be.NONE||(s.preventDefault(),this.dispatchEvent(Gl),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Td))}function gb(s){this.enabled!==!1&&this._handleKeyDown(s)}function bb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ps.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=be.TOUCH_ROTATE;break;case Ps.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=be.TOUCH_PAN;break;default:this.state=be.NONE}break;case 2:switch(this.touches.TWO){case Ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=be.TOUCH_DOLLY_PAN;break;case Ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=be.TOUCH_DOLLY_ROTATE;break;default:this.state=be.NONE}break;default:this.state=be.NONE}this.state!==be.NONE&&this.dispatchEvent(Gl)}function vb(s){switch(this._trackPointer(s),this.state){case be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=be.NONE}}function _b(s){this.enabled!==!1&&s.preventDefault()}function yb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const wr=new D,Cs=new D;class Mb{constructor(t,e){this.cam=t,this.mode="follow",this.controls=new hb(t,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI*.49,this.lastFocus=new D,this.shot=null,this.shotT=0,this.wasInside=!1,this.limits()}limits(){const t=this.controls,e=this.mode;t.enablePan=e==="orbit",t.enabled=e!=="cinematic"&&e!=="first",t.minDistance=this.inside?1.5:e==="orbit"?4:2.2,t.maxDistance=this.inside?16:e==="orbit"?520:38,t.maxPolarAngle=e==="orbit"?Math.PI*.47:Math.PI*.49}setMode(t,e){this.mode=t,this.shot=null,this.desired=null,this.rendered=null,this.limits(),e.body.root.visible=t!=="first",e.interior&&t!=="first"?(this.inside=this.wasInside=!0,this.limits(),this.roomShot(e)):(t==="follow"||t==="orbit")&&this.snapBehind(e,t==="orbit"?40:7.5,t==="orbit"?26:3.2)}snapBehind(t,e,n){const i=this.focusOf(t),a=t.yaw+Math.PI*.85;this.controls.target.copy(i),this.cam.position.set(i.x+Math.sin(a)*e,i.y+n,i.z+Math.cos(a)*e),this.lastFocus.copy(i),this.desired=null,this.rendered=null,this.clampInside()}roomShot(t){const e=this.focusOf(t),n=Ae,i=e.x-n.x>0?-1:1;this.controls.target.set(e.x*.6+n.x*.4,e.y,e.z*.5+n.z*.5),this.cam.position.set(n.x+i*3.5,n.y+4.3,n.z+12.5),this.lastFocus.copy(e),this.desired=null,this.rendered=null,this.controls.update()}focusOf(t){return wr.copy(t.pos).add(Cs.set(0,t.climbing||t.onTop?1.1:.95,0)).clone()}update(t,e){const n=!!e.interior;n!==this.wasInside&&(this.wasInside=n,this.inside=n,this.limits(),(this.mode==="orbit"||this.mode==="follow"||this.mode==="cinematic")&&(n?this.roomShot(e):this.snapBehind(e,7.5,3.2)));const i=this.focusOf(e);if(this.mode==="follow"||n&&this.mode==="orbit"){this.desired&&this.cam.position.copy(this.desired);const a=Cs.copy(i).sub(this.lastFocus);a.lengthSq()>400?this.snapBehind(e,7.5,3.2):(this.controls.target.add(a),this.cam.position.add(a)),this.lastFocus.copy(i),this.controls.update(),this.desired=(this.desired||new D).copy(this.cam.position),this.clampInside(),this.rendered&&this.rendered.distanceToSquared(this.cam.position)<100&&this.cam.position.lerpVectors(this.rendered,this.cam.position,1-Math.exp(-t*9)),(this.rendered||=new D).copy(this.cam.position),this.cam.lookAt(this.controls.target)}else if(this.mode==="orbit")this.controls.update();else if(this.mode==="first"){const a=e.body.j.head;a.updateWorldMatrix(!0,!1),a.getWorldPosition(Cs);const o=e.yaw+(e.anim.headYaw||0);this.cam.position.set(Cs.x+Math.sin(o)*.22,Cs.y+.08,Cs.z+Math.cos(o)*.22);const r=e.lookAt&&e.activity==="stargaze"?wr.set(this.cam.position.x+Math.sin(o),this.cam.position.y+1.2,this.cam.position.z+Math.cos(o)):wr.set(this.cam.position.x+Math.sin(o)*5,this.cam.position.y-.25,this.cam.position.z+Math.cos(o)*5);this.cam.lookAt(r)}else this.mode==="cinematic"&&this.cinematic(t,e,i);this.cam.near=this.mode==="first"?.05:.3,this.cam.updateProjectionMatrix()}cinematic(t,e,n){this.shotT-=t;const i=!!e.interior;if(!this.shot||this.shotT<0){const c=i?["corner","close","side"]:["wide","low","crane","side","close","track"];let h;do h=c[Math.random()*c.length|0];while(h===this.shot?.kind&&c.length>1);this.shot={kind:h,a:Math.random()*Math.PI*2,t:0},this.shotT=7+Math.random()*5}const a=this.shot;a.t+=t;const o=e.yaw;let r,l=n.clone();switch(a.kind){case"wide":r=new D(n.x+Math.sin(a.a+a.t*.03)*34,n.y+16,n.z+Math.cos(a.a+a.t*.03)*34);break;case"low":r=new D(n.x+Math.sin(o+.5)*3.2,.45,n.z+Math.cos(o+.5)*3.2),l.y+=.4;break;case"crane":{const c=2+Math.min(a.t,10)*2.2;r=new D(n.x+Math.sin(a.a)*(5+a.t),n.y+c,n.z+Math.cos(a.a)*(5+a.t));break}case"side":r=new D(n.x+Math.sin(o+Math.PI/2)*(i?3.5:5),n.y+.6,n.z+Math.cos(o+Math.PI/2)*(i?3.5:5));break;case"close":r=new D(n.x+Math.sin(o+.35)*1.9,n.y+.45,n.z+Math.cos(o+.35)*1.9),l.y+=.35;break;case"track":r=new D(n.x-Math.sin(o)*6+Math.sin(o+1.57)*2,n.y+2.2,n.z-Math.cos(o)*6+Math.cos(o+1.57)*2);break;case"corner":r=new D(Ae.x+(Math.sin(a.a)>0?7:-7),3.4,Ae.z+5);break}a.init?this.cam.position.lerp(r,1-Math.exp(-t*(a.kind==="wide"||a.kind==="crane"?.8:2.5))):(this.cam.position.copy(r),a.init=!0),this.clampInside(),this.controls.target.lerp(l,1-Math.exp(-t*4)),this.cam.lookAt(this.controls.target)}clampInside(){if(!this.inside){this.cam.position.y<.6&&(this.cam.position.y=.6),this.avoidBuildings();return}const t=this.cam.position,e=Ae;t.x=uo.clamp(t.x,e.x-7.5,e.x+7.5),t.z=uo.clamp(t.z,e.z-5.5,e.z+16),t.y=uo.clamp(t.y,e.y+.6,e.y+(t.z>e.z+6?4.8:3.9))}avoidBuildings(){const t=this.cam.position,e=this.controls.target,n=t.x-e.x,i=t.y-e.y,a=t.z-e.z,o=Math.hypot(n,a);let r=1;for(const c of yd){if(Math.abs(c.cx-e.x)>o+c.r+1||Math.abs(c.cz-e.z)>o+c.r+1)continue;const h=Math.cos(c.yaw),d=Math.sin(c.yaw),u=c.w/2+.3,f=c.d/2+.3,m=(e.x-c.cx)*h-(e.z-c.cz)*d,g=(e.x-c.cx)*d+(e.z-c.cz)*h,p=n*h-a*d,x=n*d+a*h;if(Math.abs(m)<u&&Math.abs(g)<f)continue;let v=0,b=1;for(const[w,T,S]of[[m,p,u],[g,x,f]]){if(Math.abs(T)<1e-6){if(Math.abs(w)>S){v=2;break}continue}let C=(-S-w)/T,M=(S-w)/T;if(C>M&&([C,M]=[M,C]),v=Math.max(v,C),b=Math.min(b,M),v>b)break}v>b||v>=r||e.y+i*v>c.h||(r=v)}if(r>=1)return;const l=Math.max(1.6/Math.max(o,.01),r*.9);t.set(e.x+n*l,e.y+i*l+(1-l)*1.2,e.z+a*l)}}class Sb{constructor(){this.ctx=null,this.enabled=!1,this.layers={},this.musicOn=!1}start(){if(this.ctx){this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination),this.muffle=e.createBiquadFilter(),this.muffle.type="lowpass",this.muffle.frequency.value=18e3,this.muffle.connect(this.master);const n=e.sampleRate*3,i=e.createBuffer(1,n,e.sampleRate),a=e.createBuffer(1,n,e.sampleRate),o=i.getChannelData(0),r=a.getChannelData(0);let l=0;for(let h=0;h<n;h++){const d=Math.random()*2-1;o[h]=d,l=(l+.02*d)/1.02,r[h]=l*3.5}this.white=i;const c=(h,d,u,f=.7)=>{const m=e.createBufferSource();m.buffer=h,m.loop=!0;const g=e.createBiquadFilter();g.type=d,g.frequency.value=u,g.Q.value=f;const p=e.createGain();return p.gain.value=0,m.connect(g).connect(p).connect(this.muffle),m.start(),{g:p,f:g}};this.layers.hum=c(a,"lowpass",400),this.layers.rain=c(i,"bandpass",2600,.5),this.layers.wind=c(a,"bandpass",500,1.2),this.layers.waves=c(a,"lowpass",700),this.layers.room=c(a,"lowpass",250),this.t=0,this.nextChirp=2}setEnabled(t){this.enabled=t,t&&this.start(),this.ctx&&this.master.gain.setTargetAtTime(t?.8:0,this.ctx.currentTime,.4)}suspend(t){this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}update(t,e){if(!this.ctx||!this.enabled)return;const n=this.ctx,i=n.currentTime,a=(o,r)=>o.g.gain.setTargetAtTime(r,i,.8);this.muffle.frequency.setTargetAtTime(e.inside?700:18e3,i,.3),a(this.layers.hum,(e.inside?.05:.11)*(e.night?.6:1)),a(this.layers.rain,e.rain*(e.inside?.25:.32)),a(this.layers.wind,(e.storm*.35+e.snow*.12+.02)*(e.inside?.3:1)),this.layers.wind.f.frequency.setTargetAtTime(380+Math.sin(i*.3)*160,i,.5),a(this.layers.waves,e.sea*(.22+Math.sin(i*.45)*.1)),a(this.layers.room,e.inside?.05:0),this.nextChirp-=t,this.nextChirp<0&&!e.inside&&e.rain<.3&&(this.nextChirp=e.night?.6+Math.random()*1.2:1.5+Math.random()*4,e.night?this.cricket():(e.park>.2||Math.random()<.4)&&this.chirp())}env(t,e,n,i,a=this.ctx.currentTime){t.gain.setValueAtTime(1e-4,a),t.gain.exponentialRampToValueAtTime(n,a+e),t.gain.exponentialRampToValueAtTime(1e-4,a+e+i)}tone(t,e,n,i,a,o=this.ctx.currentTime,r=this.muffle){const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=t,l.frequency.setValueAtTime(e,o),n&&l.frequency.exponentialRampToValueAtTime(n,o+i),l.connect(c).connect(r),this.env(c,.008,a,i,o),l.start(o),l.stop(o+i+.05)}burst(t,e,n,i,a=1){const o=this.ctx,r=o.createBufferSource();r.buffer=this.white;const l=o.createBiquadFilter();l.type=t,l.frequency.value=e,l.Q.value=a;const c=o.createGain();r.connect(l).connect(c).connect(this.muffle),this.env(c,.004,i,n),r.start(o.currentTime,Math.random()*2),r.stop(o.currentTime+n+.05)}chirp(){const t=this.ctx.currentTime,e=2400+Math.random()*1800;for(let n=0;n<2+(Math.random()*3|0);n++)this.tone("sine",e,e*(1.2+Math.random()*.4),.07,.025,t+n*.11)}cricket(){const t=this.ctx.currentTime;for(let e=0;e<3;e++)this.tone("sine",4700,0,.03,.012,t+e*.05)}footstep(t){if(!this.ctx||!this.enabled)return;const e={cobble:["bandpass",900,.05,.09],stone:["bandpass",1300,.035,.06],grass:["lowpass",700,.05,.05],wood:["bandpass",420,.06,.12]}[t]||["bandpass",1100,.04,.06];this.burst(e[0],e[1]*(.9+Math.random()*.2),e[2],e[3],1.5)}coin(){if(!this.ctx||!this.enabled)return;const t=this.ctx.currentTime;this.tone("sine",1568,0,.12,.12,t,this.master),this.tone("sine",2093,0,.3,.12,t+.08,this.master)}tramBell(){if(!this.ctx||!this.enabled)return;const t=this.ctx.currentTime;for(const e of[0,.32])this.tone("sine",1180,0,.9,.08,t+e),this.tone("sine",2950,0,.5,.03,t+e)}thunder(){if(!this.ctx||!this.enabled)return;const t=this.ctx,e=t.createBufferSource();e.buffer=this.white;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=160;const i=t.createGain();e.connect(n).connect(i).connect(this.muffle);const a=t.currentTime+.6+Math.random();i.gain.setValueAtTime(1e-4,a),i.gain.exponentialRampToValueAtTime(.9,a+.15),i.gain.exponentialRampToValueAtTime(1e-4,a+3.5),e.start(a),e.stop(a+3.6)}ui(){!this.ctx||!this.enabled||this.tone("triangle",660,880,.08,.05,void 0,this.master)}playMusic(t){if(this.musicOn=t,!this.ctx||!t)return;const e=[261.6,293.7,329.6,392,440,523.3,587.3,659.3];let n=Math.floor(Math.random()*4);const i=()=>{if(!this.musicOn||!this.enabled)return;const a=this.ctx.currentTime;n=Math.max(0,Math.min(e.length-1,n+[-2,-1,1,1,2][Math.random()*5|0]));const o=e[n];this.tone("triangle",o,0,.6,.07,a),this.tone("sine",o*2,0,.3,.02,a),Math.random()<.3&&this.tone("triangle",o*.5,0,.9,.04,a),setTimeout(i,[250,250,500,375][Math.random()*4|0])};i()}}class Tb{constructor(){this.enabled=!1,this.voice=null,this.ok="speechSynthesis"in window,this.ok&&(this.pick(),speechSynthesis.onvoiceschanged=()=>this.pick())}pick(){const t=speechSynthesis.getVoices();this.voice=t.find(e=>/en[-_](GB|US)/i.test(e.lang)&&/female|samantha|karen|serena|google uk english male|daniel/i.test(e.name))||t.find(e=>/^en/i.test(e.lang))||null}setEnabled(t){this.enabled=t&&this.ok,!t&&this.ok&&speechSynthesis.cancel()}speak(t){if(!this.enabled||!t)return;speechSynthesis.cancel();const e=new SpeechSynthesisUtterance(t);this.voice&&(e.voice=this.voice),e.pitch=1.45,e.rate=1.07,e.volume=.9,speechSynthesis.speak(e)}}const Eb=new URLSearchParams(location.search),Ii=s=>document.getElementById(s),ei=()=>new Promise(s=>requestAnimationFrame(()=>s())),Th=s=>new Promise(t=>setTimeout(t,s));function ni(s,t){Ii("load-fill").style.width=Math.round(s*100)+"%",t&&(Ii("load-msg").textContent=t)}const Wl="pebble-city-settings",Ed=matchMedia("(max-width: 760px)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),ue=Object.assign({quality:Ed?"low":(navigator.hardwareConcurrency||4)<=4?"medium":"high",autoQuality:!0,timeSpeed:"lively",sound:!0,tts:!1,fps:!1,cheap:!1,camera:"follow"},(()=>{try{return JSON.parse(localStorage.getItem(Wl))||{}}catch{return{}}})()),Di=()=>{try{localStorage.setItem(Wl,JSON.stringify(ue))}catch{}};async function Ab(){const s=Ii("scene"),t=s.getContext("webgl2",{antialias:ue.quality!=="low",powerPreference:"high-performance"});if(!t){Ii("load-msg").innerHTML="",Ii("load-fill").parentElement.remove(),Ii("load-msg").parentElement.append(Object.assign(document.createElement("p"),{className:"load-err",innerHTML:"Pebble's city needs <b>WebGL2</b>, which this browser or device doesn't have turned on. Try a recent Chrome, Edge, Firefox or Safari, and check that hardware acceleration is enabled."}));return}ni(.05,"Laying cobblestones…"),await ei();const e=new kg({canvas:s,context:t,antialias:ue.quality!=="low"});e.setSize(innerWidth,innerHeight),e.shadowMap.type=Ah,e.toneMapping=_l,e.toneMappingExposure=1;const n=new Qh,i=new An(50,innerWidth/innerHeight,.3,2400),a=new x1(n,e);let o=B1();const r=!o||Eb.has("fresh");r&&(o=z1(),bh(o),gh(o)),a.weather.kind=o.world.weather,o.world.murals||=[],ni(.15,"Raising the old town…"),await ei();const l=f1(n,E=>ni(.15+E*.4));ni(.58,"Filling the harbor…"),await ei(),b1(n,a,{riverZ0:vi,riverZ1:_i,waterY:Md,seaZ:zt,seaY:ua,pond:l.pond});const c=new v1(n,l),h=new g1(n,a),d=new _1(n);ni(.68,"Painting crosswalks…"),await ei();const u=new y1(l),f=new w1(n,l,l.facade,ue.quality);ni(.78,"Waking up the neighbours…"),await ei();const m=new E1(n,u,ue.quality,o.npcMemory);m.traffic=f,m.settle(on(o));const g=n.children.filter(E=>!E.isLight),p=new Lt("#2a2126"),x=new zg(e);x.addPass(new Bg(n,i));const v=new Gs(new st(innerWidth,innerHeight),.3,.35,.85);x.addPass(v),x.addPass(new Hg);const b=new Sb,w=new Tb,T={state:o,settings:ue,scene:n,city:l,nav:u,traffic:f,crowd:m,audio:b,voice:w,sleeping:!1,findables:[],extraPlaces:o.world.extraPlaces,interior:null,save:()=>{S.persist(),o.npcMemory=m.memories,V1(o)},async fade(E){M.fade(!0),await Th(380),await E(),await ei(),await ei(),M.fade(!1),await Th(200)},enterInterior(E){T.interior&&T.leaveInterior();const B=mh(E,o,{facade:l.facade});n.add(B.group),T.interior=B;for(const K of g)K.visible=!1;a.sun.visible=!1,a.hemi.visible=!1,n.background=p;const Y=new Map;return m.interiorView={id:E.id,slot(K){if(!Y.has(K.id)){const ct=Y.size,rt=B.spots,xt=K.work===E.id&&rt.staff&&![...Y.values()].some(L=>L.staff)?{x:rt.staff.x,z:rt.staff.z,yaw:0,staff:!0}:rt.seats[ct%Math.max(1,rt.seats.length)]?{x:rt.seats[ct%rt.seats.length].p.x,z:rt.seats[ct%rt.seats.length].p.z+.6,yaw:Math.PI}:{x:-5+ct*1.5,z:-3,yaw:0};Y.set(K.id,xt)}const J=Y.get(K.id);return{x:J.x+Ae.x,z:J.z+Ae.z,yaw:J.yaw}}},B},leaveInterior(){if(T.interior){n.remove(T.interior.group),T.interior.group.traverse(E=>{E.geometry&&E.geometry.dispose()}),T.interior=null,m.interiorView=null;for(const E of g)E.visible=!0;a.sun.visible=!0,a.hemi.visible=!0,n.background=null}},rebuildInterior(){if(!T.interior)return;const E=T.interior.place;n.remove(T.interior.group);const B=mh(E,o,{facade:l.facade});n.add(B.group),T.interior=B,S.interior=B},relate(E,B,Y,K){const J=o.pebble.relationships[E]||={score:0,talks:0,notes:[]};if(J.score=Math.max(-1,Math.min(1,J.score+(B||0))),K&&J.talks++,Y){J.notes.push(String(Y).slice(0,160)),J.notes.length>6&&J.notes.shift();const ct=m.memories[E]||=[];ct.push(`Day ${o.world.day}: ${String(Y).slice(0,160)}`),ct.length>20&&ct.shift(),o.npcMemory=m.memories}M.tab==="city"&&M.refresh("city")},npcReply:(E,B)=>C.npcReply(E,B),npcSay:E=>C.npcLine(E,`You're at work${S.interior?" in "+S.interior.place.name:""}, and Pebble is working a shift alongside you.`),npcSpeech:(E,B)=>M.npcSpeech(E,B),takeFindable(E){E.taken=!0,n.remove(E.mesh)},dropItem(E,B,Y){k(E,B,Y)},addMural(E){o.world.murals.push(E),o.world.murals.length>4&&o.world.murals.shift(),H()},addDiary(E,B){E&&(o.pebble.diary.push({day:o.world.day,weekday:So(o),time:Cn(o),text:String(E).slice(0,4e3),kind:B}),M.toast(B==="night"?"Pebble wrote in his diary before bed":"Pebble wrote something in his diary"),M.refresh("diary"),T.save())},addRequest(E,B){const Y=o.pebble.requests;if(!E)return{ok:!1,text:"You thought about asking for something but couldn't decide what."};if(Y.some(J=>J.status==="pending"))return{ok:!1,text:"You already asked for something and haven't heard back yet. Asking twice would be a bit much."};if(Y.some(J=>J.day===o.world.day))return{ok:!1,text:"You already asked for something today. It'd feel greedy to ask again before tomorrow."};const K={id:"r"+Date.now().toString(36),day:o.world.day,time:Cn(o),text:String(E).slice(0,140),reason:String(B||"").slice(0,400),status:"pending"};return Y.push(K),Y.length>40&&Y.shift(),M.toast("Pebble has a request for you"),M.refresh("requests"),b.ui(),T.save(),{ok:!0,text:`You asked for "${K.text}". Now you wait to hear back.`}},mindContext:()=>({surroundings:C.surroundings()})};ni(.86,"Pebble is stretching…"),await ei();const S=new j1(T);T.pebble=S;const C=new ib(T);T.mind=C,C.cheap=ue.cheap;const M=new lb(T,{camera:E=>{ue.camera=E,Di(),_.setMode(E,S),M.setCamera(E)},quality:E=>{ue.quality=E,ue.autoQuality=!1,Di(),N()},timeSpeed:E=>{ue.timeSpeed=E,o.world.timeSpeed=E,Di()},pauseMind:E=>{C.setPaused(E),M.syncToolbar()},cheap:E=>{ue.cheap=E,Di(),C.setCheap(E)},sound:E=>{ue.sound=E,Di(),b.setEnabled(E),M.syncToolbar()},tts:E=>{ue.tts=E,Di(),w.setEnabled(E)},saveSettings:Di,answer:(E,B,Y)=>Z(E,B,Y),reset:()=>{H1();try{localStorage.removeItem(Wl)}catch{}location.reload()}});T.ui=M;const _=new Mb(i,s);S.spawn(),_.setMode(ue.camera,S),M.setCamera(ue.camera),w.setEnabled(ue.tts);const y=["smooth grey pebble","lost mitten","bottle cap","gull feather","old ticket stub","seashell","glass marble","four-leaf clover","shiny coin","paper crane","rubber duck","key on a ribbon"],P=new Me({color:"#fff3d6",emissive:"#ffcf7a",emissiveIntensity:.6,roughness:.4});function k(E,B,Y){const K=new Mt(new Ol(.13),P);K.position.set(B,.32,Y),K.castShadow=!0,n.add(K),g.push(K);const J={name:E,x:B,z:Y,mesh:K,taken:!1};return T.findables.push(J),J}function U(E){for(const Y of T.findables)n.remove(Y.mesh);T.findables.length=0;const B=yn(E*9973+7);for(let Y=0;Y<10;Y++){const K=u.nodes[Math.floor(B()*u.nodes.length)];k(y[Math.floor(B()*y.length)],K.x+B.range(-1.2,1.2),K.z+B.range(-1.2,1.2))}}U(o.world.day);const W=new ke;n.add(W),g.push(W);function H(){W.clear();const E=Ut.art_alley;if(!E)return;const B=Math.sin(E.yaw),Y=Math.cos(E.yaw),K=Math.cos(E.yaw),J=-Math.sin(E.yaw);o.world.murals.forEach((ct,rt)=>{const xt=(rt-1.5)*3.4,L=new Mt(new Qe(3,2.2),new Me({map:Ta(ct.seed),roughness:.9}));L.position.set(E.door[0]-B*1.45+K*xt,2.4,E.door[1]-Y*1.45+J*xt),L.rotation.y=E.yaw,W.add(L)})}H();function Z(E,B,Y){const K=o.pebble.requests.find(J=>J.id===E);!K||K.status!=="pending"||(K.status=B?"granted":"declined",K.note=String(Y||"").slice(0,300),K.answered=Cn(o),B&&(K.effect=z(K)),C.notice(`You heard back about your request for "${K.text}".`),C.nextAt=0,M.refresh("requests"),b.ui(),T.save())}function z(E){const B=E.text.toLowerCase(),Y=o.pebble,K=B.match(/\$\s?(\d+)|(\d+)\s*(?:dollars|bucks)/);if(K||/\b(money|cash|dollars|bucks)\b/.test(B)){const rt=Math.max(5,Math.min(60,Number(K?.[1]||K?.[2])||20));return S.earn(rt,"a gift"),`$${rt} turned up in an envelope with your name on it.`}const J=Object.keys(yi).sort((rt,xt)=>xt.length-rt.length).find(rt=>B.includes(rt));if(J)return Y.inventory.push(J),`A parcel with a ${J} was waiting at your door${mo[J]?" (you could wear it)":""}.`;const ct=E.text.replace(/^(a|an|some|the)\s+/i,"").slice(0,60);return Y.inventory.push({type:"gift",title:ct,item:ct}),`"${ct}" showed up outside your flat, tied with a ribbon. It's in your things now.`}m.onSocial=(E,B,Y)=>{S.interior||Math.hypot(E.x-S.pos.x,E.z-S.pos.z)<18&&C.notice(`${E.name} and ${B.name} are ${Y==="argue"?"having a bit of an argument":Y==="laugh"?"laughing about something":"chatting"} nearby.`)},f.onTramStop=E=>{Math.hypot(f.tram.x-i.position.x,f.tram.z-i.position.z)<80&&b.tramBell()},h.onThunder=()=>b.thunder(),d.onBoom=(E,B)=>{b.ctx&&b.enabled&&!S.interior&&b.burst("lowpass",300,.6,.25)};function N(){const E=ue.quality;e.setPixelRatio(E==="low"?Math.min(devicePixelRatio,Ed?.85:1):E==="medium"?Math.min(devicePixelRatio,1.5):Math.min(devicePixelRatio,2));const B=E!=="low"&&!0;e.shadowMap.enabled!==B&&(e.shadowMap.enabled=B,n.traverse(K=>{K.material&&[].concat(K.material).forEach(J=>J.needsUpdate=!0)}));const Y=E==="high"?2048:1024;a.sun.shadow.mapSize.x!==Y&&(a.sun.shadow.mapSize.set(Y,Y),a.sun.shadow.map?.dispose(),a.sun.shadow.map=null),v.enabled=E!=="low",S.body.setFurQuality(E),x.setPixelRatio?.(e.getPixelRatio()),x.setSize(innerWidth,innerHeight)}N();const j=()=>{i.aspect=innerWidth/innerHeight,i.fov=i.aspect<.8?72:i.aspect<1.2?60:50,i.updateProjectionMatrix()};j(),addEventListener("resize",()=>{e.setSize(innerWidth,innerHeight),x.setSize(innerWidth,innerHeight),j()}),ni(.94,"Turning on the streetlights…"),await ei(),_.update(.016,S);try{e.compile(n,i)}catch{}ni(1,"Ready"),await ei(),Ii("loading").classList.add("fade"),setTimeout(()=>Ii("loading").remove(),900);let Q=!1;const mt=()=>{Q||(Q=!0,b.setEnabled(ue.sound),r&&fa(o,"woke up in your flat","event"),C.checkHealth())};M.showStart(mt),M.mindStatus(C.status()),M.updateBadge(),o.pebble.lastThought&&M.thought(o.pebble.lastThought);const Bt=new pd;let Vt=0,ee=60,te=0,tt=0,nt=0,vt=0,Pt=0,Tt=!1;const jt=new D,he=new D,Ft=E=>{const B=m.interiorView&&E.state==="inside"?m.interiorView.slot(E):E;return he.set(B.x,2.3,B.z)};document.addEventListener("visibilitychange",()=>{Tt=document.hidden,Tt?(T.save(),b.suspend(!0),speechSynthesis?.cancel?.()):(Bt.getDelta(),b.suspend(!1),b.ctx&&b.enabled&&(b.master.gain.setValueAtTime(0,b.ctx.currentTime),b.master.gain.setTargetAtTime(.8,b.ctx.currentTime,1.2)))}),addEventListener("pagehide",()=>T.save());function at(){if(Tt){requestAnimationFrame(at);return}const E=Bt.getDelta(),B=Math.min(E,.1);ee=ee*.95+1/Math.max(E,.001)*.05,ce.uTime.value+=B;const Y=O1[ue.timeSpeed]??1,K=Q?B*(T.sleeping?Math.max(Y*20,6):Y):0,J=T.sleeping?"sleep":S.path?S.pathRun?"run":"walk":S.activity==="work"?"work":S.forcedMode==="sit"?"sit":S.ride?"ride":"idle";if(W1(o,K,J)&&(bh(o),U(o.world.day),M.toast(`Day ${o.world.day}: ${So(o)}`),o.world.festival&&C.notice(`It's the day of the ${o.world.festival.name}.`)),tt+=K,tt>10){tt=0;const $=gh(o);$&&(a.weather.kind=$,C.notice(`The weather changed: now it's ${$==="storm"?"a thunderstorm":$}.`))}const ct=on(o),rt=xo(ct);if(S.interior?i.position:S.pos,a.update(ct,B,S.interior?_.controls.target:S.pos,ue.quality),S.interior&&(n.fog.near=1e4,n.fog.far=2e4,S.interior.group.userData.winMat?.color.set(rt>.5?"#1c2440":o.world.weather==="clear"?"#bcd8f0":"#a9b3bd")),h.update(B,i.position),!S.interior){c.update(ce.uTime.value,B,S.pos,ue.quality),l1();for(const $ of l.animated)$.update(ce.uTime.value,B,{hour:ct})}const xt=o.world.festival;d.update(B,!!(xt?.fireworks&&ct>=20.5&&ct<23.5&&!S.interior&&Q),{x:l.pierX||0,z:zt});const L=m.near(S.pos.x,S.pos.z,200);S.interior||L.push(S.pos);const A=S.interior?{x:S.interior.place.door[0],z:S.interior.place.door[1]}:S.pos;f.update(B,A,L),m.update(B,ct,A,S.interior?null:S.pos,f.obstacles()),S.update(B,K),Q&&C.update(),_.update(B,S),S.interior&&(S.interior.group.userData.front.visible=i.position.z<Ae.z+5.7);const V=M.panelOpen&&innerWidth>760?-193:0;if(Vt+=(V-Vt)*Math.min(1,B*6),Math.abs(Vt)>.5?i.setViewOffset(innerWidth,innerHeight,-Vt,0,innerWidth,innerHeight):i.view?.enabled&&i.clearViewOffset(),nt-=B,nt<0&&!S.interior){nt=.4;const $=n.fog.far+80,it=ue.quality==="high"?340:ue.quality==="medium"?240:160;for(const q of l.chunks){const Et=Math.hypot(q.userData.center.x-i.position.x,q.userData.center.z-i.position.z);q.visible=Et<$;for(const ut of q.children)ut.userData.props&&(ut.visible=Et<it)}}if(v.strength=.18+ce.uNight.value*.32,v.threshold=.9-ce.uNight.value*.15,x.render(),S.body.j.head.getWorldPosition(jt),jt.y+=.55,M.update(i,jt,Ft,ee),b.update(B,{inside:!!S.interior,night:rt>.5,rain:a.weather.rain||0,storm:a.weather.storm||0,snow:a.weather.snow||0,sea:S.interior?0:Math.max(0,Math.min(1,1-(zt-S.pos.z)/60)),park:S.district()==="park"?1:0}),ue.autoQuality&&Q&&ue.quality!=="low"&&(vt+=E,Pt++,vt>8)){const $=Pt/vt;vt=0,Pt=0,$<26&&(ue.quality=ue.quality==="high"?"medium":"low",Di(),N(),M.toast(`Graphics set to ${ue.quality} to keep things smooth`))}te+=B,te>10&&Q&&(te=0,T.save()),requestAnimationFrame(at)}at(),window.__ready=!0}Ab().catch(s=>{console.error(s),ni(1,"Something went wrong building the city. Try reloading.")});
