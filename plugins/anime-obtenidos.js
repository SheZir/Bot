/*
• @David-Chian
- https://github.com/David-Chian
*/

function _0x53f3(){const _0x3c2195=['\x20en\x20total.\x0a╰──────┄\x20♢\x20┄──────','492746ubENVO','chat','jid','url','sendMessage','repository','data.json','Personajes\x20Obtenidos','1lJTjqM','3855012bogtFi','ginfo','tags','Tus\x20Personajes','Error\x20al\x20leer\x20package.json:','add','utf-8','obtenido','reply','single_select','usuarios','key','anime','3629087kPvVyE','existsSync','forEach','filter','2488lgqYDG','Personaje\x20','name','readFileSync','sender','./src/JSON/characters.json','obtenidos','length','help','🚩\x20𝑬𝒔𝒕𝒆\x20𝒄𝒐𝒎𝒂𝒏𝒅𝒐\x20𝒔𝒐𝒍𝒐\x20𝒆𝒔𝒕𝒂\x20𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆\x20𝒑𝒂𝒓𝒂\x20𝑨𝑰\x20𝒀𝒂𝒆𝒎𝒐𝒓𝒊.\x0a🌟\x20https://github.com/OfcDiego/YaemoriBot-MD','Lista\x20de\x20Personajes','command','map','\x20𝑊𝐹\x20♡\x0a┊𝙏𝙤𝙩𝙖𝙡\x20𝙙𝙚\x20𝙒𝙁𝙘𝙤𝙞𝙣𝙨:\x0a│\x20','4mULIsQ','parse','977889frcAOA','7esRPxZ','web','user','582065BvtzEm','╭──────┄\x20♡\x20┄──────\x0a│╽𝑻.𝑼\x20𝑰.𝑵.𝑽.𝑬.𝑵.𝑻.𝑨.𝑹.𝑰.𝑶╽\x0a┊𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙟𝙚𝙨:\x0a⎆\x20','relayMessage','git+https://github.com/OfcDiego/YaemoriBot-MD.git','split','\x0a┊𝙋𝙤𝙧𝙘𝙚𝙣𝙩𝙖𝙟𝙚:\x0a⎆\x20','message','10yMmWtg','3798IdsSKa','Selecciona\x20para\x20ver\x20la\x20imagen\x20de\x20','1268004jjTjnB'];_0x53f3=function(){return _0x3c2195;};return _0x53f3();}function _0x16e1(_0x3757e0,_0x3c28b8){const _0x53f35e=_0x53f3();return _0x16e1=function(_0x16e128,_0x5da868){_0x16e128=_0x16e128-0xb7;let _0x3d6c30=_0x53f35e[_0x16e128];return _0x3d6c30;},_0x16e1(_0x3757e0,_0x3c28b8);}const _0x43c81d=_0x16e1;(function(_0x49d84b,_0x4af10c){const _0x2a7e19=_0x16e1,_0xf2c15b=_0x49d84b();while(!![]){try{const _0x3642e8=parseInt(_0x2a7e19(0xbc))/0x1*(-parseInt(_0x2a7e19(0xee))/0x2)+parseInt(_0x2a7e19(0xde))/0x3*(parseInt(_0x2a7e19(0xdc))/0x4)+-parseInt(_0x2a7e19(0xe2))/0x5+-parseInt(_0x2a7e19(0xec))/0x6*(-parseInt(_0x2a7e19(0xdf))/0x7)+parseInt(_0x2a7e19(0xce))/0x8*(parseInt(_0x2a7e19(0xea))/0x9)+-parseInt(_0x2a7e19(0xe9))/0xa*(parseInt(_0x2a7e19(0xca))/0xb)+parseInt(_0x2a7e19(0xbd))/0xc;if(_0x3642e8===_0x4af10c)break;else _0xf2c15b['push'](_0xf2c15b['shift']());}catch(_0x5291bb){_0xf2c15b['push'](_0xf2c15b['shift']());}}}(_0x53f3,0x4887f));import _0x17e102 from'fs';import{prepareWAMessageMedia,generateWAMessageFromContent,getDevice}from'@whiskeysockets/baileys';const obtenerDatos=()=>{const _0x1af9a6=_0x16e1;return _0x17e102[_0x1af9a6(0xcb)](_0x1af9a6(0xba))?JSON[_0x1af9a6(0xdd)](_0x17e102[_0x1af9a6(0xd1)](_0x1af9a6(0xba),_0x1af9a6(0xc3))):{'usuarios':{},'personajesReservados':[]};},obtenerPersonajes=()=>{const _0x342320=_0x16e1;return _0x17e102[_0x342320(0xcb)](_0x342320(0xd3))?JSON[_0x342320(0xdd)](_0x17e102[_0x342320(0xd1)](_0x342320(0xd3),_0x342320(0xc3))):[];},contarTotalPersonajes=()=>{const _0x486442=_0x16e1;if(_0x17e102[_0x486442(0xcb)]('./src/JSON/characters.json')){const _0x1dd61b=_0x17e102[_0x486442(0xd1)](_0x486442(0xd3),_0x486442(0xc3))[_0x486442(0xe6)]('\x0a');return _0x1dd61b[_0x486442(0xd5)]-0x2;}else return 0x0;};let handler=async(_0x5e4362,{conn:_0x188602,usedPrefix:_0x429c7a})=>{const _0x4ff486=_0x16e1,_0x296048=_0x5e4362[_0x4ff486(0xd2)];let _0x4008f7=obtenerDatos(),_0x34a3b4=obtenerPersonajes(),_0x3d77a1=contarTotalPersonajes();if(!_0x4008f7[_0x4ff486(0xc7)]||!(_0x296048 in _0x4008f7[_0x4ff486(0xc7)])||_0x4008f7[_0x4ff486(0xc7)][_0x296048]['characters'][_0x4ff486(0xd5)]===0x0){_0x188602[_0x4ff486(0xc5)](_0x5e4362['chat'],'*No\x20tienes\x20ningún\x20objeto\x20en\x20tu\x20inventario\x20😹🫵!*',_0x5e4362);return;}const _0x187b7f=()=>{const _0x14a5d1=_0x4ff486;try{const _0x4589dc=JSON[_0x14a5d1(0xdd)](_0x17e102[_0x14a5d1(0xd1)]('./package.json',_0x14a5d1(0xc3)));if(_0x4589dc[_0x14a5d1(0xd0)]!=='YaemoriBot-MD')return![];if(_0x4589dc[_0x14a5d1(0xb9)][_0x14a5d1(0xb7)]!==_0x14a5d1(0xe5))return![];return!![];}catch(_0x43fe7e){return console['error'](_0x14a5d1(0xc1),_0x43fe7e),![];}};if(!_0x187b7f()){await _0x188602[_0x4ff486(0xb8)](message[_0x4ff486(0xef)],_0x4ff486(0xd7),_0x5e4362,rcanal);return;}const {characters:_0x4645c3,totalRwcoins:_0x1b4226}=_0x4008f7['usuarios'][_0x296048],_0x264874=_0x4645c3[_0x4ff486(0xd5)];let _0x252ada=new Set();Object['values'](_0x4008f7[_0x4ff486(0xc7)])[_0x4ff486(0xcc)](_0x3e8b91=>{const _0x2d4c23=_0x4ff486;_0x3e8b91['characters']['forEach'](_0xf79957=>_0x252ada[_0x2d4c23(0xc2)](_0xf79957[_0x2d4c23(0xd0)]));});let _0xfeeba9=_0x34a3b4[_0x4ff486(0xcd)](_0x152932=>!_0x252ada['has'](_0x152932[_0x4ff486(0xd0)])),_0x54ab8e=_0xfeeba9[_0x4ff486(0xd5)];const _0x396267=_0x4ff486(0xe3)+_0x264874+_0x4ff486(0xdb)+_0x1b4226+_0x4ff486(0xe7)+(_0x264874/_0x3d77a1*0x64)['toFixed'](0x2)+'%\x0a┊𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙟𝙚𝙨\x20𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚𝙨:\x0a⎆\x20'+_0x54ab8e+'\x20de\x20'+_0x3d77a1+_0x4ff486(0xed);let _0x3ae2e6=_0x4645c3[_0x4ff486(0xda)]((_0x32b4a2,_0x528d08)=>({'header':_0x32b4a2[_0x4ff486(0xd0)],'title':_0x4ff486(0xcf)+(_0x528d08+0x1),'description':_0x4ff486(0xeb)+_0x32b4a2[_0x4ff486(0xd0)],'id':_0x429c7a+'character\x20'+_0x32b4a2[_0x4ff486(0xd0)]}));const _0x3d5258=await getDevice(_0x5e4362[_0x4ff486(0xc8)]['id']);if(_0x3d5258!=='desktop'&&_0x3d5258!==_0x4ff486(0xe0)){const _0x256965={'body':{'text':_0x396267},'footer':{'text':_0x4ff486(0xbb)},'nativeFlowMessage':{'buttons':[{'name':_0x4ff486(0xc6),'buttonParamsJson':JSON['stringify']({'title':_0x4ff486(0xc0),'sections':[{'title':_0x4ff486(0xd8),'rows':_0x3ae2e6}]})}],'messageParamsJson':''}};let _0x471942=generateWAMessageFromContent(_0x5e4362['chat'],{'viewOnceMessage':{'message':{'interactiveMessage':_0x256965}}},{'userJid':_0x188602[_0x4ff486(0xe1)][_0x4ff486(0xf0)],'quoted':_0x5e4362});_0x188602[_0x4ff486(0xe4)](_0x5e4362[_0x4ff486(0xef)],_0x471942[_0x4ff486(0xe8)],{'messageId':_0x471942[_0x4ff486(0xc8)]['id']});}else _0x188602[_0x4ff486(0xc5)](_0x5e4362[_0x4ff486(0xef)],_0x396267,_0x5e4362);};handler[_0x43c81d(0xd6)]=[_0x43c81d(0xd4)],handler[_0x43c81d(0xbf)]=[_0x43c81d(0xc9)],handler[_0x43c81d(0xd9)]=[_0x43c81d(0xd4),_0x43c81d(0xbe),_0x43c81d(0xc4),'ob'];export default handler;