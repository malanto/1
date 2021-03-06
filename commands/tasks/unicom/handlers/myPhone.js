const util = require("util");

/**
 * pick a random user-agent
 * @param {object} options must be included appversion and user
 */
const useragent = (options) => {
  let USER_AGENTS = [...USER_AGENTS_ANDROID];
  return util.format(
    USER_AGENTS[randomNumber(0, USER_AGENTS.length)],
    options.appversion || "8.0102",
    options.user
  );
};

// androidCodeId: "945757409",
// iosCodeId: "945757412",
const getCodeId = (useragent) => {
  return useragent.indexOf("Android") != -1 ? 945757409 : 945757412;
};

//   `Mozilla/5.0 (Linux; Android 7.1.2; SM-G977N Build/LMY48Z; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36;devicetype{deviceBrand:samsung,deviceModel:SM-G977N};{yw_code:};unicom{version:android@8.0102,desmobile:${options.user}}`;
const USER_AGENTS_ANDROID = [
 // "Mozilla/5.0 (Linux; Android 7.1.2; SM-G977N Build/LMY48Z; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.143 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:samsung,deviceModel:SM-G977N};{yw_code:}",
  "Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1-wesley_iui-19.08.24; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.136 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:Xiaomi,deviceModel:MI 6};{yw_code:}",
  "Mozilla/5.0 (Linux; Android 10; V1981A Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.96 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:vivo,deviceModel:V1981A};{yw_code:}",
  "Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/76.0.3809.89 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:Xiaomi,deviceModel:MI 6};{yw_code:}", //小米6
  "Mozilla/5.0 (Linux; Android 10; EVR-AL00 Build/HUAWEIEVR-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.186 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:HUAWEI,deviceModel:EVR-AL00};{yw_code:}", //华为Mate 20 X
  "Mozilla/5.0 (Linux; Android 9; JKM-AL00b Build/HUAWEIJKM-AL00b; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 Mobile Safari/537.3; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:HUAWEI,deviceModel:JKM-AL00b};{yw_code:}", //华为nova4
  "Mozilla/5.0 (Linux; Android 10; CLT-AL00 Build/HUAWEICLT-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/76.0.3809.89 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:HUAWEI,deviceModel:HUAWEICLT-AL00};{yw_code:}",
  "Mozilla/5.0 (Linux; Android 8.1.0; PBAM00 Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/76.0.3809.89 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:OPPO,deviceModel:PBAM00};{yw_code:}", //OPPO A5
  "Mozilla/5.0 (Linux; Android 10; SEA-AL10 Build/HUAWEISEA-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:HUAWEI,deviceModel:SEA-AL10};{yw_code:}", // 华为nova5 Pro
  "Mozilla/5.0 (Linux; Android 11; M2002J9E Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:Xiaomi,deviceModel:M2002J9E};{yw_code:}", // 小米10青春 
  "Mozilla/5.0 (Linux; Android 10; Mi 10 Pro Build/QKQ1.191117.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.62 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:Xiaomi,deviceModel:Mi 10 Pro};{yw_code:}", // 小米10 pro
  "Mozilla/5.0 (Linux; Android 9; PBBM00 Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:OPPO,deviceModel:PBBM00};{yw_code:}", // OPPO A7x
  "Mozilla/5.0 (Linux; Android 10; PDPM00 Build/QKQ1.200216.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:OPPO,deviceModel:PDPM00};{yw_code:}", // Oppo Reno 4
  "Mozilla/5.0 (Linux; Android 10; PDCM00 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:OPPO,deviceModel:PDCM00};{yw_code:}", // OPPO Reno3
  "Mozilla/5.0 (Linux; Android 10; PACM00 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:OPPO,deviceModel:PACM00};{yw_code:}", // OPPO R15
  "Mozilla/5.0 (Linux; Android 9; ANE-AL00 Build/HUAWEIANE-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.62 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:HUAWEI,deviceModel:ANE-AL00};{yw_code:}",//华为 nova 3e
  "Mozilla/5.0 (Linux; Android 10; VOG-AL10 Build/HUAWEIVOG-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:HUAWEI,deviceModel:VOG-AL10};{yw_code:}", //华为 P30 Pro
  "Mozilla/5.0 (Linux; Android 10; TAS-AL00 Build/HUAWEITAS-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:HUAWEI,deviceModel:TAS-AL00};{yw_code:}",//华为Mate30
  "Mozilla/5.0 (Linux; Android 10; ELS-AN10 Build/HUAWEIELS-AN10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:HUAWEI,deviceModel:ELS-AN10};{yw_code:}",//华为P40 Pro
  "Mozilla/5.0 (Linux; Android 9; JKM-AL00 Build/HUAWEIJKM-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:HUAWEI,deviceModel:JKM-AL00};{yw_code:}", //华为畅享9 Plus
  "Mozilla/5.0 (Linux; Android 10; LIO-AN00 Build/HUAWEILIO-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 Mobile Safari/537.36; unicom{version:android@%s,desmobile:%s};devicetype{deviceBrand:HUAWEI,deviceModel:LIO-AN00};{yw_code:}", //华为Mate 30 Pro
];
// eslint-disable-next-line no-unused-vars
const USER_AGENTS_IOS = [
  "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148  unicom{version:iphone_c@%s,desmobile:%s}{systemVersion:dis}{yw_code:}",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148   unicom{version:iphone_c@%s,desmobile:%s}{systemVersion:dis}{yw_code:}",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148  unicom{version:iphone_c@%s,desmobile:%s}{systemVersion:dis}{yw_code:}",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 12_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@%s,desmobile:%s}{systemVersion:dis}{yw_code:}",
];
function randomNumber(min = 0, max = 100) {
  return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}

module.exports = {
  useragent,
  randomNumber,
  getCodeId,
};
